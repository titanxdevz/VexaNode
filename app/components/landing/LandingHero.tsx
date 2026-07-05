"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Zap, Cpu, Server, Sparkles } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const heroPills = [
  "24-hour refund policy in USA regions",
  "Rented dedicated hardware",
  "95%–99% UPTIME",
  "5 global locations · 99.95% Lavalink SLA"
];

const consoleLines = [
  { t: "$ vexa deploy --region auto", c: "text-zinc-500" },
  { t: "✔ Provisioning Ryzen 9 compute node", c: "text-emerald-400" },
  { t: "✔ Attaching 10 Gbps anti-DDoS network", c: "text-emerald-400" },
  { t: "✔ Booting container · 0.4s", c: "text-emerald-400" },
  { t: "● Live at node-del-09.vexanode.cloud", c: "text-emerald-300 font-bold" },
];

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28 bg-zinc-950 text-white">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_25%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left: Copy & Pills */}
          <div className="flex flex-col justify-center">
            
            {/* Horizontal rolling pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {heroPills.map((pill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-400"
                >
                  <span className="h-1 w-1 rounded-full bg-emerald-500" />
                  {pill}
                </span>
              ))}
            </div>

            {/* Big Bold Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight leading-[1.1] sm:text-5xl lg:text-[56px] text-zinc-100">
              Discord, Telegram, Lavalink, Game, VPS &amp; Database Hosting
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-400">
              NVMe SSD hosting in India, USA, Singapore, and Germany. Free Discord &amp; Telegram bots 24/7, advanced DDoS protection on all premium tiers.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Link
                href="/discord"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold text-sm px-6 py-3.5 transition-all shadow-sm uppercase tracking-wider"
              >
                Get free Discord hosting
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 text-zinc-300 hover:text-white font-extrabold text-sm px-6 py-3.5 transition-all uppercase tracking-wider"
              >
                View all products
              </Link>
            </div>

            {/* Micro bullet features */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-500">
              {[
                { icon: Zap, label: "Instant deployments" },
                { icon: ShieldCheck, label: "DDoS protection by default" },
                { icon: Cpu, label: "Enterprise NVMe SSD" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5">
                  <Icon className="h-3.5 w-3.5 text-emerald-400" />
                  {label}
                </span>
              ))}
            </div>

          </div>

          {/* Right: Premium styled console panel mockup */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-zinc-800/80 bg-zinc-900/80 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                <span className="ml-3 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                  vexanode — deployment console
                </span>
              </div>
              <div className="space-y-2.5 p-5 font-mono text-xs leading-relaxed">
                {consoleLines.map((line, i) => (
                  <div
                    key={i}
                    className={line.c}
                  >
                    {line.t}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating uptime card */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-zinc-800 bg-zinc-950 p-3.5 sm:block shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <Check className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-black text-white uppercase tracking-wider">All systems operational</div>
                  <div className="text-[10px] text-zinc-500">90-day SLA Uptime · 99.95%</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
