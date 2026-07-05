"use client"

import { motion } from "framer-motion"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "../contexts/LanguageContext"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1')
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2')
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3')
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4')
    },
    {
      question: t('faq.question5'),
      answer: t('faq.answer5')
    }
  ]

  return (
    <div className="bg-[#030408] relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background brand glow blobs */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#00a3ff]/5 rounded-full blur-[140px] pointer-events-none will-change-transform" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-[#00a3ff]/5 rounded-full blur-[140px] pointer-events-none will-change-transform" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Side Banner Illustration */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square max-w-[450px] mx-auto rounded-3xl bg-[#0c0e1a]/40 border border-white/5 p-8 flex items-center justify-center overflow-hidden group hover:border-[#00a3ff]/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[#00a3ff]/5 opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative w-full h-full">
                <Image
                  src="/feature-9.webp"
                  alt="Server Support Illustration"
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg drop-shadow-[0_0_25px_rgba(0,163,255,0.15)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>

          {/* FAQ Accordions */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 orbitron-font uppercase tracking-tight leading-tight">
                Frequently Asked <br />
                <span className="text-[#00a3ff] text-neon-glow-brand">Questions</span>
              </h2>
              <p className="text-gray-400 text-lg quicksand-font">
                Have questions about our server nodes, billing, or SLA uptime guarantees? Find quick answers below.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`bg-[#0c0e1a]/30 backdrop-blur-md border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen ? 'border-[#00a3ff]/50 bg-[#0c0e1a]/60' : 'border-white/5 hover:border-white/10'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className={`w-5 h-5 flex-shrink-0 ${isOpen ? "text-[#00a3ff]" : "text-gray-500"}`} />
                        <span className="text-base sm:text-lg font-bold text-white tracking-tight">{faq.question}</span>
                      </div>
                      
                      <div className={`w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#00a3ff]/20 text-[#00a3ff]' : 'text-gray-400'
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-96 border-t border-white/5" : "max-h-0"
                      }`}
                    >
                      <p className="p-6 text-gray-400 text-sm sm:text-base leading-relaxed quicksand-font bg-black/10">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
