import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: "Best Projects on Linea: SyncSwap, Velocore, Mendi Finance",
  description: 'Top DeFi projects on Linea zkEVM. SyncSwap DEX, Velocore, Mendi Finance lending. ConsenSys zkEVM, Surge points program, decentralization roadmap.',
  keywords: ['Linea projects', 'SyncSwap', 'Velocore', 'Mendi Finance', 'Linea DeFi', 'ConsenSys zkEVM', 'Linea ecosystem'],
  openGraph: {
    title: 'Best Projects on Linea 2026',
    description: 'Top DeFi projects on Linea L2: SyncSwap, Velocore, Mendi. ConsenSys-backed zkEVM.',
    url: 'https://degen0x.com/ecosystem/best-projects-on-linea',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Projects on Linea',
    description: 'Top Linea DeFi projects: SyncSwap, Velocore, Mendi Finance, Horizondex.',
  },
  alternates: {
    canonical: 'https://degen0x.com/ecosystem/best-projects-on-linea',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Projects on Linea 2026: DeFi Ecosystem Guide',
  description: 'Complete guide to top DeFi projects on Linea zkEVM including SyncSwap, Velocore, Mendi Finance, and Horizondex.',
  image: 'https://degen0x.com/og-spending.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Linea and how does it work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Linea is a zkEVM (zero-knowledge Ethereum Virtual Machine) built by ConsenSys. It proves transactions on Ethereum using cryptographic proofs instead of optimistic rollups. Finality is instant (vs 7-day dispute period on optimistic L2s).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the total TVL on Linea?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Linea TVL reached approximately $300M-600M as of April 2026, with SyncSwap leading at $120M+ TVL. Velocore, Mendi Finance, and Horizondex together account for $50M-150M.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is SyncSwap?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SyncSwap is Linea\'s largest DEX, processing 70% of ecosystem swaps. Offers concentrated liquidity similar to Uniswap v3. TVL exceeds $120M. Governance via SYN token.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Surge points program?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Linea Surge is an incentive program rewarding active users and liquidity providers. Points accumulate based on transaction volume, duration, and TVL contributed. Points can be redeemed for LINEA tokens.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Linea compare to Arbitrum/Optimism?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Linea uses zkEVM (instant finality) vs Arbitrum/Optimism (optimistic). Linea smaller TVL ($300M-600M) but faster proofs. All inherit Ethereum security differently.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Linea\'s decentralization roadmap?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Linea plans permissionless provers, community validators, and DAO governance by 2026-2027. Currently centralized but transitioning toward decentralization.',
        },
      },
    ],
  },
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ecosystem', item: 'https://degen0x.com/ecosystem' },
    { '@type': 'ListItem', position: 3, name: 'Best Projects On Linea', },
  ],
};

export default function BestProjectsOnLinea() {
  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d', borderLeft: '3px solid #fb923c', borderLeft: '3px solid #fb923c',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
  };

  const h1Style = {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 16,
    background: 'linear-gradient(135deg, #22c55e, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const h2Style = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: '#fb923c', borderBottom: '2px solid #4a2c10', paddingBottom: 12,
  };

  const h3Style = {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 12,
    color: '#e6edf3',
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '6px 12px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 16,
  };

  const linkStyle = { color: '#58a6ff', textDecoration: 'none' };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginBottom: 24,
    fontSize: 14,
  };

  const thStyle = {
    background: '#0d1117',
    border: '1px solid #30363d',
    padding: 12,
    textAlign: 'left' as const,
    fontWeight: 700,
    color: '#e6edf3',
  };

  const tdStyle = {
    border: '1px solid #30363d',
    padding: 12,
    color: '#8b949e',
  };

  const tableOfContents = [
    { id: 'overview', title: 'Linea Ecosystem Overview' },
    { id: 'zkevm', title: 'zkEVM Technology & Finality' },
    { id: 'projects', title: 'Leading DeFi Projects' },
    { id: 'comparison', title: 'Project Comparison Table' },
    { id: 'surge', title: 'Linea Surge Rewards Program' },
    { id: 'decentral', title: 'Decentralization Roadmap' },
    { id: 'risks', title: 'Risks & Considerations' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <ArticleSchema
        headline="Best Projects on Linea: SyncSwap, Velocore, Mendi Finance"
        description="Top DeFi projects on Linea zkEVM. SyncSwap DEX, Velocore, Mendi Finance lending. ConsenSys zkEVM, Surge points program, decentralization roadmap."
        url="https://degen0x.com/ecosystem/best-projects-on-linea"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/best-projects-on-linea" />
        <ReadingTime />
      </div>
<AuthoritySources url="/ecosystem/best-projects-on-linea" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/ecosystem" style={{ color: '#8b949e', textDecoration: 'none' }}>Ecosystem</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Best Projects on Linea</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#22c55e', color: '#0d1117' }}>Ecosystem</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>DeFi</span>
          <h1 style={h1Style}>Best Projects on Linea</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Linea TVL reached $300M-600M as of April 2026, with SyncSwap, Velocore, and Mendi Finance leading. This guide covers ConsenSys zkEVM technology, Surge points program, and decentralization roadmap.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 17 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="0xMachina"
          role="Founder"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={17}
          section="ecosystem"
        />


        <nav aria-label="Table of Contents" style={{ ...infoBoxStyle, marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Table of Contents</h3>
          <ol style={{ marginLeft: 20, color: '#58a6ff' }}>
            {tableOfContents.map(item => (
              <li key={item.id} style={{ marginBottom: 8 }}>
                <a href={`#${item.id}`} style={linkStyle}>{item.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="overview">
          <h2 style={h2Style}>Linea Ecosystem Overview</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Linea is a zkEVM (zero-knowledge Ethereum Virtual Machine) scaling solution developed by ConsenSys, the team behind MetaMask and Infura. Launched as testnet in 2023, mainnet went live in 2024. Linea provides Ethereum-equivalent security with instant transaction finality through zero-knowledge proofs.
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
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            The ecosystem grew from $50M to $600M TVL in 12 months, with 40+ DeFi protocols deployed. Linea differentiates through instant finality (vs 7-day dispute windows on optimistic rollups), ConsenSys backing, and aggressive incentive programs (Surge points). Users benefit from low fees ($0.01-0.50), fast confirmation, and deep liquidity pools.
          </p>

          <div style={infoBoxStyle}>
            <strong>Key Metrics:</strong> Linea TVL: $300M-600M (April 2026). Avg transaction cost: $0.05-0.20. TPS: 400+ vs Ethereum&apos;s 15. Finality: instant (no wait period).
          </div>
        </section>

        <section id="zkevm">
          <h2 style={h2Style}>zkEVM Technology & Finality</h2>

          <h3 style={h3Style}>How zkEVM Finality Works</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Linea bundles transactions into batches, generates zero-knowledge proofs proving correctness, and submits proofs to Ethereum. Once Ethereum validates the proof, transactions are final. This is superior to optimistic rollups which require 7-day dispute windows where malicious provers could theoretically submit incorrect batches.
          </p>

          <h3 style={h3Style}>Instant Finality Advantage</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Users and bridges don&apos;t wait days for finality. Cross-chain liquidity bridges settle instantly (vs 7+ days on Arbitrum/Optimism). Users can withdraw to Ethereum immediately after proof. This enables better UX and capital efficiency.
          </p>

          <div style={infoBoxStyle}>
            <strong>Tradeoff:</strong> zkEVM requires more computation for proofs. Batch finality time: ~15 minutes (vs &lt;1 minute for optimistic batches). Higher prover cost.
          </div>
        </section>

        <section id="projects">
          <h2 style={h2Style}>Leading DeFi Projects</h2>

          <h3 style={h3Style}>SyncSwap (DEX, $120M+ TVL)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            SyncSwap is Linea&apos;s largest DEX, processing 70% of ecosystem swaps. It implements concentrated liquidity (similar to Uniswap v3), allowing LPs to concentrate capital in tight ranges for amplified returns. TVL exceeds $120M. SYN token governance. Active liquidity mining programs.
          </p>

          <h3 style={h3Style}>Velocore (DEX with Stableswap, $40M+ TVL)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Velocore is a DEX combining Uniswap-like AMM with Curve-like stableswap functionality. Optimized for stablecoin trading (&lt;0.1% slippage on USDC/USDT pairs). TVL $40M+. VC token governance.
          </p>

          <h3 style={h3Style}>Mendi Finance (Lending, $30M+ TVL)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Mendi is Linea&apos;s primary lending protocol. Users deposit ETH, USDC, USDT to earn interest (4-7% APY). Borrowers pay variable rates (8-12%). Collateral-based lending with 150% overcollateralization requirement. MENDI token governance.
          </p>

          <h3 style={h3Style}>Horizondex (Perpetual Futures, $20M+ TVL)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Horizondex offers perpetual futures trading on Linea. Leverage up to 50x with dynamic collateralization. Decent liquidity for major pairs (ETH, BTC, SOL). Growing derivatives market on Linea.
          </p>
        </section>

        <section id="comparison">
          <h2 style={h2Style}>Project Comparison Table</h2>
          <table style={tableStyle}>
            <thead>
              <tr style={{ background: '#0d1117' }}>
                <th style={thStyle}>Project</th>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>TVL</th>
                <th style={thStyle}>Key Feature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>SyncSwap</td>
                <td style={tdStyle}>DEX</td>
                <td style={tdStyle}>$120M+</td>
                <td style={tdStyle}>Concentrated liquidity, 70% swap volume</td>
              </tr>
              <tr>
                <td style={tdStyle}>Velocore</td>
                <td style={tdStyle}>DEX</td>
                <td style={tdStyle}>$40M+</td>
                <td style={tdStyle}>Stableswap optimized, tight spread</td>
              </tr>
              <tr>
                <td style={tdStyle}>Mendi Finance</td>
                <td style={tdStyle}>Lending</td>
                <td style={tdStyle}>$30M+</td>
                <td style={tdStyle}>Multi-asset lending, 150% collateral</td>
              </tr>
              <tr>
                <td style={tdStyle}>Horizondex</td>
                <td style={tdStyle}>Perpetuals</td>
                <td style={tdStyle}>$20M+</td>
                <td style={tdStyle}>50x leverage futures, growing market</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="surge">
          <h2 style={h2Style}>Linea Surge Rewards Program</h2>

          <h3 style={h3Style}>How Surge Points Work</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Linea Surge is a community incentive program rewarding users for activity. Points accumulate based on: transaction volume, duration of participation, TVL contributed to protocols. Higher engagement = more points. Points accumulate over campaign periods (typically 8 weeks).
          </p>

          <h3 style={h3Style}>Point Redemption</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            At campaign end, points are ranked by percentile. Top users receive LINEA tokens (native L2 token). Typical distribution: top 10% get substantial rewards. Points can&apos;t be traded; earned through protocol activity only. This incentivizes long-term participation over point farming.
          </p>

          <h3 style={h3Style}>Surge Campaigns</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Multiple campaigns per year focusing on different activities: DEX liquidity provision, lending participation, bridges, NFT minting. Campaigns are announced 2-4 weeks in advance with transparent point calculations.
          </p>

          <div style={infoBoxStyle}>
            <strong>Strategy:</strong> Participate in multiple protocols during Surge campaigns. Diversification increases point accumulation. Early participation rewards are highest as point multipliers decrease over campaign.
          </div>
        </section>

        <section id="decentral">
          <h2 style={h2Style}>Decentralization Roadmap</h2>

          <h3 style={h3Style}>Current State (2026)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Linea is currently centralized: ConsenSys operates provers and sequencers. Users trust ConsenSys team integrity. This is acceptable for scaling but not ideal long-term. Roadmap aims for permissionless provers by 2026-2027.
          </p>

          <h3 style={h3Style}>Planned Decentralization (2026-2027)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Phase 1: Permissionless provers (anyone can submit proofs). Phase 2: Community validators (stake LINEA to validate state). Phase 3: Full DAO governance (LINEA holders vote on protocol parameters). Timeline: likely 18-24 months from April 2026.
          </p>

          <h3 style={h3Style}>Decentralization Benefits</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Removing central operator reduces risk. Permissionless provers increase redundancy (multiple provers compete). DAO governance aligns incentives with community. However, decentralization typically increases latency and costs.
          </p>
        </section>

        <section id="risks">
          <h2 style={h2Style}>Risks & Considerations</h2>

          <h3 style={h3Style}>zkEVM Proof Complexity</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            zkEVM is newer technology than optimistic rollups. Proof verification relies on novel cryptography (SNARK/STARK). Security audits are critical. If fundamental flaw discovered in proof system, entire chain could be compromised. Multiple audits help but don&apos;t eliminate risk.
          </p>

          <h3 style={h3Style}>Prover Centralization</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Until permissionless provers launch, ConsenSys controls proofs. Single operator could theoretically suppress transactions or halt network. This risk decreases as decentralization roadmap progresses.
          </p>

          <div style={infoBoxStyle}>
            <strong>Recommendation:</strong> Smaller allocation for exploration. Monitor decentralization progress. Reduce exposure until permissionless provers live.
          </div>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is Linea and how does it work?</h3>
            <p style={{ color: '#8b949e', margin: 0 }}>
              Linea is a zkEVM built by ConsenSys. It proves transactions on Ethereum using cryptographic proofs instead of optimistic rollups. Finality is instant (vs 7-day dispute period on optimistic L2s).
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is the total TVL on Linea?</h3>
            <p style={{ color: '#8b949e', margin: 0 }}>
              Linea TVL reached approximately $300M-600M as of April 2026, with SyncSwap leading at $120M+ TVL. Velocore, Mendi Finance, and Horizondex together account for $50M-150M.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is SyncSwap?</h3>
            <p style={{ color: '#8b949e', margin: 0 }}>
              SyncSwap is Linea&apos;s largest DEX, processing 70% of ecosystem swaps. Offers concentrated liquidity similar to Uniswap v3. TVL exceeds $120M. Governance via SYN token.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is the Surge points program?</h3>
            <p style={{ color: '#8b949e', margin: 0 }}>
              Linea Surge is an incentive program rewarding active users and liquidity providers. Points accumulate based on transaction volume, duration, and TVL contributed. Points can be redeemed for LINEA tokens.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How does Linea compare to Arbitrum/Optimism?</h3>
            <p style={{ color: '#8b949e', margin: 0 }}>
              Linea uses zkEVM (instant finality) vs Arbitrum/Optimism (optimistic). Linea smaller TVL ($300M-600M) but faster proofs. All inherit Ethereum security differently.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is Linea&apos;s decentralization roadmap?</h3>
            <p style={{ color: '#8b949e', margin: 0 }}>
              Linea plans permissionless provers, community validators, and DAO governance by 2026-2027. Currently centralized but transitioning toward decentralization.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and is not financial or investment advice. Linea is emerging technology with meaningful risks. Do your own research on security audits, team, and roadmap before investing. Only allocate capital you can afford to lose.
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Best Projects on Linea: SyncSwap, Velocore, Mendi Finance", "description": "Top DeFi projects on Linea zkEVM. SyncSwap DEX, Velocore, Mendi Finance lending. ConsenSys zkEVM, Surge points program, decentralization roadmap.", "url": "https://degen0x.com/ecosystem/best-projects-on-linea", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/learn/account-abstraction-erc-4337-guide" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Account Abstraction Erc 4337</Link></li>
            <li><Link href="/learn/aerodrome-finance-base-dex-liquidity-guide-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Aerodrome Finance Base Dex Liquidity</Link></li>
            <li><Link href="/learn/ai-agents-decentralized-ai-crypto-guide-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Ai Agents Decentralized Ai Crypto</Link></li>
            <li><Link href="/learn/ai-crypto-agents-autonomous-defi-guide-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Ai Crypto Agents Autonomous Defi</Link></li>
                      <li><a href="/ecosystem/1inch" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>1inch</a></li>
            <li><a href="/ecosystem/babylon-protocol" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Babylon Protocol</a></li>
                      <li><a href="/ecosystem/balancer" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Balancer</a></li>
            <li><a href="/ecosystem/berachain-dex" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Berachain Dex</a></li>
          </ul>
        </nav>

<nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <span style={{ color: "#8b949e" }}>Related: </span>
  <a href="/ecosystem/kelp" style={{ color: "#fb923c", marginRight: "1rem" }}>Kelp</a>
  <a href="/ecosystem/gmx" style={{ color: "#fb923c", marginRight: "1rem" }}>Gmx</a>
  <a href="/ecosystem/lido-v2" style={{ color: "#fb923c", marginRight: "1rem" }}>Lido V2</a>
  <a href="/ecosystem/rocketpool" style={{ color: "#fb923c", marginRight: "1rem" }}>Rocketpool</a>
  <a href="/ecosystem/pendle" style={{ color: "#fb923c", marginRight: "1rem" }}>Pendle</a>

          <a href="/ecosystem/polkadot-ecosystem-projects" style={{ color: "#fb923c", marginRight: "1rem" }}>Polkadot Ecosystem Projects</a>
        </nav>

</article>
  );
}
