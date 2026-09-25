import type { Metadata } from "next"
import { constructMetadata, serviceSchema, breadcrumbSchema, productSchema } from "@/lib/seo"
import HytaleClient from "./HytaleClient"

export const metadata: Metadata = constructMetadata({
  title: "Hytale Server Hosting in India — VexaNode",
  description:
    "Hytale server hosting in India with high-performance hardware, low latency, instant setup, and DDoS protection.",
  canonical: "/hytale",
  keywords: [
    "Hytale server hosting",
    "Hytale hosting India",
    "cheap Hytale server hosting",
    "Hytale DDoS protection",
    "Hytale multiplayer server",
    "VexaNode Hytale",
  ],
})

export default function HytalePage() {
  const schema = serviceSchema({
    name: "Hytale Server Hosting in India",
    description:
      "Hytale server hosting with high-performance hardware, low latency, instant setup, and DDoS protection.",
    url: "https://vexanode.cloud/hytale",
    serviceType: "Game Server Hosting",
  })

  const breadcrumbsJsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Hytale Hosting", url: "/hytale" },
  ])

  const productJsonLd = productSchema({
    name: "Hytale Server Hosting in India",
    description:
      "Hytale server hosting with high-performance hardware, low latency, and DDoS protection.",
    url: "/hytale",
    priceCurrency: "INR",
    offers: [{ name: "Hytale Hosting (from)", price: 299 }],
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
      <HytaleClient />
    </>
  )
}
