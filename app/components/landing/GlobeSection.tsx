"use client";

import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";
import { Server, Zap, Radio } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const regions = [
  { city: "Mumbai", country: "India", cpu: "AMD Ryzen 9 9950X", ping: "8ms" },
  { city: "Delhi NCR", country: "India", cpu: "AMD Ryzen 9 9950X", ping: "7ms" },
  { city: "Noida", country: "India", cpu: "Intel Xeon Gold", ping: "6ms" },
  { city: "Kolkata", country: "India", cpu: "AMD EPYC 7502", ping: "9ms" },
  { city: "Singapore", country: "Singapore", cpu: "AMD Ryzen 9 9950X", ping: "12ms" },
  { city: "Johor", country: "Malaysia", cpu: "AMD Ryzen 9 9950X", ping: "13ms" },
  { city: "Sydney", country: "Australia", cpu: "AMD Ryzen 9 9900X", ping: "18ms" },
  { city: "Miami", country: "USA", cpu: "Intel Xeon Scalable", ping: "12ms" },
  { city: "Frankfurt", country: "Germany", cpu: "AMD EPYC Milan", ping: "10ms" },
  { city: "Ashburn", country: "USA", cpu: "Intel Xeon Gold", ping: "14ms" },
];

export default function GlobeSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.04] bg-[#07080d] py-20 lg:py-28 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        
        {/* Copy + region list */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 mb-4">
            Edge Deployment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            High-Performance Edge Locations.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Deploy your servers close to your players. Our edge-routed nodes operate on dedicated bare-metal setups in premium global facilities with direct IX peering to guarantee low latency.
          </p>

          {/* Regional Specifications List */}
          <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 max-h-[340px] overflow-y-auto pr-2 custom-scrollbar">
            {regions.map((r, i) => (
              <motion.div
                key={r.city + "-" + r.cpu + "-" + i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03, ease }}
                className="group flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-all duration-200 hover:border-emerald-500/30 hover:bg-white/[0.04]"
              >
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                    <span>{r.city}</span>
                    <span className="text-[10px] font-medium text-zinc-500">({r.country})</span>
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5 flex items-center gap-1">
                    <Server className="w-3 h-3 text-zinc-500" />
                    <span>{r.cpu}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
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
          className="relative flex h-[340px] items-center justify-center lg:h-[480px]"
        >
          <div className="absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_75%)]">
            <Globe />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

