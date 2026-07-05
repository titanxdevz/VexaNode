"use client"

import { motion } from "framer-motion"
import { CreditCard, RotateCcw, AlertCircle, CheckCircle2, ShieldCheck, Mail, MessageSquare, Clock, Landmark, Zap, Server } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const refundRules = [
  {
    title: "1. 24-Hour Trial Period (Game Server & Bot Hosting)",
    content: "We offer a 24-hour money-back guarantee exclusively for first-time customers on Game Server and Bot Hosting services. If you are not satisfied with the performance or service quality within the first 24 hours, you can request a full refund. This trial period does not apply to VPS services.",
    icon: Zap
  },
  {
    title: "2. VPS Refund Policy - Service Issues",
    content: "For VPS services, refunds are only available if a service issue originates from our infrastructure or configuration. If our team identifies and confirms a failure on our end, a full refund or service credit will be issued. However, refunds cannot be processed for cancellations without technical justification or performance issues caused by customer configuration.",
    icon: Server
  },
  {
    title: "3. Eligibility Criteria",
    content: "Refunds are only eligible for new service deployments with valid refund claims. Renewals, domain registrations, licenses, and services with no documented issues are strictly non-refundable due to the nature of resource allocation and service consumption.",
    icon: CheckCircle2
  },
  {
    title: "4. Cryptopayments & Credits",
    content: "Payments made via Cryptocurrency (BTC, LTC, etc.) are non-refundable to the original payment method but may be eligible for credit to your VexaNode account balance at our discretion.",
    icon: Landmark
  },
  {
    title: "5. Abuse & Violations",
    content: "Services suspended or terminated due to violations of our Acceptable Use Policy (AUP) or Terms of Service are not eligible for any refund, regardless of the time remaining in the billing cycle.",
    icon: AlertCircle
  },
  {
    title: "6. Processing Time",
    content: "Eligible refund requests are processed within 3-5 business days after verification. Depending on your bank or payment provider, it may take an additional 5-10 business days for the funds to appear in your account.",
    icon: RotateCcw
  },
  {
    title: "7. Service Credit Alternative",
    content: "Instead of a refund, we may offer account credit for the remaining balance or service duration. This is often faster to process and provides immediate value for your next billing cycle.",
    icon: ShieldCheck
  }
]

export default function RefundPolicy() {
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
            <CreditCard className="w-3 h-3" />
            Billing Transparency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            Refund <span className="text-blue-500">Policy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed font-medium"
          >
            Our transparent refund guidelines covering Game Servers, Bot Hosting, VPS, and other services. We stand behind our infrastructure.
          </motion.p>
        </div>

        {/* Quick Reference Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-6 mb-16 backdrop-blur"
        >
          <h3 className="text-lg font-bold mb-4 text-blue-400">Quick Reference:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex gap-3">
              <Zap className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <div>
                <p className="font-semibold">Game Servers & Bots</p>
                <p className="text-gray-400">24-hour refund guarantee</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Server className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <div>
                <p className="font-semibold">VPS Services</p>
                <p className="text-gray-400">Refund if service issue from our end</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <div>
                <p className="font-semibold">Processing</p>
                <p className="text-gray-400">3-5 business days</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Sections */}
        <div className="space-y-4 mb-24">
          {refundRules.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-[#0c0d12] border border-[#1f2129] hover:border-[#2d303d] rounded-[2.5rem] p-8 md:p-12 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
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

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 mb-16 backdrop-blur"
        >
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-amber-300 mb-2">How to Request a Refund</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                All refund requests must include documentation of the issue or reason. For VPS refunds due to service issues, our technical team will investigate and verify the claim. Please contact our support team with screenshots, error logs, or detailed descriptions of the problem.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Billing Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group/cta"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-black leading-tight tracking-tighter uppercase">
              Billing Question?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
              If you have any questions regarding an invoice, payment, service issue, or potential refund, our billing specialists are here to help you quickly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-2xl font-black hover:bg-gray-900 transition-all flex items-center justify-center gap-2 text-base shadow-2xl"
              >
                Contact Billing
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/syHFbR5yBQ"
                className="w-full sm:w-auto bg-transparent text-black border-2 border-black/10 px-10 py-5 rounded-2xl font-bold hover:bg-black/5 transition-all flex items-center justify-center gap-2"
              >
                Discord Ticket
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
