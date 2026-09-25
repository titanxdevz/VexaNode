"use client";

import { motion } from "framer-motion";
import { Globe2, HardDrive, ShieldCheck, Cpu, Zap, DatabaseBackup, Headset } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const miniFeatures = [
  {
    icon: Zap,
    accent: "#d97757",
    kicker: "Automated Setup",
    title: "Instant Deployment",
    desc: "Your node is provisioned and online in seconds — no manual configuration or waiting on tickets.",
  },
  {
    icon: DatabaseBackup,
    accent: "#6a9bcc",
    kicker: "Data Safety",
    title: "Free Automated Backups",
    desc: "Scheduled off-site snapshots keep your worlds, bots, and databases recoverable at any time.",
  },
  {
    icon: Headset,
    accent: "#788c5d",
    kicker: "Always Reachable",
    title: "Responsive Discord Support",
    desc: "Talk directly to real engineers on Discord — no outsourced scripts, no ticket black holes.",
  },
];

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
        {/* BENTO_PLACEHOLDER */}
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
            <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#d97757]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-2 mb-4">
              <span className="p-2.5 rounded-2xl bg-[#d97757]/10 border border-[#d97757]/25 text-[#d97757] group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-5 h-5" />
              </span>
              <span className="text-xs font-black text-[#d97757] uppercase tracking-wider">High Clock Single-Core</span>
            </div>
            <h3 className="relative text-2xl sm:text-3xl font-extrabold vx-ink">AMD Ryzen 9 &amp; EPYC Processors</h3>
            <p className="relative mt-3 text-sm vx-muted max-w-xl leading-relaxed">
              Eliminate server tick-drop and audio stuttering with high clock speeds.
              Tuned for Minecraft, bots, and heavy real-time data streaming.
            </p>
            <div className="relative mt-6 flex flex-wrap gap-2">
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
              <span className="p-2.5 rounded-2xl bg-[#6a9bcc]/10 border border-[#6a9bcc]/30 text-[#6a9bcc] group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <span className="text-xs font-black text-[#6a9bcc] uppercase tracking-wider">DDoS Filtering</span>
            </div>
            <h3 className="text-xl font-extrabold vx-ink">Always-On DDoS Filtering</h3>
            <p className="mt-2.5 text-xs sm:text-sm vx-muted leading-relaxed">
              Multi-layer hardware firewalls scrub malicious volumetric floods without affecting gameplay ping.
            </p>
          </motion.div>
          {/* BENTO_PART2 */}
          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15, ease }}
            className="relative rounded-3xl border vx-line vx-card p-8 shadow-sm group hover:shadow-lg hover:border-[#788c5d]/50 transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2.5 rounded-2xl bg-[#788c5d]/10 border border-[#788c5d]/30 text-[#788c5d] group-hover:scale-110 transition-transform duration-300">
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
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#d97757]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-2 mb-4">
              <span className="p-2.5 rounded-2xl bg-[#d97757]/10 border border-[#d97757]/25 text-[#d97757] group-hover:scale-110 transition-transform duration-300">
                <Globe2 className="w-5 h-5" />
              </span>
              <span className="text-xs font-black text-[#d97757] uppercase tracking-wider">Global Latency</span>
            </div>
            <h3 className="relative text-2xl sm:text-3xl font-extrabold vx-ink">Direct Peering in India &amp; Strategic Regions</h3>
            <p className="relative mt-3 text-sm vx-muted max-w-xl leading-relaxed">
              Connected directly to major Internet Exchanges with automated BGP failover for low-latency routing across South Asia and worldwide.
            </p>
          </motion.div>

        </div>

        {/* MINI_ROW */}
        {/* Secondary feature row */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          {miniFeatures.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1, ease }}
              style={{ ["--fx" as string]: f.accent }}
              className="group relative rounded-3xl border vx-line vx-card p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[color:var(--fx)]"
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="p-2.5 rounded-2xl border group-hover:scale-110 transition-transform duration-300"
                  style={{ color: f.accent, backgroundColor: `${f.accent}1a`, borderColor: `${f.accent}40` }}
                >
                  <f.icon className="w-5 h-5" />
                </span>
                <span className="text-xs font-black uppercase tracking-wider" style={{ color: f.accent }}>
                  {f.kicker}
                </span>
              </div>
              <h3 className="text-xl font-extrabold vx-ink">{f.title}</h3>
              <p className="mt-2.5 text-xs sm:text-sm vx-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
