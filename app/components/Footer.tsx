"use client"

import Image from "next/image"
import { ArrowRight, Github, Twitter, Instagram, Shield, Heart, Radio, ExternalLink } from "lucide-react"
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
      title: "Company & Legal",
      links: [
        { name: "About VexaNode", href: "/about" },
        { name: "Our Partners", href: "/partners" },
        { name: "Terms of Service", href: "/terms-of-services" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Refund Policy", href: "/refund-policy" },
        { name: "Service Level (SLA)", href: "/sla" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Client Billing Area", href: "https://billing.vexanode.gg", external: true },
        { name: "Server Status", href: "https://status.vexanode.cloud", external: true },
        { name: "Developer Docs", href: "/docs" },
        { name: "Affiliate Program", href: "/affiliates" },
        { name: "Contact Support", href: "/contact" },
      ]
    }
  ]

  const socialLinks = [
    { name: "Discord", icon: FaDiscord, href: "https://discord.gg/dJpMDfgUQq", hoverClass: "hover:text-[#5865F2] hover:border-[#5865F2]/40 hover:bg-[#5865F2]/10" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/vexanode", hoverClass: "hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40 hover:bg-[#1DA1F2]/10" },
    { name: "GitHub", icon: Github, href: "https://github.com/titanxdevz/VexaNode", hoverClass: "hover:text-white hover:border-white/40 hover:bg-white/10" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/vexanode", hoverClass: "hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10" },
  ]

  return (
    <footer className="relative bg-[#06080d] pt-16 pb-12 overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient glow blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-[#10b981]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Modern Discord Support Banner */}
        <div className="border border-white/[0.08] bg-gradient-to-r from-[#0a0d16] via-[#090f14] to-[#080d12] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-12 h-12 rounded-xl bg-[#5865F2]/15 border border-[#5865F2]/30 flex items-center justify-center text-[#5865F2] flex-shrink-0 shadow-[0_0_20px_rgba(88,101,242,0.2)]">
              <FaDiscord className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h3 className="text-base font-bold text-white orbitron-font">Need Help or Custom Specs?</h3>
                <span className="text-[10px] bg-[#10b981]/15 text-[#10b981] font-bold px-2 py-0.5 rounded-full uppercase">24/7 Live</span>
              </div>
              <p className="text-xs text-gray-400 mt-1 max-w-xl">
                Join our active Discord community of 1,000+ developers for instant technical support, server monitoring alerts, and community giveaways.
              </p>
            </div>
          </div>

          <a
            href="https://discord.gg/dJpMDfgUQq"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-extrabold text-xs px-6 py-3 rounded-xl uppercase tracking-wider transition-all inline-flex items-center gap-2 flex-shrink-0 shadow-[0_0_20px_rgba(88,101,242,0.3)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>Join Discord Community</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Links & Brand info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">

          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-3">
              <div className="flex items-center gap-2.5">
                <Image src="/logo.png" alt="VexaNode" width={32} height={32} className="h-8 w-auto object-contain" />
                <span className="text-xl font-black text-white orbitron-font tracking-tight uppercase">
                  Vexa<span className="text-[#10b981]">Node</span>
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-xs leading-relaxed mb-6 max-w-sm">
              Next-generation high-frequency cloud hosting infrastructure. Powered by AMD Ryzen 9 9950X, DDR5 ECC RAM, and low-latency Tier-1 uplinks.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon
                return (
                  <a 
                    key={idx} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-9 h-9 rounded-xl bg-[#0b0e14] border border-white/[0.08] flex items-center justify-center text-gray-400 ${social.hoverClass} transition-all duration-200 cursor-pointer`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Nav Links Columns */}
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-bold mb-4 text-xs orbitron-font uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    {link.external ? (
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-xs transition-colors flex items-center gap-1.5 group cursor-pointer"
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                        <ExternalLink className="w-2.5 h-2.5 text-gray-500 group-hover:text-[#10b981] transition-colors" />
                      </a>
                    ) : (
                      <Link 
                        href={link.href} 
                        className="text-gray-400 hover:text-white text-xs transition-colors flex items-center gap-1.5 group cursor-pointer"
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform">{link.name}</span>
                        {(link as any).badge && (
                          <span className="text-[9px] bg-[#10b981]/15 text-[#10b981] font-bold px-1.5 py-0.2 rounded">
                            {(link as any).badge}
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

        {/* Bottom Status & Copyright Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="text-gray-500 text-[11px]">
            &copy; {new Date().getFullYear()} <span className="text-gray-300 font-semibold">VexaNode</span>. All rights reserved.
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
            {/* Live Status Indicator */}
            <a 
              href="https://status.vexanode.cloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.06] hover:border-[#10b981]/30 transition-colors cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
              </span>
              <span className="text-gray-300 text-[11px] font-semibold">All Systems Operational</span>
            </a>

            {/* Quick Legal Links */}
            <div className="flex items-center gap-4 text-[11px] text-gray-500">
              <Link href="/terms-of-services" className="hover:text-white transition-colors cursor-pointer">Terms</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors cursor-pointer">Privacy</Link>
              <Link href="/refund-policy" className="hover:text-white transition-colors cursor-pointer">Refunds</Link>
              <Link href="/sla" className="hover:text-white transition-colors cursor-pointer">SLA</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
