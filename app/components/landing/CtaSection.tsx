"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CtaSection() {
  return (
    <section className="relative px-4 sm:px-6 py-20 lg:py-28 overflow-hidden bg-[#06070a]">
      {/* Soft Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[800px] rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] px-6 py-14 sm:px-12 sm:py-16 text-center backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {/* Accent Glow Line */}
        <div className="absolute top-0 inset-x-12 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent" />

        {/* Cute Pill Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Launch Your Server in Under 30 Seconds</span>
        </div>

        <h2 className="mx-auto max-w-2xl text-3xl sm:text-5xl font-black tracking-tight text-white leading-[1.1]">
          Ready to experience true high-performance hosting?
        </h2>
        
        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-zinc-400">
          Join thousands of bot developers, gamers, and server owners running on dedicated AMD hardware shielded by enterprise DDoS mitigation.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="#pricing"
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-white hover:bg-zinc-100 text-zinc-950 px-8 py-3.5 text-xs font-black transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.45)]"
          >
            <span>Get Started Now</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 text-zinc-950" />
          </Link>

          <a
            href="https://discord.gg/dJpMDfgUQq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] px-7 py-3.5 text-xs font-bold text-zinc-200 hover:text-white transition-all duration-200"
          >
            <FaDiscord className="h-4 w-4 text-[#5865F2]" />
            <span>Join Discord</span>
          </a>
        </div>

        {/* Feature Checkpoints */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-400 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Instant Activation
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            No Setup Fees
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            24/7 Human Support
          </span>
        </div>

      </motion.div>
    </section>
  );
}

