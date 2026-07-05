"use client"

import { motion } from "framer-motion"
import { Compass, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-500/5 blur-[120px] rounded-full" />

      <div className="relative z-10 text-center px-6">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-[28px] flex items-center justify-center">
            <Compass className="w-10 h-10 text-blue-500" />
          </div>
        </motion.div>

        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-[160px] sm:text-[200px] font-black orbitron-font leading-none bg-gradient-to-b from-white/20 to-white/5 bg-clip-text text-transparent select-none">
            404
          </h1>
        </motion.div>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold orbitron-font text-white mb-4 -mt-6"
        >
          Lost in the <span className="text-blue-500">Void</span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-gray-500 max-w-md mx-auto mb-10 leading-relaxed"
        >
          The page you&apos;re looking for doesn&apos;t exist, was moved, or is hiding in a quantum state. Either way, it&apos;s not here.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
