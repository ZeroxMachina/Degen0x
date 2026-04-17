'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { ToolStructuredData } from '@/components/StructuredData';
import MethodologyBlock from '@/components/MethodologyBlock';
import AutoTOC from '@/components/AutoTOC';
import ReadingTime from '@/components/ReadingTime';

export default function WalletComparisonsHub() {
  const comparisons = [
    {
      id: 'ledger-vs-trezor',
      title: 'Ledger vs Trezor',
      description: 'Hardware wallet comparison: Ledger Nano S/X vs Trezor One/T models. Features, price, and security analysis.',
      category: 'Hardware Wallets',
      icon: '🔐',
      wallets: ['Ledger', 'Trezor']
    },
    {
      id: 'metamask-vs-phantom',
      title: 'MetaMask vs Phantom',
      description: 'Browser extension comparison: MetaMask (Ethereum) vs Phantom (Solana). Perfect for DeFi and NFT trading.',
      category: 'Browser Extensions',
      icon: '🦊',
      wallets: ['MetaMask', 'Phantom']
    },
    {
      id: 'exodus-vs-trust-wallet',
      title: 'Exodus vs Trust Wallet',
      description: 'Mobile & desktop wallet showdown: Multi-chain support, built-in exchange, user experience comparison.',
      category: 'Multi-Chain Wallets',
      icon: '📱',
      wallets: ['Exodus', 'Trust Wallet']
    }
  ];

  return (
    <>
      <ToolStructuredData
        title="Crypto Wallet Comparisons"
        description="Comprehensive comparison guides for popular cryptocurrency wallets"
        slug="compare/wallets"
      />

      <div style={styles.container}>
        <Breadcrumb items={[
          { label: 'Compare', href: '/compare' },
          { label: 'Wallets', href: '/compare/wallets'}
        ]} />

        <div style={styles.header}>
          <h1 style={styles.title}>Crypto Wallet Comparisons</h1>
          <ReadingTime />
          <AutoTOC />
          <p style={styles.subtitle}>
            Find the perfect wallet for your crypto needs. Compare features, security, pricing, and more.
          </p>
        </div>

        <div style={styles.grid}>
          {comparisons.map((comparison) => (
            <Link href={`/compare/wallets/${comparison.id}`}
              key={comparison.id}
              style={styles.cardLink}
            >
              <div style={styles.card}>
                <div style={styles.cardIcon}>{comparison.icon}</div>
                <h2 style={styles.cardTitle}>{comparison.title}</h2>
                <p style={styles.cardCategory}>{comparison.category}</p>
                <p style={styles.cardDescription}>{comparison.description}</p>
                <div style={styles.walletBadges}>
                  {comparison.wallets.map((wallet) => (
                    <span key={wallet} style={styles.badge}>
                      {wallet}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section style={styles.infoSection}>
          <h2 style={styles.sectionTitle}>How to Choose a Wallet</h2>
          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>🔒 Security</h3>
              <p style={styles.infoText}>
                Hardware wallets offer maximum security for large holdings. Software wallets provide convenience for active trading.
              </p>
            </div>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>⛓️ Multi-Chain Support</h3>
              <p style={styles.infoText}>
                Choose wallets supporting your preferred blockchains: Ethereum, Solana, Bitcoin, Polygon, and more.
              </p>
            </div>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>💰 Fees</h3>
              <p style={styles.infoText}>
                Compare transaction fees, hardware costs, and subscription models to find the most cost-effective option.
              </p>
            </div>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>📱 Accessibility</h3>
              <p style={styles.infoText}>
                Consider platform availability: mobile apps, browser extensions, desktop applications, and web interfaces.
              </p>
            </div>
          </div>
        </section>

        <section style={styles.ctaSection}>
          <h2 style={styles.sectionTitle}>Start Comparing Now</h2>
          <p style={styles.ctaText}>
            Click on any comparison card above to see detailed feature breakdowns, security analysis, pricing, and user ratings.
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
        </section>
      </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Ledger vs Trezor", "description": "Hardware wallet comparison: Ledger Nano S/X vs Trezor One/T models. Features, price, and security analysis.", "url": "https://degen0x.com/compare/wallets", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
    maxWidth: '1200px',
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
    color: 'var(--text2, #8b949e)',
    maxWidth: '600px',
    margin: '0 auto' },
  grid: {
    maxWidth: '1200px',
    margin: '0 auto 80px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px' },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit' },
  card: {
    backgroundColor: 'var(--surface, #161b22)',
    border: '1px solid var(--border, #30363d)',
    borderRadius: '12px',
    padding: '24px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    ':hover': {
      borderColor: '#0ea5e9',
      boxShadow: '0 0 20px rgba(14, 165, 233, 0.2)' } } as React.CSSProperties,
  cardIcon: {
    fontSize: '48px',
    marginBottom: '16px' },
  cardTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: 'var(--text, #e6edf3)' },
  cardCategory: {
    fontSize: '14px',
    color: '#0ea5e9',
    fontWeight: '600',
    marginBottom: '12px' },
  cardDescription: {
    fontSize: '14px',
    color: 'var(--text2, #8b949e)',
    marginBottom: '16px',
    lineHeight: '1.6' },
  walletBadges: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap' as const },
  badge: {
    backgroundColor: 'var(--surface2, #1c2330)',
    color: '#0ea5e9',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    border: '1px solid #0ea5e9' },
  infoSection: {
    maxWidth: '1200px',
    margin: '0 auto 80px' },
  sectionTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '40px',
    textAlign: 'center' as const },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '40px' },
  infoCard: {
    backgroundColor: 'var(--surface, #161b22)',
    border: '1px solid var(--border, #30363d)',
    borderRadius: '12px',
    padding: '24px' },
  infoTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: 'var(--text, #e6edf3)' },
  infoText: {
    fontSize: '14px',
    color: 'var(--text2, #8b949e)',
    lineHeight: '1.6' },
  ctaSection: {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: 'var(--surface, #161b22)',
    border: '1px solid var(--border, #30363d)',
    borderRadius: '12px',
    padding: '40px',
    textAlign: 'center' as const },
  ctaText: {
    fontSize: '16px',
    color: 'var(--text2, #8b949e)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6' } };
