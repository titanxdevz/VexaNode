"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const testimonials = [
  {
    quote:
      "Migrated our whole community over a weekend. Setup was instant, latency dropped by half, and the free bot tier has literally zero downtime. Best decision we've made.",
    name: "Aarav Mehta",
    role: "Owner, CraftRealms Network",
    initials: "AM",
  },
  {
    quote:
      "We run production workloads on their VPS line and uptime has been flawless. Ryzen 9 cores run insanely fast, and customer support resolves tickets in minutes.",
    name: "Sofia Klein",
    role: "CTO, Loopwork",
    initials: "SK",
  },
  {
    quote:
      "DDoS attacks used to take us offline weekly. Since switching to VexaNode we haven't dropped a single packet. Their edge mitigation is absolutely rock-solid.",
    name: "Daniel Osei",
    role: "Founder, ArenaHost",
    initials: "DO",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 bg-zinc-950 text-white">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 mb-4">
            Customer Trust
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Trusted by developers &amp; communities
          </h2>
          
          {/* Trustpilot-style Rating badge */}
          <div className="mt-4 flex items-center justify-center gap-2 text-zinc-300">
            <span className="text-sm font-bold text-white">Excellent</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, idx) => (
                <div key={idx} className="bg-emerald-500 p-0.5 rounded-sm">
                  <Star className="h-3 w-3 fill-black text-black" />
                </div>
              ))}
            </div>
            <span className="text-xs text-zinc-400">based on 450+ verified reviews</span>
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/20 p-6 shadow-md"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-xs leading-relaxed text-zinc-300 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-zinc-800/80 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400">
                  {t.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{t.name}</div>
                  <div className="text-[10px] text-zinc-500">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

      </div>
    </section>
  );
}
