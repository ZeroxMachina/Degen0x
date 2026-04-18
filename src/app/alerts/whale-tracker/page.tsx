import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Whale Tracker | degen0x",
  description: "Live on-chain whale activity feed — large BTC/ETH/USDT/USDC/SOL transfers, exchange flows, and labeled wallet moves.",
  alternates: { canonical: "https://degen0x.com/alerts/whale-tracker" },
  openGraph: {
    title: "Whale Tracker | degen0x",
    description: "Live on-chain whale activity feed — large BTC/ETH/USDT/USDC/SOL transfers, exchange flows, and labeled wallet moves.",
    url: "https://degen0x.com/alerts/whale-tracker",
    type: "article",
  },
};

export const dynamic = "force-dynamic";

export default function Page() {
  return <ClientPage />;
}
