"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronRight, Cpu, Zap, Shield, HardDrive,
  Sparkles, Server, ChevronDown, Radio, Box,
  Pickaxe
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useCurrency } from "../contexts/CurrencyContext"
import CurrencySelector from "../components/CurrencySelector"
import Link from "next/link"

// Authentic Server Software Brand SVGs
const SoftwareIcons = {
  Paper: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="#90CAF9" />
      <path d="M14 2v6h6" fill="#1E88E5" />
      <circle cx="12" cy="14" r="2.5" fill="#FFFFFF" />
    </svg>
  ),
  Spigot: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" fill="#E65100" />
      <path d="M12 5l5 3.5v7L12 19l-5-3.5v-7L12 5z" fill="#FFB74D" />
      <rect x="10.5" y="9" width="3" height="6" fill="#FFFFFF" />
    </svg>
  ),
  Forge: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4 4h16v4H4V4zm2 6h12v4H6v-4zm3 6h6v4H9v-4z" fill="#B0BEC5" />
      <path d="M10 20h4v2h-4v-2z" fill="#37474F" />
      <circle cx="12" cy="6" r="1" fill="#FF7043" />
    </svg>
  ),
  Fabric: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8L12 11.8 5.2 8 12 4.2zm-7 5.6l6 3.3v6.7l-6-3.3v-6.7zm14 0v6.7l-6 3.3v-6.7l6-3.3z" fill="#CE93D8" />
      <path d="M12 13l-4-2.2v4.4L12 17.4l4-2.2v-4.4L12 13z" fill="#AB47BC" />
    </svg>
  ),
  Vanilla: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3l7.5 3.7L12 11.7 4.5 8 12 4.3zM4 9.5l7 3.5v7l-7-3.5v-7zm16 0v7l-7 3.5v-7l7-3.5z" fill="#5D9C42" />
      <rect x="9.5" y="11" width="5" height="5" fill="#7A583A" />
    </svg>
  ),
  IsometricCube: ({ className = "w-24 h-24" }: { className?: string }) => (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      {/* Top Face - Grass */}
      <polygon points="50,15 85,32 50,50 15,32" fill="#5D9C42" stroke="#4A7C35" strokeWidth="2" />
      {/* Top pixels / texture */}
      <rect x="42" y="24" width="8" height="6" fill="#6FB34E" opacity="0.8" transform="rotate(30 42 24)" />
      <rect x="58" y="28" width="6" height="5" fill="#4B7E36" opacity="0.8" transform="rotate(-30 58 28)" />
      {/* Left Face - Dirt / Stone */}
      <polygon points="15,32 50,50 50,85 15,68" fill="#5A3E26" stroke="#462F1C" strokeWidth="2" />
      <polygon points="15,32 50,50 50,56 15,38" fill="#4E7E36" />
      <rect x="25" y="52" width="6" height="6" fill="#3D2919" opacity="0.7" />
      <rect x="36" y="65" width="7" height="7" fill="#715033" opacity="0.6" />
      {/* Right Face - Shaded Dirt */}
      <polygon points="50,50 85,32 85,68 50,85" fill="#432E1C" stroke="#322214" strokeWidth="2" />
      <polygon points="50,50 85,32 85,38 50,56" fill="#3C632A" />
      <rect x="62" y="50" width="7" height="7" fill="#2E1E12" opacity="0.7" />
      <rect x="70" y="62" width="6" height="6" fill="#553B25" opacity="0.5" />
    </svg>
  )
}

const cycles = [
  { id: "monthly", name: "Monthly", discount: 0 },
  { id: "quarterly", name: "Quarterly", discount: 0.05, label: "5% OFF" },
  { id: "semi-annually", name: "Semi-Annually", discount: 0.13, label: "13% OFF" },
  { id: "annually", name: "Annually", discount: 0.24, label: "24% OFF" }
]

const plans = [
  {
    id: "mc-starter",
    name: "Solo World",
    tierName: "STARTER",
    target: "1 - 5 Players • Vanilla / Fabric",
    cpu: "100% vCPU (AMD Ryzen 9)",
    ram: "2 GB DDR5 RAM",
    storage: "8 GB Gen4 NVMe",
    network: "3 Gbps Network Port",
    basePrice: 99,
    popular: false
  },
  {
    id: "mc-basic",
    name: "Small Realm",
    tierName: "SURVIVAL",
    target: "5 - 15 Players • Paper / Light Mods",
    cpu: "200% vCPU (AMD Ryzen 9)",
    ram: "4 GB DDR5 RAM",
    storage: "15 GB Gen4 NVMe",
    network: "3 Gbps Network Port",
    basePrice: 179,
    popular: false
  },
  {
    id: "mc-pro",
    name: "Community Server",
    tierName: "MOST POPULAR",
    target: "15 - 40 Players • Heavy Modpacks / Plugins",
    cpu: "300% vCPU (AMD Ryzen 9)",
    ram: "8 GB DDR5 RAM",
    storage: "25 GB Gen4 NVMe",
    network: "10 Gbps High-Speed",
    basePrice: 399,
    popular: true
  },
  {
    id: "mc-advanced",
    name: "Mega SMP",
    tierName: "SMP REALM",
    target: "40 - 80 Players • Large Worlds & Dynmap",
    cpu: "500% vCPU (AMD EPYC/Ryzen)",
    ram: "16 GB DDR5 RAM",
    storage: "30 GB Gen4 NVMe",
    network: "10 Gbps High-Speed",
    basePrice: 749,
    popular: false
  },
  {
    id: "mc-extreme",
    name: "Network Hub",
    tierName: "BUNGEECORD",
    target: "80 - 150 Players • Multi-Server Proxies",
    cpu: "600% vCPU (AMD EPYC/Ryzen)",
    ram: "24 GB DDR5 RAM",
    storage: "50 GB Gen4 NVMe",
    network: "10 Gbps Dedicated",
    basePrice: 1399,
    popular: false
  },
  {
    id: "mc-ultimate",
    name: "Custom Enterprise",
    tierName: "ULTIMATE CLUSTER",
    target: "200+ Players • Network Clusters & Mini-games",
    cpu: "800% vCPU (Dedicated AMD Cores)",
    ram: "32 GB DDR5 RAM",
    storage: "70 GB Gen4 NVMe",
    network: "10 Gbps Dedicated",
    basePrice: 1699,
    popular: false
  }
]

const faqs = [
  {
    q: "Can I install any Minecraft version, Forge, Fabric, or Paper?",
    a: "Yes! Our game panel features 1-click installer eggs for Vanilla, PaperMC, Purpur, Spigot, Forge, Fabric, NeoForge, Mohist, BungeeCord, and Velocity, plus 1-click modpack installs from CurseForge and Modrinth."
  },
  {
    q: "Which Java versions are supported?",
    a: "We provide automated 1-click switcher support for Java 8 (1.8-1.16), Java 11, Java 17 (1.17-1.20.4), and Java 21 (1.20.5+ and 1.21 Tricky Trials) with zero manual flag configuration needed."
  },
  {
    q: "How fast is game server setup after ordering?",
    a: "Deployment is fast. Your Minecraft server is automatically provisioned and ready for players within moments of checkout."
  },
  {
    q: "Do you provide DDoS protection for game servers?",
    a: "Yes! All game nodes are shielded by game-specific DDoS filtering that stops bot flood joins, null-ping attacks, and UDP reflection spam without raising tickrate latency."
  },
  {
    q: "Can I upgrade my RAM or CPU later?",
    a: "Yes, you can upgrade your plan at any time without losing world saves, player data, whitelist, or custom plugin configurations."
  }
]

export default function GamesClient() {
  const [selectedCycle, setSelectedCycle] = useState("monthly")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { formatPrice } = useCurrency()

  const calculatePrice = (base: number) => {
    const cycle = cycles.find(c => c.id === selectedCycle)
    if (!cycle) return base
    const monthlyPrice = base * (1 - cycle.discount)
    return Math.floor(monthlyPrice)
  }

  const handleDeploy = () => {
    window.open("https://billing.vexanode.gg", "_blank")
  }

  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#5D9C42]/40 relative overflow-hidden">

      {/* ── VOXEL MINECRAFT BACKGROUND THEME ── */}
      <div className="fixed inset-0 pointer-events-none -z-10 select-none overflow-hidden">
        {/* Grass-green & Stone-gray soft ambient glow at the top */}
        <div className="absolute top-0 inset-x-0 h-[650px] bg-[radial-gradient(ellipse_100%_75%_at_50%_-15%,rgba(93,156,66,0.10),rgba(122,88,58,0.05)_40%,transparent_80%)]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* ── 1. MINECRAFT THEMED HERO SECTION ── */}
        <div className="relative mb-14 rounded-3xl border border-[#5D9C42]/25 vx-card p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
          {/* Top pixel accent line */}
          <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-[#5D9C42] to-transparent shadow-[0_0_12px_#5D9C42]" />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* Left Column: Heading, Software Ribbon, Java Chips */}
            <div className="max-w-2xl">

              {/* Stepped Minecraft Style Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg vx-bg-alt border border-[#5D9C42]/40 mb-6 shadow-[0_0_15px_rgba(93,156,66,0.2)] flex-wrap">
                <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest font-black uppercase text-[#5D9C42]">
                  <span className="inline-block w-2 h-2 bg-[#5D9C42] shadow-[0_0_8px_#5D9C42]" />
                  HIGH TICKRATE
                </span>
                <span className="vx-faint">|</span>
                <span className="font-mono text-[11px] vx-muted2 font-bold tracking-wider uppercase">
                  1.21 READY • TRICKY TRIALS
                </span>
                <span className="vx-faint">|</span>
                <span className="text-[10px] font-mono font-bold text-[#5D9C42] uppercase tracking-widest">
                  AMD RYZEN 9
                </span>
              </div>

              {/* Bold Chunky Headline with Blocky Texture Accent */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight vx-ink leading-[1.05] mb-5">
                <span className="text-[#5D9C42] drop-shadow-[0_2px_20px_rgba(93,156,66,0.35)]">
                  MINECRAFT
                </span>{" "}
                <br className="hidden sm:inline" />
                SERVER HOSTING.
              </h1>

              {/* Description */}
              <p className="vx-muted2 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Deploy high-tickrate Minecraft game servers on dedicated AMD Ryzen 9 and EPYC infrastructure. Gen4 NVMe arrays eliminate chunk-generation lag, with 1-click modpack installers, automated world backups, and DDoS defense.
              </p>

              {/* Real Server Software Logos Strip */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-2xl vx-bg-alt border border-[#5D9C42]/20 mb-6 flex-wrap max-w-fit">
                <span className="text-[10px] font-mono vx-muted font-bold uppercase tracking-wider pl-1">
                  1-Click Engines:
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg vx-card border vx-line text-xs font-semibold vx-ink">
                    <SoftwareIcons.Paper className="w-3.5 h-3.5" />
                    Paper
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg vx-card border vx-line text-xs font-semibold vx-ink">
                    <SoftwareIcons.Fabric className="w-3.5 h-3.5" />
                    Fabric
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg vx-card border vx-line text-xs font-semibold vx-ink">
                    <SoftwareIcons.Forge className="w-3.5 h-3.5" />
                    Forge
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg vx-card border vx-line text-xs font-semibold vx-ink">
                    <SoftwareIcons.Spigot className="w-3.5 h-3.5" />
                    Spigot
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg vx-card border vx-line text-xs font-semibold vx-ink hidden sm:inline-flex">
                    <SoftwareIcons.Vanilla className="w-3.5 h-3.5" />
                    Vanilla
                  </span>
                </div>
              </div>

              {/* Supported Java Versions Chips */}
              <div className="flex items-center gap-2 text-xs font-mono vx-muted">
                <span className="text-[#5D9C42] font-bold uppercase">Supported Java:</span>
                <span className="px-2 py-0.5 rounded vx-card border vx-line text-[10px] font-bold vx-ink">Java 8</span>
                <span className="px-2 py-0.5 rounded vx-card border vx-line text-[10px] font-bold vx-ink">Java 17</span>
                <span className="px-2 py-0.5 rounded bg-[#5D9C42]/20 border border-[#5D9C42]/40 text-[10px] font-bold text-[#5D9C42]">Java 21 (LTS)</span>
              </div>
            </div>

            {/* Right Column: Stylized Isometric Block Visual */}
            <div className="flex flex-col items-start lg:items-end gap-5 flex-shrink-0">
              <CurrencySelector />

              <div className="relative group rounded-3xl vx-bg-alt border border-[#5D9C42]/35 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center text-center">
                <SoftwareIcons.IsometricCube className="w-28 h-28 drop-shadow-[0_0_25px_rgba(93,156,66,0.35)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3" />
                <div className="mt-3 text-sm font-black uppercase tracking-wider vx-ink">
                  CHUNK LOAD ACCELERATION
                </div>
                <div className="text-[11px] font-mono text-[#5D9C42] mt-0.5">
                  Fast Gen4 NVMe World Saves
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── 2. BILLING CYCLE SELECTOR ── */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#5D9C42] uppercase tracking-widest">STEP 01</span>
            <span className="vx-faint">•</span>
            <h3 className="text-xs font-bold vx-muted2 uppercase tracking-wider">
              Choose Billing Cycle
            </h3>
          </div>

          <div className="w-full max-w-full overflow-x-auto no-scrollbar flex items-center gap-1.5 pb-1">
            <div className="inline-flex vx-card p-1.5 rounded-xl border border-[#5D9C42]/25 flex-nowrap gap-1">
              {cycles.map((cycle) => (
                <button
                  key={cycle.id}
                  type="button"
                  onClick={() => setSelectedCycle(cycle.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex-shrink-0 flex items-center gap-2 ${
                    selectedCycle === cycle.id
                      ? "bg-[#5D9C42] text-white font-black shadow-[0_0_15px_rgba(93,156,66,0.4)]"
                      : "vx-muted vx-hover-ink"
                  }`}
                >
                  <span>{cycle.name}</span>
                  {cycle.discount > 0 && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded font-black uppercase ${
                      selectedCycle === cycle.id ? "bg-black/20 text-white" : "bg-[#5D9C42]/20 text-[#5D9C42] border border-[#5D9C42]/30"
                    }`}>
                      {cycle.label}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── 3. PRICING CARDS (MINECRAFT SCALE THEMED) ── */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xs font-mono font-bold text-[#5D9C42] uppercase tracking-widest">STEP 02</span>
            <span className="vx-faint">•</span>
            <h3 className="text-xs font-bold vx-muted2 uppercase tracking-wider">
              Choose World Tier &amp; Resource Allocation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const price = calculatePrice(plan.basePrice)
              return (
                <div
                  key={plan.id}
                  className={`group relative rounded-3xl border transition-all duration-300 p-6 flex flex-col justify-between hover:-translate-y-1.5 vx-card ${
                    plan.popular
                      ? "border-[#5D9C42] shadow-[0_0_35px_rgba(93,156,66,0.22)]"
                      : "vx-line hover:border-[#5D9C42]/50"
                  }`}
                >
                  {/* Top Green Accent Bar on Featured Plan */}
                  {plan.popular && (
                    <div className="absolute top-0 inset-x-8 h-[2px] bg-[#5D9C42] shadow-[0_0_12px_#5D9C42]" />
                  )}

                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#5D9C42] text-white text-[10px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(93,156,66,0.5)] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-white text-white" />
                      COMMUNITY CHOICE
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-[#5D9C42]/15">
                      <div>
                        <div className="text-[10px] font-mono font-black text-[#5D9C42] uppercase tracking-wider">
                          {plan.tierName}
                        </div>
                        <h4 className="text-xl font-black uppercase vx-ink tracking-wide mt-0.5">{plan.name}</h4>
                        <div className="text-[11px] vx-muted mt-1 font-medium">{plan.target}</div>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-[#5D9C42]/15 border border-[#5D9C42]/30 flex items-center justify-center text-[#5D9C42] flex-shrink-0 group-hover:scale-110 group-hover:bg-[#5D9C42] group-hover:text-white transition-all shadow-md">
                        <Box className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Specs Rows with Grass Green & Stone Accents */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-xs p-2 rounded-xl vx-bg-alt border vx-line">
                        <span className="vx-muted flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-[#5D9C42]" />
                          DDR5 Memory
                        </span>
                        <span className="font-bold vx-ink font-mono">{plan.ram}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs p-2 rounded-xl vx-bg-alt border vx-line">
                        <span className="vx-muted flex items-center gap-2">
                          <Cpu className="w-3.5 h-3.5 text-[#5D9C42]" />
                          Processor Thread
                        </span>
                        <span className="font-bold vx-ink font-mono">{plan.cpu}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs p-2 rounded-xl vx-bg-alt border vx-line">
                        <span className="vx-muted flex items-center gap-2">
                          <HardDrive className="w-3.5 h-3.5 text-[#5D9C42]" />
                          Chunk Storage
                        </span>
                        <span className="font-bold vx-ink font-mono">{plan.storage}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs p-2 rounded-xl vx-bg-alt border vx-line">
                        <span className="vx-muted flex items-center gap-2">
                          <Radio className="w-3.5 h-3.5 text-[#5D9C42]" />
                          Network Speed
                        </span>
                        <span className="font-bold vx-ink font-mono">{plan.network}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Order Button */}
                  <div className="pt-4 border-t border-[#5D9C42]/20">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-[11px] font-mono vx-faint uppercase tracking-wider">Starts At</span>
                      <div className="text-right">
                        <span className="text-2xl sm:text-3xl font-black vx-ink font-mono tracking-tight">
                          {formatPrice(price)}
                        </span>
                        <span className="text-xs vx-muted font-medium">/mo</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeploy(plan)}
                      className={`w-full font-black py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] ${
                        plan.popular
                          ? "bg-[#5D9C42] hover:bg-[#4E8337] text-white shadow-[0_0_25px_rgba(93,156,66,0.35)] hover:shadow-[0_0_35px_rgba(93,156,66,0.5)]"
                          : "vx-bg-alt hover:bg-[#5D9C42] hover:text-white vx-ink border border-[#5D9C42]/40 hover:border-[#5D9C42]"
                      }`}
                    >
                      <span>DEPLOY MINECRAFT NODE</span>
                      <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── 4. MINECRAFT ARCHITECTURE & MODPACK CAPABILITIES ── */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#5D9C42] font-bold uppercase tracking-widest">
              OPTIMIZED SERVER ENGINES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight vx-ink mt-2">
              All Minecraft Plans Include
            </h2>
            <p className="text-xs vx-muted mt-2">
              Everything built for zero tick-drop multiplayer gameplay, automated world preservation, and seamless modpack loading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Cpu,
                title: "AMD EPYC & Ryzen 9 Boost",
                desc: "High single-core clock speeds deliver consistently high tick rates with heavy entity counts, mob farms, and Redstone logic."
              },
              {
                icon: HardDrive,
                title: "Gen4 NVMe Chunk Caching",
                desc: "Fast NVMe read/write speeds eliminate chunk generation stutter and allow near-instant world loading and Elytra flights."
              },
              {
                icon: Pickaxe,
                title: "1-Click Modpacks & Plugins",
                desc: "Instant egg installer for Paper, Fabric, Forge, Purpur, Spigot, and direct imports from CurseForge and Modrinth."
              },
              {
                icon: Shield,
                title: "Minecraft DDoS Filter",
                desc: "Game-specific edge mitigation shields against BungeeCord spoof joins, null-ping floods, and UDP amplifications."
              },
              {
                icon: Zap,
                title: "Instant Setup",
                desc: "Automatic deployment provisions your server with a dedicated port and full root SFTP access within moments."
              },
              {
                icon: Server,
                title: "Pterodactyl Game Panel",
                desc: "Live console logs, online player lists, world file manager, automated scheduled backups, and sub-user management."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-3xl vx-card border vx-line hover:border-[#5D9C42]/40 transition-all duration-200 shadow-md"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#5D9C42]/15 border border-[#5D9C42]/30 flex items-center justify-center text-[#5D9C42] mb-4 group-hover:scale-110 group-hover:bg-[#5D9C42] group-hover:text-white transition-all">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black uppercase vx-ink mb-2 tracking-wide">{feature.title}</h4>
                <p className="text-xs vx-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. MINECRAFT FAQS ── */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-[#5D9C42] font-bold uppercase tracking-widest">MINECRAFT FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase vx-ink mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs vx-muted mt-1">
              Everything you need to know about our Minecraft server nodes.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="rounded-2xl border vx-line vx-card overflow-hidden transition-all hover:border-[#5D9C42]/35 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-black uppercase tracking-wide vx-ink">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 vx-muted transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#5D9C42]" : ""
                    }`} />
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
