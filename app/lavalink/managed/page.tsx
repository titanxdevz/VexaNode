"use client";

import { useState } from "react";
import { Cpu, Zap, Shield, HardDrive, Music, Check, Sparkles, Server, ArrowRight, MessageSquare } from "lucide-react";
import { FaYoutube, FaSpotify, FaSoundcloud, FaTwitch, FaApple, FaAmazon, FaVimeo, FaMusic } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { PageMeta } from "../../components/PageMeta";
import { useCurrency } from "../../contexts/CurrencyContext";

const cycles = [
  { id: "monthly", name: "Monthly", discount: 0 },
  { id: "quarterly", name: "Quarterly", discount: 0 },
  { id: "semi-annually", name: "Semi-Annually", discount: 0.13 },
  { id: "annually", name: "Annually", discount: 0.24 }
];

const managedPlans = [
  {
    id: "managed-basic",
    name: "Managed Lavalink — Basic",
    basePrice: 140,
    ram: "2GB DDR4",
    cpu: "1 Core",
    storage: "5GB NVMe",
    sourcesText: "YouTube, Spotify, SoundCloud, Deezer, Apple Music +5 more",
    sourcesList: [
      { name: "YouTube", icon: FaYoutube, color: "text-red-500" },
      { name: "Spotify", icon: FaSpotify, color: "text-emerald-400" },
      { name: "SoundCloud", icon: FaSoundcloud, color: "text-orange-400" },
      { name: "Apple Music", icon: FaApple, color: "text-rose-400" },
    ],
    badgeExtra: "+5 more sources",
    popular: false
  },
  {
    id: "managed-starter",
    name: "Managed Lavalink — Starter",
    basePrice: 190,
    ram: "4GB DDR4",
    cpu: "2 Cores",
    storage: "8GB NVMe",
    sourcesText: "YouTube, Spotify, SoundCloud, Deezer, Apple Music, Bandcamp +8 more",
    sourcesList: [
      { name: "YouTube", icon: FaYoutube, color: "text-red-500" },
      { name: "Spotify", icon: FaSpotify, color: "text-emerald-400" },
      { name: "SoundCloud", icon: FaSoundcloud, color: "text-orange-400" },
      { name: "Apple Music", icon: FaApple, color: "text-rose-400" },
      { name: "Amazon", icon: FaAmazon, color: "text-amber-400" },
    ],
    badgeExtra: "+8 more sources",
    popular: true,
    tag: "Popular Choice"
  },
  {
    id: "managed-gold",
    name: "Managed Lavalink — Gold",
    basePrice: 280,
    ram: "6GB DDR4",
    cpu: "6 Cores",
    storage: "15GB NVMe",
    sourcesText: "YouTube, Spotify, SoundCloud, Deezer, Apple Music, Bandcamp, Twitch +12 more",
    sourcesList: [
      { name: "YouTube", icon: FaYoutube, color: "text-red-500" },
      { name: "Spotify", icon: FaSpotify, color: "text-emerald-400" },
      { name: "SoundCloud", icon: FaSoundcloud, color: "text-orange-400" },
      { name: "Twitch", icon: FaTwitch, color: "text-purple-400" },
      { name: "Apple Music", icon: FaApple, color: "text-rose-400" },
    ],
    badgeExtra: "+12 more sources",
    popular: false
  },
  {
    id: "managed-pro",
    name: "Managed Lavalink — Pro",
    basePrice: 500,
    ram: "High-end specs",
    cpu: "Priority Compute",
    storage: "Custom NVMe",
    sourcesText: "All 30+ sources supported (YouTube, Spotify, SoundCloud, Deezer, Apple Music, Bandcamp, Twitch, Vimeo & more)",
    sourcesList: [
      { name: "YouTube", icon: FaYoutube, color: "text-red-500" },
      { name: "Spotify", icon: FaSpotify, color: "text-emerald-400" },
      { name: "SoundCloud", icon: FaSoundcloud, color: "text-orange-400" },
      { name: "Twitch", icon: FaTwitch, color: "text-purple-400" },
      { name: "Vimeo", icon: FaVimeo, color: "text-sky-400" },
      { name: "Apple", icon: FaApple, color: "text-rose-400" },
    ],
    badgeExtra: "All 30+ Sources",
    popular: false
  }
];

const supportedPlatforms = [
  { name: "YouTube & YouTube Music", icon: FaYoutube, color: "text-red-500", bg: "bg-red-500/10 border-red-500/20" },
  { name: "Spotify Playlists & Tracks", icon: FaSpotify, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { name: "SoundCloud HD Audio", icon: FaSoundcloud, color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
  { name: "Twitch Live Streams", icon: FaTwitch, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
  { name: "Apple Music Streams", icon: FaApple, color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" },
  { name: "Amazon Music & Podcasts", icon: FaAmazon, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  { name: "Vimeo & Direct HTTP", icon: FaVimeo, color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20" },
  { name: "Deezer & Bandcamp", icon: FaMusic, color: "text-teal-400", bg: "bg-teal-500/10 border-teal-500/20" },
];

export default function ManagedLavalinkPage() {
  const { formatPrice } = useCurrency();
  const [selectedCycle, setSelectedCycle] = useState("monthly");

  const currentCycle = cycles.find(c => c.id === selectedCycle) || cycles[0];

  return (
    <div className="min-h-screen bg-[#07090e] text-white">
      <PageMeta
        title="Managed Lavalink Hosting | High Performance Audio Nodes"
        description="Zero setup, fully managed Lavalink hosting for Discord audio bots. Setup, config, and 99.95% uptime included."
      />
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header / Hero */}
        <section className="relative px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-semibold text-emerald-400 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Fully Managed by VexaNode Team — Setup, Config & Uptime Included</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
            Managed Lavalink Hosting
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            High performance pre-configured audio nodes for Discord music bots. Fully handled by our engineering team—DM us or open a ticket to deploy!
          </p>

          {/* Switcher Banner to Self-Managed */}
          <div className="mt-8 inline-flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 p-2 pl-4 rounded-full text-xs text-zinc-300">
            <span>Prefer root SSH access and custom application.yml files?</span>
            <Link
              href="/lavalink/self-managed"
              className="inline-flex items-center gap-1 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-3 py-1 rounded-full transition-colors"
            >
              Self-Managed Lavalink
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </section>

        {/* Billing Cycle Selector */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 flex justify-center">
          <div className="inline-flex p-1 rounded-xl bg-zinc-900/80 border border-zinc-800">
            {cycles.map(cycle => (
              <button
                key={cycle.id}
                onClick={() => setSelectedCycle(cycle.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  selectedCycle === cycle.id
                    ? "bg-emerald-500 text-zinc-950 shadow-md"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {cycle.name}
                {cycle.discount > 0 && (
                  <span className="ml-1.5 text-[9px] font-black px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                    -{Math.round(cycle.discount * 100)}%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Managed Plans Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managedPlans.map(plan => {
              const discountedPrice = Math.round(plan.basePrice * (1 - currentCycle.discount));
              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-2xl border bg-zinc-900/30 p-6 transition-all ${
                    plan.popular
                      ? "border-emerald-500 shadow-lg shadow-emerald-500/10 bg-zinc-900/60"
                      : "border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {plan.tag || "Popular Choice"}
                    </span>
                  )}

                  <div className="mb-4">
                    <h3 className="text-base font-bold text-white leading-snug">{plan.name}</h3>
                    <p className="text-xs text-zinc-400 mt-1">Managed Audio Node</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-extrabold text-white font-mono">
                      {formatPrice(discountedPrice)}
                    </span>
                    <span className="text-xs text-zinc-500"> / month</span>
                  </div>

                  {/* Specs list */}
                  <div className="space-y-2.5 text-xs text-zinc-300 mb-6 font-mono bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/80">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500 text-[10px] uppercase">Memory</span>
                      <span className="font-bold text-white">{plan.ram}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500 text-[10px] uppercase">Compute</span>
                      <span className="font-bold text-white">{plan.cpu}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-500 text-[10px] uppercase">Storage</span>
                      <span className="font-bold text-white">{plan.storage}</span>
                    </div>
                  </div>

                  {/* Supported Audio Sources with Icons */}
                  <div className="mb-8 space-y-2.5 flex-1">
                    <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                      Supported Audio Sources:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {plan.sourcesList.map((src, i) => {
                        const IconComp = src.icon;
                        return (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-lg text-[10px] font-semibold text-zinc-200"
                          >
                            <IconComp className={`w-3 h-3 ${src.color}`} />
                            {src.name}
                          </span>
                        );
                      })}
                      <span className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-lg text-[9px] font-bold text-emerald-400">
                        {plan.badgeExtra}
                      </span>
                    </div>
                    <p className="text-[10px] text-zinc-400 leading-normal mt-2 italic">
                      {plan.sourcesText}
                    </p>
                  </div>

                  <Link
                    href="https://discord.gg/syHFbR5yBQ"
                    target="_blank"
                    className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-all flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-md shadow-emerald-500/20"
                        : "bg-zinc-800 hover:bg-zinc-700 text-white"
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Open Ticket to Deploy
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-zinc-400 font-medium">
            💡 <span className="text-zinc-200 font-bold">Fully managed by VexaNode Team</span> — setup, configuration & 99.95% uptime included. DM us or open a ticket on Discord to deploy instantly!
          </div>
        </section>

        {/* Supported Audio Sources Brand Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 lg:p-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 mb-3">
                30+ Supported Audio Sources
              </span>
              <h2 className="text-2xl font-extrabold text-white">
                Stream Seamlessly From Any Platform
              </h2>
              <p className="mt-2 text-xs text-zinc-400">
                Our Lavalink nodes are pre-loaded with high-speed plugin connectors for YouTube, Spotify, SoundCloud, Deezer, Apple Music, Twitch, and custom HTTP streams.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {supportedPlatforms.map((plat, idx) => {
                const IconComp = plat.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border ${plat.bg} backdrop-blur-sm transition-all hover:scale-[1.02]`}
                  >
                    <div className="p-2 rounded-xl bg-zinc-950/80 border border-zinc-800">
                      <IconComp className={`w-5 h-5 ${plat.color}`} />
                    </div>
                    <span className="text-xs font-bold text-zinc-200">
                      {plat.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Managed Lavalink */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Zero Configuration</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                We handle the application.yml, SSL certificates, port forwarding, and node passcodes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">DDoS Protection</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                High capacity DDoS filters protect your Lavalink nodes from UDP/TCP floods.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">99.95% Network SLA</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Enterprise Ryzen 9 9950X hardware guarantees stutter-free 24/7 audio playback.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
