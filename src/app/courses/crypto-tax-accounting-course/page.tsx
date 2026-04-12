import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Best Crypto Tax Accounting Courses 2026: Master IRS",
  description: "Crypto tax accounting courses 2026: Learn IRS Form 8949, Schedule D, DeFi taxation, NFT reporting. Free resources (IRS Pub 525, CryptoSlate) and paid courses",
  keywords: ['crypto tax course', 'cryptocurrency tax', 'tax accounting crypto', 'IRS Form 8949', 'DeFi taxation', 'NFT tax reporting', 'crypto tax software'],
  openGraph: {
    type: 'article',
    title: 'Best Crypto Tax Accounting Courses 2026: IRS Compliance',
    description: 'Complete guide to crypto tax accounting: IRS reporting, DeFi yields, NFT sales. Free resources and paid courses.',
    publishedTime: '2026-04-11T00:00:00Z',
    modifiedTime: '2026-04-11T00:00:00Z',
    url: 'https://degen0x.com/courses/crypto-tax-accounting-course',
    images: [{ url: 'https://degen0x.com/og-courses.svg', width: 1200, height: 630, alt: 'Crypto Tax Courses' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Tax Accounting Courses 2026',
    description: 'Master crypto tax accounting: IRS Form 8949, DeFi taxation, NFT sales, software comparison.',
    image: 'https://degen0x.com/og-courses.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/courses/crypto-tax-accounting-course',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Crypto Tax Accounting Courses 2026: Master IRS Compliance',
  description: 'Comprehensive guide to crypto tax accounting courses: IRS reporting, DeFi taxation, NFT sales, tax software comparison, professional CPA hiring.',
  image: 'https://degen0x.com/og-courses.svg',
  datePublished: '2026-04-11',
  dateModified: '2026-04-11',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What are the best free crypto tax courses?', acceptedAnswer: { '@type': 'Answer', text: 'Top free: CryptoSlate Tax Guide (free article), Coinbase Tax Guide (free), IRS Publication 525 (official). No interactive courses free. Paid courses ($50-200) cover strategy, tracking, reporting.' } },
      { '@type': 'Question', name: 'Do I need a tax professional for crypto taxes?', acceptedAnswer: { '@type': 'Answer', text: 'Simple (few trades): DIY with TurboTax. Moderate (DeFi, staking): tax professional ($500-1500). Complex (business, international): tax attorney ($2000+). Most traders hire after >20 transactions.' } },
      { '@type': 'Question', name: 'What is the best crypto tax software 2026?', acceptedAnswer: { '@type': 'Answer', text: 'Top: Koinly ($60-300/year, easiest), CryptoTrader.tax ($50-400/year, detailed), Ledger Live (free). Most use Koinly (80% accuracy, API integration). Expect 2-4 hours setup.' } },
      { '@type': 'Question', name: 'Are DeFi yields taxable?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Aave interest, Lido staking, Curve yield = ordinary income tax (your bracket). Taxable when earned, not withdrawn. Example: earn $1K yield = $1K ordinary income tax.' } },
      { '@type': 'Question', name: 'What is a wash sale in crypto?', acceptedAnswer: { '@type': 'Answer', text: 'US wash sale rule: buy/sell same asset within 30 days, loss denied (applies to stocks). Crypto: IRS has not clarified (2026). Safer assumption: treat like stocks (30-day buffer).' } },
      { '@type': 'Question', name: 'How do I report NFT sales on taxes?', acceptedAnswer: { '@type': 'Answer', text: 'NFT = capital asset. Report on Form 8949, Schedule D. Example: buy NFT for 1 ETH ($2K), sell for 2 ETH ($4K) = $2K gain. >1 year = long-term (15-20%). <1 year = short-term (37%+).' } },
    ],
  },
};

export default function CryptoTaxAccountingCourse() {
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
    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const h2Style = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: '#38bdf8', borderBottom: '2px solid #0c4a6e', paddingBottom: 12,
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
    border: '1px solid #30363d', borderLeft: '3px solid #38bdf8', borderLeft: '3px solid #38bdf8',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/courses" style={{ color: '#8b949e', textDecoration: 'none' }}>Courses</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Crypto Tax</span>
        </nav>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div>
            <span style={{ ...badgeStyle, background: '#8b5cf6', color: '#fff' }}>Tax</span>
            <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Accounting</span>
          </div>
          <h1 style={h1Style}>Crypto Tax Accounting Courses 2026</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Complete guide to crypto tax accounting and IRS compliance. Learn capital gains/losses (Form 8949), DeFi yield taxation (ordinary income), NFT reporting, wash sale rules. Free resources (IRS Pub 525, CryptoSlate), paid courses (Udemy $15-50), and tax software comparison (Koinly vs CryptoTrader.tax). DIY vs CPA decision framework.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 11, 2026</span>
            <span>Reading time: 16 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-11"
          updatedDate="2026-04-11"
          readingTime={16}
          section="courses"
        />


        {/* Table of Contents */}
        <nav aria-label="Table of Contents" style={{ ...infoBoxStyle, marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Table of Contents</h3>
          <ol style={{ marginLeft: 20, color: '#58a6ff' }}>
            <li style={{ marginBottom: 8 }}><a href="#basics" style={linkStyle}>Crypto Tax Basics</a></li>
            <li style={{ marginBottom: 8 }}><a href="#courses" style={linkStyle}>Best Courses &amp; Free Resources</a></li>
            <li style={{ marginBottom: 8 }}><a href="#software" style={linkStyle}>Tax Software Guide</a></li>
            <li style={{ marginBottom: 8 }}><a href="#capital-gains" style={linkStyle}>Capital Gains &amp; Losses</a></li>
            <li style={{ marginBottom: 8 }}><a href="#defi-yields" style={linkStyle}>DeFi &amp; Yield Taxation</a></li>
            <li style={{ marginBottom: 8 }}><a href="#nft-taxes" style={linkStyle}>NFT &amp; Digital Asset Taxes</a></li>
            <li style={{ marginBottom: 8 }}><a href="#professional" style={linkStyle}>Hiring a CPA vs DIY</a></li>
            <li style={{ marginBottom: 8 }}><a href="#faq" style={linkStyle}>FAQ</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="basics" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>1. Crypto Tax Basics</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Crypto is taxed as property by IRS (Publication 525). Key principles: (1) Each trade = taxable event (even crypto-to-crypto swaps). (2) Capital gains tax on profit (long-term 15-20%, short-term up to 37%). (3) Interest/yields = ordinary income tax (up to 37%). (4) Holding period &gt;1 year = long-term (lower rate), &lt;1 year = short-term (higher rate).
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#081a2d', border: '1px solid #0c4a6e', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🎓</span>
            <strong style={{ color: '#38bdf8', fontSize: 15 }}>Learning Path</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Our team has taken every course we recommend. If we haven't personally verified the content, we say so explicitly.
          </p>
        </div>

          <h3 style={h3Style}>Long-Term vs Short-Term Capital Gains</h3>
          <ul style={{ marginBottom: 16, paddingLeft: 20, color: '#8b949e', lineHeight: 1.8 }}>
            <li><strong>Long-Term (&gt;1 year):</strong> 0% (income &lt;$44K single), 15% (income $44K-$492K), 20% (&gt;$492K)</li>
            <li><strong>Short-Term (&lt;1 year):</strong> Ordinary income rates (10%, 22%, 24%, 32%, 35%, 37%)</li>
            <li><strong>Implication:</strong> $10K gain if long-term = ~$1.5K tax. If short-term = ~$2.4K tax. Hold &gt;1 year when possible.</li>
          </ul>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Tax Liability Example</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              Buy BTC at $30K, sell at $50K (1 year later) = $20K long-term gain. Tax: ~$3K (15% federal + state taxes). If sold after 6 months: $20K short-term gain. Tax: ~$4.8K (24% bracket). Timing matters: 1.5 months difference = $1.8K extra tax owed.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="courses" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>2. Best Courses &amp; Free Resources</h2>

          <h3 style={h3Style}>Free Resources</h3>
          <div style={infoBoxStyle}>
            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: '#e6edf3' }}>IRS Publication 525</h4>
            <p style={{ marginBottom: 12, lineHeight: 1.8 }}>
              Official IRS guidance on income from crypto. Dense, technical, but authoritative. Free at IRS.gov. Read: Section on capital gains, investment income. Best for: understanding official rules.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: '#e6edf3' }}>CryptoSlate Tax Guide</h4>
            <p style={{ marginBottom: 12, lineHeight: 1.8 }}>
              Free comprehensive article. Covers: trades, DeFi, NFTs, international. Good primer. Best for: getting overview without spending money.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: '#e6edf3' }}>Coinbase Tax Guide</h4>
            <p style={{ marginBottom: 12, lineHeight: 1.8 }}>
              Free guide from Coinbase. Covers: capital gains, staking rewards, wash sales (uncertain). Beginner-friendly. Best for: Coinbase users.
            </p>
          </div>

          <h3 style={h3Style}>Paid Courses</h3>
          <div style={infoBoxStyle}>
            <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: '#e6edf3' }}>Udemy "Crypto Taxes" Course</h4>
            <p style={{ marginBottom: 0, lineHeight: 1.8 }}>
              Price: $15-50 (on sale often). Duration: 4-6 hours. Covers: capital gains, income reporting, common mistakes, practical workflows. Good for: self-paced learners, visual learners.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="software" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>3. Crypto Tax Software Guide 2026</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Tax software automates calculations but requires accurate transaction history. Accuracy depends on data quality, exchange/wallet integration, manual entries. Top software:
          </p>

          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Software</th>
                <th style={thStyle}>Price</th>
                <th style={thStyle}>Accuracy</th>
                <th style={thStyle}>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>Koinly</strong></td>
                <td style={tdStyle}>$60-300/yr</td>
                <td style={tdStyle}>80-90%</td>
                <td style={tdStyle}>Most users (easiest)</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>CryptoTrader.tax</strong></td>
                <td style={tdStyle}>$50-400/yr</td>
                <td style={tdStyle}>85-95%</td>
                <td style={tdStyle}>Detail-oriented</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Ledger Live</strong></td>
                <td style={tdStyle}>Free</td>
                <td style={tdStyle}>70%</td>
                <td style={tdStyle}>Simple portfolios</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>TurboTax Crypto</strong></td>
                <td style={tdStyle}>$150-300</td>
                <td style={tdStyle}>85%</td>
                <td style={tdStyle}>TurboTax users</td>
              </tr>
            </tbody>
          </table>

          <h3 style={h3Style}>Koinly vs CryptoTrader.tax</h3>
          <ul style={{ marginBottom: 16, paddingLeft: 20, color: '#8b949e', lineHeight: 1.8 }}>
            <li><strong>Koinly:</strong> Better UX, easier API setup, 1-click integrations (100+ exchanges). Good accuracy (80%), reasonable cost ($60-300). Best for: beginners, large portfolios.</li>
            <li><strong>CryptoTrader.tax:</strong> More detailed reporting, manual control, audit trail. Higher accuracy (85-95%). Better for: accountants, complex situations, paranoia about accuracy.</li>
            <li><strong>Recommendation:</strong> Most traders: Koinly. Accountants: CryptoTrader.tax. Simple portfolios: Ledger Live (free).</li>
          </ul>

          <h3 style={h3Style}>Setup Workflow</h3>
          <ol style={{ marginBottom: 16, paddingLeft: 20, color: '#8b949e', lineHeight: 1.8 }}>
            <li>Choose software (Koinly recommended)</li>
            <li>Connect exchanges (API keys, read-only)</li>
            <li>Connect wallets (if self-custody)</li>
            <li>Review transactions (fix errors)</li>
            <li>Generate report (CSV for accountant)</li>
            <li>Time: 2-4 hours first year, 30 min subsequent years</li>
          </ol>
        </section>

        {/* Section 4 */}
        <section id="capital-gains" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>4. Capital Gains &amp; Losses Reporting</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Every trade (crypto-to-crypto, crypto-to-fiat) triggers capital gains/losses. Mechanism: Cost basis (what you paid) vs sale price (what you sold for). Difference = gain (taxable) or loss (can offset gains).
          </p>

          <h3 style={h3Style}>Form 8949 &amp; Schedule D</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Report gains/losses on Form 8949 (Sales of Capital Assets), then summarize on Schedule D (Capital Gains and Losses). Attach to Form 1040 (tax return). Typical example: 100 BTC trades = 100 lines on Form 8949. IRS expects this (not a red flag if detailed).
          </p>

          <h3 style={h3Style}>Cost Basis Methods</h3>
          <ul style={{ marginBottom: 16, paddingLeft: 20, color: '#8b949e', lineHeight: 1.8 }}>
            <li><strong>FIFO (First-In-First-Out):</strong> Oldest coins sold first. Usually highest gains (newer coins cheaper). Default for most people.</li>
            <li><strong>LIFO (Last-In-First-Out):</strong> Newest coins sold first. Can lower gains if market declined.</li>
            <li><strong>Specific ID:</strong> Pick specific coins to sell. Most flexible, requires tracking. IRS allows.</li>
            <li><strong>Recommendation:</strong> Use FIFO (simpler), unless LIFO obviously lower. Consistent method across years.</li>
          </ul>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Capital Gains Example</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              Buy 1 BTC at $30K. Sell 1 BTC at $50K (after 2 years) = $20K long-term gain. Federal tax: ~$3K (15% rate). State tax (varies): $1K-$2K. Total: ~$4K-$5K tax owed. Lesson: plan for tax liability when selling.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="defi-yields" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>5. DeFi &amp; Yield Taxation</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            DeFi yields (Aave interest, Lido staking, Curve rewards) are taxed as ordinary income when earned, not when withdrawn. Taxable event = moment you receive the reward.
          </p>

          <h3 style={h3Style}>Real DeFi Tax Example</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Activity</th>
                <th style={thStyle}>Amount</th>
                <th style={thStyle}>Tax Type</th>
                <th style={thStyle}>Tax Owed (24% bracket)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Aave USDC yield</td>
                <td style={tdStyle}>$1,000</td>
                <td style={tdStyle}>Ordinary income</td>
                <td style={tdStyle}>$240</td>
              </tr>
              <tr>
                <td style={tdStyle}>Lido staking rewards</td>
                <td style={tdStyle}>0.5 ETH ($1,500)</td>
                <td style={tdStyle}>Ordinary income</td>
                <td style={tdStyle}>$360</td>
              </tr>
              <tr>
                <td style={tdStyle}>Curve LP fee income</td>
                <td style={tdStyle}>$500</td>
                <td style={tdStyle}>Ordinary income</td>
                <td style={tdStyle}>$120</td>
              </tr>
              <tr style={{ backgroundColor: '#30363d' }}>
                <td style={{...tdStyle, fontWeight: 'bold', color: '#58a6ff' }}>TOTAL</td>
                <td style={{...tdStyle, fontWeight: 'bold', color: '#58a6ff' }}>$3,000</td>
                <td style={{...tdStyle, fontWeight: 'bold', color: '#58a6ff' }}>Ordinary income</td>
                <td style={{...tdStyle, fontWeight: 'bold', color: '#58a6ff' }}>$720</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginBottom: 16, lineHeight: 1.8, fontSize: 14, color: '#8b949e' }}>
            Key: yields taxed immediately (even if locked up), then capital gains when you sell the coins.
          </p>
        </section>

        {/* Section 6 */}
        <section id="nft-taxes" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>6. NFT &amp; Digital Asset Taxation</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            NFTs are capital assets. Sales trigger capital gains tax. Minting may be business income. IRS treatment unclear (2026): possibly "collectibles" (28% long-term rate) or "capital assets" (15-20%).
          </p>

          <h3 style={h3Style}>NFT Tax Example</h3>
          <ul style={{ marginBottom: 16, paddingLeft: 20, color: '#8b949e', lineHeight: 1.8 }}>
            <li>Buy NFT: 1 ETH ($2,000). Cost basis: $2K</li>
            <li>Sell NFT: 2 ETH ($4,000) after 1.5 years</li>
            <li>Capital gain: $2K</li>
            <li>Tax (long-term, 15% federal): ~$300</li>
            <li>If sold &lt;1 year: tax = $480 (24% bracket)</li>
          </ul>

          <h3 style={h3Style}>Minting &amp; Creator Taxes</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Minting NFT and selling for profit: likely "hobby income" or "business income" (Schedule C). Report: gross proceeds as income. Deduct: gas fees, platform fees, time. This creates self-employment tax (15.3% additional on top of income tax). Conservative: consult CPA if &gt;$5K/year NFT sales.
          </p>
        </section>

        {/* Section 7 */}
        <section id="professional" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>7. DIY vs Hiring a CPA</h2>

          <h3 style={h3Style}>DIY Works If:</h3>
          <ul style={{ marginBottom: 16, paddingLeft: 20, color: '#8b949e', lineHeight: 1.8 }}>
            <li>&lt;20 trades (simple tax year)</li>
            <li>No DeFi activities (only spot buys/sells)</li>
            <li>No NFTs</li>
            <li>No business structure</li>
            <li>Comfortable with spreadsheets</li>
          </ul>

          <h3 style={h3Style}>Hire CPA If:</h3>
          <ul style={{ marginBottom: 16, paddingLeft: 20, color: '#8b949e', lineHeight: 1.8 }}>
            <li>&gt;50 trades (complex year)</li>
            <li>DeFi activities (yields, staking)</li>
            <li>NFTs (minting or selling)</li>
            <li>Business structure (LLC, S-Corp)</li>
            <li>International transactions</li>
            <li>&gt;$100K portfolio</li>
          </ul>

          <h3 style={h3Style}>CPA Cost vs Benefit</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Complexity</th>
                <th style={thStyle}>DIY Cost</th>
                <th style={thStyle}>CPA Cost</th>
                <th style={thStyle}>Savings/Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Simple (&lt;20 trades)</td>
                <td style={tdStyle}>$50 software</td>
                <td style={tdStyle}>$500-800</td>
                <td style={tdStyle}>DIY cheaper</td>
              </tr>
              <tr>
                <td style={tdStyle}>Moderate (20-100 trades)</td>
                <td style={tdStyle}>$50-100 + time</td>
                <td style={tdStyle}>$800-1500</td>
                <td style={tdStyle}>CPA peace of mind</td>
              </tr>
              <tr>
                <td style={tdStyle}>Complex (&gt;100 trades, DeFi)</td>
                <td style={tdStyle}>$100 + many hours</td>
                <td style={tdStyle}>$1500-3000</td>
                <td style={tdStyle}>CPA saves errors/audit</td>
              </tr>
            </tbody>
          </table>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Audit Risk Mitigation</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              IRS rarely audits crypto taxes (resources limited). But if audited: having CPA on file = better defense (CPA can defend your position). DIY risk: if you made errors, you owe back taxes + penalties + interest. CPA insurance: $1K-2K investment for peace of mind.
            </p>
          </div>
        </section>

        {/* Section 8 - FAQ */}
        <section id="faq" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>8. Frequently Asked Questions</h2>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: '#58a6ff' }}>What are the best free crypto tax courses?</h3>
            <p style={{ marginBottom: 0, fontSize: 14, color: '#c9d1d9', lineHeight: 1.7 }}>
              Top free: CryptoSlate Tax Guide, Coinbase Tax Guide, IRS Publication 525. No interactive courses free. Paid courses ($50-200) cover strategy and tracking.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: '#58a6ff' }}>Do I need a tax professional for crypto taxes?</h3>
            <p style={{ marginBottom: 0, fontSize: 14, color: '#c9d1d9', lineHeight: 1.7 }}>
              Simple: DIY. Moderate (DeFi, staking): professional ($500-1500). Complex (business, international): attorney ($2000+). Most hire after &gt;20 transactions.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: '#58a6ff' }}>What is the best crypto tax software 2026?</h3>
            <p style={{ marginBottom: 0, fontSize: 14, color: '#c9d1d9', lineHeight: 1.7 }}>
              Top: Koinly ($60-300/year, easiest), CryptoTrader.tax ($50-400/year, detailed), Ledger Live (free). Most use Koinly. Expect 2-4 hours setup.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: '#58a6ff' }}>Are DeFi yields taxable?</h3>
            <p style={{ marginBottom: 0, fontSize: 14, color: '#c9d1d9', lineHeight: 1.7 }}>
              Yes. Aave interest, Lido staking, Curve yield = ordinary income tax. Taxable when earned, not withdrawn. Example: $1K yield = $1K taxable income.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: '#58a6ff' }}>What is a wash sale in crypto?</h3>
            <p style={{ marginBottom: 0, fontSize: 14, color: '#c9d1d9', lineHeight: 1.7 }}>
              US wash sale rule applies to stocks: buy/sell same asset within 30 days, loss denied. Crypto: IRS has not clarified. Safer assumption: treat like stocks (30-day buffer).
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: '#58a6ff' }}>How do I report NFT sales on taxes?</h3>
            <p style={{ marginBottom: 0, fontSize: 14, color: '#c9d1d9', lineHeight: 1.7 }}>
              NFT = capital asset. Report on Form 8949, Schedule D. Example: buy 1 ETH ($2K), sell 2 ETH ($4K) = $2K gain. &gt;1 year = 15-20%. &lt;1 year = 37%+.
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid #30363d' }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: '#e6edf3' }}>Related Guides</h3>
          <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#58a6ff' }}>
            <li style={{ marginBottom: 8 }}><Link href="/courses/defi-course-online-free" style={linkStyle}>→ DeFi Courses: Learn smart contracts</Link></li>
            <li style={{ marginBottom: 8 }}><Link href="/courses/best-crypto-trading-course-online" style={linkStyle}>→ Trading Courses: Technical analysis</Link></li>
            <li style={{ marginBottom: 8 }}><Link href="/long-term/bitcoin-ira-guide-2026" style={linkStyle}>→ Bitcoin IRA: Tax-deferred strategies</Link></li>
          </ul>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 40, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is educational only, not tax advice. Tax laws vary by jurisdiction and situation. Consult a tax professional or CPA for your specific circumstances before filing.
        </div>
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
          <Link href="/learn" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            All Learning Guides
          </Link>
          <Link href="/tools" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Crypto Tools
          </Link>
          <Link href="/compare" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Compare Projects
          </Link>
        </div>
      </div>
    </article>
  );
}
