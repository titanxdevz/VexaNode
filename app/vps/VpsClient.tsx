"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Cpu,
  MemoryStick,
  HardDrive,
  Network,
  Terminal,
  Server,
  ShieldCheck,
  MapPin,
  Globe,
  HelpCircle,
} from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"
import { vpsFaqs } from "./faqs"

const DISCORD_URL = "https://discord.gg/dJpMDfgUQq"

const specs = [
  { icon: Cpu, label: "Processor", value: "AMD Ryzen & EPYC vCPU cores" },
  { icon: MemoryStick, label: "Memory", value: "2 GB – 32 GB DDR4 / DDR5 RAM" },
  { icon: HardDrive, label: "Storage", value: "Gen4 NVMe SSD" },
  { icon: Globe, label: "IP Address", value: "Dedicated IPv4 included" },
  { icon: Network, label: "Network", value: "1 – 10 Gbps uplink" },
  { icon: Terminal, label: "Access", value: "Full root / SSH access" },
  { icon: Server, label: "Virtualization", value: "KVM (fully virtualized)" },
  { icon: ShieldCheck, label: "Security", value: "Always-on DDoS protection" },
]

const locations = [
  {
    flag: "🇮🇳",
    city: "India — Mumbai",
    desc: "Low-ping VPS hosting for users across India and South Asia, ideal for game backends and regional apps.",
  },
  {
    flag: "🇩🇪",
    city: "Germany — Frankfurt",
    desc: "Central European routing with strong connectivity across the EU for fast, GDPR-friendly deployments.",
  },
  {
    flag: "🇺🇸",
    city: "USA",
    desc: "North American coverage for reaching users across the United States and the Americas with low latency.",
  },
]

export default function VPSClient() {
  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#5865F2]/30 relative overflow-hidden font-sans">
      <Navbar />

      <main className="relative z-10 pt-36 pb-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center flex flex-col items-center justify-center min-h-[70vh]"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#5865F2]/10 text-[#5865F2] text-xs font-bold px-4 py-1.5 rounded-full border border-[#5865F2]/25 mb-6 shadow-sm">
            <FaDiscord className="w-4 h-4" />
            <span>Custom VPS Infrastructure & Private Quotes</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black orbitron-font tracking-tight mb-6 vx-ink leading-tight">
            Cloud VPS Hosting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5865F2] to-[#818cf8]">in India</span>
          </h1>

          {/* Subtitle */}
          <p className="vx-muted2 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            High-performance NVMe KVM VPS hosting in India, Germany and the USA — AMD Ryzen power, full root access and always-on DDoS protection. Join our Discord for custom pricing, real-time node availability and location specs.
          </p>

          {/* Discord CTA Card */}
          <div className="max-w-xl mx-auto p-8 rounded-3xl vx-card border border-[#5865F2]/30 shadow-sm backdrop-blur-xl mb-12">
            <div className="w-16 h-16 rounded-2xl bg-[#5865F2]/15 border border-[#5865F2]/30 flex items-center justify-center mx-auto mb-5 text-[#5865F2] shadow-[0_0_20px_rgba(88,101,242,0.3)]">
              <FaDiscord className="w-9 h-9" />
            </div>

            <h3 className="text-xl font-bold vx-ink mb-2 orbitron-font">
              Get Instant VPS Pricing & Specs
            </h3>

            <p className="text-xs vx-muted mb-6 leading-relaxed">
              Open a quick ticket or chat with our network engineers directly on Discord for custom core allocations, RAM upgrades, and direct BGP routing.
            </p>

            <a
              href={DISCORD_URL}
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
            <span className="vx-faint font-medium">Looking for game or bot hosting?</span>
            <Link href="/discord" className="vx-accent-text hover:underline font-bold">
              Discord Bot Hosting
            </Link>
            <span className="vx-faint">•</span>
            <Link href="/games" className="vx-accent-text hover:underline font-bold">
              Minecraft Servers
            </Link>
            <span className="vx-faint">•</span>
            <Link href="/hytale" className="text-amber-400 hover:underline font-bold">
              Hytale Hosting
            </Link>
          </div>
        </motion.div>

        {/* VPS specifications */}
        <section className="mt-24 w-full text-left">
          <h2 className="text-2xl sm:text-3xl font-black orbitron-font tracking-tight mb-3 vx-ink">
            VPS specifications
          </h2>
          <p className="vx-muted2 text-sm max-w-3xl mb-8 leading-relaxed">
            Every VexaNode Cloud VPS runs on enterprise AMD hardware with Gen4 NVMe storage and full KVM virtualization, so you get bare-metal-grade performance with complete control over your server.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="p-5 rounded-2xl vx-card border vx-line backdrop-blur-xl"
              >
                <spec.icon className="w-6 h-6 text-[#5865F2] mb-3" />
                <div className="text-xs font-bold vx-faint uppercase tracking-wider mb-1">
                  {spec.label}
                </div>
                <div className="text-sm font-semibold vx-ink leading-snug">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VPS hosting locations */}
        <section className="mt-20 w-full text-left">
          <h2 className="text-2xl sm:text-3xl font-black orbitron-font tracking-tight mb-3 vx-ink">
            VPS hosting locations: India, Germany &amp; USA
          </h2>
          <p className="vx-muted2 text-sm max-w-3xl mb-8 leading-relaxed">
            Deploy your VPS in the region closest to your users for the lowest latency. We operate nodes across three continents so your applications and game servers stay fast and responsive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="p-6 rounded-2xl vx-card border vx-line backdrop-blur-xl"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl" aria-hidden>{loc.flag}</span>
                  <MapPin className="w-4 h-4 text-[#5865F2]" />
                </div>
                <h3 className="text-base font-bold vx-ink mb-2">{loc.city}</h3>
                <p className="text-xs vx-muted leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Full root access & OS choice */}
        <section className="mt-20 w-full text-left">
          <h2 className="text-2xl sm:text-3xl font-black orbitron-font tracking-tight mb-3 vx-ink">
            Full root access &amp; OS choice
          </h2>
          <div className="p-7 rounded-2xl vx-card border vx-line backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-[#5865F2]" />
              <span className="text-sm font-bold vx-ink">Root / SSH from day one</span>
            </div>
            <p className="vx-muted2 text-sm leading-relaxed mb-4">
              Install and configure whatever you need. Choose from popular Linux distributions like <strong className="vx-ink">Ubuntu</strong>, <strong className="vx-ink">Debian</strong> and <strong className="vx-ink">CentOS / AlmaLinux</strong>, or run <strong className="vx-ink">Windows via RDP</strong>. Full root and SSH access means custom kernels, Docker, and any stack you want.
            </p>
            <p className="vx-muted text-sm leading-relaxed">
              Take on-demand <strong className="vx-ink">snapshots</strong> before big changes and <strong className="vx-ink">reinstall</strong> or roll back your OS at any time straight from the control panel.
            </p>
          </div>
        </section>

        {/* DDoS-protected VPS */}
        <section className="mt-20 w-full text-left">
          <h2 className="text-2xl sm:text-3xl font-black orbitron-font tracking-tight mb-3 vx-ink">
            DDoS-protected VPS
          </h2>
          <div className="p-7 rounded-2xl vx-card border border-[#5865F2]/25 backdrop-blur-xl flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-[#5865F2] shrink-0" />
            <p className="vx-muted2 text-sm leading-relaxed">
              Every VexaNode VPS ships with <strong className="vx-ink">always-on, network-level DDoS mitigation</strong> at no extra cost. Volumetric and protocol attacks are filtered upstream before they reach your server, keeping game backends, bots and web apps online through the noise.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20 w-full text-left">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-[#5865F2]" />
            <h2 className="text-2xl sm:text-3xl font-black orbitron-font tracking-tight vx-ink">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4">
            {vpsFaqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-2xl vx-card border vx-line backdrop-blur-xl"
              >
                <h3 className="text-sm font-bold vx-ink mb-2">{faq.q}</h3>
                <p className="text-sm vx-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752c4] text-white font-extrabold py-3.5 px-7 rounded-2xl text-sm transition-all duration-200 shadow-[0_0_25px_rgba(88,101,242,0.4)] hover:shadow-[0_0_35px_rgba(88,101,242,0.6)] active:scale-[0.98] cursor-pointer"
            >
              <FaDiscord className="w-5 h-5" />
              <span>Get a custom VPS quote on Discord</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

