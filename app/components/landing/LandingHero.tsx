"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ShieldCheck, Zap, HardDrive, Clock, Sparkles, Activity, CheckCircle2 } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-[#06070b] text-white pt-32 pb-20 lg:pt-44 lg:pb-28">
      {/* Background Soft Ambient Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft emerald / cyan auroras */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.15),rgba(20,184,166,0.06)_40%,transparent_70%)] blur-[20px]" />
        <div className="absolute top-1/4 right-[10%] w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent_65%)] blur-[30px]" />
        <div className="absolute top-1/3 left-[5%] w-[460px] h-[460px] bg-[radial-gradient(circle,rgba(16,185,129,0.08),transparent_65%)] blur-[30px]" />

        {/* Handcrafted subtle dot matrix grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_60%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Cute handcrafted Pill Badge */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-md px-3.5 py-1.5 shadow-[0_0_20px_rgba(16,185,129,0.15)] mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-bold text-emerald-300 tracking-wide">
            Next-Gen AMD Ryzen 9 &amp; EPYC Infrastructure
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-[11px] font-medium text-zinc-300 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            99.9% SLA
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white"
        >
          Ultra-Fast Cloud &amp; Game <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(52,211,153,0.3)]">
            Hosting Made Effortless.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400 font-normal"
        >
          Deploy Discord bots, Minecraft, Hytale, and Lavalink audio nodes on dedicated high-frequency NVMe hardware. Instant setup, DDoS shielded, and friendly 24/7 expert support.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#pricing"
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-white hover:bg-zinc-100 text-zinc-950 px-8 py-3.5 text-sm font-black transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] active:scale-98"
          >
            <span>Explore Plans</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 text-zinc-950" />
          </Link>

          <a
            href="https://discord.gg/dJpMDfgUQq"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] px-7 py-3.5 text-sm font-bold text-zinc-200 hover:text-white transition-all duration-200 backdrop-blur-md active:scale-98"
          >
            <FaDiscord className="h-4 w-4 text-[#5865F2]" />
            <span>Join Discord</span>
          </a>
        </motion.div>

        {/* Handcrafted Micro Metric Cards */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
          className="mt-14 pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: Zap, label: "Deployment", value: "30 Seconds" },
            { icon: ShieldCheck, label: "DDoS Shield", value: "3.2 Tbps Filter" },
            { icon: HardDrive, label: "Storage", value: "Gen4 NVMe SSD" },
            { icon: Clock, label: "Guaranteed SLA", value: "99.95% Uptime" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-emerald-500/20 hover:bg-emerald-500/[0.02] transition-all duration-200"
            >
              <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                <item.icon className="w-4 h-4" />
                <span className="text-xs font-black text-white">{item.value}</span>
              </div>
              <span className="text-[11px] text-zinc-500 font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}