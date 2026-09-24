import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Free Discord Bot Hosting — VexaNode",
  description:
    "Host your Discord bot on VexaNode's free tier, with setup help from our Discord community.",
  canonical: "/free-bot-hosting",
});

export default function FreeBotHostingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
