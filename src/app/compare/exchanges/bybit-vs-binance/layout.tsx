import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bybit vs Binance (2026): Fees, Features & Security Compared | degen0x",
  description:
    "Detailed comparison of Bybit and Binance exchanges — spot & futures fees, security track records, copy trading, liquidity, and which is best for your trading style.",
  keywords:
    "bybit vs binance, exchange comparison, crypto exchange fees, derivatives trading, copy trading",
  openGraph: {
    title: "Bybit vs Binance — Exchange Comparison | degen0x",
    description:
      "Side-by-side comparison of Bybit and Binance: fees, features, security, and trading.",
    images: [
      {
        url: "/og-bybit-vs-binance.png",
        width: 1200,
        height: 630,
        alt: "Bybit vs Binance Exchange Comparison on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bybit vs Binance — Exchange Comparison | degen0x",
    description:
      "Side-by-side comparison of Bybit and Binance: fees, features, security, and trading.",
    images: ["/og-bybit-vs-binance.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
