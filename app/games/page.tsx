"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight, ChevronDown, Cpu, Zap, Shield, HardDrive,
  Gamepad2, Sparkles, MemoryStick, Server, Check, Users, Clock
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import { ProductSchema } from "../components/SchemaOrg"
import { useCurrency } from "../contexts/CurrencyContext"
import Image from "next/image"

const cycles = [
  { id: "monthly", name: "Monthly", discount: 0 },
  { id: "quarterly", name: "Quarterly", discount: 0.05 },
  { id: "semi-annually", name: "Semi-Annually", discount: 0.12 },
  { id: "annually", name: "Annually", discount: 0.20 },
]

const epycPlans = [
  {
    id: "mc-starter",
    name: "Starter",
    tagline: "First server, zero risk",
    cpu: "100% CPU",
    ram: "2 GB RAM",
    storage: "5 GB NVMe",
    slots: "10 Players",
    basePrice: 39,
    badge: "Budget",
    highlight: false,
  },
  {
    id: "mc-basic",
    name: "Basic",
    tagline: "Small SMP with friends",
    cpu: "200% CPU",
    ram: "4 GB RAM",
    storage: "15 GB NVMe",
    slots: "25 Players",
    basePrice: 79,
    badge: "Popular",
    highlight: true,
  },
  {
    id: "mc-advance",
    name: "Advance",
    tagline: "Modpacks without lag",
    cpu: "400% CPU",
    ram: "8 GB RAM",
    storage: "25 GB NVMe",
    slots: "50 Players",
    basePrice: 159,
    badge: "Best Value",
    highlight: false,
  },
  {
    id: "mc-premium",
    name: "Premium",
    tagline: "Public server, real traffic",
    cpu: "600% CPU",
    ram: "16 GB RAM",
    storage: "40 GB NVMe",
    slots: "100 Players",
    basePrice: 349,
    badge: "Recommended",
    highlight: true,
  },
  {
    id: "mc-epic",
    name: "Epic",
    tagline: "Multi-world networks",
    cpu: "700% CPU",
    ram: "24 GB RAM",
    storage: "50 GB NVMe",
    slots: "150 Players",
    basePrice: 499,
    badge: "Pro Gaming",
    highlight: false,
  },
  {
    id: "mc-legendary",
    name: "Legendary",
    tagline: "High-pop community server",
    cpu: "800% CPU",
    ram: "32 GB RAM",
    storage: "60 GB NVMe",
    slots: "250 Players",
    basePrice: 699,
    badge: "High Performance",
    highlight: false,
  },
  {
    id: "mc-ultimate",
    name: "Ultimate",
    tagline: "Enterprise-scale network",
    cpu: "1000% CPU",
    ram: "64 GB RAM",
    storage: "80 GB NVMe",
    slots: "Unlimited",
    basePrice: 1299,
    badge: "Enterprise Extreme",
    highlight: false,
  },
]

const hardwareFeatures = [
  { icon: Cpu, title: "AMD EPYC Compute", desc: "High core clocks keep chunk generation and entity ticks smooth even under load." },
  { icon: HardDrive, title: "Gen4 NVMe Storage", desc: "World loads and chunk saves happen instantly — no disk I/O bottleneck, ever." },
  { icon: Shield, title: "Enterprise DDoS Shield", desc: "Layer 3, 4 & 7 filtering stops attacks at the edge before they touch your server." },
]

const faqs = [
  { q: "Can I upgrade my plan later?", a: "Yes. Upgrades apply instantly with prorated billing — no downtime, no re-deploying your world." },
  { q: "Do you support modded servers?", a: "All plans support Forge, Fabric, NeoForge, and Paper/Spigot. One-click modpack installer is built into the panel." },
  { q: "Is Bedrock cross-play included?", a: "Yes, every plan ships with Geyser + Floodgate pre-configured so Java and Bedrock players can join the same world." },
  { q: "What happens if my server crashes?", a: "Our watchdog restarts crashed processes automatically, usually within seconds, and logs the crash for you to review." },
]

function PlanCard({ plan, finalPrice, selectedCycle, onDeploy, index }: any) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setSpotlight({ x, y, active: true })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.36) }}
      className="relative group h-full"
    >
      {plan.highlight && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <span className="bg-gradient-to-r from-emerald-500 to-teal-400 text-black text-[9px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-emerald-500/30 whitespace-nowrap">
            {plan.badge}
          </span>
        </div>
      )}

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setSpotlight((s) => ({ ...s, active: false }))}
        className={`relative h-full flex flex-col rounded-2xl p-[1px] transition-all duration-300 ${
          plan.highlight
            ? "bg-gradient-to-b from-emerald-500/50 via-teal-400/20 to-transparent"
            : "bg-gradient-to-b from-white/[0.08] to-transparent group-hover:from-emerald-500/40"
        }`}
      >
        <div
          className="relative flex flex-col h-full rounded-2xl bg-[#0b0c16]/90 backdrop-blur-xl p-6 overflow-hidden transition-transform duration-300 group-hover:-translate-y-1.5"
          style={{
            boxShadow: plan.highlight ? "0 0 40px rgba(16,185,129,0.12)" : undefined,
          }}
        >
          {/* Spotlight hover glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(220px circle at ${spotlight.x}% ${spotlight.y}%, rgba(16,185,129,0.10), transparent 70%)`,
            }}
          />

          <div className="relative z-10 flex flex-col h-full">
            {/* Icon + name */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 transition-all duration-300 group-hover:bg-emerald-500/15 group-hover:border-emerald-500/40 group-hover:scale-105">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-white leading-tight truncate">{plan.name}</h3>
                <p className="text-[11px] text-gray-500 truncate">{plan.tagline}</p>
              </div>
            </div>

            {/* Price */}
            <div className="mb-5">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white orbitron-font">{finalPrice}</span>
                <span className="text-xs font-semibold text-gray-500">/mo</span>
              </div>
              {selectedCycle !== "monthly" && (
                <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider">
                  Billed {selectedCycle}
                </span>
              )}
            </div>

            {/* Specs */}
            <div className="space-y-2.5 mb-6 flex-1">
              {[
                { icon: Cpu, val: plan.cpu },
                { icon: MemoryStick, val: plan.ram },
                { icon: HardDrive, val: plan.storage },
                { icon: Users, val: plan.slots },
              ].map((spec, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <div className="w-5 h-5 rounded-md bg-white/[0.04] flex items-center justify-center shrink-0">
                    <spec.icon className="w-3 h-3 text-emerald-400" />
                  </div>
                  <span className="font-medium">{spec.val}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => onDeploy(plan)}
              className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200 ${
                plan.highlight
                  ? "bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/30"
                  : "bg-white/[0.04] hover:bg-emerald-500 border border-white/[0.08] hover:border-emerald-500 text-zinc-200 hover:text-black"
              }`}
            >
              Deploy Now
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function MinecraftPage() {
  const [selectedCycle, setSelectedCycle] = useState("monthly")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { formatPrice } = useCurrency()

  const cycleIndex = cycles.findIndex((c) => c.id === selectedCycle)

  const calculatePrice = (base: number) => {
    const cycle = cycles.find((c) => c.id === selectedCycle)
    if (!cycle) return base
    const price = base * (1 - cycle.discount)
    return Math.floor(price)
  }

  const handleDeploy = (plan: any) => {
    window.open("https://discord.gg/syHFbR5yBQ", "_blank")
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-emerald-500/30 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-500/[0.04] rounded-full blur-[180px] pointer-events-none will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] bg-teal-500/[0.03] rounded-full blur-[150px] pointer-events-none will-change-transform" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <PageMeta title="AMD EPYC Minecraft Hosting" description="Ultra low-latency Minecraft server hosting powered by high performance AMD EPYC processors and NVMe SSD storage." />
      <ProductSchema
        name="AMD EPYC Minecraft Server Hosting"
        description="High performance Minecraft server hosting on AMD EPYC processors with NVMe SSD storage, instant setup, and DDoS protection."
        lowPrice={39}
        highPrice={1299}
        url="https://vexanode.cloud/games"
        ratingValue={4.9}
        reviewCount={240}
        offerCount={7}
      />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-3 py-1.5 rounded-full border border-emerald-500/20 mb-6 tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              AMD EPYC High-Performance Nodes
            </div>
            <h1 className="text-4xl sm:text-6xl font-black mb-6 orbitron-font leading-[1.1] uppercase tracking-tight">
              Minecraft Hosting, <br />
              <span className="relative inline-block">
                <span className="text-emerald-500 text-neon-glow-brand">Built for Zero Lag</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 rounded-full" />
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Run your SMP, modded pack, or Paper/Spigot network on AMD EPYC cores clocked for
              real-time TPS stability. Unmetered player slots, one-click modpacks, DDoS shield included.
            </p>

            <div className="flex items-center gap-6 mt-8">
              <div>
                <div className="text-2xl font-extrabold text-white orbitron-font">99.9%</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Uptime SLA</div>
              </div>
              <div className="w-px h-8 bg-zinc-800" />
              <div>
                <div className="text-2xl font-extrabold text-white orbitron-font">&lt;60s</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">To First Join</div>
              </div>
              <div className="w-px h-8 bg-zinc-800" />
              <div>
                <div className="text-2xl font-extrabold text-white orbitron-font">L3/L4/L7</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">DDoS Shield</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative flex justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden border border-zinc-800 bg-[#0c0e1a]/60 shadow-2xl">
              <Image src="/minecraft_block.jpg" alt="Minecraft Server" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60" />
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-teal-400 p-4 rounded-2xl shadow-xl text-center z-20"
            >
              <span className="text-xs font-black text-white orbitron-font uppercase tracking-wider">AMD EPYC Powered</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Billing Cycle Selector */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 border-t border-zinc-800/80 pt-8">
          <div>
            <h2 className="text-2xl font-bold orbitron-font uppercase tracking-tight">Choose Your Server</h2>
            <p className="text-gray-400 text-xs mt-1.5">Bedrock + Java cross-play on every plan &bull; Free Pterodactyl panel access.</p>
          </div>

          <div className="w-full md:w-auto">
            <div className="relative flex items-center bg-zinc-950/80 border border-zinc-800 p-1.5 rounded-2xl backdrop-blur-xl">
              <div
                className="absolute top-1.5 bottom-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(16,185,129,0.35)]"
                style={{
                  left: `calc(${(cycleIndex / cycles.length) * 100}% + 6px)`,
                  width: `calc(${100 / cycles.length}% - 12px)`,
                }}
              />
              {cycles.map((cycle) => (
                <button
                  key={cycle.id}
                  onClick={() => setSelectedCycle(cycle.id)}
                  className={`relative z-10 flex-1 px-4 py-2.5 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer text-center ${
                    selectedCycle === cycle.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {cycle.name}
                  {cycle.discount > 0 && (
                    <span className="ml-1 text-[8px] text-emerald-400 font-extrabold">-{Math.round(cycle.discount * 100)}%</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Plans Grid — pure cards, 4 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 pt-3">
          {epycPlans.map((plan, idx) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              finalPrice={formatPrice(calculatePrice(plan.basePrice))}
              selectedCycle={selectedCycle}
              onDeploy={handleDeploy}
              index={idx}
            />
          ))}
        </div>

        {/* Hardware Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
          {hardwareFeatures.map((f, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/[0.08] to-transparent group transition-all duration-300 hover:from-emerald-500/40"
            >
              <div className="bg-[#0b0c16]/70 backdrop-blur-xl rounded-2xl p-6 text-center h-full transition-transform duration-300 group-hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <f.icon className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{f.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Questions</span>
            <h2 className="text-2xl sm:text-3xl font-bold orbitron-font text-white mt-3">
              Before You <span className="text-emerald-500">Deploy</span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-zinc-800 hover:border-emerald-500/30 rounded-xl bg-white/[0.02] transition-colors overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <p className="px-5 pb-4 text-xs text-gray-400 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}