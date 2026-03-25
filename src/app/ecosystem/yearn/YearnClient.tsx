'use client';

import Link from 'next/link';

export default function YearnClient() {
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

  const primaryColor = '#006AE3';

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
            <span aria-current="page">Yearn</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, borderBottom: `1px solid ${S.border}`, padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }} role="img" aria-label="Yearn Finance">🏹</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ background: `${primaryColor}20`, color: primaryColor, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Yield Optimizer</span>
            <span style={{ background: `${S.green}20`, color: S.green, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Multi-chain</span>
            <span style={{ background: `${S.purple}20`, color: S.purple, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>DeFi</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>Yearn Finance</h1>
          <p style={{ fontSize: '1.1rem', color: S.text2, maxWidth: 600 }}>Automated yield farming with intelligent strategy allocation across the entire DeFi ecosystem.</p>
          <p style={{ fontSize: 12, color: S.text2, marginTop: 12 }}>
            📊 Stats as of March 2026 · <a href="https://defillama.com/protocol/yearn-finance" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none' }}>Live data via DefiLlama ↗</a>
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ padding: '40px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16, marginBottom: 48 }}>
          {[
            { label: 'Total Value Locked', value: '$500M', color: primaryColor },
            { label: 'Active Vaults', value: '200+', color: S.green },
            { label: 'Governance Token', value: '$YFI', color: S.text },
            { label: 'Supported Chains', value: '10+', color: S.orange },
            { label: 'Architecture', value: 'V3 Live', color: S.text },
            { label: 'Community Rating', value: '⭐ 4.6', color: S.yellow },
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>What is Yearn Finance?</h2>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            Yearn Finance is the original DeFi yield optimizer and one of the most battle-tested protocols in crypto. Instead of manually finding the best yield opportunities across Curve, Convex, Aave, and other platforms, Yearn automates the process: you deposit your tokens, and the protocol handles strategy selection, rebalancing, and reward harvesting.
          </p>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            Yearn V3 (launched in 2026) introduced a modular vault architecture where multiple strategy modules compete for capital allocation. Instead of one strategy per vault, V3 vaults can use multiple strategies simultaneously, automatically shifting capital toward the highest-yield opportunities.
          </p>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7 }}>
            When you deposit USDC into a Yearn vault, your token (yvUSDC) appreciates in value as the underlying asset earns yield. You simply hold yvUSDC and compound gains happen automatically.
          </p>
        </section>

        {/* How It Works */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How It Works</h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }} aria-label="Steps to use Yearn Finance">
            {[
              { num: 1, title: 'Deposit Tokens into a Vault', desc: 'Select USDC, ETH, WBTC, or other supported assets and deposit.' },
              { num: 2, title: 'Strategy Allocates to Best Yield', desc: 'Yearn strategies route your capital to the highest APY source (Curve, Convex, Aave, etc.).' },
              { num: 3, title: 'Keeper Bots Harvest Rewards', desc: 'Automated bots harvest earned tokens and reinvest them into the strategy.' },
              { num: 4, title: 'Vault Tokens Appreciate', desc: 'Your yvToken balance stays the same, but it becomes worth more as underlying yield accrues.' },
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

        {/* How to Use */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How to Use Yearn</h2>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24 }}>
            <ol style={{ margin: 0, paddingLeft: 20, color: S.text2 }}>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Go to yearn.fi/vaults</strong> — Browse all available vaults</li>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Choose a vault</strong> — Filter by token (USDC, ETH, WBTC) and review APY</li>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Deposit your tokens</strong> — Click deposit and approve the transaction</li>
              <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Receive yvTokens</strong> — Your vault tokens will accumulate value over time</li>
              <li><strong style={{ color: S.text }}>Withdraw anytime</strong> — Redeem yvTokens for your principal + earned yield</li>
            </ol>
          </div>
        </section>

        {/* Risks Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${S.pink}`, paddingLeft: 16 }}>Risks & Considerations</h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: S.text2 }}>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Strategy Risk:</strong> Complex multi-step strategies can fail; underlying protocols carry their own risks.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Smart Contract Risk:</strong> Yearn is well-audited, but vulnerabilities in yield sources (Curve, Aave) affect your funds.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Impermanent Loss:</strong> Some Yearn vaults use LP strategies which experience IL in volatile markets.</li>
            <li><strong style={{ color: S.text }}>Management Fees:</strong> Yearn charges performance fees on gains; check fee structure before depositing.</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>Frequently Asked Questions</h2>
          {[
            { q: 'What is the minimum deposit for Yearn vaults?', a: 'There is no minimum deposit — you can start with any amount. However, gas fees on Ethereum may make small deposits uneconomical. Consider using Yearn on L2 chains like Arbitrum or Optimism for smaller amounts.' },
            { q: 'How does Yearn V3 differ from V2?', a: 'V3 introduced modular multi-strategy vaults, allowing multiple strategies per vault with automatic capital allocation. V2 used single-strategy vaults. V3 also supports cross-chain deployment and improved gas efficiency.' },
            { q: 'Are Yearn vaults safe?', a: 'Yearn is one of the most battle-tested DeFi protocols with multiple audits. However, all DeFi carries smart contract risk. Yearn\'s risk is compounded by exposure to underlying protocols (Curve, Aave, etc.).' },
            { q: 'What fees does Yearn charge?', a: 'Yearn typically charges a 20% performance fee on generated yield and a 2% annual management fee. Fees vary by vault — always check the specific vault details before depositing.' },
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

        {/* Quiz CTA */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }} role="img" aria-label="Quiz">🧠</div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 8 }}>Test Your Yearn Knowledge</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Complete the quiz to earn +130 XP and unlock your Yearn Expert badge</p>
          <Link href="/courses" style={{ display: 'inline-block', background: primaryColor, color: '#fff', padding: '12px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            Take Quiz →
          </Link>
        </div>

        {/* Learn More Links */}
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 16 }}>Learn More</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a href="https://docs.yearn.fi" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📄 Yearn Documentation</a>
            <a href="https://blog.yearn.fi" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>🏹 Yearn V3 Architecture</a>
            <a href="https://discord.gg/yearn" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>💬 Yearn Discord</a>
            <Link href="/learn/defi/yield-farming" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📊 Yield Farming Guide</Link>
          </div>
        </div>

        {/* Related Pages */}
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32, marginTop: 32 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 16 }}>Related Protocols</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {[
              { href: '/ecosystem/pendle', label: 'Pendle Finance', desc: 'Yield tokenization' },
              { href: '/ecosystem/morpho', label: 'Morpho', desc: 'Lending optimizer' },
              { href: '/ecosystem/eigenlayer', label: 'EigenLayer', desc: 'Restaking protocol' },
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
