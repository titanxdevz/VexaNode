import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Partners — VexaNode",
  description:
    "Discover VexaNode's partners and collaboration opportunities.",
  canonical: "/partners",
});

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
