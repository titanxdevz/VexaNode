"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const generalFaqs = [
  {
    q: "Do you offer a refund policy?",
    a: "Yes, we offer a 24-hour refund policy on USA-based node purchases if you are not fully satisfied with performance.",
  },
  {
    q: "Can I switch my server location later?",
    a: "Absolutely. Just open a support ticket on our Discord or client area and we'll help migrate your data to India, Singapore, Germany, or the USA.",
  },
  {
    q: "Are there free trial plans available?",
    a: "Yes! We offer a 100% free Discord Bot hosting tier on our USA nodes. No credit card required — just register via Discord and deploy.",
  },
];

const technicalFaqs = [
  {
    q: "What virtualization do you use?",
    a: "We use LXC containers for bots and Lavalink to ensure maximum performance, and premium KVM nodes for our VPS products.",
  },
  {
    q: "Is DDoS protection included by default?",
    a: "Yes. Every single plan is protected by multi-terabit DDoS mitigation filters at the edge before malicious traffic can reach your instance.",
  },
  {
    q: "Can I configure custom databases?",
    a: "Yes. We offer fully managed databases (MongoDB, Redis, MySQL, PostgreSQL) and you can also run your own with full root access on VPS.",
  },
];

export default function FaqSection() {
  const [openGen, setOpenGen] = useState<number | null>(0);
  const [openTech, setOpenTech] = useState<number | null>(null);

  const AccordionItem = ({ item, index, isOpen, onToggle }: any) => (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/20 mb-3 last:mb-0 transition-colors duration-150 hover:border-zinc-700">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.15 }}
          className="flex-shrink-0 text-emerald-400"
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-4 text-xs leading-relaxed text-zinc-400">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <section className="relative py-20 lg:py-28 bg-zinc-950 text-white border-b border-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Questions, answered
          </h2>
        </motion.div>

        {/* Dual Column Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* General column */}
          <div>
            <h3 className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-4">
              General Support
            </h3>
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
            <h3 className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-4">
              Hosting &amp; Technical
            </h3>
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
