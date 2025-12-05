'use client';

import { useTheme } from '@/providers/theme-provider';

export function ThemeToggle() {
  const { theme, switchTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => switchTheme()}
      className="inline-flex items-center rounded-md bg-secondary text-secondary-foreground border border-border px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground transition"
      title={`Switch theme (current: ${theme})`}
    >
      Theme: {theme}
    </button>
  );
}
