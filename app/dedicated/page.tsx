import type { Metadata } from "next";
import { constructMetadata, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import DedicatedClient from "./DedicatedClient";

export const metadata: Metadata = constructMetadata({
  title: "Dedicated Bare Metal Servers — VexaNode",
  description:
    "Deploy dedicated bare metal servers with high-bandwidth unmetered uplinks and hardware-level DDoS protection. Full IPMI/KVM access.",
  canonical: "/dedicated",
  keywords: [
    "dedicated server hosting",
    "bare metal servers",
    "ryzen dedicated servers",
    "epyc dedicated servers",
    "ddos protected dedicated server",
    "high frequency dedicated servers",
  ],
});

export default function DedicatedPage() {
  const serviceJsonLd = serviceSchema({
    name: "Dedicated Bare Metal Servers",
    description:
      "Enterprise dedicated bare metal servers with AMD Ryzen & EPYC processors, 10 Gbps uplinks, and hardware-level DDoS protection.",
    url: "/dedicated",
    serviceType: "Dedicated Server Hosting",
  });

  const breadcrumbsJsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Dedicated Servers", url: "/dedicated" },
  ]);

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
      <DedicatedClient />
    </>
  );
}