"use client";

import { motion } from "framer-motion";
import { Globe2, HardDrive, ShieldCheck, Cpu } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FeatureGrid() {
  return (
    <section className="relative py-20 lg:py-32 vx-bg-alt vx-ink overflow-hidden border-t vx-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d97757]/10 border border-[#d97757]/25 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d97757] mb-4">
            Built For Speed &amp; Stability
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight vx-ink">
            Engineered For Performance.
          </h2>
          <p className="mt-4 text-sm sm:text-base vx-muted">
            No compromises, no overselling. Pure bare-metal compute tailored for demanding workloads.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Card 1 (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease }}
            className="md:col-span-2 relative rounded-3xl border vx-line vx-card p-8 overflow-hidden group shadow-sm hover:shadow-lg hover:border-[#d97757]/40 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2.5 rounded-2xl bg-[#d97757]/10 border border-[#d97757]/25 text-[#d97757]">
                <Cpu className="w-5 h-5" />
              </span>
              <span className="text-xs font-black text-[#d97757] uppercase tracking-wider">High Clock Single-Core</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold vx-ink">AMD Ryzen 9 &amp; EPYC Processors</h3>
            <p className="mt-3 text-sm vx-muted max-w-xl leading-relaxed">
              Eliminate server tick-drop and audio stuttering with high clock speeds.
              Tuned for Minecraft, bots, and heavy real-time data streaming.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["High Clock Speed", "Zen 4 / Zen 5", "DDR5 Memory", "Dedicated Threads"].map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full vx-bg border vx-line text-[11px] font-bold vx-muted2">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease }}
            className="relative rounded-3xl border vx-line vx-card p-8 shadow-sm group hover:shadow-lg hover:border-[#6a9bcc]/50 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2.5 rounded-2xl bg-[#6a9bcc]/10 border border-[#6a9bcc]/30 text-[#6a9bcc]">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <span className="text-xs font-black text-[#6a9bcc] uppercase tracking-wider">DDoS Filtering</span>
            </div>
            <h3 className="text-xl font-extrabold vx-ink">Always-On DDoS Filtering</h3>
            <p className="mt-2.5 text-xs sm:text-sm vx-muted leading-relaxed">
              Multi-layer hardware firewalls scrub malicious volumetric floods without affecting gameplay ping.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15, ease }}
            className="relative rounded-3xl border vx-line vx-card p-8 shadow-sm group hover:shadow-lg hover:border-[#788c5d]/50 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2.5 rounded-2xl bg-[#788c5d]/10 border border-[#788c5d]/30 text-[#788c5d]">
                <HardDrive className="w-5 h-5" />
              </span>
              <span className="text-xs font-black text-[#788c5d] uppercase tracking-wider">PCIe Gen 4/5</span>
            </div>
            <h3 className="text-xl font-extrabold vx-ink">Pure NVMe Storage</h3>
            <p className="mt-2.5 text-xs sm:text-sm vx-muted leading-relaxed">
              High read/write speeds for fast world loading, SQLite/Postgres queries, and backups.
            </p>
          </motion.div>

          {/* Card 4 (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease }}
            className="md:col-span-2 relative rounded-3xl border vx-line vx-card p-8 overflow-hidden group shadow-sm hover:shadow-lg hover:border-[#d97757]/40 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2.5 rounded-2xl bg-[#d97757]/10 border border-[#d97757]/25 text-[#d97757]">
                <Globe2 className="w-5 h-5" />
              </span>
              <span className="text-xs font-black text-[#d97757] uppercase tracking-wider">Global Latency</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold vx-ink">Direct Peering in India &amp; Strategic Regions</h3>
            <p className="mt-3 text-sm vx-muted max-w-xl leading-relaxed">
              Connected directly to major Internet Exchanges with automated BGP failover for low-latency routing across South Asia and worldwide.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
