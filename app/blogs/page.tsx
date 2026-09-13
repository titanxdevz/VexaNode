import type { Metadata } from "next";
import { constructMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = constructMetadata({
  title: "VexaNode Blog | Cloud & Game Server Hosting Guides",
  description:
    "Technical guides, tutorials, server optimization walkthroughs, and developer news from the VexaNode cloud infrastructure team.",
  canonical: "/blogs",
  keywords: [
    "VexaNode blog",
    "Minecraft server tutorials",
    "Discord bot hosting guide",
    "VPS configuration",
    "Lavalink guide",
    "game hosting articles",
  ],
});

export default function BlogsPage() {
  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blogs" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogsClient />
    </>
  );
}

