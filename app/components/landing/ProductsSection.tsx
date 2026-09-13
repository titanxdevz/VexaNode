"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Bot, Radio, Gamepad2, Sparkles, Server, Zap, Shield } from "lucide-react";
import { useCurrency } from "../../contexts/CurrencyContext";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ProductsSection() {
  const { formatPrice } = useCurrency();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly" | "annually">("monthly");

  const getMultiplier = () => {
    if (billingCycle === "quarterly") return 3 * 0.95; // 5% discount
    if (billingCycle === "annually") return 12 * 0.85; // 15% discount
    return 1;
  };

  const getCycleSuffix = () => {
    if (billingCycle === "quarterly") return "/3 mos";
    if (billingCycle === "annually") return "/year";
    return "/mo";
  };

  const products = [
    {
      icon: null,
      image: "/icons/discord2.avif",
      name: "Discord Bot Hosting",
      tagline: "Always-on bot nodes",
      href: "/discord",
      basePrice: 35,
      accentColor: "from-blue-500/20 to-indigo-500/10",
      borderColor: "group-hover:border-blue-500/40",
      badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",
      features: [
        "Node.js, Python, Java & Go",
        "DDR4/DDR5 Fast RAM",
        "Gen4 NVMe High-IOPS SSD",
        "Free Automatic Backups",
        "0% Sleep Mode / 24/7 Uptime"
      ],
      popular: true,
      badge: "⭐ MOST POPULAR",
      cta: "Deploy Bot"
    },
    {
      icon: null,
      image: "/minecraft_block.jpg",
      name: "Minecraft Hosting",
      tagline: "High-tickrate game nodes",
      href: "/games?game=minecraft",
      basePrice: 99,
      accentColor: "from-emerald-500/20 to-teal-500/10",
      borderColor: "group-hover:border-emerald-500/40",
      badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      features: [
        "AMD Ryzen 9 & EPYC Processors",
        "1-Click Modpacks & Plugins",
        "Unmetered PCIe NVMe Storage",
        "Sub-20ms Low Ping Routes",
        "Real-Time Console & Backups"
      ],
      popular: false,
      badge: "EPYC POWERED",
      cta: "Deploy Minecraft"
    },
    {
      icon: null,
      image: "/icons/Hytale/hytale-h1.avif",
      name: "Hytale Server Hosting",
      tagline: "Next-gen adventure hosting",
      href: "/hytale",
      basePrice: 299,
      accentColor: "from-amber-500/20 to-orange-500/10",
      borderColor: "group-hover:border-amber-500/40",
      badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      features: [
        "4 GB to 10 GB RAM Plans",
        "High Single-Core Frequency",
        "16 GB to 40 GB NVMe Storage",
        "Multi-Player Optimized SLA",
        "India & Edge Locations"
      ],
      popular: false,
      badge: "🔥 NEW RELEASE",
      cta: "Deploy Hytale"
    },
    {
      icon: Radio,
      image: null,
      name: "Lavalink Audio Nodes",
      tagline: "Dedicated JVM music nodes",
      href: "/lavalink",
      basePrice: 240,
      accentColor: "from-purple-500/20 to-pink-500/10",
      borderColor: "group-hover:border-purple-500/40",
      badgeColor: "bg-purple-500/15 text-purple-400 border-purple-500/30",
      features: [
        "Dedicated JVM Memory Slot",
        "YouTube, Spotify & Soundcloud",
        "100+ Concurrent Streams",
        "India & USA Low-Jitter Nodes",
        "99.95% Audio SLA Guarantee"
      ],
      popular: false,
      badge: "JVM TUNED",
      cta: "Deploy Lavalink"
    }
  ];

  return (
    <section id="pricing" className="relative scroll-mt-28 py-20 lg:py-28 bg-[#07080d] text-white overflow-hidden border-t border-white/[0.04]">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 mb-4">
            Transparent Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Choose Your Superpower.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Instant automatic setup, zero hidden costs, and silky smooth scalability.
          </p>

          {/* Cute Billing Cycle Selector */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-zinc-950 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("quarterly")}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                billingCycle === "quarterly"
                  ? "bg-white text-zinc-950 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>Quarterly</span>
              <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-600 text-[9px] font-black">
                -5%
              </span>
            </button>
            <button
              onClick={() => setBillingCycle("annually")}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                billingCycle === "annually"
                  ? "bg-white text-zinc-950 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>Annually</span>
              <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-600 text-[9px] font-black">
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => {
            const calculatedPrice = Math.round(p.basePrice * getMultiplier());
            const IconComp = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease }}
                className={`group relative flex flex-col rounded-3xl border border-white/[0.08] p-6 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl ${p.borderColor} ${
                  p.popular ? "border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.1)]" : ""
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-200 p-1.5">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={36}
                        height={36}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    ) : IconComp ? (
                      <IconComp className="w-5 h-5 text-zinc-200 group-hover:text-white transition-colors" />
                    ) : null}
                  </div>
                  {p.badge && (
                    <span className={`px-2.5 py-1 rounded-full text-[9px] font-black border uppercase tracking-wider ${p.badgeColor}`}>
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Name & Tagline */}
                <h3 className="text-lg font-black text-white">{p.name}</h3>
                <p className="text-xs text-zinc-400 mt-1 font-medium">{p.tagline}</p>

                {/* Dynamic Price Calculation */}
                <div className="mt-5 py-4 border-y border-white/[0.06] flex items-baseline gap-1">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Starts at</span>
                  <span className="text-3xl font-black text-white ml-1">
                    {formatPrice(calculatedPrice)}
                  </span>
                  <span className="text-xs font-semibold text-zinc-400">{getCycleSuffix()}</span>
                </div>

                {/* Features */}
                <ul className="mt-5 space-y-2.5 flex-1">
                  {p.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                      <Check className="h-3.5 w-3.5 flex-shrink-0 text-emerald-400 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Action CTA */}
                <Link
                  href={p.href}
                  className={`group/btn mt-7 inline-flex items-center justify-center gap-2 rounded-2xl py-3 text-xs font-bold transition-all duration-200 ${
                    p.popular
                      ? "bg-white text-zinc-950 hover:bg-zinc-100 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      : "bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.08]"
                  }`}
                >
                  <span>{p.cta}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

