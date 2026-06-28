"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const testimonials = [
  {
    quote:
      "Migrated our whole community over a weekend. Setup was instant and the latency dropped by half. Support actually knows what they're talking about.",
    name: "Aarav Mehta",
    role: "Owner, CraftRealms Network",
    initials: "AM",
  },
  {
    quote:
      "We run production workloads on their VPS line and uptime has been flawless. The price-to-performance is honestly hard to beat anywhere else.",
    name: "Sofia Klein",
    role: "CTO, Loopwork",
    initials: "SK",
  },
  {
    quote:
      "DDoS attacks used to take us offline weekly. Since switching to VexaNode we haven't dropped a single packet. Total peace of mind.",
    name: "Daniel Osei",
    role: "Founder, ArenaHost",
    initials: "DO",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00a3ff]">
            Loved by builders
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Trusted by thousands of teams
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            From indie game communities to fast-growing startups — here&apos;s what
            they say.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-[#00a3ff] text-[#00a3ff]" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-gray-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00a3ff]/10 text-sm font-bold text-[#00a3ff]">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
