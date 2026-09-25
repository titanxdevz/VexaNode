"use client";

import * as paymentsIcons from "payments-icons-library";

/**
 * "Payments Accepted" strip — payment methods available through our
 * Cashfree Payments checkout. Icons come from Cashfree's official
 * payments-icons-library (remote SVGs), shown in full color on white chips
 * so every logo stays legible in both light and dark footers.
 */

// Representative set of methods enabled on Cashfree (cards, UPI, wallets).
const METHOD_LABELS: Record<string, string> = {
  visa: "Visa",
  mastercard: "Mastercard",
  rupay: "RuPay",
  amex: "American Express",
  bhim: "BHIM UPI",
  gpay: "Google Pay",
  paytm: "Paytm",
  phonepe: "PhonePe",
  mobikwik: "MobiKwik",
  amazon: "Amazon Pay",
};

type IconResult = { icon_name: string; icon_url: string };

const ICONS: IconResult[] = paymentsIcons
  .getIcons(Object.keys(METHOD_LABELS), "svg")
  .filter((i: IconResult) => i.icon_name !== "default" && Boolean(i.icon_url));

export default function PaymentsAccepted() {
  return (
    <section
      aria-label="Accepted payment methods"
      className="py-6 border-t vx-line flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5"
    >
      <span className="text-[11px] font-bold uppercase tracking-widest vx-muted2 shrink-0">
        Payments Accepted
      </span>

      <ul className="flex flex-wrap items-center gap-2">
        {ICONS.map(({ icon_name, icon_url }) => (
          <li key={icon_name}>
            <span className="inline-flex h-8 min-w-[2.75rem] items-center justify-center rounded-md border border-black/5 bg-white px-2 shadow-sm">
              {/* Remote SVG from Cashfree CDN — plain img keeps it lightweight */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={icon_url}
                alt={METHOD_LABELS[icon_name] ?? icon_name}
                height={20}
                loading="lazy"
                decoding="async"
                className="h-5 w-auto object-contain"
              />
            </span>
          </li>
        ))}
      </ul>

      <p className="text-[11px] vx-faint sm:ml-auto sm:text-right">
        Secure checkout by Cashfree Payments — UPI, cards, net banking &amp; wallets.
      </p>
    </section>
  );
}
