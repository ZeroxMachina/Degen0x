import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pump Fun Memecoins | degen0x",
  description: "Learn about Pump Fun Memecoins on degen0x. Educational guides, tutorials, and crypto knowledge.",
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
