import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Crypto Tokenomics Analysis: Supply, Vesting, Burn Mechanics",
  description: "Master tokenomics: BTC 21M cap, ETH deflationary -0.2%/yr post-EIP1559, vesting schedules, team/investor/community distribution, burn mechanisms (BNB",
  keywords: ['tokenomics', 'token supply', 'vesting', 'burn mechanisms', 'token distribution', 'real yield'],
  openGraph: {
    type: 'article',
    title: "Crypto Tokenomics Analysis: Supply, Vesting, Burn Mechanics",
    description: 'BTC 21M cap, ETH deflationary -0.2%/yr, vesting, distribution, burn mechanics like BNB quarterly burn, MKR buyback+burn.',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/learn/tokenomics-how-to-analyze',
    images: [{ url: 'https://degen0x.com/og-learn.svg', width: 1200, height: 630, alt: 'Tokenomics Analysis' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Crypto Tokenomics Analysis: Supply, Vesting, Burn Mechanics",
    description: 'BTC 21M cap, ETH deflationary, vesting schedules, burn mechanisms.',
    image: 'https://degen0x.com/og-learn.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/tokenomics-how-to-analyze',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Crypto Tokenomics Analysis: Supply, Vesting, Burn Mechanics',
  description: 'Complete guide to analyzing tokenomics: supply mechanics, vesting schedules, token distribution, burn mechanisms, and real yield calculation.',
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is tokenomics and why does it matter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tokenomics studies token supply mechanics, distribution, and incentive structures. It determines whether a token is inflationary (new supply dilutes holders), stable (fixed supply), or deflationary (supply decreases over time). BTC: 21M fixed cap, zero inflation risk. ETH: ~120M circulating, deflationary at -0.2%/yr due to EIP-1559 burning ~2.1M ETH annually ($6.3B at $3K/ETH). Poor tokenomics = high dilution (team/investor vesting flooding market) → price downward pressure. Strong tokenomics = scarcity + buyback/burn → price upward bias.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is token vesting and how does it affect price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Token vesting locks founder/investor tokens for a period, releasing them gradually (usually monthly or quarterly over 1-4 years). Purpose: align incentives, prevent early dumps. Example: Uniswap UNI (Sept 2020): 4-year vesting for 600M tokens (40% of total supply). If all tokens unlocked immediately, market cap would be heavily diluted. vesting cliffs (e.g., 6-month cliff before any release) provide additional security. Vesting unlocks = downward price pressure if released tokens are dumped. Strong projects see vesting as incentive to build value; weak projects see it as exit ramp.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do burn mechanisms work and why are they valuable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Token burn removes supply from circulation permanently (sends to dead address or executes smart contract). BNB quarterly burns: Binance burns 25% of quarterly profits in BNB (over $6B burned since 2017, 57M BNB = ~30% of max supply removed). MKR buyback+burn: MakerDAO buys back MKR tokens with protocol surplus revenue, burns them (~$400M burned). Effect: reduces supply → increases scarcity → potential price appreciation if demand stable. Not automatic price pump: depends on community perception and fundamental demand. ETH EIP-1559 burn: 2.1M ETH (~$6.3B) burned 2021-2026, making ETH deflationary despite staking rewards (+1.3M ETH/yr). Net effect: mild deflationary pressure supporting price.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between circulating and fully-diluted market cap?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Circulating market cap: current price × circulating supply (tokens already in existence). Fully-diluted market cap (FDV): price × max supply (includes unvested tokens, future emissions). Example: Uniswap UNI (April 2026): price $12, circulating supply ~770M (market cap $9.2B), max supply 1B (FDV $12B). Difference: $2.8B of future dilution from vesting. FDV better reflects long-term valuation; circulating cap can be misleading if large vesting cliffs approaching. Always compare FDV when analyzing long-term value; use circulating cap for short-term trading context. Red flag: FDV >> circulating cap (e.g., 10x difference) = significant future dilution risk.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is real yield vs inflationary rewards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Real yield: rewards paid from protocol revenue (transaction fees, interest, trading fees). Example: Uniswap fees (0.05-1% per swap), ~$500M annually, partially distributed to liquidity providers and UNI holders. Sustainable long-term. Inflationary rewards: yield paid from new token issuance (printing new tokens). Example: Cosmos ATOM staking pays 18% APY from ~5% annual supply inflation. Unsustainable if inflation > utility growth. Real yield metrics: fee-based rewards (Uniswap, Curve with fee-switch on), actual protocol revenue distributed. Inflationary yield: appears attractive short-term but dilutes long-term holders. Prefer real-yield protocols (Aave earning lending fees, Curve with trading fees distributed) over inflationary issuance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do team and investor allocations impact long-term value?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Token distribution: community (airdrop, fair launch), team (10-20%), investors (20-40%), treasury/reserves (10-20%). High team/investor allocation = dilution risk if they dump. Uniswap UNI (Sept 2020): 60% team (4-year vesting), 21.51% to Uniswap community (airdrop), 18.49% to investors (unlock schedule). Vesting ensures founders stay aligned. Red flag: team/investor allocation >50% with short vesting (<1 year) = pump-and-dump risk. Ideal structure: 5-10% team vesting over 4 years, 10-15% investor allocation with 6-month cliff, 50%+ community/rewards for long-term incentive alignment. Check token unlock schedule on platforms like Messari or Token Unlock to see what\'s approaching.',
        },
      },
    ],
  },
};

const tableOfContents = [
  { id: 'supply-mechanics', title: 'Supply Mechanics: Fixed vs Inflationary' },
  { id: 'vesting-schedules', title: 'Vesting Schedules and Lock-Ups' },
  { id: 'distribution-breakdown', title: 'Token Distribution Breakdown' },
  { id: 'burn-mechanisms', title: 'Burn Mechanisms and Deflation' },
  { id: 'fmv-calculations', title: 'Fully Diluted Valuation (FDV) vs Circulating' },
  { id: 'real-yield-analysis', title: 'Real Yield vs Inflationary Rewards' },
  { id: 'case-studies', title: 'Tokenomics Case Studies' },
  { id: 'faq', title: 'FAQ' },
];

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Tokenomics How To Analyze', },
  ],
};

export default function TokenomicsHowToAnalyze() {
  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d', borderLeft: '3px solid #a78bfa', borderLeft: '3px solid #a78bfa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
  };

  const h1Style = {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 16,
    background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const h2Style = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/learn" style={{ color: '#8b949e', textDecoration: 'none' }}>Learn</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Tokenomics Analysis</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>Learn</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Intermediate</span>
          <h1 style={h1Style}>Crypto Tokenomics Analysis</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Master tokenomics fundamentals: supply mechanics, vesting schedules, token distribution, burn mechanisms, and how to identify inflationary vs real-yield projects.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 16 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-10"
          readingTime={16}
          section="learn"
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

        <section id="supply-mechanics">
          <h2 style={h2Style}>Supply Mechanics: Fixed vs Inflationary</h2>
          <h3 style={h3Style}>Bitcoin: The Fixed Supply Model</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Bitcoin has a hard cap of 21 million BTC. ~21 million BTC total will ever exist (currently ~21.5M mined as of April 2026). New BTC created only through mining (halving every 210,000 blocks ~4 years): 2024 halving reduced rewards from 6.25 to 3.125 BTC/block. By 2140, all BTC will be mined, with pure transaction fee incentives. Fixed supply = zero dilution risk. As adoption grows, scarcity premium increases. This was Bitcoin&apos;s core innovation: monetary policy embedded in code, not controllable by central banks.
          </p>

          <h3 style={h3Style}>Ethereum: The Deflationary Model (Post-Merge)</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Ethereum transitioned to Proof-of-Stake (Sept 2022, "The Merge"). New ETH issuance: ~1.3M/yr (down from ~5.5M/yr under Proof-of-Work). ETH burned (EIP-1559): ~2.1M/yr from transaction fees. Net effect: ETH is deflationary at -0.2%/yr (supply decreases ~0.2% annually). Circulating supply: ~120M ETH (April 2026). Net annual deflation: ~240K ETH removed from market. Over 10 years, ~2.4M ETH (~$7.2B at $3K/ETH) removed. This deflationary pressure supports long-term price appreciation independent of demand growth.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>💡 Key Insight:</strong> Fixed supply (BTC) creates predictable scarcity. Deflationary supply (ETH post-EIP1559) removes tokens over time. Inflationary supply (most altcoins with 5-50%/yr issuance) dilutes holders unless demand grows faster than issuance. When evaluating a token, always check: is supply fixed, stable, deflationary, or inflationary? Inflationary tokens require exceptional utility growth to maintain price.
          </div>
        </section>

        <section id="vesting-schedules">
          <h2 style={h2Style}>Vesting Schedules and Lock-Ups</h2>
          <h3 style={h3Style}>How Vesting Works</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Vesting locks tokens for founders, investors, and employees, releasing them gradually (typically monthly, quarterly, or annually over 1-4 years). Standard vesting structure: 4-year total vesting with 1-year cliff. Cliff = no tokens release for 12 months, then begin releasing monthly. Example: $1M token grant, 4-year vesting, 1-year cliff = 0 tokens after 6 months, but 250K tokens released after 12 months, then 20.8K/month for 36 more months. Purpose: align founder incentives with long-term success and prevent early token dumps that tank price.
          </p>

          <h3 style={h3Style}>Vesting Unlock Events and Price Impact</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Large vesting unlock events (e.g., 10M tokens unlocked in a month) = potential downward price pressure if recipients dump tokens to take profits or fund operations. Uniswap UNI (Sept 2020): 4-year vesting for 600M tokens (40% of 1.5B total supply). Monthly unlock = 12.5M tokens/month. In 2024, as major unlock cliffs approached, traders monitored vesting schedules for potential dumping risk. StarkNet STRK (Nov 2023): high vesting unlock rate → consistent downward pressure in early months, but recovered as utility grew. Check token unlock schedules on Messari, CoinGecko, or Token Unlock before major events.
          </p>

          <table style={tableStyle}>
            <thead>
              <tr style={{ background: '#0d1117' }}>
                <th style={thStyle}>Token</th>
                <th style={thStyle}>Vesting Period</th>
                <th style={thStyle}>Cliff</th>
                <th style={thStyle}>Current Locked %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Bitcoin (BTC)</td>
                <td style={tdStyle}>Ongoing mining</td>
                <td style={tdStyle}>No vesting</td>
                <td style={tdStyle}>0% locked</td>
              </tr>
              <tr>
                <td style={tdStyle}>Ethereum (ETH)</td>
                <td style={tdStyle}>Proof-of-Stake</td>
                <td style={tdStyle}>No cliff</td>
                <td style={tdStyle}>0% locked</td>
              </tr>
              <tr>
                <td style={tdStyle}>Uniswap (UNI)</td>
                <td style={tdStyle}>4 years</td>
                <td style={tdStyle}>None</td>
                <td style={tdStyle}>~2% (mostly vested)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Aave (AAVE)</td>
                <td style={tdStyle}>4 years</td>
                <td style={tdStyle}>6 months</td>
                <td style={tdStyle}>~5% (mostly vested)</td>
              </tr>
              <tr>
                <td style={tdStyle}>StarkNet (STRK)</td>
                <td style={tdStyle}>4 years</td>
                <td style={tdStyle}>None</td>
                <td style={tdStyle}>~45% (active unlocks ongoing)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="distribution-breakdown">
          <h2 style={h2Style}>Token Distribution Breakdown</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Token distribution splits the total supply among: Team (founders, early employees), Investors (VCs, angels), Community (airdrop, public sales), Treasury (for future protocol use), Mining/Staking (block rewards, validator incentives). Ideal distribution: 50%+ community (fair distribution), 10-15% team (aligned incentives), 20-30% investors (capital for development), 10-15% treasury (for future needs).
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            This is one of those topics where surface-level understanding is dangerous. We've seen traders lose significant capital from misconceptions covered in this guide.
          </p>
        </div>

          <h3 style={h3Style}>Red Flags in Token Distribution</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            (1) Team allocation &gt;30% with no vesting = founders can dump immediately. (2) Investor allocation &gt;50% with locked terms = concentrated whale power. (3) Community allocation &lt;20% = centralized distribution, potential for price manipulation. (4) No transparency on vesting schedules = inability to assess future dilution risk. (5) Heavy mining/staking emissions (&gt;10%/yr) without burn mechanism = high inflation, downward price pressure. Strong projects publish detailed token allocations with vesting schedules on their websites (Aave, Uniswap, Compound all publish detailed docs).
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>📊 Example Distribution (Aave):</strong> Aave LDO token (April 2026): 54% to Lido DAO treasury, 16.5% to Lido contributors, 15% to initial signers, 8% to team (4-year vesting), 6.5% other. Transparent allocation, strong community focus (54% treasury governance), balanced team incentive (4-year vesting). This is a well-structured tokenomics.
          </div>
        </section>

        <section id="burn-mechanisms">
          <h2 style={h2Style}>Burn Mechanisms and Deflation</h2>
          <h3 style={h3Style}>Ethereum EIP-1559: Automatic Burning</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            EIP-1559 (activated Aug 2021) burns a portion of transaction fees. Each transaction has a "base fee" (burned) + "priority fee" (to miners/validators). Base fee: dynamically adjusts based on network congestion. ~2.1M ETH burned annually since activation. At $3K/ETH, that&apos;s $6.3B annual deflation. This makes ETH deflationary despite ongoing validator rewards (~1.3M ETH/yr). Net deflationary effect: ~0.8M ETH/yr removed from supply. Over 50 years, ~40M ETH removed (33% of supply). This provides long-term scarcity support independent of adoption growth.
          </p>

          <h3 style={h3Style}>Binance BNB Quarterly Burn</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Binance commits to burning 25% of quarterly profits in BNB tokens (purchased on market, then burned). Since 2017, Binance has burned ~57M BNB (worth ~$19B at current price). Total BNB supply cap: 200M. Already burned: ~28% of max supply. Burn schedule continues until 50% of max supply (100M BNB) is burned. This mechanism: reduces supply over time, creates predictable scarcity, removes tokens from market. BNB price appreciated ~4,500% (2017-2026) partly due to scarcity from burns.
          </p>

          <h3 style={h3Style}>MakerDAO MKR Buyback and Burn</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            MakerDAO generates revenue from stability fees (DAI stablecoin users pay ~1-5% annual interest). This revenue is used to buy MKR tokens on the open market, then burn them. ~$400M in MKR burned since inception (~1.5M MKR). MKR max supply: 1M (capped at 1M by governance). Burned MKR: ~50% of total supply. Effect: extremely scarce token (only ~500K actual supply due to burns), high price floor from continuous buyback mechanism. MKR traded $2,500-4,000 range (April 2026) vs $500-1,500 range for other governance tokens, partly due to burn scarcity.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>💎 Burn &gt; Price Pump:</strong> Token burns are not automatic price pumps. Price rises only if: (1) demand stable/growing while supply decreases, or (2) market perceives burns as bullish signal (founder commitment to scarcity). If utility declines but burns continue, price still falls. ETH burns are valuable because ETH utility (Layer 1 security, DeFi hub) is strong. BNB burns are valuable because Binance exchange activity is strong. Always evaluate: is the token&apos;s utility growing faster than supply shrinking?
          </div>
        </section>

        <section id="fmv-calculations">
          <h2 style={h2Style}>Fully Diluted Valuation (FDV) vs Circulating Cap</h2>
          <h3 style={h3Style}>Understanding the Difference</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Market Cap (Circulating) = Current price × Circulating supply (tokens in existence today). Fully Diluted Valuation (FDV) = Current price × Max supply (includes all future tokens: vesting, mining, staking rewards, future issuance). FDV shows potential dilution impact if all tokens were released today. Example: Uniswap UNI (April 2026): price $12, circulating ~770M (market cap $9.2B), max supply 1B (FDV $12B). Difference: $2.8B = future dilution from remaining vesting (token unlock schedule shows ~230M tokens still vesting over 2-3 years).
          </p>

          <h3 style={h3Style}>Why FDV Matters</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            A token with market cap $5B but FDV $20B is misleading: apparent undervalued (vs other $10B FDV projects) but actually overvalued relative to future supply. High FDV/market cap ratio = significant dilution ahead. Threshold: FDV &lt; 2x market cap is healthy, 2-5x is moderate dilution risk, &gt;5x is high dilution risk (red flag). Red flag tokens: early-stage projects with massive vesting cliffs (e.g., token market cap $1B but FDV $10B = 90% of supply not yet released). Always use FDV for valuation comparisons, especially when comparing projects at different maturity stages.
          </p>

          <table style={tableStyle}>
            <thead>
              <tr style={{ background: '#0d1117' }}>
                <th style={thStyle}>Token</th>
                <th style={thStyle}>Price</th>
                <th style={thStyle}>Market Cap</th>
                <th style={thStyle}>FDV</th>
                <th style={thStyle}>FDV/Cap Ratio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Bitcoin (BTC)</td>
                <td style={tdStyle}>$65,000</td>
                <td style={tdStyle}>$1,365B</td>
                <td style={tdStyle}>$1,365B</td>
                <td style={tdStyle}>1.0x (fixed supply)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Ethereum (ETH)</td>
                <td style={tdStyle}>$3,200</td>
                <td style={tdStyle}>$384B</td>
                <td style={tdStyle}>$384B</td>
                <td style={tdStyle}>1.0x (all vested)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Uniswap (UNI)</td>
                <td style={tdStyle}>$12</td>
                <td style={tdStyle}>$9.2B</td>
                <td style={tdStyle}>$12B</td>
                <td style={tdStyle}>1.3x (moderate dilution)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Aave (AAVE)</td>
                <td style={tdStyle}>$380</td>
                <td style={tdStyle}>$5.3B</td>
                <td style={tdStyle}>$5.4B</td>
                <td style={tdStyle}>1.02x (minimal dilution)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="real-yield-analysis">
          <h2 style={h2Style}>Real Yield vs Inflationary Rewards</h2>
          <h3 style={h3Style}>Real Yield: Protocol Revenue Distribution</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Real yield rewards come from actual protocol revenue (not new token issuance). Examples: (1) Uniswap: 0.05-1% swap fees → ~$500M annual revenue, distributed to liquidity providers and UNI holders who stake. (2) Aave: lending interest spread (spreads between borrowing/lending rates) → ~$200M annual revenue, distributed to governance participants. (3) Curve: trading fees (0.04%) → ~$150M annual revenue, distributed to CRV stakers. Real yield is sustainable long-term because it depends on actual user activity and value creation, not unlimited token printing.
          </p>

          <h3 style={h3Style}>Inflationary Rewards: Token Issuance</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Inflationary rewards pay holders from new token issuance (printing new tokens). Example: Cosmos ATOM staking offers 18% APY, funded by ~5% annual supply inflation. Early stakers are rewarded, but late stakers experience dilution as supply grows. This is only sustainable if token utility (and demand) grows faster than issuance rate. Danger: if inflation &gt;demand growth, token price declines even as stakers earn nominal yields (real yield negative). Example: Luna (pre-collapse) offered 18% staking APY but failed because inflation outpaced demand → price crashed from $80 to $0.0001 despite high APY.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>⚖️ Real vs Inflationary Yield Comparison:</strong> Real yield: sustainable but lower (&lt;5%/yr typical). Inflationary yield: attractive (&lt;20%/yr) but risky if project lacks utility growth. Prefer real yield for long-term holdings. Inflationary yield only if you believe token utility will grow faster than inflation rate. Always calculate net real return: staking APY minus inflation rate. ATOM 18% APY - 5% inflation = 13% real yield (still attractive). Luna 20% APY - 30% inflation = -10% real yield (negative, doomed).
          </div>
        </section>

        <section id="case-studies">
          <h2 style={h2Style}>Tokenomics Case Studies</h2>
          <h3 style={h3Style}>Bitcoin: Perfect Scarcity</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            21M fixed cap. Zero ongoing inflation (after ~2140). Halving every 4 years reduces new supply by 50%. Result: programmatic scarcity that increases over time. ~20.9M BTC already mined (99.5% of total). Remaining ~0.1M BTC released over ~120 years. Perfect tokenomics for store-of-value case. Risk: zero real yield (pure speculation), transaction fees may not sustain security long-term (open question for 2050+).
          </p>

          <h3 style={h3Style}>Ethereum: Deflationary Engineering</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Deflationary post-EIP1559 (-0.2%/yr). Validator rewards sustainable (1.3M ETH/yr) as long as Ethereum usage generates &gt;$2.1M ETH/yr in transaction fees. Real yield sources: MEV (miner extractable value), base fees, tips. Ethereum&apos;s strong utility (DeFi, L1 security, NFTs, Layer 2 settlement) sustains fee generation. Long-term: ETH becomes deflationary unless transaction demand collapses. Best large-cap tokenomics post-Merge.
          </p>

          <h3 style={h3Style}>Aave: Real Yield from Lending</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: '#c9d1d9' }}>
            Aave revenue: ~$200M annually from lending/borrowing spread. Governance participants earn real yields by staking. AAVE price: $380 (April 2026), market cap $5.3B. P/E ratio (market cap / annual revenue): 26.5x, reasonable for DeFi infrastructure. Tokenomics: AAVE inflation controlled, governance rewards tied to actual protocol revenue. Sustainable, real-yield focused model. Strong fundamentals support long-term valuation.
          </p>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is the difference between circulating and fully-diluted market cap?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              Circulating market cap = current price × tokens in circulation today. Fully-diluted market cap (FDV) = current price × max supply (includes all unvested tokens). FDV accounts for future dilution from vesting cliffs and new issuance. Example: UNI $12 price, 770M circulating (cap $9.2B), 1B max supply (FDV $12B). Difference ($2.8B) represents future dilution as 230M tokens unlock over 2-3 years. Always compare FDV when evaluating long-term value; circulating cap can be misleading for young projects.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Are burn mechanisms valuable for price appreciation?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              Burns reduce supply, but price only appreciates if: (1) demand is stable/growing, or (2) market perceives burns as bullish signal. ETH EIP-1559 burns ~2.1M ETH/yr ($6.3B value) and supports price because Ethereum utility is strong (DeFi, L1 security). BNB quarterly burns (~$300M/yr) support price because Binance exchange usage is robust. If utility collapses, burns cannot prop up price. Conclusion: burns are valuable amplifiers of strong fundamentals, not solutions to weak projects.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is real yield and why is it better than inflationary rewards?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              Real yield comes from actual protocol revenue (transaction fees, interest spreads), not token printing. Uniswap ($500M annual revenue), Aave ($200M), Curve ($150M) distribute real yields. Inflationary yields come from new token issuance (ATOM 18% APY from 5% inflation). Real yield is sustainable long-term; inflationary yield only works if token utility grows faster than inflation. Calculate net real return: APY minus inflation rate. ATOM 18% - 5% = 13% real yield (good). Prefer real-yield projects for long-term investments.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How do vesting schedules affect token price?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              Large vesting unlocks (10M+ tokens) release supply, creating downward price pressure if recipients dump. StarkNet STRK saw consistent price declines in early months due to high unlock rates. Monitor vesting schedules on Messari or Token Unlock before major events. Projects with transparent, well-distributed vesting schedules are lower-risk (Aave, Uniswap) vs projects with concentrated founder vesting cliffs (high dump risk). Always check how much supply is locked before investing in new projects.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What tokenomics structure should I look for in new tokens?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              Ideal structure: (1) Fixed or deflationary supply (not &gt;10%/yr inflation), (2) Team allocation &lt;15% with 4-year vesting, (3) Community allocation &gt;50%, (4) Transparent vesting schedule published, (5) Real yield mechanisms (if applicable), (6) Low FDV/market cap ratio (&lt;2x), (7) Active burn mechanism (if inflationary). Example: Aave (transparent, real yield, moderate dilution) vs Luna pre-collapse (high inflation, poor governance). Always read the tokenomics whitepaper before investing.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Why is Bitcoin&apos;s 21M cap important?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c9d1d9' }}>
              21M fixed cap = zero inflation, perfect scarcity. Every BTC becomes more scarce as supply diminishes toward ~21M limit. This appeals to investors seeking store-of-value (like gold). No central bank can inflate supply. Halving every 4 years reduces new supply by 50%, programmatically enforcing scarcity. While BTC has zero utility-based yield, its scarcity and network security create long-term value foundation. For 50+ year horizon, BTC&apos;s fixed supply is its strongest advantage over all other assets.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and is not financial advice. Tokenomics analysis is one factor among many (team, utility, market conditions) affecting token value. Past token performance does not guarantee future results. Always conduct thorough due diligence and consult a financial advisor before investing. Token vesting schedules, burn rates, and inflation parameters can change via governance; monitor official sources for updates.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/tools/bitcoin-rainbow-chart" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Bitcoin Rainbow Chart</Link></li>
            <li><Link href="/tools/blockchain-explorer-tool" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Blockchain Explorer Tool</Link></li>
            <li><Link href="/tools/compound-interest-crypto-calculator" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Compound Interest Crypto Calculator</Link></li>
            <li><Link href="/tools/crypto-airdrop-tracker" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Airdrop Tracker</Link></li>
          </ul>
        </nav>

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
        </div>
      </article>
  );
}
