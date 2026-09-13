"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight, Cpu, Zap, Shield, HardDrive,
  Sparkles, Terminal, Database,
  RotateCcw, Check, Globe, Code2, ChevronDown,
  Calendar, MemoryStick, Wifi, HeartPulse, Star
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useCurrency } from "../contexts/CurrencyContext"
import CurrencySelector from "../components/CurrencySelector"
import Link from "next/link"
import Image from "next/image"

const cycles = [
  { id: "monthly", name: "MONTHLY", months: 1, discount: 0, suffix: "/month" },
  { id: "quarterly", name: "QUARTERLY", months: 3, discount: 0.05, label: "5% OFF", suffix: "/3 months" },
  { id: "semi-annually", name: "SEMI-ANNUALLY", months: 6, discount: 0.13, label: "13% OFF", suffix: "/6 months" },
  { id: "annually", name: "ANNUALLY", months: 12, discount: 0.24, label: "24% OFF", suffix: "/12 months" }
]

const hytalePlans = [
  {
    id: "grove",
    name: "GROVE PLAN",
    basePrice: 299.00,
    icon: "/icons/Hytale/grove-plan.avif",
    buyUrl: "https://billing.vexanode.gg/products/hytale/grove",
    cpu: "150% CPU",
    cpuType: "Shared CPU",
    ram: "4 GB RAM",
    ramType: "DDR4 Memory",
    storage: "16 GB",
    storageType: "NVMe Storage",
    protection: "DDoS Protection",
    popular: false
  },
  {
    id: "sands",
    name: "SANDS PLAN",
    basePrice: 449.00,
    icon: "/icons/Hytale/sands-plan.avif",
    buyUrl: "https://billing.vexanode.gg/products/hytale/sands",
    cpu: "200% CPU",
    cpuType: "Shared CPU",
    ram: "6 GB RAM",
    ramType: "DDR4 Memory",
    storage: "24 GB",
    storageType: "NVMe Storage",
    protection: "DDoS Protection",
    popular: false
  },
  {
    id: "borea",
    name: "BOREA PLAN",
    basePrice: 649.00,
    icon: "/icons/Hytale/borea-plan.avif",
    buyUrl: "https://billing.vexanode.gg/products/hytale/borea",
    cpu: "250% CPU",
    cpuType: "Shared CPU",
    ram: "8 GB RAM",
    ramType: "DDR4 Memory",
    storage: "32 GB",
    storageType: "NVMe Storage",
    protection: "DDoS Protection",
    badge: "BEST SELLER",
    popular: true
  },
  {
    id: "devastated",
    name: "DEVASTATED PLAN",
    basePrice: 849.00,
    icon: "/icons/Hytale/devastated-plan.avif",
    buyUrl: "https://billing.vexanode.gg/products/hytale/devastated",
    cpu: "300% CPU",
    cpuType: "Shared CPU",
    ram: "10 GB RAM",
    ramType: "DDR4 Memory",
    storage: "40 GB",
    storageType: "NVMe Storage",
    protection: "DDoS Protection",
    popular: false
  }
]

const faqs = [
  {
    q: "What is Hytale server hosting in India?",
    a: "Hytale server hosting allows you to run your own dedicated multiplayer worlds, custom adventures, and community servers with high-tickrate performance, instant automated setup, and 24/7 online uptime with domestic Indian routing."
  },
  {
    q: "Where are the Hytale server locations?",
    a: "We offer ultra-low latency Hytale game nodes located directly in Mumbai (India), Germany (Frankfurt), and USA with domestic peering for sub-25ms nationwide ping."
  },
  {
    q: "Is DDoS protection included with all Hytale plans?",
    a: "Yes! Every Hytale server plan includes enterprise Layer 3, Layer 4, and Game Layer 7 DDoS mitigation to protect your server against volumetric UDP/TCP attacks."
  },
  {
    q: "Can I upgrade or scale my plan later?",
    a: "Yes, you can seamlessly scale your RAM, CPU, and NVMe SSD storage from your client area anytime without losing world data or player progress."
  }
]

export default function HytaleClient() {
  const [selectedCycle, setSelectedCycle] = useState("monthly")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { currency, formatPrice } = useCurrency()

  const currentCycle = cycles.find((c) => c.id === selectedCycle) || cycles[0]

  const calculateTotalPrice = (baseInrPrice: number) => {
    const totalInr = baseInrPrice * currentCycle.months * (1 - currentCycle.discount)
    return totalInr
  }

  const handleDeploy = (plan: typeof hytalePlans[0]) => {
    const totalPrice = calculateTotalPrice(plan.basePrice)
    const item = {
      name: `Hytale Hosting - ${plan.name}`,
      description: `${plan.cpu} | ${plan.ram} | ${plan.storage} | ${selectedCycle.toUpperCase()}`,
      price: totalPrice.toFixed(2),
      cycle: selectedCycle,
      currency: currency.code
    }
    localStorage.setItem("vexa_cart_total", totalPrice.toFixed(2))
    localStorage.setItem("vexa_cart_items", JSON.stringify([item]))
    window.location.href = plan.buyUrl
  }

  return (
    <div className="min-h-screen bg-[#060811] text-white selection:bg-amber-500/30 relative overflow-hidden font-sans">
      {/* Background glow effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(245,158,11,0.12),transparent_100%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            {/* Small Badge with Hytale H1 Emblem */}
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 text-xs font-semibold px-3.5 py-1.5 rounded-xl border border-amber-500/20 mb-4 backdrop-blur-md">
              <Image
                src="/icons/Hytale/hytale-h1.avif"
                alt="Hytale Logo"
                width={20}
                height={20}
                className="object-contain"
                priority
              />
              <span className="tracking-wide">Hytale Server Hosting in India</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black orbitron-font tracking-tight mb-4 text-white">
              High-Performance Hytale{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">Server Hosting</span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
              Experience the best Hytale server hosting with high-performance hardware, low latency, instant setup, and advanced DDoS protection. VexaNode provides affordable and reliable Hytale hosting with 24/7 uptime and optimized infrastructure for smooth multiplayer gameplay. Get fast, secure, and lag-free Hytale game server hosting for communities, survival worlds, and custom adventures.
            </p>

            {/* Sub-links */}
            <div className="text-xs text-gray-500 flex flex-wrap items-center gap-1.5 font-medium">
              <span className="text-gray-400">Also Explore:</span>
              <Link href="/games" className="text-amber-400 hover:underline">Minecraft Hosting</Link>
              <span>•</span>
              <Link href="/samp" className="text-amber-400 hover:underline">SA-MP Hosting</Link>
              <span>•</span>
              <Link href="/discord" className="text-amber-400 hover:underline">Discord Bot Hosting</Link>
              <span>•</span>
              <Link href="/vps" className="text-amber-400 hover:underline">Cloud VPS</Link>
            </div>
          </div>

          {/* Top-Right Currency Selector */}
          <div className="flex-shrink-0 self-start lg:mt-2">
            <CurrencySelector />
          </div>
        </div>

        {/* 1. Choose Billing Cycle */}
        <div className="mb-10">
          <div className="w-full max-w-full overflow-x-auto no-scrollbar flex items-center gap-2 pb-1">
            {cycles.map((cycle) => {
              const isActive = selectedCycle === cycle.id
              return (
                <button
                  key={cycle.id}
                  type="button"
                  onClick={() => setSelectedCycle(cycle.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex-shrink-0 flex items-center gap-2 border ${
                    isActive
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)] font-black"
                      : "bg-[#0a0f1d]/90 text-gray-300 border-[#1e293b] hover:border-amber-500/40 hover:text-white"
                  }`}
                >
                  <Calendar className={`w-3.5 h-3.5 ${isActive ? "text-black" : "text-amber-400"}`} />
                  <span>{cycle.name}</span>
                  {cycle.discount > 0 && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase ${
                      isActive ? "bg-black/20 text-black" : "bg-amber-500/20 text-amber-400"
                    }`}>
                      {cycle.label}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* 2. Choose Plan Grid (Matching Discord Bot Card Design with Hytale Theme) */}
        <div className="mb-20">
          <h3 className="text-xs font-bold text-gray-400 mb-5 tracking-wide">
            2. Choose Plan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hytalePlans.map((plan) => {
              const totalPrice = calculateTotalPrice(plan.basePrice)
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl bg-[#080d1a]/95 border transition-all duration-300 p-6 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl ${
                    plan.popular
                      ? "border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
                      : "border-[#17233d] hover:border-amber-500/50 hover:bg-[#0a1122]"
                  }`}
                >
                  <div>
                    {/* Header: Plan Icon + Title + Best Seller Badge */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src={plan.icon}
                            alt={plan.name}
                            width={44}
                            height={44}
                            className="object-contain drop-shadow-[0_4px_10px_rgba(245,158,11,0.35)]"
                          />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white orbitron-font leading-tight">{plan.name}</h4>
                          <span className="text-xs text-gray-400">Hytale Server</span>
                        </div>
                      </div>

                      {plan.badge && (
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-black text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                          <Star className="w-2.5 h-2.5 fill-black" />
                          {plan.badge}
                        </div>
                      )}
                    </div>

                    {/* 2x2 Specs Grid */}
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-5">
                      {/* Top Left: CPU */}
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                          <Cpu className="w-3.5 h-3.5 text-amber-400" />
                          <span>{plan.cpuType}</span>
                        </div>
                        <div className="text-sm font-bold text-white">{plan.cpu}</div>
                      </div>

                      {/* Top Right: RAM */}
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                          <MemoryStick className="w-3.5 h-3.5 text-amber-400" />
                          <span>{plan.ramType}</span>
                        </div>
                        <div className="text-sm font-bold text-white">{plan.ram}</div>
                      </div>

                      {/* Bottom Left: Storage */}
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                          <HardDrive className="w-3.5 h-3.5 text-amber-400" />
                          <span>{plan.storageType}</span>
                        </div>
                        <div className="text-sm font-bold text-white">{plan.storage}</div>
                      </div>

                      {/* Bottom Right: Protection */}
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                          <Shield className="w-3.5 h-3.5 text-amber-400" />
                          <span>DDoS Shield</span>
                        </div>
                        <div className="text-sm font-bold text-white">{plan.protection}</div>
                      </div>
                    </div>

                    {/* 24/7 Uptime Row */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
                      <HeartPulse className="w-3.5 h-3.5 text-amber-400" />
                      <span>24/7 Online Uptime SLA</span>
                    </div>
                  </div>

                  {/* Total Price & Order Now Button */}
                  <div>
                    <div className="text-center mb-5">
                      <span className="text-3xl font-black text-white orbitron-font">
                        {formatPrice(totalPrice)}
                      </span>
                      <span className="text-xs text-gray-400 ml-1.5">{currentCycle.suffix}</span>
                    </div>

                    <button
                      onClick={() => handleDeploy(plan)}
                      className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-400 text-black font-black py-3.5 px-4 rounded-xl text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_30px_rgba(245,158,11,0.55)] active:scale-[0.98] cursor-pointer"
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
              Why Host Hytale With VexaNode?
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              Custom-built infrastructure engineered explicitly for Hytale servers, custom adventure maps, and massive multiplayer communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Zap,
                title: "Instant Server Provisioning",
                desc: "Your Hytale server node is automatically deployed in seconds upon order completion."
              },
              {
                icon: Shield,
                title: "Game-Optimized DDoS Filtering",
                desc: "High-capacity UDP/TCP DDoS filtering scrubs hostile attacks before they reach your game."
              },
              {
                icon: HardDrive,
                title: "Pure PCIe NVMe SSDs",
                desc: "Ultra-fast read/write speeds ensure zero chunk generation lag and rapid world loading."
              },
              {
                icon: RotateCcw,
                title: "Automated Daily Backups",
                desc: "Scheduled world snapshots keep your player builds, custom scripts, and progress 100% safe."
              }
            ].map((feat, idx) => {
              const Icon = feat.icon
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#080d1a]/80 border border-[#17233d] hover:border-amber-500/40 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{feat.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{feat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold orbitron-font text-white mb-2">
              Hytale Hosting FAQs
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Everything you need to know about our high-performance Hytale server nodes.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl bg-[#080d1a]/80 border border-[#17233d] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left font-medium text-xs sm:text-sm text-white hover:text-amber-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-2 ${
                      openFaq === index ? "rotate-180 text-amber-400" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 pb-4 text-xs text-gray-400 leading-relaxed border-t border-white/[0.04] pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
