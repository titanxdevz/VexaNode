"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CtaSection() {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#00a3ff]/25 bg-[#00a3ff]/10 px-8 py-16 text-center lg:px-16"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#00a3ff]/20 blur-[140px]" />

        <h2 className="mx-auto max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
          Ready to deploy your next server?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-300">
          Join thousands of creators and teams running on infrastructure built for
          speed. Live in under a minute.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#00a3ff] px-8 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-[#0d8ad6]"
          >
            Get started now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-8 py-3.5 font-semibold text-white transition-colors duration-300 hover:border-white/40"
          >
            Talk to sales
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
