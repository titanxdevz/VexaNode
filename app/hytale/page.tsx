import type { Metadata } from "next"
import { constructMetadata, serviceSchema } from "@/lib/seo"
import HytaleClient from "./HytaleClient"

export const metadata: Metadata = constructMetadata({
  title: "Hytale Server Hosting in India | High Performance Game Servers | VexaNode",
  description:
    "Experience the best Hytale server hosting with high-performance hardware, low latency, instant setup, and advanced DDoS protection. VexaNode provides affordable and reliable Hytale hosting with 24/7 uptime and optimized infrastructure for smooth multiplayer gameplay in India.",
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
      "Experience the best Hytale server hosting with high-performance hardware, low latency, instant setup, and advanced DDoS protection.",
    url: "https://vexanode.cloud/hytale",
    serviceType: "Game Server Hosting",
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HytaleClient />
    </>
  )
}
