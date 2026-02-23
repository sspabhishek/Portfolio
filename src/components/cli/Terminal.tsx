'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useThemeStore } from '@/store/theme';
import { executeCommand, getAutocompleteSuggestions } from '@/lib/commands';
import type { TerminalLine, Theme } from '@/types';

let lineIdCounter = 0;
function genId(): string {
    return `l-${++lineIdCounter}-${Date.now()}`;
}

/** Parse {{tag}}...{{/tag}} markup into styled spans */
function renderRichLine(text: string | undefined): React.ReactNode {
    if (!text) return <span>{text ?? ''}</span>;

    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    const patterns: Array<{ regex: RegExp; render: (match: string) => React.ReactNode }> = [
        { regex: /\{\{cmd\}\}(.*?)\{\{\/cmd\}\}/, render: (m) => <span key={key++} style={{ color: 'var(--accent)', fontWeight: 600 }}>{m}</span> },
        { regex: /\{\{accent\}\}(.*?)\{\{\/accent\}\}/, render: (m) => <span key={key++} style={{ color: 'var(--accent)' }}>{m}</span> },
        { regex: /\{\{bold\}\}(.*?)\{\{\/bold\}\}/, render: (m) => <span key={key++} style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{m}</span> },
        { regex: /\{\{dim\}\}(.*?)\{\{\/dim\}\}/, render: (m) => <span key={key++} style={{ color: 'var(--text-muted)' }}>{m}</span> },
        { regex: /\{\{category\}\}(.*?)\{\{\/category\}\}/, render: (m) => <span key={key++} style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: '4px' }}>{m}</span> },
        { regex: /\{\{type\}\}(.*?)\{\{\/type\}\}/, render: (m) => <span key={key++} style={{ color: 'var(--accent)' }}>{m}</span> },
        { regex: /\{\{date\}\}(.*?)\{\{\/date\}\}/, render: (m) => <span key={key++} style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono, monospace)' }}>{m}</span> },
        { regex: /\{\{success\}\}(.*?)\{\{\/success\}\}/, render: (m) => <span key={key++} style={{ color: '#22c55e' }}>{m}</span> },
        { regex: /\{\{new\}\}(.*?)\{\{\/new\}\}/, render: (m) => <span key={key++} className="inline-flex items-center justify-center text-[9px] font-bold px-1.5 py-0.5 rounded ml-1" style={{ backgroundColor: 'var(--accent)', color: 'var(--bg-primary)' }}>{m}</span> },
    ];

    while (remaining.length > 0) {
        let earliestIndex = Infinity;
        let earliestPattern: (typeof patterns)[0] | null = null;
        let earliestMatch: RegExpExecArray | null = null;

        for (const p of patterns) {
            const match = p.regex.exec(remaining);
            if (match && match.index < earliestIndex) {
                earliestIndex = match.index;
                earliestPattern = p;
                earliestMatch = match;
            }
        }

        if (earliestMatch && earliestPattern) {
            if (earliestIndex > 0) {
                parts.push(<span key={key++}>{remaining.slice(0, earliestIndex)}</span>);
            }
            parts.push(earliestPattern.render(earliestMatch[1]));
            remaining = remaining.slice(earliestIndex + earliestMatch[0].length);
        } else {
            parts.push(<span key={key++}>{remaining}</span>);
            break;
        }
    }

    return <>{parts}</>;
}

const WELCOME_LINES: TerminalLine[] = [
    { id: 'w0', type: 'system', content: '' },
    { id: 'w1', type: 'system', content: '  +----------------------------------------------+' },
    { id: 'w2', type: 'system', content: '  |                                              |' },
    { id: 'w3', type: 'system', content: '  |     Welcome to Abhishek\'s Portfolio CLI      |' },
    { id: 'w4', type: 'system', content: '  |                                              |' },
    { id: 'w5', type: 'system', content: '  |  Type \'help\' to get started                  |' },
    { id: 'w6', type: 'system', content: '  |                                              |' },
    { id: 'w7', type: 'system', content: '  +----------------------------------------------+' },
    { id: 'w8', type: 'system', content: '' },
];

export default function Terminal() {
    const [lines, setLines] = useState<TerminalLine[]>(WELCOME_LINES);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isAnimating, setIsAnimating] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const setTheme = useThemeStore((s) => s.setTheme);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [lines]);

    useEffect(() => {
        inputRef.current?.focus();

        const handleSlashFocus = (e: KeyboardEvent) => {
            if (e.key === '/' && document.activeElement !== inputRef.current) {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener('keydown', handleSlashFocus);
        return () => window.removeEventListener('keydown', handleSlashFocus);
    }, []);

    // Re-focus input after typewriter animation finishes
    useEffect(() => {
        if (!isAnimating) {
            // Small timeout ensures the disabled attribute is fully removed by React before focusing
            setTimeout(() => inputRef.current?.focus(), 10);
        }
    }, [isAnimating]);

    const typewriterOutput = useCallback(
        (outputLines: string[], type: 'output' | 'error' | 'system') => {
            setIsAnimating(true);
            let i = 0;
            const addLine = () => {
                if (i < outputLines.length) {
                    const lineContent = outputLines[i];
                    setLines((prev) => [...prev, { id: genId(), type, content: lineContent || '' }]);
                    i++;
                    setTimeout(addLine, 25);
                } else {
                    setIsAnimating(false);
                }
            };
            addLine();
        },
        []
    );

    const handleSubmit = useCallback(() => {
        if (isAnimating) return;
        const trimmed = input.trim();

        setLines((prev) => [...prev, { id: genId(), type: 'input', content: trimmed }]);
        if (trimmed) setHistory((prev) => [trimmed, ...prev].slice(0, 50));
        setHistoryIndex(-1);
        setInput('');
        if (!trimmed) return;

        const result = executeCommand(trimmed);

        switch (result.type) {
            case 'clear':
                setLines([]);
                break;
            case 'navigate':
                if (result.content) typewriterOutput(result.content, 'output');
                if (result.target) setTimeout(() => router.push(result.target!), 800);
                break;
            case 'error':
                if (result.content) typewriterOutput(result.content, 'error');
                break;
            case 'output': {
                const parts = trimmed.split(/\s+/);
                if (parts[0]?.toLowerCase() === 'theme' && parts[1]) {
                    const valid = ['classic', 'dark', 'light'];
                    if (valid.includes(parts[1].toLowerCase())) {
                        setTheme(parts[1].toLowerCase() as Theme);
                    }
                }
                if (parts[0]?.toLowerCase() === 'resume') {
                    setTimeout(() => {
                        const link = document.createElement('a');
                        link.href = '/resume.pdf';
                        link.download = 'resume.pdf';
                        link.click();
                    }, 100);
                }
                if (result.content) typewriterOutput(result.content, 'output');
                break;
            }
        }
    }, [input, isAnimating, typewriterOutput, router, setTheme]);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            switch (e.key) {
                case 'Enter':
                    e.preventDefault();
                    handleSubmit();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    if (history.length > 0) {
                        const ni = Math.min(historyIndex + 1, history.length - 1);
                        setHistoryIndex(ni);
                        setInput(history[ni]);
                    }
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    if (historyIndex > 0) {
                        const ni = historyIndex - 1;
                        setHistoryIndex(ni);
                        setInput(history[ni]);
                    } else {
                        setHistoryIndex(-1);
                        setInput('');
                    }
                    break;
                case 'Tab': {
                    e.preventDefault();
                    const suggestions = getAutocompleteSuggestions(input);
                    if (suggestions.length === 1) {
                        setInput(suggestions[0]);
                    } else if (suggestions.length > 1) {
                        setLines((prev) => [...prev, { id: genId(), type: 'system', content: `  ${suggestions.join('  ')}` }]);
                    }
                    break;
                }
                case 'Escape':
                    e.preventDefault();
                    inputRef.current?.blur();
                    break;
                case 'l':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        setLines([]);
                    }
                    break;
            }
        },
        [handleSubmit, history, historyIndex, input]
    );

    const getLineColor = (type: TerminalLine['type']): string => {
        switch (type) {
            case 'input': return 'var(--text-primary)';
            case 'error': return '#FF6B6B';
            case 'system': return 'var(--accent)';
            default: return 'var(--text-primary)';
        }
    };

    return (
        <div
            className="min-h-screen pt-20 pb-12 px-4 md:px-8 lg:px-16 cursor-text"
            onClick={() => inputRef.current?.focus()}
        >
            {/* Terminal window card */}
            <div
                className="max-w-5xl mx-auto rounded-xl overflow-hidden"
                style={{
                    backgroundColor: 'var(--bg-secondary)',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                }}
            >
                {/* Title bar */}
                <div
                    className="flex items-center px-4 py-3 gap-3"
                    style={{
                        backgroundColor: 'var(--bg-card)',
                        borderBottom: '1px solid var(--border)',
                    }}
                >
                    <div className="flex gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FEBC2E' }} />
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28C840' }} />
                    </div>
                    <span
                        className="flex-1 text-center text-xs terminal-font"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        abhishek@portfolio:~
                    </span>
                    <div className="w-14" />
                </div>

                {/* Terminal body */}
                <div
                    ref={terminalRef}
                    className="overflow-y-auto terminal-font p-4 md:p-6"
                    style={{ minHeight: '60vh', maxHeight: '70vh' }}
                    role="log"
                    aria-live="polite"
                    aria-label="Terminal output"
                    onClick={() => inputRef.current?.focus()}
                >
                    {lines.map((line) => (
                        <div
                            key={line.id}
                            className="min-h-[1.4em] text-[13px] md:text-sm leading-relaxed whitespace-pre-wrap break-words"
                            style={{ color: getLineColor(line.type) }}
                        >
                            {line.type === 'input' ? (
                                <>
                                    <span style={{ color: 'var(--accent)' }}>{'> '}</span>
                                    <span style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>User</span>
                                    <span style={{ color: 'var(--text-muted)' }}>{' > '}</span>
                                    <span style={{ color: 'var(--text-primary)' }}>{line.content}</span>
                                </>
                            ) : (
                                renderRichLine(line.content)
                            )}
                        </div>
                    ))}

                    {/* Active input line */}
                    <div className="flex items-center min-h-[1.4em] text-[13px] md:text-sm mt-1">
                        <span style={{ color: 'var(--accent)' }}>{'> '}</span>
                        <span style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>User</span>
                        <span style={{ color: 'var(--text-muted)' }}>{' > '}</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent outline-none focus:outline-none focus:ring-0 terminal-font text-[13px] md:text-sm"
                            style={{ color: 'var(--text-primary)', outline: 'none', boxShadow: 'none' }}
                            spellCheck={false}
                            autoComplete="off"
                            autoFocus
                            aria-label="Terminal input"
                            disabled={isAnimating}
                        />
                    </div>
                </div>
            </div>

            {/* Focus hint */}
            <div className="max-w-5xl mx-auto mt-4 text-right">
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Press <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>/</kbd> to focus terminal
                </p>
            </div>
        </div>
    );
}
