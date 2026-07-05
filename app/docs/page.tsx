"use client"

import { motion } from "framer-motion"
import { Search, Book, Terminal, Cpu, Server, Shield, Globe, MessageSquare, ChevronRight, PlayCircle, FileText, Zap } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from "next/link"

const categories = [
  {
    title: "Getting Started",
    icon: PlayCircle,
    desc: "Everything you need to know to get your services up and running in minutes.",
    links: ["Quick Start Guide", "Account Setup", "Billing & Invoices", "Contacting Support"]
  },
  {
    title: "VPS Management",
    icon: Server,
    desc: "Detailed guides on managing your virtual private servers, root access, and OS installs.",
    links: ["Accessing SSH", "Installing Ubuntu/CentOS", "Network Configuration", "Firewall Setup"]
  },
  {
    title: "Game Hosting",
    icon: Zap,
    desc: "Configure your Minecraft, Rust, or Ark servers with our custom game panel.",
    links: ["Pterodactyl Basics", "Managing Plugins", "Server Optimization", "Version Switching"]
  },
  {
    title: "Security & DDoS",
    icon: Shield,
    desc: "Learn about our enterprise-grade protection and how to secure your infrastructure.",
    links: ["DDoS Mitigation", "Two-Factor Auth", "SSL Certificates", "Backup Strategies"]
  }
]

const popularGuides = [
  { title: "How to connect via SSH to your VPS", category: "VPS Management", time: "5 min read" },
  { title: "Setting up a Minecraft Server with Bungeecord", category: "Game Hosting", time: "12 min read" },
  { title: "Optimizing JVM for Discord Music Bots", category: "Lavalink", time: "8 min read" },
  { title: "Configuring custom DDoS rules in OVH VAC", category: "Security", time: "15 min read" }
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8"
          >
            <Book className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Knowledge Base</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 orbitron-font">
            How can we <span className="text-blue-500">help you?</span>
          </h1>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search documentation, guides, and tutorials..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-2xl backdrop-blur-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {categories.map((cat, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/20 transition-all group flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <cat.icon className="w-6 h-6 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 orbitron-font">{cat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-8">{cat.desc}</p>
                
                <div className="mt-auto space-y-3">
                   {cat.links.map((link, lIdx) => (
                     <Link key={lIdx} href="#" className="flex items-center justify-between text-xs font-bold text-gray-500 hover:text-blue-500 transition-colors group/link">
                        {link}
                        <ChevronRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                     </Link>
                   ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Popular Guides */}
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-bold mb-8 orbitron-font flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-500" />
                Popular Guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {popularGuides.map((guide, idx) => (
                   <Link key={idx} href="#" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between group">
                      <h4 className="font-bold mb-4 group-hover:text-blue-500 transition-colors leading-snug">{guide.title}</h4>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">{guide.category}</span>
                        <span className="text-[10px] font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full">{guide.time}</span>
                      </div>
                   </Link>
                 ))}
              </div>
            </div>

            {/* Support Sidebar */}
            <div className="lg:col-span-4">
               <div className="p-8 rounded-3xl bg-blue-600 border border-blue-500/50 shadow-2xl relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                  <h3 className="text-2xl font-bold mb-4 orbitron-font relative z-10 text-white">Need more help?</h3>
                  <p className="text-white/80 text-sm mb-8 relative z-10 leading-relaxed">
                    Can't find what you're looking for? Our technical support engineers are available 24/7 to assist you.
                  </p>
                  <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold relative z-10 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                     <MessageSquare className="w-4 h-4" />
                     Open Support Ticket
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference CTA */}
      <section className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 p-12 rounded-[40px] border border-white/5 bg-black/40">
           <div className="w-20 h-20 rounded-2xl bg-blue-600/10 flex items-center justify-center flex-shrink-0">
              <Terminal className="w-10 h-10 text-blue-500" />
           </div>
           <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 orbitron-font text-white">Developer API Reference</h2>
              <p className="text-gray-400">Integrate VexaNode services directly into your own applications with our powerful REST API.</p>
           </div>
           <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold whitespace-nowrap">
              Explore API Docs
           </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
