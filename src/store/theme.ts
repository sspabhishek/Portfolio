'use client';

import { create } from 'zustand';
import type { Theme } from '@/types';

type Mode = 'ui' | 'cli';

interface ThemeStore {
  theme: Theme;
  mode: Mode;
  setTheme: (theme: Theme) => void;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: 'classic',
  mode: 'ui',
  setTheme: (theme: Theme) => {
    set({ theme });
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-theme', theme);
      // Only apply the CSS theme if we're not in CLI mode
      // (CLI mode always uses the 'cli' data-theme for green terminal styling)
      if (get().mode !== 'cli') {
        document.documentElement.setAttribute('data-theme', theme);
      }
    }
  },
  setMode: (mode: Mode) => {
    set({ mode });
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-mode', mode);
      if (mode === 'cli') {
        // Apply CLI terminal styling
        document.documentElement.setAttribute('data-theme', 'cli');
      } else {
        // Restore the user's chosen visual theme
        document.documentElement.setAttribute('data-theme', get().theme);
      }
    }
  },
  toggleMode: () => {
    const current = get().mode;
    const next = current === 'ui' ? 'cli' : 'ui';
    const store = get();
    set({ mode: next });
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-mode', next);
      if (next === 'cli') {
        document.documentElement.setAttribute('data-theme', 'cli');
      } else {
        document.documentElement.setAttribute('data-theme', store.theme);
      }
    }
  },
}));

export function initializeTheme(): { theme: Theme; mode: Mode } {
  if (typeof window === 'undefined') return { theme: 'classic', mode: 'ui' };
  const storedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
  const theme = storedTheme && ['classic', 'dark', 'light'].includes(storedTheme) ? storedTheme : 'classic';

  const storedMode = localStorage.getItem('portfolio-mode') as Mode | null;
  const mode = storedMode && ['ui', 'cli'].includes(storedMode) ? storedMode : 'ui';

  // Apply the correct CSS theme based on mode
  if (mode === 'cli') {
    document.documentElement.setAttribute('data-theme', 'cli');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }

  return { theme, mode };
}
