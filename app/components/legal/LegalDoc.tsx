"use client"

import Link from "next/link"
import type { ComponentType } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, ArrowRight } from "lucide-react"

const EASE = [0.16, 1, 0.3, 1] as const

export interface LegalSection {
  icon: ComponentType<{ className?: string }>
  title: string
  content: string
}

export interface LegalChip {
  icon: ComponentType<{ className?: string }>
  label: string
}

export interface LegalCTAButton {
  label: string
  href: string
  external?: boolean
  primary?: boolean
  icon?: ComponentType<{ className?: string }>
}

export interface LegalCTA {
  eyebrow?: string
  title: string
  subtitle: string
  trustPoints?: string[]
  footnote?: string
  buttons: LegalCTAButton[]
}

interface LegalDocProps {
  eyebrow: string
  eyebrowIcon?: ComponentType<{ className?: string }>
  title: string
  accent: string
  subtitle: string
  chips?: LegalChip[]
  sections: LegalSection[]
  cta: LegalCTA
}

export default function LegalDoc({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  accent,
  subtitle,
  chips,
  sections,
  cta,
}: LegalDocProps) {
  return (
    <main className="relative overflow-hidden vx-bg vx-ink pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Subtle ambient — landing-style soft washes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(217,119,87,0.10),transparent_65%)]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(176,174,165,0.06),transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-[#d97757]/30 bg-[#d97757]/10 px-3.5 py-1.5 mb-7"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d97757] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d97757]" />
            </span>
            {EyebrowIcon ? <EyebrowIcon className="h-3.5 w-3.5 text-[#d97757]" /> : null}
            <span className="text-[11px] font-semibold text-[#d97757] tracking-wide">{eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: EASE }}
            className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-extrabold tracking-[-0.025em] leading-[1.08] vx-ink"
          >
            {title} <span className="text-[#d97757]">{accent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.09, ease: EASE }}
            className="mt-5 mx-auto max-w-2xl text-[15px] leading-[1.7] vx-muted"
          >
            {subtitle}
          </motion.p>

          {chips && chips.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
              className="mt-7 flex flex-wrap items-center justify-center gap-3"
            >
              {chips.map((chip, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border vx-line vx-card px-3.5 py-1.5 text-[11px] font-semibold vx-muted"
                >
                  <chip.icon className="h-3.5 w-3.5 text-[#d97757]" />
                  {chip.label}
                </span>
              ))}
            </motion.div>
          )}
        </div>

        {/* Sections */}
        <div className="mt-16 space-y-4">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.05, ease: EASE }}
              className="group flex items-start gap-5 rounded-xl border vx-line vx-card p-6 sm:p-8 transition-all duration-200 hover:border-[#d97757]/40 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d97757]/10 border border-[#d97757]/30 text-[#d97757] transition-colors duration-200 group-hover:bg-[#d97757] group-hover:border-[#d97757] group-hover:text-white">
                <section.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-extrabold tracking-tight vx-ink leading-snug">{section.title}</h2>
                <p className="mt-2 text-[14px] leading-[1.7] vx-muted">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA — landing-style two-column card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mt-20 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center rounded-2xl border vx-line vx-card px-6 sm:px-10 lg:px-14 py-12 sm:py-14"
        >
          <div>
            {cta.eyebrow && (
              <span className="text-[11px] font-bold text-[#d97757] uppercase tracking-widest">{cta.eyebrow}</span>
            )}
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight vx-ink leading-[1.15]">
              {cta.title}
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed vx-muted">{cta.subtitle}</p>

            {cta.trustPoints && cta.trustPoints.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] vx-muted">
                {cta.trustPoints.map((point, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-[#d97757]" />
                    {point}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            {cta.buttons.map((button, i) => {
              const Icon = button.icon
              const buttonClasses = button.primary
                ? "group inline-flex w-full lg:w-auto items-center justify-center gap-2 rounded-xl bg-[#d97757] hover:bg-[#c96442] text-white px-7 py-3 text-[13px] font-bold tracking-wide transition-colors duration-150 shadow-[0_8px_24px_-8px_rgba(217,119,87,0.6)]"
                : "inline-flex w-full lg:w-auto items-center justify-center gap-2 rounded-xl border vx-line vx-muted vx-hover-ink hover:border-[#d97757]/40 px-7 py-3 text-[13px] font-semibold transition-all duration-150"

              if (button.external) {
                return (
                  <a
                    key={i}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                  >
                    {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                    <span>{button.label}</span>
                    {button.primary ? (
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                    ) : null}
                  </a>
                )
              }

              return (
                <Link
                  key={i}
                  href={button.href}
                  className={buttonClasses}
                >
                  {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                  <span>{button.label}</span>
                  {button.primary ? (
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                  ) : null}
                </Link>
              )
            })}

            {cta.footnote && <span className="text-[11px] vx-faint lg:text-right">{cta.footnote}</span>}
          </div>
        </motion.div>
      </div>
    </main>
  )
}