import type { Metadata } from "next";
import BlogsClient from "../blogs/BlogsClient";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Blog & Technical Guides | Minecraft, Discord Bots & VPS | VexaNode",
  description:
    "Explore developer tutorials, benchmark comparisons, and optimization guides for Minecraft servers, Discord bots, Lavalink audio nodes, and high-performance Linux VPS hosting.",
  canonical: "/blog",
  keywords: [
    "VexaNode blog",
    "Minecraft server optimization",
    "Discord bot hosting guide",
    "Lavalink tutorial",
    "Linux VPS security",
    "Pterodactyl panel installation",
  ],
});

export default function BlogIndexPage() {
  return <BlogsClient />;
}
