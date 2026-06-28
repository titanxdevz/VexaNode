"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Gamepad2, Server, Cpu, Bot } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const products = [
  {
    icon: Gamepad2,
    name: "Game Hosting",
    href: "/games",
    price: "$3",
    unit: "/mo",
    desc: "Low-latency servers for Minecraft and 100+ titles.",
    features: ["One-click modpacks", "Instant setup", "Unlimited slots"],
    popular: false,
  },
  {
    icon: Server,
    name: "VPS Hosting",
    href: "/vps",
    price: "$5",
    unit: "/mo",
    desc: "Virtual servers with full root and guaranteed resources.",
    features: ["Dedicated vCPU", "NVMe storage", "Full root access"],
    popular: true,
  },
  {
    icon: Cpu,
    name: "Dedicated Servers",
    href: "/dedicated",
    price: "$49",
    unit: "/mo",
    desc: "Bare-metal performance with zero noisy neighbors.",
    features: ["Single tenant", "Custom builds", "10 Gbps uplink"],
    popular: false,
  },
  {
    icon: Bot,
    name: "Bot Hosting",
    href: "/discord",
    price: "$2",
    unit: "/mo",
    desc: "Always-on hosting for Discord bots and automations.",
    features: ["99.99% uptime", "Auto-restart", "Git deploy"],
    popular: false,
  },
];

export default function ProductsSection() {
  return (
    <section id="pricing" className="relative scroll-mt-28 py-24 lg:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#00a3ff]/5 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00a3ff]">
            Plans &amp; pricing
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Pick the power you need
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Transparent pricing, no setup fees, and the freedom to scale or cancel
            any time.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              className={`relative flex flex-col rounded-2xl border p-6 transition-colors duration-300 ${
                p.popular
                  ? "border-[#00a3ff]/50 bg-[#00a3ff]/10"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-[#00a3ff] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Most popular
                </span>
              )}

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00a3ff]/10">
                <p.icon className="h-5 w-5 text-[#00a3ff]" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-white">{p.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{p.desc}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-xs font-medium text-gray-500">from</span>
                <span className="text-3xl font-black tracking-tight text-white">
                  {p.price}
                </span>
                <span className="text-sm text-gray-500">{p.unit}</span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {p.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 flex-shrink-0 text-[#00a3ff]" />
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href={p.href}
                className={`group mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-300 ${
                  p.popular
                    ? "bg-[#00a3ff] text-white hover:bg-[#0d8ad6]"
                    : "border border-white/15 text-white hover:border-[#00a3ff]/50 hover:text-[#00a3ff]"
                }`}
              >
                Get started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
