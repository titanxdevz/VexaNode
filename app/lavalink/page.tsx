"use client";

import { Sparkles, Headphones, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { FaYoutube, FaSpotify, FaSoundcloud, FaTwitch, FaApple, FaAmazon, FaVimeo, FaMusic } from "react-icons/fa";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PageMeta } from "../components/PageMeta";

const supportedPlatforms = [
  { name: "YouTube & YouTube Music", icon: FaYoutube, color: "text-red-500", bg: "bg-red-500/10 border-red-500/20" },
  { name: "Spotify Playlists", icon: FaSpotify, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { name: "SoundCloud Tracks", icon: FaSoundcloud, color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
  { name: "Twitch Live Audio", icon: FaTwitch, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
  { name: "Apple Music", icon: FaApple, color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" },
  { name: "Amazon Music", icon: FaAmazon, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  { name: "Vimeo Streams", icon: FaVimeo, color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20" },
  { name: "Deezer & Bandcamp", icon: FaMusic, color: "text-teal-400", bg: "bg-teal-500/10 border-teal-500/20" },
];

export default function LavalinkOverviewPage() {
  return (
    <div className="min-h-screen bg-[#07090e] text-white">
      <PageMeta
        title="Lavalink Hosting | Managed & Self-Managed Audio Nodes"
        description="Enterprise Lavalink v4 hosting for Discord audio bots. Choose between fully managed hands-off hosting or self-managed root access nodes on Ryzen 9 hardware."
      />
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-semibold text-emerald-400 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>High Performance Audio Infrastructure</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
            Choose Your Lavalink Hosting
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Whether you need hands-off managed servers with automated setup and updates, or full root access for custom bot configurations, VexaNode delivers sub-15ms audio streaming.
          </p>
        </section>

        {/* 2 Main Options Cards (Managed vs Self-Managed) */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Managed Lavalink */}
          <div className="group relative rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-emerald-950/20 to-zinc-900/40 p-8 lg:p-10 flex flex-col justify-between hover:border-emerald-500 transition-all duration-300 shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black tracking-widest uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                Zero Setup · Fully Managed
              </span>
              <h2 className="text-2xl font-bold text-white mt-4">Managed Lavalink</h2>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Pre-configured audio nodes handled 100% by the VexaNode engineering team. Automatic YouTube, Spotify & Deezer plugin maintenance, instant SSL credentials, and 99.95% uptime.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Pre-installed Lavalink & Audio Plugins</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>24/7 Uptime & automated updates included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>30+ Audio sources supported (YouTube, Spotify, Deezer, etc.)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-400">Starting at</span>
                <div className="text-xl font-bold text-white font-mono">₹140 / mo</div>
              </div>
              <Link
                href="/lavalink/managed"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md shadow-emerald-500/20"
              >
                View Managed Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Self-Managed Lavalink */}
          <div className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 lg:p-10 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 mb-6">
                <Headphones className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400 bg-zinc-800 border border-zinc-700 px-3 py-1 rounded-full">
                Developer Control
              </span>
              <h2 className="text-2xl font-bold text-white mt-4">Self-Managed Lavalink</h2>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Direct root SSH and SFTP file access. Edit custom <code className="text-emerald-400 font-mono">application.yml</code> settings, load custom JAR extensions, and tune JVM memory flags.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Full SFTP & Pterodactyl Control Panel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Custom JAR & source plugin support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Guaranteed unthrottled Ryzen 9 CPU</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-400">Starting at</span>
                <div className="text-xl font-bold text-white font-mono">₹35 / mo</div>
              </div>
              <Link
                href="/lavalink/self-managed"
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all"
              >
                View Developer Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </section>

        {/* Audio Sources Showcase */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 lg:p-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 mb-3">
                30+ Supported Audio Sources
              </span>
              <h2 className="text-2xl font-extrabold text-white">
                Stream From All Your Favorite Music Engines
              </h2>
              <p className="mt-2 text-xs text-zinc-400">
                YouTube, Spotify, SoundCloud, Deezer, Apple Music, Twitch, Vimeo, Amazon Music, and more.
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
      </main>

      <Footer />
    </div>
  );
}
