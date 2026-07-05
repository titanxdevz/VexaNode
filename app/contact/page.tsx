"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Globe, Send, MapPin, Phone, ChevronRight } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState } from "react"
import { useToast } from "../components/ToastProvider"

export default function ContactPage() {
  const { addToast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    addToast("success", "Message sent! (Simulation)")
  }

  const contactMethods = [
    {
      title: "Discord Support",
      desc: "Join our community for instant help and updates.",
      value: "discord.vexanode.cloud",
      icon: MessageSquare,
      color: "blue",
      link: "https://discord.gg/syHFbR5yBQ"
    },
    {
      title: "Email Us",
      desc: "For official inquiries and corporate partnership.",
      value: "support@vexanode.cloud",
      icon: Mail,
      color: "purple",
      link: "mailto:support@vexanode.cloud"
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
    <div className="min-h-screen bg-[#0a0b0f] text-white selection:bg-[#00a3ff]/30">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#00a3ff]/10 text-[#00a3ff] text-xs font-bold px-4 py-1.5 rounded-full border border-[#00a3ff]/20 mb-4"
          >
            Get In Touch
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 orbitron-font"
          >
            Contact <span className="text-[#00a3ff] text-neon-glow-brand">VexaNode</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Have questions about our services? Our team is here to help you 24/7. Reach out via any of the methods below.
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
              className="p-8 rounded-[32px] bg-[#0b0c16]/30 backdrop-blur-md border border-white/10 hover:border-[#00a3ff]/30 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-${method.color === 'blue' ? '[#00a3ff]/10' : method.color + '-600/10'} border border-${method.color === 'blue' ? '[#00a3ff]/20' : method.color + '-500/20'} group-hover:scale-110 transition-transform`}>
                <method.icon className={`w-7 h-7 ${method.color === 'blue' ? 'text-[#00a3ff]' : 'text-' + method.color + '-500'}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{method.desc}</p>
              <div className="text-[#00a3ff] font-medium flex items-center gap-2">
                {method.value}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#0b0c16]/30 backdrop-blur-md border border-white/10 rounded-[40px] p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold mb-8 orbitron-font">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#00a3ff]/50 outline-none transition-all text-white placeholder-gray-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#00a3ff]/50 outline-none transition-all text-white placeholder-gray-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="How can we help?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#00a3ff]/50 outline-none transition-all text-white placeholder-gray-500"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us more about your needs..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#00a3ff]/50 outline-none transition-all resize-none text-white placeholder-gray-500"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#00a3ff] hover:bg-[#1a6e94] text-white py-4 rounded-2xl font-bold transition-all shadow-[0_0_30px_rgba(0,163,255,0.2)] hover:shadow-[0_0_40px_rgba(0,163,255,0.4)] flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-[32px] bg-[#0b0c16]/30 backdrop-blur-md border border-[#00a3ff]/20 shadow-2xl shadow-[#00a3ff]/5">
              <h3 className="text-2xl font-bold mb-4 text-white">Join our Discord</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The fastest way to get support is through our Discord server. Join thousands of other users and get direct access to our staff.
              </p>
              <a 
                href="https://discord.gg/syHFbR5yBQ" 
                className="inline-flex items-center gap-2 bg-[#00a3ff] hover:bg-[#1a6e94] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(0,163,255,0.3)]"
              >
                Join Server
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-[32px] bg-[#0b0c16]/30 backdrop-blur-md border border-white/10">
                <MapPin className="w-8 h-8 text-[#00a3ff] mb-4" />
                <h4 className="font-bold mb-2">Location</h4>
                <p className="text-gray-500 text-sm">Mumbai, India <br /> Global Nodes: 12+</p>
              </div>
              <div className="p-8 rounded-[32px] bg-[#0b0c16]/30 backdrop-blur-md border border-white/10">
                <Phone className="w-8 h-8 text-[#00a3ff] mb-4" />
                <h4 className="font-bold mb-2">Availability</h4>
                <p className="text-gray-500 text-sm">Technical: 24/7/365 <br /> Billing: 9AM - 6PM IST</p>
              </div>
            </div>

            <div className="p-8 rounded-[32px] bg-[#0b0c16]/30 backdrop-blur-md border border-white/10">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#00a3ff]" />
                Enterprise Solutions
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Looking for custom dedicated server configurations or high-bandwidth networking for your business? Contact our sales team for a custom quote.
              </p>
            </div>
          </motion.div>
        </div>
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
