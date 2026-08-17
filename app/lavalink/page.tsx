"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronRight, Cpu, Zap, HardDrive, Globe, Radio, Sparkles, 
  Headphones, ChevronDown, Check
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import { useCurrency } from "../contexts/CurrencyContext"
import CurrencySelector from "../components/CurrencySelector"
import Link from "next/link"

const LAVALINK_ICON = "https://res.cloudinary.com/dri6tqcsr/image/upload/v1786345276/lavalink_p0npoq.webp"

const cycles = [
  { id: "monthly", name: "Monthly", discount: 0 },
  { id: "quarterly", name: "Quarterly", discount: 0.05, label: "5% OFF" },
  { id: "semi-annually", name: "Semi-Annually", discount: 0.13, label: "13% OFF" },
  { id: "annually", name: "Annually", discount: 0.24, label: "24% OFF" }
]

const categories = [
  { id: "managed", name: "Managed", icon: Sparkles },
  { id: "self-managed", name: "Self-Managed", icon: Headphones }
]

const plans = {
  "managed": [
    {
      id: "managed-basic",
      name: "Basic",
      basePrice: 240,
      buyUrl: "https://billing.vexanode.gg/products/lavalink-managed/managed-basic",
      memory: "2 GB RAM",
      processor: "1 vCPU (Intel)",
      storage: "5 GB NVMe SSD",
      port: "1 Gbps Uplink",
      popular: false
    },
    {
      id: "managed-starter",
      name: "Starter",
      basePrice: 300,
      buyUrl: "https://billing.vexanode.gg/products/lavalink-managed/managed-starter",
      memory: "4 GB RAM",
      processor: "2 vCPU (Intel)",
      storage: "8 GB NVMe SSD",
      port: "1 Gbps Uplink",
      popular: false
    },
    {
      id: "managed-gold",
      name: "Gold",
      basePrice: 419,
      buyUrl: "https://billing.vexanode.gg/products/lavalink-managed/managed-gold",
      memory: "6 GB RAM",
      processor: "6 vCPU (AMD)",
      storage: "15 GB NVMe SSD",
      port: "1 Gbps Uplink",
      popular: true
    },
    {
      id: "managed-pro",
      name: "Pro",
      basePrice: 500,
      buyUrl: "https://billing.vexanode.gg/products/lavalink-managed/managed-pro",
      memory: "8 GB+ RAM",
      processor: "Dedicated Cores (AMD)",
      storage: "25 GB NVMe SSD",
      port: "1 Gbps Uplink",
      popular: false
    }
  ],
  "self-managed": [
    {
      id: "self-starter",
      name: "Starter",
      basePrice: 35,
      memory: "512 MB RAM",
      processor: "50% vCPU",
      storage: "1 GB NVMe SSD",
      port: "1 Gbps Uplink",
      popular: false
    },
    {
      id: "self-basic",
      name: "Basic",
      basePrice: 99,
      memory: "1 GB RAM",
      processor: "100% vCPU",
      storage: "2 GB NVMe SSD",
      port: "1 Gbps Uplink",
      popular: false
    },
    {
      id: "self-silver",
      name: "Silver",
      basePrice: 129,
      memory: "2 GB RAM",
      processor: "150% vCPU",
      storage: "4 GB NVMe SSD",
      port: "1 Gbps Uplink",
      popular: true
    },
    {
      id: "self-gold",
      name: "Gold",
      basePrice: 199,
      memory: "4 GB RAM",
      processor: "200% vCPU",
      storage: "8 GB NVMe SSD",
      port: "1 Gbps Uplink",
      popular: false
    },
    {
      id: "self-platinum",
      name: "Platinum",
      basePrice: 279,
      memory: "6 GB RAM",
      processor: "250% vCPU",
      storage: "12 GB NVMe SSD",
      port: "1 Gbps Uplink",
      popular: false
    },
    {
      id: "self-diamond",
      name: "Diamond",
      basePrice: 349,
      memory: "8 GB RAM",
      processor: "300% vCPU",
      storage: "16 GB NVMe SSD",
      port: "1 Gbps Uplink",
      popular: false
    },
    {
      id: "self-netherite",
      name: "Netherite",
      basePrice: 429,
      memory: "10 GB RAM",
      processor: "350% vCPU",
      storage: "20 GB NVMe SSD",
      port: "1 Gbps Uplink",
      popular: false
    },
    {
      id: "self-obsidian",
      name: "Obsidian",
      basePrice: 550,
      memory: "12 GB RAM",
      processor: "400% vCPU",
      storage: "24 GB NVMe SSD",
      port: "1 Gbps Uplink",
      popular: false
    }
  ]
}

const faqs = [
  {
    q: "What is the difference between Managed and Self-Managed?",
    a: "Managed Lavalink is completely handled by our team with automated setup, YouTube/Spotify plugin configurations, 24/7 health monitoring, and auto-restarts. Self-Managed gives you direct Pterodactyl panel access to modify JVM arguments, YAML configuration, and upload custom plugins."
  },
  {
    q: "Which Discord bot libraries are supported?",
    a: "All major Lavalink client libraries work seamlessly: Discord.js (Lavalink-Client, Poru, Kazagumo, Erela.js, Shoukaku), Python (Wavelink, Lavalink.py, Mafic), Java (LavaPlayer, JDA Lavalink), Go, and C#."
  },
  {
    q: "Are YouTube and Spotify music sources supported?",
    a: "Yes! All nodes support YouTube, Spotify, SoundCloud, Apple Music, Deezer, Bandcamp, Twitch, and direct audio streams."
  },
  {
    q: "How fast is deployment after ordering?",
    a: "Deployment is instantaneous. For Managed plans, connection credentials are sent immediately. For Self-Managed, your Pterodactyl container is active in under 30 seconds."
  }
]

export default function LavalinkPage() {
  const [selectedCategory, setSelectedCategory] = useState("managed")
  const [selectedCycle, setSelectedCycle] = useState("monthly")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { formatPrice } = useCurrency()

  const calculatePrice = (base: number) => {
    const cycle = cycles.find(c => c.id === selectedCycle)
    if (!cycle) return base
    const monthlyPrice = base * (1 - cycle.discount)
    return Math.floor(monthlyPrice)
  }

  const handleOrder = (plan: any) => {
    if (plan.buyUrl) {
      window.open(plan.buyUrl, "_blank")
    } else {
      window.open("https://billing.vexanode.gg", "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#10b981]/30 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.08),transparent_100%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <PageMeta title="Lavalink Server Hosting — VexaNode" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section (Clean VisiHost Style) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            {/* Small Badge */}
            <div className="inline-block bg-[#10b981]/10 text-[#10b981] text-xs font-semibold px-3 py-1 rounded-md border border-[#10b981]/20 mb-4">
              Lavalink Hosting
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black orbitron-font tracking-tight mb-4 text-white">
              High-Performance Lavalink{" "}
              <span className="text-[#10b981]">Server Hosting</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              Deploy premium 24/7 Lavalink nodes designed specifically for high-fidelity Discord music bots. Experience ultra-low latency audio streaming, unmetered playback, and robust DDoS protection. Perfect for handling hundreds of concurrent streams without any audio lag.
            </p>

            {/* Sub-links */}
            <div className="text-xs text-gray-500 flex flex-wrap items-center gap-1.5 font-medium">
              <span className="text-gray-400">Also Explore:</span>
              <Link href="/discord" className="text-[#10b981] hover:underline">Discord Bot Hosting</Link>
              <span>•</span>
              <Link href="/games" className="text-[#10b981] hover:underline">Game Servers</Link>
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

        {/* 1. Choose Plan Type */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-gray-400 mb-3 tracking-wide">
            1. Choose Plan Type
          </h3>
          <div className="w-full max-w-full overflow-x-auto no-scrollbar flex items-center gap-1.5 pb-1">
            <div className="inline-flex bg-[#0b0e14] p-1 rounded-xl border border-white/[0.08] flex-nowrap">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id
                const Icon = cat.icon
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
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

        {/* 3. Choose Plan Grid (Clean VisiHost Style Cards) */}
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
              {plans[selectedCategory as keyof typeof plans].map((plan: any) => {
                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-2xl bg-[#0a0d14]/90 border transition-all duration-300 p-5 flex flex-col justify-between hover:-translate-y-1 ${
                      plan.popular
                        ? "border-[#10b981] shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                        : "border-white/[0.08] hover:border-[#10b981]/40 hover:bg-[#0c1018]"
                    }`}
                  >
                    <div>
                      {/* Card Header: Icon + Plan Name + Subtitle */}
                      <div className="flex items-center gap-3.5 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center p-2 flex-shrink-0">
                          <img
                            src={LAVALINK_ICON}
                            alt="Lavalink"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white orbitron-font">{plan.name}</h4>
                          <span className="text-[11px] text-gray-400">Audio Node</span>
                        </div>
                      </div>

                      {/* Specs Rows (Horizontal Key-Value with Green Icons) */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400 flex items-center gap-2">
                            <Zap className="w-3.5 h-3.5 text-[#10b981]" />
                            Memory
                          </span>
                          <span className="font-bold text-white">{plan.memory}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400 flex items-center gap-2">
                            <Cpu className="w-3.5 h-3.5 text-[#10b981]" />
                            Processor
                          </span>
                          <span className="font-bold text-white">{plan.processor}</span>
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
                            {formatPrice(calculatePrice(plan.basePrice))}
                          </span>
                          <span className="text-xs text-gray-400">/mo</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleOrder(plan)}
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

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold orbitron-font text-white mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-gray-400">
              Everything you need to know about VexaNode Lavalink hosting.
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
