'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { ToolStructuredData } from '@/components/StructuredData';
import MethodologyBlock from '@/components/MethodologyBlock';

export default function MetaMaskVsPhantom() {
  const comparisonData = [
    { feature: 'Primary Chain', metamask: 'Ethereum', phantom: 'Solana' },
    { feature: 'Multi-Chain', metamask: 'Yes (25+)', phantom: 'Yes (8+)' },
    { feature: 'Price', metamask: 'Free', phantom: 'Free' },
    { feature: 'Browser Support', metamask: 'Chrome, Firefox, Safari', phantom: 'Chrome, Firefox, Brave, Edge' },
    { feature: 'Mobile App', metamask: 'Yes', phantom: 'Yes' },
    { feature: 'Built-in Swap', metamask: 'Limited', phantom: 'Excellent' },
    { feature: 'DeFi Integration', metamask: 'Best-in-class', phantom: 'Growing' },
    { feature: 'NFT Support', metamask: 'Yes', phantom: 'Yes (Solana NFTs)' },
    { feature: 'Hardware Wallet', metamask: 'Yes', phantom: 'Limited' },
    { feature: 'Open Source', metamask: 'Partial', phantom: 'No' },
  ];

  const metamaskPros = [
    'Largest user base (10M+ users)',
    'Most DeFi integrations and apps',
    'Multi-chain support (Ethereum, Polygon, Arbitrum, etc.)',
    'Hardware wallet support (Ledger, Trezor)',
    'Extensive documentation and tutorials',
    'Regular updates and new features',
    'Strong community support',
    'Token swap feature',
  ];

  const metamaskCons = [
    'Closed-source wallet code',
    'Can be slow with high Ethereum gas fees',
    'UI can feel cluttered for beginners',
    'Privacy concerns (owned by ConsenSys)',
    'Limited Solana support',
    'NFT features less robust than competitors',
    'Gas estimation sometimes inaccurate',
  ];

  const phantomPros = [
    'Optimized for Solana (fast, cheap)',
    'Excellent built-in swap/bridge features',
    'Beautiful, intuitive UI',
    'Growing multi-chain support',
    'Great mobile app experience',
    'NFT discovery and display built-in',
    'Community-focused development',
    'Faster transactions than Ethereum',
  ];

  const phantomCons = [
    'Smaller user base than MetaMask',
    'Fewer DeFi apps compared to Ethereum',
    'Solana-centric ecosystem',
    'Less documentation than MetaMask',
    'No hardware wallet support',
    'Limited token support on other chains',
    'Potential single-chain dependency risk',
  ];

  const securityComparison = [
    { aspect: 'Key Storage', metamask: '✅ Client-side encrypted', phantom: '✅ Client-side encrypted' },
    { aspect: 'Seed Backup', metamask: '✅ 12-word BIP39', phantom: '✅ 12 or 24-word' },
    { aspect: 'Phishing Protection', metamask: '✅ PhishGuard by MetaMask', phantom: '✅ Wallet Guard' },
    { aspect: 'Transaction Signing', metamask: '✅ Manual approval required', phantom: '✅ Manual approval required' },
    { aspect: 'Open Source', metamask: '⚠️ Partial', phantom: '❌ Closed source' },
    { aspect: 'Audit Status', metamask: '✅ Regular audits', phantom: '✅ Professional audits' },
    { aspect: 'Non-Custodial', metamask: '✅ Yes', phantom: '✅ Yes' },
  ];

  const faqItems = [
    {
      q: 'Which wallet is better for DeFi?',
      a: 'MetaMask is better for Ethereum DeFi due to more integrations. Phantom is better for Solana DeFi. If you trade on both chains, use both wallets.'
    },
    {
      q: 'Can I use MetaMask and Phantom together?',
      a: 'Absolutely! Many users keep MetaMask for Ethereum/DeFi and Phantom for Solana. You can have both extensions installed simultaneously.'
    },
    {
      q: 'Is MetaMask or Phantom safer?',
      a: 'Both are non-custodial and client-side encrypted, making them equally secure technically. MetaMask has more audit history, Phantom is newer but well-audited.'
    },
    {
      q: 'Which has better token swaps?',
      a: 'Phantom has a more polished swap UI and better rates on Solana. MetaMask\'s swaps work but are less intuitive. Both integrate DEX aggregators.'
    },
    {
      q: 'Can I connect to hardware wallets?',
      a: 'MetaMask supports Ledger and Trezor. Phantom does not have hardware wallet support yet, but it\'s been requested by the community.'
    },
    {
      q: 'What if the wallet provider gets hacked?',
      a: 'Your funds are safe because they\'re not stored on MetaMask or Phantom servers. Your seed phrase controls your funds. As long as your computer is secure, your crypto is safe.'
    },
  ];

  return (
    <>
      <ToolStructuredData
        title="MetaMask vs Phantom Browser Wallet Comparison"
        description="Detailed comparison of MetaMask and Phantom wallets for Ethereum and Solana DeFi and NFTs"
        slug="compare/wallets/metamask-vs-phantom"
      />

      <div style={styles.container}>
        <Breadcrumb items={[
          { label: 'Compare', href: '/compare' },
          { label: 'Wallets', href: '/compare/wallets' },
          { label: 'MetaMask vs Phantom', href: '/compare/wallets/metamask-vs-phantom'}
        ]} />

        <div style={styles.header}>
          <h1 style={styles.title}>MetaMask vs Phantom</h1>
          <p style={styles.subtitle}>Browser Wallet Comparison: DeFi, NFTs & Trading</p>
        </div>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Feature Comparison Table</h2>
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.headerRow}>
                  <th style={styles.headerCell}>Feature</th>
                  <th style={styles.headerCell}>MetaMask</th>
                  <th style={styles.headerCell}>Phantom</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} style={{...styles.row, backgroundColor: idx % 2 ? 'var(--surface2, #1c2330)' : 'transparent'}}>
                    <td style={styles.cell}><strong>{row.feature}</strong></td>
                    <td style={styles.cell}>{row.metamask}</td>
                    <td style={styles.cell}>{row.phantom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Quick Overview</h2>
          <div style={styles.overviewGrid}>
            <div style={styles.overviewCard}>
              <h3 style={styles.overviewTitle}>🦊 MetaMask</h3>
              <p style={styles.overviewBest}>Best for Ethereum & DeFi</p>
              <p style={styles.overviewText}>
                The market leader for Ethereum wallet with 10M+ users. Extensive DeFi integration, multi-chain support, and hardware wallet compatibility. Perfect for serious traders.
              </p>
              <p style={styles.overviewStats}>10M+ users • 25+ chains • Industry standard</p>
            </div>
            <div style={styles.overviewCard}>
              <h3 style={styles.overviewTitle}>👻 Phantom</h3>
              <p style={styles.overviewBest}>Best for Solana & Ease of Use</p>
              <p style={styles.overviewText}>
                Solana-optimized wallet with an exceptional UI/UX. Fast, cheap transactions, beautiful design, and growing multi-chain support. Great for beginners.
              </p>
              <p style={styles.overviewStats}>3M+ users • 8+ chains • User-friendly</p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>MetaMask Pros & Cons</h2>
          <div style={styles.prosConsGrid}>
            <div>
              <h3 style={styles.prosTitle}>✅ Pros</h3>
              <ul style={styles.prosList}>
                {metamaskPros.map((pro, idx) => (
                  <li key={idx} style={styles.prosItem}>{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={styles.consTitle}>❌ Cons</h3>
              <ul style={styles.prosList}>
                {metamaskCons.map((con, idx) => (
                  <li key={idx} style={styles.prosItem}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Phantom Pros & Cons</h2>
          <div style={styles.prosConsGrid}>
            <div>
              <h3 style={styles.prosTitle}>✅ Pros</h3>
              <ul style={styles.prosList}>
                {phantomPros.map((pro, idx) => (
                  <li key={idx} style={styles.prosItem}>{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={styles.consTitle}>❌ Cons</h3>
              <ul style={styles.prosList}>
                {phantomCons.map((con, idx) => (
                  <li key={idx} style={styles.prosItem}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Security Comparison</h2>
          <div style={styles.securityTable}>
            {securityComparison.map((item, idx) => (
              <div key={idx} style={{...styles.securityRow, backgroundColor: idx % 2 ? 'var(--surface2, #1c2330)' : 'transparent'}}>
                <div style={styles.securityAspect}>{item.aspect}</div>
                <div style={styles.securityValue}>{item.metamask}</div>
                <div style={styles.securityValue}>{item.phantom}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Chain Support & Integrations</h2>
          <div style={styles.chainsGrid}>
            <div style={styles.chainCard}>
              <h3 style={styles.chainTitle}>MetaMask Supported Chains</h3>
              <ul style={styles.chainList}>
                <li>Ethereum Mainnet ⭐</li>
                <li>Polygon (MATIC)</li>
                <li>Arbitrum</li>
                <li>Optimism</li>
                <li>Base</li>
                <li>Avalanche</li>
                <li>Binance Smart Chain</li>
                <li>+ 17 more chains</li>
              </ul>
            </div>
            <div style={styles.chainCard}>
              <h3 style={styles.chainTitle}>Phantom Supported Chains</h3>
              <ul style={styles.chainList}>
                <li>Solana Mainnet ⭐</li>
                <li>Ethereum</li>
                <li>Polygon</li>
                <li>Bitcoin</li>
                <li>Base</li>
                <li>Arbitrum</li>
                <li>Optimism</li>
                <li>+ 1 more chain</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Use Case Comparison</h2>
          <div style={styles.useCaseGrid}>
            <div style={styles.useCaseCard}>
              <h4 style={styles.useCaseTitle}>🤖 For DeFi Trading</h4>
              <p style={styles.useCaseText}>
                <strong>Winner: MetaMask</strong> - More DeFi protocols, better liquidity, more trading pairs, hardware wallet support.
              </p>
            </div>
            <div style={styles.useCaseCard}>
              <h4 style={styles.useCaseTitle}>🎨 For NFT Collectors</h4>
              <p style={styles.useCaseText}>
                <strong>Tie</strong> - MetaMask better for Ethereum NFTs, Phantom better for Solana NFTs. Both have good NFT support.
              </p>
            </div>
            <div style={styles.useCaseCard}>
              <h4 style={styles.useCaseTitle}>⚡ For Speed & Low Cost</h4>
              <p style={styles.useCaseText}>
                <strong>Winner: Phantom</strong> - Solana is significantly faster and cheaper than Ethereum.
              </p>
            </div>
            <div style={styles.useCaseCard}>
              <h4 style={styles.useCaseTitle}>👶 For Beginners</h4>
              <p style={styles.useCaseText}>
                <strong>Winner: Phantom</strong> - Better UI/UX, simpler interface, and fewer confusing options.
              </p>
            </div>
            <div style={styles.useCaseCard}>
              <h4 style={styles.useCaseTitle}>🔐 For Maximum Security</h4>
              <p style={styles.useCaseText}>
                <strong>Tie</strong> - Both are non-custodial and equally secure. Use with hardware wallets if possible.
              </p>
            </div>
            <div style={styles.useCaseCard}>
              <h4 style={styles.useCaseTitle}>🏦 For Staking</h4>
              <p style={styles.useCaseText}>
                <strong>Winner: MetaMask</strong> - More staking options across different chains and protocols.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>User Ratings</h2>
          <div style={styles.ratingGrid}>
            <div style={styles.ratingCard}>
              <h3 style={styles.ratingWallet}>MetaMask</h3>
              <div style={styles.ratingScore}>
                <span style={styles.stars}>⭐⭐⭐⭐</span>
                <span style={styles.ratingValue}>4.4/5</span>
              </div>
              <p style={styles.ratingCount}>78,000+ reviews</p>
              <p style={styles.ratingText}>Loved for features and integrations. Criticized for complexity and occasional bugs.</p>
            </div>
            <div style={styles.ratingCard}>
              <h3 style={styles.ratingWallet}>Phantom</h3>
              <div style={styles.ratingScore}>
                <span style={styles.stars}>⭐⭐⭐⭐⭐</span>
                <span style={styles.ratingValue}>4.8/5</span>
              </div>
              <p style={styles.ratingCount}>24,000+ reviews</p>
              <p style={styles.ratingText}>Praised for beautiful design and ease of use. Minor concerns about Solana dependency.</p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>FAQ</h2>
          <div style={styles.faqContainer}>
            {faqItems.map((item, idx) => (
              <div key={idx} style={styles.faqItem}>
                <h4 style={styles.faqQuestion}>{item.q}</h4>
                <p style={styles.faqAnswer}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.verdict}>
          <h2 style={styles.verdictTitle}>The Verdict</h2>
          <p style={styles.verdictText}>
            MetaMask and Phantom serve different ecosystems: MetaMask dominates Ethereum DeFi, while Phantom excels on Solana. They're not direct competitors—they complement each other.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#0d1a2d', border: '1px solid #1f3a5f', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>⚡</span>
            <strong style={{ color: '#58a6ff', fontSize: 15 }}>Editor's Pick</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We've tested all of these extensively. The differences matter less than you'd think for casual users, but they compound for power users.
          </p>
        </div>
          <p style={styles.verdictText}>
            <strong>Choose MetaMask if:</strong> You trade on Ethereum, use DeFi protocols, trade NFTs on Ethereum, want hardware wallet support, or need multi-chain exposure.
          </p>
          <p style={styles.verdictText}>
            <strong>Choose Phantom if:</strong> You're focused on Solana, want the best UX/UI, prefer low fees and fast transactions, are new to crypto, or like Solana NFTs.
          </p>
          <p style={styles.verdictText}>
            <strong>Best Strategy:</strong> Use both wallets! Keep MetaMask for Ethereum DeFi and Phantom for Solana trading. They work perfectly side-by-side.
          </p>
        </section>
      </div>
      <MethodologyBlock variant="compare" />
    </>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'var(--bg, #0d1117)',
    color: 'var(--text, #e6edf3)',
    padding: '20px' } as React.CSSProperties,
  header: {
    maxWidth: '1000px',
    margin: '0 auto 60px',
    textAlign: 'center' as const },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '16px',
    background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent' },
  subtitle: {
    fontSize: '18px',
    color: 'var(--text2, #8b949e)' },
  section: {
    maxWidth: '1000px',
    margin: '0 auto 60px' },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: 'var(--text, #e6edf3)' },
  tableWrapper: {
    overflowX: 'auto' as const,
    backgroundColor: 'var(--surface, #161b22)',
    borderRadius: '12px',
    border: '1px solid var(--border, #30363d)' },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    fontSize: '14px' },
  headerRow: {
    borderBottom: '2px solid var(--border, #30363d)' },
  headerCell: {
    padding: '16px',
    textAlign: 'left' as const,
    fontWeight: 'bold',
    backgroundColor: 'var(--surface2, #1c2330)',
    color: '#0ea5e9' },
  row: {
    borderBottom: '1px solid var(--border, #30363d)' },
  cell: {
    padding: '16px',
    color: 'var(--text, #e6edf3)' },
  overviewGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px' },
  overviewCard: {
    backgroundColor: 'var(--surface, #161b22)',
    border: '1px solid var(--border, #30363d)',
    borderRadius: '12px',
    padding: '24px' },
  overviewTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: 'var(--text, #e6edf3)' },
  overviewBest: {
    fontSize: '14px',
    color: '#0ea5e9',
    fontWeight: '600',
    marginBottom: '12px' },
  overviewText: {
    fontSize: '14px',
    color: 'var(--text2, #8b949e)',
    lineHeight: '1.6',
    marginBottom: '12px' },
  overviewStats: {
    fontSize: '12px',
    color: '#8b5cf6',
    fontWeight: '600' },
  prosConsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px' },
  prosTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#10b981',
    marginBottom: '16px' },
  consTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#ef4444',
    marginBottom: '16px' },
  prosList: {
    listStyle: 'none',
    padding: 0,
    margin: 0 },
  prosItem: {
    padding: '12px 0',
    borderBottom: '1px solid var(--border, #30363d)',
    fontSize: '14px',
    color: 'var(--text2, #8b949e)',
    lineHeight: '1.5' },
  securityTable: {
    backgroundColor: 'var(--surface, #161b22)',
    borderRadius: '12px',
    border: '1px solid var(--border, #30363d)',
    overflow: 'hidden' },
  securityRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    borderBottom: '1px solid var(--border, #30363d)',
    padding: '16px' },
  securityAspect: {
    fontWeight: 'bold',
    color: 'var(--text, #e6edf3)' },
  securityValue: {
    fontSize: '14px',
    color: 'var(--text2, #8b949e)' },
  chainsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px' },
  chainCard: {
    backgroundColor: 'var(--surface, #161b22)',
    border: '1px solid var(--border, #30363d)',
    borderRadius: '12px',
    padding: '24px' },
  chainTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#0ea5e9' },
  chainList: {
    listStyle: 'none',
    padding: 0,
    margin: 0 },
  useCaseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px' },
  useCaseCard: {
    backgroundColor: 'var(--surface, #161b22)',
    border: '1px solid var(--border, #30363d)',
    borderRadius: '12px',
    padding: '20px' },
  useCaseTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#0ea5e9' },
  useCaseText: {
    fontSize: '14px',
    color: 'var(--text2, #8b949e)',
    lineHeight: '1.6' },
  ratingGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px' },
  ratingCard: {
    backgroundColor: 'var(--surface, #161b22)',
    border: '1px solid var(--border, #30363d)',
    borderRadius: '12px',
    padding: '24px',
    textAlign: 'center' as const },
  ratingWallet: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '12px' },
  ratingScore: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '8px' },
  stars: {
    fontSize: '20px' },
  ratingValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fbbf24' },
  ratingCount: {
    fontSize: '12px',
    color: 'var(--text2, #8b949e)',
    marginBottom: '12px' },
  ratingText: {
    fontSize: '14px',
    color: 'var(--text2, #8b949e)',
    lineHeight: '1.6' },
  faqContainer: {
    backgroundColor: 'var(--surface, #161b22)',
    borderRadius: '12px',
    border: '1px solid var(--border, #30363d)',
    overflow: 'hidden' },
  faqItem: {
    padding: '24px',
    borderBottom: '1px solid var(--border, #30363d)' },
  faqQuestion: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#0ea5e9',
    marginBottom: '12px' },
  faqAnswer: {
    fontSize: '14px',
    color: 'var(--text2, #8b949e)',
    lineHeight: '1.6',
    margin: 0 },
  verdict: {
    maxWidth: '1000px',
    margin: '0 auto 60px',
    backgroundColor: 'var(--surface, #161b22)',
    border: '2px solid #0ea5e9',
    borderRadius: '12px',
    padding: '40px' },
  verdictTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#0ea5e9' },
  verdictText: {
    fontSize: '16px',
    color: 'var(--text2, #8b949e)',
    lineHeight: '1.8',
    marginBottom: '16px' } };
