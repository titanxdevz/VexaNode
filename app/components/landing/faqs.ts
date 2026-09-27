export type FaqItem = { q: string; a: string };

// Shared FAQ Q&A for the homepage.
// Imported by FaqSection (for rendering) and app/page.tsx (for FAQPage JSON-LD),
// so the schema text always matches what is visibly rendered.
export const generalFaqs: FaqItem[] = [
  {
    q: "Do you offer a refund policy?",
    a: "Yes. Eligible plans come with a refund window if you're not satisfied with performance — see our Refund Policy for the full terms and covered products.",
  },
  {
    q: "Can I switch my server location later?",
    a: "Absolutely. Open a ticket on our Discord or client area and we'll help migrate your data across India, Singapore, Germany, or the USA seamlessly.",
  },
  {
    q: "Are there free plans available?",
    a: "Yes! We offer a 100% free Discord bot hosting tier — no credit card required. Just register via Discord and deploy.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "We accept UPI, credit & debit cards, net banking, and popular wallets through our secure Cashfree Payments checkout.",
  },
];

export const technicalFaqs: FaqItem[] = [
  {
    q: "What virtualization do you use?",
    a: "High-performance LXC containers for bots and Lavalink nodes for near-zero overhead, and enterprise KVM virtualization for our VPS infrastructure.",
  },
  {
    q: "Is DDoS protection included by default?",
    a: "Yes. Every plan is protected by enterprise-grade, multi-layered DDoS mitigation that filters malicious traffic at the edge before it reaches your server.",
  },
  {
    q: "Can I configure custom databases?",
    a: "Yes. We offer fully managed databases (MongoDB, Redis, MySQL, PostgreSQL), and you can host your own with full root access on a VPS.",
  },
  {
    q: "Which control panel will I get?",
    a: "Game and bot servers are managed through the Pterodactyl panel, while VPS plans are provisioned and managed via VirtFusion.",
  },
];
