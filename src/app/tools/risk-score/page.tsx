import type { Metadata } from 'next';
import RiskScoreClient from './RiskScoreClient';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Portfolio Risk Scoring Engine | degen0x',
  description: 'Analyze cryptocurrency portfolio risk with our advanced scoring engine. Get comprehensive risk metrics and recommendations.',
  keywords: 'crypto portfolio, risk analysis, scoring, volatility, diversification',
  openGraph: {
    title: 'Portfolio Risk Scoring Engine | degen0x',
    description: 'Analyze crypto portfolio risk with volatility, concentration, correlation & liquidity metrics.',
    type: 'website',
    url: 'https://degen0x.com/tools/risk-score',
    images: [{ url: 'https://degen0x.com/og-risk-score.svg', width: 1200, height: 630, alt: 'Portfolio Risk Scorer — degen0x' }],
  },
  twitter: { card: 'summary_large_image', title: 'Portfolio Risk Scoring Engine | degen0x', images: ['https://degen0x.com/og-risk-score.svg'] },
};

export default function RiskScorePage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Risk Score" },
          ]}
        />
        <RiskScoreClient />
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Risk Score",
              "url": "https://degen0x.com/tools/risk-score",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
