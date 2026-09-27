import type { Metadata } from "next";
import ModpackClient from "./ModpackClient";
import { modpackFaqs } from "./faqs";
import { constructMetadata, generateServiceSchema, generateBreadcrumbSchema, generateFaqPageSchema } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Minecraft Modpack Hosting | CurseForge & Modrinth 1-Click | VexaNode",
  description:
    "Minecraft modpack hosting with 1-click CurseForge & Modrinth installs, per-pack RAM guidance, AMD Ryzen 9 CPUs and always-on DDoS protection. Forge, Fabric, NeoForge & Quilt supported.",
  canonical: "/minecraft-modpack-hosting",
  keywords: [
    "minecraft modpack hosting",
    "CurseForge modpack hosting",
    "Modrinth modpack hosting",
    "All the Mods server hosting",
    "RLCraft server hosting",
    "Forge server hosting",
    "Fabric server hosting",
    "NeoForge Quilt hosting",
  ],
});

export default function MinecraftModpackHostingPage() {
  const serviceJsonLd = generateServiceSchema({
    name: "Minecraft Modpack Hosting",
    description:
      "Minecraft modpack hosting with 1-click CurseForge and Modrinth installs, Forge/Fabric/NeoForge/Quilt support, AMD Ryzen 9 CPUs and always-on DDoS protection.",
    url: "/minecraft-modpack-hosting",
    serviceType: "Game Server Hosting",
  });

  const breadcrumbsJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Minecraft Hosting", url: "/games" },
    { name: "Modpack Hosting", url: "/minecraft-modpack-hosting" },
  ]);

  const faqJsonLd = generateFaqPageSchema(
    modpackFaqs.map((f) => ({ question: f.q, answer: f.a }))
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
      <ModpackClient />
    </>
  );
}
