"use client"

import React, { useState, useRef, useEffect } from "react"
import { useCurrency } from "../contexts/CurrencyContext"
import { ChevronDown } from "lucide-react"

const currencies = [
  { code: "INR", flag: "🇮🇳" },
  { code: "USD", flag: "🇺🇸" },
  { code: "EUR", flag: "🇪🇺" },
  { code: "GBP", flag: "🇬🇧" },
]

export default function CurrencySelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { currency, setCurrency } = useCurrency()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    return () => document.removeEventListener("mousedown", onDown)
  }, [])

  const current = currencies.find(c => c.code === currency.code) ?? currencies[0]

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white text-[12px] font-semibold transition-colors duration-150"
      >
        <span>{current.flag}</span>
        <span>{current.code}</span>
        <ChevronDown className={`w-3 h-3 text-zinc-600 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1.5 w-36 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl z-[100] py-1">
          {currencies.map((c) => (
            <button
              key={c.code}
              onClick={() => { setCurrency(c.code); setIsOpen(false) }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-[12px] font-semibold transition-colors duration-100 ${
                currency.code === c.code
                  ? "text-emerald-400 bg-emerald-500/5"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
              }`}
            >
              <span>{c.flag}</span>
              <span>{c.code}</span>
              {currency.code === c.code && (
                <span className="ml-auto w-1 h-1 rounded-full bg-emerald-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
