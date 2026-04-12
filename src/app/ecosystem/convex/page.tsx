'use client';

import Link from 'next/link';
import TradingViewChart from "@/components/TradingViewChart";

export default function ConvexPage() {
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

  const primaryColor = '#E05C27';

  return (
    <div style={{ background: S.bg, color: S.text, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: '16px 0', background: S.surface }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', paddingLeft: 24, paddingRight: 24 }}>
          <div style={{ fontSize: 14, color: S.text2 }}>
            <Link href="/" style={{ color: primaryColor, textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/ecosystem" style={{ color: primaryColor, textDecoration: 'none' }}>Ecosystem</Link>
            {' / Convex'}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, borderBottom: `1px solid ${S.border}`, padding: '60px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🔺</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ background: `${primaryColor}20`, color: primaryColor, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Yield Booster</span>
            <span style={{ background: `${S.green}20`, color: S.green, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Ethereum</span>
            <span style={{ background: `${S.blue}20`, color: S.blue, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Curve</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>Convex Finance</h1>
          <p style={{ fontSize: '1.1rem', color: S.text2, maxWidth: 600 }}>Unlock max 2.5x yield boosts on Curve LP tokens without committing to 4-year veLocks.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ padding: '40px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 60 }}>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Total Value Locked</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: primaryColor }}>$1.2B</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Max Curve Boost</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.green }}>2.5x</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Token</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>$CVX</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>vlCVX Locked</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.orange }}>$300M+</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>CRV Controlled</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>50%+</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Community Rating</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.yellow }}>⭐ 4.5</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', paddingLeft: 24, paddingRight: 24, paddingBottom: 60 }}>
        {/* What Is Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>What is Convex Finance?</h2>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            Convex Finance is a yield booster for Curve Finance. Curve offers up to a 2.5x boost on liquidity provider rewards if you lock CRV tokens for 4 years (veCRV). Most LP providers don't want to commit for that long, so Convex accumulates massive amounts of veCRV and applies that max boost to all deposited LP tokens automatically.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1005', border: '1px solid #4a2c10', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🌐</span>
            <strong style={{ color: '#fb923c', fontSize: 15 }}>Ecosystem Watch</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We maintain relationships with builders across ecosystems. Our coverage reflects boots-on-the-ground knowledge from governance forums and developer Discord channels.
          </p>
        </div>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            This is called the "Curve Wars" — Convex competes with other protocols (Yearn, Aura, others) to accumulate veCRV voting power. In 2026, Convex controls over 50% of all Curve's voting power, making it the dominant force in Curve governance.
          </p>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7 }}>
            When you deposit your Curve LP tokens into Convex, you instantly get the 2.5x boost on CRV rewards, plus you earn native CVX tokens. vlCVX holders vote on which Curve pools receive the most CVX incentives (the "bribe market").
          </p>
        </section>

        {/* How It Works */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How It Works</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { num: 1, title: 'Convex Accumulates veCRV', desc: 'Users deposit their CRV and lock it long-term, which Convex votes with.' },
              { num: 2, title: 'LP Deposits Get Max 2.5x Boost', desc: 'When you deposit Curve LP tokens, Convex applies the maximum boost automatically.' },
              { num: 3, title: 'Earn CRV + CVX + Trading Fees', desc: 'You receive boosted CRV rewards, CVX incentives, and a share of Curve trading fees.' },
              { num: 4, title: 'vlCVX Holders Direct Emissions', desc: 'Lock CVX as vlCVX to vote on which pools get most incentives and earn bribe rewards.' },
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How to Use Convex</h2>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24 }}>
            <ol style={{ margin: 0, paddingLeft: 20, color: S.text2 }}>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Go to cvx.finance</strong> — Open the Convex interface</li>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Find your Curve LP token</strong> — Search for the specific Curve LP you own (e.g., 3Crv, alUSD/3Crv)</li>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Stake and receive cvxLP token</strong> — Deposit your Curve LP, receive a boosted cvxLP token in return</li>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Earn boosted CRV + CVX</strong> — Your cvxLP automatically earns 2.5x boosted CRV and CVX rewards</li>
              <li><strong style={{ color: S.text }}>Optional: Lock CVX as vlCVX</strong> — Lock CVX for 16 weeks to vote and earn bribe rewards</li>
            </ol>
          </div>
        </section>

        {/* Risks Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${S.pink}`, paddingLeft: 16 }}>Risks & Considerations</h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: S.text2 }}>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Governance Concentration:</strong> Convex's 50%+ Curve voting power creates centralization risk for Curve.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Bribe Market Risk:</strong> vlCVX voting is heavily incentivized by bribes, which may distort yield allocation.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Impermanent Loss:</strong> Curve pools have lower IL risk, but stablecoin LPs still face swap risk.</li>
            <li><strong style={{ color: S.text }}>Convex Smart Contract Risk:</strong> While audited, any vulnerability could affect your staked LPs.</li>
          </ul>
        </section>

        {/* Quiz CTA */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🧠</div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 8 }}>Test Your Convex Knowledge</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Complete the quiz to earn +140 XP and unlock your Convex Expert badge</p>
          <Link href="/courses" style={{ display: 'inline-block', background: primaryColor, color: '#fff', padding: '12px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            Take Quiz →
          </Link>
        </div>

        {/* Learn More Links */}
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 16 }}>Learn More</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📄 Convex Documentation</Link>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>🔺 Curve Wars Explained</Link>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>💬 Convex Discord</Link>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📊 Convex Analytics</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
