"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, HardDrive, Clock } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-[#07090e] text-white pt-28 pb-16 lg:pt-40 lg:pb-28">
      {/* Subtle ambient — single soft wash, not heavy */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/3 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_65%)]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.03),transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-1.5 mb-7"
            >
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-semibold text-emerald-300/90 tracking-wide">
                Next-Gen AMD Ryzen 9 &amp; EPYC Nodes
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: EASE }}
              className="text-[2rem] sm:text-[2.75rem] lg:text-[3.4rem] font-extrabold tracking-[-0.025em] leading-[1.08] text-white"
            >
              Cloud &amp; Game Hosting,<br className="hidden sm:inline" />
              <span className="text-emerald-400"> Blazing Fast.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.09, ease: EASE }}
              className="mt-5 max-w-lg text-[15px] leading-[1.7] text-zinc-400"
            >
              Deploy Minecraft servers, Discord bots, Hytale worlds, and Lavalink
              audio nodes on dedicated NVMe hardware — live in under 30 seconds
              with enterprise DDoS shielding.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.13, ease: EASE }}
              className="mt-9 flex flex-col sm:flex-row items-start gap-3"
            >
              {/* Primary — white, high-contrast, unmissable */}
              <Link
                href="#pricing"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 px-7 py-3 text-[13px] font-bold tracking-wide transition-colors duration-150 shadow-[0_0_20px_rgba(255,255,255,0.08)]"
              >
                <span>Try Now</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>

              {/* Secondary — subtle outline */}
              <a
                href="https://discord.gg/dJpMDfgUQq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-zinc-700/80 hover:border-zinc-600 hover:bg-zinc-800/40 px-7 py-3 text-[13px] font-semibold text-zinc-400 hover:text-white transition-all duration-150"
              >
                <FaDiscord className="h-3.5 w-3.5 text-[#5865F2]" />
                <span>Join Discord</span>
              </a>
            </motion.div>

            {/* Trust line — minimal, inline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.22, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-zinc-500"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                99.95% Uptime SLA
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                No setup fees
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                24/7 Support
              </span>
            </motion.div>
          </div>

          {/* ── Right: Stat Cards ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            className="grid grid-cols-2 gap-3"
          >
            {[
              {
                icon: Zap,
                value: "30s",
                label: "Deploy Time",
                desc: "Order to live server",
                accent: "text-emerald-400",
                border: "hover:border-emerald-500/30",
              },
              {
                icon: ShieldCheck,
                value: "3.2 Tbps",
                label: "DDoS Shield",
                desc: "Multi-layer filtering",
                accent: "text-blue-400",
                border: "hover:border-blue-500/30",
              },
              {
                icon: HardDrive,
                value: "7 GB/s",
                label: "NVMe Storage",
                desc: "Gen4 PCIe read/write",
                accent: "text-violet-400",
                border: "hover:border-violet-500/30",
              },
              {
                icon: Clock,
                value: "99.95%",
                label: "Uptime SLA",
                desc: "Guaranteed availability",
                accent: "text-amber-400",
                border: "hover:border-amber-500/30",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-5 sm:p-6 transition-colors duration-200 ${item.border}`}
              >
                <item.icon className={`w-5 h-5 ${item.accent} mb-3 opacity-80`} />
                <div className="text-2xl sm:text-[1.75rem] font-extrabold text-white tracking-tight leading-none">
                  {item.value}
                </div>
                <div className="text-[13px] font-semibold text-zinc-300 mt-1.5">{item.label}</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">{item.desc}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}