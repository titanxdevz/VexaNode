import React from 'react';

export const CustomIcons = {
  VPS: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6H20C21.1046 6 22 6.89543 22 8V10C22 11.1046 21.1046 12 20 12H4C2.89543 12 2 11.1046 2 10V8C2 6.89543 2.89543 6 4 6Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M4 14H20C21.1046 14 22 14.8954 22 16V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V16C2 14.8954 2.89543 14 4 14Z" fill="currentColor" fillOpacity="0.1" />
      <circle cx="6" cy="9" r="1" fill="currentColor" />
      <circle cx="9" cy="9" r="0.5" fill="currentColor" />
      <circle cx="6" cy="17" r="1" fill="currentColor" />
      <circle cx="9" cy="17" r="0.5" fill="currentColor" />
      <path d="M14 9H18" strokeLinecap="round" />
      <path d="M14 17H18" strokeLinecap="round" />
      <path d="M2 9H3" strokeLinecap="round" />
      <path d="M2 17H3" strokeLinecap="round" />
      <path d="M21 9H22" strokeLinecap="round" />
      <path d="M21 17H22" strokeLinecap="round" />
    </svg>
  ),
  Bot: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="11" width="18" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
      <path d="M12 5V8" strokeLinecap="round" />
      <path d="M8 2L10 5" strokeLinecap="round" />
      <path d="M16 2L14 5" strokeLinecap="round" />
      <circle cx="12" cy="8" r="3" strokeLinecap="round" />
      <path d="M7 15H8" strokeLinecap="round" strokeWidth="2" />
      <path d="M16 15H17" strokeLinecap="round" strokeWidth="2" />
      <path d="M10 18H14" strokeLinecap="round" />
      <path d="M2 13V15" strokeLinecap="round" />
      <path d="M22 13V15" strokeLinecap="round" />
    </svg>
  ),
  Minecraft: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M12 2V12" />
      <path d="M2 7L12 12L22 7" />
      <path d="M12 12H12.01" strokeWidth="3" strokeLinecap="round" />
      <path d="M7 9.5L12 12L17 9.5" />
      <path d="M2 12L12 17L22 12" strokeDasharray="2 2" />
    </svg>
  ),
  Database: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="6" rx="1" />
      <rect x="3" y="14" width="18" height="6" rx="1" />
      <circle cx="7" cy="7" r="1" fill="currentColor" />
      <circle cx="7" cy="17" r="1" fill="currentColor" />
      <path d="M21 10.5L18 14" strokeWidth="2" strokeLinecap="round" />
      <path d="M19 12L22 12" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Lavalink: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
      <path d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M4 4L8 8" />
      <path d="M20 4L16 8" />
      <path d="M4 20L8 16" />
      <path d="M20 20L16 16" />
      <rect x="2" y="2" width="4" height="4" rx="1" fill="currentColor" />
      <rect x="18" y="2" width="4" height="4" rx="1" fill="currentColor" />
      <rect x="2" y="18" width="4" height="4" rx="1" fill="currentColor" />
      <rect x="18" y="18" width="4" height="4" rx="1" fill="currentColor" />
    </svg>
  ),
  AMD: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2L2 12H7V22H17V12H22L12 2Z" fillOpacity="0.1" />
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M21.3 12l-8.6-8.6c-.4-.4-1-.4-1.4 0L2.7 12c-.4.4-.4 1 0 1.4l8.6 8.6c.4.4 1 .4 1.4 0l8.6-8.6c.4-.4.4-1 0-1.4zM12 18.5L5.5 12 12 5.5l6.5 6.5-6.5 6.5z" />
      <path d="M12 8.5L8.5 12 12 15.5l3.5-3.5L12 8.5z" />
    </svg>
  ),
  Ryzen: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" fillOpacity="0.05" />
      <path d="M6 14L12 8L18 14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 18L12 12L18 18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      <text x="12" y="21" fontSize="5" textAnchor="middle" fontWeight="bold" fill="currentColor" fontFamily="monospace">RYZEN 9</text>
    </svg>
  ),
  Intel: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="10" ry="8" strokeWidth="2" />
      <text x="12" y="14" fontSize="6" textAnchor="middle" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">intel</text>
    </svg>
  ),
  Discord: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 127.14 96.36" fill="currentColor" className={className}>
      <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,52.88,6.83,77.19,77.19,0,0,0,49.58,0,105.15,105.15,0,0,0,19.14,8.07C2.81,32.22-1.7,55.72.48,78.68A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.87-.64,1.72-1.31,2.54-2A75.54,75.54,0,0,0,96.2,78.53c.82.68,1.67,1.35,2.54,2a68.43,68.43,0,0,1-10.5,5A77.7,77.7,0,0,0,94.88,96.36,105.73,105.73,0,0,0,126.4,78.68C129.23,50.77,121.6,27.5,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.9,46,53.9,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.14,46,96.14,53,91,65.69,84.69,65.69Z" />
    </svg>
  )
};
