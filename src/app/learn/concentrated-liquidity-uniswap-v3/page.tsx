import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Concentrated Liquidity Uniswap V3 Guide | LP Strategy &",
  description: "Master Uniswap V3 concentrated liquidity: tick ranges, 4000x capital efficiency vs V2, IL risk, fee tiers 0.01%-1%. Arrakis, Gamma, Merkl rewards, JIT attacks,",
  keywords: ['Uniswap V3', 'concentrated liquidity', 'LP strategy', 'capital efficiency', 'tick ranges', 'impermanent loss', 'liquidity mining', 'Arrakis', 'Gamma Strategies'],
  openGraph: {
    title: 'Concentrated Liquidity Uniswap V3 Guide',
    description: 'Complete guide to concentrated liquidity, capital efficiency, IL mitigation, and optimal range selection.',
    type: 'article',
    images: [{ url: 'https://degen0x.com/og-learn.svg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Concentrated Liquidity Uniswap V3',
    description: 'Learn tick ranges, fee tiers, IL risk, and automated LP strategies for V3.',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/concentrated-liquidity-uniswap-v3',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Concentrated Liquidity in Uniswap V3: Capital Efficiency, Ranges & Strategies',
  description: 'Deep dive into Uniswap V3 concentrated liquidity, capital efficiency gains, impermanent loss mitigation, fee tiers, and automated LP strategies.',
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is concentrated liquidity?', acceptedAnswer: { '@type': 'Answer', text: 'Concentrated liquidity allows LPs to deposit capital in a specific price range (tick range) instead of the full 0 to infinity range. Capital is more efficient—you can earn the same fees with 1/4000 less capital if price stays in range. Example: ETH/USDC ±5% range is much more capital efficient than full range.' } },
      { '@type': 'Question', name: 'How much more efficient is V3 vs V2?', acceptedAnswer: { '@type': 'Answer', text: 'Up to 4000x more capital efficient for tight ranges. A tight ±1% range on V3 earns the same APY as full-range V2 with 1/100 the capital. A ±5% range on V3 earns more APY than V2 full-range with 1/25 the capital. Efficiency gain = 1 / (range width in basis points).' } },
      { '@type': 'Question', name: 'What are fee tiers?', acceptedAnswer: { '@type': 'Answer', text: 'V3 has four fee tiers: 0.01% (stablecoin-to-stablecoin, minimal IL), 0.05% (same-asset swaps), 0.30% (standard, ETH/USDC main pool), 1% (volatile pairs, altcoins). Higher fees incentivize LPs on riskier pairs. Choose tier based on pair volatility and IL risk.' } },
      { '@type': 'Question', name: 'What is impermanent loss in V3?', acceptedAnswer: { '@type': 'Answer', text: 'IL is the opportunity cost of providing liquidity vs hodling. In V3, tight ranges increase IL % because price moves outside range → IL realized. Example: ±1% range has 2.5% IL at ±10% price move. Full range V2 has same IL %. But V3 fees usually cover IL over time.' } },
      { '@type': 'Question', name: 'How do Arrakis and Gamma manage ranges?', acceptedAnswer: { '@type': 'Answer', text: 'Arrakis Finance and Gamma Strategies are automated liquidity managers that rebalance LP positions as price moves. They tighten ranges to stay profitable, harvest fees, and reinvest. Costs: 5-10% of LP fees. Benefit: passive automation, professional management, reduced IL through rebalancing.' } },
      { '@type': 'Question', name: 'What is JIT (Just-in-Time) attack?', acceptedAnswer: { '@type': 'Answer', text: 'JIT is sandwich attack on V3 pools where MEV searchers provide liquidity right before your swap, extract fees, and withdraw. Protects: use MEV-resistant pools (Uniswap SafeRouter), private mempools, or bundle swaps with Flashbots. Automated managers like Gamma mitigate JIT risk.' } },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Concentrated Liquidity Uniswap V3', },
  ],
};

export default function ConcentratedLiquidityUniswapV3() {
  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d', borderLeft: '3px solid #a78bfa', borderLeft: '3px solid #a78bfa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
  };

  const h1Style = {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 16,
    background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const h2Style = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12,
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
    { id: 'what-is-cl', title: 'What is Concentrated Liquidity?' },
    { id: 'v2-comparison', title: 'Uniswap V2 vs V3 Comparison' },
    { id: 'tick-ranges', title: 'Tick Ranges Explained' },
    { id: 'fee-tiers', title: 'Fee Tiers & Selection' },
    { id: 'capital-efficiency', title: 'Capital Efficiency Calculation' },
    { id: 'impermanent-loss', title: 'Impermanent Loss in V3' },
    { id: 'real-examples', title: 'Real ETH/USDC Examples' },
    { id: 'strategy-comparison', title: 'Range Strategy Comparison Table' },
    { id: 'automated-managers', title: 'Automated LP Managers (Arrakis, Gamma)' },
    { id: 'advanced-topics', title: 'Advanced Topics & Attacks' },
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
          <Link href="/learn" style={{ color: '#8b949e', textDecoration: 'none' }}>Learn</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Concentrated Liquidity Uniswap V3</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>Learn</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          <h1 style={h1Style}>Concentrated Liquidity in Uniswap V3: Capital Efficiency & LP Strategy</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Uniswap V3 concentrated liquidity allows LPs to deposit capital in specific tick ranges instead of 0 to infinity, achieving up to 4000x capital efficiency vs V2. Master tick ranges, fee tiers (0.01%-1%), IL mitigation, automated managers (Arrakis, Gamma), Merkl rewards, and JIT attack defense.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 18 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={18}
          section="learn"
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

        <section id="what-is-cl">
          <h2 style={h2Style}>What is Concentrated Liquidity?</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Concentrated liquidity is Uniswap V3&apos;s core innovation. Instead of providing liquidity across the entire price curve (0 to infinity like V2), V3 allows LPs to specify a tight price range and concentrate capital there. The capital earns higher APY because fees are concentrated on a smaller range.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            This is one of those topics where surface-level understanding is dangerous. We've seen traders lose significant capital from misconceptions covered in this guide.
          </p>
        </div>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Example: In V2 ETH/USDC, you deposit $10,000 across all prices. In V3, you deposit $10,000 only in the $2,450-$2,550 range (±2%). If price stays in that range, V3 earns the same fees as V2 full-range, but with 1/50 the capital. You can reinvest or use that freed capital elsewhere.
          </p>
        </section>

        <section id="v2-comparison">
          <h2 style={h2Style}>Uniswap V2 vs V3 Comparison</h2>

          <h3 style={h3Style}>V2: Full-Range Liquidity</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            In V2, you must provide liquidity across the full range (0 to infinity). If you deposit 1 ETH and 2,500 USDC at $2,500 price, your capital is spread across all price levels. You earn fees only when traders swap at your price level. Slippage protection: full range means you earn fees even during extreme price moves (at reduced APY).
          </p>

          <h3 style={h3Style}>V3: Concentrated Range</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            In V3, you specify exact tick ranges. Same 1 ETH and 2,500 USDC at $2,500, but only for $2,450-$2,550. Capital is dense—earns much higher fees per unit capital. Risk: if price moves outside range, you stop earning fees and have realized impermanent loss (IL).
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#fbbf24' }}>Key Differences:</strong>
            <ul style={{ marginTop: 12, marginLeft: 20, color: '#c9d1d9' }}>
              <li><strong>V2:</strong> Always earning fees, simple, but low APY capital inefficient</li>
              <li><strong>V3:</strong> Higher APY, but requires active management, range risk</li>
              <li><strong>V2 APY:</strong> 5-15% on stable pairs, 10-30% on volatile</li>
              <li><strong>V3 APY:</strong> 20-100%+ on tight ranges, but concentrated risk</li>
            </ul>
          </div>
        </section>

        <section id="tick-ranges">
          <h2 style={h2Style}>Tick Ranges Explained</h2>

          <h3 style={h3Style}>What is a Tick?</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            A tick is the smallest discrete price step in Uniswap V3. Tick spacing varies by fee tier: 0.01% tier = 0.01 tick spacing (very granular), 0.3% tier = 60 tick spacing, 1% tier = 200 tick spacing. Current price is always a multiple of its fee tier&apos;s tick. You select ticks to define your range.
          </p>

          <h3 style={h3Style}>Range Examples</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            ETH at $2,500 in 0.3% fee tier. You want ±5% range: $2,375 to $2,625. You want ±1% range: $2,475 to $2,525. Tighter ranges = higher capital efficiency = higher IL risk. Sweet spot for most is ±2-5% ranges (earn good fees without extreme IL).
          </p>

          <h3 style={h3Style}>Out-of-Range Behavior</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            If price moves outside your range, your position is fully converted to one asset (the extremity asset). You stop earning fees. Your IL is realized. You must rebalance manually or use automated managers. Rebalancing costs gas, so tight ranges require frequent rebalancing if price is volatile.
          </p>
        </section>

        <section id="fee-tiers">
          <h2 style={h2Style}>Fee Tiers & Selection</h2>

          <h3 style={h3Style}>The Four Fee Tiers</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            V3 has four fee tiers: 0.01%, 0.05%, 0.30%, 1%. Each pair can have multiple pools (USDC-USDT has 0.01%, 0.05%, and 0.30% pools). LPs choose which pool to provide to based on volatility and capital efficiency goals.
          </p>

          <h3 style={h3Style}>0.01% Tier (Ultra-Stable)</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Used for stablecoin-to-stablecoin pairs (USDC-USDT, DAI-USDC). Very tight ranges possible because prices are pinned. Fees are tiny (0.01% per swap) but volume is massive. APY: 2-8% depending on pair. Best for capital that wants minimal risk and knows price won&apos;t move much.
          </p>

          <h3 style={h3Style}>0.05% Tier</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Used for same-asset pairs (wstETH-ETH, where peg is tight). Moderate fees, moderate range. APY: 5-20%. Less popular; most traffic is 0.3% or 1%.
          </p>

          <h3 style={h3Style}>0.30% Tier (Standard)</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Default for ETH/USDC, BTC/USDC, and most blue-chip pairs. High volume, balanced fees. APY: 10-40% depending on range. Most liquidity is here. Recommended for beginners.
          </p>

          <h3 style={h3Style}>1% Tier (Volatile)</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Used for volatile altcoin pairs (SHIB-ETH, OP-ETH). High fees compensate for IL. APY: 30-200%+. Risks: extreme IL, rug pulls, low liquidity. Only for experienced LPs and deep research.
          </p>
        </section>

        <section id="capital-efficiency">
          <h2 style={h2Style}>Capital Efficiency Calculation</h2>

          <h3 style={h3Style}>The Formula</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Capital efficiency multiplier = 1 / (range_percentage). If range is ±5%, efficiency = 1 / 0.10 = 10x (you earn 10x APY with 1/10 capital). If range is ±1%, efficiency = 1 / 0.02 = 50x.
          </p>

          <h3 style={h3Style}>Example Calculation</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            V2 full-range APY on ETH/USDC = 15%. You want 15% APY on V3. If you choose ±5% range, efficiency = 10x. You need 1/10 the capital: $100,000 V2 → $10,000 V3 for same yield. The freed $90,000 can earn yield elsewhere. Or you can use $100,000 on ±5% range and earn 150% APY (if volume holds).
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#fbbf24' }}>Key Point:</strong>
            <p style={{ marginTop: 8, color: '#c9d1d9' }}>
              Tighter ranges = higher APY on same capital. But if price moves outside range, IL increases exponentially. Risk/reward tradeoff. Test ranges on historical price data before committing capital.
            </p>
          </div>
        </section>

        <section id="impermanent-loss">
          <h2 style={h2Style}>Impermanent Loss in V3</h2>

          <h3 style={h3Style}>IL Percent at Different Ranges</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            IL % is the same regardless of V2 or V3 at a given price move. But V3 ranges concentrate the loss. IL at ±10% price move ≈ 0.5%. IL at ±20% price move ≈ 5.7%. IL at ±50% price move ≈ 25%.
          </p>

          <h3 style={h3Style}>Range vs IL Trade-off</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Tight ±1% range: if price moves to ±10%, you suffer 0.5% IL but earned 3+ days of 20%+ APY fees = likely profitable. Wide ±20% range: if price moves ±50%, you suffer 25% IL but earn steady fees = may break even or profit after months. Wide range = less IL risk, lower APY. Tight range = more IL risk, higher APY.
          </p>

          <h3 style={h3Style}>Fee Coverage of IL</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            On high-volume pairs, fees accumulate fast. If earning 50% APY on a ±5% range, you cover the 0.5% IL from a ±10% move in ~4 days of fees. On low-volume pairs, IL may never be covered. Understand pair volume before committing.
          </p>
        </section>

        <section id="real-examples">
          <h2 style={h2Style}>Real ETH/USDC Examples</h2>

          <h3 style={h3Style}>Conservative: ±10% Range</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Deposit $50,000 (25 ETH + 62,500 USDC at $2,500 ETH). Range: $2,250 to $2,750. High volume, lots of swaps. Daily fees: ~$50 (0.1% daily = 36.5% APY). If price moves to $2,750 (10% up), you&apos;re out of range but earned $350 in fees = covers 7x the IL. Hold for rebalancing or close position happily.
          </p>

          <h3 style={h3Style}>Moderate: ±5% Range</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Same $50,000 (25 ETH + 62,500 USDC). Range: $2,375 to $2,625. Tighter = higher fees per block. Daily fees: ~$80 (0.16% = 58% APY). If price moves ±5%, you&apos;re still in range. If price moves to $2,625, out of range, earn $560 in fees before exiting = huge profit despite IL. This is the sweet spot for most LPs.
          </p>

          <h3 style={h3Style}>Aggressive: ±2% Range</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            $50,000 in $2,450-$2,550 range. Daily fees: ~$150 (0.3% = 110% APY). Requires active rebalancing if price is volatile. If ETH moves to $2,550, rebalance (costs ~$50 gas). If you don&apos;t rebalance and price moves to $2,600, you&apos;re fully USDC and suffer IL. Requires daily monitoring—best for traders, not passive LPs.
          </p>
        </section>

        <section id="strategy-comparison">
          <h2 style={h2Style}>Range Strategy Comparison Table</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Range Width</th>
                <th style={thStyle}>Capital Efficiency</th>
                <th style={thStyle}>Expected APY</th>
                <th style={thStyle}>IL Risk</th>
                <th style={thStyle}>Rebalancing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>±10%</strong></td>
                <td style={tdStyle}>2x</td>
                <td style={tdStyle}>20-40%</td>
                <td style={tdStyle}>Low</td>
                <td style={tdStyle}>Monthly</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>±5%</strong></td>
                <td style={tdStyle}>10x</td>
                <td style={tdStyle}>40-80%</td>
                <td style={tdStyle}>Medium</td>
                <td style={tdStyle}>Weekly</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>±2%</strong></td>
                <td style={tdStyle}>50x</td>
                <td style={tdStyle}>80-200%</td>
                <td style={tdStyle}>High</td>
                <td style={tdStyle}>Daily</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>±1%</strong></td>
                <td style={tdStyle}>100x</td>
                <td style={tdStyle}>150-500%</td>
                <td style={tdStyle}>Very High</td>
                <td style={tdStyle}>Multiple/day</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="automated-managers">
          <h2 style={h2Style}>Automated LP Managers (Arrakis, Gamma)</h2>

          <h3 style={h3Style}>Arrakis Finance</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Arrakis is an automated liquidity manager on Uniswap V3. You deposit tokens into a vault. Arrakis manages your position: rebalances as price moves, tightens/widens ranges dynamically, claims and reinvests fees. Fee: 5% of accrued fees. Benefit: passive, professional management, optimized for APY. Risk: smart contract risk, fee overhead.
          </p>

          <h3 style={h3Style}>Gamma Strategies</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Gamma Strategies is similar to Arrakis. LPs deposit into vaults, Gamma manages ranges and rebalancing. Uses sophisticated algorithms to predict volatility and adjust ranges. Fee: 5-10% of fees. Some Gamma vaults run on 8-hour rebalancing cycles (minimum gas waste). Strong track record on Uniswap.
          </p>

          <h3 style={h3Style}>Merkl Rewards</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Merkl is a reward aggregator for liquidity providers. Protocols incentivize Merkl-tracked LPs with governance tokens (ARB, OP, USDC). Depositing into Arrakis or Gamma vaults tracked by Merkl can earn additional yield on top of swap fees. Check Merkl&apos;s app for current campaigns—some offer 50%+ additional APY.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#fbbf24' }}>When to Use Automated Managers:</strong>
            <ul style={{ marginTop: 12, marginLeft: 20, color: '#c9d1d9' }}>
              <li>You want passive income without managing ranges</li>
              <li>You lack time to rebalance frequently</li>
              <li>Volatility is high and manual rebalancing is risky</li>
              <li>You want to capture Merkl incentive campaigns</li>
              <li>Comfortable with smart contract risks</li>
            </ul>
          </div>
        </section>

        <section id="advanced-topics">
          <h2 style={h2Style}>Advanced Topics & Attacks</h2>

          <h3 style={h3Style}>JIT (Just-in-Time) Attacks</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            JIT is a sandwich attack where MEV searchers see your pending swap in the mempool, provide liquidity right before your swap (capturing fees), then immediately withdraw after. They extract fees meant for LPs. Mitigation: use MEV-resistant routers (Uniswap&apos;s SafeRouter), private mempools, or bundle swaps with Flashbots. Automated managers like Gamma have JIT resistance.
          </p>

          <h3 style={h3Style}>Liquidity Fragmentation</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            V3 allows multiple fee tiers for the same pair. Liquidity is fragmented across 0.01%, 0.05%, 0.3%, 1%. This can reduce slippage depth in individual pools vs V2&apos;s consolidated liquidity. Traders might use a cross-pool swap if one pool is thin. Advantage: specialized ranges for different use cases.
          </p>

          <h3 style={h3Style}>Position Expiration & Gas Decay</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Positions don&apos;t expire, but if price moves out of range and you don&apos;t rebalance, you stop earning fees while paying gas. Very tight ranges can become unprofitable if gas prices spike. Always factor gas costs into range decisions, especially on L1.
          </p>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is concentrated liquidity?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 0, color: '#c9d1d9' }}>
              Concentrated liquidity allows LPs to deposit capital in a specific price range (tick range) instead of 0 to infinity. Capital is more efficient—you can earn the same fees with 1/4000 less capital if price stays in range. Example: ETH/USDC ±5% range is 10x more capital efficient than full range V2 (assuming same fees).
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How much more efficient is V3 vs V2?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 0, color: '#c9d1d9' }}>
              Up to 4000x more capital efficient for very tight ranges. A tight ±1% range on V3 earns the same APY as full-range V2 with 1/100 the capital. A ±5% range on V3 earns more APY than V2 full-range with 1/10 the capital. Efficiency multiplier = 1 / (range width %), capped at 4000x.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What are fee tiers?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 0, color: '#c9d1d9' }}>
              V3 has four fee tiers: 0.01% (stablecoin-to-stablecoin, minimal IL), 0.05% (same-asset swaps), 0.30% (standard, ETH/USDC main pool), 1% (volatile pairs, altcoins). Higher fees incentivize LPs on riskier pairs. Choose tier based on pair volatility and IL risk. Most volume is in 0.3%.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is impermanent loss in V3?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 0, color: '#c9d1d9' }}>
              IL is the opportunity cost of providing liquidity vs hodling. In V3, tight ranges increase IL % because price moves outside range → IL realized faster. Example: ±1% range has 2.5% IL at ±10% price move. Full range V2 has 0.5% IL at same move. But V3 fees usually cover IL quickly on high-volume pairs.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How do Arrakis and Gamma manage ranges?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 0, color: '#c9d1d9' }}>
              Arrakis Finance and Gamma Strategies are automated liquidity managers that rebalance LP positions as price moves. They tighten ranges to stay profitable, harvest fees, and reinvest. Costs: 5-10% of LP fees. Benefit: passive automation, professional management, reduced IL through rebalancing. Merkl can add extra incentives.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is JIT (Just-in-Time) attack?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 0, color: '#c9d1d9' }}>
              JIT is a sandwich attack where MEV searchers provide liquidity right before your swap, extract fees, and withdraw. Protects: use MEV-resistant routers (Uniswap SafeRouter), private mempools, or Flashbots bundles. Automated managers like Gamma have JIT resistance built-in. For most LPs, this is low-risk.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and does not constitute financial advice or investment advice. Concentrated liquidity involves smart contract risk, impermanent loss, and market risk. Always test on small amounts, understand fee structures, and research pairs thoroughly before committing large capital. Past APY does not guarantee future returns. Gas costs and rebalancing may reduce profitability on L1.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/tools/blockchain-explorer-tool" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Blockchain Explorer Tool</Link></li>
            <li><Link href="/tools/compound-interest-crypto-calculator" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Compound Interest Crypto Calculator</Link></li>
            <li><Link href="/tools/crypto-airdrop-tracker" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Airdrop Tracker</Link></li>
            <li><Link href="/tools/crypto-correlation-matrix" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Correlation Matrix</Link></li>
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
  );
}
