'use client';
import { useEffect, useState, useRef, useMemo } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

const locations = [
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777, isHub: true }, 
    { name: 'New York', lat: 40.7128, lng: -74.0060, isHub: true }, 
    { name: 'Frankfurt', lat: 50.1109, lng: 8.6821, isHub: false }, 
    { name: 'Singapore', lat: 1.3521, lng: 103.8198, isHub: false }, 
    { name: 'LA', lat: 34.0522, lng: -118.2437, isHub: false }, 
    { name: 'Sao Paulo', lat: -23.5505, lng: -46.6333, isHub: false }, 
    { name: 'Tokyo', lat: 35.6762, lng: 139.6503, isHub: false } 
];

export default function NetworkGlobe() {
    const globeEl = useRef<any>(null);
    const [hexData, setHexData] = useState<any[]>([]);
    
    useEffect(() => {
        fetch('https://unpkg.com/three-globe/example/datasets/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(data => {
                setHexData(data.features);
            });
    }, []);

    useEffect(() => {
        if (globeEl.current) {
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.8;
            globeEl.current.controls().enableZoom = false;
        }
    }, []);

    const { arcs, tracks } = useMemo(() => {
        const networkArcs: any[] = [];
        const networkTracks: any[] = [];
        
        const connections = [
            { from: 'New York', to: 'Frankfurt' },
            { from: 'New York', to: 'LA' },
            { from: 'New York', to: 'Sao Paulo' },
            { from: 'New York', to: 'Mumbai' },
            { from: 'Mumbai', to: 'Singapore' },
            { from: 'Mumbai', to: 'Tokyo' },
            { from: 'Frankfurt', to: 'Mumbai' }
        ];

        connections.forEach(({ from, to }) => {
            const start = locations.find(l => l.name === from);
            const end = locations.find(l => l.name === to);
            
            if (start && end) {
                const arcBase = {
                    startLat: start.lat,
                    startLng: start.lng,
                    endLat: end.lat,
                    endLng: end.lng,
                };
                
                networkTracks.push({
                    ...arcBase,
                    color: 'rgba(0, 163, 255, 0.2)',
                });
                
                networkArcs.push({
                    ...arcBase,
                    color: '#00a3ff', 
                });
            }
        });

        return { arcs: networkArcs, tracks: networkTracks };
    }, []);

    const allArcs = [...tracks, ...arcs];

    return (
        <Globe
            ref={globeEl}
            width={700}
            height={700}
            backgroundColor="rgba(0,0,0,0)"
            showAtmosphere={true}
            atmosphereColor="#00a3ff"
            atmosphereAltitude={0.25}
            globeImageUrl="" 
            globeMaterial={new THREE.MeshPhongMaterial({ color: '#030814', transparent: true, opacity: 0.95 })}
            
            hexPolygonsData={hexData}
            hexPolygonResolution={3}
            hexPolygonMargin={0.6}
            hexPolygonColor={() => '#13284a'} 
            
            arcsData={allArcs}
            arcColor="color"
            arcDashLength={(d: any) => d.color === '#00a3ff' ? 0.2 : 1}
            arcDashGap={(d: any) => d.color === '#00a3ff' ? 2 : 0} 
            arcDashAnimateTime={(d: any) => d.color === '#00a3ff' ? 2500 : 0} 
            arcStroke={(d: any) => d.color === '#00a3ff' ? 1.5 : 0.5} 
            
            ringsData={locations}
            ringColor={() => '#00a3ff'}
            ringMaxRadius={(d: any) => d.isHub ? 6 : 4} 
            ringPropagationSpeed={2}
            ringRepeatPeriod={1500}
            
            labelsData={locations}
            labelLat="lat"
            labelLng="lng"
            labelDotRadius={(d: any) => d.isHub ? 2.2 : 1.4}
            labelColor={() => '#4da2ff'} 
            labelText={() => ''}
        />
    )
}
