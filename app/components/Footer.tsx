"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Github, Twitter, Instagram } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
  const sections = [
    {
      title: "Hosting",
      links: [
        { name: "Free Discord Hosting", href: "/discord/free" },
        { name: "Paid Bot Hosting", href: "/discord" },
        { name: "Lavalink Hosting", href: "/lavalink" },
        { name: "Minecraft Hosting", href: "/games?game=minecraft" },
      ]
    },
    {
      title: "VPS Hosting",
      links: [
        { name: "USA Miami VPS", href: "/vps/miami" },
        { name: "USA Utah VPS", href: "/vps/utah" },
        { name: "Germany VPS", href: "/vps/germany" },
        { name: "India VPS", href: "/vps/india" },
        { name: "Singapore VPS", href: "/vps/singapore" },
      ]
    },
    {
      title: "Dedicated Servers",
      links: [
        { name: "Utah VDS Slices", href: "/dedicated/utah" },
        { name: "Miami Dedicated VEXA", href: "/dedicated/miami" },
        { name: "All Dedicated Servers", href: "/dedicated" },
      ]
    },
    {
      title: "Company & Legal",
      links: [
        { name: "Client Area", href: "https://billing.vexanode.cloud" },
        { name: "Our Partners", href: "/partners" },
        { name: "Terms of Service", href: "/terms-of-services" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Status Page", href: "https://status.vexanode.cloud" },
      ]
    }
  ]

  const socialLinks = [
    { icon: FaDiscord, href: "https://discord.gg/syHFbR5yBQ", color: "hover:text-[#5865F2] hover:bg-[#5865F2]/10 hover:border-[#5865F2]/50" },
    { icon: Twitter, href: "https://twitter.com/vexanode", color: "hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2]/50" },
    { icon: Github, href: "https://github.com/vexanode", color: "hover:text-white hover:bg-white/10 hover:border-white/50" },
    { icon: Instagram, href: "https://instagram.com/vexanode", color: "hover:text-[#E4405F] hover:bg-[#E4405F]/10 hover:border-[#E4405F]/50" },
  ]

  return (
    <footer className="relative bg-zinc-950 pt-20 pb-10 overflow-hidden border-t border-zinc-900">
      {/* Background ambient glow blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Discord Join Banner */}
        <div className="border border-zinc-800 bg-zinc-900/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-12 h-12 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/20 flex items-center justify-center text-[#5865F2]">
              <FaDiscord className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">Need some help?</h3>
              <p className="text-xs text-zinc-400 mt-0.5">Join our Discord server to connect with our active support community and get instant help.</p>
            </div>
          </div>
          <a
            href="https://discord.gg/syHFbR5yBQ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-black text-xs px-6 py-3 rounded-lg uppercase tracking-wider transition-all inline-flex items-center gap-2 flex-shrink-0"
          >
            <span>Join our Discord</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Links & Brand info */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">

          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="VexaNode" width={32} height={32} className="h-8 w-auto" />
                <span className="text-lg font-black text-white orbitron-font tracking-tight uppercase">
                  Vexa<span className="text-emerald-400">Node</span>
                </span>
              </div>
            </Link>
            <p className="text-zinc-400 text-xs leading-relaxed mb-6 max-w-sm">
              Premium high-performance cloud hosting nodes globally. Engineered with AMD Ryzen &amp; EPYC CPUs, DDR5 RAM, and low-latency networks.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className={`w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 ${social.color} transition-all`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-bold mb-4 text-[10px] uppercase tracking-widest">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link href={link.href} className="text-zinc-400 hover:text-white text-xs transition-colors flex items-center gap-1.5 group">
                      <div className="w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-500 text-[10px] uppercase tracking-wider">
            &copy; {new Date().getFullYear()} VexaNode. All rights reserved.
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
              <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider">All Systems Operational</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] text-zinc-500 uppercase tracking-widest">
              <Link href="/terms-of-services" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Support</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
