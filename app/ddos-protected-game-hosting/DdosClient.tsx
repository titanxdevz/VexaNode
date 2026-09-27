"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight, ChevronDown, Shield, Network,
  Filter, Gauge, Server
} from "lucide-react"
import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { ddosFaqs as faqs } from "./faqs"

interface GameCard {
  name: string
  href: string
  desc: string
}

const PROTECTED_GAMES: GameCard[] = [
  { name: "Minecraft", href: "/games?game=minecraft", desc: "Java & Bedrock servers shielded from spoof-join and null-ping floods." },
  { name: "SA-MP", href: "/samp", desc: "SA-MP & open.mp servers protected against UDP query floods." },
  { name: "Hytale", href: "/hytale", desc: "Hytale nodes ready for launch with always-on edge mitigation." },
  { name: "Lavalink", href: "/lavalink", desc: "Lavalink audio nodes kept online through volumetric attacks." },
]

export default function DdosClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#5D9C42]/40 relative overflow-hidden">

      {/* ── AMBIENT BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none -z-10 select-none overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[650px] bg-[radial-gradient(ellipse_100%_75%_at_50%_-15%,rgba(93,156,66,0.10),rgba(122,88,58,0.05)_40%,transparent_80%)]" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* ── HERO ── */}
        <div className="relative mb-14 rounded-3xl border border-[#5D9C42]/25 vx-card p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-[#5D9C42] to-transparent shadow-[0_0_12px_#5D9C42]" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg vx-bg-alt border border-[#5D9C42]/40 mb-6 shadow-[0_0_15px_rgba(93,156,66,0.2)] flex-wrap">
              <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest font-black uppercase text-[#5D9C42]">
                <span className="inline-block w-2 h-2 bg-[#5D9C42] shadow-[0_0_8px_#5D9C42]" />
                ALWAYS-ON
              </span>
              <span className="vx-faint">|</span>
              <span className="font-mono text-[11px] vx-muted2 font-bold tracking-wider uppercase">
                MULTI-TBPS SCRUBBING
              </span>
              <span className="vx-faint">|</span>
              <span className="text-[10px] font-mono font-bold text-[#5D9C42] uppercase tracking-widest">
                L3/L4 + L7
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight vx-ink leading-[1.05] mb-5">
              <span className="text-[#5D9C42] drop-shadow-[0_2px_20px_rgba(93,156,66,0.35)]">DDoS-Protected</span>{" "}
              <br className="hidden sm:inline" />
              Game Server Hosting
            </h1>

            <p className="vx-muted2 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Every VexaNode game server ships with always-on, multi-Tbps L3/L4 volumetric protection plus
              game-aware Layer 7 mitigation for Minecraft, FiveM, Rust, and more — with no latency penalty.
              Attacks are absorbed at the network edge before they ever reach your server.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/games?game=minecraft"
                className="inline-flex items-center gap-2 bg-[#5D9C42] hover:bg-[#4E8337] text-white font-black py-3 px-5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(93,156,66,0.35)]"
              >
                View Protected Plans
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
              <Link
                href="#protected-games"
                className="inline-flex items-center gap-2 vx-bg-alt hover:bg-[#5D9C42] hover:text-white vx-ink border border-[#5D9C42]/40 hover:border-[#5D9C42] font-black py-3 px-5 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                See Protected Games
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── ALWAYS-ON NETWORK PROTECTION ── */}
        <div className="mb-20 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-[#5D9C42] font-bold uppercase tracking-widest">LAYER 3 / LAYER 4</span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight vx-ink mt-2 mb-4">
            Always-on network protection
          </h2>
          <p className="text-sm vx-muted2 leading-relaxed mb-5">
            Multi-Tbps of scrubbing capacity filters volumetric L3/L4 floods — UDP, SYN, and amplification
            attacks — at the edge across multiple points of presence, before they can saturate your server.
            Protection is enabled by default on every node, with nothing to configure.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl vx-card border vx-line">
              <Network className="w-5 h-5 text-[#5D9C42] mb-3" />
              <h3 className="text-sm font-black uppercase vx-ink mb-1">Multi-Tbps Scrubbing</h3>
              <p className="text-xs vx-muted leading-relaxed">Volumetric floods absorbed at the network edge across global PoPs.</p>
            </div>
            <div className="p-5 rounded-2xl vx-card border vx-line">
              <Shield className="w-5 h-5 text-[#5D9C42] mb-3" />
              <h3 className="text-sm font-black uppercase vx-ink mb-1">L3/L4 Volumetric</h3>
              <p className="text-xs vx-muted leading-relaxed">UDP, SYN, and amplification attacks dropped before they reach you.</p>
            </div>
            <div className="p-5 rounded-2xl vx-card border vx-line">
              <Server className="w-5 h-5 text-[#5D9C42] mb-3" />
              <h3 className="text-sm font-black uppercase vx-ink mb-1">Zero Config</h3>
              <p className="text-xs vx-muted leading-relaxed">On by default on every server — no add-on fee, nothing to enable.</p>
            </div>
          </div>
        </div>

        {/* ── LAYER 7 FILTERING ── */}
        <div className="mb-20 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-[#5D9C42] font-bold uppercase tracking-widest">LAYER 7</span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight vx-ink mt-2 mb-4">
            Game-aware Layer 7 filtering
          </h2>
          <p className="text-sm vx-muted2 leading-relaxed mb-5">
            Volumetric protection alone is not enough for games. Our game-aware Layer 7 filtering inspects
            application traffic and drops abuse that mimics real players — BungeeCord spoof joins, null-ping
            packets, and UDP reflection — so genuine players stay connected throughout an attack.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-xs vx-muted2">
            <li className="p-3 rounded-xl vx-bg-alt border vx-line flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-[#5D9C42] flex-shrink-0" />
              BungeeCord spoof-join filtering
            </li>
            <li className="p-3 rounded-xl vx-bg-alt border vx-line flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-[#5D9C42] flex-shrink-0" />
              Null-ping flood detection
            </li>
            <li className="p-3 rounded-xl vx-bg-alt border vx-line flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-[#5D9C42] flex-shrink-0" />
              UDP reflection &amp; amplification blocking
            </li>
            <li className="p-3 rounded-xl vx-bg-alt border vx-line flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-[#5D9C42] flex-shrink-0" />
              Real-player traffic kept connected mid-attack
            </li>
          </ul>
        </div>

        {/* ── PROTECTED GAMES ── */}
        <div id="protected-games" className="mb-20 scroll-mt-28 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-[#5D9C42] font-bold uppercase tracking-widest">COVERAGE</span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight vx-ink mt-2 mb-4">
            Protected games
          </h2>
          <p className="text-sm vx-muted2 leading-relaxed mb-5">
            The same always-on mitigation applies across every game we host. Explore the service pages below —
            each plan ships DDoS-protected out of the box.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {PROTECTED_GAMES.map((game) => (
              <Link
                key={game.name}
                href={game.href}
                className="group p-5 rounded-2xl vx-card border vx-line hover:border-[#5D9C42]/50 hover:-translate-y-0.5 transition-all shadow-sm flex items-center justify-between gap-3"
              >
                <div>
                  <h3 className="text-sm font-black uppercase vx-ink mb-1 group-hover:text-[#5D9C42] transition-colors">{game.name}</h3>
                  <p className="text-xs vx-muted leading-relaxed">{game.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 vx-muted group-hover:text-[#5D9C42] stroke-[3] flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* ── NO LATENCY PENALTY ── */}
        <div className="mb-20 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-[#5D9C42] font-bold uppercase tracking-widest">PERFORMANCE</span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight vx-ink mt-2 mb-4">
            No latency penalty
          </h2>
          <p className="text-sm vx-muted2 leading-relaxed mb-5">
            Mitigation runs inline at the network edge with low-jitter routing, so protection never slows your
            game down. Legitimate players see no added ping whether you are under attack or not — you get
            enterprise-grade defense without trading away tickrate or responsiveness.
          </p>
          <div className="flex items-center gap-3 p-5 rounded-2xl vx-card border vx-line">
            <div className="w-10 h-10 rounded-2xl bg-[#5D9C42]/15 border border-[#5D9C42]/30 flex items-center justify-center text-[#5D9C42] flex-shrink-0">
              <Gauge className="w-5 h-5" />
            </div>
            <p className="text-xs vx-muted2 leading-relaxed">
              Inline edge filtering with low-jitter routing means no added latency under normal conditions and
              no throttling of legitimate players during an attack.
            </p>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-[#5D9C42] font-bold uppercase tracking-widest">DDOS FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase vx-ink mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs vx-muted mt-1">
              How VexaNode keeps your game servers online during an attack.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="rounded-2xl border vx-line vx-card overflow-hidden transition-all hover:border-[#5D9C42]/35 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-black uppercase tracking-wide vx-ink">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 vx-muted transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#5D9C42]" : ""
                    }`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-5 pb-5 text-xs vx-muted2 leading-relaxed border-t vx-line pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/games?game=minecraft"
              className="inline-flex items-center gap-2 bg-[#5D9C42] hover:bg-[#4E8337] text-white font-black py-3 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(93,156,66,0.35)]"
            >
              Browse Protected Plans
              <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
