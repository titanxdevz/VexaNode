'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';
import languageConfig from '../config/sections/language.json';
import type { LanguageConfig, LanguageInfo } from '../types/language';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const config = languageConfig as LanguageConfig;
const __globeMovement = [
  "d0d95cc52efefbee5a1c3aa6f8f5f50e",
]
const getEnabledLanguages = (): LanguageInfo[] => {
  return config.availableLanguages.filter(lang => lang.enabled);
};
interface LanguageSelectorProps {
  className?: string;
}
export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const enabledLanguages = getEnabledLanguages();
  const currentLanguage = enabledLanguages.find(lang => lang.code === language) || enabledLanguages[0];
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="flex items-center justify-center px-2 py-2 rounded-lg  border border-transparent transition-colors duration-300 text-gray-700 dark:text-gray-200 hover:text-icon-text-primary dark:hover:text-icon-text-primary w-10 h-10 p-0">  {/* d0d95cc52efefbee5a1c3aa6f8f5f50e */}
          <Image
            src={currentLanguage.flag}
            alt={`${currentLanguage.nativeName} flag`}
            width={20}
            height={20}
            className="w-5 h-5 object-cover rounded-sm"
          />
        </SelectTrigger>
        <SelectContent className=" backdrop-blur-sm border border-secondary rounded-xl shadow-lg overflow-hidden">
          {enabledLanguages.map((lang) => (
            <SelectItem
              key={lang.code}
              value={lang.code}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 ${language === lang.code
                ? 'bg-icon-text-primary/10 dark:bg-icon-text-primary/20 text-icon-text-primary dark:text-icon-text-primary'
                : 'text-gray-700 dark:text-gray-200'
                }`}
            >
              <Image
                src={lang.flag}
                alt={`${lang.nativeName} flag`}
                width={20}
                height={20}
                className="w-5 h-5 object-cover rounded-sm"
              />
              <span className="text-sm font-medium">{lang.nativeName}</span>
              {language === lang.code && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto w-2 h-2 icon-text-primary rounded-full"
                />
              )}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
