import type { ComponentType } from "react";
import { cn } from "@/lib/utils";

/**
 * Single source of truth for the "Powered By" trusted-technology logos.
 *
 * Real official monochrome marks (source: Simple Icons, mirrored as optimized
 * files in /public/brands) render as inline SVGs using `fill="currentColor"` so
 * the wall can transition from one uniform muted grey to each brand's real
 * official color on hover/focus. Brands without an available official vector
 * fall back to a clean text wordmark and are tracked in docs/todo-real-data.md.
 *
 * Logos are used purely for identification. See the disclaimer in the footer.
 */

export type BrandKind = "icon" | "wordmark";

export interface Brand {
  key: string;
  /** Display name — used in the accessible label ("Powered by <name>"). */
  name: string;
  /** One-line factual descriptor shown under the logo in the About grid. */
  label: string;
  /** Real official brand color, revealed on hover/focus. */
  color: string;
  kind: BrandKind;
  Logo: ComponentType<{ className?: string }>;
}

type MarkProps = { className?: string };

/* ── Real official marks (Simple Icons canonical paths) ─────────────────── */

function AmdMark({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M18.324 9.137l1.559 1.56h2.556v2.557L24 14.814V9.137zM2 9.52l-2 4.96h1.309l.37-.982H3.9l.408.982h1.338L3.432 9.52zm4.209 0v4.955h1.238v-3.092l1.338 1.562h.188l1.338-1.556v3.091h1.238V9.52H10.47l-1.592 1.845L7.287 9.52zm6.283 0v4.96h2.057c1.979 0 2.88-1.046 2.88-2.472 0-1.36-.937-2.488-2.747-2.488zm1.237.91h.792c1.17 0 1.63.711 1.63 1.57 0 .728-.372 1.572-1.616 1.572h-.806zm-10.985.273l.791 1.932H2.008zm17.137.307l-1.604 1.603v2.25h2.246l1.604-1.607h-2.246z" />
    </svg>
  );
}

function IntelMark({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M20.42 7.345v9.18h1.651v-9.18zM0 7.475v1.737h1.737V7.474zm9.78.352v6.053c0 .513.044.945.13 1.292.087.34.235.618.44.828.203.21.475.359.803.451.334.093.754.136 1.255.136h.216v-1.533c-.24 0-.445-.012-.593-.037a.672.672 0 0 1-.39-.173.693.693 0 0 1-.173-.377 4.002 4.002 0 0 1-.037-.606v-2.182h1.193v-1.416h-1.193V7.827zm-3.505 2.312c-.396 0-.76.08-1.082.241-.327.161-.6.384-.822.668l-.087.117v-.902H2.658v6.256h1.639v-3.214c.018-.588.16-1.02.433-1.299.29-.297.642-.445 1.044-.445.476 0 .841.149 1.082.433.235.284.359.686.359 1.2v3.324h1.663V12.97c.006-.89-.229-1.595-.686-2.09-.458-.495-1.1-.742-1.917-.742zm10.065.006a3.252 3.252 0 0 0-2.306.946c-.29.29-.525.637-.692 1.033a3.145 3.145 0 0 0-.254 1.273c0 .452.08.878.241 1.274.161.395.39.742.674 1.032.284.29.637.526 1.045.693.408.173.86.26 1.342.26 1.397 0 2.262-.637 2.782-1.23l-1.187-.904c-.248.297-.841.699-1.583.699-.464 0-.847-.105-1.138-.321a1.588 1.588 0 0 1-.593-.872l-.019-.056h4.915v-.587c0-.451-.08-.872-.235-1.267a3.393 3.393 0 0 0-.661-1.033 3.013 3.013 0 0 0-1.02-.692 3.345 3.345 0 0 0-1.311-.248zm-16.297.118v6.256h1.651v-6.256zm16.278 1.286c1.132 0 1.664.797 1.664 1.255l-3.32.006c0-.458.525-1.255 1.656-1.261z" />
    </svg>
  );
}

function CloudflareMark({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727" />
    </svg>
  );
}

function PterodactylMark({ className }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M15.236 3.775a8.404 8.404 0 0 0-.535.004c-.576 0-1.573.103-2.201.234-1.834.367-4.348 1.65-5.5 2.855-1.362 1.415-1.362 1.755 0 .917 1.074-.708 4.663-2.227 5.187-2.227.157 0 .287.106.287.264 0 .13.524-.132 1.153-.604.628-.445 1.363-.969 1.625-1.152.334-.197.372-.275-.016-.291zm1.262 2.449c-.475.01-.894.041-1.143.094-1.676.34-3.457 1.388-5.29 3.117-.97.917-1.782 1.571-1.782 1.414 0-.157.104-.367.262-.445.419-.262 2.698-3.56 2.54-3.692-.209-.236-3.902 1.57-5.605 2.723-1.99 1.362-4.19 3.746-4.95 5.422-.34.707-.575 1.336-.523 1.389.053.026.89-.525 1.86-1.258.969-.734 1.833-1.257 1.912-1.178.078.079-.42.732-1.127 1.44-.707.733-1.206 1.31-1.127 1.31.078 0 1.152-.42 2.357-.943l2.174-.916.395.601c1.283 1.991 3.325 2.882 6.547 2.803 1.729-.026 2.096.028 2.986.656.55.367 1.153.68 1.336.68.184 0 .393.183.498.393.079.21.418.394.733.394.524-.026.55-.053.158-.289-.262-.13-.473-.394-.473-.55 0-.158.21-.444.473-.628.419-.314.419-.34 0-.367-.236 0-.525.105-.604.262-.288.471-1.1.261-1.545-.367-.393-.629-.393-.655.577-.97l.968-.314-1.832-.89c-.995-.472-2.044-.865-2.306-.865-.42 0-.47-.13-.313-.864.603-2.829 3.325-4.794 8.46-6.103C23.133 8.02 24 7.733 24 7.628c0-.288-4.166-1.23-6.026-1.361a14.798 14.798 0 0 0-1.476-.043Zm-12.354 5.36c.157 0 .159.156-.05.392-.184.236-.394.341-.446.29-.183-.184.182-.683.496-.683zm13.07 6.023a.535.535 0 0 0-.417.264c-.079.13-.054.261.103.261.131 0 .342-.13.42-.261.079-.157.052-.264-.105-.264zm-2.827.787c-.577 0-.628.052-.34.393.183.21.628.392.968.392.577 0 .628-.052.34-.392-.183-.21-.628-.393-.968-.393z" />
    </svg>
  );
}

/* ── Wordmark fallback (no official vector available) ────────────────────── */

function makeWordmark(text: string): ComponentType<{ className?: string }> {
  function Wordmark({ className }: { className?: string }) {
    return (
      <span className={cn("brand-wordmark", className)} aria-hidden="true">
        {text}
      </span>
    );
  }
  Wordmark.displayName = `Wordmark(${text})`;
  return Wordmark;
}

/* ── Brand registry — the single list consumed everywhere ────────────────── */

export const BRANDS: Brand[] = [
  { key: "virtfusion", name: "VirtFusion", label: "VPS control panel", color: "#2F6FED", kind: "wordmark", Logo: makeWordmark("VirtFusion") },
  { key: "pterodactyl", name: "Pterodactyl", label: "Game server panel", color: "#10893E", kind: "icon", Logo: PterodactylMark },
  { key: "amd", name: "AMD", label: "Server processors", color: "#ED1C24", kind: "icon", Logo: AmdMark },
  { key: "intel", name: "Intel", label: "Server processors", color: "#0071C5", kind: "icon", Logo: IntelMark },
  { key: "gigabyte", name: "GIGABYTE", label: "Server hardware", color: "#E45501", kind: "wordmark", Logo: makeWordmark("GIGABYTE") },
  { key: "micron", name: "Micron", label: "Memory & storage", color: "#0077C8", kind: "wordmark", Logo: makeWordmark("Micron") },
  { key: "aws", name: "AWS", label: "Cloud infrastructure", color: "#FF9900", kind: "wordmark", Logo: makeWordmark("aws") },
  { key: "cloudflare", name: "Cloudflare", label: "Network & CDN", color: "#F38020", kind: "icon", Logo: CloudflareMark },
  { key: "voxility", name: "Voxility", label: "DDoS protection", color: "#1D6FB8", kind: "wordmark", Logo: makeWordmark("Voxility") },
  { key: "cashfree", name: "Cashfree", label: "Payments", color: "#00C2A8", kind: "wordmark", Logo: makeWordmark("Cashfree") },
];
