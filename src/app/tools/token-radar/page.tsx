import type { Metadata } from 'next';
import TokenRadarClient from './TokenRadarClient';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Token Launch Radar | degen0x',
  description:
    'Track upcoming and recently launched tokens across multiple blockchains. Real-time token launch radar with risk analysis, social metrics, and audit status.',
  keywords: [
    'token launches',
    'crypto radar',
    'blockchain tokens',
    'DeFi',
    'token analysis',
  ],
  openGraph: {
    title: 'Token Launch Radar | degen0x',
    description: 'Track upcoming and recently launched tokens across Ethereum, Solana, Base, Arbitrum & BNB with risk scores and audit status.',
    type: 'website',
    url: 'https://degen0x.com/tools/token-radar',
    images: [{ url: 'https://degen0x.com/og-token-radar.svg', width: 1200, height: 630, alt: 'Token Launch Radar — degen0x' }],
  },
  twitter: { card: 'summary_large_image', title: 'Token Launch Radar | degen0x', description: 'Track upcoming and recently launched tokens with risk scores and social metrics.', images: ['https://degen0x.com/og-token-radar.svg'] },
};

export default function TokenRadarPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Token Radar" },
          ]}
        />
        <TokenRadarClient />
      </div>
    </div>
  );
}
