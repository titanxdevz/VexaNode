import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service — VexaNode",
  description:
    "The terms governing use of VexaNode's game, VPS and bot hosting services.",
  canonical: "/terms-of-services",
});

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
