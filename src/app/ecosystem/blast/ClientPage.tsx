'use client';

import Link from 'next/link';
import TradingViewChart from "@/components/TradingViewChart";

export default function BlastPage() {
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

  const primaryColor = '#FCFF52';

  return (
    <div style={{ background: S.bg, color: S.text, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: '16px 0', background: S.surface }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', paddingLeft: 24, paddingRight: 24 }}>
          <div style={{ fontSize: 14, color: S.text2 }}>
            <Link href="/" style={{ color: primaryColor, textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/ecosystem" style={{ color: primaryColor, textDecoration: 'none' }}>Ecosystem</Link>
            {' / Blast'}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, borderBottom: `1px solid ${S.border}`, padding: '60px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>⚡</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ background: `${primaryColor}20`, color: primaryColor, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>L2</span>
            <span style={{ background: `${S.green}20`, color: S.green, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Native Yield</span>
            <span style={{ background: `${S.purple}20`, color: S.purple, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Auto-Rebasing</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>Blast</h1>
          <p style={{ fontSize: '1.1rem', color: S.text2, maxWidth: 600 }}>Ethereum L2 with native yield for ETH and stablecoins through auto-rebasing.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ padding: '40px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 60 }}>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Total Value Locked</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: primaryColor }}>$1.5B</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Token</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.green }}>BLAST</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>ETH APY</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>~2.5-3.5%</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Stablecoin APY</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.orange }}>~4-5%</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>TX Fee (Avg)</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>$0.01-0.05</div>
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>What is Blast?</h2>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            Blast is an Ethereum Layer 2 that fundamentally reimagines how L2 depositors earn. Unlike standard L2s where your deposits are idle, Blast generates native yield on ETH and stablecoins through yield farming partnerships and auto-rebasing. Your balance automatically increases over time without requiring any additional action.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1005', border: '1px solid #4a2c10', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🌐</span>
            <strong style={{ color: '#fb923c', fontSize: 15 }}>Ecosystem Watch</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Ecosystem strength is the best leading indicator of L1/L2 value. We track developer activity, unique addresses, and TVL growth — not just token price.
          </p>
        </div>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            Blast uses the Blast protocol to route user assets into yield-generating positions while maintaining full L2 liquidity. ETH is staked through Lido and other protocols, while stablecoins are lent through AAVE and Compound. All yield flows back to users as auto-rebasing tokens.
          </p>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7 }}>
            This makes Blast ideal for long-term holders and LPs who want to earn yield on idle L2 capital without manually managing yield farming strategies.
          </p>
        </section>

        {/* Key Features */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              {
                title: 'Auto-Rebasing Tokens',
                desc: 'Your balance grows automatically as yield accrues; no claiming or harvesting needed.',
              },
              {
                title: 'Native ETH Yield',
                desc: 'ETH deposits earn staking yield (~2.5-3.5% APY) automatically routed through Lido.',
              },
              {
                title: 'Native Stablecoin Yield',
                desc: 'USDB and other stablecoins earn lending yields (~4-5% APY) through AAVE/Compound.',
              },
              {
                title: 'Low Transaction Fees',
                desc: 'Average transaction costs $0.01-0.05, orders of magnitude lower than Ethereum mainnet.',
              },
              {
                title: 'Seamless Ethereum Integration',
                desc: 'Bridge assets from Ethereum or other L2s using standard bridges.',
              },
              {
                title: 'BLAST Token Governance',
                desc: 'BLAST token holders govern protocol parameters and yield strategy allocation.',
              },
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How to Use Blast</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { num: 1, title: 'Bridge Assets to Blast', desc: 'Use official Blast bridge or third-party bridges to transfer ETH/USDC/USDT to Blast L2.' },
              { num: 2, title: 'Native Auto-Rebasing Starts', desc: 'Your balance automatically rebases and grows; no additional setup needed.' },
              { num: 3, title: 'Use dApps or Hold', desc: 'Trade on Blast DEXes, use lending protocols, or simply hold while earning yield.' },
              { num: 4, title: 'Withdraw Anytime', desc: 'Exit to Ethereum or other chains via bridges; yields follow you wherever you go.' },
            ].map(step => (
              <div key={step.num} style={{ display: 'flex', gap: 16 }}>
                <div style={{ background: primaryColor, color: '#000', width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, flexShrink: 0 }}>
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

        {/* Risks Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${S.pink}`, paddingLeft: 16 }}>Risks & Considerations</h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: S.text2 }}>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>L2 Sequencer Risk:</strong> Blast relies on a centralized sequencer; sequencer failure could affect transactions.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Underlying Protocol Risk:</strong> Yield comes from Lido, AAVE, Compound; risks from these protocols affect Blast yields.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Smart Contract Risk:</strong> Complex auto-rebasing mechanics increase surface area for vulnerabilities.</li>
            <li><strong style={{ color: S.text }}>Yield Variability:</strong> Yields fluctuate based on underlying protocol yields; APY not guaranteed.</li>
          </ul>
        </section>

        {/* CTA Banner */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>💸</div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 8 }}>Earn Yield on Your L2 Balance</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Auto-rebasing ETH and stablecoins with native yield on Blast L2.</p>
          <a href="https://blast.io" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: primaryColor, color: '#000', padding: '12px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            Open Blast →
          </a>
          <p style={{ fontSize: 12, color: S.text2, marginTop: 16 }}>+150 XP for completing this lesson</p>
        </div>

        {/* Chart Section */}
        <section style={{ marginBottom: 48, borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>BLAST Token Price Chart</h2>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, overflow: 'hidden', height: 400 }}>
            <TradingViewChart symbol="BINANCE:BLASTUSDT" />
          </div>
        </section>

        {/* Learn More Links */}
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 16 }}>Learn More</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a href="https://docs.blast.io" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📄 Blast Documentation</a>
            <a href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📈 Auto-Rebasing Mechanics</a>
            <a href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>💬 Blast Community</a>
            <a href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📊 Blast Analytics & APY Calculator</a>
          </div>
        </div>
      </div>
    </div>
  );
}
