'use client';

import { useEffect } from 'react';
import { useThemeStore, initializeTheme } from '@/store/theme';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const setTheme = useThemeStore((s) => s.setTheme);
    const setMode = useThemeStore((s) => s.setMode);

    useEffect(() => {
        const { theme, mode } = initializeTheme();
        setTheme(theme);
        setMode(mode);
    }, [setTheme, setMode]);

    return <>{children}</>;
}
