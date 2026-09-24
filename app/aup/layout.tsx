import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Acceptable Use Policy — VexaNode",
  description:
    "Read the VexaNode Acceptable Use Policy governing permitted use of our hosting services.",
  canonical: "/aup",
});

export default function AupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
