"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import Image from "next/image";
import { BRANDS } from "../brand/brandLogos";

/**
 * Landing hero visual — an animated "trusted stack" hub.
 * A central VexaNode node connected to our real provider logos with
 * flowing accent lines. Themed with vx-* tokens; respects reduced motion.
 */

// 400x400 design space. Center at (200,200); six provider nodes on a hexagon.
const CENTER = { x: 200, y: 200 };
const POSITIONS = [
  { x: 200, y: 50 },   // top
  { x: 330, y: 126 },  // top-right
  { x: 330, y: 274 },  // bottom-right
  { x: 200, y: 350 },  // bottom
  { x: 70, y: 274 },   // bottom-left
  { x: 70, y: 126 },   // top-left
];

const iconBrands = BRANDS.filter((b) => b.kind === "icon").slice(0, 6);
const nodes = iconBrands.map((brand, i) => ({ brand, ...POSITIONS[i] }));

const pct = (v: number) => `${(v / 400) * 100}%`;

export default function IntegrationHub() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[400px]">
      {/* Connecting lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        fill="none"
      >
        {nodes.map((n, i) => {
          const d = `M${CENTER.x} ${CENTER.y} L${n.x} ${n.y}`;
          return (
            <g key={n.brand.key}>
              <path d={d} stroke="var(--vx-line)" strokeWidth={1.5} />
              {!reduce && (
                <motion.path
                  d={d}
                  stroke="var(--vx-accent)"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="0.16 0.84"
                  initial={{ strokeDashoffset: 1 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.35,
                  }}
                />
              )}
            </g>
          );
        })}
      </svg>
      {/* Peripheral provider nodes */}
      {nodes.map((n, i) => {
        const Logo = n.brand.Logo;
        return (
          <motion.div
            key={n.brand.key}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.08, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.12 }}
            style={{ left: pct(n.x), top: pct(n.y) }}
            className="group absolute z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl vx-card border vx-line shadow-sm sm:h-14 sm:w-14"
            role="img"
            aria-label={`Powered by ${n.brand.name}`}
            title={n.brand.name}
          >
            <span
              className="vx-muted transition-colors duration-300 group-hover:[color:var(--brand)]"
              style={{ "--brand": n.brand.color } as CSSProperties}
            >
              <Logo className="h-5 w-auto sm:h-6" />
            </span>
          </motion.div>
        );
      })}

      {/* Center VexaNode node */}
      <div className="absolute left-1/2 top-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl vx-card border vx-line shadow-lg sm:h-24 sm:w-24">
        <Image
          src="/logo.png"
          alt="VexaNode"
          width={44}
          height={44}
          className="h-10 w-10 object-contain sm:h-12 sm:w-12"
        />
        {!reduce && (
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 rounded-3xl border-2 border-[#d97757]/40"
            animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>
    </div>
  );
}
