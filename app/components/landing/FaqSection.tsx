"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageSquare } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

type FaqItem = { q: string; a: string };

const generalFaqs: FaqItem[] = [
  {
    q: "Do you offer a refund policy?",
    a: "Yes. Eligible plans come with a refund window if you're not satisfied with performance — see our Refund Policy for the full terms and covered products.",
  },
  {
    q: "Can I switch my server location later?",
    a: "Absolutely. Open a ticket on our Discord or client area and we'll help migrate your data across India, Singapore, Germany, or the USA seamlessly.",
  },
  {
    q: "Are there free plans available?",
    a: "Yes! We offer a 100% free Discord bot hosting tier — no credit card required. Just register via Discord and deploy.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "We accept UPI, credit & debit cards, net banking, and popular wallets through our secure Cashfree Payments checkout.",
  },
];

const technicalFaqs: FaqItem[] = [
  {
    q: "What virtualization do you use?",
    a: "High-performance LXC containers for bots and Lavalink nodes for near-zero overhead, and enterprise KVM virtualization for our VPS infrastructure.",
  },
  {
    q: "Is DDoS protection included by default?",
    a: "Yes. Every plan is protected by enterprise-grade, multi-layered DDoS mitigation that filters malicious traffic at the edge before it reaches your server.",
  },
  {
    q: "Can I configure custom databases?",
    a: "Yes. We offer fully managed databases (MongoDB, Redis, MySQL, PostgreSQL), and you can host your own with full root access on a VPS.",
  },
  {
    q: "Which control panel will I get?",
    a: "Game and bot servers are managed through the Pterodactyl panel, while VPS plans are provisioned and managed via VirtFusion.",
  },
];
// COMPONENT_PLACEHOLDER
function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border vx-card shadow-sm mb-3 last:mb-0 transition-colors duration-200 ${
        isOpen ? "border-[#d97757]/50" : "vx-line hover:border-[#d97757]/40"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-xs sm:text-sm font-bold vx-ink">{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.2, ease }}
          className={`flex-shrink-0 p-1 rounded-full transition-colors ${
            isOpen ? "bg-[#d97757] text-white" : "bg-[#d97757]/10 text-[#d97757]"
          }`}
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
            transition={{ duration: 0.25, ease }}
            className="overflow-hidden border-t vx-line"
          >
            <p className="px-5 py-4 text-xs sm:text-[13px] leading-relaxed vx-muted">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [openGen, setOpenGen] = useState<number | null>(0);
  const [openTech, setOpenTech] = useState<number | null>(0);

  return (
    <section className="relative py-20 lg:py-28 vx-bg-alt vx-ink border-t vx-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d97757]/10 border border-[#d97757]/25 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d97757] mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight vx-ink">
            Frequently Asked Questions.
          </h2>
          <p className="mt-3 text-sm vx-muted max-w-lg mx-auto">
            Everything you need to know about our infrastructure, billing, and migrations.
          </p>
        </motion.div>

        {/* Dual Column Grid */}
        <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">

          {/* General column */}
          <div>
            <div className="flex items-center gap-2 mb-4 px-2">
              <span className="w-2 h-2 rounded-full bg-[#d97757]" />
              <h3 className="text-xs font-black vx-muted2 uppercase tracking-widest">
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
              <span className="w-2 h-2 rounded-full bg-[#788c5d]" />
              <h3 className="text-xs font-black vx-muted2 uppercase tracking-widest">
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

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mt-12 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl vx-card border vx-line px-6 py-5 shadow-sm"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d97757]/10 text-[#d97757]">
              <MessageSquare className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold vx-ink">Still have questions?</p>
              <p className="text-xs vx-muted">Our team replies fast on Discord.</p>
            </div>
          </div>
          <a
            href="https://discord.gg/dJpMDfgUQq"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#5865F2] px-6 py-3 text-xs font-bold text-white transition-all hover:brightness-110"
          >
            <FaDiscord className="h-4 w-4" />
            Ask on Discord
          </a>
        </motion.div>

      </div>
    </section>
  );
}
