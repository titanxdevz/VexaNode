"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Globe, ChevronRight, CheckCircle2, ShieldCheck, Zap, Server, Loader2, Sparkles, X } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import { useCurrency } from "../contexts/CurrencyContext"

const tlds = [
  { name: ".com", firstYear: 350, renewal: 1119, popular: true, tag: "Popular" },
  { name: ".in", firstYear: 699, renewal: 699, popular: false, tag: "Local" },
  { name: ".tech", firstYear: 819, renewal: 4799, popular: false },
  { name: ".cloud", firstYear: 319, renewal: 2499, popular: false },
  { name: ".xyz", firstYear: 269, renewal: 2099, popular: false },
  { name: ".site", firstYear: 219, renewal: 2499, popular: false },
  { name: ".top", firstYear: 219, renewal: 2499, popular: false },
  { name: ".lol", firstYear: 219, renewal: 2599, popular: false },
  { name: ".store", firstYear: 219, renewal: 3599, popular: false },
  { name: ".shop", firstYear: 219, renewal: 2499, popular: false },
  { name: ".fun", firstYear: 209, renewal: 2799, popular: false },
]

export default function DomainsPage() {
  const { formatPrice } = useCurrency()
  const [search, setSearch] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchResult, setSearchResult] = useState<{ domain: string, available: boolean } | null>(null)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!search) return
    setIsSearching(true)
    setSearchResult(null)
    
    try {
      const domainToCheck = search.includes(".") ? search : `${search}.com`
      const res = await fetch(`/api/domains/check?domain=${domainToCheck}`)
      const data = await res.json()
      
      setSearchResult({
        domain: data.domain,
        available: data.available
      })
    } catch (error) {
      console.error("Domain check failed", error)
    } finally {
      setIsSearching(false)
    }
  }

  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#d97757]/30">
      <PageMeta title="Domain Names" />
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-[#d97757]/10 vx-accent-text text-[10px] font-bold px-4 py-1 rounded-full border border-[#d97757]/20 mb-6 uppercase tracking-widest"
          >
            Domain Registration
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-8 orbitron-font"
          >
            Find Your Perfect <br />
            <span className="text-[#d97757] text-neon-glow-brand">Domain Name</span>
          </motion.h1>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative group">
            <form onSubmit={handleSearch} className="relative z-10 flex gap-2 p-2 vx-card border vx-line rounded-2xl md:rounded-full backdrop-blur-xl focus-within:border-[#d97757]/50 transition-all">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 vx-faint" />
                <input
                  type="text"
                  placeholder="search-your-dream-domain.com"
                  className="w-full bg-transparent border-none py-4 pl-12 pr-4 text-sm focus:ring-0 outline-none vx-ink placeholder-gray-500"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="vx-btn-accent px-10 py-4 rounded-xl md:rounded-full font-bold transition-all flex items-center gap-2"
              >
                {isSearching ? <Loader2 className="w-5 h-5 animate-spin" /> : "Search"}
              </button>
            </form>
          </div>
        </div>

        {/* Search Results */}
        <AnimatePresence>
          {searchResult && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`max-w-3xl mx-auto mb-16 p-6 rounded-3xl border ${
                searchResult.available 
                  ? 'bg-emerald-600/10 border-emerald-500/30' 
                  : 'bg-red-600/10 border-red-500/30'
              } flex flex-col md:flex-row items-center justify-between gap-6`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  searchResult.available ? 'bg-emerald-500/20' : 'bg-red-500/20'
                }`}>
                  {searchResult.available ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  ) : (
                    <X className="w-6 h-6 text-red-500" />
                  )}
                </div>
                <div>
                  <h4 className="text-2xl font-bold vx-ink">{searchResult.domain}</h4>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${
                    searchResult.available ? 'text-emerald-500' : 'text-red-500'
                  }`}>
                    {searchResult.available ? 'Available now' : 'Domain already taken'}
                  </p>
                </div>
              </div>
              <div className="text-center md:text-right flex flex-col md:flex-row items-center gap-4">
                {searchResult.available ? (
                  <>
                    <div className="text-2xl font-bold vx-ink">{formatPrice(350)}</div>
                    <button className="vx-btn-accent px-8 py-3 rounded-xl font-bold text-sm">
                      Add to Cart
                    </button>
                  </>
                ) : (
                  <a
                    href={`https://who.is/whois/${searchResult.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold vx-muted vx-hover-ink flex items-center gap-2 border vx-line px-6 py-3 rounded-xl hover:bg-white/5"
                  >
                    View WHOIS
                    <ChevronRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pricing Table */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-bold vx-faint uppercase tracking-widest flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#d97757]" /> All Extensions
            </h3>
            <span className="text-[10px] vx-faint italic">*Renewal costs shown are per year</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tlds.map((tld, idx) => (
              <motion.div
                key={tld.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`relative vx-card backdrop-blur-md border ${tld.popular ? 'border-[#d97757] ring-1 ring-[#d97757]/30' : 'vx-line'} rounded-3xl p-6 hover:border-[#d97757]/30 transition-all group`}
              >
                {tld.popular && (
                  <div className="absolute top-0 right-6 bg-[#d97757] text-white text-[9px] font-black px-3 py-1 rounded-b-lg uppercase tracking-widest flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> {tld.tag}
                  </div>
                )}

                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold orbitron-font vx-ink group-hover:text-[#d97757] transition-colors">{tld.name}</h4>
                  <div className="text-right">
                    <div className="text-xl font-bold vx-ink">{formatPrice(tld.firstYear)}</div>
                    <div className="text-[9px] vx-faint font-bold uppercase">First Year</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8 pt-6 border-t vx-line">
                  <div className="flex justify-between text-xs">
                    <span className="vx-faint">Renewal Cost</span>
                    <span className="vx-muted2 font-bold">{formatPrice(tld.renewal)}/yr</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="vx-faint">Privacy Protection</span>
                    <span className="text-emerald-500 font-bold">Included</span>
                  </div>
                </div>

                <button className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                  tld.popular
                    ? 'vx-btn-accent'
                    : 'bg-white/5 hover:bg-white/10 border vx-line vx-ink'
                }`}>
                  Add to Cart
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "WHOIS Privacy", desc: "Hide your personal contact information from the public WHOIS database for free.", icon: ShieldCheck },
            { title: "Easy DNS Management", desc: "Complete control over your records with our simple-to-use management console.", icon: Zap },
            { title: "Domain Forwarding", desc: "Redirect your domain to any existing website with a few clicks.", icon: ChevronRight }
          ].map((f, i) => (
            <div key={i} className="p-8 rounded-[40px] vx-card backdrop-blur-md border vx-line hover:border-[#d97757]/30 transition-all group">
              <f.icon className="w-10 h-10 text-[#d97757] mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-bold mb-2 orbitron-font vx-ink">{f.title}</h4>
              <p className="text-sm vx-faint leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
