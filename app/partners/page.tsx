"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ExternalLink, Music2, Zap, Cpu, Server, Sparkles, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PageMeta } from "../components/PageMeta";
import Image from "next/image";
import Link from "next/link";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const partners = [
  {
    id: "1124681788070055967",
    name: "Nazha",
    type: "Music Bot",
    desc: "Next-generation Discord audio companion powered by VexaNode's high-capacity Lavalink v4 nodes. Delivers studio-quality sound, multi-platform streaming, and 99.95% uptime.",
    accent: "#eab308",
    logo: "/partners/nazha-logo.png",
    banner: "/partners/nazha-banner.png",
    inviteUrl: "https://discord.com/oauth2/authorize?client_id=1124681788070055967&&response_type=code&redirect_uri=https://discord.gg/nazha&permissions=1166553956872000&integration_type=0&scope=applications.commands+bot",
    verified: true,
  },
  {
    id: "1380994881731952741",
    name: "Flixo",
    type: "Music Bot",
    desc: "Low-latency music delivery engineered for gaming communities and Discord guilds. Seamless playback with zero buffering powered by enterprise Ryzen 9 bare-metal.",
    accent: "#71717a",
    logo: "/partners/flixo-logo.png",
    banner: "/partners/flixo-banner.png",
    inviteUrl: "https://discord.com/oauth2/authorize?client_id=1380994881731952741&permissions=7107797346413761&integration_type=0&scope=bot",
    verified: true,
  },
  {
    id: "1506900589429264425",
    name: "Crystal ♫",
    type: "Music Bot",
    desc: "Crystal-clear high-fidelity music streaming bot for active Discord communities. Loaded with advanced audio filters, custom volume controls, and instant playlist parsing.",
    accent: "#8b5cf6",
    logo: "/partners/crystal-logo.png",
    banner: "/partners/crystal-banner.png",
    inviteUrl: "https://discord.com/api/oauth2/authorize?client_id=1506900589429264425&permissions=8&scope=applications.commands%20bot",
    verified: true,
  }
];

const partnerBenefits = [
  {
    icon: Cpu,
    title: "Dedicated Node Sponsorship",
    desc: "Get access to sponsored Ryzen 9 9950X Lavalink and bot hosting nodes to scale your application."
  },
  {
    icon: Server,
    title: "Priority Failover & Uptime",
    desc: "Redundant edge routing and direct multi-node failover guarantees uninterrupted playback for your users."
  },
  {
    icon: Zap,
    title: "Direct Engineer Support",
    desc: "Dedicated private Discord channels with our core infrastructure team for instant response times."
  },
  {
    icon: Sparkles,
    title: "Co-Marketing & Exposure",
    desc: "Featured placement in our ecosystem partner directory, social shoutouts, and official Discord banners."
  }
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-white overflow-x-hidden">
      <PageMeta
        title="Our Partners | VexaNode Ecosystem"
        description="Discover top Discord music bots and applications powered by VexaNode's enterprise Lavalink and cloud infrastructure."
      />
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-36 pb-24 px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Background Mesh */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_25%,#000_70%,transparent_100%)]" />
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-semibold text-emerald-400 mb-6 backdrop-blur-md"
          >
            <Zap className="h-3.5 w-3.5 fill-current" />
            <span>VexaNode Ecosystem Network</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Powering Discord's most <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
              popular music bots.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal"
          >
            Meet the elite music applications hosted on VexaNode's high-speed Ryzen 9 bare-metal and Lavalink audio infrastructure.
          </motion.p>
        </div>

        {/* Partners Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1, ease }}
              className="group relative bg-zinc-950/70 border border-zinc-800/80 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between backdrop-blur-md shadow-xl"
              style={{
                borderColor: undefined,
              }}
            >
              {/* Dynamic Theme Glow aura behind card on hover */}
              <div 
                className="pointer-events-none absolute -inset-2 opacity-0 group-hover:opacity-25 transition-all duration-500 blur-3xl -z-10 rounded-3xl"
                style={{ backgroundColor: partner.accent }}
              />

              {/* Dynamic Theme Border glow line */}
              <div 
                className="pointer-events-none absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                style={{ borderColor: partner.accent }}
              />

              <div>
                {/* Banner Image Header */}
                <div className="relative h-36 w-full bg-zinc-950 overflow-hidden border-b border-zinc-800/60">
                  <Image
                    src={partner.banner}
                    alt={`${partner.name} Banner`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                </div>

                {/* Content Container */}
                <div className="p-6 pt-0 relative z-10">
                  {/* Logo Overlapping Banner */}
                  <div className="relative -mt-10 mb-4 flex justify-between items-end">
                    <div 
                      className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-zinc-950 bg-zinc-950 shadow-2xl transition-all duration-300"
                      style={{
                        boxShadow: `0 0 20px ${partner.accent}40`
                      }}
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>

                    <span 
                      className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border"
                      style={{
                        backgroundColor: `${partner.accent}15`,
                        borderColor: `${partner.accent}40`,
                        color: partner.accent
                      }}
                    >
                      <Music2 className="w-3 h-3" />
                      {partner.type}
                    </span>
                  </div>

                  {/* Title & Verified Badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">{partner.name}</h3>
                    {partner.verified && (
                      <ShieldCheck className="w-4.5 h-4.5" style={{ color: partner.accent }} />
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                    {partner.desc}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 relative z-10">
                <a
                  href={partner.inviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 text-zinc-950 shadow-lg group-hover:scale-[1.02]"
                  style={{
                    backgroundColor: partner.accent,
                    boxShadow: `0 0 25px -5px ${partner.accent}60`
                  }}
                >
                  Add {partner.name} to Discord
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Hover Accent Line */}
              <div 
                className="absolute inset-x-8 bottom-0 h-[3px] rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: partner.accent }}
              />
            </motion.div>
          ))}
        </div>

        {/* Why Partner With Us Section */}
        <div className="mb-24 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 lg:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 mb-3">
              Partner Privileges
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Top Music Bots Choose VexaNode
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400">
              We provide high-impact Discord music applications with node sponsorship, priority support, and multi-region failover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBenefits.map((b, i) => {
              const IconComp = b.icon;
              return (
                <div key={i} className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white pt-1">{b.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partner Application CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="relative rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-zinc-900 via-emerald-950/30 to-zinc-900 p-8 sm:p-14 text-center overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 text-xs font-bold text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              Apply for Partnership & Sponsorship
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to scale your music bot with VexaNode?
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              If your Discord music application serves active communities, apply to join our official partner network today.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3.5 pt-2">
              <a
                href="https://discord.gg/syHFbR5yBQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
              >
                Apply for Partnership
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/lavalink"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900/80 hover:bg-zinc-800 text-white font-bold text-xs px-7 py-3.5 rounded-xl border border-zinc-800 transition-all"
              >
                Explore Infrastructure
              </Link>
            </div>
          </div>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
}
