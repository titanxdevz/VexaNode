import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Domain Registration — VexaNode",
  description:
    "Register and manage domains for your projects and servers with VexaNode.",
  canonical: "/domains",
});

export default function DomainsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
