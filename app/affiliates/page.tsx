"use client"

import { motion } from "framer-motion"
import { DollarSign, BarChart3, ArrowRight, Gift, PieChart, ShieldCheck } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"

const features = [
  {
    title: "15% Recurring Commission",
    desc: "Earn a generous 15% commission on every payment made by your referred customers, for the lifetime of their subscription.",
    icon: DollarSign
  },
  {
    title: "Real-time Tracking",
    desc: "Monitor your clicks, conversions, and earnings in real-time with our advanced affiliate dashboard.",
    icon: BarChart3
  },
  {
    title: "60-Day Cookie Duration",
    desc: "We provide a 60-day cookie window, ensuring you get credit for sales even weeks after the initial click.",
    icon: PieChart
  },
  {
    title: "Instant Payouts",
    desc: "Request your earnings as soon as you reach the minimum threshold. We support PayPal, UPI, and Crypto.",
    icon: ShieldCheck
  }
]

const steps = [
  { title: "Join Program", desc: "Sign up for our affiliate program in seconds with no approval wait time." },
  { title: "Promote", desc: "Share your unique referral link on your website, social media, or Discord." },
  { title: "Earn Money", desc: "Receive automated payouts for every active customer you bring to VexaNode." }
]

export default function AffiliatesPage() {
  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#d97757]/30">
      <PageMeta title="Affiliate Program" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-[#d97757]/10 border border-[#d97757]/20 px-4 py-2 rounded-full mb-8"
            >
              <Gift className="w-4 h-4 vx-accent-text" />
              <span className="text-xs font-bold vx-accent-text uppercase tracking-widest">Partner Program</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 orbitron-font leading-tight">
              Grow with <span className="vx-accent-text">VexaNode</span>
            </h1>
            <p className="vx-muted text-lg mb-10 leading-relaxed">
              Partner with a growing hosting provider and earn a lifetime recurring commission of <span className="vx-ink font-bold">15%</span> on every sale.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="vx-btn-accent px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-2">
                Become an Affiliate <ArrowRight className="w-4 h-4" />
              </button>
              <button className="vx-card hover:vx-hover-ink border vx-line vx-ink px-10 py-4 rounded-xl font-bold transition-all">
                Affiliate Login
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlight */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { label: "Commission", value: "15%", sub: "Recurring Lifetime" },
             { label: "Cookie Life", value: "60 Days", sub: "Extended Tracking" },
             { label: "Min Payout", value: "₹500", sub: "Instant Withdrawals" }
           ].map((stat, idx) => (
             <div key={idx} className="p-8 rounded-3xl vx-card border vx-line text-center hover:border-[#d97757]/30 transition-all">
                <div className="text-4xl font-bold vx-ink mb-2 orbitron-font">{stat.value}</div>
                <div className="vx-accent-text font-bold text-sm uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="vx-faint text-xs">{stat.sub}</div>
             </div>
           ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 vx-bg-alt">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 orbitron-font">Why Partner <span className="vx-accent-text">With Us?</span></h2>
            <p className="vx-muted">Everything you need to succeed as a VexaNode affiliate partner.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl vx-card border vx-line hover:border-[#d97757]/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#d97757]/10 flex items-center justify-center mb-6 group-hover:bg-[#d97757] transition-colors">
                  <feature.icon className="w-6 h-6 vx-accent-text group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 orbitron-font">{feature.title}</h3>
                <p className="text-sm vx-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold orbitron-font mb-4">Three Steps to <span className="vx-accent-text">Success</span></h2>
          </div>
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 vx-bg-alt -translate-y-1/2 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#d97757] text-white border-4 vx-line flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 orbitron-font">{step.title}</h3>
                  <p className="text-sm vx-muted">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#d97757] to-[#c2410c] p-12 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 orbitron-font text-white">Ready to start earning?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
            Join our growing community of partners building their income with a reliable hosting platform.
          </p>
          <button className="bg-white text-[#c2410c] px-12 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            Create Affiliate Account
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
