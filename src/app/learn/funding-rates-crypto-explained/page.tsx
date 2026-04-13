import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Funding Rates Crypto Explained | Perpetual Swaps & Arbitrage",
  description: "Master funding rates: 8-hour intervals, positive/negative rates, cash-and-carry arbitrage. Delta-neutral farming 15-30% APY, funding rate sentiment indicator,",
  keywords: ['funding rates', 'perpetual swaps', 'crypto arbitrage', 'funding rate arbitrage', 'delta-neutral', 'APY farming', 'basis trading', 'crypto derivatives'],
  openGraph: {
    title: 'Funding Rates Crypto Explained',
    description: 'Complete guide to perpetual swap funding mechanics, arbitrage, and delta-neutral strategies.',
    type: 'article',
    images: [{ url: 'https://degen0x.com/og-learn.svg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Funding Rates Explained',
    description: 'Learn perpetual swap funding, arbitrage, market sentiment, and risk management.',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/funding-rates-crypto-explained',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Funding Rates in Crypto: Perpetuals, Arbitrage & Delta-Neutral Strategies',
  description: 'Comprehensive guide to funding rates, perpetual swaps, cash-and-carry arbitrage, delta-neutral farming, and funding rate sentiment.',
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What are funding rates?', acceptedAnswer: { '@type': 'Answer', text: 'Funding rates are periodic payments between long and short traders on perpetual swap exchanges. When funding is positive, longs pay shorts (bullish sentiment, longs overlevered). When funding is negative, shorts pay longs (bearish sentiment, shorts overlevered). Rates settle every 8 hours on most exchanges (Binance, Bybit, OKX).' } },
      { '@type': 'Question', name: 'How do you arbitrage funding rates?', acceptedAnswer: { '@type': 'Answer', text: 'Cash-and-carry arbitrage: buy spot Bitcoin, go long perps on same notional, collect funding rate payments. If funding is +0.05% per 8h = +0.15% daily ≈ +55% APY. Risk: basis can widen (contango), liquidation risk if over-leveraged, exchange closure, slippage.' } },
      { '@type': 'Question', name: 'What is delta-neutral farming?', acceptedAnswer: { '@type': 'Answer', text: 'Delta-neutral: go long perpetuals while shorting the same amount on another exchange (or vice versa). Price changes cancel out (hedged). You profit from funding rate spread. If Binance pays +0.06% and Bybit charges -0.02%, you capture +0.08% per period = 30%+ APY hedged.' } },
      { '@type': 'Question', name: 'How do funding rates reflect market sentiment?', acceptedAnswer: { '@type': 'Answer', text: 'High positive funding rates = longs excited and overlevered (potential reversal). High negative funding rates = shorts overconfident and overlevered (potential squeeze). Extreme funding (>0.5% per 8h) signals top/bottom coming. Funding is a contrarian indicator.' } },
      { '@type': 'Question', name: 'What are the risks of funding rate arbitrage?', acceptedAnswer: { '@type': 'Answer', text: 'Risks: basis widening (contango/backwardation), liquidation if under-collateralized, exchange credit risk, slippage on entry/exit, leverage requirements, funding rate changes, and basis risk (spot/perp divergence over time).' } },
      { '@type': 'Question', name: 'Which exchange has the highest funding rates?', acceptedAnswer: { '@type': 'Answer', text: 'Funding varies hourly, but typically Binance averages +0.025-0.05% per 8h for BTC, Bybit +0.03-0.07%, OKX +0.02-0.06%, Deribit (options) varies. During bull runs, Binance tends to spike higher due to retail leverage.' } },
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
    { '@type': 'ListItem', position: 3, name: 'Funding Rates Crypto Explained', },
  ],
};

export default function FundingRatesCryptoExplained() {
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
    { id: 'what-are-funding', title: 'What Are Funding Rates?' },
    { id: 'mechanics', title: 'Funding Rate Mechanics' },
    { id: 'settlement', title: '8-Hour Settlement Cycle' },
    { id: 'positive-negative', title: 'Positive vs Negative Funding' },
    { id: 'cash-carry', title: 'Cash-and-Carry Arbitrage' },
    { id: 'delta-neutral', title: 'Delta-Neutral Farming Strategy' },
    { id: 'sentiment', title: 'Funding Rates as Sentiment Indicator' },
    { id: 'exchange-comparison', title: 'Exchange Funding Rate Comparison' },
    { id: 'bull-bear-patterns', title: 'Funding Patterns in Bull & Bear Markets' },
    { id: 'risks', title: 'Risks & Risk Management' },
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
          <span style={{ color: '#c9d1d9' }}>Funding Rates Explained</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>Learn</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          <h1 style={h1Style}>Funding Rates in Crypto: Perpetuals, Arbitrage &amp; Delta-Neutral Strategies</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Funding rates are periodic payments between long and short traders on perpetual swap exchanges. Positive rates = longs pay shorts (bullish). Negative rates = shorts pay longs (bearish). Cash-and-carry arbitrage captures funding as APY. Delta-neutral farming hedges price risk and earns 15-30% APY. Understand funding mechanics, exchange differences, and sentiment signals.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 17 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={17}
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

        <section id="what-are-funding">
          <h2 style={h2Style}>What Are Funding Rates?</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Funding rates are periodic payments exchanged between long and short traders on perpetual swap contracts. Unlike futures with expiration dates, perps are perpetual—they trade forever. To keep perp price in line with spot price, funding rates incentivize traders to balance longs and shorts.
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
            When perp price is higher than spot (bulls overexcited), funding becomes positive—longs pay shorts to bring price down. When perp price is lower than spot (bears overexcited), funding becomes negative—shorts pay longs to bring price up. It&apos;s a self-correcting mechanism.
          </p>
        </section>

        <section id="mechanics">
          <h2 style={h2Style}>Funding Rate Mechanics</h2>

          <h3 style={h3Style}>How Funding is Calculated</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Funding rate = Premium (perp price - spot price) / spot price + Interest Rate. Most exchanges ignore interest (assume zero), so funding = premium / spot. If perp BTC trades at $45,100 and spot is $45,000, premium is $100. Funding = $100 / $45,000 = 0.22% per 8 hours.
          </p>

          <h3 style={h3Style}>Funding Direction</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Positive funding: longs pay shorts. Negative funding: shorts pay longs. The side paying is the "maker" or holder of leverage. Payment occurs every 8 hours on most major exchanges (Binance, Bybit, OKX, Deribit).
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#fbbf24' }}>Example Calculation:</strong>
            <ul style={{ marginTop: 12, marginLeft: 20, color: '#c9d1d9' }}>
              <li>Perp ETH: $2,510</li>
              <li>Spot ETH: $2,500</li>
              <li>Premium: $10 / $2,500 = +0.4% per 8h</li>
              <li>If you hold 1 ETH long perp: you pay 0.4% = $10 every 8h</li>
              <li>If you hold 1 ETH short perp: you receive 0.4% = $10 every 8h</li>
            </ul>
          </div>
        </section>

        <section id="settlement">
          <h2 style={h2Style}>8-Hour Settlement Cycle</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Most major exchanges settle funding rates every 8 hours: 00:00, 08:00, and 16:00 UTC (Binance, Bybit standard). OKX uses 08:00, 16:00, 00:00. Deribit uses perpetual settlement (hourly). The timing matters for arbitrageurs—you need to hold position until settlement to collect funding.
          </p>

          <h3 style={h3Style}>Predicted vs Actual Rates</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Exchanges show predicted funding rate (based on current premium) and actual rate (which settles). If predicted rate is +0.05% and you enter long 1 hour before settlement, you only collect funding for that 1 hour (roughly +0.0063%). Entry timing matters for small positions.
          </p>
        </section>

        <section id="positive-negative">
          <h2 style={h2Style}>Positive vs Negative Funding</h2>

          <h3 style={h3Style}>Positive Funding (Longs Pay)</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Positive funding occurs during bull markets when retail traders are excited and buying leveraged longs. Perp premium widens (perps trade above spot). Positive funding is an on-chain signal of retail overleverage—often precedes pullbacks. When funding exceeds +0.15% per 8h, be cautious; liquidations may be coming.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Example: March 2024, Bitcoin rallied to $52,000. Binance BTC perp funding spiked to +0.12% per 8h (+0.36% daily, +130% APY!). Retail piled into leveraged longs. Within 2 weeks, a liquidation cascade occurred; Bitcoin dropped to $48,000. Longs who were collecting funding got liquidated.
          </p>

          <h3 style={h3Style}>Negative Funding (Shorts Pay)</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Negative funding occurs during bear markets or sharp corrections when shorters are overconfident. Perp price falls below spot (backwardation). Negative funding is a contrarian signal—shorts are overlevered and vulnerable to squeezes. When funding drops below -0.10% per 8h, bounces are likely.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Example: September 2023, Ethereum crashed on macro news. Bybit ETH perp funding fell to -0.08% per 8h. Short traders dominated. A week later, Fed signals reduced rate hikes; ETH bounced +12% in 2 days. Short squeezees liquidated, funding flipped positive.
          </p>
        </section>

        <section id="cash-carry">
          <h2 style={h2Style}>Cash-and-Carry Arbitrage</h2>

          <h3 style={h3Style}>The Strategy</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Cash-and-carry arbitrage is simple: buy spot Bitcoin, go long perp Bitcoin on same notional, collect funding payments. You&apos;re long the spot and long the perp simultaneously—price risk is hedged. You profit only from funding rate spread.
          </p>

          <h3 style={h3Style}>Example Trade</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Buy 1 BTC spot at $45,000 on Kraken. Simultaneously, go long 1 BTC perp on Binance at $45,000 with 1x leverage (no leverage = no liquidation risk). Binance funding is +0.05% per 8h. Over 30 days: ~11 payments × 0.05% = 0.55% gain = $247.50 on $45,000. Annualized: ~6.7% APY pure funding. Add spot yield (staking) and you&apos;re at 8-10% APY low-risk.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#fbbf24' }}>Cash-and-Carry Considerations:</strong>
            <ul style={{ marginTop: 12, marginLeft: 20, color: '#c9d1d9' }}>
              <li>Need capital for both spot + perp (2x capital)</li>
              <li>Funding can turn negative (reversal risk)</li>
              <li>Basis can widen (contango loss)</li>
              <li>Exchange risk (counterparty default)</li>
              <li>Slippage on entry/exit eats into returns</li>
            </ul>
          </div>
        </section>

        <section id="delta-neutral">
          <h2 style={h2Style}>Delta-Neutral Farming Strategy</h2>

          <h3 style={h3Style}>The Setup</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Delta-neutral farming is more capital-efficient. Go long perps on Exchange A, go short perps on Exchange B (or vice versa) on the same notional. Price changes cancel out (delta = 0). You profit from funding rate spread.
          </p>

          <h3 style={h3Style}>Example: Delta-Neutral Farming</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Go long 10 BTC perps on Binance (funding +0.06% per 8h). Go short 10 BTC perps on Bybit (funding -0.02% per 8h). Your net exposure is zero (delta hedged). You collect funding spread: +0.06% - (-0.02%) = +0.08% per 8h. Over 30 days: 11 × 0.08% = 0.88% ≈ 33% APY. Low risk, capital-efficient.
          </p>

          <h3 style={h3Style}>Execution Risks</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Timing risk: if you enter short on Bybit before long on Binance, you&apos;re exposed to price moves. Funding spread can compress (both exchanges converge). Execution must be simultaneous or very close. Slippage can erase gains on smaller positions.
          </p>
        </section>

        <section id="sentiment">
          <h2 style={h2Style}>Funding Rates as Sentiment Indicator</h2>

          <h3 style={h3Style}>Reading Market Extremes</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Funding rates are a live gauge of trader leverage and sentiment. Extremely high positive funding (+0.5%+ per 8h) = retail overlevered and all-in on longs. This signals tops. Extremely negative funding (-0.5%- per 8h) = shorts overconfident. This signals bottoms.
          </p>

          <h3 style={h3Style}>Historical Examples</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            November 2021 BTC top: Binance BTC funding reached +0.24% per 8h. Within days, a -$15,000 crash liquidated retail longs. April 2022 ETH capitulation: Bybit funding hit -0.18% per 8h on March 28. April saw the recovery start. December 2023 solstice: XRP funding at +0.20% before the reversal.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#fbbf24' }}>Funding Extremes Signal:</strong>
            <ul style={{ marginTop: 12, marginLeft: 20, color: '#c9d1d9' }}>
              <li>+0.5%+ per 8h = probable top, liquidation risk</li>
              <li>-0.5%- per 8h = probable bottom, squeeze risk</li>
              <li>+0.1-0.2% = mild bullish sentiment, sustainable</li>
              <li>-0.05 to 0% = mild bearish or neutral sentiment</li>
              <li>Use with price action and macro context (don&apos;t trade funding alone)</li>
            </ul>
          </div>
        </section>

        <section id="exchange-comparison">
          <h2 style={h2Style}>Exchange Funding Rate Comparison</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Exchange</th>
                <th style={thStyle}>Avg BTC Funding</th>
                <th style={thStyle}>Settlement Frequency</th>
                <th style={thStyle}>Slippage</th>
                <th style={thStyle}>Liquidity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>Binance</strong></td>
                <td style={tdStyle}>+0.025-0.06% per 8h</td>
                <td style={tdStyle}>Every 8h UTC</td>
                <td style={tdStyle}>Very low</td>
                <td style={tdStyle}>Highest</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Bybit</strong></td>
                <td style={tdStyle}>+0.03-0.07% per 8h</td>
                <td style={tdStyle}>Every 8h UTC</td>
                <td style={tdStyle}>Low</td>
                <td style={tdStyle}>Very high</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>OKX</strong></td>
                <td style={tdStyle}>+0.02-0.05% per 8h</td>
                <td style={tdStyle}>08:00, 16:00, 00:00 UTC</td>
                <td style={tdStyle}>Medium</td>
                <td style={tdStyle}>High</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Deribit</strong></td>
                <td style={tdStyle}>Variable (hourly)</td>
                <td style={tdStyle}>Hourly</td>
                <td style={tdStyle}>Medium</td>
                <td style={tdStyle}>High</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Hyperliquid</strong></td>
                <td style={tdStyle}>+0.01-0.04% per 8h</td>
                <td style={tdStyle}>Every 8h</td>
                <td style={tdStyle}>Very low</td>
                <td style={tdStyle}>Medium</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="bull-bear-patterns">
          <h2 style={h2Style}>Funding Patterns in Bull &amp; Bear Markets</h2>

          <h3 style={h3Style}>Bull Market Pattern</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Bull markets start with near-zero or negative funding (shorts covering). As bulls accelerate, funding becomes positive and rises. Mid-bull, +0.05-0.10% is normal. Peak bull, +0.15-0.3% signals retail piling in and reversal coming. Funding then spikes to +0.5% and crashes hard. Early stages of bull markets offer best arbitrage (funding grows over months, 15-25% APY). Late stages are risky (funding can flip to -0.5% in liquidation cascade).
          </p>

          <h3 style={h3Style}>Bear Market Pattern</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Bear markets often maintain zero or slightly negative funding (shorts dominating). During crashes, funding can spike negative (-0.3%+) as fear overwhelms and shorters get overconfident. Shorts pay longs heavily. Capitulation bottoms show funding at most negative (-0.5%+). Recovery begins when funding flips back positive.
          </p>
        </section>

        <section id="risks">
          <h2 style={h2Style}>Risks &amp; Risk Management</h2>

          <h3 style={h3Style}>Basis Risk (Contango/Backwardation)</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Contango: perps trade above spot (positive funding). Your arbitrage position makes money. Backwardation: perps trade below spot (negative funding). Your arbitrage position loses money if funding doesn&apos;t offset basis widening. Over 6+ months, basis can swing 1-3%, erasing 6-36 months of funding gains.
          </p>

          <h3 style={h3Style}>Liquidation Risk</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            If using leverage (e.g., 2x) to amplify funding rate gains, liquidation risk exists. Never use more than 1-2x on delta-neutral. Binance liquidation price: account_value / position_size. Monitor closely. One exchange crash or price spike and you&apos;re liquidated.
          </p>

          <h3 style={h3Style}>Exchange Risk</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Counterparty risk on centralized exchanges (Binance, Bybit, OKX). If exchange fails, funds are at risk (despite insurance funds). Diversify across exchanges. Never deploy all capital on one platform.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#f87171' }}>Risk Management Checklist:</strong>
            <ul style={{ marginTop: 12, marginLeft: 20, color: '#c9d1d9' }}>
              <li>Only use 1x leverage (no leverage = no liquidation)</li>
              <li>Position size: max 10-25% of wallet per trade</li>
              <li>Monitor basis daily (perp - spot spread)</li>
              <li>Exit if basis widens to &gt;1% (funding gain offset)</li>
              <li>Diversify across exchanges (don&apos;t put all on Binance)</li>
              <li>Have exit plan if funding inverts unexpectedly</li>
            </ul>
          </div>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What are funding rates?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 0, color: '#c9d1d9' }}>
              Funding rates are periodic payments between long and short traders on perpetual swap exchanges. When funding is positive, longs pay shorts (bullish sentiment, longs overlevered). When funding is negative, shorts pay longs (bearish sentiment, shorts overlevered). Rates settle every 8 hours on most exchanges (Binance, Bybit, OKX).
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How do you arbitrage funding rates?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 0, color: '#c9d1d9' }}>
              Cash-and-carry arbitrage: buy spot Bitcoin, go long perps on same notional, collect funding rate payments. If funding is +0.05% per 8h = +0.15% daily ≈ +55% APY. Risk: basis can widen (contango loss), liquidation risk if over-leveraged, exchange closure, and slippage.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is delta-neutral farming?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 0, color: '#c9d1d9' }}>
              Delta-neutral: go long perpetuals while shorting the same amount on another exchange (or vice versa). Price changes cancel out (hedged). You profit from funding rate spread. If Binance pays +0.06% and Bybit charges -0.02%, you capture +0.08% per period = 30%+ APY hedged.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How do funding rates reflect market sentiment?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 0, color: '#c9d1d9' }}>
              High positive funding rates = longs excited and overlevered (potential reversal coming). High negative funding rates = shorts overconfident and overlevered (potential squeeze coming). Extreme funding (&gt;0.5% per 8h) signals top/bottom. Funding is a contrarian indicator—use with price action.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What are the risks of funding rate arbitrage?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 0, color: '#c9d1d9' }}>
              Risks: basis widening (contango/backwardation), liquidation if under-collateralized, exchange credit risk, slippage on entry/exit, leverage requirements, funding rate changes, and basis risk (spot/perp divergence over time). Diversify and use 1x leverage only.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Which exchange has the highest funding rates?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 0, color: '#c9d1d9' }}>
              Funding varies hourly, but typically Binance averages +0.025-0.05% per 8h for BTC, Bybit +0.03-0.07%, OKX +0.02-0.06%, Deribit (options) varies. During bull runs, Binance tends to spike higher due to retail leverage concentration. Use funding rate monitoring tools to track spreads.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and does not constitute financial advice or trading advice. Funding rate arbitrage involves risks including liquidation, basis risk, exchange risk, and slippage. Past performance does not guarantee future results. Always test strategies on small positions, use strict risk management, and never invest more than you can afford to lose.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/tools/crypto-airdrop-tracker" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Airdrop Tracker</Link></li>
            <li><Link href="/tools/crypto-correlation-matrix" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Correlation Matrix</Link></li>
            <li><Link href="/tools/crypto-exchange-fee-comparison-tool" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Exchange Fee Tool</Link></li>
            <li><Link href="/tools/altcoin-season-index" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Altcoin Season Index</Link></li>
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
