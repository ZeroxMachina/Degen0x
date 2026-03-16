import type { Metadata } from 'next';
import RiskScoreClient from './RiskScoreClient';

export const metadata: Metadata = {
  title: 'Portfolio Risk Scoring Engine | degen0x',
  description: 'Analyze cryptocurrency portfolio risk with our advanced scoring engine. Get comprehensive risk metrics and recommendations.',
  keywords: 'crypto portfolio, risk analysis, scoring, volatility, diversification',
};

export default function RiskScorePage() {
  return <RiskScoreClient />;
}
