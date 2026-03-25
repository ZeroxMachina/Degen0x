'use client';

import Link from 'next/link';

export default function InitiaClient() {
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

  const primaryColor = '#4F46E5';

  return (
    <div style={{ background: S.bg, color: S.text, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: '16px 0', background: S.surface }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', paddingLeft: 24, paddingRight: 24 }}>
          <div style={{ fontSize: 14, color: S.text2 }}>
            <Link href="/" style={{ color: primaryColor, textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/ecosystem" style={{ color: primaryColor, textDecoration: 'none' }}>Ecosystem</Link>
            {' / Initia'}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, borderBottom: `1px solid ${S.border}`, padding: '60px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}><span aria-hidden="true">⚛️</span></div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            <span style={{ background: `${primaryColor}20`, color: primaryColor, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>L1 Blockchain</span>
            <span style={{ background: `${S.green}20`, color: S.green, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Modular Rollups</span>
            <span style={{ background: `${S.purple}20`, color: S.purple, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 700 }}>Cosmos SDK</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>Initia</h1>
          <p style={{ fontSize: '1.1rem', color: S.text2, maxWidth: 600 }}>Cosmos-based L1 orchestrating modular rollups and enabling seamless cross-chain liquidity through the OPinit Stack.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ padding: '40px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 20, marginBottom: 60 }}>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Total TVL</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: primaryColor }}>$300M+</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Consensus</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.green }}>Cosmos SDK</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Execution</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>Multi-VM</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Token</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.blue }}>INIT</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Status</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.green }}>Mainnet</div>
          </div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, padding: 24, borderRadius: 12 }}>
            <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Backed By</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: S.yellow }}>Binance Labs</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', paddingLeft: 24, paddingRight: 24, paddingBottom: 60 }}>
        {/* What Is Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>What is Initia?</h2>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            Initia is a Cosmos-based Layer 1 blockchain designed as an orchestration layer for modular rollups called Minitias. Founded in 2022 by Stan Liu and Ezaan Mangalji (both veterans from Terraform Labs), Initia combines the scalability benefits of rollups with the security and liquidity of a dedicated L1 orchestrator. The network launched mainnet in April 2025, backed by Binance Labs.
          </p>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7, marginBottom: 12 }}>
            Unlike traditional L1s that compete with L2s, Initia partners with them. The INIT token had its token generation event on April 24, 2025, with significant community engagement and ecosystem activity across multiple Minitias. Initia's architecture enables developers to deploy sovereign blockchains with custom VMs while maintaining shared security and liquidity bridges through the platform.
          </p>
          <p style={{ color: S.text2, fontSize: '1rem', lineHeight: 1.7 }}>
            With its multi-VM support (MoveVM, EVM, WasmVM), the OPinit Stack for native optimistic rollups, and Omnitia's liquidity layer, Initia positions itself as an infrastructure platform for the modular blockchain ecosystem. The network has achieved $300M+ in total value locked, demonstrating significant developer and user interest.
          </p>
        </section>

        {/* How It Works Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>How Initia Works</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                num: 1,
                title: 'L1 Orchestration',
                desc: 'Initia serves as the orchestration layer for Minitias, providing finality, security, and cross-chain coordination. Validators run Initia consensus while supporting rollup networks.'
              },
              {
                num: 2,
                title: 'Minitias - Sovereign Rollups',
                desc: 'Developers deploy custom rollups (Minitias) on Initia with their own business logic. Each Minitia can have custom execution, tokenomics, and governance while benefiting from Initia\'s security.'
              },
              {
                num: 3,
                title: 'OPinit Stack',
                desc: 'The native optimistic rollup framework powering Minitias. OPinit provides proven rollup infrastructure with fraud proofs, ensuring transaction validity without additional trust assumptions.'
              },
              {
                num: 4,
                title: 'Omnitia - Liquidity Bridge',
                desc: 'Omnitia acts as the liquidity and communication layer, enabling seamless asset transfers and messaging between Minitias and external chains. Ensures cross-chain composability.'
              },
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

        {/* Key Features */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              {
                title: 'Multi-VM Support',
                desc: 'Support for MoveVM, EVM, and WasmVM enables developers to choose their preferred execution environment. Deploy Move contracts, EVM smart contracts, or WebAssembly.',
              },
              {
                title: 'Interwoven Rollups',
                desc: 'Minitias share Initia\'s validator set and consensus mechanism, creating an interconnected rollup network with shared security and coordinated finality.',
              },
              {
                title: 'OPinit Stack',
                desc: 'Battle-tested optimistic rollup framework with fraud proofs. Developers can launch Minitias without implementing custom rollup infrastructure from scratch.',
              },
              {
                title: 'Enshrined Liquidity (Omnitia)',
                desc: 'Native bridging and liquidity protocols eliminate fragmentation. Assets flow seamlessly between Minitias and external chains with minimal friction.',
              },
              {
                title: 'Cosmos SDK Foundation',
                desc: 'Built on Cosmos SDK for IBC compatibility, state machine customization, and access to the broader Cosmos ecosystem.',
              },
              {
                title: 'Modular Architecture',
                desc: 'Each Minitia is sovereign and customizable. Developers control execution, settlement, and governance without permission from Initia core.',
              },
            ].map((feature, idx) => (
              <div key={idx} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 8, color: primaryColor }}>{feature.title}</h4>
                <p style={{ color: S.text2, fontSize: '0.95rem', margin: 0 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INIT Tokenomics Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>INIT Tokenomics</h2>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24, marginBottom: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
              <div>
                <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Token Symbol</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 900 }}>INIT</div>
              </div>
              <div>
                <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>TGE Date</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 900 }}>April 24, 2025</div>
              </div>
              <div>
                <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>Current Price</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 900, color: S.blue }}>~$0.09-0.13</div>
              </div>
              <div>
                <div style={{ color: S.text2, fontSize: 12, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>ATH</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 900, color: S.yellow }}>$1.43 (May 2025)</div>
              </div>
            </div>
          </div>
          <div style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 12, color: primaryColor }}>Token Use Cases</h4>
            <ul style={{ margin: 0, paddingLeft: 20, color: S.text2 }}>
              <li style={{ marginBottom: 8 }}>Governance of Initia protocol upgrades and network parameters</li>
              <li style={{ marginBottom: 8 }}>Staking for validator participation and Minitia sequencer selection</li>
              <li style={{ marginBottom: 8 }}>Transaction fees and economic settlement across Minitias</li>
              <li style={{ marginBottom: 8 }}>Incentive rewards for early Minitia contributors and ecosystem participants</li>
              <li>Securing cross-chain message passing through Omnitia</li>
            </ul>
          </div>
        </section>

        {/* Risks Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 16, borderLeft: `4px solid ${S.pink}`, paddingLeft: 16 }}>Risks & Considerations</h2>
          <ul style={{ margin: 0, paddingLeft: 20, color: S.text2 }}>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Early-Stage Network:</strong> Initia mainnet launched April 2025; long-term stability and adoption unproven. Limited historical data.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Execution Risk on Minitias:</strong> Quality, security, and success of individual Minitias varies. Poorly designed rollups could fail or lose funds.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Token Price Volatility:</strong> INIT peaked at $1.43 in May 2025 but trades much lower; significant drawdown risk. Founder dilution from token emissions.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Bridge Risk:</strong> Omnitia's cross-chain liquidity layer introduces smart contract and bridge security risks. Exploits could freeze or lose cross-chain assets.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Validator Centralization:</strong> Initia validators also secure Minitias; centralized validator set could impact network resilience.</li>
            <li style={{ marginBottom: 12 }}><strong style={{ color: S.text }}>Regulatory Uncertainty:</strong> Rollup platforms and the Cosmos ecosystem face unclear regulatory treatment in major jurisdictions.</li>
            <li><strong style={{ color: S.text }}>Competition:</strong> Competing L1/L2/modular platforms (Ethereum L2s, Cosmos, Polygon, Arbitrum) with larger networks and user bases.</li>
          </ul>
        </section>

        {/* Related Learning Links */}
        <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 16, color: primaryColor }}>Related Learning Paths</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link href="/learn/modular-blockchains-guide" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              → Modular Blockchains Guide
            </Link>
            <Link href="/learn/layer-2-scaling-guide" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              → Layer 2 Scaling Guide
            </Link>
            <Link href="/ecosystem/eigenlayer" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              → EigenLayer (Restaking)
            </Link>
            <Link href="/learn/restaking-eigenlayer-guide" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              → Restaking & EigenLayer Guide
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: 24, borderLeft: `4px solid ${primaryColor}`, paddingLeft: 16 }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              {
                q: 'What is the difference between Initia and Cosmos?',
                a: 'Initia is a Cosmos-based L1 focused on orchestrating modular rollups (Minitias). While Cosmos emphasizes sovereign app-chains connected via IBC, Initia emphasizes a unified orchestration layer with shared security and native bridging (Omnitia). Initia is optimized for rollup deployment, not general app-chains.'
              },
              {
                q: 'How does Initia differ from Ethereum L2s?',
                a: 'Initia uses Cosmos consensus and multi-VM support, whereas Ethereum L2s settle to Ethereum L1. Initia\'s Minitias are more customizable (custom execution, tokenomics, governance), but Ethereum offers deeper liquidity and adoption. Initia is newer and targets developers who want sovereign rollups with easier cross-chain composability.'
              },
              {
                q: 'What makes Minitias different from standalone rollups?',
                a: 'Minitias share Initia validators, consensus, and settlement, reducing validator/operator burden. Developers don\'t need to bootstrap security or manage their own DA layer. Omnitia provides native liquidity bridges, whereas standalone rollups require external bridges. Trade-off: less autonomy, more infrastructure.'
              },
              {
                q: 'Is INIT a good investment?',
                a: 'INIT is highly speculative and volatile (ATH $1.43, current ~$0.09-0.13). Initia\'s success depends on Minitia adoption, execution stability, and network growth—all unproven. Only invest what you can afford to lose. DYOR and understand modular blockchain risks before buying.'
              },
              {
                q: 'How do I use Initia?',
                a: 'Users typically interact with Minitias (rollups on Initia) rather than Initia directly. Users stake INIT to become validators, trade INIT on exchanges, or participate in Minitia governance. Developers deploy custom Minitias using the OPinit Stack. Transactions settle to Initia consensus and can bridge across chains via Omnitia.'
              },
            ].map((item, idx) => (
              <div key={idx} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 8, color: primaryColor }}>{item.q}</h4>
                <p style={{ color: S.text2, fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: '28px 32px', textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}><span aria-hidden="true">🚀</span></div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 8 }}>Explore Modular Rollups</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Discover how Initia enables developers to deploy sovereign blockchains with shared security and liquidity.</p>
          <a href="https://initia.xyz" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: primaryColor, color: '#fff', padding: '12px 28px', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: 14 }}>
            Visit Initia →
          </a>
          <p style={{ fontSize: 12, color: S.text2, marginTop: 16 }}>+150 XP for completing this lesson</p>
        </div>

        {/* Learn More Links */}
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: 16 }}>Learn More</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a href="https://docs.initia.xyz" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>📄 Initia Documentation</a>
            <a href="https://github.com/initia-labs" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>🔧 Initia GitHub</a>
            <a href="https://twitter.com/InitiaFoundation" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>💬 Initia Twitter</a>
            <a href="https://discord.gg/initia" target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none', fontSize: 14 }}>🎯 Initia Discord Community</a>
          </div>
        </div>
      </div>
    </div>
  );
}
