import { Metadata } from "next";
import Link from 'next/link';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'MEV Supply Chain & Proposer-Builder Separation (PBS) | degen0x Learn Guide',
  description: 'Comprehensive guide to MEV supply chain, PBS infrastructure, builder/relay markets, and enshrined PBS (EIP-7732). Understand the future of block production on Ethereum.',
  keywords: 'MEV, proposer-builder separation, PBS, EIP-7732, ePBS, Ethereum, builders, relays, validators',
  authors: [{ name: 'degen0x' }],
  openGraph: {
    title: 'MEV Supply Chain & Proposer-Builder Separation (PBS)',
    description: 'Deep dive into MEV supply chain dynamics, current builder/relay markets, and the upcoming enshrined PBS upgrade.',
    url: 'https://degen0x.com/learn/mev-supply-chain-proposer-builder-separation-pbs-guide-2026',
    siteName: 'degen0x',
    images: [
      {
        url: 'https://degen0x.com/og-mev-pbs-2026.jpg',
        width: 1200,
        height: 630,
        alt: 'MEV Supply Chain & PBS Guide',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEV Supply Chain & Proposer-Builder Separation (PBS)',
    description: 'Understand the MEV supply chain, builder/relay markets, and the future of PBS on Ethereum.',
    image: 'https://degen0x.com/og-mev-pbs-2026.jpg',
  },
  canonical: 'https://degen0x.com/learn/mev-supply-chain-proposer-builder-separation-pbs-guide-2026',
  alternates: {
    canonical: 'https://degen0x.com/learn/mev-supply-chain-proposer-builder-separation-pbs-guide-2026',
  }
};
const DARK_COLORS = {
  bg: '#0d1117',
  text: '#e6edf3',
  secondary: '#8b949e',
  link: '#58a6ff',
  card: '#161b22',
  border: '#30363d',
}
const GRADIENT_H1 = 'linear-gradient(135deg, #6366f1, #06b6d4)';

export default function MEVPBSGuide() {
  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${DARK_COLORS.card}; }
        ::-webkit-scrollbar-thumb { background: ${DARK_COLORS.border}; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: ${DARK_COLORS.secondary}; }
        .toc-link { transition: opacity 0.2s; }
        .toc-link:hover { opacity: 0.8; }
        .related-guide { transition: all 0.2s; }
        .related-guide:hover { border-color: ${DARK_COLORS.link}; background-color: ${DARK_COLORS.border}; }
      `}</style>

      <main style={{ backgroundColor: DARK_COLORS.bg, color: DARK_COLORS.text, minHeight: '100vh', padding: '40px 20px' }}>
        <article style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
            <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 6px' }}>›</span>
            <Link href="/learn" style={{ color: '#8b949e', textDecoration: 'none' }}>Learn</Link>
            <span style={{ margin: '0 6px' }}>›</span>
            <span style={{ color: '#c9d1d9' }}>MEV Supply Chain &amp; Proposer-Builder Separation</span>
          </nav>

          {/* Header */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{
                backgroundColor: '#4f46e5',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
    >Infrastructure</span>
              <span style={{
                backgroundColor: '#a855f7',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
    >Advanced</span>
              <span style={{
                backgroundColor: DARK_COLORS.card,
                color: DARK_COLORS.secondary,
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.875rem',
              }}
    >Updated April 2026 • 15 min read</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '700',
              marginBottom: '16px',
              background: GRADIENT_H1,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
    >MEV Supply Chain & Proposer-Builder Separation</h1>

            <p style={{
              fontSize: '1.25rem',
              color: DARK_COLORS.secondary,
              marginBottom: '24px',
              lineHeight: '1.6'
            }}
    >
              Understand how maximal extractable value flows through Ethereum&apos;s block production network, the centralization risks of current PBS infrastructure, and how enshrined PBS (EIP-7732) will reshape the ecosystem.
            </p>
          </div>

          {/* Table of Contents */}
          <div style={{
            backgroundColor: DARK_COLORS.card,
            border: `1px solid ${DARK_COLORS.border}`,
            borderRadius: '8px',
            padding: '24px',
            marginBottom: '40px'
          }}
    >
            <h2 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: '600' }}>Table of Contents</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
              {[
                { id: 'mev-supply-chain', label: 'The MEV Supply Chain' },
                { id: 'mev-types', label: 'MEV Types & Economics' },
                { id: 'builder-market', label: 'Builder Market (April 2026)' },
                { id: 'relay-market', label: 'Relay Market (April 2026)' },
                { id: 'enshrined-pbs', label: 'Enshrined PBS (EIP-7732)' },
                { id: 'risks-benefits', label: 'Risks & Benefits' },
                { id: 'faq', label: 'FAQ' }
              ].map(item => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="toc-link" style={{
                    color: DARK_COLORS.link,
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'opacity 0.2s'
                  }}
    >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 1: MEV Supply Chain */}
          <section id="mev-supply-chain" style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)',
              fontWeight: '700',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: `2px solid ${DARK_COLORS.border}`
            }}
    >The MEV Supply Chain</h2>

            <div style={{ marginBottom: '24px' }}>
              <p style={{ marginBottom: '16px', lineHeight: '1.8', fontSize: '1.05rem' }}>
                The MEV supply chain is a vertically integrated network where value flows from users to searchers, builders, relays, and finally proposers/validators. This supply chain has emerged post-merge as a critical infrastructure layer that now mediates ~90% of Ethereum blocks.
              </p>

              <div style={{
                backgroundColor: DARK_COLORS.card,
                border: `1px solid ${DARK_COLORS.border}`,
                borderRadius: '8px',
                padding: '24px',
                marginBottom: '24px'
              }}
    >
                <h3 style={{ marginBottom: '16px', fontWeight: '600' }}>Supply Chain Participants:</h3>
                <div style={{ display: 'grid', gap: '16px' }}>
                  {[
                    { title: 'Users', desc: 'Submit transactions; unknowingly source MEV opportunities' },
                    { title: 'Searchers', desc: 'Identify profitable opportunities (arbitrage, sandwiching, liquidations); submit bundles to builders' },
                    { title: 'Builders', desc: 'Assemble optimal blocks from bundles + mempool transactions; seal and submit to relays' },
                    { title: 'Relays', desc: 'Validate blocks; manage communications between builders and proposers; enforce censorship policies' },
                    { title: 'Proposers/Validators', desc: 'Select highest-paying block; include in consensus chain' }
                  ].map((item, i) => (
                    <div key={i} style={{ borderLeft: `3px solid ${DARK_COLORS.link}`, paddingLeft: '16px' }}>
                      <strong style={{ color: DARK_COLORS.text }}>{item.title}</strong>
                      <p style={{ color: DARK_COLORS.secondary, marginTop: '4px', fontSize: '0.95rem' }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="learn"
        />


              <div style={{
                backgroundColor: '#1a2332',
                border: '1px solid #2d5a8a',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '24px'
              }}
    >
                <p style={{ margin: 0, fontSize: '0.95rem', color: DARK_COLORS.text }}>
                  <strong>Key Stat:</strong> Total MEV extracted post-merge (Sep 2022 – Jun 2024): <strong style={{ color: '#06b6d4' }}>526,207 ETH</strong> (~$2.1B at $4K/ETH). MEV-Boost infrastructure now mediates roughly <strong>90% of Ethereum blocks</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: MEV Types */}
          <section id="mev-types" style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)',
              fontWeight: '700',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: `2px solid ${DARK_COLORS.border}`
            }}
    >MEV Types & Economics</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {[
                {
                  title: 'Arbitrage (Most Common)',
                  desc: 'Exploiting price discrepancies across DEXs. Searchers pay 90%+ of MEV extraction in gas fees.',
                  example: 'Buy USDC on Uniswap v2 @ $0.999, sell on Uniswap v3 @ $1.001'
                },
                {
                  title: 'Sandwich Attacks',
                  desc: 'Front-run + back-run transactions. Place order before victim, profit from slippage, then exit.',
                  example: 'Detect large swap, front-run to increase price, user swaps at worse rate, attacker exits'
                },
                {
                  title: 'Liquidations',
                  desc: 'Monitoring lending protocols (Aave, Compound). Execute liquidations when collateral ratios breach thresholds.',
                  example: 'ETH price drops 15%; borrower becomes underwater; searcher liquidates and captures liquidation premium'
                },
                {
                  title: 'Just-in-Time (JIT) Liquidity',
                  desc: 'Provide liquidity just before a swap executes, capture fees, then exit within same block.',
                  example: 'Flashbot Bundles: add liquidity → user swap → remove liquidity (all atomic)'
                }
              ].map((item, i) => (
                <div key={i} style={{
                  backgroundColor: DARK_COLORS.card,
                  border: `1px solid ${DARK_COLORS.border}`,
                  borderRadius: '8px',
                  padding: '20px'
                }}
    >
                  <h3 style={{ marginBottom: '8px', fontWeight: '600', color: DARK_COLORS.text }}>{item.title}</h3>
                  <p style={{ color: DARK_COLORS.secondary, fontSize: '0.9rem', marginBottom: '12px' }}>{item.desc}</p>
                  <div style={{ backgroundColor: DARK_COLORS.bg, padding: '12px', borderRadius: '4px', fontSize: '0.85rem', color: '#06b6d4', fontFamily: 'monospace' }}>
                    {item.example}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Builder Market */}
          <section id="builder-market" style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)',
              fontWeight: '700',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: `2px solid ${DARK_COLORS.border}`
            }}
    >Builder Market (April 2026)</h2>

            <p style={{ marginBottom: '24px', lineHeight: '1.8', color: DARK_COLORS.secondary }}>
              The builder market exhibits extreme concentration. Titan and BuilderNet control 76%+ of block production, raising censorship and centralization concerns.
            </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Understanding this concept is a prerequisite for making informed decisions in DeFi. Most losses in crypto come from misunderstanding the fundamentals.
          </p>
        </div>

            <div style={{
              backgroundColor: DARK_COLORS.card,
              border: `1px solid ${DARK_COLORS.border}`,
              borderRadius: '8px',
              padding: '24px',
              marginBottom: '24px',
              overflowX: 'auto'
            }}
    >
              <h3 style={{ marginBottom: '16px', fontWeight: '600' }}>Builder Market Share &amp; Block Profits</h3>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.95rem'
              }}
    >
                <thead>
                  <tr style={{ borderBottom: `1px solid ${DARK_COLORS.border}` }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: DARK_COLORS.text }}>Builder</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: DARK_COLORS.text }}>Market Share</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: DARK_COLORS.text }}>Blocks</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: DARK_COLORS.text }}>Avg Profit/Block</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Titan', share: '52.16%', blocks: '3,437', profit: '72.99 ETH' },
                    { name: 'BuilderNet', share: '24.63%', blocks: '1,623', profit: '9.55 ETH' },
                    { name: 'Quasar', share: '15.06%', blocks: '992', profit: '5.20 ETH' },
                    { name: 'Eureka', share: '2.41%', blocks: '159', profit: '2.10 ETH' },
                    { name: 'Beaverbuild', share: '1.81%', blocks: '119', profit: '1.85 ETH' }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${DARK_COLORS.border}` }}>
                      <td style={{ padding: '12px', color: DARK_COLORS.text, fontWeight: '500' }}>{row.name}</td>
                      <td style={{ padding: '12px', color: DARK_COLORS.link }}><strong>{row.share}</strong></td>
                      <td style={{ padding: '12px', color: DARK_COLORS.secondary }}>{row.blocks}</td>
                      <td style={{ padding: '12px', color: DARK_COLORS.secondary }}>{row.profit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{
              backgroundColor: DARK_COLORS.card,
              border: `1px solid ${DARK_COLORS.border}`,
              borderRadius: '8px',
              padding: '24px',
              marginBottom: '24px'
            }}
    >
              <h3 style={{ marginBottom: '16px', fontWeight: '600' }}>Key Builder Insights:</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '12px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: DARK_COLORS.link, fontWeight: 'bold', minWidth: '20px' }}>•</span>
                  <span><strong>Titan Dominance:</strong> 52.16% market share partly driven by exclusive order flow deal with Banana Gun (MEV searcher). Highest block profit average (72.99 ETH).</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: DARK_COLORS.link, fontWeight: 'bold', minWidth: '20px' }}>•</span>
                  <span><strong>BuilderNet Launch:</strong> Launched Nov 2024 by Flashbots + Beaverbuild + Nethermind. Decentralized builder using Trusted Execution Environments (TEEs) to enhance privacy.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: DARK_COLORS.link, fontWeight: 'bold', minWidth: '20px' }}>•</span>
                  <span><strong>Profit Disparity:</strong> Titan&apos;s profit 7.6x higher than BuilderNet, indicating significant competitive advantages (order flow, latency, optimization algorithms).</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: DARK_COLORS.link, fontWeight: 'bold', minWidth: '20px' }}>•</span>
                  <span><strong>Centralization Risk:</strong> Top 2 builders control 76.79% of block production; high barrier to entry due to capital, infrastructure, and order flow requirements.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Relay Market */}
          <section id="relay-market" style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)',
              fontWeight: '700',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: `2px solid ${DARK_COLORS.border}`
            }}
    >Relay Market (April 2026)</h2>

            <p style={{ marginBottom: '24px', lineHeight: '1.8', color: DARK_COLORS.secondary }}>
              Relays are critical infrastructure that validate blocks and enforce consensus rules, but the market shows dangerous centralization: only 4 relay operators control 95%+ of market share, and relays operate as unprofitable public goods.
            </p>

            <div style={{
              backgroundColor: DARK_COLORS.card,
              border: `1px solid ${DARK_COLORS.border}`,
              borderRadius: '8px',
              padding: '24px',
              marginBottom: '24px',
              overflowX: 'auto'
            }}
    >
              <h3 style={{ marginBottom: '16px', fontWeight: '600' }}>Relay Market Share &amp; Latency (April 2026)</h3>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.95rem'
              }}
    >
                <thead>
                  <tr style={{ borderBottom: `1px solid ${DARK_COLORS.border}` }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: DARK_COLORS.text }}>Relay</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: DARK_COLORS.text }}>Market Share</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: DARK_COLORS.text }}>Latency</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600', color: DARK_COLORS.text }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Ultrasound', share: '33.92%', latency: '1ms', status: 'Optimized' },
                    { name: 'Titan Relay', share: '24.19%', latency: '3ms', status: 'Competitive' },
                    { name: 'bloXroute Max-Profit', share: '14.67%', latency: '3ms', status: 'High-perf' },
                    { name: 'Aestus', share: '10.03%', latency: '190ms', status: 'MEV-burn' },
                    { name: 'bloXroute Regulated', share: '9.07%', latency: '5ms', status: 'Compliant' },
                    { name: 'Flashbots', share: '4.22%', latency: '279ms', status: 'Conservative' },
                    { name: 'Agnostic', share: '3.22%', latency: '150ms', status: 'Neutral' }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${DARK_COLORS.border}` }}>
                      <td style={{ padding: '12px', color: DARK_COLORS.text, fontWeight: '500' }}>{row.name}</td>
                      <td style={{ padding: '12px', color: DARK_COLORS.link }}><strong>{row.share}</strong></td>
                      <td style={{ padding: '12px', color: DARK_COLORS.secondary }}>{row.latency}</td>
                      <td style={{ padding: '12px', color: DARK_COLORS.secondary }}>{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{
              backgroundColor: DARK_COLORS.card,
              border: `1px solid ${DARK_COLORS.border}`,
              borderRadius: '8px',
              padding: '24px'
            }}
    >
              <h3 style={{ marginBottom: '16px', fontWeight: '600' }}>Key Relay Insights:</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '12px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: DARK_COLORS.link, fontWeight: 'bold', minWidth: '20px' }}>•</span>
                  <span><strong>Market Concentration:</strong> Only 4 relays (Ultrasound, Titan Relay, bloXroute, Aestus) control 82.81% of market share.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: DARK_COLORS.link, fontWeight: 'bold', minWidth: '20px' }}>•</span>
                  <span><strong>Latency Matters:</strong> Ultrasound dominates with 1ms latency; Flashbots lags at 279ms, contributing to lower market share.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: DARK_COLORS.link, fontWeight: 'bold', minWidth: '20px' }}>•</span>
                  <span><strong>Economics Problem:</strong> Relays are unprofitable public goods—no direct revenue model. Operators absorb infrastructure costs for ecosystem benefit.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: DARK_COLORS.link, fontWeight: 'bold', minWidth: '20px' }}>•</span>
                  <span><strong>Regulatory Compliance:</strong> bloXroute Regulated and Flashbots enforce OFAC compliance, creating potential censorship vectors.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5: Enshrined PBS */}
          <section id="enshrined-pbs" style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)',
              fontWeight: '700',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: `2px solid ${DARK_COLORS.border}`
            }}
    >Enshrined PBS (EIP-7732)</h2>

            <p style={{ marginBottom: '24px', lineHeight: '1.8', color: DARK_COLORS.secondary }}>
              Enshrined PBS (ePBS) brings proposer-builder separation into the Ethereum protocol layer. Currently a headliner for the Glamsterdam upgrade (targeted for 2026), EIP-7732 eliminates the need for external relays and external validators.
            </p>

            <div style={{
              backgroundColor: '#1a2f2f',
              border: '1px solid #2d5a5a',
              borderRadius: '8px',
              padding: '24px',
              marginBottom: '24px'
            }}
    >
              <h3 style={{ marginBottom: '16px', fontWeight: '600' }}>How Enshrined PBS Works:</h3>
              <ol style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '16px' }}>
                {[
                  { step: '1', title: 'Builders Prepare', desc: 'Builders assemble blocks from searcher bundles + mempool txs. Cryptographically seal contents.' },
                  { step: '2', title: 'Proposers Choose', desc: 'Proposers receive block headers + commitments. Select highest-paying block WITHOUT seeing inside.' },
                  { step: '3', title: 'Consensus Inclusion', desc: 'Selected block included in consensus chain. Transaction contents revealed only after finalization.' },
                  { step: '4', title: 'Inclusion Lists', desc: 'Proposers maintain Inclusion Lists (EIP-7547) to enforce censorship-resistant transaction inclusion.' }
                ].map(item => (
                  <li key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      backgroundColor: DARK_COLORS.link,
                      color: DARK_COLORS.bg,
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}
    >{item.step}</div>
                    <div>
                      <strong style={{ color: DARK_COLORS.text, display: 'block', marginBottom: '4px' }}>{item.title}</strong>
                      <p style={{ color: DARK_COLORS.secondary, margin: 0, fontSize: '0.95rem' }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div style={{
              backgroundColor: DARK_COLORS.card,
              border: `1px solid ${DARK_COLORS.border}`,
              borderRadius: '8px',
              padding: '24px'
            }}
    >
              <h3 style={{ marginBottom: '16px', fontWeight: '600' }}>ePBS Benefits:</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '12px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#06b6d4', fontWeight: 'bold', minWidth: '20px' }}>✓</span>
                  <span><strong>Protocol-Level Trust:</strong> No external relay trust assumptions; security guaranteed by consensus.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#06b6d4', fontWeight: 'bold', minWidth: '20px' }}>✓</span>
                  <span><strong>Sealed Block Contents:</strong> Builders&apos; secrets remain hidden from proposers until after finalization, reducing front-running.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#06b6d4', fontWeight: 'bold', minWidth: '20px' }}>✓</span>
                  <span><strong>Censorship Resistance:</strong> Inclusion Lists force builders to include transactions, combating OFAC compliance.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#06b6d4', fontWeight: 'bold', minWidth: '20px' }}>✓</span>
                  <span><strong>Reduced Relay Centralization:</strong> Eliminates need for external relay layer; decreases reliance on small set of operators.</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#06b6d4', fontWeight: 'bold', minWidth: '20px' }}>✓</span>
                  <span><strong>Fairer MEV Distribution:</strong> Builders compete on fair basis; eliminates exclusive order flow advantages.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6: Risks & Benefits */}
          <section id="risks-benefits" style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)',
              fontWeight: '700',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: `2px solid ${DARK_COLORS.border}`
            }}
    >Risks, Challenges & Benefits</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              <div style={{
                backgroundColor: DARK_COLORS.card,
                border: `1px solid ${DARK_COLORS.border}`,
                borderRadius: '8px',
                padding: '24px'
              }}
    >
                <h3 style={{ marginBottom: '16px', fontWeight: '600', color: '#ff6b6b' }}>Current PBS Risks</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '12px' }}>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#ff6b6b', fontWeight: 'bold', minWidth: '20px' }}>⚠</span>
                    <span><strong>Builder Centralization:</strong> Titan + BuilderNet control 76%+ of blocks; high barriers to entry.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#ff6b6b', fontWeight: 'bold', minWidth: '20px' }}>⚠</span>
                    <span><strong>Relay Centralization:</strong> 4 relays control 95%+ of market; unprofitable, at risk of shutting down.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#ff6b6b', fontWeight: 'bold', minWidth: '20px' }}>⚠</span>
                    <span><strong>Censorship Risk:</strong> Builders can exclude transactions; OFAC compliance reduces financial inclusion.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#ff6b6b', fontWeight: 'bold', minWidth: '20px' }}>⚠</span>
                    <span><strong>Exclusive Order Flow:</strong> Relationships (e.g., Banana Gun ↔ Titan) concentrate MEV advantages.</span>
                  </li>
                </ul>
              </div>

              <div style={{
                backgroundColor: DARK_COLORS.card,
                border: `1px solid ${DARK_COLORS.border}`,
                borderRadius: '8px',
                padding: '24px'
              }}
    >
                <h3 style={{ marginBottom: '16px', fontWeight: '600', color: '#51cf66' }}>ePBS Benefits</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '12px' }}>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#51cf66', fontWeight: 'bold', minWidth: '20px' }}>✓</span>
                    <span><strong>Protocol-Native Security:</strong> Consensus-backed trust; no external relay vulnerabilities.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#51cf66', fontWeight: 'bold', minWidth: '20px' }}>✓</span>
                    <span><strong>Decentralized Builder Access:</strong> Lower barriers for new builders; fair competition.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#51cf66', fontWeight: 'bold', minWidth: '20px' }}>✓</span>
                    <span><strong>Content Hiding Until Finality:</strong> Reduces MEV exposure and front-running opportunities.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#51cf66', fontWeight: 'bold', minWidth: '20px' }}>✓</span>
                    <span><strong>Inclusion Lists for Censorship Resistance:</strong> Protocol-level guarantee against transaction exclusion.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7: FAQ */}
          <section id="faq" style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)',
              fontWeight: '700',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: `2px solid ${DARK_COLORS.border}`
            }}
    >Frequently Asked Questions</h2>

            <div style={{ display: 'grid', gap: '16px' }}>
              {[
                {
                  q: 'What is MEV and why does it matter?',
                  a: 'MEV (Maximal Extractable Value) is the value extracted by network participants by observing and reordering transactions. It matters because it represents significant value that flows outside users\' control—526,207 ETH extracted post-merge—and can incentivize censorship and unfair transaction ordering.'
                },
                {
                  q: 'Why is PBS necessary?',
                  a: 'PBS separates the roles of proposers and builders in block production. This is necessary because builders have superior information (private mempools, bundles) that validators lack. External PBS (via MEV-Boost) currently handles this, but brings external trust assumptions.'
                },
                {
                  q: 'What is Titan\'s Banana Gun deal and why does it matter?',
                  a: 'Titan has an exclusive order flow agreement with Banana Gun (a searcher), meaning Titan sees Banana Gun bundles first. This gives Titan a significant advantage in assembling high-value blocks, contributing to its 52% market share. It demonstrates how exclusive relationships concentrate MEV advantages.'
                },
                {
                  q: 'When will enshrined PBS (EIP-7732) be deployed?',
                  a: 'EIP-7732 is targeted as a headliner for the Glamsterdam upgrade, expected in 2026. However, Ethereum upgrade timelines can shift based on development progress and community consensus.'
                },
                {
                  q: 'How do Inclusion Lists (EIP-7547) prevent censorship?',
                  a: 'Inclusion Lists allow proposers to specify transactions that MUST be included in blocks. If builders exclude listed transactions, the block is invalid. This forces builders to include transactions even if they incur MEV loss.'
                },
                {
                  q: 'Why are relays unprofitable?',
                  a: 'Relays operate as public goods: they absorb infrastructure costs (servers, bandwidth, validation) without direct revenue. They\'re funded by ecosystem goodwill or parent organizations (e.g., Flashbots operates its relay for community benefit). This is unsustainable long-term.'
                }
              ].map((item, i) => (
                <details key={i} style={{
                  backgroundColor: DARK_COLORS.card,
                  border: `1px solid ${DARK_COLORS.border}`,
                  borderRadius: '8px',
                  padding: '20px',
                  cursor: 'pointer'
                }}
    >
                  <summary style={{
                    fontWeight: '600',
                    color: DARK_COLORS.text,
                    outline: 'none',
                    userSelect: 'none'
                  }}
    >
                    {item.q}
                  </summary>
                  <p style={{
                    marginTop: '12px',
                    color: DARK_COLORS.secondary,
                    lineHeight: '1.7'
                  }}
    >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Related Guides */}
          <section style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: `2px solid ${DARK_COLORS.border}`
            }}
    >Related Guides</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              {[
                { title: 'MEV Protection & Fair Trading', slug: 'mev-protection-fair-trading-guide-2026' },
                { title: 'Ethereum Pectra Upgrade', slug: 'ethereum-pectra-upgrade-guide-2026' },
                { title: 'Flash Loans & DeFi', slug: 'flash-loans-defi-guide-2026' },
                { title: 'Restaking & EigenLayer', slug: 'restaking-eigenlayer-guide-2026' },
                { title: 'Intent-Based Trading', slug: 'intent-based-trading-guide-2026' }
              ].map((guide, i) => (
                <Link key={i} href={`/learn/${guide.slug}`} className="related-guide" style={{
                  backgroundColor: DARK_COLORS.card,
                  border: `1px solid ${DARK_COLORS.border}`,
                  borderRadius: '8px',
                  padding: '16px',
                  textDecoration: 'none',
                  color: DARK_COLORS.link,
                  transition: 'all 0.2s',
                  display: 'block'
                }}
    >
                  <strong>{guide.title}</strong>
                  <p style={{ color: DARK_COLORS.secondary, fontSize: '0.85rem', margin: '8px 0 0 0' }}>Learn more →</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Educational Disclaimer */}
          <div style={{
            backgroundColor: DARK_COLORS.card,
            border: `1px solid ${DARK_COLORS.border}`,
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '40px'
          }}
    >
            <p style={{
              margin: 0,
              color: DARK_COLORS.secondary,
              fontSize: '0.9rem',
              lineHeight: '1.6'
            }}
    >
              <strong>Disclaimer:</strong> This guide is for educational purposes only and does not constitute investment advice, financial advice, or recommendations. MEV and PBS are complex technical topics; information is current as of April 2026 and subject to change. Always conduct your own research and consult with experts before making technical or financial decisions. degen0x makes no warranties about accuracy or completeness.
            </p>
          </div>

          {/* JSON-LD Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'MEV Supply Chain & Proposer-Builder Separation (PBS)',
              description: 'Comprehensive guide to MEV supply chain, PBS infrastructure, builder/relay markets, and enshrined PBS (EIP-7732).',
              author: { '@type': 'Organization', name: 'degen0x' },
              datePublished: '2026-04-10',
              dateModified: '2026-04-10',
              image: 'https://degen0x.com/og-mev-pbs-2026.jpg',
              publisher: { '@type': 'Organization', name: 'degen0x', logo: { '@type': 'ImageObject', url: 'https://degen0x.com/logo.png' } }
            })
          }} />

          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                { '@type': 'Question', name: 'What is MEV and why does it matter?', acceptedAnswer: { '@type': 'Answer', text: 'MEV is the value extracted by network participants by observing and reordering transactions. It represents significant value that flows outside users\' control and can incentivize censorship.' } },
                { '@type': 'Question', name: 'Why is PBS necessary?', acceptedAnswer: { '@type': 'Answer', text: 'PBS separates proposers and builders. This is necessary because builders have superior information that validators lack.' } },
                { '@type': 'Question', name: 'When will enshrined PBS (EIP-7732) be deployed?', acceptedAnswer: { '@type': 'Answer', text: 'EIP-7732 is targeted for the Glamsterdam upgrade, expected in 2026.' } },
                { '@type': 'Question', name: 'How do Inclusion Lists prevent censorship?', acceptedAnswer: { '@type': 'Answer', text: 'Inclusion Lists allow proposers to specify transactions that MUST be included in blocks, forcing builders to include them even if they incur MEV loss.' } }
              ]
            })
          }} />
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }>
            <li><Link href="/tools/bitcoin-rainbow-chart" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Bitcoin Rainbow Chart</Link></li>
            <li><Link href="/tools/blockchain-explorer-tool" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Blockchain Explorer Tool</Link></li>
            <li><Link href="/tools/compound-interest-crypto-calculator" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Compound Interest Crypto Calculator</Link></li>
            <li><Link href="/tools/crypto-airdrop-tracker" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Crypto Airdrop Tracker</Link></li>
          </ul>
        </nav>

{/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>
      </main>
    </>
  );
}
