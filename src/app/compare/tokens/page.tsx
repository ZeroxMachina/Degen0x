import { Metadata } from 'next';
import TokenComparison from '@/components/TokenComparison';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Token Comparison Tool — Side-by-Side Crypto Analysis | degen0x',
  description: 'Compare any two cryptocurrencies side-by-side. Analyze price, fundamentals, performance, social metrics, and more with our radar chart visualization.',
  keywords: ['crypto comparison', 'token comparison', 'BTC vs ETH', 'cryptocurrency analysis', 'coin comparison tool'],
};

export default function TokenComparisonPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <TokenComparison />
      </div>
      <Footer />
    </main>
  );
}
