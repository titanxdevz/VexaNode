"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Currency = {
  code: string
  symbol: string
  rate: number // Rate relative to INR (base currency)
}

const currencies: Record<string, Currency> = {
  INR: { code: "INR", symbol: "₹", rate: 1 },
  USD: { code: "USD", symbol: "$", rate: 0.012 },
  EUR: { code: "EUR", symbol: "€", rate: 0.011 },
  GBP: { code: "GBP", symbol: "£", rate: 0.0094 }
}

type CurrencyContextType = {
  currency: Currency
  setCurrency: (code: string) => void
  formatPrice: (priceInINR: number) => string
  convertPrice: (priceInINR: number) => number
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(currencies.INR)

  useEffect(() => {
    const saved = localStorage.getItem("vexa_currency")
    if (saved && currencies[saved]) {
      setCurrencyState(currencies[saved])
    }
  }, [])

  const setCurrency = (code: string) => {
    if (currencies[code]) {
      setCurrencyState(currencies[code])
      localStorage.setItem("vexa_currency", code)
    }
  }

  const convertPrice = (priceInINR: number) => {
    return Math.ceil(priceInINR * currency.rate)
  }

  const formatPrice = (priceInINR: number) => {
    const converted = convertPrice(priceInINR)
    return `${currency.symbol}${converted}`
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) throw new Error("useCurrency must be used within CurrencyProvider")
  return context
}
