"use client"

import { motion } from "framer-motion"
import { Users, DollarSign, BarChart3, ArrowRight, CheckCircle2, Gift, PieChart, ShieldCheck } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

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
    <div className="min-h-screen bg-[#0a0b0f] text-white selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8"
            >
              <Gift className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Partner Program</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 orbitron-font leading-tight">
              Grow with <span className="text-blue-500">VexaNode</span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Partner with the industry's fastest-growing hosting provider and earn a lifetime recurring commission of <span className="text-white font-bold">15%</span> on every sale.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center gap-2">
                Become an Affiliate <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 rounded-xl font-bold transition-all">
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
             <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:border-blue-500/30 transition-all">
                <div className="text-4xl font-bold text-white mb-2 orbitron-font">{stat.value}</div>
                <div className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.sub}</div>
             </div>
           ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 orbitron-font">Why Partner <span className="text-blue-500">With Us?</span></h2>
            <p className="text-gray-400">Everything you need to succeed as a VexaNode affiliate partner.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-black border border-white/5 hover:border-blue-500/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 orbitron-font">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold orbitron-font mb-4">Three Steps to <span className="text-blue-500">Success</span></h2>
          </div>
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-[#0a0b0f] flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 orbitron-font">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 orbitron-font">Ready to start earning?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
            Join hundreds of partners who are already growing their income with the world's most reliable hosting platform.
          </p>
          <button className="bg-white text-blue-600 px-12 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            Create Affiliate Account
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
