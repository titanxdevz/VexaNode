"use client"

import { motion } from "framer-motion"
import { Server, ArrowRight, Shield, Zap, Sparkles } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"

export default function DedicatedClient() {
  return (
    <div className="min-h-screen bg-[#060811] text-white selection:bg-[#10b981]/30 relative overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.08),transparent_100%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />

      <Navbar />

      <main className="relative z-10 pt-36 pb-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#5865F2]/10 text-[#5865F2] text-xs font-bold px-4 py-1.5 rounded-full border border-[#5865F2]/25 mb-6 shadow-sm">
            <FaDiscord className="w-4 h-4" />
            <span>Bare Metal & Dedicated Server Quotes</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black orbitron-font tracking-tight mb-6 text-white leading-tight">
            Dedicated Servers <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5865F2] to-[#818cf8]">Custom Hardware</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Join our official Discord community for dedicated server quotes, enterprise hardware specs (AMD EPYC, Ryzen 9, Intel Xeon), custom networking, and multi-location setups.
          </p>

          {/* Discord CTA Card */}
          <div className="max-w-xl mx-auto p-8 rounded-3xl bg-gradient-to-b from-[#0b0f1d] to-[#070a14] border border-[#5865F2]/30 shadow-[0_0_50px_rgba(88,101,242,0.15)] backdrop-blur-xl mb-12">
            <div className="w-16 h-16 rounded-2xl bg-[#5865F2]/15 border border-[#5865F2]/30 flex items-center justify-center mx-auto mb-5 text-[#5865F2] shadow-[0_0_20px_rgba(88,101,242,0.3)]">
              <FaDiscord className="w-9 h-9" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2 orbitron-font">
              Get Custom Dedicated Server Quotes
            </h3>

            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              Open a dedicated sales ticket on our Discord server to configure custom RAM, NVMe RAID storage arrays, 10Gbps unmetered uplinks, and dedicated IP blocks.
            </p>

            <a
              href="https://discord.gg/devz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#5865F2] hover:bg-[#4752c4] text-white font-extrabold py-4 px-6 rounded-2xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(88,101,242,0.4)] hover:shadow-[0_0_35px_rgba(88,101,242,0.6)] active:scale-[0.98] cursor-pointer"
            >
              <FaDiscord className="w-5 h-5" />
              <span>Join Our Discord Server</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Other Service Shortcuts */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="text-gray-500 font-medium">Looking for game or bot hosting?</span>
            <Link href="/discord" className="text-[#10b981] hover:underline font-bold">
              Discord Bot Hosting
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/games" className="text-[#10b981] hover:underline font-bold">
              Minecraft Servers
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/hytale" className="text-amber-400 hover:underline font-bold">
              Hytale Hosting
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}