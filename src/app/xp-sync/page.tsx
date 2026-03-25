import type { Metadata } from 'next';
import WalletXPSync from '@/components/WalletXPSync';

export const metadata: Metadata = {
  title: 'Wallet XP Sync — On-Chain Identity | degen0x',
  description: 'Sync your degen0x XP with your Solana wallet. On-chain proof of your crypto learning journey.',
  openGraph: {
    title: 'degen0x Wallet XP Sync',
    description: 'Link your wallet, sync your XP on-chain, prove your crypto knowledge.',
  },
};

export default function XPSyncPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0d1117', padding: '24px' }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <WalletXPSync />
      </div>
    </main>
  );
}
