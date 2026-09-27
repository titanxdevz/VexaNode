import type { Metadata } from "next";
import DdosClient from "./DdosClient";
import { ddosFaqs } from "./faqs";
import { constructMetadata, generateServiceSchema, generateBreadcrumbSchema, generateFaqPageSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "DDoS Protected Game Server Hosting | VexaNode",
  description:
    "Always-on, multi-Tbps L3/L4 volumetric protection plus game-aware Layer 7 mitigation for Minecraft, FiveM, Rust and more — with no latency penalty. Free on every VexaNode game server.",
  canonical: "/ddos-protected-game-hosting",
  keywords: [
    "ddos protected game server hosting",
    "ddos protection game server",
    "Minecraft DDoS protection",
    "FiveM DDoS protection",
    "Rust DDoS protection",
    "Layer 7 game filtering",
    "anti-DDoS hosting",
    "multi-Tbps scrubbing",
  ],
});

export default function DdosProtectedGameHostingPage() {
  const serviceJsonLd = generateServiceSchema({
    name: "DDoS-Protected Game Server Hosting",
    description:
      "Game server hosting with always-on multi-Tbps L3/L4 volumetric protection and game-aware Layer 7 mitigation for Minecraft, FiveM, Rust and more, with no latency penalty.",
    url: "/ddos-protected-game-hosting",
    serviceType: "Game Server Hosting",
  });

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Game Hosting", url: "/games" },
    { name: "DDoS-Protected Hosting", url: "/ddos-protected-game-hosting" },
  ]);

  const faqJsonLd = generateFaqPageSchema(
    ddosFaqs.map((f) => ({ question: f.q, answer: f.a }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <DdosClient />
    </>
  );
}
