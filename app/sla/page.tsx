"use client"

import { FileText, Activity, Clock, Zap, ClipboardList, Shield, LifeBuoy, Ban, RefreshCcw, CalendarRange } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import LegalDoc from "../components/legal/LegalDoc"

const slaSections = [
  {
    title: "1. Purpose",
    content: "This Service Level Agreement (SLA) defines the level of service VexaNode commits to providing for its paid hosting services, including VPS hosting, Discord bot hosting, Lavalink hosting, and Minecraft server hosting. This SLA applies to all active paid subscriptions.",
    icon: FileText
  },
  {
    title: "2. Uptime Guarantee — By Service Tier",
    content: "Free-tier services (free Discord, Telegram and WhatsApp bot hosting, public Lavalink nodes) target 24/7 availability but carry no paid SLA guarantee, no backup guarantee, and no data-recovery obligation. You must keep your own backups — see our Free Bot Hosting Policy. Uptime is calculated as: (total minutes in the month − unplanned downtime minutes) ÷ total minutes × 100%. Scheduled maintenance windows announced at least 24 hours in advance are excluded from downtime calculations.",
    icon: Activity
  },
  {
    title: "3. Downtime Definitions",
    content: "Unplanned downtime refers to any period during which a customer's service is inaccessible due to issues within VexaNode's infrastructure. This includes network outages, hardware failures, and software failures on our hosting platform. It does not include issues caused by the customer's application, third-party services, DNS propagation, force majeure events, or scheduled maintenance.",
    icon: Clock
  },
  {
    title: "4. Service Credits",
    content: "If VexaNode fails to meet the guaranteed uptime for your plan tier in a given calendar month, eligible customers may request service credits, calculated on the actual shortfall below your tier's guarantee: up to 1% below guarantee = 10% monthly credit; 1%–5% below = 25% monthly credit; more than 5% below = 50% monthly credit. For example, budget bot hosting (95%+ SLA) earns credits only if uptime falls below 95%, and managed Lavalink (99.95% SLA) earns credits only if uptime falls below 99.95%. Credits are applied to the next billing cycle, may not exceed 50% of the monthly service fee, and are not available for free-tier services or services suspended due to policy violations.",
    icon: Zap
  },
  {
    title: "5. How to Claim Credits",
    content: "Service credit claims must be submitted within 7 days of the incident through our contact page or Discord support ticket. Include the dates and times of the downtime, the affected service or server details, and a brief description of the impact. VexaNode will review and respond within 5 business days.",
    icon: ClipboardList
  },
  {
    title: "6. Network, Infrastructure & DDoS Protection",
    content: "VexaNode servers are located in Germany, India (Mumbai), Singapore, Ashburn (US), Miami (US), and Utah (US). Infrastructure-level DDoS protection availability varies by product tier. Services with network-level DDoS mitigation include high-performance bot hosting (EPYC 7C13), India Ryzen 9 VPS (Mumbai, with Cloudflare Magic Transit 500 Tbps), India Ryzen 9 VDS (Mumbai), Singapore VPS, Miami VPS/VDS (Datapacket / Magic Transit), and Utah VPS/VDS (Neoprotect). Budget infrastructure without DDoS protection — budget Discord, Telegram and WhatsApp bot hosting, budget Minecraft and FiveM game server plans, and Germany VPS budget nodes — runs on shared budget hardware and does not include DDoS protection. If your workload may be targeted by DDoS attacks, choose a High Performance or Ryzen 9 tier that explicitly lists DDoS mitigation, or contact support for guidance before purchasing a budget plan.",
    icon: Shield
  },
  {
    title: "7. Support Response Times",
    content: "VexaNode provides 24/7 support through our ticket system and Discord community. Target response times: Critical (service down) within 1 hour; High (degraded performance) within 4 hours; Medium (general issues) within 12 hours; Low (questions/requests) within 24 hours.",
    icon: LifeBuoy
  },
  {
    title: "8. Exclusions",
    content: "This SLA does not apply to free-tier services, services suspended due to non-payment or policy violations, beta or preview features, issues resulting from customer actions or configurations, or force majeure events including natural disasters, war, or government actions.",
    icon: Ban
  },
  {
    title: "9. Modifications",
    content: "VexaNode reserves the right to modify this SLA at any time. Changes will be communicated via email or our website. Continued use of our services after changes constitutes acceptance of the updated SLA.",
    icon: RefreshCcw
  }
]

export default function SLA() {
  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#d97757]/30">
      <PageMeta title="Service Level Agreement" />
      <Navbar />

      <LegalDoc
        eyebrow="Reliability Guarantee"
        eyebrowIcon={Shield}
        title="Service Level"
        accent="Agreement"
        subtitle="The level of service VexaNode commits to for paid hosting — and what you get if we fall short."
        chips={[
          { icon: CalendarRange, label: "Updated: September 2026" },
          { icon: Zap, label: "Tier-based guarantees" },
        ]}
        sections={slaSections}
        cta={{
          eyebrow: "Live status",
          title: "Current status?",
          subtitle: "We maintain transparent, real-time monitoring of all our global nodes and network infrastructure.",
          trustPoints: ["Real-time monitoring", "Credits within 7 days", "24/7 support"],
          buttons: [
            {
              label: "View Status Page",
              href: "https://status.vexanode.cloud",
              external: true,
              primary: true,
              icon: Activity,
            },
            {
              label: "Contact Support",
              href: "/contact",
              icon: LifeBuoy,
            },
            {
              label: "Join Discord",
              href: "https://discord.gg/dJpMDfgUQq",
              external: true,
              icon: FaDiscord,
            },
          ],
        }}
      />

      <Footer />
    </div>
  )
}