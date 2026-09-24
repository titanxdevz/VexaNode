import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy — VexaNode",
  description:
    "How VexaNode collects, uses, and protects your personal data.",
  canonical: "/privacy-policy",
});

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
