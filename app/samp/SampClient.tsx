"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight, Cpu, Zap, HardDrive,
  Gamepad2, Server, ChevronDown, Users, Radio,
  MapPin, Target, Flame, Activity, Crosshair
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import { useCurrency } from "../contexts/CurrencyContext"
import CurrencySelector from "../components/CurrencySelector"
import Link from "next/link"

const cycles = [
  { id: "monthly", name: "Monthly", discount: 0 },
  { id: "quarterly", name: "Quarterly", discount: 0.05, label: "5% OFF" },
  { id: "semi-annually", name: "Semi-Annually", discount: 0.13, label: "13% OFF" },
  { id: "annually", name: "Annually", discount: 0.24, label: "24% OFF" }
]

const sampPlans = [
  {
    id: "samp-starter",
    name: "STREET HUSTLER",
    tier: "TIER 01",
    stars: 1,
    ram: "1 GB DDR5",
    cpu: "1 vCPU @ 5.7 GHz",
    storage: "10 GB NVMe Gen4",
    slots: "25 Slots",
    bandwidth: "Unmetered 1 Gbps",
    ddos: "Game DDoS Shield",
    basePrice: 59,
    popular: false,
    tag: "STARTER DEPLOY"
  },
  {
    id: "samp-basic",
    name: "GROVE ENFORCER",
    tier: "TIER 02",
    stars: 2,
    ram: "2 GB DDR5",
    cpu: "1 vCPU @ 5.7 GHz",
    storage: "15 GB NVMe Gen4",
    slots: "50 Slots",
    bandwidth: "Unmetered 1 Gbps",
    ddos: "Game DDoS Shield",
    basePrice: 99,
    popular: false,
    tag: "CLAN READY"
  },
  {
    id: "samp-advanced",
    name: "SAN ANDREAS OG",
    tier: "TIER 03",
    stars: 3,
    ram: "4 GB DDR5",
    cpu: "2 vCPU @ 5.7 GHz",
    storage: "25 GB NVMe Gen4",
    slots: "100 Slots",
    bandwidth: "Unmetered 10 Gbps",
    ddos: "Game DDoS Shield",
    basePrice: 179,
    popular: true,
    tag: "MOST POPULAR ROLEPLAY"
  },
  {
    id: "samp-pro",
    name: "SYNDICATE BOSS",
    tier: "TIER 04",
    stars: 4,
    ram: "6 GB DDR5",
    cpu: "3 vCPU @ 5.7 GHz",
    storage: "40 GB NVMe Gen4",
    slots: "150 Slots",
    bandwidth: "Unmetered 10 Gbps",
    ddos: "Enterprise Anti-Query",
    basePrice: 249,
    popular: false,
    tag: "HEAVY FREEROAM"
  },
  {
    id: "samp-ultimate",
    name: "LOS SANTOS KINGPIN",
    tier: "TIER 05",
    stars: 5,
    ram: "8 GB DDR5",
    cpu: "4 vCPU @ 5.7 GHz",
    storage: "60 GB NVMe Gen4",
    slots: "200+ Slots",
    bandwidth: "Dedicated 10 Gbps",
    ddos: "Enterprise Anti-Query",
    basePrice: 349,
    popular: false,
    tag: "MAXIMUM CAPACITY"
  }
]

const locations = [
  { name: "India Gateway", city: "Mumbai / Delhi Hub", flag: "🇮🇳", ping: "Low Ping", code: "IX-BOM", desc: "Optimized routing for Indian players & Asian subcontinents" },
  { name: "US Coastline", city: "Miami / Dallas Nodes", flag: "🇺🇸", ping: "Low Ping", code: "US-MIA", desc: "Low-jitter transatlantic routing" },
  { name: "Europe Backbone", city: "Frankfurt DE-CIX", flag: "🇩🇪", ping: "Low Ping", code: "EU-FRA", desc: "Direct Tier-1 carrier interchange for European player base" },
  { name: "US Central", city: "Columbus, Ohio", flag: "🇺🇸", ping: "Low Ping", code: "US-CMH", desc: "Optimized multi-path routing across North American routes" }
]

const faqs = [
  {
    q: "What is SA-MP Hosting and which gamemodes run smoothly?",
    a: "We provide dedicated high-tickrate game hosting for San Andreas Multiplayer (SA-MP 0.3.7, 0.3.DL) and open.mp servers. Whether you run complex MySQL roleplay scripts (NG-RP, South Central, Godfather variants), crazy stunt freeroams, or high-APM TDM clans, our servers run with zero tick-drop."
  },
  {
    q: "How do I deploy my server and upload my scripts?",
    a: "Clicking 'Deploy Server' routes you straight to our official Discord (https://discord.gg/devz) where our bot provisions your node quickly. You receive full SFTP access to upload your .amx, filterscripts, plugin .so files, and edit server.cfg directly."
  },
  {
    q: "Do I get a dedicated MySQL database for player accounts?",
    a: "Yes! Every SA-MP plan comes with high-speed SSD-backed MySQL database instances included at zero extra cost, perfect for BlueG/maddinat0r MySQL plugins."
  },
  {
    q: "How does the Anti-Query Flood DDoS protection work?",
    a: "SA-MP is infamous for UDP query flood attacks that freeze server browsers and lag players. Our edge mitigation scrubs malicious query packets before they hit your CPU, keeping your ping stable."
  }
]

export default function SampHostingPage() {
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
    window.open("https://discord.gg/devz", "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-amber-500/30 selection:text-white relative overflow-hidden">
      
      {/* ── IMMERSIVE SAN ANDREAS THEMED BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none -z-10 select-none overflow-hidden">
        {/* Crisp black background with subtle California sunset amber crest */}
        <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(245,158,11,0.12),rgba(139,92,246,0.05)_45%,transparent_75%)]" />
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(217,119,6,0.04),transparent_65%)]" />
        <div className="absolute top-[50%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(139,92,246,0.03),transparent_65%)]" />
        
        {/* Subtle grid pattern matching site aesthetic */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <PageMeta title="SA-MP Server Hosting — San Andreas Multiplayer | VexaNode" />
      <Navbar />

      <main className="relative z-10 pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* ── 1. GTA SAN ANDREAS HERO SECTION ── */}
        <div className="relative mb-14 rounded-3xl border border-amber-500/20 vx-card p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
          {/* Top amber neon edge glow */}
          <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_12px_#f59e0b]" />

          {/* Palm Silhouette Line Overlay in Hero */}
          <svg
            className="absolute bottom-0 inset-x-0 w-full h-28 opacity-[0.08] text-amber-400 pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            fill="currentColor"
          >
            <path d="M0,120 L0,95 Q40,90 70,75 L75,120 L150,120 L152,45 L158,45 L160,120 L240,120 L245,60 L255,60 L260,120 L380,120 L385,80 L395,80 L400,120 L520,120 Q550,60 580,120 L680,120 L685,30 L695,30 L700,120 L820,120 L825,70 L835,70 L840,120 L960,120 L965,50 L975,50 L980,120 L1080,120 Q1120,40 1150,120 L1200,120 Z" />
          </svg>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            
            {/* Left Column: Heading, Wanted Stars, Narrative */}
            <div className="max-w-2xl">
              
              {/* Retro 90s-00s Console HUD Status Bar */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-black/80 border border-amber-500/40 mb-6 shadow-[0_0_15px_rgba(245,158,11,0.2)] flex-wrap">
                <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest font-black uppercase text-amber-400">
                  <span className="inline-block w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_8px_#f59e0b] animate-ping" />
                  STATUS: HIGH FPS ACTIVE
                </span>
                <span className="vx-faint">|</span>
                <span className="font-mono text-[11px] vx-muted2 font-bold tracking-wider uppercase">
                  SA-MP 0.3.7 • 0.3.DL • OPEN.MP
                </span>
                <span className="vx-faint">|</span>
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">
                  AMD RYZEN 9 9950X
                </span>
              </div>

              {/* 5-Star Wanted Level Indicator */}
              <div className="flex items-center gap-1.5 mb-3 select-none">
                {[1, 2, 3, 4, 5, 6].map((star) => (
                  <span
                    key={star}
                    className={`text-lg sm:text-xl transition-transform hover:scale-125 ${
                      star <= 5
                        ? "text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]"
                        : "vx-faint"
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-[11px] font-mono tracking-widest text-amber-400/90 font-black uppercase">
                  WANTED 5-STAR QUALITY
                </span>
              </div>

              {/* Stencil & San Andreas Font Style Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight vx-ink leading-[1.05] mb-5">
                SAN ANDREAS{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 drop-shadow-[0_2px_20px_rgba(245,158,11,0.4)]">
                  MULTIPLAYER
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[3.5px] bg-gradient-to-r from-amber-500 via-orange-500 to-transparent rounded-full opacity-90 shadow-[0_0_10px_#f59e0b]" />
                </span>
              </h1>

              {/* Gritty Street Copy */}
              <p className="vx-muted2 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Pure high-frequency performance tuned for San Andreas Multiplayer clans, roleplay cities, and open.mp freeroam. Zero tick-drop timer execution, dedicated NVMe Gen4 speeds, and hardware edge packet filters to keep your streets clear.
              </p>

              {/* Sub-links */}
              <div className="text-xs vx-muted flex flex-wrap items-center gap-2 font-mono">
                <span className="text-amber-400 font-bold uppercase tracking-wider">Quick Switch:</span>
                <Link href="/games?game=minecraft" className="hover:text-amber-300 transition-colors">Minecraft Hosting</Link>
                <span className="vx-faint">•</span>
                <Link href="/discord" className="hover:text-amber-300 transition-colors">Discord Bots</Link>
                <span className="vx-faint">•</span>
                <Link href="/lavalink" className="hover:text-amber-300 transition-colors">Lavalink Nodes</Link>
                <span className="vx-faint">•</span>
                <Link href="/vps" className="hover:text-amber-300 transition-colors">Cloud VPS</Link>
              </div>
            </div>

            {/* Right Column: Poster Vignette & Currency */}
            <div className="flex flex-col items-start lg:items-end gap-4 flex-shrink-0">
              <CurrencySelector />

              {/* Framed Los Santos Poster Card */}
              <div className="relative group rounded-2xl bg-gradient-to-b from-[#1c140d] via-[#100e16] to-[#09080e] border border-amber-500/40 p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:border-amber-400 transition-all duration-300">
                
                {/* Vintage San Andreas Badge Stamp */}
                <div className="absolute top-2.5 right-2.5 z-10 px-2.5 py-0.5 rounded bg-amber-500 text-zinc-950 font-mono text-[9px] font-black uppercase tracking-widest shadow-md">
                  LOS SANTOS 1992
                </div>

                <div className="relative overflow-hidden rounded-xl bg-black/70 border border-amber-500/10">
                  <img
                    src="/images/samp-banner.webp"
                    alt="San Andreas Multiplayer SA-MP Hosting"
                    className="w-56 sm:w-64 h-auto object-contain transition-transform duration-300 group-hover:scale-105 filter contrast-110"
                    loading="eager"
                  />
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_35px_rgba(0,0,0,0.85)]" />
                </div>

                <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono vx-muted px-1">
                  <span className="text-amber-400 font-bold uppercase tracking-wider">SA-MP &amp; OPEN.MP</span>
                  <span className="vx-faint">TITAN DEVZ ENGINE</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── 2. IN-GAME GPS RADAR STYLED LOCATIONS ── */}
        <div className="mb-14 rounded-3xl border vx-line vx-card p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b vx-line">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-black uppercase tracking-wider vx-ink">
                  IN-GAME GPS PEERING HUBS
                </h3>
                <p className="text-xs vx-muted">Direct IX-connected data centers chosen specifically for lowest player jitter</p>
              </div>
            </div>
            <span className="hidden sm:inline-flex text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full uppercase font-black tracking-widest">
              BGP TIER-1 ROUTING
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="group relative flex items-start gap-3.5 p-4 rounded-2xl vx-card border vx-line hover:border-amber-400 transition-all duration-200"
              >
                {/* GPS Radar Marker Icon */}
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-black vx-ink uppercase tracking-wide">
                      {loc.name} {loc.flag}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.2 rounded">
                      {loc.ping}
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-amber-300/80 mt-0.5">{loc.city}</div>
                  <p className="text-[10px] vx-muted mt-1 leading-snug">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. BILLING CYCLE SELECTOR ── */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-black text-amber-400 uppercase tracking-widest">PHASE 01</span>
            <span className="vx-faint">•</span>
            <h3 className="text-xs font-bold vx-muted2 uppercase tracking-wider">
              SELECT PAYMENT CONTRACT
            </h3>
          </div>

          <div className="w-full max-w-full overflow-x-auto no-scrollbar flex items-center gap-1.5 pb-1">
            <div className="inline-flex vx-card p-1.5 rounded-xl border border-amber-500/25 flex-nowrap gap-1">
              {cycles.map((cycle) => (
                <button
                  key={cycle.id}
                  type="button"
                  onClick={() => setSelectedCycle(cycle.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-black transition-all cursor-pointer whitespace-nowrap flex-shrink-0 flex items-center gap-2 uppercase tracking-wide ${
                    selectedCycle === cycle.id
                      ? "bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                      : "vx-muted vx-hover-ink"
                  }`}
                >
                  <span>{cycle.name}</span>
                  {cycle.discount > 0 && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase ${
                      selectedCycle === cycle.id ? "bg-black text-amber-400" : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    }`}>
                      {cycle.label}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── 4. PLAN CARDS (FULL GTA SAN ANDREAS THEME OVERHAUL) ── */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-xs font-mono font-black text-amber-400 uppercase tracking-widest">PHASE 02</span>
            <span className="vx-faint">•</span>
            <h3 className="text-xs font-bold vx-muted2 uppercase tracking-wider">
              SELECT GANG TIER &amp; SERVER SPECIFICATIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampPlans.map((plan) => {
              const price = calculatePrice(plan.basePrice)
              return (
                <div
                  key={plan.id}
                  className={`group relative rounded-3xl border transition-all duration-300 p-6 flex flex-col justify-between hover:-translate-y-1.5 ${
                    plan.popular
                      ? "border-amber-400/90 vx-card shadow-[0_0_30px_rgba(245,158,11,0.18)]"
                      : "vx-line vx-card hover:border-amber-500/50"
                  }`}
                >
                  {/* Street Tag Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[9px] font-mono font-black text-amber-400 uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/25">
                      {plan.tier}
                    </span>
                    <span className="text-[9px] font-mono font-bold vx-muted uppercase">
                      {plan.tag}
                    </span>
                  </div>

                  {/* Spray-Paint Stamp for Most Popular */}
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.6)] flex items-center gap-1.5 border border-amber-200">
                      <Flame className="w-3.5 h-3.5 fill-black text-black" />
                      MOST POPULAR ROLEPLAY
                    </div>
                  )}

                  <div>
                    {/* Card Header with Wanted Stars */}
                    <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-amber-500/15">
                      <div>
                        <h4 className="text-xl font-black uppercase vx-ink tracking-wide">{plan.name}</h4>
                        {/* GTA Wanted Stars for Plan Tier */}
                        <div className="flex items-center gap-1 mt-1.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${
                                i < plan.stars
                                  ? "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]"
                                  : "vx-faint"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all shadow-md">
                        <Gamepad2 className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Specs Rows with GTA Themed Icons */}
                    <div className="space-y-3 mb-7">
                      <div className="flex items-center justify-between text-xs p-2 rounded-lg vx-bg-alt border vx-line">
                        <span className="vx-muted flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          Dedicated Memory
                        </span>
                        <span className="font-bold vx-ink font-mono">{plan.ram}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs p-2 rounded-lg vx-bg-alt border vx-line">
                        <span className="vx-muted flex items-center gap-2">
                          <Cpu className="w-3.5 h-3.5 text-amber-400" />
                          AMD Clock Rate
                        </span>
                        <span className="font-bold vx-ink font-mono">{plan.cpu}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs p-2 rounded-lg vx-bg-alt border vx-line">
                        <span className="vx-muted flex items-center gap-2">
                          <HardDrive className="w-3.5 h-3.5 text-amber-400" />
                          Gen4 NVMe Disk
                        </span>
                        <span className="font-bold vx-ink font-mono">{plan.storage}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs p-2 rounded-lg vx-bg-alt border vx-line">
                        <span className="vx-muted flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-amber-400" />
                          Player Bandwidth
                        </span>
                        <span className="font-bold vx-ink font-mono">{plan.slots}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs p-2 rounded-lg vx-bg-alt border vx-line">
                        <span className="vx-muted flex items-center gap-2">
                          <Crosshair className="w-3.5 h-3.5 text-amber-400" />
                          Query Flood Armor
                        </span>
                        <span className="font-bold text-amber-400 font-mono text-[11px]">{plan.ddos}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Order Button */}
                  <div className="pt-4 border-t border-amber-500/20">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-[11px] font-mono vx-muted uppercase tracking-wider">Plan Cost</span>
                      <div className="text-right">
                        <span className="text-2xl sm:text-3xl font-black vx-ink font-mono tracking-tight">
                          {formatPrice(price)}
                        </span>
                        <span className="text-xs vx-muted font-medium">/mo</span>
                      </div>
                    </div>

                    <button
                      onClick={handleDeploy}
                      className={`w-full font-black py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] ${
                        plan.popular
                          ? "bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.55)]"
                          : "vx-solid hover:bg-amber-500 hover:text-black border border-amber-500/30 hover:border-amber-400 shadow-md"
                      }`}
                    >
                      <span>DEPLOY SA-MP SERVER</span>
                      <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── 5. GTA & SA-MP THEMED FEATURES SECTION ── */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-amber-400 font-black uppercase tracking-widest">
              LOS SANTOS UNDERGROUND ENGINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase vx-ink mt-2 tracking-tight">
              ALL SERVERS EQUIPPED WITH
            </h2>
            <p className="text-xs vx-muted mt-2 leading-relaxed">
              Engineered from the ground up for high-traffic GTA San Andreas multiplayer communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Crosshair,
                title: "Anti-Query Flood Filtering",
                desc: "High-capacity hardware firewall scrubs malicious SA-MP query packet floods, UDP amplifications, and fake-client spam without ping jitter."
              },
              {
                icon: Activity,
                title: "High-Frequency Timer Loops",
                desc: "Dedicated AMD 5.7 GHz single-core frequencies ensure complex Pawn callbacks, streamer plugins, and vehicle physics stay in lockstep."
              },
              {
                icon: Zap,
                title: "Rapid Provisioning",
                desc: "Automatic deployment directly through our Discord bot shortly after order confirmation with instant IP & root access."
              },
              {
                icon: Server,
                title: "Full SFTP & Web Console",
                desc: "Full file manager to deploy .amx gamemodes, filterscripts, custom soundpacks, crashdetect logs, and edit server.cfg seamlessly."
              },
              {
                icon: Target,
                title: "Free High-IOPS MySQL Database",
                desc: "Dedicated SSD-backed MySQL database instances included free with every plan for instant user accounts, inventory, and stats sync."
              },
              {
                icon: Radio,
                title: "SA-MP 0.3.7 & open.mp Ready",
                desc: "Seamlessly switch between legacy SA-MP 0.3.7 R2/R4, 0.3.DL custom models, or the new high-performance open.mp server architecture."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-3xl vx-card border border-amber-500/20 hover:border-amber-400/50 transition-all duration-200 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black uppercase vx-ink mb-2 tracking-wide">{feature.title}</h4>
                <p className="text-xs vx-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 6. GTA STYLE FAQS ── */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">STREET INTELLIGENCE</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase vx-ink mt-1">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xs vx-muted mt-1">
              Need answers before taking over the streets? Here is everything you need to know.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-amber-500/20 vx-card overflow-hidden transition-all hover:border-amber-400/40 shadow-md"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-amber-500/5 transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-black uppercase tracking-wide vx-ink">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-amber-400" : ""
                    }`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 pb-5 text-xs vx-muted2 leading-relaxed border-t border-amber-500/10 pt-3"
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
