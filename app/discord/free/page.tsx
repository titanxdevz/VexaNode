"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Cpu, Terminal, Zap, Check, ArrowRight, Sparkles, MessageSquare, Bot, Code, HardDrive, Server } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { PageMeta } from "../../components/PageMeta"
import { ProductSchema } from "../../components/SchemaOrg"
import Link from "next/link"

const freeBotFeatures = [
  { icon: Bot, title: "Free, No Catch", desc: "No card on file, no trial clock. Deploy and keep your bot running at zero cost, indefinitely." },
  { icon: Terminal, title: "Any Runtime You Write In", desc: "Node.js (Discord.js), Python (Discord.py), Java (JDA), Go, and Rust — pre-configured and ready." },
  { icon: Zap, title: "Live in Under 60 Seconds", desc: "Push your code, hit deploy, and your bot is online before you've finished your coffee." },
  { icon: Shield, title: "DDoS Mitigation Built In", desc: "Traffic is filtered at the edge, so your bot stays responsive even under attack." },
  { icon: Cpu, title: "Resources That Are Actually Yours", desc: "Allocated RAM and CPU threads, not oversold — so commands respond without lag spikes." },
  { icon: MessageSquare, title: "A Community That Answers", desc: "Stuck on a config or a crash loop? Our Discord is active around the clock." },
]

const freeSpecs = [
  { icon: Cpu, label: "Memory", value: "512 MB – 1 GB" },
  { icon: HardDrive, label: "Storage", value: "2 GB NVMe SSD" },
  { icon: Zap, label: "CPU", value: "Shared vCore" },
  { icon: Shield, label: "Uptime", value: "99.9% SLA" },
  { icon: Server, label: "Panel", value: "Custom Pterodactyl" },
  { icon: Sparkles, label: "Nodes", value: "US & EU" },
]

const includedChecklist = [
  "Zero cost, zero card required",
  "Instant restart on crash",
  "Custom bot startup command",
  "Free subdomain for your dashboard",
]

export default function FreeBotHostingPage() {
  const handleDeployFree = () => {
    window.open("https://discord.gg/syHFbR5yBQ", "_blank")
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-emerald-500/30 relative overflow-hidden">
      <PageMeta
        title="Free Discord Bot Hosting"
        description="Deploy your Discord bot for free 24/7 with zero cost. Supports Node.js, Python, Java, and Go with 99.9% uptime and DDoS protection."
      />
      <ProductSchema
        name="Free 24/7 Discord Bot Hosting"
        description="Deploy your Discord bot for free 24/7 with zero cost. Supports Node.js, Python, Java, and Go with 99.9% uptime and DDoS protection."
        lowPrice={0}
        highPrice={0}
        url="https://vexanode.cloud/discord/free"
        ratingValue={5.0}
        reviewCount={310}
        offerCount={1}
      />

      {/* Ambient background glow — signature element */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#5865F2]/[0.07] blur-[140px]" />
        <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-[#5865F2]/[0.05] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-[#5865F2]/10 text-[#5865F2] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#5865F2]/20 mb-6 tracking-widest uppercase">
              <FaDiscord className="w-3.5 h-3.5" />
              100% Free, Forever
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold orbitron-font leading-[1.1] mb-6 tracking-tight">
              Your Discord Bot,
              <br />
              <span className="text-[#5865F2] drop-shadow-[0_0_24px_rgba(88,101,242,0.45)]">Online 24/7. For Free.</span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              No credit card, no trial period, no fine print. Deploy your Discord.js, Discord.py,
              or JDA bot in under a minute and let it run — we handle the uptime.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleDeployFree}
                className="group w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-[#5865F2] hover:bg-[#4752C4] text-white transition-all duration-200 text-xs uppercase tracking-wider shadow-lg shadow-[#5865F2]/30 flex items-center justify-center gap-2"
              >
                Deploy Your Bot Free
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                href="/discord"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white/[0.03] border border-zinc-800 hover:border-zinc-700 hover:bg-white/[0.05] text-zinc-300 hover:text-white transition-all text-xs uppercase tracking-wider text-center"
              >
                Compare Premium Plans
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Pricing / Spec Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-[#5865F2]/40 via-[#5865F2]/10 to-transparent shadow-2xl">
            <div className="relative bg-[#0b0c16]/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#5865F2] text-white text-[10px] font-black px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl uppercase tracking-widest">
                Free Forever Tier
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 border-b border-white/[0.06]">
                <div>
                  <span className="text-xs font-bold text-[#5865F2] uppercase tracking-widest">Starter Bot Node</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 orbitron-font">Community Free Plan</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-sm">
                    Built for music bots, moderation bots, economy bots, and your side-project scripts.
                  </p>
                </div>
                <div className="text-left md:text-right shrink-0">
                  <div className="flex items-baseline gap-1 md:justify-end">
                    <span className="text-5xl font-extrabold text-white orbitron-font">₹0</span>
                    <span className="text-sm text-gray-500 font-semibold">/mo</span>
                  </div>
                  <span className="text-[11px] text-gray-500 font-semibold">No credit card needed</span>
                </div>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
                {freeSpecs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="bg-white/[0.02] border border-white/[0.06] hover:border-[#5865F2]/30 p-4 rounded-xl transition-colors"
                  >
                    <spec.icon className="w-3.5 h-3.5 text-[#5865F2] mb-2" />
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-bold">{spec.label}</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {includedChecklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#5865F2]/15 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#5865F2]" strokeWidth={3} />
                    </div>
                    <span className="text-xs text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleDeployFree}
                className="w-full py-4 rounded-xl font-bold bg-[#5865F2] hover:bg-[#4752C4] text-white transition-all text-xs uppercase tracking-widest shadow-lg shadow-[#5865F2]/25"
              >
                Claim Free Bot Hosting
              </button>
            </div>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] font-bold text-[#5865F2] uppercase tracking-widest">Why Free Doesn't Mean Basic</span>
            <h2 className="text-2xl sm:text-4xl font-bold orbitron-font text-white mt-3 mb-3">
              Everything your bot <span className="text-[#5865F2]">actually needs</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">No artificial limits on the free tier — just honest, dedicated resources.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {freeBotFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-white/[0.02] border border-white/[0.06] hover:border-[#5865F2]/30 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.03]"
              >
                <div className="w-11 h-11 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/20 flex items-center justify-center text-[#5865F2] mb-5 group-hover:bg-[#5865F2]/15 group-hover:border-[#5865F2]/40 transition-colors">
                  <feat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supported Languages */}
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-white/[0.08] to-transparent max-w-4xl mx-auto">
          <div className="bg-[#0b0c16]/60 backdrop-blur-xl rounded-3xl p-8 sm:p-10 text-center">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-center gap-2 orbitron-font">
              <Code className="w-5 h-5 text-[#5865F2]" />
              Bring Your Own Stack
            </h3>
            <p className="text-xs text-gray-400 mb-7">Pre-configured containers for every major bot framework — no setup scripts needed.</p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {["Node.js · Discord.js", "Python · Discord.py", "Python · Nextcord", "Java · JDA", "Go · DiscordGo", "Rust · Serenity", "TypeScript"].map((lang, idx) => (
                <span
                  key={idx}
                  className="bg-white/[0.03] border border-white/[0.08] hover:border-[#5865F2]/40 hover:bg-[#5865F2]/[0.06] px-4 py-2 rounded-xl text-xs font-bold text-zinc-300 transition-colors cursor-default"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}