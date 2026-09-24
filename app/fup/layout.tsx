import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Fair Use Policy — VexaNode",
  description:
    "Read the VexaNode Fair Use Policy that governs resource usage across our hosting services.",
  canonical: "/fup",
});

export default function FupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
