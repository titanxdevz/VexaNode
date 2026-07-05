"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Globe, Cpu, Users, Award, Target, MessageSquare } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { label: "Uptime", value: "99.9%", icon: Zap },
    { label: "Global Nodes", value: "12+", icon: Globe },
    { label: "Active Clients", value: "2,500+", icon: Users },
    { label: "Support", value: "24/7", icon: MessageSquare },
  ]

  const features = [
    {
      title: "Our Mission",
      desc: "At VexaNode, we are dedicated to providing the highest performance hosting solutions for gamers, developers, and businesses. Our mission is to democratize high-end infrastructure, making it accessible and affordable without compromising on quality.",
      icon: Target,
      color: "blue"
    },
    {
      title: "State-of-the-Art Hardware",
      desc: "We exclusively use Enterprise-grade hardware, including AMD EPYC processors and NVMe Gen4 SSDs, ensuring your applications run at peak performance with zero bottlenecks.",
      icon: Cpu,
      color: "purple"
    },
    {
      title: "DDoS Protection",
      desc: "Security is at our core. Every server is backed by multi-layered DDoS protection, capable of mitigating even the most sophisticated attacks, keeping your services online 24/7.",
      icon: Shield,
      color: "emerald"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white selection:bg-[#00a3ff]/30">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 orbitron-font leading-tight">
                About <span className="text-[#00a3ff] text-neon-glow-brand">VexaNode</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Empowering the next generation of digital experiences through high-performance, low-latency infrastructure.
              </p>
              <div className="flex gap-4">
                <div className="bg-[#00a3ff]/10 border border-[#00a3ff]/20 px-6 py-3 rounded-2xl">
                  <span className="text-[#00a3ff] font-bold">Founded in 2026</span>
                </div>
                <div className="bg-[#00a3ff]/5 border border-white/5 px-6 py-3 rounded-2xl">
                  <span className="text-gray-300 font-bold">Global Infrastructure</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#00a3ff]/10"
            >
              <Image
                src="/about/datacenter.png"
                alt="VexaNode Data Center"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent opacity-60" />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white/[0.02] border-y border-white/5 py-16 mb-24">
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
                  <stat.icon className="w-8 h-8 text-[#00a3ff] mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold mb-1 orbitron-font">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 orbitron-font">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#00a3ff] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-[#0b0c16]/30 backdrop-blur-md border border-white/10 hover:border-[#00a3ff]/30 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-[#00a3ff]/10 border border-[#00a3ff]/20 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-[#00a3ff]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Network Map / Global Presence */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="bg-gradient-to-br from-blue-900/10 to-[#00a3ff]/10 border border-white/10 rounded-[40px] p-8 md:p-16 overflow-hidden relative">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 orbitron-font">Global Presence</h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Our network is designed for one thing: speed. With points of presence in major global hubs, we ensure your users experience the lowest possible latency, no matter where they are.
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  {["USA Central", "India West", "Singapore", "Germany", "London", "Tokyo"].map((loc) => (
                    <li key={loc} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#00a3ff] rounded-full shadow-[0_0_8px_rgba(0,163,255,0.5)]" />
                      {loc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about/network.png"
                  alt="Global Network"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="bg-[#00a3ff]/10 border border-[#00a3ff]/25 rounded-3xl p-12 shadow-[0_0_50px_rgba(0,163,255,0.15)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 orbitron-font text-white">Ready to join the elite?</h2>
            <p className="text-white/60 mb-8 text-lg">Experience the pinnacle of hosting performance today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#00a3ff] text-white hover:bg-[#1a6e94] px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,163,255,0.3)]">
                Get Started
              </button>
              <button className="bg-transparent text-white border border-white/20 hover:border-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
