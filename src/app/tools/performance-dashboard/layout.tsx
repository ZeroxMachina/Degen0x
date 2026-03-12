import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Portfolio Performance Dashboard - Track Your Gains",
  description: "Free crypto portfolio performance dashboard. Track your holdings, analyze PnL, measure risk, and optimize your crypto portfolio allocation in real-time.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
