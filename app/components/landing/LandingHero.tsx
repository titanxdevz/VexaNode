"use client";

import { useState, useEffect } from "react";
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

export default function LandingHero() {
  const [cpu, setCpu] = useState(28);
  const [ram, setRam] = useState(42.5);
  const [packets, setPackets] = useState(14028);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(Math.floor(25 + Math.random() * 15));
      setRam(parseFloat((40 + Math.random() * 5).toFixed(1)));
      setPackets(prev => prev + Math.floor(Math.random() * 120));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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

          {/* Right: Premium Cloud Server Performance Dashboard */}
          <div className="relative">
            {/* Live Monitoring Dashboard Wrapper */}
            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 shadow-2xl backdrop-blur-md">
              
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/40 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-zinc-400">
                    node-mumbai-01.vexanode.cloud
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-[10px] font-bold tracking-wider text-emerald-400 uppercase">
                    Live Status
                  </span>
                </div>
              </div>

              {/* Specs & Performance Metrics */}
              <div className="p-6 space-y-6">
                
                {/* Metric 1: CPU Allocation (Ryzen 9 9950X) */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-bold">CPU Usage (Ryzen 9 9950X)</span>
                    </div>
                    <span className="text-emerald-400 font-bold">{cpu}%</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                      animate={{ width: `${cpu}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                    <span>16 Cores / 32 Threads</span>
                    <span>39°C Temp</span>
                  </div>
                </div>

                {/* Metric 2: Memory Allocation */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <Server className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-bold">DDR5 RAM Allocation</span>
                    </div>
                    <span className="text-emerald-400 font-bold">{ram}%</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                      animate={{ width: `${ram}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                    <span>Active: 27.2 GB</span>
                    <span>Total Limit: 64.0 GB</span>
                  </div>
                </div>

                {/* Grid stats for Network and NVMe IO */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* DDoS Status */}
                  <div className="p-3 rounded-xl border border-zinc-900 bg-zinc-900/20 space-y-1">
                    <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">DDoS Protection</div>
                    <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Active Filter
                    </div>
                    <div className="text-[10px] text-zinc-400 font-mono">{packets.toLocaleString()} Pkts/s Blocked</div>
                  </div>

                  {/* NVMe IO status */}
                  <div className="p-3 rounded-xl border border-zinc-900 bg-zinc-900/20 space-y-1">
                    <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">NVMe Read/Write</div>
                    <div className="text-xs font-bold text-zinc-200 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      NVMe Gen 4
                    </div>
                    <div className="text-[10px] text-zinc-400 font-mono">6.4 GB/s Read · 5.2 GB/s Write</div>
                  </div>

                </div>

                {/* Node datacenter locations visual list */}
                <div className="border-t border-zinc-900 pt-4 space-y-2">
                  <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">
                    Active Regional Deployments
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { city: "Mumbai, IN", code: "Ryzen 9", active: true },
                      { city: "Singapore, SG", code: "Ryzen 9", active: true },
                      { city: "Frankfurt, DE", code: "EPYC", active: true },
                      { city: "Sydney, AU", code: "Ryzen 9", active: true },
                      { city: "Miami, US", code: "Ryzen 9", active: true }
                    ].map((loc, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center gap-1.5 bg-zinc-900/40 border border-zinc-800 px-2.5 py-1 rounded-lg text-[10px] font-mono text-zinc-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {loc.city} ({loc.code})
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Floating operational uptime card */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-zinc-800 bg-zinc-950 p-4 sm:block shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <Check className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-black text-white uppercase tracking-wider">All networks stable</div>
                  <div className="text-[10px] text-zinc-500">10 Gbps Port capacity · 99.99% Uptime</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
