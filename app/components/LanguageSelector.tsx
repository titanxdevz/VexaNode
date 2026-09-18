'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';
import languageConfig from '../config/sections/language.json';
import type { LanguageConfig, LanguageInfo } from '../types/language';

const config = languageConfig as LanguageConfig;

const getEnabledLanguages = (): LanguageInfo[] => {
  return config.availableLanguages.filter(lang => lang.enabled);
};

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const enabledLanguages = getEnabledLanguages();
  const currentLanguage = enabledLanguages.find(lang => lang.code === language) || enabledLanguages[0];

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-8 h-8 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors duration-150"
        aria-label="Select language"
      >
        <Image
          src={currentLanguage.flag}
          alt={currentLanguage.nativeName}
          width={18}
          height={18}
          className="w-[18px] h-[18px] object-cover rounded-sm"
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1.5 w-44 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl z-[100] py-1">
          {enabledLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setLanguage(lang.code as any); setIsOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-[12px] font-semibold transition-colors duration-100 ${
                language === lang.code
                  ? 'text-emerald-400 bg-emerald-500/5'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <Image
                src={lang.flag}
                alt={lang.nativeName}
                width={16}
                height={16}
                className="w-4 h-4 object-cover rounded-sm"
              />
              <span>{lang.nativeName}</span>
              {language === lang.code && (
                <span className="ml-auto w-1 h-1 rounded-full bg-emerald-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
