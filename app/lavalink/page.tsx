import type { Metadata } from "next"
import { constructMetadata, serviceSchema } from "@/lib/seo"
import LavalinkClient from "./LavalinkClient"

export const metadata: Metadata = constructMetadata({
  title: "Managed Lavalink Hosting | High Performance Audio Nodes",
  description:
    "Deploy high-performance Java Lavalink v4 audio nodes for Discord music bots. Ultra-low latency voice routing, zero jitter, and 99.9% uptime guarantee.",
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

export default function LavalinkPage() {
  const schema = serviceSchema({
    name: "Managed Lavalink Hosting",
    description:
      "Enterprise Java Lavalink v4 audio nodes optimized for Discord music bots with ultra-low latency voice routing.",
    url: "https://vexanode.cloud/lavalink",
    serviceType: "Audio Streaming & Voice Node Hosting",
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <LavalinkClient />
    </>
  )
}
