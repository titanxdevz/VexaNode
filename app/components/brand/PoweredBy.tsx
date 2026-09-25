"use client";

import { useReducedMotion, motion } from "framer-motion";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import BrandLogo from "./BrandLogo";
import { BRANDS } from "./brandLogos";

const DISCLAIMER =
  "All trademarks and logos belong to their respective owners. VexaNode is not affiliated with or endorsed by them.";

/* One pass of every logo — used twice inside the marquee track. */
function MarqueeGroup({ decorative = false }: { decorative?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-x-14 gap-y-6 pr-14 sm:gap-x-20 sm:pr-20"
      aria-hidden={decorative || undefined}
    >
      {BRANDS.map((brand) => (
        <li key={brand.key} className="flex items-center justify-center">
          <BrandLogo brand={brand} decorative={decorative} />
        </li>
      ))}
    </ul>
  );
}

/* Static wrapped grid — reduced-motion fallback for the marquee. */
function StaticWrap() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 sm:gap-x-20">
      {BRANDS.map((brand) => (
        <li key={brand.key} className="flex items-center justify-center">
          <BrandLogo brand={brand} />
        </li>
      ))}
    </ul>
  );
}

/**
 * Landing-page marquee — placed directly below the hero.
 * Seamless infinite loop (duplicated track, duplicate hidden from a11y),
 * pauses on hover/focus, edge-fade masks, reduced-motion → static grid.
 */
export function PoweredByMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="powered-by-heading"
      className="vx-bg vx-ink border-t vx-line py-14 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="powered-by-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] vx-faint"
        >
          Built on trusted technology
        </motion.h2>

        {reduceMotion ? (
          <StaticWrap />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="vx-marquee-mask relative overflow-hidden"
          >
            <div className="vx-marquee-viewport flex w-max">
              <div className="vx-marquee-track flex w-max">
                <MarqueeGroup />
                <MarqueeGroup decorative />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/**
 * About-page grid — static, responsive, with a factual one-line label under
 * each logo. `idleColor` lets a fixed-dark host page (which never switches
 * theme) force a light-enough grey so no logo becomes invisible.
 */
export function PoweredByGrid({ idleColor }: { idleColor?: string }) {
  const style = idleColor
    ? ({ "--logo-idle": idleColor } as CSSProperties)
    : undefined;

  return (
    <div style={style}>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {BRANDS.map((brand) => (
          <li
            key={brand.key}
            className="flex flex-col items-center justify-start gap-3 text-center"
          >
            <span className="flex h-8 items-center justify-center">
              <BrandLogo brand={brand} />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
              {brand.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PoweredByDisclaimer({ className }: { className?: string }) {
  return <p className={cn("text-[11px] leading-relaxed", className)}>{DISCLAIMER}</p>;
}
