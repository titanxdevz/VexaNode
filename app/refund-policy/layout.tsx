import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Refund Policy — VexaNode",
  description:
    "VexaNode's refund policy for our game, VPS and bot hosting services.",
  canonical: "/refund-policy",
});

export default function RefundPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
