import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gate.io vs KuCoin (2026): Altcoin Exchanges Compared | degen0x",
  description:
    "In-depth comparison of Gate.io and KuCoin for altcoin trading — fees, listings, IEO platforms, security, and which exchange suits altcoin hunters best.",
  keywords:
    "gate.io vs kucoin, altcoin exchange, crypto exchange comparison, IEO platform, altcoin trading",
  openGraph: {
    title: "Gate.io vs KuCoin — Altcoin Exchange Comparison | degen0x",
    description:
      "Gate.io vs KuCoin: fees, altcoin listings, IEO platforms, and features compared.",
    images: [
      {
        url: "/og-gate-io-vs-kucoin.png",
        width: 1200,
        height: 630,
        alt: "Gate.io vs KuCoin Exchange Comparison on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gate.io vs KuCoin — Altcoin Exchange Comparison | degen0x",
    description:
      "Gate.io vs KuCoin: fees, altcoin listings, IEO platforms, and features compared.",
    images: ["/og-gate-io-vs-kucoin.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
