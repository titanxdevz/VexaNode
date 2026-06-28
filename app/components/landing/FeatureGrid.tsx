"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  ShieldCheck,
  Rocket,
  Globe2,
  HardDrive,
  Headset,
  GitBranch,
  Lock,
} from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const features = [
  {
    icon: Rocket,
    title: "Instant deployment",
    desc: "Spin up a fully configured server in under 60 seconds with our automated provisioning pipeline.",
  },
  {
    icon: Gauge,
    title: "Blazing performance",
    desc: "Latest-gen AMD EPYC & Intel CPUs paired with enterprise NVMe storage for zero bottlenecks.",
  },
  {
    icon: ShieldCheck,
    title: "DDoS protection",
    desc: "Always-on, multi-terabit mitigation filters attacks at the edge before they ever reach you.",
  },
  {
    icon: Globe2,
    title: "Global network",
    desc: "12 strategically placed regions with smart routing keep you close to every player and user.",
  },
  {
    icon: HardDrive,
    title: "Automated backups",
    desc: "Scheduled snapshots and one-click restores mean your data is never more than a moment away.",
  },
  {
    icon: Headset,
    title: "24/7 human support",
    desc: "Real engineers on live chat and tickets, with response times measured in minutes, not days.",
  },
  {
    icon: GitBranch,
    title: "Full root access",
    desc: "Total control over your environment — install anything, automate everything, no lock-in.",
  },
  {
    icon: Lock,
    title: "Secure by default",
    desc: "Isolated environments, encrypted storage, and hardened networking baked into every plan.",
  },
];

export default function FeatureGrid() {
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
            Why VexaNode
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Everything you need to ship and scale
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            A hosting platform engineered for performance, built for reliability,
            and priced without surprises.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-[#00a3ff]/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00a3ff]/10 transition-colors duration-300 group-hover:bg-[#00a3ff]/20">
                <f.icon className="h-5 w-5 text-[#00a3ff]" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
