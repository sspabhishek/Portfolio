'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useThemeStore } from '@/store/theme';

export default function CliPage() {
    const router = useRouter();
    const setMode = useThemeStore((s) => s.setMode);

    useEffect(() => {
        // Switch to CLI mode and redirect to home where CLI renders
        setMode('cli');
        router.replace('/');
    }, [router, setMode]);

    return (
        <div
            className="min-h-screen flex items-center justify-center terminal-font"
            style={{ backgroundColor: 'var(--bg-primary)' }}
        >
            <div className="text-center">
                <div className="terminal-cursor inline-block mb-4" style={{ width: 12, height: 20 }} />
                <p style={{ color: 'var(--text-muted)' }} className="text-sm">
                    Initializing terminal...
                </p>
            </div>
        </div>
    );
}
