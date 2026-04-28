import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Price Alerts Tool",
  description: "Set up real-time price alerts for cryptocurrency. Monitor Bitcoin, Ethereum, Solana, and 17 other top coins. Get notified when prices hit your target levels.",
  openGraph: {
    title: "Crypto Price Alerts Tool",
    description: "Monitor crypto prices with instant alerts. Set targets for BTC, ETH, SOL and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Price Alerts Tool",
    description: "Set up real-time crypto price alerts and monitoring.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
