"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Zap, Cpu } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "<15ms", label: "Avg. Latency" },
  { value: "12", label: "Global Regions" },
  { value: "24/7", label: "Expert Support" },
];

const consoleLines = [
  { t: "$ vexa deploy --region auto", c: "text-gray-400" },
  { t: "✔ Provisioning NVMe compute node", c: "text-[#00a3ff]" },
  { t: "✔ Attaching 10 Gbps anti-DDoS network", c: "text-[#00a3ff]" },
  { t: "✔ Booting container · 0.8s", c: "text-[#00a3ff]" },
  { t: "● Live at node-ams-04.vexanode.cloud", c: "text-green-400" },
];

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#00a3ff]/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_30%,#000_60%,transparent_100%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00a3ff]/20 bg-[#00a3ff]/10 px-3.5 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-[#00a3ff]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#00a3ff]">
              Next-gen hosting infrastructure
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[68px]"
          >
            Hosting that moves
            <br />
            <span className="bg-gradient-to-r from-[#00a3ff] to-[#5ec2ff] bg-clip-text text-transparent">
              at your speed.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400"
          >
            Game servers, VPS, and dedicated machines on enterprise NVMe hardware —
            deployed in seconds, protected by default, and backed by engineers who
            actually answer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#00a3ff] px-7 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-[#0d8ad6]"
            >
              Deploy your server
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors duration-300 hover:border-white/30 hover:text-[#00a3ff]"
            >
              View all plans
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500"
          >
            {[
              { icon: Zap, label: "Instant setup" },
              { icon: ShieldCheck, label: "DDoS protection" },
              { icon: Cpu, label: "NVMe SSD" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-[#00a3ff]" />
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: deploy console mock */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs font-medium text-gray-500">
                vexanode — deploy
              </span>
            </div>
            <div className="space-y-2.5 p-5 font-mono text-[13px] leading-relaxed">
              {consoleLines.map((line, i) => (
                <motion.div
                  key={line.t}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.22, ease }}
                  className={line.c}
                >
                  {line.t}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating uptime card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease }}
            className="absolute -bottom-6 -left-6 hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00a3ff]/10">
                <Check className="h-5 w-5 text-[#00a3ff]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">All systems online</div>
                <div className="text-xs text-gray-500">Last 90 days · 99.99%</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 px-6 sm:grid-cols-4 lg:px-8"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-[#07090e] px-6 py-7 text-center">
            <div className="text-3xl font-black tracking-tight text-white">
              {s.value}
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
