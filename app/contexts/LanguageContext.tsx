'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import languageConfig from '../config/sections/language.json';
import type { LanguageConfig, Language } from '../types/language';

const config = languageConfig as LanguageConfig;

interface Translations {
  [key: string]: any;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
  t: (key: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}
const detectUserLanguage = (): Language => {
  if (typeof window === 'undefined') return config.settings.defaultLanguage as Language;

  const browserLang = navigator.language || navigator.languages?.[0] || 'en';
  const locale = browserLang.toLowerCase();

  for (const [langCode, locales] of Object.entries(config.localeMapping)) {
    if (locales.some(supportedLocale => 
      locale === supportedLocale.toLowerCase() || 
      locale.startsWith(supportedLocale.toLowerCase() + '-')
    )) {
      const languageInfo = config.availableLanguages.find(lang => lang.code === langCode);
      if (languageInfo && languageInfo.enabled) {
        return langCode as Language;
      }
    }
  }

  return config.settings.defaultLanguage as Language;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  const loadTranslations = async (lang: Language) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/lang/${lang}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load ${lang} translations`);
      }
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
      
      if (lang !== 'en') {
        try {
          const fallbackResponse = await fetch('/lang/en.json');
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            setTranslations(fallbackData);
            console.warn(`Loaded English translations as fallback for ${lang}`);
          }
        } catch (fallbackError) {
          console.error('Failed to load fallback translations:', fallbackError);
          setTranslations({});
        }
      } else {
        setTranslations({});
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initializeLanguage = async () => {
      let initialLanguage: Language = config.settings.defaultLanguage as Language;
      
      if (typeof window !== 'undefined') {
        const cookieConsent = localStorage.getItem('cookie-consent');
        const cookiePreferences = localStorage.getItem('cookie-preferences');
        
        let canUseSavedPreferences = false;
        if (cookieConsent && cookiePreferences) {
          try {
            const prefs = JSON.parse(cookiePreferences);
            canUseSavedPreferences = prefs.preferences === true;
          } catch {
            canUseSavedPreferences = false;
          }
        }
        
        const enabledLanguageCodes = config.availableLanguages
          .filter(lang => lang.enabled)
          .map(lang => lang.code);
        
        if (canUseSavedPreferences) {
          const savedLanguage = localStorage.getItem('language') as Language;
          if (savedLanguage && enabledLanguageCodes.includes(savedLanguage)) {
            initialLanguage = savedLanguage;
          }
        }
        
        if (initialLanguage === config.settings.defaultLanguage && config.settings.autoDetection.enabled) {
          initialLanguage = detectUserLanguage();
        }
      }

      setLanguage(initialLanguage);
      await loadTranslations(initialLanguage);
    };

    initializeLanguage();
  }, []);

  const handleSetLanguage = async (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      const cookieConsent = localStorage.getItem('cookie-consent');
      const cookiePreferences = localStorage.getItem('cookie-preferences');
      
      let canSavePreferences = false;
      if (cookieConsent && cookiePreferences) {
        try {
          const prefs = JSON.parse(cookiePreferences);
          canSavePreferences = prefs.preferences === true;
        } catch {
          canSavePreferences = false;
        }
      }
      
      if (canSavePreferences) {
        localStorage.setItem('language', lang);
      }
      document.documentElement.lang = lang;
      const languageInfo = config.availableLanguages.find(l => l.code === lang);
      document.documentElement.dir = languageInfo?.rtl ? 'rtl' : 'ltr';
    }
    
    await loadTranslations(lang);
  };

  const t = (key: string): string => {
    if (isLoading || Object.keys(translations).length === 0) {
      return '';
    }

    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        translations,
        t,
        isLoading,
      }}
    >
      {!isLoading && Object.keys(translations).length > 0 ? children : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      )}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};