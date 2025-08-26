'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Theme = 'light' | 'dark' | 'brand';

type ThemeContextValue = {
  theme: Theme;
  isDark: boolean;
  switchTheme: (next?: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

// Force light by default in any case (no system preference following)
function getInitialTheme(): Theme {
  return 'light';
}

// Preserved for future use if you want to follow the OS preference again.
// Not used by default to ensure the app starts in light mode always.
export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return isDark ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // No automatic switching on system preference changes; theme stays as set.

  const value = useMemo<ThemeContextValue>(() => {
    return {
      theme,
      isDark: theme === 'dark',
      switchTheme: (next?: Theme) => {
        if (next) return setTheme(next);
        const order: Theme[] = ['light', 'dark', 'brand'];
        const idx = order.indexOf(theme);
        setTheme(order[(idx + 1) % order.length]);
      },
    };
  }, [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider>');
  return ctx;
}
