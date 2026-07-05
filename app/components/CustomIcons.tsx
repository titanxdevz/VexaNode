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
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4 2H20C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4C2 2.9 2.9 2 4 2M6 6V10H10V6H6M14 6V10H18V6H14M6 14V18H10V14H6M14 14V18H18V14H14Z" />
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
  Intel: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" strokeLinecap="round" />
      <path d="M10 9l-2 3 2 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 9l2 3-2 3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="7" y="7" width="10" height="10" rx="1" strokeOpacity="0.2" />
    </svg>
  )
};
