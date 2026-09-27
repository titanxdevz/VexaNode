export interface VpsFaq {
  q: string;
  a: string;
}

/**
 * Shared VPS FAQ data. Rendered visibly in VpsClient.tsx and used to build
 * FAQPage JSON-LD in page.tsx so the structured data matches the on-page text.
 */
export const vpsFaqs: VpsFaq[] = [
  {
    q: "Do I get full root access on VexaNode VPS?",
    a: "Yes. Every VexaNode Cloud VPS is a fully virtualized KVM instance with unrestricted root and SSH access. You can install custom kernels, run Docker, configure firewalls, and manage services exactly as you would on a dedicated server.",
  },
  {
    q: "Which operating systems can I install?",
    a: "You can deploy popular Linux distributions such as Ubuntu, Debian, and CentOS/AlmaLinux, or run Windows via RDP. You can reinstall the OS or roll back to a snapshot at any time from your control panel.",
  },
  {
    q: "Where are your VPS hosting locations?",
    a: "We offer VPS hosting in India (Mumbai) for low-latency access across South Asia, Germany (Frankfurt) for European coverage, and the USA for North American reach. Choose the region closest to your users for the best performance.",
  },
  {
    q: "Is DDoS protection included with every VPS?",
    a: "Yes. All VexaNode VPS plans include always-on, network-level DDoS protection at no extra cost, keeping your applications and game backends online during volumetric attacks.",
  },
  {
    q: "How do I get pricing and deploy a VPS?",
    a: "VexaNode VPS is offered through custom quotes tailored to your vCPU, RAM, storage, and location needs. Join our Discord community or open a billing ticket and our engineers will size and deploy your server.",
  },
];
