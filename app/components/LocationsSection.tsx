"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { memo, useMemo, useState, useEffect } from "react";
import { Globe } from "@/components/ui/globe";


const locations = [
    {
        name: "Mumbai, IN",
        region: "India West",
        flag: "/flags/india.png",
        basePing: 12,
        status: "online",
        lat: 19.0760,
        lng: 72.8777,
    },
    {
        name: "Delhi, IN",
        region: "India North",
        flag: "/flags/india.png",
        basePing: 14,
        status: "online",
        lat: 28.6139,
        lng: 77.2090,
    },
    {
        name: "Bangalore, IN",
        region: "India South",
        flag: "/flags/india.png",
        basePing: 16,
        status: "online",
        lat: 12.9716,
        lng: 77.5946,
    },
    {
        name: "Hyderabad, IN",
        region: "India South",
        flag: "/flags/india.png",
        basePing: 15,
        status: "online",
        lat: 17.3850,
        lng: 78.4867,
    },
    {
        name: "Noida, IN",
        region: "India North",
        flag: "/flags/india.png",
        basePing: 13,
        status: "online",
        lat: 28.5355,
        lng: 77.3910,
    },
    {
        name: "Singapore, SG",
        region: "Asia Southeast",
        flag: "/flags/singapore.png",
        basePing: 45,
        status: "online",
        lat: 1.3521,
        lng: 103.8198,
    },
    {
        name: "Frankfurt, DE",
        region: "Europe Central",
        flag: "/flags/germany.png",
        basePing: 18,
        status: "online",
        lat: 50.1109,
        lng: 8.6821,
    },
    {
        name: "Amsterdam, NL",
        region: "Europe West",
        flag: "/flags/germany.png",
        basePing: 22,
        status: "online",
        lat: 52.3676,
        lng: 4.9041,
    },
    {
        name: "Salt Lake City, UT",
        region: "US West",
        flag: "/flags/usa.png",
        basePing: 48,
        status: "online",
        lat: 40.7608,
        lng: -111.8910,
    },
    {
        name: "Chicago, IL",
        region: "US Central",
        flag: "/flags/usa.png",
        basePing: 72,
        status: "online",
        lat: 41.8781,
        lng: -87.6298,
    },
    {
        name: "Dallas, TX",
        region: "US South",
        flag: "/flags/usa.png",
        basePing: 62,
        status: "online",
        lat: 32.7767,
        lng: -96.7970,
    },
    {
        name: "Seattle, WA",
        region: "US West",
        flag: "/flags/usa.png",
        basePing: 98,
        status: "online",
        lat: 47.6062,
        lng: -122.3321,
    },
];

const LocationItem = memo(({ location, index }: { location: typeof locations[0], index: number }) => {
    const [ping, setPing] = useState<number | string>("...");

    useEffect(() => {
        const timer = setTimeout(() => {
            const variance = Math.floor(Math.random() * 8) - 4;
            setPing(location.basePing + variance);
        }, 800 + index * 150);
        return () => clearTimeout(timer);
    }, [location.basePing, index]);

    return (
        <motion.div
            className="flex items-center justify-between gap-4 py-3.5 px-4 bg-[#0c0e1a]/40 border border-white/5 rounded-xl hover:border-[#00a3ff]/40 hover:bg-[#0c0e1a]/60 transition-all duration-300 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
        >
            <div className="flex items-center gap-3 min-w-0 flex-1">
                <Image
                    src={location.flag}
                    alt={`${location.name} flag`}
                    width={32}
                    height={32}
                    className="w-6 h-6 rounded-md object-cover flex-shrink-0 border border-white/10"
                    loading="lazy"
                />
                <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-sm sm:text-base truncate group-hover:text-[#00a3ff] transition-colors">
                        {location.name}
                    </h3>
                    <p className="text-gray-500 text-xs mt-0.5 truncate uppercase tracking-wider font-semibold">
                        {location.region}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
                <div className="flex items-center gap-1.5 bg-black/40 border border-white/5 rounded-lg px-2.5 py-1 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-gray-400 font-mono">{ping !== "..." ? `${ping}ms` : "checking"}</span>
                </div>
            </div>
        </motion.div>
    );
});

LocationItem.displayName = 'LocationItem';

export default function LocationsSection() {
    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }), []);

    const globeConfig = useMemo(() => ({
        width: 800,
        height: 800,
        devicePixelRatio: 2,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 0.4,
        mapSamples: 16000,
        mapBrightness: 3.5,
        baseColor: [0.03, 0.05, 0.15] as [number, number, number], 
        markerColor: [0, 0.639, 1] as [number, number, number], // #00a3ff brand blue markers
        glowColor: [0.08, 0.12, 0.25] as [number, number, number], 
        markers: locations.map(location => ({
            location: [location.lat, location.lng] as [number, number],
            size: 0.09,
        })),
        onRender: () => { },
    }), []);

    return (
        <div className="bg-[#030408] relative px-4 sm:px-6 lg:px-8 overflow-hidden py-32 border-t border-b border-white/5">
            {/* Ambient gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#00a3ff]/5 rounded-full blur-[140px] pointer-events-none will-change-transform" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00a3ff]/5 rounded-full blur-[140px] pointer-events-none will-change-transform" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl sm:text-6xl font-black text-white orbitron-font mb-6 leading-none uppercase tracking-tight">
                            Global Node <br />
                            <span className="text-[#00a3ff] text-neon-glow-brand">Distribution</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl quicksand-font">
                            Deploy your workloads near your user base. Our custom routing algorithms and strategically located datacenters ensure the absolute lowest latency and highest throughput.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {locations.map((location, index) => (
                                <LocationItem key={location.name} location={location} index={index} />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative flex h-[400px] lg:h-[600px] items-center justify-center w-full mt-12 lg:mt-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_70%)]">
                            <Globe />
                        </div>
                    </motion.div>
            </div>
            </div>
        </div>
    );
}
