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
  { id: "miami", name: "🇺🇸 Miami", country: "USA", flag: "🇺🇸", cpu: "Intel Xeon Gold" },
  { id: "utah", name: "🇺🇸 Salt Lake", country: "Utah, USA", flag: "🇺🇸", cpu: "Intel Xeon E5-2680v2" },
  { id: "germany-old", name: "🇩🇪 Frankfurt (EPYC)", country: "Germany", flag: "🇩🇪", cpu: "AMD EPYC 7502P" },
  { id: "germany-vltn", name: "🇩🇪 Frankfurt (VLTN)", country: "Germany", flag: "🇩🇪", cpu: "Intel Xeon E5-2697v2" },
  { id: "germany-ryzen", name: "🇩🇪 Germany (Ryzen 9)", country: "Germany", flag: "🇩🇪", cpu: "AMD Ryzen 9 9950X" },
  { id: "india-vltn", name: "🇮🇳 Mumbai (VLTN)", country: "India", flag: "🇮🇳", cpu: "Intel Xeon Platinum 8269-CY" },
  { id: "india-delhi-epyc", name: "🇮🇳 Delhi (EPYC)", country: "India", flag: "🇮🇳", cpu: "AMD EPYC 7F72" },
  { id: "india-delhi-ryzen", name: "🇮🇳 Delhi (Ryzen 9)", country: "India", flag: "🇮🇳", cpu: "AMD Ryzen 9 9950X" },
  { id: "singapore-vltn", name: "🇸🇬 Singapore (OVH)", country: "Singapore", flag: "🇸🇬", cpu: "Intel Xeon E3-1245 v5" }
];

const plansData = {
  miami: [
    { id: "m1", name: "VLTN - STARTER", cores: "Dedicated vCores", ram: "16 GB DDR4 RAM", storage: "High-Speed NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "DDoS Protection & Instant Setup", basePrice: 1899 },
    { id: "m2", name: "VLTN - PRO", cores: "Dedicated vCores", ram: "32 GB DDR4 RAM", storage: "High-Speed NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "DDoS Protection & Instant Setup", basePrice: 3699 },
    { id: "m3", name: "VLTN - ELITE", cores: "Dedicated vCores", ram: "64 GB DDR4 RAM", storage: "High-Speed NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "DDoS Protection & Instant Setup", basePrice: 7199 }
  ],
  utah: [
    { id: "u1", name: "Budget Slice 12GB", cores: "4 Dedicated Cores", ram: "12 GB DDR3 RAM", storage: "120 GB SSD", bandwidth: "Unmetered Bandwidth", ipv4: "1 Dedicated IPv4", basePrice: 599 },
    { id: "u2", name: "Budget Slice 18GB", cores: "8 Dedicated Cores", ram: "18 GB DDR3 RAM", storage: "210 GB SSD", bandwidth: "Unmetered Bandwidth", ipv4: "1 Dedicated IPv4", basePrice: 899 },
    { id: "u3", name: "Budget Slice 32GB", cores: "12 Dedicated Cores", ram: "32 GB DDR3 RAM", storage: "340 GB SSD", bandwidth: "Unmetered Bandwidth", ipv4: "1 Dedicated IPv4", basePrice: 1349 }
  ],
  "germany-old": [
    { id: "go1", name: "Standard 01", cores: "2 vCPU", ram: "2 GB DDR4 RAM", storage: "30 GB NVMe SSD", bandwidth: "2 TB Bandwidth", ipv4: "1 Dedicated IPv4", basePrice: 329 },
    { id: "go2", name: "Standard 02", cores: "3 vCPU", ram: "4 GB DDR4 RAM", storage: "70 GB NVMe SSD", bandwidth: "2 TB Bandwidth", ipv4: "1 Dedicated IPv4", basePrice: 549 },
    { id: "go3", name: "Standard 03", cores: "4 vCPU", ram: "8 GB DDR4 RAM", storage: "120 GB NVMe SSD", bandwidth: "3 TB Bandwidth", ipv4: "1 Dedicated IPv4", basePrice: 1099 },
    { id: "go4", name: "Standard 04", cores: "5 vCPU", ram: "12 GB DDR4 RAM", storage: "160 GB NVMe SSD", bandwidth: "4 TB Bandwidth", ipv4: "1 Dedicated IPv4", basePrice: 1649 },
    { id: "go5", name: "Standard 05", cores: "6 vCPU", ram: "16 GB DDR4 RAM", storage: "210 GB NVMe SSD", bandwidth: "4 TB Bandwidth", ipv4: "1 Dedicated IPv4", basePrice: 2099 },
    { id: "go6", name: "Standard 06", cores: "7 vCPU", ram: "24 GB DDR4 RAM", storage: "250 GB NVMe SSD", bandwidth: "4 TB Bandwidth", ipv4: "1 Dedicated IPv4", basePrice: 3099 },
    { id: "go7", name: "Standard 07", cores: "8 vCPU", ram: "32 GB DDR4 RAM", storage: "300 GB NVMe SSD", bandwidth: "4 TB Bandwidth", ipv4: "1 Dedicated IPv4", basePrice: 4099 },
    { id: "go8", name: "Standard 08", cores: "10 vCPU", ram: "48 GB DDR4 RAM", storage: "350 GB NVMe SSD", bandwidth: "4 TB Bandwidth", ipv4: "1 Dedicated IPv4", basePrice: 5599 },
    { id: "go9", name: "Standard 09", cores: "10 vCPU", ram: "64 GB DDR4 RAM", storage: "400 GB NVMe SSD", bandwidth: "4 TB Bandwidth", ipv4: "1 Dedicated IPv4", basePrice: 7499 }
  ],
  "germany-vltn": [
    { id: "vg1", name: "VLTN - STARTER", cores: "1 vCores", ram: "6 GB RAM", storage: "40 GB NVMe", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 329 },
    { id: "vg2", name: "VLTN - BASIC", cores: "2 vCores", ram: "8 GB RAM", storage: "50 GB NVMe", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 505 },
    { id: "vg3", name: "VLTN - STANDARD", cores: "4 vCores", ram: "12 GB RAM", storage: "100 GB NVMe", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 637 },
    { id: "vg4", name: "VLTN - PLUS", cores: "4 vCores", ram: "16 GB RAM", storage: "150 GB NVMe", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 912 },
    { id: "vg5", name: "VLTN - PRO", cores: "6 vCores", ram: "24 GB RAM", storage: "200 GB NVMe", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1319 },
    { id: "vg6", name: "VLTN - ELITE", cores: "6 vCores", ram: "36 GB RAM", storage: "250 GB NVMe", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1979 },
    { id: "vg7", name: "VLTN - ULTIMATE", cores: "8 vCores", ram: "48 GB RAM", storage: "300 GB NVMe", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 2639 },
    { id: "vg8", name: "VLTN - TITAN", cores: "8 vCores", ram: "64 GB RAM", storage: "350 GB NVMe", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 4179 }
  ],
  "germany-ryzen": [
    { id: "gr1", name: "VLTN - STARTER", cores: "1 vCPU", ram: "2 GB DDR5 RAM", storage: "20 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 329 },
    { id: "gr2", name: "VLTN - BASIC", cores: "1 vCPU", ram: "4 GB DDR5 RAM", storage: "25 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 499 },
    { id: "gr3", name: "VLTN - STANDARD", cores: "2 vCPU", ram: "6 GB DDR5 RAM", storage: "50 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 679 },
    { id: "gr4", name: "VLTN - PLUS", cores: "2 vCPU", ram: "8 GB DDR5 RAM", storage: "50 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 1069 },
    { id: "gr5", name: "VLTN - PRO", cores: "3 vCPU", ram: "12 GB DDR5 RAM", storage: "75 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 1289 },
    { id: "gr6", name: "VLTN - ELITE", cores: "4 vCPU", ram: "16 GB DDR5 RAM", storage: "120 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 2019 },
    { id: "gr7", name: "VLTN - ULTIMATE", cores: "6 vCPU", ram: "24 GB DDR5 RAM", storage: "160 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 2649 },
    { id: "gr8", name: "VLTN - TITAN", cores: "6 vCPU", ram: "32 GB DDR5 RAM", storage: "200 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 3479 }
  ],
  "india-vltn": [
    { id: "vi1", name: "VLTN - STARTER", cores: "2 vCPU", ram: "6 GB RAM", storage: "50 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 449 },
    { id: "vi2", name: "VLTN - BASIC", cores: "2 vCPU", ram: "8 GB RAM", storage: "80 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 599 },
    { id: "vi3", name: "VLTN - STANDARD", cores: "4 vCPU", ram: "12 GB RAM", storage: "100 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 849 },
    { id: "vi4", name: "VLTN - PLUS", cores: "6 vCPU", ram: "16 GB RAM", storage: "150 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1149 },
    { id: "vi5", name: "VLTN - PRO", cores: "6 vCPU", ram: "24 GB RAM", storage: "200 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1429 },
    { id: "vi6", name: "VLTN - ELITE", cores: "8 vCPU", ram: "32 GB RAM", storage: "300 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1599 },
    { id: "vi7", name: "VLTN - ULTIMATE", cores: "10 vCPU", ram: "48 GB RAM", storage: "350 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1899 },
    { id: "vi8", name: "VLTN - TITAN", cores: "12 vCPU", ram: "64 GB RAM", storage: "400 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 2299 }
  ],
  "india-delhi-epyc": [
    { id: "ide1", name: "VLTN - STARTER", cores: "2 vCPU", ram: "6 GB RAM", storage: "50 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 499 },
    { id: "ide2", name: "VLTN - BASIC", cores: "2 vCPU", ram: "8 GB RAM", storage: "80 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 699 },
    { id: "ide3", name: "VLTN - STANDARD", cores: "4 vCPU", ram: "12 GB RAM", storage: "100 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1099 },
    { id: "ide4", name: "VLTN - PLUS", cores: "6 vCPU", ram: "16 GB RAM", storage: "150 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1299 },
    { id: "ide5", name: "VLTN - PRO", cores: "6 vCPU", ram: "24 GB RAM", storage: "200 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1649 },
    { id: "ide6", name: "VLTN - ELITE", cores: "8 vCPU", ram: "32 GB RAM", storage: "500 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 2099 },
    { id: "ide7", name: "VLTN - ULTIMATE", cores: "10 vCPU", ram: "48 GB RAM", storage: "350 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 2749 },
    { id: "ide8", name: "VLTN - TITAN", cores: "12 vCPU", ram: "64 GB RAM", storage: "400 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 3799 }
  ],
  "india-delhi-ryzen": [
    { id: "idr1", name: "VLTN - STARTER", cores: "1 vCPU", ram: "4 GB DDR5 RAM", storage: "50 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 749 },
    { id: "idr2", name: "VLTN - BASIC", cores: "2 vCPU", ram: "8 GB DDR5 RAM", storage: "80 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 1279 },
    { id: "idr3", name: "VLTN - STANDARD", cores: "4 vCPU", ram: "16 GB DDR5 RAM", storage: "150 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 1999 },
    { id: "idr4", name: "VLTN - PLUS", cores: "5 vCPU", ram: "24 GB DDR5 RAM", storage: "180 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 2729 },
    { id: "idr5", name: "VLTN - PRO", cores: "6 vCPU", ram: "32 GB DDR5 RAM", storage: "200 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 3949 },
    { id: "idr6", name: "VLTN - ELITE", cores: "8 vCPU", ram: "48 GB DDR5 RAM", storage: "250 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 5149 }
  ],
  "singapore-vltn": [
    { id: "vs1", name: "VLTN - STARTER", cores: "1 vCPU", ram: "4 GB RAM", storage: "20 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 429 },
    { id: "vs2", name: "VLTN - BASIC", cores: "2 vCPU", ram: "8 GB RAM", storage: "40 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 489 },
    { id: "vs3", name: "VLTN - STANDARD", cores: "3 vCPU", ram: "12 GB RAM", storage: "50 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 649 },
    { id: "vs4", name: "VLTN - PLUS", cores: "4 vCPU", ram: "16 GB RAM", storage: "80 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 869 },
    { id: "vs5", name: "VLTN - PRO", cores: "5 vCPU", ram: "24 GB RAM", storage: "100 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1299 },
    { id: "vs6", name: "VLTN - ELITE", cores: "6 vCPU", ram: "32 GB RAM", storage: "120 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1619 },
    { id: "vs7", name: "VLTN - ULTIMATE", cores: "7 vCPU", ram: "48 GB RAM", storage: "150 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1939 },
    { id: "vs8", name: "VLTN - TITAN", cores: "8 vCPU", ram: "64 GB RAM", storage: "200 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 2349 }
  ]
};

const vpsFeaturesData = {
  miami: [
    "Intel Xeon Gold Processor",
    "NVMe SSD Storage",
    "USA - Miami Datacenter",
    "1 Gbps Network",
    "Premium DDoS Protection",
    "Full Root Access",
    "Instant Deployment",
    "99.9% Uptime",
    "24×7 Support"
  ],
  utah: [
    "Intel Xeon E5-2680v2",
    "SSD Storage",
    "10 Gbps Network",
    "Unmetered Traffic",
    "DDoS Protection",
    "Dedicated IPv4",
    "Full Root Access"
  ],
  "germany-old": [
    "AMD EPYC 7502P",
    "NVMe SSD Storage",
    "Full Root SSH Access",
    "DDoS Protection",
    "Virtualizor/KVM",
    "24×7 Support"
  ],
  "germany-vltn": [
    "Intel Xeon E5-2697v2",
    "NVMe SSD Storage",
    "Full Root SSH Access",
    "DDoS Protection",
    "Instant Setup",
    "99.9% Uptime SLA"
  ],
  "germany-ryzen": [
    "AMD Ryzen 9 9950X",
    "DDR5 Memory",
    "NVMe SSD Storage",
    "1 Gbps Network",
    "Premium DDoS Protection",
    "Instant Setup"
  ],
  "india-vltn": [
    "Intel Xeon Platinum 8269-CY",
    "NVMe SSD Storage",
    "Full Root SSH Access",
    "DDoS Protection",
    "Instant Setup",
    "24/7 Support"
  ],
  "india-delhi-epyc": [
    "AMD EPYC 7F72",
    "NVMe SSD Storage",
    "Full Root SSH Access",
    "DDoS Protection",
    "Instant Deployment",
    "99.9% Uptime"
  ],
  "india-delhi-ryzen": [
    "AMD Ryzen 9 9950X",
    "DDR5 Memory",
    "NVMe SSD Storage",
    "1 Gbps Network",
    "DDoS Protection",
    "Instant Setup"
  ],
  "singapore-vltn": [
    "Intel Xeon E3-1245 v5",
    "NVMe SSD Storage",
    "OVH DDoS Protection",
    "Instant Setup",
    "1 Gbps Network",
    "Full Root Access"
  ]
};

export default function VPSPage() {
  const [selectedLocation, setSelectedLocation] = useState("miami")
  const [selectedCycle, setSelectedCycle] = useState("monthly")
  const { formatPrice } = useCurrency()

  const cycleIndex = cycles.findIndex(c => c.id === selectedCycle)

  const calculatePrice = (base: number) => {
    const cycle = cycles.find(c => c.id === selectedCycle)
    if (!cycle) return base
    const price = base * (1 - cycle.discount)
    return Math.floor(price)
  }

  const currentLocObj = locations.find(loc => loc.id === selectedLocation)
  const currentPlans = plansData[selectedLocation as keyof typeof plansData] || []
  const currentFeatures = vpsFeaturesData[selectedLocation as keyof typeof vpsFeaturesData] || []

  const handleDeploy = (plan: any) => {
    window.open("https://discord.gg/vexanode", "_blank")
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-emerald-500/30 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-500/[0.04] rounded-full blur-[180px] pointer-events-none will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] bg-teal-500/[0.03] rounded-full blur-[150px] pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 left-2/3 w-[500px] h-[500px] bg-emerald-500/[0.02] rounded-full blur-[120px] pointer-events-none will-change-transform" />
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
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-3 py-1.5 rounded-full border border-emerald-500/20 mb-6 tracking-widest uppercase">
              <Sparkles className="w-3 h-3" />
              Enterprise Cloud Infrastructure
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 orbitron-font leading-tight">
              Virtual Private <br className="hidden sm:block" />
              <span className="relative">
                <span className="text-emerald-500 text-neon-glow-brand">Servers</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 rounded-full" />
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
                className="absolute top-1 bottom-1 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(16,185,129,0.3)]"
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

        {/* Location Selection Row */}
        <div className="text-center mb-16 border-t border-white/[0.04] pt-12">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">1. Select Hosting Region</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl border transition-all duration-300 ${
                  selectedLocation === loc.id
                    ? "bg-emerald-500/10 border-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                    : "bg-[#0c0e1a]/40 border-white/[0.06] text-gray-400 hover:border-white/20 hover:bg-white/[0.02]"
                }`}
              >
                <span className="text-2xl">{loc.flag}</span>
                <div className="text-left">
                  <div className="text-sm font-bold">{loc.name}</div>
                  <div className="text-[10px] text-gray-500 uppercase font-mono tracking-tighter">{loc.cpu}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Global Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4 px-4 sm:px-6 py-5 sm:py-8 rounded-[24px] sm:rounded-[32px] bg-[#0c0e1a]/30 backdrop-blur-xl border border-white/[0.06]">
            {currentFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-sm font-semibold text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Optional Add-on Alert Box for Miami */}
        {selectedLocation === "miami" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 max-w-4xl mx-auto"
          >
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                Optional Add-on Available
              </h4>
              <p className="text-xs text-gray-400 mt-1">Need extra DDoS protected dedicated IPs for your Miami cluster?</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/25 px-4 py-2.5 rounded-xl text-right">
              <span className="text-xs text-gray-400 uppercase block tracking-wider font-bold">Extra IPv4</span>
              <span className="text-emerald-400 font-extrabold text-sm">+₹180/month per IP</span>
            </div>
          </motion.div>
        )}

        {/* Plans List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-24">
          <AnimatePresence mode="popLayout">
            {currentPlans.map((plan: any, idx: number) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] rounded-[24px] sm:rounded-[32px] bg-gradient-to-b from-emerald-500/20 via-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

                <div className="relative bg-[#0c0e1a]/30 backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.12] rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 transition-all duration-500 flex flex-col h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-emerald-500/[0.03] rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4 sm:mb-6">
                      <div>
                        <h4 className="text-xl font-bold mb-1 text-white group-hover:text-emerald-400 transition-colors">{plan.name}</h4>
                        <p className="text-[9px] text-emerald-400 uppercase font-bold tracking-widest">{currentLocObj?.cpu}</p>
                      </div>
                      <div className="w-12 h-12 bg-white/[0.04] rounded-xl flex items-center justify-center p-2 border border-white/[0.06] group-hover:border-emerald-500/30 group-hover:scale-110 transition-all duration-500">
                        <Server className="w-6 h-6 text-emerald-400" />
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                      <div className="flex justify-between items-center text-xs sm:text-sm px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                        <span className="text-gray-400 flex items-center gap-1.5 sm:gap-2"><Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> CPU</span>
                        <span className="font-bold text-white">{plan.cores}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs sm:text-sm px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                        <span className="text-gray-400 flex items-center gap-1.5 sm:gap-2"><Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> RAM</span>
                        <span className="font-bold text-white">{plan.ram}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs sm:text-sm px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                        <span className="text-gray-400 flex items-center gap-1.5 sm:gap-2"><HardDrive className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> Storage</span>
                        <span className="font-bold text-white">{plan.storage}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs sm:text-sm px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                        <span className="text-gray-400 flex items-center gap-1.5 sm:gap-2"><Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> Bandwidth</span>
                        <span className="font-bold text-white">{plan.bandwidth}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs sm:text-sm px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors">
                        <span className="text-gray-400 flex items-center gap-1.5 sm:gap-2"><Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> Network</span>
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
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 bg-[length:200%_100%] animate-gradient-x" />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 flex items-center gap-2 text-white">
                          Order Now
                          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  )
}
