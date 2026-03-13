import type { Metadata } from 'next';
import NFTRarityAnalytics from '@/components/NFTRarityAnalytics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'NFT Collection Analytics & Rarity Tools | degen0x',
  description: 'Analyze NFT rarity scores, trait distributions, and estimated prices for top collections including CryptoPunks, BAYC, Azuki, DeGods, and more.',
  keywords: ['NFT analytics', 'rarity tools', 'NFT rarity score', 'trait analysis', 'floor price tracker', 'NFT valuation'],
  openGraph: {
    title: 'NFT Collection Analytics & Rarity Tools | degen0x',
    description: 'Deep-dive into NFT collections with rarity scoring, trait analysis, and price estimation.',
    type: 'website',
  },
};

export default function NFTAnalyticsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0d1117]">
        <NFTRarityAnalytics />
      </main>
      <Footer />
    </>
  );
}
