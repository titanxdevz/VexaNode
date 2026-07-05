"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useCurrency } from "../contexts/CurrencyContext"
import { ChevronDown, Globe } from "lucide-react"

const currencies = [
  { code: "INR", name: "Indian Rupee", flag: "🇮🇳" },
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧" }
]

export default function CurrencySelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { currency, setCurrency } = useCurrency()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-gray-300 hover:text-white"
      >
        <span className="text-xs font-bold">{currency.code}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full right-0 mt-2 w-48 bg-[#0c0d12] border border-white/10 rounded-2xl shadow-2xl z-[100] overflow-hidden p-2"
          >
            <div className="text-[10px] font-bold text-gray-500 px-3 py-2 uppercase tracking-widest">Select Currency</div>
            {currencies.map((c) => (
              <button
                key={c.code}
                onClick={() => {
                  setCurrency(c.code)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                  currency.code === c.code 
                  ? "bg-blue-600 text-white" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm">{c.flag}</span>
                  <span className="text-xs font-bold">{c.code}</span>
                </div>
                {currency.code === c.code && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
