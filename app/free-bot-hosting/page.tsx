"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronRight, Cpu, Zap, Shield, HardDrive,
  Sparkles, Radio, MessageSquare, ArrowUpRight,
  ChevronDown, Rocket, Globe
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import { CustomIcons } from "../components/CustomIcons"
import Link from "next/link"

const DISCORD_INVITE = "https://discord.gg/dJpMDfgUQq"

// Real Brand Tech Icons
const TechIcons = {
  NodeJS: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm6.7 13.9L12 19.8l-6.7-3.9V7.9L12 4l6.7 3.9v8z" fill="#68a063" />
      <path d="M12 6.5L6.8 9.5v5l5.2 3 5.2-3v-5L12 6.5z" fill="#339933" />
    </svg>
  ),
  Python: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.9 2C8.3 2 8.5 3.6 8.5 3.6l.04 1.7h3.4v.5H5.4S2 5.4 2 9.5s2.9 3.9 2.9 3.9h1.7v-2.4c0-1.4 1.2-2.5 2.6-2.5h5.3V5.6c0-1.7-2.6-3.6-2.6-3.6zm-1.8 1.4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB" />
      <path d="M12.1 22c3.6 0 3.4-1.6 3.4-1.6l-.04-1.7h-3.4v-.5h6.5s3.4.4 3.4-3.7-2.9-3.9-2.9-3.9h-1.7v2.4c0 1.4-1.2 2.5-2.6 2.5H9.5v2.9c0 1.7 2.6 3.6 2.6 3.6zm1.8-1.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD43B" />
    </svg>
  ),
  Java: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8.8 16.5c-2.3.2-4.1.7-4.1 1.3 0 .8 3.3 1.4 7.4 1.4s7.4-.6 7.4-1.4c0-.6-1.8-1.1-4.2-1.3-.9.6-2.1.9-3.2.9s-2.4-.3-3.3-.9z" fill="#ED8B00" />
      <path d="M14.6 13.9c1.9.4 3.4 1 3.4 1.7 0 .8-2.6 1.4-5.9 1.4s-5.9-.6-5.9-1.4c0-.7 1.4-1.3 3.3-1.7-.8-.8-1.3-1.9-1.3-3.1 0-2.6 2-4.8 3.9-7.8 0 0 .5 2-1 4.5 1.5.3 2.8 1.2 3.6 2.4.9 1.4 1.1 2.9-.1 4z" fill="#5382A1" />
    </svg>
  ),
  Rust: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.2c-4.5 0-8.2-3.7-8.2-8.2S7.5 3.8 12 3.8s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z" fill="#DEA584" />
      <path d="M12 6.5c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm0 8.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" fill="#CE412B" />
    </svg>
  ),
  Pterodactyl: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.8L4.6 7 12 3.3 19.4 7 12 9.8zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}

const faqs = [
  {
    q: "Is VexaNode Free Bot Hosting really 100% free?",
    a: "Yes, completely free forever! No credit card, payment details, or hidden fees are required. You get a dedicated Pterodactyl container simply by being a member of our Discord server."
  },
  {
    q: "What hardware specs do I get on the Free Plan?",
    a: "You get 50% vCPU core allocation, 512 MB DDR4/DDR5 RAM, 1 GB NVMe SSD storage, unmetered network bandwidth, and full web console access."
  },
  {
    q: "Which bot programming languages and frameworks are supported?",
    a: "We support Node.js (Discord.js, Eris), Python (discord.py, disnake, hikari), Java (JDA), Rust (serenity, poise), Go, and custom binary builds with instant package installation."
  },
  {
    q: "How do I claim my free bot container?",
    a: "1. Join our Discord community at discord.gg/dJpMDfgUQq\n2. Navigate to the #free-bot-hosting channel\n3. Click claim to receive your automated Pterodactyl credentials in seconds!"
  },
  {
    q: "Can I upgrade to a premium plan later?",
    a: "Yes! When your bot joins many guilds and needs more RAM or dedicated CPU threads, you can upgrade seamlessly without data loss or downtime."
  }
]

export default function FreeBotHostingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#00ff88]/30 selection:text-black relative overflow-hidden">
      
      {/* ── DEVELOPER-FOCUSED PURE BLACK BACKGROUND WITH SCANLINES & DOT MATRIX ── */}
      <div className="fixed inset-0 pointer-events-none -z-10 select-none overflow-hidden">
        {/* Subtle glowing neon green apex aurora */}
        <div className="absolute top-0 inset-x-0 h-[650px] bg-[radial-gradient(ellipse_100%_70%_at_50%_-15%,rgba(0,255,136,0.14),rgba(16,185,129,0.05)_45%,transparent_80%)]" />
        <div className="absolute top-[30%] left-[-10%] w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(0,255,136,0.04),transparent_65%)]" />
        
        {/* Fine Developer Terminal Dot Grid Matrix */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#00ff88_1px,transparent_1px)] [background-size:24px_24px]" />
        {/* Subtle CRT code scanlines */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(0,255,136,0.3)_1px,transparent_1px)] [background-size:100%_4px]" />
      </div>

      <PageMeta 
        title="100% Free Discord Bot Hosting — Node.js, Python, Java & Rust | VexaNode" 
      />
      <Navbar />

      <main className="relative z-10 pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* ── 1. DEVELOPER-FIRST HERO & SOCIAL PROOF STRIP ── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          <div className="max-w-3xl">
            {/* Special Offer Neon Tag */}
            <div className="inline-flex items-center gap-2 bg-[#00ff88]/10 text-[#00ff88] text-xs font-mono font-bold px-3.5 py-1.5 rounded-md border border-[#00ff88]/30 mb-5 shadow-[0_0_15px_rgba(0,255,136,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88] animate-pulse" />
              <span>$ FREE_TIER_INIT — 100% FREE DISCORD BOT HOSTING</span>
            </div>

            {/* Bolder, Larger Headline with Neon Focus */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight vx-ink leading-[1.08] mb-4">
              Free Always-On Discord <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-[#10b981] to-[#34d399] drop-shadow-[0_0_30px_rgba(0,255,136,0.35)]">
                Bot Hosting.
              </span>
            </h1>

            {/* Description with Developer Focus */}
            <p className="vx-muted text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              Zero cost, zero credit cards, zero sleep mode. Run Discord.js, Python, Java, and Rust bots with 50% dedicated vCPU, NVMe storage, and Pterodactyl panel control. Claim your free container instantly on Discord.
            </p>

            {/* Live Social Proof Stat Strip */}
            <div className="inline-flex flex-wrap items-center gap-x-6 gap-y-2 p-3 rounded-xl vx-card border vx-line mb-6 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] shadow-[0_0_6px_#00ff88]" />
                <span className="vx-ink font-bold">Active</span>
                <span className="vx-faint">Bots Online</span>
              </div>
              <span className="vx-faint">|</span>
              <div className="flex items-center gap-2">
                <span className="text-[#00ff88] font-bold">Dependable</span>
                <span className="vx-faint">Node Uptime</span>
              </div>
              <span className="vx-faint">|</span>
              <div className="flex items-center gap-2">
                <span className="vx-ink font-bold">Always-On</span>
                <span className="vx-faint">Availability</span>
              </div>
            </div>

            {/* Sub-links */}
            <div className="text-xs vx-faint flex flex-wrap items-center gap-2 font-mono">
              <span className="vx-muted font-bold uppercase tracking-wider">Explore Upgrades:</span>
              <Link href="/discord" className="text-[#00ff88] hover:underline">Premium Bot Nodes</Link>
              <span>•</span>
              <Link href="/lavalink" className="vx-muted vx-hover-ink transition-colors">Lavalink Audio</Link>
              <span>•</span>
              <Link href="/games?game=minecraft" className="vx-muted vx-hover-ink transition-colors">Minecraft Hosting</Link>
              <span>•</span>
              <Link href="/vps" className="vx-muted vx-hover-ink transition-colors">Cloud VPS</Link>
            </div>
          </div>

          {/* Quick Discord CTA Card with Glow Treatment */}
          <div className="relative group vx-card border border-[#5865F2]/40 hover:border-[#5865F2]/70 p-5 rounded-2xl flex items-center gap-4 flex-shrink-0 shadow-[0_0_30px_rgba(88,101,242,0.18)] hover:shadow-[0_0_40px_rgba(88,101,242,0.3)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#5865F2]/20 border border-[#5865F2]/40 flex items-center justify-center text-[#5865F2] shadow-[0_0_15px_rgba(88,101,242,0.25)]">
              <CustomIcons.Discord className="w-7 h-7 text-[#5865F2]" />
            </div>
            <div>
              <div className="text-xs font-bold vx-ink uppercase tracking-wider">VexaNode Community</div>
              <div className="text-[11px] vx-muted font-mono">Growing Bot Developer Community</div>
            </div>
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(88,101,242,0.35)] cursor-pointer active:scale-95"
            >
              <span>Join & Claim</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ── 2. COMMUNITY FREE TIER SPEC CARD ── */}
        <div className="max-w-xl mx-auto mb-20">
          <div className="relative rounded-3xl vx-card border-2 border-[#00ff88] shadow-[0_0_45px_rgba(0,255,136,0.25)] p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
            
            {/* Subtle top neon ambient beam */}
            <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent shadow-[0_0_15px_#00ff88]" />

            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00ff88] text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(0,255,136,0.6)] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 fill-black text-black" />
              100% FREE FOREVER
            </div>

            <div>
              {/* Card Header: Icon + Plan Name + Supported Language Chips */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#00ff88]/15 border border-[#00ff88]/30 flex items-center justify-center p-2.5 text-[#00ff88] flex-shrink-0 shadow-[0_0_20px_rgba(0,255,136,0.25)]">
                    <CustomIcons.Discord className="w-6 h-6 text-[#00ff88]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black vx-ink">Community Free Tier</h3>
                    <span className="text-xs text-[#00ff88] font-mono font-bold">Always-On Dedicated Container Node</span>
                  </div>
                </div>
              </div>

              {/* Supported Language Chips at a glance */}
              <div className="flex items-center gap-1.5 mb-5 p-2 rounded-xl vx-bg-alt border vx-line">
                <span className="text-[10px] font-mono vx-muted uppercase font-bold px-2">Runtimes:</span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#339933]/15 border border-[#339933]/30 text-[10px] font-mono font-bold text-[#68a063]">
                    <TechIcons.NodeJS className="w-3 h-3" />
                    Node.js
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#3776AB]/15 border border-[#3776AB]/30 text-[10px] font-mono font-bold text-[#3776ab]">
                    <TechIcons.Python className="w-3 h-3" />
                    Python
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#ED8B00]/15 border border-[#ED8B00]/30 text-[10px] font-mono font-bold text-[#ed8b00]">
                    <TechIcons.Java className="w-3 h-3" />
                    Java
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#dea584]/15 border border-[#dea584]/30 text-[10px] font-mono font-bold text-[#dea584]">
                    <TechIcons.Rust className="w-3 h-3" />
                    Rust
                  </span>
                </div>
              </div>

              {/* Specs Key-Value Rows */}
              <div className="space-y-3 mb-6 vx-bg-alt p-4 rounded-2xl border vx-line font-mono">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="vx-muted flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#00ff88]" />
                    CPU Allocation
                  </span>
                  <span className="font-bold vx-ink">50% Dedicated Core</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="vx-muted flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#00ff88]" />
                    Memory (RAM)
                  </span>
                  <span className="font-bold vx-ink">512 MB DDR4/DDR5</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="vx-muted flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-[#00ff88]" />
                    NVMe Storage
                  </span>
                  <span className="font-bold vx-ink">1 GB Gen4 NVMe</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="vx-muted flex items-center gap-2">
                    <TechIcons.Pterodactyl className="w-4 h-4 text-[#00ff88]" />
                    Control Panel
                  </span>
                  <span className="font-bold text-[#00ff88] flex items-center gap-1">
                    Pterodactyl Panel
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="vx-muted flex items-center gap-2">
                    <Radio className="w-4 h-4 text-[#00ff88]" />
                    Sleep Mode
                  </span>
                  <span className="font-bold text-[#00ff88]">None (Always Online)</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="vx-muted flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#00ff88]" />
                    DDoS Mitigation
                  </span>
                  <span className="font-bold vx-ink">Always-On Shield</span>
                </div>
              </div>
            </div>

            {/* Dominant ₹0.00 Price & Neon Claim Button */}
            <div className="pt-4 border-t vx-line">
              <div className="flex items-baseline justify-between mb-5">
                <span className="text-xs font-mono vx-faint uppercase tracking-wider">Total Due</span>
                <div className="text-right">
                  <span className="text-4xl sm:text-5xl font-black vx-ink font-mono tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    ₹0.00
                  </span>
                  <span className="text-xs text-[#00ff88] font-mono font-bold ml-1.5 uppercase">/ FOREVER</span>
                </div>
              </div>

              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#00ff88] hover:bg-[#00e67a] text-black font-black py-4 px-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] active:scale-[0.98] cursor-pointer"
              >
                <span>CLAIM FREE CONTAINER ON DISCORD</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </a>
              <p className="text-center text-[11px] font-mono vx-faint mt-2.5">
                Instant activation upon joining • No credit card or billing details
              </p>
            </div>
          </div>
        </div>

        {/* ── 3. HOW IT WORKS - 3 TERMINAL STEP PROMPTS ── */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#00ff88] font-bold uppercase tracking-widest">$ DEPLOYMENT_GUIDE</span>
            <h2 className="text-2xl sm:text-3xl font-black vx-ink mt-1">
              How to Claim Your Free Bot Host
            </h2>
            <p className="text-xs vx-muted mt-1">
              Get your Discord bot online in three simple terminal steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "$ 01",
                title: "Join Discord Server",
                desc: "Join our verified developer community via discord.gg/dJpMDfgUQq and verify your account.",
                icon: MessageSquare
              },
              {
                step: "$ 02",
                title: "Claim Free Node",
                desc: "Navigate to the #free-bot-hosting channel and claim your instant 50% CPU bot container.",
                icon: Sparkles
              },
              {
                step: "$ 03",
                title: "Deploy Your Code",
                desc: "Login to Pterodactyl, upload your Discord.js, Python, or Rust bot scripts, and stay online around the clock.",
                icon: Rocket
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl vx-card border vx-line hover:border-[#00ff88]/40 transition-all relative overflow-hidden group shadow-lg"
              >
                <div className="text-2xl font-black vx-faint font-mono absolute top-4 right-4 group-hover:text-[#00ff88]/30 transition-colors">
                  {item.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center text-[#00ff88] mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold vx-ink mb-2">{item.title}</h3>
                <p className="text-xs vx-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. FEATURE HIGHLIGHTS GRID WITH REAL TECH LOGOS ── */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#00ff88] font-bold uppercase tracking-widest">$ RUNTIME_CAPABILITIES</span>
            <h2 className="text-2xl sm:text-3xl font-black vx-ink mt-1">
              Everything You Need to Host for Free
            </h2>
            <p className="text-xs vx-muted mt-1">
              Full developer freedom without artificial locks, sleep modes, or arbitrary shutdowns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Cpu,
                title: "50% Dedicated vCPU",
                desc: "Smooth execution for Discord.js, Python, Java, and Rust bots without CPU throttling or thread capping."
              },
              {
                customHeader: (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="p-1 rounded bg-[#339933]/15 border border-[#339933]/30"><TechIcons.NodeJS className="w-4 h-4" /></span>
                    <span className="p-1 rounded bg-[#3776AB]/15 border border-[#3776AB]/30"><TechIcons.Python className="w-4 h-4" /></span>
                    <span className="p-1 rounded bg-[#ED8B00]/15 border border-[#ED8B00]/30"><TechIcons.Java className="w-4 h-4" /></span>
                    <span className="p-1 rounded bg-[#DEA584]/15 border border-[#DEA584]/30"><TechIcons.Rust className="w-4 h-4" /></span>
                  </div>
                ),
                title: "Node.js, Python, Java & Rust",
                desc: "Pre-installed environments for Discord.js v14, discord.py, JDA Java, and Rust serenity frameworks."
              },
              {
                icon: Shield,
                title: "DDoS Protection",
                desc: "High-capacity network filtering to keep your bot immune to malicious packet floods and connection drops."
              },
              {
                icon: HardDrive,
                title: "Fast NVMe Gen4 Storage",
                desc: "High-speed NVMe storage for your bot files, local SQLite databases, caching, and logs."
              },
              {
                customHeader: (
                  <div className="w-10 h-10 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center text-[#00ff88] mb-4">
                    <TechIcons.Pterodactyl className="w-5 h-5" />
                  </div>
                ),
                title: "Pterodactyl Control Panel",
                desc: "Live web terminal console, file manager, package installer, and real-time RAM/CPU monitoring."
              },
              {
                icon: Globe,
                title: "Active Discord Community",
                desc: "Direct peer support and developer channels to help troubleshoot bot code and library updates."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl vx-card border vx-line hover:border-[#00ff88]/40 transition-all duration-200 shadow-md group"
              >
                {feature.customHeader ? (
                  feature.customHeader
                ) : feature.icon ? (
                  <div className="w-10 h-10 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center text-[#00ff88] mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5" />
                  </div>
                ) : null}
                <h4 className="text-sm font-bold vx-ink mb-2">{feature.title}</h4>
                <p className="text-xs vx-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 5. FAQS SECTION ── */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-[#00ff88] font-bold uppercase tracking-widest">$ MAN_PAGES</span>
            <h2 className="text-2xl sm:text-3xl font-black vx-ink mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs vx-muted mt-1">
              Common questions about our Free Bot Hosting tier.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="rounded-xl border vx-line vx-card overflow-hidden transition-all hover:border-[#00ff88]/30"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-black/[0.03] transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold vx-ink">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 vx-muted transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#00ff88]" : ""
                    }`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 pb-5 text-xs vx-muted2 leading-relaxed border-t vx-line pt-3 whitespace-pre-line font-mono"
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

        {/* ── 6. BOTTOM CTA ── */}
        <div className="text-center p-8 sm:p-12 rounded-3xl vx-card border vx-line shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-[#00ff88]/50 to-transparent" />
          
          <span className="text-xs font-mono text-[#00ff88] font-bold uppercase tracking-widest">$ READY_TO_SHIP</span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight vx-ink mt-2 mb-2">
            Ready to Launch Your Free Bot?
          </h2>
          <p className="vx-muted text-xs sm:text-sm mb-6 max-w-lg mx-auto">
            Join the Discord server and claim your always-on free Pterodactyl container in just a few minutes.
          </p>
          <div className="flex justify-center gap-3">
            <a 
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00ff88] hover:bg-[#00e67a] text-black px-6 py-3.5 rounded-xl font-black transition-all shadow-[0_0_25px_rgba(0,255,136,0.35)] hover:shadow-[0_0_35px_rgba(0,255,136,0.5)] uppercase tracking-wider text-xs cursor-pointer inline-flex items-center gap-2 active:scale-95"
            >
              <span>Join Discord &amp; Claim Free Container</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
