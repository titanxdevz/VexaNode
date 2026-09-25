"use client"

import Image from "next/image"
import Link from "next/link"
import { MotionConfig, motion } from "framer-motion"
import { ArrowRight, Github, UsersRound } from "lucide-react"
import { FaDiscord } from "react-icons/fa6"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"

type Owner = {
  id: string
  name: string
  role: string
  summary: string
  focus: string[]
  avatar: string
  discordId: string
  github?: string
}

type StaffMember = {
  id: string
  name: string
  avatar: string
}

const owners: Owner[] = [
  {
    id: "1308728198565204003",
    name: "Ansh",
    role: "Founder & Primary Owner",
    summary: "The founder and main owner of VexaNode, leading the company and its direction.",
    focus: ["VexaNode ownership", "Leadership & direction"],
    avatar: "https://cdn.discordapp.com/avatars/1308728198565204003/cb8fbf21e661b6ccfd1f7adbef7343f4.png?size=1024",
    discordId: "1308728198565204003",
    github: "https://github.com/titanxdevz",
  },
  {
    id: "1217865979627962470",
    name: "𝓐𝓵𝓹𝓱𝓪",
    role: "Co-Owner & Infrastructure",
    summary: "Responsible for VexaNode's VPS infrastructure and backend systems.",
    focus: ["VPS infrastructure", "Backend systems"],
    avatar: "https://cdn.discordapp.com/avatars/1217865979627962470/04b2b0186b6a469a78a04a3c41eb2983.png?size=1024",
    discordId: "1217865979627962470",
  },
  {
    id: "852761498799046697",
    name: "SREERAJ SK",
    role: "Co-Owner & Management",
    summary: "Handles company-wide management and the day-to-day operational side of VexaNode.",
    focus: ["Company management", "Day-to-day operations"],
    avatar: "https://cdn.discordapp.com/avatars/852761498799046697/60bb3d8f5904cd68ac14be40c0a7390c.png?size=1024",
    discordId: "852761498799046697",
    github: "https://github.com/SreerajSK990",
  },
]

const staff: StaffMember[] = [
  {
    id: "1492110213874974760",
    name: "Joy…",
    avatar: "https://cdn.discordapp.com/avatars/1492110213874974760/5865fe29fb03cc15807cbf24e9aa0b64.webp?size=256",
  },
  {
    id: "1534801642451374130",
    name: "Admi",
    avatar: "https://cdn.discordapp.com/avatars/1534801642451374130/30eb2b192fc41d4b3ee97c53c1b9c9ea.webp?size=256",
  },
  {
    id: "1171713294017511489",
    name: "✦ Staff | Pyro",
    avatar: "https://cdn.discordapp.com/avatars/1171713294017511489/f3b86bc0b7c53bfd58f1e343f648c1ac.webp?size=256",
  },
  {
    id: "1433916492776214528",
    name: "𝔵𝑳𝑬𝑽𝑰海外",
    avatar: "https://cdn.discordapp.com/avatars/1433916492776214528/2eddd529d86226c235dcac08c8adac6b.webp?size=256",
  },
  {
    id: "1295398098989875211",
    name: "teroq..¡",
    avatar: "https://cdn.discordapp.com/avatars/1295398098989875211/8217e5ec1bbc215a02635dfe5194bf0c.webp?size=256",
  },
  {
    id: "1532786750567616555",
    name: "✦ Staff | Princeee",
    avatar: "https://cdn.discordapp.com/avatars/1532786750567616555/4cd16f6fe859fc6f0f7134fd0ebad61c.webp?size=256",
  },
  {
    id: "1511407679367545034",
    name: "✦ Staff | 𝑨𝒆 𝒓 𝒊 𝒙",
    avatar: "https://cdn.discordapp.com/avatars/1511407679367545034/42d7bfec182d1b857164ec3d11e95939.webp?size=256",
  },
  {
    id: "1148981810122997850",
    name: "shifted",
    avatar: "https://cdn.discordapp.com/avatars/1148981810122997850/3bbed3933d84ed6043518713ec2473d9.webp?size=256",
  },
]

function OwnerSocialLinks({ owner, compact = false }: { owner: Owner; compact?: boolean }) {
  const buttonClass = compact
    ? "h-10 w-10 rounded-xl"
    : "h-11 px-4 rounded-xl"

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <a
        href={`https://discord.com/users/${owner.discordId}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${owner.name} on Discord`}
        className={`${buttonClass} inline-flex items-center justify-center gap-2 border vx-line vx-muted hover:text-[#5865F2] hover:border-[#5865F2]/40 transition-colors duration-150`}
      >
        <FaDiscord className="h-4 w-4" aria-hidden="true" />
        {!compact && <span className="text-sm font-bold">Discord</span>}
      </a>
      {owner.github && (
        <a
          href={owner.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${owner.name} on GitHub`}
          className={`${buttonClass} inline-flex items-center justify-center gap-2 border vx-line vx-muted hover:vx-hover-ink hover:border-[color:var(--vx-accent)] transition-colors duration-150`}
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          {!compact && <span className="text-sm font-bold">GitHub</span>}
        </a>
      )}
    </div>
  )
}

export default function TeamPage() {
  const leadOwner = owners[0]
  const supportingOwners = owners.slice(1)

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen vx-bg vx-ink selection:bg-[#d97757]/30">
        <PageMeta title="Our Team" />
        <Navbar />

        <main className="pt-32 pb-24">
          <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid items-end gap-10 border-b vx-line pb-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:gap-16"
            >
              <div>
                <div className="mb-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] vx-accent-text">
                  <UsersRound className="h-3.5 w-3.5" aria-hidden="true" />
                  The people behind VexaNode
                </div>
                <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                  Owners who run <span className="vx-accent-text">VexaNode.</span>
                </h1>
              </div>
              <div className="lg:border-l vx-line lg:pl-8">
                <p className="text-base font-semibold leading-relaxed sm:text-lg">
                  Three owners. One hands-on team.
                </p>
                <p className="vx-muted mt-3 text-sm leading-relaxed sm:text-base">
                  VexaNode is owned and operated by the people who lead the company,
                  manage its infrastructure, and handle its day-to-day operations.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#owners"
                    className="vx-solid inline-flex min-h-11 items-center gap-2 rounded-xl px-5 text-sm font-bold transition-opacity hover:opacity-85"
                  >
                    Meet the owners
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="https://discord.gg/dJpMDfgUQq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-xl border vx-line px-5 text-sm font-bold vx-muted vx-hover-ink hover:border-[color:var(--vx-accent)] transition-colors"
                  >
                    Join Discord
                  </a>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="owners" className="mx-auto mt-16 max-w-6xl scroll-mt-28 px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.35 }}
              className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] vx-accent-text"
                >
                  Ownership & operations
                </motion.p>
                <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                  <motion.span
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.08 }}
                    className="inline-block"
                  >
                    Meet the{" "}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.16 }}
                    className="inline-block vx-accent-text"
                  >
                    co-owners
                  </motion.span>
                </h2>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.22 }}
                className="vx-muted max-w-md text-sm leading-relaxed sm:text-right"
              >
                Clear ownership, hands-on responsibility, and direct accountability.
              </motion.p>
            </motion.div>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)]">
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl border border-[#d97757]/30 vx-card"
                aria-labelledby={`owner-${leadOwner.id}`}
              >
                <div className="flex min-h-full flex-col items-center sm:flex-row sm:items-center">
                  <div className="relative aspect-square w-40 shrink-0 self-center overflow-hidden rounded-2xl border vx-line bg-[color:var(--vx-surface-alt)] sm:mx-7 sm:my-7 sm:h-48 sm:w-48 lg:mx-8 lg:h-56 lg:w-56">
                    <Image
                      src={leadOwner.avatar}
                      alt={`${leadOwner.name}, ${leadOwner.role}`}
                      fill
                      priority
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex w-full flex-1 flex-col justify-center p-7 pt-0 sm:py-8 sm:px-8 sm:pl-0 lg:px-10 lg:pl-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] vx-accent-text">
                      Lead owner
                    </p>
                    <h3
                      id={`owner-${leadOwner.id}`}
                      className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
                    >
                      {leadOwner.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold vx-muted2">{leadOwner.role}</p>
                    <p className="vx-muted mt-5 text-sm leading-relaxed sm:text-base">
                      {leadOwner.summary}
                    </p>
                    <ul className="mt-5 space-y-2.5 border-t vx-line pt-5 text-sm font-medium">
                      {leadOwner.focus.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--vx-accent)]" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <OwnerSocialLinks owner={leadOwner} />
                    </div>
                  </div>
                </div>
              </motion.article>

              <div className="grid gap-5">
                {supportingOwners.map((owner, index) => (
                  <motion.article
                    key={owner.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    className="rounded-2xl border vx-line vx-card p-6 sm:p-7"
                    aria-labelledby={`owner-${owner.id}`}
                  >
                    <div className="flex items-start gap-5">
                      <Image
                        src={owner.avatar}
                        alt={`${owner.name}, ${owner.role}`}
                        width={96}
                        height={96}
                        sizes="96px"
                        className="h-20 w-20 shrink-0 rounded-xl border vx-line object-cover sm:h-24 sm:w-24"
                      />
                      <div className="min-w-0 pt-1">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] vx-accent-text">
                          Co-owner
                        </p>
                        <h3
                          id={`owner-${owner.id}`}
                          className="mt-2 break-words text-xl font-black tracking-tight sm:text-2xl"
                        >
                          {owner.name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold vx-muted2 sm:text-sm">{owner.role}</p>
                      </div>
                    </div>
                    <p className="vx-muted mt-5 text-sm leading-relaxed">{owner.summary}</p>
                    <ul className="mt-5 grid gap-2 border-t vx-line pt-5 text-xs font-medium sm:grid-cols-2 sm:text-sm">
                      {owner.focus.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--vx-accent)]" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <OwnerSocialLinks owner={owner} compact />
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-20 border-y vx-line vx-bg-alt">
            <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center lg:px-8">
              <div className="max-w-2xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] vx-accent-text">
                  Work with VexaNode
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight">Talk to the team.</h2>
                <p className="vx-muted mt-3 text-sm leading-relaxed sm:text-base">
                  Reach the owners through our Discord community or send a general inquiry to the team.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://discord.gg/dJpMDfgUQq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vx-btn-accent inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-bold transition-opacity hover:opacity-85"
                >
                  Join Discord
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border vx-line vx-card px-6 text-sm font-bold vx-ink hover:border-[color:var(--vx-accent)] transition-colors"
                >
                  Contact team
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  )
}
