"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials, type Testimonial } from "./testimonialsData";

const row1 = testimonials.slice(0, 16);
const row2 = testimonials.slice(16);

function Avatar({ t }: { t: Testimonial }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d97757]/10 border border-[#d97757]/25 text-xs font-black text-[#d97757] uppercase">
        {t.name.charAt(0)}
      </div>
    );
  }
  return (
    <Image
      src={t.avatar}
      alt={`${t.name} avatar`}
      width={36}
      height={36}
      unoptimized
      onError={() => setFailed(true)}
      className="h-9 w-9 rounded-full object-cover border border-[#d97757]/25"
    />
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="w-[320px] sm:w-[350px] flex-shrink-0 flex flex-col justify-between rounded-2xl border vx-line vx-card p-6 shadow-sm hover:border-[#d97757]/40 hover:shadow-md transition-all">
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: t.rating }).map((_, s) => (
              <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
            {Array.from({ length: 5 - t.rating }).map((_, s) => (
              <Star key={s} className="h-3.5 w-3.5 text-zinc-600" />
            ))}
          </div>
          <span className="text-[10px] font-bold vx-faint uppercase tracking-wide">{t.date}</span>
        </div>
        <blockquote className="mt-4 text-xs sm:text-sm leading-relaxed vx-muted2 italic min-h-[64px]">
          &ldquo;{t.text}&rdquo;
        </blockquote>
      </div>

      <figcaption className="mt-6 flex items-center gap-3 border-t vx-line pt-4">
        <Avatar t={t} />
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="truncate text-xs font-bold vx-ink">{t.name}</span>
            <span className="text-[9px] font-bold uppercase border vx-line rounded px-1 py-px vx-faint">{t.country}</span>
          </div>
          <div className="text-[10px] vx-faint">Verified on Trustpilot</div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 vx-bg vx-ink overflow-hidden border-t vx-line">
      <div className="w-full">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 px-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d97757]/10 border border-[#d97757]/25 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d97757] mb-4">
            Customer Trust
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight vx-ink sm:text-4xl">
            What our community says
          </h2>

          <p className="mt-4 text-sm vx-muted max-w-lg mx-auto">
            Feedback shared by members of the VexaNode community.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border vx-line vx-card px-4 py-2">
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className={`h-3.5 w-3.5 ${s < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/50 text-amber-400/50"}`} />
              ))}
            </span>
            <span className="text-xs font-bold vx-ink">4.4/5</span>
            <a
              href="https://www.trustpilot.com/review/vexanode.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs vx-muted vx-hover-ink transition-colors"
            >
              on Trustpilot — {testimonials.length} reviews
            </a>
          </div>
        </div>

        {/* Marquee Row 1 - Moves Left */}
        <div className="relative w-full overflow-hidden flex flex-col gap-6 select-none">

          {/* Smooth side fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[var(--vx-surface)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[var(--vx-surface)] to-transparent z-10 pointer-events-none" />

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
              <Card key={`a-${i}`} t={t} />
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
              <Card key={`b-${i}`} t={t} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}