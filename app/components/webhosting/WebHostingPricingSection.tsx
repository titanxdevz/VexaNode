"use client"

import { motion } from "framer-motion"
import { Sparkles, Server, Cpu, MemoryStick, HardDrive, Wifi, HeartPulse } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import webhostingConfig from "../../config/sections/webhosting.json"
import type { WebHostingConfig } from "../../types/webhosting"
import { CurrencySelector, useCurrency } from "../ui/CurrencySelector"
import { useLanguage } from "../../contexts/LanguageContext"
import { useRouter } from "next/navigation"



const config = webhostingConfig as WebHostingConfig

export default function WebHostingPricingSection() {
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()
  const { t } = useLanguage()
  const [selectedPlanType, setSelectedPlanType] = useState(config.planTypes[0].id)

  const currentPlans = config.plans[selectedPlanType] || config.plans[config.planTypes[0].id]

  const router = useRouter()

  const handleDeploy = (plan: any) => {
    localStorage.setItem('vexa_cart_total', plan.price.toString())
    localStorage.setItem('vexa_cart_items', JSON.stringify([{
      name: `Web Hosting - ${plan.name}`,
      description: `${plan.storage} | ${plan.bandwidth} | ${plan.ram}`,
      price: plan.price
    }]))
    
    router.push('/')
  }

  return (
    <div className="bg-[#0a0b0f] relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="fixed inset-0 bg-[length:64px_64px] bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] pointer-events-none" />
      <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-[#10b981]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-[#10b981]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 mt-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#10b981]/20 mb-6 tracking-widest uppercase">
                <Sparkles className="w-3 h-3" />
                {t('webHostingPricing.badge')}
              </span>
              <h2 className="text-4xl font-bold text-white mb-4 orbitron-font">
                {t('webHostingPricing.title').split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-[#10b981] relative inline-block">
                  {t('webHostingPricing.title').split(" ").slice(-1)[0]}
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#10b981]/0 via-[#10b981]/50 to-[#10b981]/0 rounded-full" />
                </span>
              </h2>
              <p className="text-md text-gray-400 max-w-3xl">{t('webHostingPricing.description')}</p>
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
          <div className="flex flex-col items-left">
            <h3 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">{t('webHostingPricing.step1')}</h3>
            <div className="flex flex-wrap gap-3">
              {config.planTypes.map((planType) => (
                <button
                  key={planType.id}
                  onClick={() => setSelectedPlanType(planType.id)}
                  className={`relative flex items-center gap-3 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedPlanType === planType.id
                      ? "bg-[#10b981]/20 text-white border border-[#10b981]/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                      : "bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] text-gray-400 hover:text-gray-300 hover:border-white/[0.12]"
                  }`}
                >
                  <Image
                    src={planType.image || "/placeholder.svg"}
                    alt={planType.name}
                    width={32}
                    height={32}
                    className="rounded-md object-contain bg-transparent"
                  />
                  <span className="text-sm font-semibold">{planType.displayName}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        <h3 className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-wider">{t('webHostingPricing.step2')}</h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group relative bg-[#0b0c16]/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/[0.06] hover:border-[#10b981]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]"
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#10b981] to-[#059669] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                      <Sparkles className="w-2.5 h-2.5" />
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#10b981] transition-colors">{plan.name}</h3>
                      <p className="text-sm text-gray-500">{t('webHostingPricing.webHosting')}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5 mb-8">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-[#10b981]/10 rounded-md">
                          <Cpu className="w-3.5 h-3.5 text-[#10b981]" />
                        </div>
                        <span className="text-xs text-gray-500">{plan.cpuDetail}</span>
                      </div>
                      <span className="text-lg font-bold text-white">{plan.cpu}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-[#10b981]/10 rounded-md">
                          <MemoryStick className="w-3.5 h-3.5 text-[#10b981]" />
                        </div>
                        <span className="text-xs text-gray-500">{plan.ramDetail}</span>
                      </div>
                      <span className="text-lg font-bold text-white">{plan.ram}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-[#10b981]/10 rounded-md">
                          <HardDrive className="w-3.5 h-3.5 text-[#10b981]" />
                        </div>
                        <span className="text-xs text-gray-500">{plan.storageDetail}</span>
                      </div>
                      <span className="text-lg font-bold text-white">{plan.storage}</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-[#10b981]/10 rounded-md">
                          <Wifi className="w-3.5 h-3.5 text-[#10b981]" />
                        </div>
                        <span className="text-xs text-gray-500">{plan.bandwidthDetail}</span>
                      </div>
                      <span className="text-lg font-bold text-white">{plan.bandwidth}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-8">
                    <div className="p-1 bg-[#10b981]/10 rounded-md">
                      <HeartPulse className="w-3.5 h-3.5 text-[#10b981]" />
                    </div>
                    <span className="text-sm text-gray-400">{plan.uptime}</span>
                  </div>
                  <div className="border-t border-white/[0.06] pt-6">
                    <div className="flex items-baseline justify-center mb-5">
                      <span className="text-3xl font-bold orbitron-font text-white">
                        {convertPrice(plan.price)}
                      </span>
                      <span className="ml-1 text-gray-500">{plan.period}</span>
                    </div>
                    <button
                      onClick={() => handleDeploy(plan)}
                      className="orbitron-font w-full bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#10b981] text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] active:scale-[0.98]"
                    >
                      {t('webHostingPricing.orderNow')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
