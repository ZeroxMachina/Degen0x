import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "NFT Tax Guide 2026: Capital Gains, Royalties & Collectibles",
  description: 'Complete NFT tax guide for 2026: capital gains, creator royalties, minting events, NFT swaps, collectibles 28% rate, gas fees, wash sales, charitable donations.',
  keywords: ['NFT taxes', 'capital gains', 'collectibles tax', 'NFT minting', 'wash sales NFT', 'crypto taxes 2026', 'IRS NFT reporting', 'gas fees tax'],
  openGraph: {
    type: 'article',
    title: 'NFT Tax Guide 2026: Capital Gains, Royalties & Collectibles Rules',
    description: 'Complete NFT tax guide for 2026: capital gains, creator royalties, minting events, NFT swaps, collectibles 28% rate, gas fees, wash sales, charitable donations.',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/taxes/nft-tax-guide-2026',
    images: [{
      url: 'https://degen0x.com/og-taxes.svg',
      width: 1200,
      height: 630,
      alt: 'NFT Tax Guide 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NFT Tax Guide 2026: Capital Gains, Royalties & Collectibles Rules',
    description: 'Complete NFT tax guide: capital gains treatment, creator royalties as ordinary income, minting taxability, NFT swaps, collectibles rate.',
    image: 'https://degen0x.com/og-taxes.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/taxes/nft-tax-guide-2026',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'NFT Tax Guide 2026: Capital Gains, Royalties & Collectibles Rules',
  description: 'Complete NFT tax guide covering capital gains, creator royalties, minting taxability, NFT swaps, collectibles 28% rate, gas fees deductions, wash sales, and charitable donations.',
  image: 'https://degen0x.com/og-taxes.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are NFTs taxed as collectibles or capital assets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The IRS treats NFTs as collectibles, not securities. This means gains on NFT sales are taxed at the collectibles rate: 28% for long-term gains (held over 1 year) instead of the standard 20% capital gains rate. Short-term gains (held under 1 year) are taxed as ordinary income up to 37%. However, functional NFTs (membership tokens, tickets) may be taxed differently. The collectibles classification is more punitive than stock gains, making holding period critical for tax planning.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are NFT creator royalties taxed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Creator royalties from NFT sales (secondary market) are taxed as ordinary income at your marginal tax rate, not as capital gains. If you earn $50,000 in annual royalties from platforms like Magic Eden or OpenSea, that income is taxable at rates up to 37% (federal) plus state and self-employment taxes. You can deduct ordinary business expenses (marketing, gas fees, software). Royalties must be reported on Form 1040 Schedule 1 as self-employment income.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is minting an NFT a taxable event?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Minting itself is not a taxable event. However, if you paid gas fees in ETH to mint (for example, $200 in ETH), those gas fees become part of your cost basis for the NFT. The taxable event occurs when you sell the NFT. If you minted an NFT for $200 gas + $0 initial cost and sold it for $5,000, your capital gain is $4,800. The gas fees you paid are recouped from the sale proceeds. Keep detailed records of all gas spending during minting.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are NFT-to-NFT swaps taxed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'NFT-to-NFT swaps on platforms like Magic Eden, OpenSea, or Sudoswap are taxable events. You must recognize the fair market value (FMV) of both NFTs at the time of swap. If you trade an NFT worth $10,000 for an NFT worth $12,000, you have a $2,000 capital gain. If there\'s a price difference and you receive ETH to balance, that ETH is separate income. Each swap is reported as a sale followed by a purchase, establishing separate cost bases for tax purposes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I claim gas fees as tax deductions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gas fees paid to buy/sell/mint NFTs are capitalized into the cost basis, not deducted as separate expenses. If you paid $200 in gas to buy an NFT for $5,000, your total cost basis is $5,200. If you later sell that NFT for $8,000, your gain is $2,800. However, as a business/trader, you can deduct indirect costs: software subscriptions, hardware, office space used for NFT analysis. Keep records of all gas spending in ETH/USD terms.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do wash sale rules apply to NFTs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The wash sale rule (IRS Code Section 1091) prevents tax-loss harvesting within 30 days. Historically, it applied to securities only, not crypto. However, the IRS and many tax professionals argue it may apply to NFTs, especially if classified as "partnership interests" or "securities." To be safe, don\'t sell an NFT at a loss and buy a "substantially identical" NFT within 30 days before/after. If you do and the IRS challenges, disallowed losses are added to the new NFT\'s basis, deferring the deduction.',
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #fb7185, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#fb7185', borderBottom: '2px solid #4c1d2a', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


export default function NFTTaxGuide2026() {
  const tableOfContents = [
    { id: 'nft-classification', title: 'How NFTs Are Classified for Taxes' },
    { id: 'capital-gains', title: 'NFT Capital Gains & Long-Term vs Short-Term' },
    { id: 'creator-royalties', title: 'Creator Royalties as Ordinary Income' },
    { id: 'minting-events', title: 'Minting as a Taxable Event' },
    { id: 'nft-swaps', title: 'NFT-to-NFT Swaps & Valuation' },
    { id: 'gas-fees', title: 'Gas Fees, Cost Basis & Deductions' },
    { id: 'comparison-table', title: 'NFT Tax Scenarios Comparison' },
    { id: 'wash-sales', title: 'Wash Sales, Losses & Loss Harvesting' },
    { id: 'charitable-donations', title: 'Charitable NFT Donations & Valuations' },
    { id: 'reporting', title: 'IRS Reporting & Record Keeping' },
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
          <Link href="/taxes" style={{ color: '#8b949e', textDecoration: 'none' }}>Taxes</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>NFT Tax Guide</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#64748b', color: '#fff' }}>Taxes</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          <h1 style={h1Style}>NFT Tax Guide 2026</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            The NFT market traded $24.3B in volume in 2025, but most collectors and traders don&apos;t understand the tax implications. The IRS classifies NFTs as collectibles—taxed at 28% long-term capital gains rates, not the favorable 20% rate for stocks. Add creator royalties taxed as ordinary income, minting events that establish cost basis, and complex NFT-to-NFT swaps, and tax liability balloons fast. This guide covers every taxable NFT event, provides real scenarios with numbers, and shows you how to minimize tax exposure legally.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 18 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="NullPointer"
          role="Data Engineer"
          publishedDate="2026-04-10"
          updatedDate="2026-04-10"
          readingTime={18}
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

        <section id="nft-classification" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>1. How NFTs Are Classified for Taxes</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            The IRS does not have specific NFT guidance as of 2026, so tax classification relies on general property rules and analogies to other asset classes. NFTs are treated as collectibles under IRC Section 408(m), placing them in the same category as art, coins, and memorabilia. This classification has profound tax consequences: long-term capital gains on NFTs are taxed at 28%, not the standard 20% rate for financial assets.
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
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            However, not all NFTs are collectibles. Functional NFTs—tokens conferring membership, governance rights, or utility—may be classified as securities or partnership interests, triggering different tax rules. For example, an NFT representing a stake in a DAO may be a partnership interest taxed under Subchapter K. NFT domain names (like Ethereum domain service tokens) might be treated as intangible property. The key distinction: if the NFT&apos;s value derives primarily from aesthetics or rarity, it&apos;s a collectible. If it&apos;s functional, tax treatment is context-dependent.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>The 28% Collectibles Rate Matters</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              A $100,000 gain on an NFT costs you $28,000 in federal taxes (28% rate) plus state taxes and net investment income taxes (3.8%). Total: ~$31,800-$32,500. Compare to a stock with $100,000 gain: ~$23,800 (20% + NIIT). The 8% difference on large gains is substantial. This is why NFT traders often hold positions under 1 year for short-term gains (taxed as ordinary income at marginal rates, sometimes lower if you&apos;re in the 22% bracket).
            </p>
          </div>
        </section>

        <section id="capital-gains" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>2. NFT Capital Gains & Long-Term vs Short-Term</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Capital gains on NFT sales are divided by holding period. Hold an NFT for more than 1 year and you qualify for long-term capital gains rates: 0%, 15%, or 20% for most assets—but 28% for NFTs. Hold it under 1 year and gains are ordinary income, taxed at your marginal rate (10%, 12%, 22%, 24%, 32%, 35%, 37%).
          </p>
          <h3 style={h3Style}>Long-Term NFT Capital Gains</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            If you buy an NFT on April 1, 2025, for 2 ETH ($4,000) and sell it on April 2, 2026, for 10 ETH ($35,000), you have a $31,000 long-term capital gain. Federal tax: $8,680 (28% rate). But if you sold on March 31, 2026 (under 1 year), the same $31,000 is ordinary income, potentially taxed at 35% ($10,850) or more with state taxes. This 1-year threshold is critical: timing sales by days or weeks can save thousands in taxes.
          </p>
          <h3 style={h3Style}>Short-Term NFT Capital Gains</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Flipping NFTs (buying and selling within months) incurs short-term gains taxed as ordinary income. For a trader in the 37% federal bracket, a $10,000 gain costs $3,700 in federal tax alone. Add state taxes (up to 13% in California) and the rate approaches 50%. This is why many serious NFT traders incorporate as businesses and structure trades as inventory (Section 1363), not capital gains. Inventory gains can be deducted against ordinary business expenses.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Date Tracking is Essential</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              The IRS requires you to track the acquisition date of every NFT you own. When you sell, you must specify which NFT you&apos;re selling (especially if you own multiple copies). Use FIFO (first-in-first-out) by default unless you maintain detailed records showing which specific NFT you sold. Software like CoinTracker, Koinly, and ZenLedger tracks NFT holdings and auto-calculates long-term vs short-term gains, but verify manually before filing.
            </p>
          </div>
        </section>

        <section id="creator-royalties" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>3. Creator Royalties as Ordinary Income</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            If you&apos;re an NFT creator earning royalties from secondary sales, those royalties are ordinary income taxed at your marginal rate. On platforms like OpenSea, Magic Eden, or Blur, every time someone sells your NFT, you earn a percentage (typically 5-10%). This is not passive income—it&apos;s business income subject to self-employment tax (15.3% in 2026).
          </p>
          <h3 style={h3Style}>Royalty Income Calculation</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Imagine you release an NFT collection with 100 pieces at 1 ETH ($3,500) each. Over 2 years, secondary sales total 500 ETH ($1.75M) with you earning 10% royalties: 50 ETH ($175,000). That $175,000 is ordinary income taxed at up to 37% federally, plus state taxes (up to 13%) and self-employment taxes (15.3%), totaling 65% marginal rates in high-tax states. After taxes, you retain $61,250. Compare to long-term capital gains on stock: same $175,000 gain, 28% collectibles tax + 3.8% NIIT = 31.8% tax rate, retaining $119,850.
          </p>
          <h3 style={h3Style}>Deductible Business Expenses</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            As an NFT creator, you can deduct ordinary and necessary business expenses: art software subscriptions (Adobe $600/year), blockchain publishing tools ($100-500), website hosting, marketing (Twitter ads, Discord bots), legal advice for contracts, accountancy. If you spend $30,000 on promotion to generate $175,000 in royalties, your taxable income is $145,000, reducing your tax bill by ~$10,000 (at 37% marginal rate).
          </p>
        </section>

        <section id="minting-events" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>4. Minting as a Taxable Event</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Minting an NFT itself is not a taxable event. You don&apos;t recognize income when you create and mint an NFT. However, the gas fees you pay to mint become part of the NFT&apos;s cost basis. If you mint an NFT paying 0.5 ETH ($1,500) in gas, your cost basis is $1,500. When you sell that NFT for $10,000, your capital gain is $8,500, not $10,000.
          </p>
          <h3 style={h3Style}>Cost Basis Calculation for Minting</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Cost basis = Gas fees paid + Any purchase price of underlying assets. If you mint an NFT on OpenSea (free mint) but paid $200 in gas and $500 for artwork (purchased from a designer), your cost basis is $700. If that NFT later sells for $5,000, your capital gain is $4,300.
          </p>
          <h3 style={h3Style}>Batch Minting Gas</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Many creators batch-mint NFT collections, splitting total gas across many NFTs. If you spent $2,000 in gas to mint 50 NFTs, each NFT&apos;s proportional gas cost is $40. Allocate this to each NFT&apos;s cost basis. Use your blockchain explorer (Etherscan) to retrieve exact transaction data for IRS substantiation.
          </p>
        </section>

        <section id="nft-swaps" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>5. NFT-to-NFT Swaps & Valuation</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Directly swapping two NFTs (Doodle for Cool Cat, for example) is a taxable event. You must establish fair market value (FMV) for both NFTs at the time of swap and recognize any gain or loss. If you trade an NFT worth $20,000 for an NFT worth $24,000, you have a $4,000 capital gain, even though no USD was exchanged.
          </p>
          <h3 style={h3Style}>Fair Market Value Determination</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            FMV is the price at which property changes hands between a willing buyer and seller. For NFTs, use recent comparable sales on platforms like OpenSea, Blur, or LooksRare. If a Doodle recently sold for $25,000 and you&apos;re trading a Doodle you own, that $25,000 is your FMV. If the other NFT (Cool Cat) recently sold for $22,000, that&apos;s its FMV. The difference ($3,000) is your taxable gain. If prices haven&apos;t traded recently, use floor price as a proxy, but document your reasoning.
          </p>
          <h3 style={h3Style}>Partial Swaps with Stablecoin Adjustment</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            If you trade NFT A (worth $20,000) for NFT B (worth $18,000) plus 2,000 USDC to balance, you have a capital loss on A ($2,000) and a taxable event when you receive USDC (ordinary income or capital asset depending on USDC classification). Document both transactions separately with timestamps.
          </p>
        </section>

        <section id="gas-fees" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>6. Gas Fees, Cost Basis & Deductions</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Gas fees are capitalized costs, not deductible expenses. When you buy an NFT paying 0.3 ETH ($1,050) in gas, the total cost basis is the purchase price plus $1,050. Example: buy Pudgy Penguin for $8,000, pay $1,050 gas—total cost basis $9,050. Sell it for $12,000—capital gain is $2,950, not $3,950.
          </p>
          <h3 style={h3Style}>Cost Basis Stacking Example</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Purchase: Blur NFT for $5,000. Gas: $600. Total basis: $5,600. Sale price: $8,000. Capital gain: $2,400. Sale gas: $400. The sale gas doesn&apos;t reduce your gain; it comes from proceeds. You net $7,600 after sale gas, with a $2,400 gain recognized.
          </p>
          <h3 style={h3Style}>Deductible Business Expenses</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            While gas is capitalized, these are deductible: NFT research tools (rarity tools, analytics platforms, $50-200/month), portfolio tracking software (CoinTracker $200/year), tax software ($200-500), home office (if you trade full-time), hardware (computer, monitors). Keep detailed records with dates and USD amounts. Total business deductions can offset NFT trading income significantly, especially for active traders.
          </p>
        </section>

        <section id="comparison-table" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>7. NFT Tax Scenarios Comparison</h2>
          <table style={tableStyle}>
            <thead>
              <tr style={{ background: '#0d1117' }}>
                <th style={thStyle}>Event</th>
                <th style={thStyle}>Tax Type</th>
                <th style={thStyle}>Rate (Federal)</th>
                <th style={thStyle}>Reporting</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Buy NFT, hold 2 years, sell for +$50K gain</td>
                <td style={tdStyle}>Long-term capital gain (collectible)</td>
                <td style={tdStyle}>28%</td>
                <td style={tdStyle}>Form 8949, Sch. D</td>
              </tr>
              <tr style={{ background: '#0d1117' }}>
                <td style={tdStyle}>Buy NFT, sell 6 months later for +$50K gain</td>
                <td style={tdStyle}>Short-term capital gain</td>
                <td style={tdStyle}>22%-37% (marginal rate)</td>
                <td style={tdStyle}>Form 8949, Sch. D</td>
              </tr>
              <tr>
                <td style={tdStyle}>Receive $50K in creator royalties</td>
                <td style={tdStyle}>Ordinary income (self-employment)</td>
                <td style={tdStyle}>37% + 15.3% SE tax</td>
                <td style={tdStyle}>Sch. C, Sch. SE, 1040</td>
              </tr>
              <tr style={{ background: '#0d1117' }}>
                <td style={tdStyle}>Mint NFT, pay $1,500 gas</td>
                <td style={tdStyle}>Cost basis (no tax yet)</td>
                <td style={tdStyle}>N/A</td>
                <td style={tdStyle}>Tracked in records</td>
              </tr>
              <tr>
                <td style={tdStyle}>Swap NFT worth $20K for NFT worth $24K</td>
                <td style={tdStyle}>Capital gain on difference</td>
                <td style={tdStyle}>28% (long-term) or higher (short-term)</td>
                <td style={tdStyle}>Form 8949, Sch. D</td>
              </tr>
              <tr style={{ background: '#0d1117' }}>
                <td style={tdStyle}>Donate NFT worth $100K to charity</td>
                <td style={tdStyle}>Charitable deduction + no capital gain tax</td>
                <td style={tdStyle}>Deduction value: $100K</td>
                <td style={tdStyle}>Form 8283, qualified appraisal</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="wash-sales" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>8. Wash Sales, Losses & Loss Harvesting</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            The wash sale rule (IRC Section 1091) was designed for securities to prevent tax-loss harvesting. Historically, the IRS did not apply it to crypto. However, recent tax guidance and practitioner debate suggest the rule may apply to NFTs, especially if classified as securities or partnership interests. The rule: if you sell a security at a loss and buy a "substantially identical" security within 30 days before or after, the loss is disallowed and added to the new position&apos;s basis, deferring the loss.
          </p>
          <h3 style={h3Style}>Wash Sale Risk with NFTs</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Scenario: You buy Doodle #4521 for $50,000, it drops to $30,000. You sell for a $20,000 loss on December 15, 2025. You then buy Doodle #5822 on January 5, 2026 (within 30 days), for $35,000. If the IRS applies wash sale rules, your $20,000 loss is disallowed, and your new Doodle&apos;s cost basis becomes $55,000 (the $35,000 purchase price plus the disallowed loss). You&apos;ve deferred the loss to a future sale.
          </p>
          <h3 style={h3Style}>Loss Harvesting Strategies</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            To safely harvest losses: sell the losing NFT, wait 30+ days, then purchase a different NFT (different collection, different attributes). This avoids "substantially identical" classification. Example: sell a failing Pudgy Penguin at a loss, wait 35 days, buy a Cool Cat instead. The loss is recognized. Some traders use this to offset gains from successful NFT trades, lowering net taxable income. Document your purchases and sales with dates to substantiate timing if audited.
          </p>
        </section>

        <section id="charitable-donations" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>9. Charitable NFT Donations & Valuations</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Donating an appreciated NFT to a qualified charity is a powerful tax move. You avoid capital gains tax on the appreciation and receive a charitable deduction equal to the NFT&apos;s fair market value. If you bought an NFT for $10,000 and it&apos;s now worth $100,000, donating it saves you $25,200 in capital gains tax (28% rate) plus gives you a $100,000 charitable deduction.
          </p>
          <h3 style={h3Style}>Qualified Charities & Documentation</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Only donations to qualified charitable organizations (501(c)(3), religious organizations, public charities) are deductible. The charity must accept NFTs (many now do: museums, universities, environmental nonprofits). For donations over $5,000, you must obtain a qualified independent appraisal by a certified appraiser. The appraisal establishes the FMV used for the deduction, substantiating your deduction if audited. Appraisals typically cost $500-2,000.
          </p>
          <h3 style={h3Style}>Deduction Limitations</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Charitable deductions are limited to 50% of adjusted gross income (AGI) for cash and 30% for appreciated capital assets. If your AGI is $200,000, your charitable deduction for an NFT is limited to $60,000 (30% of AGI). Excess deductions carry forward 5 years. Document the donation with the charity&apos;s written acknowledgment (Form 8283) and the qualified appraisal.
          </p>
        </section>

        <section id="reporting" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>10. IRS Reporting & Record Keeping</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            NFT transactions are reported on Form 8949 (Sales of Capital Assets) and Schedule D (Capital Gains and Losses). Include: acquisition date, date sold, cost basis (purchase + gas), sale price, gain or loss. For creator royalties, report on Schedule C (Profit/Loss from Business) and Schedule SE (Self-Employment Tax). Keep blockchain records (Etherscan transaction hashes, wallet addresses) and trading platform data (OpenSea, Magic Eden export CSVs) for at least 7 years.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>IRS Audit Risk on NFTs</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              The IRS is increasingly scrutinizing crypto and NFT reporting, especially high-volume traders. If you report $500,000+ in NFT sales annually, expect possible audit requests for substantiation. Use professional tax software (CoinTracker, Koinly) to auto-generate reports, maintain detailed records, and consider engaging a crypto tax CPA. Underreporting NFT gains and royalties is fraud, with penalties of 75% plus interest if discovered.
            </p>
          </div>
        </section>

        <section id="faq" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Are NFTs taxed as collectibles or capital assets?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              The IRS treats NFTs as collectibles, not securities. This means gains on NFT sales are taxed at the collectibles rate: 28% for long-term gains (held over 1 year) instead of the standard 20% capital gains rate. Short-term gains (held under 1 year) are taxed as ordinary income up to 37%. However, functional NFTs (membership tokens, tickets) may be taxed differently. The collectibles classification is more punitive than stock gains, making holding period critical for tax planning.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How are NFT creator royalties taxed?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              Creator royalties from NFT sales (secondary market) are taxed as ordinary income at your marginal tax rate, not as capital gains. If you earn $50,000 in annual royalties from platforms like Magic Eden or OpenSea, that income is taxable at rates up to 37% (federal) plus state and self-employment taxes. You can deduct ordinary business expenses (marketing, gas fees, software). Royalties must be reported on Form 1040 Schedule 1 as self-employment income.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Is minting an NFT a taxable event?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              Minting itself is not a taxable event. However, if you paid gas fees in ETH to mint (for example, $200 in ETH), those gas fees become part of your cost basis for the NFT. The taxable event occurs when you sell the NFT. If you minted an NFT for $200 gas + $0 initial cost and sold it for $5,000, your capital gain is $4,800. The gas fees you paid are recouped from the sale proceeds. Keep detailed records of all gas spending during minting.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How are NFT-to-NFT swaps taxed?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              NFT-to-NFT swaps on platforms like Magic Eden, OpenSea, or Sudoswap are taxable events. You must recognize the fair market value (FMV) of both NFTs at the time of swap. If you trade an NFT worth $10,000 for an NFT worth $12,000, you have a $2,000 capital gain. If there&apos;s a price difference and you receive ETH to balance, that ETH is separate income. Each swap is reported as a sale followed by a purchase, establishing separate cost bases for tax purposes.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Can I claim gas fees as tax deductions?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              Gas fees paid to buy/sell/mint NFTs are capitalized into the cost basis, not deducted as separate expenses. If you paid $200 in gas to buy an NFT for $5,000, your total cost basis is $5,200. If you later sell that NFT for $8,000, your gain is $2,800. However, as a business/trader, you can deduct indirect costs: software subscriptions, hardware, office space used for NFT analysis. Keep records of all gas spending in ETH/USD terms.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How do wash sale rules apply to NFTs?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              The wash sale rule (IRS Code Section 1091) prevents tax-loss harvesting within 30 days. Historically, it applied to securities only, not crypto. However, the IRS and many tax professionals argue it may apply to NFTs, especially if classified as "partnership interests" or "securities." To be safe, don&apos;t sell an NFT at a loss and buy a "substantially identical" NFT within 30 days before/after. If you do and the IRS challenges, disallowed losses are added to the new NFT&apos;s basis, deferring the deduction.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and does not constitute tax advice. Consult a qualified tax professional (CPA, EA, or tax attorney) before making tax decisions. NFT tax treatment is evolving; the IRS may issue new guidance affecting how NFTs are taxed. Failure to report NFT transactions accurately can result in substantial penalties, interest, and potential prosecution for tax evasion.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/investing/best-depin-tokens-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Depin Tokens</Link></li>
            <li><Link href="/investing/best-gaming-crypto-tokens" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Gaming Crypto Tokens</Link></li>
            <li><Link href="/investing/best-infrastructure-crypto-tokens" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Infrastructure Crypto Tokens</Link></li>
            <li><Link href="/investing/best-layer-2-tokens-to-invest" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Layer 2 Tokens To Invest</Link></li>
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
