import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH, SITE_URL } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best DeFi Yield Aggregators of 2026 — Top APY Protocols Compared`,
  description: `Compare the best DeFi yield aggregators of ${CURRENT_YEAR}. We rank protocols by APY, TVL, security, supported chains, and strategy complexity. Find the highest safe yields for your crypto.`,
  alternates: { canonical: `${SITE_URL}/defi-lending/best/yield-aggregators` },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

interface YieldProtocol {
  rank: number;
  name: string;
  slug: string;
  tagline: string;
  logo: string;
  chains: string[];
  tvl: string;
  bestApy: string;
  stableApy: string;
  ethApy: string;
  riskLevel: "Low" | "Medium" | "High" | "Variable";
  audits: number;
  strategies: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  url: string;
  rating: number;
}

const protocols: YieldProtocol[] = [
  {
    rank: 1,
    name: "Yearn Finance",
    slug: "yearn-finance",
    tagline: "The original yield optimizer — auto-compounds across the best DeFi strategies",
    logo: "🔵",
    chains: ["Ethereum", "Arbitrum", "Optimism", "Polygon", "Base"],
    tvl: "$1.9B",
    bestApy: "28.4%",
    stableApy: "8.2%",
    ethApy: "5.1%",
    riskLevel: "Low",
    audits: 14,
    strategies: ["Curve LP", "Convex Finance", "Aave", "Compound", "Balancer"],
    pros: [
      "Most battle-tested yield aggregator (operating since 2020)",
      "Conservative strategy selection — prioritizes safety over max APY",
      "Auto-compounding saves gas and maximizes returns",
      "Transparent strategy code, fully auditable on-chain",
      "Multi-chain support with native bridging",
    ],
    cons: [
      "Performance fees (20% of profits) reduce net APY vs manual strategies",
      "Gas costs on Ethereum mainnet can eat into returns for small deposits",
      "Lower APYs than riskier competitors",
    ],
    bestFor: "Conservative DeFi users who want set-and-forget yield optimization",
    url: "https://yearn.fi",
    rating: 9.2,
  },
  {
    rank: 2,
    name: "Convex Finance",
    slug: "convex-finance",
    tagline: "Maximize Curve LP rewards without locking CRV — boosted yields made simple",
    logo: "🟠",
    chains: ["Ethereum", "Arbitrum"],
    tvl: "$2.4B",
    bestApy: "35.6%",
    stableApy: "12.8%",
    ethApy: "7.2%",
    riskLevel: "Low",
    audits: 8,
    strategies: ["Curve LP Boosting", "CRV Rewards", "CVX Staking"],
    pros: [
      "Highest stablecoin yields among low-risk aggregators",
      "Boost Curve LP rewards without locking 4-year veCRV",
      "CVX token provides additional yield layer",
      "Direct integration with Curve — battle-tested underlying protocol",
      "Passive management — just deposit and earn",
    ],
    cons: [
      "Only works with Curve LP positions — limited to Curve ecosystem",
      "Yield depends on CRV/CVX token prices, which can decline",
      "More complex fee structure to understand",
    ],
    bestFor: "Stablecoin holders and Curve LP providers seeking boosted rewards",
    url: "https://convex.finance",
    rating: 9.0,
  },
  {
    rank: 3,
    name: "Pendle Finance",
    slug: "pendle-finance",
    tagline: "Trade future yield — separate principal and interest tokens for advanced strategies",
    logo: "🟣",
    chains: ["Ethereum", "Arbitrum", "BSC", "Optimism", "Mantle"],
    tvl: "$3.1B",
    bestApy: "48.2%",
    stableApy: "15.4%",
    ethApy: "9.8%",
    riskLevel: "Medium",
    audits: 6,
    strategies: ["Fixed Yield", "Long Yield", "Liquidity Provision", "PT/YT Trading"],
    pros: [
      "Highest stablecoin APYs of any reputable aggregator",
      "Fixed-rate yield products eliminate APY uncertainty",
      "Novel yield tokenization enables sophisticated strategies",
      "Fast-growing TVL and ecosystem with strong institutional adoption",
    ],
    cons: [
      "Complex product structure — steep learning curve",
      "Yield token (YT) positions can expire worthless if yield drops",
      "PT positions lock up capital until maturity",
    ],
    bestFor: "Advanced DeFi users comfortable with yield trading mechanics",
    url: "https://pendle.finance",
    rating: 8.8,
  },
  {
    rank: 4,
    name: "Kamino Finance",
    slug: "kamino-finance",
    tagline: "Automated concentrated liquidity on Solana — maximize yield with active rebalancing",
    logo: "🟡",
    chains: ["Solana"],
    tvl: "$1.1B",
    bestApy: "42.0%",
    stableApy: "18.5%",
    ethApy: "11.2%",
    riskLevel: "Medium",
    audits: 5,
    strategies: ["Orca CL Vaults", "Raydium CL Vaults", "Lending", "Multiply (Leverage)"],
    pros: [
      "Best-in-class automated concentrated liquidity management on Solana",
      "High yields with active rebalancing reducing impermanent loss",
      "Solana's low fees make small deposits viable",
      "Clean, intuitive UI with detailed analytics dashboard",
    ],
    cons: [
      "Solana-only — not suitable for ETH-focused portfolios",
      "Concentrated liquidity still carries IL risk during volatile markets",
      "Leverage vaults can lead to liquidation",
    ],
    bestFor: "Solana users who want automated yield optimization on Solana DEXs",
    url: "https://kamino.finance",
    rating: 8.6,
  },
  {
    rank: 5,
    name: "Beefy Finance",
    slug: "beefy-finance",
    tagline: "Multi-chain yield optimizer — the broadest chain coverage in DeFi",
    logo: "🐄",
    chains: ["BSC", "Polygon", "Arbitrum", "Optimism", "Fantom", "Avalanche", "Base", "20+ more"],
    tvl: "$890M",
    bestApy: "65.8%",
    stableApy: "9.4%",
    ethApy: "4.2%",
    riskLevel: "Variable",
    audits: 9,
    strategies: ["LP Auto-Compounding", "Single Asset Vaults", "Curve Vaults", "Multi-Protocol Farms"],
    pros: [
      "Widest chain support — access yields across 25+ blockchains",
      "Largest selection of vaults (1,000+)",
      "Very low minimum deposits — accessible for all sizes",
      "Long operating history since 2020",
    ],
    cons: [
      "Risk varies dramatically between vaults — requires research",
      "Highest APY vaults carry significant smart contract risk",
      "Yield quality inconsistent across chains",
    ],
    bestFor: "Multi-chain DeFi users who want access to opportunities across many ecosystems",
    url: "https://beefy.finance",
    rating: 8.3,
  },
  {
    rank: 6,
    name: "Origin Protocol (OUSD/OETH)",
    slug: "origin-protocol",
    tagline: "Yield-bearing stablecoins and ETH wrappers — earn automatically just by holding",
    logo: "⚪",
    chains: ["Ethereum", "Arbitrum", "Base"],
    tvl: "$420M",
    bestApy: "12.8%",
    stableApy: "8.9%",
    ethApy: "8.9%",
    riskLevel: "Low",
    audits: 11,
    strategies: ["Aave Lending", "Convex LP", "Curve Staking", "Morpho Optimization"],
    pros: [
      "Earn yield passively — OUSD and OETH rebase automatically into your wallet",
      "No lock-up periods — withdraw instantly",
      "Conservative multi-protocol strategy with heavy audit coverage",
      "Simple UX — just hold the token to earn",
    ],
    cons: [
      "Lower APYs than active optimizers",
      "Limited to stablecoins and ETH",
      "Yield varies with market conditions",
    ],
    bestFor: "Passive investors who want yield without active management",
    url: "https://originprotocol.com",
    rating: 8.1,
  },
];

const faqs = [
  {
    question: "What is a DeFi yield aggregator?",
    answer: "A DeFi yield aggregator is a protocol that automatically moves your funds between different DeFi lending, staking, and liquidity pool opportunities to maximize your returns. Instead of manually moving funds between protocols, the aggregator handles it automatically, often using strategies that would be impractical for individual users.",
  },
  {
    question: "Are DeFi yield aggregators safe?",
    answer: "Reputable yield aggregators have been audited multiple times and have strong security track records. However, all DeFi carries smart contract risk — the possibility that bugs or exploits could result in loss of funds. The protocols listed here are among the most battle-tested in DeFi, but no protocol is 100% risk-free. Never deposit more than you can afford to lose.",
  },
  {
    question: "How are the APYs calculated?",
    answer: "APYs shown are rolling 30-day averages at time of writing and can change significantly based on market conditions, protocol incentives, token prices, and overall DeFi activity. Advertised APYs are not guaranteed returns. Stablecoin APYs tend to be more stable than volatile asset APYs.",
  },
  {
    question: "What is impermanent loss?",
    answer: "Impermanent loss occurs when you provide liquidity to an AMM and the relative prices of the tokens in your pair change. If the price of one token rises significantly relative to the other, you would have earned more by simply holding both tokens. Yield aggregators try to offset IL with the fees and rewards earned from providing liquidity.",
  },
  {
    question: "What's the minimum amount to deposit?",
    answer: "Most yield aggregators have no minimum deposit requirement, but practical minimums vary. On Ethereum mainnet, gas fees make deposits under $500-$1,000 uneconomical in most cases. On L2 networks (Arbitrum, Optimism, Base) and Solana, even small deposits of $20-$50 can be viable.",
  },
  {
    question: "How do yield aggregators make money?",
    answer: "Most yield aggregators charge a performance fee, typically 10-20% of the yield generated (not your principal). For example, if a Yearn vault earns 10% APY, you'd receive 8% APY after a 20% performance fee. Some also charge small management fees. Fees vary by protocol and vault.",
  },
];

type RiskLevel = "Low" | "Medium" | "High" | "Variable";

function RiskBadge({ level }: { level: RiskLevel }) {
  const colors: Record<RiskLevel, string> = {
    Low: "text-green-400 bg-green-400/10 border-green-400/20",
    Medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    High: "text-red-400 bg-red-400/10 border-red-400/20",
    Variable: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${colors[level]}`}>
      {level} Risk
    </span>
  );
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/defi-lending/best' },
    { '@type': 'ListItem', position: 4, name: 'Yield Aggregators', },
  ],
};

export default function YieldAggregatorsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Best DeFi Yield Aggregators of ${CURRENT_YEAR}`,
    description: `Compare the best DeFi yield aggregators. Expert analysis of APYs, TVL, security, and strategies.`,
    url: `${SITE_URL}/defi-lending/best/yield-aggregators`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "DeFi Lending", href: "/defi-lending" },
            { label: "Best Protocols", href: "/defi-lending/best" },
            { label: "Yield Aggregators", href: "/defi-lending/best/yield-aggregators" },
          ]}
        />

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="glass-pill px-3 py-1 rounded-full text-xs font-semibold text-[var(--color-primary)]">
              Updated {CURRENT_MONTH} {CURRENT_YEAR}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
            Best DeFi Yield Aggregators of {CURRENT_YEAR}
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
            We analyzed 20+ yield aggregator protocols across TVL, APY performance, security track record,
            chain support, and strategy transparency to identify the best options for every type of DeFi user.
            All APYs are rolling 30-day averages as of {CURRENT_MONTH} {CURRENT_YEAR}.
          </p>
        </div>

        {/* Methodology Note */}
        <div className="glass rounded-xl p-5 mb-8 flex gap-4 items-start">
          <span className="text-2xl shrink-0">🔬</span>
          <div>
            <h3 className="font-semibold text-[var(--color-text)] mb-1">How We Rank Yield Aggregators</h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Our rankings weigh security audits and track record (30%), TVL and liquidity depth (20%),
              actual APY performance over 90 days (25%), ease of use (15%), and chain/asset diversity (10%).
              We do not accept payment for rankings — our editorial team evaluates each protocol independently.
            </p>
          </div>
        </div>

        <AuthorAttribution
          author="SatoshiGhost"
          role="Lead Researcher"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="defi-lending"
        />


        <AffiliateDisclosure />

        {/* Quick Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Quick Comparison Table</h2>
        {/* editorial-voice */}
        <div style={{ background: '#1a0f2e', border: '1px solid #3b1f5e', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>⚠️</span>
            <strong style={{ color: '#c084fc', fontSize: 15 }}>Risk Assessment</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            APY is the bait, but smart contract risk is the hook. We prioritize protocols with multiple independent audits and active bug bounty programs.
          </p>
        </div>
          <div className="overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--color-bg-card)] border-b border-[var(--color-border)]">
                  <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold">#</th>
                  <th className="text-left px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Protocol</th>
                  <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">TVL</th>
                  <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Best APY</th>
                  <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Stable APY</th>
                  <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">ETH APY</th>
                  <th className="text-center px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Risk</th>
                  <th className="text-right px-4 py-3 text-[var(--color-text-secondary)] font-semibold">Score</th>
                </tr>
              </thead>
              <tbody>
                {protocols.map((p) => (
                  <tr
                    key={p.slug}
                    className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-card)] transition-colors"
                  >
                    <td className="px-4 py-3 text-[var(--color-text-secondary)] font-bold">{p.rank}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{p.logo}</span>
                        <span className="font-semibold text-[var(--color-text)]">{p.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right font-medium text-[var(--color-text)]">{p.tvl}</td>
                    <td className="px-4 py-3 text-right font-bold text-green-400">{p.bestApy}</td>
                    <td className="px-4 py-3 text-right text-[var(--color-text)]">{p.stableApy}</td>
                    <td className="px-4 py-3 text-right text-[var(--color-text)]">{p.ethApy}</td>
                    <td className="px-4 py-3 text-center">
                      <RiskBadge level={p.riskLevel} />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="font-bold text-[var(--color-text)]">{p.rating.toFixed(1)}</span>
                      <span className="text-[var(--color-text-secondary)] text-xs">/10</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] mt-2">
            * APYs are rolling 30-day averages as of {CURRENT_MONTH} {CURRENT_YEAR}. Past performance does not guarantee future returns.
          </p>
        </section>

        {/* Detailed Protocol Cards */}
        <section className="mb-12 space-y-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)]">In-Depth Reviews</h2>

          {protocols.map((p) => (
            <div
              key={p.slug}
              id={p.slug}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-[var(--color-border)]">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-2xl shrink-0">
                      {p.logo}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-xs text-[var(--color-text-secondary)] font-semibold uppercase tracking-wide">
                          #{p.rank} Best Yield Aggregator
                        </span>
                        <RiskBadge level={p.riskLevel} />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--color-text)]">{p.name}</h3>
                      <p className="text-[var(--color-text-secondary)] mt-0.5 text-sm">{p.tagline}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map((s) => (
                          <span key={s} className={s <= Math.round(p.rating/2) ? "text-yellow-400" : "text-[var(--color-border)]"}>★</span>
                        ))}
                      </div>
                      <span className="text-sm font-bold text-[var(--color-text)]">{p.rating.toFixed(1)}/10</span>
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="affiliate-cta px-5 py-2 rounded-xl text-white text-sm font-semibold"
                    >
                      Visit {p.name} →
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--color-border)] border-b border-[var(--color-border)]">
                {[
                  { label: "TVL", value: p.tvl, highlight: false },
                  { label: "Best APY", value: p.bestApy, highlight: true },
                  { label: "Stable APY", value: p.stableApy, highlight: false },
                  { label: "Security Audits", value: `${p.audits}`, highlight: false },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 text-center">
                    <div className="text-xs text-[var(--color-text-secondary)] mb-1">{stat.label}</div>
                    <div className={`text-xl font-bold ${stat.highlight ? "text-green-400" : "text-[var(--color-text)]"}`}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pros / Cons */}
              <div className="p-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-text)] mb-3 uppercase tracking-wide">
                    ✅ Pros
                  </h4>
                  <ul className="space-y-2">
                    {p.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <span className="text-green-400 shrink-0 mt-0.5">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-text)] mb-3 uppercase tracking-wide">
                    ⚠️ Cons
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {p.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <span className="text-red-400 shrink-0 mt-0.5">✗</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 rounded-lg glass">
                    <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                      Best For
                    </span>
                    <p className="text-sm text-[var(--color-text)] mt-1">{p.bestFor}</p>
                  </div>
                </div>
              </div>

              {/* Chains & Strategies */}
              <div className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-[var(--color-text-secondary)] font-semibold uppercase tracking-wide">
                      Supported Chains
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {p.chains.map((chain) => (
                        <span key={chain} className="glass-pill px-2.5 py-1 rounded-full text-xs font-medium text-[var(--color-text-secondary)]">
                          {chain}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-[var(--color-text-secondary)] font-semibold uppercase tracking-wide">
                      Strategy Types
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {p.strategies.map((s) => (
                        <span key={s} className="glass-pill px-2.5 py-1 rounded-full text-xs font-medium text-[var(--color-text-secondary)]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* How to Choose Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
            How to Choose a Yield Aggregator
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🛡️",
                title: "Prioritize Security First",
                body: "The number of audits and the length of time a protocol has operated without incidents is the most important factor. A protocol offering 50% APY that gets hacked is far worse than one offering 8% with a clean 4-year track record.",
              },
              {
                icon: "💰",
                title: "Match Risk to Your Goals",
                body: "Low-risk aggregators (Yearn, Convex, Origin) are appropriate for capital preservation with yield. Higher-risk strategies can amplify returns but also amplify losses. Never invest more than you can afford to lose.",
              },
              {
                icon: "⛽",
                title: "Factor In Gas Costs",
                body: "On Ethereum mainnet, gas fees can consume weeks or months of yield for small deposits. For deposits under $10,000, consider L2 networks (Arbitrum, Base, Optimism) or Solana where fees are negligible.",
              },
              {
                icon: "🔄",
                title: "Understand the Underlying Strategy",
                body: "Every aggregator earns yield from somewhere — lending (rate risk), liquidity provision (IL risk), trading fees (volume risk), or protocol incentives (token price risk). Know what you're exposed to.",
              },
            ].map((item) => (
              <div key={item.title} className="glass rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[var(--color-text)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Disclaimer */}
        <div className="mb-12 p-5 rounded-xl border border-red-400/20 bg-red-400/5">
          <h3 className="font-bold text-red-400 mb-2">⚠️ DeFi Risk Disclosure</h3>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            DeFi yield aggregators carry significant risks including smart contract bugs, oracle manipulation,
            protocol insolvency, and market risk. All APYs are variable and can drop to 0% or result in
            principal loss. This content is for informational purposes only and does not constitute
            financial advice. Always do your own research before depositing funds into any DeFi protocol.
          </p>
        </div>

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Related Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Best DeFi Lending Protocols", href: "/defi-lending/best", desc: "Compare Aave, Compound, Morpho and more" },
              { title: "Best Stablecoin Yields", href: "/defi-lending/best/stablecoin-yield", desc: "Earn on USDC, USDT, and DAI" },
              { title: "What Is DeFi Lending?", href: "/defi-lending/learn/what-is-defi-lending", desc: "Complete beginner's guide to DeFi" },
            ].map((link) => (
              <Link href={p.url}
                key={link.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover block"
              >
                <h3 className="font-semibold text-[var(--color-text)] mb-1">{link.title}</h3>
                <p className="text-xs text-[var(--color-text-secondary)]">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <FAQSection faqs={faqs} />
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
    </div>
    </>
  );
}
