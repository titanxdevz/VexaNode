"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, House, Skull } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const STYLES = `
  .vx404-stage {
    background:
      radial-gradient(1200px 600px at 50% -10%, rgba(16,185,129,0.09), transparent 60%),
      radial-gradient(900px 500px at 85% 110%, rgba(34,211,238,0.06), transparent 60%),
      #050508;
  }

  @keyframes vx404-walk {
    from { transform: translateX(115vw); }
    to   { transform: translateX(-45vw); }
  }
  @keyframes vx404-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes vx404-tumble {
    0%, 100% { transform: rotate(0deg) translateY(0); }
    50%      { transform: rotate(180deg) translateY(-60px); }
  }
  @keyframes vx404-arm-a { 0%,100% { transform: rotate(-28deg); } 50% { transform: rotate(28deg); } }
  @keyframes vx404-arm-b { 0%,100% { transform: rotate(28deg); } 50% { transform: rotate(-28deg); } }
  @keyframes vx404-leg-a { 0%,100% { transform: rotate(20deg); } 50% { transform: rotate(-20deg); } }
  @keyframes vx404-leg-b { 0%,100% { transform: rotate(-20deg); } 50% { transform: rotate(20deg); } }

  .vx404-char {
    position: absolute;
    top: var(--top);
    left: 0;
    width: var(--size, 13vw);
    color: var(--tint, #f4f4f5);
    animation: vx404-walk var(--dur, 24s) linear var(--delay, 0s) infinite;
    will-change: transform;
  }
  .vx404-char .vx404-fig {
    display: block;
    width: 100%;
    height: auto;
    filter: drop-shadow(0 0 12px color-mix(in srgb, currentColor 45%, transparent));
    transform: rotate(var(--tilt, 0deg));
  }
  .vx404-char[data-flip="true"] .vx404-fig {
    transform: scaleY(-1) rotate(var(--tilt, 0deg));
  }
  .vx404-char[data-motion="spin"] .vx404-fig {
    animation: vx404-spin var(--motion-dur, 2.2s) linear infinite;
  }
  .vx404-char[data-motion="tumble"] .vx404-fig {
    animation: vx404-tumble var(--motion-dur, 1.6s) ease-in-out infinite;
  }
  .vx404-fig .arm-a, .vx404-fig .arm-b,
  .vx404-fig .leg-a, .vx404-fig .leg-b {
    transform-box: fill-box;
    transform-origin: top center;
  }
  .vx404-fig .arm-a { animation: vx404-arm-a var(--step, 0.5s) ease-in-out infinite; }
  .vx404-fig .arm-b { animation: vx404-arm-b var(--step, 0.5s) ease-in-out infinite; }
  .vx404-fig .leg-a { animation: vx404-leg-a var(--step, 0.5s) ease-in-out infinite; }
  .vx404-fig .leg-b { animation: vx404-leg-b var(--step, 0.5s) ease-in-out infinite; }

  @keyframes vx404-glitch-1 {
    0%   { clip-path: inset(20% 0 60% 0); transform: translate(-8px, 2px); }
    20%  { clip-path: inset(70% 0 8% 0);  transform: translate(8px, -2px); }
    40%  { clip-path: inset(40% 0 42% 0); transform: translate(-5px, 1px); }
    60%  { clip-path: inset(8% 0 78% 0);  transform: translate(6px, -2px); }
    80%  { clip-path: inset(55% 0 24% 0); transform: translate(-9px, 2px); }
    100% { clip-path: inset(30% 0 55% 0); transform: translate(7px, -2px); }
  }
  @keyframes vx404-glitch-2 {
    0%   { clip-path: inset(60% 0 18% 0); transform: translate(8px, -2px); }
    20%  { clip-path: inset(10% 0 72% 0); transform: translate(-8px, 1px); }
    40%  { clip-path: inset(24% 0 58% 0); transform: translate(6px, -2px); }
    60%  { clip-path: inset(76% 0 4% 0);  transform: translate(-6px, 2px); }
    80%  { clip-path: inset(46% 0 34% 0); transform: translate(8px, -2px); }
    100% { clip-path: inset(14% 0 66% 0); transform: translate(-7px, 1px); }
  }

  .vx404-glitch {
    position: relative;
    display: inline-block;
    color: #f4f4f5;
  }
  .vx404-glitch::before,
  .vx404-glitch::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }
  .vx404-glitch::before {
    left: 3px;
    text-shadow: -3px 0 #10b981;
    animation: vx404-glitch-1 2.4s infinite linear alternate-reverse;
    opacity: 0.8;
  }
  .vx404-glitch::after {
    left: -3px;
    text-shadow: 3px 0 #f43f5e;
    animation: vx404-glitch-2 3.1s infinite linear alternate-reverse;
    opacity: 0.8;
  }

  .vx404-scanlines {
    background: repeating-linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.035) 0px,
      rgba(255, 255, 255, 0.035) 1px,
      transparent 1px,
      transparent 6px
    );
  }

  @keyframes vx404-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .vx404-blink {
    animation: vx404-blink 1.1s step-end infinite;
  }
`

function StickFigure({ tint, step }: { tint: string; step: string }) {
  return (
    <svg
      viewBox="0 0 90 110"
      className="vx404-fig"
      style={{ ["--tint" as string]: tint, color: tint, ["--step" as string]: step }}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth={5} strokeLinecap="round">
        <circle cx="45" cy="16" r="10" fill="currentColor" stroke="none" />
        <line x1="45" y1="26" x2="45" y2="64" />
        <g className="arm-b">
          <path d="M45 30 L64 42" />
        </g>
        <g className="arm-a">
          <path d="M45 30 L26 44" />
        </g>
        <g className="leg-b">
          <path d="M45 64 L60 96" />
        </g>
        <g className="leg-a">
          <path d="M45 64 L30 96" />
        </g>
      </g>
    </svg>
  )
}

type CharConfig = {
  top: string
  size: string
  dur: string
  delay: string
  tint: string
  motion?: "spin" | "tumble"
  motionDur?: string
  step?: string
  flip?: boolean
  tilt?: string
}

const CHARACTERS: CharConfig[] = [
  { top: "2%", size: "13vw", dur: "26s", delay: "0s", tint: "#10b981", step: "0.5s" },
  { top: "12%", size: "11vw", dur: "32s", delay: "-14s", tint: "#34d399", step: "0.62s", motion: "spin", motionDur: "1.7s" },
  { top: "24%", size: "14vw", dur: "21s", delay: "-7s", tint: "#22d3ee", step: "0.46s", tilt: "-8deg" },
  { top: "36%", size: "12vw", dur: "37s", delay: "-22s", tint: "#f4f4f5", step: "0.56s", motion: "tumble", motionDur: "1.5s" },
  { top: "47%", size: "10vw", dur: "23s", delay: "-4s", tint: "#06b6d4", step: "0.5s", flip: true, tilt: "-5deg" },
  { top: "57%", size: "13vw", dur: "29s", delay: "-10s", tint: "#10b981", step: "0.58s", motion: "spin", motionDur: "3.2s" },
  { top: "68%", size: "11vw", dur: "25s", delay: "-18s", tint: "#f4f4f5", step: "0.48s" },
  { top: "78%", size: "12vw", dur: "33s", delay: "-26s", tint: "#2dd4bf", step: "0.6s", motion: "tumble", motionDur: "2s" },
]

function StickFigureTerrain() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      {CHARACTERS.map((c, i) => (
        <div
          key={i}
          className="vx404-char"
          data-motion={c.motion ?? "none"}
          data-flip={c.flip ? "true" : "false"}
          style={
            {
              "--top": c.top,
              "--size": c.size,
              "--dur": c.dur,
              "--delay": c.delay,
              "--tint": c.tint,
              "--motion-dur": c.motionDur,
              "--tilt": c.tilt,
            } as React.CSSProperties
          }
        >
          <StickFigure tint={c.tint} step={c.step ?? "0.5s"} />
        </div>
      ))}
    </div>
  )
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    type Particle = {
      x: number
      y: number
      r: number
      vx: number
      vy: number
      a: number
      color: string
      near: boolean
    }

    const COLORS = ["244, 244, 245", "16, 185, 129", "34, 211, 238", "110, 231, 183"]
    const rand = (min: number, max: number) => Math.random() * (max - min) + min

    let parts: Particle[] = []
    let w = 0
    let h = 0
    let alive = false
    let raf = 0

    const spawn = (initial: boolean) => {
      const near = Math.random() < 0.1
      parts.push({
        x: initial ? rand(0, w) : w + rand(20, 120),
        y: rand(-20, h + 20),
        r: near ? rand(2, 4.5) : rand(0.8, 2.4),
        vx: -rand(near ? 8 : 1.5, near ? 14 : 3.5),
        vy: rand(-0.35, 0.35),
        a: near ? rand(0.2, 0.45) : rand(0.3, 0.85),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        near,
      })
    }

    const mount = () => {
      alive = true
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      parts = []
      const count = Math.min(220, Math.floor(w / 7))
      for (let i = 0; i < count; i++) spawn(true)
      if (reduced) draw()
      else raf = requestAnimationFrame(draw)
    }

    const draw = () => {
      if (!alive) return
      ctx.clearRect(0, 0, w, h)
      for (const p of parts) {
        p.x += p.vx
        p.y += p.vy
        if (p.y < -8) p.y = h + 8
        if (p.y > h + 8) p.y = -8
        if (p.x < -20) {
          p.x = w + rand(10, 80)
          p.y = rand(0, h)
        }
        const grow = p.near ? Math.max(0, w - p.x) * 0.012 : 0
        ctx.globalAlpha = p.a
        ctx.fillStyle = `rgba(${p.color}, 1)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r + grow, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      if (!reduced) raf = requestAnimationFrame(draw)
    }

    const onResize = () => {
      if (!alive) return
      alive = false
      cancelAnimationFrame(raf)
      mount()
    }

    mount()
    window.addEventListener("resize", onResize)

    return () => {
      alive = false
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" aria-hidden="true" />
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="vx404-stage relative min-h-screen flex items-center justify-center overflow-hidden select-none">
      <style>{STYLES}</style>

      <ParticleField />
      <StickFigureTerrain />

      <div className="absolute inset-0 z-[2] vx404-scanlines pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 z-[3] pointer-events-none bg-black/40"
      />

      <div className="relative z-10 px-6 py-24 text-center flex flex-col items-center pointer-events-none">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pointer-events-auto"
        >
          <p className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-[0.35em] uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-4 py-1.5 mb-8">
            <Skull className="w-3.5 h-3.5" />
            signal lost · error 404
            <span className="vx404-blink inline-block w-2 h-3 bg-emerald-400" />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <h1
            data-text="404"
            className="vx404-glitch orbitron-font text-[120px] sm:text-[180px] md:text-[220px] font-black leading-none tracking-tight mb-6"
          >
            404
          </h1>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="orbitron-font text-2xl sm:text-3xl font-bold text-white mb-4"
        >
          Page Not <span className="text-emerald-400">Found</span>
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="font-mono text-sm text-zinc-500 max-w-md mx-auto mb-10 leading-relaxed"
        >
          {">"} The page you are looking for was removed, renamed, or slipped into a parallel
          dimension. Our robots are still scanning for it.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4 pointer-events-auto"
        >
          <button
            onClick={() => router.back()}
            className="group inline-flex items-center gap-2.5 text-sm font-bold px-7 py-3.5 rounded-xl border border-zinc-700 text-zinc-200 hover:border-emerald-400 hover:text-emerald-300 transition-all duration-300 hover:-translate-x-1"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Go Back
          </button>

          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 text-sm font-bold px-7 py-3.5 rounded-xl bg-emerald-500 text-black hover:bg-emerald-400 transition-all duration-300 hover:translate-y-[-2px] shadow-[0_0_30px_rgba(16,185,129,0.35)]"
          >
            <House className="w-4 h-4 transition-transform group-hover:-rotate-12" />
            Back to Home
          </Link>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 1.15 }}
          className="mt-12 font-mono text-[11px] text-zinc-700"
        >
          [ vexa://transport-layer :: page missing · redirecting_conscience.exe ]
        </motion.p>
      </div>
    </div>
  )
}