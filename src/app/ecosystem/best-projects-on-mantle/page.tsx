import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Best Projects on Mantle: Agni Finance, Lendle, Moe | degen0x',
  description: 'Top DeFi projects on Mantle Layer 2. Agni Finance DEX, Lendle lending, INIT Capital, mETH liquid staking. TVL analysis and ecosystem overview.',
  keywords: ['Mantle projects', 'Agni Finance', 'Lendle', 'Moe', 'Mantle DeFi', 'mETH staking', 'Mantle ecosystem'],
  openGraph: {
    title: 'Best Projects on Mantle 2026',
    description: 'Top DeFi projects on Mantle L2: Agni Finance, Lendle, Moe. Growing ecosystem backed by BitDAO.',
    url: 'https://degen0x.com/ecosystem/best-projects-on-mantle',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Projects on Mantle',
    description: 'Top Mantle DeFi projects: Agni, Lendle, Moe, INIT Capital, mETH liquid staking.',
  },
  alternates: {
    canonical: 'https://degen0x.com/ecosystem/best-projects-on-mantle',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Projects on Mantle 2026: DeFi Ecosystem Overview',
  description: 'Complete guide to top DeFi projects on Mantle L2 including Agni Finance, Lendle, Moe, INIT Capital, and mETH liquid staking.',
  image: 'https://degen0x.com/og-spending.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Mantle and how does it compare to Ethereum?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mantle is a modular Layer 2 scaling solution for Ethereum. It uses a combination of optimistic rollups and data availability layers to achieve high throughput (1000+ TPS) with low fees ($0.01-0.50). Security is anchored to Ethereum through fraud proofs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the total TVL on Mantle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mantle TVL was approximately $250M-500M as of April 2026, with Agni Finance leading at $100M+ TVL. Lendle, Moe, and INIT Capital together account for $50M-150M.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Agni Finance and how does it work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Agni Finance is the leading DEX on Mantle, processing 80% of ecosystem swaps. Offers concentrated liquidity (similar to Uniswap v3), yield farming, and governance through AGN token. TVL exceeds $100M.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is mETH and how does Mantle LSP work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'mETH is Mantle Liquid Staking Protocol. Users deposit ETH, receive mETH token, earn ETH staking rewards (5-7% APY). mETH remains liquid and can be used in DeFi. Similar to Lido on Ethereum.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Mantle secure and audited?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mantle has undergone multiple security audits by Trail of Bits and OpenZeppelin. Uses modular architecture reducing single-point failures. Inherits Ethereum security through fraud-proof system.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Mantle compare to Arbitrum and Optimism?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Arbitrum/Optimism are larger ($10B+ TVL) and more established. Mantle is smaller ($250M-500M TVL) but offers innovative modular design and BitDAO treasury backing. Higher growth potential but higher risk.',
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
    { '@type': 'ListItem', position: 3, name: 'Best Projects On Mantle', },
  ],
};

export default function BestProjectsOnMantle() {
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
    { id: 'overview', title: 'Mantle Ecosystem Overview' },
    { id: 'bitdao', title: 'BitDAO & Treasury' },
    { id: 'projects', title: 'Leading DeFi Projects' },
    { id: 'comparison', title: 'Project Comparison Table' },
    { id: 'meth', title: 'Mantle LSP & mETH Staking' },
    { id: 'arch', title: 'Modular Architecture' },
    { id: 'risks', title: 'Risks & Considerations' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/ecosystem" style={{ color: '#8b949e', textDecoration: 'none' }}>Ecosystem</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Best Projects on Mantle</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#22c55e', color: '#0d1117' }}>Ecosystem</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>DeFi</span>
          <h1 style={h1Style}>Best Projects on Mantle</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Mantle TVL reached $250M-500M as of April 2026, with Agni Finance leading. This guide covers top DeFi projects including Lendle lending, Moe DEX, INIT Capital, and mETH liquid staking backed by BitDAO&apos;s $3B+ treasury.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 16 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="0xMachina"
          role="Founder"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={16}
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
          <h2 style={h2Style}>Mantle Ecosystem Overview</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Mantle is a modular Layer 2 scaling solution for Ethereum launched by BitDAO. It combines optimistic rollups with a separate data availability (DA) layer to achieve high throughput (1000+ transactions per second) with minimal fees ($0.01-$0.50). The ecosystem grew from $10M to $500M TVL in 18 months (2024-2026), with over 30 active DeFi protocols.
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
            Mantle differentiates itself through modularity: users can choose their own DA layer, reducing centralization risk compared to competitors. The network inherited Ethereum security through a fraud-proof system anchored to Ethereum mainnet. BitDAO backs the ecosystem with a $3B+ treasury funding protocol development and ecosystem incentives.
          </p>

          <div style={infoBoxStyle}>
            <strong>Key Metrics:</strong> Mantle TVL: $250M-500M (April 2026). Average transaction cost: $0.05-0.15. TPS capacity: 1000+ vs Ethereum&apos;s 15 TPS. Finality: ~7 seconds.
          </div>
        </section>

        <section id="bitdao">
          <h2 style={h2Style}>BitDAO & Treasury Backing</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            BitDAO manages a $3B+ treasury, one of the largest DAOs. Mantle benefits from continuous grants, protocol incentives, and venture capital backing. The DAO allocated $500M for Mantle ecosystem development in 2024-2025, funding liquidity mining, bug bounties, and team hiring. This provides stability differentiating Mantle from unsupported L2s that rely solely on user fees.
          </p>

          <h3 style={h3Style}>Treasury Allocation Strategy</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            BitDAO prioritizes: 1) Core infrastructure (rollup tech, data availability), 2) Protocol incentives (APY for major DeFi protocols), 3) Ecosystem grants (funding new teams), 4) Security (audits, bug bounties). Annual burn: $100M-200M on ecosystem growth.
          </p>
        </section>

        <section id="projects">
          <h2 style={h2Style}>Leading DeFi Projects</h2>

          <h3 style={h3Style}>Agni Finance (DEX, $100M+ TVL)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Agni Finance is Mantle&apos;s largest DeFi protocol, accounting for 40% of ecosystem TVL. It&apos;s a concentrated liquidity DEX similar to Uniswap v3, allowing LPs to concentrate capital in tight price ranges for higher returns. Agni processes 80% of Mantle swaps. Token: AGN. Governance allows community voting on protocol fees (currently 0.05%). Yield farming pools offer 20-200% APY for supporting trading pairs.
          </p>

          <h3 style={h3Style}>Lendle (Lending, $50M+ TVL)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Lendle is a lending/borrowing protocol, the largest credit market on Mantle. Users deposit ETH, USDC, USDT to earn variable interest (3-7% APY). Borrowers pay 8-12% for access to liquidity. Risk is managed through overcollateralization (150%+ required). Lendle tokens (LDL) govern protocol fee settings and collateral lists.
          </p>

          <h3 style={h3Style}>Moe (DEX, $30M+ TVL)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Moe is an alternative DEX focusing on capital efficiency and yield optimization. Uses automated market maker (AMM) with concentrated liquidity mechanics. Offers yield farming (50-150% APY). Lower volume than Agni but growing user base. Token: MOE.
          </p>

          <h3 style={h3Style}>INIT Capital (DeFi Hub, $20M+ TVL)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            INIT Capital combines lending, trading, and yield farming in a unified protocol. Supports leverage trading up to 10x with built-in risk management. Offers perpetual futures for derivatives traders. Early-stage but ambitious roadmap.
          </p>

          <h3 style={h3Style}>mETH (Liquid Staking, $100M+ TVL)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            mETH is Mantle&apos;s liquid staking protocol. Users deposit ETH and receive mETH tokens representing their stake plus accrued rewards (5-7% APY). mETH is liquid and usable in DeFi (collateral, trading), unlike staked ETH. Growing rapidly as primary LSP on Mantle.
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
                <th style={thStyle}>Unique Feature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Agni Finance</td>
                <td style={tdStyle}>DEX</td>
                <td style={tdStyle}>$100M+</td>
                <td style={tdStyle}>Concentrated liquidity, 80% swap volume</td>
              </tr>
              <tr>
                <td style={tdStyle}>Lendle</td>
                <td style={tdStyle}>Lending</td>
                <td style={tdStyle}>$50M+</td>
                <td style={tdStyle}>Multi-asset lending, 150% overcollateralization</td>
              </tr>
              <tr>
                <td style={tdStyle}>mETH</td>
                <td style={tdStyle}>Liquid Staking</td>
                <td style={tdStyle}>$100M+</td>
                <td style={tdStyle}>ETH staking rewards, DeFi composable</td>
              </tr>
              <tr>
                <td style={tdStyle}>Moe</td>
                <td style={tdStyle}>DEX</td>
                <td style={tdStyle}>$30M+</td>
                <td style={tdStyle}>Capital-efficient AMM, high APY farming</td>
              </tr>
              <tr>
                <td style={tdStyle}>INIT Capital</td>
                <td style={tdStyle}>DeFi Hub</td>
                <td style={tdStyle}>$20M+</td>
                <td style={tdStyle}>Unified platform, 10x leverage trading</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="meth">
          <h2 style={h2Style}>Mantle LSP & mETH Staking</h2>

          <h3 style={h3Style}>How Mantle Liquid Staking Works</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Users deposit ETH into Mantle LSP and receive mETH tokens in return. mETH accrues Ethereum staking rewards (currently 5-7% APY). Unlike staked ETH which is locked until Shanghai upgrade completion, mETH is immediately liquid and transferable. Users can swap mETH for ETH on Agni or other DEXs anytime.
          </p>

          <h3 style={h3Style}>mETH in DeFi</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            mETH is composable with DeFi. Use as collateral on Lendle (borrow USDC). Provide liquidity on Agni (earn trading fees + yield farming). Farm on Moe. mETH&apos;s uniqueness: earn passive staking rewards while using capital productively in DeFi. Compounding APY on mETH often exceeds 10-15% when accounting for DeFi yields.
          </p>

          <div style={infoBoxStyle}>
            <strong>Example:</strong> Deposit 1 ETH → get 1.06 mETH per year (5% staking reward). Deposit mETH as Agni LP → earn 8% trading fees. Deposit mETH as Lendle collateral → borrow 40% of value at 10% interest. Net APY: 23%+ with risk.
          </div>
        </section>

        <section id="arch">
          <h2 style={h2Style}>Mantle&apos;s Modular Architecture</h2>

          <h3 style={h3Style}>Why Modularity Matters</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Traditional L2s (Arbitrum, Optimism) tightly couple execution, settlement, and data availability. Mantle separates these layers, allowing upgrades independently. Data availability can be switched from Ethereum to EigenLayer or other providers without re-deploying contracts. This flexibility reduces single-point failures and enables easier future upgrades.
          </p>

          <h3 style={h3Style}>EigenLayer Integration</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Mantle is exploring EigenLayer integration for data availability. EigenLayer allows stakers to provide DA to multiple chains, creating economies of scale. This reduces Mantle&apos;s data costs while improving security through shared security model with EigenLayer validators.
          </p>
        </section>

        <section id="risks">
          <h2 style={h2Style}>Risks & Considerations</h2>

          <h3 style={h3Style}>Emerging L2 Risk</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Mantle is newer than Arbitrum/Optimism with smaller TVL. Smaller ecosystem means fewer users, lower trading liquidity, and higher slippage. Code is less battle-tested. Bugs or exploits could impact assets. BitDAO treasury backing reduces but doesn&apos;t eliminate this risk.
          </p>

          <h3 style={h3Style}>Protocol Risk</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Individual projects (Agni, Lendle, mETH) carry protocol risk. Smart contract bugs could freeze funds. Lending protocols face liquidation cascade risk if collateral prices drop sharply. Only invest amounts you can afford to lose.
          </p>

          <div style={infoBoxStyle}>
            <strong>Recommendation:</strong> Start with small amounts. Allocate &lt;5% of portfolio to Mantle exploration. Prioritize established protocols (Agni, mETH) over emerging ones. Diversify across multiple projects.
          </div>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is Mantle and how does it compare to Ethereum?</h3>
            <p style={{ color: '#8b949e', margin: 0 }}>
              Mantle is a modular Layer 2 scaling solution for Ethereum. It uses a combination of optimistic rollups and data availability layers to achieve high throughput (1000+ TPS) with low fees ($0.01-0.50). Security is anchored to Ethereum through fraud proofs.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is the total TVL on Mantle?</h3>
            <p style={{ color: '#8b949e', margin: 0 }}>
              Mantle TVL was approximately $250M-500M as of April 2026, with Agni Finance leading at $100M+ TVL. Lendle, Moe, and INIT Capital together account for $50M-150M.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is Agni Finance and how does it work?</h3>
            <p style={{ color: '#8b949e', margin: 0 }}>
              Agni Finance is the leading DEX on Mantle, processing 80% of ecosystem swaps. Offers concentrated liquidity (similar to Uniswap v3), yield farming, and governance through AGN token. TVL exceeds $100M.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is mETH and how does Mantle LSP work?</h3>
            <p style={{ color: '#8b949e', margin: 0 }}>
              mETH is Mantle Liquid Staking Protocol. Users deposit ETH, receive mETH token, earn ETH staking rewards (5-7% APY). mETH remains liquid and can be used in DeFi. Similar to Lido on Ethereum.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Is Mantle secure and audited?</h3>
            <p style={{ color: '#8b949e', margin: 0 }}>
              Mantle has undergone multiple security audits by Trail of Bits and OpenZeppelin. Uses modular architecture reducing single-point failures. Inherits Ethereum security through fraud-proof system.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How does Mantle compare to Arbitrum and Optimism?</h3>
            <p style={{ color: '#8b949e', margin: 0 }}>
              Arbitrum/Optimism are larger ($10B+ TVL) and more established. Mantle is smaller ($250M-500M TVL) but offers innovative modular design and BitDAO treasury backing. Higher growth potential but higher risk.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and is not financial or investment advice. Mantle and its projects are emerging technologies with meaningful risks. Do your own research on tokenomics, team, and roadmap before investing. Only allocate capital you can afford to lose.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/learn/account-abstraction-erc-4337-guide" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Account Abstraction Erc 4337</Link></li>
            <li><Link href="/learn/aerodrome-finance-base-dex-liquidity-guide-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Aerodrome Finance Base Dex Liquidity</Link></li>
            <li><Link href="/learn/ai-agents-decentralized-ai-crypto-guide-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Ai Agents Decentralized Ai Crypto</Link></li>
            <li><Link href="/learn/ai-crypto-agents-autonomous-defi-guide-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Ai Crypto Agents Autonomous Defi</Link></li>
          </ul>
        </nav>

<nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <span style={{ color: "#8b949e" }}>Related: </span>
  <a href="/ecosystem/balancer-v3" style={{ color: "#fb923c", marginRight: "1rem" }}>Balancer V3</a>
  <a href="/ecosystem/stargate" style={{ color: "#fb923c", marginRight: "1rem" }}>Stargate</a>
  <a href="/ecosystem/usual" style={{ color: "#fb923c", marginRight: "1rem" }}>Usual</a>
  <a href="/ecosystem/best-projects-on-solana" style={{ color: "#fb923c", marginRight: "1rem" }}>Best Projects On Solana</a>
  <a href="/ecosystem/layerzero" style={{ color: "#fb923c", marginRight: "1rem" }}>Layerzero</a>
</nav>

</article>
  );
}
