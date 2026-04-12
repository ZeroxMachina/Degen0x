import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import PortfolioLiveDashboard from '@/components/PortfolioLiveDashboard';

export const metadata: Metadata = {
  title: 'Live Portfolio Dashboard — Real-Time P&L | degen0x',
  description: "Track your crypto portfolio with live prices via WebSocket. See real-time P&L, 24h changes, allocation breakdown, and sparkline charts for BTC, ETH, SOL and",
  openGraph: {
    title: 'Live Portfolio Dashboard | degen0x',
    description: 'Real-time crypto portfolio tracker with WebSocket live prices.',
  },

  alternates: { canonical: "/portfolio-live" }};

export default function PortfolioLivePage() {
  return <PortfolioLiveDashboard />;
}
