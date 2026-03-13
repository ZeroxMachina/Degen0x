import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DeFi Risk Scoring Engine',
  description: 'Comprehensive risk assessment tool for 15+ major DeFi protocols including Aave, Uniswap, Compound, MakerDAO, Curve, and more. Analyze smart contract risk, liquidity, governance, oracle, economic, and regulatory factors with interactive visualizations.',
  keywords: [
    'DeFi',
    'risk assessment',
    'protocol analysis',
    'Aave',
    'Uniswap',
    'Compound',
    'MakerDAO',
    'Curve',
    'Lido',
    'risk scoring',
    'crypto risk',
  ],
  openGraph: {
    title: 'DeFi Risk Scoring Engine',
    description: 'Comprehensive risk assessment across 15+ major DeFi protocols',
    type: 'website',
  },
};

export default function DeFiRiskScorerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
