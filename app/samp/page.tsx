import type { Metadata } from "next"
import { constructMetadata, serviceSchema, breadcrumbSchema, productSchema } from "@/lib/seo"
import SampClient from "./SampClient"

export const metadata: Metadata = constructMetadata({
  title: "SA-MP Server Hosting — VexaNode",
  description:
    "Deploy high-tickrate SA-MP and open.mp server hosting starting at ₹59/mo. 100% NVMe SSD storage, instant setup, custom gamemodes, and Game-DDoS protection in India, USA, and Germany.",
  canonical: "/samp",
  keywords: [
    "samp hosting",
    "san andreas multiplayer server hosting",
    "open.mp server hosting",
    "cheap samp server hosting",
    "samp hosting india",
    "samp server ddos protection",
  ],
  image: "/images/samp-banner.webp",
})

export default function SampPage() {
  const schema = serviceSchema({
    name: "SA-MP Server Hosting",
    description:
      "High-performance San Andreas Multiplayer (SA-MP) and open.mp game server hosting with instant setup and multi-region deployment.",
    url: "https://vexanode.cloud/samp",
    serviceType: "Game Server Hosting",
  })

  const breadcrumbsJsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "SA-MP Hosting", url: "/samp" },
  ])

  const productJsonLd = productSchema({
    name: "SA-MP Server Hosting",
    description:
      "San Andreas Multiplayer (SA-MP) and open.mp game server hosting with instant setup.",
    url: "/samp",
    priceCurrency: "INR",
    offers: [{ name: "SA-MP Hosting (from)", price: 59 }],
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <SampClient />
    </>
  )
}
