"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ChevronRight, Cpu, Zap, Shield, HardDrive,
  Gamepad2, Sparkles, Server, ChevronDown, Users, Globe2, Radio
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
    name: "Starter",
    stars: "★",
    ram: "1 GB",
    cpu: "1 vCPU",
    storage: "10 GB NVMe",
    slots: "25 Players",
    ddos: "Included",
    basePrice: 59,
    popular: false
  },
  {
    id: "samp-basic",
    name: "Basic",
    stars: "★★",
    ram: "2 GB",
    cpu: "1 vCPU",
    storage: "15 GB NVMe",
    slots: "50 Players",
    ddos: "Included",
    basePrice: 99,
    popular: false
  },
  {
    id: "samp-advanced",
    name: "Advanced",
    stars: "★★★",
    ram: "4 GB",
    cpu: "2 vCPU",
    storage: "25 GB NVMe",
    slots: "100 Players",
    ddos: "Included",
    basePrice: 179,
    popular: true
  },
  {
    id: "samp-pro",
    name: "Pro",
    stars: "★★★★",
    ram: "6 GB",
    cpu: "3 vCPU",
    storage: "40 GB NVMe",
    slots: "150 Players",
    ddos: "Included",
    basePrice: 249,
    popular: false
  },
  {
    id: "samp-ultimate",
    name: "Ultimate",
    stars: "★★★★★",
    ram: "8 GB",
    cpu: "4 vCPU",
    storage: "60 GB NVMe",
    slots: "200 Players",
    ddos: "Included",
    basePrice: 349,
    popular: false
  }
]

const locations = [
  { name: "India", flag: "🇮🇳", desc: "Ultra-low ping for Indian subcontinent" },
  { name: "USA", flag: "🇺🇸", desc: "Central & East Coast low latency" },
  { name: "Germany", flag: "🇩🇪", desc: "High-speed European backbone" },
  { name: "Ohio", flag: "🇺🇸", desc: "Optimized North American routing" }
]

const faqs = [
  {
    q: "What is SA-MP Hosting and which versions are supported?",
    a: "We provide dedicated high-tickrate game hosting for San Andreas Multiplayer (SA-MP 0.3.7, 0.3.DL) and open.mp servers with full plugin support, streamer plugins, crashdetect, and custom native extensions."
  },
  {
    q: "How do I order and setup my SA-MP server?",
    a: "Clicking 'Order Now' will redirect you directly to our official Discord community (https://discord.gg/devz) where our automated deployment bot and support team will instantly provision your server."
  },
  {
    q: "Can I use custom gamemodes and MySQL databases?",
    a: "Yes! You get full SFTP file manager access to upload your .amx gamemodes, filterscripts, scriptfiles, and server.cfg, along with free managed MySQL databases."
  },
  {
    q: "Is DDoS protection included on all SA-MP plans?",
    a: "Yes! Every SA-MP plan is shielded by always-on Game-Specific DDoS filtering that stops UDP reflection attacks and SAMP query flood attacks without affecting your player ping."
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
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#10b981]/30 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.08),transparent_100%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <PageMeta title="SA-MP Server Hosting — VexaNode" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
          <div className="max-w-2xl">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 bg-[#10b981]/10 text-[#10b981] text-xs font-semibold px-3 py-1 rounded-md border border-[#10b981]/20 mb-4">
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Reliable • DDoS Protected • 24/7 Online</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black orbitron-font tracking-tight mb-4 text-white">
              SA-MP <span className="text-[#10b981]">Hosting</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              Deploy high-performance San Andreas Multiplayer (SA-MP) & open.mp servers. NVMe storage, 24/7 uptime guarantee, instant setup, and multi-location deployment across India, USA, Germany, and Ohio.
            </p>

            {/* Sub-links */}
            <div className="text-xs text-gray-500 flex flex-wrap items-center gap-1.5 font-medium">
              <span className="text-gray-400">Also Explore:</span>
              <Link href="/games?game=minecraft" className="text-[#10b981] hover:underline">Minecraft Hosting</Link>
              <span>•</span>
              <Link href="/discord" className="text-[#10b981] hover:underline">Discord Bot Hosting</Link>
              <span>•</span>
              <Link href="/lavalink" className="text-[#10b981] hover:underline">Lavalink Audio</Link>
              <span>•</span>
              <Link href="/vps" className="text-[#10b981] hover:underline">VPS Hosting</Link>
            </div>
          </div>

          {/* Right Column: Currency Selector & SA-MP Logo Card */}
          <div className="flex flex-col items-start lg:items-end gap-4 flex-shrink-0">
            <CurrencySelector />
            <div className="relative group rounded-2xl bg-[#0a0d14]/80 border border-white/[0.08] p-3 backdrop-blur-md hover:border-[#10b981]/40 transition-all shadow-[0_0_25px_rgba(16,185,129,0.1)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#10b981]/10 to-transparent rounded-2xl pointer-events-none" />
              <img
                src="/images/samp-banner.webp"
                alt="San Andreas Multiplayer SA-MP Hosting"
                className="w-48 sm:w-56 h-auto object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-transform duration-300 group-hover:scale-105"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Available Locations Bar */}
        <div className="mb-10 p-5 rounded-2xl bg-[#0a0d14]/90 border border-white/[0.08] backdrop-blur-md">
          <div className="flex items-center gap-2 mb-3">
            <Globe2 className="w-4 h-4 text-[#10b981]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Available Locations
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#10b981]/30 transition-all"
              >
                <span className="text-2xl">{loc.flag}</span>
                <div>
                  <div className="text-sm font-bold text-white orbitron-font">{loc.name}</div>
                  <div className="text-[10px] text-gray-400">{loc.desc}</div>
                </div>
              </div>
            ))}
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

        {/* 2. Choose Plan Grid */}
        <div className="mb-20">
          <h3 className="text-xs font-bold text-gray-400 mb-4 tracking-wide">
            2. Choose Plan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sampPlans.map((plan) => {
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
                    {/* Card Header */}
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center p-2 text-[#10b981] flex-shrink-0">
                        <Gamepad2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-base font-bold text-white orbitron-font">{plan.name}</h4>
                          <span className="text-[#10b981] text-xs font-bold tracking-widest">{plan.stars}</span>
                        </div>
                        <span className="text-[11px] text-gray-400">SA-MP Server</span>
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
                          <Users className="w-3.5 h-3.5 text-[#10b981]" />
                          Slots
                        </span>
                        <span className="font-bold text-white">{plan.slots}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400 flex items-center gap-2">
                          <Shield className="w-3.5 h-3.5 text-[#10b981]" />
                          DDoS Protection
                        </span>
                        <span className="font-bold text-emerald-400">{plan.ddos}</span>
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
                      onClick={handleDeploy}
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
              All Plans Include
            </h2>
            <p className="text-xs text-gray-400">
              Enterprise features built for high-traffic SA-MP roleplay, freeroam, and deathmatch communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Shield,
                title: "DDoS Protection",
                desc: "Game-specific real-time DDoS mitigation shielding your SA-MP server from query floods, UDP amplifications, and malicious drops."
              },
              {
                icon: Zap,
                title: "24/7 Uptime",
                desc: "Enterprise Tier-3 infrastructure with redundant power and automated health monitoring ensuring maximum availability."
              },
              {
                icon: Sparkles,
                title: "Instant Setup",
                desc: "Automatic instant provisioning via our Discord bot and support team deployed in under 60 seconds."
              },
              {
                icon: Server,
                title: "Full Server Access",
                desc: "Complete control panel, SFTP file access, server.cfg editor, console logs, and free managed MySQL database."
              },
              {
                icon: Globe2,
                title: "Multiple Locations",
                desc: "Deploy in India, USA, Germany, or Ohio for optimal low-ping player routing."
              },
              {
                icon: Radio,
                title: "open.mp & SA-MP Ready",
                desc: "100% compatible with SA-MP 0.3.7, 0.3.DL, and the new open.mp server binary."
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
              Everything you need to know about VexaNode SA-MP Hosting.
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
