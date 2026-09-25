"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import IntegrationHub from "./IntegrationHub";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden vx-bg vx-ink pt-28 pb-16 lg:pt-40 lg:pb-28">
      {/* Subtle ambient — single soft wash, not heavy */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/3 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(217,119,87,0.10),transparent_65%)]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(176,174,165,0.06),transparent_65%)]" />
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
              className="inline-flex items-center gap-2 rounded-full border border-[#d97757]/30 bg-[#d97757]/10 px-3.5 py-1.5 mb-7"
            >
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d97757] opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d97757]" />
              </span>
              <span className="text-[11px] font-semibold text-[#d97757] tracking-wide">
                Next-Gen AMD Ryzen 9 &amp; EPYC Nodes
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: EASE }}
              className="text-[2rem] sm:text-[2.75rem] lg:text-[3.4rem] font-extrabold tracking-[-0.025em] leading-[1.08] vx-ink"
            >
              Cloud &amp; Game Hosting,<br className="hidden sm:inline" />
              <span className="text-[#d97757]"> Blazing Fast.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.09, ease: EASE }}
              className="mt-5 max-w-lg text-[15px] leading-[1.7] vx-muted"
            >
              Deploy Minecraft servers, Discord bots, Hytale worlds, and Lavalink
              audio nodes on dedicated NVMe hardware with fast automated
              deployment and DDoS protection.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.13, ease: EASE }}
              className="mt-9 flex flex-col sm:flex-row items-start gap-3"
            >
              {/* Primary — inverts with theme (ink on ivory / ivory on ink) */}
              <Link
                href="#pricing"
                className="vx-solid group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl px-7 py-3 text-[13px] font-bold tracking-wide transition-colors duration-150"
              >
                <span>Try Now</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>

              {/* Secondary — subtle outline */}
              <a
                href="https://discord.gg/dJpMDfgUQq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border vx-line vx-muted vx-hover-ink hover:border-[#d97757]/40 px-7 py-3 text-[13px] font-semibold transition-all duration-150"
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
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] vx-faint"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#d97757]" />
                Uptime SLA
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#d97757]" />
                No setup fees
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#d97757]" />
                Discord support
              </span>
            </motion.div>
          </div>

          {/* ── Right: Integration Hub ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="relative"
          >
            <IntegrationHub />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
