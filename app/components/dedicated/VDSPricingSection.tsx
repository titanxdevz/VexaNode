"use client"

import { motion } from "framer-motion"
import { Server, Cpu, MemoryStick, HardDrive, Wifi, Check, Sparkles, ArrowRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import dediConfig from "../../config/sections/dedicated.json"
import type { DediConfig } from "../../types/dedicated"
import { CurrencySelector, useCurrency } from "../ui/CurrencySelector"
import { useLanguage } from "../../contexts/LanguageContext"
import { useRouter } from "next/navigation"


const config = dediConfig as DediConfig

export default function VDSPricingSection() {
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()
  const { t } = useLanguage()
  const [selectedLocation, setSelectedLocation] = useState(config.locations[0].id)
  const [selectedCPU, setSelectedCPU] = useState(() => {
    const firstLocation = config.locations[0]
    return firstLocation.availableCpus[0] || config.planTypes[0].id
  })

  const currentLocation = config.locations.find(loc => loc.id === selectedLocation)
  const availableCPUs = currentLocation?.availableCpus || []
  const currentPlans = config.plans[selectedCPU] || config.plans[config.planTypes[0].id]

  const router = useRouter()

  const handleDeploy = (plan: any) => {
    localStorage.setItem('vexa_cart_total', plan.price.toString())
    localStorage.setItem('vexa_cart_items', JSON.stringify([{
      name: `Dedicated Server - ${plan.name}`,
      description: `${plan.cpu} | ${plan.ram} | ${plan.storage}`,
      price: plan.price
    }]))

    router.push('/')
  }

  const handleCPUSelection = (cpuId: string) => {
    setSelectedCPU(cpuId)
    const currentLoc = config.locations.find(loc => loc.id === selectedLocation)
    if (currentLoc && !currentLoc.availableCpus.includes(cpuId)) {
      const compatibleLocation = config.locations.find(loc => loc.availableCpus.includes(cpuId))
      if (compatibleLocation) {
        setSelectedLocation(compatibleLocation.id)
      }
    }
  }

  const handleLocationSelection = (locationId: string) => {
    setSelectedLocation(locationId)
    const newLocation = config.locations.find(loc => loc.id === locationId)
    if (newLocation && !newLocation.availableCpus.includes(selectedCPU)) {
      if (newLocation.availableCpus.length > 0) {
        setSelectedCPU(newLocation.availableCpus[0])
      }
    }
  }

  const titleWords = t('dedicated.title').split(" ")
  const lastWord = titleWords.slice(-1)[0]
  const restOfTitle = titleWords.slice(0, -1).join(" ")

  return (
    <div className="bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#00a3ff]/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#00a3ff]/10 blur-[160px] rounded-full" />

      <div className="relative z-10 mt-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-[#00a3ff]/10 text-[#00a3ff] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#00a3ff]/20 mb-6 tracking-widest uppercase">
                <Sparkles className="w-3 h-3" />
                <span>{t('dedicated.badge')}</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 orbitron-font">
                {restOfTitle}{" "}
                <span className="relative">
                  <span className="text-[#00a3ff]">{lastWord}</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a3ff]/0 via-[#00a3ff]/50 to-[#00a3ff]/0 rounded-full" />
                </span>
              </h2>
              <p className="text-sm text-gray-400 max-w-3xl">{t('dedicated.description')}</p>
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
        >
          <div className="flex flex-col lg:flex-row gap-6 justify-left items-left">
            <div className="flex flex-col items-left">
              <h3 className="text-sm font-medium text-gray-400 mb-3.5">{t('dedicated.step1')}</h3>
              <div className="flex flex-wrap gap-2">
                {config.planTypes.map((cpu) => {
                  const isAvailable = availableCPUs.includes(cpu.id)
                  const isSelected = selectedCPU === cpu.id

                  return (
                    <button
                      key={cpu.id}
                      onClick={() => handleCPUSelection(cpu.id)}
                      disabled={!isAvailable}
                      className={`flex items-center gap-3 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        isSelected
                          ? "bg-gradient-to-r from-[#00a3ff]/20 to-[#00a3ff]/5 border border-[#00a3ff]/30 text-white shadow-lg shadow-[#00a3ff]/10"
                          : isAvailable
                          ? "bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] text-gray-300 hover:bg-[#0b0c16]/50 hover:border-white/[0.12]"
                          : "bg-[#0b0c16]/20 border border-white/[0.04] text-gray-600 cursor-not-allowed opacity-50"
                      }`}
                    >
                      <Image
                        src={cpu.image || "/placeholder.svg"}
                        alt={cpu.name}
                        width={32}
                        height={32}
                        className={`rounded-md object-contain ${!isAvailable ? 'opacity-50' : ''}`}
                      />
                      <span className="text-sm font-semibold">{cpu.displayName}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col items-left">
              <h3 className="text-sm font-medium text-gray-400 mb-3.5">{t('dedicated.location')}</h3>
              <div className="flex flex-wrap gap-2">
                {config.locations.map((location) => {
                  const hasAvailableCpus = location.availableCpus.length > 0
                  const isSelected = selectedLocation === location.id

                  return (
                    <button
                      key={location.id}
                      onClick={() => handleLocationSelection(location.id)}
                      disabled={!hasAvailableCpus}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                        isSelected
                          ? "bg-gradient-to-r from-[#00a3ff]/20 to-[#00a3ff]/5 border border-[#00a3ff]/30 text-white shadow-lg shadow-[#00a3ff]/10"
                          : hasAvailableCpus
                          ? "bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] text-gray-300 hover:bg-[#0b0c16]/50 hover:border-white/[0.12]"
                          : "bg-[#0b0c16]/20 border border-white/[0.04] text-gray-600 cursor-not-allowed opacity-50"
                      }`}
                    >
                      <Image
                        src={location.flag || "/placeholder.svg"}
                        alt={`${location.name} flag`}
                        width={32}
                        height={32}
                        className={`rounded-full object-cover ${!hasAvailableCpus ? 'opacity-50' : ''}`}
                      />
                      <span className="text-sm font-medium">{location.displayName}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
        <h3 className="text-sm font-medium text-gray-400 mb-3">{t('dedicated.step2')}</h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4"
        >
          {currentPlans && currentPlans.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="relative group bg-[#0b0c16]/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/[0.06] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-[#00a3ff]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10 p-6">
                    {plan.badge && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="inline-flex items-center gap-1.5 bg-[#00a3ff]/10 text-[#00a3ff] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#00a3ff]/20 tracking-widest uppercase">
                          <Sparkles className="w-2.5 h-2.5" />
                          {plan.badge}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-4 mb-6">
                      <Image
                        src={
                          config.locations.find((loc) => loc.id === selectedLocation)?.flag || config.locations[0].flag
                        }
                        alt={`${config.locations.find((loc) => loc.id === selectedLocation)?.name || "Location"}`}
                        width={48}
                        height={48}
                        className="rounded-lg"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                        <p className="text-sm text-gray-400">
                          {config.locations.find((loc) => loc.id === selectedLocation)?.displayName}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-[#00a3ff] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                          <span className="text-sm text-gray-400">{plan.cpuDetail}</span>
                        </div>
                        <span className="text-lg font-medium text-white">{plan.cpu}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <MemoryStick className="w-4 h-4 text-[#00a3ff] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                          <span className="text-sm text-gray-400">{plan.ramDetail}</span>
                        </div>
                        <span className="text-lg font-medium text-white">{plan.ram}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <HardDrive className="w-4 h-4 text-[#00a3ff] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                          <span className="text-sm text-gray-400">{plan.storageDetail}</span>
                        </div>
                        <span className="text-lg font-medium text-white">{plan.storage}</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <Wifi className="w-4 h-4 text-[#00a3ff] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                          <span className="text-sm text-gray-400">{plan.bandwidthDetail}</span>
                        </div>
                        <span className="text-lg font-medium text-white">{plan.bandwidth}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-[#00a3ff]" />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 relative z-10">
                      <div className="flex items-baseline justify-center mb-4">
                        <span className="text-3xl font-bold text-white">
                          {convertPrice(plan.price)}
                        </span>
                        <span className="ml-1 text-gray-400">{plan.period}</span>
                      </div>
                      <button
                        onClick={() => handleDeploy(plan)}
                        className="group/btn relative overflow-hidden orbitron-font w-full bg-gradient-to-r from-[#00a3ff] to-[#0088cc] text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#00a3ff]/20"
                      >
                        {t('common.orderNow')}
                        <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:rotate-[-10deg]" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4">
              <div className="bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-12 text-center max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#00a3ff]/5 flex items-center justify-center">
                  <Server className="w-12 h-12 text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('dedicated.noStock')}</h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  {t('dedicated.noStockDescription')}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
