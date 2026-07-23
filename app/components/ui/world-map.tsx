"use client";

import { useRef, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = "#3b82f6", 
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();

  const map = useMemo(() => new DottedMap({ 
    height: 100, 
    grid: "diagonal" 
  }), []);

  
  const svgMap = useMemo(() => 
    map.getSVG({
      radius: 0.35,
      color: theme === "light" ? "rgba(59, 130, 246, 0.4)" : "rgba(96, 165, 250, 0.3)",
      shape: "circle",
      backgroundColor: "transparent",
    }), [map, theme]);

  const projectPoint = useCallback((lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  }, []);

  const createCurvedPath = useCallback((
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  }, []);

  const projectedDots = useMemo(() => 
    dots.map(dot => ({
      startPoint: projectPoint(dot.start.lat, dot.start.lng),
      endPoint: projectPoint(dot.end.lat, dot.end.lng),
      path: createCurvedPath(
        projectPoint(dot.start.lat, dot.start.lng),
        projectPoint(dot.end.lat, dot.end.lng)
      )
    })), [dots, projectPoint, createCurvedPath]);

  const encodedSvgMap = useMemo(() => 
    `data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`, 
    [svgMap]
  );

  return (
    <div className="w-full aspect-[2/1] rounded-lg relative font-sans">
      <div className="absolute inset-0 rounded-lg" />
      <Image
        src={encodedSvgMap}
        alt="Interactive world map"
        width={1056}
        height={495}
        className="h-full w-full pointer-events-none select-none opacity-60 dark:opacity-50"
        priority
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Render paths */}
        {projectedDots.map((dot, i) => (
          <motion.path
            key={`path-${i}`}
            d={dot.path}
            fill="none"
            stroke="url(#path-gradient)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1,
              delay: 0.5 * i,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Render points */}
        {projectedDots.map((dot, i) => (
          <g key={`points-${i}`}>
            {/* Start point */}
            <circle
              cx={dot.startPoint.x}
              cy={dot.startPoint.y}
              r="3"
              fill={lineColor}
            />
            <circle
              cx={dot.startPoint.x}
              cy={dot.startPoint.y}
              r="3"
              fill={lineColor}
              opacity="0.3"
            >
              <animate
                attributeName="r"
                from="3"
                to="12"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.5"
                to="0"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
              />
            </circle>
            
            {/* End point */}
            <circle
              cx={dot.endPoint.x}
              cy={dot.endPoint.y}
              r="3"
              fill={lineColor}
            />
            <circle
              cx={dot.endPoint.x}
              cy={dot.endPoint.y}
              r="3"
              fill={lineColor}
              opacity="0.3"
            >
              <animate
                attributeName="r"
                from="3"
                to="12"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.5"
                to="0"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
}