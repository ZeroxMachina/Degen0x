'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { ToolStructuredData } from '@/components/StructuredData';
import MethodologyBlock from '@/components/MethodologyBlock';

export default function ExodusVsTrustWallet() {
  const comparisonData = [
    { feature: 'Supported Coins', exodus: '150+', trustWallet: '100,000+' },
    { feature: 'Supported Blockchains', exodus: '50+', trustWallet: '60+' },
    { feature: 'Price', exodus: 'Free', trustWallet: 'Free' },
    { feature: 'Platforms', exodus: 'Desktop, Mobile, Web', trustWallet: 'Mobile (iOS/Android)' },
    { feature: 'Built-in Exchange', exodus: '✅ Yes', trustWallet: '✅ Yes' },
    { feature: 'Staking Support', exodus: '✅ 20+ coins', trustWallet: '✅ 100+ coins' },
    { feature: 'DeFi Support', exodus: 'Limited', trustWallet: 'Excellent' },
    { feature: 'NFT Display', exodus: '✅ Yes', trustWallet: '✅ Yes' },
    { feature: 'Hardware Wallet', exodus: '✅ Ledger/Trezor', trustWallet: '❌ No' },
    { feature: 'Open Source', exodus: '❌ No', trustWallet: '⚠️ Partial' },
  ];

  const exodusPros = [
    'Beautiful, intuitive desktop app',
    'Excellent for Bitcoin holders',
    'Built-in exchange (Shapeshift)',
    'Hardware wallet support',
    'Strong design and UX',
    'Portfolio tracking features',
    'Clean, clutter-free interface',
    'Multi-platform (Desktop, Mobile, Web)',
  ];

  const exodusCons = [
    'Closed-source (not transparent)',
    'Fewer coins than Trust Wallet',
    'Limited DeFi integrations',
    'Desktop-first experience',
    'Smaller staking selection',
    'Less community engagement',
    'Limited mobile support',
  ];

  const trustWalletPros = [
    'Supports 100,000+ tokens',
    'Mobile-first design (iOS & Android)',
    'Excellent DeFi app integration',
    'Built-in browser for Web3',
    'Outstanding staking support',
    'Partial open-source code',
    'Community-driven features',
    'NFT marketplace integration',
  ];

  const trustWalletCons = [
    'Mobile-only (no desktop)',
    'Closed-source core components',
    'Owned by Binance (centralization risk)',
    'UI can be overwhelming for beginners',
    'Limited hardware wallet support',
    'Smaller desktop user base',
  ];

  const securityComparison = [
    { aspect: 'Key Storage', exodus: '✅ Local device', trustWallet: '✅ Local device' },
    { aspect: 'Seed Backup', exodus: '✅ 12-word BIP39', trustWallet: '✅ 12 or 24-word' },
    { aspect: 'Private Key Control', exodus: '✅ Full control', trustWallet: '✅ Full control' },
    { aspect: 'Open Source', exodus: '❌ Closed', trustWallet: '⚠️ Partial' },
    { aspect: 'Phishing Protection', exodus: '✅ Built-in', trustWallet: '✅ Built-in' },
    { aspect: 'Audit Status', exodus: '✅ Professional', trustWallet: '✅ Multiple audits' },
    { aspect: 'Non-Custodial', exodus: '✅ Yes', trustWallet: '✅ Yes' },
  ];

  const faqItems = [
    {
      q: 'Is Exodus or Trust Wallet better?',
      a: 'Depends on your needs. Exodus is better for desktop users who want simplicity and design. Trust Wallet excels for mobile DeFi trading and token variety.'
    },
    {
      q: 'Can I use both wallets?',
      a: 'Absolutely! Many crypto users have both. Use Exodus for Bitcoin/primary holdings and Trust Wallet for mobile DeFi and token trading.'
    },
    {
      q: 'Does Trust Wallet work on desktop?',
      a: 'Trust Wallet is mobile-only (iOS/Android). If you need desktop, use Exodus. Web3 dapp interactions require the mobile app.'
    },
    {
      q: 'Which supports more tokens?',
      a: 'Trust Wallet supports 100,000+ tokens vs Exodus\'s 150+. Trust Wallet is the winner for token variety and obscure altcoins.'
    },
    {
      q: 'Can I connect hardware wallets?',
      a: 'Exodus supports Ledger and Trezor. Trust Wallet does not have hardware wallet support, limiting security for large holdings.'
    },
    {
      q: 'Is Trust Wallet safe being owned by Binance?',
      a: 'Trust Wallet is non-custodial, so Binance doesn\'t hold your keys. However, centralized ownership creates some dependency risk versus independent wallets.'
    },
  ];

  return (
    <>
      <ToolStructuredData
        title="Exodus vs Trust Wallet Multi-Chain Comparison"
        description="Detailed comparison of Exodus and Trust Wallet for multi-chain cryptocurrency management"
        slug="compare/wallets/exodus-vs-trust-wallet"
      />

      <div style={styles.container}>
        <Breadcrumb items={[
          { label: 'Compare', href: '/compare' },
          { label: 'Wallets', href: '/compare/wallets' },
          { label: 'Exodus vs Trust Wallet', href: '/compare/wallets/exodus-vs-trust-wallet'}
        ]} />

        <div style={styles.header}>
          <h1 style={styles.title}>Exodus vs Trust Wallet</h1>
          <p style={styles.subtitle}>Multi-Chain Wallet Showdown: Desktop vs Mobile & Token Support</p>
        </div>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Feature Comparison Table</h2>
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.headerRow}>
                  <th style={styles.headerCell}>Feature</th>
                  <th style={styles.headerCell}>Exodus</th>
                  <th style={styles.headerCell}>Trust Wallet</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} style={{...styles.row, backgroundColor: idx % 2 ? 'var(--surface2, #1c2330)' : 'transparent'}}>
                    <td style={styles.cell}><strong>{row.feature}</strong></td>
                    <td style={styles.cell}>{row.exodus}</td>
                    <td style={styles.cell}>{row.trustWallet}</td>
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
              <h3 style={styles.overviewTitle}>💎 Exodus</h3>
              <p style={styles.overviewBest}>Best for Desktop & Design</p>
              <p style={styles.overviewText}>
                Premium multi-chain wallet with beautiful desktop app. Perfect for portfolio management, Bitcoin hodlers, and users who prefer desktop. Built-in exchange and hardware wallet support.
              </p>
              <p style={styles.overviewStats}>500K+ users • 50+ chains • Desktop focused</p>
            </div>
            <div style={styles.overviewCard}>
              <h3 style={styles.overviewTitle}>🛡️ Trust Wallet</h3>
              <p style={styles.overviewBest}>Best for Mobile & DeFi</p>
              <p style={styles.overviewText}>
                Leading mobile wallet with 100,000+ token support. Perfect for active traders, DeFi users, and token hunting. Built-in dapp browser and excellent staking options.
              </p>
              <p style={styles.overviewStats}>10M+ users • 60+ chains • Mobile first</p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Exodus Pros & Cons</h2>
          <div style={styles.prosConsGrid}>
            <div>
              <h3 style={styles.prosTitle}>✅ Pros</h3>
              <ul style={styles.prosList}>
                {exodusPros.map((pro, idx) => (
                  <li key={idx} style={styles.prosItem}>{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={styles.consTitle}>❌ Cons</h3>
              <ul style={styles.prosList}>
                {exodusCons.map((con, idx) => (
                  <li key={idx} style={styles.prosItem}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Trust Wallet Pros & Cons</h2>
          <div style={styles.prosConsGrid}>
            <div>
              <h3 style={styles.prosTitle}>✅ Pros</h3>
              <ul style={styles.prosList}>
                {trustWalletPros.map((pro, idx) => (
                  <li key={idx} style={styles.prosItem}>{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={styles.consTitle}>❌ Cons</h3>
              <ul style={styles.prosList}>
                {trustWalletCons.map((con, idx) => (
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
                <div style={styles.securityValue}>{item.exodus}</div>
                <div style={styles.securityValue}>{item.trustWallet}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Platform & Device Support</h2>
          <div style={styles.platformGrid}>
            <div style={styles.platformCard}>
              <h3 style={styles.platformTitle}>Exodus Available On</h3>
              <div style={styles.platformList}>
                <div style={styles.platformItem}>
                  <span>💻 Windows</span>
                  <span style={styles.checkmark}>✅</span>
                </div>
                <div style={styles.platformItem}>
                  <span>🍎 macOS</span>
                  <span style={styles.checkmark}>✅</span>
                </div>
                <div style={styles.platformItem}>
                  <span>🐧 Linux</span>
                  <span style={styles.checkmark}>✅</span>
                </div>
                <div style={styles.platformItem}>
                  <span>📱 iOS</span>
                  <span style={styles.checkmark}>✅</span>
                </div>
                <div style={styles.platformItem}>
                  <span>🤖 Android</span>
                  <span style={styles.checkmark}>✅</span>
                </div>
                <div style={styles.platformItem}>
                  <span>🌐 Web</span>
                  <span style={styles.checkmark}>✅</span>
                </div>
              </div>
            </div>
            <div style={styles.platformCard}>
              <h3 style={styles.platformTitle}>Trust Wallet Available On</h3>
              <div style={styles.platformList}>
                <div style={styles.platformItem}>
                  <span>💻 Windows</span>
                  <span style={styles.xmark}>❌</span>
                </div>
                <div style={styles.platformItem}>
                  <span>🍎 macOS</span>
                  <span style={styles.xmark}>❌</span>
                </div>
                <div style={styles.platformItem}>
                  <span>🐧 Linux</span>
                  <span style={styles.xmark}>❌</span>
                </div>
                <div style={styles.platformItem}>
                  <span>📱 iOS</span>
                  <span style={styles.checkmark}>✅</span>
                </div>
                <div style={styles.platformItem}>
                  <span>🤖 Android</span>
                  <span style={styles.checkmark}>✅</span>
                </div>
                <div style={styles.platformItem}>
                  <span>🌐 Web</span>
                  <span style={styles.xmark}>❌</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Use Case Comparison</h2>
          <div style={styles.useCaseGrid}>
            <div style={styles.useCaseCard}>
              <h4 style={styles.useCaseTitle}>💰 For Hodlers</h4>
              <p style={styles.useCaseText}>
                <strong>Winner: Exodus</strong> - Better portfolio tracking, beautiful interface, desktop support.
              </p>
            </div>
            <div style={styles.useCaseCard}>
              <h4 style={styles.useCaseTitle}>⚡ For Active Trading</h4>
              <p style={styles.useCaseText}>
                <strong>Winner: Trust Wallet</strong> - Mobile-first, more tokens, built-in dapp browser.
              </p>
            </div>
            <div style={styles.useCaseCard}>
              <h4 style={styles.useCaseTitle}>🎨 For NFT Collectors</h4>
              <p style={styles.useCaseText}>
                <strong>Tie</strong> - Both support NFT display. Trust Wallet has more NFT marketplace integration.
              </p>
            </div>
            <div style={styles.useCaseCard}>
              <h4 style={styles.useCaseTitle}>👶 For Beginners</h4>
              <p style={styles.useCaseText}>
                <strong>Winner: Exodus</strong> - Simpler interface, less overwhelming, beautiful design.
              </p>
            </div>
            <div style={styles.useCaseCard}>
              <h4 style={styles.useCaseTitle}>🪙 For Token Hunting</h4>
              <p style={styles.useCaseText}>
                <strong>Winner: Trust Wallet</strong> - 100,000+ tokens vs Exodus's 150+. Far superior for altcoins.
              </p>
            </div>
            <div style={styles.useCaseCard}>
              <h4 style={styles.useCaseTitle}>🔒 For Cold Storage</h4>
              <p style={styles.useCaseText}>
                <strong>Winner: Exodus</strong> - Hardware wallet support with Ledger/Trezor integration.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Staking Opportunities</h2>
          <div style={styles.stakingGrid}>
            <div style={styles.stakingCard}>
              <h3 style={styles.stakingTitle}>Exodus Staking</h3>
              <p style={styles.stakingSubtitle}>20+ coins supported</p>
              <ul style={styles.stakingList}>
                <li>Ethereum (ETH)</li>
                <li>Cardano (ADA)</li>
                <li>Polkadot (DOT)</li>
                <li>Cosmos (ATOM)</li>
                <li>Tezos (XTZ)</li>
                <li>+ 15 more</li>
              </ul>
            </div>
            <div style={styles.stakingCard}>
              <h3 style={styles.stakingTitle}>Trust Wallet Staking</h3>
              <p style={styles.stakingSubtitle}>100+ coins supported</p>
              <ul style={styles.stakingList}>
                <li>Ethereum (ETH)</li>
                <li>Cardano (ADA)</li>
                <li>Solana (SOL)</li>
                <li>Avalanche (AVAX)</li>
                <li>Polygon (MATIC)</li>
                <li>+ 95 more</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>User Ratings</h2>
          <div style={styles.ratingGrid}>
            <div style={styles.ratingCard}>
              <h3 style={styles.ratingWallet}>Exodus</h3>
              <div style={styles.ratingScore}>
                <span style={styles.stars}>⭐⭐⭐⭐⭐</span>
                <span style={styles.ratingValue}>4.5/5</span>
              </div>
              <p style={styles.ratingCount}>22,000+ reviews</p>
              <p style={styles.ratingText}>Praised for beautiful design and ease of use. Some criticize closed-source nature.</p>
            </div>
            <div style={styles.ratingCard}>
              <h3 style={styles.ratingWallet}>Trust Wallet</h3>
              <div style={styles.ratingScore}>
                <span style={styles.stars}>⭐⭐⭐⭐⭐</span>
                <span style={styles.ratingValue}>4.7/5</span>
              </div>
              <p style={styles.ratingCount}>450,000+ reviews</p>
              <p style={styles.ratingText}>Users love token support and DeFi integration. Main concern is Binance ownership.</p>
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
            Exodus and Trust Wallet serve different use cases and can be used together effectively.
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
            <strong>Choose Exodus if:</strong> You prefer desktop, want beautiful design, hold Bitcoin, need hardware wallet support, or like portfolio tracking. Great for long-term holders.
          </p>
          <p style={styles.verdictText}>
            <strong>Choose Trust Wallet if:</strong> You're mobile-first, actively trade tokens, hunt for altcoins, use DeFi apps, or want maximum token support. Ideal for active traders.
          </p>
          <p style={styles.verdictText}>
            <strong>Best Strategy:</strong> Use both! Exodus for desktop portfolio management and Bitcoin holding, Trust Wallet for mobile DeFi and token trading. This gives you the best of both worlds.
          </p>
          <p style={styles.verdictText}>
            <strong>Winner Overall:</strong> <strong>Trust Wallet</strong> for the massive user base (10M+) and token variety, but Exodus wins for design and desktop experience.
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
  platformGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px' },
  platformCard: {
    backgroundColor: 'var(--surface, #161b22)',
    border: '1px solid var(--border, #30363d)',
    borderRadius: '12px',
    padding: '24px' },
  platformTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#0ea5e9' },
  platformList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px' },
  platformItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    backgroundColor: 'var(--surface2, #1c2330)',
    borderRadius: '8px',
    fontSize: '14px',
    color: 'var(--text, #e6edf3)' },
  checkmark: {
    color: '#10b981',
    fontWeight: 'bold' },
  xmark: {
    color: '#ef4444',
    fontWeight: 'bold' },
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
  stakingGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px' },
  stakingCard: {
    backgroundColor: 'var(--surface, #161b22)',
    border: '1px solid var(--border, #30363d)',
    borderRadius: '12px',
    padding: '24px' },
  stakingTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '4px',
    color: '#0ea5e9' },
  stakingSubtitle: {
    fontSize: '14px',
    color: '#8b5cf6',
    marginBottom: '16px',
    fontWeight: '600' },
  stakingList: {
    listStyle: 'none',
    padding: 0,
    margin: 0 },
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
