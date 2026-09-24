"use client"

import { Scale, ShieldCheck, Gavel, Zap, AlertTriangle, CalendarRange, MessageSquare, CreditCard } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { PageMeta } from "../components/PageMeta"
import LegalDoc from "../components/legal/LegalDoc"

const termsSections = [
  {
    title: "1. Service Agreement",
    content: "By accessing or using VexaNode's services, you agree to be bound by these Terms of Service. If you do not agree to all terms and conditions, you must not access the website or use our services. These terms apply to all visitors and users.",
    icon: Scale
  },
  {
    title: "2. User Obligations",
    content: "You are responsible for maintaining the security of your account and any activities that occur under it. You must provide accurate information and notify us immediately of any security breaches. Unauthorized access or use of our systems is strictly prohibited.",
    icon: ShieldCheck
  },
  {
    title: "3. Acceptable Use Policy",
    content: "Our infrastructure must not be used for illegal activities, distributing malware, sending spam, or hosting copyrighted material without permission. Violation of our AUP will result in immediate service termination without refund.",
    icon: Gavel
  },
  {
    title: "4. Billing & Payments",
    content: "All services are billed in advance on a recurring basis. Payments are processed securely through our authorized gateways. Failure to settle invoices by the due date will lead to service suspension and potential data loss after 7 days.",
    icon: CreditCard
  },
  {
    title: "5. Service Availability (SLA)",
    content: "While we strive for 100% uptime, standard services come with a 99.9% uptime guarantee. Scheduled maintenance is communicated in advance. We are not liable for outages caused by upstream providers or external network issues beyond our control.",
    icon: Zap
  },
  {
    title: "6. Limitation of Liability",
    content: "VexaNode and its affiliates shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services, including data loss or loss of business profits.",
    icon: AlertTriangle
  }
]

export default function TermsOfService() {
  return (
    <div className="min-h-screen vx-bg vx-ink selection:bg-[#d97757]/30">
      <PageMeta title="Terms of Service" />
      <Navbar />

      <LegalDoc
        eyebrow="Legal Framework"
        eyebrowIcon={Gavel}
        title="Terms of"
        accent="Service"
        subtitle="Our commitment to transparency and excellence. Please read our service agreement carefully."
        chips={[
          { icon: CalendarRange, label: "Updated: June 2026" },
          { icon: Scale, label: "Binding Contract" },
        ]}
        sections={termsSections}
        cta={{
          eyebrow: "Questions?",
          title: "Need clarification?",
          subtitle: "Our legal and operations teams are available to help you understand every aspect of our service agreement.",
          trustPoints: ["Read before you buy", "24/7 support"],
          buttons: [
            {
              label: "Message Support",
              href: "/contact",
              primary: true,
              icon: MessageSquare,
            },
            {
              label: "Join Discord",
              href: "https://discord.gg/dJpMDfgUQq",
              external: true,
              icon: FaDiscord,
            },
            {
              label: "View SLA",
              href: "/sla",
              icon: Zap,
            },
          ],
        }}
      />

      <Footer />
    </div>
  )
}