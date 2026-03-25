import OnChainPortfolioAnalytics from '@/components/OnChainPortfolioAnalytics';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'On-Chain Portfolio Analytics — Multi-Chain, DeFi & NFT Tracker | degen0x',
  description: 'Track your crypto portfolio across Ethereum, Arbitrum, Base, Polygon & more. See DeFi positions, P&L history, risk scores, and on-chain data in real time.',
};

export default function OnChainPortfolioPage() {
  return (
    <main style={{ backgroundColor: "#0d1117", color: "#e6edf3", minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: "1px solid #30363d", padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: "#8b949e" }}>
        <Link href="/" style={{ color: "#8b949e", textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <span style={{ color: "#e6edf3" }}>On-Chain Portfolio</span>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 80px" }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 8 }}>On-Chain Portfolio Analytics</h1>
          <p style={{ color: "#8b949e", fontSize: 15 }}>Real-time multi-chain portfolio tracking with DeFi positions, P&L history, and risk scoring.</p>
        </div>
        <OnChainPortfolioAnalytics />
      </div>
      <Footer />
    </main>
  );
}
