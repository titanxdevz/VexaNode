"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [isTextVisible, setIsTextVisible] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    setIsTextVisible(true)
    document.body.style.overflow = 'hidden'
    
    // Fade out the text first
    const textTimer = setTimeout(() => {
      setIsTextVisible(false)
    }, 1400)

    // Complete transition and restore scroll after split animations
    const finishTimer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = 'unset'
    }, 2400) // 1.4s text + 1.0s split-slide duration

    return () => {
      clearTimeout(textTimer)
      clearTimeout(finishTimer)
      document.body.style.overflow = 'unset'
    }
  }, [pathname])

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none flex">
          {/* Left panel - slides to the left */}
          <motion.div
            initial={{ x: 0 }}
            animate={isTextVisible ? { x: 0 } : { x: "-100%" }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-y-0 left-0 w-1/2 bg-[#030408] pointer-events-auto border-r border-zinc-900/20"
          />
          
          {/* Right panel - slides to the right */}
          <motion.div
            initial={{ x: 0 }}
            animate={isTextVisible ? { x: 0 } : { x: "100%" }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-y-0 right-0 w-1/2 bg-[#030408] pointer-events-auto border-l border-zinc-900/20"
          />

          {/* Glowing background behind text (fades with text) */}
          <AnimatePresence>
            {isTextVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.4 } }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
              >
                <div className="w-72 h-72 bg-[#10b981]/5 rounded-full blur-[100px]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Centered Text Overlay */}
          <AnimatePresence>
            {isTextVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ 
                  opacity: 0, 
                  scale: 1.05,
                  transition: { duration: 0.5, ease: "easeIn" }
                }}
                className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
              >
                {/* The shining white & emerald brand text effect */}
                <div 
                  className="text-3xl sm:text-4xl font-extrabold orbitron-font tracking-[0.25em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-white to-zinc-500"
                  style={{
                    backgroundSize: '200% auto',
                    animation: 'shine 2.5s linear infinite',
                    textShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
                  }}
                >
                  VexaNode
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  )
}

