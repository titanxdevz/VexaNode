"use client"

import { RotateCcw, Server, Ban, Clock, ClipboardList, AlertTriangle, Wallet, FileText, LifeBuoy, CalendarRange, IndianRupee } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import LegalDoc from "../components/legal/LegalDoc"

const refundSections = [
  {
    title: "1. 24-Hour Refund (change of mind)",
    content: "If you no longer want a paid service, you can request a full refund within 24 hours of successful payment. No reason is required. This applies to paid hosting services such as Minecraft server hosting, game hosting (SA-MP and Hytale), Discord, Telegram or WhatsApp bot hosting, Lavalink hosting, database hosting, and web hosting plans. It does not apply to VPS plans or dedicated servers, which are covered by Section 2 instead.",
    icon: RotateCcw
  },
  {
    title: "2. 7-Day Guarantee for VPS and Dedicated Servers (our fault only)",
    content: "VPS and dedicated servers are not eligible for change-of-mind refunds. However, if we fail to deliver the service as described, you are covered by a 7-day money-back guarantee from the date of payment. You qualify if the service was not delivered or activated after payment, the service is materially different from the plan you purchased (specs, location, or included features), or the service is repeatedly unusable due to a fault on our side that we could not resolve within a reasonable time after you reported it. You do not qualify if the issue is caused by your own configuration, software, or usage; a violation of our Terms of Service or Acceptable Usage Policy; or third-party services or events outside our control.",
    icon: Server
  },
  {
    title: "3. What is not refundable",
    content: "Free plan services (no payment involved), coins earned through ads or any in-platform rewards, domain registrations and third-party licenses, add-ons such as extra storage or extra IP addresses, custom setup, migration, or development work, renewals unless you request a refund within the applicable window counted from the renewal payment, and services suspended or terminated for violating our Terms of Service or Acceptable Usage Policy are not refundable. If one invoice contains both refundable and non-refundable items, only the refundable amount will be returned.",
    icon: Ban
  },
  {
    title: "4. Refund method and timing",
    content: "Approved refunds are sent back to the original payment method used at checkout, via Cashfree. Refund amount is 100% of the eligible plan price — payment gateway fees are not deducted. We aim to process approved refunds within 48 hours of approval. After we issue the refund, the time to reach your account depends on your bank or payment provider; for Cashfree payments this is typically 5–7 business days. We are not responsible for delays caused by banks or payment providers.",
    icon: Clock
  },
  {
    title: "5. How to request a refund",
    content: "Contact us within the applicable window through our contact page or Discord and include your account email and order/invoice ID, the service name, and the reason (required for VPS and dedicated servers under Section 2, optional otherwise). Please contact us before opening a chargeback or payment dispute. Chargebacks or bad-faith disputes may lead to account suspension.",
    icon: ClipboardList
  },
  {
    title: "6. Abuse and fraud",
    content: "Fraudulent or abusive refund requests, and accounts suspended for policy violations, are not eligible for refunds and may be permanently banned. If we detect repeated use of the 24-hour refund to abuse our services, we may refuse future refunds.",
    icon: AlertTriangle
  },
  {
    title: "7. Service credit",
    content: "If a cash refund does not apply, we may offer account credit at our discretion. Credits are non-transferable and expire after 90 days.",
    icon: Wallet
  },
  {
    title: "8. Changes to this policy",
    content: "We may update this policy at any time. Changes take effect when posted on this page. Continued use of our services means you accept the updated policy.",
    icon: FileText
  },
  {
    title: "9. Contact",
    content: "For any refund or billing question, reach us through our contact page or Discord. We'll help you understand your eligibility and walk you through the request.",
    icon: LifeBuoy
  }
]

export default function RefundPolicy() {
  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#d97757]/30">
      <PageMeta title="Refund Policy" />
      <Navbar />

      <LegalDoc
        eyebrow="Billing Transparency"
        eyebrowIcon={LifeBuoy}
        title="Refund"
        accent="Policy"
        subtitle="When and how VexaNode refunds payments. All payments are currently processed in INR (\u20B9) through Cashfree."
        chips={[
          { icon: IndianRupee, label: "Paid in INR (\u20B9) via Cashfree" },
          { icon: CalendarRange, label: "Updated: September 2026" },
        ]}
        sections={refundSections}
        cta={{
          eyebrow: "Billing question?",
          title: "Need help with a refund?",
          subtitle: "Our billing specialists can check your eligibility, walk you through the request, and handle everything with Cashfree.",
          trustPoints: ["24-hour change of mind", "7-day VPS guarantee", "Full gateway fees not deducted"],
          buttons: [
            {
              label: "Contact Billing",
              href: "/contact",
              primary: true,
              icon: ClipboardList,
            },
            {
              label: "Join Discord",
              href: "https://discord.gg/dJpMDfgUQq",
              external: true,
              icon: FaDiscord,
            },
            {
              label: "Read the SLA",
              href: "/sla",
              icon: FileText,
            },
          ],
        }}
      />

      <Footer />
    </div>
  )
}