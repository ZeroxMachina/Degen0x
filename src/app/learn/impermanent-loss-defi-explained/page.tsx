import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';
import AutoTOC from '@/components/AutoTOC';
import ReadingTime from '@/components/ReadingTime';


export const metadata: Metadata = {
  title: "Impermanent Loss DeFi Explained 2026: Formula, Examples,",
  description: "Complete guide to impermanent loss: mathematical formula, real examples (50/50 ETH/USDC), IL calculator. Concentrated liquidity, IL protection (Bancor),",
  keywords: ['impermanent loss', 'DeFi', 'AMM', 'Uniswap IL', 'IL calculator', 'IL protection', 'Bancor', 'concentrated liquidity', 'correlated pairs', 'LP risks'],
  openGraph: {
    type: 'article',
    title: 'Impermanent Loss DeFi Explained 2026: Formula, Examples, Mitigation',
    description: "Complete guide to impermanent loss: mathematical formula, real examples (50/50 ETH/USDC), IL calculator. Concentrated liquidity, IL protection (Bancor),",
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/learn/impermanent-loss-defi-explained',
    images: [{
      url: 'https://degen0x.com/og-learn.svg',
      width: 1200,
      height: 630,
      alt: 'Impermanent Loss Guide',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impermanent Loss DeFi Explained 2026: Formula, Examples, Mitigation',
    description: "Complete guide to impermanent loss: mathematical formula, real examples (50/50 ETH/USDC), IL calculator. Concentrated liquidity, IL protection (Bancor),",
    image: 'https://degen0x.com/og-learn.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/impermanent-loss-defi-explained',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Impermanent Loss DeFi Explained 2026: Formula, Examples, Mitigation',
  description: "Complete guide to impermanent loss: mathematical formula, real examples (50/50 ETH/USDC), IL calculator. Concentrated liquidity, IL protection (Bancor),",
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is impermanent loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Impermanent loss (IL) is the difference between holding assets vs. LPing in an AMM. You deposit $1,000 ETH + $1,000 USDC (1:1). If ETH doubles to $4,000, your LP position is worth $2,800 while holding would be $3,000. The difference ($200) is IL. Formula: IL% = (2 * sqrt(price_ratio)) / (1 + price_ratio) - 1. IL only becomes permanent when you withdraw.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does impermanent loss work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AMMs rebalance automatically. If ETH price increases, the pool sells your ETH (at old price) to maintain constant product (Uniswap x*y=k). You end up with fewer ETH than you started with. If you withdraw before price rebalances, you lock in the loss (permanent). If ETH falls back to original price, loss disappears (impermanent).',
        },
      },
      {
        '@type': 'Question',
        name: 'When does IL become permanent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IL becomes permanent when you withdraw your LP shares. If you hold the LP position, losses remain "impermanent" (they can recover if prices revert). In volatile markets, IL often becomes permanent (prices rarely revert perfectly).',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I mitigate impermanent loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '(1) Provide liquidity to correlated pairs (USDC/USDT IL<1%). (2) Use concentrated liquidity (Uniswap v3, narrower price ranges = higher fees = IL compensation). (3) Single-sided staking (farms without LPing). (4) IL protection (Bancor fully hedges IL). (5) Farm high yields (20%+ APY compensates for IL).',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Bancor IL protection worth it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bancor protects LPs from IL: if your position loses to IL, Bancor DAO treasury reimburses. Cost: BNT governance token staking. Benefit: zero IL risk. Trade-off: lower yields, BNT price risk. For conservative LPs: Bancor worth it. For yield farmers: skip (take IL risk, earn 2-3x higher yields).',
        },
      },
      {
        '@type': 'Question',
        name: 'Which pools have lowest impermanent loss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stablecoin pools (USDC/USDT/USDC) have IL <1% (prices stable). Pegged pairs (ETH/stETH) have IL <3% (prices move together). Volatile pairs (ETH/DOGE) have IL >50% on large price swings. Choose pool based on volatility.',
        },
      },
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
    { '@type': 'ListItem', position: 3, name: 'Impermanent Loss Defi Explained', },
  ],
};

export default function ImpermanentLossDeFiExplained() {
  const tableOfContents = [
    { id: 'what-is-impermanent-loss', title: 'What Is Impermanent Loss?' },
    { id: 'il-mechanics', title: 'How Impermanent Loss Works' },
    { id: 'il-example', title: 'Real Example: 50/50 ETH/USDC Pool' },
    { id: 'il-formula', title: 'Impermanent Loss Formula' },
    { id: 'when-il-permanent', title: 'When Does IL Become Permanent?' },
    { id: 'concentrated-liquidity', title: 'Concentrated Liquidity (Uniswap v3)' },
    { id: 'il-protection', title: 'IL Protection: Bancor Model' },
    { id: 'pool-il-comparison', title: 'Pools by IL Risk' },
    { id: 'mitigation-strategies', title: 'IL Mitigation Strategies' },
    { id: 'il-calculator', title: 'IL Calculator Guide' },
    { id: 'faq', title: 'FAQ' },
  ];

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
          <span style={{ color: '#c9d1d9' }}>Impermanent Loss DeFi</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <div>
            <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>Learn</span>
            <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          </div>
          <h1 style={h1Style}>Impermanent Loss DeFi Explained 2026</h1>
          <ReadingTime />
          <AutoTOC />
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Impermanent loss (IL) is the #1 risk LPs face in DeFi. Provide liquidity to ETH/USDC pool. ETH doubles. Your position is worth less than if you had just held ETH. The difference is IL. It&apos;s called "impermanent" because you only lock in losses when you withdraw. This guide explains IL mathematically, shows real examples, and covers mitigation (Bancor IL protection, concentrated liquidity, correlated pairs).
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 13 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-10"
          readingTime={13}
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

        <section id="what-is-impermanent-loss" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>1. What Is Impermanent Loss?</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Impermanent loss is the difference between: (A) holding tokens vs. (B) providing liquidity to an AMM. You deposit $1,000 ETH + $1,000 USDC into Uniswap 50/50 pool. If ETH price doubles, your LP position grows to ~$2,800 while holding would be $3,000. The $200 difference is IL. It&apos;s called "impermanent" because you can recover it if prices revert. But in volatile markets, it often becomes permanent (prices rarely revert exactly).
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
        </section>

        <section id="il-mechanics" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>2. How Impermanent Loss Works</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Uniswap uses automated market maker (AMM) formula: x * y = k (constant product). When ETH price increases, arbitrageurs sell ETH for USDC until the ratio rebalances. Your LP position is rebalanced automatically: you end up with more USDC and less ETH than you started. If you withdraw after this rebalancing, you lock in the IL.
          </p>
        </section>

        <section id="il-example" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>3. Real Example: 50/50 ETH/USDC Pool</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Scenario: Deposit 0.5 ETH ($1,000) + 1,000 USDC into 50/50 Uniswap pool. ETH price doubles to $4,000. Your LP position is rebalanced: you get 0.354 ETH + 1,414 USDC = $2,828 total. If you held 0.5 ETH, you&apos;d have $2,000 + $1,000 USDC = $3,000. IL = $3,000 - $2,828 = $172 (5.7% loss). On 10x price change, IL can reach 20-30%. On 50x change, &gt;50% IL.
          </p>
        </section>

        <section id="il-formula" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>4. Impermanent Loss Formula</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            IL% = (2 * sqrt(price_ratio)) / (1 + price_ratio) - 1. If price doubles (price_ratio = 2): IL% = (2 * sqrt(2)) / (1 + 2) - 1 = 2.83/3 - 1 = -5.7%. If price 10x (ratio = 10): IL% = (2 * sqrt(10)) / 11 - 1 = 6.32/11 - 1 = -42.5%.
          </p>
        </section>

        <section id="when-il-permanent" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>5. When Does IL Become Permanent?</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            IL is impermanent while you hold LP shares. Once you withdraw, it&apos;s permanent. Example: deposit, ETH doubles (IL = -5.7%), but you hold. If ETH falls back to original price, IL disappears (impermanent). If you withdraw when ETH is high, you lock in the loss. In volatile markets, IL often becomes permanent because prices rarely revert perfectly.
          </p>
        </section>

        <section id="concentrated-liquidity" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>6. Concentrated Liquidity (Uniswap v3)</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Uniswap v3 lets you concentrate liquidity in a price range. Provide liquidity only between $3K-$5K ETH (vs. 0-infinity in v2). Benefits: higher fees (tighter spreads = less slippage = more fees). Drawback: IL increases if price moves outside your range. v3 is better for stable pairs, worse for volatile ones.
          </p>
        </section>

        <section id="il-protection" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>7. IL Protection: Bancor Model</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Bancor DAO provides IL insurance. If your LP position loses to IL, Bancor treasury reimburses. Cost: stake BNT (governance token). Benefit: zero IL risk. Trade-off: lower yields, BNT volatility risk. For risk-averse LPs: Bancor IL protection. For yield farmers: skip (earn 2-3x higher yields by taking IL risk).
          </p>
        </section>

        <section id="pool-il-comparison" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>8. Pools by IL Risk</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Pool</th>
                <th style={thStyle}>IL Risk</th>
                <th style={thStyle}>Volatility</th>
                <th style={thStyle}>APY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>USDC/USDT</td>
                <td style={tdStyle}>&lt; 1%</td>
                <td style={tdStyle}>Minimal</td>
                <td style={tdStyle}>0.5-2%</td>
              </tr>
              <tr>
                <td style={tdStyle}>ETH/stETH</td>
                <td style={tdStyle}>2-5%</td>
                <td style={tdStyle}>Low</td>
                <td style={tdStyle}>3-8%</td>
              </tr>
              <tr>
                <td style={tdStyle}>ETH/USDC</td>
                <td style={tdStyle}>10-30%</td>
                <td style={tdStyle}>High</td>
                <td style={tdStyle}>5-15%</td>
              </tr>
              <tr>
                <td style={tdStyle}>ETH/DOGE</td>
                <td style={tdStyle}>30-50%+</td>
                <td style={tdStyle}>Very High</td>
                <td style={tdStyle}>20-100%</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="mitigation-strategies" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>9. IL Mitigation Strategies</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            (1) Choose correlated pairs (IL &lt;5%). (2) Yield farm aggressively to offset IL (20%+ APY = IL doesn&apos;t matter). (3) Use concentrated liquidity (earn more fees = higher compensation). (4) Single-sided staking (no IL, but lower yields). (5) Bancor IL protection (zero risk, lower yields). (6) Monitor prices (exit before large IL accrues).
          </p>
        </section>

        <section id="il-calculator" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>10. IL Calculator Guide</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Use IL calculator at https://uniswap.org/ or CoinGecko. Enter: initial amounts, current prices, fee tier. Output: your LP value, hold value, IL%. Recalculate daily to track IL in real-time. If IL exceeds your fee income, exit the pool.
          </p>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Can I avoid impermanent loss?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              Best you can do: provide liquidity to stable pairs (IL &lt;1%), use Bancor protection, or concentrate liquidity. You can&apos;t eliminate IL entirely.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Is IL ever a good trade?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              Yes. If you earn 20%+ APY in fees and IL is 5%, net gain is 15%. High-yield pools often justify IL risk.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Does IL apply to Curve pools?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              Curve pools have lower IL (designed for stablecoin pairs). USDC/USDT on Curve has &lt;0.1% IL. Similar mechanics to Uniswap.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How much IL before I should exit?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              If IL exceeds your earned fees, exit. Example: earned $100 in fees, IL is $150. Exit to lock in loss (temporary, hoping price reverts later).
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Can I hedge IL with options?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              Theoretically yes (buy puts). But options cost money, reducing net yield. Not practical for retail LPs.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Is IL worse than centralized exchange counterparty risk?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              Different risks. IL is market risk (prices move). Counterparty risk is exchange risk (bankruptcy). Both significant. IL is manageable; counterparty risk is binary.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only. Impermanent loss is a real risk in DeFi. Understand IL before providing liquidity. Past yields don&apos;t guarantee future returns. This is not financial advice.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/tools/altcoin-season-index" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Altcoin Season Index</Link></li>
            <li><Link href="/tools/bitcoin-dominance-chart-live" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Bitcoin Dominance Chart Live</Link></li>
            <li><Link href="/tools/bitcoin-halving-countdown" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Bitcoin Halving Countdown</Link></li>
            <li><Link href="/tools/bitcoin-mempool-visualizer" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Bitcoin Mempool Visualizer</Link></li>
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Impermanent Loss DeFi Explained 2026: Formula, Examples,", "description": "Complete guide to impermanent loss: mathematical formula, real examples (50/50 ETH/USDC), IL calculator. Concentrated liquidity, IL protection (Bancor),", "url": "https://degen0x.com/learn/impermanent-loss-defi-explained", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</div>
      <RelatedContent category="learn" currentSlug="/learn/impermanent-loss-defi-explained" />
      </article>
  );
}
