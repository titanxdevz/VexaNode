'use client'

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Search, Clock, Sparkles, Layers, Cpu, Server, Terminal, Shield, Music, Bookmark } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { blogs } from "./data";
import { useState, useMemo } from "react";

const CATEGORIES = [
  { name: "All", icon: Layers },
  { name: "Minecraft", icon: Cpu },
  { name: "Discord Bots", icon: Terminal },
  { name: "Lavalink", icon: Music },
  { name: "VPS", icon: Server },
  { name: "Tutorials", icon: Terminal },
  { name: "Hosting Guides", icon: Shield },
];

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = blogs[0];
  const gridPosts = selectedCategory === "All" && !searchQuery ? filteredBlogs.slice(1) : filteredBlogs;

  return (
    <div className="min-h-screen bg-[#06080d] text-white selection:bg-[#10b981]/30 relative overflow-hidden font-sans">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-10%,rgba(16,185,129,0.08),transparent_100%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <Navbar />

      <main className="relative pt-32 sm:pt-36 pb-28 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-[#10b981]/10 text-[#10b981] px-4 py-1.5 rounded-full mb-5 border border-[#10b981]/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold tracking-wider uppercase">VexaNode Technical Knowledge Base</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 orbitron-font tracking-tight leading-tight">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#059669]">Guides & Tutorials</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
              Server optimization blueprints, network tuning benchmarks, and production-ready tutorials for Minecraft, Discord bots, Lavalink, and Linux VPS infrastructure.
            </p>

            {/* Live Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search across all 10 guides (e.g., TPS, Lavalink, VPS, RAM)..."
                className="w-full bg-[#0a0d14]/90 border border-white/10 rounded-2xl py-3.5 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/20 transition-all shadow-xl backdrop-blur-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </motion.div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                    isActive
                      ? "bg-[#10b981] text-black border-[#10b981] shadow-[0_0_20px_rgba(16,185,129,0.3)] font-bold"
                      : "bg-[#0a0d14] text-gray-400 border-white/[0.08] hover:border-white/20 hover:text-white"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-black" : "text-[#10b981]"}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Featured Article Card (Text-First Design) */}
          {selectedCategory === "All" && !searchQuery && featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group relative block rounded-3xl bg-gradient-to-b from-[#0e1420] via-[#0a0e17] to-[#070a10] border border-[#10b981]/30 hover:border-[#10b981] transition-all duration-500 p-8 sm:p-10 shadow-2xl overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#10b981] text-black font-extrabold text-[11px] px-3 py-1 rounded-md uppercase tracking-wider shadow-sm">
                    Featured Cornerstone
                  </span>
                  <span className="text-xs text-[#34d399] font-bold">
                    {featuredPost.category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 orbitron-font leading-tight group-hover:text-[#10b981] transition-colors max-w-4xl">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-4xl">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
                  <div className="flex items-center gap-5 text-xs text-gray-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#10b981]" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#10b981]" />
                      {featuredPost.readTime}
                    </span>
                    <span className="text-gray-500">• By {featuredPost.author}</span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm font-bold text-[#10b981] group-hover:translate-x-1.5 transition-transform">
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Grid of Clean Tech Articles (No Images) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((blog, index) => (
              <motion.article
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 6) * 0.05 }}
                className="group flex flex-col bg-[#0a0d14] border border-white/[0.08] hover:border-[#10b981]/50 rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:-translate-y-1"
              >
                <Link href={`/blog/${blog.slug}`} className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#10b981]/15 text-[#10b981] text-[11px] font-black px-3 py-1 rounded-lg border border-[#10b981]/25 uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-gray-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#10b981]" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#10b981] transition-colors leading-snug line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {blog.excerpt}
                  </p>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-gray-400 group-hover:text-[#10b981] transition-colors">
                    <span className="flex items-center gap-1.5 text-[11px] text-gray-500">
                      <Calendar className="w-3.5 h-3.5 text-[#10b981]" />
                      {blog.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#10b981]" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Empty Search State */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-20 bg-[#0a0d14] rounded-3xl border border-white/[0.08] max-w-xl mx-auto">
              <Search className="w-10 h-10 text-gray-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-1">No articles found</h3>
              <p className="text-xs text-gray-400 mb-6">
                We couldn&apos;t find any tutorials matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="bg-[#10b981] hover:bg-[#059669] text-black font-extrabold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Bottom Callout Banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0b1019] via-[#0e1624] to-[#0b1019] border border-[#10b981]/30 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-[#10b981]/10 text-[#10b981] text-xs font-semibold px-3 py-1 rounded-md border border-[#10b981]/20 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to deploy your game or bot nodes?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold orbitron-font text-white mb-4">
                Deploy High-Performance Infrastructure in Seconds
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mb-8 leading-relaxed">
                Enterprise AMD hardware, NVMe SSD storage, unmetered network bandwidth, and always-on DDoS mitigation backed by our 99.9% uptime SLA.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/games"
                  className="bg-[#10b981] hover:bg-[#059669] text-black font-extrabold px-6 py-3 rounded-xl text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  Minecraft Servers
                </Link>
                <Link
                  href="/discord"
                  className="bg-white/[0.05] hover:bg-white/[0.1] text-white font-bold px-6 py-3 rounded-xl text-xs border border-white/[0.1] transition-all"
                >
                  Discord Bot Hosting
                </Link>
                <Link
                  href="/vps"
                  className="bg-white/[0.05] hover:bg-white/[0.1] text-white font-bold px-6 py-3 rounded-xl text-xs border border-white/[0.1] transition-all"
                >
                  Cloud VPS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
