"use client";

import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";
import { Server, Zap } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const regions = [
  { city: "Mumbai", country: "India", cpu: "AMD Ryzen 9 9950X", ping: "8ms" },
  { city: "Mumbai", country: "India", cpu: "AMD Ryzen 7 7700X", ping: "8ms" },
  { city: "Mumbai", country: "India", cpu: "Intel Xeon E5-2680 v4", ping: "11ms" },
  { city: "Delhi", country: "India", cpu: "AMD Ryzen 9 9950X", ping: "7ms" },
  { city: "Noida", country: "India", cpu: "Intel Xeon", ping: "6ms" },
  { city: "Kolkata", country: "India", cpu: "AMD EPYC", ping: "9ms" },
  { city: "Singapore", country: "Singapore", cpu: "AMD Ryzen 9 9950X", ping: "12ms" },
  { city: "Singapore", country: "Singapore", cpu: "AMD Ryzen 9 5950X", ping: "12ms" },
  { city: "Johor", country: "Malaysia", cpu: "AMD Ryzen 9 9950X", ping: "13ms" },
  { city: "Sydney", country: "Australia", cpu: "AMD Ryzen 9 9900X", ping: "18ms" },
  { city: "Miami", country: "USA", cpu: "Intel Gold", ping: "12ms" },
  { city: "Frankfurt", country: "Germany", cpu: "AMD EPYC", ping: "10ms" },
  { city: "Ashburn", country: "Virginia", cpu: "Intel Xeon", ping: "14ms" },
];

export default function GlobeSection() {
  return (
    <section className="relative overflow-hidden border-y border-zinc-800 bg-zinc-950/20 py-20 lg:py-28 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        
        {/* Copy + region list */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 mb-4">
            Global Infrastructure
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            High performance nodes worldwide
          </h2>
          <p className="mt-4 text-base text-zinc-400">
            Deploy your servers close to your players. Our edge-routed nodes operate on dedicated bare-metal setups in premium global facilities to guarantee low latency and high availability.
          </p>

          {/* Regional Specifications List */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
            {regions.map((r, i) => (
              <motion.div
                key={r.city + "-" + r.cpu + "-" + i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04, ease }}
                className="group flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900/30 px-4 py-3 transition-colors duration-150 hover:border-emerald-500/30 hover:bg-zinc-900/50"
              >
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                    <span>{r.city}</span>
                    <span className="text-[10px] font-medium text-zinc-500">({r.country})</span>
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-0.5 flex items-center gap-1">
                    <Server className="w-3.5 h-3.5 text-zinc-600" />
                    <span>{r.cpu}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded">
                  <span className="h-1 w-1 rounded-full bg-emerald-500" />
                  {r.ping}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Globe Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="relative flex h-[320px] items-center justify-center lg:h-[480px]"
        >
          <div className="absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_75%)]">
            <Globe />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
