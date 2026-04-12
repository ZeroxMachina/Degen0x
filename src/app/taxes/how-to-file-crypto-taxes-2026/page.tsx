import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "How to File Crypto Taxes 2026: Complete US Tax Guide",
  description: "Crypto tax guide 2026: US IRS rules, short-term vs long-term capital gains, staking/mining/airdrop income, DeFi tax implications, Form 8949, Schedule D,",
  keywords: ['crypto taxes 2026', 'how to file crypto taxes', 'IRS crypto', 'capital gains', 'form 8949', 'cryptocurrency tax'],
  openGraph: { type: 'article', title: 'How to File Crypto Taxes 2026 | degen0x', description: 'Crypto tax guide: US IRS rules, short-term vs long-term gains, staking income, tax software comparison, Form 8949, Schedule D.', publishedTime: '2026-04-10T00:00:00Z', modifiedTime: '2026-04-10T00:00:00Z', url: 'https://degen0x.com/taxes/how-to-file-crypto-taxes-2026', images: [{ url: 'https://degen0x.com/og-taxes.svg', width: 1200, height: 630, alt: 'Crypto Taxes 2026' }] },
  twitter: { card: 'summary_large_image', title: 'How to File Crypto Taxes 2026 | degen0x', description: 'Crypto tax guide: US IRS rules, short/long-term gains, staking income, tax software, Form 8949, Schedule D.', image: 'https://degen0x.com/og-taxes.svg' },
  alternates: {
    canonical: 'https://degen0x.com/taxes/how-to-file-crypto-taxes-2026',
  },
};

const structuredData = { '@context': 'https://schema.org', '@type': 'Article', headline: 'How to File Crypto Taxes 2026', description: 'US crypto tax guide: IRS rules, capital gains, staking/mining/airdrop income, DeFi taxes, Form 8949, Schedule D, tax software.', image: 'https://degen0x.com/og-taxes.svg', datePublished: '2026-04-10', dateModified: '2026-04-10', author: { '@type': 'Organization', name: 'degen0x' }, mainEntity: { '@type': 'FAQPage', mainEntity: [
  { '@type': 'Question', name: 'What are the main US crypto tax rules?', acceptedAnswer: { '@type': 'Answer', text: 'IRS treats cryptocurrency as property, not currency. Taxable events: (1) Selling (capital gain/loss), (2) Trading (taxable exchange), (3) Spending (like selling), (4) Staking/mining rewards (ordinary income), (5) Airdrops (ordinary income at receipt value). No wash sale rule for crypto (yet). Long-term capital gains (>1 year): 15-20% federal tax. Short-term (<1 year): 37% top rate. State taxes add 0-13%.' } },
  { '@type': 'Question', name: 'What is the difference between short-term and long-term capital gains?', acceptedAnswer: { '@type': 'Answer', text: 'Short-term gains (<1 year holding): taxed as ordinary income (10-37% federal + state). Long-term gains (>1 year): preferential rates (0%, 15%, 20% federal + state). Example: $1,000 gain at 37% short-term = $370 tax. Same $1,000 at 15% long-term = $150 tax. Strategy: hold winners >1 year, harvest losses immediately (tax-loss harvesting).' } },
  { '@type': 'Question', name: 'How are staking rewards and airdrops taxed?', acceptedAnswer: { '@type': 'Answer', text: 'Staking: ordinary income at time of receipt (based on FMV when earned). Airdrop: ordinary income at receipt date (FMV). Example: stake 1 ETH, earn 0.05 ETH reward worth $150 = $150 ordinary income (taxable now, even if price crashes). Plus capital gains when you sell the reward later. Deductible: staking fees (ordinary business expense if active validator).' } },
  { '@type': 'Question', name: 'How is DeFi yield farming taxed?', acceptedAnswer: { '@type': 'Answer', text: 'Yield farming is complex: (1) Trading fee distributions: ordinary income at FMV. (2) Governance token rewards (CRV, AAVE): ordinary income at receipt. (3) Impermanent loss: may be deductible if farms are treated as business activity. (4) Swaps/exits: capital gains. Tracking: each pool position requires detailed cost basis (entry/exit prices, rewards). Recommend: professional accountant for >10 farms.' } },
  { '@type': 'Question', name: 'What tax software is best for crypto taxes?', acceptedAnswer: { '@type': 'Answer', text: 'CoinTracker ($49-349): easiest UI, DeFi integration, airdrop tracking. Koinly ($79-399): DeFi-focused, 500+ exchange support, CFDs. TaxBit (enterprise): institutional-grade, acquired by Intuit (becoming TurboTax crypto). CryptoTaxCalculator ($999+): accountant-focused, professional reports. Choose: CoinTracker for simple traders, Koinly for DeFi heavy, TaxBit for serious investors. Always review before filing.' } },
  { '@type': 'Question', name: 'What are common crypto tax mistakes?', acceptedAnswer: { '@type': 'Answer', text: 'Mistakes: (1) Not reporting staking/airdrops as income, (2) Using FIFO (first-in-first-out) when ACB (average cost basis) is better, (3) Forgetting swap gains on L2s/DEX, (4) Not filing Form 8949, (5) Missing airdrop dates/amounts, (6) No records for cost basis. Consequences: IRS audit (1-3 years), penalties (20-75%), interest charges. Safe: hire accountant ($500-2K) or use software ($100-500).' } },
] } };

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #fb7185, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#fb7185', borderBottom: '2px solid #4c1d2a', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


export default function CryptoTaxesFiling() {
  const tableOfContents = [ { id: 'us-tax-rules', title: 'US Crypto Tax Rules' }, { id: 'taxable-events', title: 'Taxable Events' }, { id: 'capital-gains', title: 'Short-Term vs Long-Term Capital Gains' }, { id: 'staking-airdrops', title: 'Staking, Mining & Airdrops' }, { id: 'defi-taxes', title: 'DeFi & Yield Farming Taxes' }, { id: 'tax-software', title: 'Tax Software Comparison' }, { id: 'filing-process', title: 'Filing Process (Form 8949, Schedule D)' }, { id: 'mistakes', title: 'Common Mistakes & Penalties' }, { id: 'faq', title: 'FAQ' } ];

  const infoBoxStyle = { background: '#161b22', border: '1px solid #30363d', borderLeft: '3px solid #fb7185', borderLeft: '3px solid #fb7185', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };
  const h1Style = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #64748b, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' };
  const h2Style = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#fb7185', borderBottom: '2px solid #4c1d2a', paddingBottom: 12, };
  const h3Style = { fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' };
  const badgeStyle = { display: 'inline-block', padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16 };
  const linkStyle = { color: '#58a6ff', textDecoration: 'none' };
  const tableStyle = { width: '100%', borderCollapse: 'collapse' as const, marginBottom: 24, fontSize: 14 };
  const thStyle = { background: '#0d1117', border: '1px solid #30363d', padding: 12, textAlign: 'left' as const, fontWeight: 700, color: '#e6edf3' };
  const tdStyle = { border: '1px solid #30363d', padding: 12, color: '#8b949e' };

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}><Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link><span style={{ margin: '0 6px' }}>›</span><Link href="/taxes" style={{ color: '#8b949e', textDecoration: 'none' }}>Taxes</Link><span style={{ margin: '0 6px' }}>›</span><span style={{ color: '#c9d1d9' }}>Crypto Taxes 2026</span></nav>

        <div style={{ marginBottom: 32 }}><span style={{ ...badgeStyle, background: '#64748b', color: '#fff' }}>Taxes</span><span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span><h1 style={h1Style}>How to File Crypto Taxes 2026</h1><p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>Complete US crypto tax guide: IRS rules, short-term vs long-term gains (15-37%), staking/airdrop income, DeFi taxes, Form 8949, Schedule D, CoinTracker vs Koinly vs TaxBit.</p><div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}><span>Updated: April 10, 2026</span><span>Reading time: 13 min</span></div></div>

        <nav aria-label="Table of Contents" style={{ ...infoBoxStyle, marginBottom: 32 }}><h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Table of Contents</h3><ol style={{ marginLeft: 20, color: '#58a6ff' }}>{tableOfContents.map((item) => (<li key={item.id} style={{ marginBottom: 8 }}><a href={`#${item.id}`} style={linkStyle}>{item.title}</a></li>))}</ol></nav>

        <section id="us-tax-rules" style={{ scrollMarginTop: 24 }}><h2 style={h2Style}>1. US Crypto Tax Rules</h2><p style={{ marginBottom: 16, lineHeight: 1.8 }}>IRS treats cryptocurrency as property (not currency). Capital gain/loss applies to every trade/sale. Staking/mining generates ordinary income. Airdrops are taxable at receipt. Short-term gains (held &lt;1 year): taxed as ordinary income (10-37% federal). Long-term gains (held &gt;1 year): preferential rates (0-20% federal). State taxes add 0-13%. Total: 10-50% all-in depending on income + location.</p>
        {/* editorial-voice */}
        <div style={{ background: '#1a0d14', border: '1px solid #4c1d2a', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📋</span>
            <strong style={{ color: '#fb7185', fontSize: 15 }}>Tax Reality Check</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Crypto tax compliance is a mess, but ignoring it is worse. We focus on practical approaches that balance accuracy with the reality that most exchanges have incomplete records.
          </p>
        </div><h3 style={h3Style}>Key IRS Positions (2026)</h3><p style={{ marginBottom: 24, lineHeight: 1.8 }}>Wash sale rule doesn&apos;t apply to crypto (yet, but may change). Like-kind exchanges ended (2017). Staking pools with loans: deductible interest if borrowing for business. Mining: deductible depreciation on equipment. Trading losses: deductible up to $3,000/year (carryforward excess). Recommendation: track everything; assume taxable.</p></section>

        <section id="taxable-events" style={{ scrollMarginTop: 24 }}><h2 style={h2Style}>2. Taxable Events</h2><p style={{ marginBottom: 24, lineHeight: 1.8 }}>
          (1) Selling: capital gain = sale price - cost basis. (2) Trading: immediate taxable event on both legs. (3) Spending: taxable sale (e.g., buy coffee with BTC). (4) Staking: ordinary income at receipt. (5) Mining: ordinary income at FMV received. (6) Airdrops: ordinary income at receipt date value. (7) Hard forks: no tax (old rule, may change). (8) Air-dropsEscrow: when released. Recommendation: use cost basis method FIFO (first-in-first-out) or ACB (average cost basis) consistently.
        </p></section>

        <section id="capital-gains" style={{ scrollMarginTop: 24 }}><h2 style={h2Style}>3. Short-Term vs Long-Term Capital Gains</h2><table style={tableStyle}><thead><tr style={{ background: '#0d1117' }}><th style={thStyle}>Holding Period</th><th style={thStyle}>Tax Rate</th><th style={thStyle}>Example ($1,000 gain)</th></tr></thead><tbody><tr><td style={tdStyle}>&lt;1 year</td><td style={tdStyle}>&gt;37% (top rate)</td><td style={tdStyle}>$370 tax</td></tr><tr><td style={tdStyle}>&gt;1 year</td><td style={tdStyle}>&gt;20% (top rate)</td><td style={tdStyle}>$200 tax</td></tr><tr><td style={tdStyle}>Plus state tax</td><td style={tdStyle}>&gt;0-13%</td><td style={tdStyle}>+$0-130</td></tr><tr><td style={tdStyle}>Total all-in</td><td style={tdStyle}>&gt;10-50%</td><td style={tdStyle}>$100-500</td></tr></tbody></table><p style={{ marginTop: 16, marginBottom: 24, lineHeight: 1.8 }}>Strategy: hold winners &gt;1 year (save 15-30% tax). Sell losers immediately (harvest losses, offset gains). Carry forward unused losses indefinitely.</p></section>

        <section id="staking-airdrops" style={{ scrollMarginTop: 24 }}><h2 style={h2Style}>4. Staking, Mining &amp; Airdrops</h2><h3 style={h3Style}>Staking Income</h3><p style={{ marginBottom: 16, lineHeight: 1.8 }}>Ordinary income at time of receipt (based on FMV). Example: stake 1 ETH, earn 0.05 ETH reward worth $150 = $150 ordinary income immediately (taxable in year 2024 even if ETH crashes in 2025). Timing: reported in year received, not year sold. Deduction: gas fees to stake/unstake (if minor). Staking fee from platform: might be deductible.</p><h3 style={h3Style}>Airdrops</h3><p style={{ marginBottom: 16, lineHeight: 1.8 }}>Ordinary income at receipt date (FMV when received). Arbitrum airdrop (March 2023): 625 ARB at ~$1.50 = $937.50 ordinary income (taxable in 2023). If ARB crashes to $0.10, you still owe tax on $937.50 (harsh but IRS position). Plus capital gain when you sell.</p><h3 style={h3Style}>Mining</h3><p style={{ marginBottom: 24, lineHeight: 1.8 }}>Ordinary income at FMV of block reward. Equipment: depreciable over 5 years (Section 1245). Electricity: deductible business expense if mining is business (vs. hobby). Hobby mining: no deductions. Track: hashrate, electricity costs, maintenance.</p></section>

        <section id="defi-taxes" style={{ scrollMarginTop: 24 }}><h2 style={h2Style}>5. DeFi &amp; Yield Farming Taxes</h2><p style={{ marginBottom: 16, lineHeight: 1.8 }}>Yield farming is complex: (1) Provide liquidity: no tax event. (2) Collect trading fees: ordinary income at receipt FMV. (3) Governance token rewards: ordinary income at receipt. (4) Swap fees (1-2%): deductible or ordinary income? (5) Impermanent loss: may be deductible if farming is business. (6) Exit pool: capital gain (LP token value - cost basis). Recommendation: hire accountant ($500-2K) if &gt;5 farms or &gt;$10K annual yield.</p></section>

        <section id="tax-software" style={{ scrollMarginTop: 24 }}><h2 style={h2Style}>6. Tax Software Comparison</h2><table style={tableStyle}><thead><tr style={{ background: '#0d1117' }}><th style={thStyle}>Software</th><th style={thStyle}>Price</th><th style={thStyle}>Best For</th><th style={thStyle}>DeFi Support</th></tr></thead><tbody><tr><td style={tdStyle}>CoinTracker</td><td style={tdStyle}>$49-349</td><td style={tdStyle}>Casual traders</td><td style={tdStyle}>Good</td></tr><tr><td style={tdStyle}>Koinly</td><td style={tdStyle}>$79-399</td><td style={tdStyle}>DeFi farmers</td><td style={tdStyle}>Excellent</td></tr><tr><td style={tdStyle}>TaxBit</td><td style={tdStyle}>Enterprise</td><td style={tdStyle}>Serious investors</td><td style={tdStyle}>Good</td></tr><tr><td style={tdStyle}>CryptoTaxCalculator</td><td style={tdStyle}>$999+</td><td style={tdStyle}>Accountants</td><td style={tdStyle}>Excellent</td></tr></tbody></table></section>

        <section id="filing-process" style={{ scrollMarginTop: 24 }}><h2 style={h2Style}>7. Filing Process</h2><h3 style={h3Style}>Step 1: Gather Records</h3><p style={{ marginBottom: 16, lineHeight: 1.8 }}>Export transactions from exchanges/wallets. Cost basis for every trade. Dates of purchases/sales. Calculate capital gains/losses per transaction.</p><h3 style={h3Style}>Step 2: Form 8949</h3><p style={{ marginBottom: 16, lineHeight: 1.8 }}>Report each transaction: date acquired, date sold, cost basis, sale price, gain/loss. Lines A-N for short-term, O-28 for long-term.</p><h3 style={h3Style}>Step 3: Schedule D</h3><p style={{ marginBottom: 24, lineHeight: 1.8 }}>Summarize totals from 8949. Section 1A (short-term), Section II (long-term). Transfer to Form 1040.</p></section>

        <section id="mistakes" style={{ scrollMarginTop: 24 }}><h2 style={h2Style}>8. Common Mistakes &amp; Penalties</h2><div style={infoBoxStyle}><strong style={{ color: '#e6edf3' }}>Top Mistakes:</strong><ul style={{ marginTop: 12, marginBottom: 0, fontSize: 14, paddingLeft: 20 }}><li>Not reporting staking/airdrops as income</li><li>Forgetting trades on DEX/L2s</li><li>Wrong cost basis (mixing FIFO/ACB)</li><li>No records for IRA/401k crypto</li><li>Missing deadline (April 15)</li></ul><p style={{ marginTop: 12, marginBottom: 0 }}>Penalties: accuracy (20%), fraud (75%), failure to file (5-25%), interest charges. IRS audit rate: higher for crypto filers. Safe: file on time, be conservative on valuations, keep all records 7 years.</p></div></section>

        <section id="faq" style={{ scrollMarginTop: 24 }}><h2 style={h2Style}>FAQ</h2><div style={infoBoxStyle}><h3 style={h3Style}>What are the main US crypto tax rules?</h3><p style={{ marginBottom: 0, lineHeight: 1.8, fontSize: 15 }}>IRS treats cryptocurrency as property, not currency. Taxable events: (1) Selling (capital gain/loss), (2) Trading (taxable exchange), (3) Spending (like selling), (4) Staking/mining rewards (ordinary income), (5) Airdrops (ordinary income at receipt value). No wash sale rule for crypto (yet). Long-term capital gains (&gt;1 year): 15-20% federal tax. Short-term (&lt;1 year): 37% top rate. State taxes add 0-13%.</p></div><div style={infoBoxStyle}><h3 style={h3Style}>What tax software is best for crypto taxes?</h3><p style={{ marginBottom: 0, lineHeight: 1.8, fontSize: 15 }}>CoinTracker ($49-349): easiest UI, DeFi integration, airdrop tracking. Koinly ($79-399): DeFi-focused, 500+ exchange support, CFDs. TaxBit (enterprise): institutional-grade, acquired by Intuit (becoming TurboTax crypto). CryptoTaxCalculator ($999+): accountant-focused, professional reports. Choose: CoinTracker for simple traders, Koinly for DeFi heavy, TaxBit for serious investors. Always review before filing.</p></div></section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}><strong>Disclaimer:</strong> This is not tax advice. Consult a CPA or tax attorney for your specific situation. Tax rules vary by jurisdiction (US-focused). IRS rules change; verify current guidance before filing.</div>
      </div>

        <AuthorAttribution
          author="NullPointer"
          role="Data Engineer"
          publishedDate="2026-04-10"
          updatedDate="2026-04-10"
          readingTime={13}
          section="taxes"
        />
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/investing/best-crypto-to-invest-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Crypto To Invest</Link></li>
            <li><Link href="/investing/best-crypto-under-1-dollar" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Crypto Under 1 Dollar</Link></li>
            <li><Link href="/investing/best-defi-tokens-to-buy-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Defi Tokens To Buy</Link></li>
            <li><Link href="/investing/best-depin-tokens-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Depin Tokens</Link></li>
          </ul>
        </nav>

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
