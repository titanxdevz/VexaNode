"use client"

import { motion } from "framer-motion"
import { ShieldAlert, AlertTriangle, CheckCircle2, XCircle, Hammer, Info, Mail, MessageSquare, Zap } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const aupRules = [
  {
    title: "1. Prohibited Content",
    content: "Users may not host or distribute material that is illegal, defamatory, pornographic, or infringing on intellectual property rights. This includes copyrighted software, music, or media shared without explicit authorization.",
    icon: XCircle
  },
  {
    title: "2. Network Abuse",
    content: "Activities intended to disrupt or gain unauthorized access to network services are strictly prohibited. This includes DDoS attacks, port scanning, network sniffing, and spreading viruses or malware.",
    icon: ShieldAlert
  },
  {
    title: "3. Email & Spam",
    content: "Our infrastructure must not be used for sending unsolicited bulk emails (SPAM). We maintain a zero-tolerance policy for mail relay abuse or blacklisting caused by user activities.",
    icon: Mail
  },
  {
    title: "4. Resource Misuse",
    content: "Users must not engage in activities that degrade the performance of our nodes for other customers. This includes excessive CPU/RAM spikes or running crypto-miners on shared hosting resources.",
    icon: Zap
  },
  {
    title: "5. Compliance & Enforcement",
    content: "VexaNode reserves the right to suspend or terminate services immediately upon discovery of AUP violations. Reported abuses are investigated thoroughly and may lead to permanent account bans.",
    icon: Hammer
  }
]

export default function AUP() {
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
            <ShieldAlert className="w-3 h-3" />
            Infrastructure Security
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            Acceptable <span className="text-blue-500">Usage</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed font-medium"
          >
            Clear guidelines on the proper use of our hosting resources to ensure a safe and stable environment for all.
          </motion.p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-4 mb-24">
          {aupRules.map((rule, idx) => (
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

        {/* Report Abuse CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group/cta"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-black leading-tight tracking-tighter uppercase">
              Report Abuse?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
              If you discover any content or activity on our network that violates these terms, please report it to our security team immediately.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:abuse@vexanode.cloud"
                className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-2xl font-black hover:bg-gray-900 transition-all flex items-center justify-center gap-2 text-base shadow-2xl"
              >
                Report Violation
                <Hammer className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto bg-transparent text-black border-2 border-black/10 px-10 py-5 rounded-2xl font-bold hover:bg-black/5 transition-all flex items-center justify-center gap-2 text-base border-2 border-black/20 hover:border-black"
              >
                Security Center
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
