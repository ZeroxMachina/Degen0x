import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: "DeFi Tax Reporting Guide 2026: LP Tokens, Yield,",
  description: "Complete DeFi tax guide 2026: LP token entry/exit, yield farming income, governance rewards, liquidity mining, wrapping events, impermanent loss, Aave/Compound",
  keywords: ['DeFi taxes', 'yield farming tax', 'LP token tax', 'governance token tax', 'impermanent loss', 'Uniswap tax', 'crypto taxes 2026'],
  openGraph: {
    type: 'article',
    title: 'DeFi Tax Reporting Guide 2026: LP Tokens, Yield, Governance & Mining',
    description: 'DeFi tax guide: LP token taxation, yield farming income, governance rewards, liquidity mining, wrapping/unwrapping, impermanent loss treatment.',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/taxes/defi-tax-reporting-guide',
    images: [{
      url: 'https://degen0x.com/og-taxes.svg',
      width: 1200,
      height: 630,
      alt: 'DeFi Tax Reporting Guide 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeFi Tax Reporting Guide 2026: LP Tokens, Yield, Governance & Mining',
    description: 'DeFi taxation: LP tokens, yield farming, governance rewards, impermanent loss, Aave/Compound interest reporting.',
    image: 'https://degen0x.com/og-taxes.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/taxes/defi-tax-reporting-guide',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'DeFi Tax Reporting Guide 2026: LP Tokens, Yield, Governance & Mining',
  description: 'Complete guide to DeFi taxation: LP token entry/exit, yield farming income, governance token rewards, liquidity mining, wrapping/unwrapping, impermanent loss, Aave/Compound interest, cross-chain bridge events.',
  image: 'https://degen0x.com/og-taxes.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are LP tokens taxable when created?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. When you deposit into Uniswap, Curve, or Balancer, you exchange two tokens (e.g., ETH + USDC) for LP tokens. This is a taxable event. You have two separate capital gains/losses: one on each token sold, calculated as: (FMV of token sold - cost basis) = gain/loss. If you deposit 1 ETH (basis $3,000) + 3,000 USDC (basis $3,000) worth $6,500 total, and you sell the ETH for $3,500 at deposit, you have a $500 gain. Same for USDC if its basis differs from current value. The LP token itself has a cost basis equal to the fair market value of the tokens contributed.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is yield farming income taxed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yield farming rewards (e.g., COMP tokens earned from Compound, AAVE from Aave) are taxed as ordinary income at fair market value (FMV) on receipt date. If Compound distributes 0.5 COMP tokens (worth $156 at receipt), you have $156 ordinary income. When you sell that COMP later for $200, you have a $44 capital gain ($200 sale price minus $156 basis). This creates two taxable events per reward: (1) ordinary income at receipt, (2) capital gain/loss at sale. Keep detailed records of reward receipt dates and FMV amounts.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are governance token airdrops taxed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Governance tokens (UNI, AAVE, MKR) distributed to users are taxable as ordinary income at fair market value on receipt date. Uniswap airdropped 400 UNI to early users (~$1,200 in September 2020). Recipients had $1,200 ordinary income in 2020. When they sell the UNI later, they recognize capital gains based on sale price minus basis ($1,200). This applies to all governance airdrops, even if "rewards" for participation. The IRS does not exempt small airdrops; $1 of governance tokens = $1 of ordinary income.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the tax treatment of wrapping/unwrapping tokens?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wrapping (e.g., wrapping ETH to wETH, wBTC) is a non-taxable exchange of substantially identical assets. You maintain your original cost basis. Unwrapping wETH back to ETH is also non-taxable. However, bridge wrapping (e.g., Wrapped Bitcoin on Ethereum, different token addresses) is more complex. If you convert BTC to WBTC on a different chain, it\'s a trade/swap, not wrapping. Generally, custodial bridges (Wrapped tokens) are non-taxable if reversible and 1:1 backed; non-custodial bridges may trigger taxable exchanges depending on IRS guidance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is impermanent loss treated for taxes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Impermanent loss (IL) is NOT deductible on taxes, unfortunately. IL occurs when LP token value declines due to price divergence between pair assets. You can\'t deduct IL as a capital loss. However, when you withdraw from the LP (converting LP tokens back to underlying assets), you recognize actual capital gains/losses. If you contributed $10,000 and withdraw $9,500 due to IL, you have a $500 realized capital loss (not deductible as IL, but realizable via exit). Track IL separately from capital gains for reference, but don\'t expect tax deduction.',
        },
      },
      {
        '@type': 'Question',
        name: 'How are cross-chain bridge transactions taxed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cross-chain bridges (moving tokens between Ethereum, Arbitrum, Optimism via bridge protocols) are generally taxable exchanges if the bridge involves a swap/conversion (e.g., Curve stablecoin bridge with slippage). Non-custodial 1:1 bridges (e.g., Stargate liquidity pools, Across Protocol) may be non-taxable if no value exchange occurs. However, the IRS has not issued formal guidance. Conservative approach: treat bridge transactions as sales if there\'s any slippage or fee involved. Track bridge transfers with timestamps and token values at transfer date. Consult a DeFi tax specialist if your strategy involves heavy cross-chain activity.',
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
    { '@type': 'ListItem', position: 3, name: 'Defi Tax Reporting Guide', },
  ],
};

export default function DeFiTaxReportingGuide() {
  const tableOfContents = [
    { id: 'lp-token-mechanics', title: 'LP Token Entry & Exit as Taxable Events' },
    { id: 'yield-farming', title: 'Yield Farming Income & Reward Taxation' },
    { id: 'governance-tokens', title: 'Governance Token Rewards & Airdrops' },
    { id: 'liquidity-mining', title: 'Liquidity Mining & Incentive Programs' },
    { id: 'wrapping-unwrapping', title: 'Wrapping/Unwrapping & Token Bridges' },
    { id: 'impermanent-loss', title: 'Impermanent Loss & Tax Treatment' },
    { id: 'protocol-examples', title: 'Real Protocol Examples: Aave, Uniswap, Compound' },
    { id: 'comparison-table', title: 'DeFi Events & Tax Treatment Table' },
    { id: 'record-keeping', title: 'Record Keeping & Reporting for DeFi' },
    { id: 'audit-risk', title: 'Audit Risk & IRS Scrutiny on DeFi' },
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
      <ArticleSchema
        headline="DeFi Tax Reporting Guide 2026: LP Tokens, Yield,"
        description="Complete DeFi tax guide 2026: LP token entry/exit, yield farming income, governance rewards, liquidity mining, wrapping events, impermanent loss, Aave/Compound"
        url="https://degen0x.com/taxes/defi-tax-reporting-guide"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Taxes"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/taxes/defi-tax-reporting-guide" />
        <ReadingTime />
      </div>
<AuthoritySources url="/taxes/defi-tax-reporting-guide" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/taxes" style={{ color: '#8b949e', textDecoration: 'none' }}>Taxes</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>DeFi Tax Reporting</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#64748b', color: '#fff' }}>Taxes</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          <h1 style={h1Style}>DeFi Tax Reporting Guide 2026</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            DeFi has exploded in complexity. Users deposit into Uniswap liquidity pools, earn COMP from Compound, swap on Curve, bridge tokens cross-chain, and claim governance airdrops—each event potentially triggering tax liability. The IRS has issued minimal guidance on DeFi taxation, creating ambiguity that benefits informed traders. LP token entry/exit, yield farming rewards taxed as ordinary income, governance tokens, and liquidity mining incentives all carry distinct tax consequences. This guide covers 350+ lines of real DeFi protocols, tax mechanics, and record-keeping requirements to ensure you stay compliant and minimize exposure.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 19 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="NullPointer"
          role="Data Engineer"
          publishedDate="2026-04-10"
          updatedDate="2026-04-10"
          readingTime={19}
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

        <section id="lp-token-mechanics" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>1. LP Token Entry &amp; Exit as Taxable Events</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            When you deposit two tokens into a liquidity pool (e.g., Uniswap V3), you exchange both tokens for LP tokens. This is a taxable event. You recognize a capital gain or loss on each token separately. If you deposit 1 ETH (cost basis $2,000) + 2,000 USDC (basis $2,000) and the FMV is $4,200 total, you&apos;re effectively selling each token: ETH for its FMV share, USDC for its FMV share.
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
          <h3 style={h3Style}>LP Token Entry Calculation</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Deposit into Uniswap V3 USDC-ETH pool: deposit 1 ETH ($3,500) + 3,500 USDC (basis $3,000). ETH gain: $3,500 sale price minus $2,500 basis = $1,000 gain. USDC loss: $3,500 sale price minus $3,000 basis = $500 gain. Total transaction: recognize $1,500 capital gain. LP token cost basis: $3,500 + $3,500 = $7,000 (FMV at deposit). When you later withdraw, compare withdrawal amount to $7,000 basis to calculate gain/loss on LP exit.
          </p>
          <h3 style={h3Style}>LP Token Exit Calculation</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Withdraw LP tokens after 6 months. You receive 1.1 ETH ($4,400) + 3,850 USDC ($3,850). Cost basis of LP tokens: $7,000. Sale proceeds: $8,250 (ETH + USDC value). Capital gain on LP exit: $1,250. Additionally, you recognize gains/losses on the received tokens if you sell them separately later. Document withdrawal date and token prices for IRS substantiation.
          </p>
        </section>

        <section id="yield-farming" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>2. Yield Farming Income &amp; Reward Taxation</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Yield farming rewards (COMP from Compound, AAVE from Aave lending, APY from Curve) are taxed as ordinary income at fair market value on the date of receipt. This is not a capital gain—it&apos;s business/trading income subject to marginal tax rates (up to 37% federal plus state/NIIT).
          </p>
          <h3 style={h3Style}>Yield Farming Income Example</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Lend $100,000 USDC to Compound. Earn 0.05 COMP per block. After 1 month, you&apos;ve earned 5 COMP tokens worth $1,300 (at receipt date, COMP trading at $260). You have $1,300 ordinary income in that month. Cost basis of 5 COMP: $1,300. When you sell 5 COMP for $1,500, you have a $200 capital gain ($1,500 sale minus $1,300 basis). Two taxable events: (1) ordinary income on receipt, (2) capital gain on sale.
          </p>
          <h3 style={h3Style}>Aave Interest Income Tracking</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Aave generates interest in the same token (e.g., deposit 100 USDC, earn interest in aUSDC). Interest is taxable as ordinary income at fair market value on receipt. If you earn 2 USDC interest (worth $2), you have $2 ordinary income. This applies to Aave, Curve, Yearn, and most yield protocols. Aggregate all interest earned per year and report on Schedule 1 (Form 1040) as miscellaneous income. Platforms like CoinTracker can track this automatically.
          </p>
        </section>

        <section id="governance-tokens" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>3. Governance Token Rewards &amp; Airdrops</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Governance tokens (UNI, AAVE, MKR, COMP) earned as rewards or distributed via airdrop are taxable as ordinary income at fair market value on receipt date. There is no "small airdrop exemption"—even $1 of tokens = $1 of ordinary income. Uniswap&apos;s UNI airdrop in 2020 (~400 UNI per user, worth ~$1,200) was fully taxable ordinary income.
          </p>
          <h3 style={h3Style}>Uniswap UNI Airdrop Example</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            September 17, 2020: UNI airdrop. 400 UNI per eligible user, trading at $3 = $1,200 ordinary income. If a user later sold UNI for $4 per token ($1,600), they have a $400 capital gain ($1,600 sale minus $1,200 basis). The gain is taxed at capital gains rates (28% collectibles rate, or short-term if held &lt; 1 year).
          </p>
          <h3 style={h3Style}>Multiple Governance Distributions</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            If you use multiple DeFi protocols, you earn multiple governance tokens annually. Track each separately: date received, token amount, FMV at receipt, and cost basis. Aggregate all governance income on Schedule 1. Failure to report governance airdrops is a common audit trigger; the IRS cross-references blockchain events (e.g., Airdrop contract logs) to wallet addresses and matches to tax returns.
          </p>
        </section>

        <section id="liquidity-mining" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>4. Liquidity Mining &amp; Incentive Programs</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Liquidity mining (incentive programs offering tokens for providing liquidity) is taxed the same as yield farming. You receive mining tokens (e.g., SNX from Synthetix, USDA from Alchemix) at fair market value, recognized as ordinary income. Mining incentives often come in two parts: (1) protocol fees (interest), (2) incentive token rewards. Both are ordinary income.
          </p>
          <h3 style={h3Style}>Liquidity Mining Scenario</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Provide $50,000 liquidity to a Balancer pool with 20% APY and 100% mining incentive. Annual earnings: $10,000 (APY) + $50,000 (incentive tokens at FMV on receipt) = $60,000 ordinary income. Cost basis of incentive tokens: $50,000. When you sell for $55,000, you have a $5,000 capital gain. Document receipt dates of all mining rewards and token FMV on those dates.
          </p>
          <h3 style={h3Style}>Multi-Year Liquidity Mining</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Some liquidity mining programs run 3-5 years with declining incentives. Track annual income recognition and cost basis accumulation. If you continuously reinvest mining rewards, your cost basis compounds. Software like DeFi tax trackers (Koinly, ZenLedger) can automate this, but verify calculations manually before filing.
          </p>
        </section>

        <section id="wrapping-unwrapping" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>5. Wrapping/Unwrapping &amp; Token Bridges</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Wrapping tokens (ETH to wETH, BTC to wBTC) is generally non-taxable. You&apos;re exchanging substantially identical assets; cost basis carries over. Unwrapping is also non-taxable. However, cross-chain bridges (moving tokens between Ethereum and Arbitrum, for example) may be taxable if the bridge involves a swap or conversion with slippage.
          </p>
          <h3 style={h3Style}>Non-Taxable Wrapping</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Wrap 1 ETH to wETH on Ethereum: non-taxable. Cost basis: inherited from ETH. Wrap wETH to wETH on Arbitrum via bridge (1:1, no slippage): treated as non-taxable transfer. However, if the bridge charges a 0.1% fee or has slippage, it becomes a taxable swap.
          </p>
          <h3 style={h3Style}>Cross-Chain Bridge Taxation</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Conservative approach: treat any bridge transaction with fees or slippage as a taxable swap. Document bridge FMV on each side (send token value vs. received token value). If there&apos;s a difference, recognize a capital gain or loss. The IRS has not issued specific guidance, but this approach provides substantiation if audited.
          </p>
        </section>

        <section id="impermanent-loss" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>6. Impermanent Loss &amp; Tax Treatment</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Impermanent loss (IL) occurs when LP token value declines due to price divergence between pair assets. Bad news: IL is NOT deductible as a capital loss. You can only realize a loss when you withdraw LP tokens and sell the underlying assets. IL is unrealized until you exit the pool.
          </p>
          <h3 style={h3Style}>Impermanent Loss Realization</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Deposit $10,000 (0.5 ETH at $2,000 + 5,000 USDC). ETH rises to $4,000. Due to rebalancing, you withdraw 0.6 ETH ($2,400) + 3,000 USDC ($3,000) = $5,400 (IL: $4,600). You recognize a $4,600 realized loss when you withdraw (cost basis $10,000 minus proceeds $5,400). This loss is deductible against capital gains. The loss is only realizable upon withdrawal; holding doesn&apos;t trigger deduction.
          </p>
          <h3 style={h3Style}>IL Tracking Strategies</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Track impermanent loss separately in your records (for reference) but remember it&apos;s only deductible upon LP withdrawal. If a pool consistently generates IL, it may indicate a strategy that harvests IL as losses (harvesting strategy). Document your IL calculations with pool screenshots to substantiate deductions if audited.
          </p>
        </section>

        <section id="protocol-examples" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>7. Real Protocol Examples: Aave, Uniswap, Compound</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Aave: Lend assets, earn interest income + AAVE governance token rewards (ordinary income). Withdraw, sell at capital gain/loss. Compound: Lend, earn COMP rewards + interest. Both taxable as ordinary income. Uniswap: Provide liquidity, earn UNI rewards + swap fees. LP entry/exit is taxable event; rewards taxable as ordinary income. Curve: Stake liquidity, earn CRV + protocol fees (both ordinary income). Each protocol has unique mechanics, but the tax treatment is consistent: interest/rewards = ordinary income, LP entry/exit = capital event.
          </p>
          <h3 style={h3Style}>Aggregate Across Protocols</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Most serious DeFi users interact with 5+ protocols annually. Use spreadsheets or tax software to aggregate: (1) all ordinary income (interest, rewards, airdrops), (2) all capital gains/losses (pool entry/exit, token sales). Report total ordinary income on Schedule 1, capital gains on Form 8949 + Schedule D. Failure to aggregate and report can trigger IRS correspondence and penalties.
          </p>
        </section>

        <section id="comparison-table" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>8. DeFi Events &amp; Tax Treatment Table</h2>
          <table style={tableStyle}>
            <thead>
              <tr style={{ background: '#0d1117' }}>
                <th style={thStyle}>Event</th>
                <th style={thStyle}>Taxable?</th>
                <th style={thStyle}>Tax Type</th>
                <th style={thStyle}>Timing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Deposit into LP (swap tokens for LP)</td>
                <td style={tdStyle}>Yes</td>
                <td style={tdStyle}>Capital gain/loss on each token</td>
                <td style={tdStyle}>At deposit</td>
              </tr>
              <tr style={{ background: '#0d1117' }}>
                <td style={tdStyle}>Withdraw LP (swap LP for tokens)</td>
                <td style={tdStyle}>Yes</td>
                <td style={tdStyle}>Capital gain/loss on LP token</td>
                <td style={tdStyle}>At withdrawal</td>
              </tr>
              <tr>
                <td style={tdStyle}>Earn interest (Aave, Compound)</td>
                <td style={tdStyle}>Yes</td>
                <td style={tdStyle}>Ordinary income (FMV at receipt)</td>
                <td style={tdStyle}>Block-by-block</td>
              </tr>
              <tr style={{ background: '#0d1117' }}>
                <td style={tdStyle}>Earn COMP/AAVE rewards</td>
                <td style={tdStyle}>Yes</td>
                <td style={tdStyle}>Ordinary income (FMV at receipt)</td>
                <td style={tdStyle}>Block-by-block</td>
              </tr>
              <tr>
                <td style={tdStyle}>Earn UNI/AAVE governance tokens</td>
                <td style={tdStyle}>Yes</td>
                <td style={tdStyle}>Ordinary income (FMV at receipt)</td>
                <td style={tdStyle}>At receipt</td>
              </tr>
              <tr style={{ background: '#0d1117' }}>
                <td style={tdStyle}>Wrap ETH to wETH</td>
                <td style={tdStyle}>No</td>
                <td style={tdStyle}>Non-taxable exchange</td>
                <td style={tdStyle}>N/A</td>
              </tr>
              <tr>
                <td style={tdStyle}>Cross-chain bridge with slippage</td>
                <td style={tdStyle}>Yes</td>
                <td style={tdStyle}>Capital gain/loss (potential)</td>
                <td style={tdStyle}>At bridge</td>
              </tr>
              <tr style={{ background: '#0d1117' }}>
                <td style={tdStyle}>Impermanent loss (unrealized)</td>
                <td style={tdStyle}>No</td>
                <td style={tdStyle}>N/A (not deductible)</td>
                <td style={tdStyle}>N/A</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="record-keeping" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>9. Record Keeping &amp; Reporting for DeFi</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            For DeFi, maintain: (1) pool entry/exit transaction hashes with dates/FMV, (2) reward receipt dates and token FMV, (3) cost basis tracking per token, (4) withdrawal dates and token amounts/values. Use blockchain explorers (Etherscan, Arbiscan) to export transaction histories. Tax software like Koinly or ZenLedger integrates blockchain data, but verify manually before filing.
          </p>
          <h3 style={h3Style}>7-Year Retention Requirement</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            The IRS can audit 3 years back (6 if substantial underreporting, indefinite if fraud). Retain all DeFi transaction records for at least 7 years. Store blockchain data (transaction hashes), screenshots of LP positions, tax software exports, and bank records in secure storage (cloud backup or local drive). Organized records significantly reduce audit risk and penalties if the IRS inquires.
          </p>
        </section>

        <section id="audit-risk" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>10. Audit Risk &amp; IRS Scrutiny on DeFi</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            DeFi is a high-audit-risk activity. The IRS is actively monitoring addresses that interact with major DeFi protocols (Aave, Uniswap, Curve). High-value transactions ($100K+) and high-frequency trading trigger audit requests. Primary risk: underreporting DeFi income and gains. Secondary risk: misclassifying losses (e.g., claiming IL as deductible loss when only realizable upon withdrawal).
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Reduce Audit Risk</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              Report all DeFi activity (interest, rewards, capital gains) accurately. Use professional tax software to generate Form 8949/Schedule D. Attach detailed blockchain records if filing substantial DeFi activity. Consider engaging a crypto CPA ($1,000-3,000) if your DeFi activity exceeds $250K annually. A well-documented return with CPA review significantly reduces audit likelihood and provides substantiation if audited.
            </p>
          </div>
        </section>

        <section id="faq" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 0, marginBottom: 12, color: '#e6edf3' }}>Are LP tokens taxable when created?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              Yes. When you deposit into Uniswap, Curve, or Balancer, you exchange two tokens (e.g., ETH + USDC) for LP tokens. This is a taxable event. You have two separate capital gains/losses: one on each token sold, calculated as: (FMV of token sold - cost basis) = gain/loss. If you deposit 1 ETH (basis $3,000) + 3,000 USDC (basis $3,000) worth $6,500 total, and you sell the ETH for $3,500 at deposit, you have a $500 gain. Same for USDC if its basis differs from current value. The LP token itself has a cost basis equal to the fair market value of the tokens contributed.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 0, marginBottom: 12, color: '#e6edf3' }}>How is yield farming income taxed?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              Yield farming rewards (COMP from Compound, AAVE from Aave) are taxed as ordinary income at fair market value (FMV) on receipt date. If Compound distributes 0.5 COMP tokens (worth $156 at receipt), you have $156 ordinary income. When you sell that COMP later for $200, you have a $44 capital gain ($200 sale price minus $156 basis). This creates two taxable events per reward: (1) ordinary income at receipt, (2) capital gain/loss at sale. Keep detailed records of reward receipt dates and FMV amounts.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 0, marginBottom: 12, color: '#e6edf3' }}>How are governance token airdrops taxed?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              Governance tokens (UNI, AAVE, MKR) distributed to users are taxable as ordinary income at fair market value on receipt date. Uniswap airdropped 400 UNI to early users (~$1,200 in September 2020). Recipients had $1,200 ordinary income in 2020. When they sell the UNI later, they recognize capital gains based on sale price minus basis ($1,200). This applies to all governance airdrops, even if "rewards" for participation. The IRS does not exempt small airdrops; $1 of governance tokens = $1 of ordinary income.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 0, marginBottom: 12, color: '#e6edf3' }}>What is the tax treatment of wrapping/unwrapping tokens?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              Wrapping (e.g., wrapping ETH to wETH, wBTC) is a non-taxable exchange of substantially identical assets. You maintain your original cost basis. Unwrapping wETH back to ETH is also non-taxable. However, bridge wrapping (e.g., Wrapped Bitcoin on Ethereum, different token addresses) is more complex. If you convert BTC to WBTC on a different chain, it&apos;s a trade/swap, not wrapping. Generally, custodial bridges (Wrapped tokens) are non-taxable if reversible and 1:1 backed; non-custodial bridges may trigger taxable exchanges depending on IRS guidance.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 0, marginBottom: 12, color: '#e6edf3' }}>How is impermanent loss treated for taxes?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              Impermanent loss (IL) is NOT deductible on taxes, unfortunately. IL occurs when LP token value declines due to price divergence between pair assets. You can&apos;t deduct IL as a capital loss. However, when you withdraw from the LP (converting LP tokens back to underlying assets), you recognize actual capital gains/losses. If you contributed $10,000 and withdraw $9,500 due to IL, you have a $500 realized capital loss (not deductible as IL, but realizable via exit). Track IL separately from capital gains for reference, but don&apos;t expect tax deduction.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginTop: 0, marginBottom: 12, color: '#e6edf3' }}>How are cross-chain bridge transactions taxed?</h3>
            <p style={{ marginBottom: 0, marginTop: 12 }}>
              Cross-chain bridges (moving tokens between Ethereum, Arbitrum, Optimism via bridge protocols) are generally taxable exchanges if the bridge involves a swap/conversion (e.g., Curve stablecoin bridge with slippage). Non-custodial 1:1 bridges (e.g., Stargate liquidity pools, Across Protocol) may be non-taxable if no value exchange occurs. However, the IRS has not issued formal guidance. Conservative approach: treat bridge transactions as sales if there&apos;s any slippage or fee involved. Track bridge transfers with timestamps and token values at transfer date. Consult a DeFi tax specialist if your strategy involves heavy cross-chain activity.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and does not constitute tax advice. DeFi tax treatment is rapidly evolving; the IRS may issue new guidance affecting taxation. Consult a qualified tax professional (CPA, EA, or DeFi tax specialist) before making compliance decisions. Failure to report DeFi activity accurately can result in substantial penalties, interest, and potential fraud charges.
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
                      <li><a href="/taxes/best" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best</a></li>
            <li><a href="/taxes/best/[slug]" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>[slug]</a></li>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "DeFi Tax Reporting Guide 2026: LP Tokens, Yield,", "description": "Complete DeFi tax guide 2026: LP token entry/exit, yield farming income, governance rewards, liquidity mining, wrapping events, impermanent loss, Aave/Compound", "url": "https://degen0x.com/taxes/defi-tax-reporting-guide", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</div>
    </article>
  );
}
