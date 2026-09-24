"use client"

import Image from "next/image"
import { Github, Twitter, Instagram, ExternalLink } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import Link from "next/link"

interface FooterLink {
  name: string
  href: string
  badge?: string
  external?: boolean
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

export default function Footer() {
  const sections: FooterSection[] = [
    {
      title: "Services",
      links: [
        { name: "Discord Bot Hosting", href: "/discord" },
        { name: "Free Bot Hosting", href: "/free-bot-hosting", badge: "Free" },
        { name: "Lavalink Audio Nodes", href: "/lavalink" },
        { name: "Minecraft Servers", href: "/games?game=minecraft" },
        { name: "SA-MP Hosting", href: "/samp", badge: "New" },
        { name: "Managed Databases", href: "/databases" },
      ]
    },
    {
      title: "Cloud & VPS",
      links: [
        { name: "India VPS (Mumbai/Delhi)", href: "/vps" },
        { name: "USA Cloud VPS (Miami)", href: "/vps" },
        { name: "Germany Ryzen VPS", href: "/vps" },
        { name: "Singapore Low-Ping VPS", href: "/vps" },
        { name: "Dedicated Bare Metal", href: "/dedicated" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About VexaNode", href: "/about" },
        { name: "Our Partners", href: "/partners" },
        { name: "Affiliate Program", href: "/affiliates" },
        { name: "Contact Support", href: "/contact" },
        { name: "Developer Docs", href: "/docs" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Client Area", href: "https://billing.vexanode.gg", external: true },
        { name: "Server Status", href: "https://status.vexanode.cloud", external: true },
        { name: "Blog & Guides", href: "/blog" },
        { name: "Hytale Hosting", href: "/hytale", badge: "New" },
        { name: "Free Hosting Policy", href: "/free-bot-hosting-policy" },
      ]
    }
  ]

  const socials = [
    { name: "Discord", icon: FaDiscord, href: "https://discord.gg/dJpMDfgUQq" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/vexanode" },
    { name: "GitHub", icon: Github, href: "https://github.com/titanxdevz/VexaNode" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/vexanode" },
  ]

  return (
    <footer className="vx-bg-alt border-t vx-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 py-14 lg:py-16">

          {/* Brand Column — spans 2 on large */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="VexaNode" width={28} height={28} className="h-7 w-7 object-contain" />
              <span className="text-base font-extrabold vx-ink tracking-tight">
                Vexa<span className="vx-accent-text">Node</span>
              </span>
            </Link>

            <p className="text-[13px] vx-muted leading-relaxed max-w-xs mb-5">
              High-frequency cloud hosting on AMD Ryzen 9 &amp; EPYC processors
              with NVMe storage and enterprise DDoS protection.
            </p>

            {/* Socials — simple row */}
            <div className="flex gap-2">
              {socials.map((s, i) => {
                const Icon = s.icon
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-8 h-8 rounded-lg border vx-line flex items-center justify-center vx-faint vx-hover-ink hover:border-[color:var(--vx-accent)] transition-colors duration-150"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link Columns */}
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-[11px] font-bold vx-muted2 uppercase tracking-widest mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] vx-muted vx-hover-ink transition-colors duration-150 inline-flex items-center gap-1"
                      >
                        {link.name}
                        <ExternalLink className="w-2.5 h-2.5 vx-faint" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[13px] vx-muted vx-hover-ink transition-colors duration-150 inline-flex items-center gap-1.5"
                      >
                        {link.name}
                        {link.badge && (
                          <span className="text-[9px] font-bold bg-[#d97757]/10 vx-accent-text border border-[#d97757]/25 px-1.5 py-px rounded">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom Bar ── */}
        <div className="py-5 border-t vx-line flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-[11px] vx-faint">
            &copy; {new Date().getFullYear()} VexaNode. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            {/* Status page link (label only — no live-status assertion) */}
            <a
              href="https://status.vexanode.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] vx-muted vx-hover-ink transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--vx-accent)]" />
              Server Status
            </a>

            {/* Legal links */}
            <div className="flex items-center gap-3.5 text-[11px] vx-faint">
              <Link href="/terms-of-services" className="vx-hover-ink transition-colors">Terms</Link>
              <Link href="/privacy-policy" className="vx-hover-ink transition-colors">Privacy</Link>
              <Link href="/refund-policy" className="vx-hover-ink transition-colors">Refunds</Link>
              <Link href="/sla" className="vx-hover-ink transition-colors">SLA</Link>
              <Link href="/aup" className="vx-hover-ink transition-colors">AUP</Link>
              <Link href="/fup" className="vx-hover-ink transition-colors">FUP</Link>
            </div>
          </div>
        </div>

        {/* ── Trademark disclaimer ── */}
        <div className="pb-6">
          <p className="text-[10.5px] leading-relaxed vx-faint max-w-3xl">
            All trademarks and logos belong to their respective owners. VexaNode
            is not affiliated with or endorsed by them.
          </p>
        </div>

      </div>
    </footer>
  )
}
