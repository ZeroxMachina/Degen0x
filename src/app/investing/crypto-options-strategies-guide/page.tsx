import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Crypto Options Strategies Guide: Covered Calls, Puts & Spreads | degen0x',
  description: 'Master crypto options strategies on Deribit, Lyra, and Premia. Real BTC/ETH examples, strike prices, and when to use covered calls, puts, straddles, and iron condors.',
  keywords: [
    'crypto options strategies',
    'covered calls bitcoin',
    'protective puts ethereum',
    'iron condors deribit',
    'options trading crypto',
    'lyra protocol options',
    'premia finance dex',
    'option straddles',
  ],
  openGraph: {
    title: 'Crypto Options Strategies Guide: Covered Calls, Puts & Spreads',
    description: 'Master crypto options on Deribit, Lyra, Premia. Real examples, strike prices, risk/reward profiles.',
    url: 'https://degen0x.com/investing/crypto-options-strategies-guide',
    images: [{ url: 'https://degen0x.com/og-investing.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Options Strategies Guide',
    description: 'Master covered calls, protective puts, straddles & iron condors for crypto.',
    image: 'https://degen0x.com/og-investing.svg',
  },
,
  alternates: {
    canonical: 'https://degen0x.com/investing/crypto-options-strategies-guide',
  }};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Crypto Options Strategies Guide: Covered Calls, Puts, Straddles & Iron Condors',
  description: 'Comprehensive guide to crypto options strategies including covered calls, protective puts, straddles, and iron condors with real BTC/ETH examples.',
  image: 'https://degen0x.com/og-investing.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a covered call and when should I use it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A covered call involves holding 100 BTC/ETH while selling call options against your position. You keep all gains up to the strike price and pocket the premium. Use covered calls when holding assets but expecting limited upside. On Deribit, a covered call on 1 BTC at $65,000 strike might yield 2-3% monthly premium.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do protective puts work for downside protection?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A protective put combines your long position with a long put option, creating a floor price. If you hold 10 ETH at $3,500 and buy a $3,200 put, your downside is protected at $3,200 while maintaining upside. The put premium typically costs 1-3% of the underlying value depending on strike selection.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a straddle and when is volatility high enough?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A straddle buys both a call and put at the same strike, profiting from large moves in either direction. Use straddles when implied volatility (IV) is low before expected events like ETF approvals or network upgrades. Break-even requires price moves exceeding the combined premium paid.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do iron condors limit risk and profit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An iron condor sells an out-of-money call and put while buying further out-of-money call and put, creating a bounded profit zone. Maximum profit equals net credit received if price stays between the two sold strikes. Risk is capped at the width of the spread minus credit.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the key differences between Deribit, Lyra, and Premia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Deribit dominates with $30B+ monthly volume and professional-grade tools. Lyra is a peer-to-pool AMM on Arbitrum and Ethereum with lower fees. Premia is governance-driven with on-chain pricing. Deribit suits high-volume traders, while Lyra/Premia serve retail with better UX and lower capital requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do implied volatility and time decay affect my P&L?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Implied volatility (IV) expansion increases option prices; compression decreases them. Time decay (theta) helps short positions and hurts long positions daily. High IV environments favor selling strategies like covered calls and iron condors. Low IV environments favor buying strategies like straddles and protective puts.',
        },
      },
    ],
  },
};

export default function CryptoOptionsStrategiesGuide() {
  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d', borderLeft: '3px solid #10b981', borderLeft: '3px solid #10b981',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
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

  const tableOfContents = [
    { id: 'intro', title: 'Introduction to Crypto Options' },
    { id: 'covered-calls', title: 'Covered Calls: Income Generation' },
    { id: 'protective-puts', title: 'Protective Puts: Downside Insurance' },
    { id: 'straddles', title: 'Straddles: Volatile Volatility Plays' },
    { id: 'iron-condors', title: 'Iron Condors: Limited Risk Spreads' },
    { id: 'platforms', title: 'Deribit vs Lyra vs Premia Comparison' },
    { id: 'greeks', title: 'Understanding the Greeks' },
    { id: 'real-examples', title: 'Real BTC and ETH Examples' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/investing" style={{ color: '#8b949e', textDecoration: 'none' }}>Investing</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Crypto Options Strategies</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#22c55e', color: '#0d1117' }}>Investing</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          <h1 style={h1Style}>Crypto Options Strategies Guide</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Master crypto options on Deribit ($30B+ monthly volume), Lyra, and Premia. Learn covered calls, protective puts, straddles, and iron condors with real BTC/ETH examples at specific strike prices.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 15 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="SatoshiGhost"
          role="Lead Researcher"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={15}
          section="investing"
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

        <section id="intro">
          <h2 style={h2Style}>Introduction to Crypto Options</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Crypto options allow traders to profit from directional moves, volatility, and time decay without large capital requirements. Unlike spot trading, options provide asymmetric risk-reward profiles and leverage through premium paid rather than margin. Deribit processes over $30 billion notional volume monthly, making it the industry standard for institutional and retail traders alike.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Tokenomics analysis is our edge. Most retail investors skip the vesting schedule and supply inflation data that often determines long-term price action.
          </p>
        </div>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Options contracts grant the right (but not obligation) to buy (call) or sell (put) an underlying asset at a specific price (strike) on or before expiration. The price paid for this right is the premium, expressed as a percentage or in absolute terms. Each strategy combines different options to create specific risk-reward profiles tailored to market outlook.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#79c0ff' }}>Key Insight:</strong> Options pricing is determined by underlying price, strike price, time to expiration, implied volatility, and interest rates. The Greeks (Delta, Gamma, Theta, Vega) quantify each sensitivity.
          </div>
        </section>

        <section id="covered-calls">
          <h2 style={h2Style}>Covered Calls: Income Generation</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            A covered call involves holding the underlying asset while selling call options against it. You own 1 BTC at a cost basis of $60,000 and sell a $65,000 call expiring in 30 days for 0.05 BTC ($3,000) in premium. Your profit is capped at $5,000 (the $5,000 strike difference plus the $3,000 premium), but you collect the premium immediately regardless of price movement.
          </p>
          <h3 style={h3Style}>When to Use Covered Calls</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Use covered calls when you expect sideways or modest upside movement. If BTC is at $62,000 and you expect it to stay between $62,000–$67,000 through the quarter, selling $65,000 calls monthly turns your holdings into an income machine. The tradeoff: unlimited upside is forgone if BTC rallies past your strike.
          </p>
          <h3 style={h3Style}>Real Example: 10 ETH Position</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            You hold 10 ETH at $3,400 average cost. ETH is trading at $3,500. You sell 10 call contracts at the $3,800 strike with 45 days to expiration on Deribit for 0.08 ETH total premium ($280). Maximum profit: $3,000 (300 per contract) + $280 premium = $3,280. If ETH stays below $3,800, you keep the premium and repeat. If ETH rallies past $3,800, your position gets called away at $3,800, capping gains.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#79c0ff' }}>Pro Tip:</strong> Sell calls 10-15% out of the money (OTM) to balance premium collection with upside participation. Monthly rolls are common; quarterly rolls offer higher premiums but less flexibility.
          </div>
        </section>

        <section id="protective-puts">
          <h2 style={h2Style}>Protective Puts: Downside Insurance</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            A protective put pairs a long holding with a long put, creating a price floor. If you own 5 BTC at $62,000 and buy a $60,000 put expiring in 60 days for 0.01 BTC ($600) in premium, your maximum loss is capped at $2,000 per BTC (the $2,000 difference) plus the $600 premium, totaling $10,600. Upside is unlimited.
          </p>
          <h3 style={h3Style}>Cost-Benefit Analysis</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Protective puts cost 1–3% of underlying value depending on strike selection and implied volatility. Buy puts 5–10% out of the money to balance insurance cost with protection. A 60-day put costing 1.5% provides peace of mind before major network events or regulatory announcements.
          </p>
          <h3 style={h3Style}>Example: 20 ETH Hedge</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            You hold 20 ETH at $3,600 average, with ETH currently at $3,650. You buy 20 put contracts at the $3,400 strike with 90 days to expiration on Lyra for 0.06 ETH total ($210) in premium. If ETH crashes to $3,000, your position is protected at $3,400. If ETH rallies to $4,200, you profit the full $600 per ETH minus the $210 premium cost, netting $11,790 profit.
          </p>
        </section>

        <section id="straddles">
          <h2 style={h2Style}>Straddles: Volatile Volatility Plays</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            A straddle buys both a call and a put at the same strike, betting on large price moves regardless of direction. Buy a $63,000 BTC call and a $63,000 BTC put, each expiring in 30 days. If BTC moves +$5,000 to $68,000 or -$5,000 to $58,000, both moves are profitable. If BTC stays flat, both expire worthless and you lose the entire premium.
          </p>
          <h3 style={h3Style}>When Implied Volatility Matters</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Straddles are profitable when implied volatility (IV) is low and expected to spike. Before an ETF approval decision, Bitcoin spot ETF index inclusion, or Ethereum Shanghai upgrade expectations, IV usually compresses. Buy straddles cheaply before catalysts and sell when IV spikes post-announcement. Deribit&apos;s IV Index shows current volatility expectations; levels below 30 are attractive for long volatility plays.
          </p>
          <h3 style={h3Style}>Real Example: ETH Straddle Before Dencun</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            ETH is at $3,500 with IV at 35. You expect Dencun hard fork volatility. Buy 1 ETH call at $3,500 and 1 put at $3,500, both 30-day expiration on Deribit for 0.04 ETH total ($140) premium. Break-even: $3,460 and $3,540. If ETH moves to $3,300 or $3,700, you profit. If it stays at $3,500, you lose the $140 premium paid.
          </p>
        </section>

        <section id="iron-condors">
          <h2 style={h2Style}>Iron Condors: Limited Risk Spreads</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            An iron condor is a defined-risk strategy that sells an out-of-the-money (OTM) call and an OTM put while buying further OTM call and put to limit risk. Sell a $66,000 BTC call and a $60,000 BTC put, each 30-day expiration. Buy a $67,000 call and $59,000 put. Maximum profit: the net credit received if BTC stays between $60,000–$66,000 at expiration. Maximum loss: the width of the spread minus the credit (e.g., $2,000 – $800 = $1,200 risk).
          </p>
          <h3 style={h3Style}>The Optimal Placement</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Place sold strikes 10–15% OTM to maximize probability of profit (POP) while maintaining reasonable credit. A wider spread (e.g., $2,000 or $3,000 between bought and sold strikes) increases credit but increases max loss. Most profitable when implied volatility is elevated, allowing you to sell expensive options.
          </p>
          <h3 style={h3Style}>Example: 1 ETH Iron Condor</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            ETH at $3,600. Sell 1 call at $3,800, buy 1 call at $3,850. Sell 1 put at $3,400, buy 1 put at $3,350. All 45-day expiration on Premia Finance. Receive $0.06 ETH ($210) net credit. Maximum profit: $210. Maximum loss: ($3,850 – $3,800) = $50 ETH × 1 – $210 credit = $290. Probability of profit: ~70% if ETH stays between $3,350–$3,850.
          </p>
        </section>

        <section id="platforms">
          <h2 style={h2Style}>Deribit vs Lyra vs Premia Comparison</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Platform</th>
                <th style={thStyle}>Monthly Volume</th>
                <th style={thStyle}>Fee Structure</th>
                <th style={thStyle}>Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>Deribit</strong></td>
                <td style={tdStyle}>$30B+ notional</td>
                <td style={tdStyle}>0.02–0.05% taker/maker</td>
                <td style={tdStyle}>Professionals, high volume</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Lyra</strong></td>
                <td style={tdStyle}>$800M+ (Arbitrum + Ethereum)</td>
                <td style={tdStyle}>0.02% flat, liquidity rewards</td>
                <td style={tdStyle}>Retail, lower fees</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Premia</strong></td>
                <td style={tdStyle}>$200M+ (Arbitrum)</td>
                <td style={tdStyle}>0.03% trading + 2.5% protocol fee</td>
                <td style={tdStyle}>Governance-aligned traders</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Deribit dominates with professional trading tools, deep liquidity for large orders, and support for BTC/ETH options and quarterly/perpetual futures. Lyra uses a peer-to-pool AMM model with transparent pricing and lower barriers to entry. Premia offers on-chain pricing and governance token rewards for LP participation.
          </p>
        </section>

        <section id="greeks">
          <h2 style={h2Style}>Understanding the Greeks</h2>
          <h3 style={h3Style}>Delta: Directional Sensitivity</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Delta measures how much an option price changes per $1 move in the underlying. A call with delta +0.60 gains $0.60 if BTC rises $1. A put with delta -0.40 gains $0.40 if BTC falls $1. At-the-money (ATM) options have delta ~0.50; deep in-the-money (ITM) calls approach +1.0; deep out-of-the-money (OTM) calls approach 0.
          </p>
          <h3 style={h3Style}>Theta: Time Decay</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Theta measures daily premium decay as expiration approaches. Short positions (sold calls/puts) benefit from theta; long positions lose to it. A call with theta -0.05 loses $0.05 per day if all else is constant. Theta accelerates in the final week before expiration. Selling strategies like covered calls profit from daily theta bleed.
          </p>
          <h3 style={h3Style}>Vega: Volatility Sensitivity</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Vega measures how much an option price changes per 1% change in implied volatility. A call with vega +0.10 gains $0.10 if IV rises 1%. Long straddles have high positive vega; short iron condors have negative vega. High-vega trades profit from volatility expansion or contraction accordingly.
          </p>
          <h3 style={h3Style}>Gamma: Delta Acceleration</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Gamma measures how fast delta changes as underlying price moves. ATM options have highest gamma; ITM/OTM have lower gamma. Long straddles have high positive gamma and profit from realized volatility exceeding IV. Short iron condors have negative gamma; gamma losses accelerate if price breaks through sold strikes.
          </p>
        </section>

        <section id="real-examples">
          <h2 style={h2Style}>Real BTC and ETH Examples</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Strategy</th>
                <th style={thStyle}>Max Profit</th>
                <th style={thStyle}>Max Loss</th>
                <th style={thStyle}>Best Market Condition</th>
                <th style={thStyle}>Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>Covered Call (1 BTC)</strong></td>
                <td style={tdStyle}>$5,300 (strike + premium)</td>
                <td style={tdStyle}>Cost basis − premium</td>
                <td style={tdStyle}>Sideways to moderate up</td>
                <td style={tdStyle}>Beginner</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Protective Put (5 BTC)</strong></td>
                <td style={tdStyle}>Unlimited</td>
                <td style={tdStyle}>$10,600 ($2k per BTC + premium)</td>
                <td style={tdStyle}>Downside crash</td>
                <td style={tdStyle}>Beginner</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Long Straddle (10 ETH)</strong></td>
                <td style={tdStyle}>Unlimited on moves</td>
                <td style={tdStyle}>Premium paid ($350)</td>
                <td style={tdStyle}>High volatility spike</td>
                <td style={tdStyle}>Intermediate</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Iron Condor (BTC)</strong></td>
                <td style={tdStyle}>$2,000 (net credit)</td>
                <td style={tdStyle}>$3,000 (width − credit)</td>
                <td style={tdStyle}>Range-bound $60k–$66k</td>
                <td style={tdStyle}>Advanced</td>
              </tr>
            </tbody>
          </table>
          <h3 style={h3Style}>Example 1: Covered Call on 2 BTC (Deribit)</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            You own 2 BTC at $60,000 average cost ($120,000 capital). BTC is at $62,000. You sell 2 call contracts at $65,000 strike, 30 days to expiration, for 0.10 BTC total ($6,200) premium. Your profit range is $62,000–$65,000 per contract. If BTC stays at $62,000–$65,000, profit = ($5,000 × 2) + $6,200 = $16,200 on $120,000 capital = 13.5% monthly return.
          </p>
          <h3 style={h3Style}>Example 2: Long Straddle on 10 ETH (Lyra)</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            ETH at $3,500, IV at 35 (low). You buy 5 call contracts at $3,500 and 5 put contracts at $3,500, 45 days to expiration, for 0.35 ETH total ($1,225) premium. Break-even: $3,465 and $3,535. If ETH rallies to $3,800 or falls to $3,200, both moves are profitable. If ETH stays $3,465–$3,535, you lose the $1,225 premium paid but realized volatility exceeded IV.
          </p>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is a covered call and when should I use it?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              A covered call involves holding 100 BTC/ETH while selling call options against your position. You keep all gains up to the strike price and pocket the premium. Use covered calls when holding assets but expecting limited upside. On Deribit, a covered call on 1 BTC at $65,000 strike might yield 2–3% monthly premium. It reduces upside but generates consistent income.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How do protective puts work for downside protection?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              A protective put combines your long position with a long put option, creating a floor price. If you hold 10 ETH at $3,500 and buy a $3,200 put, your downside is protected at $3,200 while maintaining upside. The put premium typically costs 1–3% of the underlying value depending on strike selection and time to expiration.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is a straddle and when is volatility high enough?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              A straddle buys both a call and put at the same strike, profiting from large moves in either direction. Use straddles when implied volatility (IV) is low before expected events like ETF approvals or network upgrades. Break-even requires price moves exceeding the combined premium paid. Buy straddles when IV is below 30 on Deribit&apos;s IV Index.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How do iron condors limit risk and profit?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              An iron condor sells an out-of-money call and put while buying further out-of-money call and put, creating a bounded profit zone. Maximum profit equals net credit received if price stays between the two sold strikes. Risk is capped at the width of the spread minus credit. This makes risk management straightforward and suitable for defined-risk traders.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What are the key differences between Deribit, Lyra, and Premia?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              Deribit dominates with $30B+ monthly volume and professional-grade tools. Lyra is a peer-to-pool AMM on Arbitrum and Ethereum with lower fees. Premia is governance-driven with on-chain pricing. Deribit suits high-volume traders, while Lyra/Premia serve retail with better UX and lower capital requirements for entry.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How do implied volatility and time decay affect my P&L?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              Implied volatility (IV) expansion increases option prices; compression decreases them. Time decay (theta) helps short positions and hurts long positions daily. High IV environments favor selling strategies like covered calls and iron condors. Low IV environments favor buying strategies like straddles and protective puts. Monitor Deribit&apos;s IV Index daily.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and does not constitute financial advice. Crypto options are high-risk instruments; leverage, time decay, and volatility can result in total loss. Always conduct your own research, start with small positions, and never risk capital you cannot afford to lose. Past performance is not indicative of future results.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }>
            <li><Link href="/trading/crypto-futures-funding-rate-strategy" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Crypto Futures Funding Rate Strategy</Link></li>
            <li><Link href="/trading/crypto-market-making-explained" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Crypto Market Making Explained</Link></li>
            <li><Link href="/trading/crypto-options-trading-strategies" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Crypto Options Trading Strategies</Link></li>
            <li><Link href="/trading/crypto-pairs-trading-strategy" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Crypto Pairs Trading Strategy</Link></li>
          </ul>
        </nav>

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
      </article>
  );
}
