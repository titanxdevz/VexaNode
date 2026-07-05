"use client"

import { useEffect, useRef, useState } from "react"
import createGlobe, { COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

const GLOBE_CONFIG: COBEOptions = {
    width: 900,
    height: 900,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 3,
    baseColor: [0.03, 0.05, 0.15],
    markerColor: [0, 0.639, 1],
    glowColor: [0.08, 0.12, 0.25],

    // Using exact VexaNode datacenters as markers
    markers: [
        { location: [19.076, 72.8777], size: 0.1 },     // Mumbai
        { location: [1.3521, 103.8198], size: 0.08 },   // Singapore
        { location: [50.1109, 8.6821], size: 0.08 },    // Frankfurt
        { location: [40.7128, -74.006], size: 0.1 },    // New York
        { location: [34.0522, -118.2437], size: 0.08 }, // LA
        { location: [-23.5505, -46.6333], size: 0.08 }, // Sao Paulo
        { location: [35.6762, 139.6503], size: 0.08 },  // Tokyo
    ],
};

const arcs = [
    { from: [40.7128, -74.006], to: [50.1109, 8.6821] },    // NY -> Frankfurt
    { from: [40.7128, -74.006], to: [34.0522, -118.2437] }, // NY -> LA
    { from: [40.7128, -74.006], to: [-23.5505, -46.6333] }, // NY -> Sao Paulo
    { from: [40.7128, -74.006], to: [19.076, 72.8777] },    // NY -> Mumbai
    { from: [19.076, 72.8777], to: [1.3521, 103.8198] },    // Mumbai -> Singapore
    { from: [19.076, 72.8777], to: [35.6762, 139.6503] },   // Mumbai -> Tokyo
    { from: [50.1109, 8.6821], to: [19.076, 72.8777] }      // Frankfurt -> Mumbai
];

// ---- Geometry for the network arcs drawn over the globe ----
// If the arc endpoints don't sit exactly on the city markers, nudge
// GLOBE_RADIUS_FACTOR — it must match cobe's on-screen sphere radius.
const GLOBE_RADIUS_FACTOR = 0.4
const ARC_ALTITUDE = 0.16   // how high each arc bows above the surface
const ARC_SEGMENTS = 44     // arc smoothness (points per arc)
const ARC_VISIBLE_Z = -0.12 // hide arc points that rotate behind the globe

type Vec3 = { x: number; y: number; z: number }

// lat/lng -> unit vector on the globe in cobe's orientation (phi/theta = 0)
const toVec = (lat: number, lng: number): Vec3 => {
    const latRad = (lat * Math.PI) / 180
    const lngRad = (lng * Math.PI) / 180
    const phiRot = 1.5 * Math.PI - lngRad
    return {
        x: Math.cos(latRad) * Math.sin(phiRot),
        y: Math.sin(latRad),
        z: Math.cos(latRad) * Math.cos(phiRot),
    }
}

// spherical interpolation between two unit vectors -> follows the great circle
const slerp = (a: Vec3, b: Vec3, t: number): Vec3 => {
    const dot = Math.max(-1, Math.min(1, a.x * b.x + a.y * b.y + a.z * b.z))
    const omega = Math.acos(dot)
    if (omega < 1e-4) return a
    const s = Math.sin(omega)
    const s1 = Math.sin((1 - t) * omega) / s
    const s2 = Math.sin(t * omega) / s
    return { x: a.x * s1 + b.x * s2, y: a.y * s1 + b.y * s2, z: a.z * s1 + b.z * s2 }
}

// rotate a direction by the globe's current phi (Y axis) + theta (X tilt) and
// project to 2D; `alt` lifts the point above the surface for the arc bow.
const projectVec = (dir: Vec3, alt: number, phi: number, theta: number, width: number) => {
    const cph = Math.cos(phi)
    const sph = Math.sin(phi)
    const x1 = dir.x * cph - dir.z * sph
    const z1 = dir.z * cph + dir.x * sph
    const y1 = dir.y

    const cth = Math.cos(theta)
    const sth = Math.sin(theta)
    const y2 = y1 * cth - z1 * sth
    const z2 = y1 * sth + z1 * cth

    const r = width * GLOBE_RADIUS_FACTOR * (1 + alt)
    return {
        x: width / 2 + x1 * r,
        y: width / 2 - y2 * r,
        visible: z2 > ARC_VISIBLE_Z, // front hemisphere only
    }
}

// build an SVG path along the great circle, splitting it wherever the wire
// passes behind the globe so it is correctly occluded.
const buildArcPath = (a: Vec3, b: Vec3, phi: number, theta: number, width: number) => {
    let d = ''
    let drawing = false
    for (let i = 0; i <= ARC_SEGMENTS; i++) {
        const t = i / ARC_SEGMENTS
        const dir = slerp(a, b, t)
        const alt = ARC_ALTITUDE * Math.sin(Math.PI * t)
        const p = projectVec(dir, alt, phi, theta, width)
        if (p.visible) {
            d += `${drawing ? 'L' : 'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)} `
            drawing = true
        } else {
            drawing = false
        }
    }
    return d
}

// pre-compute endpoint vectors once (arcs never change)
const arcVecs = arcs.map((a) => ({
    from: toVec(a.from[0], a.from[1]),
    to: toVec(a.to[0], a.to[1]),
}))

export function Globe({ className, config = GLOBE_CONFIG }: { className?: string, config?: COBEOptions }) {
    let phi = 0
    let width = 0
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const svgRef = useRef<SVGSVGElement>(null)
    const pathsRef = useRef<(SVGPathElement | null)[]>([])
    const cometsRef = useRef<(SVGPathElement | null)[]>([])
    const t = useRef(0)
    
    const pointerInteracting = useRef<number | null>(null)
    const pointerInteractionMovement = useRef(0)
    const [isDark, setIsDark] = useState(true)

    const r = useMotionValue(0)
    const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 })
    const [themeColorUpdate, setThemeColorUpdate] = useState(0)

    const updatePointerInteraction = (value: number | null) => {
        pointerInteracting.current = value
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
        }
    }
    const updateMovement = (clientX: number) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current
            pointerInteractionMovement.current = delta
            r.set(r.get() + delta / MOVEMENT_DAMPING)
        }
    }

    useEffect(() => {
        const checkTheme = () => setIsDark(document.documentElement.classList.contains('dark'))
        checkTheme()
        const observer = new MutationObserver(() => {
            checkTheme()
            setThemeColorUpdate(prev => prev + 1)
        })
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const onResize = () => {
            if (canvasRef.current) width = canvasRef.current.offsetWidth
        }
        window.addEventListener("resize", onResize)
        onResize()

        const themeConfig = {
            ...config,
            dark: isDark ? 1 : 0,
            baseColor: [0.03, 0.05, 0.15] as [number, number, number],
            markerColor: [0, 0.639, 1] as [number, number, number], // #00a3ff VexaNode brand
            glowColor: [0.08, 0.12, 0.25] as [number, number, number],
        }

        const globe = createGlobe(canvasRef.current!, {
            ...themeConfig,
            width: width * 2,
            height: width * 2,
            onRender: (state) => {
                if (!pointerInteracting.current) phi += 0.005
                const currentPhi = phi + rs.get()
                state.phi = currentPhi
                state.width = width * 2
                state.height = width * 2
                
                // SVG network-arc overlay
                t.current += 1.5
                if (svgRef.current) {
                    svgRef.current.setAttribute('viewBox', `0 0 ${width} ${width}`)
                    arcVecs.forEach((arc, i) => {
                        const path = pathsRef.current[i]
                        const comet = cometsRef.current[i]
                        if (!path || !comet) return

                        const d = buildArcPath(arc.from, arc.to, currentPhi, themeConfig.theta, width)
                        if (d) {
                            path.setAttribute('d', d)
                            comet.setAttribute('d', d)
                            path.style.opacity = '0.4'
                            comet.style.opacity = '1'
                            comet.style.strokeDashoffset = String(1000 - ((t.current + i * 140) % 1000))
                        } else {
                            path.style.opacity = '0'
                            comet.style.opacity = '0'
                        }
                    })
                }
            },
        })

        setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0)
        return () => {
            globe.destroy()
            window.removeEventListener("resize", onResize)
        }
    }, [rs, config, isDark, themeColorUpdate])

    return (
        <div className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
            <canvas
                className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
                ref={canvasRef}
                onPointerDown={(e) => {
                    pointerInteracting.current = e.clientX
                    updatePointerInteraction(e.clientX)
                }}
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
            />
            
            {/* Network arc overlay — true great-circle wires */}
            <svg
                ref={svgRef}
                className="absolute inset-0 size-full pointer-events-none overflow-visible"
            >
                {arcVecs.map((_, i) => (
                    <g key={i}>
                        <path
                            ref={(el) => { pathsRef.current[i] = el }}
                            fill="none"
                            stroke="#00a3ff"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            style={{ opacity: 0, transition: 'opacity 0.3s' }}
                        />
                        <path
                            ref={(el) => { cometsRef.current[i] = el }}
                            fill="none"
                            stroke="#7cc4ff"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            style={{
                                strokeDasharray: '16 1000',
                                opacity: 0,
                                filter: 'drop-shadow(0 0 5px rgba(0,163,255,0.65))',
                                transition: 'opacity 0.3s',
                            }}
                        />
                    </g>
                ))}
            </svg>
        </div>
    )
}
