"use client";

import { useState } from "react";
import { Cpu, Zap, Shield, HardDrive, Check, Headphones, Globe, Terminal, ArrowRight, MessageSquare } from "lucide-react";
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

const selfManagedPlans = [
  {
    id: "self-starter",
    name: "Self-Managed — Starter",
    basePrice: 35,
    ram: "512MB DDR5",
    cpu: "50% CPU Core",
    storage: "1GB NVMe",
    region: "All Locations",
    popular: false
  },
  {
    id: "self-basic",
    name: "Self-Managed — Basic",
    basePrice: 99,
    ram: "1GB DDR5",
    cpu: "100% Dedicated Core",
    storage: "2GB NVMe",
    region: "All Locations",
    popular: false
  },
  {
    id: "self-silver",
    name: "Self-Managed — Silver",
    basePrice: 129,
    ram: "2GB DDR5",
    cpu: "150% Dedicated Core",
    storage: "4GB NVMe",
    region: "All Locations",
    popular: true
  },
  {
    id: "self-gold",
    name: "Self-Managed — Gold",
    basePrice: 199,
    ram: "4GB DDR5",
    cpu: "200% Dedicated Cores",
    storage: "8GB NVMe",
    region: "All Locations",
    popular: false
  },
  {
    id: "self-platinum",
    name: "Self-Managed — Platinum",
    basePrice: 279,
    ram: "6GB DDR5",
    cpu: "250% Dedicated Cores",
    storage: "12GB NVMe",
    region: "All Locations",
    popular: false
  },
  {
    id: "self-diamond",
    name: "Self-Managed — Diamond",
    basePrice: 349,
    ram: "8GB DDR5",
    cpu: "300% Dedicated Cores",
    storage: "16GB NVMe",
    region: "All Locations",
    popular: false
  }
];

const supportedPlatforms = [
  { name: "YouTube & YouTube Music", icon: FaYoutube, color: "text-red-500", bg: "bg-red-500/10 border-red-500/20" },
  { name: "Spotify Playlists", icon: FaSpotify, color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { name: "SoundCloud Tracks", icon: FaSoundcloud, color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
  { name: "Twitch Streams", icon: FaTwitch, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
  { name: "Apple Music", icon: FaApple, color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" },
  { name: "Amazon Music", icon: FaAmazon, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  { name: "Vimeo Streams", icon: FaVimeo, color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/20" },
  { name: "Deezer & Bandcamp", icon: FaMusic, color: "text-teal-400", bg: "bg-teal-500/10 border-teal-500/20" },
];

export default function SelfManagedLavalinkPage() {
  const { formatPrice } = useCurrency();
  const [selectedCycle, setSelectedCycle] = useState("monthly");

  const currentCycle = cycles.find(c => c.id === selectedCycle) || cycles[0];

  return (
    <div className="min-h-screen bg-[#07090e] text-white">
      <PageMeta
        title="Self-Managed Lavalink Hosting | Full Developer Control"
        description="Self-managed Lavalink hosting for Discord audio bots. Full root SSH/SFTP access, custom application.yml, custom plugins, and guaranteed Ryzen 9 CPU performance."
      />
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header / Hero */}
        <section className="relative px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-semibold text-emerald-400 mb-6">
            <Headphones className="h-3.5 w-3.5" />
            <span>Developer-First Control · Full SFTP & Panel Access</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
            Self-Managed Lavalink Hosting
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            Unthrottled bare-metal Lavalink instances built for developers. Full root control over custom <code className="text-emerald-400 font-mono">application.yml</code> configs, YouTube/Spotify plugins, JVM flags, and SFTP file access.
          </p>

          {/* Switcher Banner to Managed */}
          <div className="mt-8 inline-flex items-center gap-3 bg-zinc-900/80 border border-zinc-800 p-2 pl-4 rounded-full text-xs text-zinc-300">
            <span>Want zero configuration and automated node updates?</span>
            <Link
              href="/lavalink/managed"
              className="inline-flex items-center gap-1 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-3 py-1 rounded-full transition-colors"
            >
              Managed Lavalink
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

        {/* Self-Managed Plans Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selfManagedPlans.map(plan => {
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
                      Developer Value
                    </span>
                  )}

                  <div className="mb-4">
                    <h3 className="text-base font-bold text-white leading-snug">{plan.name}</h3>
                    <p className="text-xs text-zinc-400 mt-1">Self-Managed Instance</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-extrabold text-white font-mono">
                      {formatPrice(discountedPrice)}
                    </span>
                    <span className="text-xs text-zinc-500"> / month</span>
                  </div>

                  <div className="space-y-3 text-xs text-zinc-300 mb-8 flex-1">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-emerald-400" />
                      <span>{plan.cpu}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-emerald-400" />
                      <span>{plan.ram}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-emerald-400" />
                      <span>{plan.storage}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      <span>Full SFTP / SSH Access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-emerald-400" />
                      <span>{plan.region}</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <Check className="w-4 h-4" />
                      <span>Custom JAR Plugins Allowed</span>
                    </div>
                  </div>

                  <Link
                    href={`https://billing.vexanode.cloud/store/lavalink-self/${plan.id}`}
                    className={`w-full py-3 rounded-xl font-bold text-xs text-center transition-all ${
                      plan.popular
                        ? "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-md shadow-emerald-500/20"
                        : "bg-zinc-800 hover:bg-zinc-700 text-white"
                    }`}
                  >
                    Deploy Developer Node
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        {/* Audio Sources Showcase */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 lg:p-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 mb-3">
                Unlimited Audio Plugins
              </span>
              <h2 className="text-2xl font-extrabold text-white">
                Support For All Popular Audio Engines
              </h2>
              <p className="mt-2 text-xs text-zinc-400">
                Configure your own application.yml to enable YouTube, Spotify, SoundCloud, Deezer, Apple Music, Twitch, Vimeo, and custom plugins.
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
