'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Copy, Check, Ticket, Percent } from 'lucide-react'
import navigationConfig from '../config/sections/navigation.json'
import Confetti from 'react-confetti'

export default function SummerSalePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })
  const banner = navigationConfig.banner

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem('hasSeenSummerSalePopup')
    
    if (!hasSeenPopup && banner.show) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 2000) // Show after 2 seconds
      return () => clearTimeout(timer)
    }
  }, [banner.show])

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('hasSeenSummerSalePopup', 'true')
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(banner.couponCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
          />

          {/* Popup */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#0c0d12] border border-blue-500/20 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(59,130,246,0.15)] pointer-events-auto overflow-hidden text-center"
            >
              {/* Confetti effect inside popup area? No, full screen is better but maybe too much. 
                  Let's keep it clean but punchy. */}
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-600/10 rounded-full blur-[80px]" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 text-gray-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12, delay: 0.2 }}
                className="w-20 h-20 bg-blue-600/20 border border-blue-500/30 rounded-3xl flex items-center justify-center mx-auto mb-8"
              >
                <Percent className="w-10 h-10 text-blue-500" />
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter orbitron-font">
                SUMMER <span className="text-blue-500">SALE</span> IS LIVE!
              </h2>

              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Enjoy blazing fast performance with a special discount. Limited time offer on all services!
              </p>

              <div className="relative group cursor-pointer mb-8" onClick={handleCopy}>
                <div className="absolute inset-0 bg-blue-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-[#16171d] border-2 border-dashed border-blue-500/40 rounded-2xl p-6 flex items-center justify-between group-hover:border-blue-500 transition-colors">
                  <div className="flex items-center gap-4">
                    <Ticket className="w-6 h-6 text-blue-500" />
                    <div className="text-left">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Coupon Code</p>
                      <p className="text-2xl font-black tracking-[0.2em]">{banner.couponCode}</p>
                    </div>
                  </div>
                  <div className="bg-blue-600 text-white p-3 rounded-xl transition-transform group-hover:scale-110 active:scale-95">
                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </div>
                </div>
                {copied && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-emerald-500"
                  >
                    Copied to clipboard!
                  </motion.p>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <button
                  onClick={handleClose}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/20 active:scale-95"
                >
                  ACTIVATE DISCOUNT
                </button>
                <button
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-300 text-sm font-bold uppercase tracking-widest transition-colors"
                >
                  Maybe later
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
