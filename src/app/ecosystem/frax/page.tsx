'use client';

import Link from 'next/link';
import TradingViewChart from "@/components/TradingViewChart";

export default function FraxPage() {
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

  const primaryColor = '#8b5cf6';

  return (
    <div style={{ background: S.bg, color: S.text, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: '16px 0', background: S.surface }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', paddingLeft: 24, paddingRight: 24 }}>
          <div style={{ fontSize: 14, color: S.text2 }}>
            <Link href="/" style={{ color: primaryColor, textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/ecosystem" style={{ color: primaryColor, textDecoration: 'none' }}>Ecosystem</Link>
            {' / Frax'}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, borderBottom: `1px solid ${S.border}`, padding: '60px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>💠</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ background: `${primaryColor}20`, color: primaryColor, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Stablecoin</span>
            <span style={{ background: `${S.green}20`, color: S.green, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Frax Chain</span>
            <span style={{ background: `${S.blue}20`, color: S.blue, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>DeFi</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>Frax Finance</h1>
          <p style={{ fontSize: '1.1rem', color: S.text2, maxWidth: 600 }}>The full-stack DeFi protocol: pioneered fractional stablecoins, liquid staking, and now operates its own L2.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ padding: '40px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 60 }}>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>FRAX Supply</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: primaryColor }}>$700M</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>frxETH TVL</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.green }}>$400M</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Token</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>$FXS</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>sfrxETH APY</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.orange }}>~5%</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Chain Status</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>Live</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Community Rating</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.yellow }}>⭐ 4.6</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', paddingLeft: 24, paddingRight: 24, paddingBottom: 60 }}>
        {/* What Is Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>What is Frax Finance?</h2>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            Frax Finance pioneered the fractional-algorithmic stablecoin model and has evolved into a full-stack DeFi ecosystem. In 2026, Frax operates its own L2 (Frax Chain), issues frxETH (liquid staking ETH), sfrxETH (auto-compounding staking), and FRAX v3 is fully collateralized with on-chain assets plus real-world assets.
          </p>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            The Frax ecosystem is designed to be self-sustaining: FRAX stablecoin provides the core utility, frxETH/sfrxETH enable liquid staking, and Frax Chain offers low-cost settlement for DeFi. FXS is the governance and fee-accrual token, rewarding long-term protocol participants.
          </p>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7 }}>
            Unlike older stablecoin models, FRAX v3 is over-collateralized with real assets, making it one of the safest stablecoins in DeFi. The protocol has been battle-tested since 2020 and continues to innovate around staking, governance, and chain interoperability.
          </p>
        </section>

        {/* How It Works */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How It Works</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { num: 1, title: 'FRAX v3: Fully Collateralized', desc: 'FRAX is backed by on-chain collateral (USDC, ETH) and real-world assets. Every FRAX can be redeemed for $1 worth of collateral.' },
              { num: 2, title: 'frxETH: Liquid Staking', desc: 'Deposit ETH to receive frxETH (liquid staking token). Your ETH earns staking yield while remaining liquid.' },
              { num: 3, title: 'sfrxETH: Auto-Compounding', desc: 'Stake frxETH to receive sfrxETH, which auto-compounds staking yield (~5% APY). sfrxETH balance increases daily.' },
              { num: 4, title: 'Frax Chain: Low-Cost Settlement', desc: 'Use FRAX and other assets on Frax Chain for ultra-low-cost DeFi transactions.' },
            ].map(step => (
              <div key={step.num} style={{ display: 'flex', gap: 16 }}>
                <div style={{ background: primaryColor, color: '#fff', width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, flexShrink: 0 }}>
                  {step.num}
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 4 }}>{step.title}</h4>
                  <p style={{ color: S.text2, fontSize: '0.95rem' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Use */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How to Use Frax</h2>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24 }}>
            <ol style={{ margin: 0, paddingLeft: 20, color: S.text2 }}>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Go to app.frax.finance</strong> — Open the Frax application interface</li>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Mint frxETH</strong> — Deposit ETH to receive liquid staking token frxETH</li>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Stake for sfrxETH</strong> — Stake frxETH to earn auto-compounding staking yield (~5% APY)</li>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Use FRAX in DeFi</strong> — Use the FRAX stablecoin across lending, DEX, and yield protocols</li>
              <li><strong style={{ color: S.text }}>Explore Frax Chain</strong> — Move to Frax Chain L2 for lower fees and faster transactions</li>
            </ol>
          </div>
        </section>

        {/* Risks Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${S.pink}`, paddingLeft: 16 }}>Risks & Considerations</h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: S.text2 }}>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>RWA Risk:</strong> FRAX v3 includes real-world assets; custody and compliance risks apply.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Ethereum Staking Risk:</strong> frxETH is backed by Frax validators running on Ethereum; validator slashing is possible (though rare).</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Frax Chain Risk:</strong> As a new L2, Frax Chain carries early-stage protocol risks; use cautiously for large amounts.</li>
            <li><strong style={{ color: S.text }}>Smart Contract Risk:</strong> Despite long track record, any DeFi protocol carries smart contract vulnerability risk.</li>
          </ul>
        </section>

        {/* Quiz CTA */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🧠</div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 8 }}>Test Your Frax Knowledge</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Complete the quiz to earn +135 XP and unlock your Frax Expert badge</p>
          <Link href="/courses" style={{ display: 'inline-block', background: primaryColor, color: '#fff', padding: '12px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            Take Quiz →
          </Link>
        </div>

        {/* Learn More Links */}
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 16 }}>Learn More</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📄 Frax Documentation</Link>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>🦆 frxETH & sfrxETH Guide</Link>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>⛓️ Frax Chain Details</Link>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>💬 Frax Discord</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
