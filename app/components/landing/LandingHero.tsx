"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Zap, Cpu, Server, Sparkles } from "lucide-react";

interface NodeConfig {
  name: string;
  domain: string;
  cpuModel: string;
  cores: string;
  ramType: string;
  ramLimit: string;
  baseDdosBlocked: number;
  nvmeRead: string;
  nvmeWrite: string;
  basePing: number;
  region: string;
}

const NODES: NodeConfig[] = [
  {
    name: "Mumbai, IN",
    domain: "node-mumbai-01.vexanode.cloud",
    cpuModel: "Ryzen 9 9950X",
    cores: "16 Cores / 32 Threads",
    ramType: "DDR5 ECC RAM",
    ramLimit: "64.0 GB",
    baseDdosBlocked: 14500,
    nvmeRead: "6.4 GB/s",
    nvmeWrite: "5.2 GB/s",
    basePing: 12,
    region: "Asia South"
  },
  {
    name: "Singapore, SG",
    domain: "node-sg-02.vexanode.cloud",
    cpuModel: "Ryzen 9 7950X3D",
    cores: "16 Cores / 32 Threads",
    ramType: "DDR5 ECC RAM",
    ramLimit: "128.0 GB",
    baseDdosBlocked: 8200,
    nvmeRead: "7.1 GB/s",
    nvmeWrite: "5.8 GB/s",
    basePing: 32,
    region: "Asia Southeast"
  },
  {
    name: "Frankfurt, DE",
    domain: "node-fra-01.vexanode.cloud",
    cpuModel: "AMD EPYC 9654",
    cores: "96 Cores / 192 Threads",
    ramType: "DDR5 Register RAM",
    ramLimit: "256.0 GB",
    baseDdosBlocked: 22400,
    nvmeRead: "6.8 GB/s",
    nvmeWrite: "5.5 GB/s",
    basePing: 118,
    region: "Europe West"
  },
  {
    name: "Miami, US",
    domain: "node-miami-03.vexanode.cloud",
    cpuModel: "Ryzen 9 9950X",
    cores: "16 Cores / 32 Threads",
    ramType: "DDR5 ECC RAM",
    ramLimit: "64.0 GB",
    baseDdosBlocked: 11900,
    nvmeRead: "6.4 GB/s",
    nvmeWrite: "5.2 GB/s",
    basePing: 210,
    region: "US East"
  },
  {
    name: "Sydney, AU",
    domain: "node-syd-02.vexanode.cloud",
    cpuModel: "Intel Xeon 8480+",
    cores: "56 Cores / 112 Threads",
    ramType: "DDR5 Server RAM",
    ramLimit: "128.0 GB",
    baseDdosBlocked: 6100,
    nvmeRead: "6.2 GB/s",
    nvmeWrite: "5.0 GB/s",
    basePing: 285,
    region: "Australia East"
  }
];

export default function LandingHero() {
  const [activeNodeIdx, setActiveNodeIdx] = useState(0);
  const [cpu, setCpu] = useState(28);
  const [ram, setRam] = useState(42.5);
  const [packets, setPackets] = useState(14500);
  const [simulatedPing, setSimulatedPing] = useState(12);

  const [cpuHistory, setCpuHistory] = useState<number[]>(
    Array.from({ length: 15 }, () => Math.floor(25 + Math.random() * 15))
  );
  const [ramHistory, setRamHistory] = useState<number[]>(
    Array.from({ length: 15 }, () => parseFloat((40 + Math.random() * 5).toFixed(1)))
  );
  
  const [logs, setLogs] = useState<{ time: string; text: string }[]>([]);

  const activeNode = NODES[activeNodeIdx];

  // Initialize and update logs
  useEffect(() => {
    const actions = [
      "DDoS filter analyzed request pool - 0 malicious packets",
      "BGP route optimization complete: latency minimized",
      "Ping sweep: node health status nominal",
      "NVMe status check: disk health 100%",
      "SSL certificate validation verified",
      "CPU governor scaled core frequencies",
      "RAM scrub cycle executed successfully",
      "Incoming connection routed to virtual node",
    ];

    const initialLogs = Array.from({ length: 3 }, (_, idx) => {
      const time = new Date(Date.now() - (3 - idx) * 4000).toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const text = actions[Math.floor(Math.random() * actions.length)];
      return { time, text };
    });
    setLogs(initialLogs);
  }, []);

  // Update dynamic values and history
  useEffect(() => {
    const interval = setInterval(() => {
      const nextCpu = Math.floor(20 + Math.random() * 20);
      const nextRam = parseFloat((40 + Math.random() * 4).toFixed(1));
      
      setCpu(nextCpu);
      setRam(nextRam);
      setCpuHistory(prev => [...prev.slice(1), nextCpu]);
      setRamHistory(prev => [...prev.slice(1), nextRam]);
      
      const basePackets = NODES[activeNodeIdx].baseDdosBlocked;
      setPackets(basePackets + Math.floor(Math.random() * 150) - 75);
      
      const basePing = NODES[activeNodeIdx].basePing;
      setSimulatedPing(basePing + Math.floor(Math.random() * 4) - 2);

      // Append log
      const actions = [
        "DDoS filter analyzed request pool - 0 malicious packets",
        "BGP route optimization complete: latency minimized",
        "Ping sweep: node health status nominal",
        "NVMe status check: disk health 100%",
        "SSL certificate validation verified",
        "CPU governor scaled core frequencies",
        "RAM scrub cycle executed successfully",
        "Incoming connection routed to virtual node",
      ];
      const time = new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const text = actions[Math.floor(Math.random() * actions.length)];
      setLogs(prev => [...prev.slice(1), { time, text }]);
    }, 2500);

    return () => clearInterval(interval);
  }, [activeNodeIdx]);

  const handleNodeChange = (idx: number) => {
    setActiveNodeIdx(idx);
    const node = NODES[idx];
    const initialCpu = Math.floor(20 + Math.random() * 20);
    const initialRam = parseFloat((40 + Math.random() * 5).toFixed(1));
    
    setCpu(initialCpu);
    setRam(initialRam);
    setPackets(node.baseDdosBlocked);
    setSimulatedPing(node.basePing);
    
    setCpuHistory(Array.from({ length: 15 }, () => Math.floor(20 + Math.random() * 20)));
    setRamHistory(Array.from({ length: 15 }, () => parseFloat((40 + Math.random() * 5).toFixed(1))));
  };

  const generateSparklinePath = (history: number[], minVal: number, maxVal: number, width = 120, height = 24) => {
    if (history.length === 0) return "";
    const range = maxVal - minVal || 1;
    return history.map((val, idx) => {
      const x = (idx / (history.length - 1)) * width;
      const y = height - ((val - minVal) / range) * height;
      return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(" ");
  };

  const drawSparkline = (history: number[], isCpu: boolean) => {
    const width = 120;
    const height = 24;
    const min = isCpu ? 15 : 35;
    const max = isCpu ? 45 : 50;
    const path = generateSparklinePath(history, min, max, width, height);
    const fillPath = path ? `${path} L ${width} ${height} L 0 ${height} Z` : "";
    const strokeColor = "#10b981";
    const gradId = isCpu ? "cpu-sparkline-grad" : "ram-sparkline-grad";
    
    return (
      <svg className="w-[120px] h-[24px] overflow-visible" viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.25" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0.0" />
          </linearGradient>
        </defs>
        {fillPath && (
          <path d={fillPath} fill={`url(#${gradId})`} />
        )}
        {path && (
          <path
            d={path}
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    );
  };

  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28 bg-zinc-950 text-white min-h-screen flex items-center">
      {/* Background ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{
            x: ["-10%", "10%", "-10%"],
            y: ["-5%", "5%", "-5%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[15%] top-0 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[130px] opacity-75" 
        />
        <motion.div 
          animate={{
            x: ["10%", "-10%", "10%"],
            y: ["5%", "-5%", "5%"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[15%] bottom-0 h-[600px] w-[600px] rounded-full bg-teal-500/5 blur-[150px] opacity-50" 
        />
        
        {/* Futuristic tech grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-80" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left: Copy & Pills */}
          <div className="flex flex-col justify-center">
            
            {/* Tech Badges / Pills */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-400 shadow-sm backdrop-blur-md hover:scale-[1.03] transition-transform duration-200 cursor-default"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                99.99% Uptime SLA Guaranteed
              </motion.span>
            </div>

            {/* Big Bold Heading using orbitron-font */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-black tracking-tight leading-[1.12] sm:text-5xl lg:text-[56px] text-zinc-100 orbitron-font uppercase"
            >
              Ultimate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
                Game &amp; VPS Hosting
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-400"
            >
              Deploy Games, VPS, Bots, and Databases instantly. 99.99% uptime, active DDoS protection, and global low-latency locations.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/discord"
                className="relative group overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black font-extrabold text-sm px-7 py-4 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(16,185,129,0.3)] hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider font-mono text-xs">
                  Get free Discord hosting
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-zinc-200/30 to-transparent transition-transform duration-1000 ease-out" />
              </Link>
              <Link
                href="#pricing"
                className="relative group overflow-hidden inline-flex items-center justify-center rounded-xl border border-zinc-800 hover:border-emerald-500/50 bg-zinc-900/40 hover:bg-emerald-500/5 text-zinc-300 hover:text-white font-extrabold text-sm px-7 py-4 transition-all duration-300 uppercase tracking-wider backdrop-blur-md font-mono text-xs"
              >
                View all products
              </Link>
            </motion.div>

            {/* Micro bullet features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-zinc-400"
            >
              {[
                { icon: Zap, label: "Instant deployments", desc: "Ready in 5 seconds" },
                { icon: ShieldCheck, label: "DDoS protection by default", desc: "Anycast filter network" },
                { icon: Cpu, label: "Enterprise NVMe SSD", desc: "PCIe Gen 4/5 throughput" },
              ].map(({ icon: Icon, label, desc }) => (
                <span key={label} className="inline-flex items-center gap-2.5 bg-zinc-900/30 border border-zinc-800/40 rounded-xl px-3.5 py-2 backdrop-blur-sm">
                  <Icon className="h-4 w-4 text-emerald-400" />
                  <span className="flex flex-col">
                    <span className="font-bold text-zinc-200 text-[11px]">{label}</span>
                    <span className="text-[9px] text-zinc-500">{desc}</span>
                  </span>
                </span>
              ))}
            </motion.div>

          </div>

          {/* Right: Premium Cloud Server Performance Dashboard */}
          <div className="relative">
            {/* Live Monitoring Dashboard Wrapper */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60 shadow-2xl backdrop-blur-md relative"
            >
              {/* Glowing side border highlights */}
              <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-emerald-500/20 via-transparent to-transparent" />
              <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-transparent to-emerald-500/15" />
              
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/40 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-[10px] font-bold text-zinc-400 tracking-wider">
                    vexanode@monitoring: ~
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-[9px] font-bold tracking-wider text-emerald-400 uppercase">
                    system online
                  </span>
                </div>
              </div>

              {/* Datacenter Region Select tabs */}
              <div className="flex border-b border-zinc-800/60 bg-zinc-900/20 overflow-x-auto scrollbar-none">
                {NODES.map((node, idx) => {
                  const isActive = idx === activeNodeIdx;
                  return (
                    <button
                      key={node.name}
                      onClick={() => handleNodeChange(idx)}
                      className={`flex-1 min-w-[95px] py-3 px-2 text-center transition-all duration-300 font-mono text-[10px] border-r border-zinc-900 last:border-r-0 flex flex-col items-center gap-0.5 group relative ${
                        isActive
                          ? "bg-zinc-950/80 text-emerald-400 font-bold"
                          : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/10"
                      }`}
                    >
                      <span className="relative flex items-center gap-1.5">
                        <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" : "bg-zinc-700 group-hover:bg-zinc-500"} transition-colors`} />
                        {node.name.split(',')[0]}
                      </span>
                      <span className="text-[8.5px] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                        {node.basePing}ms
                      </span>
                      
                      {isActive && (
                        <motion.div
                          layoutId="activeTabUnderline"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Specs & Performance Metrics */}
              <div className="p-6 space-y-6">
                
                {/* Domain & Live Ping Stats Info Row */}
                <div className="flex justify-between items-center bg-zinc-900/20 border border-zinc-900/50 rounded-xl px-4 py-2.5 font-mono text-[10px]">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="text-zinc-500 font-medium">Host:</span>
                    <span className="text-zinc-300 font-bold truncate">{activeNode.domain}</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    <span className="text-zinc-500 font-medium">Ping:</span>
                    <span className="text-emerald-400 font-bold">{simulatedPing}ms</span>
                  </div>
                </div>

                {/* Metric 1: CPU Allocation */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <span className="font-bold text-[11px] block">{activeNode.cpuModel} CPU</span>
                        <span className="text-[9px] text-zinc-500 font-normal">{activeNode.cores}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-emerald-400 font-bold text-xs">{cpu}%</span>
                      <span className="text-[9px] text-zinc-500 block font-normal">39°C Temp</span>
                    </div>
                  </div>
                  
                  {/* Progress bar + Sparkline Container */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                          animate={{ width: `${cpu}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                    <div className="shrink-0 bg-zinc-900/30 p-1.5 rounded-lg border border-zinc-900/60">
                      {drawSparkline(cpuHistory, true)}
                    </div>
                  </div>
                </div>

                {/* Metric 2: Memory Allocation */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <Server className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <span className="font-bold text-[11px] block">DDR5 Memory</span>
                        <span className="text-[9px] text-zinc-500 font-normal">{activeNode.ramType}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-emerald-400 font-bold text-xs">{ram}%</span>
                      <span className="text-[9px] text-zinc-500 block font-normal">Limit: {activeNode.ramLimit}</span>
                    </div>
                  </div>
                  
                  {/* Progress bar + Sparkline Container */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                          animate={{ width: `${ram}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                    <div className="shrink-0 bg-zinc-900/30 p-1.5 rounded-lg border border-zinc-900/60">
                      {drawSparkline(ramHistory, false)}
                    </div>
                  </div>
                </div>

                {/* Grid stats for Network and NVMe IO */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* DDoS Status */}
                  <div className="relative p-3.5 rounded-xl border border-zinc-900 bg-zinc-900/20 space-y-1.5 overflow-hidden group">
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-y-0 w-[1.5px] bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"
                    />
                    <div className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider font-mono">DDoS Protection</div>
                    <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                      Active Filter
                    </div>
                    <div className="text-[9px] text-zinc-400 font-mono tracking-tight">
                      <span className="text-zinc-200 font-semibold">{packets.toLocaleString()}</span> Pkts/s
                    </div>
                  </div>

                  {/* NVMe IO status */}
                  <div className="relative p-3.5 rounded-xl border border-zinc-900 bg-zinc-900/20 space-y-1.5 overflow-hidden group">
                    <motion.div
                      animate={{ x: ["100%", "-100%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-y-0 w-[1.5px] bg-gradient-to-b from-transparent via-teal-500/15 to-transparent"
                    />
                    <div className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider font-mono">NVMe throughput</div>
                    <div className="text-xs font-bold text-zinc-200 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      NVMe Gen 4
                    </div>
                    <div className="text-[9.5px] text-zinc-400 font-mono truncate">
                      {activeNode.nvmeRead} R / {activeNode.nvmeWrite} W
                    </div>
                  </div>

                </div>

                {/* Node Datacenter Live Stream Log Terminal */}
                <div className="border-t border-zinc-900 pt-4 space-y-2">
                  <div className="text-[9.5px] uppercase font-bold text-zinc-500 tracking-wider font-mono flex justify-between items-center">
                    <span>Live logs: {activeNode.name.split(',')[0]}</span>
                    <span className="text-[8px] text-emerald-500/60 font-normal lowercase tracking-normal flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                      active stream
                    </span>
                  </div>
                  <div className="bg-zinc-950/80 rounded-xl p-3 border border-zinc-900/60 font-mono text-[9px] text-zinc-400 space-y-1.5 h-[75px] flex flex-col justify-end overflow-hidden">
                    {logs.map((log, i) => (
                      <div key={i} className="flex gap-1.5 truncate">
                        <span className="text-emerald-500 select-none">➜</span>
                        <span className="text-zinc-600 select-none">[{log.time}]</span>
                        <span className="text-zinc-300">{log.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
