import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Crypto Airdrop Tax Treatment 2026: Ordinary Income, Cost",
  description: "Complete crypto airdrop tax guide 2026: ordinary income at FMV receipt, cost basis establishment, Uniswap UNI airdrop example, hard fork IRS Rev. Rul.,",
  keywords: ['airdrop taxes', 'crypto airdrop tax', 'ordinary income', 'IRS airdrop', 'Uniswap UNI tax', 'hard fork tax', 'cost basis airdrop'],
  openGraph: {
    type: 'article',
    title: 'Crypto Airdrop Tax Treatment 2026: Ordinary Income, Cost Basis & Reporting',
    description: 'Airdrop tax guide: ordinary income at FMV receipt, hard fork treatment, Uniswap UNI example, unclaimed airdrops, Form 1040 reporting.',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/taxes/crypto-airdrop-tax-treatment',
    images: [{
      url: 'https://degen0x.com/og-taxes.svg',
      width: 1200,
      height: 630,
      alt: 'Crypto Airdrop Tax Treatment 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Airdrop Tax Treatment 2026: Ordinary Income, Cost Basis & Reporting',
    description: 'Airdrop taxes: ordinary income at FMV, Uniswap UNI airdrop example, hard fork IRS ruling, cost basis tracking.',
    image: 'https://degen0x.com/og-taxes.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/taxes/crypto-airdrop-tax-treatment',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Crypto Airdrop Tax Treatment 2026: Ordinary Income, Cost Basis & Reporting',
  description: 'Complete guide to crypto airdrop taxation: ordinary income at FMV at receipt, hard fork treatment (IRS Rev. Rul. 2019-24), Uniswap UNI airdrop example, unclaimed airdrops, cost basis establishment, Form 1040 reporting.',
  image: 'https://degen0x.com/og-taxes.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are airdrops taxable as ordinary income?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The IRS treats airdrops as ordinary income at fair market value (FMV) on the date of receipt. There is no "small airdrop exemption"—even $1 of airdropped tokens creates ordinary income. Uniswap airdropped 400 UNI (~$1,200 in September 2020) to early users; all recipients had $1,200 ordinary income in 2020. When they later sold UNI, they recognized capital gains based on the sale price minus the $1,200 basis. The IRS has not explicitly ruled on airdrops but treats them analogously to other compensatory rewards: taxable upon receipt.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I establish cost basis for airdropped tokens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cost basis for airdropped tokens is the fair market value (FMV) on the date of receipt. If you received 100 tokens worth $5 each ($500 total), your basis is $500. When you sell those 100 tokens for $800, you recognize a $300 capital gain ($800 sale price minus $500 basis). For FMV determination, use the price from major exchanges (Coinbase, Kraken, Binance) at the date/time of receipt. Document the receipt date and FMV with screenshots for IRS substantiation if audited. For obscure airdrops without clear pricing, you may need a qualified appraisal.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the IRS hard fork ruling (Rev. Rul. 2019-24)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'IRS Rev. Rul. 2019-24 (April 2019) provides guidance on hard forks. New coins received from a hard fork (e.g., Bitcoin Cash from Bitcoin, Ethereum Classic from Ethereum) are not taxable income if you held the original asset and received the new coin passively. However, if you sold the original asset or had no interest in the new coin, passive receipt still triggers income. The ruling: new coins from hard forks create ordinary income at FMV on the date of fork/receipt, not taxable gain on the original asset. Most hard forks are treated as airdrop events: ordinary income at FMV.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are unclaimed airdrops taxable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unclaimed airdrops are not taxable because you have no constructive receipt or control. To be taxable, you must have "constructive receipt"—the right to claim the airdrop and direct its use. If you never claim an airdrop (let it expire), no income is recognized. However, once you claim and receive airdropped tokens, they become taxable at FMV on the claim date. The distinction: unclaimed = no tax; claimed = ordinary income at FMV on claim date.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I report airdrops on my tax return?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Report airdropped tokens as ordinary income on Form 1040, Schedule 1, line 1 (Other Income). Include the date, airdrop name, token amount, and FMV on receipt date. Example: "Uniswap UNI airdrop (Sept 17, 2020): 400 UNI @ $3 = $1,200." If you have many airdrops, aggregate the total ordinary income. When you later sell airdropped tokens, report the capital gain/loss on Form 8949 and Schedule D. Keep detailed records (blockchain receipt, FMV documentation) for at least 7 years.',
        },
      },
      {
        '@type': 'Question',
        name: 'How should I handle foreign airdrops?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Foreign airdrops (airdrops from non-U.S. protocols or exchanges) are subject to the same U.S. tax rules: ordinary income at FMV on receipt. FATCA (Foreign Account Tax Compliance Act) requires U.S. citizens to report foreign crypto accounts over $10,000. If you claim an airdrop to a foreign exchange wallet, that wallet may trigger FBAR (FinCEN Form 114) reporting requirements if the aggregate balance exceeds $10,000. Report airdropped income the same way as domestic airdrops, but ensure compliance with FBAR/FATCA if using foreign wallets.',
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #fb7185, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#fb7185', borderBottom: '2px solid #4c1d2a', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


export default function CryptoAirdropTaxTreatment() {
  const tableOfContents = [
    { id: 'airdrop-taxability', title: 'Are Airdrops Taxable?' },
    { id: 'ordinary-income', title: 'Airdrop Taxation as Ordinary Income' },
    { id: 'cost-basis', title: 'Establishing Cost Basis for Airdropped Tokens' },
    { id: 'fmv-determination', title: 'Fair Market Value Determination at Receipt' },
    { id: 'hard-fork-ruling', title: 'Hard Fork Treatment & IRS Rev. Rul. 2019-24' },
    { id: 'hard-fork-examples', title: 'Hard Fork Examples: Bitcoin Cash, Ethereum Classic' },
    { id: 'unclaimed-airdrops', title: 'Unclaimed Airdrops & Tax Consequences' },
    { id: 'airdrop-types', title: 'Airdrop Types & Taxability Comparison Table' },
    { id: 'reporting-requirements', title: 'IRS Reporting & Form 1040 Schedule 1' },
    { id: 'common-errors', title: 'Common Reporting Errors & Audit Risks' },
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
          <span style={{ color: '#c9d1d9' }}>Crypto Airdrop Tax Treatment</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#64748b', color: '#fff' }}>Taxes</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          <h1 style={h1Style}>Crypto Airdrop Tax Treatment 2026</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Crypto airdrops—free tokens distributed to holders or early users—are common but heavily misunderstood. The IRS treats airdrops as ordinary income at fair market value on the date of receipt. Uniswap&apos;s famous 400 UNI airdrop (September 2020) created $1,200 of ordinary income for each recipient, taxable immediately. Hard forks (Bitcoin Cash, Ethereum Classic) follow the same rule under IRS Rev. Rul. 2019-24. Many airdrop recipients fail to report them, creating audit risk. This comprehensive guide covers airdrop taxability, cost basis establishment, hard fork treatment, unclaimed airdrops, and Form 1040 reporting requirements for complete compliance.
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

        <section id="airdrop-taxability" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>1. Are Airdrops Taxable?</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Yes. The IRS treats cryptocurrency airdrops as taxable income. This applies to all airdrops, regardless of size or whether you requested it. An airdrop is similar to finding money—it&apos;s income. The IRS has not issued explicit airdrop guidance, but Treasury guidance on "other income" (IRC Section 61) and the precedent from Rev. Rul. 2019-24 (hard forks) establish that airdrops are ordinary income at fair market value on the date of receipt.
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
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            There is no "small airdrop exemption." Even $1 of airdropped tokens creates ordinary income. Some crypto taxpayers ignore small airdrops (under $1,000) thinking they&apos;re negligible, but this violates tax law. The IRS is increasingly sophisticated in cross-referencing blockchain data to wallet addresses, matching airdrop distributions to tax returns. Failing to report airdrops is a common audit trigger.
          </p>
        </section>

        <section id="ordinary-income" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>2. Airdrop Taxation as Ordinary Income</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Airdropped tokens are taxed as ordinary income at the fair market value (FMV) on the date of receipt. This is not a capital gain—it&apos;s treated like wages or prize income, taxed at your marginal tax rate (up to 37% federal plus state/NIIT). Ordinary income tax is higher than long-term capital gains (28% for collectibles, 20% for stocks) because it applies to the full amount immediately upon receipt.
          </p>
          <h3 style={h3Style}>Uniswap UNI Airdrop Example</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            September 17, 2020: Uniswap distributed 400 UNI per early user. UNI traded at $3 that day, making the airdrop worth $1,200. Recipient has $1,200 ordinary income recognized on September 17, 2020 (tax year 2020). If the recipient is in the 37% federal bracket, the tax liability is $444 (just for federal income tax). Add state taxes (up to 13% in California), NIIT (3.8%), and the total tax approaches $630+ on a "free" airdrop.
          </p>
          <h3 style={h3Style}>Later Sale Creates Additional Capital Gain</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            If the UNI airdrop recipient held the tokens until December 2025 (over 1 year) and sold for $40 per token ($16,000 total), they recognize a capital gain: $16,000 sale price minus $1,200 basis = $14,800 capital gain. This is taxed at 28% (collectibles rate for long-term gains) = $4,140 tax. Two separate tax events: $444 (ordinary income in 2020) + $4,140 (capital gain in 2025) = $4,584 total federal tax on a $16,000 gain.
          </p>
        </section>

        <section id="cost-basis" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>3. Establishing Cost Basis for Airdropped Tokens</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            The cost basis for airdropped tokens is the fair market value (FMV) on the date of receipt. This is the starting point for calculating capital gains/losses when you sell. If you received 100 tokens worth $10 each ($1,000 total), your cost basis is $1,000. When you sell those 100 tokens for $2,000, your capital gain is $1,000 (sale price minus basis).
          </p>
          <h3 style={h3Style}>FMV Documentation</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Document the FMV on receipt date by capturing exchange prices from major platforms (Coinbase, Kraken, Binance). For airdrops without clear pricing, use the average price across top exchanges. For obscure or thinly traded tokens, you may need a qualified appraisal ($500-$1,500) to substantiate FMV if audited. Keep screenshots of exchange prices with timestamps for audit defensibility.
          </p>
          <h3 style={h3Style}>Multiple Airdrop Receipts</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            If you receive the same token via multiple airdrops on different dates, track each airdrop separately with its FMV and receipt date. When you sell, use FIFO (first-in-first-out) or specific identification to determine which airdrop batch you&apos;re selling and calculate basis correctly. Maintain detailed airdrop records with blockchain receipt confirmation.
          </p>
        </section>

        <section id="fmv-determination" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>4. Fair Market Value Determination at Receipt</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            FMV is the price at which property changes hands between a willing buyer and seller in an open market. For airdropped crypto, use the price from major exchanges on the receipt date. If an airdrop lands on a date when the token hasn&apos;t traded yet, use the price from the first trading day after receipt.
          </p>
          <h3 style={h3Style}>Exchange Price Priority</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Prioritize prices from major exchanges: Coinbase, Kraken, Gemini, Bitstamp, Binance (for tokens on these exchanges). For altcoins only trading on smaller exchanges (Uniswap, DEXs), use the average price across top DEXes on the receipt date. Document your source and methodology for IRS defensibility.
          </p>
          <h3 style={h3Style}>Timing of Receipt</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            For airdrops, "receipt" typically means the date tokens are credited to your wallet. For claimed airdrops (require manual claiming), the date you claim and receive control. For hard forks, the date of the fork itself. Document receipt dates with blockchain evidence (transaction hash, block number, wallet address) for audit substantiation.
          </p>
        </section>

        <section id="hard-fork-ruling" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>5. Hard Fork Treatment & IRS Rev. Rul. 2019-24</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            IRS Rev. Rul. 2019-24 (April 2019) provides specific guidance on hard forks. A hard fork creates new cryptocurrency from an existing blockchain (e.g., Bitcoin Cash from Bitcoin, Ethereum Classic from Ethereum). The ruling: new coins received from a hard fork are ordinary income at FMV on the date of the fork. Importantly, this does NOT create a taxable event on the original asset. You don&apos;t recognize gain/loss on the original Bitcoin if you receive Bitcoin Cash from a fork.
          </p>
          <h3 style={h3Style}>Hard Fork Income Recognition</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            If you held 1 BTC before a hard fork creating a new coin, and the new coin is worth $500, you have $500 ordinary income. This applies whether the hard fork is an airdrop (tokens created automatically) or requires claiming (you must take action). The IRS position: passive receipt of hard fork coins = ordinary income at FMV; no action required to trigger tax.
          </p>
          <h3 style={h3Style}>Original Asset Basis Unchanged</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            The cost basis of your original asset (e.g., Bitcoin) is unchanged by a hard fork. If you bought 1 BTC for $10,000 and receive Bitcoin Cash from a fork, your BTC basis remains $10,000; you simply add $500 (or whatever the new coin is worth) as ordinary income. When you sell the BTC later, you calculate gain/loss based on the original $10,000 basis.
          </p>
        </section>

        <section id="hard-fork-examples" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>6. Hard Fork Examples: Bitcoin Cash, Ethereum Classic</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Bitcoin Cash (August 2017): Bitcoin hard fork creating BCH. Holders of BTC received approximately 1 BCH per BTC held. BCH traded at $500+ initially. BTC holders had ordinary income equal to their BCH amount × FMV on fork date. A holder with 100 BTC received ~100 BCH ($50,000+ income). Ethereum Classic (July 2016): DAO hard fork following the hack. ETH holders received ETC. The treatment under Rev. Rul. 2019-24: ordinary income at FMV on fork date.
          </p>
          <h3 style={h3Style}>Claiming vs Automatic Receipt</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Some hard forks (Bitcoin Cash) are automatic—if you held BTC, you received BCH. Others (Ethereum Classic) required claiming or using compatible wallets. The tax rule is the same: ordinary income at FMV on fork date, regardless of whether claiming is required. If you never claimed the new coin (never accessed it), you still had income on the fork date; the income isn&apos;t deferred until you claim.
          </p>
        </section>

        <section id="unclaimed-airdrops" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>7. Unclaimed Airdrops & Tax Consequences</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Unclaimed airdrops are generally not taxable because you lack "constructive receipt"—the right to claim the airdrop and control its disposition. To be taxable, you must have the ability and right to claim. If an airdrop expires or you never claim it, no income is recognized. However, the moment you claim (and receive the tokens), ordinary income is triggered at FMV on the claim date.
          </p>
          <h3 style={h3Style}>Constructive Receipt Doctrine</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            The IRS applies the "constructive receipt" doctrine: income is taxable when the taxpayer has the right to claim it and has notice it&apos;s available. For most airdrops, this is the date the airdrop is credited to your wallet or made claimable. If you&apos;re not aware an airdrop is available to you (no notice), constructive receipt may be delayed until you become aware. However, ignorance is not a defense—once you discover an airdrop, you should claim it, recognize income, and report on your tax return.
          </p>
          <h3 style={h3Style}>Expired Airdrops</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            If an airdrop offer expires and you never claim it, no income is recognized. You didn&apos;t receive the tokens, so no taxable event occurred. Example: Solana airdrop expires September 2021; if you never claimed, no 2021 tax liability. However, if you claimed it in 2026 (retroactively), you would recognize income in 2026 at the FMV on claim date, not at the original airdrop FMV from 2021.
          </p>
        </section>

        <section id="airdrop-types" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>8. Airdrop Types & Taxability Comparison Table</h2>
          <table style={tableStyle}>
            <thead>
              <tr style={{ background: '#0d1117' }}>
                <th style={thStyle}>Airdrop Type</th>
                <th style={thStyle}>Taxable Event</th>
                <th style={thStyle}>Income Timing</th>
                <th style={thStyle}>Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Token distribution to early users (Uniswap UNI)</td>
                <td style={tdStyle}>Yes, ordinary income</td>
                <td style={tdStyle}>Date received/credited</td>
                <td style={tdStyle}>FMV at receipt date</td>
              </tr>
              <tr style={{ background: '#0d1117' }}>
                <td style={tdStyle}>Hard fork new coins (Bitcoin Cash, ETC)</td>
                <td style={tdStyle}>Yes, ordinary income</td>
                <td style={tdStyle}>Date of hard fork</td>
                <td style={tdStyle}>FMV on fork date</td>
              </tr>
              <tr>
                <td style={tdStyle}>Claimed airdrop (requires action to claim)</td>
                <td style={tdStyle}>Yes, ordinary income</td>
                <td style={tdStyle}>Date claimed (received)</td>
                <td style={tdStyle}>FMV on claim date</td>
              </tr>
              <tr style={{ background: '#0d1117' }}>
                <td style={tdStyle}>Unclaimed/expired airdrop (never claimed)</td>
                <td style={tdStyle}>No (no receipt)</td>
                <td style={tdStyle}>N/A</td>
                <td style={tdStyle}>N/A</td>
              </tr>
              <tr>
                <td style={tdStyle}>DeFi governance token rewards (Uniswap liquidity rewards)</td>
                <td style={tdStyle}>Yes, ordinary income</td>
                <td style={tdStyle}>Each reward block/distribution</td>
                <td style={tdStyle}>FMV on receipt date</td>
              </tr>
              <tr style={{ background: '#0d1117' }}>
                <td style={tdStyle}>Staking rewards (separate from airdrop)</td>
                <td style={tdStyle}>Yes, ordinary income</td>
                <td style={tdStyle}>Date reward credited</td>
                <td style={tdStyle}>FMV at receipt date</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="reporting-requirements" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>9. IRS Reporting & Form 1040 Schedule 1</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Report airdropped tokens as ordinary income on Form 1040, Schedule 1 (Other Income), line 1. Include details: airdrop name, token quantity, FMV on receipt date, and receipt date. If you have multiple airdrops, aggregate the total ordinary income and list on Schedule 1.
          </p>
          <h3 style={h3Style}>Schedule 1 Reporting Example</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Line 1 (Other Income): Uniswap UNI airdrop (Sept 17, 2020): 400 UNI @ $3/token = $1,200. Lido LDO airdrop (May 18, 2021): 150 LDO @ $4/token = $600. Total: $1,800. Report $1,800 on Schedule 1 for the tax year airdrops were received.
          </p>
          <h3 style={h3Style}>Capital Gains Reporting at Sale</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            When you sell airdropped tokens, report capital gains on Form 8949 and Schedule D. Include: acquisition date (airdrop receipt), date sold, FMV at receipt (cost basis), sale price, and gain/loss. Example: Sold 400 UNI (acquired Sept 17, 2020 @ $1,200 basis) for $8,000 on Dec 1, 2024. Gain: $6,800. Report long-term capital gain (held over 1 year) on Schedule D.
          </p>
        </section>

        <section id="common-errors" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>10. Common Reporting Errors & Audit Risks</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Errors: (1) Not reporting airdrops at all—thinking they&apos;re "free" or too small. (2) Reporting airdrops as capital gains instead of ordinary income. (3) Using incorrect FMV (too low) to minimize income. (4) Failing to track basis, causing gains to be miscalculated. (5) Not reporting hard fork coins as income.
          </p>
          <h3 style={h3Style}>Audit Risk Scenarios</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            The IRS cross-references blockchain transaction data (Uniswap airdrop contracts, hard fork events) to wallet addresses and matches to tax returns. If you received a Uniswap UNI airdrop and failed to report $1,200 income, the IRS can identify you via blockchain analysis. Failure to report triggers: audit, tax assessment, 20% accuracy penalty (40% for substantial underreporting), and interest dating back to the original due date. Reporting accurately—even if you didn&apos;t know about a small airdrop—provides IRS defensibility.
          </p>
        </section>

        <section id="faq" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Are airdrops taxable as ordinary income?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              Yes. The IRS treats airdrops as ordinary income at fair market value (FMV) on the date of receipt. There is no "small airdrop exemption"—even $1 of airdropped tokens creates ordinary income. Uniswap airdropped 400 UNI (~$1,200 in September 2020) to early users; all recipients had $1,200 ordinary income in 2020. When they later sold UNI, they recognized capital gains based on the sale price minus the $1,200 basis. The IRS has not explicitly ruled on airdrops but treats them analogously to other compensatory rewards: taxable upon receipt.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How do I establish cost basis for airdropped tokens?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              Cost basis for airdropped tokens is the fair market value (FMV) on the date of receipt. If you received 100 tokens worth $5 each ($500 total), your basis is $500. When you sell those 100 tokens for $800, you recognize a $300 capital gain ($800 sale price minus $500 basis). For FMV determination, use the price from major exchanges (Coinbase, Kraken, Binance) at the date/time of receipt. Document the receipt date and FMV with screenshots for IRS substantiation if audited. For obscure airdrops without clear pricing, you may need a qualified appraisal.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is the IRS hard fork ruling (Rev. Rul. 2019-24)?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              IRS Rev. Rul. 2019-24 (April 2019) provides guidance on hard forks. New coins received from a hard fork (e.g., Bitcoin Cash from Bitcoin, Ethereum Classic from Ethereum) are not taxable income if you held the original asset and received the new coin passively. However, if you sold the original asset or had no interest in the new coin, passive receipt still triggers income. The ruling: new coins from hard forks create ordinary income at FMV on the date of fork/receipt, not taxable gain on the original asset. Most hard forks are treated as airdrop events: ordinary income at FMV.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Are unclaimed airdrops taxable?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              Unclaimed airdrops are not taxable because you have no constructive receipt or control. To be taxable, you must have "constructive receipt"—the right to claim the airdrop and direct its use. If you never claim an airdrop (let it expire), no income is recognized. However, once you claim and receive airdropped tokens, they become taxable at FMV on the claim date. The distinction: unclaimed = no tax; claimed = ordinary income at FMV on claim date.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How do I report airdrops on my tax return?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              Report airdropped tokens as ordinary income on Form 1040, Schedule 1, line 1 (Other Income). Include the date, airdrop name, token amount, and FMV on receipt date. Example: "Uniswap UNI airdrop (Sept 17, 2020): 400 UNI @ $3 = $1,200." If you have many airdrops, aggregate the total ordinary income. When you later sell airdropped tokens, report the capital gain/loss on Form 8949 and Schedule D. Keep detailed records (blockchain receipt, FMV documentation) for at least 7 years.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How should I handle foreign airdrops?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              Foreign airdrops (airdrops from non-U.S. protocols or exchanges) are subject to the same U.S. tax rules: ordinary income at FMV on receipt. FATCA (Foreign Account Tax Compliance Act) requires U.S. citizens to report foreign crypto accounts over $10,000. If you claim an airdrop to a foreign exchange wallet, that wallet may trigger FBAR (FinCEN Form 114) reporting requirements if the aggregate balance exceeds $10,000. Report airdropped income the same way as domestic airdrops, but ensure compliance with FBAR/FATCA if using foreign wallets.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and does not constitute tax advice. The IRS continues to develop guidance on airdrop taxation; rules may change. Consult a qualified tax professional (CPA, EA, tax attorney) before claiming airdrop income or making filing decisions. Failure to report airdrops accurately can result in penalties, interest, audit assessments, and potential fraud charges if underreporting is substantial.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/investing/best-ai-crypto-projects-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Ai Crypto Projects</Link></li>
            <li><Link href="/investing/best-altcoins-to-buy-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Altcoins To Buy</Link></li>
            <li><Link href="/investing/best-crypto-savings-accounts-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Crypto Savings Accounts</Link></li>
            <li><Link href="/investing/best-crypto-to-invest-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Crypto To Invest</Link></li>
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
