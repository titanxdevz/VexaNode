"use client"

import { useEffect, useRef, useState } from "react"
import createGlobe, { COBEOptions } from "cobe"
import { useSpring, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

const GLOBE_CONFIG: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => { },
    devicePixelRatio: 1, // Was 2 — halved for performance
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 0.4,
    mapSamples: 10000, // Was 16000 — reduced for performance
    mapBrightness: 3,
    baseColor: [0.03, 0.05, 0.15],
    markerColor: [16/255, 185/255, 129/255],
    glowColor: [0.03, 0.15, 0.08],

    markers: [
        { location: [19.0760, 72.8777], size: 0.09 },   // Mumbai
        { location: [28.6139, 77.2090], size: 0.09 },   // Delhi
        { location: [28.5355, 77.3910], size: 0.09 },   // Noida
        { location: [22.5726, 88.3639], size: 0.09 },   // Kolkata
        { location: [1.3521, 103.8198], size: 0.09 },   // Singapore
        { location: [1.4854, 103.7618], size: 0.09 },   // Johor
        { location: [-33.8688, 151.2093], size: 0.09 },  // Sydney
        { location: [50.1109, 8.6821], size: 0.09 },    // Frankfurt
        { location: [49.4521, 11.0767], size: 0.09 },   // Nuremberg
        { location: [50.4779, 12.3713], size: 0.09 },   // Falkenstein
        { location: [25.7617, -80.1918], size: 0.09 },  // Miami
        { location: [40.7608, -111.8910], size: 0.09 }, // Utah
        { location: [39.0997, -94.5786], size: 0.09 },  // Kansas
        { location: [34.0522, -118.2437], size: 0.09 }, // LA
        { location: [40.7128, -74.0060], size: 0.09 },  // NY
        { location: [32.7767, -96.7970], size: 0.09 },  // Texas
        { location: [41.8781, -87.6298], size: 0.09 },  // Chicago
        { location: [39.0438, -77.4874], size: 0.09 }   // Ashburn
    ],
};

export function Globe({ className, config = GLOBE_CONFIG }: { className?: string, config?: COBEOptions }) {
    let phi = 0
    let width = 0
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    const pointerInteracting = useRef<number | null>(null)
    const pointerInteractionMovement = useRef(0)

    const r = useMotionValue(0)
    const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 })

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

    // IntersectionObserver — only render when visible
    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => { setIsVisible(entry.isIntersecting) },
            { rootMargin: '200px' } // Start loading slightly before in view
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    // Create/destroy globe based on visibility
    useEffect(() => {
        if (!isVisible || !canvasRef.current) {
            // Destroy globe when not visible to free GPU
            if (globeRef.current) {
                globeRef.current.destroy()
                globeRef.current = null
            }
            return
        }

        const onResize = () => {
            if (canvasRef.current) width = canvasRef.current.offsetWidth
        }
        window.addEventListener("resize", onResize)
        onResize()

        const globe = createGlobe(canvasRef.current, {
            ...config,
            dark: 1,
            baseColor: [0.03, 0.05, 0.15] as [number, number, number],
            markerColor: [16/255, 185/255, 129/255] as [number, number, number],
            glowColor: [0.03, 0.15, 0.08] as [number, number, number],
            width: width * 2,
            height: width * 2,
            onRender: (state) => {
                if (!pointerInteracting.current) phi += 0.004
                state.phi = phi + rs.get()
                state.width = width * 2
                state.height = width * 2
            },
        })
        globeRef.current = globe

        setTimeout(() => {
            if (canvasRef.current) canvasRef.current.style.opacity = "1";
        }, 0)

        return () => {
            globe.destroy()
            globeRef.current = null
            window.removeEventListener("resize", onResize)
        }
    }, [isVisible, rs, config])

    return (
        <div ref={containerRef} className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
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
        </div>
    )
}
