import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Free Bot Hosting Policy — VexaNode",
  description:
    "The policy and fair-use terms for VexaNode's free Discord bot hosting tier.",
  canonical: "/free-bot-hosting-policy",
});

export default function FreeBotHostingPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
