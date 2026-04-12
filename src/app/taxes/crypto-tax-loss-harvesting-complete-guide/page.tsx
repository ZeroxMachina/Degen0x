import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Crypto Tax Loss Harvesting 2026: Strategy Guide & Wash Sale Rules | degen0x',
  description: 'Complete guide to crypto tax loss harvesting. Learn wash sale rule status (not yet applied), substantially identical property debate, real dollar examples, and year-end tax planning strategies.',
  keywords: ['crypto tax loss harvesting', 'wash sale rule', 'capital loss', 'tax deduction', 'substantially identical property', 'year-end tax planning', 'Schedule D'],
  openGraph: {
    type: 'article',
    title: 'Crypto Tax Loss Harvesting 2026: Strategy Guide & Wash Sale Rules',
    description: 'Complete guide to crypto tax loss harvesting. Learn wash sale rule status, substantially identical property debate, and save real dollars with tax deductions.',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/taxes/crypto-tax-loss-harvesting-complete-guide',
    images: [{
      url: 'https://degen0x.com/og-crypto-tax-loss-harvesting.svg',
      width: 1200,
      height: 630,
      alt: 'Crypto Tax Loss Harvesting 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Tax Loss Harvesting 2026: Strategy Guide & Wash Sale Rules',
    description: 'Complete guide to crypto tax loss harvesting. Learn wash sale rule status, substantially identical property debate, and save real dollars.',
    image: 'https://degen0x.com/og-crypto-tax-loss-harvesting.svg',
  },
,
  alternates: {
    canonical: 'https://degen0x.com/taxes/crypto-tax-loss-harvesting-complete-guide',
  }};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Crypto Tax Loss Harvesting 2026: Strategy Guide & Wash Sale Rules',
  description: 'Complete guide to crypto tax loss harvesting. Learn wash sale rule status, substantially identical property debate, real dollar examples, and year-end tax planning strategies.',
  image: 'https://degen0x.com/og-crypto-tax-loss-harvesting.svg',
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
        name: 'Does the wash sale rule apply to crypto in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As of April 2026, the wash sale rule (Section 1091) technically does NOT apply to crypto by IRS guidance. The rule applies to "securities" under IRC Section 165(c), and crypto is not classified as a security for tax purposes. However, Congress is debating crypto wash sale legislation. The safest interpretation: treat crypto wash sales as if the rule applies, to avoid liability if law changes retroactively.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is "substantially identical property" in crypto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Substantially identical property means the same asset (e.g., two Bitcoin are substantially identical). However, BTC and BCH (Bitcoin Cash fork) are different property. BTC and ETH are different property. The IRS has NOT issued clear guidance on whether BTC on different blockchains (BTC on Ethereum, via wrapped BTC) is substantially identical to native BTC. Conservative approach: assume wrapped/bridged versions are different.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I harvest losses and immediately buy a similar token?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, if it\'s a different token. Example: Sell SOL at a loss, immediately buy SUI (different token), no wash sale restriction. If you sell BTC at a loss, then buy BTC within 30 days (30 days before OR after), you face wash sale risk if rule applies. Conservative strategy: wait 31 days to be safe.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are real dollar tax savings from loss harvesting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Example: $50k capital loss harvested. Tax savings depend on marginal rate: At 24% rate, save $12,000. At 32% rate, save $16,000. At 37% (highest), save $18,500. If loss exceeds gains ($3k loss carryforward per year), 10-year carryforward = 10 × $3k × 32% = $9,600 savings over time.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I report loss harvesting on my taxes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Report each loss on Form 8949 (Sales of Capital Assets). Transfer totals to Schedule D. If losses exceed gains, enter up to $3,000 loss on Line 21 of Form 1040. Carryforward excess losses (e.g., $50k loss, $5k gains = $45k carryforward). Attach Schedule D to Form 1040.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best time to harvest losses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'December is optimal (year-end tax planning). Realize losses by Dec 31 to offset current year gains. Avoid "short selling to harvest" which may trigger IRS scrutiny. Example: Dec 20, sell BTC at $20k loss. By Dec 31, buy SOL or stablecoins. Lock in tax benefit for current year. If considering repurchase, wait until Jan 2 (3-day buffer).',
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #fb7185, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#fb7185', borderBottom: '2px solid #4c1d2a', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


export default function CryptoTaxLossHarvestingGuide() {
  const tableOfContents = [
    { id: 'what-is-loss-harvesting', title: 'What Is Tax Loss Harvesting?' },
    { id: 'wash-sale-rule', title: 'Wash Sale Rule Status in Crypto (2026)' },
    { id: 'substantially-identical', title: 'Substantially Identical Property Debate' },
    { id: 'real-examples', title: 'Real Dollar Examples & Savings' },
    { id: 'strategy-timing', title: 'Loss Harvesting Strategy & Timing' },
    { id: 'comparison-table', title: 'Tax Savings Scenarios' },
    { id: 'reporting', title: 'How to Report on Taxes' },
    { id: 'risks', title: 'Risks & IRS Scrutiny' },
    { id: 'best-practices', title: 'Best Practices & Documentation' },
    { id: 'faq', title: 'FAQ' },
  ];

  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d', borderLeft: '3px solid #fb7185', borderLeft: '3px solid #fb7185',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
  };

  const h1Style = {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 16,
    background: 'linear-gradient(135deg, #64748b, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const h2Style = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: '#fb7185', borderBottom: '2px solid #4c1d2a', paddingBottom: 12,
  };

  const h3Style = {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 12,
    color: '#e6edf3',
  };

  const badgeStyle = {
    display: 'inline-block' as const,
    padding: '6px 12px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 16,
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
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={linkStyle}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/taxes" style={linkStyle}>Taxes</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Tax Loss Harvesting</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#64748b', color: '#fff' }}>Taxes</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          <h1 style={h1Style}>Crypto Tax Loss Harvesting: Strategy &amp; Wash Sale Rules 2026</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Complete guide to harvesting losses, offsetting gains, and navigating the wash sale rule debate. Real examples showing $5k-$50k+ tax savings. Strategy walkthrough with year-end timing.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 16 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="NullPointer"
          role="Data Engineer"
          publishedDate="2026-04-10"
          updatedDate="2026-04-10"
          readingTime={16}
          section="taxes"
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

        <section id="what-is-loss-harvesting">
          <h2 style={h2Style}>What Is Tax Loss Harvesting?</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Tax loss harvesting is a strategy to intentionally sell assets at a loss to offset capital gains (or ordinary income) for tax purposes. In crypto, it works like this: you hold Bitcoin at a $50k gain and Ethereum at a $30k loss. You sell the Ethereum at the loss, then immediately rebuy it (or hold cash). The $30k loss offsets the $50k gain, reducing taxable gains from $50k to $20k.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a0d14', border: '1px solid #4c1d2a', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📋</span>
            <strong style={{ color: '#fb7185', fontSize: 15 }}>Tax Reality Check</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Crypto tax compliance is a mess, but ignoring it is worse. We focus on practical approaches that balance accuracy with the reality that most exchanges have incomplete records.
          </p>
        </div>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            By April 2026, tax loss harvesting has become mainstream in crypto. Professional traders harvest losses automatically; casual investors harvest manually in December. Real tax savings: $5k-$50k+ depending on portfolio size and gains.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#58a6ff' }}>Key Benefit:</strong> Loss harvesting can reduce your tax liability by $1,500-$20,000+ per year, depending on realized gains and tax bracket. The IRS allows $3,000 of losses to offset ordinary income per year, with unlimited carryforward.
          </div>
        </section>

        <section id="wash-sale-rule">
          <h2 style={h2Style}>Wash Sale Rule Status in Crypto (2026)</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            The wash sale rule (IRC Section 1091) is one of the most debated topics in crypto taxation. As of April 2026, the official IRS position is that the wash sale rule does NOT apply to cryptocurrency because crypto is not classified as a "security" under the Internal Revenue Code.
          </p>
          <h3 style={h3Style}>Current Legal Status (April 2026)</h3>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>IRS Position:</strong> IRC Section 1091 applies only to "securities" (stocks, bonds, mutual funds). Crypto is not classified as a security for federal income tax purposes. Therefore, technically, the wash sale rule does not apply to crypto sales.
          </p>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Congressional Debate:</strong> Legislation (FUTURE Act and other proposals) would extend the wash sale rule to crypto. As of April 2026, no law has passed. Debate continues but movement is slow.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Conservative Interpretation:</strong> Many CPAs recommend treating crypto wash sales AS IF the rule applied, to avoid tax liability if the law changes retroactively. If you harvest a $50k loss on BTC, then buy BTC within 30 days, and the law later applies wash sales retroactively to 2026, you could face unexpected tax bills + penalties.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#f59e0b' }}>Risk Advisory:</strong> By April 2026, relying on "wash sales don&apos;t apply to crypto" is technically correct but legally uncertain. Congress could pass retroactive legislation. Conservative strategy: wait 31 days after harvesting a loss before rebuying the same asset. This costs nothing and eliminates all wash sale risk.
          </div>
        </section>

        <section id="substantially-identical">
          <h2 style={h2Style}>Substantially Identical Property Debate</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Even if you avoid wash sales by waiting 31+ days, the question of "substantially identical property" arises in crypto. Can you harvest a loss on Bitcoin, then immediately buy Ethereum (different token)? Yes. Can you harvest a loss on Bitcoin, then buy Litecoin (different token)? Yes. But what about wrapped Bitcoin (wBTC on Ethereum) vs. native Bitcoin?
          </p>
          <h3 style={h3Style}>Clear Cases</h3>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Different Tokens = Different Property:</strong> Bitcoin and Ethereum are clearly different. BTC and BCH (Bitcoin Cash fork) are different. If you harvest a loss on BTC, you can immediately buy ETH, SOL, or any other token without wash sale concerns.
          </p>
          <h3 style={h3Style}>Unclear Cases</h3>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Wrapped Tokens:</strong> Wrapped BTC (wBTC on Ethereum, renBTC on Ren, tBTC on tBTC network) claim to represent native Bitcoin but are actually ERC-20 tokens on Ethereum. Are these "substantially identical" to native BTC? The IRS has NOT issued guidance. Conservative interpretation: wBTC, renBTC, and native BTC are DIFFERENT property, so you can harvest a loss on native BTC and immediately buy wBTC without wash sale concern.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Staking Tokens (stETH, cbETH):</strong> These are liquid staking tokens representing staked ETH. Is stETH "substantially identical" to ETH? The IRS hasn&apos;t ruled. Conservative position: stETH and ETH are different (different Smart contract, different behavior). You can harvest a loss on ETH, then buy stETH immediately.
          </p>
        </section>

        <section id="real-examples">
          <h2 style={h2Style}>Real Dollar Examples &amp; Tax Savings</h2>
          <h3 style={h3Style}>Example 1: Offset Large Gain</h3>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Scenario:</strong> You realize $80k in Bitcoin gains (sold BTC at huge profit). You also hold Ethereum at a $50k loss. You harvest the Ethereum loss on December 15.
          </p>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Tax Impact:</strong> Without loss harvesting: $80k gain taxed. Federal tax at 24% bracket = $19,200. With loss harvesting: $80k gain - $50k loss = $30k net gain. Federal tax = 24% × $30k = $7,200. <strong>Tax savings: $12,000</strong>.
          </p>
          <h3 style={h3Style}>Example 2: Carryforward Losses</h3>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Scenario:</strong> You harvest $100k in losses but only have $20k in gains. IRS allows $3k of losses to offset ordinary income, leaving $77k carryforward.
          </p>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Year 1 Tax Impact:</strong> $20k gains offset by $20k loss. $3k loss offsets ordinary income at 24% = $720 tax savings. <strong>Year 1 total: $4,800 + $720 = $5,520 saved</strong>. (The $3k ordinary income deduction at 24% = $720, plus capital gains avoidance of $4,800).
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Years 2-26:</strong> $77k carryforward. If you have $0 gains next 25 years, you use $3k/year × 25 years = $75k of carryforward. Tax savings: 25 × ($3k × 24%) = $18,000 over time.
          </p>
        </section>

        <section id="strategy-timing">
          <h2 style={h2Style}>Loss Harvesting Strategy &amp; Timing</h2>
          <h3 style={h3Style}>Optimal Timing: December</h3>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            The best time to harvest losses is December (preferably Dec 20-31). This locks in the tax benefit for the current year, offsetting current-year gains. Losses realized December 31 apply to current-year taxes (filed April 15 next year).
          </p>
          <h3 style={h3Style}>Step-by-Step Walkthrough</h3>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Step 1 (Early December):</strong> Calculate realized gains YTD. Example: $50k BTC gains, $30k ETH losses, $10k misc gains = $30k net gain.
          </p>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Step 2 (Mid-December):</strong> Identify unrealized losses. Example: Litecoin down $20k, Solana down $15k, Doge down $10k = $45k in losses available.
          </p>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Step 3 (Dec 15-20):</strong> Harvest losses strategically. Sell Litecoin ($20k loss) to offset gains. This reduces taxable gain to $10k. Estimate tax savings: ($20k × 24%) = $4,800.
          </p>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Step 4 (Dec 20-31 or Jan 2+):</strong> Rebalance. If you want back in Litecoin, wait until Jan 2 (31+ days) to repurchase. Or buy a similar token (Dogecoin) immediately, then swap to Litecoin later without wash sale concern.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Step 5 (April 15 next year):</strong> File taxes. Report losses on Form 8949, transfer to Schedule D. Lock in tax savings on current-year return.
          </p>
        </section>

        <section id="comparison-table">
          <h2 style={h2Style}>Tax Savings Scenarios Comparison Table</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Scenario</th>
                <th style={thStyle}>Realized Gain</th>
                <th style={thStyle}>Harvested Loss</th>
                <th style={thStyle}>Net Taxable Gain</th>
                <th style={thStyle}>Tax @ 24%</th>
                <th style={thStyle}>Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Conservative Investor</td>
                <td style={tdStyle}>$15k</td>
                <td style={tdStyle}>$8k</td>
                <td style={tdStyle}>$7k</td>
                <td style={tdStyle}>$1,680</td>
                <td style={tdStyle}>$1,920 saved</td>
              </tr>
              <tr>
                <td style={tdStyle}>Active Trader (Small)</td>
                <td style={tdStyle}>$50k</td>
                <td style={tdStyle}>$30k</td>
                <td style={tdStyle}>$20k</td>
                <td style={tdStyle}>$4,800</td>
                <td style={tdStyle}>$7,200 saved</td>
              </tr>
              <tr>
                <td style={tdStyle}>Active Trader (Medium)</td>
                <td style={tdStyle}>$100k</td>
                <td style={tdStyle}>$60k</td>
                <td style={tdStyle}>$40k</td>
                <td style={tdStyle}>$9,600</td>
                <td style={tdStyle}>$14,400 saved</td>
              </tr>
              <tr>
                <td style={tdStyle}>Professional Trader</td>
                <td style={tdStyle}>$200k</td>
                <td style={tdStyle}>$120k</td>
                <td style={tdStyle}>$80k</td>
                <td style={tdStyle}>$19,200</td>
                <td style={tdStyle}>$28,800 saved</td>
              </tr>
              <tr>
                <td style={tdStyle}>High-Income (37% bracket)</td>
                <td style={tdStyle}>$50k</td>
                <td style={tdStyle}>$40k</td>
                <td style={tdStyle}>$10k</td>
                <td style={tdStyle}>$3,700</td>
                <td style={tdStyle}>$14,800 saved</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>Note:</strong> Savings vary by state (CA adds 13.3%, NY adds 8.8%). Federal rates are 24% (married, $89k-$190k income), 32% ($207k-$518k), or 37% (&gt;$518k).
          </p>
        </section>

        <section id="reporting">
          <h2 style={h2Style}>How to Report on Taxes</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Harvested losses are reported on Form 8949 (Sales of Capital Assets), which flows to Schedule D (Capital Gains and Losses), which attaches to Form 1040.
          </p>
          <h3 style={h3Style}>Form 8949 Entries</h3>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            For each harvested loss transaction: (1) Description: "Ethereum" or "ETH-USD", (2) Date acquired, (3) Date sold, (4) Proceeds (amount received), (5) Cost basis (amount paid), (6) Loss = proceeds - cost (negative number).
          </p>
          <h3 style={h3Style}>Example Entry</h3>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            Description: "Ethereum (1 ETH)" | Date acquired: 6/15/2025 | Date sold: 12/20/2025 | Proceeds: $2,200 | Cost: $2,800 | Loss: ($600).
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Transfer all losses to Schedule D summary. If total losses exceed gains, enter up to $3,000 loss on Line 21 of Form 1040. Carryforward excess to next year (Form 1040 instructions show carryforward form).
          </p>
        </section>

        <section id="risks">
          <h2 style={h2Style}>Risks &amp; IRS Scrutiny</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            Tax loss harvesting is legal, but certain patterns may attract IRS scrutiny.
          </p>
          <h3 style={h3Style}>Red Flags</h3>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>1. Suspicious Timing:</strong> Harvesting losses every December at exactly $3k (limit for ordinary income deduction) may flag IRS algorithms. Vary amounts, timings, and assets.
          </p>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>2. Wash Sale Violations (if rule applies):</strong> If Congress applies wash sales retroactively and you harvested a $50k loss on BTC on Dec 15, then bought BTC on Dec 20, you face denied loss + penalties.
          </p>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>3. Lack of Documentation:</strong> IRS requires proof that you actually realized the loss. Keep exchange statements, transaction IDs, cost basis records.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>4. Form 8949 Errors:</strong> Mismatches between Schedule D and broker 1099 forms trigger IRS inquiries. Ensure all trades are reported.
          </p>
        </section>

        <section id="best-practices">
          <h2 style={h2Style}>Best Practices &amp; Documentation</h2>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>1. Keep 7+ Years of Records:</strong> Exchange statements, transaction confirmations, screenshots of buys/sells, cost basis calculations, all blockchain transaction hashes.
          </p>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>2. Use Tax Software or CPA:</strong> CoinTracker, Koinly, or a crypto-specialized CPA will calculate cost basis correctly (FIFO, LIFO, or specific ID methods). Errors cost thousands in audit penalties.
          </p>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>3. Wait 31+ Days if Uncertain:</strong> If you&apos;re unsure about wash sale applicability, wait 31 days before repurchasing the same asset. Zero cost, maximum safety.
          </p>
          <p style={{ marginBottom: 12, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>4. Harvest Multiple Assets:</strong> Don&apos;t always harvest the same token. Vary your losses (10% of one token, 20% of another, etc.). This reduces pattern recognition by IRS algorithms.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>
            <strong>5. Align with CPA:</strong> Discuss your harvesting strategy with your CPA BEFORE executing. They can review for wash sale risks and ensure proper reporting.
          </p>
        </section>

        <section id="faq" style={{ marginTop: 48 }}>
          <h2 style={h2Style}>FAQ</h2>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#e6edf3' }}>Does the wash sale rule apply to crypto in 2026?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              As of April 2026, the wash sale rule (Section 1091) technically does NOT apply to crypto by IRS guidance. The rule applies to "securities" under IRC Section 165(c), and crypto is not classified as a security for tax purposes. However, Congress is debating crypto wash sale legislation. The safest interpretation: treat crypto wash sales as if the rule applies, to avoid liability if law changes retroactively.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#e6edf3' }}>What is "substantially identical property" in crypto?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              Substantially identical property means the same asset (e.g., two Bitcoin are substantially identical). However, BTC and BCH (Bitcoin Cash fork) are different property. BTC and ETH are different property. The IRS has NOT issued clear guidance on whether BTC on different blockchains (BTC on Ethereum, via wrapped BTC) is substantially identical to native BTC. Conservative approach: assume wrapped/bridged versions are different.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#e6edf3' }}>Can I harvest losses and immediately buy a similar token?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              Yes, if it&apos;s a different token. Example: Sell SOL at a loss, immediately buy SUI (different token), no wash sale restriction. If you sell BTC at a loss, then buy BTC within 30 days (30 days before OR after), you face wash sale risk if rule applies. Conservative strategy: wait 31 days to be safe.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#e6edf3' }}>What are real dollar tax savings from loss harvesting?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              Example: $50k capital loss harvested. Tax savings depend on marginal rate: At 24% rate, save $12,000. At 32% rate, save $16,000. At 37% (highest), save $18,500. If loss exceeds gains ($3k loss carryforward per year), 10-year carryforward = 10 × $3k × 32% = $9,600 savings over time.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#e6edf3' }}>How do I report loss harvesting on my taxes?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              Report each loss on Form 8949 (Sales of Capital Assets). Transfer totals to Schedule D. If losses exceed gains, enter up to $3,000 loss on Line 21 of Form 1040. Carryforward excess losses (e.g., $50k loss, $5k gains = $45k carryforward). Attach Schedule D to Form 1040.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12, color: '#e6edf3' }}>What is the best time to harvest losses?</h3>
            <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>
              December is optimal (year-end tax planning). Realize losses by Dec 31 to offset current year gains. Avoid "short selling to harvest" which may trigger IRS scrutiny. Example: Dec 20, sell BTC at $20k loss. By Dec 31, buy SOL or stablecoins. Lock in tax benefit for current year. If considering repurchase, wait until Jan 2 (3-day buffer).
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and does not constitute tax or legal advice. Tax loss harvesting rules are evolving (wash sale rule may apply retroactively to crypto). Always consult a qualified tax professional or CPA before implementing loss harvesting strategies. The wash sale rule status, substantially identical property definitions, and carryforward rules are subject to change. By April 2026, while loss harvesting is generally accepted, relying solely on unofficial guidance carries risk if legislation changes. Maintain thorough documentation and seek professional advice.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }>
            <li><Link href="/investing/best-depin-tokens-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Best Depin Tokens</Link></li>
            <li><Link href="/investing/best-gaming-crypto-tokens" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Best Gaming Crypto Tokens</Link></li>
            <li><Link href="/investing/best-infrastructure-crypto-tokens" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Best Infrastructure Crypto Tokens</Link></li>
            <li><Link href="/investing/best-layer-2-tokens-to-invest" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Best Layer 2 Tokens To Invest</Link></li>
          </ul>
        </nav>

</article>
  );
}
