"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Globe, MapPin, Phone, ChevronRight } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"

export default function ContactPage() {
  const contactMethods = [
    {
      title: "Discord Support",
      desc: "Join our community for instant help and updates.",
      value: "discord.vexanode.cloud",
      icon: MessageSquare,
      color: "blue",
      link: "https://discord.gg/dJpMDfgUQq"
    },
    {
      title: "Email Us",
      desc: "For official inquiries and corporate partnership.",
      value: "vexanodeofficial@gmail.com",
      icon: Mail,
      color: "purple",
      link: "mailto:vexanodeofficial@gmail.com"
    },
    {
      title: "Client Area",
      desc: "Open a technical support ticket directly.",
      value: "billing.vexanode.cloud",
      icon: Globe,
      color: "emerald",
      link: "https://billing.vexanode.cloud"
    }
  ]

  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#d97757]/30">
      <PageMeta title="Contact Us" />
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#d97757]/10 vx-accent-text text-xs font-bold px-4 py-1.5 rounded-full border border-[#d97757]/20 mb-4"
          >
            Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 orbitron-font"
          >
            Contact <span className="vx-accent-text text-neon-glow-brand">VexaNode</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="vx-muted max-w-2xl mx-auto text-lg"
          >
            Have questions about our services? Our team is here to help you around the clock. Reach out via any of the methods below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.3 }}
              className="p-8 rounded-[32px] vx-card backdrop-blur-md border vx-line hover:border-[#d97757]/30 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-${method.color === 'blue' ? '[#d97757]/10' : method.color + '-600/10'} border border-${method.color === 'blue' ? '[#d97757]/20' : method.color + '-500/20'} group-hover:scale-110 transition-transform`}>
                <method.icon className={`w-7 h-7 ${method.color === 'blue' ? 'vx-accent-text' : 'text-' + method.color + '-500'}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="vx-faint text-sm mb-4 leading-relaxed">{method.desc}</p>
              <div className="vx-accent-text font-medium flex items-center gap-2">
                {method.value}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Info / details — single column (contact form removed per request) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="p-8 rounded-[32px] vx-card border border-[#d97757]/20 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 vx-ink">Join our Discord</h3>
            <p className="vx-muted mb-6 leading-relaxed max-w-xl mx-auto">
              The fastest way to get support is through our Discord server. Join our community and get direct access to our staff.
            </p>
            <a
              href="https://discord.gg/dJpMDfgUQq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 vx-btn-accent px-8 py-3 rounded-xl font-bold transition-all"
            >
              Join Server
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-[32px] vx-card border vx-line">
              <MapPin className="w-8 h-8 vx-accent-text mb-4" />
              <h4 className="font-bold mb-2 vx-ink">Location</h4>
              <p className="vx-faint text-sm leading-relaxed">
                Asuran Chowk, Shahpur<br />
                Gorakhpur, Uttar Pradesh<br />
                India — PIN 273001
              </p>
            </div>
            <div className="p-8 rounded-[32px] vx-card border vx-line">
              <Phone className="w-8 h-8 vx-accent-text mb-4" />
              <h4 className="font-bold mb-2 vx-ink">Phone &amp; Email</h4>
              <p className="vx-faint text-sm leading-relaxed">
                <a href="tel:+916386905613" className="vx-hover-ink transition-colors">+91 63869 05613</a><br />
                <a href="mailto:vexanodeofficial@gmail.com" className="vx-hover-ink transition-colors break-all">vexanodeofficial@gmail.com</a>
              </p>
            </div>
            <div className="p-8 rounded-[32px] vx-card border vx-line">
              <MessageSquare className="w-8 h-8 vx-accent-text mb-4" />
              <h4 className="font-bold mb-2 vx-ink">Availability</h4>
              <p className="vx-faint text-sm leading-relaxed">
                Technical: Around the clock<br />
                Billing: 9AM – 6PM IST
              </p>
            </div>
          </div>

          <div className="p-8 rounded-[32px] vx-card border vx-line">
            <h4 className="font-bold mb-4 flex items-center gap-2 vx-ink">
              <Shield className="w-5 h-5 vx-accent-text" />
              Enterprise Solutions
            </h4>
            <p className="vx-faint text-sm leading-relaxed">
              Looking for custom dedicated server configurations or high-bandwidth networking for your business? Contact our team via Discord or email for a custom quote.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

function Shield({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}
