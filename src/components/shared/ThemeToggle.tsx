'use client';

import { useThemeStore } from '@/store/theme';
import type { Theme } from '@/types';

const themes: { key: Theme; icon: string; label: string }[] = [
    { key: 'classic', icon: '✦', label: 'Classic' },
    { key: 'dark', icon: '🌙', label: 'Dark' },
    { key: 'light', icon: '☀️', label: 'Light' },
];

export default function ThemeToggle() {
    const { theme, setTheme } = useThemeStore();
    const mode = useThemeStore((s) => s.mode);

    // Hide the floating toggle when in CLI mode
    if (mode === 'cli') return null;

    const currentIndex = themes.findIndex((t) => t.key === theme);

    const cycleTheme = () => {
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex].key);
    };

    const currentTheme = themes[currentIndex] || themes[0];

    return (
        <button
            onClick={cycleTheme}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center text-lg theme-transition glass glass-hover accent-glow cursor-pointer"
            aria-label={`Current theme: ${currentTheme.label}. Click to switch theme.`}
            title={`Theme: ${currentTheme.label}`}
            style={{
                boxShadow: '0 4px 20px var(--shadow)',
            }}
        >
            <span className="transition-transform duration-300 hover:scale-110">
                {currentTheme.icon}
            </span>
        </button>
    );
}
