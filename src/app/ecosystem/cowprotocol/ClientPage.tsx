'use client';

import Link from 'next/link';
import TradingViewChart from "@/components/TradingViewChart";

export default function CoWProtocolPage() {
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

  const primaryColor = '#65B0F1';

  return (
    <div style={{ background: S.bg, color: S.text, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: '16px 0', background: S.surface }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', paddingLeft: 24, paddingRight: 24 }}>
          <div style={{ fontSize: 14, color: S.text2 }}>
            <Link href="/" style={{ color: primaryColor, textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/ecosystem" style={{ color: primaryColor, textDecoration: 'none' }}>Ecosystem</Link>
            {' / CoW Protocol'}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, borderBottom: `1px solid ${S.border}`, padding: '60px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🐄</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ background: `${primaryColor}20`, color: primaryColor, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>MEV Protection</span>
            <span style={{ background: `${S.green}20`, color: S.green, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Ethereum</span>
            <span style={{ background: `${S.purple}20`, color: S.purple, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Intents</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>CoW Protocol</h1>
          <p style={{ fontSize: '1.1rem', color: S.text2, maxWidth: 600 }}>Coincidence of Wants: The MEV-protected DEX aggregator that finds the best trade paths through solver competition.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ padding: '40px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 60 }}>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Daily Volume</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: primaryColor }}>$150M+</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>MEV Saved (Cumulative)</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.green }}>$500M+</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Token</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>$COW</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Active Solvers</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.orange }}>15+</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Settlement</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>Batch</div>
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>What is CoW Protocol?</h2>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            CoW Protocol (Coincidence of Wants) is a DEX aggregator that revolutionizes how trades are executed by settling orders in batches through a competitive solver mechanism. Instead of executing trades immediately against liquidity pools, CoW Protocol treats every order as a signed intent and allows multiple "solvers" to compete for the best execution path.
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
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7 }}>
            The magic happens in the batch: when multiple orders arrive, solvers look for Coincidences of Wants (COWs) — direct peer-to-peer matches between traders that require zero liquidity pool interaction. Unmatched amounts fall back to the best AMM route. This approach eliminates MEV, reduces slippage, and returns excess value directly to users.
          </p>
        </section>

        {/* How It Works */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How It Works</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { num: 1, title: 'User Signs Intent Offline', desc: 'You sign an order message with your wallet. No gas is spent yet.' },
              { num: 2, title: 'Solver Competition Begins', desc: 'Multiple solvers compete to find the best execution path, including peer-to-peer matches (COWs).' },
              { num: 3, title: 'Batch Settlement On-Chain', desc: 'The winning solver settles all matched orders in a single batch transaction on Ethereum.' },
              { num: 4, title: 'Surplus Returned to You', desc: 'Any price improvement over your limit order is returned directly to your wallet.' },
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How to Use CoW Protocol</h2>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24 }}>
            <ol style={{ margin: 0, paddingLeft: 20, color: S.text2 }}>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Go to swap.cow.fi</strong> — Open the official CoW Protocol interface</li>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Connect your wallet</strong> — MetaMask, WalletConnect, or any EIP-1193 provider</li>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Select tokens</strong> — Choose your input and output tokens</li>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Sign the order</strong> — No gas needed upfront; you're just signing a message</li>
              <li><strong style={{ color: S.text }}>Solver fills your order</strong> — Surplus returned automatically to your wallet</li>
            </ol>
          </div>
        </section>

        {/* Risks Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${S.pink}`, paddingLeft: 16 }}>Risks & Considerations</h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: S.text2 }}>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Order Slippage:</strong> If no good matches exist, you may route through multiple pools, increasing slippage.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Solver Risk:</strong> Solvers are economically incentivized to be honest, but the protocol is new and relies on solver diversity.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Order Expiration:</strong> Orders expire after a set time; cancellation requires a new blockchain transaction.</li>
            <li><strong style={{ color: S.text }}>Smart Contract Risk:</strong> Like all DeFi, the protocol carries smart contract risk.</li>
          </ul>
        </section>

        {/* Quiz CTA */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🧠</div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 8 }}>Test Your CoW Protocol Knowledge</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Complete the quiz to earn +140 XP and unlock your CoW Protocol Expert badge</p>
          <Link href="/courses" style={{ display: 'inline-block', background: primaryColor, color: '#fff', padding: '12px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            Take Quiz →
          </Link>
        </div>

        {/* Learn More Links */}
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 16 }}>Learn More</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📄 CoW Protocol Documentation</Link>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>🔬 How Solver Competition Works</Link>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>💬 CoW Protocol Discord</Link>
            <Link href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📊 Dune Analytics Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
