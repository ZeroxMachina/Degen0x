import type { Metadata } from 'next';
import SentimentHeatmapClient from './SentimentHeatmapClient';

export const metadata: Metadata = {
  title: 'Crypto Sentiment Heatmap | CryptoDegen Tools',
  description:
    'Real-time market sentiment analysis across top 50 cryptocurrency tokens. Visualize fear and greed with an interactive heatmap, fear & greed gauge, and advanced filtering by chain and category.',
  keywords: [
    'crypto sentiment',
    'market sentiment',
    'cryptocurrency heatmap',
    'fear and greed',
    'crypto analysis',
  ],
};

export default function SentimentHeatmapPage() {
  return <SentimentHeatmapClient />;
}
