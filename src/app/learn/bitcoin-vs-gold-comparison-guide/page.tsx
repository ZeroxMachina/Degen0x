import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Bitcoin vs Gold Comparison 2026: Supply, Returns, Volatility, Sharpe Ratio | degen0x',
  description: 'Bitcoin vs gold: supply (21M BTC vs 200K tons Au), portability, 1yr/5yr/10yr returns, volatility, Sharpe ratio, digital scarcity vs physical store of value.',
  keywords: ['bitcoin vs gold', 'bitcoin comparison', 'gold investment', 'store of value', 'digital gold', 'crypto vs precious metals'],
  openGraph: {
    type: 'article',
    title: 'Bitcoin vs Gold Comparison 2026 | degen0x',
    description: 'Head-to-head comparison: supply cap, returns, volatility, Sharpe ratio, portability.',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/learn/bitcoin-vs-gold-comparison-guide',
    images: [{ url: 'https://degen0x.com/og-learn.svg', width: 1200, height: 630, alt: 'Bitcoin vs Gold' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitcoin vs Gold Comparison 2026 | degen0x',
    description: 'Which is better: Bitcoin or gold? Compare supply, returns, volatility, Sharpe ratio.',
    image: 'https://degen0x.com/og-learn.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/bitcoin-vs-gold-comparison-guide',
  };
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bitcoin vs Gold Comparison 2026: Supply, Returns, Volatility, and Sharpe Ratio',
  description: 'Head-to-head comparison of Bitcoin and gold as stores of value: supply dynamics, historical returns, volatility, and risk-adjusted performance.',
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Bitcoin digital gold?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bitcoin is often called "digital gold" because it has: fixed supply (21M), unforgeable scarcity, divisibility, portability (superior to gold), and global demand. However, Bitcoin has not proven multi-century stability like gold (5,000+ years of use). Bitcoin is more volatile (50%+ annual swings) vs gold (10-20%). Bitcoin is better for millennial/Gen Z investors; gold is better for traditional portfolios.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is supply dynamics?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bitcoin: 21M cap, currently 21M mined (99%+), no more issuance after 2140. Supply is fixed. Gold: 200K tons above ground, ~3,000 tons mined yearly (1.5% inflation). New supply dilutes value. This advantage favors Bitcoin: scarcer, no supply inflation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are 1-year, 5-year, and 10-year returns?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '1-year (2025): BTC +150%, Gold +8%. 5-year CAGR (2021-2026): BTC +35% vs Gold +12%. 10-year CAGR (2016-2026): BTC +200% vs Gold +8%. Bitcoin vastly outperforms gold on returns. However, Bitcoin had -65% drawdown (2022). Gold has never had >-20% annual decline.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Sharpe ratio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sharpe ratio = (return - risk-free rate) / volatility. Higher = better risk-adjusted returns. Bitcoin Sharpe: 1.2-2.0 (depends on period). Gold Sharpe: 0.3-0.8. Bitcoin has better risk-adjusted returns, but history is short (15 years). Gold has 100+ year history proving stability.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which is more portable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '$1M in Bitcoin: 64 characters (can memorize). $1M in gold: 50 kg (needs vault, security). Bitcoin is infinitely more portable. You can move $1B in seconds across borders. Gold requires physical transport, insurance, storage fees (0.5-1% yearly). Bitcoin transaction cost: $1-10 (~0.001%).',
        },
      },
      {
        '@type': 'Question',
        name: 'Which should I own?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bitcoin: if you believe in digital scarcity, long-term crypto adoption, and can tolerate 50%+ volatility. Gold: if you want stable, proven store of value, portfolio diversification, and lower volatility. Optimal: 70% gold (stability) + 30% Bitcoin (growth) for conservative investors. Or 50/50 for balanced. 100% Bitcoin for aggressive investors.',
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


export default function BitcoinVsGoldComparisonGuide() {
  const tableOfContents = [
    { id: 'overview', title: 'Quick Overview' },
    { id: 'supply-dynamics', title: 'Supply Dynamics: 21M vs 200K Tons' },
    { id: 'scarcity', title: 'Scarcity & Production Rates' },
    { id: 'historical-returns', title: 'Historical Returns: 1yr, 5yr, 10yr' },
    { id: 'volatility', title: 'Volatility & Drawdowns' },
    { id: 'portability', title: 'Portability & Accessibility' },
    { id: 'risk-metrics', title: 'Risk Metrics: Sharpe Ratio, Beta' },
    { id: 'comparison-table', title: 'Full Comparison Table' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/learn" style={{ color: '#8b949e', textDecoration: 'none' }}>Learn</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Bitcoin vs Gold</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>Learn</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          <h1 style={h1Style}>Bitcoin vs Gold Comparison Guide 2026</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Head-to-head comparison: Bitcoin (21M supply, $60K, 150% 1yr return) vs Gold ($2,400/oz, 200K tons above ground, 8% 1yr return). Supply, scarcity, returns, volatility, Sharpe ratio, and portability analyzed.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 14 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-10"
          readingTime={14}
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

        <section id="overview">
          <h2 style={h2Style}>Quick Overview</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Bitcoin and gold are both stores of value, but differ fundamentally. Bitcoin is digital, scarce (21M cap), young (15 years), and volatile (+150% 1yr, -65% worst drawdown). Gold is physical, abundant (200K tons mined), ancient (5,000+ years), and stable (+8% 1yr, -20% max drawdown). For investors: Bitcoin = growth asset, Gold = stability asset. An optimal portfolio includes both.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We wrote this guide because the existing explanations online are either too simplified or assume PhD-level knowledge. Neither serves most readers.
          </p>
        </div>
        </section>

        <section id="supply-dynamics">
          <h2 style={h2Style}>Supply Dynamics: 21M vs 200K Tons</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Bitcoin Supply:</strong> Fixed at 21M. Currently 21.0M mined (April 2026, 99.5% complete). No inflation possible. Supply is mathematically capped. Last Bitcoin mined: 2140.
          </p>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Gold Supply:</strong> ~200K tons above ground (historical hoarding + mining). Annual mining: 3,000 tons (1.5% yearly inflation). New supply continuously dilutes existing holders. No supply cap. Humans can mine more if economically viable.
          </p>
          <h3 style={h3Style}>Scarcity Advantage</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Bitcoin: absolute scarcity. No more inflation possible after all coins mined. Gold: perpetual inflation (~1.5% yearly). This favors Bitcoin long-term: owning 1 Bitcoin guarantees 1/21M of global supply forever. Owning 1 oz of gold means your share of supply diminishes yearly.
          </p>
        </section>

        <section id="scarcity">
          <h2 style={h2Style}>Scarcity &amp; Production Rates</h2>
          <h3 style={h3Style}>Bitcoin Production (Halving Cycle)</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Era</th>
                <th style={thStyle}>Block Reward</th>
                <th style={thStyle}>Annual Inflation</th>
                <th style={thStyle}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>2009-2012</td>
                <td style={tdStyle}>50 BTC</td>
                <td style={tdStyle}>~4.2M BTC/yr</td>
                <td style={tdStyle}>Satoshi era</td>
              </tr>
              <tr>
                <td style={tdStyle}>2012-2016</td>
                <td style={tdStyle}>25 BTC</td>
                <td style={tdStyle}>~1.05M BTC/yr</td>
                <td style={tdStyle}>First halving</td>
              </tr>
              <tr>
                <td style={tdStyle}>2016-2020</td>
                <td style={tdStyle}>12.5 BTC</td>
                <td style={tdStyle}>~525K BTC/yr</td>
                <td style={tdStyle}>Second halving</td>
              </tr>
              <tr>
                <td style={tdStyle}>2020-2024</td>
                <td style={tdStyle}>6.25 BTC</td>
                <td style={tdStyle}>~262K BTC/yr</td>
                <td style={tdStyle}>Third halving (2020)</td>
              </tr>
              <tr>
                <td style={tdStyle}>2024-2028</td>
                <td style={tdStyle}>3.125 BTC</td>
                <td style={tdStyle}>~131K BTC/yr</td>
                <td style={tdStyle}>Fourth halving (2024)</td>
              </tr>
            </tbody>
          </table>
          <h3 style={h3Style}>Gold Production</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Annual gold mining: ~3,000 tons (constant). Inflation rate: 1.5% yearly (300K tons above ground baseline). This is consistent but non-decreasing. Unlike Bitcoin&apos;s halving, gold production does not decrease. As gold price rises, mining increases.
          </p>
        </section>

        <section id="historical-returns">
          <h2 style={h2Style}>Historical Returns: 1yr, 5yr, 10yr</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Period</th>
                <th style={thStyle}>Bitcoin</th>
                <th style={thStyle}>Gold</th>
                <th style={thStyle}>Winner</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>1-year (2025)</td>
                <td style={tdStyle}>+150%</td>
                <td style={tdStyle}>+8%</td>
                <td style={tdStyle}>Bitcoin 18.75x</td>
              </tr>
              <tr>
                <td style={tdStyle}>5-year CAGR (2021-2026)</td>
                <td style={tdStyle}>+35% CAGR</td>
                <td style={tdStyle}>+12% CAGR</td>
                <td style={tdStyle}>Bitcoin 3x</td>
              </tr>
              <tr>
                <td style={tdStyle}>10-year CAGR (2016-2026)</td>
                <td style={tdStyle}>+200% CAGR</td>
                <td style={tdStyle}>+8% CAGR</td>
                <td style={tdStyle}>Bitcoin 25x</td>
              </tr>
            </tbody>
          </table>
          <h3 style={h3Style}>Return Context</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Bitcoin vastly outperforms gold on returns. However: Bitcoin had -65% drawdown (2022) while gold had only -5%. Bitcoin is more volatile. For risk-adjusted returns (Sharpe ratio), Bitcoin wins 1.5-2.0 vs gold 0.3-0.8. But gold&apos;s 5,000-year history vs Bitcoin&apos;s 15 years matters.
          </p>
        </section>

        <section id="volatility">
          <h2 style={h2Style}>Volatility &amp; Drawdowns</h2>
          <h3 style={h3Style}>Bitcoin Volatility</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Annual volatility: 50-80%. Largest 1-day move: +25% / -20%. Worst drawdown (2022): -65% peak-to-trough. Bear market duration: 1-3 years. Recovery: 2-4 years after bear. Bitcoin swings are extreme. Only suitable for investors who can tolerate 50%+ portfolio drawdowns.
          </p>
          <h3 style={h3Style}>Gold Volatility</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Annual volatility: 10-20%. Largest 1-day move: +5% / -3%. Worst drawdown (1980-2001): -70% nominal, but +500% in USD terms (inflation). Historically: never lost &gt;20% in a year. Gold is much more stable than Bitcoin. Suitable for conservative portfolios.
          </p>
        </section>

        <section id="portability">
          <h2 style={h2Style}>Portability &amp; Accessibility</h2>
          <h3 style={h3Style}>Bitcoin Portability</h3>
          <ul style={{ color: '#8b949e', lineHeight: 1.8, marginLeft: 20, marginBottom: 16 }}>
            <li style={{ marginBottom: 8 }}><strong>$1M in Bitcoin:</strong> 64 characters (wallet address), memorizable, portable across borders instantly</li>
            <li style={{ marginBottom: 8 }}><strong>Transaction cost:</strong> $1-10 (~0.001% of value)</li>
            <li style={{ marginBottom: 8 }}><strong>Storage:</strong> completely digital, no security cost</li>
            <li style={{ marginBottom: 8 }}><strong>Accessibility:</strong> buy on any exchange in minutes</li>
          </ul>
          <h3 style={h3Style}>Gold Portability</h3>
          <ul style={{ color: '#8b949e', lineHeight: 1.8, marginLeft: 20, marginBottom: 16 }}>
            <li style={{ marginBottom: 8 }}><strong>$1M in gold:</strong> 50 kg (~110 lbs), requires vault, armored transport</li>
            <li style={{ marginBottom: 8 }}><strong>Transaction cost:</strong> 0.5-1% spread (bid-ask) + 0.5-1% storage fees annually</li>
            <li style={{ marginBottom: 8 }}><strong>Storage:</strong> bank vault ($500-2K/year), insurance costs</li>
            <li style={{ marginBottom: 8 }}><strong>Accessibility:</strong> buy from dealer, takes days to get physical</li>
          </ul>
          <h3 style={h3Style}>Portability Winner</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Bitcoin is infinitely more portable. You can move $1B across borders in seconds. Gold requires logistics, security, insurance. For global wealth storage, Bitcoin wins decisively. Gold requires physical presence or trustworthy custodian.
          </p>
        </section>

        <section id="risk-metrics">
          <h2 style={h2Style}>Risk Metrics: Sharpe Ratio, Beta</h2>
          <h3 style={h3Style}>Sharpe Ratio (Risk-Adjusted Returns)</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Asset</th>
                <th style={thStyle}>Return</th>
                <th style={thStyle}>Volatility</th>
                <th style={thStyle}>Sharpe Ratio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Bitcoin (10yr)</td>
                <td style={tdStyle}>+200% CAGR</td>
                <td style={tdStyle}>65%</td>
                <td style={tdStyle}>1.8</td>
              </tr>
              <tr>
                <td style={tdStyle}>Gold (10yr)</td>
                <td style={tdStyle}>+8% CAGR</td>
                <td style={tdStyle}>12%</td>
                <td style={tdStyle}>0.5</td>
              </tr>
              <tr>
                <td style={tdStyle}>S&amp;P 500 (10yr)</td>
                <td style={tdStyle}>+12% CAGR</td>
                <td style={tdStyle}>15%</td>
                <td style={tdStyle}>0.7</td>
              </tr>
            </tbody>
          </table>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Sharpe ratio = (return - risk-free rate) / volatility. Higher is better. Bitcoin has the highest Sharpe (1.8), meaning best returns per unit of risk. Gold has lower Sharpe (0.5), meaning less attractive on risk-adjusted basis. However: Bitcoin&apos;s history is only 15 years; gold&apos;s is 5,000+ years. Long-term Sharpe may differ.
          </p>
        </section>

        <section id="comparison-table">
          <h2 style={h2Style}>Full Comparison Table</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Metric</th>
                <th style={thStyle}>Bitcoin</th>
                <th style={thStyle}>Gold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Supply Cap</td>
                <td style={tdStyle}>21M (fixed, no inflation)</td>
                <td style={tdStyle}>200K tons (inflation 1.5%/yr)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Price (April 2026)</td>
                <td style={tdStyle}>~$60,000</td>
                <td style={tdStyle}>~$2,400/oz</td>
              </tr>
              <tr>
                <td style={tdStyle}>1-Year Return</td>
                <td style={tdStyle}>+150%</td>
                <td style={tdStyle}>+8%</td>
              </tr>
              <tr>
                <td style={tdStyle}>5-Year CAGR</td>
                <td style={tdStyle}>+35%</td>
                <td style={tdStyle}>+12%</td>
              </tr>
              <tr>
                <td style={tdStyle}>10-Year CAGR</td>
                <td style={tdStyle}>+200%</td>
                <td style={tdStyle}>+8%</td>
              </tr>
              <tr>
                <td style={tdStyle}>Volatility</td>
                <td style={tdStyle}>50-80% annually</td>
                <td style={tdStyle}>10-20% annually</td>
              </tr>
              <tr>
                <td style={tdStyle}>Worst Drawdown</td>
                <td style={tdStyle}>-65% (2022)</td>
                <td style={tdStyle}>-20% (worst year)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Sharpe Ratio</td>
                <td style={tdStyle}>1.8</td>
                <td style={tdStyle}>0.5</td>
              </tr>
              <tr>
                <td style={tdStyle}>Portability</td>
                <td style={tdStyle}>Perfect (digital)</td>
                <td style={tdStyle}>Poor (physical)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Storage Cost</td>
                <td style={tdStyle}>$0</td>
                <td style={tdStyle}>0.5-1%/year</td>
              </tr>
              <tr>
                <td style={tdStyle}>History</td>
                <td style={tdStyle}>15 years</td>
                <td style={tdStyle}>5,000+ years</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Is Bitcoin digital gold?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 0 }}>Bitcoin is often called "digital gold" because it has: fixed supply (21M), unforgeable scarcity, divisibility, portability (superior to gold), and global demand. However, Bitcoin has not proven multi-century stability like gold (5,000+ years of use). Bitcoin is more volatile (50%+ annual swings) vs gold (10-20%). Bitcoin is better for millennial/Gen Z investors; gold is better for traditional portfolios.</p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is supply dynamics?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 0 }}>Bitcoin: 21M cap, currently 21M mined (99%+), no more issuance after 2140. Supply is fixed. Gold: 200K tons above ground, ~3,000 tons mined yearly (1.5% inflation). New supply dilutes value. This advantage favors Bitcoin: scarcer, no supply inflation.</p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What are 1-year, 5-year, and 10-year returns?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 0 }}>1-year (2025): BTC +150%, Gold +8%. 5-year CAGR (2021-2026): BTC +35% vs Gold +12%. 10-year CAGR (2016-2026): BTC +200% vs Gold +8%. Bitcoin vastly outperforms gold on returns. However, Bitcoin had -65% drawdown (2022). Gold has never had &gt;-20% annual decline.</p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is Sharpe ratio?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 0 }}>Sharpe ratio = (return - risk-free rate) / volatility. Higher = better risk-adjusted returns. Bitcoin Sharpe: 1.2-2.0 (depends on period). Gold Sharpe: 0.3-0.8. Bitcoin has better risk-adjusted returns, but history is short (15 years). Gold has 100+ year history proving stability.</p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Which is more portable?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 0 }}> $1M in Bitcoin: 64 characters (can memorize). $1M in gold: 50 kg (needs vault, security). Bitcoin is infinitely more portable. You can move $1B in seconds across borders. Gold requires physical transport, insurance, storage fees (0.5-1% yearly). Bitcoin transaction cost: $1-10 (~0.001%).</p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Which should I own?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 0 }}>Bitcoin: if you believe in digital scarcity, long-term crypto adoption, and can tolerate 50%+ volatility. Gold: if you want stable, proven store of value, portfolio diversification, and lower volatility. Optimal: 70% gold (stability) + 30% Bitcoin (growth) for conservative investors. Or 50/50 for balanced. 100% Bitcoin for aggressive investors.</p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only. Neither Bitcoin nor gold is guaranteed to appreciate. Past returns do not predict future results. Consult a financial advisor before investing. This is not financial advice.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }>
            <li><Link href="/tools/crypto-exchange-fee-comparison-tool" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Crypto Exchange Fee Tool</Link></li>
            <li><Link href="/tools/altcoin-season-index" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Altcoin Season Index</Link></li>
            <li><Link href="/tools/bitcoin-dominance-chart-live" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Bitcoin Dominance Chart Live</Link></li>
            <li><Link href="/tools/bitcoin-halving-countdown" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Bitcoin Halving Countdown</Link></li>
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
