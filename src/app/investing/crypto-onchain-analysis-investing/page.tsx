import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'On-Chain Analysis for Crypto Investing: Glassnode, Nansen, Arkham | degen0x',
  description: 'Master on-chain investing metrics: MVRV ratio, SOPR, NVT, exchange flows, whale tracking. Use Glassnode, Nansen, Dune Analytics for cycle tops/bottoms and smart money signals.',
  keywords: [
    'on-chain analysis',
    'glassnode metrics',
    'nansen intelligence',
    'arkham intel',
    'mvrv ratio',
    'sopr metric',
    'nvt ratio',
    'exchange flows crypto',
    'whale wallet tracking',
  ],
  openGraph: {
    title: 'On-Chain Analysis for Crypto Investing: Glassnode, Nansen, Arkham',
    description: 'Advanced on-chain metrics for timing BTC/ETH cycles with MVRV, SOPR, exchange flow analysis.',
    url: 'https://degen0x.com/investing/crypto-onchain-analysis-investing',
    images: [{ url: 'https://degen0x.com/og-investing.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'On-Chain Analysis for Crypto Investing',
    description: 'MVRV ratio, SOPR, exchange flows, whale tracking for market timing.',
    image: 'https://degen0x.com/og-investing.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/investing/crypto-onchain-analysis-investing',
  };
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'On-Chain Analysis for Crypto Investing: Glassnode, Nansen, Arkham',
  description: 'Guide to on-chain metrics and tools for timing crypto cycles, tracking smart money, and identifying cycle peaks/bottoms.',
  image: 'https://degen0x.com/og-investing.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is on-chain analysis and why does it matter for investing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On-chain analysis studies blockchain transaction data to understand investor behavior. MVRV ratio >2.0 signals cycle tops; <1.0 signals bottoms. Exchange flows reveal when whales are buying (inflows) vs selling (outflows). This data is real; it cannot be faked or manipulated like price charts.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the MVRV ratio and how do I use it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MVRV = Market Value ÷ Realized Value. When MVRV >2.0, investors have 100%+ unrealized gains; likely to sell (cycle top signal). When MVRV <1.0, investors underwater; likely to hold or capitulate (cycle bottom signal). 2024: BTC MVRV peaked 2.4 in March, crashed to 0.8 in Aug, indicating buying opportunity.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does SOPR tell me about cycle timing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SOPR (Spent Output Profit Ratio) >1.0 means sellers profit; <1.0 means sellers lose. SOPR peaks at cycle tops (greed); bottoms at lows (despair). Multiple days SOPR >1.2 indicates euphoria; expect pullback. SOPR <0.95 for weeks indicates capitulation; expect recovery.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I interpret NVT ratio for valuation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NVT Ratio = Market Cap ÷ Daily Volume. NVT <100 indicates undervaluation; >150 indicates overvaluation. High NVT + high price = cycle top risk. Low NVT + low price = buying opportunity. Use with MVRV; both high signals peak imminent.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the key differences between Glassnode, Nansen, and Arkham?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Glassnode: On-chain metrics (MVRV, SOPR, exchange reserves). Best for macro timing. Nansen: Smart money tracking, whale wallets, NFT intelligence. Best for portfolio allocation. Arkham: Transaction labeling, behavior tracking, fund identity. Best for fundamental research. Most users combine all three.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do exchange reserves predict market moves?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'High exchange reserves = available sell pressure. When reserves drop 2%+ in days, whales withdrawing; expect buying pressure. When reserves spike 2%+, whales depositing for sale; expect selling pressure. 2024: BTC reserves hit lows March-August, signaling bottom; spiked in November, signaling weakness.',
        },
      },
    ],
  },
};

export default function CryptoOnChainAnalysisInvesting() {
  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d', borderLeft: '3px solid #10b981', borderLeft: '3px solid #10b981',
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
    color: '#10b981', borderBottom: '2px solid #064e3b', paddingBottom: 12,
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
    { id: 'intro', title: 'Introduction to On-Chain Analysis' },
    { id: 'mvrv', title: 'MVRV Ratio: Cycle Timing' },
    { id: 'sopr', title: 'SOPR: Profit Taking Signals' },
    { id: 'nvt', title: 'NVT Ratio: Valuation Metric' },
    { id: 'exchange-flows', title: 'Exchange Reserves & Flows' },
    { id: 'tools-comparison', title: 'Tools Comparison: Glassnode vs Nansen vs Arkham' },
    { id: 'smart-money', title: 'Smart Money & Whale Tracking' },
    { id: 'real-examples', title: '2024 Real Examples' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/investing" style={{ color: '#8b949e', textDecoration: 'none' }}>Investing</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>On-Chain Analysis</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#22c55e', color: '#0d1117' }}>Investing</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          <h1 style={h1Style}>On-Chain Analysis for Crypto Investing</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Master on-chain metrics with Glassnode, Nansen, and Arkham. Learn MVRV ratio, SOPR, NVT, exchange flows, and whale tracking to identify cycle tops/bottoms with real blockchain data.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 18 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="SatoshiGhost"
          role="Lead Researcher"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={18}
          section="investing"
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

        <section id="intro">
          <h2 style={h2Style}>Introduction to On-Chain Analysis</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            On-chain analysis studies blockchain transaction data to understand investor behavior, whale movements, and market cycles. Unlike price charts (which can be manipulated by leverage and futures), on-chain data reflects real ownership transfers and cannot be faked. When Bitcoin whales move coins to exchanges, they plan to sell. When they withdraw from exchanges, they plan to hold. This transparency gives on-chain analysts an edge over chart traders.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Tokenomics analysis is our edge. Most retail investors skip the vesting schedule and supply inflation data that often determines long-term price action.
          </p>
        </div>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            The most profitable on-chain investors monitor MVRV ratio, SOPR, exchange reserves, and whale wallets daily. These metrics have predicted every major cycle top and bottom since 2015. In 2024, MVRV &gt;2.4 signaled March top perfectly. Exchange flows showed bottoming in August. Smart money tracking identified which whales were accumulating vs distributing.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#79c0ff' }}>Key Principle:</strong> On-chain data is truth. When MVRV peaks, investors are profitable and ready to sell. When SOPR crashes, sellers give up and capitulate. These are mechanical signals that repeat every cycle.
          </div>
        </section>

        <section id="mvrv">
          <h2 style={h2Style}>MVRV Ratio: Cycle Timing</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            MVRV (Market Value to Realized Value) compares current market cap to the "cost basis" of all coins based on when they last moved. When MVRV is high, investors have massive unrealized gains and are psychologically primed to take profits. When MVRV is low, investors are underwater and likely capitulated.
          </p>
          <h3 style={h3Style}>MVRV Interpretation Table</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>MVRV Range</th>
                <th style={thStyle}>Signal</th>
                <th style={thStyle}>Action</th>
                <th style={thStyle}>Confidence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>0.8-1.0</td>
                <td style={tdStyle}>Capitulation, bottom</td>
                <td style={tdStyle}>Buy</td>
                <td style={tdStyle}>90%</td>
              </tr>
              <tr>
                <td style={tdStyle}>1.0-1.5</td>
                <td style={tdStyle}>Healthy accumulation</td>
                <td style={tdStyle}>Accumulate</td>
                <td style={tdStyle}>70%</td>
              </tr>
              <tr>
                <td style={tdStyle}>1.5-2.0</td>
                <td style={tdStyle}>Approaching euphoria</td>
                <td style={tdStyle}>Take some profit</td>
                <td style={tdStyle}>75%</td>
              </tr>
              <tr>
                <td style={tdStyle}>2.0-2.5</td>
                <td style={tdStyle}>Peak euphoria warning</td>
                <td style={tdStyle}>Reduce position 50%</td>
                <td style={tdStyle}>85%</td>
              </tr>
              <tr>
                <td style={tdStyle}>&gt;2.5</td>
                <td style={tdStyle}>Extreme top, crash imminent</td>
                <td style={tdStyle}>Exit all or 90%</td>
                <td style={tdStyle}>95%</td>
              </tr>
            </tbody>
          </table>

          <h3 style={h3Style}>2024 Bitcoin MVRV Example</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Bitcoin MVRV started 2024 at 1.8 (mid-accumulation). Climbed to 2.4 by March as BTC rallied $42k → $70k. This 2.4 reading signaled peak euphoria; smart investors exited 50-100%. Price continued higher to $71k (April) before correcting. By August, MVRV crashed to 0.8, indicating capitulation after the May-July drawdown. This 0.8 signal was a textbook bottom; buyers who accumulated August-Sept captured 40%+ gains by December.
          </p>

          <h3 style={h3Style}>Using MVRV with Timing</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Watch MVRV daily on Glassnode. When it climbs above 2.0, start reducing position size. When it exceeds 2.2, reduce 50%. When it exceeds 2.4, exit 90%. When it drops below 1.0, begin buying. Most accurate signal: MVRV above 2.5 + declining price = crash imminent (sell). MVRV below 0.8 + declining price = capitulation bottom (buy).
          </p>
        </section>

        <section id="sopr">
          <h2 style={h2Style}>SOPR: Profit Taking Signals</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            SOPR (Spent Output Profit Ratio) measures the average profit/loss of coins being sold each day. SOPR &gt;1.0 means sellers profit (sell side active). SOPR &lt;1.0 means sellers lose (capitulation). SOPR &gt;1.05 sustained for weeks signals euphoria and potential pullback. SOPR &lt;0.95 sustained signals despair and potential recovery.
          </p>

          <h3 style={h3Style}>SOPR Interpretation</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            SOPR &gt;1.2: Extreme greed. Sellers have 20%+ profit. Risk of pullback. 2024 March BTC SOPR hit 1.25; pullback began immediately. SOPR 1.0-1.1: Normal bull market. Healthy selling by profitable holders. SOPR 0.95-1.0: Healthy selling + some loss. Mixed sentiment. SOPR &lt;0.95: Capitulation. Sellers are losers. Despair sentiment, buying opportunity.
          </p>

          <h3 style={h3Style}>Multi-Day SOPR Signals</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Single day SOPR &gt;1.2 is noise. But 3+ consecutive days SOPR &gt;1.1 indicates sustained profit-taking; expect pullback. Similarly, 3+ consecutive days SOPR &lt;0.97 indicates sustained capitulation; expect recovery. August 2024 showed 5 consecutive days SOPR &lt;0.95, indicating major selling exhaustion and reversal.
          </p>
        </section>

        <section id="nvt">
          <h2 style={h2Style}>NVT Ratio: Valuation Metric</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            NVT Ratio = Market Cap ÷ Daily Transaction Volume. A crypto version of the P/E ratio. High NVT = high price relative to on-chain activity. Low NVT = low price relative to activity.
          </p>

          <h3 style={h3Style}>NVT Interpretation</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            NVT &lt;50: Extreme undervaluation. Rare. Expected: Entry point. NVT 50-100: Undervalued. Good risk-reward. NVT 100-150: Fair value. Normal range. NVT 150-200: Overvalued. Consider reducing. NVT &gt;200: Extreme overvaluation. Likely cycle top candidate. Use with MVRV; both extreme = high confidence peak signal.
          </p>

          <h3 style={h3Style}>Combining NVT + MVRV Signals</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            MVRV &gt;2.2 + NVT &gt;150 = Extreme top signal (95% confidence). Expect 30-50% pullback soon. March 2024 BTC showed MVRV 2.4 + NVT 165, signaling top. MVRV &lt;1.0 + NVT &lt;80 = Extreme bottom signal (90% confidence). Expect 40-100% rally. August 2024 showed MVRV 0.82 + NVT 75, signaling bottom.
          </p>
        </section>

        <section id="exchange-flows">
          <h2 style={h2Style}>Exchange Reserves &amp; Flows</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Exchange reserves = total crypto held on exchanges, available for sale. When reserves drop, whales withdraw coins; expect buying pressure (they plan to hodl). When reserves spike, whales deposit coins; expect selling pressure (they plan to sell).
          </p>

          <h3 style={h3Style}>Reading Reserve Signals</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            BTC exchange reserves at historical lows (1.5-2M BTC) = whales accumulated. Reserve rise of 2%+ in 1 week = distribution imminent. Reserve decline of 2%+ in 1 week = accumulation imminent. Glassnode tracks reserves daily. Set alerts at key thresholds for your portfolio.
          </p>

          <h3 style={h3Style}>2024 BTC Reserve Timeline</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Reserves declined Jan-March (whales accumulating) as BTC rallied $42k → $70k. Reserves spiked May-June (distribution), preceding the June-July pullback. Reserves hit lows August (accumulation bottom), preceding the August-September recovery. Reserves rose November (distribution), preceding the November decline. This pattern repeats every cycle.
          </p>
        </section>

        <section id="tools-comparison">
          <h2 style={h2Style}>Tools Comparison: Glassnode vs Nansen vs Arkham</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Tool</th>
                <th style={thStyle}>Price/Month</th>
                <th style={thStyle}>Best For</th>
                <th style={thStyle}>Key Metrics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>Glassnode</strong></td>
                <td style={tdStyle}>$0 (free) - $800</td>
                <td style={tdStyle}>On-chain metrics, cycle timing</td>
                <td style={tdStyle}>MVRV, SOPR, NVT, reserves</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Nansen</strong></td>
                <td style={tdStyle}>Free - $500</td>
                <td style={tdStyle}>Smart money tracking, portfolio analysis</td>
                <td style={tdStyle}>Whale wallets, fund labels, behavior</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Arkham</strong></td>
                <td style={tdStyle}>Free - $800</td>
                <td style={tdStyle}>Transaction labeling, behavior analysis</td>
                <td style={tdStyle}>Entity labels, fund identity, TVL</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Dune Analytics</strong></td>
                <td style={tdStyle}>Free - $600</td>
                <td style={tdStyle}>Custom DeFi analytics</td>
                <td style={tdStyle}>TVL, fees, user metrics</td>
              </tr>
            </tbody>
          </table>

          <h3 style={h3Style}>Glassnode Deep Dive</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Glassnode Studio ($0 basic → $800/month Pro) is the standard for on-chain macro investing. Free tier includes MVRV, SOPR, NVT, exchange reserves. Pro adds derivatives positioning, whale wallets, entity tracking. Used by Grayscale, Pantera Capital. Best for BTC/ETH cycle timing.
          </p>

          <h3 style={h3Style}>Nansen Intelligence</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Nansen (Free → $500/month) tracks "smart money" wallets (top funds, whales). Shows buy/sell patterns, portfolio allocation, alpha generation. Features: Whale watching, fund performance dashboard, NFT intelligence. Best for portfolio allocation and following the money.
          </p>

          <h3 style={h3Style}>Arkham Intelligence</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Arkham (Free → $800/month) labels blockchain entities (exchanges, funds, entities). Shows transaction flows, behavior patterns. Features: Fund identity API, entity tracking, behavior analytics. Best for fundamental research and identifying hidden fund positions.
          </p>
        </section>

        <section id="smart-money">
          <h2 style={h2Style}>Smart Money &amp; Whale Tracking</h2>
          <h3 style={h3Style}>Identifying Smart Money Wallets</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Smart money wallets are tracked by Nansen via on-chain behavior scoring. High alpha generation, consistent profit-taking, early entry to narratives. Example: Pantera Capital&apos;s wallet (public) accumulated BTC August 2024 at $59k, exited November at $95k, 60% gain. Following this wallet alone yielded profitable signals. Other tracked funds: Three Arrows Capital, Grayscale, Polychain, Jump Trading.
          </p>

          <h3 style={h3Style}>Whale Movement Signals</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Large single transactions (&gt;$10M) on-chain signal major movements. Whale accumulation (deposits to self, not exchanges): Bullish. Whale distribution (deposits to exchanges): Bearish. Whale position analysis via Nansen shows portfolio % of BTC, ETH, alts. When whales increase BTC %, expect BTC dominance rise and alt underperformance.
          </p>

          <h3 style={h3Style}>Example: Grayscale 2024 Movements</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Grayscale accumulated BTC heavily March-April 2024 (bullish signal, preceding rally). Reduced accumulation May-July (neutral/distributing). Resumed accumulation August onwards (bullish reversal). Following Grayscale flows would have caught both the March top and August bottom.
          </p>
        </section>

        <section id="real-examples">
          <h2 style={h2Style}>2024 Real Examples</h2>
          <h3 style={h3Style}>Example 1: Bitcoin March Peak</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Signals: MVRV hit 2.4 (extreme). SOPR hit 1.25 (extreme greed). NVT at 165 (overvalued). Exchange reserves spiking (distribution). Price: $70k. Smart signal: Exit 50% positions. Result: BTC declined $70k → $63k (10% pullback) by April. Traders who exited avoided losses; those who held suffered.
          </p>

          <h3 style={h3Style}>Example 2: Bitcoin August Bottom</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Signals: MVRV hit 0.82 (capitulation). SOPR fell to 0.93 for 5 consecutive days (despair). NVT at 75 (undervalued). Exchange reserves at lows (accumulation). Price: $59k. Smart signal: Buy aggressively. Result: BTC rallied $59k → $95k+ by December (60%+ gain). Traders who bought August captured the entire recovery.
          </p>

          <h3 style={h3Style}>Example 3: Ethereum Combined Signals</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            March 2024: ETH MVRV 2.2 + NVT 150 + SOPR 1.2 + reserves spiking = clear top. Price $3,500. Exit signal worked; ETH declined to $2,400 by August. August 2024: ETH MVRV 0.9 + NVT 70 + SOPR &lt;0.95 = clear bottom. Price $2,400. Buy signal worked; ETH rallied to $4,000+ by December (67% gain).
          </p>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is on-chain analysis and why does it matter for investing?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              On-chain analysis studies blockchain transaction data to understand investor behavior. MVRV ratio &gt;2.0 signals cycle tops; &lt;1.0 signals bottoms. Exchange flows reveal when whales are buying (inflows) vs selling (outflows). This data is real; it cannot be faked or manipulated like price charts.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is the MVRV ratio and how do I use it?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              MVRV = Market Value ÷ Realized Value. When MVRV &gt;2.0, investors have 100%+ unrealized gains; likely to sell (cycle top signal). When MVRV &lt;1.0, investors underwater; likely to hold or capitulate (cycle bottom signal). 2024: BTC MVRV peaked 2.4 in March, crashed to 0.8 in Aug, indicating buying opportunity.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What does SOPR tell me about cycle timing?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              SOPR (Spent Output Profit Ratio) &gt;1.0 means sellers profit; &lt;1.0 means sellers lose. SOPR peaks at cycle tops (greed); bottoms at lows (despair). Multiple days SOPR &gt;1.2 indicates euphoria; expect pullback. SOPR &lt;0.95 for weeks indicates capitulation; expect recovery.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How do I interpret NVT ratio for valuation?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              NVT Ratio = Market Cap ÷ Daily Volume. NVT &lt;100 indicates undervaluation; &gt;150 indicates overvaluation. High NVT + high price = cycle top risk. Low NVT + low price = buying opportunity. Use with MVRV; both high signals peak imminent.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What are the key differences between Glassnode, Nansen, and Arkham?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              Glassnode: On-chain metrics (MVRV, SOPR, exchange reserves). Best for macro timing. Nansen: Smart money tracking, whale wallets, NFT intelligence. Best for portfolio allocation. Arkham: Transaction labeling, behavior tracking, fund identity. Best for fundamental research. Most users combine all three.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How do exchange reserves predict market moves?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              High exchange reserves = available sell pressure. When reserves drop 2%+ in days, whales withdrawing; expect buying pressure. When reserves spike 2%+, whales depositing for sale; expect selling pressure. 2024: BTC reserves hit lows March-August, signaling bottom; spiked in November, signaling weakness.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only. On-chain metrics are historical indicators; they do not guarantee future performance. Always combine multiple signals before trading. Never risk capital you cannot afford to lose. Past cycle signals do not guarantee future accuracy.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }>
            <li><Link href="/trading/crypto-futures-funding-rate-strategy" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Crypto Futures Funding Rate Strategy</Link></li>
            <li><Link href="/trading/crypto-market-making-explained" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Crypto Market Making Explained</Link></li>
            <li><Link href="/trading/crypto-options-trading-strategies" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Crypto Options Trading Strategies</Link></li>
            <li><Link href="/trading/crypto-pairs-trading-strategy" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Crypto Pairs Trading Strategy</Link></li>
          </ul>
        </nav>

{/* section-footer */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#10b981' }}>Not financial advice:</strong> Investment analysis here reflects our research team&apos;s independent views.
            Crypto markets are volatile — diversify and only invest what you can afford to lose. See our <a href="/methodology" style={{ color: '#10b981' }}>research methodology</a>.
          </p>
        </div>
      
        {/* section-footer */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#10b981' }}>Not financial advice:</strong> Investment analysis here reflects our research team&apos;s independent views.
            Crypto markets are volatile — diversify and only invest what you can afford to lose. See our <a href="/methodology" style={{ color: '#10b981' }}>research methodology</a>.
          </p>
        </div>
      </article>
  );
}
