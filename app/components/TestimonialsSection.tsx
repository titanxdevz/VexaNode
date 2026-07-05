'use client'

import { motion } from 'framer-motion'
import { Star, Quote, User, ShieldCheck, Zap } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Studio Lead",
    content: "VexaNode changed the game for our community. The latency is practically non-existent, and the support team actually knows what they're talking about.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    content: "We migrated 50+ instances to VexaNode last month. The NVMe performance is legendary. Highly recommended for any serious developer.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Wright",
    role: "Community Owner",
    content: "Best DDoS protection I've ever experienced. Our servers haven't gone down once since we made the switch. The peace of mind is worth every penny.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 text-[10px] font-bold px-3 py-1 rounded border border-blue-500/20 mb-6 tracking-widest uppercase"
        >
          <Star className="w-3 h-3 fill-current" />
          Customer Stories
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-black mb-6 tracking-tight"
        >
          Trusted by <span className="text-blue-500">Thousands</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 max-w-2xl mx-auto text-base"
        >
          Don't just take our word for it. See why developers and community leaders worldwide choose VexaNode for their critical infrastructure.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative bg-[#0c0d12] border border-[#1f2129] hover:border-blue-500/30 rounded-[2rem] p-8 transition-all duration-300"
          >
            <div className="absolute top-8 right-8 text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
              <Quote className="w-12 h-12" />
            </div>

            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-blue-500 fill-current" />
              ))}
            </div>

            <p className="text-gray-400 leading-relaxed mb-8 relative z-10">
              "{testimonial.content}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-blue-500/50 transition-colors">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </div>
            
            {/* Subtle bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
      
      {/* Featured Badges */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
      >
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter orbitron-font">
          <ShieldCheck className="w-6 h-6" /> TRUSTPILOT
        </div>
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter orbitron-font">
          <Zap className="w-6 h-6" /> HOSTADVICE
        </div>
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter orbitron-font">
          <User className="w-6 h-6" /> VERIFIED
        </div>
      </motion.div>
    </section>
  )
}
