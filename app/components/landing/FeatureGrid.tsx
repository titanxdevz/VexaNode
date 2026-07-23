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
} from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const features = [
  {
    icon: Cpu,
    title: "AMD Ryzen 9 & EPYC",
    desc: "Unmatched single-core compute performance powered by Ryzen 9 9900X/9950X and AMD EPYC processors.",
  },
  {
    icon: ShieldCheck,
    title: "DDoS Mitigation",
    desc: "Advanced multi-terabit DDoS mitigation filters malicious attacks at the edge, maintaining low latencies.",
  },
  {
    icon: Rocket,
    title: "Instant Auto-Deploy",
    desc: "Our automated deployment pipelines provision your container/VPS in seconds, ready to scale.",
  },
  {
    icon: HardDrive,
    title: "Enterprise NVMe Storage",
    desc: "High IOPS PCIe Gen 4/5 NVMe SSDs ensure zero I/O wait times and lightning-fast database queries.",
  },
  {
    icon: Globe2,
    title: "Strategic Edge Regions",
    desc: "Nodes positioned globally in India, USA, Singapore, and Germany to ensure sub-20ms average ping.",
  },
  {
    icon: Headset,
    title: "24/7 Expert Support",
    desc: "Direct support from hosting engineers on our Discord server and ticketing dashboard around the clock.",
  },
  {
    icon: Zap,
    title: "Dedicated Hardware",
    desc: "No nested virtualization or resource overselling. Guaranteed RAM and compute allocations.",
  },
  {
    icon: Gauge,
    title: "99.95% Network SLA",
    desc: "Redundant upstream tier-1 providers ensure high network availability and maximum uptime.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative py-20 lg:py-28 bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 mb-4">
            Why VexaNode
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            High performance infrastructure
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            A reliable cloud hosting platform engineered with top-tier bare-metal hardware and low-latency networks.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05, ease }}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/20 p-5 transition-all duration-200 hover:border-emerald-500/40 hover:bg-zinc-900/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 transition-colors duration-200 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5">
                <f.icon className="h-4.5 w-4.5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
