"use client";

import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const regions = [
  { city: "Mumbai", country: "India", ping: "8ms" },
  { city: "Singapore", country: "Singapore", ping: "12ms" },
  { city: "Frankfurt", country: "Germany", ping: "10ms" },
  { city: "Amsterdam", country: "Netherlands", ping: "11ms" },
  { city: "New York", country: "United States", ping: "14ms" },
  { city: "Dallas", country: "United States", ping: "16ms" },
  { city: "Los Angeles", country: "United States", ping: "18ms" },
  { city: "São Paulo", country: "Brazil", ping: "22ms" },
];

export default function GlobeSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Copy + region list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00a3ff]">
            Global network
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Close to everyone, everywhere
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-400">
            Deploy where your users are. Our edge-routed backbone spans every major
            continent so latency stays low and uptime stays high.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {regions.map((r, i) => (
              <motion.div
                key={r.city}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease }}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300 hover:border-[#00a3ff]/40"
              >
                <div>
                  <div className="text-sm font-bold text-white">{r.city}</div>
                  <div className="text-xs text-gray-500">{r.country}</div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  {r.ping}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="relative flex h-[360px] items-center justify-center lg:h-[560px]"
        >
          <div className="absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_72%)]">
            <Globe />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
