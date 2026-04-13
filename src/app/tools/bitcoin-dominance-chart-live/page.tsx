import { Metadata } from 'next';
import Link from 'next/link';
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Bitcoin Dominance Chart Live | BTC Dominance Tracker',
  description: 'Track live Bitcoin dominance. Understand BTC dominance trends, alt season signals, market cycles, and trading strategies based on dominance shifts.',
  keywords: 'bitcoin dominance, BTC dominance chart, altcoin season, crypto market cap',
  openGraph: {
    title: 'Bitcoin Dominance Chart Live | BTC Dominance Tracker',
    description: 'Live Bitcoin dominance chart with real-time data and analysis for crypto market cycles.',
    type: 'website',
    url: 'https://degen0x.com/tools/bitcoin-dominance-chart-live',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin Dominance Chart Live',
    description: 'Real-time BTC dominance tracking and market cycle analysis.',
  },
  alternates: {
    canonical: 'https://degen0x.com/tools/bitcoin-dominance-chart-live',
  },
};

const faqs = [
  {
    q: 'What does Bitcoin dominance measure?',
    a: 'Bitcoin dominance is Bitcoin market cap divided by total crypto market cap, expressed as a percentage. For example, if Bitcoin is 50 billion and total market is 100 billion, BTC dominance is 50%. It shows Bitcoin\'s share of the overall cryptocurrency market.',
  },
  {
    q: 'Why does Bitcoin dominance matter?',
    a: 'Rising BTC dominance means Bitcoin is gaining strength while altcoins weaken (alt season ending). Falling dominance means money is rotating into altcoins (alt season starting). It\'s a key market cycle indicator used by traders for portfolio allocation.',
  },
  {
    q: 'What is "alt season"?',
    a: 'Alt season occurs when Bitcoin dominance is declining (typically below 45%), indicating money is flowing from Bitcoin into alternative cryptocurrencies. During alt season, altcoins significantly outperform Bitcoin. When dominance rises above 60%, alt season usually ends.',
  },
  {
    q: 'How has Bitcoin dominance changed historically?',
    a: '2017: Started 80%, dropped to 33%. 2021: Rose from 29% to 70%. 2022: Varied 37-67%. 2024-2026: Settled 50-58% as institutional adoption increased. Peaks occur near market tops, lows near bottoms.',
  },
  {
    q: 'Is high or low Bitcoin dominance better for trading?',
    a: 'Neither is inherently better. Rising dominance = Bitcoin strength, great for BTC holders. Falling dominance = alt season, altcoins outperform. The shift matters more than the level. Smart traders follow the trend, not the absolute number.',
  },
  {
    q: 'How do I trade based on Bitcoin dominance?',
    a: 'Rising dominance: Increase Bitcoin allocation, reduce altcoins. Dominance over 65%: Take profits from alts. Falling dominance: Rotate into altcoins, reduce Bitcoin. Dominance under 45%: Peak alt season accumulation phase. Use with price action and technical levels.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://degen0x.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Bitcoin Dominance Chart Live', },
  ],
};

export default function BitcoinDominanceChartPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0d1117', color: '#e6edf3' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, #10b981, #06b6d4)',
          padding: '60px 20px',
          textAlign: 'center',
        }}
    >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
            Bitcoin Dominance Chart Live
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.95 }}>
            Track real-time Bitcoin market share, identify alt seasons, and optimize portfolio allocation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        {/* What is BTC Dominance */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            What is Bitcoin Dominance?
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '15px', color: '#e6edf3' }}>
            Bitcoin dominance (BTC DOM or BTC.D) represents Bitcoin&apos;s market capitalization as a percentage
            of the total cryptocurrency market capitalization. It serves as a critical indicator of market
            psychology and capital allocation across the entire crypto ecosystem.
          </p>
          <div
            style={{
              backgroundColor: '#0d1117',
              border: '1px solid #30363d',
              padding: '20px',
              borderRadius: '6px',
              marginBottom: '15px',
            }}
    >
            <p style={{ color: '#8b949e', marginBottom: '10px' }}>
              <strong>Formula:</strong>
            </p>
            <p style={{ color: '#8b949e', fontFamily: 'monospace', textAlign: 'center', fontSize: '1.1rem' }}>
              BTC Dominance % = (Bitcoin Market Cap / Total Crypto Market Cap) × 100
            </p>
          </div>
          <p style={{ lineHeight: '1.8', color: '#8b949e' }}>
            <strong>Example:</strong> If Bitcoin market cap is $500 billion and total crypto is $1 trillion,
            Bitcoin dominance is 50%. A rising percentage means Bitcoin is gaining strength; a falling percentage
            indicates money rotating into altcoins.
          </p>
        </div>

        {/* Historical Dominance */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            Historical Bitcoin Dominance Trends
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '20px', color: '#e6edf3' }}>
            BTC dominance has shown distinct patterns across crypto market cycles:
          </p>
          <div style={{ display: 'grid', gap: '15px' }}>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px', borderLeft: '4px solid #f0883e' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>2017-2018 Bull Cycle</h3>
              <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                Started at 80% dominance. Crashed to 33% at peak alt season (January 2018) when thousands
                of ICO tokens launched. BTC dominance spike back to 65% preceded the bear market.
              </p>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px', borderLeft: '4px solid #f0883e' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>2020-2021 Bull Cycle</h3>
              <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                Started at 65% after 2020 crash. Dropped to 29% in May 2021 (peak alt season, DeFi/Ethereum boom).
                Rose to 70% by November 2021, signaling alt season end and eventual crash to 2022 lows.
              </p>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px', borderLeft: '4px solid #f0883e' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>2022-2024 Institutional Phase</h3>
              <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                Ranged 35-65%, with less extreme swings. Bitcoin spot ETF approval (2024) stabilized dominance
                around 55-58%. Reduced volatility reflects institutional adoption and more sophisticated capital flows.
              </p>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px', borderLeft: '4px solid #f0883e' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>2024-2026 Current Period</h3>
              <p style={{ color: '#8b949e', lineHeight: '1.6' }}>
                Currently oscillating 50-58%. Resistance at 60% (institutional cap), support at 45% (retail FOMO into alts).
                Lower extremes than prior cycles suggest market maturity and liquidity concentration.
              </p>
            </div>
          </div>

        <AuthorAttribution
          author="0xMachina"
          role="Founder"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="tools"
        />

        </div>

        {/* Rising vs Falling Dominance */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            What Rising & Falling Dominance Signals
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px', borderLeft: '4px solid #f85149' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>Rising Dominance (↑)</h3>
              <ul style={{ color: '#8b949e', marginLeft: '15px', lineHeight: '1.8', fontSize: '0.9rem' }}>
                <li>Money flowing FROM altcoins TO Bitcoin</li>
                <li>Risk-off sentiment, de-risking phase</li>
                <li>Alt season likely ENDING</li>
                <li>Bitcoin gaining relative strength</li>
                <li>Often precedes downturns (65%+ = danger)</li>
                <li>Altcoin holders taking profits</li>
              </ul>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px', borderLeft: '4px solid #3fb950' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>Falling Dominance (↓)</h3>
              <ul style={{ color: '#8b949e', marginLeft: '15px', lineHeight: '1.8', fontSize: '0.9rem' }}>
                <li>Money flowing FROM Bitcoin TO altcoins</li>
                <li>Risk-on sentiment, FOMO phase</li>
                <li>Alt season likely STARTING</li>
                <li>Altcoins gaining relative strength</li>
                <li>Often precedes alt rallies (below 45% = peak)</li>
                <li>Retail investors chasing new projects</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Alt Season Indicator */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            Using BTC Dominance as an Alt Season Indicator
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '20px', color: '#e6edf3' }}>
            Bitcoin dominance is the single best predictor of whether altcoin season is active:
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.95rem',
              }}
    >
              <thead>
                <tr style={{ borderBottom: '2px solid #30363d' }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#58a6ff' }}>BTC Dominance</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#58a6ff' }}>Market Phase</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#58a6ff' }}>Altcoin Outlook</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#58a6ff' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#e6edf3', fontWeight: 'bold' }}>Below 40%</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Peak Alt Season</td>
                  <td style={{ padding: '12px', color: '#3fb950' }}>Extremely bullish for alts</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Take profits, prepare to exit</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#e6edf3', fontWeight: 'bold' }}>40-50%</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Early-Mid Alt Season</td>
                  <td style={{ padding: '12px', color: '#3fb950' }}>Very bullish for alts</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Rotate into undervalued alts</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#e6edf3', fontWeight: 'bold' }}>50-60%</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Neutral/Transition</td>
                  <td style={{ padding: '12px', color: '#fbca04' }}>Mixed signals</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Watch trend direction closely</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#e6edf3', fontWeight: 'bold' }}>60-70%</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Alt Season Ending</td>
                  <td style={{ padding: '12px', color: '#f85149' }}>Bearish for alts</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Exit alts, rotate to BTC</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', color: '#e6edf3', fontWeight: 'bold' }}>Above 70%</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Bitcoin Monopoly</td>
                  <td style={{ padding: '12px', color: '#f85149' }}>Extremely bearish for alts</td>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Avoid alts, hold stables</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Portfolio Allocation */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            Using BTC Dominance for Portfolio Allocation
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '20px', color: '#e6edf3' }}>
            Smart investors adjust their BTC/altcoin ratio based on dominance levels:
          </p>
          <div style={{ display: 'grid', gap: '15px' }}>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>When BTC Dominance is Below 45%</h3>
              <p style={{ color: '#8b949e', lineHeight: '1.6', marginBottom: '10px' }}>
                <strong>Aggressive allocation:</strong> 30% BTC, 70% altcoins (favors top L1s and DeFi)
              </p>
              <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                Rationale: Peak alt season creates asymmetric upside in quality altcoins. Bitcoin weakness provides rotation opportunity.
              </p>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>When BTC Dominance is 45-55%</h3>
              <p style={{ color: '#8b949e', lineHeight: '1.6', marginBottom: '10px' }}>
                <strong>Balanced allocation:</strong> 50% BTC, 50% altcoins
              </p>
              <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                Rationale: Neutral zone. Hold quality alts but no aggressive buying. Be ready to shift at extremes.
              </p>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>When BTC Dominance is 55-65%</h3>
              <p style={{ color: '#8b949e', lineHeight: '1.6', marginBottom: '10px' }}>
                <strong>Conservative allocation:</strong> 75% BTC, 25% altcoins
              </p>
              <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                Rationale: Alt season ending. Reduce altcoin exposure. Rotate capital to Bitcoin for safety.
              </p>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>When BTC Dominance is Above 65%</h3>
              <p style={{ color: '#8b949e', lineHeight: '1.6', marginBottom: '10px' }}>
                <strong>Defensive allocation:</strong> 95% BTC, 5% stablecoins (or all stablecoins for traders)
              </p>
              <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                Rationale: Market peak likely near. Altcoins crushed. Hold Bitcoin or cash to deploy at lower prices.
              </p>
            </div>
          </div>
        </div>

        {/* BTC vs ETH Dominance */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            Bitcoin Dominance vs Ethereum Dominance
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '15px', color: '#e6edf3' }}>
            While BTC dominance shows Bitcoin&apos;s share of total market, ETH dominance reveals Ethereum&apos;s strength:
          </p>
          <ul style={{ lineHeight: '2', marginLeft: '20px', marginBottom: '20px', color: '#e6edf3' }}>
            <li>
              <strong>BTC Dominance 60%+:</strong> Bitcoin monopoly. Ethereum typically 10-15% dominance. Alts severely
              underperforming.
            </li>
            <li>
              <strong>BTC Dominance 40-50%:</strong> Bitcoin strong, Ethereum/DeFi gaining. ETH dominance typically 15-20%.
            </li>
            <li>
              <strong>BTC Dominance Below 40%:</strong> Ethereum explosive phase. ETH dominance can reach 25-30% (2021).
              Everything else explodes.
            </li>
          </ul>
          <p style={{ lineHeight: '1.8', color: '#8b949e' }}>
            <strong>Key insight:</strong> When BTC dominance falls, ETH usually outperforms everything else. When BTC dominance
            rises, Ethereum outperforms non-Ethereum alts.
          </p>
        </div>

        {/* Trading Strategies */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            Trading Strategies Based on Dominance Shifts
          </h2>
          <div style={{ display: 'grid', gap: '15px' }}>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>1. Dominance Trend Following</h3>
              <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                If BTC dominance breaks above 60%, shift to 100% Bitcoin. If it drops below 45%, rotate to top
                altcoins (ETH, SOL, AVAX). Use simple moving averages (50-day) to confirm trend.
              </p>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>2. Dominance Mean Reversion</h3>
              <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                Historical average is 50%. When BTC DOM reaches 70%+, short Bitcoin / long altcoins (mean will revert).
                When below 35%, long Bitcoin / short most alts.
              </p>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>3. Sector Rotation Strategy</h3>
              <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                Dominance 50-55%: Rotate to L1 blockchains. Dominance 40-45%: Rotate to DeFi/yield tokens.
                Dominance above 60%: Rotate to Bitcoin.
              </p>
            </div>
            <div style={{ backgroundColor: '#0d1117', padding: '20px', borderRadius: '6px' }}>
              <h3 style={{ color: '#79c0ff', marginBottom: '10px' }}>4. Alt/BTC Ratio Trading</h3>
              <p style={{ color: '#8b949e', fontSize: '0.9rem' }}>
                Pair trade altcoins vs Bitcoin instead of trading vs fiat. Long alts / short BTC when dominance below 45%.
                Reverse when dominance above 60%.
              </p>
            </div>
          </div>
        </div>

        {/* Related Tools */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
            marginBottom: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#58a6ff' }}>
            Related Tools & Resources
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            <Link href="/tools/altcoin-season-index">
              <span
                style={{
                  display: 'block',
                  padding: '15px',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  color: '#58a6ff',
                  textDecoration: 'none',
                }}
    >
                Altcoin Season Index
              </span>
            </Link>
            <Link href="/tools/crypto-fear-greed-index-live">
              <span
                style={{
                  display: 'block',
                  padding: '15px',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  color: '#58a6ff',
                  textDecoration: 'none',
                }}
    >
                Fear & Greed Index
              </span>
            </Link>
            <Link href="/tools/crypto-heatmap-live">
              <span
                style={{
                  display: 'block',
                  padding: '15px',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  color: '#58a6ff',
                  textDecoration: 'none',
                }}
    >
                Crypto Heatmap
              </span>
            </Link>
            <Link href="/investing/crypto-sector-rotation-strategy">
              <span
                style={{
                  display: 'block',
                  padding: '15px',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  color: '#58a6ff',
                  textDecoration: 'none',
                }}
    >
                Sector Rotation Strategy
              </span>
            </Link>
            <Link href="/learn/crypto-market-cap-explained">
              <span
                style={{
                  display: 'block',
                  padding: '15px',
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  color: '#58a6ff',
                  textDecoration: 'none',
                }}
    >
                Market Cap Explained
              </span>
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '40px',
          }}
    >
          <h2 style={{ fontSize: '1.8rem', marginBottom: '30px', color: '#58a6ff' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#0d1117',
                  border: '1px solid #30363d',
                  borderRadius: '6px',
                  padding: '20px',
                }}
    >
                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#79c0ff' }}>
                  {faq.question}
                </h3>
                <p style={{ lineHeight: '1.7', color: '#8b949e' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Bitcoin Dominance Chart Live",
              "url": "https://degen0x.com/tools/bitcoin-dominance-chart-live",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
