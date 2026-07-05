"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Server, Shield, Cpu, HardDrive, MemoryStick, Sparkles, ArrowRight } from "lucide-react"
import gamesConfig from "../../config/sections/games.json"
import type { GamesConfig, Game, GamePlan, GameLocation } from "../../types/games"
import { CurrencySelector, useCurrency } from "../ui/CurrencySelector"
import { useLanguage } from "../../contexts/LanguageContext"
import uiConfig from "../../config/sections/ui.json"

const config = gamesConfig as GamesConfig

export default function GameServerList() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()
  const { t } = useLanguage()
  const [selectedGame, setSelectedGame] = useState<string>(config.games[0]?.id || "")
  const [selectedLocation, setSelectedLocation] = useState<string>(config.locations[0]?.id || "")
  const [selectedPlanType, setSelectedPlanType] = useState<"budget" | "premium">("budget")

  useEffect(() => {
    const game = searchParams.get("game")
    const location = searchParams.get("location")
    const plan = searchParams.get("plan") as "budget" | "premium"

    if (game && config.games.some((g: Game) => g.id === game)) {
      setSelectedGame(game)
    }
    if (location && config.locations.some((l) => l.id === location)) {
      setSelectedLocation(location)
    }
    if (plan && ["budget", "premium"].includes(plan)) {
      setSelectedPlanType(plan)
    }
  }, [searchParams])

  useEffect(() => {
    const params = new URLSearchParams()
    params.set("game", selectedGame)
    params.set("location", selectedLocation)
    params.set("plan", selectedPlanType)
    const newUrl = `/games?${params.toString()}`
    const currentUrl = window.location.pathname + window.location.search
    if (newUrl !== currentUrl) {
      router.replace(newUrl)
    }
  }, [selectedGame, selectedLocation, selectedPlanType, router])

  const currentGame = config.games.find((g: Game) => g.id === selectedGame)
  const currentLocation = config.locations.find((loc) => loc.id === selectedLocation)
  const availablePlanTypes = currentLocation?.availablePlanTypes || []

  const handlePlanTypeSelection = (planType: "budget" | "premium") => {
    setSelectedPlanType(planType)
    const currentLoc = config.locations.find((loc) => loc.id === selectedLocation)
    if (currentLoc && !currentLoc.availablePlanTypes.includes(planType)) {
      const compatibleLocation = config.locations.find((loc) => loc.availablePlanTypes.includes(planType))
      if (compatibleLocation) {
        setSelectedLocation(compatibleLocation.id)
      }
    }
  }

  const handleLocationSelection = (locationId: string) => {
    setSelectedLocation(locationId)
    const newLocation = config.locations.find((loc) => loc.id === locationId)
    if (newLocation && !newLocation.availablePlanTypes.includes(selectedPlanType)) {
      if (newLocation.availablePlanTypes.length > 0) {
        setSelectedPlanType(newLocation.availablePlanTypes[0] as "budget" | "premium")
      }
    }
  }

  if (!currentGame || !currentLocation) {
    return (
      <div className="min-h-screen bg-[#0a0b0f] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#00a3ff]"></div>
      </div>
    )
  }

  return (
    <div className="bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[var(--game-color)]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--game-color)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mt-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-left mb-8"
          style={
            {
              "--game-color": currentGame?.primaryColor || "#3b82f6",
            } as React.CSSProperties
          }
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-[var(--game-color)]/10 text-[var(--game-color)] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[var(--game-color)]/20 mb-6 tracking-widest uppercase">
                <Sparkles className="w-3 h-3" />
                {t('gameServerList.badge')}
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 orbitron-font">
                {t('gameServerList.title').split(' ').slice(0, -2).join(' ')}{' '}
                <span className="relative">
                  <span className="text-[var(--game-color)]">{t('gameServerList.title').split(' ').slice(-2).join(' ')}</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--game-color)]/0 via-[var(--game-color)]/50 to-[var(--game-color)]/0 rounded-full" />
                </span>
              </h2>
              <p className="text-md text-gray-400 max-w-3xl">
                {t('gameServerList.description')}
              </p>
            </div>
            <CurrencySelector
              selectedCurrency={selectedCurrency}
              onCurrencyChange={setSelectedCurrency}
              className="w-full sm:w-64 mt-4 sm:mt-0"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
          style={
            {
              "--game-color": currentGame?.primaryColor || "#3b82f6",
            } as React.CSSProperties
          }
        >
          <div className="flex flex-col lg:flex-row gap-6 justify-left items-left">
            <div className="flex flex-col items-left">
              <h3 className="text-sm font-medium text-gray-400 mb-3">{t('gameServerList.step1')}</h3>
              <div className="flex flex-wrap gap-2">
                {config.planTypes.map((type) => {
                  const isAvailable = availablePlanTypes.includes(type.id)
                  const isSelected = selectedPlanType === type.id

                  return (
                    <button
                      key={type.id}
                      onClick={() => handlePlanTypeSelection(type.id as "budget" | "premium")}
                      disabled={!isAvailable}
                      className={`flex items-center gap-3 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                        isSelected
                          ? "bg-gradient-to-r from-[var(--game-color)]/20 to-[var(--game-color)]/5 border border-[var(--game-color)]/40 text-[var(--game-color)] shadow-lg shadow-[var(--game-color)]/10"
                          : isAvailable
                          ? "bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] text-gray-300 hover:bg-[#0b0c16]/50 hover:border-white/[0.12]"
                          : "bg-[#0b0c16]/20 border border-white/[0.03] text-gray-600 cursor-not-allowed opacity-50"
                      }`}
                    >
                      <Image
                        src={type.image || "/placeholder.svg"}
                        alt={type.name}
                        width={32}
                        height={32}
                        className={`rounded-md object-contain ${!isAvailable ? 'opacity-50' : ''}`}
                      />
                      <span className="text-sm font-semibold">{type.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col items-left">
              <h3 className="text-sm font-medium text-gray-400 mb-3.5">{t('gameServerList.step2')}</h3>
              <div className="flex flex-wrap gap-2">
                {config.locations.map((location: GameLocation) => {
                  const hasAvailablePlanTypes = location.availablePlanTypes.length > 0
                  const isSelected = selectedLocation === location.id

                  return (
                    <button
                      key={location.id}
                      onClick={() => handleLocationSelection(location.id)}
                      disabled={!hasAvailablePlanTypes}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        isSelected
                          ? "bg-gradient-to-r from-[var(--game-color)]/20 to-[var(--game-color)]/5 border border-[var(--game-color)]/40 text-[var(--game-color)] shadow-lg shadow-[var(--game-color)]/10"
                          : hasAvailablePlanTypes
                          ? "bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] text-gray-300 hover:bg-[#0b0c16]/50 hover:border-white/[0.12]"
                          : "bg-[#0b0c16]/20 border border-white/[0.03] text-gray-600 cursor-not-allowed opacity-50"
                      }`}
                    >
                      <Image
                        src={location.flag || "/placeholder.svg"}
                        alt={`${location.name} flag`}
                        width={24}
                        height={24}
                        className={`rounded-full object-cover ${!hasAvailablePlanTypes ? 'opacity-50' : ''}`}
                      />
                      <span className="text-sm font-medium">{location.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4"
        >
          <h3 className="text-sm font-medium text-gray-400 mb-3">{t('gameServerList.step3')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {config.games.map((game: Game, index: number) => {
              const firstFeaturedGame = config.games.find((g: Game) => g.featured)
              const showChristmas = uiConfig.christmasTheme.enabled && game.id === firstFeaturedGame?.id

              return (
                <div key={game.id} className="relative">
                  <button
                    onClick={() => setSelectedGame(game.id)}
                    style={{ "--game-color": game.primaryColor } as React.CSSProperties}
                    className={`relative w-full group rounded-xl transition-all duration-300 p-3 text-left ${
                      selectedGame === game.id
                        ? "bg-[#0b0c16]/50 backdrop-blur-xl border border-[var(--game-color)]/40 text-white shadow-lg shadow-[var(--game-color)]/10"
                        : "bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] text-gray-300 hover:bg-[#0b0c16]/50 hover:border-white/[0.12]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative w-8 h-8 rounded-lg flex-shrink-0">
                        <Image
                          src={game.icon || "/placeholder.svg"}
                          alt={game.name}
                          fill
                          sizes="48px"
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm truncate">{game.name}</h4>
                          {game.featured && (
                            <div className="px-2 py-0.5 text-xs rounded-full bg-[var(--game-color)]/20 text-[var(--game-color)] border border-[var(--game-color)]/30">
                              {t('gameServerList.featured')}
                            </div>
                          )}
                        </div>
                        <p className="text-xs opacity-80 line-clamp-2">{game.description}</p>
                      </div>
                    </div>
                  </button>
                  {showChristmas && (
                    <Image
                      src="/christmas/ice.png"
                      alt="Christmas decoration"
                      width={60}
                      height={60}
                      className="absolute z-[9999] -bottom-16 right-4 pointer-events-none"
                    />
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>
        <h3 className="text-sm font-medium text-gray-400 mb-3">{t('gameServerList.step4')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {currentGame?.plans[selectedPlanType].map((plan: GamePlan, index: number) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ "--game-color": currentGame?.primaryColor } as React.CSSProperties}
              className="relative overflow-hidden rounded-xl bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] hover:border-[var(--game-color)]/30 transition-all duration-300 group hover:bg-[#0b0c16]/50"
            >
              {plan.type === "premium" && (
                <div className="absolute top-4 right-4">
                  <div className="px-2 py-1 text-xs font-medium rounded-full bg-[var(--game-color)]/10 text-[var(--game-color)] border border-[var(--game-color)]/20">
                    {t('gameServerList.premium')}
                  </div>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-8 h-8 rounded-md">
                    <Image
                      src={currentLocation?.flag || config.locations[0].flag}
                      alt={`${currentLocation?.name || "Location"}`}
                      fill
                      sizes="32px"
                      className="object-contain rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <MemoryStick className="w-5 h-5 text-[var(--game-color)]" />
                    <span className="text-gray-300">{plan.ram} RAM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-[var(--game-color)]" />
                    <span className="text-gray-300">{plan.cpu} CPU</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HardDrive className="w-5 h-5 text-[var(--game-color)]" />
                    <span className="text-gray-300">{plan.storage}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[var(--game-color)]" />
                    <span className="text-gray-300">{t('gameServerList.ddosProtection')}</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold text-[var(--game-color)]">{convertPrice(`$${plan.price}`)}</span>
                  <span className="text-gray-500">/mo</span>
                </div>

                <a
                  href={plan.orderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="orbitron-font w-full bg-gradient-to-r from-[var(--game-color)] to-[var(--game-color)]/70 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[var(--game-color)]/25 group/btn"
                >
                  {t('gameServerList.orderNow')}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
