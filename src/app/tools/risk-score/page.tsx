import type { Metadata } from 'next';
import RiskScoreClient from './RiskScoreClient';

export const metadata: Metadata = {
  title: 'Portfolio Risk Scoring Engine | degen0x',
  description: 'Analyze cryptocurrency portfolio risk with our advanced scoring engine. Get comprehensive risk metrics and recommendations.',
  keywords: 'crypto portfolio, risk analysis, scoring, volatility, diversification',
  openGraph: {
    title: 'Portfolio Risk Scoring Engine | degen0x',
    description: 'Analyze crypto portfolio risk with volatility, concentration, correlation & liquidity metrics.',
    type: 'website',
    url: 'https://degen0x.com/tools/risk-score',
    images: [{ url: 'https://degen0x.com/og-risk-score.png', width: 1200, height: 630, alt: 'Portfolio Risk Scorer — degen0x' }],
  },
  twitter: { card: 'summary_large_image', title: 'Portfolio Risk Scoring Engine | degen0x', images: ['https://degen0x.com/og-risk-score.png'] },
};

export default function RiskScorePage() {
  return <RiskScoreClient />;
}
