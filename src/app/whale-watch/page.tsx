import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import WhaleWatchClient from '@/components/WhaleWatchClient';

export const metadata: Metadata = {
  title: 'Whale Watch — Real-time Crypto Transaction Tracking | degen0x',
  description: 'Monitor large whale transactions across ETH, SOL, BTC, and ARB in real-time. Track accumulation zones and top whale activity with advanced filtering.',
  keywords: 'whale watching, crypto transactions, blockchain, ethereum, solana, bitcoin, arbitrum, trading signals',
  openGraph: {
    title: 'Whale Watch — Real-time Crypto Tracking | degen0x',
    description: 'Real-time monitoring of large crypto transactions across major chains.',
    images: [{ url: '/og-whale-watch.png', width: 1200, height: 630, alt: 'degen0x Whale Watch — Real-time Transaction Monitoring' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whale Watch — Real-time Crypto Tracking | degen0x',
    description: 'Real-time monitoring of large crypto transactions across major chains.',
    images: ['/og-whale-watch.png'],
  },
};

export default function WhaleWatchPage() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0.5rem 1rem 0' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'Whale Watch' },
        ]} />
      </div>
      <WhaleWatchClient />
    </div>
  );
}
