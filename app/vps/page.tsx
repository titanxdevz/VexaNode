"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronRight, Cpu, Zap, Shield, HardDrive, 
  Server, Globe, ChevronDown, Check, Radio, MapPin, Sparkles 
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

const locations = [
  { id: "miami", name: "Miami (USA)", flag: "🇺🇸", cpu: "Intel Xeon Gold" },
  { id: "utah", name: "Salt Lake (USA)", flag: "🇺🇸", cpu: "Intel Xeon E5" },
  { id: "germany-ryzen", name: "Germany (Ryzen 9)", flag: "🇩🇪", cpu: "AMD Ryzen 9 9950X" },
  { id: "germany-vexa", name: "Germany (Intel)", flag: "🇩🇪", cpu: "Intel Xeon E5" },
  { id: "india-delhi-ryzen", name: "Delhi (Ryzen 9)", flag: "🇮🇳", cpu: "AMD Ryzen 9 9950X" },
  { id: "india-vexa", name: "Mumbai (Intel)", flag: "🇮🇳", cpu: "Intel Xeon Platinum" },
  { id: "singapore-vexa", name: "Singapore (OVH)", flag: "🇸🇬", cpu: "Intel Xeon E3" }
]

const plansData = {
  miami: [
    { id: "m1", name: "Standard 01", cores: "2 vCPU", ram: "2 GB DDR4 RAM", storage: "30 GB NVMe SSD", bandwidth: "2 TB Uplink", ipv4: "1 Dedicated IPv4", basePrice: 259, popular: false },
    { id: "m2", name: "Standard 02", cores: "3 vCPU", ram: "4 GB DDR4 RAM", storage: "70 GB NVMe SSD", bandwidth: "2 TB Uplink", ipv4: "1 Dedicated IPv4", basePrice: 429, popular: true },
    { id: "m3", name: "Standard 03", cores: "4 vCPU", ram: "8 GB DDR4 RAM", storage: "120 GB NVMe SSD", bandwidth: "3 TB Uplink", ipv4: "1 Dedicated IPv4", basePrice: 849, popular: false },
    { id: "m4", name: "Standard 04", cores: "6 vCPU", ram: "16 GB DDR4 RAM", storage: "210 GB NVMe SSD", bandwidth: "4 TB Uplink", ipv4: "1 Dedicated IPv4", basePrice: 1599, popular: false }
  ],
  utah: [
    { id: "u1", name: "Slice 12GB", cores: "4 Cores", ram: "12 GB DDR3 RAM", storage: "120 GB SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 599, popular: false },
    { id: "u2", name: "Slice 18GB", cores: "8 Cores", ram: "18 GB DDR3 RAM", storage: "210 GB SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 899, popular: true },
    { id: "u3", name: "Slice 32GB", cores: "12 Cores", ram: "32 GB DDR3 RAM", storage: "340 GB SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1349, popular: false }
  ],
  "germany-ryzen": [
    { id: "gr1", name: "Ryzen Starter", cores: "1 vCPU", ram: "2 GB DDR5 RAM", storage: "20 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 329, popular: false },
    { id: "gr2", name: "Ryzen Basic", cores: "1 vCPU", ram: "4 GB DDR5 RAM", storage: "25 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 499, popular: false },
    { id: "gr3", name: "Ryzen Standard", cores: "2 vCPU", ram: "8 GB DDR5 RAM", storage: "50 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 1069, popular: true },
    { id: "gr4", name: "Ryzen Pro", cores: "4 vCPU", ram: "16 GB DDR5 RAM", storage: "120 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 2019, popular: false }
  ],
  "germany-vexa": [
    { id: "vg1", name: "VEXA Starter", cores: "1 vCore", ram: "6 GB RAM", storage: "40 GB NVMe", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 329, popular: false },
    { id: "vg2", name: "VEXA Basic", cores: "2 vCores", ram: "8 GB RAM", storage: "50 GB NVMe", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 505, popular: true },
    { id: "vg3", name: "VEXA Standard", cores: "4 vCores", ram: "16 GB RAM", storage: "150 GB NVMe", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 912, popular: false },
    { id: "vg4", name: "VEXA Elite", cores: "6 vCores", ram: "36 GB RAM", storage: "250 GB NVMe", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1979, popular: false }
  ],
  "india-delhi-ryzen": [
    { id: "idr1", name: "Delhi Starter", cores: "1 vCPU", ram: "4 GB DDR5 RAM", storage: "50 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 749, popular: false },
    { id: "idr2", name: "Delhi Basic", cores: "2 vCPU", ram: "8 GB DDR5 RAM", storage: "80 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 1279, popular: true },
    { id: "idr3", name: "Delhi Standard", cores: "4 vCPU", ram: "16 GB DDR5 RAM", storage: "150 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 1999, popular: false },
    { id: "idr4", name: "Delhi Pro", cores: "6 vCPU", ram: "32 GB DDR5 RAM", storage: "200 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 3949, popular: false }
  ],
  "india-vexa": [
    { id: "vi1", name: "Mumbai Starter", cores: "2 vCPU", ram: "6 GB RAM", storage: "50 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 449, popular: false },
    { id: "vi2", name: "Mumbai Basic", cores: "2 vCPU", ram: "8 GB RAM", storage: "80 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 599, popular: true },
    { id: "vi3", name: "Mumbai Standard", cores: "4 vCPU", ram: "12 GB RAM", storage: "100 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 849, popular: false },
    { id: "vi4", name: "Mumbai Pro", cores: "6 vCPU", ram: "24 GB RAM", storage: "200 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1429, popular: false }
  ],
  "singapore-vexa": [
    { id: "vs1", name: "SG Starter", cores: "1 vCPU", ram: "4 GB RAM", storage: "20 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 429, popular: false },
    { id: "vs2", name: "SG Basic", cores: "2 vCPU", ram: "8 GB RAM", storage: "40 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 489, popular: true },
    { id: "vs3", name: "SG Standard", cores: "3 vCPU", ram: "12 GB RAM", storage: "50 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 649, popular: false },
    { id: "vs4", name: "SG Pro", cores: "5 vCPU", ram: "24 GB RAM", storage: "100 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1299, popular: false }
  ]
}

const faqs = [
  {
    q: "Do I get full root SSH access with my VPS?",
    a: "Yes! Every VPS plan includes dedicated root SSH access and complete control over your operating system and packages."
  },
  {
    q: "Which operating systems are available?",
    a: "We support Ubuntu 22.04/24.04, Debian 11/12, CentOS Stream, AlmaLinux, Rocky Linux, Alpine, and custom ISO mounting upon request."
  },
  {
    q: "Are dedicated IPv4 addresses included?",
    a: "Yes! Every cloud VPS server comes with 1 dedicated static IPv4 address and full IPv6 subnet allocation."
  },
  {
    q: "How fast is server provisioning?",
    a: "Your VPS is automatically deployed in under 60 seconds after payment confirmation."
  }
]

export default function VPSPage() {
  const [selectedLocation, setSelectedLocation] = useState<string>("germany-ryzen")
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

  const currentPlans = (plansData as any)[selectedLocation] || plansData.miami

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#10b981]/30 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.08),transparent_100%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <PageMeta title="Cloud VPS Hosting — VexaNode" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section (Clean VisiHost Style) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            {/* Small Badge */}
            <div className="inline-block bg-[#10b981]/10 text-[#10b981] text-xs font-semibold px-3 py-1 rounded-md border border-[#10b981]/20 mb-4">
              Cloud Compute & VPS
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black orbitron-font tracking-tight mb-4 text-white">
              High-Performance Cloud{" "}
              <span className="text-[#10b981]">VPS Hosting</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              Deploy ultra-fast KVM cloud VPS instances powered by AMD Ryzen 9 9950X and Intel Xeon processors with instant deployment, dedicated IPv4, and 100Gbps DDoS protection.
            </p>

            {/* Sub-links */}
            <div className="text-xs text-gray-500 flex flex-wrap items-center gap-1.5 font-medium">
              <span className="text-gray-400">Also Explore:</span>
              <Link href="/discord" className="text-[#10b981] hover:underline">Discord Bot Hosting</Link>
              <span>•</span>
              <Link href="/lavalink" className="text-[#10b981] hover:underline">Lavalink Audio</Link>
              <span>•</span>
              <Link href="/games" className="text-[#10b981] hover:underline">Game Servers</Link>
              <span>•</span>
              <Link href="/databases" className="text-[#10b981] hover:underline">Database Hosting</Link>
            </div>
          </div>

          {/* Top-Right Currency Selector */}
          <div className="flex-shrink-0 self-start lg:mt-2">
            <CurrencySelector />
          </div>
        </div>

        {/* 1. Choose Datacenter Location (Mobile Friendly Scroll) */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-gray-400 mb-3 tracking-wide">
            1. Choose Datacenter Location
          </h3>
          <div className="w-full max-w-full overflow-x-auto no-scrollbar flex items-center gap-1.5 pb-1">
            <div className="inline-flex bg-[#0b0e14] p-1 rounded-xl border border-white/[0.08] flex-nowrap">
              {locations.map((loc) => {
                const isSelected = selectedLocation === loc.id
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                      isSelected
                        ? "bg-[#10b981] text-black shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span>{loc.flag}</span>
                    <span>{loc.name}</span>
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

        {/* 3. Choose Plan Grid (Clean Cards) */}
        <div className="mb-20">
          <h3 className="text-xs font-bold text-gray-400 mb-4 tracking-wide">
            3. Choose Plan
          </h3>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedLocation}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {currentPlans.map((plan: any) => {
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
                          <Server className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white orbitron-font">{plan.name}</h4>
                          <span className="text-[11px] text-gray-400">KVM Cloud VPS</span>
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
                          <span className="font-bold text-white">{plan.cores}</span>
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
                            Bandwidth
                          </span>
                          <span className="font-bold text-white">{plan.bandwidth}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400 flex items-center gap-2">
                            <Globe className="w-3.5 h-3.5 text-[#10b981]" />
                            IPv4
                          </span>
                          <span className="font-bold text-white">{plan.ipv4}</span>
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
              Enterprise Cloud VPS Infrastructure
            </h2>
            <p className="text-xs text-gray-400">
              Zero noisy neighbors, 100% dedicated hardware resource slices, and full root access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Cpu,
                title: "Pure KVM Virtualization",
                desc: "No resource overselling. Dedicated kernel, RAM allocation, and unshared CPU cycles."
              },
              {
                icon: Shield,
                title: "100Gbps+ DDoS Protection",
                desc: "Automatic multi-layer traffic inspection mitigates SYN/UDP floods with zero latency impact."
              },
              {
                icon: HardDrive,
                title: "Gen4 NVMe Arrays",
                desc: "PCIe 4.0 storage in hardware RAID-10 delivers extreme I/O operations per second."
              },
              {
                icon: Globe,
                title: "Global Datacenters",
                desc: "Low-latency presence across USA, Germany, India, and Singapore."
              },
              {
                icon: Server,
                title: "Dedicated IPv4 & IPv6",
                desc: "Clean IP addresses delivered directly with reverse DNS support and custom PTR."
              },
              {
                icon: Check,
                title: "99.9% Uptime SLA",
                desc: "Backed by redundant uplinks, automated node failovers, and 24/7 technician coverage."
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
              Everything you need to know about VexaNode Cloud VPS hosting.
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
