'use client';

import Link from 'next/link';
import TradingViewChart from "@/components/TradingViewChart";

export default function SonicFinancePage() {
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

  const primaryColor = '#00FF88';

  return (
    <div style={{ background: S.bg, color: S.text, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: '16px 0', background: S.surface }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', paddingLeft: 24, paddingRight: 24 }}>
          <div style={{ fontSize: 14, color: S.text2 }}>
            <Link href="/" style={{ color: primaryColor, textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/ecosystem" style={{ color: primaryColor, textDecoration: 'none' }}>Ecosystem</Link>
            {' / Sonic SVM'}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, borderBottom: `1px solid ${S.border}`, padding: '60px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>⚡</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ background: `${primaryColor}20`, color: primaryColor, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Gaming</span>
            <span style={{ background: `${S.green}20`, color: S.green, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>SVM</span>
            <span style={{ background: `${S.purple}20`, color: S.purple, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>High-Performance</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>Sonic SVM</h1>
          <p style={{ fontSize: '1.1rem', color: S.text2, maxWidth: 600 }}>High-performance gaming chain built on Solana Virtual Machine with optimized UX.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ padding: '40px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 60 }}>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Total Value Locked</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: primaryColor }}>$500M</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Token</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.green }}>SONIC</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>TPS</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>65K+</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Avg Block Time</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.orange }}>~400ms</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Focus</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>Gaming</div>
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>What is Sonic SVM?</h2>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            Sonic is a high-performance SVM (Solana Virtual Machine) chain specialized for gaming and consumer applications. While Solana mainnet handles general-purpose DeFi, Sonic optimizes specifically for gaming UX: lower latency, custom game modules, and streamlined onboarding for web3 games.
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
            Built on Solana infrastructure, Sonic inherits Solana's high throughput (65K+ TPS) and low fees while adding game-specific optimizations. Developers can build MMOs, turn-based games, and interactive dApps with user experience comparable to web2 games but with full blockchain properties.
          </p>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7 }}>
            Sonic is ideal for game developers and players seeking blockchain-based games with traditional game feel and speed.
          </p>
        </section>

        {/* Key Features */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              {
                title: 'Ultra-Low Latency',
                desc: '~400ms average block time enables real-time gaming interactions without felt delay.',
              },
              {
                title: 'High Throughput',
                desc: '65K+ TPS supports thousands of concurrent game transactions without congestion.',
              },
              {
                title: 'Game-Specific Modules',
                desc: 'Custom virtual machine modules for game state management and physics simulation.',
              },
              {
                title: 'Interoperable Games',
                desc: 'Games on Sonic can interoperate with each other and Solana mainnet DeFi.',
              },
              {
                title: 'Optimized Fees',
                desc: 'Sub-cent transaction fees enable high-frequency in-game micropayments and trades.',
              },
              {
                title: 'Web3 Gaming UX',
                desc: 'Streamlined onboarding with wallet integration and game-focused account abstractions.',
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How to Use Sonic SVM</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { num: 1, title: 'Set Up Gaming Wallet', desc: 'Create or import a Solana wallet on Sonic chain (supports Phantom, Backpack, etc.).' },
              { num: 2, title: 'Bridge Assets', desc: 'Bridge SOL or USDC from Solana mainnet to Sonic for gaming capital.' },
              { num: 3, title: 'Play Games', desc: 'Discover Sonic games on the ecosystem portal and start playing with on-chain assets.' },
              { num: 4, title: 'Trade & Earn', desc: 'Buy/sell in-game items, trade game tokens, and stake in gaming protocols.' },
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
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Game Risk:</strong> Many Sonic games are early-stage; games can fail or shut down unexpectedly.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Token Volatility:</strong> In-game tokens and SONIC are volatile; gaming earnings can lose value quickly.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Chain Risk:</strong> Sonic as a specialized L2 has less battle-testing than mature chains.</li>
            <li><strong style={{ color: S.text }}>Liquidity Risk:</strong> Game tokens may have limited exit liquidity, making it hard to convert to stablecoins.</li>
          </ul>
        </section>

        {/* CTA Banner */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🎮</div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 8 }}>Play Web3 Games at Web2 Speed</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Experience blockchain gaming with ultra-low latency on Sonic SVM.</p>
          <a href="https://sonic.fan" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: primaryColor, color: '#000', padding: '12px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            Open Sonic →
          </a>
          <p style={{ fontSize: 12, color: S.text2, marginTop: 16 }}>+150 XP for completing this lesson</p>
        </div>

        {/* Chart Section */}
        <section style={{ marginBottom: 48, borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>SONIC Token Price Chart</h2>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, overflow: 'hidden', height: 400 }}>
            <TradingViewChart symbol="BINANCE:SONICUSDT" />
          </div>
        </section>

        {/* Learn More Links */}
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 16 }}>Learn More</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a href="https://docs.sonic.fan" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📄 Sonic Documentation</a>
            <a href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>🎮 Game Developers Guide</a>
            <a href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>💬 Sonic Community</a>
            <a href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📊 Sonic Games Directory</a>
          </div>
        </div>
      </div>
    </div>
  );
}
