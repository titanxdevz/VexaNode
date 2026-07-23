"use client"

import { motion } from "framer-motion"

export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      className={`bg-white/5 rounded-2xl ${className}`}
    />
  )
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`bg-white/[0.03] border border-white/5 rounded-[28px] p-6 ${className}`}>
      <div className="flex items-start justify-between mb-5">
        <Skeleton className="w-12 h-12 rounded-2xl" />
        <Skeleton className="w-20 h-6 rounded-full" />
      </div>
      <Skeleton className="w-24 h-8 mb-2" />
      <Skeleton className="w-32 h-4" />
    </div>
  )
}

export function SkeletonTable({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) {
  return (
    <div aria-hidden="true" className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-4">
          {Array.from({ length: cols }).map((_, j) => (
            <Skeleton key={j} className={`h-5 ${j === 0 ? "w-1/3" : "w-1/4"}`} />
          ))}
        </div>
      ))}
    </div>
  )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div aria-hidden="true" className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={`h-4 ${i === lines - 1 ? "w-3/4" : "w-full"}`} />
      ))}
    </div>
  )
}

export function SkeletonAvatar({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "w-10 h-10", md: "w-16 h-16", lg: "w-24 h-24" }
  return <Skeleton className={`${sizes[size]} rounded-full`} />
}

export function SkeletonSidebar({ items = 6 }: { items?: number }) {
  return (
    <div aria-hidden="true" className="space-y-2">
      {Array.from({ length: items }).map((_, i) => (
        <Skeleton key={i} className="h-12 w-full" />
      ))}
    </div>
  )
}

export function SkeletonConversation() {
  return (
    <div aria-hidden="true" className="space-y-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className={`flex gap-4 ${i % 2 === 0 ? "" : "flex-row-reverse"}`}>
          <SkeletonAvatar size="sm" />
          <div className={`flex-1 ${i % 2 === 0 ? "" : "items-end flex flex-col"}`}>
            <Skeleton className={`h-20 rounded-2xl w-3/4 ${i % 2 === 0 ? "" : "w-2/3"}`} />
          </div>
        </div>
      ))}
    </div>
  )
}
