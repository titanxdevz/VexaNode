"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, Book, Server, Gamepad2, Bot, Database, CreditCard, ArrowRight, MessageSquare, ChevronRight } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import Link from "next/link"

const DISCORD_URL = "https://discord.gg/dJpMDfgUQq"

// Each category links to a real, existing route (no dead links).
const categories = [
  { title: "Getting Started", icon: Book, desc: "Set up your account and reach our team if you get stuck.", href: "/contact", tag: "Start here" },
  { title: "Game & Minecraft Hosting", icon: Gamepad2, desc: "Deploy and manage Minecraft and game servers on our panel.", href: "/games", tag: "Games" },
  { title: "Cloud VPS", icon: Server, desc: "Provision and manage your virtual private servers.", href: "/vps", tag: "VPS" },
  { title: "Discord Bots & Lavalink", icon: Bot, desc: "Host always-on Discord bots and Lavalink audio nodes.", href: "/discord", tag: "Bots" },
  { title: "Managed Databases", icon: Database, desc: "Run managed database instances for your projects.", href: "/databases", tag: "Data" },
  { title: "Policies & Billing", icon: CreditCard, desc: "Understand our SLA, acceptable use, refunds and terms.", href: "/sla", tag: "Legal" },
]

// Real resources — every link resolves to an existing page or our Discord.
const resources = [
  { title: "Join our Discord", desc: "Ask questions and get help from the community.", href: DISCORD_URL, external: true },
  { title: "Contact Support", desc: "Reach the VexaNode team directly.", href: "/contact", external: false },
  { title: "Blog & Guides", desc: "Read our latest posts and how-tos.", href: "/blog", external: false },
  { title: "Acceptable Use Policy", desc: "What is and isn't allowed on our network.", href: "/aup", external: false },
]

export default function DocsPage() {
  const [query, setQuery] = useState("")

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return categories
    return categories.filter(
      (c) => c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#d97757]/30">
      <PageMeta title="Documentation" />
      <Navbar />

      {/* DOCS_BODY_PLACEHOLDER */}

      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b vx-line">
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-[#d97757]/10 border border-[#d97757]/25 px-4 py-2 rounded-full mb-8"
          >
            <Book className="w-4 h-4 vx-accent-text" />
            <span className="text-xs font-bold vx-accent-text uppercase tracking-widest">Documentation</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 orbitron-font">
            How can we <span className="vx-accent-text">help you?</span>
          </h1>
          <p className="vx-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Browse help topics by product, or reach our team on Discord. Full written
            guides are being expanded — for anything not covered here, contact support.
          </p>

          {/* Functional client-side filter over the topics below */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 vx-faint w-5 h-5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Filter help topics"
              placeholder="Filter help topics…"
              className="w-full vx-card border vx-line rounded-2xl py-5 pl-14 pr-6 vx-ink placeholder:vx-faint focus:outline-none focus-visible:border-[#d97757]/50 focus-visible:ring-2 focus-visible:ring-[#d97757]/20 transition-all shadow-sm"
            />
          </div>

          {/* Hero CTAs — real links */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="vx-btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold"
            >
              <FaDiscord className="w-4 h-4" /> Join our Discord
            </a>
            <Link
              href="/contact"
              className="vx-solid inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold"
            >
              Contact Support <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Topic categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 orbitron-font vx-ink">Browse by product</h2>
          {filteredCategories.length === 0 ? (
            <p className="vx-muted">No topics match “{query}”. Try a different term or contact support.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((cat) => (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="p-8 rounded-3xl vx-card border vx-line hover:border-[#d97757]/40 hover:shadow-lg transition-all group flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#d97757]/10 flex items-center justify-center group-hover:bg-[#d97757] transition-colors">
                      <cat.icon className="w-6 h-6 vx-accent-text group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest vx-faint">{cat.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 orbitron-font vx-ink">{cat.title}</h3>
                  <p className="text-sm vx-muted leading-relaxed mb-6">{cat.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold vx-accent-text">
                    Open <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Resources + support */}
      <section className="py-20 px-4 vx-bg-alt border-t vx-line">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold mb-8 orbitron-font vx-ink">Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resources.map((r) =>
                r.external ? (
                  <a
                    key={r.title}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-2xl vx-card border vx-line hover:border-[#d97757]/40 hover:shadow-md transition-all group"
                  >
                    <h4 className="font-bold mb-1.5 vx-ink group-hover:vx-accent-text transition-colors">{r.title}</h4>
                    <p className="text-sm vx-muted">{r.desc}</p>
                  </a>
                ) : (
                  <Link
                    key={r.title}
                    href={r.href}
                    className="p-6 rounded-2xl vx-card border vx-line hover:border-[#d97757]/40 hover:shadow-md transition-all group"
                  >
                    <h4 className="font-bold mb-1.5 vx-ink group-hover:vx-accent-text transition-colors">{r.title}</h4>
                    <p className="text-sm vx-muted">{r.desc}</p>
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Support card */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-3xl bg-[#d97757] shadow-lg h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 orbitron-font text-white">Need more help?</h3>
              <p className="text-white/85 text-sm mb-8 leading-relaxed">
                Can&apos;t find what you&apos;re looking for? Reach the VexaNode team on Discord
                or through our contact form and we&apos;ll help you out.
              </p>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full bg-white text-[#c2410c] py-4 rounded-xl font-bold hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Ask on Discord
              </a>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
