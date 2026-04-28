import type { Metadata } from "next";

const SITE_URL = "https://degen0x.com";

export const metadata: Metadata = {
  title: "Crypto Portfolio Tracker | degen0x",
  description: "Track your crypto portfolio across multiple wallets and exchanges with real-time prices and P&L analysis.",
  openGraph: {
    title: "Crypto Portfolio Tracker | degen0x",
    description: "Track your crypto portfolio across multiple wallets and exchanges with real-time prices and P&L analysis.",
    type: "website",
    images: [{
      url: `${SITE_URL}/api/og?title=Crypto+Portfolio+Tracker&category=Tools&type=tool`,
      width: 1200,
      height: 630,
      alt: "Crypto Portfolio Tracker",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Portfolio Tracker | degen0x",
    description: "Track your crypto portfolio across multiple wallets and exchanges with real-time prices and P&L analysis.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
