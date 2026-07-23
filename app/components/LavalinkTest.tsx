"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, Play, Pause, Volume2, Settings, Maximize2, 
  Share2, Music, ListMusic, Mic2, ChevronDown, 
  Terminal, Activity, Cpu, HardDrive, Network,
  Zap, Database, Globe, CheckCircle2, AlertCircle,
  Loader2
} from "lucide-react"
import Image from "next/image"

const LOG_MESSAGES = [
  "[INFO] Node Vision-1: Handshaking with Discord Voice Gateway...",
  "[DEBUG] Node Vision-1: Received voice server update for guild 1234...",
  "[INFO] TrackManager: Loaded track from YouTube source",
  "[DEBUG] AudioEngine: Buffer status - 100% (2.5s)",
  "[INFO] Node Vision-1: Stats update received",
  "[DEBUG] JDA: Successfully connected to voice gateway",
]

export default function LavalinkTest() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [tracks, setTracks] = useState<any[]>([])
  const [currentTrack, setCurrentTrack] = useState<any>(null)
  const [logs, setLogs] = useState<string[]>([
    "[INFO] Lavalink Engine Initialized",
    "[INFO] Connecting to vip.visionhost.cloud:7052..."
  ])
  const [stats, setStats] = useState({ cpu: 0, mem: 0, players: 0, uptime: 0 })
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const terminalEndRef = useRef<HTMLDivElement>(null)

  // Fetch real stats from the node
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/lavalink/stats")
        const data = await res.json()
        if (data && !data.error) {
          setStats({
            cpu: Math.round(data.cpu.lavalinkLoad * 100),
            mem: Math.round(data.memory.used / 1024 / 1024),
            players: data.playingPlayers,
            uptime: data.uptime
          })
          setLogs(prev => [...prev.slice(-10), `[INFO] Stats: CPU ${Math.round(data.cpu.lavalinkLoad * 100)}% | Players: ${data.playingPlayers}`])
        }
      } catch (err) {
        console.error("Failed to fetch stats")
      }
    }

    fetchStats()
    const interval = setInterval(fetchStats, 10000)
    return () => clearInterval(interval)
  }, [])

  // Auto-scrolling terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [logs])

  // Audio progress logic (simulated for UI)
  useEffect(() => {
    let interval: any
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => (prev < 100 ? prev + 0.1 : 0))
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!search) return

    setIsLoading(true)
    setLogs(prev => [...prev, `[INFO] Searching for: ${search}...`])
    
    try {
      const res = await fetch(`/api/lavalink/search?query=${encodeURIComponent(search)}`)
      const data = await res.json()
      
      if (data.loadType === "search" || data.loadType === "SEARCH_RESULT") {
        setTracks(data.data || data.tracks || [])
        setLogs(prev => [...prev, `[INFO] Found ${data.data?.length || data.tracks?.length || 0} tracks on YouTube.`])
      } else {
        setLogs(prev => [...prev, `[WARN] Search failed or no results found.`])
      }
    } catch (err) {
      setLogs(prev => [...prev, `[ERROR] Search request failed.`])
    } finally {
      setIsLoading(false)
    }
  }

  const playTrack = (track: any) => {
    setCurrentTrack(track)
    setIsPlaying(true)
    setProgress(0)
    setLogs(prev => [...prev, `[INFO] Loading track: ${track.info.title}`])
    setLogs(prev => [...prev, `[DEBUG] Track URI: ${track.info.uri}`])
    
    // In a real bot this would send the play command to Discord
    // Here we just simulate the UI update
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Lavalink Terminal & Node Stats */}
        <div className="lg:col-span-4 space-y-6">
          {/* Node Health */}
          <div className="bg-[#0c0d12] border border-white/5 rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-500" />
                <h3 className="font-bold text-white orbitron-font text-sm">VisionHost Node</h3>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">Connected</span>
              </div>
            </div>

            <div className="space-y-4">
              <StatBar icon={Cpu} label="Lavalink Load" value={`${stats.cpu}%`} percent={stats.cpu} color="blue" />
              <StatBar icon={HardDrive} label="Allocated RAM" value={`${stats.mem}MB`} percent={(stats.mem/512)*100} color="purple" />
              <StatBar icon={Network} label="Playing" value={stats.players} percent={(stats.players/100)*100} color="emerald" />
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-3">
                <div className="text-[9px] text-gray-500 uppercase font-bold mb-1">Host</div>
                <div className="text-[10px] font-bold text-white truncate">vip.visionhost.cloud</div>
              </div>
              <div className="bg-white/5 rounded-xl p-3">
                <div className="text-[9px] text-gray-500 uppercase font-bold mb-1">Port</div>
                <div className="text-[10px] font-bold text-white">7052</div>
              </div>
            </div>
          </div>

          {/* Terminal Logs */}
          <div className="bg-[#050507] border border-white/5 rounded-3xl overflow-hidden shadow-2xl h-[350px] flex flex-col">
            <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-3 h-3 text-gray-500" />
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Real-time Logs</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            </div>
            <div className="flex-1 p-4 font-mono text-[10px] space-y-1.5 overflow-y-auto custom-scrollbar bg-black/20">
              <AnimatePresence>
                {logs.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={log.includes("[INFO]") ? "text-blue-400" : log.includes("[DEBUG]") ? "text-gray-600" : log.includes("[ERROR]") ? "text-red-500" : "text-gray-300"}
                  >
                    {log}
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={terminalEndRef} />
            </div>
          </div>
        </div>

        {/* Right Side: Music Player Engine */}
        <div className="lg:col-span-8">
          <div className="bg-[#0c0d12] border border-white/5 rounded-[40px] overflow-hidden shadow-2xl relative">
            
            {/* Player Visualizer Header */}
            <div className="relative h-64 overflow-hidden group bg-black/60">
              {currentTrack && (
                <Image 
                  src={`https://img.youtube.com/vi/${currentTrack.info.identifier}/maxresdefault.jpg`} 
                  alt="" 
                  fill 
                  className={`object-cover transition-all duration-1000 ${isPlaying ? "scale-110 blur-md opacity-30" : "scale-100 opacity-50"}`}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent" />
              
              {/* Visualizer Animation */}
              {isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center gap-1.5 px-12">
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [10, Math.random() * 60 + 20, 10] }}
                      transition={{ duration: 0.4 + Math.random() * 0.4, repeat: Infinity }}
                      className="w-1 bg-blue-500/30 rounded-full"
                    />
                  ))}
                </div>
              )}

              <div className="absolute bottom-8 left-8 right-8">
                {currentTrack ? (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-red-600 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">YouTube Source</span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{currentTrack.info.author}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white orbitron-font truncate max-w-full">
                      {currentTrack.info.title}
                    </h2>
                  </motion.div>
                ) : (
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-600 orbitron-font italic">No Track Active</h2>
                    <p className="text-xs text-gray-700 mt-2">Search for a song below to start the engine</p>
                  </div>
                )}
              </div>
            </div>

            <div className="p-8">
              {/* Controls & Progress */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 transition-all disabled:opacity-50"
                    disabled={!currentTrack}
                  >
                    {isPlaying ? <Pause className="w-10 h-10" /> : <Play className="w-10 h-10 translate-x-1" />}
                  </button>
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-5 h-5 text-gray-500" />
                    <div className="w-24 h-1 bg-white/5 rounded-full relative">
                      <div className="absolute left-0 top-0 h-full w-2/3 bg-blue-500 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full space-y-3">
                  <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-blue-500"
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    <span>{currentTrack ? `${Math.floor(progress * currentTrack.info.length / 100 / 60000)}:${Math.floor((progress * currentTrack.info.length / 100 / 1000) % 60).toString().padStart(2, '0')}` : "0:00"}</span>
                    <span>{currentTrack ? `${Math.floor(currentTrack.info.length / 60000)}:${Math.floor((currentTrack.info.length / 1000) % 60).toString().padStart(2, '0')}` : "0:00"}</span>
                  </div>
                </div>
              </div>

              {/* Real Search Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <form onSubmit={handleSearch} className="bg-white/5 border border-white/10 rounded-[32px] p-6">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Search YouTube</h4>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input 
                        type="text" 
                        placeholder="Song name..." 
                        className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:border-blue-500 outline-none transition-all"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full mt-4 bg-white/5 hover:bg-white/10 text-white text-xs font-bold py-3 rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-2"
                    >
                      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Fetch from Lavalink"}
                    </button>
                  </form>

                  <div className="bg-emerald-600/10 border border-emerald-500/20 rounded-[32px] p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <h4 className="text-sm font-bold text-white">Direct JDA Connection</h4>
                    </div>
                    <p className="text-[10px] text-gray-400 leading-relaxed">
                      Your requests are processed directly by the VisionHost node. Our infrastructure ensures minimal overhead between the search and the actual audio buffer.
                    </p>
                  </div>
                </div>

                <div className="bg-black/20 rounded-[32px] border border-white/5 overflow-hidden flex flex-col h-[400px]">
                  <div className="px-6 py-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Search Results</span>
                    <span className="text-[9px] bg-blue-600 px-2 py-0.5 rounded text-white font-bold">{tracks.length} results</span>
                  </div>
                  <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-2">
                    {tracks.length > 0 ? (
                      tracks.map((track, i) => (
                        <button 
                          key={track.info.identifier + i}
                          onClick={() => playTrack(track)}
                          className={`w-full flex items-center gap-3 p-3 rounded-2xl border transition-all text-left ${
                            currentTrack?.info.identifier === track.info.identifier 
                            ? "bg-blue-600/20 border-blue-500/50" 
                            : "bg-white/5 border-white/5 hover:bg-white/10"
                          }`}
                        >
                          <div className="w-12 h-12 bg-black/40 rounded-lg overflow-hidden flex-shrink-0 relative">
                             <Image src={`https://img.youtube.com/vi/${track.info.identifier}/default.jpg`} alt="" fill className="object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[11px] font-bold text-white truncate">{track.info.title}</div>
                            <div className="text-[9px] text-gray-500 truncate">{track.info.author}</div>
                          </div>
                          <div className="text-[9px] font-bold text-gray-600">
                            {Math.floor(track.info.length / 60000)}:{(Math.floor(track.info.length / 1000) % 60).toString().padStart(2, '0')}
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-gray-700 opacity-50 space-y-2">
                        <Search className="w-8 h-8" />
                        <p className="text-[10px] uppercase font-bold tracking-widest">No results yet</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  )
}

function StatBar({ icon: Icon, label, value, percent, color }: any) {
  const colorMap = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    emerald: "bg-emerald-500"
  }
  return (
    <div>
      <div className="flex justify-between items-end mb-2">
        <div className="flex items-center gap-2">
          <Icon className={`w-3.5 h-3.5 text-${color}-400`} />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</span>
        </div>
        <span className="text-xs font-bold text-white">{value}</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(percent, 100)}%` }}
          className={`h-full ${colorMap[color as keyof typeof colorMap]}`}
        />
      </div>
    </div>
  )
}
