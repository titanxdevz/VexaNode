"use client"

import { Shield, Scale, Ban, Network, AlertTriangle, UserCheck, ShieldAlert, Mail, RefreshCcw, CalendarRange, Gavel } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import LegalDoc from "../components/legal/LegalDoc"

const aupSections = [
  {
    title: "1. Purpose",
    content: "This Acceptable Usage Policy (AUP) defines permitted and prohibited use of VexaNode services. It applies to all products including VPS hosting, Discord bot hosting, Lavalink hosting, Minecraft hosting, and free-tier services. Free bot hosting is also governed by our Free Bot Hosting Policy (backups and data loss).",
    icon: Shield
  },
  {
    title: "2. Lawful Use",
    content: "Customers must use services only for lawful purposes. You may not host, store, or distribute content or software that violates local, national, or international law, including copyrighted material without authorization.",
    icon: Scale
  },
  {
    title: "3. Security & Abuse Prohibitions",
    content: "The following are prohibited: malware distribution, phishing, credential theft, botnet operations, unauthorized port scanning, exploit attempts, brute-force attacks, and DDoS attacks or amplification activities.",
    icon: Ban
  },
  {
    title: "4. Network Integrity",
    content: "Activities that disrupt platform or network stability are not allowed, including open proxies, TOR exit nodes, spam relays, abusive traffic generation, and repeated high-risk behavior that affects other customers.",
    icon: Network
  },
  {
    title: "5. Content Restrictions",
    content: "Illegal, harmful, or abusive content is prohibited, including child sexual abuse material, terror-related content, non-consensual explicit content, and content promoting violence or fraud. We may remove content and suspend service immediately for severe violations.",
    icon: AlertTriangle
  },
  {
    title: "6. Account Responsibility",
    content: "You are responsible for all activity under your account, including actions by team members and API tokens. Keep credentials secure and rotate access if compromise is suspected.",
    icon: UserCheck
  },
  {
    title: "7. Enforcement & Remedies",
    content: "For violations, VexaNode may issue warnings, temporarily suspend services, apply resource or network restrictions, or permanently terminate accounts. Severe abuse may result in immediate termination without prior notice.",
    icon: ShieldAlert
  },
  {
    title: "8. Reporting Abuse",
    content: "To report AUP violations, contact us through our contact page or Discord with relevant evidence, timestamps, and affected IP or domain details. We review reports and act based on severity and verified evidence.",
    icon: Mail
  },
  {
    title: "9. Policy Changes",
    content: "We may update this policy at any time. Continued use of VexaNode services after updates constitutes acceptance of the revised AUP.",
    icon: RefreshCcw
  }
]

export default function AUP() {
  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#d97757]/30">
      <PageMeta title="Acceptable Usage Policy" />
      <Navbar />

      <LegalDoc
        eyebrow="Legal Framework"
        eyebrowIcon={Gavel}
        title="Acceptable Usage"
        accent="Policy"
        subtitle="What you may — and may not — do with VexaNode services, across every product and tier."
        chips={[
          { icon: CalendarRange, label: "Updated: September 2026" },
          { icon: ShieldAlert, label: "Zero tolerance for abuse" },
        ]}
        sections={aupSections}
        cta={{
          eyebrow: "Report abuse",
          title: "See something wrong?",
          subtitle: "Report AUP violations with evidence and timestamps. We review every report and act based on severity and verified evidence.",
          trustPoints: ["Reviewed on severity", "Verified evidence required", "24/7 enforcement"],
          buttons: [
            {
              label: "Contact Us",
              href: "/contact",
              primary: true,
              icon: Mail,
            },
            {
              label: "Join Discord",
              href: "https://discord.gg/dJpMDfgUQq",
              external: true,
              icon: FaDiscord,
            },
            {
              label: "Read the FUP",
              href: "/fup",
              icon: Scale,
            },
          ],
        }}
      />

      <Footer />
    </div>
  )
}