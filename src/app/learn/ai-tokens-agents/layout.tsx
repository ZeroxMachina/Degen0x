import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai Tokens Agents | degen0x",
  description: "Learn about Ai Tokens Agents on degen0x. Educational guides, tutorials, and crypto knowledge.",
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
