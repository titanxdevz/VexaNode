"use client"

import { motion } from "framer-motion"
import { Server, Cpu, MemoryStick, HardDrive, Shield, Check, Sparkles, ArrowRight } from "lucide-react"
import { useCurrency } from "../../contexts/CurrencyContext"

const dediPlans = [
  {
    id: "utah-32gb",
    name: "Utah VDS Slice 32GB",
    location: "Utah, USA",
    flag: "🇺🇸",
    cpu: "16 Dedicated Cores",
    cpuDetail: "Intel E5-2680v2",
    ram: "32 GB DDR3",
    storage: "500 GB SSD",
    ips: "2× IPv4 Included",
    ddos: "DDoS Protected",
    root: "Full root KVM access",
    badge: "Popular",
    price: 2000
  },
  {
    id: "utah-64gb",
    name: "Utah VDS Slice 64GB",
    location: "Utah, USA",
    flag: "🇺🇸",
    cpu: "22 Dedicated Cores",
    cpuDetail: "Intel E5-2680v2",
    ram: "64 GB DDR3",
    storage: "700 GB SSD",
    ips: "2× IPv4 Included",
    ddos: "DDoS Protected",
    root: "Full root KVM access",
    badge: "Best Value",
    price: 3700
  },
  {
    id: "utah-128gb",
    name: "Utah VDS Slice 128GB",
    location: "Utah, USA",
    flag: "🇺🇸",
    cpu: "44 Dedicated Cores",
    cpuDetail: "Intel E5-2680v2",
    ram: "128 GB DDR3",
    storage: "1024 GB SSD",
    ips: "2× IPv4 Included",
    ddos: "Neoprotect DDoS Protected",
    root: "Full root KVM access",
    badge: "Enterprise",
    price: 5000
  }
];

export default function VDSPricingSection() {
  const { formatPrice } = useCurrency()

  const handleDeploy = () => {
    window.open("https://discord.gg/vexanode", "_blank")
  }

  return (
    <div className="bg-[#0a0b0f] relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex flex-col justify-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#00a3ff]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#00a3ff]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#00a3ff]/10 text-[#00a3ff] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#00a3ff]/20 mb-6 tracking-widest uppercase">
            <Sparkles className="w-3 h-3" />
            <span>Dedicated VDS Slices</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 orbitron-font leading-tight">
            Utah VDS <br />
            <span className="relative">
              <span className="text-[#00a3ff] text-neon-glow-brand">Hosting Slices</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a3ff]/0 via-[#00a3ff]/50 to-[#00a3ff]/0 rounded-full" />
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-3xl leading-relaxed">
            Deploy massive dedicated resources on our Intel Xeon platform in Salt Lake, Utah. Enjoy unmetered bandwidth, full KVM virtualization, and premium DDoS protection out of the box.
          </p>
        </motion.div>

        {/* Addon Alert Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 max-w-4xl"
        >
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00a3ff] animate-ping" />
              Optional Add-on Available
            </h4>
            <p className="text-xs text-gray-400 mt-1">Need additional dedicated IPs for your Utah cluster? Scale up anytime.</p>
          </div>
          <div className="bg-[#00a3ff]/10 border border-[#00a3ff]/25 px-4 py-2.5 rounded-xl text-right">
            <span className="text-xs text-gray-400 uppercase block tracking-wider font-bold">Extra IPv4</span>
            <span className="text-[#00a3ff] font-extrabold text-sm">+₹170/month per IP</span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dediPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-[#0b0c16]/30 backdrop-blur-xl rounded-[28px] overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 flex flex-col h-full"
            >
              <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-b from-[#00a3ff]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

              <div className="relative z-10 p-6 flex flex-col h-full">
                {plan.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-flex items-center gap-1.5 bg-[#00a3ff]/10 text-[#00a3ff] text-[10px] font-bold px-3 py-1 rounded-full border border-[#00a3ff]/20 tracking-widest uppercase">
                      <Sparkles className="w-2.5 h-2.5" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3.5 mb-6">
                  <div className="text-3xl">{plan.flag}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#00a3ff] transition-colors">{plan.name}</h3>
                    <p className="text-xs text-gray-400 uppercase font-mono tracking-wider">{plan.location}</p>
                  </div>
                </div>

                {/* Hardware Spec Badges */}
                <div className="space-y-2.5 mb-8 flex-1">
                  <div className="flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-gray-400 flex items-center gap-2"><Cpu className="w-4 h-4 text-[#00a3ff]" /> CPU</span>
                    <span className="font-bold text-white text-right">{plan.cpu} ({plan.cpuDetail})</span>
                  </div>
                  <div className="flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-gray-400 flex items-center gap-2"><MemoryStick className="w-4 h-4 text-[#00a3ff]" /> RAM</span>
                    <span className="font-bold text-white">{plan.ram}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-gray-400 flex items-center gap-2"><HardDrive className="w-4 h-4 text-[#00a3ff]" /> Storage</span>
                    <span className="font-bold text-white">{plan.storage}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-gray-400 flex items-center gap-2"><Server className="w-4 h-4 text-[#00a3ff]" /> Network</span>
                    <span className="font-bold text-white">{plan.ips}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <span className="text-gray-400 flex items-center gap-2"><Shield className="w-4 h-4 text-[#00a3ff]" /> Security</span>
                    <span className="font-bold text-white">{plan.ddos}</span>
                  </div>
                </div>

                {/* Footer / Call to action */}
                <div className="border-t border-white/[0.06] pt-6 mt-auto">
                  <div className="mb-6 flex items-end">
                    <span className="text-3xl font-black text-white orbitron-font leading-none">{formatPrice(plan.price)}</span>
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest ml-2 mb-1">/ month</span>
                  </div>
                  <button
                    onClick={handleDeploy}
                    className="group/btn relative w-full py-4 rounded-xl font-bold transition-all duration-500 flex items-center justify-center gap-2 overflow-hidden bg-white/[0.04] hover:bg-[#00a3ff] text-white border border-white/[0.06] hover:border-transparent"
                  >
                    <span className="relative z-10 flex items-center gap-2 font-bold uppercase tracking-wider text-xs">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
