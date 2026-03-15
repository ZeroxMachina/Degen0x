import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Analytics Dashboard - Track Your Crypto PnL",
  description: "Advanced portfolio analytics with PnL tracking, risk metrics, allocation charts, and rebalance suggestions for crypto investors.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
