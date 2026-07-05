"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Zap, Mail, MessageSquare, Twitter, Github, Linkedin, User, Briefcase, Code, ChevronRight } from "lucide-react"
import { FaDiscord } from "react-icons/fa6"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const team = [
  {
    name: "Anthony",
    role: "Founder & CEO",
    bio: "Visionary lead behind VexaNode's infrastructure. Focused on delivering enterprise-grade performance at accessible price points.",
    icon: ShieldCheck,
    accent: "#3b82f6",
    socials: {
        discord: "#",
        twitter: "#",
        linkedin: "#"
    }
  },
  {
    name: "Management Team",
    role: "Operations",
    bio: "Our specialized management team ensures 99.9% uptime and smooth datacenter operations across all global nodes.",
    icon: Zap,
    accent: "#f59e0b",
    socials: {
        discord: "#",
        mail: "mailto:ops@vexanode.cloud"
    }
  },
  {
    name: "Technical Support",
    role: "24/7 Engineers",
    bio: "A global team of hosting experts dedicated to resolving issues in minutes, not hours. Available around the clock.",
    icon: MessageSquare,
    accent: "#10b981",
    socials: {
        discord: "#",
        ticket: "/contact"
    }
  }
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#08090d] text-white selection:bg-blue-500/30">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 text-[10px] font-bold px-4 py-1.5 rounded-full border border-blue-500/20 mb-8 tracking-[0.2em] uppercase"
          >
            <User className="w-3.5 h-3.5" />
            Our Leadership
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
          >
            The <span className="text-blue-500">Vexa</span> Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium"
          >
            Meet the engineers and visionaries building the next generation of global hosting infrastructure.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#0c0d12] border border-[#1f2129] hover:border-blue-500/30 rounded-[2.5rem] p-8 transition-all duration-500 overflow-hidden"
            >
              {/* Member Icon/Avatar Area */}
              <div className="relative w-24 h-24 mb-8 mx-auto">
                <div 
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ backgroundColor: member.accent }}
                />
                <div className="relative w-full h-full rounded-[2rem] bg-[#111218] border border-[#1f2129] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <member.icon className="w-10 h-10" style={{ color: member.accent }} />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold tracking-tight mb-1">{member.name}</h3>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-[4.5rem]">
                  {member.bio}
                </p>

                {/* Socials */}
                <div className="flex justify-center gap-3">
                  <a href={member.socials.discord} className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-[#5865F2] hover:bg-[#5865F2]/10 hover:border-[#5865F2]/30 transition-all">
                    <FaDiscord className="w-5 h-5" />
                  </a>
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2]/30 transition-all">
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.socials.mail && (
                    <a href={member.socials.mail} className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all">
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Culture CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group/cta shadow-2xl shadow-blue-900/20"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight tracking-tighter uppercase">
              Join the Mission
            </h2>
            <p className="text-blue-100/80 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
              We're always looking for talented engineers and community-driven individuals to join our global team. Think you have what it takes?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://discord.gg/syHFbR5yBQ"
                className="w-full sm:w-auto bg-white text-blue-600 px-10 py-5 rounded-2xl font-black hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-base shadow-2xl"
              >
                Careers on Discord
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto bg-transparent text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-base border-2 border-white/20 hover:border-white"
              >
                General Inquiry
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
