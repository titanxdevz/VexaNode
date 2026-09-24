import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Affiliate Program — VexaNode",
  description:
    "Join the VexaNode affiliate program and earn by referring customers to our game, VPS and bot hosting services.",
  canonical: "/affiliates",
});

export default function AffiliatesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
