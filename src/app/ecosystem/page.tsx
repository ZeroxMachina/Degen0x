import type { Metadata } from 'next';
import EcosystemStore from '@/components/EcosystemStore';

export const metadata: Metadata = {
  title: 'dApp Ecosystem — Every Protocol on Every Chain | degen0x',
  description:
    'Discover and explore every dApp across Ethereum, Solana, Base, Arbitrum, Polygon, Avalanche and more. Filter by chain, category, and ratings. The most comprehensive dApp directory in crypto.',
  openGraph: {
    title: 'dApp Ecosystem Directory | degen0x',
    description:
      'Every dApp across every chain. Filter, compare, and learn about protocols — DeFi, NFTs, gaming, bridges, wallets and more.',
    images: [{ url: 'https://degen0x.com/og-ecosystem-store.png', width: 1200, height: 630, alt: 'degen0x dApp Ecosystem Directory' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dApp Ecosystem Directory | degen0x',
    description: 'Every dApp across every chain. Filter, compare, and learn about protocols.',
    images: ['https://degen0x.com/og-ecosystem-store.png'],
  },
};

export default function EcosystemPage() {
  return <EcosystemStore />;
}
