"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    document.body.style.overflow = 'hidden'
    
    const timer = setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = 'unset'
    }, 2500)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'unset'
    }
  }, [pathname])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            backdropFilter: "blur(0px)",
            transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030408]"
        >
          {/* Subtle background glow from our theme */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#00a3ff]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center justify-center gap-6"
          >
            {/* The Logo Image with a subtle glow around the shape itself */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-28 h-28 sm:w-32 sm:h-32 drop-shadow-[0_0_15px_rgba(0,163,255,0.5)]"
            >
              <Image 
                src="/logo.png" 
                alt="VexaNode Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* The shining white & gray text effect */}
            <div 
              className="text-2xl sm:text-3xl font-bold orbitron-font tracking-[0.2em] uppercase bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #4b5563 20%, #ffffff 50%, #4b5563 80%)',
                backgroundSize: '200% auto',
                animation: 'shine 2s linear infinite',
              }}
            >
              VexaNode
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
