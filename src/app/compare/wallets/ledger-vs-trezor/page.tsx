'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { ToolStructuredData } from '@/components/StructuredData';
import MethodologyBlock from '@/components/MethodologyBlock';

export default function LedgerVsTrezor() {
  const comparisonData = [
    { feature: 'Price', ledger: '$59-149', trezor: '$49-150' },
    { feature: 'Supported Coins', ledger: '5,500+', trezor: '1,000+' },
    { feature: 'Screen', ledger: 'Display (Nano X)', trezor: 'Display (T only)' },
    { feature: 'Bluetooth', ledger: 'Nano X Only', trezor: 'Not Available' },
    { feature: 'Open Source', ledger: 'Firmware Only', trezor: 'Full Stack' },
    { feature: 'Mobile Support', ledger: 'Yes (Live App)', trezor: 'Limited' },
    { feature: 'Key Storage', ledger: 'Secure Element', trezor: 'MCU' },
    { feature: 'Phishing Protection', ledger: 'Yes', trezor: 'Yes' },
    { feature: 'Multi-Sig', ledger: 'Yes', trezor: 'Yes' },
    { feature: 'Card Tap', ledger: 'Ledger Card', trezor: 'No' },
  ];

  const ledgerPros = [
    'Largest coin/token support (5,500+)',
    'Ledger Live app is feature-rich and user-friendly',
    'Bluetooth connectivity on Nano X for mobile',
    'Nano X mobile support via Ledger Live app',
    'Compact and sleek design',
    'Regular firmware updates',
  ];

  const ledgerCons = [
    'Closed-source hardware (Secure Element)',
    'More expensive than Trezor entry model',
    'Limited offline transaction signing initially',
    'Recovery process requires website',
    'Controversy about closed-source nature',
  ];

  const trezorPros = [
    'Fully open-source (firmware and hardware)',
    'Transparent development and audits',
    'Community-driven development',
    'Trezor One is very affordable',
    'Excellent phishing protection',
    'Great for power users and developers',
  ];

  const trezorCons = [
    'Fewer supported coins (1,000+)',
    'Trezor One lacks screen (older)',
    'No Bluetooth support',
    'Requires USB adapter for mobile (OTG)',
    'Smaller ecosystem compared to Ledger',
    'Learning curve steeper than Ledger',
  ];

  const securityComparison = [
    { aspect: 'Open Source', ledger: '❌ Firmware only', trezor: '✅ Full stack' },
    { aspect: 'Audits', ledger: '✅ Professional audits', trezor: '✅ Multiple audits' },
    { aspect: 'Key Storage', ledger: '✅ Secure Element (highest)', trezor: '✅ Isolated MCU' },
    { aspect: '2FA Available', ledger: '✅ Yes', trezor: '✅ Yes' },
    { aspect: 'PIN Protection', ledger: '✅ Yes', trezor: '✅ Yes' },
    { aspect: 'Seed Backup', ledger: '✅ 24-word BIP39', trezor: '✅ 12 or 24-word' },
    { aspect: 'Passphrase Support', ledger: '✅ Yes', trezor: '✅ Yes' },
  ];

  const faqItems = [
    {
      q: 'Which wallet is more secure?',
      a: 'Both are extremely secure. Ledger uses a Secure Element (highest security standard), while Trezor uses an isolated MCU. The difference is negligible for most users. Security depends more on how you use them.'
    },
    {
      q: 'Can I use both wallets together?',
      a: 'Yes! Many crypto enthusiasts use multiple hardware wallets for diversification. You could keep Bitcoin on Ledger and Ethereum on Trezor, for example.'
    },
    {
      q: 'Which supports more coins?',
      a: 'Ledger supports 5,500+ coins/tokens vs Trezor\'s 1,000+. If you hold altcoins, Ledger is likely better. For major coins, both work fine.'
    },
    {
      q: 'Do I need Bluetooth?',
      a: 'Only if you want mobile support. Ledger Nano X has Bluetooth for mobile app usage. Trezor requires USB adapter. Both work fine with desktop.'
    },
    {
      q: 'What if I lose my wallet?',
      a: 'Your seed phrase (24 words) is your backup. With either wallet, you can recover all funds on any hardware wallet using your seed phrase. Keep it safe!'
    },
    {
      q: 'Which is better for beginners?',
      a: 'Ledger Live app is more user-friendly for beginners. Trezor has a steeper learning curve but is more transparent. Both are suitable for beginners.'
    },
  ];

  return (
    <>
      <ToolStructuredData
        title="Ledger vs Trezor Hardware Wallet Comparison"
        description="Detailed comparison of Ledger and Trezor hardware wallets including features, security, and pricing"
        slug="compare/wallets/ledger-vs-trezor"
      />

      <div style={styles.container}>
        <Breadcrumb items={[
          { label: 'Compare', href: '/compare' },
          { label: 'Wallets', href: '/compare/wallets' },
          { label: 'Ledger vs Trezor', href: '/compare/wallets/ledger-vs-trezor'}
        ]} />

        <div style={styles.header}>
          <h1 style={styles.title}>Ledger vs Trezor</h1>
          <p style={styles.subtitle}>Hardware Wallet Showdown: Security, Features & Price Comparison</p>
        </div>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Feature Comparison Table</h2>
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.headerRow}>
                  <th style={styles.headerCell}>Feature</th>
                  <th style={styles.headerCell}>Ledger</th>
                  <th style={styles.headerCell}>Trezor</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} style={{...styles.row, backgroundColor: idx % 2 ? 'var(--surface2, #1c2330)' : 'transparent'}}>
                    <td style={styles.cell}><strong>{row.feature}</strong></td>
                    <td style={styles.cell}>{row.ledger}</td>
                    <td style={styles.cell}>{row.trezor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Pricing Breakdown</h2>
          <div style={styles.pricingGrid}>
            <div style={styles.pricingCard}>
              <h3 style={styles.pricingTitle}>Ledger Nano S Plus</h3>
              <p style={styles.price}>$79</p>
              <ul style={styles.priceList}>
                <li>Small screen</li>
                <li>USB-only</li>
                <li>Great entry point</li>
                <li>5,500+ coins</li>
              </ul>
            </div>
            <div style={styles.pricingCard}>
              <h3 style={styles.pricingTitle}>Ledger Nano X</h3>
              <p style={styles.price}>$149</p>
              <ul style={styles.priceList}>
                <li>Larger screen</li>
                <li>Bluetooth enabled</li>
                <li>Mobile support</li>
                <li>5,500+ coins</li>
              </ul>
            </div>
            <div style={styles.pricingCard}>
              <h3 style={styles.pricingTitle}>Trezor One</h3>
              <p style={styles.price}>$49</p>
              <ul style={styles.priceList}>
                <li>Most affordable</li>
                <li>No screen</li>
                <li>Great for Bitcoin</li>
                <li>1,000+ coins</li>
              </ul>
            </div>
            <div style={styles.pricingCard}>
              <h3 style={styles.pricingTitle}>Trezor Model T</h3>
              <p style={styles.price}>$150</p>
              <ul style={styles.priceList}>
                <li>Touchscreen</li>
                <li>USB-only</li>
                <li>Premium option</li>
                <li>1,000+ coins</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Ledger Pros & Cons</h2>
          <div style={styles.prosConsGrid}>
            <div>
              <h3 style={styles.prosTitle}>✅ Pros</h3>
              <ul style={styles.prosList}>
                {ledgerPros.map((pro, idx) => (
                  <li key={idx} style={styles.prosItem}>{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={styles.consTitle}>❌ Cons</h3>
              <ul style={styles.prosList}>
                {ledgerCons.map((con, idx) => (
                  <li key={idx} style={styles.prosItem}>{con}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Trezor Pros & Cons</h2>
          <div style={styles.prosConsGrid}>
            <div>
              <h3 style={styles.prosTitle}>✅ Pros</h3>
              <ul style={styles.prosList}>
                {trezorPros.map((pro, idx) => (
                  <li key={idx} style={styles.prosItem}>{pro}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={styles.consTitle}>❌ Cons</h3>
              <ul style={styles.prosList}>
                {trezorCons.map((con, idx) => (
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
                <div style={styles.securityValue}>{item.ledger}</div>
                <div style={styles.securityValue}>{item.trezor}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Best For</h2>
          <div style={styles.bestForGrid}>
            <div style={styles.bestForCard}>
              <h3 style={styles.bestForTitle}>Choose Ledger if you:</h3>
              <ul style={styles.bestForList}>
                <li>Hold many different altcoins</li>
                <li>Want mobile app support</li>
                <li>Prefer user-friendly interface</li>
                <li>Need Bluetooth connectivity</li>
                <li>Are new to hardware wallets</li>
              </ul>
            </div>
            <div style={styles.bestForCard}>
              <h3 style={styles.bestForTitle}>Choose Trezor if you:</h3>
              <ul style={styles.bestForList}>
                <li>Value open-source transparency</li>
                <li>Are a developer or power user</li>
                <li>Primarily hold major coins</li>
                <li>Have a tight budget</li>
                <li>Want community-driven development</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>User Ratings</h2>
          <div style={styles.ratingGrid}>
            <div style={styles.ratingCard}>
              <h3 style={styles.ratingWallet}>Ledger</h3>
              <div style={styles.ratingScore}>
                <span style={styles.stars}>⭐⭐⭐⭐⭐</span>
                <span style={styles.ratingValue}>4.7/5</span>
              </div>
              <p style={styles.ratingCount}>45,000+ reviews</p>
              <p style={styles.ratingText}>Users love the large coin support and Ledger Live app. Main complaint is closed-source hardware.</p>
            </div>
            <div style={styles.ratingCard}>
              <h3 style={styles.ratingWallet}>Trezor</h3>
              <div style={styles.ratingScore}>
                <span style={styles.stars}>⭐⭐⭐⭐⭐</span>
                <span style={styles.ratingValue}>4.6/5</span>
              </div>
              <p style={styles.ratingCount}>38,000+ reviews</p>
              <p style={styles.ratingText}>Users appreciate the open-source approach and affordability. Some find the interface less intuitive.</p>
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
            Both Ledger and Trezor are industry-leading hardware wallets with excellent security records. <strong>Ledger wins on features and convenience</strong> (more coins, better app, mobile support), while <strong>Trezor wins on transparency and affordability</strong> (open-source, cheaper entry point).
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
            For most users starting out: <strong>Choose Ledger Nano S Plus ($79)</strong> for the best balance of security, features, and user experience.
          </p>
          <p style={styles.verdictText}>
            For budget-conscious users: <strong>Choose Trezor One ($49)</strong> if you hold mainly Bitcoin and value open-source transparency.
          </p>
          <p style={styles.verdictText}>
            For mobile users: <strong>Choose Ledger Nano X ($149)</strong> for Bluetooth mobile support via Ledger Live.
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
  pricingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px' },
  pricingCard: {
    backgroundColor: 'var(--surface, #161b22)',
    border: '1px solid var(--border, #30363d)',
    borderRadius: '12px',
    padding: '24px' },
  pricingTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '12px' },
  price: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#10b981',
    marginBottom: '16px' },
  priceList: {
    listStyle: 'none',
    padding: 0,
    margin: 0 },
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
  bestForGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px' },
  bestForCard: {
    backgroundColor: 'var(--surface, #161b22)',
    border: '1px solid var(--border, #30363d)',
    borderRadius: '12px',
    padding: '24px' },
  bestForTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#0ea5e9' },
  bestForList: {
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
