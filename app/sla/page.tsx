"use client"

import { motion } from "framer-motion"
import { HeartHandshake, ShieldCheck, Zap, Clock, ChevronRight, Activity, Server, LifeBuoy } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const slaRules = [
  {
    title: "1. 99.9% Uptime Commitment",
    content: "We guarantee that our core hosting services will be available and reachable from the global internet 99.9% of the time in any given monthly billing cycle. This applies to power, cooling, and physical network connectivity.",
    icon: Activity
  },
  {
    title: "2. Maintenance Protocols",
    content: "Scheduled maintenance is performed during off-peak hours and is communicated via our status page at least 24 hours in advance. Emergency maintenance required for critical security patches is exempt from the uptime calculation.",
    icon: Clock
  },
  {
    title: "3. Service Credits",
    content: "If we fail to meet our 99.9% uptime guarantee, customers are eligible for service credits. 0.1% to 1% downtime qualifies for a 10% credit, while downtime exceeding 1% qualifies for a 25% credit of the monthly service fee.",
    icon: Zap
  },
  {
    title: "4. Support Response Times",
    content: "We aim for 'Elite' support speed. Priority tickets are acknowledged within 15 minutes, while standard inquiries are resolved within 4 hours. Our support team is available 24/7/365 across all channels.",
    icon: LifeBuoy
  },
  {
    title: "5. Exclusions",
    content: "The SLA does not cover issues caused by customer-managed software, third-party upstream providers (e.g., global fiber cuts), or account suspensions due to Acceptable Use Policy violations.",
    icon: ShieldCheck
  }
]

export default function SLA() {
  return (
    <div className="min-h-screen bg-[#08090d] text-white selection:bg-blue-500/30">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-500/20 mb-6 tracking-widest uppercase"
          >
            <HeartHandshake className="w-3 h-3" />
            Reliability Guarantee
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            Service Level <span className="text-blue-500">Agreement</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed font-medium"
          >
            Our professional commitment to uptime, support quality, and infrastructure performance.
          </motion.p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-4 mb-24">
          {slaRules.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-[#0c0d12] border border-[#1f2129] hover:border-[#2d303d] rounded-[2.5rem] p-8 md:p-12 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-500">
                  <rule.icon className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 tracking-tight text-white">{rule.title}</h2>
                  <p className="text-gray-400 leading-relaxed text-base">
                    {rule.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group/cta"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight tracking-tighter uppercase">
              Current Status?
            </h2>
            <p className="text-blue-100/80 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
              We maintain transparent, real-time monitoring of all our global nodes and network infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://status.vexanode.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-blue-600 px-10 py-5 rounded-2xl font-black hover:bg-blue-50 transition-all flex items-center justify-center gap-2 text-base shadow-2xl"
              >
                View Status Page
                <Activity className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto bg-transparent text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-base border-2 border-white/20 hover:border-white"
              >
                Support Hub
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
