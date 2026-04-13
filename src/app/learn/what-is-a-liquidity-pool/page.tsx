import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Liquidity Pools Explained: AMM & Impermanent Loss 2026',
  description: 'Master liquidity pools: x*y=k formula, Uniswap V2 vs V3, impermanent loss calculations, LP yields (10-25% APY), concentrated liquidity, and MEV impact.',
  keywords: ['liquidity pools', 'AMM', 'Uniswap', 'impermanent loss', 'LP yield', 'concentrated liquidity', 'Curve', 'Balancer'],
  openGraph: {
    type: 'article',
    title: 'Liquidity Pools Explained: AMM & Impermanent Loss 2026',
    description: 'Master LP mechanics: x*y=k, Uniswap V3 concentration, IL calculations, 10-25% APY yields.',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/learn/what-is-a-liquidity-pool',
    images: [{ url: 'https://degen0x.com/og-learn.svg', width: 1200, height: 630, alt: 'Liquidity Pools Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liquidity Pools & AMM Guide 2026',
    description: 'Master x*y=k, V3 concentration, impermanent loss, yield farming.',
    image: 'https://degen0x.com/og-learn.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/what-is-a-liquidity-pool',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Liquidity Pools Explained: AMM, Impermanent Loss, Yield',
  description: 'Master liquidity pools: AMM mechanics, V2/V3, StableSwap, IL calculation, yields.',
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a liquidity pool and how do AMMs work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Liquidity pool: two-token smart contract vault with constant product formula x*y=k. LPs deposit both tokens, receive LP tokens. Traders swap one token for another, price = pool ratio (x/y). Example: 10 ETH + $30K USDC pool, price = $3K/ETH. Swap 1 ETH: get $2,727 USDC (9% slippage). AMM = Automated Market Maker (no order book).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is impermanent loss (IL) and how is it calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IL: when price diverges from entry, LP position underperforms hodling. Formula: IL% = 2*sqrt(price_ratio)/(1+price_ratio) - 1. Example: enter at $2K/ETH, ETH rallies to $4K (2x). Hold: $10K → $20K (+100%). LP: $9,700 (-3% vs hold). IL risk: 2x = -5.7%, 3x = -13.4%, 10x = -48.5%.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Uniswap V2 and V3?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'V2: full-range liquidity 0 to ∞. Low capital efficiency, maximum IL protection. V3: concentrated range ($1.95K-$2.05K). 20-100x capital efficiency, higher fees in-range, liquidation if price exits. V2 best for volatile pairs, V3 best for stablecoins and active management.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do Curve stable pools differ from Uniswap?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Curve StableSwap formula optimized for 1:1 pairs. Slippage: 0.01% vs 0.3% Uniswap. Capital efficiency: 10-20x vs 1x. Disadvantage: only works for correlated pairs. Example: USDC-USDT has $3B Curve liquidity.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are realistic LP yields and how are they composed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typical LP yields 2026: Stablecoins (Curve): 10-15% APY. Volatile pairs (V2): 5-10% APY. V3 concentrated: 20-50% APY. Farming: 25%+ APY. Composition: trading fees (0.5-1% of volume) + governance rewards + incentives.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is JIT liquidity and MEV impact on LPs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'JIT: bots add liquidity right before large trade, sandwich trade, remove immediately (0.1s). Earn 100% of swap fees with zero IL. MEV: sandwich attacks, front-running. LPs suffer 0.5-5% per trade. Defense: use L2 with MEV ordering fairness, Flashbots Protect.',
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


const thStyle: React.CSSProperties = { padding: '12px', borderBottom: '2px solid #30363d', textAlign: 'left', fontWeight: 700 };
const linkStyle: React.CSSProperties = { color: '#58a6ff', textDecoration: 'none', cursor: 'pointer' };
const tdStyle: React.CSSProperties = { padding: '12px', borderBottom: '1px solid #30363d' };
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse' };
const h3Style: React.CSSProperties = { fontSize: 18, fontWeight: 700, marginTop: 32, marginBottom: 12, color: '#c9d1d9' };

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'What Is A Liquidity Pool', },
  ],
};

export default function LiquidityPoolsPage() {
  const h1Style = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text' as const, WebkitTextFillColor: 'transparent', backgroundClip: 'text' };
  const h2Style = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12, };
  const h3Style = { fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' };
  const badgeStyle = { display: 'inline-block' as const, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16 };
  const linkStyle = { color: '#58a6ff', textDecoration: 'none' };
  const tableStyle = { width: '100%', borderCollapse: 'collapse' as const, marginBottom: 24, fontSize: 14 };
  const thStyle = { background: '#0d1117', border: '1px solid #30363d', padding: 12, textAlign: 'left' as const, fontWeight: 700, color: '#e6edf3' };
  const tdStyle = { border: '1px solid #30363d', padding: 12, color: '#8b949e' };
  const infoBoxStyle = { background: '#161b22', border: '1px solid #30363d', borderLeft: '3px solid #a78bfa', borderLeft: '3px solid #a78bfa', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };

  return (
    <article style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/learn" style={{ color: '#8b949e', textDecoration: 'none' }}>Learn</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Liquidity Pools</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>Learn</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          <h1 style={h1Style}>Liquidity Pools Explained</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>Master x*y=k formula, Uniswap V2 vs V3 concentrated liquidity, Curve StableSwap, impermanent loss calculations, and LP yields (10-25% APY).</p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e' }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 18 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-10"
          readingTime={18}
          section="learn"
        />


        <section style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>What Are Liquidity Pools?</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>Liquidity pools are smart contracts holding equal value of two tokens enabling peer-to-peer trading without order books. Liquidity Providers (LPs) deposit both tokens, receive LP tokens representing ownership share. Traders swap by depositing one token, receiving another based on pool ratio. LPs earn trading fees (0.01%-1% per swap) and governance incentives.</p>
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
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>2026 DeFi liquidity: $180B TVL across all DEXs. Uniswap ($5.2B), Curve ($2.1B), Balancer ($1.8B). Risks: impermanent loss, smart contract bugs, MEV sandwich attacks. Returns: 10-25% APY depending on pair volatility and incentives.</p>
        </section>

        <section style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>AMM & Constant Product Formula (x*y=k)</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>Constant product formula: x * y = k. When you swap token A for B, pool receives A (x increases), sends B (y decreases), maintaining product. Price = pool ratio (x/y).</p>
          <h3 style={h3Style}>Example: ETH-USDC Pool</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>Pool: 10 ETH + $30,000 USDC. k = 10 × 30,000 = 300,000. Price = $3,000/ETH. Trader swaps 1 ETH: (10 + 1) × y = 300,000. y = 27,272.7. Trader receives $2,727 USDC (9.1% slippage).</p>
        </section>

        <section style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Uniswap V2 vs V3 Concentrated Liquidity</h2>
          <h3 style={h3Style}>Uniswap V2 (Full-Range)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>Liquidity spread across 0 to infinity price range. Capital inefficient but maximum IL protection. Best for volatile pairs, passive LPs.</p>
          <h3 style={h3Style}>Uniswap V3 (Concentrated)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>Concentrate liquidity in narrow range. 20-100x capital efficiency. Higher fees in-range, risk if price exits range. Best for stablecoins, active management.</p>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Feature</th>
                <th style={thStyle}>V2</th>
                <th style={thStyle}>V3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Range</td>
                <td style={tdStyle}>0 to ∞</td>
                <td style={tdStyle}>Custom (e.g., $1.9-$2.1K)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Capital Efficiency</td>
                <td style={tdStyle}>1x</td>
                <td style={tdStyle}>20-100x</td>
              </tr>
              <tr>
                <td style={tdStyle}>IL Risk</td>
                <td style={tdStyle}>High (spread everywhere)</td>
                <td style={tdStyle}>Very high (if out-of-range)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Impermanent Loss: Definition & Calculation</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>Impermanent Loss (IL): when price moves from entry, LP position underperforms hodling. Called "impermanent" because IL reverses if price returns to entry point.</p>
          <h3 style={h3Style}>IL Calculation Example</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>Entry: $5K ETH @ $2K + $5K USDC. Price moves: ETH = $4K (2x). Hold: 2.5 ETH = $15K total. LP: 1.76 ETH + $7,050 USDC = $10,090. IL = ~$5K relative to hodling (50% of upside foregone).</p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>IL Recovery via Fees</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14, color: '#c9d1d9' }}>Fee earnings can offset IL. High-volume pair: ETH-USDC 0.05% earns 1-2% monthly fees. If ETH 2x moves (5.7% IL), fees recover it within 3-6 months.</p>
          </div>
        </section>

        <section style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Yield Farming & MEV Impact</h2>
          <h3 style={h3Style}>Yield Farming Incentives</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>Protocols distribute tokens to LPs. Aave LM: ETH-GHO pool earns AAVE + fees = 25% APY. Strategy: farm early, exit within 3-4 months. Expect 50% token depreciation post-launch.</p>
          <h3 style={h3Style}>MEV Impact on LPs</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>Sandwich attacks: bots insert transactions before/after yours. LP loses 0.5-5% per trade. Defense: use L2 with MEV ordering, Flashbots Protect.</p>
        </section>

        <section style={{ scrollMarginTop: 48, marginTop: 48 }}>
          <h2 style={h2Style}>FAQ</h2>
          {[
            { q: 'What is a liquidity pool and how do AMMs work?', a: 'Liquidity pool: two-token vault, x*y=k formula. Traders swap one token for another, price = pool ratio (x/y). LPs deposit both tokens, earn fees. AMM = Automated Market Maker (no order book).' },
            { q: 'What is impermanent loss (IL)?', a: 'When price diverges from entry, LP position underperforms hodling. Formula: IL% = 2*sqrt(price_ratio)/(1+price_ratio) - 1. Example: 2x price = -5.7% IL. Recoverable if price returns to entry.' },
            { q: 'What is the difference between Uniswap V2 and V3?', a: 'V2: full-range, 1x capital efficiency, passive. V3: concentrated range, 20-100x efficiency, active management. V3 better for stablecoins, V2 better for volatile pairs.' },
            { q: 'How do Curve stable pools differ from Uniswap?', a: 'Curve: optimized for 1:1 pairs, 0.01% slippage, 10-20x capital efficiency. Uniswap: general purpose, 0.3% slippage, 1x efficiency. Curve only works for correlated pairs.' },
            { q: 'What are realistic LP yields and how do I find high-yield pools?', a: 'Stablecoins (Curve): 10-15% APY. Volatile pairs (V2): 5-10% APY. V3 concentrated: 20-50% APY. Monitor DefiLlama for current rates.' },
            { q: 'What is JIT liquidity and MEV impact?', a: 'JIT: bots add/remove liquidity in single block (earn fees, no IL). MEV: sandwich attacks, front-running (lose 0.5-5%). Defense: use L2 with MEV protection.' },
          ].map((faq, i) => (
            <div key={i} style={{ ...infoBoxStyle, marginBottom: 16 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#58a6ff', marginBottom: 10 }}>{faq.question}</h3>
              <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>{faq.answer}</p>
            </div>
          ))}
        </section>

        <nav style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid #30363d' }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: '#e6edf3' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><Link href="/learn/what-is-a-crypto-index-fund" style={linkStyle}>Crypto Index Funds Explained</Link></li>
            <li><Link href="/learn/uniswap-v4-concentrated-liquidity-hooks" style={linkStyle}>Uniswap V4: Hooks & Liquidity Curves</Link></li>
            <li><Link href="/learn/aerodrome-finance-base-dex-liquidity-guide-2026" style={linkStyle}>Aerodrome: Base DEX Liquidity Guide</Link></li>
            <li><Link href="/learn/dex-aggregators-trade-routing-guide-2026" style={linkStyle}>DEX Aggregators & Trade Routing</Link></li>
            <li><Link href="/learn/defi-yield-farming-strategies-2026" style={linkStyle}>DeFi Yield Farming Strategies</Link></li>
          </ul>
        </nav>

        <div style={{ marginTop: 32, padding: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 8, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> LP carries impermanent loss, MEV, and smart contract risks. IL can exceed 50% on volatile pairs. Only provide liquidity with capital you can afford to lose. This is educational content only, not financial advice.
        </div>
      </div>
    
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Liquidity Pools Explained: AMM & Impermanent Loss 2026", "description": "Master liquidity pools: x*y=k formula, Uniswap V2 vs V3, impermanent loss calculations, LP yields (10-25% APY), concentrated liquidity, and MEV impact.", "url": "https://degen0x.com/learn/what-is-a-liquidity-pool", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</div>
      </article>
  );
}
