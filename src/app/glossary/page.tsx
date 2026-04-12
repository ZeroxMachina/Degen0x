import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import ClientContent from './ClientContent';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: `Crypto & Blockchain Glossary | ${SITE_NAME}`,
  description: 'Comprehensive glossary of cryptocurrency and blockchain terms. Learn DeFi, NFTs, trading, security, and advanced concepts with clear definitions.',
  alternates: { canonical: `${SITE_URL}/glossary` },
};

export default function GlossaryPage() {
  return <ClientContent />;
}
