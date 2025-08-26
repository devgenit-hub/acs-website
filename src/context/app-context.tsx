'use client';

import { createContext, useContext, useMemo, useState } from 'react';

export type AppContextValue = {
  initialized: boolean;
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
  loading: boolean;
  setLoading: (v: boolean) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [initialized] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const value = useMemo<AppContextValue>(
    () => ({ initialized, sidebarOpen, setSidebarOpen, loading, setLoading }),
    [initialized, sidebarOpen, loading],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within <AppProvider>');
  return ctx;
}
