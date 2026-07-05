"use client"

import { motion } from "framer-motion"
import { Server, Cpu, MemoryStick, HardDrive, ChevronLeft, ChevronRight, Activity, Globe, Sparkles, ArrowRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import vpsConfig from "../../config/sections/vps.json"
import type { VPSConfig } from "../../types/vps"
import { CurrencySelector, useCurrency } from "../ui/CurrencySelector"
import { useLanguage } from "../../contexts/LanguageContext"

const config = vpsConfig as VPSConfig

export default function VPSPricingSection() {
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()
  const { t } = useLanguage()
  const [selectedLocation, setSelectedLocation] = useState(config.locations[0].id)
  const [selectedCPU, setSelectedCPU] = useState(config.planTypes[0].id)
  const [currentPage, setCurrentPage] = useState(1)
  const plansPerPage = 3
  const currentLocation = config.locations.find(loc => loc.id === selectedLocation)
  const availableCPUs = currentLocation?.availableCpus || []
  const currentPlans = config.plans[selectedCPU] || config.plans[config.planTypes[0].id]
  const handleCPUSelection = (cpuId: string) => {
    setSelectedCPU(cpuId)
    setCurrentPage(1)
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
        setCurrentPage(1)
      }
    }
  }
  const totalPages = Math.ceil(currentPlans.length / plansPerPage)
  const startIndex = (currentPage - 1) * plansPerPage
  const endIndex = startIndex + plansPerPage
  const currentPagePlans = currentPlans.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  return (
    <div className="bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#00a3ff]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00a3ff]/5 blur-[120px] rounded-full pointer-events-none" />
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
                {t('vps.badge')}
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 orbitron-font">
                {t('vps.title').split(" ").slice(0, -1).join(" ")}{" "}
                <span className="relative">
                  <span className="text-[#00a3ff]">{t('vps.title').split(" ").slice(-1)[0]}</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a3ff]/0 via-[#00a3ff]/50 to-[#00a3ff]/0 rounded-full" />
                </span>
              </h2>
              <p className="text-md text-gray-400 max-w-3xl">{t('vps.description')}</p>
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
          <div className="flex flex-col lg:flex-row gap-6 justify-left items-start">
            <div className="flex flex-col items-left w-full lg:w-72">
              <h3 className="text-sm font-medium text-gray-400 mb-3.5">{t('vps.step1')}</h3>
              
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => handleLocationSelection(e.target.value)}
                  className="w-full appearance-none bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] text-gray-100 py-3 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00a3ff]/50 focus:border-transparent transition-all font-medium"
                >
                  {config.locations.map((location) => {
                    const hasAvailableCpus = location.availableCpus.length > 0;
                    return (
                      <option key={location.id} value={location.id} disabled={!hasAvailableCpus} className="bg-[#0a0b0f]">
                        {location.displayName} {!hasAvailableCpus ? "(Unavailable)" : ""}
                      </option>
                    );
                  })}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {currentLocation && (
                <div className="mt-3 flex items-center gap-2">
                  <Image
                    src={currentLocation.flag || "/placeholder.svg"}
                    alt={`${currentLocation.name} flag`}
                    width={20}
                    height={20}
                    className="object-cover rounded-sm"
                  />
                  <span className="text-sm font-medium text-gray-500">
                    Selected: {currentLocation.name}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col items-left flex-1">
              <h3 className="text-sm font-medium text-gray-400 mb-3">{t('vps.step2')}</h3>
              <div className="flex flex-wrap gap-2">
                {config.planTypes.map((cpu) => {
                  const isAvailable = availableCPUs.includes(cpu.id)
                  const isSelected = selectedCPU === cpu.id
                  
                  return (
                    <button
                      key={cpu.id}
                      onClick={() => handleCPUSelection(cpu.id)}
                      disabled={!isAvailable}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                        isSelected
                          ? "bg-gradient-to-r from-[#00a3ff]/20 to-[#00a3ff]/5 border border-[#00a3ff]/40 text-[#00a3ff] shadow-lg shadow-[#00a3ff]/10"
                          : isAvailable
                          ? "bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] text-gray-300 hover:bg-[#0b0c16]/50 hover:border-white/[0.12]"
                          : "bg-[#0b0c16]/20 border border-white/[0.03] text-gray-600 cursor-not-allowed opacity-50"
                      }`}
                    >
                      <Image
                        src={cpu.image || "/placeholder.svg"}
                        alt={cpu.name}
                        width={24}
                        height={24}
                        className={`rounded-md object-contain ${!isAvailable ? 'opacity-50' : ''}`}
                      />
                      <span className="text-sm font-semibold">{cpu.displayName}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-6 rounded-2xl bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06]">
            {[
              "Full Root Access",
              "NVMe SSD Storage",
              "Dedicated IPv4",
              "24/7 Support",
              "KVM Virtualization",
              "Instant Deployment",
              "99.9% Uptime SLA"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00a3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">{t('vps.step3')}</h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          {currentPagePlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] hover:border-[#00a3ff]/30 rounded-xl p-4 transition-all duration-300 group hover:bg-[#0b0c16]/50"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-md">
                    <Image
                      src={plan.image || "/placeholder.svg"}
                      alt="CPU"
                      fill
                      className="rounded-xl object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 flex-1">
                  <div className="border border-white/[0.06] flex items-center justify-between px-3 py-2 rounded-xl bg-[#0b0c16]/50 col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#00a3ff]" />
                      <div className="text-xs text-gray-500">{plan.cpuDetail}</div>
                    </div>
                    <div className="text-sm font-medium bg-[#00a3ff]/10 text-[#00a3ff] rounded-xl px-2 py-1">
                      {plan.cpu}
                    </div>
                  </div>
                  <div className="border border-white/[0.06] flex items-center justify-between px-3 py-2 rounded-xl bg-[#0b0c16]/50">
                    <div className="flex items-center gap-2">
                      <MemoryStick className="w-4 h-4 text-[#00a3ff]" />
                      <div className="text-xs text-gray-500">{plan.ramDetail}</div>
                    </div>
                    <div className="text-sm font-medium bg-[#00a3ff]/10 text-[#00a3ff] rounded-xl px-2 py-1">
                      {plan.ram}
                    </div>
                  </div>
                  <div className="border border-white/[0.06] flex items-center justify-between px-3 py-2 rounded-xl bg-[#0b0c16]/50">
                    <div className="flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-[#00a3ff]" />
                      <div className="text-xs text-gray-500">{plan.storageDetail}</div>
                    </div>
                    <div className="text-sm font-medium bg-[#00a3ff]/10 text-[#00a3ff] rounded-xl px-2 py-1">
                      {plan.storage}
                    </div>
                  </div>
                  {plan.bandwidth && (
                    <div className="border border-white/[0.06] flex items-center justify-between px-3 py-2 rounded-xl bg-[#0b0c16]/50">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#00a3ff]" />
                        <div className="text-xs text-gray-500">{plan.bandwidthDetail || "Bandwidth"}</div>
                      </div>
                      <div className="text-sm font-medium bg-[#00a3ff]/10 text-[#00a3ff] rounded-xl px-2 py-1">
                        {plan.bandwidth}
                      </div>
                    </div>
                  )}
                  {plan.ipv4 && (
                    <div className="border border-white/[0.06] flex items-center justify-between px-3 py-2 rounded-xl bg-[#0b0c16]/50">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-[#00a3ff]" />
                        <div className="text-xs text-gray-500">{plan.ipv4Detail || "IPv4"}</div>
                      </div>
                      <div className="text-sm font-medium bg-[#00a3ff]/10 text-[#00a3ff] rounded-xl px-2 py-1">
                        {plan.ipv4}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="text-center sm:text-right">
                    <div className="text-lg font-bold text-[#00a3ff]">
                      {convertPrice(plan.price)}
                      <span className="text-sm text-gray-500">{plan.period}</span>
                    </div>
                  </div>
                  <a 
                    href={plan.orderLink}
                    className="orbitron-font w-full sm:w-auto bg-gradient-to-r from-[#00a3ff] to-[#007acc] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#00a3ff]/25 no-underline group/btn"
                  >
                    {t('common.orderNow')}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-2 mt-8"
          >
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] text-gray-400 hover:bg-[#0b0c16]/50 hover:text-[#00a3ff] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentPage === page
                    ? "bg-gradient-to-r from-[#00a3ff] to-[#007acc] text-white shadow-lg shadow-[#00a3ff]/20"
                    : "bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] text-gray-400 hover:bg-[#0b0c16]/50 hover:text-[#00a3ff]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] text-gray-400 hover:bg-[#0b0c16]/50 hover:text-[#00a3ff] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
