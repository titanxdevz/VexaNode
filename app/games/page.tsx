"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Cpu, Zap, Shield, HardDrive, Gamepad2, Trophy, Users, Sparkles } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import { CustomIcons } from "../components/CustomIcons"
import { useRouter } from "next/navigation"
import Image from "next/image"
import gamesConfig from "../config/sections/games.json"

const gameConfig = ((gamesConfig as any).games || []).find((g: any) => g.id === "minecraft")

const cycles = [
  { id: "monthly", name: "Monthly", discount: 0 },
  { id: "quarterly", name: "Quarterly", discount: 0 },
  { id: "semi-annually", name: "Semi-Annually", discount: 0.13 },
  { id: "annually", name: "Annually", discount: 0.24 }
]

const categories = [
  { id: "budget", name: "Budget Extreme", icon: CustomIcons.Intel, desc: "High-Performance Intel Xeon / Ryzen 5" },
  { id: "premium", name: "Premium Ryzen 9", icon: CustomIcons.Ryzen, desc: "AMD Ryzen 9 7950X / 9950X Performance" }
]

const plans = {
  premium: [
    {
      id: "mc-diamond",
      name: "Diamond Plan",
      cpu: "4 vCores",
      ram: "8 GB RAM",
      storage: "120 GB NVMe SSD",
      basePrice: 480,
      href: "https://billing.vexanode.cloud/checkout/config/21"
    },
    {
      id: "mc-emerald",
      name: "Emerald Plan",
      cpu: "6 vCores",
      ram: "12 GB RAM",
      storage: "180 GB NVMe SSD",
      basePrice: 720,
      href: "https://billing.vexanode.cloud/checkout/config/22"
    },
    {
      id: "mc-obsidian",
      name: "Obsidian Plan",
      cpu: "8 vCores",
      ram: "16 GB RAM",
      storage: "240 GB NVMe SSD",
      basePrice: 960,
      href: "https://billing.vexanode.cloud/checkout/config/22"
    },
    {
      id: "mc-ender",
      name: "Ender Plan",
      cpu: "12 vCores",
      ram: "32 GB RAM",
      storage: "480 GB NVMe SSD",
      basePrice: 1920,
      href: "https://billing.vexanode.cloud/checkout/config/22"
    }
  ],
  budget: [
    {
      id: "mc-seed",
      name: "Seed Plan",
      cpu: "1 vCore",
      ram: "1 GB RAM",
      storage: "15 GB NVMe SSD",
      basePrice: 60,
      href: "https://billing.vexanode.cloud/checkout/config/23"
    },
    {
      id: "mc-sprout",
      name: "Sprout Plan",
      cpu: "1 vCore",
      ram: "2 GB RAM",
      storage: "30 GB NVMe SSD",
      basePrice: 120,
      href: "https://billing.vexanode.cloud/checkout/config/23"
    },
    {
      id: "mc-stone",
      name: "Stone Plan",
      cpu: "2 vCores",
      ram: "4 GB RAM",
      storage: "60 GB NVMe SSD",
      basePrice: 240,
      href: "https://billing.vexanode.cloud/checkout/config/24"
    },
    {
      id: "mc-iron",
      name: "Iron Plan",
      cpu: "3 vCores",
      ram: "6 GB RAM",
      storage: "90 GB NVMe SSD",
      basePrice: 360,
      href: "https://billing.vexanode.cloud/checkout/config/24"
    }
  ]
}

export default function MinecraftPage() {
  const [selectedCategory, setSelectedCategory] = useState("budget")
  const [selectedCycle, setSelectedCycle] = useState("semi-annually")

  const router = useRouter()

  const cycleIndex = cycles.findIndex(c => c.id === selectedCycle)

  const calculatePrice = (base: number) => {
    const cycle = cycles.find(c => c.id === selectedCycle)
    if (!cycle) return base
    const monthlyPrice = base * (1 - cycle.discount)
    return Math.floor(monthlyPrice)
  }

  const handleDeploy = (plan: any) => {
    window.open("https://discord.gg/vexanode", "_blank")
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-emerald-500/30 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-500/[0.04] rounded-full blur-[180px] pointer-events-none will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] bg-teal-500/[0.03] rounded-full blur-[150px] pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 left-2/3 w-[500px] h-[500px] bg-emerald-500/[0.02] rounded-full blur-[120px] pointer-events-none will-change-transform" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <PageMeta title="Minecraft Hosting" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section with Minecraft image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-3 py-1.5 rounded-full border border-emerald-500/20 mb-6 tracking-widest uppercase">
              <Sparkles className="w-3 h-3" />
              {gameConfig?.name || "Minecraft"} Game Hosting
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 orbitron-font leading-none uppercase tracking-tight">
              Extreme <br />
              <span className="relative">
                <span className="text-emerald-500 text-neon-glow-brand">Performance</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 rounded-full" />
              </span>
            </h1>
            <p className="text-gray-400 text-base leading-relaxed max-w-xl quicksand-font">
              {gameConfig?.description || "Dominate your players with zero lag. Our Minecraft servers run on 5.7GHz+ Ryzen processors, enterprise-grade NVMe storage, and DDoS protection."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden border border-white/5 bg-[#0c0e1a]/40 shadow-2xl">
              <Image 
                src="/minecraft_block.jpg" 
                alt="Minecraft Server Block" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60" />
            </div>
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-400 p-4 rounded-2xl shadow-xl text-center z-20"
            >
              <span className="text-xs font-black text-white orbitron-font uppercase tracking-wider">Instant Setup</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Configuration Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-t border-white/[0.04] pt-12">
          <div>
            <h2 className="text-3xl font-black orbitron-font uppercase tracking-tight">Choose Your Tier</h2>
            <p className="text-gray-400 text-sm">Select hardware level and billing cycle below.</p>
          </div>

          <div className="flex flex-col items-end gap-4">
            {/* Billing Cycle - Sliding Pill Toggle */}
            <div className="relative flex items-center bg-white/[0.04] border border-white/[0.06] p-1 rounded-2xl backdrop-blur-md">
              <div
                className="absolute top-1 bottom-1 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                style={{
                  left: `calc(${(cycleIndex / cycles.length) * 100}% + 4px)`,
                  width: `calc(${100 / cycles.length}% - 8px)`,
                }}
              />
              {cycles.map((cycle) => (
                <button
                  key={cycle.id}
                  onClick={() => setSelectedCycle(cycle.id)}
                  className={`relative z-10 flex-1 px-2.5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center ${
                    selectedCycle === cycle.id ? "text-white" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {cycle.name}
                  {cycle.discount > 0 && (
                    <span className="ml-1 text-[8px] opacity-70">-{Math.round(cycle.discount * 100)}%</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tier Selectors */}
        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="text-white">1.</span> Select Hardware Tier
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative group text-left ${
                    selectedCategory === cat.id ? "z-10" : ""
                  }`}
                >
                  <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-emerald-500/30 via-teal-500/20 to-transparent opacity-0 transition-opacity duration-500 blur-sm pointer-events-none ${
                    selectedCategory === cat.id ? "opacity-100" : "group-hover:opacity-60"
                  }`} />
                  <div className={`relative flex flex-col items-start gap-3 p-6 rounded-2xl border transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-[#0c0e1a]/40 backdrop-blur-xl border-emerald-500 text-white shadow-[0_0_40px_rgba(16,185,129,0.2)]"
                      : "bg-[#0c0e1a]/20 backdrop-blur-sm border-white/[0.06] text-gray-400 hover:border-white/20 hover:bg-white/[0.02]"
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        selectedCategory === cat.id
                          ? "bg-emerald-500/20 border-emerald-500/40"
                          : "bg-white/[0.04] border-white/[0.06] group-hover:border-white/20"
                      }`}>
                        <cat.icon className={`w-5 h-5 ${selectedCategory === cat.id ? "text-white" : "text-emerald-400"}`} />
                      </div>
                      <span className="text-xl font-bold">{cat.name}</span>
                    </div>
                    <p className="text-sm opacity-80">{cat.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Plans List */}
        <div>
          <h3 className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-wider flex items-center gap-2">
            <span className="text-white">2.</span> Choose Plan
          </h3>

          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {plans[selectedCategory as keyof typeof plans].map((plan, idx) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-emerald-500/20 via-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

                  <div className="relative bg-[#0c0e1a]/30 backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.12] rounded-2xl p-4 md:p-6 transition-all duration-500 flex flex-col lg:flex-row items-center gap-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/[0.02] rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Icon */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/50 group-hover:scale-110 transition-all duration-500">
                      <CustomIcons.Minecraft className="w-10 h-10 text-emerald-400 group-hover:scale-110 transition-transform" />
                    </div>

                    {/* Name */}
                    <div className="relative z-10 flex-1 text-center lg:text-left">
                      <h4 className="text-xl font-bold mb-1 group-hover:text-emerald-400 transition-colors">{plan.name}</h4>
                      <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                        <span className="text-[10px] bg-white/[0.06] border border-white/[0.06] px-2 py-0.5 rounded uppercase font-bold tracking-wider">Bedrock + Java</span>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded uppercase font-bold tracking-wider">Unlimited Slots</span>
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="relative z-10 flex flex-wrap justify-center gap-2">
                      <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] px-3 py-2 rounded-lg group-hover:border-emerald-500/30 group-hover:bg-white/[0.06] transition-all duration-300">
                        <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-xs font-bold text-gray-300">{plan.cpu}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] px-3 py-2 rounded-lg group-hover:border-emerald-500/30 group-hover:bg-white/[0.06] transition-all duration-300">
                        <Zap className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-xs font-bold text-gray-300">{plan.ram}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] px-3 py-2 rounded-lg group-hover:border-emerald-500/30 group-hover:bg-white/[0.06] transition-all duration-300">
                        <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-xs font-bold text-gray-300">{plan.storage}</span>
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="relative z-10 flex items-center gap-6 ml-auto flex-shrink-0">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">₹{calculatePrice(plan.basePrice)}<span className="text-sm font-normal text-gray-500">/mo</span></div>
                        {selectedCycle !== 'monthly' && (
                          <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-tighter text-right">Billed {selectedCycle}</div>
                        )}
                      </div>
                      <button
                        onClick={() => handleDeploy(plan)}
                        className="group/btn relative px-8 py-3 rounded-xl font-bold transition-all duration-500 flex items-center gap-2 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 bg-[length:200%_100%] animate-gradient-x" />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 flex items-center gap-2 text-white">
                          Build Server
                          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Features Row */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group bg-[#0c0e1a]/30 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:border-white/[0.12] transition-all duration-500">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
              <Shield className="w-7 h-7 text-emerald-400" />
            </div>
            <span className="text-sm font-bold orbitron-font text-gray-300 group-hover:text-white transition-colors">DDoS Protected</span>
          </div>
          <div className="group bg-[#0c0e1a]/30 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:border-white/[0.12] transition-all duration-500">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
              <Users className="w-7 h-7 text-emerald-400" />
            </div>
            <span className="text-sm font-bold orbitron-font text-gray-300 group-hover:text-white transition-colors">100% Uptime</span>
          </div>
          <div className="group bg-[#0c0e1a]/30 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:border-white/[0.12] transition-all duration-500">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500">
              <Zap className="w-7 h-7 text-emerald-400" />
            </div>
            <span className="text-sm font-bold orbitron-font text-gray-300 group-hover:text-white transition-colors">NVMe Gen4 Storage</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
