import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Documentation — VexaNode",
  description:
    "VexaNode documentation and guides for setting up and managing your game servers, bots and VPS.",
  canonical: "/docs",
});

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
