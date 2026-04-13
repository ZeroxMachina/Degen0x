import { Metadata } from 'next';
import Link from 'next/link';
import BackToTop from "@/components/BackToTop";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Crypto Portfolio Construction & Position Sizing Guide 2026",
  description: "Master crypto portfolio construction with Kelly criterion, risk parity, correlation analysis, and position sizing strategies. Learn allocation frameworks,",
  keywords: ['crypto portfolio', 'position sizing', 'Kelly criterion', 'risk parity', 'portfolio construction', 'asset allocation', 'rebalancing', 'portfolio theory', 'risk management', 'cryptocurrency'],
  openGraph: {
    type: 'article',
    title: "Crypto Portfolio Construction & Position Sizing Guide 2026",
    description: 'Master allocation frameworks, Kelly criterion, risk parity, correlation analysis, and rebalancing strategies for crypto portfolios.',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/learn/crypto-portfolio-construction-position-sizing-guide-2026',
    images: [{
      url: 'https://degen0x.com/og-portfolio-construction-2026.svg',
      width: 1200,
      height: 630,
      alt: 'Crypto Portfolio Construction & Position Sizing Guide 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Portfolio Construction & Position Sizing Guide 2026',
    description: 'Learn Kelly criterion, risk parity, correlation analysis, and position sizing for crypto portfolios. Master allocation frameworks and rebalancing.',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/crypto-portfolio-construction-position-sizing-guide-2026',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Crypto Portfolio Construction & Position Sizing Guide 2026',
  description: 'Master crypto portfolio construction with Kelly criterion, risk parity, correlation analysis, and position sizing strategies.',
  image: 'https://degen0x.com/og-portfolio-construction-2026.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: {
    '@type': 'Organization',
    name: 'degen0x',
  },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the Kelly Criterion and why use it in crypto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Kelly Criterion is a mathematical formula (f* = (bp - q) / b) that calculates the optimal fraction of your portfolio to risk on each position. It maximizes long-term compound growth. However, full Kelly is too aggressive for crypto; most traders use Quarter-Kelly (dividing the result by 4) to reduce volatility while maintaining growth. If you have a 30% win rate, 2:1 reward-to-risk, and use Quarter-Kelly, a 30% BTC drop only impacts your portfolio by 7.5%.',
        },
      },
      {
        '@type': 'Question',
        name: 'What allocation should I use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Allocation depends on your risk tolerance. Conservative: 60% BTC, 20% ETH, 10% large-cap alts, 10% stables. Moderate: 40% BTC, 25% ETH, 25% alts, 10% stables. Aggressive: 30% BTC, 25% ETH, 35% alts, 10% stables. These are starting points; adjust based on your market outlook and personal risk tolerance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I rebalance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There are two approaches: calendar-based (monthly or quarterly) or threshold-based (rebalance when any position drifts >5-10% from target). Calendar-based is simpler and reduces emotional decisions. Threshold-based respects market momentum but requires active monitoring. For tax efficiency, consider holding positions for >1 year if possible, and batch rebalances to minimize capital gains recognition.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does correlation matter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Correlation shows how assets move together. BTC-ETH correlation is ~0.85 (move together strongly). In crashes, correlation spikes to 1.0 (everything falls together), eliminating diversification benefits. Adding low-correlation assets (stablecoins, RWA tokens) reduces portfolio volatility. A portfolio of 50% BTC and 50% highly correlated altcoin is riskier than 100% BTC due to selection risk.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is risk parity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Risk parity allocates positions so each contributes equal risk to the portfolio. If BTC has 45% volatility and ETH has 60%, risk parity might allocate 57% to ETH and 43% to BTC, so both contribute ~15% of portfolio risk. This requires volatility adjustment and rebalancing. Risk parity works well in stable markets but underperforms during BTC rallies (when you want maximum BTC exposure).',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I diversify into alts or stick with BTC-ETH?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A core BTC-ETH portfolio (60% BTC, 40% ETH) provides excellent risk-adjusted returns with minimal selection risk. Adding alts introduces alpha potential but also concentration and rug-pull risk. If you add alts, cap them at 25-30% and focus on large-cap projects with $1B+ market cap and established security records. Many investors find BTC-ETH-only portfolios sufficient, especially for long-term wealth building.',
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
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Crypto Portfolio Construction & Position Sizing Guide 2026' },
  ],
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


export default function CryptoPortfolioConstructionGuide() {
  const pageStyle = { backgroundColor: '#0d1117', color: '#e6edf3', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', lineHeight: '1.6', minHeight: '100vh' } as const;
  const containerStyle = { maxWidth: '800px', margin: '0 auto', padding: 'clamp(20px, 5vw, 40px) clamp(16px, 4vw, 20px)' } as const;
  const h1Style = { fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', fontWeight: 700, marginBottom: '20px', marginTop: 0, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.02em', lineHeight: '1.2' } as const;
  const h2Style = { fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 600, marginTop: '40px', marginBottom: '20px', color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12, scrollMarginTop: '24px' } as const;
  const h3Style = { fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: 600, marginTop: '20px', marginBottom: '12px', color: '#e6edf3' } as const;
  const badgeStyle = { display: 'inline-block', backgroundColor: '#6366f1', color: '#fff', padding: '4px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, marginRight: '8px', marginBottom: '16px' } as const;
  const infoBoxStyle = { backgroundColor: '#161b22', border: '1px solid #30363d', borderLeft: '3px solid #a78bfa', borderLeft: '3px solid #a78bfa', borderRadius: '12px', padding: '20px', marginTop: '16px', marginBottom: '24px', lineHeight: '1.6' } as const;
  const linkStyle = { color: '#58a6ff', textDecoration: 'none', borderBottom: '1px solid rgba(88, 166, 255, 0.3)' } as const;
  const tocStyle = { backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '20px', marginTop: '24px', marginBottom: '40px' } as const;
  const tocHeadingStyle = { fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px', color: '#e6edf3' } as const;
  const tocListStyle = { listStyleType: 'none' as const, padding: 0, margin: 0 } as const;
  const tocItemStyle = { marginBottom: '8px' } as const;
  const disclaimerStyle = { backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '20px', marginTop: '40px', marginBottom: '40px', fontSize: '0.95rem', color: '#d1d9e0' } as const;
  const relatedLinksStyle = { backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '20px', marginTop: '40px', marginBottom: '40px' } as const;
  const tableStyle = { width: '100%', borderCollapse: 'collapse' as const, marginTop: '16px', marginBottom: '24px', fontSize: '0.95rem' } as const;
  const thStyle = { textAlign: 'left' as const, padding: '10px 14px', borderBottom: '2px solid #30363d', color: '#58a6ff', fontWeight: 600 } as const;
  const tdStyle = { padding: '10px 14px', borderBottom: '1px solid #21262d', color: '#c9d1d9' } as const;
  const warningBoxStyle = { backgroundColor: '#1c1118', border: '1px solid #f85149', borderRadius: '12px', padding: '20px', marginTop: '16px', marginBottom: '24px', lineHeight: '1.6' } as const;

  return (
    <article id="top" aria-label="Guide: Crypto Portfolio Construction & Position Sizing" style={pageStyle}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <div style={containerStyle}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/learn' },
          { label: 'Crypto Portfolio Construction & Position Sizing Guide 2026' },
        ]} />

        <div style={{ marginBottom: '32px' }}>
          <span style={{ ...badgeStyle, backgroundColor: '#6366f1' }}>Trading</span>
          <span style={{ ...badgeStyle, backgroundColor: '#8b5cf6' }}>Portfolio</span>
          <span style={{ ...badgeStyle, backgroundColor: '#06b6d4' }}>Risk Management</span>
          <span style={{ ...badgeStyle, backgroundColor: '#a16207' }}>Intermediate</span>

          <h1 style={h1Style}>Crypto Portfolio Construction &amp; Position Sizing Guide 2026</h1>

          <p style={{ fontSize: '1rem', color: '#8b949e', marginBottom: '20px', marginTop: '16px' }}>
            Crypto assets are 5-10x more volatile than traditional markets, making portfolio construction critical. This guide covers allocation frameworks, the Kelly Criterion, risk parity, correlation analysis, and rebalancing strategies to maximize risk-adjusted returns. Learn how professional traders size positions, allocate across BTC, ETH, and alternatives, and manage portfolio risk systematically.
          </p>

          <div style={{ display: 'flex', gap: '24px', fontSize: '0.9rem', color: '#8b949e', marginBottom: '24px' }}>
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


        <nav style={tocStyle} aria-label="Table of Contents">
          <h3 style={tocHeadingStyle}>Table of Contents</h3>
          <ol style={tocListStyle}>
            <li style={tocItemStyle}><a href="#why-portfolio-matters" style={{ ...linkStyle, color: '#58a6ff', textDecoration: 'none' }}>Why Portfolio Construction Matters in Crypto</a></li>
            <li style={tocItemStyle}><a href="#core-frameworks" style={{ ...linkStyle, color: '#58a6ff', textDecoration: 'none' }}>Core Allocation Frameworks</a></li>
            <li style={tocItemStyle}><a href="#kelly-criterion" style={{ ...linkStyle, color: '#58a6ff', textDecoration: 'none' }}>The Kelly Criterion for Crypto</a></li>
            <li style={tocItemStyle}><a href="#risk-parity" style={{ ...linkStyle, color: '#58a6ff', textDecoration: 'none' }}>Risk Parity Approach</a></li>
            <li style={tocItemStyle}><a href="#correlation" style={{ ...linkStyle, color: '#58a6ff', textDecoration: 'none' }}>Correlation Analysis</a></li>
            <li style={tocItemStyle}><a href="#position-sizing" style={{ ...linkStyle, color: '#58a6ff', textDecoration: 'none' }}>Position Sizing Methods</a></li>
            <li style={tocItemStyle}><a href="#rebalancing" style={{ ...linkStyle, color: '#58a6ff', textDecoration: 'none' }}>Rebalancing Strategies</a></li>
            <li style={tocItemStyle}><a href="#common-mistakes" style={{ ...linkStyle, color: '#58a6ff', textDecoration: 'none' }}>Common Mistakes</a></li>
            <li style={tocItemStyle}><a href="#faq" style={{ ...linkStyle, color: '#58a6ff', textDecoration: 'none' }}>FAQ</a></li>
          </ol>
        </nav>

        <section id="why-portfolio-matters" style={{ marginBottom: '48px' }}>
          <h2 style={h2Style}>1. Why Portfolio Construction Matters in Crypto</h2>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Crypto assets exhibit extreme volatility compared to traditional markets. Bitcoin&apos;s 30-day realized volatility typically ranges 30-45%, Ethereum 40-60%, while the traditional gold market averages 1.2% and the S&P 500 around 14%. This volatility creates both opportunity and danger. Without systematic portfolio construction, most investors either over-concentrate in a single asset, underestimate drawdown severity, or panic-sell at market bottoms.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Understanding this concept is a prerequisite for making informed decisions in DeFi. Most losses in crypto come from misunderstanding the fundamentals.
          </p>
        </div>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            The phrase "just buy Bitcoin" ignores a critical reality: even the strongest crypto conviction benefits from portfolio structure. A Bitcoin-only portfolio (100% BTC) exposes you to full drawdown risk. A Bitcoin-Ethereum portfolio (70% BTC, 30% ETH) with similar expected return reduces volatility. A diversified portfolio with BTC, ETH, large-cap alts, and stables balances growth and stability.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            The goal of portfolio construction is simple: maximize risk-adjusted returns. That means earning the highest possible returns for a given level of volatility, or equivalently, earning target returns with minimal risk. Professional investors achieve this through allocation frameworks, position sizing methods grounded in probability theory (Kelly Criterion), and disciplined rebalancing.
          </p>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#6366f1', marginBottom: '12px' }}>Key Concept: Volatility vs Drawdown</h3>
            <p style={{ color: '#c9d1d9', fontSize: '0.9rem', marginBottom: '8px' }}>
              <strong>Volatility</strong> (standard deviation of returns) tells you how much prices fluctuate. <strong>Drawdown</strong> is the peak-to-trough decline. A portfolio might have 30% annual volatility but experience a 60% drawdown during a crash. Portfolio construction reduces both, but drawdown reduction (through diversification) matters more psychologically—experiencing a 30% drawdown is more manageable than a 70% drawdown, reducing the temptation to sell at the bottom.
            </p>
          </div>
        </section>

        <section id="core-frameworks" style={{ marginBottom: '48px' }}>
          <h2 style={h2Style}>2. Core Allocation Frameworks</h2>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Allocation frameworks are starting templates based on risk tolerance. They&apos;re not one-size-fits-all but provide structure for thinking about position sizing. Bitcoin (BTC) and Ethereum (ETH) form the core of most crypto portfolios due to their liquidity, market cap, and security. Large-cap alternatives (alts) like Solana, Arbitrum, and Polygon add growth exposure. Stablecoins (USDC, USDT) provide dry powder for buying dips and risk cushion.
          </p>

          <h3 style={h3Style}>Conservative Portfolio (Target: 15-20% Annual Volatility)</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '12px' }}>
            For investors who prioritize capital preservation and can tolerate 30-40% drawdowns:
          </p>
          <ul style={{ color: '#c9d1d9', fontSize: '0.95rem', marginLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '8px' }}>60% Bitcoin — Core wealth store</li>
            <li style={{ marginBottom: '8px' }}>20% Ethereum — Proven L1 with DeFi ecosystem</li>
            <li style={{ marginBottom: '8px' }}>10% Large-cap alts — Solana, Arbitrum, or similar</li>
            <li>10% Stablecoins — Dry powder and volatility dampener</li>
          </ul>

          <h3 style={h3Style}>Moderate Portfolio (Target: 25-35% Annual Volatility)</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '12px' }}>
            For investors seeking growth with balanced risk, aiming to tolerate 50-60% drawdowns:
          </p>
          <ul style={{ color: '#c9d1d9', fontSize: '0.95rem', marginLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '8px' }}>40% Bitcoin — Core holding</li>
            <li style={{ marginBottom: '8px' }}>25% Ethereum — Growth through DeFi and scaling</li>
            <li style={{ marginBottom: '8px' }}>25% Alts (diversified) — Solana, Arbitrum, Base, Optimism</li>
            <li>10% Stablecoins — Rebalancing reserve</li>
          </ul>

          <h3 style={h3Style}>Aggressive Portfolio (Target: 40-60% Annual Volatility)</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '12px' }}>
            For investors prioritizing growth, comfortable with 70-80% drawdowns:
          </p>
          <ul style={{ color: '#c9d1d9', fontSize: '0.95rem', marginLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '8px' }}>30% Bitcoin — Risk core</li>
            <li style={{ marginBottom: '8px' }}>25% Ethereum — DeFi and L2 upside</li>
            <li style={{ marginBottom: '8px' }}>35% Alts (concentrated) — Focus on high-conviction positions</li>
            <li>10% Stablecoins — Position sizing buffer</li>
          </ul>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px', marginTop: '24px' }}>
            Choose your framework based on your time horizon (longer = more aggressive possible), emotional tolerance for drawdowns (test by imagining a 50% decline), and economic situation (employment stability, emergency fund adequacy). Most retail investors underestimate their risk tolerance during good markets and overestimate during crashes.
          </p>

          <div role="region" aria-label="Scrollable table — Allocation Frameworks by Risk Profile" tabIndex={0} style={{ overflowX: 'auto' }}>
          <table style={tableStyle}>
            <caption style={{ textAlign: 'left', color: '#8b949e', fontSize: '0.85rem', marginBottom: '8px', captionSide: 'top' as const }}>Model portfolio allocations across conservative, moderate, and aggressive risk profiles</caption>
            <thead>
              <tr>
                <th style={thStyle}>Profile</th>
                <th style={thStyle}>BTC</th>
                <th style={thStyle}>ETH</th>
                <th style={thStyle}>Alts</th>
                <th style={thStyle}>Stables</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>Conservative</strong></td>
                <td style={tdStyle}>60%</td>
                <td style={tdStyle}>20%</td>
                <td style={tdStyle}>10%</td>
                <td style={tdStyle}>10%</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Moderate</strong></td>
                <td style={tdStyle}>40%</td>
                <td style={tdStyle}>25%</td>
                <td style={tdStyle}>25%</td>
                <td style={tdStyle}>10%</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Aggressive</strong></td>
                <td style={tdStyle}>30%</td>
                <td style={tdStyle}>25%</td>
                <td style={tdStyle}>35%</td>
                <td style={tdStyle}>10%</td>
              </tr>
            </tbody>
          </table>
          </div>
        </section>

        <section id="kelly-criterion" style={{ marginBottom: '48px' }}>
          <h2 style={h2Style}>3. The Kelly Criterion for Crypto</h2>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            The Kelly Criterion is a mathematical formula that calculates the optimal fraction of your portfolio to risk on a position given your edge (win rate and reward-to-risk ratio). Developed by John Kelly in 1956, it maximizes long-term compound growth while avoiding ruin. The formula is:
          </p>

          <div style={{ backgroundColor: '#0d1117', border: '1px solid #30363d', borderRadius: '8px', padding: '16px', marginBottom: '24px', fontFamily: 'monospace', color: '#79c0ff', fontSize: '0.95rem', textAlign: 'center' }}>
            f* = (bp - q) / b
          </div>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Where: <strong>f*</strong> = fraction of portfolio to risk, <strong>b</strong> = reward-to-risk ratio, <strong>p</strong> = win probability, <strong>q</strong> = loss probability (1 - p).
          </p>

          <h3 style={h3Style}>Worked Example: Kelly Criterion in Action</h3>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '12px' }}>
            Let&apos;s say you&apos;ve backtested a trading strategy with:
          </p>
          <ul style={{ color: '#c9d1d9', fontSize: '0.95rem', marginLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '8px' }}>Win rate: 55% (p = 0.55)</li>
            <li style={{ marginBottom: '8px' }}>Average winning trade: 2% gain</li>
            <li style={{ marginBottom: '8px' }}>Average losing trade: 1% loss</li>
            <li style={{ marginBottom: '8px' }}>Reward-to-risk: 2% / 1% = 2.0 (b = 2.0)</li>
          </ul>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Full Kelly calculation:</strong> f* = (2.0 × 0.55 - 0.45) / 2.0 = (1.1 - 0.45) / 2.0 = 0.325 or 32.5%
          </p>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Full Kelly (32.5%) would suggest risking 32.5% of your portfolio per trade—theoretically optimal but psychologically brutal. A single losing streak results in catastrophic drawdown. Instead, traders use <strong>Fractional Kelly</strong>:
          </p>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#6366f1', marginBottom: '12px' }}>Quarter-Kelly Recommendation</h3>
            <p style={{ color: '#c9d1d9', fontSize: '0.9rem', marginBottom: '0px' }}>
              Divide Kelly by 4. In this example: 32.5% / 4 = 8.125% per position. This reduces volatility by ~60% while maintaining 75% of the growth rate. For a $100,000 portfolio, you&apos;d risk ~$8,125 per position. If BTC drops 30%, your 8.125% position loss is absorbed with only 2.4% total portfolio impact.
            </p>
          </div>

          <h3 style={h3Style}>Practical Application: Crypto Portfolio Sizing</h3>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            For a diversified crypto portfolio (vs a single trading position), Kelly-based sizing works similarly. If you believe Bitcoin has a 55% edge over the next year with a 2:1 reward-to-risk ratio, Kelly suggests overweighting BTC. Conservative investors apply Quarter-Kelly:
          </p>

          <ul style={{ color: '#c9d1d9', fontSize: '0.95rem', marginLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}>Full Kelly: 32.5% BTC allocation</li>
            <li style={{ marginBottom: '8px' }}>Quarter-Kelly: 8% above baseline (if baseline is 50%, new allocation = 58%)</li>
          </ul>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            <strong>Key insight:</strong> If properly sized with Quarter-Kelly (8.125% risk per position), a 30% drop in BTC only impacts a properly diversified portfolio by ~2.4%. This is why position sizing is more important than being "right"—sizing manages the damage of being wrong.
          </p>
        </section>

        <section id="risk-parity" style={{ marginBottom: '48px' }}>
          <h2 style={h2Style}>4. Risk Parity Approach</h2>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Risk parity allocates positions so each contributes equal risk to the portfolio, rather than equal capital. The intuition: why hold equal amounts of an asset with 30% volatility and an asset with 60% volatility if the latter contributes twice the risk? Risk parity re-weights based on volatility.
          </p>

          <h3 style={h3Style}>Risk Parity Example: BTC vs ETH</h3>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '12px' }}>
            Assume BTC has 45% volatility and ETH has 60% volatility. To contribute equal risk:
          </p>

          <div style={{ backgroundColor: '#0d1117', border: '1px solid #30363d', borderRadius: '8px', padding: '16px', marginBottom: '24px', fontFamily: 'monospace', color: '#79c0ff', fontSize: '0.9rem' }}>
            <div>BTC allocation = 60 / (45 + 60) = 57%</div>
            <div>ETH allocation = 45 / (45 + 60) = 43%</div>
          </div>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            This 57/43 split ensures both assets contribute ~20% of portfolio volatility each (assuming zero correlation). Compare to a naive 50/50 split, which would be 22.5% BTC risk and 30% ETH risk—the portfolio would be "ETH-heavy" on a risk basis.
          </p>

          <h3 style={h3Style}>When Risk Parity Works</h3>

          <ul style={{ color: '#c9d1d9', fontSize: '0.95rem', marginLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '8px' }}>Stable, low-correlation environments (different asset classes)</li>
            <li style={{ marginBottom: '8px' }}>Long-term strategic allocation (buy-and-hold with periodic rebalancing)</li>
            <li style={{ marginBottom: '8px' }}>Institutional portfolios requiring explicit risk budgeting</li>
          </ul>

          <h3 style={h3Style}>When Risk Parity Underperforms</h3>

          <ul style={{ color: '#c9d1d9', fontSize: '0.95rem', marginLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}>Bull markets in a single asset (BTC 2020-2021 rally: risk parity underweights BTC relative to trend following)</li>
            <li style={{ marginBottom: '8px' }}>Crypto specifically: BTC-ETH correlation approaches 1.0, so risk parity approximates equal-weight (less useful)</li>
            <li style={{ marginBottom: '8px' }}>High turnover and rebalancing costs eat into returns</li>
          </ul>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            For most crypto investors, risk parity is valuable theoretically but impractical for small portfolios (rebalancing costs exceed benefits). A simpler approach: start with your target allocation (e.g., 60% BTC, 40% ETH) and accept the volatility asymmetry. Rebalance when drift exceeds 5-10%.
          </p>
        </section>

        <section id="correlation" style={{ marginBottom: '48px' }}>
          <h2 style={h2Style}>5. Correlation Analysis</h2>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Correlation measures how assets move together. A correlation of +1.0 means perfectly synchronized movement (no diversification benefit). Zero means independent. -1.0 means perfect inverse movement (perfect hedge). Portfolio diversification requires low-correlation assets.
          </p>

          <h3 style={h3Style}>Crypto Correlation Reality</h3>

          <div role="region" aria-label="Scrollable table — Crypto Correlation Matrix" tabIndex={0} style={{ overflowX: 'auto' }}>
          <table style={tableStyle}>
            <caption style={{ textAlign: 'left', color: '#8b949e', fontSize: '0.85rem', marginBottom: '8px', captionSide: 'top' as const }}>Correlation between crypto asset pairs in normal and crash conditions</caption>
            <thead>
              <tr>
                <th style={thStyle}>Asset Pair</th>
                <th style={thStyle}>Normal Correlation</th>
                <th style={thStyle}>Crash Correlation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>BTC-ETH</td>
                <td style={tdStyle}>~0.85</td>
                <td style={tdStyle}>~0.95</td>
              </tr>
              <tr>
                <td style={tdStyle}>BTC-Large-cap alts</td>
                <td style={tdStyle}>~0.70</td>
                <td style={tdStyle}>~0.90</td>
              </tr>
              <tr>
                <td style={tdStyle}>BTC-Stablecoins</td>
                <td style={tdStyle}>~0.05</td>
                <td style={tdStyle}>~0.02</td>
              </tr>
              <tr>
                <td style={tdStyle}>BTC-Gold</td>
                <td style={tdStyle}>~0.15</td>
                <td style={tdStyle}>~0.30</td>
              </tr>
            </tbody>
          </table>
          </div>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px', marginTop: '24px' }}>
            The critical insight: <strong>correlation spikes during crashes</strong>. When crypto markets panic, all assets fall together (correlation → 1.0), eliminating diversification benefits precisely when you need them. This is the "correlation collapse" problem: your diversified portfolio acts like a concentrated portfolio during drawdowns.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            A portfolio of 50% BTC and 50% highly correlated altcoins (0.95 correlation) actually has <strong>less</strong> diversification benefit than 100% BTC, due to selection risk (you&apos;re exposed to both BTC risk AND the altcoin&apos;s idiosyncratic risk). Only including low-correlation assets (stablecoins, RWA tokens, or completely different asset classes) provides meaningful diversification.
          </p>

          <h3 style={h3Style}>Building Low-Correlation Into Your Portfolio</h3>

          <ul style={{ color: '#c9d1d9', fontSize: '0.95rem', marginLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Stablecoins</strong> (USDC, USDT): 0.05 correlation with BTC. Provide dry powder and volatility anchor.</li>
            <li style={{ marginBottom: '8px' }}><strong>RWA Tokens</strong> (Pendle, Ondo): Pegged to real-world yield. Low crypto correlation.</li>
            <li style={{ marginBottom: '8px' }}><strong>Traditional assets</strong> (if portfolio is multi-asset): US Treasury bonds, gold futures.</li>
            <li style={{ marginBottom: '8px' }}><strong>Stable yields</strong> (Lido staking, Aave lending): Low volatility, consistent returns.</li>
          </ul>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#6366f1', marginBottom: '12px' }}>Key Takeaway: Correlation Limits Crypto Diversification</h3>
            <p style={{ color: '#c9d1d9', fontSize: '0.9rem', marginBottom: '0px' }}>
              Diversifying across 10 different L1 blockchains (0.8+ correlation) provides less volatility reduction than a 3-asset portfolio of BTC, ETH, and stables. Effective diversification requires exploring non-crypto assets, stable yields, or simply accepting that crypto markets are inherently correlated during stress.
            </p>
          </div>
        </section>

        <section id="position-sizing" style={{ marginBottom: '48px' }}>
          <h2 style={h2Style}>6. Position Sizing Methods</h2>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Position sizing is how you translate an allocation framework into actual holdings. If your target is 40% BTC and you have $100,000, you hold $40,000 in BTC. But how do you size individual positions? Four main methods:
          </p>

          <h3 style={h3Style}>1. Fixed Fractional (Equal Weight)</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Divide portfolio equally among positions (e.g., 5 altcoins = 20% each). Simple, requires no data, introduces concentration risk if holdings are correlated.
          </p>

          <h3 style={h3Style}>2. Volatility-Adjusted (Risk Parity)</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Size positions inversely to their volatility. Lower volatility assets get higher allocation (covered in Risk Parity section). Requires calculating 30-day or 90-day realized volatility for each position.
          </p>

          <h3 style={h3Style}>3. Kelly-Based Sizing</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Use the Kelly formula with your edge (estimated win rate and reward-to-risk). Apply Fractional Kelly (1/4 or 1/2) to avoid overlevering. Most suitable for active traders; less applicable to buy-and-hold portfolios.
          </p>

          <h3 style={h3Style}>4. Max Position Limits</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Cap the largest position at X% of portfolio. E.g., "no single position &gt;15%" prevents overconcentration. Combined with an allocation framework (60% BTC target), this limits single-asset blowup risk.
          </p>

          <div role="region" aria-label="Scrollable table — Position Sizing Methods Comparison" tabIndex={0} style={{ overflowX: 'auto' }}>
          <table style={tableStyle}>
            <caption style={{ textAlign: 'left', color: '#8b949e', fontSize: '0.85rem', marginBottom: '8px', captionSide: 'top' as const }}>Four position sizing methods compared by pros and cons</caption>
            <thead>
              <tr>
                <th style={thStyle}>Method</th>
                <th style={thStyle}>Pros</th>
                <th style={thStyle}>Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>Fixed Fractional</strong></td>
                <td style={tdStyle}>Simple, no calculation</td>
                <td style={tdStyle}>Ignores volatility and edge</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Volatility-Adjusted</strong></td>
                <td style={tdStyle}>Sophisticated, reduces concentration</td>
                <td style={tdStyle}>Requires monitoring, rebalancing costs</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Kelly-Based</strong></td>
                <td style={tdStyle}>Theoretically optimal growth</td>
                <td style={tdStyle}>Requires reliable edge data</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Max Limits</strong></td>
                <td style={tdStyle}>Risk control, psychological comfort</td>
                <td style={tdStyle}>Arbitrary, ignores fundamentals</td>
              </tr>
            </tbody>
          </table>
          </div>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px', marginTop: '24px' }}>
            For most crypto investors, combining allocation frameworks with max position limits is practical. E.g., "60% BTC target, but never &gt;70%; 40% ETH target, but never &gt;50%." This enforces structure while allowing flexibility.
          </p>
        </section>

        <section id="rebalancing" style={{ marginBottom: '48px' }}>
          <h2 style={h2Style}>7. Rebalancing Strategies</h2>

          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Rebalancing restores your portfolio to target allocation. If BTC was 60% but rallies to 75%, you sell 15% worth of BTC and buy lower-correlation assets. Rebalancing forces you to "buy low, sell high" mechanically, removing emotion.
          </p>

          <h3 style={h3Style}>Calendar-Based Rebalancing</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Rebalance on a fixed schedule: monthly, quarterly, or annually. Simple to execute, reduces emotional interference, and minimizes transaction costs. For a $10,000 portfolio with $1,000 base rebalancing, drift costs (losing 2-3% to slippage and fees) are modest. Popular for long-term holders.
          </p>

          <h3 style={h3Style}>Threshold-Based Rebalancing</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Rebalance when any position drifts &gt;5-10% from target. If BTC should be 60% but is now 70%, threshold-based triggers a rebalance. Respects market momentum (if BTC is outperforming, you can ride it longer) but requires active monitoring. Better for experienced traders managing large portfolios where transaction costs are small.
          </p>

          <h3 style={h3Style}>Tax Implications of Rebalancing</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            In taxable accounts, rebalancing triggers capital gains. If BTC doubled and you sell 15%, you recognize the gain and owe taxes. Minimize this by:
          </p>

          <ul style={{ color: '#c9d1d9', fontSize: '0.95rem', marginLeft: '20px', marginBottom: '16px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Hold &gt;1 year before rebalancing.</strong> Long-term capital gains rates (15-20%) beat short-term rates (ordinary income).</li>
            <li style={{ marginBottom: '8px' }}><strong>Use tax-loss harvesting.</strong> Sell losing positions to offset gains from winning positions.</li>
            <li style={{ marginBottom: '8px' }}><strong>Rebalance in tax-advantaged accounts</strong> (IRA, 401k) where gains aren&apos;t taxed.</li>
            <li style={{ marginBottom: '8px' }}><strong>Use new deposits for rebalancing.</strong> If you can add capital, buy the underweight positions instead of selling winners.</li>
          </ul>

          <h3 style={h3Style}>DCA as Implicit Rebalancing</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Dollar-cost averaging (DCA)—investing a fixed amount regularly—acts as automatic rebalancing. If you invest $500/month split 60% BTC, 40% ETH, you&apos;re constantly buying more of the cheaper asset, which rebalances your portfolio naturally without selling (and without tax events).
          </p>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#6366f1', marginBottom: '12px' }}>Rebalancing Recommendation for Most Investors</h3>
            <p style={{ color: '#c9d1d9', fontSize: '0.9rem', marginBottom: '0px' }}>
              Start with <strong>calendar-based (quarterly)</strong> rebalancing. It&apos;s simple, removes emotion, and tax-efficient if you hold &gt;1 year. Once comfortable, graduate to threshold-based (drift &gt;10%) if your portfolio exceeds $50,000, where transaction costs are negligible.
            </p>
          </div>
        </section>

        <section id="common-mistakes" style={{ marginBottom: '48px' }}>
          <h2 style={h2Style}>8. Common Portfolio Mistakes</h2>

          <h3 style={h3Style}>Overconcentration in Small-Cap Altcoins</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Many new investors chase 10x returns by buying obscure altcoins. A $1,000 position in a $50M market-cap token is only one exchange listing failure or developer rug away from zero. Even with a 5% allocation to high-risk alts, a single rug destroys your risk-adjusted returns. Stick to $1B+ market-cap assets unless you truly understand the project and can afford total loss.
          </p>

          <h3 style={h3Style}>Ignoring Correlation During Stress</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Believing a diversified alt portfolio (10 different L1s) will protect you during crashes is a mistake. When leverage liquidates and risk-off sentiment hits, all crypto falls together. Correlation spikes. Your "diversified" 10-alt portfolio falls 70% while BTC only falls 50%, negating diversification. Add uncorrelated assets (stables, traditional bonds if possible) to hedge.
          </p>

          <h3 style={h3Style}>Not Accounting for Illiquidity</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Small-cap tokens have wide bid-ask spreads. A 5% position looks safe until you try to exit and realize you&apos;re selling into illiquidity, losing 10-15% to slippage. For positions &gt;$10,000, ensure daily volume exceeds $5M+ to avoid liquidity drains. Large-cap BTC and ETH (volumes &gt;$10B daily) have near-zero slippage.
          </p>

          <h3 style={h3Style}>Emotional Rebalancing</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Watching BTC rally 30% and resisting the urge to reallocate more into it is psychologically hard. Conversely, watching it drop 30% and panic-selling underperformers is equally common. Successful investors stick to mechanical rules (calendar or threshold-based) and ignore the noise. This is where discipline beats intelligence.
          </p>

          <h3 style={h3Style}>Chasing Past Performance</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px' }}>
            Because Solana outperformed in 2024 doesn&apos;t mean it will in 2025. Performance-chasing is a classic behavioral trap. Instead, rebalance to target allocation regardless of recent returns. This forces you to sell winners and buy losers, the opposite of performance-chasing and the foundation of successful investing.
          </p>
        </section>

        <section id="faq" style={{ marginBottom: '48px' }}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={{ ...infoBoxStyle, marginTop: '24px' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e6edf3', marginBottom: '12px' }}>Q: What is the Kelly Criterion and why use it in crypto?</h3>
            <p style={{ color: '#c9d1d9', fontSize: '0.9rem', marginBottom: '0px' }}>
              The Kelly Criterion is a formula that calculates the optimal percentage of your portfolio to risk on each position: f* = (bp - q) / b. It maximizes long-term compound growth. Full Kelly is aggressive; most traders use Fractional Kelly (Quarter-Kelly: dividing by 4) instead. If properly sized with Quarter-Kelly on a 30% BTC drop, a well-allocated portfolio loses ~7.5% total value, not more.
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginTop: '24px' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e6edf3', marginBottom: '12px' }}>Q: Should I use one of the allocation frameworks or customize?</h3>
            <p style={{ color: '#c9d1d9', fontSize: '0.9rem', marginBottom: '0px' }}>
              Start with a framework matching your risk tolerance. Conservative (60/20/10/10) is safer psychologically. Once you have a framework, customize slightly based on your edge and outlook. If you believe ETH will outperform, shift the allocation 5-10% toward ETH. But don&apos;t abandon structure entirely—structure is what prevents overleveraging into a single conviction.
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginTop: '24px' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e6edf3', marginBottom: '12px' }}>Q: How often should I rebalance?</h3>
            <p style={{ color: '#c9d1d9', fontSize: '0.9rem', marginBottom: '0px' }}>
              Calendar-based (quarterly or annually) is simpler and more tax-efficient for long-term holders. Threshold-based (rebalance when drift &gt;10%) is better if you&apos;re actively monitoring. Most retail investors benefit from quarterly rebalancing: simple, not emotionally reactive, and manageable tax-wise if held &gt;1 year.
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginTop: '24px' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e6edf3', marginBottom: '12px' }}>Q: Does diversifying into 10 altcoins reduce risk?</h3>
            <p style={{ color: '#c9d1d9', fontSize: '0.9rem', marginBottom: '0px' }}>
              Not meaningfully if all 10 are crypto. High correlation (0.85+) means they move together, especially during crashes. A 50% BTC + 50% diversified alts portfolio has less diversification than 60% BTC + 40% ETH + 10% stables. Add truly uncorrelated assets (stablecoins, yields, traditional bonds) for risk reduction that actually works.
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginTop: '24px' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e6edf3', marginBottom: '12px' }}>Q: How should I position-size if I don&apos;t know my edge?</h3>
            <p style={{ color: '#c9d1d9', fontSize: '0.9rem', marginBottom: '0px' }}>
              Use your allocation framework (conservative/moderate/aggressive) as position sizes. If moderate = 40% BTC, 25% ETH, 25% alts, 10% stables, that IS your position sizing. No additional Kelly calculation needed. Kelly is for active traders with track records. For buy-and-hold, allocation framework + quarterly rebalancing is sufficient.
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginTop: '24px' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e6edf3', marginBottom: '12px' }}>Q: What if I only want to hold BTC?</h3>
            <p style={{ color: '#c9d1d9', fontSize: '0.9rem', marginBottom: '0px' }}>
              100% BTC is a valid long-term strategy if you can psychologically handle 60-70% drawdowns and you&apos;re confident in BTC&apos;s adoption. Many billionaires hold Bitcoin-only. However, adding 30-40% ETH or stables provides volatility reduction with minimal return sacrifice. The "buy BTC only" approach works but requires strong conviction and emotional discipline.
            </p>
          </div>
        </section>

        <section style={disclaimerStyle}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f85149', marginBottom: '12px' }}>Disclaimer</h3>
          <p style={{ color: '#c9d1d9', fontSize: '0.9rem', marginBottom: '12px' }}>
            This guide is educational content, not financial advice. Portfolio construction frameworks, Kelly sizing, and rebalancing strategies are informational tools. Crypto is highly volatile; past performance doesn&apos;t guarantee future results. Never invest more than you can afford to lose. Consult a qualified financial advisor before implementing any portfolio strategy, especially with significant capital or in taxable accounts. Tax rules vary by jurisdiction; consult a tax professional regarding capital gains, loss harvesting, and reporting requirements. The author and degen0x assume no responsibility for financial losses resulting from decisions made based on this content.
          </p>
        </section>

        <section style={relatedLinksStyle}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e6edf3', marginBottom: '16px' }}>Related Guides</h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <Link href="/learn/crypto-dca-dollar-cost-averaging-strategy-guide-2026" style={linkStyle}>
                Crypto DCA (Dollar-Cost Averaging) Strategy Guide 2026
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link href="/learn/crypto-portfolio-rebalancing-guide-2026" style={linkStyle}>
                Crypto Portfolio Rebalancing Guide 2026
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link href="/learn/crypto-passive-income-complete-guide-2026" style={linkStyle}>
                Crypto Passive Income Complete Guide 2026
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link href="/learn/crypto-staking-guide-2026" style={linkStyle}>
                Crypto Staking Guide 2026
              </Link>
            </li>
            <li style={{ marginBottom: '0px' }}>
              <Link href="/learn/crypto-tax-guide-2026" style={linkStyle}>
                Crypto Tax Guide 2026
              </Link>
            </li>
          </ul>
        </section>

        <BackToTop />
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Crypto Portfolio Construction & Position Sizing Guide 2026", "description": "Master crypto portfolio construction with Kelly criterion, risk parity, correlation analysis, and position sizing strategies. Learn allocation frameworks,", "url": "https://degen0x.com/learn/crypto-portfolio-construction-position-sizing-guide-2026", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</div>
      <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <span style={{ color: "#8b949e" }}>Related: </span>
  <a href="/learn/paradex-zk-perpetuals-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Paradex Zk Perpetuals Guide 2026</a>
  <a href="/learn/sonic-blockchain-guide" style={{ color: "#fb923c", marginRight: "1rem" }}>Sonic Blockchain Guide</a>
  <a href="/learn/chainlink-ccip-cross-chain-interoperability-link-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Chainlink Ccip Cross Chain Interoperability Link Guide 2026</a>

          <a href="/learn/protocol-owned-liquidity-pol-treasury-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Protocol Owned Liquidity Pol Treasury Guide 2026</a>
        </nav>
      </article>
  );
}
