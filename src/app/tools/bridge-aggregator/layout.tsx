import type { Metadata } from "next";

const SITE_URL = "https://degen0x.com";

export const metadata: Metadata = {
  title: "Cross-Chain Bridge Aggregator | degen0x",
  description: "Compare 12+ bridges across 15 blockchains. Find optimal routes with fee analysis, security ratings, and speed estimates.",
  openGraph: {
    title: "Cross-Chain Bridge Aggregator | degen0x",
    description: "Compare 12+ bridges across 15 blockchains. Find optimal routes with fee analysis, security ratings, and speed estimates.",
    type: "website",
    images: [{
      url: `${SITE_URL}/api/og?title=Cross-Chain+Bridge+Aggregator&category=Tools&type=tool`,
      width: 1200,
      height: 630,
      alt: "Cross-Chain Bridge Aggregator",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-Chain Bridge Aggregator | degen0x",
    description: "Compare 12+ bridges across 15 blockchains. Find optimal routes with fee analysis, security ratings, and speed estimates.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
