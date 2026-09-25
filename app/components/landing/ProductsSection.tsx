"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Radio } from "lucide-react";
import NumberFlow from "@number-flow/react";
import { useCurrency } from "../../contexts/CurrencyContext";
import { VerticalCutReveal, type VerticalCutRevealRef } from "@/components/ui/vertical-cut-reveal";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const cycles = [
  { key: "monthly", label: "Monthly", badge: null },
  { key: "quarterly", label: "Quarterly", badge: "-5%" },
  { key: "annually", label: "Annually", badge: "-15%" },
] as const;

type Cycle = (typeof cycles)[number]["key"];

export default function ProductsSection() {
  const { convertPrice, currency } = useCurrency();
  const [billingCycle, setBillingCycle] = useState<Cycle>("monthly");

  const headingRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<VerticalCutRevealRef>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (headingInView) revealRef.current?.startAnimation();
  }, [headingInView]);

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
      features: [
        "Node.js, Python, Java & Go",
        "DDR4/DDR5 Fast RAM",
        "Gen4 NVMe High-IOPS SSD",
        "Free Automatic Backups",
        "0% Sleep Mode / 24/7 Uptime",
      ],
      popular: true,
      badge: "MOST POPULAR",
      cta: "Deploy Bot",
    },
    {
      icon: null,
      image: "/minecraft_block.jpg",
      name: "Minecraft Hosting",
      tagline: "High-tickrate game nodes",
      href: "/games?game=minecraft",
      basePrice: 99,
      features: [
        "AMD Ryzen 9 & EPYC Processors",
        "1-Click Modpacks & Plugins",
        "Unmetered PCIe NVMe Storage",
        "Low-Ping Routing",
        "Real-Time Console & Backups",
      ],
      popular: false,
      badge: "EPYC POWERED",
      cta: "Deploy Minecraft",
    },
    {
      icon: null,
      image: "/icons/Hytale/hytale-h1.avif",
      name: "Hytale Server Hosting",
      tagline: "Next-gen adventure hosting",
      href: "/hytale",
      basePrice: 299,
      features: [
        "4 GB to 10 GB RAM Plans",
        "High Single-Core Frequency",
        "16 GB to 40 GB NVMe Storage",
        "Multi-Player Optimized SLA",
        "India & Edge Locations",
      ],
      popular: false,
      badge: "NEW RELEASE",
      cta: "Deploy Hytale",
    },
    {
      icon: Radio,
      image: null,
      name: "Lavalink Audio Nodes",
      tagline: "Dedicated JVM music nodes",
      href: "/lavalink",
      basePrice: 240,
      features: [
        "Dedicated JVM Memory Slot",
        "YouTube, Spotify & Soundcloud",
        "100+ Concurrent Streams",
        "India & USA Low-Jitter Nodes",
        "Dedicated Audio SLA",
      ],
      popular: false,
      badge: "JVM TUNED",
      cta: "Deploy Lavalink",
    },
  ];

  return (
    <section id="pricing" className="relative scroll-mt-28 py-20 lg:py-28 vx-bg vx-ink overflow-hidden border-t vx-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d97757]/10 border border-[#d97757]/25 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d97757] mb-4">
            Transparent Plans
          </span>
          <div ref={headingRef}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight vx-ink">
              <VerticalCutReveal
                ref={revealRef}
                splitBy="words"
                staggerDuration={0.12}
                staggerFrom="first"
                reverse
                autoStart={false}
                containerClassName="justify-center"
                transition={{ type: "spring", stiffness: 250, damping: 40 }}
              >
                Choose Your Superpower.
              </VerticalCutReveal>
            </h2>
          </div>
          <p className="mt-3 text-sm sm:text-base vx-muted">
            Instant automatic setup, zero hidden costs, and silky smooth scalability.
          </p>

          {/* Billing Cycle Selector — animated sliding pill */}
          <div className="mt-8 inline-flex items-center gap-1 p-1 rounded-full vx-bg-alt border vx-line">
            {cycles.map((c) => {
              const active = billingCycle === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setBillingCycle(c.key)}
                  className={`relative flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold transition-colors duration-200 ${
                    active ? "vx-ink" : "vx-muted vx-hover-ink"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="billingPill"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      className="absolute inset-0 rounded-full vx-card border vx-line shadow-sm"
                    />
                  )}
                  <span className="relative">{c.label}</span>
                  {c.badge && (
                    <span className="relative px-1.5 py-0.5 rounded-full bg-[#d97757]/15 text-[#d97757] text-[9px] font-black">
                      {c.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => {
            const value = convertPrice(Math.round(p.basePrice * getMultiplier()));
            const IconComp = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease }}
                className={`group relative flex flex-col rounded-3xl border p-6 transition-all duration-300 vx-card ${
                  p.popular
                    ? "border-[#d97757] shadow-[0_12px_40px_-12px_rgba(217,119,87,0.4)] ring-1 ring-[#d97757]/20 lg:scale-[1.03]"
                    : "vx-line shadow-sm hover:shadow-lg hover:border-[#d97757]/40 hover:-translate-y-1"
                }`}
              >
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-11 h-11 rounded-2xl vx-bg border vx-line flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-200 p-1.5">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={36}
                        height={36}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    ) : IconComp ? (
                      <IconComp className="w-5 h-5 vx-ink" />
                    ) : null}
                  </div>
                  {p.badge && (
                    <span className={`px-2.5 py-1 rounded-full text-[9px] font-black border uppercase tracking-wider ${
                      p.popular
                        ? "bg-[#d97757]/10 text-[#d97757] border-[#d97757]/30"
                        : "vx-bg-alt vx-muted2 vx-line"
                    }`}>
                      {p.badge}
                    </span>
                  )}
                </div>

                {/* Name & Tagline */}
                <h3 className="text-lg font-extrabold vx-ink">{p.name}</h3>
                <p className="text-xs vx-muted mt-1 font-medium">{p.tagline}</p>

                {/* Price — animated with NumberFlow */}
                <div className="mt-5 py-4 border-y vx-line flex items-baseline gap-1">
                  <span className="text-[10px] font-bold vx-faint uppercase tracking-wider">Starts at</span>
                  <NumberFlow
                    value={value}
                    format={{ style: "currency", currency: currency.code, maximumFractionDigits: 0 }}
                    className="text-3xl font-extrabold vx-ink ml-1"
                  />
                  <span className="text-xs font-semibold vx-muted">{getCycleSuffix()}</span>
                </div>

                {/* Features */}
                <ul className="mt-5 space-y-2.5 flex-1">
                  {p.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs vx-muted2 font-medium">
                      <Check className="h-3.5 w-3.5 flex-shrink-0 text-[#d97757] mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={p.href}
                  className={`group/btn mt-7 inline-flex items-center justify-center gap-2 rounded-2xl py-3 text-xs font-bold transition-all duration-200 ${
                    p.popular
                      ? "bg-[#d97757] text-white hover:bg-[#c96442] shadow-[0_8px_24px_-8px_rgba(217,119,87,0.6)]"
                      : "vx-solid"
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
