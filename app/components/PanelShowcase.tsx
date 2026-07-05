"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  Zap,
  Shield,
  Cpu,
  Archive,
  Plug,
  HeartPulse,
  Sparkles,
  ChevronRight
} from "lucide-react"
import showcaseConfig from "@/app/config/sections/showcase.json"
import { useLanguage } from '../contexts/LanguageContext';

interface ShowcaseCard {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  imageDark: string;
  imageLight: string;
}

const iconMap = {
  Zap,
  Shield,
  Cpu,
  Archive,
  Plug,
  HeartPulse
}

export default function PanelShowcase() {
  const { t } = useLanguage();
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const showcaseCards: ShowcaseCard[] = showcaseConfig.showcase.cards.map(card => ({
    id: card.id,
    icon: iconMap[card.icon as keyof typeof iconMap],
    title: card.title,
    description: card.description,
    imageDark: card.imageDark,
    imageLight: card.imageLight
  }))

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1.5
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 100)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setActiveCard(current => (current + 1) % showcaseCards.length)
      setProgress(0)
    }
  }, [progress, showcaseCards.length])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setProgress(0)
  }

  return (
    <div className="bg-[#030408] relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-b border-white/[0.04]">
      {/* Enhanced ambient background */}
      <div className="absolute top-20 -left-32 w-80 h-80 bg-[#00a3ff]/[0.04] rounded-full blur-[150px] pointer-events-none will-change-transform" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-[#6366f1]/[0.03] rounded-full blur-[150px] pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#00a3ff]/[0.02] rounded-full blur-[120px] pointer-events-none will-change-transform" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#00a3ff]/10 text-[#00a3ff] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#00a3ff]/20 mb-6 tracking-widest uppercase">
            <Sparkles className="w-3 h-3" />
            {t('panelShowcase.badge')}
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 orbitron-font uppercase tracking-tight">
            {t('panelShowcase.title').split(' ').slice(0, -1).join(' ')} <span className="relative"><span className="text-[#00a3ff] text-neon-glow-brand">{t('panelShowcase.title').split(' ').slice(-1)[0]}</span><span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a3ff]/0 via-[#00a3ff]/50 to-[#00a3ff]/0 rounded-full" /></span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl quicksand-font">
            {t('panelShowcase.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:items-stretch">
          {/* Left Column - Card Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
          >
            <div className="flex flex-col flex-1 gap-3">
              {showcaseCards.map((card, index) => {
                const Icon = card.icon
                const isActive = index === activeCard

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => handleCardClick(index)}
                    className="group relative cursor-pointer"
                  >
                    {isActive && (
                      <div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#00a3ff]/30 to-[#6366f1]/30 opacity-100 blur-sm transition-opacity duration-500`} />
                    )}
                    <div className={`relative transition-all duration-400 bg-[#0b0c16]/30 backdrop-blur-md border rounded-xl overflow-hidden ${
                      isActive
                        ? 'border-[#00a3ff]/40 shadow-lg shadow-[#00a3ff]/10'
                        : 'border-white/[0.06] hover:border-white/[0.15]'
                    }`}>
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00a3ff]/5 to-transparent" />
                      )}
                      <div className="relative flex items-center p-4 sm:p-5">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-400 ${
                          isActive
                            ? 'bg-gradient-to-br from-[#00a3ff]/20 to-[#6366f1]/20 border border-[#00a3ff]/30'
                            : 'bg-white/[0.04] border border-white/[0.06] group-hover:bg-white/[0.08]'
                        }`}>
                          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                            isActive ? 'text-[#00a3ff]' : 'text-gray-400 group-hover:text-[#00a3ff]'
                          }`} />
                        </div>
                        <div className="ml-4 flex-1 min-w-0">
                          <h3 className={`text-sm sm:text-base font-bold transition-colors duration-300 ${
                            isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                          }`}>
                            {card.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1 transition-colors duration-300">
                            {card.description}
                          </p>
                        </div>
                        <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                          isActive ? 'text-[#00a3ff] translate-x-0.5' : 'text-gray-500 group-hover:text-gray-300'
                        }`} />
                      </div>

                      {/* Active progress bar */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/[0.04]">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-[#00a3ff] to-[#6366f1]"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column - Image Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex h-full"
          >
            <div className="relative w-full bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] rounded-2xl overflow-hidden flex flex-col h-full group/image">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00a3ff]/3 to-transparent pointer-events-none" />

              {/* Image area */}
              <div className="flex-1 p-2 sm:p-3">
                <div className="relative w-full h-full min-h-[250px] sm:min-h-[350px] md:min-h-[420px] rounded-xl overflow-hidden bg-white/[0.02]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCard}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <div className="relative hidden dark:block w-full h-full">
                        <Image
                          src={showcaseCards[activeCard].imageDark}
                          alt={showcaseCards[activeCard].title}
                          fill
                          className="object-cover object-top"
                          quality={90}
                          priority={activeCard === 0}
                        />
                      </div>
                      <div className="relative block dark:hidden w-full h-full">
                        <Image
                          src={showcaseCards[activeCard].imageLight}
                          alt={showcaseCards[activeCard].title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                          className="object-cover object-top"
                          quality={90}
                          priority={activeCard === 0}
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Gradient fade at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0c16] to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Caption */}
              <div className="relative px-6 pb-6 pt-2">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  <h3 className="text-white text-base sm:text-lg font-bold mb-1.5">
                    {showcaseCards[activeCard].title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {showcaseCards[activeCard].description}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
