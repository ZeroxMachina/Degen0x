import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Crypto Airdrop Tracker: Earni.fi, DeBank, LayerZero Checker",
  description: "Track eligible crypto airdrops with Earni.fi, DeBank, and airdrop.io. Check LayerZero, Arbitrum, Optimism eligibility. Qualify for airdrops: bridge, swap,",
  keywords: ['crypto airdrop', 'airdrop tracker', 'Earni.fi', 'DeBank', 'LayerZero', 'Arbitrum airdrop', 'airdrop farming', 'sybil detection'],
  openGraph: {
    title: 'Crypto Airdrop Tracker',
    description: 'Complete guide to crypto airdrop trackers and eligibility checking tools.',
    url: 'https://degen0x.com/tools/crypto-airdrop-tracker',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Airdrop Tracker',
    description: 'Track airdrops and check eligibility with airdrop finder tools.',
  },
  alternates: {
    canonical: 'https://degen0x.com/tools/crypto-airdrop-tracker',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Crypto Airdrop Tracker: Earni.fi, DeBank, LayerZero Checker & Airdrop.io',
  description: 'Comprehensive guide to cryptocurrency airdrop trackers, eligibility checkers, and farming strategies.',
  image: 'https://degen0x.com/og-tools.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I check if Im eligible for airdrops?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use Earni.fi to connect your wallet and scan 100+ past/future airdrops. DeBank\'s airdrop section shows upcoming airdrops by blockchain (Arbitrum, Optimism, Polygon, Base). LayerZero Checker verifies your eligibility for $ZRO airdrop (must have bridged using LayerZero endpoints). Airdrop.io lists 500+ historical airdrops with eligibility criteria. Most require: (1) wallet activity (swap, bridge, farm) before snapshot date, (2) non-sybil verification, (3) KYC for some projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are common airdrop eligibility requirements?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most airdrops require: (1) Bridge at least $100+ using Stargate/Across/Hop before snapshot. (2) Swap on DEX (Uniswap, Curve) >3 transactions. (3) Stake in protocol (Lido, Rocket Pool) for 30+ days. (4) Farm LP tokens (Uniswap V3 = automatic, Curve = manual voting). (5) Hold governance token for voting. Arbitrary snapshot (users must hold token on specific date). Retroactive (airdrop claims before trading enabled). Common red flag: airdrop requires KYC upfront (likely scam); real airdrops do KYC at claim time.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is sybil detection and why does it matter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sybil detection = finding users controlling multiple wallets to claim airdrop X times. Projects use address clustering (same IP, same funding source, same transaction patterns) to identify sybils. If caught: airdrop revoked, wallet banned, sometimes liquidated. MetaMask Swaps IP check triggered false positives in 2024 (users with same ISP flagged as sybils). Legitimate users with multiple wallets (trading account + vault) should disclose all wallets if project allows portfolio linking.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I farm airdrops without risking funds?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use capital-light strategies: (1) Bridge $50 using Stargate (low fee risk), hold for 1 month, bridge back. Cost = ~$10-20 in fees, 0% impermanent loss. (2) Swap <$100 on 3 DEXs (Uniswap, Curve, Balancer) = $30-50 fees. (3) Use Pendle Airdrop Blast protocol to clone other farmers\' positions (free airdrop farming). (4) LP farm: deposit $100 stablecoin pair on Curve (0% IL risk), wait 3 months, withdraw. Cost = ~$5 in fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the biggest historical airdrops?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Uniswap (2020): $1.5B distributed to 250k addresses (users who swapped >1 tx). Optimism (2022): $OP token airdrop to 306k addresses. Arbitrum (2023): $ARB token airdrop to 625k addresses ($4.5B supply, average $1.2k per wallet). LayerZero (2025): $ZRO $5.3B supply, estimated $2-10k per eligible wallet. zkSync Era (2024): $ZK to 700k addresses ($1.8B supply, ~$2.5k average). Biggest airdrop claimers were early Arbitrum users (staked funds for 1+ year) and bridges (>$1M activity).',
        },
      },
      {
        '@type': 'Question',
        name: 'Which blockchains have the most airdrop opportunities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Arbitrum One (8-12 planned airdrops 2024-2025 based on GMX, GLP, treasury grants). Optimism (Velodrome, Aevo, Synthetix airdrop series). Polygon (MATIC, Quickswap, Aave seasonal). Base (Aerodrome, Degen, others). Ethereum mainnet (traditional projects, expensive to farm). Newer chains (Scroll, Linea, Mantle) have >100 expected airdrop announcements for 2025 (most unverified). Strategy: focus on established Layer 2s with functioning ecosystems.',
        },
      },
    ],
  },
};

const tableOfContents = [
  { id: 'overview', title: 'What Are Crypto Airdrops?' },
  { id: 'trackers', title: 'Top Airdrop Tracker Tools' },
  { id: 'comparison', title: 'Airdrop Tracker Comparison' },
  { id: 'eligibility', title: 'Airdrop Eligibility Requirements' },
  { id: 'farming-strategies', title: 'Airdrop Farming Strategies' },
  { id: 'sybil-detection', title: 'Sybil Detection & Anti-Farming' },
  { id: 'risks', title: 'Airdrop Risks & Scams' },
  { id: 'faq', title: 'FAQ' },
];

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #10b981, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#10b981' };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://degen0x.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Crypto Airdrop Tracker', },
  ],
};

export default function CryptoAirdropTracker() {
  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
  };

  const h1Style = {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 16,
    background: 'linear-gradient(135deg, #f59e0b, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const h2Style = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: '#e6edf3',
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
          <Link href="/tools" style={{ color: '#8b949e', textDecoration: 'none' }}>Tools</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Crypto Airdrop Tracker</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#f59e0b', color: '#0d1117' }}>Tools</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Beginner</span>
          <h1 style={h1Style}>Crypto Airdrop Tracker Guide</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Track eligible airdrops with Earni.fi, DeBank, and airdrop.io. Master airdrop farming, verify sybil detection risks, and strategize claims worth $1k-$10k per wallet.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 17 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="0xMachina"
          role="Founder"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={17}
          section="tools"
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

        <section id="overview">
          <h2 style={h2Style}>What Are Crypto Airdrops?</h2>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            Crypto airdrops are free token distributions from blockchain projects to reward community members. Projects use airdrops to bootstrap liquidity (Uniswap), incentivize protocol usage (Arbitrum), or reward early users (LayerZero). Eligible users receive tokens directly to their wallet (typically), or must claim during a claim window. Historical airdrops: Uniswap ($1.5B, $400-$1,500 per wallet), Optimism ($OP, $1.2k average), Arbitrum ($ARB, $1.2k-$10k heavy user), LayerZero ($ZRO, estimated $2k-$10k per eligible wallet).
          </p>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            Airdrops incentivize specific behaviors: bridges (use Stargate, Across), swaps (trade on DEXs), staking (lock tokens), farming (provide LP). Projects conduct snapshots on specific dates, then distribute tokens to wallets meeting criteria. Some airdrops are retroactive (announced after usage); others are prospective (announced before, incentivize future activity).
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#58a6ff' }}>Airdrop Value Potential:</strong> LayerZero 2025 airdrop (5.3B $ZRO total supply): at $1 per token (10x current price) = $50 billion market cap. Average claimant (100M $ZRO) = $100k value. Conservative estimate: $2-10k per wallet. Arbitrum 2023 was $1-10k per wallet; similar projects benchmark expectations.
          </div>
        </section>

        <section id="trackers">
          <h2 style={h2Style}>Top Airdrop Tracker Tools</h2>

          <h3 style={h3Style}>Earni.fi - Best All-in-One Airdrop Finder</h3>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            Earni.fi connects your wallet and automatically scans 100+ past/upcoming airdrops, showing eligibility status, estimated claim amounts, and claim deadlines. Interface shows completed airdrops (claimed/missed), active airdrops (eligibility pending), and expected airdrops (farming strategies). Mobile app + browser extension support. Free tier covers 50 airdrops; premium tier ($49/month) includes alerts and advanced filtering. Best for casual airdrop hunters.
          </p>

          <h3 style={h3Style}>DeBank Airdrop Section</h3>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            DeBank (debank.com) is a portfolio tracker with an integrated airdrop section showing upcoming airdrops by blockchain (Arbitrum, Optimism, Polygon, Base, Ethereum). Lists eligibility criteria for each airdrop and expected distribution dates. Less comprehensive than Earni.fi (doesn&apos;t auto-scan your wallet) but updated frequently with newest airdrop announcements. Free and no wallet connection required.
          </p>

          <h3 style={h3Style}>LayerZero Checker - Protocol-Specific</h3>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            LayerZero Checker (layerzero-checker.xyz) verifies your eligibility for the $ZRO airdrop specifically. Connect your wallet, it calculates points (based on bridges, swaps, duration held). Estimated $ZRO allocation shown (based on public point formula). Only covers LayerZero ecosystem (Stargate, Across integration); useless for other airdrops. But critical for the single largest airdrop expected in 2025.
          </p>

          <h3 style={h3Style}>Airdrop.io - Historical Database</h3>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            Airdrop.io catalogs 500+ historical airdrops with eligibility details and outcomes. Research past airdrop criteria to predict future patterns. Example: "Arbitrum required 5+ protocol interactions" → expect future airdrops to require similar activity levels. Free tool, no wallet connection needed.
          </p>
        </section>

        <section id="comparison">
          <h2 style={h2Style}>Airdrop Tracker Comparison</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Tracker</th>
                <th style={thStyle}>Airdrops Listed</th>
                <th style={thStyle}>Eligibility Check</th>
                <th style={thStyle}>Alerts</th>
                <th style={thStyle}>Free Tier</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Earni.fi</td>
                <td style={tdStyle}>100+ active + historical</td>
                <td style={tdStyle}>Automatic wallet scan</td>
                <td style={tdStyle}>Yes (premium $49/mo)</td>
                <td style={tdStyle}>Yes (limited)</td>
              </tr>
              <tr>
                <td style={tdStyle}>DeBank Airdrops</td>
                <td style={tdStyle}>50+ upcoming</td>
                <td style={tdStyle}>Manual check (criteria shown)</td>
                <td style={tdStyle}>No</td>
                <td style={tdStyle}>Yes (no premium)</td>
              </tr>
              <tr>
                <td style={tdStyle}>LayerZero Checker</td>
                <td style={tdStyle}>LayerZero only (1)</td>
                <td style={tdStyle}>Wallet points calculation</td>
                <td style={tdStyle}>No</td>
                <td style={tdStyle}>Yes</td>
              </tr>
              <tr>
                <td style={tdStyle}>Airdrop.io</td>
                <td style={tdStyle}>500+ historical</td>
                <td style={tdStyle}>None (research only)</td>
                <td style={tdStyle}>No</td>
                <td style={tdStyle}>Yes</td>
              </tr>
              <tr>
                <td style={tdStyle}>DappRadar Airdrops</td>
                <td style={tdStyle}>100+ by category</td>
                <td style={tdStyle}>Manual</td>
                <td style={tdStyle}>No</td>
                <td style={tdStyle}>Yes</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="eligibility">
          <h2 style={h2Style}>Airdrop Eligibility Requirements</h2>

          <h3 style={h3Style}>Common Eligibility Criteria</h3>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            Bridge requirement: Bridge minimum $100-1,000 using Stargate, Across, Hop Finance before snapshot date. Most airdrops require 1+ bridge transaction. LayerZero airdrops require bridge via LayerZero endpoints (most stringent). Arbitrum required users to have $100+ in Arbitrum ecosystem by snapshot (Dec 2022).
          </p>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            Swap/trading: 3+ swaps on protocol DEX (Uniswap, Curve, Balancer) within timeframe. Staking: Hold governance token or stake in protocol for 30+ days (Lido DAO, Aave, Compound). Farming: Provide LP tokens to incentivized pool for 2+ months. Holding: Simply hold token in wallet on snapshot date (easiest, thus common for new tokens).
          </p>

          <h3 style={h3Style}>Red Flags & Scams</h3>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            Red flag: "Pay $500 to qualify for $10,000 airdrop" = scam (legitimate airdrops never require upfront payment). Red flag: "KYC required before claim" = suspicious (real airdrops do KYC after claiming to prevent sybils). Red flag: "Send tokens to smart contract to claim 10x airdrop" = rug (contract steals tokens). Legitimate airdrops: free to claim, no gas required (airdrop covers it), verified contract address matching project official channels.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#58a6ff' }}>Verification Checklist:</strong> (1) Is claim link from official project website? (2) Does contract address match? (3) Are other users claiming successfully? (4) Does project have real team (GitHub, Twitter history)? Fail any = skip.
          </div>
        </section>

        <section id="farming-strategies">
          <h2 style={h2Style}>Airdrop Farming Strategies</h2>

          <h3 style={h3Style}>Capital-Light Farming (Low Upfront Cost)</h3>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            Bridge farming: Bridge $50-100 using Stargate (Gas: $5-10 Ethereum, $1-2 Arbitrum). Hold for 1-3 months to qualify for airdrop snapshot. Bridge back to recover funds ($5-10 gas). Total cost: $10-20, zero impermanent loss, expected airdrop value $100-500. Swap farming: Execute 3 swaps on DEX ($100 token minimum per swap) = $30-50 in fees. Expected airdrop $50-200.
          </p>

          <h3 style={h3Style}>LP Farming (Medium Risk, Longer Timeline)</h3>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            Deposit $1,000 stablecoin pair (USDC/USDT) on Curve or Uniswap V2 for 3 months (0% impermanent loss on stablecoin pairs). Collect trading fees (0.5-1% annually), qualify for airdrop. Cost: ~$5-10 gas. Return: LP fees ($2-5 per month) + airdrop ($500-2,000 estimated). Risk: smart contract bug (Curve/Uniswap audited, low risk).
          </p>

          <h3 style={h3Style}>Staking Farming (High Capital Requirement)</h3>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            Stake $10,000 in Lido, Rocket Pool, or dYdX to qualify for airdrops. Receive staking APY (3-8%) + airdrop allocation (often proportional to stake). Risk: staking lock-ups (Rocket Pool 16 ETH min), slashing risk (low but non-zero on Rocket Pool). Expected airdrop: $5-50k depending on future token price.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#58a6ff' }}>Optimal Strategy 2025:</strong> Bridge $50 using Stargate (qualify for LayerZero). Swap $100 on Curve/Uniswap (qualify for Arbitrum/Optimism). Deposit $1k stablecoins on Curve (qualify for Curve/Balancer). Total cost: ~$30-50. Expected airdrop value: $2-10k. ROI: 4000%+.
          </div>
        </section>

        <section id="sybil-detection">
          <h2 style={h2Style}>Sybil Detection & Anti-Farming</h2>

          <h3 style={h3Style}>How Projects Detect Sybils</h3>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            Address clustering: wallets funded from same address, same IP, same Etherscan activity patterns flagged as controlled by 1 user. Time-pattern analysis: if 100 wallets execute identical swap at same timestamp, likely 1 user botting. Balance overlap: if wallets receive same tokens from same source, likely sybil. Funding source tracking: if all wallets bridge via same Kraken deposit, linked. Transaction graph analysis: complex but most effective (projects trace all tx flows).
          </p>

          <h3 style={h3Style}>Consequences of Sybil Detection</h3>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            Airdrop revoked (tokens returned to project). Wallet blacklisted (future airdrops rejected). Liquidated (malicious projects liquidate sybil wallets; rare). Arbitrum&apos;s 2023 airdrop removed 10,000+ wallets post-distribution for sybil behavior (wallet holders lost $1-10k each). LayerZero explicitly stated sybils will be "slashed" (airdrop removed).
          </p>

          <h3 style={h3Style}>Safe Multi-Wallet Strategy</h3>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            If farming with multiple wallets (legitimate use case): (1) Use different Ethereum addresses (non-derivable from seedphrase). (2) Fund each from different source (different exchanges, different timing). (3) Vary transaction patterns (different swaps, different DEXs). (4) Vary IP addresses if possible (VPN rotation). (5) Declare wallets to project if portfolio linking available (transparency reduces sybil risk). Projects increasingly allow "portfolio linking" where users voluntarily link related wallets (reduces suspicion).
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#58a6ff' }}>Safe Assumption:</strong> Assume projects will detect sybils. Design farming strategy as if all wallets will be traced. Only multi-wallet farm if economically justified by airdrop value (LayerZero yes; $500 airdrop no).
          </div>
        </section>

        <section id="risks">
          <h2 style={h2Style}>Airdrop Risks & Scams</h2>

          <h3 style={h3Style}>Token Value & Dump Risk</h3>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            Airdrops often underperform expectations. Uniswap ($UNI) was $3 at launch, dropped to $0.50 before recovering. Optimism ($OP) launched at $2, fell to $0.80, recovered to $3+. Arbitrum ($ARB) launched at $1.20, dropped to $0.65. Many tokens lose 50-80% value immediately post-launch as early claimants dump. Strategy: claim airdrop, hold 5-10% speculative, sell 50% immediately to lock gains, stake remainder if APY &gt;8%.
          </p>

          <h3 style={h3Style}>Fake Airdrop Links & Phishing</h3>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            Scammers create fake Twitter accounts (@laye0zero instead of @LayerZero) and tweet airdrop links that steal wallet seeds. Always verify contract address directly from project website (not links). Never paste seedphrase in browser (legitimate airdrops never ask). Use MetaMask permission system (approve only specific transaction amount, never unlimited).
          </p>

          <h3 style={h3Style}>Impermanent Loss on LP Farms</h3>
          <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 16, lineHeight: 1.8 }}>
            LP farming on volatile pairs (ETH/USDC) can cause 20-30% IL if prices move &gt;50%. Stablecoin pairs (USDC/USDT) have 0% IL. If farming for airdrop on volatile pair, IL loss could exceed airdrop value. Example: Farm $1,000 on Uniswap V3 ETH/USDC, ETH drops 40%, suffer $200 IL, receive $300 airdrop = net +$100 profit. But if airdrop is only $50, you lose $150. Always farm stablecoins unless airdrop value expected &gt;5x capital.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#58a6ff' }}>Risk Management:</strong> Never invest more than you can afford to lose to farm airdrops. Assume 50% chance airdrop doesn&apos;t materialize (project delays, kills program). If farming $1k, assume 50% chance = $500 loss.
          </div>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How do I check if I&apos;m eligible for airdrops?</h3>
            <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 0, lineHeight: 1.8 }}>
              Use Earni.fi to connect your wallet and scan 100+ past/future airdrops. DeBank&apos;s airdrop section shows upcoming airdrops by blockchain. LayerZero Checker verifies your eligibility for $ZRO airdrop. Airdrop.io lists 500+ historical airdrops with eligibility criteria.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What are common airdrop eligibility requirements?</h3>
            <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 0, lineHeight: 1.8 }}>
              Most airdrops require: (1) Bridge at least $100+ using Stargate/Across/Hop before snapshot. (2) Swap on DEX &gt;3 transactions. (3) Stake in protocol for 30+ days. (4) Farm LP tokens. (5) Hold governance token for voting. Common red flag: airdrop requires KYC upfront (likely scam).
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is sybil detection and why does it matter?</h3>
            <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 0, lineHeight: 1.8 }}>
              Sybil detection = finding users controlling multiple wallets to claim airdrop X times. Projects use address clustering and transaction patterns. If caught: airdrop revoked, wallet banned. Assume projects will detect sybils.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How can I farm airdrops without risking funds?</h3>
            <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 0, lineHeight: 1.8 }}>
              Use capital-light strategies: (1) Bridge $50 using Stargate (low fee risk). (2) Swap &lt;$100 on 3 DEXs. (3) LP farm stablecoins (0% IL risk). (4) Use Pendle Airdrop Blast protocol. Cost = ~$30-50, expected airdrop $200-500.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What are the biggest historical airdrops?</h3>
            <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 0, lineHeight: 1.8 }}>
              Uniswap (2020): $1.5B to 250k addresses. Optimism (2022): $OP airdrop to 306k addresses. Arbitrum (2023): $ARB to 625k addresses. LayerZero (2025): $ZRO estimated $2-10k per eligible wallet. zkSync Era (2024): $ZK to 700k addresses.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Which blockchains have the most airdrop opportunities?</h3>
            <p style={{ fontSize: 16, color: '#c9d1d9', marginBottom: 0, lineHeight: 1.8 }}>
              Arbitrum One (8-12 planned airdrops 2024-2025). Optimism (Velodrome, Aevo, Synthetix series). Polygon (MATIC, Quickswap, Aave seasonal). Base (Aerodrome, Degen). Newer chains (Scroll, Linea, Mantle) have 100+ expected airdrop announcements for 2025. Focus on established Layer 2s.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and does not constitute investment or financial advice. Airdrops are speculative; past airdrop values do not guarantee future results. Farming airdrops carries risks: smart contract vulnerabilities, impermanent loss, sybil detection bans, and token value collapse. Never invest more than you can afford to lose. Verify all claims and links directly from official project sources. Consult a financial advisor before executing airdrop farming strategies with significant capital.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/compare/hot-wallet-vs-cold-wallet" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Hot Wallet Vs Cold Wallet</Link></li>
            <li><Link href="/compare/polygon-vs-arbitrum-vs-optimism" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Polygon Vs Arbitrum Vs Optimism</Link></li>
            <li><Link href="/compare/proof-of-work-vs-proof-of-stake" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Proof Of Work Vs Proof Of Stake</Link></li>
            <li><Link href="/compare/solana-vs-avalanche-comparison" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Solana Vs Avalanche</Link></li>
                      <li><a href="/tools/airdrop-eligibility" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Airdrop Eligibility</a></li>
            <li><a href="/tools/airdrop-tracker" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Airdrop Tracker</a></li>
                      <li><a href="/tools/bridge-aggregator-v2" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Bridge Aggregator V2</a></li>
            <li><a href="/tools/crypto-watchlist" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Watchlist</a></li>
          </ul>
        </nav>


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Crypto Airdrop Tracker",
              "url": "https://degen0x.com/tools/crypto-airdrop-tracker",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </article>
  );
}
