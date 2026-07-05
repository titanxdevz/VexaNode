"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Server, Cpu, MemoryStick, HardDrive, Shield, Check, Sparkles, ArrowRight, MapPin } from "lucide-react"
import { useCurrency } from "../../contexts/CurrencyContext"

const locations = [
  { id: "utah", name: "Utah, USA", flag: "🇺🇸", cpu: "Intel Xeon E5-2680v2", extraIpCost: 170, desc: "Intel Xeon E5-2680v2 | SSD Storage | Salt Lake City" },
  { id: "miami", name: "Miami, USA", flag: "🇺🇸", cpu: "Intel Xeon Gold", extraIpCost: 180, desc: "Intel Xeon Gold | NVMe SSD Storage | USA - Miami" }
];

const dediPlans = {
  utah: [
    {
      id: "utah-32gb",
      name: "Utah VDS Slice 32GB",
      cpu: "16 Dedicated Cores",
      cpuDetail: "Intel E5-2680v2",
      ram: "32 GB DDR3",
      storage: "500 GB SSD",
      ips: "2× IPv4 Included",
      ddos: "DDoS Protected",
      badge: "Popular",
      price: 2000
    },
    {
      id: "utah-64gb",
      name: "Utah VDS Slice 64GB",
      cpu: "22 Dedicated Cores",
      cpuDetail: "Intel E5-2680v2",
      ram: "64 GB DDR3",
      storage: "700 GB SSD",
      ips: "2× IPv4 Included",
      ddos: "DDoS Protected",
      badge: "Best Value",
      price: 3700
    },
    {
      id: "utah-128gb",
      name: "Utah VDS Slice 128GB",
      cpu: "44 Dedicated Cores",
      cpuDetail: "Intel E5-2680v2",
      ram: "128 GB DDR3",
      storage: "1024 GB SSD",
      ips: "2× IPv4 Included",
      ddos: "Neoprotect DDoS Protected",
      badge: "Enterprise",
      price: 5000
    }
  ],
  miami: [
    {
      id: "miami-starter",
      name: "VEXA - STARTER",
      cpu: "Dedicated vCores",
      cpuDetail: "Intel Xeon Gold",
      ram: "16 GB DDR4 RAM",
      storage: "High-Speed NVMe SSD",
      ips: "1 Gbps Port",
      ddos: "DDoS Protection & Instant Setup",
      badge: "Popular",
      price: 1899
    },
    {
      id: "miami-pro",
      name: "VEXA - PRO",
      cpu: "Dedicated vCores",
      cpuDetail: "Intel Xeon Gold",
      ram: "32 GB DDR4 RAM",
      storage: "High-Speed NVMe SSD",
      ips: "1 Gbps Port",
      ddos: "DDoS Protection & Instant Setup",
      badge: "Best Value",
      price: 3699
    },
    {
      id: "miami-elite",
      name: "VEXA - ELITE",
      cpu: "Dedicated vCores",
      cpuDetail: "Intel Xeon Gold",
      ram: "64 GB DDR4 RAM",
      storage: "High-Speed NVMe SSD",
      ips: "1 Gbps Port",
      ddos: "DDoS Protection & Instant Setup",
      badge: "Enterprise",
      price: 7199
    }
  ]
};

export default function VDSPricingSection() {
  const [selectedLocation, setSelectedLocation] = useState("utah")
  const { formatPrice } = useCurrency()

  const currentLocObj = locations.find(loc => loc.id === selectedLocation)
  const currentPlans = dediPlans[selectedLocation as keyof typeof dediPlans] || []

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
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#10b981]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#10b981]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#10b981]/20 mb-6 tracking-widest uppercase">
            <Sparkles className="w-3 h-3" />
            <span>Dedicated VDS Slices</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 orbitron-font leading-tight">
            Enterprise VDS <br />
            <span className="relative">
              <span className="text-[#10b981] text-neon-glow-brand">Hosting Slices</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#10b981]/0 via-[#10b981]/50 to-[#10b981]/0 rounded-full" />
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-3xl leading-relaxed">
            Deploy massive dedicated resources on our Intel Xeon platform in Salt Lake, Utah and Miami, Florida. Enjoy unmetered bandwidth, full KVM virtualization, and premium DDoS protection out of the box.
          </p>
        </motion.div>

        {/* Location Tabs Selector */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12 border-t border-white/[0.04] pt-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#10b981]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Select Deployment Location</h3>
              <p className="text-[10px] text-gray-500">{currentLocObj?.desc}</p>
            </div>
          </div>

          <div className="flex bg-zinc-950/80 border border-zinc-800 p-1.5 rounded-2xl backdrop-blur-xl w-full sm:w-auto">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
                className={`relative px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  selectedLocation === loc.id ? "bg-[#10b981] text-white shadow-lg shadow-[#10b981]/25" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <span>{loc.flag}</span>
                <span>{loc.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Addon Alert Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          key={selectedLocation}
          className="mb-10 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 max-w-4xl"
        >
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping" />
              Optional Add-on Available
            </h4>
            <p className="text-xs text-gray-400 mt-1">Need additional dedicated IPs for your {currentLocObj?.name} cluster? Scale up anytime.</p>
          </div>
          <div className="bg-[#10b981]/10 border border-[#10b981]/25 px-4 py-2.5 rounded-xl text-right">
            <span className="text-xs text-gray-400 uppercase block tracking-wider font-bold">Extra IPv4</span>
            <span className="text-[#10b981] font-extrabold text-sm">+₹{currentLocObj?.extraIpCost}/month per IP</span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {currentPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group bg-[#0b0c16]/30 backdrop-blur-xl rounded-[28px] overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 flex flex-col h-full"
              >
                <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-b from-[#10b981]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

                <div className="relative z-10 p-6 flex flex-col h-full">
                  {plan.badge && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="inline-flex items-center gap-1.5 bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold px-3 py-1 rounded-full border border-[#10b981]/20 tracking-widest uppercase">
                        <Sparkles className="w-2.5 h-2.5" />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="text-3xl">{currentLocObj?.flag}</div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#10b981] transition-colors">{plan.name}</h3>
                      <p className="text-xs text-gray-400 uppercase font-mono tracking-wider">{currentLocObj?.name}</p>
                    </div>
                  </div>

                  {/* Hardware Spec Badges */}
                  <div className="space-y-2.5 mb-8 flex-1">
                    <div className="flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-gray-400 flex items-center gap-2"><Cpu className="w-4 h-4 text-[#10b981]" /> CPU</span>
                      <span className="font-bold text-white text-right">{plan.cpu} ({plan.cpuDetail})</span>
                    </div>
                    <div className="flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-gray-400 flex items-center gap-2"><MemoryStick className="w-4 h-4 text-[#10b981]" /> RAM</span>
                      <span className="font-bold text-white">{plan.ram}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-gray-400 flex items-center gap-2"><HardDrive className="w-4 h-4 text-[#10b981]" /> Storage</span>
                      <span className="font-bold text-white">{plan.storage}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-gray-400 flex items-center gap-2"><Server className="w-4 h-4 text-[#10b981]" /> Network</span>
                      <span className="font-bold text-white">{plan.ips}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-gray-400 flex items-center gap-2"><Shield className="w-4 h-4 text-[#10b981]" /> Security</span>
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
                      className="group/btn relative w-full py-4 rounded-xl font-bold transition-all duration-500 flex items-center justify-center gap-2 overflow-hidden bg-white/[0.04] hover:bg-[#10b981] text-white border border-white/[0.06] hover:border-transparent"
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
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
