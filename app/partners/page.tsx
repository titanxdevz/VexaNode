"use client"

import { motion } from "framer-motion"
import { ShieldCheck, ExternalLink, Music2, ChevronRight, Zap } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import Image from "next/image"

const partners = [
  {
    id: "1380994881731952741",
    name: "Flixo",
    type: "Music Bot",
    desc: "Low-latency music delivery engineered for gaming communities. Drop the beat, not the connection.",
    accent: "#06b6d4",
    logo: "/partners/flixo.webp",
  },
  {
    id: "1124681788070055967",
    name: "Nazha",
    type: "Music Bot",
    desc: "Serving a large community of listeners with studio-quality playback and dependable uptime across VexaNode nodes.",
    accent: "#a855f7",
    logo: "/partners/nazha.png",
  },
]

function BotLogo({ partner }: { partner: typeof partners[0] }) {
  return (
    <div className="relative group/logo">
      {/* Soft accent halo */}
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-700"
        style={{ backgroundColor: partner.accent }}
      />
      <div className="relative w-24 h-24 mx-auto mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
        {/* Accent ring */}
        <div
          className="absolute -inset-1 rounded-[1.4rem] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(140deg, ${partner.accent}, transparent 60%)` }}
        />
        <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden border vx-line vx-bg-alt shadow-xl flex items-center justify-center">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -bottom-1.5 -right-1.5 w-8 h-8 rounded-xl border-2 border-[color:var(--vx-card)] flex items-center justify-center shadow-lg"
          style={{ background: partner.accent }}
        >
          <Music2 className="w-4 h-4 text-white" />
        </motion.div>
      </div>
    </div>
  )
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#d97757]/30 overflow-x-hidden">
      <PageMeta title="Our Partners" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 vx-card vx-accent-text text-[10px] font-bold px-3 py-1 rounded border vx-line mb-8 tracking-widest uppercase"
          >
            <Zap className="w-3 h-3 fill-current" />
            Verified Partners
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Ecosystem <span className="vx-accent-text">Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="vx-muted max-w-xl mx-auto text-base md:text-lg leading-relaxed font-medium"
          >
            Innovative Discord applications choose VexaNode for their critical infrastructure needs.
          </motion.p>
        </div>

        {/* Partners Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-32 max-w-3xl mx-auto">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative vx-card border vx-line hover:border-[#d97757]/30 rounded-[2rem] p-8 pt-10 transition-all duration-300 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className="absolute inset-x-0 top-0 h-1 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${partner.accent}, transparent)` }}
              />

              <BotLogo partner={partner} />

              <div className="mb-4">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <h3 className="text-xl font-bold tracking-tight">{partner.name}</h3>
                  <ShieldCheck className="w-4 h-4 vx-accent-text" />
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                  style={{
                    color: partner.accent,
                    borderColor: `${partner.accent}40`,
                    backgroundColor: `${partner.accent}12`,
                  }}
                >
                  <Music2 className="w-3 h-3" />
                  {partner.type}
                </span>
              </div>

              <p className="vx-muted text-sm leading-relaxed mb-8 min-h-[4.5rem]">
                {partner.desc}
              </p>

              <a
                href={`https://discord.com/application-directory/${partner.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 vx-solid hover:opacity-90"
              >
                View on Discord
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Professional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="vx-card border vx-line rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden group/cta"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 vx-ink tracking-tighter leading-none">
              Power Your Ambition.<br />Join VexaNode Elite.
            </h2>
            <p className="vx-muted max-w-lg mx-auto mb-10 text-base md:text-lg font-medium">
              Join the league of developers building on VexaNode.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://discord.gg/dJpMDfgUQq"
                className="vx-btn-accent px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-2 text-sm"
              >
                Apply Now
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="https://vexanode.cloud"
                className="bg-transparent vx-ink border vx-line px-10 py-4 rounded-xl font-bold hover:vx-hover-ink transition-all flex items-center gap-2 text-sm"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
