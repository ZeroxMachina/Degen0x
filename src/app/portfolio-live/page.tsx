import type { Metadata } from 'next';
import PortfolioLiveDashboard from '@/components/PortfolioLiveDashboard';

export const metadata: Metadata = {
  title: 'Live Portfolio Dashboard — Real-Time P&L | degen0x',
  description:
    'Track your crypto portfolio with live prices via WebSocket. See real-time P&L, 24h changes, allocation breakdown, and sparkline charts for BTC, ETH, SOL and more.',
  openGraph: {
    title: 'Live Portfolio Dashboard | degen0x',
    description: 'Real-time crypto portfolio tracker with WebSocket live prices.',
  },
};

export default function PortfolioLivePage() {
  return <PortfolioLiveDashboard />;
}
