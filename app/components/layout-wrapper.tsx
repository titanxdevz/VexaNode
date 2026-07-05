'use client';

import { useState, useEffect } from "react";
import uiConfig from "../config/sections/ui.json";
import type { UIConfig } from "../types/ui";

const config = uiConfig as UIConfig;

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 dark:bg-[#0a0b0f] transition-colors duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 border-2 border-gray-200 dark:border-gray-800 rounded-full animate-spin border-t-icon-primary"></div>
          <div className="absolute inset-2 w-8 h-8 border-2 border-gray-100 dark:border-gray-700 rounded-full animate-spin border-t-icon-primary animate-reverse opacity-70"></div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg text-gray-900 dark:text-white orbitron-font">
            Node
          </span>
        </div>
      </div>
    </div>
  );
}

export function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(config.loading.enableLoadingScreen);

  useEffect(() => {
    if (config.loading.enableLoadingScreen) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, config.loading.loadingDuration);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {isLoading && config.loading.enableLoadingScreen && <LoadingScreen />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
}
