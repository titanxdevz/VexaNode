"use client"

import { Info, Cpu, Gauge, Ban, Gift, Users, ShieldCheck, BarChart3, RefreshCcw, CalendarRange, Scale } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import LegalDoc from "../components/legal/LegalDoc"

const fupSections = [
  {
    title: "1. Introduction",
    content: "VexaNode's Fair Usage Policy (FUP) ensures that all customers receive consistent, high-quality service. This policy applies to all hosting services, including VPS, Discord bot hosting, Lavalink hosting, and Minecraft server hosting. By using our services, you agree to abide by this policy.",
    icon: Info
  },
  {
    title: "2. Resource Usage",
    content: "All hosting plans are allocated specific CPU, RAM, storage, and bandwidth resources. Customers are expected to use resources within the limits of their selected plan. Sustained usage of 90% or more of allocated CPU or RAM for extended periods may trigger a review. VexaNode may contact affected users to recommend a plan upgrade.",
    icon: Cpu
  },
  {
    title: "3. Bandwidth & Network",
    content: "Plans labelled as unmetered bandwidth provide a generous allocation for normal hosting operations. Unmetered does not mean unlimited. Activities that consume disproportionate bandwidth, such as operating public file-sharing services, running open proxies, or streaming pirated content, are prohibited and may result in throttling or suspension.",
    icon: Gauge
  },
  {
    title: "4. Prohibited Activities",
    content: "The following activities are strictly prohibited on all VexaNode services: cryptocurrency mining; running open proxies or TOR exit nodes; distributing malware or spam; DDoS attacks or participation in botnets; hosting phishing pages or illegal content; port scanning or vulnerability scanning of external networks; and any activity that violates applicable laws.",
    icon: Ban
  },
  {
    title: "5. Free Tier Limitations",
    content: "Free hosting plans are provided with limited resources intended for learning, development, and small projects. Free-tier services may not be used for commercial production workloads, resource-intensive applications, or to circumvent paid plan limits by creating multiple free accounts. VexaNode does not provide backup, restore, or data-recovery guarantees on free bot hosting — you must keep your own backups, because data on free instances can be lost at any time (see our Free Bot Hosting Policy). VexaNode reserves the right to restrict or terminate free accounts that violate these guidelines.",
    icon: Gift
  },
  {
    title: "6. Multi-Account Policy",
    content: "Each individual or organisation is permitted one free-tier account. Creating multiple accounts to bypass resource limits is a violation of this policy. VexaNode reserves the right to merge or terminate duplicate accounts without notice.",
    icon: Users
  },
  {
    title: "7. Enforcement",
    content: "If a customer is found to be in violation of this Fair Usage Policy, VexaNode may issue a warning and request corrective action, throttle or restrict the service, suspend the account temporarily, or terminate the service permanently. In cases of severe abuse, termination may occur without prior notice.",
    icon: ShieldCheck
  },
  {
    title: "8. Monitoring",
    content: "VexaNode monitors resource usage across its infrastructure to ensure optimal performance for all customers. Monitoring is automated and does not involve inspection of customer data or application content. We respect your privacy while maintaining the health of our platform.",
    icon: BarChart3
  },
  {
    title: "9. Changes to This Policy",
    content: "This Fair Usage Policy may be updated from time to time. Significant changes will be communicated through our website or via email. Continued use of our services after any updates constitutes acceptance of the revised policy.",
    icon: RefreshCcw
  }
]

export default function FUP() {
  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#d97757]/30">
      <PageMeta title="Fair Usage Policy" />
      <Navbar />

      <LegalDoc
        eyebrow="Resource Management"
        eyebrowIcon={Scale}
        title="Fair Usage"
        accent="Policy"
        subtitle="Consistent, high-quality service for every customer — and clear rules that keep it that way."
        chips={[
          { icon: CalendarRange, label: "Updated: September 2026" },
          { icon: Users, label: "One free account per person" },
        ]}
        sections={fupSections}
        cta={{
          eyebrow: "Need more headroom?",
          title: "Plans for heavier workloads",
          subtitle: "If you consistently use 90% or more of your resources, a paid plan gives you guaranteed headroom, DDoS protection where available, and no fair-use worries.",
          trustPoints: ["Fair for everyone", "Automated monitoring", "No hidden limits"],
          buttons: [
            {
              label: "Explore VPS Hosting",
              href: "/vps",
              primary: true,
              icon: Cpu,
            },
            {
              label: "Contact Support",
              href: "/contact",
              icon: ShieldCheck,
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