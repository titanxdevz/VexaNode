"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Cpu, Zap, Shield, Activity, Sliders, TrendingUp, Globe, Sparkles } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const { t } = useLanguage()

  const features: Feature[] = [
    {
      icon: Cpu,
      title: "High Performance",
      description: "Experience blazing fast speeds powered by premium AMD Ryzen 9 9950X / 7950X3D nodes."
    },
    {
      icon: Zap,
      title: "Ultra-Low Latency",
      description: "Strategically located edge nodes for optimal routing and the lowest possible game ping."
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Enterprise-grade multi-terabit DDoS mitigation algorithms keeping your services online 24/7."
    },
    {
      icon: Activity,
      title: "99.9% Uptime SLA",
      description: "Redundant power supplies, network carriers, and hardware nodes guarantee absolute availability."
    },
    {
      icon: Sliders,
      title: "Complete Control",
      description: "Manage servers, schedule backups, and track metrics easily from our bespoke control panel."
    },
    {
      icon: TrendingUp,
      title: "Instant Scaling",
      description: "Dynamically allocate additional RAM, CPU cores, or NVMe storage capacity in real-time."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Deploy workloads in seconds across premium data centers globally with premium network links."
    }
  ]

  const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-80px" })
    const Icon = feature.icon;
    const gradients = [
      "from-blue-500/20 via-cyan-500/10 to-transparent",
      "from-purple-500/20 via-pink-500/10 to-transparent",
      "from-emerald-500/20 via-teal-500/10 to-transparent",
      "from-amber-500/20 via-orange-500/10 to-transparent",
      "from-rose-500/20 via-red-500/10 to-transparent",
      "from-indigo-500/20 via-blue-500/10 to-transparent",
      "from-cyan-500/20 via-sky-500/10 to-transparent",
    ]
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="group relative"
      >
        {/* Gradient border glow */}
        <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-b ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
        
        <div className="relative bg-[#0b0c16]/30 backdrop-blur-md rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden h-full">
          {/* Hover gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-5">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                <Icon className="w-6 h-6 text-[#00a3ff] group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-5xl font-black text-white/[0.03] orbitron-font select-none group-hover:text-white/[0.06] transition-colors duration-500">
                {(index + 1).toString().padStart(2, '0')}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 orbitron-font uppercase tracking-tight">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-[#030408] relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced ambient background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#00a3ff]/[0.04] rounded-full blur-[160px] pointer-events-none will-change-transform" />
      <div className="absolute top-10 -right-32 w-80 h-80 bg-[#6366f1]/[0.03] rounded-full blur-[140px] pointer-events-none will-change-transform" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00a3ff]/[0.02] rounded-full blur-[120px] pointer-events-none will-change-transform" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#00a3ff]/10 text-[#00a3ff] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#00a3ff]/20 mb-6 tracking-widest uppercase">
              <Sparkles className="w-3 h-3" />
              Why VexaNode
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-4 orbitron-font uppercase tracking-tight">
              Enterprise{" "}
              <span className="relative">
                <span className="text-[#00a3ff] text-neon-glow-brand">Infrastructure</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a3ff]/0 via-[#00a3ff]/50 to-[#00a3ff]/0 rounded-full" />
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto quicksand-font">
              Engineered with premium hardware and low-latency network routes to host your workloads with absolute reliability.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
