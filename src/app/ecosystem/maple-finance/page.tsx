import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import MapleFinanceClient from "./MapleFinanceClient";

export const metadata: Metadata = {
  title: "Maple Finance: Institutional On-Chain Credit",
  description: "DeFi lending for institutions. Decentralized institutional credit marketplace with $3.2B TVL and ~4.7% syrupUSDC APY.",
  openGraph: {
    title: "Maple Finance: Institutional On-Chain Credit",
    description: "DeFi lending for institutions. Decentralized institutional credit marketplace with $3.2B TVL and ~4.7% syrupUSDC APY.",
    images: [{ url: "https://degen0x.com/og-maple-finance-ecosystem.svg", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maple Finance: Institutional On-Chain Credit",
    description: "DeFi lending for institutions. Decentralized institutional credit marketplace with $3.2B TVL and ~4.7% syrupUSDC APY.",
    images: ["https://degen0x.com/og-maple-finance-ecosystem.svg"],
  },

  alternates: { canonical: "/ecosystem/maple-finance" }};

export default function MapleFinancePage() {
  return <MapleFinanceClient />;
}
