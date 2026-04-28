import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exodus Vs Trust Wallet | degen0x",
  description: "Compare Exodus Vs Trust Wallet on degen0x. Side-by-side analysis and detailed comparison data.",
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
