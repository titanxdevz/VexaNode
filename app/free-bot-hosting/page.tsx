"use client"

import { motion } from "framer-motion"
import { 
  ChevronRight, Cpu, Zap, Shield, HardDrive, 
  Sparkles, Check, Server, Radio, MessageSquare, ArrowUpRight, 
  CheckCircle2, ChevronDown, Rocket, Code2, Globe
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import { CustomIcons } from "../components/CustomIcons"
import Link from "next/link"
import { useState } from "react"

const DISCORD_INVITE = "https://discord.gg/dJpMDfgUQq"

const faqs = [
  {
    q: "Is VexaNode Free Bot Hosting really 100% free?",
    a: "Yes, completely free forever! No credit card, payment details, or hidden fees are required. You get a dedicated Pterodactyl container simply by being a member of our Discord server."
  },
  {
    q: "What hardware specs do I get on the Free Plan?",
    a: "You get 50% vCPU core allocation, 512 MB RAM, 1 GB NVMe SSD storage, unmetered network bandwidth, and full web console access."
  },
  {
    q: "Which bot programming languages are supported?",
    a: "We support Node.js (Discord.js, Eris), Python (discord.py, disnake, hikari), Java (JDA), Go, and more with instant package installation."
  },
  {
    q: "How do I claim my free bot server?",
    a: "1. Join our Discord community at discord.gg/dJpMDfgUQq\n2. Navigate to the #free-bot-hosting channel\n3. Claim your server instantly through our automated bot or ticket system!"
  },
  {
    q: "Can I upgrade to a premium plan later?",
    a: "Yes! If your bot scales and requires more RAM or CPU, you can upgrade seamlessly without losing any bot files or database data."
  }
]

export default function FreeBotHostingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-[#10b981]/30 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.08),transparent_100%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <PageMeta 
        title="100% Free Discord Bot Hosting — 24/7 Free Bot Nodes | VexaNode" 
      />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section (Clean VisiHost Style) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            {/* Small Badge */}
            <div className="inline-block bg-[#10b981]/10 text-[#10b981] text-xs font-semibold px-3 py-1 rounded-md border border-[#10b981]/20 mb-4">
              100% Free Discord Bot Hosting
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black orbitron-font tracking-tight mb-4 text-white">
              Free 24/7 Discord{" "}
              <span className="text-[#10b981]">Bot Hosting</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              Deploy your Discord bot with zero cost. Get 50% vCPU allocation, 512 MB RAM, NVMe storage, and 24/7 uptime on high-speed Pterodactyl container nodes. Claim yours by joining our Discord server!
            </p>

            {/* Sub-links */}
            <div className="text-xs text-gray-500 flex flex-wrap items-center gap-1.5 font-medium">
              <span className="text-gray-400">Also Explore:</span>
              <Link href="/discord" className="text-[#10b981] hover:underline">Premium Bot Hosting</Link>
              <span>•</span>
              <Link href="/lavalink" className="text-[#10b981] hover:underline">Lavalink Audio</Link>
              <span>•</span>
              <Link href="/games" className="text-[#10b981] hover:underline">Game Servers</Link>
              <span>•</span>
              <Link href="/vps" className="text-[#10b981] hover:underline">VPS Hosting</Link>
            </div>
          </div>

          {/* Quick Discord CTA Card */}
          <div className="bg-[#0b0e14]/80 border border-white/[0.08] p-4 rounded-2xl flex items-center gap-4 flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#5865F2]/20 border border-[#5865F2]/40 flex items-center justify-center text-[#5865F2]">
              <CustomIcons.Discord className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">VexaNode Discord</div>
              <div className="text-[10px] text-gray-400">Join to claim free node</div>
            </div>
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>Join</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Free Plan Showcase Card */}
        <div className="max-w-xl mx-auto mb-20">
          <div className="relative rounded-2xl bg-[#0a0d14] border-2 border-[#10b981] shadow-[0_0_35px_rgba(16,185,129,0.18)] p-6 sm:p-7 flex flex-col justify-between">
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#10b981] to-[#059669] text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 fill-black" />
              100% Free Forever
            </div>

            <div>
              {/* Card Header: Icon + Plan Name + Subtitle */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center p-2.5 text-[#10b981] flex-shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <CustomIcons.Discord className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white orbitron-font">Community Free Tier</h3>
                  <span className="text-xs text-[#10b981] font-semibold">24/7 Discord Bot Node</span>
                </div>
              </div>

              {/* Specs Rows (Horizontal Key-Value with Green Icons) */}
              <div className="space-y-3.5 mb-6 bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#10b981]" />
                    CPU Allocation
                  </span>
                  <span className="font-bold text-white">50% Dedicated vCPU</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#10b981]" />
                    Memory (RAM)
                  </span>
                  <span className="font-bold text-white">512 MB RAM</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-400 flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-[#10b981]" />
                    NVMe Storage
                  </span>
                  <span className="font-bold text-white">1 GB NVMe SSD</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#10b981]" />
                    Control Panel
                  </span>
                  <span className="font-bold text-white">Pterodactyl Panel</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Radio className="w-4 h-4 text-[#10b981]" />
                    Uptime SLA
                  </span>
                  <span className="font-bold text-[#10b981]">24/7 Online</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#10b981]" />
                    DDoS Mitigation
                  </span>
                  <span className="font-bold text-white">100Gbps+ Path.net</span>
                </div>
              </div>
            </div>

            {/* Price & Claim Button */}
            <div className="pt-4 border-t border-white/[0.06]">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-xs text-gray-400">Price</span>
                <div className="text-right">
                  <span className="text-3xl font-black text-white orbitron-font">
                    ₹0.00
                  </span>
                  <span className="text-xs text-[#10b981] font-bold ml-1">/ forever</span>
                </div>
              </div>

              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#10b981] hover:bg-[#059669] text-black font-extrabold py-3.5 px-4 rounded-xl text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-[0.98] cursor-pointer"
              >
                <span>Claim on Discord Server</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </a>
              <p className="text-center text-[10px] text-gray-500 mt-2">
                Instant delivery upon joining • No payment details needed
              </p>
            </div>
          </div>
        </div>

        {/* How It Works - 3 Easy Steps */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold orbitron-font text-white mb-2">
              How to Claim Your Free Bot Host
            </h2>
            <p className="text-xs text-gray-400">
              Get your Discord bot online in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: "Join Discord Server",
                desc: "Join our official Discord community via discord.gg/dJpMDfgUQq and verify your account.",
                icon: MessageSquare
              },
              {
                step: "02",
                title: "Claim Free Node",
                desc: "Head over to the #free-bot-hosting channel and claim your free 50% CPU bot container.",
                icon: Sparkles
              },
              {
                step: "03",
                title: "Deploy Your Bot",
                desc: "Login to your Pterodactyl game panel, upload your bot files, and start 24/7 streaming!",
                icon: Rocket
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0b0c12]/60 border border-white/[0.06] hover:border-[#10b981]/30 transition-all relative overflow-hidden"
              >
                <div className="text-3xl font-black text-white/10 orbitron-font absolute top-4 right-4">
                  {item.step}
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] mb-4">
                  <item.icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white orbitron-font mb-2">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold orbitron-font text-white mb-2">
              Everything You Need to Host for Free
            </h2>
            <p className="text-xs text-gray-400">
              Full developer freedom without artificial locks or arbitrary shutdowns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Cpu,
                title: "50% Dedicated vCPU",
                desc: "Smooth execution for Discord.js, Python, or JDA bots without CPU throttling."
              },
              {
                icon: Code2,
                title: "Node.js, Python, Java",
                desc: "One-click package environments for Discord.js v14, Python 3.11+, and Java 21."
              },
              {
                icon: Shield,
                title: "100Gbps DDoS Shield",
                desc: "Enterprise Voxility + Path.net filtering to keep your bot immune to malicious floods."
              },
              {
                icon: HardDrive,
                title: "Fast NVMe Storage",
                desc: "High-speed NVMe storage for your bot files, local SQLite databases, and cache."
              },
              {
                icon: Server,
                title: "Full Pterodactyl Panel",
                desc: "Live web console, file editor, package manager, and real-time container metrics."
              },
              {
                icon: Globe,
                title: "24/7 Discord Community",
                desc: "Get instant assistance and developer support in our active community server."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0b0c12]/60 border border-white/[0.06] hover:border-[#10b981]/30 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#10b981] mb-3">
                  <feature.icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white orbitron-font mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold orbitron-font text-white mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-gray-400">
              Common questions about our Free Bot Hosting tier.
            </p>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="rounded-xl border border-white/[0.06] bg-[#0b0e14]/60 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#10b981]" : ""
                    }`} />
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-4 pb-4 text-xs text-gray-400 leading-relaxed border-t border-white/[0.04] pt-2.5 whitespace-pre-line"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 rounded-2xl bg-[#0a0d14] border border-white/[0.06]">
          <h2 className="text-xl sm:text-2xl font-bold orbitron-font uppercase tracking-tight text-white mb-2">Ready to Launch Your Free Bot?</h2>
          <p className="text-gray-400 text-xs mb-6 max-w-lg mx-auto">Join the Discord server and claim your 24/7 free container in under 2 minutes.</p>
          <div className="flex justify-center gap-3">
            <a 
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#10b981] hover:bg-[#059669] text-black px-6 py-2.5 rounded-xl font-extrabold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] orbitron-font uppercase tracking-wider text-xs cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Join Discord & Claim Free Bot</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
