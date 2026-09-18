"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  ShieldCheck,
  Rocket,
  Globe2,
  HardDrive,
  Headset,
  Cpu,
  Zap,
  Sparkles,
  Lock,
  Layers,
  Activity
} from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FeatureGrid() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#06070a] text-white overflow-hidden border-t border-white/[0.04]">
      {/* Soft Ambient Background */}
      <div className="pointer-events-none absolute right-10 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-[160px]" />
      <div className="pointer-events-none absolute left-10 bottom-10 -z-10 h-[450px] w-[450px] rounded-full bg-emerald-500/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 mb-4">
            Built For Speed &amp; Stability
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Engineered For Performance.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            No compromises, no overselling. Pure bare-metal compute tailored for demanding workloads.
          </p>
        </motion.div>

        {/* Handcrafted Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Bento Card 1 (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease }}
            className="md:col-span-2 relative rounded-3xl border border-white/[0.08] bg-zinc-900/60 p-8 overflow-hidden group hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] -z-10 group-hover:bg-emerald-500/15 transition-all duration-500" />
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                <Cpu className="w-5 h-5" />
              </span>
              <span className="text-xs font-black text-emerald-400 uppercase tracking-wider">High Clock Single-Core</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">AMD Ryzen 9 &amp; EPYC Processors</h3>
            <p className="mt-3 text-sm text-zinc-400 max-w-xl leading-relaxed">
              Eliminate server tick-drop and audio stuttering with top-tier clock speeds up to 5.7 GHz. Perfectly tuned for Minecraft, bots, and heavy real-time data streaming.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["5.7 GHz Boost", "Zen 4/Zen 5", "DDR5 High Speed", "Dedicated Threads"].map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] font-bold text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease }}
            className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl group hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2.5 rounded-2xl bg-blue-500/10 border border-blue-500/25 text-blue-400">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <span className="text-xs font-black text-blue-400 uppercase tracking-wider">3.2 Tbps Shield</span>
            </div>
            <h3 className="text-xl font-black text-white">Always-On DDoS Filtering</h3>
            <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Multi-layer hardware firewalls scrub malicious volumetric floods instantly without affecting gameplay ping.
            </p>
          </motion.div>

          {/* Bento Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15, ease }}
            className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl group hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/25 text-purple-400">
                <HardDrive className="w-5 h-5" />
              </span>
              <span className="text-xs font-black text-purple-400 uppercase tracking-wider">PCIe Gen 4/5</span>
            </div>
            <h3 className="text-xl font-black text-white">Pure NVMe Storage</h3>
            <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Up to 7,000 MB/s read/write speeds for instant world loading, SQLite/Postgres queries, and backups.
            </p>
          </motion.div>

          {/* Bento Card 4 (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease }}
            className="md:col-span-2 relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-xl overflow-hidden group hover:border-teal-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2.5 rounded-2xl bg-teal-500/10 border border-teal-500/25 text-teal-400">
                <Globe2 className="w-5 h-5" />
              </span>
              <span className="text-xs font-black text-teal-400 uppercase tracking-wider">Global Latency</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Direct Peering in India &amp; Strategic Regions</h3>
            <p className="mt-3 text-sm text-zinc-400 max-w-xl leading-relaxed">
              Connected directly to major Internet Exchanges with automated BGP failover to guarantee sub-20ms latency across South Asia and worldwide routes.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

