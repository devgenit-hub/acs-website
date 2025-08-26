'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Locale = 'en' | 'ar' | 'fr' | (string & {});

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  switchLocale: (next?: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getInitialLocale(): Locale {
  // Avoid SSR mismatch: default to 'en', then hydrate from navigator/localStorage on client
  if (typeof window === 'undefined') return 'en';
  try {
    const saved = window.localStorage.getItem('app:locale');
    if (saved) return saved as Locale;
  } catch {}
  const nav = typeof navigator !== 'undefined' ? navigator.language : 'en';
  // Map basic language codes
  if (nav.startsWith('ar')) return 'ar';
  if (nav.startsWith('fr')) return 'fr';
  return 'en';
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  // Keep html attributes in sync
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', locale);
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    html.setAttribute('dir', dir);
    try {
      window.localStorage.setItem('app:locale', locale);
    } catch {}
  }, [locale]);

  const value = useMemo<LocaleContextValue>(() => {
    const setLocale = (l: Locale) => setLocaleState(l);
    const switchLocale = (next?: Locale) => {
      if (next) return setLocaleState(next);
      const order: Locale[] = ['en', 'ar', 'fr'];
      const idx = order.indexOf(locale);
      const nextIdx = idx === -1 ? 0 : (idx + 1) % order.length;
      setLocaleState(order[nextIdx]);
    };
    return { locale, setLocale, switchLocale };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within <LocaleProvider>');
  return ctx;
}
