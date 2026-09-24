import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { Brand } from "./brandLogos";

/**
 * Renders one brand logo as a focusable, labelled graphic.
 *
 * Idle: one uniform muted grey (`--logo-idle`, theme-aware). Hover/focus:
 * transitions smoothly to the brand's real official color (`--brand-color`).
 * Styling lives in globals.css under `.brand-logo`.
 */
export default function BrandLogo({
  brand,
  className,
  decorative = false,
}: {
  brand: Brand;
  className?: string;
  /** When true (e.g. the duplicated marquee track), the logo is hidden from
   *  assistive tech and taken out of the tab order to avoid duplicates. */
  decorative?: boolean;
}) {
  const { Logo } = brand;
  const a11y = decorative
    ? { "aria-hidden": true as const, tabIndex: -1 }
    : { role: "img", "aria-label": `Powered by ${brand.name}`, title: brand.name, tabIndex: 0 };
  return (
    <span
      className={cn("brand-logo", className)}
      style={{ "--brand-color": brand.color } as CSSProperties}
      {...a11y}
    >
      <Logo className="brand-logo__mark" />
    </span>
  );
}
