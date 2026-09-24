"use client";

import { useReducedMotion } from "framer-motion";
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
      className="flex shrink-0 items-center gap-x-10 gap-y-6 pr-10 sm:gap-x-14 sm:pr-14"
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
    <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
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
      className="vx-bg vx-ink border-t vx-line py-10 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="powered-by-heading"
          className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.2em] vx-faint"
        >
          Built on trusted technology
        </h2>

        {reduceMotion ? (
          <StaticWrap />
        ) : (
          <div className="vx-marquee-mask relative overflow-hidden">
            <div className="vx-marquee-viewport flex w-max">
              <div className="vx-marquee-track flex w-max">
                <MarqueeGroup />
                <MarqueeGroup decorative />
              </div>
            </div>
          </div>
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
