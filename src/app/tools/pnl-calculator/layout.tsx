import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto P&L Calculator — Profit, Loss, Leverage & Tax | degen0x",
  description: "Calculate crypto trade profit and loss with leverage up to 100x, fee estimation, multi-trade tracking, and tax impact. Free, instant, no signup.",
  alternates: { canonical: "https://degen0x.com/tools/pnl-calculator" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
