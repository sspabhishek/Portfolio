'use client';

import { create } from 'zustand';

type Mode = 'ui' | 'cli';

interface ThemeStore {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  mode: 'cli',
  setMode: (mode: Mode) => {
    set({ mode });
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-mode', mode);
      if (mode === 'cli') {
        document.documentElement.setAttribute('data-theme', 'cli');
      } else {
        document.documentElement.setAttribute('data-theme', 'classic');
      }
    }
  },
  toggleMode: () => {
    const current = get().mode;
    const next = current === 'ui' ? 'cli' : 'ui';
    set({ mode: next });
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-mode', next);
      if (next === 'cli') {
        document.documentElement.setAttribute('data-theme', 'cli');
      } else {
        document.documentElement.setAttribute('data-theme', 'classic');
      }
    }
  },
}));

export function initializeTheme(): { mode: Mode } {
  if (typeof window === 'undefined') return { mode: 'cli' };

  const storedMode = localStorage.getItem('portfolio-mode') as Mode | null;
  const mode = storedMode && ['ui', 'cli'].includes(storedMode) ? storedMode : 'cli';

  if (mode === 'cli') {
    document.documentElement.setAttribute('data-theme', 'cli');
  } else {
    document.documentElement.setAttribute('data-theme', 'classic');
  }

  return { mode };
}
