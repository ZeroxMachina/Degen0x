import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "NEAR Protocol Ecosystem 2026: Ref Finance, Burrow, Aurora, Mintbase, NEAR Social | degen0x",
  description: "Complete NEAR ecosystem guide: Ref Finance DEX ($200M TVL), Burrow Protocol lending, Aurora EVM sidechain, Mintbase NFTs, NEAR Social. Nightshade sharding, chain abstraction, BOS platform.",
  keywords: ["NEAR", "Ref Finance", "Burrow", "Aurora", "Mintbase", "NEAR Social", "Nightshade", "chain abstraction", "BOS"],
  openGraph: {
    type: "article",
    title: "NEAR Protocol Ecosystem 2026: Complete Guide",
    description: "Explore NEAR's DeFi ecosystem, sharding technology, chain abstraction, and dApp platform.",
    publishedTime: "2026-04-11T00:00:00Z",
    modifiedTime: "2026-04-11T00:00:00Z",
    url: "https://degen0x.com/ecosystem/near-protocol-ecosystem-guide",
    images: [{ url: "https://degen0x.com/og-ecosystem.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEAR Protocol Ecosystem 2026",
    description: "Ref Finance, Burrow, Aurora, Mintbase, NEAR Social: complete ecosystem breakdown.",
    image: "https://degen0x.com/og-ecosystem.svg",
  },
  alternates: {
    canonical: 'https://degen0x.com/ecosystem/near-protocol-ecosystem-guide',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "NEAR Protocol Ecosystem 2026: DeFi, NFTs, Social & Sharding Technology",
  description: "Complete guide to NEAR ecosystem: Ref Finance DEX, Burrow Protocol lending, Aurora EVM, Mintbase NFTs, NEAR Social, Nightshade sharding, chain abstraction, and BOS platform.",
  image: "https://degen0x.com/og-ecosystem.svg",
  datePublished: "2026-04-11",
  dateModified: "2026-04-11",
  author: { "@type": "Organization", name: "degen0x" },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is NEAR Protocol Nightshade sharding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nightshade is NEAR's sharding technology enabling parallel state processing. 4 shards (2026) processing independently. TPS target: 100K+ with full rollout. Current: 4-6K TPS (improved from 150 baseline). Validator requirements: 1.75M NEAR per shard. Expected: 8 shards by end 2026, 16+ by 2027.",
        },
      },
      {
        "@type": "Question",
        name: "How does NEAR's chain abstraction work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chain abstraction eliminates explicit blockchain selection. Intent-based system routes transactions automatically. Users don't choose Aurora vs Ethereum vs other chains. Single NEAR account works across ecosystems. Liquidity aggregation via solver auction (RFQ market makers). 15+ active solvers bidding on intents.",
        },
      },
      {
        "@type": "Question",
        name: "What is NEAR's BOS platform?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BOS (Blockchain Operating System) is infrastructure for decentralized frontends. Replaces centralized indexers. Component composability: developers build reusable UI pieces. State stored decentralized on NEAR. 30M+ users target (currently 30M+). Powers NEAR Wallet, Jutsu, 100+ dApps.",
        },
      },
      {
        "@type": "Question",
        name: "What is Ref Finance TVL and trading volume?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ref Finance: $180-250M TVL (April 2026). 24-hour volume: $20-40M. 400+ LP pools. REF token: $0.50-1.50 range. Staking APY: 10-20%. Concentrated liquidity model reduces IL. Smart router finds optimal execution.",
        },
      },
      {
        "@type": "Question",
        name: "How does Burrow Protocol lending work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Burrow: $60-100M TVL. Supply ETH: 3.4%+ APY. Borrow ETH at 3% APY. Collateral ratio: 120-150%. Liquidation at 110% LTV. 20+ supported collateral assets. Risk: lower than DeFi average (strong risk management).",
        },
      },
      {
        "@type": "Question",
        name: "What is Aurora EVM and its cost advantage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aurora: EVM-compatible sidechain on NEAR. Gas costs: 0.01-0.5 cents (vs Ethereum 10-100 cents). 100x cheaper. Block time: 1-2 seconds. Finality: 2-4 blocks. Rainbow Bridge: trustless NEAR ↔ Ethereum bridge. TVL: $50-80M. 50+ dApps deployed.",
        },
      },
    ],
  },
};

export default function NEARProtocolEcosystemGuideExpanded() {
  const tableOfContents = [
    { id: "near-overview", title: "NEAR Protocol Overview" },
    { id: "nightshade-deep-dive", title: "Nightshade Sharding Architecture" },
    { id: "chain-abstraction-detailed", title: "Chain Abstraction: Intent-Based Design" },
    { id: "bos-platform", title: "BOS: Blockchain Operating System" },
    { id: "ref-finance-detailed", title: "Ref Finance: DEX & AMM Leader" },
    { id: "burrow-protocol", title: "Burrow: Lending Protocol" },
    { id: "aurora-sidechain", title: "Aurora: EVM Compatibility Layer" },
    { id: "mintbase-nfts", title: "Mintbase: NFT Marketplace" },
    { id: "near-social-guide", title: "NEAR Social: Decentralized Social Network" },
    { id: "ecosystem-table", title: "Ecosystem Projects Comparison" },
    { id: "faq", title: "FAQ" },
  ];

  const infoBoxStyle = { background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };
  const h1Style = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: "linear-gradient(135deg, #22c55e, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" };
  const h2Style = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: "#e6edf3" };
  const h3Style = { fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: "#e6edf3" };
  const badgeStyle = { display: "inline-block", padding: "6px 12px", borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16 };
  const tableStyle = { width: "100%", borderCollapse: "collapse" as const, marginBottom: 24, fontSize: 14 };
  const thStyle = { background: "#0d1117", border: "1px solid #30363d", padding: 12, textAlign: "left" as const, fontWeight: 700, color: "#e6edf3" };
  const tdStyle = { border: "1px solid #30363d", padding: 12, color: "#8b949e" };
  const linkStyle = { color: "#58a6ff", textDecoration: "none" };

  return (
    <article id="top" style={{ background: "#0d1117", color: "#e6edf3", minHeight: "100vh", padding: "40px 20px", scrollBehavior: "smooth" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: "#8b949e" }}>
          <Link href="/" style={{ color: "#8b949e", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/ecosystem" style={{ color: "#8b949e", textDecoration: "none" }}>Ecosystem</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <span style={{ color: "#c9d1d9" }}>NEAR Protocol</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: "#22c55e", color: "#0d1117" }}>Ecosystem</span>
          <span style={{ ...badgeStyle, background: "#3d444d", color: "#e6edf3" }}>Intermediate</span>
          <h1 style={h1Style}>NEAR Protocol Ecosystem 2026: DeFi, Social & Sharding</h1>
          <p style={{ fontSize: 16, color: "#8b949e", marginBottom: 20 }}>
            Explore NEAR&apos;s rapidly expanding ecosystem. Total TVL: $600M-800M (April 2026). Ref Finance DEX: $200M+ TVL, 400+ pools. Burrow Protocol lending: $80M+ TVL. Aurora EVM sidechain: 100x cheaper gas than Ethereum. Nightshade sharding: 4 shards enabling 4-6K TPS (100K+ target). Chain abstraction: intent-based routing across chains. BOS platform: 30M+ monthly users.
          </p>
          <div style={{ display: "flex", gap: 24, fontSize: 14, color: "#8b949e", marginBottom: 24 }}>
            <span>Updated: April 11, 2026</span>
            <span>Reading time: 21 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="0xMachina"
          role="Founder"
          publishedDate="2026-04-11"
          updatedDate="2026-04-11"
          readingTime={21}
          section="ecosystem"
        />


        <nav aria-label="Table of Contents" style={{ ...infoBoxStyle, marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Table of Contents</h3>
          <ol style={{ marginLeft: 20, color: "#58a6ff" }}>
            {tableOfContents.map((item) => (
              <li key={item.id} style={{ marginBottom: 8 }}>
                <a href={`#${item.id}`} style={linkStyle}>{item.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="near-overview">
          <h2 style={h2Style}>1. NEAR Protocol Overview</h2>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            NEAR Protocol is a Layer 1 blockchain designed for developer experience and user experience. Founded 2019, launched 2020. Current state (April 2026): $600M-800M total TVL across ecosystem. 30K-50K daily active users. Key differentiators: Nightshade sharding (100K TPS target), chain abstraction (intent-based routing), BOS (decentralized frontend platform). Governance: NEAR token holders control protocol upgrades and treasury ($500M+).
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
          <h3 style={h3Style}>Why NEAR Matters</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 24, color: "#8b949e" }}>
            NEAR focuses on usability: human-readable account names (.near instead of 0x addresses), zero-cost account creation, social account recovery. Technical: Rust-based for performance, Nightshade sharding for throughput. Ecosystem: 25+ major protocols, $100M+ committed ecosystem fund. 2026 focus: expanding chain abstraction, growing BOS user base, increasing enterprise adoption.
          </p>
        </section>

        <section id="nightshade-deep-dive">
          <h2 style={h2Style}>2. Nightshade Sharding Architecture</h2>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Nightshade is NEAR&apos;s sharding innovation. Instead of sequencing all transactions through a single validator, Nightshade splits state across multiple shards. Each shard processes independent state. Result: parallel processing, 4-6K current TPS, 100K+ TPS target.
          </p>
          <h3 style={h3Style}>How Shards Work</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            4 shards (April 2026): each maintains separate state tree. Cross-shard communication: via receipt mechanism (batched every 1-2 seconds). Finality: 2-3 blocks after transaction inclusion. Validator requirements: 1.75M NEAR per shard to validate. Incentive: validators earn rewards. Rebalancing: automated based on activity patterns.
          </p>
          <h3 style={h3Style}>Scaling Path</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Current: 4 shards (April 2026). Expected: 8 shards by end of 2026. Theoretical: 16+ shards by 2027. 64+ shards possible eventually. Each doubling reduces per-transaction costs 50%. Comparison to Ethereum 2.0: NEAR shards execute independently; Ethereum shards provide data availability only.
          </p>
        </section>

        <section id="chain-abstraction-detailed">
          <h2 style={h2Style}>3. Chain Abstraction: Intent-Based Routing</h2>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Chain abstraction is NEAR&apos;s vision for seamless multi-chain UX. Current problem: users must select which blockchain to use. Chain abstraction eliminates this friction: just express intent, system finds best execution.
          </p>
          <h3 style={h3Style}>How It Works</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            User specifies: "swap USDC to ETH" (no blockchain selection). Intent solver network: 15+ market makers bid on executing order. Auction: NEAR contracts select best solver. Execution: winning solver routes through cheapest venue (Aurora DEX, Ethereum Uniswap, other chains). Settlement: NEAR relay or optimistic bridge atomically confirms. Latency: 2-5 seconds for intent resolution.
          </p>
          <h3 style={h3Style}>Benefits</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            UX improvement: users don&apos;t think about chains (massive adoption lever). MEV-resistant: competition among solvers reduces front-running. Composability: single NEAR account works everywhere. Liquidity aggregation: solvers find best prices across venues.
          </p>
        </section>

        <section id="bos-platform">
          <h2 style={h2Style}>4. BOS: Blockchain Operating System</h2>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            BOS is NEAR&apos;s infrastructure for decentralized dApp frontends. Replaces centralized indexers. Component model: developers create reusable UI pieces. Monthly active users: 30M+ (significant). 100+ dApps built on BOS.
          </p>
          <h3 style={h3Style}>Component Composability</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Developers compose UI from shared library. State stored decentralized: users maintain component state (not platform). Versioning: immutable updates enable rollback. Cost: $0.001-0.01 per 1KB per year (low, encourages adoption). Examples: swap component reused across 50+ frontends, lending interface shared across protocols.
          </p>
          <h3 style={h3Style}>BOS Gateway</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Decentralized edge network: 20+ regions worldwide. Request routing: automatic failover. Performance: 100-200ms latency globally. Caching: aggressive IPFS caching reduces blockchain queries. Cost: free to users (protocol-subsidized). Developer incentives: $5-50K for high-impact components.
          </p>
        </section>

        <section id="ref-finance-detailed">
          <h2 style={h2Style}>5. Ref Finance: DEX & AMM Leader</h2>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Ref Finance is NEAR&apos;s largest DeFi protocol and primary DEX. $180-250M TVL, 400+ active pools, $20-40M 24-hour volume. Concentrated liquidity model (Curve-like). Smart router finds optimal execution across pools.
          </p>
          <h3 style={h3Style}>LP Returns & Yields</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Example: Provide $100K liquidity (50 NEAR + 50K USDC). Revenue: swap fees 0.04-0.5% depending on pair = 2-8% APY. Additional: governance rewards (REF token incentives) = 2-10% extra. Total: 4-18% APY typical. Concentrated liquidity: narrow ranges yield 20-50% APY (high IL risk on volatile pairs). REF token: $0.50-1.50 range (volatile). Stakers earn 50% of platform fees.
          </p>
          <h3 style={h3Style}>xTHRUST vs REF Token</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            REF: governance token, eligibility for farming rewards. Staking REF: participate in fee capture (50% of protocol fees). Annual rewards: ~$5-10M distributed to REF stakers. Price historically correlated with TVL (growth phases drive token appreciation).
          </p>
        </section>

        <section id="burrow-protocol">
          <h2 style={h2Style}>6. Burrow: Lending Protocol</h2>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Burrow is NEAR&apos;s leading lending platform. $60-100M TVL. Lending rates: 5-8% for stablecoins, 15-25% for volatile assets. Borrowing rates: 8-12% stables, 18-30% volatile. Collateral ratio: 120-150%. Liquidation at 110% LTV. Risk management: bot-driven liquidation, 2% penalty to bot + 2% to protocol.
          </p>
          <h3 style={h3Style}>Asset Support & Collateral</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            20+ supported assets: NEAR, USDC, USDT, ETH (via Aurora bridge), REF, Ref LP tokens. LTV ratios: NEAR 50%, USDC 80%, LP tokens 40% (riskier assets have lower LTV). Supply incentives: BURROW token farming (governance). Borrow caps: limits per asset (prevents excessive leverage).
          </p>
          <h3 style={h3Style}>Risk Profile</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Utilization rate: 60-75% (healthy). Reserve factor: 10% of interest spread. Insurance fund: $2-3M (covers bad debt). Historical: zero bad debt events since launch. Risk dashboard: real-time solvency metrics. Emergency pause: governance can freeze protocol if exploited.
          </p>
        </section>

        <section id="aurora-sidechain">
          <h2 style={h2Style}>7. Aurora: EVM Compatibility Layer</h2>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Aurora is NEAR&apos;s Ethereum-compatible execution environment. Enables Solidity contracts on NEAR. Gas costs: 0.01-0.5 cents (100x cheaper than Ethereum mainnet). Block time: 1-2 seconds. Finality: 2-4 blocks. TVL: $50-80M. 50+ dApps deployed.
          </p>
          <h3 style={h3Style}>Rainbow Bridge & Liquidity</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Rainbow Bridge: trustless NEAR ↔ Ethereum bridge. Finality: 16 Ethereum blocks (~4 minutes) for security. TVL bridged: $50M USDC, $20M ETH, $15M DAI. Fee: 0.2-0.5% for Ethereum → Aurora. Return to Ethereum: gas-intensive (~$5-20 per transaction). Integration: MetaMask, Ethers.js, Hardhat all natively supported.
          </p>
          <h3 style={h3Style}>dApps on Aurora</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Popular: Aave, Curve, Uniswap V2 clones. Aurora-native: Flamingoswap (DEX), Oven Finance (leveraged yields), Beefy (yield optimizer with Aurora support). Developer incentives: Aurora 30M token allocation for ecosystem growth. Contracts deployed: 10K+ active (March 2026).
          </p>
        </section>

        <section id="mintbase-nfts">
          <h2 style={h2Style}>8. Mintbase: NFT Marketplace</h2>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Mintbase is NEAR&apos;s decentralized NFT marketplace. 24-hour volume: $100K-500K. Storefronts: 100K+ creator stores. Verified creators: 2K+. Royalties: enforced on-chain (5-10% typical). Minting fee: $0.01-0.10 per NFT. MINT token: rewards top creators, governance.
          </p>
          <h3 style={h3Style}>Creator Tools & Revenue</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Dashboard: mint, list, track sales in one UI. Royalty splits: support multiple wallets automatically. Commission: 2.5% Mintbase fee + creator-chosen percentage. Batch minting: 100+ NFTs at $0.01 each (gas-efficient). Collections: art, gaming items, digital collectibles, membership passes. Analytics: sales tracking, floor price history, buyer segmentation.
          </p>
        </section>

        <section id="near-social-guide">
          <h2 style={h2Style}>9. NEAR Social: Decentralized Social Network</h2>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            NEAR Social is decentralized social network on NEAR blockchain. Users: 200K+ registered. Posts: 1M+ daily. Built on BOS. On-chain storage: profile, posts, follows all stored. .near domains = verified identity. Web3 features: NFT profiles, token-gated communities, DAO integrations.
          </p>
          <h3 style={h3Style}>Profile & Follow Graph</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            .near domain: 1 year = 2 NEAR (~$0.30 at current prices). Sub-accounts: myname.social.near (free). Profile fields: bio, image, links, socials. Follow graph: decentralized, no platform control. Top 100 creators: 100K+ followers each. Verification: acquired via NEAR contracts or linked identity providers.
          </p>
          <h3 style={h3Style}>Creator Monetization</h3>
          <p style={{ lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Tips: in NEAR, USDC, custom tokens. Subscriptions: recurring revenue model. Token-gated content: NFT holders access exclusive posts. Grants: NEAR Foundation $500K+ annually for creators. Revenue sharing: none taken by protocol (creator-first model). Unlike Twitter/Facebook, creators keep 100% of monetization.
          </p>
        </section>

        <section id="ecosystem-table">
          <h2 style={h2Style}>10. Ecosystem Projects Comparison Table</h2>
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", marginBottom: 24 }}>
            <table style={tableStyle} aria-label="NEAR Ecosystem Comparison">
              <thead>
                <tr>
                  <th style={thStyle}>Project</th>
                  <th style={thStyle}>TVL / Users</th>
                  <th style={thStyle}>Primary Use</th>
                  <th style={thStyle}>Token / APY</th>
                  <th style={thStyle}>Risk Level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}><strong>Ref Finance</strong></td>
                  <td style={tdStyle}>$180-250M</td>
                  <td style={tdStyle}>DEX Swap</td>
                  <td style={tdStyle}>REF: $0.50-1.50 (10-20% APY)</td>
                  <td style={tdStyle}>Low-Medium</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>Burrow</strong></td>
                  <td style={tdStyle}>$60-100M</td>
                  <td style={tdStyle}>Lending</td>
                  <td style={tdStyle}>BURROW: 5-25% APY</td>
                  <td style={tdStyle}>Low-Medium</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>Aurora</strong></td>
                  <td style={tdStyle}>$50-80M</td>
                  <td style={tdStyle}>EVM Compat</td>
                  <td style={tdStyle}>N/A (ETH/stables)</td>
                  <td style={tdStyle}>Low</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>Mintbase</strong></td>
                  <td style={tdStyle}>$10-20M</td>
                  <td style={tdStyle}>NFT Marketplace</td>
                  <td style={tdStyle}>MINT: Variable</td>
                  <td style={tdStyle}>Medium</td>
                </tr>
                <tr>
                  <td style={tdStyle}><strong>NEAR Social</strong></td>
                  <td style={tdStyle}>200K users</td>
                  <td style={tdStyle}>Social/Identity</td>
                  <td style={tdStyle}>N/A</td>
                  <td style={tdStyle}>Low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="faq">
          <h2 style={h2Style}>11. FAQ</h2>
          <details style={{ marginBottom: 16, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "0 20px" }}>
            <summary style={{ padding: "16px 0", cursor: "pointer", fontWeight: 600, color: "#e6edf3", fontSize: 16, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              What is NEAR Protocol Nightshade sharding?
              <span style={{ fontSize: 20, color: "#8b949e" }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: "#8b949e", marginTop: 0 }}>
              Nightshade is NEAR&apos;s sharding technology enabling parallel state processing. 4 shards (2026) processing independently. TPS target: 100K+ with full rollout. Current: 4-6K TPS (improved from 150 baseline). Validator requirements: 1.75M NEAR per shard. Expected: 8 shards by end 2026, 16+ by 2027.
            </p>
          </details>

          <details style={{ marginBottom: 16, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "0 20px" }}>
            <summary style={{ padding: "16px 0", cursor: "pointer", fontWeight: 600, color: "#e6edf3", fontSize: 16, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              How does NEAR&apos;s chain abstraction work?
              <span style={{ fontSize: 20, color: "#8b949e" }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: "#8b949e", marginTop: 0 }}>
              Chain abstraction eliminates explicit blockchain selection. Intent-based system routes transactions automatically. Users don&apos;t choose Aurora vs Ethereum vs other chains. Single NEAR account works across ecosystems. Liquidity aggregation via solver auction (RFQ market makers). 15+ active solvers bidding on intents.
            </p>
          </details>

          <details style={{ marginBottom: 16, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "0 20px" }}>
            <summary style={{ padding: "16px 0", cursor: "pointer", fontWeight: 600, color: "#e6edf3", fontSize: 16, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              What is NEAR&apos;s BOS platform?
              <span style={{ fontSize: 20, color: "#8b949e" }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: "#8b949e", marginTop: 0 }}>
              BOS (Blockchain Operating System) is infrastructure for decentralized frontends. Replaces centralized indexers. Component composability: developers build reusable UI pieces. State stored decentralized on NEAR. 30M+ users target (currently 30M+). Powers NEAR Wallet, Jutsu, 100+ dApps.
            </p>
          </details>

          <details style={{ marginBottom: 16, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "0 20px" }}>
            <summary style={{ padding: "16px 0", cursor: "pointer", fontWeight: 600, color: "#e6edf3", fontSize: 16, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              What is Ref Finance TVL and trading volume?
              <span style={{ fontSize: 20, color: "#8b949e" }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: "#8b949e", marginTop: 0 }}>
              Ref Finance: $180-250M TVL (April 2026). 24-hour volume: $20-40M. 400+ LP pools. REF token: $0.50-1.50 range. Staking APY: 10-20%. Concentrated liquidity model reduces impermanent loss. Smart router finds optimal execution.
            </p>
          </details>

          <details style={{ marginBottom: 16, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "0 20px" }}>
            <summary style={{ padding: "16px 0", cursor: "pointer", fontWeight: 600, color: "#e6edf3", fontSize: 16, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              How does Burrow Protocol lending work?
              <span style={{ fontSize: 20, color: "#8b949e" }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: "#8b949e", marginTop: 0 }}>
              Burrow: $60-100M TVL. Supply ETH: earn 3-5% APY. Borrow ETH at 3% APY. Collateral ratio: 120-150%. Liquidation at 110% LTV. 20+ supported collateral assets. Interest accrual: real-time per block. Risk: well-managed (zero bad debt events).
            </p>
          </details>

          <details style={{ marginBottom: 16, background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "0 20px" }}>
            <summary style={{ padding: "16px 0", cursor: "pointer", fontWeight: 600, color: "#e6edf3", fontSize: 16, listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              What is Aurora EVM and its cost advantage?
              <span style={{ fontSize: 20, color: "#8b949e" }}>+</span>
            </summary>
            <p style={{ paddingBottom: 16, lineHeight: 1.8, color: "#8b949e", marginTop: 0 }}>
              Aurora: EVM-compatible sidechain on NEAR. Gas costs: 0.01-0.5 cents (vs Ethereum 10-100 cents). 100x cheaper. Block time: 1-2 seconds. Finality: 2-4 blocks. Rainbow Bridge: trustless NEAR ↔ Ethereum bridge. TVL: $50-80M. 50+ dApps deployed.
            </p>
          </details>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: "#8b949e" }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only. NEAR ecosystem projects carry smart contract risk, team risk, and market volatility. Do your own research on audits, team credentials, roadmap execution, and tokenomics. Not financial advice. Consult a financial advisor before investing.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/learn/appchains-application-specific-blockchains-guide-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Appchains Application Specific Blockchains</Link></li>
            <li><Link href="/learn/aave-v4-gho-stablecoin-defi-lending-guide-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Aave V4 Gho Stablecoin Defi Lending</Link></li>
            <li><Link href="/learn/abstract-chain-consumer-crypto-zk-rollup-guide-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Abstract Chain Consumer Crypto Zk Rollup</Link></li>
            <li><Link href="/learn/account-abstraction-erc-4337-guide" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Account Abstraction Erc 4337</Link></li>
          </ul>
        </nav>

</article>
  );
}
