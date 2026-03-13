import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Chain Bridge Aggregator v2 | degen0x",
  description: "Find the best cross-chain bridge routes with real-time gas estimation, route optimization, and comprehensive bridge analytics.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
