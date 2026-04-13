import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Calculator | degen0x",
  description: "Access the Tax Calculator on degen0x. Real-time data, analysis tools, and crypto insights.",
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
