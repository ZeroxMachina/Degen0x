import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import MemecoinIndexClient from "./MemecoinIndexClient";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Meme Coin Index & Tracker ${CURRENT_YEAR} — Live Prices, Volume & Trends | ${SITE_NAME}`,
  description: `Track meme coins in real-time. Compare DOGE, SHIB, PEPE, WIF, BONK and more by price, volume, market cap, and social sentiment. Updated ${CURRENT_MONTH} ${CURRENT_YEAR}.`,
  keywords: ["meme coin tracker", "meme coin index", "DOGE price", "PEPE price", "meme coin list", "best meme coins"],
  alternates: { canonical: "/tools/memecoin-index" }};

export default function MemecoinIndexPage() {
  return <MemecoinIndexClient />;
}
