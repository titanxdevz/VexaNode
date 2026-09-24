"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

/**
 * Cute animated light/dark toggle.
 * Defaults to system; a click flips between explicit light/dark.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // next-themes: only resolve the theme after mount to avoid hydration mismatch.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  // Avoid hydration mismatch — render a neutral placeholder until mounted.
  if (!mounted) {
    return (
      <div
        className={`w-8 h-8 rounded-lg border border-zinc-800 ${className}`}
        aria-hidden
      />
    );
  }

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={{ scale: 0.88, rotate: -12 }}
      whileHover={{ scale: 1.06 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={`relative flex items-center justify-center w-8 h-8 rounded-lg border overflow-hidden transition-colors duration-200 ${
        isDark
          ? "border-zinc-800 text-amber-300 hover:border-zinc-700 bg-zinc-900/40"
          : "border-[#e8e6dc] text-[#d97757] hover:border-[#d97757]/40 bg-[#f0eee6]"
      } ${className}`}
    >
      {/* soft glow behind the icon */}
      <motion.span
        key={isDark ? "glow-dark" : "glow-light"}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 0.5, scale: 1.4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`absolute inset-0 rounded-full blur-md ${
          isDark ? "bg-amber-300/20" : "bg-[#d97757]/25"
        }`}
      />
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ y: 14, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -14, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="relative"
          >
            <Moon className="w-4 h-4 fill-current" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ y: 14, opacity: 0, rotate: 90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -14, opacity: 0, rotate: -90 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="relative"
          >
            <Sun className="w-4 h-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
