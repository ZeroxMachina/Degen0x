import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import NFTBadgeSystem from '@/components/NFTBadgeSystem';

export const metadata: Metadata = {
  title: 'Achievement Badges — Mint Soulbound NFTs | degen0x',
  description: 'Earn crypto achievement badges and mint them as soulbound NFTs on Solana. Prove your Web3 knowledge on-chain with degen0x.',
  openGraph: {
    title: 'degen0x Badges — On-Chain Proof of Knowledge',
    description: 'Earn badges, mint soulbound NFTs, prove your crypto mastery.',
    images: [{ url: '/og-badges.png', width: 1200, height: 630, alt: 'degen0x Achievement Badges — Mint Soulbound NFTs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'degen0x Badges — On-Chain Proof of Knowledge',
    description: 'Earn badges, mint soulbound NFTs, prove your crypto mastery.',
    images: ['/og-badges.png'],
  },
};

export default function BadgesPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-bg)', padding: '24px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Badges' },
        ]} />
        <NFTBadgeSystem userXP={1500} walletConnected={true} />
      </div>
    </main>
  );
}
