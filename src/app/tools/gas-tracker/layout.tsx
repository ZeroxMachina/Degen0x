import type { Metadata } from "next";

const SITE_URL = "https://degen0x.com";

export const metadata: Metadata = {
  title: "Multi-Chain Gas Tracker | degen0x",
  description: "Real-time gas prices across Ethereum, Arbitrum, Optimism, Base, Polygon, and 10+ blockchains.",
  openGraph: {
    title: "Multi-Chain Gas Tracker | degen0x",
    description: "Real-time gas prices across Ethereum, Arbitrum, Optimism, Base, Polygon, and 10+ blockchains.",
    type: "website",
    images: [{
      url: `${SITE_URL}/api/og?title=Multi-Chain+Gas+Tracker&category=Tools&type=tool`,
      width: 1200,
      height: 630,
      alt: "Multi-Chain Gas Tracker",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Chain Gas Tracker | degen0x",
    description: "Real-time gas prices across Ethereum, Arbitrum, Optimism, Base, Polygon, and 10+ blockchains.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
