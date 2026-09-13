"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const generalFaqs = [
  {
    q: "Do you offer a refund policy?",
    a: "Yes, we offer a 24-hour refund policy on USA-based node purchases if you are not fully satisfied with performance.",
  },
  {
    q: "Can I switch my server location later?",
    a: "Absolutely. Just open a support ticket on our Discord or client area and we'll help migrate your data to India, Singapore, Germany, or the USA seamlessly.",
  },
  {
    q: "Are there free trial plans available?",
    a: "Yes! We offer a 100% free Discord Bot hosting tier on our USA nodes. No credit card required — just register via Discord and deploy.",
  },
];

const technicalFaqs = [
  {
    q: "What virtualization do you use?",
    a: "We use high-performance LXC containers for bots and Lavalink nodes for zero overhead, and enterprise KVM virtualization for our VPS infrastructure.",
  },
  {
    q: "Is DDoS protection included by default?",
    a: "Yes. Every single plan is protected by multi-terabit DDoS mitigation filters at the edge before malicious traffic can ever reach your server.",
  },
  {
    q: "Can I configure custom databases?",
    a: "Yes. We offer fully managed databases (MongoDB, Redis, MySQL, PostgreSQL) and you can also host your own with full root access on VPS.",
  },
];

export default function FaqSection() {
  const [openGen, setOpenGen] = useState<number | null>(0);
  const [openTech, setOpenTech] = useState<number | null>(null);

  const AccordionItem = ({ item, index, isOpen, onToggle }: any) => (
    <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] mb-3 last:mb-0 transition-all duration-200 hover:border-emerald-500/30 backdrop-blur-xl">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-xs sm:text-sm font-bold text-white transition-colors">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.15 }}
          className="flex-shrink-0 text-emerald-400 p-1 rounded-full bg-emerald-500/10"
        >
          <Plus className="h-3.5 w-3.5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/[0.04]"
          >
            <p className="px-5 py-4 text-xs leading-relaxed text-zinc-400">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <section className="relative py-20 lg:py-28 bg-[#06070a] text-white border-b border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Frequently Asked Questions.
          </h2>
          <p className="mt-3 text-sm text-zinc-400 max-w-lg mx-auto">
            Everything you need to know about our infrastructure, billing, and migrations.
          </p>
        </motion.div>

        {/* Dual Column Grid */}
        <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
          
          {/* General column */}
          <div>
            <div className="flex items-center gap-2 mb-4 px-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <h3 className="text-xs font-black text-zinc-300 uppercase tracking-widest">
                General &amp; Billing
              </h3>
            </div>
            <div className="space-y-3">
              {generalFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  item={faq}
                  isOpen={openGen === i}
                  onToggle={() => setOpenGen(openGen === i ? null : i)}
                />
              ))}
            </div>
          </div>

          {/* Technical column */}
          <div>
            <div className="flex items-center gap-2 mb-4 px-2">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <h3 className="text-xs font-black text-zinc-300 uppercase tracking-widest">
                Nodes &amp; Hardware
              </h3>
            </div>
            <div className="space-y-3">
              {technicalFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  item={faq}
                  isOpen={openTech === i}
                  onToggle={() => setOpenTech(openTech === i ? null : i)}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

