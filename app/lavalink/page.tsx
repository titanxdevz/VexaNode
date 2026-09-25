import type { Metadata } from "next"
import { constructMetadata, serviceSchema, breadcrumbSchema, productSchema } from "@/lib/seo"
import LavalinkClient from "./LavalinkClient"

export const metadata: Metadata = constructMetadata({
  title: "Managed Lavalink Hosting | High Performance Audio Nodes",
  description:
    "Deploy Java Lavalink v4 audio nodes for Discord music bots with low-latency voice routing and reliable uptime.",
  canonical: "/lavalink",
  keywords: [
    "lavalink hosting",
    "discord music bot node",
    "lavalink v4 hosting",
    "high performance lavalink",
    "discord audio node",
    "managed lavalink server",
  ],
})

export default async function LavalinkPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const initialCategory = category === "self-managed" ? "self-managed" : "managed"

  const schema = serviceSchema({
    name: "Managed Lavalink Hosting",
    description:
      "Enterprise Java Lavalink v4 audio nodes optimized for Discord music bots with ultra-low latency voice routing.",
    url: "https://vexanode.cloud/lavalink",
    serviceType: "Audio Streaming & Voice Node Hosting",
  })

  const breadcrumbsJsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Lavalink Hosting", url: "/lavalink" },
  ])

  const productJsonLd = productSchema({
    name: "Managed Lavalink Hosting",
    description:
      "Java Lavalink v4 audio nodes for Discord music bots with low-latency voice routing.",
    url: "/lavalink",
    priceCurrency: "INR",
    offers: [{ name: "Lavalink Hosting (from)", price: 240 }],
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
      <LavalinkClient key={initialCategory} initialCategory={initialCategory} />
    </>
  )
}
