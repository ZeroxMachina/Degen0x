import { Metadata } from 'next';
import PortfolioAnalytics from '@/components/PortfolioAnalytics';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Portfolio Analytics — P&L, Tax Estimates & Risk Metrics | degen0x',
  description: 'Deep-dive into your crypto portfolio with advanced analytics, P&L tracking, tax estimation, risk metrics, and diversification scoring.',
  keywords: ['crypto portfolio analytics', 'P&L tracker', 'crypto tax estimation', 'risk metrics', 'Sharpe ratio crypto'],
};

export default function PortfolioAnalyticsPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <PortfolioAnalytics />
      </div>
      <Footer />
    </main>
  );
}
