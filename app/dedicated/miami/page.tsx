"use client"

import { motion } from "framer-motion"
import { Server, Cpu, MemoryStick, HardDrive, Shield, MapPin, ArrowRight } from "lucide-react"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { PageMeta } from "../../components/PageMeta"
import { ProductSchema } from "../../components/SchemaOrg"
import { useCurrency } from "../../contexts/CurrencyContext"
import Link from "next/link"

const miamiDediPlans = [
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

export default function MiamiDedicatedPage() {
  const { formatPrice } = useCurrency()

  const handleDeploy = () => {
    window.open("https://discord.gg/syHFbR5yBQ", "_blank")
  }

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white selection:bg-emerald-500/30 relative overflow-hidden">
      <PageMeta title="Miami, USA Dedicated Bare-Metal Servers" description="Deploy Intel Xeon Gold high speed bare-metal VEXA dedicated servers in Miami, Florida." />
      <ProductSchema
        name="Miami, USA Dedicated Bare-Metal Servers"
        description="Intel Xeon Gold high speed bare-metal VEXA dedicated servers in Miami Florida."
        lowPrice={1899}
        highPrice={7199}
        url="https://vexanode.cloud/dedicated/miami"
        ratingValue={4.9}
        reviewCount={52}
        offerCount={3}
      />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-3 py-1.5 rounded-full border border-emerald-500/20 mb-4 tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5" />
            🇺🇸 Miami, Florida Region
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 orbitron-font leading-tight">
            Miami Dedicated <span className="text-emerald-400">VEXA Slices</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            High performance Intel Xeon Gold bare-metal slices with ultra-fast NVMe SSD storage and 1 Gbps unmetered network ports in Miami, Florida.
          </p>
        </motion.div>

        {/* Quick Region Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 text-xs border-b border-zinc-800/80">
          <span className="text-gray-500 font-bold uppercase text-[10px] tracking-wider shrink-0 mr-2">Other Region:</span>
          <Link href="/dedicated/utah" className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors shrink-0">🇺🇸 Utah VDS Slices</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {miamiDediPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-[#0b0c16]/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-all duration-500 flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    🇺🇸 Miami VDS
                  </span>
                  {plan.badge && (
                    <span className="text-[10px] font-black px-2 py-0.5 rounded bg-emerald-500 text-black uppercase">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors">
                  {plan.name}
                </h3>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between items-center text-xs p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <span className="text-gray-400 flex items-center gap-2"><Cpu className="w-4 h-4 text-emerald-400" /> CPU</span>
                    <span className="font-bold text-white text-right">{plan.cpuDetail}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <span className="text-gray-400 flex items-center gap-2"><MemoryStick className="w-4 h-4 text-emerald-400" /> RAM</span>
                    <span className="font-bold text-white">{plan.ram}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <span className="text-gray-400 flex items-center gap-2"><HardDrive className="w-4 h-4 text-emerald-400" /> Storage</span>
                    <span className="font-bold text-white">{plan.storage}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <span className="text-gray-400 flex items-center gap-2"><Server className="w-4 h-4 text-emerald-400" /> Network</span>
                    <span className="font-bold text-white">{plan.ips}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <span className="text-gray-400 flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-400" /> Protection</span>
                    <span className="font-bold text-white">{plan.ddos}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/80">
                <div className="mb-4 flex items-end">
                  <span className="text-3xl font-black text-white orbitron-font">{formatPrice(plan.price)}</span>
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest ml-2 mb-1">/ month</span>
                </div>
                <button
                  onClick={handleDeploy}
                  className="w-full py-3.5 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-400 text-black transition-all duration-200 text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  Deploy Miami Dedicated
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
