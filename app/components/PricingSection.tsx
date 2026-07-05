"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Check, Zap, Cpu, HardDrive, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { CustomIcons } from "./CustomIcons"
import { useCurrency } from "../contexts/CurrencyContext"

export default function PricingSection() {
  const { formatPrice } = useCurrency()
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")
  
  const plans = [
    {
      id: 'database',
      title: "Database Hosting",
      description: "High-performance managed database hosting for MySQL, PostgreSQL, MongoDB & Redis.",
      price: 99,
      icon: CustomIcons.Database,
      buttonText: "Get Database Hosting",
      href: "/databases",
      popular: false,
      gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
      borderGlow: "group-hover:border-blue-500/40",
      features: [
        "MySQL, PostgreSQL, MongoDB, Redis",
        "Gen4 NVMe Solid State Storage",
        "Automated Daily Backups",
        "Instant Control Panel Access",
        "Enterprise DDoS Protection"
      ],
      specs: { cpu: "Ryzen 9 9950X", ram: "Shared/Dedicated", storage: "PCIe 4.0 NVMe" }
    },
    {
      id: 'vps',
      title: "VPS Hosting",
      description: "Scalable virtual private servers with full root access, SSD storage, and 24/7 support.",
      price: 225,
      icon: CustomIcons.VPS,
      buttonText: "Get VPS Hosting",
      href: "/vps",
      popular: true,
      gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
      borderGlow: "group-hover:border-indigo-500/40",
      features: [
        "Full Root/SSH Access",
        "Guaranteed Ryzen vCPU allocation",
        "Dedicated IPv4 Address",
        "Choice of Linux OS / Custom ISO",
        "Premium Low-Latency Transit"
      ],
      specs: { cpu: "Ryzen 9 7950X3D", ram: "DDR5 RAM Blocks", storage: "Enterprise NVMe SSD" }
    },
    {
      id: 'lavalink',
      title: "Lavalink Hosting",
      description: "High performance Lavalink hosting for Discord music bots with low latency and 24/7 uptime.",
      price: 49,
      icon: CustomIcons.Lavalink,
      buttonText: "Get Lavalink Hosting",
      href: "/lavalink",
      popular: false,
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      borderGlow: "group-hover:border-emerald-500/40",
      features: [
        "Optimal Discord Voice Link",
        "Multi-region Node Deployment",
        "Up to 24/7 Music Playback Uptime",
        "Detailed JDA & Java monitoring",
        "Unlimited Audio Stream Tracks"
      ],
      specs: { cpu: "High Speed CPU Core", ram: "Dedicated Memory", storage: "Rapid Cache Storage" }
    },
    {
      id: 'discord',
      title: "Discord Bot Hosting",
      description: "Reliable and affordable Discord bot hosting with 24/7 uptime, Node.js support, and easy deployment.",
      price: 52,
      icon: CustomIcons.Bot,
      buttonText: "Get Discord Bot Hosting",
      href: "/discord",
      popular: false,
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      borderGlow: "group-hover:border-amber-500/40",
      features: [
        "Node.js, Python, Java, Go, C#",
        "Git Integration & Auto Deploy",
        "Real-time Console & File Manager",
        "Unlimited Bot Process Threads",
        "99.9% Online Uptime Guarantee"
      ],
      specs: { cpu: "Dedicated Bot vCore", ram: "Custom RAM Limits", storage: "Persistent Storage Block" }
    }
  ]

  const getPrice = (price: number) => {
    if (billingCycle === "annual") {
      return Math.round(price * 0.9)
    }
    return price
  }

  return (
    <section id="pricing" className="py-32 bg-[#030408] relative overflow-hidden">
      {/* Enhanced ambient background */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#00a3ff]/[0.04] rounded-full blur-[180px] pointer-events-none will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] bg-[#6366f1]/[0.03] rounded-full blur-[150px] pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 left-2/3 w-[500px] h-[500px] bg-[#00a3ff]/[0.02] rounded-full blur-[120px] pointer-events-none will-change-transform" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#00a3ff]/10 text-[#00a3ff] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#00a3ff]/20 mb-6 tracking-widest uppercase">
                <Sparkles className="w-3 h-3" />
                Choose Your Plan
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-white mb-4 orbitron-font uppercase tracking-tight">
                Flexible{" "}
                <span className="relative">
                  <span className="text-[#00a3ff] text-neon-glow-brand">Pricing Plans</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a3ff]/0 via-[#00a3ff]/50 to-[#00a3ff]/0 rounded-full" />
                </span>
              </h2>
              <p className="text-gray-400 text-lg quicksand-font max-w-xl">
                Select the hosting type that matches your requirements. Toggle billing frequency below to save up to 10%.
              </p>
            </motion.div>
          </div>

          {/* Premium Toggle Switch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-20"
          >
            <div className="relative flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] p-1 rounded-2xl backdrop-blur-md">
              {/* Sliding indicator */}
              <div
                className={`absolute top-1 bottom-1 rounded-xl bg-gradient-to-r from-[#00a3ff] to-[#6366f1] transition-all duration-300 ease-out shadow-[0_0_15px_rgba(0,163,255,0.3)] ${
                  billingCycle === "monthly" ? "left-1 right-[55%]" : "left-[45%] right-1"
                }`}
              />
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`relative z-10 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer min-w-[100px] text-center ${
                  billingCycle === "monthly" ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("annual")}
                className={`relative z-10 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer min-w-[100px] text-center ${
                  billingCycle === "annual" ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Annually
              </button>
              {billingCycle === "annual" && (
                <span className="absolute -top-3 -right-2 bg-gradient-to-r from-emerald-400 to-emerald-500 text-black text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-lg z-20">
                  Save 10%
                </span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#00a3ff] to-[#6366f1] text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest orbitron-font shadow-[0_0_20px_rgba(0,163,255,0.4)]">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Animated gradient border */}
              <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-b ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm ${plan.popular ? 'opacity-100' : ''}`} />
              
              {/* Card */}
              <div className={`relative bg-[#0b0c16]/40 backdrop-blur-xl border rounded-3xl overflow-hidden transition-all duration-500 ${
                plan.popular 
                  ? 'border-[#00a3ff]/30 shadow-[0_0_30px_rgba(0,163,255,0.08)]' 
                  : 'border-white/[0.06] hover:border-white/[0.12]'
              }`}>
                {/* Inner glow overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                <div className="relative p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: Icon & Price */}
                    <div className="flex flex-col items-center lg:items-start lg:w-52 flex-shrink-0 text-center lg:text-left">
                      {/* Icon with glow */}
                      <div className="relative mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.popular ? 'from-[#00a3ff]/20 to-[#6366f1]/20' : 'from-white/[0.08] to-white/[0.02]'} border border-white/[0.06] flex items-center justify-center group-hover:scale-110 group-hover:rotate-[8deg] transition-all duration-500 relative z-10`}>
                          <plan.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-[#00a3ff]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 scale-75 group-hover:scale-110 opacity-0 group-hover:opacity-100" />
                      </div>

                      <h3 className="text-2xl font-black text-white mb-2 orbitron-font uppercase tracking-tight">{plan.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 hidden lg:block">{plan.description}</p>
                      
                      {/* Price */}
                      <div className="mt-auto pt-6 lg:pt-0 flex flex-col items-center lg:items-start">
                        <span className="text-[9px] text-gray-600 font-bold uppercase tracking-[0.15em] mb-1">Starting at</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-5xl font-black text-white orbitron-font tracking-tight">
                            {formatPrice(getPrice(plan.price))}
                          </span>
                          <span className="text-gray-500 text-sm font-semibold">/mo</span>
                        </div>
                        <span className="text-[10px] text-gray-600 mt-1.5 font-medium italic">
                          {billingCycle === "annual" ? "Billed annually" : "Billed monthly"}
                        </span>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 flex flex-col justify-between lg:border-l border-white/[0.04] lg:pl-8 pt-6 lg:pt-0">
                      {/* Description (mobile) */}
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 lg:hidden">{plan.description}</p>

                      {/* Tech Specs Block */}
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        {[
                          { label: "CPU", val: plan.specs.cpu, icon: Cpu },
                          { label: "RAM", val: plan.specs.ram, icon: Zap },
                          { label: "Disk", val: plan.specs.storage, icon: HardDrive },
                        ].map((s, idx) => (
                          <div key={idx} className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-3 flex flex-col items-center text-center group/spec hover:bg-white/[0.06] transition-colors duration-300">
                            <s.icon className="w-3.5 h-3.5 text-[#00a3ff] mb-1.5" />
                            <span className="text-[7px] text-gray-600 font-bold uppercase tracking-[0.15em]">{s.label}</span>
                            <span className="text-[10px] text-gray-300 font-semibold mt-0.5 truncate w-full">{s.val}</span>
                          </div>
                        ))}
                      </div>

                      {/* Features List */}
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3 text-sm group/feat">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/feat:scale-110 transition-transform duration-300">
                              <Check className="w-3 h-3 text-emerald-400" />
                            </div>
                            <span className="text-gray-400 leading-tight group-hover/feat:text-gray-300 transition-colors duration-300">{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Order Button */}
                      <Link
                        href={plan.href}
                        className={`group/btn relative flex items-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-500 w-full justify-center orbitron-font uppercase tracking-wider overflow-hidden ${
                          plan.popular 
                            ? 'text-white' 
                            : 'text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.12]'
                        }`}
                      >
                        {plan.popular && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00a3ff] via-[#6366f1] to-[#00a3ff] bg-[length:200%_100%] animate-gradient-x transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00a3ff] to-[#6366f1] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                          </>
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                          {plan.buttonText}
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-rotate-12 transition-all duration-300" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
