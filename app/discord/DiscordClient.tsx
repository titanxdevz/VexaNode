"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight, Cpu, Zap, Shield, HardDrive,
  Sparkles, Terminal, Database,
  RotateCcw, Check, Globe, Code2, ChevronDown,
  Calendar, MemoryStick, Wifi, HeartPulse
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

const botPlans = [
  {
    id: "starter",
    name: "Starter",
    basePrice: 35.00,
    checkoutUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-starter/checkout",
    viewUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-starter",
    cpu: "0.5 vCPU",
    cpuType: "Shared CPU",
    ram: "512 MB",
    ramType: "DDR4 RAM",
    storage: "3 GB",
    storageType: "NVMe SSD",
    bandwidth: "Unlimited",
    uptime: "Always-On Uptime",
    popular: true
  },
  {
    id: "basic",
    name: "Basic",
    basePrice: 75.00,
    checkoutUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-basic/checkout",
    viewUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-basic",
    cpu: "1 vCPU",
    cpuType: "Shared CPU",
    ram: "1 GB",
    ramType: "DDR4 RAM",
    storage: "4 GB",
    storageType: "NVMe SSD",
    bandwidth: "Unlimited",
    uptime: "Always-On Uptime",
    popular: false
  },
  {
    id: "silver",
    name: "Silver",
    basePrice: 105.00,
    checkoutUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-silver/checkout",
    viewUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-silver",
    cpu: "1 vCPU Cores",
    cpuType: "CPU Cores",
    ram: "2 GB",
    ramType: "RAM Memory",
    storage: "6 GB",
    storageType: "NVMe SSD",
    bandwidth: "Unlimited",
    uptime: "Always-On Uptime",
    backups: "1 Free Backup",
    popular: false
  },
  {
    id: "gold",
    name: "Gold",
    basePrice: 179.00,
    checkoutUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-gold/checkout",
    viewUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-gold",
    cpu: "2 vCPU Cores",
    cpuType: "CPU Cores",
    ram: "4 GB",
    ramType: "RAM Memory",
    storage: "8 GB",
    storageType: "NVMe SSD",
    bandwidth: "Unlimited",
    uptime: "Always-On Uptime",
    popular: false
  },
  {
    id: "platinum",
    name: "Platinum",
    basePrice: 230.00,
    checkoutUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-platinum/checkout",
    viewUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-platinum",
    cpu: "2 vCPU",
    cpuType: "CPU Cores",
    ram: "6 GB",
    ramType: "DDR4 RAM",
    storage: "12 GB",
    storageType: "NVMe SSD",
    bandwidth: "Unlimited",
    uptime: "Always-On Uptime",
    popular: false
  },
  {
    id: "diamond",
    name: "Diamond",
    basePrice: 299.00,
    checkoutUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-diamond/checkout",
    viewUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-diamond",
    cpu: "3 vCPU",
    cpuType: "CPU Cores",
    ram: "8 GB",
    ramType: "DDR4 RAM",
    storage: "15 GB",
    storageType: "NVMe SSD",
    bandwidth: "Unlimited",
    uptime: "Always-On Uptime",
    popular: false
  },
  {
    id: "netherite",
    name: "Netherite",
    basePrice: 369.00,
    checkoutUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-netherite/checkout",
    viewUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-netherite",
    cpu: "4 vCPU",
    cpuType: "CPU Cores",
    ram: "10 GB",
    ramType: "DDR4 RAM",
    storage: "20 GB",
    storageType: "NVMe SSD",
    bandwidth: "Unlimited",
    uptime: "Always-On Uptime",
    popular: false
  },
  {
    id: "obsidian",
    name: "Obsidian",
    basePrice: 459.00,
    checkoutUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-obsidian/checkout",
    viewUrl: "https://billing.vexanode.gg/products/bot-hosting/bot-obsidian",
    cpu: "4 vCPU",
    cpuType: "CPU Cores",
    ram: "12 GB",
    ramType: "DDR4 RAM",
    storage: "25 GB",
    storageType: "NVMe SSD",
    bandwidth: "Unlimited",
    uptime: "Always-On Uptime",
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
    a: "All VexaNode containers are shielded by our multi-layer DDoS mitigation system to help keep your bot online during traffic spikes or malicious attacks."
  }
]

export default function DiscordClient() {
  const [selectedCycle, setSelectedCycle] = useState("monthly")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { currency, formatPrice } = useCurrency()

  const currentCycle = cycles.find((c) => c.id === selectedCycle) || cycles[0]

  const calculateTotalPrice = (baseInrPrice: number) => {
    const totalInr = baseInrPrice * currentCycle.months * (1 - currentCycle.discount)
    return totalInr
  }

  const handleCheckout = (plan: typeof botPlans[0]) => {
    const totalPrice = calculateTotalPrice(plan.basePrice)
    const item = {
      name: `Discord Bot Hosting - ${plan.name}`,
      description: `${plan.cpu} | ${plan.ram} | ${plan.storage} | ${selectedCycle.toUpperCase()}`,
      price: totalPrice.toFixed(2),
      cycle: selectedCycle,
      currency: currency.code
    }
    localStorage.setItem("vexa_cart_total", totalPrice.toFixed(2))
    localStorage.setItem("vexa_cart_items", JSON.stringify([item]))
    window.location.href = plan.checkoutUrl
  }

  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-blue-500/30 relative overflow-hidden font-sans">
      {/* Background glow effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(37,99,235,0.12),transparent_100%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            {/* Small Badge */}
            <div className="inline-block bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1 rounded-md border border-blue-500/20 mb-4">
              Discord Bot Hosting
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black orbitron-font tracking-tight mb-4 vx-ink">
              High-Performance Discord{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Bot Hosting</span>
            </h1>

            {/* Description */}
            <p className="vx-muted text-sm sm:text-base leading-relaxed mb-4">
              Deploy premium always-on Discord bot nodes powered by modern Pterodactyl container infrastructure. Experience low latency, unmetered network bandwidth, automated backups, and dependable uptime for your Discord bots.
            </p>

            {/* Sub-links */}
            <div className="text-xs vx-faint flex flex-wrap items-center gap-1.5 font-medium">
              <span className="vx-muted">Also Explore:</span>
              <Link href="/lavalink" className="text-blue-400 hover:underline">Lavalink Hosting</Link>
              <span>•</span>
              <Link href="/games" className="text-blue-400 hover:underline">Game Servers</Link>
              <span>•</span>
              <Link href="/vps" className="text-blue-400 hover:underline">VPS Hosting</Link>
              <span>•</span>
              <Link href="/databases" className="text-blue-400 hover:underline">Database Hosting</Link>
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
                      ? "bg-[#1d4ed8] text-white border-[#2563eb] shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                      : "vx-card vx-muted2 border vx-line hover:border-blue-500/40 vx-hover-ink"
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{cycle.name}</span>
                  {cycle.discount > 0 && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase ${
                      isActive ? "bg-black/30 text-white" : "bg-blue-500/20 text-blue-400"
                    }`}>
                      {cycle.label}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* 2. Choose Plan Grid */}
        <div className="mb-20">
          <h3 className="text-xs font-bold vx-muted mb-5 tracking-wide">
            2. Choose Plan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {botPlans.map((plan) => {
              const totalPrice = calculateTotalPrice(plan.basePrice)
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl vx-card border transition-all duration-300 p-6 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl ${
                    plan.popular
                      ? "border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.18)]"
                      : "vx-line hover:border-blue-500/50"
                  }`}
                >
                  <div>
                    {/* Header: Discord Robot Avatar + Title + Popular Badge */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                          <Image
                            src="/icons/discord2.avif"
                            alt="Discord Bot"
                            width={44}
                            height={44}
                            className="object-contain drop-shadow-[0_4px_10px_rgba(88,101,242,0.35)]"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold vx-ink leading-tight">{plan.name}</h4>
                          <span className="text-xs vx-muted">Discord Bot</span>
                        </div>
                      </div>

                      {plan.popular && (
                        <div className="bg-[#1d4ed8] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          Popular
                        </div>
                      )}
                    </div>

                    {/* 2x2 Specs Grid */}
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-5">
                      {/* Top Left: CPU */}
                      <div>
                        <div className="flex items-center gap-1.5 text-xs vx-muted mb-1">
                          <Cpu className="w-3.5 h-3.5 text-blue-400" />
                          <span>{plan.cpuType}</span>
                        </div>
                        <div className="text-sm font-bold vx-ink">{plan.cpu}</div>
                      </div>

                      {/* Top Right: RAM */}
                      <div>
                        <div className="flex items-center gap-1.5 text-xs vx-muted mb-1">
                          <MemoryStick className="w-3.5 h-3.5 text-blue-400" />
                          <span>{plan.ramType}</span>
                        </div>
                        <div className="text-sm font-bold vx-ink">{plan.ram}</div>
                      </div>

                      {/* Bottom Left: Storage */}
                      <div>
                        <div className="flex items-center gap-1.5 text-xs vx-muted mb-1">
                          <HardDrive className="w-3.5 h-3.5 text-blue-400" />
                          <span>{plan.storageType}</span>
                        </div>
                        <div className="text-sm font-bold vx-ink">{plan.storage}</div>
                      </div>

                      {/* Bottom Right: Bandwidth */}
                      <div>
                        <div className="flex items-center gap-1.5 text-xs vx-muted mb-1">
                          <Wifi className="w-3.5 h-3.5 text-blue-400" />
                          <span>Bandwidth</span>
                        </div>
                        <div className="text-sm font-bold vx-ink">{plan.bandwidth}</div>
                      </div>
                    </div>

                    {/* 24/7 Uptime Row */}
                    <div className="flex items-center gap-1.5 text-xs vx-muted mb-6">
                      <HeartPulse className="w-3.5 h-3.5 text-blue-400" />
                      <span>{plan.uptime}</span>
                    </div>
                  </div>

                  {/* Total Price for Selected Period & Buy Now Button */}
                  <div>
                    <div className="text-center mb-5">
                      <span className="text-3xl font-black vx-ink orbitron-font">
                        {formatPrice(totalPrice)}
                      </span>
                      <span className="text-xs vx-muted ml-1.5">{currentCycle.suffix}</span>
                    </div>

                    <button
                      onClick={() => handleCheckout(plan)}
                      className="w-full bg-[#1d4ed8] hover:bg-[#2563eb] text-white font-bold py-3.5 px-4 rounded-xl text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_30px_rgba(37,99,235,0.55)] active:scale-[0.98] cursor-pointer"
                    >
                      <span>Buy Now</span>
                      <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
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
            <h2 className="text-2xl font-bold orbitron-font vx-ink mb-2">
              Why Bot Developers Choose VexaNode
            </h2>
            <p className="vx-muted text-xs sm:text-sm">
              Purpose-built infrastructure designed specifically for Discord bot developers and enterprise communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Zap,
                title: "Instant Container Setup",
                desc: "Your Pterodactyl container is provisioned in seconds with Node.js, Python, Java, or Go pre-installed."
              },
              {
                icon: Shield,
                title: "Always-On DDoS Filtering",
                desc: "Multi-layer UDP/TCP DDoS mitigation helps keep your bot online and responsive around the clock."
              },
              {
                icon: Database,
                title: "Free Managed MySQL DB",
                desc: "One-click managed database instance included with every plan for persistent bot storage."
              },
              {
                icon: RotateCcw,
                title: "Automated Cloud Backups",
                desc: "Scheduled automated snapshots ensure your code, database, and bot states are never lost."
              }
            ].map((feat, idx) => {
              const Icon = feat.icon
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl vx-card border vx-line hover:border-blue-500/40 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-bold vx-ink mb-1">{feat.title}</h4>
                  <p className="text-xs vx-muted leading-relaxed">{feat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold orbitron-font vx-ink mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm vx-muted">
              Everything you need to know about our Discord Bot Hosting services.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl vx-card border vx-line overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left font-medium text-xs sm:text-sm vx-ink hover:text-blue-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 vx-muted transition-transform duration-200 flex-shrink-0 ml-2 ${
                      openFaq === index ? "rotate-180 text-blue-400" : ""
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
                      <div className="px-4 pb-4 text-xs vx-muted leading-relaxed border-t vx-line pt-3">
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
