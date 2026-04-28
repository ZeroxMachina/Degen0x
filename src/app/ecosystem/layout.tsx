import type { Metadata } from "next";

const SITE_URL = "https://degen0x.com";

export const metadata: Metadata = {
  title: "DeFi App Store — 176+ dApps Reviewed | degen0x",
  description: "Browse and compare 176+ DeFi protocols with ratings, security audits, and TVL data across all major chains.",
  openGraph: {
    title: "DeFi App Store — 176+ dApps Reviewed | degen0x",
    description: "Browse and compare 176+ DeFi protocols with ratings, security audits, and TVL data across all major chains.",
    type: "website",
    images: [{
      url: `${SITE_URL}/api/og?title=DeFi+App+Store&category=Ecosystem&type=page`,
      width: 1200,
      height: 630,
      alt: "DeFi App Store",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeFi App Store — 176+ dApps Reviewed | degen0x",
    description: "Browse and compare 176+ DeFi protocols with ratings, security audits, and TVL data across all major chains.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
