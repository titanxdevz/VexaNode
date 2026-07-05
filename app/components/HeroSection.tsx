'use client'

import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Zap, HardDrive } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center bg-[#07090e] overflow-hidden pt-24 pb-20">
      {/* Background ambient glow & grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00a3ff]/10 rounded-full blur-[150px] opacity-70 translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00a3ff]/5 rounded-full blur-[120px] opacity-50 -translate-x-1/4 translate-y-1/4 pointer-events-none" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">

        {/* Left Content Column */}
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left pt-12 lg:pt-0">

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00a3ff]/10 border border-[#00a3ff]/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00a3ff] animate-pulse" />
              <span className="text-[11px] font-bold text-[#00a3ff] tracking-wider uppercase">99.99% Uptime SLA</span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-[11px] font-medium text-gray-400">
              <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-[#00a3ff]" /> Instant Deploy</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-[#00a3ff]" /> DDoS Protection</span>
              <span className="flex items-center gap-1"><HardDrive className="w-3 h-3 text-[#00a3ff]" /> NVMe SSD</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-black text-white mb-6 tracking-tight leading-[1.05] font-sans">
              Deploy Faster.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00a3ff] to-[#00a3ff]">Scale Without Limits.</span>
            </h1>
          </motion.div>

          {/* Value Prop */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[17px] text-gray-400 max-w-[90%] leading-relaxed mb-10 font-medium"
          >
            Built for developers, businesses, and gaming communities that demand lightning-fast infrastructure, enterprise-grade reliability, and effortless scalability.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto"
          >
            <Link
              href="#pricing"
              className="w-full sm:w-auto bg-[#00a3ff] hover:bg-[#0d8ad6] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] flex items-center justify-center gap-2 group"
            >
              Launch Your Server
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="w-full sm:w-auto bg-transparent border border-gray-700 hover:border-[#00a3ff] text-white hover:text-[#00a3ff] hover:bg-[#00a3ff]/5 px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              Explore Products
            </Link>
          </motion.div>

          {/* Minimal Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-6 sm:gap-12 w-full pt-8 border-t border-white/5"
          >
            {[
              { value: "178+", label: "Servers Deployed" },
              { value: "99.99%", label: "Network Uptime" },
              { value: "86+", label: "Active Communities" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-white mb-1 tracking-tight">{stat.value}</span>
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Visual Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[45%] relative h-[400px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
        >
          {/* Holographic rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-[#00a3ff]/20 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] rounded-full border border-white/5"
            />
          </div>

          {/* Glassmorphism accent shapes */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#00a3ff]/20 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-[#00a3ff]/30 rounded-full blur-xl"
          />

          {/* 3D Floating Logo */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 drop-shadow-[0_0_50px_rgba(0,163,255,0.4)]"
          >
            <Image
              src="/logo.png"
              alt="VexaNode Logo"
              width={220}
              height={220}
              className="object-contain sm:w-[280px] sm:h-[280px]"
              priority
            />
          </motion.div>

          {/* Subtle floating particles (CSS based via framer motion) */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -150],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: Math.random() * 4 + 6,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
                className="absolute w-1.5 h-1.5 bg-[#00a3ff] rounded-full blur-[1px]"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 50 + 50}%`
                }}
              />
            ))}
          </div>

        </motion.div>
      </div>

      {/* Bottom fade out to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07090e] to-transparent z-10 pointer-events-none" />
    </div>
  )
}
