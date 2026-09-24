import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Service Level Agreement — VexaNode",
  description:
    "VexaNode's Service Level Agreement covering availability commitments for our hosting services.",
  canonical: "/sla",
});

export default function SlaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
