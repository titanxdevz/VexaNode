"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  ShieldCheck, Zap, Mail, MessageSquare, Twitter, Github, Linkedin,
  User, Code, ChevronRight, Server, Headset, Cpu, MapPin, Clock
} from "lucide-react"
import Image from "next/image"
import { FaDiscord } from "react-icons/fa6"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"

const founder = {
  name: "Ansh Pratap Singh",
  alias: "92LR",
  age: 19,
  location: "Gorakhpur, Uttar Pradesh",
  role: "Founder — Solo-Operated",
  bio: "One person handling every layer of VexaNode — infrastructure, backend, support tickets, and community. No outsourced ops, no ghost team. If something breaks at 3 AM, I'm the one fixing it.",
  email: "anshthedev59@gmail.com",
  socials: {
    discord: "https://discord.gg/syHFbR5yBQ",
    mail: "mailto:anshthedev59@gmail.com",
  },
}

const roles = [
  {
    icon: Server,
    title: "Infrastructure",
    desc: "Provisioning nodes, monitoring uptime, and keeping every server, EPYC or otherwise, running at spec.",
    accent: "#3b82f6",
  },
  {
    icon: Code,
    title: "Development",
    desc: "Building and maintaining the dashboard, bot systems, and control panel end-to-end, line by line.",
    accent: "#10b981",
  },
  {
    icon: Headset,
    title: "Support",
    desc: "Every ticket, every DM, every 'my server won't start' — answered directly, not routed through a queue.",
    accent: "#f59e0b",
  },
  {
    icon: Cpu,
    title: "Operations",
    desc: "Billing, scaling decisions, and datacenter relationships, run lean so pricing stays honest.",
    accent: "#a855f7",
  },
]

function RoleCard({ role, index }: any) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [spot, setSpot] = useState({ x: 50, y: 50 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      ref={cardRef}
      onMouseMove={handleMove}
      className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/[0.08] to-transparent transition-all duration-300 hover:-translate-y-1.5"
      style={{ ["--accent" as any]: role.accent }}
    >
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(135deg, ${role.accent}55, transparent 60%)` }}
      />
      <div className="relative rounded-2xl bg-[#0c0d12] p-6 h-full overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(200px circle at ${spot.x}% ${spot.y}%, ${role.accent}14, transparent 70%)`,
          }}
        />
        <div className="relative z-10">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${role.accent}1a`, borderColor: `${role.accent}33`, color: role.accent }}
          >
            <role.icon className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white mb-2">{role.title}</h3>
          <p className="text-xs text-gray-400 leading-relaxed">{role.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#08090d] text-white selection:bg-blue-500/30">
      <PageMeta title="Meet the Founder" description="VexaNode is built and operated solo by Ansh Pratap Singh (92LR) — infrastructure, development, and support, handled end-to-end." />
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 text-[10px] font-bold px-4 py-1.5 rounded-full border border-blue-500/20 mb-8 tracking-[0.2em] uppercase"
          >
            <User className="w-3.5 h-3.5" />
            One Person, Zero Middlemen
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
          >
            Built By <span className="text-blue-500">One Person</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium"
          >
            No support outsourcing, no anonymous ops team. Just one founder, directly accountable
            for every server VexaNode runs.
          </motion.p>
        </div>

        {/* Founder Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] p-[1px] bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent mb-8"
        >
          <div className="relative bg-[#0c0d12] rounded-[2.5rem] p-8 md:p-14 overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.06] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10">
              {/* Avatar block with ansh.png logo & hover effects */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 group/avatar">
                <div className="absolute inset-0 rounded-[2rem] bg-blue-500/30 blur-2xl opacity-50 group-hover/avatar:opacity-100 group-hover/avatar:scale-110 transition-all duration-500" />
                <div className="relative w-full h-full rounded-[2rem] bg-[#111218] border border-blue-500/30 group-hover/avatar:border-blue-400 group-hover/avatar:shadow-[0_0_30px_rgba(59,130,246,0.4)] overflow-hidden transition-all duration-500 flex items-center justify-center">
                  <Image
                    src="/ansh.png"
                    alt="Ansh Pratap Singh (92LR)"
                    fill
                    priority
                    className="object-cover group-hover/avatar:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[9px] font-black px-3.5 py-1 rounded-full uppercase tracking-widest whitespace-nowrap shadow-lg shadow-blue-500/30 border border-blue-400/30">
                  Solo Founder &bull; 92LR
                </div>
              </div>

              {/* Info */}
              <div className="text-center md:text-left flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-1">
                  <h2 className="text-3xl font-bold tracking-tight">{founder.name}</h2>
                  <span className="text-sm font-bold text-blue-400">@{founder.alias}</span>
                </div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-5">{founder.role}</p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6 text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    {founder.location}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    {founder.age} years old
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xl">{founder.bio}</p>

                <div className="flex justify-center md:justify-start gap-3">
                  <a
                    href={founder.socials.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-[#5865F2] hover:bg-[#5865F2]/10 hover:border-[#5865F2]/30 transition-all"
                  >
                    <FaDiscord className="w-5 h-5" />
                  </a>
                  <a
                    href={founder.socials.mail}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Roles grid */}
        <div className="mb-24">
          <div className="text-center mb-10 mt-16">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">What Solo Actually Means</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-3 tracking-tight">Every Hat, <span className="text-blue-500">One Person</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role, idx) => (
              <RoleCard key={role.title} role={role} index={idx} />
            ))}
          </div>
        </div>

        {/* Culture CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group/cta shadow-2xl shadow-blue-900/20"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight tracking-tighter uppercase">
              Talk Directly To Me
            </h2>
            <p className="text-blue-100/80 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
              No ticket bots, no tiered support queue. Reach out on Discord or email and you&apos;re
              talking to the person who built and runs VexaNode.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://discord.gg/syHFbR5yBQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-blue-600 px-10 py-5 rounded-2xl font-black hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-base shadow-2xl"
              >
                Join on Discord
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${founder.email}`}
                className="w-full sm:w-auto bg-transparent text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-base border-2 border-white/20 hover:border-white"
              >
                Email Me Directly
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}