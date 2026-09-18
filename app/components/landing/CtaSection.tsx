"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export default function CtaSection() {
  return (
    <section className="relative px-4 sm:px-6 py-20 lg:py-28 bg-[#07090e]">
      <div className="mx-auto max-w-7xl">

        {/* Two-column layout instead of generic centered card */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center rounded-2xl border border-zinc-800/60 bg-zinc-900/20 px-6 sm:px-10 lg:px-14 py-12 sm:py-14 lg:py-16">

          {/* Left — Copy */}
          <div>
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
              Ready to deploy?
            </span>

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-[1.15]">
              Get your server live<br className="hidden sm:inline" />
              in under 30 seconds.
            </h2>

            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-zinc-400">
              Join thousands of developers and gamers running on dedicated AMD
              hardware with enterprise-grade DDoS mitigation. No contracts, no
              setup fees, cancel anytime.
            </p>

            {/* Trust points — horizontal, tight */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-zinc-500">
              {["Instant activation", "No setup fees", "24/7 human support", "99.95% SLA"].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500/70" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Action stack */}
          <div className="flex flex-col gap-3 lg:items-end">
            <Link
              href="#pricing"
              className="group w-full lg:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 px-8 py-3.5 text-[13px] font-bold tracking-wide transition-colors duration-150 shadow-[0_0_20px_rgba(255,255,255,0.06)]"
            >
              <span>Get Started Now</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>

            <a
              href="https://discord.gg/dJpMDfgUQq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700/80 hover:border-zinc-600 hover:bg-zinc-800/40 px-8 py-3.5 text-[13px] font-semibold text-zinc-400 hover:text-white transition-all duration-150"
            >
              <FaDiscord className="h-3.5 w-3.5 text-[#5865F2]" />
              <span>Join Discord</span>
            </a>

            <span className="text-[11px] text-zinc-600 lg:text-right mt-1">
              Free tier available — no credit card required
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
