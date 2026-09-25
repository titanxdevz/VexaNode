"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Database, Zap, Shield, ChevronRight, Server, HardDrive,
  Layers, Sparkles, ChevronDown, Radio
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import { useCurrency } from "../contexts/CurrencyContext"
import CurrencySelector from "../components/CurrencySelector"
import Link from "next/link"

const cycles = [
  { id: "monthly", name: "Monthly", discount: 0 },
  { id: "quarterly", name: "Quarterly", discount: 0.05, label: "5% OFF" },
  { id: "semi-annually", name: "Semi-Annually", discount: 0.13, label: "13% OFF" },
  { id: "annually", name: "Annually", discount: 0.24, label: "24% OFF" }
]

const dbTypes = [
  { id: "all", name: "All Databases", icon: Database },
  { id: "mongodb", name: "MongoDB", icon: Database },
  { id: "postgresql", name: "PostgreSQL", icon: Layers },
  { id: "redis", name: "Redis In-Memory", icon: Zap }
]

const dbPlans = [
  {
    id: "mongodb-hosting",
    type: "mongodb",
    name: "MongoDB Hosting",
    basePrice: 40,
    buyUrl: "https://billing.vexanode.gg/products/database-hosting/mongodb-hosting",
    memory: "512 MB RAM",
    storage: "5 GB NVMe",
    backups: "Daily Backups",
    engine: "MongoDB 7.0+",
    connections: "100 Concurrent",
    popular: false
  },
  {
    id: "postgresql-hosting",
    type: "postgresql",
    name: "PostgreSQL",
    basePrice: 40,
    buyUrl: "https://billing.vexanode.gg/products/database-hosting/postgresql",
    memory: "1 GB RAM",
    storage: "15 GB NVMe",
    backups: "Automated Snapshots",
    engine: "PostgreSQL 16+",
    connections: "250 Concurrent",
    popular: true
  },
  {
    id: "redis-hosting",
    type: "redis",
    name: "Redis Hosting",
    basePrice: 40,
    buyUrl: "https://billing.vexanode.gg/products/database-hosting/redis-hosting",
    memory: "1 GB High-Speed RAM",
    storage: "10 GB NVMe Persistence",
    backups: "AOF / RDB Snapshots",
    engine: "Redis 7.2+",
    connections: "1,000+ Ops/sec",
    popular: false
  }
]

const faqs = [
  {
    q: "Can I connect to my database externally from any server or app?",
    a: "Yes! All managed databases come with secure public endpoints, SSL encryption, and configurable IP whitelisting for external connections."
  },
  {
    q: "Are automatic backups and point-in-time recovery supported?",
    a: "Yes, automated daily snapshots and database transaction logs are backed up securely off-site with 1-click restore."
  },
  {
    q: "How fast is database provisioning?",
    a: "Your managed database cluster is ready for queries shortly after checkout."
  }
]

export default function DatabasePage() {
  const [selectedType, setSelectedType] = useState("all")
  const [selectedCycle, setSelectedCycle] = useState("monthly")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { formatPrice } = useCurrency()

  const calculatePrice = (base: number) => {
    const cycle = cycles.find(c => c.id === selectedCycle)
    if (!cycle) return base
    const monthlyPrice = base * (1 - cycle.discount)
    return Math.floor(monthlyPrice)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDeploy = (plan: any) => {
    window.open(plan.buyUrl, "_blank", "noopener,noreferrer")
  }

  const filteredPlans = selectedType === "all"
    ? dbPlans
    : dbPlans.filter(p => p.type === selectedType)

  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#d97757]/30 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(217,119,87,0.06),transparent_100%)] pointer-events-none" />

      <PageMeta title="Managed Databases — VexaNode" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section (Clean VisiHost Style) */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            {/* Small Badge */}
            <div className="inline-block bg-[#d97757]/10 vx-accent-text text-xs font-semibold px-3 py-1 rounded-md border border-[#d97757]/20 mb-4">
              Managed Databases
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black orbitron-font tracking-tight mb-4 vx-ink">
              High-Performance Managed{" "}
              <span className="vx-accent-text">Databases</span>
            </h1>

            {/* Description */}
            <p className="vx-muted text-sm sm:text-base leading-relaxed mb-4">
              Production-ready MongoDB, PostgreSQL, and Redis instances. Zero maintenance overhead with automated daily backups, high availability replication, and instant provisioning.
            </p>

            {/* Sub-links */}
            <div className="text-xs vx-faint flex flex-wrap items-center gap-1.5 font-medium">
              <span className="vx-muted">Also Explore:</span>
              <Link href="/discord" className="vx-accent-text hover:underline">Discord Bot Hosting</Link>
              <span>•</span>
              <Link href="/lavalink" className="vx-accent-text hover:underline">Lavalink Audio</Link>
              <span>•</span>
              <Link href="/games" className="vx-accent-text hover:underline">Game Servers</Link>
              <span>•</span>
              <Link href="/vps" className="vx-accent-text hover:underline">VPS Hosting</Link>
            </div>
          </div>

          {/* Top-Right Currency Selector */}
          <div className="flex-shrink-0 self-start lg:mt-2">
            <CurrencySelector />
          </div>
        </div>

        {/* 1. Choose Database Engine */}
        <div className="mb-6">
          <h3 className="text-xs font-bold vx-muted mb-3 tracking-wide">
            1. Choose Database Engine
          </h3>
          <div className="w-full max-w-full overflow-x-auto no-scrollbar flex items-center gap-1.5 pb-1">
            <div className="inline-flex vx-card p-1 rounded-xl border vx-line flex-nowrap">
              {dbTypes.map((type) => {
                const isSelected = selectedType === type.id
                const Icon = type.icon
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                      isSelected
                        ? "vx-btn-accent shadow-[0_0_12px_rgba(217,119,87,0.3)]"
                        : "vx-muted vx-hover-ink"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{type.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* 2. Choose Billing Cycle (Mobile Optimized Horizontal Scroll) */}
        <div className="mb-10">
          <h3 className="text-xs font-bold vx-muted mb-3 tracking-wide">
            2. Choose Billing Cycle
          </h3>
          <div className="w-full max-w-full overflow-x-auto no-scrollbar flex items-center gap-1.5 pb-1">
            <div className="inline-flex vx-card p-1 rounded-xl border vx-line flex-nowrap">
              {cycles.map((cycle) => (
                <button
                  key={cycle.id}
                  type="button"
                  onClick={() => setSelectedCycle(cycle.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex-shrink-0 flex items-center gap-1.5 ${
                    selectedCycle === cycle.id
                      ? "vx-btn-accent shadow-[0_0_12px_rgba(217,119,87,0.3)]"
                      : "vx-muted vx-hover-ink"
                  }`}
                >
                  <span>{cycle.name}</span>
                  {cycle.discount > 0 && (
                    <span className={`text-[9px] px-1 py-0.2 rounded font-black uppercase ${
                      selectedCycle === cycle.id ? "bg-black/20 text-white" : "bg-[#d97757]/15 vx-accent-text"
                    }`}>
                      {cycle.label}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Choose Plan Grid (Clean Cards) */}
        <div className="mb-20">
          <h3 className="text-xs font-bold vx-muted mb-4 tracking-wide">
            3. Choose Plan
          </h3>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedType}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {filteredPlans.map((plan) => {
                const price = calculatePrice(plan.basePrice)
                return (
                  <div
                    key={plan.id}
                    className={`relative rounded-2xl vx-card border transition-all duration-300 p-5 flex flex-col justify-between hover:-translate-y-1 ${
                      plan.popular
                        ? "border-[#d97757] shadow-[0_0_25px_rgba(217,119,87,0.15)]"
                        : "vx-line hover:border-[#d97757]/40"
                    }`}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 vx-btn-accent text-[9px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(217,119,87,0.35)] flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 fill-white" />
                        Most Popular
                      </div>
                    )}

                    <div>
                      {/* Card Header: Icon + Plan Name + Subtitle */}
                      <div className="flex items-center gap-3.5 mb-5">
                        <div className="w-10 h-10 rounded-xl vx-bg-alt border vx-line flex items-center justify-center p-2 vx-accent-text flex-shrink-0">
                          <Database className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold vx-ink orbitron-font">{plan.name}</h4>
                          <span className="text-[11px] vx-muted">Database Instance</span>
                        </div>
                      </div>

                      {/* Specs Rows */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-xs">
                          <span className="vx-muted flex items-center gap-2">
                            <Zap className="w-3.5 h-3.5 text-[#d97757]" />
                            Memory
                          </span>
                          <span className="font-bold vx-ink">{plan.memory}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="vx-muted flex items-center gap-2">
                            <HardDrive className="w-3.5 h-3.5 text-[#d97757]" />
                            Storage
                          </span>
                          <span className="font-bold vx-ink">{plan.storage}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="vx-muted flex items-center gap-2">
                            <Server className="w-3.5 h-3.5 text-[#d97757]" />
                            Engine
                          </span>
                          <span className="font-bold vx-ink">{plan.engine}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="vx-muted flex items-center gap-2">
                            <Radio className="w-3.5 h-3.5 text-[#d97757]" />
                            Traffic
                          </span>
                          <span className="font-bold vx-ink">{plan.connections}</span>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                          <span className="vx-muted flex items-center gap-2">
                            <Shield className="w-3.5 h-3.5 text-[#d97757]" />
                            Backups
                          </span>
                          <span className="font-bold vx-ink">{plan.backups}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price and product link */}
                    <div className="pt-4 border-t vx-line">
                      <div className="flex items-baseline justify-between mb-4">
                        <span className="text-xs vx-faint">Starting at</span>
                        <div className="text-right">
                          <span className="text-2xl font-black vx-ink orbitron-font">
                            {formatPrice(price)}
                          </span>
                          <span className="text-xs vx-muted">/mo</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDeploy(plan)}
                        className="w-full vx-btn-accent font-extrabold py-3 px-4 rounded-xl text-xs transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(217,119,87,0.25)] hover:shadow-[0_0_30px_rgba(217,119,87,0.4)] active:scale-[0.98] cursor-pointer"
                      >
                        <span>View</span>
                        <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold orbitron-font vx-ink mb-2">
              Enterprise Database Features
            </h2>
            <p className="text-xs vx-muted">
              Low-latency connections, automated high-availability clustering, and dedicated storage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Zap,
                title: "Fast Query Response",
                desc: "High-IOPS NVMe drives and tuned database configurations maximize throughput."
              },
              {
                icon: Shield,
                title: "Automated Daily Backups",
                desc: "Point-in-time restore and off-site cloud storage ensure your data is always secure."
              },
              {
                icon: Server,
                title: "One-Click Scalability",
                desc: "Scale compute and storage up or down dynamically as your application workload increases."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl vx-card border vx-line hover:border-[#d97757]/30 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-[#d97757]/10 border border-[#d97757]/20 flex items-center justify-center vx-accent-text mb-3">
                  <feature.icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold vx-ink orbitron-font mb-1">{feature.title}</h4>
                <p className="text-xs vx-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold orbitron-font vx-ink mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs vx-muted">
              Everything you need to know about VexaNode managed databases.
            </p>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="rounded-xl border vx-line vx-card overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold vx-ink">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 vx-muted transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 vx-accent-text" : ""
                    }`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-4 text-xs vx-muted leading-relaxed border-t vx-line pt-2.5"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
