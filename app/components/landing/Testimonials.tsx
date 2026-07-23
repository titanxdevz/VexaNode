"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const row1 = [
  {
    name: "Gaurav",
    role: "Discord Manager",
    quote: "Good Lavalink hosting. Audio stays smooth, setup is simple, and it works well for Discord music bots.",
    rating: 5,
    initials: "G"
  },
  {
    name: "Majid",
    role: "Server Owner",
    quote: "Master good service. The hosting is stable, support is active, and everything feels clean to manage.",
    rating: 5,
    initials: "M"
  },
  {
    name: "Kunal",
    role: "Client",
    quote: "Best hosting services. Performance is solid, pricing is fair, and the team helps whenever support is needed.",
    rating: 5,
    initials: "K"
  },
  {
    name: "Ishan",
    role: "Project Owner",
    quote: "Mast hosting. Smooth performance, helpful team, and good pricing for bot hosting and small projects.",
    rating: 5,
    initials: "I"
  },
  {
    name: "Kartik",
    role: "Bot Hosting Client",
    quote: "Best hosting. The setup is quick, service is stable, and it works well for bots that need to stay online.",
    rating: 5,
    initials: "K"
  },
  {
    name: "Vansh",
    role: "Gaming Community",
    quote: "Best hosting service ever. Fast support 24/7, kind society, active community, and so much more. Hope this hosting rises to the top.",
    rating: 5,
    initials: "V"
  },
  {
    name: "Ayush",
    role: "Database Client",
    quote: "Best hosting. Very cheap and affordable pricing, setup is fast and support is extremely helpful.",
    rating: 5,
    initials: "A"
  },
  {
    name: "Linux py",
    role: "Developer",
    quote: "Very good service, extremely stable instances and support response times are top tier.",
    rating: 5,
    initials: "L"
  },
  {
    name: "Sinthia",
    role: "Discord Owner",
    quote: "Best hosting ever legit and their behaviour is very good.",
    rating: 5,
    initials: "S"
  },
  {
    name: "Pratik Pokhrel",
    role: "Client",
    quote: "Greatest experience. Best paid/free hosting ever found. No ads, just pure performance. >)",
    rating: 5,
    initials: "P"
  }
];

const row2 = [
  {
    name: "DIVYANG Patel",
    role: "Beta Tester",
    quote: "SUPER RELIABLE NODES and excellent uptime. Best service ever experienced for gaming.",
    rating: 5,
    initials: "D"
  },
  {
    name: "Jamal Luydin",
    role: "VDS User",
    quote: "GGWP hosting. The performance to price ratio here is unbeatable in the current market.",
    rating: 5,
    initials: "J"
  },
  {
    name: "Akshya kumar Rout",
    role: "Client",
    quote: "Good host 5/5. 100% uptime and consistently good performance across all my instances.",
    rating: 5,
    initials: "A"
  },
  {
    name: "Daksh Singh",
    role: "Server Admin",
    quote: "Very fast and reliable hosting. The deployment is instant and the nodes are top-tier.",
    rating: 5,
    initials: "D"
  },
  {
    name: "Shree Mathe Communications",
    role: "Business Owner",
    quote: "Best hosting server ever used. 100% trustful and 100000% secure. No data loss, nothing. Professional grade.",
    rating: 5,
    initials: "S"
  },
  {
    name: "Kyrahost",
    role: "Client",
    quote: "Some times down during upgrades but it's good and trusted. Good support.",
    rating: 4,
    initials: "K"
  },
  {
    name: "Bhai Ok",
    role: "Developer",
    quote: "Nice services 24/7. Very cheap for the quality you're getting. Reliable for long-term projects.",
    rating: 5,
    initials: "B"
  },
  {
    name: "Gojo Satoru",
    role: "Anime Community",
    quote: "Best service. Instant replies from support and extremely smooth hosting experience.",
    rating: 5,
    initials: "G"
  },
  {
    name: "Faisal Md",
    role: "Beta User",
    quote: "Really interesting 👌 this site. The UI is clean and the hosting works as advertised.",
    rating: 4,
    initials: "F"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[100px]" />

      <div className="w-full">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 px-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 mb-4">
            Customer Trust
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Trusted by developers &amp; communities
          </h2>
          
          {/* Trustpilot-style Rating badge */}
          <div className="mt-4 flex items-center justify-center gap-2 text-zinc-300">
            <span className="text-sm font-bold text-white">Excellent</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, idx) => (
                <div key={idx} className="bg-emerald-500 p-0.5 rounded-sm">
                  <Star className="h-3 w-3 fill-black text-black" />
                </div>
              ))}
            </div>
            <span className="text-xs text-zinc-400">based on 450+ verified reviews</span>
          </div>
        </div>

        {/* Marquee Row 1 - Moves Left */}
        <div className="relative w-full overflow-hidden flex flex-col gap-6 select-none">
          
          {/* Smooth side fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

          {/* Upper Row */}
          <motion.div 
            className="flex gap-6 py-2 px-4 w-max"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...row1, ...row1].map((t, i) => (
              <figure
                key={i}
                className="w-[320px] sm:w-[350px] flex-shrink-0 flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-6 shadow-md hover:border-emerald-500/20 transition-colors"
              >
                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    {Array.from({ length: 5 - t.rating }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 text-zinc-600" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-300 italic min-h-[64px]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                
                <figcaption className="mt-6 flex items-center gap-3 border-t border-zinc-800/60 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-950/30 border border-emerald-500/20 text-xs font-black text-emerald-400 uppercase">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{t.name}</div>
                    <div className="text-[10px] text-zinc-500">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </motion.div>

          {/* Lower Row - Moves Right */}
          <motion.div 
            className="flex gap-6 py-2 px-4 w-max"
            animate={{
              x: ["-50%", "0%"]
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...row2, ...row2].map((t, i) => (
              <figure
                key={i}
                className="w-[320px] sm:w-[350px] flex-shrink-0 flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-6 shadow-md hover:border-emerald-500/20 transition-colors"
              >
                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    {Array.from({ length: 5 - t.rating }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 text-zinc-600" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-300 italic min-h-[64px]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                
                <figcaption className="mt-6 flex items-center gap-3 border-t border-zinc-800/60 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-950/30 border border-emerald-500/20 text-xs font-black text-emerald-400 uppercase">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{t.name}</div>
                    <div className="text-[10px] text-zinc-500">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
