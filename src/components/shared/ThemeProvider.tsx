'use client';

import { useEffect } from 'react';
import { useThemeStore, initializeTheme } from '@/store/theme';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const setMode = useThemeStore((s) => s.setMode);

    useEffect(() => {
        const { mode } = initializeTheme();
        setMode(mode);
    }, [setMode]);

    return <>{children}</>;
}
