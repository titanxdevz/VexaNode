"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Cpu } from "lucide-react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { PageMeta } from "../../components/PageMeta"
import { ProductSchema } from "../../components/SchemaOrg"
import { useCurrency } from "../../contexts/CurrencyContext"
import Link from "next/link"

const cycles = [
  { id: "monthly", name: "Monthly", discount: 0 },
  { id: "quarterly", name: "Quarterly", discount: 0.06 },
  { id: "semi-annually", name: "Semi-Annually", discount: 0.17 },
  { id: "annually", name: "Annually", discount: 0.17 }
]

const indiaNodes = [
  {
    id: "india-delhi-ryzen",
    title: "Delhi - AMD Ryzen 9 9950X (DDR5 RAM)",
    cpu: "AMD Ryzen 9 9950X",
    badge: "Ultra Low Latency",
    plans: [
      { id: "idr1", name: "VEXA - STARTER", cores: "1 vCPU", ram: "4 GB DDR5 RAM", storage: "50 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 749 },
      { id: "idr2", name: "VEXA - BASIC", cores: "2 vCPU", ram: "8 GB DDR5 RAM", storage: "80 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 1279 },
      { id: "idr3", name: "VEXA - STANDARD", cores: "4 vCPU", ram: "16 GB DDR5 RAM", storage: "150 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 1999 },
      { id: "idr4", name: "VEXA - PLUS", cores: "5 vCPU", ram: "24 GB DDR5 RAM", storage: "180 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 2729 },
      { id: "idr5", name: "VEXA - PRO", cores: "6 vCPU", ram: "32 GB DDR5 RAM", storage: "200 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 3949 },
      { id: "idr6", name: "VEXA - ELITE", cores: "8 vCPU", ram: "48 GB DDR5 RAM", storage: "250 GB NVMe SSD", bandwidth: "1 Gbps Port", ipv4: "1 Dedicated IPv4", basePrice: 5149 }
    ]
  },
  {
    id: "india-delhi-epyc",
    title: "Delhi - AMD EPYC 7F72 (Enterprise NVMe)",
    cpu: "AMD EPYC 7F72",
    badge: "High Capacity",
    plans: [
      { id: "ide1", name: "VEXA - STARTER", cores: "2 vCPU", ram: "6 GB RAM", storage: "50 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 499 },
      { id: "ide2", name: "VEXA - BASIC", cores: "2 vCPU", ram: "8 GB RAM", storage: "80 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 699 },
      { id: "ide3", name: "VEXA - STANDARD", cores: "4 vCPU", ram: "12 GB RAM", storage: "100 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1099 },
      { id: "ide4", name: "VEXA - PLUS", cores: "6 vCPU", ram: "16 GB RAM", storage: "150 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1299 },
      { id: "ide5", name: "VEXA - PRO", cores: "6 vCPU", ram: "24 GB RAM", storage: "200 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1649 },
      { id: "ide6", name: "VEXA - ELITE", cores: "8 vCPU", ram: "32 GB RAM", storage: "500 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 2099 }
    ]
  },
  {
    id: "india-vexa",
    title: "Mumbai - Intel Xeon Platinum 8269",
    cpu: "Intel Xeon Platinum 8269-CY",
    badge: "Popular Mumbai",
    plans: [
      { id: "vi1", name: "VEXA - STARTER", cores: "2 vCPU", ram: "6 GB RAM", storage: "50 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 449 },
      { id: "vi2", name: "VEXA - BASIC", cores: "2 vCPU", ram: "8 GB RAM", storage: "80 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 599 },
      { id: "vi3", name: "VEXA - STANDARD", cores: "4 vCPU", ram: "12 GB RAM", storage: "100 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 849 },
      { id: "vi4", name: "VEXA - PLUS", cores: "6 vCPU", ram: "16 GB RAM", storage: "150 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1149 },
      { id: "vi5", name: "VEXA - PRO", cores: "6 vCPU", ram: "24 GB RAM", storage: "200 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1429 },
      { id: "vi6", name: "VEXA - ELITE", cores: "8 vCPU", ram: "32 GB RAM", storage: "300 GB NVMe SSD", bandwidth: "Unmetered", ipv4: "1 Dedicated IPv4", basePrice: 1599 }
    ]
  }
]

export default function IndiaVPSPage() {
  const [selectedNodeId, setSelectedNodeId] = useState("india-delhi-ryzen")
  const [selectedCycle, setSelectedCycle] = useState("monthly")
  const { formatPrice } = useCurrency()

  const activeNode = indiaNodes.find(n => n.id === selectedNodeId) || indiaNodes[0]
  const cycleIndex = cycles.findIndex(c => c.id === selectedCycle)

  const calculatePrice = (base: number) => {
    const cycle = cycles.find(c => c.id === selectedCycle)
    if (!cycle) return base
    const price = base * (1 - cycle.discount)
    return Math.floor(price)
  }

  const handleDeploy = () => {
    window.open("https://discord.gg/syHFbR5yBQ", "_blank")
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-emerald-500/30 relative overflow-hidden">
      <PageMeta title="India VPS Hosting (Mumbai & Delhi)" description="Deploy high performance India VPS instances in Mumbai and Delhi with AMD Ryzen 9 9950X, AMD EPYC, and Intel Xeon Platinum processors." />
      <ProductSchema
        name="India High Performance VPS Hosting (Mumbai & Delhi)"
        description="High performance India VPS instances in Mumbai and Delhi with AMD Ryzen 9 9950X, AMD EPYC, and Intel Xeon Platinum processors."
        lowPrice={449}
        highPrice={5149}
        url="https://vexanode.cloud/vps/india"
        ratingValue={4.9}
        reviewCount={145}
        offerCount={18}
      />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-3 py-1.5 rounded-full border border-emerald-500/20 mb-4 tracking-widest uppercase">
              <MapPin className="w-3.5 h-3.5" />
              🇮🇳 India Region (Mumbai & Delhi)
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 orbitron-font leading-tight">
              India High Performance <span className="text-emerald-400">VPS Hosting</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Ultra low latency hosting for Indian users with enterprise infrastructure in Mumbai & Delhi NCR. Choose between Ryzen 9 9950X DDR5, AMD EPYC, or Intel Xeon Platinum nodes.
            </p>
          </motion.div>

          <div className="w-full lg:w-auto">
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Billing Cycle</h4>
            <div className="relative flex items-center bg-zinc-950/80 border border-zinc-800 p-1.5 rounded-2xl backdrop-blur-xl">
              <div
                className="absolute top-1.5 bottom-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(16,185,129,0.35)]"
                style={{
                  left: `calc(${(cycleIndex / cycles.length) * 100}% + 6px)`,
                  width: `calc(${100 / cycles.length}% - 12px)`,
                }}
              />
              {cycles.map((cycle) => (
                <button
                  key={cycle.id}
                  onClick={() => setSelectedCycle(cycle.id)}
                  className={`relative z-10 flex-1 px-4 py-2.5 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center ${
                    selectedCycle === cycle.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {cycle.name}
                  {cycle.discount > 0 && (
                    <span className="ml-1 text-[8px] text-emerald-400 font-extrabold">-{Math.round(cycle.discount * 100)}%</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Region Switcher Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs border-b border-zinc-800/80 scrollbar-none">
          <span className="text-gray-500 font-bold uppercase text-[10px] tracking-wider shrink-0 mr-2">Other Regions:</span>
          <Link href="/vps/miami" className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors shrink-0">🇺🇸 Miami</Link>
          <Link href="/vps/utah" className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors shrink-0">🇺🇸 Utah</Link>
          <Link href="/vps/germany" className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors shrink-0">🇩🇪 Germany</Link>
          <Link href="/vps/singapore" className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors shrink-0">🇸🇬 Singapore</Link>
        </div>

        {/* Hardware Node Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {indiaNodes.map((node) => (
            <button
              key={node.id}
              onClick={() => setSelectedNodeId(node.id)}
              className={`px-5 py-3 rounded-xl border text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
                selectedNodeId === node.id
                  ? "bg-emerald-500 text-black border-emerald-400 shadow-lg shadow-emerald-500/20"
                  : "bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700"
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>{node.title}</span>
            </button>
          ))}
        </div>

        {/* Active Node Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeNode.plans.map((plan, index) => {
            const finalPrice = calculatePrice(plan.basePrice)
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative bg-[#0b0c16]/50 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      🇮🇳 {activeNode.cpu}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">{plan.cores}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {plan.name}
                  </h3>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-xs py-1 border-b border-zinc-800/50">
                      <span className="text-gray-400">RAM</span>
                      <span className="font-semibold text-white">{plan.ram}</span>
                    </div>
                    <div className="flex justify-between text-xs py-1 border-b border-zinc-800/50">
                      <span className="text-gray-400">Storage</span>
                      <span className="font-semibold text-white">{plan.storage}</span>
                    </div>
                    <div className="flex justify-between text-xs py-1 border-b border-zinc-800/50">
                      <span className="text-gray-400">Bandwidth</span>
                      <span className="font-semibold text-white">{plan.bandwidth}</span>
                    </div>
                    <div className="flex justify-between text-xs py-1">
                      <span className="text-gray-400">IP Address</span>
                      <span className="font-semibold text-white">{plan.ipv4}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800/80">
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-extrabold text-white orbitron-font">{formatPrice(finalPrice)}</span>
                    <span className="text-xs text-gray-400 ml-1">/ month</span>
                  </div>
                  <button
                    onClick={handleDeploy}
                    className="w-full py-3 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-400 text-black transition-all duration-200 text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20"
                  >
                    Deploy India VPS
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </main>

      <Footer />
    </div>
  )
}
