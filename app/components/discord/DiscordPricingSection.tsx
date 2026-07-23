"use client"

import { motion } from "framer-motion"
import { Server, Cpu, MemoryStick, HardDrive, Wifi, HeartPulse, Sparkles, ArrowRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import discordConfig from "../../config/sections/discord.json"
import type { DiscordConfig } from "../../types/discord"
import { CurrencySelector, useCurrency } from "../ui/CurrencySelector"
import { useLanguage } from "../../contexts/LanguageContext"
import { useRouter } from "next/navigation"


const config = discordConfig as DiscordConfig

export default function DiscordPricingSection() {
  const { t } = useLanguage()
  const { selectedCurrency, setSelectedCurrency, convertPrice } = useCurrency()
  const [selectedPlanType, setSelectedPlanType] = useState(config.planTypes[0].id)

  const currentPlans = config.plans[selectedPlanType] || config.plans[config.planTypes[0].id]

  const router = useRouter()

  const handleDeploy = (plan: any) => {
    localStorage.setItem('vexa_cart_total', plan.price.toString())
    localStorage.setItem('vexa_cart_items', JSON.stringify([{
      name: `Discord Bot Hosting - ${plan.name}`,
      description: `${plan.cpu} | ${plan.ram} | ${plan.storage}`,
      price: plan.price
    }]))

    router.push('/')
  }

  const titleWords = t('discord.title').split(" ")
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
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-green-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-green-500/10 blur-[160px] rounded-full" />

      <div className="relative z-10 mt-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-green-400/10 text-green-400 text-[10px] font-bold px-3 py-1.5 rounded-full border border-green-400/20 mb-6 tracking-widest uppercase">
                <Sparkles className="w-3 h-3" />
                <span>{t('discord.badge')}</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4 orbitron-font">
                {restOfTitle}{" "}
                <span className="relative">
                  <span className="text-green-400">{lastWord}</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-green-400/0 via-green-400/50 to-green-400/0 rounded-full" />
                </span>
              </h2>
              <p className="text-sm text-gray-400 max-w-3xl">{t('discord.description')}</p>
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
            <h3 className="text-sm font-medium text-gray-400 mb-3">{t('discord.step1')}</h3>
            <div className="flex flex-wrap gap-2">
              {config.planTypes.map((planType) => (
                <button
                  key={planType.id}
                  onClick={() => setSelectedPlanType(planType.id)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedPlanType === planType.id
                      ? "bg-gradient-to-r from-green-400/20 to-green-400/5 border border-green-400/30 text-green-400 shadow-lg shadow-green-400/10"
                      : "bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] text-gray-300 hover:bg-[#0b0c16]/50 hover:border-white/[0.12]"
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
        <h3 className="text-sm font-medium text-gray-400 mb-3">{t('discord.step2')}</h3>

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
                className="relative group bg-[#0b0c16]/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/[0.06] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-green-400/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 p-6">
                  {plan.badge && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="inline-flex items-center gap-1.5 bg-green-400/10 text-green-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-green-400/20 tracking-widest uppercase">
                        <Sparkles className="w-2.5 h-2.5" />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/icons/nodejs.png"
                        alt="Node.js"
                        width={64}
                        height={64}
                        className="object-contain bg-transparent"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      <p className="text-sm text-gray-400">Discord Bot</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-green-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                        <span className="text-sm text-gray-400">{plan.cpuDetail}</span>
                      </div>
                      <span className="text-lg font-medium text-white">{plan.cpu}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <MemoryStick className="w-4 h-4 text-green-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                        <span className="text-sm text-gray-400">{plan.ramDetail}</span>
                      </div>
                      <span className="text-lg font-medium text-white">{plan.ram}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <HardDrive className="w-4 h-4 text-green-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                        <span className="text-sm text-gray-400">{plan.storageDetail}</span>
                      </div>
                      <span className="text-lg font-medium text-white">{plan.storage}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Wifi className="w-4 h-4 text-green-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                        <span className="text-sm text-gray-400">{plan.bandwidthDetail}</span>
                      </div>
                      <span className="text-lg font-medium text-white">{plan.bandwidth}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <HeartPulse className="w-4 h-4 text-green-400 group-hover:scale-110 transition-all duration-300" />
                    <span className="text-sm text-gray-400">{plan.uptime}</span>
                  </div>

                  <div className="mt-6 relative z-10">
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-3xl font-bold orbitron-font text-white">
                        {convertPrice(plan.price)}
                      </span>
                      <span className="ml-1 text-gray-400">{plan.period}</span>
                    </div>
                    <button
                      onClick={() => handleDeploy(plan)}
                      className="group/btn relative overflow-hidden orbitron-font w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                    >
                      {t('common.orderNow')}
                      <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:rotate-[-10deg]" />
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
