import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import PortfolioTrackerClient from './PortfolioTrackerClient';

export const metadata: Metadata = {
  title: 'Portfolio Tracker — Multi-Chain Crypto Portfolio | degen0x',
  description: "Track your entire crypto portfolio across Ethereum, Solana, and Base in one place. Real-time prices, LP positions, staking rewards, chain breakdown, and 30-day",
  openGraph: {
    title: 'Portfolio Tracker | degen0x',
    description:
      'Track your multi-chain crypto portfolio — tokens, LP positions, staking rewards, and performance charts.',
    images: [
      {
        url: 'https://degen0x.com/og-portfolio-tracker.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Tracker on degen0x',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Tracker | degen0x',
    description:
      'Track your multi-chain crypto portfolio — tokens, LP positions, staking rewards, and performance charts.',
    images: ['https://degen0x.com/og-portfolio-tracker.png'],
  },

  alternates: { canonical: "/portfolio-tracker" }};

export default function PortfolioTrackerPage() {
  return <PortfolioTrackerClient />;
}
