"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, ShieldCheck, Zap, Cpu, Server, HardDrive, 
  Radio, Sparkles, Activity, CheckCircle2, ChevronRight, Play 
} from "lucide-react";
import { CustomIcons } from "../CustomIcons";
import { useState } from "react";

const quickProducts = [
  {
    id: "bot",
    name: "Discord Bot",
    badge: "100% Free / ₹24",
    specs: "50% CPU • 512MB-8GB RAM",
    href: "/free-bot-hosting",
    icon: CustomIcons.Discord
  },
  {
    id: "lavalink",
    name: "Lavalink Node",
    badge: "from ₹240/mo",
    specs: "v4 Engine • 100+ Streams",
    href: "/lavalink",
    icon: Zap
  },
  {
    id: "minecraft",
    name: "Minecraft Hosting",
    badge: "from ₹199/mo",
    specs: "Ryzen 9 9950X • Unmetered",
    href: "/games?game=minecraft",
    icon: CustomIcons.Minecraft
  },
  {
    id: "vps",
    name: "Cloud VPS",
    badge: "from ₹349/mo",
    specs: "Dedicated NVMe • 1Gbps Uplink",
    href: "/vps",
    icon: Server
  }
];

export default function LandingHero() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#07090e] text-white min-h-[92vh] flex items-center">
      {/* GPU-optimized ambient radial gradients (Zero scroll jank) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.09),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none" />
        
        {/* Subtle geometric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-80" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, and CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Live Status Badge */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#10b981]/25 bg-[#10b981]/10 px-3.5 py-1.5 text-[11px] font-bold text-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
                </span>
                <span>Next-Gen High-Frequency Infrastructure</span>
              </div>
              
              <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                99.99% Uptime SLA
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white orbitron-font uppercase mb-5">
              High-Frequency <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#059669]">
                Cloud &amp; Game
              </span>{" "}
              Hosting
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              Deploy ultra-low latency Minecraft servers, Discord bot containers, Cloud VPS, and Lavalink audio nodes powered by AMD Ryzen 9 9950X processors and 100Gbps+ DDoS mitigation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <Link
                href="/free-bot-hosting"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl bg-[#10b981] hover:bg-[#059669] text-black font-extrabold text-xs sm:text-sm px-6 py-4 transition-all duration-200 shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] active:scale-[0.98] cursor-pointer orbitron-font uppercase tracking-wider"
              >
                <span>Claim Free Bot Host</span>
                <ChevronRight className="w-4 h-4 stroke-[3] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/games"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] hover:border-[#10b981]/40 bg-[#0b0e14]/80 hover:bg-[#0f1420] text-gray-200 hover:text-white font-bold text-xs sm:text-sm px-6 py-4 transition-all duration-200 active:scale-[0.98] cursor-pointer orbitron-font uppercase tracking-wider"
              >
                <span>Explore All Servers</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: Zap, label: "Instant Auto-Deploy", sub: "Online in <30 seconds" },
                { icon: ShieldCheck, label: "100Gbps DDoS Shield", sub: "Path.net + Voxility" },
                { icon: Cpu, label: "AMD Ryzen 9 9950X", sub: "5.7GHz Single Core" },
              ].map(({ icon: Icon, label, sub }, idx) => (
                <div 
                  key={idx} 
                  className="p-3 rounded-xl bg-[#0b0e14]/60 border border-white/[0.06] hover:border-[#10b981]/20 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-[#10b981]" />
                    <span className="text-xs font-bold text-white leading-none">{label}</span>
                  </div>
                  <span className="text-[10px] text-gray-500">{sub}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Live Interactive Node Telemetry Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#090c13] border border-white/[0.08] p-5 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#10b981] animate-pulse" />
                  <div>
                    <h3 className="text-xs font-bold text-white orbitron-font uppercase tracking-wide">
                      Node Telemetry
                    </h3>
                    <span className="text-[10px] text-gray-400 font-mono">cluster-in-mum01</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-[10px] font-bold font-mono">
                  <Activity className="w-3 h-3" />
                  <span>3.8ms Latency</span>
                </div>
              </div>

              {/* Hardware Metrics Display */}
              <div className="space-y-3.5 mb-6">
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-gray-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-[#10b981]" />
                      CPU Processor
                    </span>
                    <span className="text-white font-mono font-semibold text-[11px]">AMD Ryzen 9 9950X @ 5.7GHz</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#10b981] to-[#34d399] w-[18%] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-gray-400 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#10b981]" />
                      System Memory
                    </span>
                    <span className="text-white font-mono font-semibold text-[11px]">DDR5 6000MHz ECC</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#10b981] to-[#34d399] w-[24%] rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-gray-400 flex items-center gap-1.5">
                      <HardDrive className="w-3.5 h-3.5 text-[#10b981]" />
                      NVMe Storage IOPS
                    </span>
                    <span className="text-white font-mono font-semibold text-[11px]">Gen5 Read 14,000 MB/s</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#10b981] to-[#34d399] w-[12%] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Quick Launch Services */}
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-2.5">
                  Instant Service Launch
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {quickProducts.map((prod, idx) => {
                    const Icon = prod.icon
                    return (
                      <Link
                        key={prod.id}
                        href={prod.href}
                        className="p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-[#10b981]/30 transition-all flex flex-col justify-between group cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <Icon className="w-4 h-4 text-[#10b981] group-hover:scale-110 transition-transform" />
                          <span className="text-[9px] font-bold text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded">
                            {prod.badge}
                          </span>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-[#10b981] transition-colors flex items-center justify-between">
                            <span>{prod.name}</span>
                            <ChevronRight className="w-3 h-3 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                          </div>
                          <span className="text-[9px] text-gray-500 block truncate">{prod.specs}</span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
