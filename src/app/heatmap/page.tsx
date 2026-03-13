import { Metadata } from 'next';
import MarketHeatmap from '@/components/MarketHeatmap';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Live Crypto Market Heatmap — Real-Time Sector Analysis | degen0x',
  description: 'Visualize the entire crypto market at a glance with our interactive heatmap. Filter by sector, time range, and sort by market cap, volume, or performance.',
  keywords: ['crypto heatmap', 'market heatmap', 'crypto sectors', 'market visualization', 'treemap crypto'],
};

export default function HeatmapPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <MarketHeatmap />
      </div>
      <Footer />
    </main>
  );
}
