"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight, Cpu, Zap, HardDrive, Sparkles,
  Headphones, Plus, Activity, Volume2, Shield, Disc
} from "lucide-react"
import NumberFlow from "@number-flow/react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useCurrency } from "../contexts/CurrencyContext"
import CurrencySelector from "../components/CurrencySelector"
import Link from "next/link"

// Platform Brand Icons for supported sources
const MusicSources = {
  YouTube: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FF0000" />
    </svg>
  ),
  Spotify: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" fill="#1ED760" />
    </svg>
  ),
  SoundCloud: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M1.175 12.225c-.05 0-.095.045-.1.1l-.3 2.85c-.01.055.035.1.09.105h.31c.055 0 .1-.045.105-.1l.3-2.85c.01-.055-.035-.1-.09-.105h-.315zm1.525-.75c-.055 0-.105.045-.11.105l-.47 4.375c-.01.055.035.105.095.11h.39c.055 0 .1-.045.105-.105l.47-4.375c.01-.055-.035-.105-.095-.11h-.385zm1.605-.725c-.06 0-.11.045-.115.11l-.545 5.83c-.01.06.04.11.1.115h.455c.06 0 .11-.045.115-.11l.545-5.83c.01-.06-.04-.11-.1-.115h-.455zm1.65-.45c-.065 0-.12.05-.125.12l-.54 6.7c-.01.065.045.12.11.125h.505c.065 0 .12-.05.125-.12l.54-6.7c.01-.065-.045-.12-.11-.125h-.505zm1.69-.35c-.07 0-.13.055-.135.13l-.53 7.35c-.01.07.05.13.12.135h.565c.07 0 .13-.055.135-.13l.53-7.35c.01-.07-.05-.13-.12-.135h-.565zm13.315 2.15c-.455 0-.89.095-1.285.265-.42-2.91-2.92-5.165-5.965-5.165-1.575 0-3.03.605-4.135 1.6-.33.3-.615.64-.865 1.015-.11.165-.05.395.12.49.17.1.395.05.49-.12.215-.325.465-.62.75-.875.965-.87 2.24-1.4 3.64-1.4 2.68 0 4.88 1.995 5.215 4.59.04.305.27.535.575.565.485.045.92.17 1.305.365.175.09.395.03.49-.145.09-.175.03-.395-.145-.49zm-1.07 5.1c0 1.99-1.615 3.6-3.6 3.6h-6.23c-.085 0-.155-.07-.155-.155v-7.89c0-.085.07-.155.155-.155h.35c.085 0 .155.07.155.155v7.385h5.725c1.655 0 3-.145 3-1.8 0-1.655-1.345-1.8-3-1.8-.29 0-.545-.2-.615-.485-.31-1.29-1.465-2.215-2.835-2.215-.815 0-1.56.33-2.1.865-.17.17-.45.17-.62 0-.17-.17-.17-.45 0-.62.7-.7 1.675-1.125 2.72-1.125 1.785 0 3.295 1.22 3.715 2.89.445-.115.91-.175 1.39-.175 2.375 0 4.3 1.925 4.3 4.305z" fill="#FF5500" />
    </svg>
  ),
  Twitch: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2.149 0L.537 4.119v16.836h5.731V24h3.224l3.045-3.045h4.657l6.269-6.269V0H2.149zm19.164 13.612l-3.582 3.582h-5.731L8.955 20.239v-3.045H4.836V2.149h16.478v11.463zm-3.582-7.343v6.09h-2.149V6.269h2.149zm-5.731 0v6.09H9.851V6.269h2.149z" fill="#9146FF" />
    </svg>
  )
}

const cycles = [
  { id: "monthly", name: "Monthly", discount: 0 },
  { id: "quarterly", name: "Quarterly", discount: 0.05, label: "5% OFF" },
  { id: "semi-annually", name: "Semi-Annually", discount: 0.13, label: "13% OFF" },
  { id: "annually", name: "Annually", discount: 0.24, label: "24% OFF" }
]

const categories = [
  { id: "managed", name: "Managed Audio Nodes", icon: Disc },
  { id: "self-managed", name: "Self-Managed (Panel)", icon: Headphones }
]

const plans = {
  "managed": [
    {
      id: "managed-basic",
      name: "Studio Basic",
      basePrice: 240,
      buyUrl: "https://billing.vexanode.gg/products/lavalink-managed/managed-basic",
      memory: "2 GB JVM RAM",
      processor: "1 vCPU Dedicated",
      storage: "5 GB NVMe Audio Cache",
      port: "1 Gbps Direct Route",
      popular: false
    },
    {
      id: "managed-starter",
      name: "Studio Starter",
      basePrice: 300,
      buyUrl: "https://billing.vexanode.gg/products/lavalink-managed/managed-starter",
      memory: "4 GB JVM RAM",
      processor: "2 vCPU Dedicated",
      storage: "8 GB NVMe Audio Cache",
      port: "1 Gbps Direct Route",
      popular: false
    },
    {
      id: "managed-gold",
      name: "Festival Gold",
      basePrice: 419,
      buyUrl: "https://billing.vexanode.gg/products/lavalink-managed/managed-gold",
      memory: "6 GB JVM RAM",
      processor: "AMD High-Frequency",
      storage: "15 GB NVMe Audio Cache",
      port: "10 Gbps Low-Jitter",
      popular: true
    },
    {
      id: "managed-pro",
      name: "Broadcast Pro",
      basePrice: 500,
      buyUrl: "https://billing.vexanode.gg/products/lavalink-managed/managed-pro",
      memory: "8 GB+ JVM RAM",
      processor: "Dedicated AMD Cores",
      storage: "25 GB NVMe Audio Cache",
      port: "10 Gbps Unmetered",
      popular: false
    }
  ],
  "self-managed": [
    {
      id: "self-starter",
      name: "Track Starter",
      basePrice: 35,
      memory: "512 MB RAM",
      processor: "50% vCPU Core",
      storage: "1 GB NVMe SSD",
      port: "1 Gbps Port",
      popular: false
    },
    {
      id: "self-basic",
      name: "Track Basic",
      basePrice: 99,
      memory: "1 GB RAM",
      processor: "100% vCPU Core",
      storage: "2 GB NVMe SSD",
      port: "1 Gbps Port",
      popular: false
    },
    {
      id: "self-silver",
      name: "Club Silver",
      basePrice: 129,
      memory: "2 GB RAM",
      processor: "150% vCPU Core",
      storage: "4 GB NVMe SSD",
      port: "1 Gbps Port",
      popular: true
    },
    {
      id: "self-gold",
      name: "Club Gold",
      basePrice: 199,
      memory: "4 GB RAM",
      processor: "200% vCPU Core",
      storage: "8 GB NVMe SSD",
      port: "1 Gbps Port",
      popular: false
    },
    {
      id: "self-platinum",
      name: "Arena Platinum",
      basePrice: 279,
      memory: "6 GB RAM",
      processor: "250% vCPU Core",
      storage: "12 GB NVMe SSD",
      port: "1 Gbps Port",
      popular: false
    },
    {
      id: "self-diamond",
      name: "Arena Diamond",
      basePrice: 349,
      memory: "8 GB RAM",
      processor: "300% vCPU Core",
      storage: "16 GB NVMe SSD",
      port: "1 Gbps Port",
      popular: false
    },
    {
      id: "self-netherite",
      name: "Mainstage Ultra",
      basePrice: 429,
      memory: "10 GB RAM",
      processor: "350% vCPU Core",
      storage: "20 GB NVMe SSD",
      port: "1 Gbps Port",
      popular: false
    },
    {
      id: "self-obsidian",
      name: "Mainstage Titan",
      basePrice: 550,
      memory: "12 GB RAM",
      processor: "400% vCPU Core",
      storage: "24 GB NVMe SSD",
      port: "1 Gbps Port",
      popular: false
    }
  ]
}

const faqs = [
  {
    q: "What is the difference between Managed and Self-Managed?",
    a: "Managed Lavalink is completely handled by our team with automated setup, YouTube/Spotify plugin configurations, ongoing health monitoring, and auto-restarts. Self-Managed gives you direct Pterodactyl panel access to modify JVM arguments, YAML configuration, and upload custom plugins."
  },
  {
    q: "Which Discord bot libraries are supported?",
    a: "All major Lavalink client libraries work seamlessly: Discord.js (Lavalink-Client, Poru, Kazagumo, Erela.js, Shoukaku), Python (Wavelink, Lavalink.py, Mafic), Java (LavaPlayer, JDA Lavalink), Go, and C#."
  },
  {
    q: "Are YouTube and Spotify music sources supported?",
    a: "Yes! All nodes support YouTube, Spotify, SoundCloud, Apple Music, Deezer, Bandcamp, Twitch, and direct audio streams with active IPv6 rotating proxies."
  },
  {
    q: "How fast is deployment after ordering?",
    a: "Deployment is instantaneous. For Managed plans, connection credentials are sent immediately. For Self-Managed, your Pterodactyl container is active shortly after."
  }
]

export default function LavalinkClient() {
  const [selectedCategory, setSelectedCategory] = useState("managed")
  const [selectedCycle, setSelectedCycle] = useState("monthly")
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const { convertPrice, currency } = useCurrency()

  const calculatePrice = (base: number) => {
    const cycle = cycles.find(c => c.id === selectedCycle)
    if (!cycle) return base
    return Math.floor(base * (1 - cycle.discount))
  }

  const handleOrder = (plan: { buyUrl?: string }) => {
    window.open(plan.buyUrl ?? "https://billing.vexanode.gg", "_blank")
  }

  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#d97757]/30 relative overflow-hidden">

      {/* ── Soft ambient terracotta wash ── */}
      <div className="fixed inset-0 pointer-events-none -z-10 select-none overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[560px] bg-[radial-gradient(ellipse_90%_70%_at_50%_-15%,rgba(217,119,87,0.12),transparent_75%)]" />
        <div className="absolute top-[45%] right-[-10%] w-[520px] h-[520px] bg-[radial-gradient(circle,rgba(217,119,87,0.04),transparent_65%)]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* ── 1. MUSIC & AUDIO NODE HERO SECTION ── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            
            {/* Live Equalizer Visualizer & Badge */}
            <div className="inline-flex items-center gap-3 bg-[#d97757]/10 border border-[#d97757]/25 px-3.5 py-1.5 rounded-full mb-5">
              {/* CSS Animated Audio Equalizer Bars */}
              <div className="flex items-end gap-1 h-5 select-none">
                <span className="w-1 bg-[#d97757] rounded-full eq-bar-1" />
                <span className="w-1 bg-[#d97757]/50 rounded-full eq-bar-2" />
                <span className="w-1 bg-[#d97757] rounded-full eq-bar-3" />
                <span className="w-1 bg-[#d97757]/50 rounded-full eq-bar-4" />
                <span className="w-1 bg-[#d97757] rounded-full eq-bar-5" />
              </div>
              <span className="text-[11px] font-bold vx-accent-text uppercase tracking-wider">
                Low-Jitter Audio Nodes · JVM Tuned
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight vx-ink leading-[1.05] mb-4">
              Lavalink Audio{" "}
              <span className="vx-accent-text">Nodes.</span>
            </h1>

            {/* Studio Streaming Description */}
            <p className="vx-muted text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              Zero-stutter, low-latency Lavalink nodes engineered for Discord music bots.
              Stream many concurrent high-fidelity tracks with dedicated JVM heap memory,
              AMD single-core compute, and edge DDoS mitigation.
            </p>

            {/* Real Music Source Brands Strip */}
            <div className="flex items-center gap-3 p-2.5 rounded-2xl vx-card border border-[#d97757]/25 mb-6 max-w-fit">
              <span className="text-[11px] font-mono vx-muted font-bold uppercase tracking-wider pl-1">
                Audio Sources:
              </span>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg vx-bg-alt border vx-line text-xs font-medium vx-ink shadow-sm">
                  <MusicSources.YouTube className="w-4 h-4" />
                  YouTube
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg vx-bg-alt border vx-line text-xs font-medium vx-ink shadow-sm">
                  <MusicSources.Spotify className="w-4 h-4" />
                  Spotify
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg vx-bg-alt border vx-line text-xs font-medium vx-ink shadow-sm">
                  <MusicSources.SoundCloud className="w-4 h-4" />
                  SoundCloud
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg vx-bg-alt border vx-line text-xs font-medium vx-ink shadow-sm hidden sm:inline-flex">
                  <MusicSources.Twitch className="w-4 h-4" />
                  Twitch
                </span>
              </div>
            </div>

            {/* Sub-links */}
            <div className="text-xs vx-faint flex flex-wrap items-center gap-2 font-mono">
              <span className="vx-muted font-bold uppercase tracking-wider">Explore Services:</span>
              <Link href="/discord" className="hover:text-[#c96442] transition-colors">Discord Bot Hosting</Link>
              <span>•</span>
              <Link href="/games?game=minecraft" className="hover:text-[#c96442] transition-colors">Minecraft Hosting</Link>
              <span>•</span>
              <Link href="/vps" className="hover:text-[#c96442] transition-colors">Cloud VPS</Link>
              <span>•</span>
              <Link href="/databases" className="hover:text-[#c96442] transition-colors">Databases</Link>
            </div>
          </div>

          {/* Currency Selector & Quick Badge */}
          <div className="flex flex-col items-start lg:items-end gap-3 flex-shrink-0">
            <CurrencySelector />
            <div className="p-3 rounded-2xl vx-card border border-[#d97757]/30 text-right hidden lg:block shadow-lg">
              <div className="text-[11px] font-mono font-bold text-[#d97757] uppercase">Uptime Focus</div>
              <div className="text-xs font-black vx-ink mt-0.5">Dependable Audio Uptime</div>
            </div>
          </div>
        </div>

        {/* ── 2. PLAN CATEGORY & BILLING CYCLE SELECTOR ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          {/* Plan Type Pills */}
          <div>
            <span className="text-xs font-mono font-bold text-[#d97757] uppercase tracking-widest block mb-2">
              STEP 01 — NODE ARCHITECTURE
            </span>
            <div className="inline-flex vx-card p-1.5 rounded-2xl border border-[#d97757]/30 gap-1 shadow-md">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id
                const Icon = cat.icon
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#d97757] text-white shadow-sm"
                        : "vx-muted vx-hover-ink hover:bg-black/5"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cat.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Billing Cycle */}
          <div>
            <span className="text-xs font-mono font-bold vx-muted uppercase tracking-widest block mb-2 sm:text-right">
              STEP 02 — BILLING FREQUENCY
            </span>
            <div className="inline-flex vx-card p-1.5 rounded-2xl border vx-line gap-1 overflow-x-auto">
              {cycles.map((cycle) => (
                <button
                  key={cycle.id}
                  type="button"
                  onClick={() => setSelectedCycle(cycle.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    selectedCycle === cycle.id
                      ? "bg-[#d97757] text-white shadow-sm"
                      : "vx-muted vx-hover-ink"
                  }`}
                >
                  <span>{cycle.name}</span>
                  {cycle.discount > 0 && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase ${
                      selectedCycle === cycle.id ? "bg-white/25 text-white" : "bg-[#d97757]/15 text-[#d97757] border border-[#d97757]/30"
                    }`}>
                      {cycle.label}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── 3. PRICING & PLAN CARDS (RED/WHITE/BLACK PALETTE) ── */}
        <div className="mb-20">
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
                    className={`relative rounded-3xl border transition-all duration-300 p-6 flex flex-col justify-between hover:-translate-y-1.5 group vx-card ${
                      plan.popular
                        ? "border-[#d97757] ring-1 ring-[#d97757]/20 shadow-[0_12px_40px_-12px_rgba(217,119,87,0.4)] lg:scale-[1.03]"
                        : "vx-line hover:border-[#d97757]/50 shadow-sm hover:shadow-lg"
                    }`}
                  >
                    {/* Top Accent Line on Featured Plan */}
                    {plan.popular && (
                      <div className="absolute top-0 inset-x-8 h-[2px] bg-[#d97757] rounded-full" />
                    )}

                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d97757] text-white text-[10px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3 fill-white text-white" />
                        Recommended
                      </div>
                    )}

                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b vx-line">
                        <div>
                          <h4 className="text-lg font-black uppercase vx-ink tracking-wide">{plan.name}</h4>
                          <span className="text-[11px] font-mono vx-muted">Low-Jitter Lavalink</span>
                        </div>
                        <div className="w-10 h-10 rounded-2xl bg-[#d97757]/15 border border-[#d97757]/30 flex items-center justify-center p-2 text-[#d97757] flex-shrink-0 group-hover:scale-110 group-hover:bg-[#d97757] group-hover:text-white transition-all shadow-md">
                          <Volume2 className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Specs Rows with Red Icons */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-xs p-2 rounded-xl vx-bg-alt border vx-line">
                          <span className="vx-muted flex items-center gap-2">
                            <Zap className="w-3.5 h-3.5 text-[#d97757]" />
                            Heap RAM
                          </span>
                          <span className="font-bold vx-ink font-mono">{plan.memory}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs p-2 rounded-xl vx-bg-alt border vx-line">
                          <span className="vx-muted flex items-center gap-2">
                            <Cpu className="w-3.5 h-3.5 text-[#d97757]" />
                            Compute
                          </span>
                          <span className="font-bold vx-ink font-mono">{plan.processor}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs p-2 rounded-xl vx-bg-alt border vx-line">
                          <span className="vx-muted flex items-center gap-2">
                            <HardDrive className="w-3.5 h-3.5 text-[#d97757]" />
                            Audio Cache
                          </span>
                          <span className="font-bold vx-ink font-mono">{plan.storage}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs p-2 rounded-xl vx-bg-alt border vx-line">
                          <span className="vx-muted flex items-center gap-2">
                            <Activity className="w-3.5 h-3.5 text-[#d97757]" />
                            Throughput
                          </span>
                          <span className="font-bold vx-ink font-mono">{plan.port}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price & Bold Red Deploy CTA Button */}
                    <div className="pt-4 border-t vx-line">
                      <div className="flex items-baseline justify-between mb-4">
                        <span className="text-[11px] vx-faint uppercase tracking-wider font-bold">Starts At</span>
                        <div className="text-right flex items-baseline gap-1">
                          <NumberFlow
                            value={convertPrice(calculatePrice(plan.basePrice))}
                            format={{ style: "currency", currency: currency.code, maximumFractionDigits: 0 }}
                            className="text-3xl font-black vx-ink tracking-tight"
                          />
                          <span className="text-xs vx-muted font-medium">/mo</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleOrder(plan)}
                        className={`w-full font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] group/btn ${
                          plan.popular
                            ? "bg-[#d97757] hover:bg-[#c96442] text-white shadow-[0_8px_24px_-8px_rgba(217,119,87,0.6)]"
                            : "vx-solid"
                        }`}
                      >
                        <span>Deploy Lavalink</span>
                        <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── 4. AUDIO ARCHITECTURE HIGHLIGHTS ── */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#d97757] font-bold uppercase tracking-widest">
              HIGH-FIDELITY SPECS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight vx-ink mt-2">
              ENGINEERED FOR BOT MUSIC
            </h2>
            <p className="text-xs vx-muted mt-2">
              Everything required to eliminate voice channel audio jitter, buffering, and thread lag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Activity,
                title: "Many Concurrent Audio Streams",
                desc: "Dedicated JVM thread allocations guarantee seamless multi-guild playback without audio distortion or buffer starvation."
              },
              {
                icon: Shield,
                title: "IPv6 Rotating Proxy Pools",
                desc: "Automated IPv6 rotation prevents 429 rate-limiting on YouTube and Spotify scrapers to help maintain unblocked playback around the clock."
              },
              {
                icon: Zap,
                title: "Low Voice Ping",
                desc: "Direct BGP peering to Discord's primary voice gateway locations in US-East, Europe, and India."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl vx-card border vx-line hover:border-[#d97757]/40 transition-all duration-200 shadow-md group"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#d97757]/15 border border-[#d97757]/30 flex items-center justify-center text-[#d97757] mb-4 group-hover:scale-110 group-hover:bg-[#d97757] group-hover:text-white transition-all">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black uppercase vx-ink mb-2 tracking-wide">{item.title}</h4>
                <p className="text-xs vx-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. STUDIO FAQS ── */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-[#d97757] font-bold uppercase tracking-widest">KNOWLEDGE BASE</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase vx-ink mt-1">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xs vx-muted mt-1">
              Common technical details about our managed and self-managed Lavalink servers.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="rounded-2xl border vx-line vx-card overflow-hidden transition-all hover:border-[#d97757]/40 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold vx-ink">{faq.q}</span>
                    <span className={`flex-shrink-0 p-1 rounded-full transition-colors ${
                      isOpen ? "bg-[#d97757] text-white" : "bg-[#d97757]/10 text-[#d97757]"
                    }`}>
                      <Plus className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-[135deg]" : ""}`} />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 pb-5 text-xs vx-muted2 leading-relaxed border-t vx-line pt-3"
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
