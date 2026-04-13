import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dydx | degen0x",
  description: "Explore Dydx on degen0x. Market data, TVL, analytics, and protocol insights.",
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
