"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Server, ExternalLink, Music2, Radio, Waves, ChevronRight, Mic2, Users, Zap } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/image"
import { useState } from "react"

const partners = [
  {
    id: "1234592539324059709",
    name: "Nothing",
    servers: "5,550",
    users: "12M+",
    type: "Music Bot",
    desc: "Crystal-clear audio streaming powered by VexaNode's premium Lavalink infrastructure. Zero buffering, maximum vibe.",
    accent: "#3b82f6",
    logo: "/partners/nothing.webp",
  },
  {
    id: "1380994881731952741",
    name: "Flixo",
    servers: "1,738",
    users: "2,193,720",
    type: "Music Bot",
    desc: "Low-latency music delivery engineered for gaming communities. Drop the beat, not the connection.",
    accent: "#06b6d4",
    logo: "/partners/flixo.webp",
  },
  {
    id: "1124681788070055967",
    name: "Nazha",
    servers: "1,703",
    users: "1,222,847",
    type: "Music Bot",
    desc: "Serving over a million listeners with studio-quality playback and 99.9% uptime across VexaNode nodes.",
    accent: "#a855f7",
    logo: "/partners/nazha.png",
  },
  {
    id: "1452577322128379954",
    name: "Tarang",
    servers: null,
    users: null,
    type: "Music Bot",
    desc: "A premium music companion delivering high-fidelity audio and seamless playback for communities worldwide.",
    accent: "#f59e0b",
    logo: "/partners/tarang.webp",
  }
]

function BotLogo({ partner }: { partner: typeof partners[0] }) {
  return (
    <div className="relative group/logo">
      <div 
        className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover/logo:opacity-20 transition-all duration-700"
        style={{ backgroundColor: partner.accent }}
      />
      <div className="relative w-24 h-24 mx-auto mb-6 transition-transform duration-500 group-hover:scale-110">
        <div className="w-full h-full rounded-2xl overflow-hidden border border-[#2d303d] bg-[#16171d] shadow-2xl flex items-center justify-center">
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
          className="absolute -bottom-1 -right-1 w-7 h-7 rounded-lg border-2 border-[#111218] flex items-center justify-center shadow-lg"
          style={{ background: partner.accent }}
        >
          <Music2 className="w-3.5 h-3.5 text-white" />
        </motion.div>
      </div>
    </div>
  )
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#06070a] text-white selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#111218] text-blue-400 text-[10px] font-bold px-3 py-1 rounded border border-[#1f2129] mb-8 tracking-widest uppercase"
          >
            <Zap className="w-3 h-3 fill-current" />
            Verified Partners
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Ecosystem <span className="text-blue-500">Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed font-medium"
          >
            The world's most innovative Discord applications choose VexaNode for their critical infrastructure needs.
          </motion.p>
        </div>

        {/* Partners Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#0c0d12] border border-[#1f2129] hover:border-[#2d303d] rounded-[2rem] p-8 transition-all duration-300 flex flex-col items-center text-center"
            >
              <BotLogo partner={partner} />

              <div className="mb-4">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <h3 className="text-xl font-bold tracking-tight">{partner.name}</h3>
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  {partner.type}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-[4.5rem]">
                {partner.desc}
              </p>

              {/* Stats Section - Redesigned */}
              {(partner.servers || partner.users) && (
                <div className="w-full flex items-center justify-between p-1 bg-[#111218] rounded-2xl border border-[#1f2129] mb-8">
                  <div className="flex-1 py-3 border-r border-[#1f2129]">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter mb-1">Servers</div>
                    <div className="text-lg font-black tracking-tight">{partner.servers}</div>
                  </div>
                  <div className="flex-1 py-3">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter mb-1">Users</div>
                    <div className="text-lg font-black tracking-tight">{partner.users}</div>
                  </div>
                </div>
              )}

              <a
                href={`https://discord.com/application-directory/${partner.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-[#1f2129] hover:bg-white hover:text-black"
              >
                View on Discord
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Accent Indicator */}
              <div 
                className="absolute inset-x-12 bottom-0 h-[2px] rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: partner.accent }}
              />
            </motion.div>
          ))}
        </div>

        {/* Professional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden group/cta"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-black tracking-tighter leading-none">
              Power Your Ambition.<br />Join VexaNode Elite.
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto mb-10 text-base md:text-lg font-medium">
              Join the league of extraordinary developers building the future of Discord apps on VexaNode.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://discord.gg/syHFbR5yBQ"
                className="bg-black text-white px-10 py-4 rounded-xl font-bold hover:bg-gray-900 transition-all flex items-center gap-2 text-sm"
              >
                Apply Now
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="https://vexanode.cloud"
                className="bg-transparent text-black border-2 border-black/10 px-10 py-4 rounded-xl font-bold hover:bg-black/5 transition-all flex items-center gap-2 text-sm"
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
