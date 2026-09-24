import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About VexaNode",
  description:
    "Learn about VexaNode — game, Cloud VPS, Discord bot and Lavalink hosting built on modern AMD hardware with DDoS protection.",
  canonical: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
