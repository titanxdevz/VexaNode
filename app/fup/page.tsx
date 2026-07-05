"use client"

import { motion } from "framer-motion"
import { Scale, Info, CheckCircle2, Zap, BarChart3, Database, HardDrive, Cpu, Gauge } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const fupRules = [
  {
    title: "1. Fair Resource Allocation",
    content: "Our systems are designed for fair distribution of CPU and RAM resources. While burst usage is permitted, constant high-load processes that degrade the experience for other users on the same node may be throttled or restricted.",
    icon: Cpu
  },
  {
    title: "2. Bandwidth Utilization",
    content: "Standard plans include 'Unmetered' bandwidth under the condition of fair usage. Activities like public CDN hosting, massive file distribution, or crypto-mining that consume extreme continuous bandwidth are not permitted.",
    icon: Gauge
  },
  {
    title: "3. Storage Management",
    content: "NVMe storage is intended for active service data and files only. Using hosting plans as a remote backup storage or personal cloud drive for non-service related files is a violation of our Fair Usage Policy.",
    icon: HardDrive
  },
  {
    title: "4. Database Performance",
    content: "Included databases are optimized for service-related queries. Massive data scraping or high-frequency automated polling that stresses the global database clusters must be managed via dedicated instances.",
    icon: Database
  },
  {
    title: "5. Optimization Reviews",
    content: "We provide automated alerts if your instance consistently exceeds fair usage thresholds. Our technical team may reach out to help you optimize your workload or suggest a more suitable dedicated tier.",
    icon: BarChart3
  }
]

export default function FUP() {
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
            <Scale className="w-3 h-3" />
            Resource Management
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            Fair Usage <span className="text-blue-500">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed font-medium"
          >
            How we manage global infrastructure resources to ensure peak performance for every VexaNode customer.
          </motion.p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-4 mb-24">
          {fupRules.map((rule, idx) => (
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

        {/* Optimization CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group/cta"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-black leading-tight tracking-tighter uppercase">
              Scale Up?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
              If your application requires guaranteed continuous high-resource allocation, our Dedicated and Enterprise tiers provide the perfect environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/dedicated"
                className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-2xl font-black hover:bg-gray-900 transition-all flex items-center justify-center gap-2 text-base shadow-2xl"
              >
                Explore Dedicated
                <Zap className="w-5 h-5 fill-current" />
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto bg-transparent text-black border-2 border-black/10 px-10 py-5 rounded-2xl font-bold hover:bg-black/5 transition-all flex items-center justify-center gap-2 text-base border-2 border-black/20 hover:border-black"
              >
                Custom Solutions
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
