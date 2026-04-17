'use client';

import Link from 'next/link';
import TradingViewChart from "@/components/TradingViewChart";

export default function MorphoPage() {
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

  const primaryColor = '#9B51E0';

  return (
    <div style={{ background: S.bg, color: S.text, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: '16px 0', background: S.surface }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', paddingLeft: 24, paddingRight: 24 }}>
          <div style={{ fontSize: 14, color: S.text2 }}>
            <Link href="/" style={{ color: primaryColor, textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/ecosystem" style={{ color: primaryColor, textDecoration: 'none' }}>Ecosystem</Link>
            {' / Morpho'}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, borderBottom: `1px solid ${S.border}`, padding: '60px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🦋</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ background: `${primaryColor}20`, color: primaryColor, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Lending</span>
            <span style={{ background: `${S.green}20`, color: S.green, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Ethereum</span>
            <span style={{ background: `${S.blue}20`, color: S.blue, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Base</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>Morpho</h1>
          <p style={{ fontSize: '1.1rem', color: S.text2, maxWidth: 600 }}>Peer-to-peer lending with up to 30% better APY than Aave and Compound.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ padding: '40px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 60 }}>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Total Value Locked</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: primaryColor }}>$3.5B</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>APY Improvement</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.green }}>+30% vs Pools</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Token</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>$MORPHO</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Markets Available</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.orange }}>200+</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Supported Chains</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>ETH / Base</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Community Rating</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.yellow }}>⭐ 4.8</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', paddingLeft: 24, paddingRight: 24, paddingBottom: 60 }}>
        {/* What Is Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>What is Morpho?</h2>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            Morpho is a peer-to-peer lending protocol built on top of existing protocols like Aave and Compound. Rather than forcing all lenders and borrowers into a single pool, Morpho matches them directly with each other — lenders get higher APY, borrowers get lower rates, and excess value is captured by the users instead of middleman pools.
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
            Morpho Blue (launched in 2026) takes this further with a standalone lending primitive that allows anyone to create isolated lending markets with custom collateral and oracle configurations. This permissionless approach unlocked 200+ unique markets across Ethereum and Base.
          </p>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7 }}>
            If you supply USDC on Morpho, you're matched with actual borrowers — earning 10-30% more APY than you would on Aave or Compound's lending pool.
          </p>
        </section>

        {/* How It Works */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How It Works</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { num: 1, title: 'Morpho Matches Lenders & Borrowers P2P', desc: 'Users are matched directly first, capturing the spread that would go to a middleman.' },
              { num: 2, title: 'Fallback to Pool Liquidity', desc: 'Unmatched amounts fall back to Aave or Compound for guaranteed liquidity.' },
              { num: 3, title: 'Morpho Blue Enables Permissionless Markets', desc: 'Anyone can deploy an isolated lending market with custom parameters.' },
              { num: 4, title: 'Users Earn Improved Rates', desc: 'APY improves by up to 30% vs. base protocols due to peer matching.' },
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How to Use Morpho</h2>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24 }}>
            <ol style={{ margin: 0, paddingLeft: 20, color: S.text2 }}>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Go to app.morpho.org</strong> — Open Morpho's official interface</li>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Browse markets</strong> — Filter by APY, token, or collateral type</li>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Supply tokens</strong> — Deposit USDC, ETH, WBTC, or other supported assets</li>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Earn improved rates</strong> — Watch your balance grow with P2P-matched returns</li>
              <li><strong style={{ color: S.text }}>Withdraw anytime</strong> — No lockup period; withdraw your supply + earned interest when ready</li>
            </ol>
          </div>
        </section>

        {/* Risks Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${S.pink}`, paddingLeft: 16 }}>Risks & Considerations</h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: S.text2 }}>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Liquidity Concentration:</strong> Some markets may have shallow liquidity; always check APY before committing.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Oracle Risk:</strong> Morpho Blue allows custom oracles; some markets may use riskier price feeds.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Collateral Risk:</strong> Borrowed assets could default if borrowed-against collateral depreciates rapidly.</li>
            <li><strong style={{ color: S.text }}>Smart Contract Risk:</strong> New markets on Morpho Blue are less audited; start with established ones.</li>
          </ul>
        </section>

        {/* Quiz CTA */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🧠</div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 8 }}>Test Your Morpho Knowledge</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Complete the quiz to earn +150 XP and unlock your Morpho Expert badge</p>
          <Link href="/courses" style={{ display: 'inline-block', background: primaryColor, color: '#fff', padding: '12px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            Take Quiz →
          </Link>
        </div>

        {/* Learn More Links */}
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 16 }}>Learn More</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📄 Morpho Documentation</Link>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>🔵 Morpho Blue Guide</Link>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>💬 Morpho Discord</Link>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📊 Morpho Analytics</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
