"use client";

import { motion, useReducedMotion } from "framer-motion";
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
      {/* NODES_PLACEHOLDER */}
    </div>
  );
}
