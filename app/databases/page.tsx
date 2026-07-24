"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Database, Zap, Shield, ChevronRight, Server, HardDrive, Cpu, CheckCircle2, LayoutGrid, Layers, Sparkles, ArrowRight } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import { useCurrency } from "../contexts/CurrencyContext"

const dbPlans = [
  {
    id: "mongodb",
    name: "MongoDB",
    desc: "Globally available with multi-region support. Scalable, fast, and reliable built for all workloads. Ideal for developers, startups, and enterprises.",
    features: [
      "MongoDB 7 version",
      "Multi-region deployment",
      "High availability & replication",
      "Scales with any workload",
      "Suitable for modern app development"
    ],
    icon: "Database",
    color: "emerald"
  },
  {
    id: "sql",
    name: "SQL Hosting",
    desc: "Globally distributed SQL hosting with fast query performance. Designed to scale with your apps, ensuring reliability for any database size or use case.",
    features: [
      "Supports major SQL engines",
      "Multi-region availability",
      "Optimized query performance",
      "Scalable for all workloads",
      "Reliable for apps & websites"
    ],
    icon: "Layers",
    color: "blue"
  },
  {
    id: "redis",
    name: "Redis Hosting",
    desc: "High-speed Redis hosting with multi-region support. Ideal for caching, real-time systems, and performance-critical applications.",
    features: [
      "Redis key-value store",
      "Ultra-low latency",
      "Multi-region support",
      "Scalable for high throughput",
      "Perfect for real-time apps"
    ],
    icon: "Zap",
    color: "red"
  }
]

export default function DatabasePage() {
  const { formatPrice } = useCurrency()
  const [ram, setRam] = useState(0.5)
  const [ssd, setSsd] = useState(5)

  const calculateExtraPrice = () => {
    const basePrice = 40
    const extraRamPrice = (ram - 0.5) * 15
    const extraSsdPrice = ((ssd - 5) / 2) * 10
    return basePrice + extraRamPrice + extraSsdPrice
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-emerald-500/30 relative overflow-hidden">
      {/* Ambient glow backgrounds */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-500/[0.04] rounded-full blur-[180px] pointer-events-none will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] bg-teal-500/[0.03] rounded-full blur-[150px] pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 left-2/3 w-[500px] h-[500px] bg-emerald-500/[0.02] rounded-full blur-[120px] pointer-events-none will-change-transform" />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <PageMeta title="Managed Databases" />
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-3 py-1.5 rounded-full border border-emerald-500/20 mb-6 tracking-widest uppercase orbitron-font">
              <Sparkles className="w-3 h-3" />
              Managed Data Solutions
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 orbitron-font uppercase tracking-tight"
          >
            Powerful Managed <br />
            <span className="relative">
              <span className="text-emerald-500 text-neon-glow-brand">Databases</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 rounded-full" />
            </span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg quicksand-font">
            High-performance, scalable, and fully managed database hosting. We handle the infrastructure so you can focus on building your app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {dbPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.3 }}
              className="group relative"
            >
              <div className={`absolute -inset-[1px] rounded-[40px] bg-gradient-to-b from-white/0 via-white/0 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm ${
                plan.id === 'sql' ? 'group-hover:from-teal-500/10 group-hover:via-teal-500/5 group-hover:to-transparent' :
                plan.id === 'mongodb' ? 'group-hover:from-emerald-500/10 group-hover:via-emerald-500/5 group-hover:to-transparent' :
                'group-hover:from-rose-500/10 group-hover:via-rose-500/5 group-hover:to-transparent'
              }`} />
              
              <div className={`relative bg-[#0c0e1a]/40 backdrop-blur-xl border border-white/[0.06] rounded-[40px] p-8 transition-all duration-500 overflow-hidden hover:border-white/[0.12]`}>
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                  plan.id === 'sql' ? 'from-teal-500/5 via-transparent to-transparent' :
                  plan.id === 'mongodb' ? 'from-emerald-500/5 via-transparent to-transparent' :
                  'from-rose-500/5 via-transparent to-transparent'
                }`} />
                
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                <div className="relative">
                  {/* Icon with glow */}
                  <div className="relative mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.06] flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative z-10 ${
                      plan.id === 'sql' ? 'group-hover:border-teal-500/30' :
                      plan.id === 'mongodb' ? 'group-hover:border-emerald-500/30' :
                      'group-hover:border-rose-500/30'
                    }`}>
                      {plan.icon === "Database" ? <Database className="w-8 h-8 text-emerald-500" /> : 
                       plan.icon === "Layers" ? <Layers className="w-8 h-8 text-teal-400" /> : 
                       <Zap className="w-8 h-8 text-rose-500" />}
                    </div>
                    <div className={`absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 scale-75 group-hover:scale-110 opacity-0 group-hover:opacity-100 ${
                      plan.id === 'sql' ? 'bg-teal-500/10' :
                      plan.id === 'mongodb' ? 'bg-emerald-500/10' :
                      'bg-rose-500/10'
                    }`} />
                  </div>
                  
                  <h3 className={`text-2xl font-black mb-4 orbitron-font uppercase tracking-tight transition-colors ${
                    plan.id === 'sql' ? 'group-hover:text-teal-400' :
                    plan.id === 'mongodb' ? 'group-hover:text-emerald-400' :
                    'group-hover:text-rose-400'
                  }`}>{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-1 quicksand-font">
                    {plan.desc}
                  </p>

                  <div className="space-y-4 mb-10 border-t border-white/[0.04] pt-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 group/feat">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover/feat:scale-110 transition-transform duration-300">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span className="text-xs text-gray-300 group-hover/feat:text-gray-200 transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-white/[0.04] mt-auto">
                    <div className="flex justify-between items-end mb-6">
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Starting at</div>
                        <div className="text-3xl font-black text-white orbitron-font">{formatPrice(40)}<span className="text-sm font-normal text-gray-500">/mo</span></div>
                      </div>
                    </div>
                    <a 
                      href="https://discord.gg/syHFbR5yBQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold transition-all duration-500 orbitron-font uppercase tracking-wider text-xs overflow-hidden bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.12] text-white"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Add to cart
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-rotate-12 transition-all duration-300" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Pricing Calculator */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#0c0e1a]/40 backdrop-blur-xl border border-white/[0.06] rounded-[40px] p-8 md:p-12 mb-32 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
            <div>
              <h2 className="text-3xl font-black mb-6 orbitron-font uppercase tracking-tight">Scale Your <span className="relative"><span className="text-emerald-500 text-neon-glow-brand">Resources</span><span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 rounded-full" /></span></h2>
              <p className="text-gray-400 mb-10 quicksand-font">Need more power? Instantly scale your database memory and storage as your application grows.</p>
              
               <div className="space-y-10">
                <div>
                  <div className="flex justify-between mb-4">
                    <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">Memory (RAM)</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono">{ram === 0.5 ? "512 MB" : `${ram} GB`}</span>
                  </div>
                  <div className="relative">
                    <input 
                      type="range" min="0.5" max="32.5" step="1" 
                      value={ram} onChange={(e) => setRam(parseFloat(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-emerald-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-emerald-500 [&::-webkit-slider-thumb]:to-teal-400 [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(16,185,129,0.5)] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white/20" 
                    />
                    <div className="absolute top-1/2 left-0 right-0 h-2 rounded-full pointer-events-none overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500/50 to-teal-400/50 rounded-full transition-all duration-300"
                        style={{ width: `${((ram - 0.5) / 32) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-bold">
                    <span>512 MB</span>
                    <span>32.5 GB</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-4">
                    <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">SSD Storage</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono">{ssd} GB</span>
                  </div>
                  <div className="relative">
                    <input 
                      type="range" min="5" max="205" step="2" 
                      value={ssd} onChange={(e) => setSsd(parseInt(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-emerald-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-emerald-500 [&::-webkit-slider-thumb]:to-teal-400 [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(16,185,129,0.5)] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white/20" 
                    />
                    <div className="absolute top-1/2 left-0 right-0 h-2 rounded-full pointer-events-none overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-500/50 to-teal-400/50 rounded-full transition-all duration-300"
                        style={{ width: `${((ssd - 5) / 200) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-bold">
                    <span>5 GB</span>
                    <span>205 GB</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-[#0c0e1a]/40 backdrop-blur-xl border border-white/[0.06] rounded-[32px] p-8 text-center flex flex-col justify-center items-center shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto border border-white/[0.06]">
                  <LayoutGrid className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold mb-2">Estimated Monthly Total</h4>
                <div className="text-5xl font-black text-white mb-4 orbitron-font">
                  {formatPrice(calculateExtraPrice())}
                </div>
                <p className="text-xs text-gray-500 mb-8 quicksand-font">
                  Billed monthly. Cancel anytime. <br /> Includes backup and 24/7 monitoring.
                </p>
                <a 
                  href="https://discord.gg/syHFbR5yBQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white font-bold py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] orbitron-font uppercase tracking-wider text-xs overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Configure My Database
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-rotate-12 transition-all duration-300" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
