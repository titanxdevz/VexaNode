import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact & Support — VexaNode",
  description:
    "Get in touch with VexaNode support through our contact form or our Discord community.",
  canonical: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
