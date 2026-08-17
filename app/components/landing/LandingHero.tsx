"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Cpu } from "lucide-react";

export default function LandingHero() {

  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28 bg-zinc-950 text-white min-h-screen flex items-center">
      {/* Background ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: ["-5%", "5%", "-5%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[15%] top-0 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[130px] opacity-75" 
        />
        <motion.div 
          animate={{
            x: ["10%", "-10%", "10%"],
            y: ["5%", "-5%", "5%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[15%] bottom-0 h-[600px] w-[600px] rounded-full bg-teal-500/5 blur-[150px] opacity-50" 
        />
        
        {/* Futuristic tech grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-80" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="flex justify-center">
          
          {/* Left: Copy & Pills */}
          <div className="flex flex-col justify-center">
            
            {/* Tech Badges / Pills */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-400 shadow-sm backdrop-blur-md hover:scale-[1.03] transition-transform duration-200 cursor-default"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                99.99% Uptime SLA Guaranteed
              </motion.span>
            </div>

            {/* Big Bold Heading using orbitron-font */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-black tracking-tight leading-[1.12] sm:text-5xl lg:text-[56px] text-zinc-100 orbitron-font uppercase"
            >
              Ultimate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
                Game &amp; VPS Hosting
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-400"
            >
              Deploy Games, VPS, Bots, and Databases instantly. 99.99% uptime, active DDoS protection, and global low-latency locations.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/discord"
                className="relative group overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-extrabold text-sm px-7 py-4 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(16,185,129,0.3)] hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider font-mono text-xs">
                  Get free Discord hosting
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-zinc-200/30 to-transparent transition-transform duration-1000 ease-out" />
              </Link>
              <Link
                href="#pricing"
                className="relative group overflow-hidden inline-flex items-center justify-center rounded-xl border border-zinc-800 hover:border-emerald-500/50 bg-zinc-900/40 hover:bg-emerald-500/5 text-zinc-300 hover:text-white font-extrabold text-sm px-7 py-4 transition-all duration-300 uppercase tracking-wider backdrop-blur-md font-mono text-xs"
              >
                View all products
              </Link>
            </motion.div>

            {/* Micro bullet features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-zinc-400"
            >
              {[
                { icon: Zap, label: "Instant deployments", desc: "Ready in 5 seconds" },
                { icon: ShieldCheck, label: "DDoS protection by default", desc: "Anycast filter network" },
                { icon: Cpu, label: "Enterprise NVMe SSD", desc: "PCIe Gen 4/5 throughput" },
              ].map(({ icon: Icon, label, desc }) => (
                <span key={label} className="inline-flex items-center gap-2.5 bg-zinc-900/30 border border-zinc-800/40 rounded-xl px-3.5 py-2 backdrop-blur-sm">
                  <Icon className="h-4 w-4 text-emerald-400" />
                  <span className="flex flex-col">
                    <span className="font-bold text-zinc-200 text-[11px]">{label}</span>
                    <span className="text-[9px] text-zinc-500">{desc}</span>
                  </span>
                </span>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
