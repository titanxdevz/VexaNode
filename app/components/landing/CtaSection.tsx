"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export default function CtaSection() {
  return (
    <section className="relative px-4 sm:px-6 py-20 lg:py-28 vx-bg-alt">
      <div className="mx-auto max-w-7xl">

        {/* Two-column layout instead of generic centered card */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center rounded-2xl border vx-line vx-card px-6 sm:px-10 lg:px-14 py-12 sm:py-14 lg:py-16">

          {/* Left — Copy */}
          <div>
            <span className="text-[11px] font-bold text-[#d97757] uppercase tracking-widest">
              Ready to deploy?
            </span>

            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight vx-ink leading-[1.15]">
              Get your server live<br className="hidden sm:inline" />
              in under 30 seconds.
            </h2>

            <p className="mt-4 max-w-md text-[14px] leading-relaxed vx-muted">
              Join thousands of developers and gamers running on dedicated AMD
              hardware with enterprise-grade DDoS mitigation. No contracts, no
              setup fees, cancel anytime.
            </p>

            {/* Trust points — horizontal, tight */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] vx-muted">
              {["Instant activation", "No setup fees", "24/7 human support", "99.95% SLA"].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#d97757]" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Action stack */}
          <div className="flex flex-col gap-3 lg:items-end">
            <Link
              href="#pricing"
              className="group w-full lg:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#d97757] hover:bg-[#c96442] text-white px-8 py-3.5 text-[13px] font-bold tracking-wide transition-colors duration-150 shadow-[0_8px_24px_-8px_rgba(217,119,87,0.6)]"
            >
              <span>Get Started Now</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>

            <a
              href="https://discord.gg/dJpMDfgUQq"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 rounded-xl border vx-line vx-muted vx-hover-ink hover:border-[#d97757]/40 px-8 py-3.5 text-[13px] font-semibold transition-all duration-150"
            >
              <FaDiscord className="h-3.5 w-3.5 text-[#5865F2]" />
              <span>Join Discord</span>
            </a>

            <span className="text-[11px] vx-faint lg:text-right mt-1">
              Free tier available — no credit card required
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
