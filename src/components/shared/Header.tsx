'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useThemeStore } from '@/store/theme';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const mode = useThemeStore((s) => s.mode);
    const toggleMode = useThemeStore((s) => s.toggleMode);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isCliMode = mode === 'cli';

    const navLinks = [
        { href: '/#about', label: 'About' },
        { href: '/#experience', label: 'Experience' },
        { href: '/#projects', label: 'Projects' },
        { href: '/#contact', label: 'Contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 theme-transition ${scrolled ? 'py-3' : 'py-5'}`}
            style={{
                backgroundColor: scrolled ? 'var(--header-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                borderBottom: scrolled ? '2px solid var(--border)' : 'none',
            }}
        >
            <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo — hand-drawn style */}
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight theme-transition"
                    style={{
                        color: 'var(--accent)',
                        fontFamily: isCliMode ? 'JetBrains Mono, monospace' : 'Kalam, cursive',
                    }}
                    aria-label="Home"
                >
                    {isCliMode ? '~/abhishek' : 'A.'}
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-lg theme-transition hover:opacity-100 opacity-70"
                                style={{
                                    color: 'var(--text-primary)',
                                    fontFamily: isCliMode ? 'JetBrains Mono, monospace' : 'Patrick Hand, cursive',
                                }}
                            >
                                {isCliMode ? `> ${link.label.toLowerCase()}` : link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mode Toggle + Mobile Menu */}
                <div className="flex items-center gap-3">
                    {/* CLI / UI Toggle — CLI first, UI second */}
                    <button
                        onClick={toggleMode}
                        className="relative flex items-center w-[88px] h-9 px-1 theme-transition cursor-pointer"
                        style={{
                            backgroundColor: isCliMode ? 'var(--bg-card)' : 'var(--bg-card)',
                            border: isCliMode ? '1px solid var(--border)' : '3px solid var(--border)',
                            borderRadius: isCliMode ? '9999px' : 'var(--radius-wobbly-sm)',
                        }}
                        aria-label={`Switch to ${isCliMode ? 'UI' : 'CLI'} mode`}
                        title={`Switch to ${isCliMode ? 'UI' : 'CLI'} mode`}
                    >
                        <span
                            className="absolute w-10 h-7 theme-transition"
                            style={{
                                backgroundColor: 'var(--accent)',
                                borderRadius: isCliMode ? '9999px' : 'var(--radius-wobbly-sm)',
                                /* CLI is left (0px), UI is right (44px) */
                                transform: isCliMode ? 'translateX(0px)' : 'translateX(44px)',
                                transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        />
                        <span
                            className="relative z-10 flex-1 text-center text-xs font-semibold"
                            style={{
                                color: isCliMode ? 'var(--bg-primary)' : 'var(--text-muted)',
                                fontFamily: 'JetBrains Mono, monospace',
                            }}
                        >
                            CLI
                        </span>
                        <span
                            className="relative z-10 flex-1 text-center text-xs font-semibold"
                            style={{
                                color: isCliMode ? 'var(--text-muted)' : 'var(--bg-primary)',
                                fontFamily: isCliMode ? 'JetBrains Mono, monospace' : 'Patrick Hand, cursive',
                                fontSize: isCliMode ? undefined : '0.85rem',
                            }}
                        >
                            UI
                        </span>
                    </button>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span
                            className={`block w-5 h-0.5 theme-transition origin-center ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`}
                            style={{ backgroundColor: 'var(--text-primary)' }}
                        />
                        <span
                            className={`block w-5 h-0.5 theme-transition ${menuOpen ? 'opacity-0' : ''}`}
                            style={{ backgroundColor: 'var(--text-primary)' }}
                        />
                        <span
                            className={`block w-5 h-0.5 theme-transition origin-center ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}
                            style={{ backgroundColor: 'var(--text-primary)' }}
                        />
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div
                        className="absolute top-full left-0 right-0 md:hidden theme-transition"
                        style={{
                            borderTop: '2px dashed var(--border)',
                            backgroundColor: 'var(--bg-primary)',
                        }}
                    >
                        <ul className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-xl theme-transition"
                                        style={{
                                            color: 'var(--text-primary)',
                                            fontFamily: isCliMode ? 'JetBrains Mono, monospace' : 'Patrick Hand, cursive',
                                        }}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
