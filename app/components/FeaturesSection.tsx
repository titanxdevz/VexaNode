"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Cpu, Zap, Shield, Activity, Sliders, TrendingUp, Globe, Sparkles } from "lucide-react"

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function FeaturesSection() {

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
      description: "Enterprise-grade DDoS mitigation algorithms keeping your services online continuously."
    },
    {
      icon: Activity,
      title: "High Uptime SLA",
      description: "Redundant power supplies, network carriers, and hardware nodes support dependable availability."
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
        
        <div className="relative vx-card backdrop-blur-md rounded-2xl p-6 border vx-line hover:border-white/[0.12] transition-all duration-500 overflow-hidden h-full">
          {/* Hover gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

          {/* Content */}
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-5">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border vx-line flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                <Icon className="w-6 h-6 text-[#d97757] transition-colors duration-300" />
              </div>
              <span className="text-5xl font-black vx-faint orbitron-font select-none opacity-20 transition-colors duration-500">
                {(index + 1).toString().padStart(2, '0')}
              </span>
            </div>
            <h3 className="text-xl font-bold vx-ink mb-2 orbitron-font uppercase tracking-tight">{feature.title}</h3>
            <p className="vx-muted text-sm leading-relaxed transition-colors duration-300">{feature.description}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="vx-bg relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#d97757]/10 vx-accent-text text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#d97757]/20 mb-6 tracking-widest uppercase">
              <Sparkles className="w-3 h-3" />
              Why VexaNode
            </div>
            <h2 className="text-4xl sm:text-6xl font-black vx-ink mb-4 orbitron-font uppercase tracking-tight">
              Enterprise{" "}
              <span className="relative">
                <span className="text-[#d97757] text-neon-glow-brand">Infrastructure</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#d97757]/0 via-[#d97757]/50 to-[#d97757]/0 rounded-full" />
              </span>
            </h2>
            <p className="vx-muted text-lg max-w-2xl mx-auto quicksand-font">
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
