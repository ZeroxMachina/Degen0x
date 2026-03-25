'use client';

import Link from 'next/link';

export default function MonadPage() {
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

  const primaryColor = '#7C3AED';

  return (
    <div style={{ background: S.bg, color: S.text, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: '16px 0', background: S.surface }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', paddingLeft: 24, paddingRight: 24 }}>
          <div style={{ fontSize: 14, color: S.text2 }}>
            <Link href="/" style={{ color: primaryColor, textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/ecosystem" style={{ color: primaryColor, textDecoration: 'none' }}>Ecosystem</Link>
            {' / Monad'}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, borderBottom: `1px solid ${S.border}`, padding: '60px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🟣</div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ background: `${primaryColor}20`, color: primaryColor, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>L1 Blockchain</span>
            <span style={{ background: `${S.green}20`, color: S.green, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Parallel EVM</span>
            <span style={{ background: `${S.purple}20`, color: S.purple, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>High TPS</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>Monad</h1>
          <p style={{ fontSize: '1.1rem', color: S.text2, maxWidth: 600 }}>Parallel-execution L1 EVM blockchain achieving 10,000+ TPS through novel consensus.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ padding: '40px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 60 }}>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Target TPS</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: primaryColor }}>10,000+</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Consensus</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.green }}>Novel</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Execution</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>Parallel</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>EVM Compatible</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.orange }}>100%</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Status</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>Devnet</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Community Rating</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.yellow }}>⭐ 4.7</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', paddingLeft: 24, paddingRight: 24, paddingBottom: 60 }}>
        {/* What Is Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>What is Monad?</h2>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            Monad is a groundbreaking L1 blockchain that achieves 10,000+ TPS through parallel-execution EVM architecture. Unlike traditional blockchains that execute transactions sequentially (one after another), Monad identifies independent transactions and executes them in parallel on multiple cores, dramatically increasing throughput while maintaining full EVM compatibility.
          </p>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            Monad's novel consensus mechanism combines fast finality with efficient security. By leveraging parallel execution, Monad reduces the need for Layer 2 solutions for many DeFi applications, offering mainnet-like security with L2-like throughput. Every Ethereum contract runs unchanged on Monad.
          </p>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7 }}>
            Monad targets DeFi protocols and applications requiring high throughput without sacrificing decentralization or security. Currently in devnet, mainnet launch is highly anticipated.
          </p>
        </section>

        {/* Key Features */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              {
                title: 'Parallel Execution Engine',
                desc: 'Executes independent transactions concurrently; dependent transactions ordered via DAG.',
              },
              {
                title: 'Full EVM Compatibility',
                desc: 'Run any Ethereum contract without modification; deploy existing apps with zero changes.',
              },
              {
                title: '10K+ TPS Throughput',
                desc: 'Achieves high throughput while maintaining proof-of-stake security and fast finality.',
              },
              {
                title: 'Novel Consensus Design',
                desc: 'Optimized consensus mechanisms for fast finality combined with efficient validator requirements.',
              },
              {
                title: 'Low Latency',
                desc: 'Sub-second block times enable low-latency trading and real-time applications.',
              },
              {
                title: 'Developer-Friendly',
                desc: 'Same tooling, RPC, and workflows as Ethereum; minimal learning curve for developers.',
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How to Use Monad</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { num: 1, title: 'Access Devnet/Testnet', desc: 'Join Monad devnet to test applications; request testnet tokens from faucet.' },
              { num: 2, title: 'Deploy or Bridge Contracts', desc: 'Deploy existing Ethereum contracts or bridge assets for testing.' },
              { num: 3, title: 'Interact with dApps', desc: 'Use existing DeFi applications running on Monad testnet or deploy your own.' },
              { num: 4, title: 'Prepare for Mainnet', desc: 'When mainnet launches, migrate your assets and applications seamlessly.' },
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
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Not Yet Launched:</strong> Monad is still in devnet; mainnet is not live. Timelines are uncertain.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Novel Technology Risk:</strong> Parallel execution and novel consensus are untested at scale; unexpected bugs possible.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Regulatory Uncertainty:</strong> As a new L1 blockchain, regulatory status in various jurisdictions is unclear.</li>
            <li><strong style={{ color: S.text }}>Competition:</strong> Many high-throughput L1s and L2s exist; network effects are uncertain.</li>
          </ul>
        </section>

        {/* CTA Banner */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>⚡</div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 8 }}>Experience Parallel Execution</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Test high-throughput DeFi on Monad devnet with full EVM compatibility.</p>
          <a href="https://monad.xyz" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: primaryColor, color: '#fff', padding: '12px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            Learn More About Monad →
          </a>
          <p style={{ fontSize: 12, color: S.text2, marginTop: 16 }}>+150 XP for completing this lesson</p>
        </div>

        {/* Learn More Links */}
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 16 }}>Learn More</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a href="https://docs.monad.xyz" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📄 Monad Documentation</a>
            <a href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>⚙️ Parallel Execution Guide</a>
            <a href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>💬 Monad Community</a>
            <a href="#" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>🔗 Devnet Faucet</a>
          </div>
        </div>
      </div>
    </div>
  );
}
