'use client';

import Link from 'next/link';

export default function LorenzoProtocolPage() {
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

  const primaryColor = '#2A9D8F';

  return (
    <div style={{ background: S.bg, color: S.text, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: '16px 0', background: S.surface }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', paddingLeft: 24, paddingRight: 24 }}>
          <div style={{ fontSize: 14, color: S.text2 }}>
            <Link href="/" style={{ color: primaryColor, textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/ecosystem" style={{ color: primaryColor, textDecoration: 'none' }}>Ecosystem</Link>
            {' / Lorenzo Protocol'}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, borderBottom: `1px solid ${S.border}`, padding: '60px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🔶</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ background: `${primaryColor}20`, color: primaryColor, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Bitcoin Staking</span>
            <span style={{ background: `${S.green}20`, color: S.green, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Liquid Staking</span>
            <span style={{ background: `${S.purple}20`, color: S.purple, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>DeFi</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>Lorenzo Protocol</h1>
          <p style={{ fontSize: '1.1rem', color: S.text2, maxWidth: 600 }}>Bitcoin liquid staking protocol for DeFi participation and yield generation.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ padding: '40px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 60 }}>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Total Value Locked</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: primaryColor }}>$600M</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Token</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.green }}>BANK</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Staking APR</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>~4-7%</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Liquid Token</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.orange }}>stBTC</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>DeFi Compatible</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>Multi-Chain</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Community Rating</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.yellow }}>⭐ 4.4</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', paddingLeft: 24, paddingRight: 24, paddingBottom: 60 }}>
        {/* What Is Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>What is Lorenzo Protocol?</h2>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            Lorenzo Protocol is a Bitcoin liquid staking infrastructure that brings Bitcoin into the DeFi ecosystem. Users deposit Bitcoin and receive stBTC, a liquid token representing their Bitcoin staking position. Unlike Babylon's native Bitcoin staking, Lorenzo creates a wrapped staking asset that can be used across DeFi platforms.
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
            Lorenzo's stBTC is designed to be composable with DeFi protocols—you can use it as collateral, provide liquidity, or earn additional yield on layer 2 platforms. The underlying Bitcoin is secured through a combination of restaking and distributed validator networks.
          </p>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7 }}>
            This enables Bitcoin holders to participate in the full DeFi yield ecosystem while maintaining Bitcoin security guarantees. Lorenzo targets DeFi-native users who want Bitcoin exposure with composability.
          </p>
        </section>

        {/* Key Features */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              {
                title: 'Liquid stBTC Token',
                desc: 'Tradeable and composable Bitcoin staking token for DeFi use. Maintain Bitcoin exposure while earning.',
              },
              {
                title: 'Multi-Chain Deployment',
                desc: 'stBTC deployed across Ethereum, Solana, and other chains through bridges, enabling cross-chain DeFi.',
              },
              {
                title: 'DeFi Composability',
                desc: 'Use stBTC as collateral, in lending protocols, AMMs, yield farming—full DeFi ecosystem access.',
              },
              {
                title: 'Bitcoin Security',
                desc: 'Underlying Bitcoin secured through distributed validation and cryptographic proof mechanisms.',
              },
              {
                title: 'Auto-Compounding Rewards',
                desc: 'Staking rewards automatically compound within your stBTC balance over time.',
              },
              {
                title: 'Governance Token (BANK)',
                desc: 'BANK token holders govern protocol economics, fee structure, and validator selection.',
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How to Use Lorenzo Protocol</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { num: 1, title: 'Mint stBTC', desc: 'Visit lorenzo-protocol.xyz and connect your Bitcoin wallet (or Ethereum for stBTC swap).' },
              { num: 2, title: 'Deposit Bitcoin', desc: 'Deposit native BTC or bridge BTCB/WBTC to receive stBTC at a 1:1 ratio.' },
              { num: 3, title: 'Use in DeFi', desc: 'Trade stBTC on DEXes, use as collateral, or stake in yield farming opportunities.' },
              { num: 4, title: 'Earn Staking Rewards', desc: 'Your stBTC earns Bitcoin staking rewards. Redeem anytime for native BTC.' },
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

        {/* Risks Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${S.pink}`, paddingLeft: 16 }}>Risks & Considerations</h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: S.text2 }}>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Smart Contract Risk:</strong> stBTC wrapping and bridge mechanisms increase surface area for vulnerabilities.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Custody Risk:</strong> Bitcoin held across multiple chains and validators creates concentration risks.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Bridge Risk:</strong> Cross-chain stBTC transfers rely on bridge security; bridge hacks would impact all users.</li>
            <li><strong style={{ color: S.text }}>Liquidity Risk:</strong> stBTC DeFi positions may have insufficient liquidity for large exits; slippage can be high.</li>
          </ul>
        </section>

        {/* CTA Banner */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>💰</div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 8 }}>Bitcoin DeFi Composability</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Stake Bitcoin and participate in the DeFi ecosystem with stBTC.</p>
          <a href="https://lorenzo-protocol.xyz" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: primaryColor, color: '#fff', padding: '12px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            Open Lorenzo →
          </a>
          <p style={{ fontSize: 12, color: S.text2, marginTop: 16 }}>+150 XP for completing this lesson</p>
        </div>

        {/* Learn More Links */}
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 16 }}>Learn More</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a href="https://docs.lorenzo-protocol.xyz" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📄 Lorenzo Documentation</a>
            <a href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>🔗 stBTC Integration Guide</a>
            <a href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>💬 Lorenzo Community</a>
            <a href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📊 Lorenzo Analytics</a>
          </div>
        </div>
      </div>
    </div>
  );
}
