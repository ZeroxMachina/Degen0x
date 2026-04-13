import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Wash Sale Rule & Crypto 2026: Current Status, Risks &",
  description: "Complete guide to wash sale rules for crypto in 2026. Learn why crypto currently avoids wash sales, proposed legislation risks, and tax-loss harvesting",
  keywords: ['wash sale rule crypto', 'crypto tax loss harvesting', 'wash sale exemption', 'tax loss harvesting crypto', 'crypto wash sale legislation'],
  openGraph: {
    title: 'Wash Sale Rule & Crypto 2026: Current Status & Tax-Loss Harvesting',
    description: 'Understand crypto wash sale exemption, future legislation risks, and how to maximize tax-loss harvesting strategies.',
    url: 'https://degen0x.com/taxes/wash-sale-rule-crypto-explained',
    type: 'article',
    images: [{ url: 'https://degen0x.com/og-taxes.svg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wash Sale Rules for Crypto 2026',
    description: 'Exploit tax-loss harvesting advantage while crypto wash sale exemption lasts.',
  },
  alternates: {
    canonical: 'https://degen0x.com/taxes/wash-sale-rule-crypto-explained',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wash Sale Rule & Crypto 2026: Current Status, Risks & Tax-Loss Harvesting',
  description: 'Comprehensive guide to wash sale rules for cryptocurrency, including current exemption status, proposed legislation, and tax-loss harvesting techniques.',
  image: 'https://degen0x.com/og-taxes.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do wash sale rules currently apply to cryptocurrency in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As of 2026, wash sale rules do NOT apply to cryptocurrency according to the IRS. The wash sale rule only applies to stocks, bonds, and other securities under Section 1091. Crypto assets are not classified as securities for wash sale purposes, allowing crypto traders to harvest losses and immediately repurchase the same asset without losing the tax deduction.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the substantially identical property debate for crypto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The substantially identical property debate centers on whether buying slightly different crypto assets (e.g., Bitcoin from different exchanges, WBTC vs native BTC) triggers wash sale concerns if proposed legislation passes. Currently, tax pros argue different coin pairs are distinct. However, Congress may clarify that "substantially identical" means same token type regardless of wrapper or source, closing future wash sale loopholes.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the 30-day wash sale window for crypto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The traditional wash sale rule has a 30-day window: you cannot buy substantially identical securities within 30 days before or after a loss sale (60 days total). Even though this doesn\'t apply to crypto now, proposed legislation would impose it. If you sell Bitcoin at a loss on April 10, you couldn\'t buy Bitcoin from April -20 to May 10 under future rules. Tax-loss harvest Bitcoin now by replacing it with Ethereum within the 30-day window.',
        },
      },
      {
        '@type': 'Question',
        name: 'What proposed legislation threatens the crypto wash sale exemption?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Multiple Congressional proposals (Build Back Better, TCJA extensions) aim to extend wash sale rules to cryptocurrency. The Fair Tax Reporting Act and other proposals from 2021-2024 would explicitly classify crypto transactions under wash sale rules with a 30-day window. Although no legislation has passed yet, the IRS could clarify enforcement at any time, making the exemption timeline uncertain. Savvy traders are accelerating tax-loss harvesting now.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I execute tax-loss harvesting in crypto before wash sales apply?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sell your underwater crypto positions (Bitcoin at a loss) to realize capital losses on your tax return. Immediately purchase a different asset (Ethereum, Polygon, etc.) to maintain exposure. The different asset avoids any potential wash sale issues. Repeat quarterly as needed. Document all trades for tax reporting (Form 8949, Schedule D). By doing this now, you lock in loss deductions before legislation closes the loophole.',
        },
      },
      {
        '@type': 'Question',
        name: 'What penalties apply if wash sale rules suddenly apply to crypto I harvested?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If Congress enacts wash sale rules for crypto retroactively, the IRS would likely issue guidance for taxpayers to amend returns. The statute of limitations is 3 years for normal cases, 6 years for substantial underreporting. If you harvested losses in 2024-2025 before rules changed, a retroactive application might require amended returns disallowing those deductions, plus penalties of 20% (accuracy-related) if deemed negligent.',
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #fb7185, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#fb7185', borderBottom: '2px solid #4c1d2a', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Taxes', item: 'https://degen0x.com/taxes' },
    { '@type': 'ListItem', position: 3, name: 'Wash Sale Rule Crypto Explained', },
  ],
};

export default function WashSaleRuleCryptoExplained() {
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

  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d', borderLeft: '3px solid #fb7185', borderLeft: '3px solid #fb7185',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
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
    { id: 'current-status', title: 'Current Status: Crypto & Wash Sales in 2026' },
    { id: 'wash-sale-definition', title: 'What is the Wash Sale Rule?' },
    { id: 'substantially-identical', title: 'Substantially Identical Property Debate' },
    { id: 'proposed-legislation', title: 'Proposed Legislation & Timeline' },
    { id: 'tax-loss-harvesting', title: 'Tax-Loss Harvesting Strategies' },
    { id: 'risk-mitigation', title: 'Risk Mitigation Before Rules Change' },
    { id: 'compliance-table', title: 'Asset Type Wash Sale Status' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/taxes" style={{ color: '#8b949e', textDecoration: 'none' }}>Taxes</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Wash Sale Rule & Crypto</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#64748b', color: '#fff' }}>Taxes</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Intermediate</span>
          <h1 style={h1Style}>Wash Sale Rule & Crypto 2026: Current Status, Risks & Tax-Loss Harvesting</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Understand the current exemption of crypto from wash sale rules, explore proposed legislation threats, master substantially identical property debate, and execute tax-loss harvesting before rules change.
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
          updatedDate="2026-04-12"
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

        <section id="current-status">
          <h2 style={h2Style}>Current Status: Crypto & Wash Sales in 2026</h2>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            As of April 2026, wash sale rules do NOT apply to cryptocurrency according to the IRS. The wash sale rule (Section 1091 of the Internal Revenue Code) only applies to stocks, bonds, and "other securities." The IRS has consistently held that crypto assets are not "securities" for wash sale purposes, creating a massive tax arbitrage opportunity unavailable to traditional securities investors.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a0d14', border: '1px solid #4c1d2a', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📋</span>
            <strong style={{ color: '#fb7185', fontSize: 15 }}>Tax Reality Check</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Every jurisdiction has different rules, and they're changing fast. We note when guidance is US-specific vs. internationally applicable.
          </p>
        </div>
          <div style={infoBoxStyle}>
            <strong>Tax Arbitrage Opportunity:</strong> A stock investor who sells Apple shares at a $50,000 loss and repurchases within 30 days loses the deduction. A crypto investor who sells Bitcoin at a $50,000 loss and repurchases the same Bitcoin within one day still claims the full deduction. This exemption is expected to close, making current tax-loss harvesting urgently valuable.
          </div>
          <h3 style={h3Style}>Why Crypto Escaped Wash Sale Classification</h3>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Crypto regulation evolved independently from securities law. The IRS classifies Bitcoin, Ethereum, and most tokens as property or commodities, not securities (unless they&apos;re tokenized securities like stock tokens). The wash sale rule only applies under IRC Section 1091, which explicitly references "stocks or securities in any corporation, or any interest which includes a right to acquire or sell any such stock or securities." Crypto fell outside this definition.
          </p>
          <h3 style={h3Style}>Timeline of Regulatory Uncertainty</h3>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Congressional efforts to extend wash sales to crypto began in 2021 with the Build Back Better Act. The Fair Tax Reporting Act (2022-2024) proposed explicit extension to digital assets. Although no legislation passed by April 2026, the IRS could issue guidance classifying crypto as "substantially identical" to traditional securities for wash sale purposes at any time. Expect change by 2027.
          </p>
        </section>

        <section id="wash-sale-definition">
          <h2 style={h2Style}>What is the Wash Sale Rule?</h2>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            The wash sale rule prevents investors from realizing a capital loss while maintaining substantially identical investment exposure. Under Section 1091, if you sell a security at a loss, you cannot buy the same or substantially identical security within 30 days before or after the sale (61-day window). If you do, the loss deduction is disallowed and added to your cost basis of the replacement security.
          </p>
          <h3 style={h3Style}>How Wash Sales Work (Stock Example)</h3>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            You buy Apple stock for $10,000. It declines to $6,000 by December. You sell on December 15 and claim a $4,000 loss. On December 18, you buy Apple stock again at $6,500. The IRS disallows your $4,000 loss deduction. Your new cost basis becomes $10,500 ($6,500 purchase + $4,000 disallowed loss). When you sell that Apple position later for $11,000, you report only a $500 gain instead of the rightful $4,500 gain.
          </p>
          <h3 style={h3Style}>Purpose: Preventing Tax Gaming</h3>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            The rule exists to prevent investors from "harvesting" losses for tax benefits while maintaining exposure to an asset. Without the rule, every December investors would sell losing positions to realize deductions, immediately repurchase, and get a free tax deduction on unchanged exposure. The rule forces a 30-day holding period in "substantially different" assets to prove economic motivation.
          </p>
        </section>

        <section id="substantially-identical">
          <h2 style={h2Style}>Substantially Identical Property Debate</h2>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            The IRS hasn&apos;t definitively ruled whether different Bitcoin sources (exchange A vs exchange B), different token wrappers (WBTC vs native BTC), or adjacent assets (Bitcoin vs Bitcoin Cash) are "substantially identical" for crypto. This ambiguity creates planning opportunities but also compliance risks if legislation clarifies the standard.
          </p>
          <h3 style={h3Style}>Current Interpretations</h3>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Conservative tax practitioners argue that Bitcoin held on Coinbase and Bitcoin held on Kraken are substantially identical, so selling one and buying the other within 30 days could trigger future wash sale issues if rules apply retroactively. More aggressive practitioners argue different wallet locations, different custody models, or different blockchain implementations (Layer 2 Bitcoin vs mainnet Bitcoin) create sufficient distinction to avoid wash sales.
          </p>
          <h3 style={h3Style}>Wrapped Token Risk</h3>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Selling Bitcoin-collateralized WBTC at a loss and immediately buying native Bitcoin (or vice versa) presents maximum risk. Both represent identical economic exposure to Bitcoin price movements. If wash sale rules are extended and IRS guidance defines "substantially identical" broadly, this strategy could be challenged. Even more conservative is selling Bitcoin entirely and replacing with Ethereum—a completely different asset class eliminates any wash sale concern.
          </p>
          <div style={infoBoxStyle}>
            <strong>Strategy:</strong> Execute tax-loss harvesting by swapping into genuinely different assets. Sell Bitcoin at a loss, buy Ethereum instead. Sell Ethereum, buy Solana. These are distinct assets with different fundamentals, eliminating substantially identical arguments entirely. You maintain diversified crypto exposure while safely harvesting losses.
          </div>
        </section>

        <section id="proposed-legislation">
          <h2 style={h2Style}>Proposed Legislation & Timeline</h2>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Multiple Congressional proposals specifically target crypto wash sale exemptions. The Build Back Better Act (2021, failed), the Fair Tax Reporting Act (2022-2024, pending), and TCJA extension proposals have all included provisions extending wash sale rules to "digital assets" or "virtual currencies."
          </p>
          <h3 style={h3Style}>Build Back Better (Stalled 2021)</h3>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            The original Build Back Better Act proposed extending wash sale rules to all property, including digital assets, with a 30-day window. This failed in the Senate. However, it demonstrated Congressional intent to close the crypto loophole. Future legislation is likely to focus specifically on cryptocurrency rather than all property.
          </p>
          <h3 style={h3Style}>Fair Tax Reporting Act (2022-ongoing)</h3>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            This proposal explicitly extends wash sale rules to "digital assets" including cryptocurrency. It defines substantially identical to include different exchanges or custody models of the same token. The bill has bipartisan support from both revenue-seeking Democrats and crypto regulation hawks, increasing the likelihood of passage in 2026-2027 Congressional sessions.
          </p>
          <h3 style={h3Style}>Expected Timeline</h3>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Consensus among tax professionals is that wash sale rules will apply to crypto by late 2026 or early 2027. Congress may act before then, or the IRS may issue guidance independently. Either way, the exemption has a limited lifespan. Savvy traders are implementing tax-loss harvesting strategies immediately while the opportunity exists without wash sale constraints.
          </p>
        </section>

        <section id="tax-loss-harvesting">
          <h2 style={h2Style}>Tax-Loss Harvesting Strategies</h2>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Tax-loss harvesting is selling losing investments to realize capital losses, then repurchasing similar (but not substantially identical) assets to maintain exposure. In crypto, this is currently friction-free—you can repurchase the same asset within hours without wash sale consequences.
          </p>
          <h3 style={h3Style}>Core Strategy: Realize Losses, Offset Gains</h3>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Portfolio: Bitcoin worth $100K (purchased at $150K), Ethereum worth $80K (purchased at $50K). Realized gains year-to-date: $200K (from other positions). Harvest loss by selling Bitcoin for $100K, claiming $50K loss. Immediately rebuy Bitcoin for $100K. Net tax effect: $50K loss offsets $50K of your $200K gain, reducing taxable capital gains from $200K to $150K. Save: $150K × 20% LTCG rate = $30K in taxes.
          </p>
          <h3 style={h3Style}>Cross-Asset Harvesting (Conservative Approach)</h3>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Sell Bitcoin at a loss, immediately buy Ethereum. Sell Ethereum at a loss, buy Polygon. This completely eliminates substantially identical arguments. Your loss deductions are airtight—you&apos;re investing in different projects with different fundamentals. If wash sale rules later apply, your diversified swap strategy is defensible.
          </p>
          <h3 style={h3Style}>Portfolio Rotation Strategy</h3>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Rebalance your portfolio quarterly while harvesting losses. January: Sell underwater Bitcoin (realize loss), buy more Ethereum. April: Sell underwater Ethereum, buy Solana. July: Sell underwater Solana, buy Polygon. October: Sell underwater Polygon, buy Bitcoin again. You harvest losses continuously, rotate through different assets for diversification, and maintain overall crypto exposure without concentration risk.
          </p>
          <div style={infoBoxStyle}>
            <strong>Timing Tip:</strong> Execute tax-loss harvesting when markets decline sharply. In bear markets (like 2022), most crypto portfolios have losses available. December is traditionally strong for harvesting before year-end tax deadlines. April-May (pre-summer) is secondary harvesting season.
          </div>
        </section>

        <section id="risk-mitigation">
          <h2 style={h2Style}>Risk Mitigation Before Rules Change</h2>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Sophisticated investors are accelerating tax-loss harvesting now, before wash sale rules close the loophole. Even if legislation is passed retroactively, losses harvested before the effective date are likely protected.
          </p>
          <h3 style={h3Style}>Documentation Strategy</h3>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Maintain detailed records of all trades: transaction date, asset sold, price, asset purchased, price, time elapsed between transactions, and exchange platforms used. If the IRS challenges your losses later, show that you swapped into genuinely different assets (Bitcoin to Ethereum, not Bitcoin to WBTC). Clear documentation proves economic substance.
          </p>
          <h3 style={h3Style}>Form 8949 & Schedule D</h3>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            Report each loss harvesting trade on Form 8949 (Sales of Securities) and Schedule D (Capital Gains/Losses). Note the date sold, date acquired replacement asset, cost basis, and sale price. If Section 1091 eventually applies, the IRS wants clear documentation showing you have a reasonable position to defend. Sloppily reported losses are more vulnerable to challenges.
          </p>
          <h3 style={h3Style}>Grandfather Protection</h3>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 16, lineHeight: 1.8 }}>
            If legislation passes in 2026 with an effective date of January 1, 2027, all harvesting done through December 31, 2026 is typically grandfathered. Losses realized before the effective date are generally protected. This incentivizes aggressive harvesting before year-end 2026.
          </p>
        </section>

        <section id="compliance-table">
          <h2 style={h2Style}>Asset Type Wash Sale Status</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Asset Type</th>
                <th style={thStyle}>Wash Sale Applies</th>
                <th style={thStyle}>IRS Guidance</th>
                <th style={thStyle}>Risk Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Stock (Apple, Tesla, etc.)</td>
                <td style={tdStyle}>YES</td>
                <td style={tdStyle}>Clear: 30-day window enforced</td>
                <td style={tdStyle}>None if compliant</td>
              </tr>
              <tr>
                <td style={tdStyle}>Bitcoin (repurchase same asset)</td>
                <td style={tdStyle}>NO (2026)</td>
                <td style={tdStyle}>Not "security" under IRC 1091</td>
                <td style={tdStyle}>High (future change likely)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Bitcoin to Ethereum swap</td>
                <td style={tdStyle}>NO</td>
                <td style={tdStyle}>Substantially different assets</td>
                <td style={tdStyle}>Low (defensible)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Bitcoin to WBTC (wrapped)</td>
                <td style={tdStyle}>NO (2026)</td>
                <td style={tdStyle}>Ambiguous; could be deemed substantially identical</td>
                <td style={tdStyle}>Medium (high if rules change)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Bitcoin to Bitcoin Cash swap</td>
                <td style={tdStyle}>NO</td>
                <td style={tdStyle}>Different cryptocurrencies, not substantially identical</td>
                <td style={tdStyle}>Low</td>
              </tr>
              <tr>
                <td style={tdStyle}>Commodity (gold, crude oil)</td>
                <td style={tdStyle}>NO</td>
                <td style={tdStyle}>Wash sale only applies to securities (IRC 1091)</td>
                <td style={tdStyle}>None</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="faq">
          <h2 style={h2Style}>Frequently Asked Questions</h2>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Do wash sale rules currently apply to cryptocurrency in 2026?</h3>
            <p style={{ fontSize: 15, color: '#8b949e', lineHeight: 1.8, marginBottom: 0 }}>
              No. The IRS does not classify crypto as "securities" under IRC Section 1091, so wash sale rules do not currently apply to Bitcoin, Ethereum, or other cryptocurrencies. You can sell at a loss and repurchase the same asset immediately without losing the deduction. However, this exemption is expected to close in 2026-2027 when proposed legislation passes.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is the substantially identical property debate for crypto?</h3>
            <p style={{ fontSize: 15, color: '#8b949e', lineHeight: 1.8, marginBottom: 0 }}>
              The debate centers on whether Bitcoin from different exchanges or wrapped tokens (WBTC vs native BTC) are "substantially identical." Currently, there&apos;s no clear IRS guidance. To avoid future compliance issues, harvest losses by swapping into genuinely different assets (Bitcoin to Ethereum, not Bitcoin to WBTC).
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is the 30-day wash sale window?</h3>
            <p style={{ fontSize: 15, color: '#8b949e', lineHeight: 1.8, marginBottom: 0 }}>
              The traditional wash sale rule prevents buying substantially identical property within 30 days before or after a loss sale (61 days total). Although this doesn&apos;t apply to crypto now, proposed legislation would impose it. If you sell Bitcoin at a loss on April 10, you couldn&apos;t repurchase Bitcoin from March 11 to May 10 under future rules.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What proposed legislation threatens the crypto wash sale exemption?</h3>
            <p style={{ fontSize: 15, color: '#8b949e', lineHeight: 1.8, marginBottom: 0 }}>
              The Fair Tax Reporting Act and TCJA extension proposals both target crypto wash sales. They would explicitly extend Section 1091 to digital assets with a 30-day window. Although no legislation passed yet, the IRS could issue guidance at any time. Tax professionals expect change by late 2026 or early 2027.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How do I execute tax-loss harvesting in crypto before wash sales apply?</h3>
            <p style={{ fontSize: 15, color: '#8b949e', lineHeight: 1.8, marginBottom: 0 }}>
              Sell your underwater crypto positions to realize losses. Immediately purchase a different asset to maintain exposure. Document everything on Form 8949 and Schedule D. For maximum safety, swap into genuinely different assets (Bitcoin to Ethereum, not Bitcoin to WBTC). This locks in losses before legislation changes rules.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What penalties apply if wash sale rules retroactively apply to crypto I harvested?</h3>
            <p style={{ fontSize: 15, color: '#8b949e', lineHeight: 1.8, marginBottom: 0 }}>
              If legislation passes retroactively, the IRS would likely offer amendments for taxpayers to correct returns. The statute of limitations is 3 years for normal adjustments, 6 years for substantial understatement. Losses harvested before the effective date are typically grandfathered. Retroactive application to pre-effective trades is unlikely.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and does not constitute tax or legal advice. Wash sale rules and crypto taxation are complex and evolving. Consult with a qualified tax professional or CPA before executing tax-loss harvesting strategies. The IRS may issue guidance changing crypto tax treatment at any time. All information is current as of April 2026.
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
