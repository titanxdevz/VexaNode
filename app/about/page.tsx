"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Globe, Cpu, Users, Target, MessageSquare, MapPin, Rocket, ArrowRight } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import { PoweredByGrid, PoweredByDisclaimer } from "../components/brand/PoweredBy"
import Link from "next/link"

const stats = [
  { label: "Uptime", value: "Reliable", icon: Zap },
  { label: "Global Nodes", value: "Worldwide", icon: Globe },
  { label: "Active Clients", value: "Growing", icon: Users },
  { label: "Support", value: "Always-On", icon: MessageSquare },
]

const features = [
  {
    title: "Our Mission",
    desc: "At VexaNode, we are dedicated to providing the highest performance hosting solutions for gamers, developers, and businesses — democratizing high-end infrastructure and making it accessible without compromising on quality.",
    icon: Target,
  },
  {
    title: "State-of-the-Art Hardware",
    desc: "We exclusively use enterprise-grade hardware, including AMD EPYC processors and NVMe Gen4 SSDs, ensuring your applications run at peak performance with zero bottlenecks.",
    icon: Cpu,
  },
  {
    title: "DDoS Protection",
    desc: "Security is at our core. Every server is backed by multi-layered DDoS protection capable of mitigating even the most sophisticated attacks, keeping your services online around the clock.",
    icon: Shield,
  },
]

const owner = {
  name: "Ansh Singh",
  role: "Founder & CEO",
  location: "Gorakhpur, Uttar Pradesh, India",
  initials: "AS",
  bio: "VexaNode was founded and is led by Ansh Singh, building high-performance hosting from Gorakhpur, India for a global community of gamers, developers, and businesses.",
}

const regions = ["USA Central", "India West", "Singapore", "Germany", "London", "Tokyo"]

export default function AboutPage() {
  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#d97757]/30 overflow-x-hidden">
      <PageMeta title="About Us" />
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 vx-card vx-accent-text text-[10px] font-bold px-3 py-1 rounded-full border vx-line mb-8 tracking-widest uppercase"
          >
            <MapPin className="w-3 h-3" />
            Est. 2026 · Gorakhpur, India
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-[1.05]"
          >
            Building the backbone of{" "}
            <span className="vx-accent-text">modern hosting.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="vx-muted max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            VexaNode empowers the next generation of digital experiences through
            high-performance, low-latency infrastructure — engineered for gamers,
            developers, and businesses worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <Link href="/contact" className="vx-btn-accent px-7 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all">
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/partners" className="bg-transparent vx-ink border vx-line px-7 py-3 rounded-xl font-bold text-sm hover:vx-hover-ink transition-all">
              Our partners
            </Link>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="vx-bg-alt border-y vx-line py-16 mb-24">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-7 h-7 vx-accent-text mx-auto mb-4" />
                  <div className="text-2xl md:text-3xl font-black mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-xs vx-faint uppercase tracking-widest font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Core Values */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d97757]/10 border border-[#d97757]/25 px-3 py-1 text-[10px] font-bold uppercase tracking-wider vx-accent-text mb-4">
              What drives us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl vx-card border vx-line hover:border-[#d97757]/30 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-[#d97757]/10 border border-[#d97757]/20 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 vx-accent-text" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                <p className="vx-muted leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Founder */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="vx-card border vx-line rounded-[2rem] p-8 md:p-12 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left shadow-sm"
          >
            <div className="relative shrink-0">
              <div className="absolute -inset-1.5 rounded-[1.6rem] bg-gradient-to-br from-[#d97757] to-[#d97757]/20 opacity-60 blur-[2px]" />
              <div className="relative w-28 h-28 rounded-[1.4rem] bg-gradient-to-br from-[#d97757] to-[#b45309] flex items-center justify-center text-white text-3xl font-black tracking-tight shadow-lg">
                {owner.initials}
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest vx-accent-text mb-2">
                <Rocket className="w-3 h-3" /> {owner.role}
              </span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-1">{owner.name}</h3>
              <p className="flex items-center justify-center sm:justify-start gap-1.5 vx-faint text-sm font-medium mb-4">
                <MapPin className="w-3.5 h-3.5" /> {owner.location}
              </p>
              <p className="vx-muted leading-relaxed text-sm max-w-xl">{owner.bio}</p>
            </div>
          </motion.div>
        </section>
        {/* Powered By */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d97757]/10 border border-[#d97757]/25 px-3 py-1 text-[10px] font-bold uppercase tracking-wider vx-accent-text mb-4">
              Our technology
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Powered By</h2>
            <p className="vx-muted max-w-2xl mx-auto text-sm md:text-base">
              Built on trusted technology from industry-leading hardware, cloud, and security providers.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl vx-card border vx-line p-8 md:p-12 shadow-sm"
          >
            <PoweredByGrid />
          </motion.div>

          <PoweredByDisclaimer className="vx-faint text-center mt-8 max-w-3xl mx-auto" />
        </section>

        {/* Global Presence */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="vx-bg-alt border vx-line rounded-[2.5rem] p-8 md:p-14">
            <div className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Global Presence</h2>
              <p className="vx-muted leading-relaxed text-sm md:text-base">
                Our network is designed for one thing: speed. With points of presence in
                major global hubs, we keep latency low for your users wherever they are.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {regions.map((loc, idx) => (
                <motion.div
                  key={loc}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-2.5 vx-card border vx-line rounded-2xl px-4 py-3.5"
                >
                  <Globe className="w-4 h-4 vx-accent-text shrink-0" />
                  <span className="text-sm font-semibold vx-ink">{loc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="vx-card border border-[#d97757]/25 rounded-[2rem] p-12 md:p-16 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-black mb-5 tracking-tight vx-ink">Ready to get started?</h2>
            <p className="vx-muted mb-9 text-base md:text-lg max-w-lg mx-auto">
              Experience high-performance hosting built for your workloads today.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/#pricing" className="vx-btn-accent px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="bg-transparent vx-ink border vx-line hover:vx-hover-ink px-8 py-3.5 rounded-xl font-bold text-sm transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
