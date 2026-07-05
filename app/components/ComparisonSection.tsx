'use client'

import { motion } from 'framer-motion'
import { Check, X, Shield, Zap, Clock, Cpu, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react'

const features = [
  {
    name: "Enterprise Hardware",
    vexa: "Latest Ryzen/Intel CPUs",
    others: "Aging Xeon E5 Series",
    icon: Cpu
  },
  {
    name: "Storage Technology",
    vexa: "NVMe Gen4 SSDs",
    others: "SATA or Older SSDs",
    icon: Zap
  },
  {
    name: "DDoS Mitigation",
    vexa: "Advanced Path/Cosmic",
    others: "Basic Null-Route Only",
    icon: Shield
  },
  {
    name: "Support Response",
    vexa: "Under 15 Minutes",
    others: "Up to 24-48 Hours",
    icon: Clock
  },
  {
    name: "Uptime Guarantee",
    vexa: "99.9% Service Level",
    others: "Best Effort Only",
    icon: HeartHandshake
  }
]

export default function ComparisonSection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00a3ff]/[0.03] rounded-full blur-[160px] pointer-events-none will-change-transform" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 text-emerald-400 text-[10px] font-bold px-3 py-1.5 rounded-full border border-emerald-500/20 mb-6 tracking-widest uppercase">
              <Sparkles className="w-3 h-3" />
              The Vexa Advantage
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black mb-4 orbitron-font uppercase tracking-tight"
          >
            Why Choose{" "}
            <span className="relative">
              <span className="text-[#00a3ff] text-neon-glow-brand">VexaNode?</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a3ff]/0 via-[#00a3ff]/50 to-[#00a3ff]/0 rounded-full" />
            </span>
          </motion.h2>
        </div>

        <div className="relative bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06] rounded-[2rem] overflow-hidden shadow-2xl">
          {/* Inner grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* Table Header */}
          <div className="relative grid grid-cols-3 bg-white/[0.02] border-b border-white/[0.06] py-6 px-6 lg:px-10">
            <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px] self-center">Feature</div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00a3ff]/20 to-[#6366f1]/20 text-transparent bg-clip-text bg-gradient-to-r from-[#00a3ff] to-[#6366f1] font-black tracking-widest uppercase text-xs">
                <Check className="w-3.5 h-3.5 text-[#00a3ff]" />
                VexaNode
              </div>
            </div>
            <div className="text-center">
              <span className="text-gray-500 font-bold tracking-widest uppercase text-[10px]">Standard Hosts</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="relative divide-y divide-white/[0.04]">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  {/* Hover highlight */}
                  <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative grid grid-cols-3 py-5 px-6 lg:px-10 gap-4 items-center">
                    {/* Feature Name */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:border-[#00a3ff]/20 group-hover:bg-[#00a3ff]/5 transition-all duration-300">
                        <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#00a3ff] transition-colors duration-300" />
                      </div>
                      <span className="font-bold text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{feature.name}</span>
                    </div>

                    {/* Vexa Value */}
                    <div className="flex justify-center">
                      <div className="flex items-center gap-2 bg-gradient-to-r from-[#00a3ff]/10 to-[#6366f1]/10 text-[#00a3ff] px-3.5 py-2 rounded-xl border border-[#00a3ff]/20 font-semibold text-xs group-hover:from-[#00a3ff]/20 group-hover:to-[#6366f1]/20 transition-all duration-300">
                        <Check className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">{feature.vexa}</span>
                        <span className="sm:hidden">{feature.vexa.split(' ').slice(0, 2).join(' ')}</span>
                      </div>
                    </div>

                    {/* Others Value */}
                    <div className="flex justify-center">
                      <div className="flex items-center gap-2 bg-white/[0.03] text-gray-500 px-3.5 py-2 rounded-xl border border-white/[0.05] font-medium text-xs">
                        <X className="w-3.5 h-3.5 opacity-50" />
                        <span className="hidden sm:inline">{feature.others}</span>
                        <span className="sm:hidden">{feature.others.split(' ').slice(0, 2).join(' ')}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
