import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DEX Screener - Scan New Token Launches in Real-Time",
  description: "Real-time DEX token screener with honeypot detection, rug score analysis, and multi-chain filtering for Ethereum, Solana, Base, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
