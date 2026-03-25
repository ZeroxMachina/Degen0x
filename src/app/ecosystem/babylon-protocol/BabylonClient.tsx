'use client';

import Link from 'next/link';
import TradingViewChart from "@/components/TradingViewChart";

export default function BabylonClient() {
  const S = {
    bg: '#0d1117',
    surface: '#161b22',
    surface2: '#1c2330',
    border: '#30363d',
    text: '#e6edf3',
    text2: '#8b949e',
    pink: '#ff007a',
    blue: '#58a6ff',
    green: '#3fb950',
    orange: '#f0883e',
    yellow: '#d29922',
    purple: '#bc8cff',
  };

  const primaryColor = '#F4A261';

  return (
    <div style={{ background: S.bg, color: S.text, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ borderBottom: `1px solid ${S.border}`, padding: '16px 0', background: S.surface }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', paddingLeft: 24, paddingRight: 24 }}>
          <div style={{ fontSize: 14, color: S.text2 }}>
            <Link href="/" style={{ color: primaryColor, textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/ecosystem" style={{ color: primaryColor, textDecoration: 'none' }}>Ecosystem</Link>
            {' / '}
            <span aria-current="page">Babylon Protocol</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, borderBottom: `1px solid ${S.border}`, padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }} role="img" aria-label="Babylon Protocol">⛓️</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ background: `${primaryColor}20`, color: primaryColor, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Bitcoin Staking</span>
            <span style={{ background: `${S.green}20`, color: S.green, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>PoS Security</span>
            <span style={{ background: `${S.purple}20`, color: S.purple, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>DeFi</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>Babylon Protocol</h1>
          <p style={{ fontSize: '1.1rem', color: S.text2, maxWidth: 600 }}>Unlock Bitcoin staking to secure any PoS blockchain without bridging or wrapping.</p>
          <p style={{ fontSize: 12, color: S.text2, marginTop: 12 }}>
            📊 Stats as of March 2026 · <a href="https://defillama.com/protocol/babylon" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none' }}>Live data via DefiLlama ↗</a>
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ padding: '40px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16, marginBottom: 48 }}>
          {[
            { label: 'Total Value Locked', value: '$4.2B', color: primaryColor },
            { label: 'Token', value: 'BABY', color: S.green },
            { label: 'Staking APR', value: '~5-9%', color: S.text },
            { label: 'BTC Staked', value: '180K+', color: S.orange },
            { label: 'Supported Chains', value: 'Multi', color: S.text },
            { label: 'Community Rating', value: '⭐ 4.8', color: S.yellow },
          ].map(stat => (
            <div key={stat.label} style={{ background: S.surface, border: `1px solid ${S.border}`, padding: '20px 16px', borderRadius: 12 }}>
              <div style={{ color: S.text2, fontSize: 11, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
              <div style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 900, color: stat.color }}>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', paddingLeft: 24, paddingRight: 24, paddingBottom: 60 }}>
        {/* What Is Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>What is Babylon Protocol?</h2>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            Babylon Protocol is the first Bitcoin staking solution, enabling BTC holders to earn yield by securing Proof-of-Stake blockchains without wrapping or bridging their Bitcoin. It uses Bitcoin&apos;s timestamping capability to create a cryptographic link between Bitcoin consensus and target PoS chains.
          </p>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            Bitcoin has been a non-earning asset since its inception—holders receive no yield for holding BTC. Babylon changes this by allowing BTC to back PoS security. When you stake BTC with Babylon, you commit to a specific PoS chain for a time period. If that chain experiences a slashing event, your BTC serves as economic backing. In return, you earn staking rewards.
          </p>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7 }}>
            This opens Bitcoin to the entire DeFi ecosystem while maintaining Bitcoin&apos;s security and decentralization. Over 180K BTC worth billions are already staked through Babylon.
          </p>
        </section>

        {/* Key Features */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {[
              { title: 'Native Bitcoin Staking', desc: 'Stake native BTC directly—no wrapping, bridging, or custody requirements. Full asset control.' },
              { title: 'Timestamping Integration', desc: 'Uses Bitcoin timestamping to cryptographically connect Bitcoin and target PoS chains.' },
              { title: 'Multi-Chain Support', desc: 'Stake Bitcoin to secure Ethereum, Solana, Cosmos chains, and emerging PoS networks.' },
              { title: 'Flexible Commitment Periods', desc: 'Choose staking duration and unbond anytime. Early unlock options available for premium.' },
              { title: 'Community Governance', desc: 'BABY token holders govern protocol parameters and supported PoS chains.' },
              { title: 'Enhanced Bitcoin Security', desc: 'Bitcoin staking strengthens PoS chain security without compromising Bitcoin consensus.' },
            ].map((feature, idx) => (
              <div key={idx} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 8, color: primaryColor }}>{feature.title}</h4>
                <p style={{ color: S.text2, fontSize: '0.95rem', margin: 0 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Use */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How to Use Babylon Protocol</h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }} aria-label="Steps to use Babylon Protocol">
            {[
              { num: 1, title: 'Access Babylon Staking', desc: 'Use Babylon platform and connect your Bitcoin wallet (Unisat, OKX, Leather, etc.).' },
              { num: 2, title: 'Select Target Chain', desc: 'Choose which PoS network you want to secure (Ethereum, Cosmos, Babylon Chain, etc.).' },
              { num: 3, title: 'Set Commitment Period', desc: 'Choose your staking duration (30 days, 90 days, 180 days, etc.) based on desired yield.' },
              { num: 4, title: 'Stake & Earn', desc: 'Confirm transaction on Bitcoin and start earning yield. Monitor stake and claim rewards regularly.' },
            ].map(step => (
              <li key={step.num} style={{ display: 'flex', gap: 16 }}>
                <div aria-hidden="true" style={{ background: primaryColor, color: '#fff', width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, flexShrink: 0 }}>
                  {step.num}
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 4 }}>Step {step.num}: {step.title}</h4>
                  <p style={{ color: S.text2, fontSize: '0.95rem' }}>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Risks Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${S.pink}`, paddingLeft: 16 }}>Risks & Considerations</h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: S.text2 }}>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Slashing Risk:</strong> If target PoS chain experiences slashing events, your staked BTC is at risk of being used as economic backing.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Chain Selection Risk:</strong> Choosing an insecure or vulnerable target chain increases slashing probability.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Long Lock-Ups:</strong> Commitment periods are fixed; exiting early requires premium fees, reducing returns.</li>
            <li><strong style={{ color: S.text }}>Regulatory Uncertainty:</strong> Bitcoin staking in DeFi faces evolving regulatory treatment globally.</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>Frequently Asked Questions</h2>
          {[
            { q: 'Do I need to bridge my BTC to use Babylon?', a: 'No. Babylon uses native Bitcoin staking — your BTC stays on the Bitcoin network. There is no wrapping or bridging required, which preserves Bitcoin\'s security guarantees.' },
            { q: 'What is the BABY token?', a: 'BABY is Babylon\'s governance token. Holders vote on protocol parameters, supported PoS chains, and fee structures. BABY was launched alongside mainnet and is tradeable on major exchanges.' },
            { q: 'How much BTC can I stake?', a: 'There is no hard minimum, but staking caps may apply during early phases. Check the Babylon platform for current limits and available capacity on your target chain.' },
            { q: 'What happens if I want to unstake early?', a: 'Early unstaking incurs a premium fee depending on how much time remains in your commitment period. Longer remaining periods generally have higher early exit costs.' },
          ].map((faq, idx) => (
            <details key={idx} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: '16px 20px', marginBottom: 12, cursor: 'pointer' }}>
              <summary style={{ fontWeight: 700, fontSize: '0.95rem', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {faq.q}
                <span style={{ color: S.text2, fontSize: 18, marginLeft: 12 }}>+</span>
              </summary>
              <p style={{ color: S.text2, fontSize: '0.9rem', lineHeight: 1.7, marginTop: 12 }}>{faq.a}</p>
            </details>
          ))}
        </section>

        {/* Chart Section — moved above CTA */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>BABY Token Price Chart</h2>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, overflow: 'hidden', height: 400 }}>
            <TradingViewChart symbol="BINANCE:BABYUSDT" />
          </div>
        </section>

        {/* CTA Banner */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }} role="img" aria-label="Bitcoin">₿</div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 8 }}>Stake Bitcoin, Secure Blockchains</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Earn yield on Bitcoin while strengthening PoS network security.</p>
          <a href="https://babylonchain.io" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: primaryColor, color: '#fff', padding: '12px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            Open Babylon →
          </a>
          <p style={{ fontSize: 12, color: S.text2, marginTop: 16 }}>+150 XP for completing this lesson</p>
        </div>

        {/* Learn More Links */}
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 16 }}>Learn More</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a href="https://docs.babylonchain.io" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📄 Babylon Documentation</a>
            <Link href="/learn/defi/bitcoin-staking" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>₿ Bitcoin Staking Guide</Link>
            <Link href="/ecosystem/eigenlayer" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>🔄 Compare: EigenLayer Restaking</Link>
            <Link href="/staking" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📊 Staking Dashboard</Link>
          </div>
        </div>

        {/* Related Pages */}
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32, marginTop: 32 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 16 }}>Related Protocols</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {[
              { href: '/ecosystem/eigenlayer', label: 'EigenLayer', desc: 'Ethereum restaking' },
              { href: '/ecosystem/lido', label: 'Lido', desc: 'Liquid staking' },
              { href: '/ecosystem/puffer-finance', label: 'Puffer Finance', desc: 'Native restaking' },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: '16px 20px', textDecoration: 'none', color: S.text, display: 'block' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{item.label}</div>
                <div style={{ color: S.text2, fontSize: 13 }}>{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
