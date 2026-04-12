import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import ClientContent from './ClientContent';

export const metadata: Metadata = {
  title: `DeFi Yield Aggregator | Compare APY & Yields | ${SITE_NAME}`,
  description: `Compare DeFi yields across Ethereum, Solana, Arbitrum and more. Find the best APY for lending, staking, LPs and yield vaults. Analyze TVL, risk levels, and earn with confidence.`,
  alternates: { canonical: `${SITE_URL}/defi-yields` },
};

export default function DeFiYieldsPage() {
  return <ClientContent />;
}
