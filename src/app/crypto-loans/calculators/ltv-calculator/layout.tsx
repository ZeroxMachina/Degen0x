import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ltv Calculator | degen0x",
  description: "Explore this page on degen0x. Crypto data, analytics, and market insights.",
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
