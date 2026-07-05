"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileText, Globe, Clock, ChevronRight, Mail, Server, Database } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const sections = [
  {
    title: "1. Data Collection",
    content: "We collect information you provide directly to us, such as when you create an account, subscribe to our services, or contact support. This includes your name, email address, billing information, and any communication logs. We also automatically collect technical data like IP addresses and browser types to enhance security and site performance.",
    icon: Database
  },
  {
    title: "2. Usage of Information",
    content: "Your data is used strictly to provide and improve VexaNode services. This includes processing payments, delivering hosting resources, sending critical service updates, and personalizing your dashboard experience. We do not sell your personal information to third parties for marketing purposes.",
    icon: Server
  },
  {
    title: "3. Infrastructure Security",
    content: "We implement multi-layered security protocols to protect your data. This includes end-to-end encryption for sensitive transmissions, regular security audits, and strict access controls at our datacenter locations. While no system is 100% immune, we maintain industry-leading standards to mitigate risks.",
    icon: Lock
  },
  {
    title: "4. Cookies & Tracking",
    content: "We use essential cookies to maintain your session and remember your preferences. Analytics cookies help us understand how users interact with our platform so we can optimize performance. You can manage cookie settings in your browser, though disabling them may limit certain features.",
    icon: Eye
  },
  {
    title: "5. Third-Party Disclosure",
    content: "We only share data with trusted partners necessary for service delivery, such as payment processors (Stripe/PayPal) and infrastructure providers. These partners are legally bound to protect your data and only use it for the specified service functions.",
    icon: Globe
  }
]

export default function PrivacyPolicy() {
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
            <Shield className="w-3 h-3" />
            Privacy First
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            Privacy <span className="text-blue-500">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed font-medium"
          >
            Your trust is our most valuable asset. Learn how we protect your personal and professional data.
          </motion.p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/5"><Clock className="w-3 h-3 text-blue-500" /> Updated: June 2026</span>
            <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/5"><Lock className="w-3 h-3 text-blue-500" /> GDPR Compliant</span>
          </div>
        </div>

        {/* Content Cards */}
        <div className="space-y-4 mb-24">
          {sections.map((section, idx) => (
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
                  <section.icon className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 tracking-tight text-white">{section.title}</h2>
                  <p className="text-gray-400 leading-relaxed text-base">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legal Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group/cta"
        >
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover/cta:scale-125 transition-transform duration-1000" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight tracking-tighter uppercase">
              Privacy Concerns?
            </h2>
            <p className="text-blue-100/80 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
              If you have any questions regarding your data or our privacy practices, our legal team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:legal@vexanode.cloud"
                className="w-full sm:w-auto bg-white text-blue-600 px-10 py-5 rounded-2xl font-black hover:bg-blue-50 transition-all flex items-center justify-center gap-2 text-base shadow-2xl"
              >
                Email Legal Team
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto bg-transparent text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-base border-2 border-white/20 hover:border-white"
              >
                Contact Support
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
