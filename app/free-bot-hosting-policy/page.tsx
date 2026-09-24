"use client"

import { Shield, CloudOff, HardDrive, AlertTriangle, ShieldOff, Headset, EyeOff, KeyRound, CheckCircle2, Save } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import LegalDoc from "../components/legal/LegalDoc"

const policySections = [
  {
    title: "1. Scope",
    content: "This Free Bot Hosting Policy applies to all no-charge bot instances provided by VexaNode, including free Discord bot hosting, free Telegram bot hosting, and free WhatsApp bot hosting claimed through our free-claim flow. It supplements the Terms of Service, Acceptable Usage Policy, Fair Usage Policy, and Service Level Agreement. If a conflict arises about backups or data loss on the free tier, this policy controls.",
    icon: Shield
  },
  {
    title: "2. Free service, no warranty",
    content: "Free bot hosting is provided as-is, at no charge, with no paid uptime SLA, no availability guarantee, and no service credits. VexaNode may modify, migrate, rebuild, suspend, or discontinue free instances at any time, with or without notice, for capacity, abuse, hardware, or operational reasons.",
    icon: CloudOff
  },
  {
    title: "3. You must keep your own backups",
    content: "You are solely responsible for keeping current, independent backups of everything needed to restore your bot. That includes source code, compiled artifacts, .env and other secrets, API tokens, SQLite or other local databases, JSON and config files, uploaded assets, and any data stored only on the free instance. VexaNode does not promise snapshots, off-site copies, versioned backups, or restore jobs for free bot hosting. If backups are a feature you need, use a paid plan or store data on a service you control.",
    icon: HardDrive
  },
  {
    title: "4. Data loss can happen at any time",
    content: "Data on free bot hosting can be lost, corrupted, wiped, or become unreadable at any time. Examples include disk or node failure, host rebuild or reimage, panel reinstall, accidental deletion, abuse or policy wipe, over-quota disk, power or datacenter events, and migrations. These events may occur without a restore path. By using free bot hosting you accept that risk.",
    icon: AlertTriangle
  },
  {
    title: "5. No liability for lost bots or data",
    content: "VexaNode, its owners, staff, and partners are not liable for loss of bot files, configuration, tokens, databases, uptime, or any consequential loss arising from free bot hosting. There is no duty to recover data, recreate servers, or compensate you in money, credits, or replacement instances for free-tier data loss. The limitation of liability in the Terms of Service also applies; for free services the amount paid is zero.",
    icon: ShieldOff
  },
  {
    title: "6. Support and restore requests",
    content: "Support may help you learn how to use the panel. Support is not obligated to undelete files, roll back disks, or reconstruct bots from our systems when no backup exists. If you open a ticket after data loss, the expected answer is that you restore from your own backup.",
    icon: Headset
  },
  {
    title: "7. No data leak",
    content: "VexaNode does not leak, sell, publish, or hand your free-hosting data to third parties. We do not mine bot source, .env files, tokens, or databases for resale or public dump. Free instances are isolated customer workloads. If a token or file leaves VexaNode, that is because you shared panel access, posted secrets publicly, committed them to a public repository, or your own bot code sent them out — not because VexaNode leaks free hosting data.",
    icon: EyeOff
  },
  {
    title: "8. Tokens after a wipe (loss, not leak)",
    content: "If an instance is rebuilt or deleted, tokens that existed only on that disk are gone. That is data loss, not a data leak. Rotate Discord, Telegram, or WhatsApp tokens after a wipe if you still have them in your own backup. VexaNode does not extract or redistribute those secrets.",
    icon: KeyRound
  },
  {
    title: "9. Acceptance",
    content: "Claiming or using a free bot server means you have read this policy: you keep backups; VexaNode does not leak your data; and we are not liable for data loss on the free tier. Continued use after we post updates to this page is acceptance of the revised policy. Questions: contact our support team through the contact page.",
    icon: CheckCircle2
  }
]

export default function FreeHostingPolicy() {
  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#d97757]/30">
      <PageMeta title="Free Bot Hosting Policy" />
      <Navbar />

      <LegalDoc
        eyebrow="Free Tier Policy"
        eyebrowIcon={Shield}
        title="Free Bot Hosting"
        accent="Policy"
        subtitle="Everything you need to know about managing, backing up, and protecting your free bot instances with VexaNode."
        chips={[
          { icon: Save, label: "You keep backups" },
          { icon: Shield, label: "Applies to all free claims" },
        ]}
        sections={policySections}
        cta={{
          eyebrow: "Protect your bot",
          title: "Keep your own backups",
          subtitle: "The single best way to protect your free bot is a current, off-server backup. For zero data-loss risk, our paid plans give you everything you need for a safe, reliable production environment.",
          trustPoints: ["Your data stays yours", "No hidden fees"],
          buttons: [
            {
              label: "Explore Free Hosting",
              href: "/free-bot-hosting",
              primary: true,
              icon: CloudOff,
            },
            {
              label: "Ask a Question",
              href: "/contact",
              icon: Headset,
            },
          ],
        }}
      />

      <Footer />
    </div>
  )
}