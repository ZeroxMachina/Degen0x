import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whale Alert Tracker - Smart Money Movements in Real-Time",
  description: "Track whale wallet activity and smart money flows across Ethereum, Solana, and major chains. Get alerts on large transactions and accumulation patterns.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
