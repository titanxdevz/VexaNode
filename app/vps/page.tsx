"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Cpu, Zap, Shield, Check, Server, HardDrive, Globe, Activity, Sparkles } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/image"
import { useCurrency } from "../contexts/CurrencyContext"
import { useRouter } from "next/navigation"


const cycles = [
  { id: "monthly", name: "Monthly", discount: 0 },
  { id: "quarterly", name: "Quarterly", discount: 0.06 },
  { id: "semi-annually", name: "Semi-Annually", discount: 0.17 },
  { id: "annually", name: "Annually", discount: 0.17 }
]

const locations = [
  { id: "us-n-virginia", name: "N. Virginia", country: "USA", flag: "🇺🇸" },
  { id: "us-ohio", name: "Ohio", country: "USA", flag: "🇺🇸" },
  { id: "us-n-california", name: "N. California", country: "USA", flag: "🇺🇸" },
  { id: "us-oregon", name: "Oregon", country: "USA", flag: "🇺🇸" },
  { id: "brazil-sao-paulo", name: "São Paulo", country: "Brazil", flag: "🇧🇷" },
  { id: "ireland", name: "Ireland", country: "Ireland", flag: "🇮🇪" },
  { id: "germany-frankfurt", name: "Frankfurt", country: "Germany", flag: "🇩🇪" },
  { id: "uk-london", name: "London", country: "UK", flag: "🇬🇧" },
  { id: "france-paris", name: "Paris", country: "France", flag: "🇫🇷" },
  { id: "sweden-stockholm", name: "Stockholm", country: "Sweden", flag: "🇸🇪" },
  { id: "italy-milan", name: "Milan", country: "Italy", flag: "🇮🇹" },
  { id: "spain", name: "Spain", country: "Spain", flag: "🇪🇸" },
  { id: "me-bahrain", name: "Bahrain", country: "Middle East", flag: "🌍" },
  { id: "me-uae", name: "UAE", country: "Middle East", flag: "🌍" },
  { id: "sa-cape-town", name: "Cape Town", country: "South Africa", flag: "🇿🇦" },
  { id: "india-mumbai", name: "Mumbai", country: "India", flag: "🇮🇳" },
  { id: "india-hyderabad", name: "Hyderabad", country: "India", flag: "🇮🇳" },
  { id: "singapore", name: "Singapore", country: "Singapore", flag: "🇸🇬" },
  { id: "japan-tokyo", name: "Tokyo", country: "Japan", flag: "🇯🇵" },
  { id: "japan-osaka", name: "Osaka", country: "Japan", flag: "🇯🇵" },
  { id: "korea-seoul", name: "Seoul", country: "South Korea", flag: "🇰🇷" },
  { id: "australia-sydney", name: "Sydney", country: "Australia", flag: "🇦🇺" },
  { id: "canada-montreal", name: "Montreal", country: "Canada", flag: "🇨🇦" },
  { id: "canada-calgary", name: "Calgary", country: "Canada", flag: "🇨🇦" }
];

const cpuTypes = [
  { id: "standard", name: "Standard", desc: "Intel Xeon E5", image: "/cpu/intel.png" },
  { id: "premium", name: "Premium", desc: "Intel Xeon Platinum", image: "/cpu/intel.png" },
  { id: "performance", name: "Performance", desc: "AMD EPYC", image: "/cpu/ryzen9.png" }
]

const plansData = {
  standard: [
    { id: "std1", name: "Plan 1", ram: "1GB RAM", cores: "1 Core", storage: "15GB NVMe", bandwidth: "500GB BW", ipv4: "1 IPv4", basePrice: 99 },
    { id: "std2", name: "Plan 2", ram: "1GB RAM", cores: "2 Core", storage: "20GB NVMe", bandwidth: "1TB BW", ipv4: "1 IPv4", basePrice: 149 },
    { id: "std3", name: "Plan 3", ram: "2GB RAM", cores: "1 Core", storage: "30GB NVMe", bandwidth: "1TB BW", ipv4: "1 IPv4", basePrice: 179 },
    { id: "std4", name: "Plan 4", ram: "4GB RAM", cores: "2 Core", storage: "60GB NVMe", bandwidth: "2TB BW", ipv4: "1 IPv4", basePrice: 299 },
    { id: "std5", name: "Plan 5", ram: "8GB RAM", cores: "2 Core", storage: "100GB NVMe", bandwidth: "2TB BW", ipv4: "1 IPv4", basePrice: 549 },
    { id: "std6", name: "Plan 6", ram: "16GB RAM", cores: "4 Core", storage: "160GB NVMe", bandwidth: "3TB BW", ipv4: "1 IPv4", basePrice: 999 },
    { id: "std7", name: "Plan 7", ram: "32GB RAM", cores: "8 Core", storage: "250GB NVMe", bandwidth: "4TB BW", ipv4: "1 IPv4", basePrice: 1799 },
    { id: "std8", name: "Plan 8", ram: "64GB RAM", cores: "16 Core", storage: "400GB NVMe", bandwidth: "6TB BW", ipv4: "1 IPv4", basePrice: 3299 }
  ],
  premium: [
    { id: "pre1", name: "Plan 1", ram: "1GB RAM", cores: "1 Core", storage: "20GB NVMe", bandwidth: "1TB BW", ipv4: "1 IPv4", basePrice: 149 },
    { id: "pre2", name: "Plan 2", ram: "1GB RAM", cores: "2 Core", storage: "25GB NVMe", bandwidth: "1TB BW", ipv4: "1 IPv4", basePrice: 199 },
    { id: "pre3", name: "Plan 3", ram: "2GB RAM", cores: "1 Core", storage: "40GB NVMe", bandwidth: "1TB BW", ipv4: "1 IPv4", basePrice: 249 },
    { id: "pre4", name: "Plan 4", ram: "4GB RAM", cores: "2 Core", storage: "80GB NVMe", bandwidth: "2TB BW", ipv4: "1 IPv4", basePrice: 399 },
    { id: "pre5", name: "Plan 5", ram: "8GB RAM", cores: "2 Core", storage: "120GB NVMe", bandwidth: "3TB BW", ipv4: "1 IPv4", basePrice: 749 },
    { id: "pre6", name: "Plan 6", ram: "16GB RAM", cores: "4 Core", storage: "200GB NVMe", bandwidth: "4TB BW", ipv4: "1 IPv4", basePrice: 1399 },
    { id: "pre7", name: "Plan 7", ram: "32GB RAM", cores: "8 Core", storage: "300GB NVMe", bandwidth: "5TB BW", ipv4: "1 IPv4", basePrice: 2499 },
    { id: "pre8", name: "Plan 8", ram: "64GB RAM", cores: "16 Core", storage: "500GB NVMe", bandwidth: "8TB BW", ipv4: "1 IPv4", basePrice: 4499 }
  ],
  performance: [
    { id: "per1", name: "Plan 1", ram: "1GB RAM", cores: "1 Core", storage: "25GB NVMe", bandwidth: "1TB BW", ipv4: "1 IPv4", basePrice: 199 },
    { id: "per2", name: "Plan 2", ram: "1GB RAM", cores: "2 Core", storage: "30GB NVMe", bandwidth: "2TB BW", ipv4: "1 IPv4", basePrice: 279 },
    { id: "per3", name: "Plan 3", ram: "2GB RAM", cores: "1 Core", storage: "50GB NVMe", bandwidth: "2TB BW", ipv4: "1 IPv4", basePrice: 349 },
    { id: "per4", name: "Plan 4", ram: "4GB RAM", cores: "2 Core", storage: "100GB NVMe", bandwidth: "3TB BW", ipv4: "1 IPv4", basePrice: 549 },
    { id: "per5", name: "Plan 5", ram: "8GB RAM", cores: "2 Core", storage: "150GB NVMe", bandwidth: "4TB BW", ipv4: "1 IPv4", basePrice: 999 },
    { id: "per6", name: "Plan 6", ram: "16GB RAM", cores: "4 Core", storage: "250GB NVMe", bandwidth: "5TB BW", ipv4: "1 IPv4", basePrice: 1899 },
    { id: "per7", name: "Plan 7", ram: "32GB RAM", cores: "8 Core", storage: "400GB NVMe", bandwidth: "6TB BW", ipv4: "1 IPv4", basePrice: 3499 },
    { id: "per8", name: "Plan 8", ram: "64GB RAM", cores: "16 Core", storage: "600GB NVMe", bandwidth: "8TB BW", ipv4: "1 IPv4", basePrice: 6299 }
  ]
};

const vpsFeatures = [
  "Full Root Access",
  "NVMe SSD Storage",
  "Dedicated IPv4",
  "24/7 Support",
  "KVM Virtualization",
  "Instant Deployment",
  "99.9% Uptime SLA"
];

export default function VPSPage() {
  const [selectedLocation, setSelectedLocation] = useState("india-mumbai")
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false)
  const [selectedCpu, setSelectedCpu] = useState("standard")
  const [selectedCycle, setSelectedCycle] = useState("monthly")
  const { formatPrice, currency } = useCurrency()
  const router = useRouter()

  const cycleIndex = cycles.findIndex(c => c.id === selectedCycle)

  const calculatePrice = (base: number) => {
    const cycle = cycles.find(c => c.id === selectedCycle)
    if (!cycle) return base
    const price = base * (1 - cycle.discount)
    return Math.floor(price)
  }

  const handleDeploy = (plan: any) => {
    const price = calculatePrice(plan.basePrice)
    localStorage.setItem('vexa_cart_total', price.toString())
    localStorage.setItem('vexa_cart_items', JSON.stringify([{
      name: `VPS - ${selectedCpu.toUpperCase()} ${plan.name} (${selectedLocation.toUpperCase()})`,
      description: `${plan.cores} | ${plan.ram} | ${plan.storage} | ${plan.bandwidth} | ${plan.ipv4}`,
      price: price
    }]))

    router.push('/')
  }

  const currentPlans = plansData[selectedCpu as keyof typeof plansData] || []
  const currentLocObj = locations.find(loc => loc.id === selectedLocation)

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white selection:bg-[#00a3ff]/30 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#00a3ff]/[0.04] rounded-full blur-[180px] pointer-events-none will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] bg-[#6366f1]/[0.03] rounded-full blur-[150px] pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 left-2/3 w-[500px] h-[500px] bg-[#00a3ff]/[0.02] rounded-full blur-[120px] pointer-events-none will-change-transform" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-[#00a3ff]/10 text-[#00a3ff] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#00a3ff]/20 mb-6 tracking-widest uppercase">
              <Sparkles className="w-3 h-3" />
              Enterprise Cloud Infrastructure
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 orbitron-font leading-tight">
              Virtual <span className="sm:inline">Private</span> <br className="hidden sm:block" />
              <span className="relative">
                <span className="text-[#00a3ff] text-neon-glow-brand">Servers</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a3ff]/0 via-[#00a3ff]/50 to-[#00a3ff]/0 rounded-full" />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-lg leading-relaxed">
              Deploy high-performance virtual instances in seconds. Experience full root access, dedicated resources, and enterprise-grade DDoS protection across our global network.
            </p>
          </motion.div>

          {/* Billing Cycle - Sliding Pill Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-auto"
          >
            <h4 className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 sm:mb-4">Billing Cycle</h4>
            <div className="relative flex items-center bg-white/[0.04] border border-white/[0.06] p-1 rounded-2xl backdrop-blur-md">
              <div
                className="absolute top-1 bottom-1 rounded-xl bg-gradient-to-r from-[#00a3ff] to-[#6366f1] transition-all duration-300 ease-out shadow-[0_0_15px_rgba(0,163,255,0.3)]"
                style={{
                  left: `calc(${(cycleIndex / cycles.length) * 100}% + 4px)`,
                  width: `calc(${100 / cycles.length}% - 8px)`,
                }}
              />
              {cycles.map((cycle) => (
                <button
                  key={cycle.id}
                  onClick={() => setSelectedCycle(cycle.id)}
                  className={`relative z-10 flex-1 px-2 py-2.5 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center ${
                    selectedCycle === cycle.id ? "text-white" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {cycle.name}
                  {cycle.discount > 0 && (
                    <span className="ml-1 text-[8px] opacity-70">-{Math.round(cycle.discount * 100)}%</span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Configuration Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] rounded-[24px] sm:rounded-[40px] p-5 sm:p-8">
            <h3 className="text-[11px] sm:text-sm font-bold text-gray-400 mb-4 sm:mb-6 uppercase tracking-widest flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00a3ff]" />
              1. Deployment Location
            </h3>

            <div className="relative">
              <button
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                className="w-full flex items-center justify-between bg-[#0b0c16]/40 backdrop-blur-sm border border-white/[0.06] text-white py-3 sm:py-4 px-4 sm:px-5 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00a3ff]/50 transition-all font-semibold hover:border-white/20"
              >
                {currentLocObj ? (
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <span className="text-xl sm:text-2xl shrink-0">{currentLocObj.flag}</span>
                    <span className="text-sm sm:text-lg truncate">{currentLocObj.country} - {currentLocObj.name}</span>
                  </div>
                ) : (
                  <span>Select Location</span>
                )}
                <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 shrink-0 transition-transform ${isLocationDropdownOpen ? "-rotate-90" : "rotate-90"}`} />
              </button>

              <AnimatePresence>
                {isLocationDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-[#0b0c16]/80 backdrop-blur-xl border border-white/[0.06] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden z-50 max-h-[240px] sm:max-h-[300px] overflow-y-auto custom-scrollbar"
                  >
                    {locations.map((loc) => (
                      <button
                        key={loc.id}
                        onClick={() => {
                          setSelectedLocation(loc.id)
                          setIsLocationDropdownOpen(false)
                        }}
                        className={`w-full flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 hover:bg-white/5 transition-all text-left ${
                          selectedLocation === loc.id ? "bg-[#00a3ff]/10 text-[#00a3ff]" : "text-gray-300"
                        }`}
                      >
                        <span className="text-lg sm:text-2xl shrink-0">{loc.flag}</span>
                        <span className="text-xs sm:text-base font-medium truncate">{loc.country} - {loc.name}</span>
                        {selectedLocation === loc.id && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto shrink-0"
                          >
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                              <Check className="w-3 h-3 text-emerald-400" />
                            </div>
                          </motion.span>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] rounded-[24px] sm:rounded-[40px] p-5 sm:p-8">
            <h3 className="text-[11px] sm:text-sm font-bold text-gray-400 mb-4 sm:mb-6 uppercase tracking-widest flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00a3ff]" />
              2. Processor Architecture
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {cpuTypes.map((cpu) => (
                <button
                  key={cpu.id}
                  onClick={() => setSelectedCpu(cpu.id)}
                  className={`relative flex flex-col items-center justify-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-2xl sm:rounded-3xl border transition-all overflow-hidden ${
                    selectedCpu === cpu.id
                      ? "bg-[#00a3ff]/10 border-[#00a3ff] text-white"
                      : "bg-[#0b0c16]/40 border-white/[0.06] text-gray-500 hover:border-white/20"
                  }`}
                >
                  {selectedCpu === cpu.id && (
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00a3ff]/10 to-transparent pointer-events-none" />
                  )}
                  <div className={`relative z-10 ${selectedCpu === cpu.id ? '' : 'opacity-50 grayscale'}`}>
                    <Image src={cpu.image} alt={cpu.name} width={24} height={24} className="sm:w-8 sm:h-8 mb-0.5 sm:mb-1 object-contain" />
                  </div>
                  <span className="relative z-10 text-[10px] sm:text-xs font-bold uppercase">{cpu.name}</span>
                  <span className="relative z-10 text-[8px] sm:text-[10px] text-gray-500 text-center leading-tight">{cpu.desc}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Global Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4 px-4 sm:px-6 py-5 sm:py-8 rounded-[24px] sm:rounded-[32px] bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06]">
            {vpsFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-sm font-semibold text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Plans List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24">
          <AnimatePresence mode="popLayout">
            {currentPlans.length > 0 ? (
              currentPlans.map((plan: any, idx: number) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative"
                >
                  <div className="absolute -inset-[1px] rounded-[24px] sm:rounded-[32px] bg-gradient-to-b from-[#00a3ff]/20 via-[#6366f1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

                  <div className="relative bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.12] rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 transition-all duration-500 flex flex-col h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00a3ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#00a3ff]/[0.03] rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4 sm:mb-6">
                        <div>
                          <h4 className="text-xl font-bold mb-1 text-white group-hover:text-[#00a3ff] transition-colors">{plan.name}</h4>
                          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{selectedCpu} Processor</p>
                        </div>
                        <div className="w-12 h-12 bg-white/[0.04] rounded-xl flex items-center justify-center p-2 border border-white/[0.06] group-hover:border-[#00a3ff]/30 group-hover:scale-110 transition-all duration-500">
                          <Image src={cpuTypes.find(c => c.id === selectedCpu)?.image || ""} alt="CPU" width={30} height={30} className="object-contain" />
                        </div>
                      </div>

                      <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                        <div className="flex justify-between items-center text-xs sm:text-sm px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                          <span className="text-gray-400 flex items-center gap-1.5 sm:gap-2"><Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00a3ff]" /> CPU</span>
                          <span className="font-bold text-white">{plan.cores}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs sm:text-sm px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                          <span className="text-gray-400 flex items-center gap-1.5 sm:gap-2"><Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00a3ff]" /> RAM</span>
                          <span className="font-bold text-white">{plan.ram}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs sm:text-sm px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                          <span className="text-gray-400 flex items-center gap-1.5 sm:gap-2"><HardDrive className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00a3ff]" /> Storage</span>
                          <span className="font-bold text-white">{plan.storage}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs sm:text-sm px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                          <span className="text-gray-400 flex items-center gap-1.5 sm:gap-2"><Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00a3ff]" /> Bandwidth</span>
                          <span className="font-bold text-white">{plan.bandwidth}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs sm:text-sm px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                          <span className="text-gray-400 flex items-center gap-1.5 sm:gap-2"><Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00a3ff]" /> Network</span>
                          <span className="font-bold text-white">{plan.ipv4}</span>
                        </div>
                      </div>

                      <div className="border-t border-white/[0.06] pt-4 sm:pt-6 mt-auto">
                        <div className="mb-4 sm:mb-6 flex items-end">
                          <span className="text-2xl sm:text-3xl font-bold text-white leading-none">{formatPrice(calculatePrice(plan.basePrice))}</span>
                          <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest ml-2 mb-1">/ Month</span>
                        </div>
                        <button
                          onClick={() => handleDeploy(plan)}
                          className="group/btn relative w-full py-3.5 rounded-xl font-bold transition-all duration-500 flex items-center justify-center gap-2 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-[#00a3ff] via-[#6366f1] to-[#00a3ff] bg-[length:200%_100%] animate-gradient-x" />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#00a3ff] to-[#6366f1] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                          <span className="relative z-10 flex items-center gap-2 text-white">
                            Order Now
                            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-24 bg-[#0b0c16]/30 backdrop-blur-xl border border-dashed border-white/[0.06] rounded-[40px]">
                <p className="text-gray-500 italic">No plans available for this specific configuration yet.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  )
}
