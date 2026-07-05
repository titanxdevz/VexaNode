"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Bot, Music, Server, Database } from "lucide-react";
import { useCurrency } from "../../contexts/CurrencyContext";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ProductsSection() {
  const { formatPrice } = useCurrency();

  const products = [
    {
      icon: Bot,
      name: "Bot Hosting",
      href: "/discord",
      priceInINR: 53,
      desc: "Shared vCPU instances optimized for always-on Discord and Telegram bots.",
      features: [
        "Shared Ryzen 9 / EPYC vCPU",
        "DDR5 High-Speed RAM",
        "1 GB NVMe SSD Storage",
        "Pterodactyl Control Panel",
        "No sleep mode & no queues"
      ],
      popular: false,
      cta: "Deploy Bot"
    },
    {
      icon: Music,
      name: "Lavalink Hosting",
      href: "/lavalink",
      priceInINR: 49,
      desc: "High-performance JVM-tuned audio nodes for crystal clear music playback.",
      features: [
        "Dedicated JVM allocation",
        "30+ Audio Sources enabled",
        "Up to 100 concurrent streams",
        "India & USA locations",
        "99.95% Audio Stream SLA"
      ],
      popular: true,
      cta: "Deploy Lavalink"
    },
    {
      icon: Server,
      name: "VPS Hosting",
      href: "/vps",
      priceInINR: 225,
      desc: "Virtual private servers with full root access and dedicated resources.",
      features: [
        "Ryzen 9 9950X / EPYC CPU",
        "DDR5 RAM & PCIe 4.0 NVMe",
        "Full Root Access via SSH",
        "Dedicated IPv4 address",
        "Advanced DDoS Protection"
      ],
      popular: false,
      cta: "Configure VPS"
    },
    {
      icon: Database,
      name: "Database Hosting",
      href: "/databases",
      priceInINR: 99,
      desc: "Managed high-speed databases for storage and production applications.",
      features: [
        "MongoDB, PostgreSQL, MySQL, Redis",
        "Dedicated RAM allocation",
        "Automated daily backups",
        "1 Gbps low-latency link",
        "Scale resources on-the-fly"
      ],
      popular: false,
      cta: "Deploy Database"
    }
  ];

  return (
    <section id="pricing" className="relative scroll-mt-28 py-20 lg:py-28 bg-zinc-950 text-white">
      {/* Ambient center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 mb-4">
            Plans &amp; Pricing
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Pick the power you need
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Transparent pricing, instant auto-deployment, and no hidden setup fees. Switch or scale your services anytime.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className={`relative flex flex-col rounded-xl border p-5.5 transition-all duration-200 bg-zinc-900/30 ${
                p.popular
                  ? "border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.05)]"
                  : "border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-5 rounded-full bg-emerald-500 text-black px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider">
                  Popular
                </span>
              )}

              {/* Icon Container */}
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800">
                <p.icon className={`h-4.5 w-4.5 ${p.popular ? "text-emerald-400" : "text-zinc-400"}`} />
              </div>

              {/* Title & Desc */}
              <h3 className="mt-4 text-base font-extrabold text-white">{p.name}</h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400 min-h-[48px]">{p.desc}</p>

              {/* Pricing Section */}
              <div className="mt-4 flex items-baseline gap-1 border-t border-zinc-800/60 pt-4">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Starts at</span>
                <span className="text-2xl font-black text-white ml-1">
                  {formatPrice(p.priceInINR)}
                </span>
                <span className="text-xs text-zinc-500">/mo</span>
              </div>

              {/* Features List */}
              <ul className="mt-5 space-y-2 border-t border-zinc-800/60 pt-4 flex-1">
                {p.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-xs text-zinc-300">
                    <Check className="h-3.5 w-3.5 flex-shrink-0 text-emerald-400 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href={p.href}
                className={`group mt-6 inline-flex items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-bold transition-all ${
                  p.popular
                    ? "bg-emerald-500 text-black hover:bg-emerald-400"
                    : "border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 text-zinc-200 hover:text-white"
                }`}
              >
                <span>{p.cta}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
