import type { Metadata } from "next";
import GamesClient from "./GamesClient";
import { minecraftFaqs } from "./faqs";
import { constructMetadata, generateServiceSchema, generateBreadcrumbSchema, generateProductSchema, generateFaqPageSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Minecraft Server Hosting India | AMD Ryzen 9 & NVMe | VexaNode",
  description:
    "Cheap Minecraft server hosting in India, Germany & USA on AMD Ryzen 9 and EPYC with Gen4 NVMe, 1-click modpacks, DDoS protection and instant setup. Plans from ₹99/mo.",
  canonical: "/games",
  keywords: [
    "Minecraft server hosting India",
    "cheap Minecraft server hosting",
    "Minecraft hosting with DDoS protection",
    "Minecraft modpack hosting",
    "AMD Ryzen 9 Minecraft",
    "PaperMC hosting",
    "Fabric Forge Minecraft hosting",
    "Purpur hosting",
  ],
});

export default function GameHostingPage() {
  const serviceJsonLd = generateServiceSchema({
    name: "Minecraft Server Hosting",
    description:
      "High-performance Minecraft server hosting with modern AMD infrastructure, fast deployment, DDoS protection and flexible plans from VexaNode.",
    url: "/games",
    serviceType: "Game Server Hosting",
  });

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Minecraft Hosting", url: "/games" },
  ]);

  // Real base (INR) starting price from GamesClient plans.
  const productJsonLd = generateProductSchema({
    name: "Minecraft Server Hosting",
    description:
      "Minecraft server hosting on AMD infrastructure with DDoS protection and flexible plans.",
    url: "/games",
    priceCurrency: "INR",
    offers: [{ name: "Minecraft Hosting (from)", price: 99 }],
  });

  const faqJsonLd = generateFaqPageSchema(
    minecraftFaqs.map((f) => ({ question: f.q, answer: f.a }))
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <GamesClient />
    </>
  );
}
