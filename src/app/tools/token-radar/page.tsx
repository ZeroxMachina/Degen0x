import type { Metadata } from 'next';
import TokenRadarClient from './TokenRadarClient';

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
};

export default function TokenRadarPage() {
  return <TokenRadarClient />;
}
