"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { memo, useMemo, useState, useEffect } from "react";
import { Globe } from "@/components/ui/globe";


const locations = [
    {
        name: "Mumbai, IN",
        region: "India West",
        hardware: "Ryzen 9 9950X / Ryzen 7 7700X / Xeon E5",
        flag: "/flags/india.png",
        basePing: 12,
        status: "online",
        lat: 19.0760,
        lng: 72.8777,
    },
    {
        name: "Delhi, IN",
        region: "India North",
        hardware: "AMD Ryzen 9 9950X",
        flag: "/flags/india.png",
        basePing: 14,
        status: "online",
        lat: 28.6139,
        lng: 77.2090,
    },
    {
        name: "Noida, IN",
        region: "India North",
        hardware: "Intel Xeon",
        flag: "/flags/india.png",
        basePing: 13,
        status: "online",
        lat: 28.5355,
        lng: 77.3910,
    },
    {
        name: "Kolkata, IN",
        region: "India East",
        hardware: "AMD EPYC",
        flag: "/flags/india.png",
        basePing: 16,
        status: "online",
        lat: 22.5726,
        lng: 88.3639,
    },
    {
        name: "Singapore, SG",
        region: "Asia Southeast",
        hardware: "AMD Ryzen 9 9950X / Ryzen 9 5950X",
        flag: "/flags/singapore.png",
        basePing: 45,
        status: "online",
        lat: 1.3521,
        lng: 103.8198,
    },
    {
        name: "Johor, SG",
        region: "Malaysia/Singapore",
        hardware: "AMD EPYC 7B13",
        flag: "/flags/singapore.png",
        basePing: 46,
        status: "online",
        lat: 1.4854,
        lng: 103.7618,
    },
    {
        name: "Sydney, AU",
        region: "Australia East",
        hardware: "AMD Ryzen 9 9900X",
        flag: "/flags/australia.png",
        basePing: 52,
        status: "online",
        lat: -33.8688,
        lng: 151.2093,
    },
    {
        name: "Frankfurt, DE",
        region: "Germany Central",
        hardware: "Intel Xeon / AMD EPYC",
        flag: "/flags/germany.png",
        basePing: 18,
        status: "online",
        lat: 50.1109,
        lng: 8.6821,
    },
    {
        name: "Nuremberg, DE",
        region: "Germany Southeast",
        hardware: "AMD EPYC 7502P",
        flag: "/flags/germany.png",
        basePing: 19,
        status: "online",
        lat: 49.4521,
        lng: 11.0767,
    },
    {
        name: "Falkenstein, DE",
        region: "Germany East",
        hardware: "AMD Ryzen 9 9950X",
        flag: "/flags/germany.png",
        basePing: 17,
        status: "online",
        lat: 50.4779,
        lng: 12.3713,
    },
    {
        name: "Miami, US",
        region: "US Southeast",
        hardware: "Ryzen 9 9950X / Xeon Gold 6152",
        flag: "/flags/usa.png",
        basePing: 65,
        status: "online",
        lat: 25.7617,
        lng: -80.1918,
    },
    {
        name: "Utah, US",
        region: "US West",
        hardware: "AMD EPYC 7C13 / Xeon E5 v2",
        flag: "/flags/usa.png",
        basePing: 48,
        status: "online",
        lat: 40.7608,
        lng: -111.8910,
    },
    {
        name: "Kansas, US",
        region: "US Central",
        hardware: "AMD EPYC 9B45",
        flag: "/flags/usa.png",
        basePing: 55,
        status: "online",
        lat: 39.0997,
        lng: -94.5786,
    },
    {
        name: "Los Angeles, US",
        region: "US West",
        hardware: "AMD EPYC 7R13",
        flag: "/flags/usa.png",
        basePing: 42,
        status: "online",
        lat: 34.0522,
        lng: -118.2437,
    },
    {
        name: "New York, US",
        region: "US East",
        hardware: "AMD Ryzen 9 9950X",
        flag: "/flags/usa.png",
        basePing: 70,
        status: "online",
        lat: 40.7128,
        lng: -74.0060,
    },
    {
        name: "Texas, US",
        region: "US South",
        hardware: "AMD EPYC 7C13",
        flag: "/flags/usa.png",
        basePing: 62,
        status: "online",
        lat: 32.7767,
        lng: -96.7970,
    },
    {
        name: "Chicago, US",
        region: "US Central",
        hardware: "AMD EPYC Milan",
        flag: "/flags/usa.png",
        basePing: 72,
        status: "online",
        lat: 41.8781,
        lng: -87.6298,
    },
    {
        name: "Ashburn, US",
        region: "US East",
        hardware: "Intel Xeon",
        flag: "/flags/usa.png",
        basePing: 68,
        status: "online",
        lat: 39.0438,
        lng: -77.4874,
    }
];

const LocationItem = memo(({ location, index }: { location: typeof locations[0], index: number }) => {
    const [ping, setPing] = useState<number | string>("...");

    useEffect(() => {
        const timer = setTimeout(() => {
            const variance = Math.floor(Math.random() * 8) - 4;
            setPing(location.basePing + variance);
        }, 800 + index * 100);
        return () => clearTimeout(timer);
    }, [location.basePing, index]);

    return (
        <motion.div
            className="flex items-center justify-between gap-4 py-3 px-4 bg-[#0c0e1a]/40 border border-white/5 rounded-xl hover:border-emerald-500/20 hover:bg-[#0c0e1a]/60 transition-all duration-300 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
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
                    <h3 className="text-white font-bold text-sm sm:text-base truncate group-hover:text-emerald-400 transition-colors">
                        {location.name}
                    </h3>
                    <p className="text-zinc-500 text-[10px] mt-0.5 truncate uppercase tracking-wider font-semibold">
                        {location.region}
                    </p>
                    <p className="text-emerald-400 font-mono text-[9px] mt-1 truncate">
                        {location.hardware}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
                <div className="flex items-center gap-1.5 bg-black/40 border border-white/5 rounded-lg px-2.5 py-1 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-zinc-400 font-mono">{ping !== "..." ? `${ping}ms` : "checking"}</span>
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
        markerColor: [16/255, 185/255, 129/255] as [number, number, number], // emerald green markers
        glowColor: [0.03, 0.15, 0.08] as [number, number, number], 
        markers: locations.map(location => ({
            location: [location.lat, location.lng] as [number, number],
            size: 0.09,
        })),
        onRender: () => { },
    }), []);

    return (
        <div className="bg-[#030408] relative px-4 sm:px-6 lg:px-8 overflow-hidden py-32 border-t border-b border-white/5">
            {/* Ambient gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none will-change-transform" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none will-change-transform" />

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
                            <span className="text-emerald-500 text-neon-glow-brand">Distribution</span>
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
