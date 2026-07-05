"use client"

import { motion } from "framer-motion"
import { Scale, ShieldCheck, Gavel, Clock, ChevronRight, MessageSquare, AlertTriangle, HelpCircle } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const terms = [
  {
    title: "1. Service Agreement",
    content: "By accessing or using VexaNode's services, you agree to be bound by these Terms of Service. If you do not agree to all terms and conditions, you must not access the website or use our services. These terms apply to all visitors and users."
  },
  {
    title: "2. User Obligations",
    content: "You are responsible for maintaining the security of your account and any activities that occur under it. You must provide accurate information and notify us immediately of any security breaches. Unauthorized access or use of our systems is strictly prohibited."
  },
  {
    title: "3. Acceptable Use Policy",
    content: "Our infrastructure must not be used for illegal activities, distributing malware, sending spam, or hosting copyrighted material without permission. Violation of our AUP will result in immediate service termination without refund."
  },
  {
    title: "4. Billing & Payments",
    content: "All services are billed in advance on a recurring basis. Payments are processed securely through our authorized gateways. Failure to settle invoices by the due date will lead to service suspension and potential data loss after 7 days."
  },
  {
    title: "5. Service Availability (SLA)",
    content: "While we strive for 100% uptime, standard services come with a 99.9% uptime guarantee. Scheduled maintenance is communicated in advance. We are not liable for outages caused by upstream providers or external network issues beyond our control."
  },
  {
    title: "6. Limitation of Liability",
    content: "VexaNode and its affiliates shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services, including data loss or loss of business profits."
  }
]

export default function TermsOfService() {
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
            <Gavel className="w-3 h-3" />
            Legal Framework
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            Terms of <span className="text-blue-500">Service</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed font-medium"
          >
            Our commitment to transparency and excellence. Please read our service agreement carefully.
          </motion.p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/5"><Clock className="w-3 h-3 text-blue-500" /> Updated: June 2026</span>
            <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/5"><Scale className="w-3 h-3 text-blue-500" /> Binding Contract</span>
          </div>
        </div>

        {/* Quick Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <div className="p-6 rounded-[2rem] bg-[#111218] border border-[#1f2129] flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1 uppercase tracking-tight">Our Promise</h3>
              <p className="text-sm text-gray-500">High-performance infrastructure, extreme reliability, and elite technical support 24/7.</p>
            </div>
          </div>
          <div className="p-6 rounded-[2rem] bg-[#111218] border border-[#1f2129] flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1 uppercase tracking-tight">Your Duty</h3>
              <p className="text-sm text-gray-500">Legal usage of resources, account security, and timely settlement of service invoices.</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-4 mb-24">
          {terms.map((term, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-[#0c0d12] border border-[#1f2129] hover:border-[#2d303d] rounded-[2rem] p-8 md:p-10 transition-all duration-300"
            >
              <h2 className="text-xl font-bold mb-4 tracking-tight text-white">{term.title}</h2>
              <p className="text-gray-400 leading-relaxed text-base">
                {term.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden group"
        >
          <div className="relative z-10">
            <div className="w-16 h-16 bg-black/5 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-black tracking-tighter leading-none uppercase">
              Need Clarification?
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto mb-10 text-base font-medium">
              Our legal and operations teams are available to help you understand every aspect of our service agreement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-black text-white px-10 py-4 rounded-xl font-bold hover:bg-gray-900 transition-all flex items-center gap-2 text-sm uppercase tracking-widest"
              >
                Message Support
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://discord.gg/syHFbR5yBQ"
                className="bg-transparent text-black border-2 border-black/10 px-10 py-4 rounded-xl font-bold hover:bg-black/5 transition-all flex items-center gap-2 text-sm uppercase tracking-widest"
              >
                Join Discord
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
