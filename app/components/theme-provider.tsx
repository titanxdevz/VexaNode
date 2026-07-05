'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const originalSetItem = localStorage.setItem;
    const originalGetItem = localStorage.getItem;
    const originalRemoveItem = localStorage.removeItem;

    const checkCookiePreferences = () => {
      const cookieConsent = localStorage.getItem('cookie-consent');
      const cookiePreferences = localStorage.getItem('cookie-preferences');
      
      if (!cookieConsent || !cookiePreferences) return false;
      
      try {
        const prefs = JSON.parse(cookiePreferences);
        return prefs.preferences === true;
      } catch {
        return false;
      }
    };

    localStorage.setItem = function(key: string, value: string) {
      if (key === 'theme') {
        if (checkCookiePreferences()) {
          originalSetItem.call(this, key, value);
        }
        return;
      }
      originalSetItem.call(this, key, value);
    };

    localStorage.getItem = function(key: string) {
      if (key === 'theme') {
        if (checkCookiePreferences()) {
          return originalGetItem.call(this, key);
        }
        return null;
      }
      return originalGetItem.call(this, key);
    };

    localStorage.removeItem = function(key: string) {
      if (key === 'theme') {
        if (checkCookiePreferences()) {
          originalRemoveItem.call(this, key);
        }
        return;
      }
      originalRemoveItem.call(this, key);
    };

    return () => {
      localStorage.setItem = originalSetItem;
      localStorage.getItem = originalGetItem;
      localStorage.removeItem = originalRemoveItem;
    };
  }, []);

  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
}
