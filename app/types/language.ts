export interface LanguageConfig {
  settings: {
    autoDetection: {
      enabled: boolean;
      fallbackLanguage: string;
    };
    defaultLanguage: string;
  };
  availableLanguages: LanguageInfo[];
  localeMapping: Record<string, string[]>;
}

export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  enabled: boolean;
  rtl: boolean;
}

export type Language = 'en' | 'fr' | 'de' | 'ar' | 'tr' | 'zh' | 'hi' | 'pt' | 'es' | 'ja' | 'ru';
