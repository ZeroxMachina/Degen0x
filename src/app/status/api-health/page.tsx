import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "API Health Status | degen0x",
  description: "Real-time uptime + response-time monitor for every public crypto API degen0x relies on — CoinGecko, DefiLlama, Fear & Greed, and more.",
  alternates: { canonical: "https://degen0x.com/status/api-health" },
  openGraph: {
    title: "API Health Status | degen0x",
    description: "Real-time uptime + response-time monitor for every public crypto API degen0x relies on — CoinGecko, DefiLlama, Fear & Greed, and more.",
    url: "https://degen0x.com/status/api-health",
    type: "article",
  },
};

export const dynamic = "force-dynamic";

export default function Page() {
  return <ClientPage />;
}
