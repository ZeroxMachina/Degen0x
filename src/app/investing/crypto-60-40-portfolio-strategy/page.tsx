import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Crypto 60/40 Portfolio Strategy 2026: BTC/ETH Allocation &",
  description: "Crypto 60/40 portfolio: 60% BTC (stability) + 40% ETH (growth) + alts (0-40%). Rebalancing framework, risk management, tax-efficient strategies. Real",
  keywords: ['crypto 60-40 portfolio', 'BTC ETH allocation', 'portfolio rebalancing', 'crypto diversification', 'asset allocation', 'altcoins'],
  openGraph: {
    type: 'article',
    title: 'Crypto 60/40 Portfolio Strategy 2026: BTC/ETH Allocation',
    description: 'Complete guide to 60/40 crypto portfolio: allocation, rebalancing, risk management. Real strategies for conservative/balanced/aggressive.',
    publishedTime: '2026-04-11T00:00:00Z',
    modifiedTime: '2026-04-11T00:00:00Z',
    url: 'https://degen0x.com/investing/crypto-60-40-portfolio-strategy',
    images: [{ url: 'https://degen0x.com/og-portfolio.svg', width: 1200, height: 630, alt: 'Crypto 60/40 Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto 60/40 Portfolio Strategy 2026',
    description: '60% BTC + 40% ETH core allocation with alts. Rebalancing and risk management.',
    image: 'https://degen0x.com/og-portfolio.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/investing/crypto-60-40-portfolio-strategy',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Crypto 60/40 Portfolio Strategy 2026: BTC/ETH Allocation & Rebalancing',
  description: 'Complete guide to 60/40 crypto portfolio allocation: 60% Bitcoin (stability), 40% Ethereum (growth), plus strategic altcoins (0-40%). Includes rebalancing framework, tax efficiency, and risk management.',
  image: 'https://degen0x.com/og-portfolio.svg',
  datePublished: '2026-04-11',
  dateModified: '2026-04-11',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Why 60% BTC and 40% ETH?', acceptedAnswer: { '@type': 'Answer', text: 'BTC is larger, more stable, institutional reserve asset. ETH drives ecosystem innovation (DeFi, staking). 60/40 balances stability (BTC) with growth upside (ETH). Adjust for your risk tolerance.' } },
      { '@type': 'Question', name: 'How much should I allocate to alts?', acceptedAnswer: { '@type': 'Answer', text: 'Conservative: 0-10% alts. Balanced: 10-20% alts. Aggressive: 20-40% alts. Higher allocation = higher volatility but upside potential. Avoid >40%.' } },
      { '@type': 'Question', name: 'When should I rebalance?', acceptedAnswer: { '@type': 'Answer', text: 'Rebalance quarterly or when allocation drifts >5% from target. Sell overweight, buy underweight. Forces discipline (buy low, sell high). Automate with spreadsheet tracking.' } },
      { '@type': 'Question', name: 'Which altcoins fit 60/40?', acceptedAnswer: { '@type': 'Answer', text: 'L1 chains (SOL, AVAX, NEAR), stablecoins (USDC, USDT), DeFi blue chips (AAVE, UNI, CURVE), infrastructure (ARB, OP). Avoid high-volatility memes and micro-caps.' } },
      { '@type': 'Question', name: 'Should I use stablecoins in allocation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, especially in bear markets. 5-15% stablecoin allocation provides dry powder for dips. Generates yield (3-5% APY via Aave/Curve). Rebalance into stables when BTC/ETH soar.' } },
      { '@type': 'Question', name: 'How do I rebalance tax-efficiently?', acceptedAnswer: { '@type': 'Answer', text: 'Use tax-loss harvesting (sell losers, offset gains). Rebalance in tax-deferred accounts (Bitcoin IRA). Batch rebalancing to minimize taxable events. Plan before year-end.' } },
    ],
  },
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Investing', item: 'https://degen0x.com/investing' },
    { '@type': 'ListItem', position: 3, name: 'Crypto 60 40 Portfolio Strategy', },
  ],
};

export default function Crypto6040Portfolio() {
  const badgeStyle = {
    display: 'inline-block',
    padding: '6px 12px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 16,
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

  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d', borderLeft: '3px solid #10b981', borderLeft: '3px solid #10b981',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
  };

  const linkStyle = {
    color: '#58a6ff',
    textDecoration: 'none',
  };

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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/investing" style={{ color: '#8b949e', textDecoration: 'none' }}>Investing</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>60/40 Strategy</span>
        </nav>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div>
            <span style={{ ...badgeStyle, background: '#22c55e', color: '#0d1117' }}>Allocation</span>
            <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Risk Management</span>
          </div>
          <h1 style={h1Style}>Crypto 60/40 Portfolio Strategy 2026</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Complete guide to 60/40 crypto allocation: 60% Bitcoin (stability, store of value), 40% Ethereum (DeFi, staking yields 3-4%), plus strategic altcoins (0-40%). Includes rebalancing framework (quarterly or 5% drift), risk management, tax efficiency, and real allocation models for conservative/balanced/aggressive investors.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 11, 2026</span>
            <span>Reading time: 14 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="SatoshiGhost"
          role="Lead Researcher"
          publishedDate="2026-04-11"
          updatedDate="2026-04-11"
          readingTime={14}
          section="investing"
        />


        {/* Table of Contents */}
        <nav aria-label="Table of Contents" style={{ ...infoBoxStyle, marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Table of Contents</h3>
          <ol style={{ marginLeft: 20, color: '#58a6ff' }}>
            <li style={{ marginBottom: 8 }}><a href="#why-60-40" style={linkStyle}>Why 60/40 Allocation?</a></li>
            <li style={{ marginBottom: 8 }}><a href="#btc-eth-core" style={linkStyle}>BTC 60% &amp; ETH 40% Core</a></li>
            <li style={{ marginBottom: 8 }}><a href="#altcoin-allocation" style={linkStyle}>Strategic Altcoin Allocation</a></li>
            <li style={{ marginBottom: 8 }}><a href="#allocation-models" style={linkStyle}>Conservative/Balanced/Aggressive Models</a></li>
            <li style={{ marginBottom: 8 }}><a href="#rebalancing" style={linkStyle}>Rebalancing Framework</a></li>
            <li style={{ marginBottom: 8 }}><a href="#stablecoins" style={linkStyle}>Stablecoin Reserve (Dry Powder)</a></li>
            <li style={{ marginBottom: 8 }}><a href="#tax-efficient" style={linkStyle}>Tax-Efficient Rebalancing</a></li>
            <li style={{ marginBottom: 8 }}><a href="#risk-management" style={linkStyle}>Risk Management &amp; Diversification</a></li>
            <li style={{ marginBottom: 8 }}><a href="#faq" style={linkStyle}>FAQ</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="why-60-40" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>1. Why 60/40 Crypto Allocation?</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            60/40 is crypto&apos;s version of the traditional stocks/bonds allocation. BTC = "digital gold" (stability, uncorrelated to stocks). ETH = "crypto infrastructure" (volatile but productive, earns yield via staking). 60/40 balances these: 60% stability + 40% growth potential.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Our investment research is opinionated by design — we believe conviction backed by on-chain data beats diversification into projects you don't understand.
          </p>
        </div>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Why not 80/20 or 50/50? Market evidence: (1) BTC and ETH are highly correlated (&gt;0.8), so diversification benefit is modest. (2) ETH offers staking yield (3-4%), making it more capital-efficient than BTC hodling. (3) 60/40 reflects Bitcoin dominance (60% market cap) while overweighting ETH for growth and yield.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Historical 60/40 Performance (2022-2026)</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              BTC: +320% (2022-2026, annual 38% CAGR). ETH: +380% (2022-2026, annual 42% CAGR). 60/40 portfolio: +345% CAGR ~39%, with lower volatility than 80/20 BTC-heavy. Staking yields add 2-4% annualized.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="btc-eth-core" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>2. BTC 60% &amp; ETH 40% Core Allocation</h2>

          <h3 style={h3Style}>Bitcoin 60% (Store of Value)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Bitcoin is the largest cryptocurrency (market cap $2T+). Properties: fixed supply (21M), most proven security (longest chain, largest mining network), institutional adoption (40%+ institutional allocation). Volatility: 60-80% annual (less than alts). Yield: 0% (hodl only, no staking). Best for: capital preservation, long-term inflation hedge.
          </p>

          <h3 style={h3Style}>Ethereum 40% (Growth + Yield)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Ethereum is the smart contract platform ($1T market cap). Properties: productive (powers DeFi, NFTs, staking), scalable (L2 solutions), innovative. Volatility: 75-100% annual (higher than BTC). Yield: 3-4% APY via staking (Lido, Coinbase, direct staking). Best for: growth capital, passive income generation.
          </p>

          <h3 style={h3Style}>Why Not 50/50?</h3>
          <ul style={{ marginBottom: 16, paddingLeft: 20, color: '#8b949e', lineHeight: 1.8 }}>
            <li>BTC larger market cap (60% of top 2 coins), thus 60% weighting reflects index-like approach</li>
            <li>Institutional investors prefer 70/30 BTC-heavy; 60/40 is aggressive alternative</li>
            <li>ETH&apos;s 3-4% staking yield makes it more capital-efficient than BTC</li>
            <li>60/40 balances institutional + retail preferences</li>
          </ul>

          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Asset</th>
                <th style={thStyle}>Allocation</th>
                <th style={thStyle}>Volatility</th>
                <th style={thStyle}>Yield</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>Bitcoin (BTC)</strong></td>
                <td style={tdStyle}>60%</td>
                <td style={tdStyle}>60-80%</td>
                <td style={tdStyle}>0% (hodl)</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Ethereum (ETH)</strong></td>
                <td style={tdStyle}>40%</td>
                <td style={tdStyle}>75-100%</td>
                <td style={tdStyle}>3-4% staking</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Section 3 */}
        <section id="altcoin-allocation" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>3. Strategic Altcoin Allocation (0-40%)</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Altcoins add growth potential but increase volatility and risk. Guidelines: Conservative investors: 0-10% alts (max) | Balanced: 10-20% alts | Aggressive: 20-40% alts. Higher allocation = higher volatility but upside potential.
          </p>

          <h3 style={h3Style}>Which Altcoins Fit 60/40?</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Good for 60/40: Layer 1 chains (SOL, AVAX, NEAR) with &lt;0.8 correlation to BTC, stablecoins (USDC, USDT, DAI), DeFi blue chips (AAVE, UNI, CURVE) with revenues, infrastructure (ARB, OP, POLYGON). Avoid: high-volatility memes (DOGE, SHIB, PEPE), micro-cap shitcoins, dead projects.
          </p>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#e6edf3' }}>Conservative (0-10% Alts)</h3>
            <p style={{ marginBottom: 12, lineHeight: 1.8 }}>
              Example $100K portfolio: BTC $60K + ETH $40K. Pure 60/40, no alts. Rationale: simplicity, lower complexity, lower risk. Suitable for: first-time investors, risk-averse, long-term hodlers. Expected return: 20-30% annual (BTC/ETH CAGR).
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#e6edf3' }}>Balanced (10-20% Alts)</h3>
            <p style={{ marginBottom: 12, lineHeight: 1.8 }}>
              Example $100K: BTC $60K + ETH $32K + Alts $8K (USDC $3K stablecoin, SOL $3K, AAVE $2K). Add: 10-15% allocation to diversified alts. Rationale: some growth + stablecoin dry powder. Expected return: 25-35% annual.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#e6edf3' }}>Aggressive (20-40% Alts)</h3>
            <p style={{ marginBottom: 0, lineHeight: 1.8 }}>
              Example $100K: BTC $45K + ETH $32K + Alts $23K (diversified across sectors: L1s, DeFi, stables). Rationale: maximize growth potential. Requires active management. Expected return: 40-100% annual (if alts outperform).
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="allocation-models" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>4. Real Portfolio Models</h2>

          <h3 style={h3Style}>$50K Portfolio (Conservative)</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Asset</th>
                <th style={thStyle}>Amount</th>
                <th style={thStyle}>Allocation %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Bitcoin (BTC)</td>
                <td style={tdStyle}>$30K</td>
                <td style={tdStyle}>60%</td>
              </tr>
              <tr>
                <td style={tdStyle}>Ethereum (ETH)</td>
                <td style={tdStyle}>$20K</td>
                <td style={tdStyle}>40%</td>
              </tr>
              <tr style={{ backgroundColor: '#30363d' }}>
                <td style={tdStyle}><strong>TOTAL</strong></td>
                <td style={{...tdStyle, fontWeight: 'bold', color: '#58a6ff' }}>$50K</td>
                <td style={{...tdStyle, fontWeight: 'bold', color: '#58a6ff' }}>100%</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginBottom: 24, fontSize: 14, color: '#8b949e', lineHeight: 1.6 }}>
            Simple, low-maintenance. Rebalance once per year. Annual expected return: 25-30%.
          </p>

          <h3 style={h3Style}>$200K Portfolio (Balanced)</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Asset</th>
                <th style={thStyle}>Amount</th>
                <th style={thStyle}>Allocation %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Bitcoin (BTC)</td>
                <td style={tdStyle}>$120K</td>
                <td style={tdStyle}>60%</td>
              </tr>
              <tr>
                <td style={tdStyle}>Ethereum (ETH)</td>
                <td style={tdStyle}>$64K</td>
                <td style={tdStyle}>32%</td>
              </tr>
              <tr>
                <td style={tdStyle}>Solana (SOL)</td>
                <td style={tdStyle}>$8K</td>
                <td style={tdStyle}>4%</td>
              </tr>
              <tr>
                <td style={tdStyle}>USDC Stablecoin</td>
                <td style={tdStyle}>$8K</td>
                <td style={tdStyle}>4%</td>
              </tr>
              <tr style={{ backgroundColor: '#30363d' }}>
                <td style={tdStyle}><strong>TOTAL</strong></td>
                <td style={{...tdStyle, fontWeight: 'bold', color: '#58a6ff' }}>$200K</td>
                <td style={{...tdStyle, fontWeight: 'bold', color: '#58a6ff' }}>100%</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginBottom: 24, fontSize: 14, color: '#8b949e', lineHeight: 1.6 }}>
            Core 60/40 + 8% alts (SOL, stables). Rebalance quarterly. Expected return: 28-35% annual.
          </p>
        </section>

        {/* Section 5 */}
        <section id="rebalancing" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>5. Rebalancing Framework</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Rebalancing forces "buy low, sell high" discipline. Without rebalancing, winners drift upward (BTC dominance increases), losers drift downward. Rebalancing locks in gains, adds to underperformers.
          </p>

          <h3 style={h3Style}>Quarterly Rebalancing</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Review every 3 months. If allocation drifts &gt;5% from target, rebalance. Example: target 60% BTC, current 65% BTC (due to rally). Sell $5K BTC, buy $5K ETH. Simple, easy to track.
          </p>

          <h3 style={h3Style}>Threshold Rebalancing</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Rebalance immediately when any position drifts &gt;10%. More active (captures opportunities faster) but higher trading friction. Best for: active traders, larger accounts where fees matter less.
          </p>

          <h3 style={h3Style}>Dollar-Cost Rebalancing</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Add new capital to underweight positions (no selling needed). Example: new $5K to invest? If BTC is underweight, add all to BTC. If all at target, split proportionally. Tax-efficient (no capital gains from selling).
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Rebalancing Example</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              Start: $100K = $60K BTC + $40K ETH. After 6 months: BTC rallies to $75K, ETH to $38K (total $113K). New allocation: 66% BTC / 34% ETH. Rebalance: sell $6.5K BTC, buy $6.5K ETH → return to 60/40. Sold BTC at higher price (forced discipline).
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section id="stablecoins" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>6. Stablecoin Reserve (Dry Powder)</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Keep 5-15% in stablecoins (USDC, USDT) for: (1) rebalancing dry powder (buy dips), (2) yield generation (3-5% APY via Aave), (3) expense fund. In bear markets, increase to 20% (rebalance BTC/ETH into stables).
          </p>

          <h3 style={h3Style}>Stablecoin Yield Strategy</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Example: $15K stablecoin allocation @ 4.5% APY (Aave) = $675/year passive income. Over 10 years at 4.5% compounding: $15K → $24K. Zero market risk, pure yield generation.
          </p>

          <h3 style={h3Style}>Using Stables for Rebalancing</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Bull market: stables drift upward (ratio shrinks). Rebalance by moving stables to BTC/ETH. Bear market: BTC/ETH crash, stables become larger allocation. Rebalance by buying BTC dips with stables.
          </p>
        </section>

        {/* Section 7 */}
        <section id="tax-efficient" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>7. Tax-Efficient Rebalancing</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Rebalancing triggers taxable events (sell = capital gains tax). Minimize taxes by: (1) rebalancing in tax-deferred accounts (Bitcoin IRA), (2) tax-loss harvesting (sell losers, offset winners), (3) batching rebalances (rebalance once/year not quarterly).
          </p>

          <h3 style={h3Style}>Tax Loss Harvesting</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Sell underperforming alts at loss (lock in loss), offset capital gains from winners. Example: SOL down 20% (loss $2K) + BTC up 50% (gain $10K). Sell SOL, realize $2K loss. Offset $2K of BTC gain. Net: $8K taxable gain (vs $10K without harvest).
          </p>

          <h3 style={h3Style}>Tax-Deferred Accounts</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            50% of portfolio in Bitcoin IRA (tax-deferred) + 50% in taxable. Rebalance freely in IRA (no tax impact). Taxable account: use tax-loss harvesting, annual rebalancing only.
          </p>
        </section>

        {/* Section 8 */}
        <section id="risk-management" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>8. Risk Management &amp; Diversification</h2>

          <h3 style={h3Style}>Exchange/Custody Risk</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Don&apos;t keep all crypto on one exchange (Coinbase collapse = loss). Spread across: Coinbase (10%), Kraken (10%), hardware wallet Ledger (70%), Coinbase Vault (10%). Multi-exchange reduces counterparty risk.
          </p>

          <h3 style={h3Style}>Self-Custody vs Exchanges</h3>
          <ul style={{ marginBottom: 16, paddingLeft: 20, color: '#8b949e', lineHeight: 1.8 }}>
            <li><strong>Amounts &gt;$10K:</strong> Use hardware wallet (Ledger Nano X, Trezor One)</li>
            <li><strong>Amounts $1K-$10K:</strong> Coinbase/Kraken fine (regulated, insured)</li>
            <li><strong>Amounts &lt;$1K:</strong> Mobile wallet acceptable</li>
          </ul>

          <h3 style={h3Style}>Stop Losses &amp; Circuit Breakers</h3>
          <ul style={{ marginBottom: 16, paddingLeft: 20, color: '#8b949e', lineHeight: 1.8 }}>
            <li>Portfolio-level: exit 30%+ down (capital preservation)</li>
            <li>Position-level: 15-25% stops on alts (prevent blow-ups)</li>
            <li>BTC/ETH: no stops (hodl through cycles)</li>
          </ul>
        </section>

        {/* Section 9 - FAQ */}
        <section id="faq" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>9. Frequently Asked Questions</h2>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: '#58a6ff' }}>Why 60% BTC and 40% ETH?</h3>
            <p style={{ marginBottom: 0, fontSize: 14, color: '#c9d1d9', lineHeight: 1.7 }}>
              BTC is larger, more stable, institutional reserve. ETH drives innovation (DeFi, staking 3-4%). 60/40 balances stability with growth. Adjust for risk tolerance.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: '#58a6ff' }}>How much should I allocate to alts?</h3>
            <p style={{ marginBottom: 0, fontSize: 14, color: '#c9d1d9', lineHeight: 1.7 }}>
              Conservative: 0-10% alts. Balanced: 10-20% alts. Aggressive: 20-40% alts. Higher = higher volatility but upside.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: '#58a6ff' }}>When should I rebalance?</h3>
            <p style={{ marginBottom: 0, fontSize: 14, color: '#c9d1d9', lineHeight: 1.7 }}>
              Quarterly or when allocation drifts &gt;5%. Sell overweight, buy underweight. Forces discipline.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: '#58a6ff' }}>Which altcoins fit 60/40?</h3>
            <p style={{ marginBottom: 0, fontSize: 14, color: '#c9d1d9', lineHeight: 1.7 }}>
              L1 chains (SOL, AVAX), stables (USDC, USDT), DeFi blue chips (AAVE, UNI), infrastructure (ARB, OP). Avoid high-volatility memes.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: '#58a6ff' }}>Should I use stablecoins in allocation?</h3>
            <p style={{ marginBottom: 0, fontSize: 14, color: '#c9d1d9', lineHeight: 1.7 }}>
              Yes, 5-15% stablecoin allocation. Dry powder for dips. Generates 3-5% APY yield. Rebalance into stables when BTC/ETH soar.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: '#58a6ff' }}>How do I rebalance tax-efficiently?</h3>
            <p style={{ marginBottom: 0, fontSize: 14, color: '#c9d1d9', lineHeight: 1.7 }}>
              Use tax-loss harvesting (sell losers, offset gains). Rebalance in tax-deferred accounts. Batch rebalancing (once/year, not quarterly). Plan before year-end.
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid #30363d' }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: '#e6edf3' }}>Related Guides</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#58a6ff' }}>
            <li style={{ marginBottom: 8 }}><Link href="/investing/crypto-dollar-cost-averaging-vs-lump-sum" style={linkStyle}>→ DCA vs Lump Sum: Building positions</Link></li>
            <li style={{ marginBottom: 8 }}><Link href="/long-term/stablecoin-yield-long-term-strategy" style={linkStyle}>→ Stablecoin Yield: 5-6% APY</Link></li>
            <li style={{ marginBottom: 8 }}><Link href="/long-term/bitcoin-accumulation-strategy-guide" style={linkStyle}>→ Bitcoin Accumulation: Long-term strategy</Link></li>
          </ul>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 40, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is educational only, not investment advice. Crypto is volatile. Use hardware wallets for &gt;$10K. Consult a financial advisor before investing.
        </div>
      </div>
    
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
            <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Learning Guides
          </Link>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Crypto Tools
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Projects
          </Link>
        </div>
      </div>
    </article>
  );
}
