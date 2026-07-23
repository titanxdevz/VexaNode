'use client'

import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles, ArrowRight } from "lucide-react"
import { useState } from "react"
import navigationConfig from "../config/sections/navigation.json"

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const banner = navigationConfig.banner

  if (!isVisible || !banner.show) return null

  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="relative z-[100] bg-[#0a0b0f] border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <p className="text-[11px] md:text-xs font-bold text-gray-300 tracking-wide uppercase">
            🚀 {banner.text} — Use code <span className="text-white bg-blue-600/20 px-2 py-0.5 rounded border border-blue-500/30">{banner.couponCode}</span>
          </p>
        </div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/5 rounded-full transition-colors group"
        >
          <X className="w-3.5 h-3.5 text-gray-500 group-hover:text-white" />
        </button>
      </div>

      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-blue-600/5 blur-2xl pointer-events-none" />
    </motion.div>
  )
}
