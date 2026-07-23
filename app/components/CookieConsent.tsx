'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from 'next-themes';

interface CookiePreferences {
  necessary: boolean;
  preferences: boolean;
}

export const areCookiesAccepted = (): boolean => {
  if (typeof window === 'undefined') return false;
  const consent = localStorage.getItem('cookie-consent');
  const preferences = localStorage.getItem('cookie-preferences');

  if (!consent || !preferences) return false;

  try {
    const prefs = JSON.parse(preferences);
    return prefs.preferences === true;
  } catch {
    return false;
  }
};

export default function CookieConsent() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    necessary: true,
    preferences: false,
  });

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setIsVisible(true);
    }

    const savedPreferences = localStorage.getItem('cookie-preferences');
    if (savedPreferences) {
      setCookiePreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      preferences: true,
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-preferences', JSON.stringify(allAccepted));
    setShowPopup(false);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const minimal = {
      necessary: true,
      preferences: false,
    };
    setCookiePreferences(minimal);
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('cookie-preferences', JSON.stringify(minimal));
    setShowPopup(false);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', 'customized');
    localStorage.setItem('cookie-preferences', JSON.stringify(cookiePreferences));
    setShowSettings(false);
    setShowPopup(false);
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    setCookiePreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              onClick={() => setShowPopup(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 button-primary text-button-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              aria-label={t('cookies.openSettings')}
            >
              <Cookie className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-xl z-50 flex items-center justify-center p-4"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white/95 dark:bg-[#0a0b0f]/95 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200/50 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 card-primary border border-secondary rounded-full flex items-center justify-center">
                      <Cookie className="w-6 h-6 icon-text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white orbitron-font">
                        {t('cookies.title')}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t('cookies.subtitle')}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="p-2 hover:hover-gradient hover:border-secondary rounded-lg transition-all duration-300"
                  >
                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('cookies.description')}
                </p>

                {!showSettings ? (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleAcceptAll}
                        className="flex-1 button-primary text-button-primary px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <Check className="w-5 h-5" />
                        {t('cookies.acceptAll')}
                      </button>
                      <button
                        onClick={handleRejectAll}
                        className="flex-1 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:hover-gradient hover:border-secondary text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                      >
                        {t('cookies.rejectAll')}
                      </button>
                    </div>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="w-full icon-text-primary hover:text-icon-text-primary/80 px-6 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      {t('cookies.customize')}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-lg p-4 hover:hover-gradient hover:border-secondary transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white orbitron-font">
                          {t('cookies.necessary.title')}
                        </h3>
                        <div className="w-12 h-6 button-primary rounded-full flex items-center justify-end px-1 shadow-lg">
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t('cookies.necessary.description')}
                      </p>
                    </div>

                    <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-lg p-4 hover:hover-gradient hover:border-secondary transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white orbitron-font">
                          {t('cookies.preferences.title')}
                        </h3>
                        <button
                          onClick={() => togglePreference('preferences')}
                          className={`w-12 h-6 rounded-full flex items-center px-1 transition-all duration-300 shadow-lg ${cookiePreferences.preferences
                              ? 'button-primary justify-end shadow-icon-text-primary/25'
                              : 'bg-gray-300 dark:bg-gray-600 justify-start'
                            }`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t('cookies.preferences.description')}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-lg p-4 hover:hover-gradient hover:border-secondary transition-all duration-300">
                      <button
                        onClick={handleSavePreferences}
                        className="flex-1 button-primary text-button-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:hover-gradient hover:shadow-icon-text-primary/25"
                      >
                        {t('cookies.savePreferences')}
                      </button>
                      <button
                        onClick={() => setShowSettings(false)}
                        className="flex-1 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:hover-gradient hover:border-secondary text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                      >
                        {t('cookies.back')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
