import type { Metadata } from 'next';
import PortfolioTracker from '@/components/PortfolioTracker';

export const metadata: Metadata = {
  title: 'Crypto Portfolio Tracker — Track Your PnL | degen0x',
  description:
    'Track your crypto portfolio performance in real-time. See PnL across BTC, ETH, SOL and more. Free portfolio tracker with no signup required.',
  openGraph: {
    title: 'Portfolio Tracker | degen0x',
    description: 'Track your crypto holdings and PnL. Free, fast, no signup required.',
  },
};

export default function PortfolioPage() {
  return <PortfolioTracker />;
}
