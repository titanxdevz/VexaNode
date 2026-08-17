"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronRight, Cpu, Zap, Shield, HardDrive, 
  Gamepad2, Sparkles, Server, Check, ChevronDown, Radio 
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import { CustomIcons } from "../components/CustomIcons"
import { useCurrency } from "../contexts/CurrencyContext"
import CurrencySelector from "../components/CurrencySelector"
import Link from "next/link"

const cycles = [
  { id: "monthly", name: "Monthly", discount: 0 },
  { id: "quarterly", name: "Quarterly", discount: 0.05, label: "5% OFF" },
  { id: "semi-annually", name: "Semi-Annually", discount: 0.13, label: "13% OFF" },
  { id: "annually", name: "Annually", discount: 0.24, label: "24% OFF" }
]

const categories = [
  { id: "budget", name: "Budget Extreme", icon: CustomIcons.Intel, badge: "Intel Xeon / Ryzen 5" },
  { id: "premium", name: "Premium Ryzen 9", icon: CustomIcons.Ryzen, badge: "Ryzen 9 7950X / 9950X" }
]

const plans = {
  budget: [
    {
      id: "mc-seed",
      name: "Seed",
      cpu: "1 vCore (Intel Xeon)",
      ram: "1 GB RAM",
      storage: "15 GB NVMe SSD",
      port: "1 Gbps Uplink",
      basePrice: 60,
      popular: false
    },
    {
      id: "mc-sprout",
      name: "Sprout",
      cpu: "1 vCore (Intel Xeon)",
      ram: "2 GB RAM",
      storage: "30 GB NVMe SSD",
      port: "1 Gbps Uplink",
      basePrice: 120,
      popular: false
    },
    {
      id: "mc-stone",
      name: "Stone",
      cpu: "2 vCores (Intel Xeon)",
      ram: "4 GB RAM",
      storage: "60 GB NVMe SSD",
      port: "1 Gbps Uplink",
      basePrice: 240,
      popular: true
    },
    {
      id: "mc-iron",
      name: "Iron",
      cpu: "3 vCores (Intel Xeon)",
      ram: "6 GB RAM",
      storage: "90 GB NVMe SSD",
      port: "1 Gbps Uplink",
      basePrice: 360,
      popular: false
    }
  ],
  premium: [
    {
      id: "mc-diamond",
      name: "Diamond",
      cpu: "4 vCores (Ryzen 9 9950X)",
      ram: "8 GB DDR5 RAM",
      storage: "120 GB Gen4 NVMe",
      port: "1 Gbps Uplink",
      basePrice: 480,
      popular: false
    },
    {
      id: "mc-emerald",
      name: "Emerald",
      cpu: "6 vCores (Ryzen 9 9950X)",
      ram: "12 GB DDR5 RAM",
      storage: "180 GB Gen4 NVMe",
      port: "1 Gbps Uplink",
      basePrice: 720,
      popular: true
    },
    {
      id: "mc-obsidian",
      name: "Obsidian",
      cpu: "8 vCores (Ryzen 9 9950X)",
      ram: "16 GB DDR5 RAM",
      storage: "240 GB Gen4 NVMe",
      port: "1 Gbps Uplink",
      basePrice: 960,
      popular: false
    },
    {
      id: "mc-ender",
      name: "Ender",
      cpu: "12 vCores (Ryzen 9 9950X)",
      ram: "32 GB DDR5 RAM",
      storage: "480 GB Gen4 NVMe",
      port: "1 Gbps Uplink",
      basePrice: 1920,
      popular: false
    }
  ]
}

const faqs = [
  {
    q: "Can I install any Minecraft version, Forge, Fabric, or Paper?",
    a: "Yes! Our Pterodactyl game panel features a 1-click egg installer for Vanilla, Paper, Purpur, Spigot, Forge, Fabric, Mohist, BungeeCord, Velocity, and modpacks from CurseForge and Modrinth."
  },
  {
    q: "How fast is game server setup after ordering?",
    a: "Deployment is instantaneous. Your Minecraft server is automatically provisioned and ready for players in under 60 seconds."
  },
  {
    q: "Do you provide DDoS protection for game servers?",
    a: "Yes! All game nodes are shielded by 100Gbps+ Game-Specific DDoS filtering that protects against UDP floods, bot joins, and amplification attacks without raising ping."
  },
  {
    q: "Can I upgrade my RAM or CPU later?",
    a: "Yes, you can upgrade your plan at any time without losing any world data, plugins, or server configurations."
  }
]

export default function GameHostingPage() {
  const [selectedCategory, setSelectedCategory] = useState<"budget" | "premium">("budget")
  const [selectedCycle, setSelectedCycle] = useState("monthly")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { formatPrice } = useCurrency()

  const calculatePrice = (base: number) => {
    const cycle = cycles.find(c => c.id === selectedCycle)
    if (!cycle) return base
    const monthlyPrice = base * (1 - cycle.discount)
    return Math.floor(monthlyPrice)
  }

  const handleDeploy = (plan: any) => {
    window.open("https://billing.vexanode.gg", "_blank")
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#10b981]/30 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.08),transparent_100%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <PageMeta title="Minecraft & Game Server Hosting — VexaNode" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section (Clean VisiHost Style) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            {/* Small Badge */}
            <div className="inline-block bg-[#10b981]/10 text-[#10b981] text-xs font-semibold px-3 py-1 rounded-md border border-[#10b981]/20 mb-4">
              Game Server Hosting
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black orbitron-font tracking-tight mb-4 text-white">
              High-Performance Minecraft{" "}
              <span className="text-[#10b981]">Server Hosting</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              Deploy high-tickrate Minecraft game servers powered by AMD Ryzen 9 and high-clock Intel processors. Ultra-fast NVMe Gen4 storage, instant modpack installers, and unmetered DDoS defense.
            </p>

            {/* Sub-links */}
            <div className="text-xs text-gray-500 flex flex-wrap items-center gap-1.5 font-medium">
              <span className="text-gray-400">Also Explore:</span>
              <Link href="/discord" className="text-[#10b981] hover:underline">Discord Bot Hosting</Link>
              <span>•</span>
              <Link href="/lavalink" className="text-[#10b981] hover:underline">Lavalink Audio</Link>
              <span>•</span>
              <Link href="/vps" className="text-[#10b981] hover:underline">VPS Hosting</Link>
              <span>•</span>
              <Link href="/databases" className="text-[#10b981] hover:underline">Database Hosting</Link>
            </div>
          </div>

          {/* Top-Right Currency Selector */}
          <div className="flex-shrink-0 self-start lg:mt-2">
            <CurrencySelector />
          </div>
        </div>

        {/* 1. Choose Hardware Tier */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-gray-400 mb-3 tracking-wide">
            1. Choose Hardware Tier
          </h3>
          <div className="inline-flex flex-wrap bg-[#0b0e14] p-1 rounded-xl border border-white/[0.08] gap-1">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#10b981] text-black shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* 2. Choose Billing Cycle (Mobile Optimized Horizontal Scroll) */}
        <div className="mb-10">
          <h3 className="text-xs font-bold text-gray-400 mb-3 tracking-wide">
            2. Choose Billing Cycle
          </h3>
          <div className="w-full max-w-full overflow-x-auto no-scrollbar flex items-center gap-1.5 pb-1">
            <div className="inline-flex bg-[#0b0e14] p-1 rounded-xl border border-white/[0.08] flex-nowrap">
              {cycles.map((cycle) => (
                <button
                  key={cycle.id}
                  type="button"
                  onClick={() => setSelectedCycle(cycle.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex-shrink-0 flex items-center gap-1.5 ${
                    selectedCycle === cycle.id
                      ? "bg-[#10b981] text-black shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span>{cycle.name}</span>
                  {cycle.discount > 0 && (
                    <span className={`text-[9px] px-1 py-0.2 rounded font-black uppercase ${
                      selectedCycle === cycle.id ? "bg-black/20 text-black" : "bg-[#10b981]/15 text-[#10b981]"
                    }`}>
                      {cycle.label}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Choose Plan Grid (Clean Cards) */}
        <div className="mb-20">
          <h3 className="text-xs font-bold text-gray-400 mb-4 tracking-wide">
            3. Choose Plan
          </h3>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {plans[selectedCategory].map((plan) => {
                const price = calculatePrice(plan.basePrice)
                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-2xl bg-[#0a0d14]/90 border transition-all duration-300 p-5 flex flex-col justify-between hover:-translate-y-1 ${
                      plan.popular
                        ? "border-[#10b981] shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                        : "border-white/[0.08] hover:border-[#10b981]/40 hover:bg-[#0c1018]"
                    }`}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#10b981] to-[#059669] text-black text-[9px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.35)] flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 fill-black" />
                        Most Popular
                      </div>
                    )}

                    <div>
                      {/* Card Header: Icon + Plan Name + Subtitle */}
                      <div className="flex items-center gap-3.5 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center p-2 text-[#10b981] flex-shrink-0">
                          <Gamepad2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white orbitron-font">{plan.name}</h4>
                          <span className="text-[11px] text-gray-400">Game Server</span>
                        </div>
                      </div>

                      {/* Specs Rows */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400 flex items-center gap-2">
                            <Zap className="w-3.5 h-3.5 text-[#10b981]" />
                            Memory
                          </span>
                          <span className="font-bold text-white">{plan.ram}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400 flex items-center gap-2">
                            <Cpu className="w-3.5 h-3.5 text-[#10b981]" />
                            Processor
                          </span>
                          <span className="font-bold text-white">{plan.cpu}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400 flex items-center gap-2">
                            <HardDrive className="w-3.5 h-3.5 text-[#10b981]" />
                            Storage
                          </span>
                          <span className="font-bold text-white">{plan.storage}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400 flex items-center gap-2">
                            <Radio className="w-3.5 h-3.5 text-[#10b981]" />
                            Port
                          </span>
                          <span className="font-bold text-white">{plan.port}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price & Order Now Button */}
                    <div className="pt-4 border-t border-white/[0.06]">
                      <div className="flex items-baseline justify-between mb-4">
                        <span className="text-xs text-gray-500">Starting at</span>
                        <div className="text-right">
                          <span className="text-2xl font-black text-white orbitron-font">
                            {formatPrice(price)}
                          </span>
                          <span className="text-xs text-gray-400">/mo</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDeploy(plan)}
                        className="w-full bg-[#10b981] hover:bg-[#059669] text-black font-extrabold py-3 px-4 rounded-xl text-xs transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-[0.98] cursor-pointer"
                      >
                        <span>Order Now</span>
                        <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold orbitron-font text-white mb-2">
              Why Gamers Choose VexaNode
            </h2>
            <p className="text-xs text-gray-400">
              Low-ping game routes, high single-thread clock speeds, and 1-click modpack installer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Cpu,
                title: "5.7GHz+ Ryzen Processors",
                desc: "High single-core clock frequencies optimized for heavy entity counts and complex Redstone contraptions."
              },
              {
                icon: Shield,
                title: "Game-Specific DDoS Filter",
                desc: "Real-time packet inspection filters out malicious floods while keeping legitimate players connected."
              },
              {
                icon: Zap,
                title: "Instant Modpack Installer",
                desc: "Install CurseForge, FTB, and Modrinth modpacks with one click directly inside your Pterodactyl game panel."
              },
              {
                icon: HardDrive,
                title: "PCIe 4.0 NVMe Storage",
                desc: "Ultra-fast read/write speeds ensure zero chunk generation lag and instant world saves."
              },
              {
                icon: Server,
                title: "Full SFTP & Database Access",
                desc: "Direct file manager, sub-user permissions, scheduled backups, and free MySQL databases."
              },
              {
                icon: Check,
                title: "99.9% Uptime Guarantee",
                desc: "Redundant power feeds, enterprise Tier-3 datacenters, and automatic node failover mechanisms."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0b0c12]/60 border border-white/[0.06] hover:border-[#10b981]/30 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] mb-3">
                  <feature.icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white orbitron-font mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold orbitron-font text-white mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-gray-400">
              Everything you need to know about VexaNode Minecraft hosting.
            </p>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="rounded-xl border border-white/[0.06] bg-[#0b0e14]/60 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#10b981]" : ""
                    }`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-4 text-xs text-gray-400 leading-relaxed border-t border-white/[0.04] pt-2.5"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
