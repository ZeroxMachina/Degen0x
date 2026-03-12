import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Portfolio Heatmap - Visualize Your Holdings",
  description: "Interactive crypto portfolio heatmap. Visualize your holdings by allocation, performance, and sector with color-coded P&L and real-time updates.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
