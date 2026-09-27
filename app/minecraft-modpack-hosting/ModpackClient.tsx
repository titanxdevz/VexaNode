"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight, ChevronDown, Cpu, Shield, Zap,
  Package, Boxes, Layers, MemoryStick
} from "lucide-react"
import Link from "next/link"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { modpackFaqs as faqs } from "./faqs"

interface RamRow {
  pack: string
  mods: string
  ram: string
}

const RAM_ROWS: RamRow[] = [
  { pack: "Light pack", mods: "Under 50 mods", ram: "4 GB" },
  { pack: "Medium pack", mods: "50 - 150 mods", ram: "6 GB" },
  { pack: "Heavy pack / All the Mods", mods: "150+ mods", ram: "8 - 12 GB" },
  { pack: "RLCraft", mods: "Exploration / hardcore", ram: "6 - 8 GB" },
]

interface Loader {
  name: string
  desc: string
}

const LOADERS: Loader[] = [
  { name: "Forge", desc: "The classic loader powering the largest kitchen-sink packs like All the Mods and FTB." },
  { name: "Fabric", desc: "Lightweight, high-performance loader ideal for optimization and tech packs." },
  { name: "NeoForge", desc: "The modern Forge fork with fast 1.20.5+ and 1.21 modpack support." },
  { name: "Quilt", desc: "A Fabric-compatible loader with extra hooks for newer mod ecosystems." },
]

export default function ModpackClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleDeploy = () => {
    window.open("https://billing.vexanode.gg", "_blank")
  }

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
                1-CLICK INSTALLS
              </span>
              <span className="vx-faint">|</span>
              <span className="font-mono text-[11px] vx-muted2 font-bold tracking-wider uppercase">
                CURSEFORGE • MODRINTH
              </span>
              <span className="vx-faint">|</span>
              <span className="text-[10px] font-mono font-bold text-[#5D9C42] uppercase tracking-widest">
                AMD RYZEN 9
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight vx-ink leading-[1.05] mb-5">
              <span className="text-[#5D9C42] drop-shadow-[0_2px_20px_rgba(93,156,66,0.35)]">Minecraft</span>{" "}
              <br className="hidden sm:inline" />
              Modpack Hosting
            </h1>

            <p className="vx-muted2 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Launch any CurseForge or Modrinth pack in one click. High single-core AMD Ryzen 9 frequency
              keeps entity-heavy packs like All the Mods, RLCraft, and Create running at a stable 20 TPS,
              backed by Gen4 NVMe and always-on DDoS protection. Forge, Fabric, NeoForge, and Quilt all supported.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDeploy}
                className="inline-flex items-center gap-2 bg-[#5D9C42] hover:bg-[#4E8337] text-white font-black py-3 px-5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(93,156,66,0.35)] cursor-pointer active:scale-[0.98]"
              >
                Deploy a Modpack Server
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </button>
              <Link
                href="/games?game=minecraft"
                className="inline-flex items-center gap-2 vx-bg-alt hover:bg-[#5D9C42] hover:text-white vx-ink border border-[#5D9C42]/40 hover:border-[#5D9C42] font-black py-3 px-5 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                View Minecraft Plans
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── 1-CLICK INSTALLS ── */}
        <div id="modpacks" className="mb-20 scroll-mt-28 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-[#5D9C42] font-bold uppercase tracking-widest">STEP 01</span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight vx-ink mt-2 mb-4">
            1-Click CurseForge &amp; Modrinth Installs
          </h2>
          <p className="text-sm vx-muted2 leading-relaxed mb-5">
            Skip manual JAR uploads and dependency hunting. Paste a CurseForge or Modrinth pack ID or URL
            into the panel, choose the version, and VexaNode downloads the correct mod loader and every mod
            automatically. Swap between packs whenever you like without rebuilding your server.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl vx-card border vx-line flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#5D9C42]/15 border border-[#5D9C42]/30 flex items-center justify-center text-[#5D9C42] flex-shrink-0">
                <Package className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase vx-ink mb-1">CurseForge Packs</h3>
                <p className="text-xs vx-muted leading-relaxed">One-click imports for All the Mods, FTB, Create, and thousands more CurseForge packs.</p>
              </div>
            </div>
            <div className="p-5 rounded-2xl vx-card border vx-line flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#5D9C42]/15 border border-[#5D9C42]/30 flex items-center justify-center text-[#5D9C42] flex-shrink-0">
                <Boxes className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase vx-ink mb-1">Modrinth Packs</h3>
                <p className="text-xs vx-muted leading-relaxed">Direct Modrinth pack installs with automatic loader and version matching.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RAM GUIDANCE TABLE ── */}
        <div className="mb-20 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-[#5D9C42] font-bold uppercase tracking-widest">RESOURCE PLANNING</span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight vx-ink mt-2 mb-4">
            How much RAM does a modpack server need?
          </h2>
          <p className="text-sm vx-muted2 leading-relaxed mb-5">
            Modpacks are memory-hungry — the right allocation prevents lag spikes and out-of-memory crashes.
            Use this as a starting point, then scale up as your pack or player count grows. More concurrent
            players raises every figure below.
          </p>
          <div className="overflow-x-auto rounded-3xl border vx-line vx-card shadow-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[520px]">
              <thead>
                <tr className="vx-bg-alt">
                  <th className="p-4 font-black uppercase tracking-wide vx-muted2">Pack size</th>
                  <th className="p-4 font-black uppercase tracking-wide vx-muted2">Mod count</th>
                  <th className="p-4 font-black uppercase tracking-wide text-[#5D9C42]">Recommended RAM</th>
                </tr>
              </thead>
              <tbody className="vx-ink">
                {RAM_ROWS.map((row) => (
                  <tr key={row.pack} className="border-t vx-line">
                    <td className="p-4 font-bold vx-muted2">{row.pack}</td>
                    <td className="p-4 font-mono">{row.mods}</td>
                    <td className="p-4 font-mono font-bold text-[#5D9C42]">{row.ram}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs vx-muted mt-3 flex items-center gap-2">
            <MemoryStick className="w-3.5 h-3.5 text-[#5D9C42]" />
            Need more headroom? You can upgrade RAM at any time without losing your world or configs.
          </p>
        </div>

        {/* ── LOADER SUPPORT ── */}
        <div className="mb-20 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-[#5D9C42] font-bold uppercase tracking-widest">MOD LOADERS</span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight vx-ink mt-2 mb-4">
            Forge, Fabric, NeoForge &amp; Quilt support
          </h2>
          <p className="text-sm vx-muted2 leading-relaxed mb-5">
            Whatever your pack targets, we run it. The panel switches loaders and Java versions in one click,
            so you can move between Forge kitchen-sink packs and lightweight Fabric optimization packs without
            rebuilding your server.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {LOADERS.map((loader) => (
              <div key={loader.name} className="p-5 rounded-2xl vx-card border vx-line flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#5D9C42]/15 border border-[#5D9C42]/30 flex items-center justify-center text-[#5D9C42] flex-shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase vx-ink mb-1">{loader.name}</h3>
                  <p className="text-xs vx-muted leading-relaxed">{loader.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DDOS & INSTANT SETUP ── */}
        <div className="mb-20 max-w-4xl mx-auto">
          <span className="text-xs font-mono text-[#5D9C42] font-bold uppercase tracking-widest">PROTECTION</span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight vx-ink mt-2 mb-4">
            DDoS protection &amp; instant setup
          </h2>
          <p className="text-sm vx-muted2 leading-relaxed mb-5">
            Every modpack server sits behind always-on, game-aware DDoS mitigation and deploys the moment you
            check out. Volumetric L3/L4 floods are absorbed at the edge while Minecraft-specific L7 abuse —
            BungeeCord spoof joins, null-ping packets, and UDP reflection — is dropped before it reaches your
            tick loop, with no added latency and no add-on fee.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl vx-card border vx-line">
              <Shield className="w-5 h-5 text-[#5D9C42] mb-3" />
              <h3 className="text-sm font-black uppercase vx-ink mb-1">Always-On Mitigation</h3>
              <p className="text-xs vx-muted leading-relaxed">Multi-Tbps scrubbing shields every node — included free.</p>
            </div>
            <div className="p-5 rounded-2xl vx-card border vx-line">
              <Zap className="w-5 h-5 text-[#5D9C42] mb-3" />
              <h3 className="text-sm font-black uppercase vx-ink mb-1">Instant Setup</h3>
              <p className="text-xs vx-muted leading-relaxed">Automatic provisioning with a dedicated port and SFTP in moments.</p>
            </div>
            <div className="p-5 rounded-2xl vx-card border vx-line">
              <Cpu className="w-5 h-5 text-[#5D9C42] mb-3" />
              <h3 className="text-sm font-black uppercase vx-ink mb-1">AMD Ryzen 9 CPUs</h3>
              <p className="text-xs vx-muted leading-relaxed">High single-core frequency keeps entity-heavy packs at 20 TPS.</p>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-[#5D9C42] font-bold uppercase tracking-widest">MODPACK FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase vx-ink mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-xs vx-muted mt-1">
              Everything you need to know about hosting modded Minecraft with VexaNode.
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
              Browse Minecraft Plans
              <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
