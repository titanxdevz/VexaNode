"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const faqs = [
  {
    q: "How fast can I get my server online?",
    a: "Most services are provisioned automatically and ready within 60 seconds of checkout. Dedicated servers with custom configurations may take a little longer, but we'll keep you posted every step of the way.",
  },
  {
    q: "Is DDoS protection really included?",
    a: "Yes — every plan ships with always-on, multi-terabit DDoS mitigation at no extra cost. Attacks are filtered at the network edge before they ever reach your server.",
  },
  {
    q: "Can I upgrade or downgrade later?",
    a: "Absolutely. You can scale resources up or down at any time from your dashboard, and billing is prorated automatically so you only pay for what you use.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a money-back guarantee on eligible plans. If something isn't right within the guarantee window, reach out to support and we'll make it right.",
  },
  {
    q: "What kind of support do you provide?",
    a: "Real engineers, available 24/7 via live chat and tickets. No bots, no scripted runaround — just people who can actually solve your problem quickly.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00a3ff]">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Questions, answered
          </h2>
        </motion.div>

        <div className="mt-14 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease }}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-[#00a3ff]"
                  >
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-gray-400">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
