"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Cpu, Zap, Shield, HardDrive, Music, Check, Headphones, Globe, Sparkles, MessageSquare, Database } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { CustomIcons } from "../components/CustomIcons"
import { useCurrency } from "../contexts/CurrencyContext"
import LavalinkTest from "../components/LavalinkTest"
import { useRouter } from "next/navigation"


const cycles = [
  { id: "monthly", name: "Monthly", discount: 0 },
  { id: "quarterly", name: "Quarterly", discount: 0 },
  { id: "semi-annually", name: "Semi-Annually", discount: 0.13 },
  { id: "annually", name: "Annually", discount: 0.24 }
]

const categories = [
  { id: "self-managed", name: "Self Managed", icon: Headphones, desc: "Direct node access for developers" },
  { id: "managed", name: "Managed Hosting", icon: Sparkles, desc: "Managed Lavalink hosting, fully handled by our team. Setup, config, and uptime included." }
]

const plans = {
  "self-managed": [
    {
      id: "self-starter",
      name: "Starter",
      basePrice: 35,
      ram: "512 MB",
      cpu: "50% CPU",
      storage: "1 GB Disk",
      region: "All 4",
      popular: false
    },
    {
      id: "self-basic",
      name: "Basic",
      basePrice: 99,
      ram: "1 GB",
      cpu: "100% CPU",
      storage: "2 GB Disk",
      region: "All 4",
      popular: false
    },
    {
      id: "self-silver",
      name: "Silver",
      basePrice: 129,
      ram: "2 GB",
      cpu: "150% CPU",
      storage: "4 GB Disk",
      region: "All 4",
      popular: true
    },
    {
      id: "self-gold",
      name: "Gold",
      basePrice: 199,
      ram: "4 GB",
      cpu: "200% CPU",
      storage: "8 GB Disk",
      region: "All 4",
      popular: false
    },
    {
      id: "self-platinum",
      name: "Platinum",
      basePrice: 279,
      ram: "6 GB",
      cpu: "250% CPU",
      storage: "12 GB Disk",
      region: "All 4",
      popular: false
    },
    {
      id: "self-diamond",
      name: "Diamond",
      basePrice: 349,
      ram: "8 GB",
      cpu: "300% CPU",
      storage: "16 GB Disk",
      region: "All 4",
      popular: false
    },
    {
      id: "self-netherite",
      name: "Netherite",
      basePrice: 429,
      ram: "8 GB",
      cpu: "300% CPU",
      storage: "16 GB Disk",
      region: "All 4",
      popular: false
    },
    {
      id: "self-obsidian",
      name: "Obsidian",
      basePrice: 550,
      ram: "12 GB",
      cpu: "400% CPU",
      storage: "24 GB Disk",
      region: "All 4",
      popular: false
    }
  ],
  "managed": [
    {
      id: "managed-basic",
      name: "Basic",
      basePrice: 140,
      ram: "2GB DDR4",
      cpu: "1 Core",
      storage: "5GB NVMe",
      network: "1Gbps",
      hardware: "Intel"
    },
    {
      id: "managed-starter",
      name: "Starter",
      basePrice: 190,
      ram: "4GB DDR4",
      cpu: "2 Cores",
      storage: "8GB NVMe",
      network: "1Gbps",
      hardware: "Intel"
    },
    {
      id: "managed-gold",
      name: "Gold",
      basePrice: 280,
      ram: "6GB DDR4",
      cpu: "6 Cores",
      storage: "15GB NVMe",
      network: "1Gbps",
      popular: true,
      hardware: "AMD"
    },
    {
      id: "managed-pro",
      name: "Pro",
      basePrice: 500,
      ram: "High-end specs",
      cpu: "Priority Support",
      storage: "Custom Audio APIs",
      network: "Custom Plugins",
      hardware: "AMD"
    }
  ]
}

export default function LavalinkPage() {
  const [selectedCategory, setSelectedCategory] = useState("self-managed")
  const [selectedCycle, setSelectedCycle] = useState("monthly")
  const { formatPrice } = useCurrency()
  const router = useRouter()

  const calculatePrice = (base: number) => {
    const cycle = cycles.find(c => c.id === selectedCycle)
    if (!cycle) return base
    const monthlyPrice = base * (1 - cycle.discount)
    return Math.floor(monthlyPrice)
  }

  const handleDeploy = (plan: any) => {
    const price = calculatePrice(plan.basePrice)
    localStorage.setItem('vexa_cart_total', price.toString())
    localStorage.setItem('vexa_cart_items', JSON.stringify([{
      name: `Lavalink Node - ${plan.name} (${selectedCategory === 'managed' ? 'Managed' : 'Self-Managed'})`,
      description: `${plan.ram} | ${plan.cpu} | ${plan.storage}`,
      price: price
    }]))
    
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white selection:bg-[#00a3ff]/30 relative overflow-hidden">
      <div className="fixed inset-0 bg-[length:64px_64px] bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] pointer-events-none" />
      <div className="fixed top-40 -left-40 w-[500px] h-[500px] bg-[#00a3ff]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="fixed bottom-40 -right-40 w-[500px] h-[500px] bg-[#00a3ff]/5 blur-[160px] rounded-full pointer-events-none" />

      <Navbar />

      <main className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Sparkles Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-[#00a3ff]/10 text-[#00a3ff] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#00a3ff]/20 mb-6 tracking-widest uppercase">
            <Sparkles className="w-3 h-3" />
            Lavalink Node Hosting
          </span>
        </motion.div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 orbitron-font leading-tight">
              Lavalink VPS <br />
              <span className="relative inline-block text-[#00a3ff] text-neon-glow-brand">
                On Pterodactyl
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a3ff]/0 via-[#00a3ff]/50 to-[#00a3ff]/0 rounded-full" />
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl">
              High-performance nodes optimized for the lowest latency audio streaming. Managed and self-managed options available.
            </p>
          </div>

          <div className="flex flex-col items-end gap-4">
             {/* Billing Cycle Toggle - Pill Slider */}
            <div className="relative bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] p-1 rounded-full flex gap-1">
              <div
                className="absolute top-1 bottom-1 rounded-full bg-[#00a3ff] shadow-[0_0_15px_rgba(0,163,255,0.3)] transition-all duration-300 ease-out"
                style={{
                  left: `calc(${cycles.findIndex(c => c.id === selectedCycle) * (100 / cycles.length)}% + 2px)`,
                  width: `calc(${100 / cycles.length}% - 4px)`
                }}
              />
              {cycles.map((cycle) => (
                <button
                  key={cycle.id}
                  onClick={() => setSelectedCycle(cycle.id)}
                  className={`relative z-10 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                    selectedCycle === cycle.id
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {cycle.name}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] rounded-full px-4 py-2 text-sm text-gray-300">
              <span>₹ INR</span>
              <ChevronRight className="w-4 h-4 rotate-90" />
            </div>
          </div>
        </div>

        {/* Category Selectors */}
        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="text-white">1.</span> Select Hosting Tier
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative group flex flex-col items-start gap-3 p-6 rounded-2xl border transition-all duration-300 text-left overflow-hidden ${
                    selectedCategory === cat.id
                      ? "bg-[#0b0c16]/30 backdrop-blur-xl border-[#00a3ff]/50 shadow-[0_0_30px_rgba(0,163,255,0.15)]"
                      : "bg-[#0b0c16]/30 backdrop-blur-xl border-white/[0.06] hover:border-white/[0.12]"
                  }`}
                >
                  {selectedCategory === cat.id && (
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,163,255,0.08),transparent_50%)] pointer-events-none" />
                  )}
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === cat.id
                        ? "bg-[#00a3ff]/20 scale-110"
                        : "bg-[#00a3ff]/10 group-hover:scale-105"
                    }`}>
                      <cat.icon className={`w-5 h-5 ${selectedCategory === cat.id ? "text-white" : "text-[#00a3ff]"}`} />
                    </div>
                    <span className={`text-xl font-bold transition-colors ${selectedCategory === cat.id ? "text-white" : "text-gray-300"}`}>{cat.name}</span>
                  </div>
                  <p className={`text-sm relative z-10 ${selectedCategory === cat.id ? "text-gray-300" : "text-gray-500"}`}>{cat.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Plans List */}
        <div>
          <h3 className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-wider flex items-center gap-2">
            <span className="text-white">2.</span> Choose Plan
          </h3>
          
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {plans[selectedCategory as keyof typeof plans].map((plan: any, idx: number) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group relative bg-[#0b0c16]/30 backdrop-blur-xl border ${
                    plan.popular ? 'border-[#00a3ff]/50 ring-1 ring-[#00a3ff]/20' : 'border-white/[0.06]'
                  } hover:border-[#00a3ff]/30 rounded-2xl p-4 md:p-6 transition-all duration-300 flex flex-col lg:flex-row items-center gap-6 hover:shadow-[0_0_30px_rgba(0,163,255,0.08)]`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-[#00a3ff] to-[#0080cc] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(0,163,255,0.35)]">
                      Popular Choice
                    </div>
                  )}

                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-[#00a3ff]/10 rounded-xl flex items-center justify-center border border-[#00a3ff]/20 group-hover:border-[#00a3ff]/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,163,255,0.15)]">
                    {selectedCategory === 'managed' ? (
                      plan.hardware === 'AMD' ? (
                        <CustomIcons.AMD className="w-10 h-10 text-[#ED1C24]" />
                      ) : (
                        <CustomIcons.Intel className="w-10 h-10 text-[#0071C5]" />
                      )
                    ) : (
                      <Music className="w-8 h-8 text-[#00a3ff]" />
                    )}
                  </div>

                  {/* Name */}
                  <div className="flex-1 text-center lg:text-left">
                    <h4 className="text-xl font-bold mb-1 group-hover:text-[#00a3ff] transition-colors">{plan.name}</h4>
                    <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                      {selectedCategory === 'managed' ? 'Managed by VexaNode Team' : 'Self-Managed Audio Node'}
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {selectedCategory === 'self-managed' ? (
                      <>
                        <div className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-lg border border-white/[0.06]">
                          <Zap className="w-4 h-4 text-[#00a3ff]" />
                          <span className="text-xs font-bold text-gray-300">{plan.ram} RAM</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-lg border border-white/[0.06]">
                          <Music className="w-4 h-4 text-[#00a3ff]" />
                          <span className="text-xs font-bold text-gray-300">{plan.players}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-lg border border-white/[0.06]">
                          <Globe className="w-4 h-4 text-[#00a3ff]" />
                          <span className="text-xs font-bold text-gray-300">{plan.region}</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-lg border border-white/[0.06]">
                          <Zap className="w-4 h-4 text-[#00a3ff]" />
                          <span className="text-xs font-bold text-gray-300">{plan.ram}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-lg border border-white/[0.06]">
                          <Cpu className="w-4 h-4 text-[#00a3ff]" />
                          <span className="text-xs font-bold text-gray-300 line-clamp-1 max-w-[150px]">{plan.cpu}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/[0.03] px-4 py-2 rounded-lg border border-white/[0.06]">
                          <HardDrive className="w-4 h-4 text-[#00a3ff]" />
                          <span className="text-xs font-bold text-gray-300">{plan.storage}</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center gap-8 ml-auto">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{formatPrice(calculatePrice(plan.basePrice))}<span className="text-sm font-normal text-gray-500">/mo</span></div>
                      {selectedCycle !== 'monthly' && (
                        <div className="text-[10px] text-[#00a3ff] font-bold uppercase tracking-tighter">Billed {selectedCycle}</div>
                      )}
                    </div>
                    <button
                      onClick={() => handleDeploy(plan)}
                      className="bg-gradient-to-r from-[#00a3ff] to-[#0080cc] hover:from-[#0080cc] hover:to-[#00a3ff] text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(0,163,255,0.2)] hover:shadow-[0_0_35px_rgba(0,163,255,0.4)] flex items-center gap-2 active:scale-[0.98]"
                    >
                      Deploy Node
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6 italic">
            * All managed plans are fully handled by our team. Open a ticket or DM us to order.
          </p>
        </div>

        {/* Info Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "3.50 GHz Base", desc: "High clock speeds for real-time audio encoding.", icon: Cpu },
            { title: "30+ Sources", desc: "YouTube, Spotify, Soundcloud, and more supported.", icon: Music },
            { title: "50Gbps Network", desc: "Massive network backbone for zero audio buffering.", icon: Shield },
            { title: "Full Management", desc: "Let our experts handle the setup and maintenance.", icon: Sparkles }
          ].map((feature, idx) => (
            <div key={idx} className="group relative p-8 rounded-3xl bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] hover:border-[#00a3ff]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,163,255,0.08)] overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,163,255,0.03),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="p-2 bg-[#00a3ff]/10 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-[#00a3ff]" />
              </div>
              <h4 className="text-lg font-bold mb-2 orbitron-font group-hover:text-[#00a3ff] transition-colors">{feature.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
        
        <LavalinkTest />
      </main>

      <Footer />
    </div>
  )
}
