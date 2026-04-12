import type { Metadata } from 'next';
import SentimentHeatmapClient from './SentimentHeatmapClient';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Crypto Sentiment Heatmap | degen0x',
  description:
    'Real-time market sentiment analysis across top 50 cryptocurrency tokens. Visualize fear and greed with an interactive heatmap, fear & greed gauge, and advanced filtering by chain and category.',
  keywords: [
    'crypto sentiment',
    'market sentiment',
    'cryptocurrency heatmap',
    'fear and greed',
    'crypto analysis',
  ],
  openGraph: {
    title: 'Crypto Sentiment Heatmap | degen0x',
    description: 'Visualize fear & greed across 50+ tokens with interactive heatmap and chain/category filtering.',
    type: 'website',
    url: 'https://degen0x.com/tools/sentiment-heatmap',
    images: [{ url: 'https://degen0x.com/og-sentiment-heatmap.svg', width: 1200, height: 630, alt: 'Crypto Sentiment Heatmap — degen0x' }],
  },
  twitter: { card: 'summary_large_image', title: 'Crypto Sentiment Heatmap | degen0x', images: ['https://degen0x.com/og-sentiment-heatmap.svg'] },
};

export default function SentimentHeatmapPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Sentiment Heatmap" },
          ]}
        />
        <SentimentHeatmapClient />
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Sentiment Heatmap",
              "url": "https://degen0x.com/tools/sentiment-heatmap",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
