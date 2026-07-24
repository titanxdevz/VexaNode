"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stats = [
  { value: "99.95%", label: "Uptime SLA" },
  { value: "< 15ms", label: "Average Latency" },
  { value: "100%", label: "Enterprise NVMe" },
  { value: "24/7", label: "Instant Support" },
];

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-32 bg-zinc-950 text-white">
      {/* Background radial glows and mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
        
        {/* Subtle pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-semibold text-emerald-400 mb-8 backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Next-Gen Cloud Infrastructure · Powered by AMD Ryzen 9 9950X</span>
        </motion.div>

        {/* Minimal, Punchy Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1] text-white"
        >
          High performance cloud hosting, <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
            redefined.
          </span>
        </motion.h1>

        {/* Crisp Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-6 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400 font-normal"
        >
          Deploy Discord bots, game servers, VPS, and databases on enterprise NVMe hardware. Instant provisioning, DDoS mitigation, and global edge nodes in seconds.
        </motion.p>

        {/* Minimal CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/discord"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm px-7 py-3.5 transition-all shadow-lg shadow-emerald-500/20"
          >
            Deploy Server
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 hover:text-white font-semibold text-sm px-7 py-3.5 transition-all backdrop-blur-md"
          >
            Explore Products
          </Link>
        </motion.div>

        {/* Clean Key Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-16 pt-12 border-t border-zinc-900/80 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

