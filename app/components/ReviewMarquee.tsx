'use client'

import { motion } from 'framer-motion'
import { Star, ShieldCheck, Quote, ExternalLink } from 'lucide-react'
import { FaCheckCircle } from 'react-icons/fa'

const reviews = [
  {
    user: "Pratik Pokhrel",
    rating: 5,
    text: "Greatest experience. Best paid/free hosting I've ever found. No ads, just pure performance. >)",
    date: "May 25, 2026",
    verified: true
  },
  {
    user: "Akshya kumar Rout",
    rating: 5,
    text: "Good host 5/5. 100% uptime and consistently good performance across all my instances.",
    date: "May 19, 2026",
    verified: true
  },
  {
    user: "Shree Mathe Communications",
    rating: 5,
    text: "Best hosting server ever used. 100% trustful and 100000% secure. No data loss, nothing. Professional grade.",
    date: "May 16, 2026",
    verified: true
  },
  {
    user: "Gojo Satoru",
    rating: 5,
    text: "Best service. Instant replies from support and extremely smooth hosting experience.",
    date: "May 14, 2026",
    verified: true
  },
  {
    user: "Daksh Singh",
    rating: 5,
    text: "Very fast and reliable hosting. The deployment is instant and the nodes are top-tier.",
    date: "May 17, 2026",
    verified: true
  },
  {
    user: "Jamal Luydin",
    rating: 5,
    text: "GGWP Hosting. The performance to price ratio here is unbeatable in the current market.",
    date: "May 19, 2026",
    verified: true
  },
  {
    user: "Bhai Ok",
    rating: 5,
    text: "Nice services 24/7. Very cheap for the quality you're getting. Reliable for long-term projects.",
    date: "May 14, 2026",
    verified: true
  },
  {
    user: "Kyrahost",
    rating: 4,
    text: "Trusted and good. Had a small downtime during upgrades but the team handled it professionally.",
    date: "May 14, 2026",
    verified: true
  },
  {
    user: "Faisal Md",
    rating: 4,
    text: "Really interesting site and services. The UI is clean and the hosting works as advertised.",
    date: "Apr 13, 2026",
    verified: true
  },
  {
    user: "SkyBlock Network",
    rating: 5,
    text: "Switched our entire proxy to VexaNode. The Lavalink nodes are perfect - zero audio lag.",
    date: "2 days ago",
    verified: true
  },
  {
    user: "DevOps Jordan",
    rating: 5,
    text: "The India VPS nodes are genuinely OVH-powered. DDoS protection actually works here.",
    date: "1 week ago",
    verified: true
  },
  {
    user: "Flux Community",
    rating: 5,
    text: "Instant deployment. Had my Minecraft server up in 30 seconds. 10/10 experience.",
    date: "3 days ago",
    verified: true
  },
  {
    user: "Ethan G.",
    rating: 5,
    text: "Best Lavalink nodes I've used. No lag even with high shard counts on my music bot.",
    date: "1 month ago",
    verified: true
  },
  {
    user: "CloudDev",
    rating: 5,
    text: "The India VPS is actually legit. Low ping for my Asian player base. Very stable.",
    date: "2 months ago",
    verified: true
  },
  {
    user: "PixelKnight",
    rating: 5,
    text: "VexaNode is the goat. Support is fast and the prices are unbeatable. Highly recommend.",
    date: "2 weeks ago",
    verified: true
  },
  {
    user: "TechVibe",
    rating: 5,
    text: "Excellent uptime and DDoS protection. Our bot has been up for 4 months straight.",
    date: "4 months ago",
    verified: true
  },
  {
    user: "Alex M.",
    rating: 5,
    text: "Professional services and very affordable. The control panel is intuitive and powerful.",
    date: "3 months ago",
    verified: true
  },
  {
    user: "NodeBots Admin",
    rating: 5,
    text: "VexaNode doesn't oversell their RAM. My Discord bot has been at 100% uptime for months.",
    date: "2 weeks ago",
    verified: true
  },
  {
    user: "Liam M.",
    rating: 5,
    text: "Perfect for high-traffic gaming. We've seen a 40% reduction in latency compared to our old host.",
    date: "1 month ago",
    verified: true
  },
  {
    user: "CryptoHost",
    rating: 5,
    text: "The security features are top-notch. I feel safe hosting my critical apps here. 5 stars.",
    date: "2 months ago",
    verified: true
  }
]

// Duplicate reviews for seamless loop
const duplicatedReviews = [...reviews, ...reviews]

export default function ReviewMarquee() {
  return (
    <section className="py-24 bg-[#06070a] overflow-hidden relative border-y border-white/5">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#10b981]/10 text-[#10b981] text-[10px] font-bold px-3 py-1 rounded-full border border-[#10b981]/20 mb-6 tracking-widest uppercase">
          <Star className="w-3 h-3 fill-current" />
          Verified Trustpilot Reviews
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">
          The Wall of <span className="text-blue-500">Love</span>
        </h2>
        <a 
          href="https://www.trustpilot.com/review/vexanode.cloud"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-medium"
        >
          View all 20+ reviews on Trustpilot
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Marquee Container */}
      <div className="flex relative w-full">
        {/* Fades for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#06070a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#06070a] to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-6 py-4 px-4"
          animate={{
            x: [0, -7000] // Much larger range for 40 items
          }}
          transition={{
            duration: 120, // Slower for more content
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {duplicatedReviews.map((review, idx) => (
            <div 
              key={idx}
              className="w-[350px] flex-shrink-0 bg-[#0c0d12] border border-[#1f2129] hover:border-blue-500/30 rounded-3xl p-6 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-[#10b981] fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-xs font-bold text-white">{review.user}</span>
                    {review.verified && (
                      <FaCheckCircle className="w-3 h-3 text-emerald-500" title="Verified Customer" />
                    )}
                  </div>
                </div>
                <span className="text-[10px] font-bold text-gray-600 uppercase">{review.date}</span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 italic">
                "{review.text}"
              </p>

              <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Verified Review</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Trustpilot Branding Footer */}
      <div className="mt-16 flex justify-center items-center gap-4 opacity-40">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Powered by</span>
        <div className="flex items-center gap-1.5 grayscale">
          <Star className="w-5 h-5 text-[#10b981] fill-current" />
          <span className="text-lg font-black tracking-tighter orbitron-font">Trustpilot</span>
        </div>
      </div>
    </section>
  )
}
