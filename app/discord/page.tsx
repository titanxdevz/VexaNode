"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight, Cpu, Zap, Shield, HardDrive,
  Sparkles, Terminal, Database,
  RotateCcw, Check, Globe, Code2, Rocket, ChevronDown
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

const botPlans = [
  {
    id: "starter",
    name: "Starter",
    basePrice: 24,
    buyUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-starter",
    ram: "512 MB RAM",
    cpu: "1 vCPU",
    disk: "15 GB NVMe SSD",
    backups: "1 Backup",
    databases: "1 Database",
    popular: false
  },
  {
    id: "basic",
    name: "Basic",
    basePrice: 60,
    buyUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-basic",
    ram: "1 GB RAM",
    cpu: "1 vCPU",
    disk: "20 GB NVMe SSD",
    backups: "1 Backup",
    databases: "1 Database",
    popular: false
  },
  {
    id: "silver",
    name: "Silver",
    basePrice: 95,
    buyUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-silver",
    ram: "2 GB RAM",
    cpu: "2 vCPU",
    disk: "40 GB NVMe SSD",
    backups: "1 Backup",
    databases: "1 Database",
    popular: true
  },
  {
    id: "gold",
    name: "Gold",
    basePrice: 149,
    buyUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-gold",
    ram: "4 GB RAM",
    cpu: "2 vCPU",
    disk: "60 GB NVMe SSD",
    backups: "2 Backups",
    databases: "1 Database",
    popular: false
  },
  {
    id: "platinum",
    name: "Platinum",
    basePrice: 200,
    buyUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-platinum",
    ram: "6 GB RAM",
    cpu: "2 vCPU",
    disk: "80 GB NVMe SSD",
    backups: "3 Backups",
    databases: "1 Database",
    popular: false
  },
  {
    id: "diamond",
    name: "Diamond",
    basePrice: 269,
    buyUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-diamond",
    ram: "8 GB RAM",
    cpu: "3 vCPU",
    disk: "120 GB NVMe SSD",
    backups: "4 Backups",
    databases: "1 Database",
    popular: false
  },
  {
    id: "netherite",
    name: "Netherite",
    basePrice: 329,
    buyUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-netherite",
    ram: "10 GB RAM",
    cpu: "4 vCPU",
    disk: "160 GB NVMe SSD",
    backups: "5 Backups",
    databases: "2 Databases",
    popular: false
  },
  {
    id: "obsidian",
    name: "Obsidian",
    basePrice: 399,
    buyUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-obsidian",
    ram: "12 GB RAM",
    cpu: "4 vCPU",
    disk: "240 GB NVMe SSD",
    backups: "10 Backups",
    databases: "5 Databases",
    popular: false
  }
]

const faqs = [
  {
    q: "Which programming languages and bot frameworks are supported?",
    a: "We support Node.js (Discord.js, Eris, Oceanic), Python (discord.py, disnake, hikari), Java (JDA, Discord4J), Go (Disgord, DiscordGo), C# (DSharpPlus), Rust, and Ruby with one-click environment versions."
  },
  {
    q: "How fast is deployment after ordering?",
    a: "Your Pterodactyl container is provisioned instantly upon payment confirmation. You will immediately receive access to your management panel, SFTP credentials, and web console."
  },
  {
    q: "Do you provide automated backups and MySQL databases?",
    a: "Yes! Every bot hosting plan includes automated cloud backups and free managed MySQL database instances that can be created with a single click in your panel."
  },
  {
    q: "Is DDoS protection included?",
    a: "All VexaNode containers are shielded by our 100Gbps+ multi-layer DDoS mitigation system to ensure your bot never goes offline during traffic spikes or malicious attacks."
  }
]

export default function DiscordBotPage() {
  const [selectedCycle, setSelectedCycle] = useState("monthly")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { formatPrice } = useCurrency()

  const calculatePrice = (base: number) => {
    const cycle = cycles.find(c => c.id === selectedCycle)
    if (!cycle) return base
    const price = base * (1 - cycle.discount)
    return Math.floor(price)
  }

  const handleDeploy = (plan: any) => {
    if (plan.buyUrl) {
      window.open(plan.buyUrl, "_blank")
      return
    }
    window.open("https://billing.vexanode.gg", "_blank")
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#10b981]/30 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.08),transparent_100%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <PageMeta title="Discord Bot Hosting — VexaNode" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section (Clean VisiHost Style) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            {/* Small Badge */}
            <div className="inline-block bg-[#10b981]/10 text-[#10b981] text-xs font-semibold px-3 py-1 rounded-md border border-[#10b981]/20 mb-4">
              Discord Bot Hosting
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black orbitron-font tracking-tight mb-4 text-white">
              High-Performance Discord{" "}
              <span className="text-[#10b981]">Bot Hosting</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              Deploy premium 24/7 Discord bot nodes powered by modern Pterodactyl container infrastructure. Experience ultra-low latency, unmetered network bandwidth, automated backups, and 99.9% uptime SLA for your Discord bots.
            </p>

            {/* Sub-links */}
            <div className="text-xs text-gray-500 flex flex-wrap items-center gap-1.5 font-medium">
              <span className="text-gray-400">Also Explore:</span>
              <Link href="/lavalink" className="text-[#10b981] hover:underline">Lavalink Hosting</Link>
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

        {/* 1. Choose Billing Cycle */}
        <div className="mb-10">
          <h3 className="text-xs font-bold text-gray-400 mb-3 tracking-wide">
            1. Choose Billing Cycle
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

        {/* 2. Choose Plan Grid (Clean VisiHost Style Cards) */}
        <div className="mb-20">
          <h3 className="text-xs font-bold text-gray-400 mb-4 tracking-wide">
            2. Choose Plan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {botPlans.map((plan) => {
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
                        <CustomIcons.Discord className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white orbitron-font">{plan.name}</h4>
                        <span className="text-[11px] text-gray-400">Discord Bot Node</span>
                      </div>
                    </div>

                    {/* Specs Rows (Horizontal Key-Value with Green Icons) */}
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
                        <span className="font-bold text-white">{plan.disk}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400 flex items-center gap-2">
                          <RotateCcw className="w-3.5 h-3.5 text-[#10b981]" />
                          Backups
                        </span>
                        <span className="font-bold text-white">{plan.backups}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400 flex items-center gap-2">
                          <Database className="w-3.5 h-3.5 text-[#10b981]" />
                          MySQL DB
                        </span>
                        <span className="font-bold text-white">{plan.databases}</span>
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
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold orbitron-font text-white mb-2">
              Why Bot Developers Choose VexaNode
            </h2>
            <p className="text-xs text-gray-400">
              Zero stuttering, clean audio buffers, and battle-tested container optimizations right out of the box.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Code2,
                title: "Any Language",
                desc: "Native support for Node.js, Python, Java (JDA), Go, Ruby, and Rust with one-click package installation."
              },
              {
                icon: Shield,
                title: "100Gbps+ DDoS Shield",
                desc: "Multi-layered mitigation filters out UDP/TCP floods without disconnecting your bot websocket gateway."
              },
              {
                icon: Check,
                title: "24/7 Uptime SLA",
                desc: "Continuous uptime monitoring with automated crash detection and instant container restarts."
              },
              {
                icon: Zap,
                title: "Instant Deployment",
                desc: "Your Pterodactyl bot container is provisioned immediately upon order confirmation."
              },
              {
                icon: Terminal,
                title: "Full File & Web Console",
                desc: "Real-time web console, file manager, SFTP access, and custom startup arguments."
              },
              {
                icon: Globe,
                title: "Global Low-Latency Routing",
                desc: "High-speed Tier-1 backbone directly peered for sub-millisecond Discord API response times."
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
              Everything you need to know about VexaNode Discord Bot hosting.
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

        {/* Bottom CTA */}
        <div className="text-center p-8 rounded-2xl bg-[#0a0d14] border border-white/[0.06]">
          <h2 className="text-xl sm:text-2xl font-bold orbitron-font uppercase tracking-tight text-white mb-2">Ready to Deploy Your Bot?</h2>
          <p className="text-gray-400 text-xs mb-6 max-w-lg mx-auto">Get your bot live in seconds with premium hardware and 24/7 technical support.</p>
          <div className="flex justify-center gap-3">
            <button 
              onClick={() => window.open("https://discord.gg/dJpMDfgUQq", "_blank")}
              className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] px-6 py-2.5 rounded-xl font-bold transition-all orbitron-font uppercase tracking-wider text-xs cursor-pointer"
            >
              Contact Support
            </button>
            <button 
              onClick={() => window.open("https://billing.vexanode.gg", "_blank")}
              className="bg-[#10b981] hover:bg-[#059669] text-black px-6 py-2.5 rounded-xl font-extrabold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] orbitron-font uppercase tracking-wider text-xs cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Get Started</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
