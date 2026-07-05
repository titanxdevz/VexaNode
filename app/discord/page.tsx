"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronRight, Cpu, Zap, Shield, HardDrive, 
  MessageSquare, Sparkles, Terminal, Database, 
  RotateCcw, Check, Globe, Layout, Bot, Server,
  Code2, Rocket
} from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { CustomIcons } from "../components/CustomIcons"
import { useCurrency } from "../contexts/CurrencyContext"
import Image from "next/image"
import { useRouter } from "next/navigation"


const cycles = [
  { id: "monthly", name: "Monthly", discount: 0 },
  { id: "quarterly", name: "Quarterly", discount: 0.05 },
  { id: "semi-annually", name: "Semi-Annually", discount: 0.13 },
  { id: "annually", name: "Annually", discount: 0.24 }
]

const botPlans = [
  {
    id: "starter",
    name: "Starter",
    basePrice: 35,
    ram: "512 MB",
    cpu: "50%",
    disk: "1 GB",
    backups: "0",
    databases: "0",
    popular: false,
    color: "blue"
  },
  {
    id: "basic",
    name: "Basic",
    basePrice: 99,
    ram: "1 GB",
    cpu: "100%",
    disk: "2 GB",
    backups: "1",
    databases: "1",
    popular: false,
    color: "indigo"
  },
  {
    id: "silver",
    name: "Silver",
    basePrice: 129,
    ram: "2 GB",
    cpu: "150%",
    disk: "4 GB",
    backups: "1",
    databases: "1",
    popular: true,
    color: "blue"
  },
  {
    id: "gold",
    name: "Gold",
    basePrice: 199,
    ram: "4 GB",
    cpu: "200%",
    disk: "8 GB",
    backups: "2",
    databases: "1",
    popular: false,
    color: "blue"
  },
  {
    id: "platinum",
    name: "Platinum",
    basePrice: 279,
    ram: "6 GB",
    cpu: "250%",
    disk: "12 GB",
    backups: "3",
    databases: "1",
    popular: false,
    color: "purple"
  },
  {
    id: "diamond",
    name: "Diamond",
    basePrice: 349,
    ram: "8 GB",
    cpu: "300%",
    disk: "16 GB",
    backups: "4",
    databases: "1",
    popular: false,
    color: "blue"
  },
  {
    id: "netherite",
    name: "Netherite",
    basePrice: 429,
    ram: "10 GB",
    cpu: "350%",
    disk: "20 GB",
    backups: "5",
    databases: "2",
    popular: false,
    color: "blue"
  },
  {
    id: "obsidian",
    name: "Obsidian",
    basePrice: 550,
    ram: "16 GB",
    cpu: "500%",
    disk: "32 GB",
    backups: "10",
    databases: "5",
    popular: false,
    color: "blue"
  }
]

const BOT_LOGS = [
  "[SYSTEM] Container initialized successfully",
  "[BOT] Logged in as VexaGuard#0001",
  "[COMMANDS] Registered 42 slash commands",
  "[REDIS] Cache connection established: 2ms",
  "[WS] Heartbeat acknowledged (shards: 1/1)",
  "[INFO] 24/7 Mode: Enabled",
  "[API] Fetched dashboard config: 200 OK",
]

export default function DiscordBotPage() {
  const [selectedCycle, setSelectedCycle] = useState("monthly")
  const [logs, setLogs] = useState<string[]>(BOT_LOGS.slice(0, 3))
  const [activeTab, setActiveTab] = useState("all")
  const { formatPrice } = useCurrency()
  const router = useRouter()

  const calculatePrice = (base: number) => {
    const cycle = cycles.find(c => c.id === selectedCycle)
    if (!cycle) return base
    const price = base * (1 - cycle.discount)
    return Math.floor(price)
  }

  const handleDeploy = (plan: any) => {
    const price = calculatePrice(plan.basePrice)
    localStorage.setItem('vexa_cart_total', price.toString())
    localStorage.setItem('vexa_cart_items', JSON.stringify([{
      name: `Discord Bot Hosting - ${plan.name}`,
      description: `${plan.ram} RAM | ${plan.cpu} CPU | ${plan.disk} Disk`,
      price: price
    }]))
    
    router.push('/')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const next = BOT_LOGS[Math.floor(Math.random() * BOT_LOGS.length)]
        return [...prev.slice(-10), next]
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white selection:bg-[#00a3ff]/30 relative overflow-hidden">
      {/* Ambient glow backgrounds */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#00a3ff]/[0.04] rounded-full blur-[180px] pointer-events-none will-change-transform" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[700px] h-[700px] bg-[#6366f1]/[0.03] rounded-full blur-[150px] pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 left-2/3 w-[500px] h-[500px] bg-[#00a3ff]/[0.02] rounded-full blur-[120px] pointer-events-none will-change-transform" />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        
        {/* Hero Section with Live Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#00a3ff]/10 text-[#00a3ff] text-[10px] font-bold px-3 py-1.5 rounded-full border border-[#00a3ff]/20 mb-6 uppercase tracking-widest orbitron-font">
              <Sparkles className="w-3 h-3" />
              Performance First Hosting
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 orbitron-font leading-none uppercase tracking-tight">
              Power Your <br />
              <span className="relative">
                <span className="text-[#00a3ff] text-neon-glow-brand">
                  Discord Bots
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a3ff]/0 via-[#00a3ff]/50 to-[#00a3ff]/0 rounded-full" />
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl quicksand-font">
              Unleash the full potential of your Discord bots with our high-performance Pterodactyl-powered nodes. Built for reliability, speed, and 24/7 uptime.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-[#00a3ff] to-[#6366f1] hover:from-[#1a6e94] hover:to-[#4f46e5] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-[0_0_30px_rgba(0,163,255,0.3)] orbitron-font uppercase tracking-wider text-sm">
                View Plans
              </button>
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#0b0c16]/30 backdrop-blur-xl border border-white/[0.06]">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0b0f] bg-[#00a3ff] flex items-center justify-center text-[10px] font-bold">
                      {i === 3 ? "1k+" : <Image src={`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=40&w=32`} alt="" width={32} height={32} className="rounded-full" />}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-300">Trusted by developers</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* Terminal Window */}
            <div className="bg-[#0b0c16]/40 backdrop-blur-xl border border-white/[0.06] rounded-[32px] overflow-hidden shadow-2xl">
              <div className="bg-white/[0.03] px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">bot-instance-01.log</span>
                <Terminal className="w-3 h-3 text-gray-500" />
              </div>
              <div className="p-8 font-mono text-xs space-y-2 h-[300px] overflow-y-auto custom-scrollbar">
                <AnimatePresence mode="popLayout">
                  {logs.map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={log.includes("[BOT]") ? "text-[#00a3ff]" : log.includes("[SYSTEM]") ? "text-green-400" : "text-gray-400"}
                    >
                      <span className="text-gray-600 mr-3">[{new Date().toLocaleTimeString()}]</span>
                      {log}
                    </motion.div>
                  ))}
                </AnimatePresence>
                <motion.div 
                  animate={{ opacity: [0, 1] }} 
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-2 h-4 bg-[#00a3ff] inline-block align-middle" 
                />
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:-right-12 bg-gradient-to-br from-[#00a3ff] to-[#6366f1] p-6 rounded-3xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white orbitron-font">99.9%</div>
                  <div className="text-[10px] font-black text-blue-100 uppercase tracking-widest orbitron-font">Uptime SLA</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Pricing Toggles */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 orbitron-font uppercase tracking-tight">Choose Your <span className="relative"><span className="text-[#00a3ff] text-neon-glow-brand">Performance Level</span><span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a3ff]/0 via-[#00a3ff]/50 to-[#00a3ff]/0 rounded-full" /></span></h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto quicksand-font">Select the billing frequency that matches your project requirements.</p>
          <div className="flex flex-col items-center gap-6">
            {/* Sliding pill toggle for billing */}
            <div className="relative flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] p-1.5 rounded-2xl backdrop-blur-md">
              <div
                className={`absolute top-1.5 bottom-1.5 rounded-xl bg-gradient-to-r from-[#00a3ff] to-[#6366f1] transition-all duration-300 ease-out shadow-[0_0_15px_rgba(0,163,255,0.3)] ${
                  selectedCycle === "monthly" ? "left-1.5 right-[75%]" :
                  selectedCycle === "quarterly" ? "left-[25%] right-[50%]" :
                  selectedCycle === "semi-annually" ? "left-[50%] right-[25%]" :
                  "left-[75%] right-1.5"
                }`}
              />
              {cycles.map((cycle) => (
                <button
                  key={cycle.id}
                  type="button"
                  onClick={() => setSelectedCycle(cycle.id)}
                  className={`relative z-10 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 uppercase tracking-wider cursor-pointer flex-1 min-w-0 whitespace-nowrap ${
                    selectedCycle === cycle.id
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {cycle.name}
                  {cycle.discount > 0 && (
                    <span className="ml-1 text-[8px] bg-emerald-400/20 text-emerald-400 px-1.5 py-0.5 rounded font-black">-{Math.round(cycle.discount * 100)}%</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {botPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#00a3ff] to-[#6366f1] text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest orbitron-font shadow-[0_0_20px_rgba(0,163,255,0.4)]">
                    <Sparkles className="w-3 h-3" />
                    Popular
                  </div>
                </div>
              )}

              <div className={`absolute -inset-[1px] rounded-[40px] bg-gradient-to-b ${plan.popular ? 'from-[#00a3ff]/20 via-[#6366f1]/10 to-transparent opacity-100' : 'from-white/0 via-white/0 to-white/0 opacity-0 group-hover:opacity-100'} transition-opacity duration-500 blur-sm`} />
              
              <div className={`relative bg-[#0b0c16]/40 backdrop-blur-xl border rounded-[40px] overflow-hidden transition-all duration-500 ${
                plan.popular 
                  ? 'border-[#00a3ff]/30 shadow-[0_0_30px_rgba(0,163,255,0.08)]' 
                  : 'border-white/[0.06] hover:border-white/[0.12]'
              }`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.popular ? 'from-[#00a3ff]/10 via-transparent to-transparent' : ''} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                <div className="relative p-8 flex flex-col">
                  <div className="mb-8">
                    <div className="relative mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.popular ? 'from-[#00a3ff]/20 to-[#6366f1]/20' : 'from-white/[0.08] to-white/[0.02]'} border border-white/[0.06] flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative z-10`}>
                        <CustomIcons.Bot className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-[#00a3ff]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 scale-75 group-hover:scale-110 opacity-0 group-hover:opacity-100" />
                    </div>
                    <h3 className="text-2xl font-black mb-2 orbitron-font uppercase tracking-tight group-hover:text-[#00a3ff] transition-colors">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mt-3">
                      <span className="text-3xl font-black orbitron-font text-white">{formatPrice(calculatePrice(plan.basePrice))}</span>
                      <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">/mo</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-10 flex-1 border-t border-white/[0.04] pt-6">
                    <SpecItem icon={Zap} label="Memory" value={plan.ram} />
                    <SpecItem icon={Cpu} label="CPU Core" value={plan.cpu} />
                    <SpecItem icon={HardDrive} label="NVMe Storage" value={plan.disk} />
                    <SpecItem icon={RotateCcw} label="Backups" value={plan.backups} />
                    <SpecItem icon={Database} label="MySQL DBs" value={plan.databases} />
                  </div>

                  <button 
                    type="button"
                    onClick={() => handleDeploy(plan)}
                    className={`group/btn relative flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold transition-all duration-500 cursor-pointer orbitron-font uppercase tracking-wider text-xs overflow-hidden ${
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
                      Deploy Now
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-all duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table (Premium touch) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-[#0b0c16]/40 backdrop-blur-xl border border-white/[0.06] rounded-[40px] p-12 mb-32 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          
          <div className="text-center mb-12 relative">
            <h2 className="text-3xl font-black mb-4 orbitron-font uppercase tracking-tight">Premium Features <span className="relative"><span className="text-[#00a3ff] text-neon-glow-brand">Included</span><span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a3ff]/0 via-[#00a3ff]/50 to-[#00a3ff]/0 rounded-full" /></span></h2>
            <p className="text-gray-400 max-w-xl mx-auto quicksand-font">Every bot plan comes with our enterprise-grade feature set by default.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {[
              { title: "Any Language", desc: "Native support for Node.js, Python, Java, Go, Ruby, and more.", icon: Code2 },
              { title: "DDoS Mitigation", desc: "12Tbps+ path-based mitigation to keep your bot immune to attacks.", icon: Shield },
              { title: "24/7 Uptime", desc: "Our nodes are monitored 24/7 with automated failover systems.", icon: Check },
              { title: "Instant Setup", desc: "Deployment starts the second your payment is confirmed.", icon: Zap },
              { title: "Full Root Access", desc: "Total control over your files and environment via Pterodactyl.", icon: Terminal },
              { title: "Global Network", desc: "Low latency nodes positioned globally for optimal response times.", icon: Globe },
            ].map((f, i) => (
              <div key={i} className="group/feat bg-white/[0.02] border border-white/[0.04] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300">
                <div className="flex gap-5">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00a3ff]/20 to-[#6366f1]/10 border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover/feat:scale-110 transition-transform duration-300 relative z-10">
                      <f.icon className="w-6 h-6 text-[#00a3ff]" />
                    </div>
                    <div className="absolute inset-0 bg-[#00a3ff]/10 rounded-2xl blur-xl opacity-0 group-hover/feat:opacity-100 transition-opacity duration-500 scale-75 group-hover/feat:scale-110" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 group-hover/feat:text-[#00a3ff] transition-colors">{f.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed quicksand-font">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Style Section */}
        <div className="text-center">
          <h2 className="text-3xl font-black mb-4 orbitron-font uppercase tracking-tight">Ready to Scale?</h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto quicksand-font">Join hundreds of bot developers who trust VexaNode for their production bot infrastructure.</p>
          <div className="flex justify-center gap-4">
            <button className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] px-10 py-4 rounded-2xl font-bold transition-all orbitron-font uppercase tracking-wider text-xs">
              Contact Sales
            </button>
            <button className="bg-gradient-to-r from-[#00a3ff] to-[#6366f1] hover:from-[#1a6e94] hover:to-[#4f46e5] text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(0,163,255,0.3)] orbitron-font uppercase tracking-wider text-xs">
              Get Started
            </button>
          </div>
        </div>
      </main>

      <Footer />
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}

function SpecItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-center justify-between group/spec">
      <div className="flex items-center gap-3">
        <Icon className="w-4 h-4 text-[#00a3ff]/60 group-hover/spec:text-[#00a3ff] transition-colors" />
        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{label}</span>
      </div>
      <span className="text-sm font-bold text-white">{value}</span>
    </div>
  )
}
