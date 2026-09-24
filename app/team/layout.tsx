import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Our Team — VexaNode",
  description:
    "Meet the team behind VexaNode hosting.",
  canonical: "/team",
});

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
