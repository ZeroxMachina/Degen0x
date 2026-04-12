import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Crypto Savings Accounts ${CURRENT_YEAR} — Highest APY Rates Compared`,
  description: `Compare the best crypto savings accounts of ${CURRENT_YEAR}. Earn up to 12% APY on Bitcoin, Ethereum, and stablecoins. Expert-reviewed rates, safety scores, and platform comparisons.`,
};

const PLATFORMS = [
  {
    rank: 1,
    name: "Nexo",
    slug: "nexo",
    apyRange: "4%–16%",
    highlightApy: "16% APY on NEXO token",
    stablecoinApy: "Up to 14%",
    btcApy: "6%",
    ethApy: "6%",
    minDeposit: "$10",
    insurance: "Yes — $775M custody insurance (BitGo/Ledger Vault)",
    compounding: "Daily",
    withdrawals: "Instant",
    regulated: true,
    trustScore: 91,
    badge: "🏆 Best Overall",
    badgeColor: "#3fb950",
    color: "#6366f1",
    bestFor: "High-yield seekers & long-term holders",
    pros: [
      "Daily compounding interest",
      "Instant withdrawals with no lock-up",
      "Up to $375M in custodial insurance",
      "Loyalty tiers unlock higher rates",
      "Regulated in multiple EU jurisdictions",
    ],
    cons: [
      "Higher APY requires holding NEXO tokens",
      "Not available in some US states",
    ],
    affiliateUrl: "https://degen0x.com/go/nexo",
  },
  {
    rank: 2,
    name: "Binance Earn",
    slug: "binance-earn",
    apyRange: "1%–20%",
    highlightApy: "Up to 20% on DeFi products",
    stablecoinApy: "Up to 10%",
    btcApy: "1.2%",
    ethApy: "2.4%",
    minDeposit: "$1",
    insurance: "SAFU fund ($1B)",
    compounding: "Daily",
    withdrawals: "Flexible or locked",
    regulated: false,
    trustScore: 84,
    badge: "💰 Best for Variety",
    badgeColor: "#f59e0b",
    color: "#f59e0b",
    bestFor: "Traders who want everything in one place",
    pros: [
      "Widest selection of earn products",
      "Both flexible and locked savings options",
      "Launchpool and DeFi staking included",
      "Lower barrier to entry ($1 minimum)",
    ],
    cons: [
      "Not available to US residents",
      "Regulatory risk in some jurisdictions",
      "Higher rates require lock-up periods",
    ],
    affiliateUrl: "https://degen0x.com/go/binance",
  },
  {
    rank: 3,
    name: "Coinbase Yield",
    slug: "coinbase-yield",
    apyRange: "0.01%–5.1%",
    highlightApy: "5.1% on USDC",
    stablecoinApy: "5.1% (USDC)",
    btcApy: "N/A",
    ethApy: "3.3% (staking)",
    minDeposit: "$1",
    insurance: "FDIC on USD (up to $250K)",
    compounding: "Monthly",
    withdrawals: "Instant",
    regulated: true,
    trustScore: 89,
    badge: "🇺🇸 Best for US Users",
    badgeColor: "#58a6ff",
    color: "#58a6ff",
    bestFor: "US-based users who prioritize safety",
    pros: [
      "FDIC-insured USD balances",
      "Publicly traded company (NASDAQ: COIN)",
      "Available in all 50 US states",
      "Easy to use for beginners",
    ],
    cons: [
      "Lower rates than offshore platforms",
      "Limited crypto earn options",
      "No BTC savings rate",
    ],
    affiliateUrl: "https://degen0x.com/go/coinbase",
  },
  {
    rank: 4,
    name: "Kraken Staking",
    slug: "kraken-staking",
    apyRange: "0.25%–12%",
    highlightApy: "12% on select altcoins",
    stablecoinApy: "4%",
    btcApy: "0.25%",
    ethApy: "4%–7%",
    minDeposit: "$1",
    insurance: "No explicit insurance fund",
    compounding: "Weekly",
    withdrawals: "Varies by asset",
    regulated: true,
    trustScore: 87,
    badge: "🔒 Most Secure",
    badgeColor: "#8b5cf6",
    color: "#8b5cf6",
    bestFor: "Security-first investors",
    pros: [
      "Never been hacked since 2011",
      "Strong regulatory compliance",
      "On-chain staking (you own the keys)",
      "Available to most US states",
    ],
    cons: [
      "Lower rates on BTC",
      "Some staking has unbonding periods",
      "SEC issues forced removal of US staking (workaround via on-chain)",
    ],
    affiliateUrl: "https://degen0x.com/go/kraken",
  },
  {
    rank: 5,
    name: "Aave (DeFi)",
    slug: "aave",
    apyRange: "0.5%–15%",
    highlightApy: "Variable DeFi rates",
    stablecoinApy: "3%–15% (variable)",
    btcApy: "0.01%",
    ethApy: "0.7%–3%",
    minDeposit: "No minimum",
    insurance: "Safety Module (partial)",
    compounding: "Continuous",
    withdrawals: "Instant (liquidity-dependent)",
    regulated: false,
    trustScore: 85,
    badge: "🔗 Best DeFi Option",
    badgeColor: "#06b6d4",
    color: "#06b6d4",
    bestFor: "DeFi-native users who self-custody",
    pros: [
      "Non-custodial — you control your assets",
      "No KYC required",
      "Permissionless access",
      "Battle-tested protocol ($10B+ TVL)",
    ],
    cons: [
      "Smart contract risk",
      "Variable rates can drop significantly",
      "Requires understanding of DeFi wallets",
      "Gas fees on Ethereum can eat into returns",
    ],
    affiliateUrl: "https://degen0x.com/go/aave",
  },
];

const faqs = [
  {
    question: `What is a crypto savings account?`,
    answer: "A crypto savings account lets you deposit cryptocurrency and earn interest on it over time — similar to a traditional bank savings account, but with crypto. Platforms lend your crypto to borrowers or deploy it in DeFi protocols, sharing the yield with depositors.",
  },
  {
    question: "Are crypto savings accounts safe?",
    answer: `Safety varies significantly by platform. Regulated platforms like Coinbase and Kraken offer greater legal protections. CeFi platforms like Nexo carry custodial risk. DeFi platforms like Aave carry smart contract risk. In ${CURRENT_YEAR}, always check: Is the platform regulated? Does it have insurance? What is the track record? Diversifying across platforms reduces risk.`,
  },
  {
    question: "What is the best crypto savings account for stablecoins?",
    answer: `For stablecoins in ${CURRENT_YEAR}, Nexo offers the highest consistent rates (up to 14% on USDT/USDC), while Coinbase offers the safest option for US users (5.1% USDC). Binance Earn offers competitive rates for non-US users.`,
  },
  {
    question: "Can I lose money in a crypto savings account?",
    answer: "Yes. Unlike FDIC-insured bank accounts (which cover up to $250K), most crypto savings accounts do not carry government-backed insurance. Risks include platform insolvency, smart contract exploits, and regulatory shutdowns. Several platforms (Celsius, BlockFi, Voyager) collapsed in 2022, causing users to lose funds. Always use regulated platforms and never put more than you can afford to lose.",
  },
  {
    question: "What's the difference between CeFi and DeFi savings?",
    answer: "CeFi (centralized finance) platforms like Nexo and Coinbase hold your crypto on your behalf and manage the lending. DeFi (decentralized finance) platforms like Aave run on smart contracts with no central custodian. CeFi is easier to use but has custodial risk; DeFi is non-custodial but requires more technical knowledge and exposes you to smart contract risks.",
  },
];

function TrustScoreBar({ score }: { score: number }) {
  const color = score >= 90 ? "#3fb950" : score >= 80 ? "#f59e0b" : "#f85149";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{
        flex: 1, height: 6, borderRadius: 3,
        background: "#30363d", overflow: "hidden"
      }}>
        <div style={{
          width: `${score}%`, height: "100%",
          background: color, borderRadius: 3,
          transition: "width 0.5s ease"
        }} />
      </div>
      <span style={{ fontSize: 13, fontWeight: 700, color, minWidth: 28 }}>{score}</span>
    </div>
  );
}

export default function CryptoSavingsAccountsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best Crypto Savings Accounts of ${CURRENT_YEAR}`,
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "degen0x" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Investing", href: "/investing" },
            { label: "Savings Accounts", href: "/investing/best/savings-accounts" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-3">
          Best Crypto Savings Accounts {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR} · Reviewed by the degen0x research team
        </p>

        <AffiliateDisclosure />

        {/* Intro */}
        <div className="glass p-6 rounded-xl mb-8 mt-6">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg mb-4">
            The right crypto savings account can turn idle crypto into a yield-generating asset. In {CURRENT_YEAR}, top platforms offer anywhere from 1% to 20% APY depending on the asset and risk profile — dramatically higher than traditional savings accounts.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            We&apos;ve analyzed 5 platforms across safety, rates, liquidity, and regulation. Here&apos;s what we found.
          </p>
        </div>

        {/* Quick Compare Table */}
        <div className="glass rounded-xl overflow-hidden mb-10">
          <div className="p-4 border-b border-[var(--color-border)]">
            <h2 className="text-lg font-bold text-[var(--color-text)]">Quick Rate Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "var(--glass-bg, #ffffff08)" }}>
                  <th style={{ padding: "10px 16px", textAlign: "left", color: "var(--color-text-secondary)" }}>Platform</th>
                  <th style={{ padding: "10px 16px", textAlign: "center", color: "var(--color-text-secondary)" }}>Stablecoin APY</th>
                  <th style={{ padding: "10px 16px", textAlign: "center", color: "var(--color-text-secondary)" }}>BTC APY</th>
                  <th style={{ padding: "10px 16px", textAlign: "center", color: "var(--color-text-secondary)" }}>ETH APY</th>
                  <th style={{ padding: "10px 16px", textAlign: "center", color: "var(--color-text-secondary)" }}>Trust Score</th>
                  <th style={{ padding: "10px 16px", textAlign: "center", color: "var(--color-text-secondary)" }}>Min Deposit</th>
                </tr>
              </thead>
              <tbody>
                {PLATFORMS.map((p, i) => (
                  <tr
                    key={p.slug}
                    style={{
                      borderTop: "1px solid var(--color-border, #30363d)",
                      background: i % 2 === 0 ? "transparent" : "var(--glass-bg, #ffffff04)"
                    }}
                  >
                    <td style={{ padding: "10px 16px" }}>
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        fontWeight: 700, color: "var(--color-text)"
                      }}>
                        <span style={{
                          background: p.badgeColor + "20",
                          color: p.badgeColor,
                          border: `1px solid ${p.badgeColor}40`,
                          borderRadius: 4, fontSize: 10, padding: "1px 5px", fontWeight: 600
                        }}>#{p.rank}</span>
                        {p.name}
                      </span>
                    </td>
                    <td style={{ padding: "10px 16px", textAlign: "center", color: "#3fb950", fontWeight: 700 }}>{p.stablecoinApy}</td>
                    <td style={{ padding: "10px 16px", textAlign: "center", color: "var(--color-text-secondary)" }}>{p.btcApy}</td>
                    <td style={{ padding: "10px 16px", textAlign: "center", color: "var(--color-text-secondary)" }}>{p.ethApy}</td>
                    <td style={{ padding: "10px 16px" }}><TrustScoreBar score={p.trustScore} /></td>
                    <td style={{ padding: "10px 16px", textAlign: "center", color: "var(--color-text-secondary)" }}>{p.minDeposit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <AuthorAttribution
          author="SatoshiGhost"
          role="Lead Researcher"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="investing"
        />


        {/* Full Reviews */}
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">In-Depth Platform Reviews</h2>
        <div className="space-y-8">
          {PLATFORMS.map((platform) => (
            <div key={platform.slug} className="glass rounded-xl overflow-hidden">
              {/* Header */}
              <div style={{
                background: `linear-gradient(135deg, ${platform.color}18, ${platform.color}08)`,
                borderBottom: "1px solid var(--color-border)",
                padding: "20px 24px",
                display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                flexWrap: "wrap", gap: 12
              }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <span style={{
                      background: platform.badgeColor + "20", color: platform.badgeColor,
                      border: `1px solid ${platform.badgeColor}40`,
                      borderRadius: 6, fontSize: 11, padding: "3px 8px", fontWeight: 700
                    }}>{platform.badge}</span>
                    <span style={{
                      background: "#30363d", color: "var(--color-text-secondary)",
                      borderRadius: 4, fontSize: 10, padding: "2px 6px"
                    }}>#{platform.rank} Ranked</span>
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--color-text)", margin: 0 }}>{platform.name}</h3>
                  <p style={{ fontSize: 13, color: "var(--color-text-secondary)", marginTop: 4 }}>Best for: {platform.bestFor}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: platform.color }}>{platform.apyRange}</div>
                  <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>APY Range</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#3fb950", marginTop: 4 }}>{platform.highlightApy}</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div style={{
                display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 1, background: "var(--color-border)",
                borderBottom: "1px solid var(--color-border)"
              }}>
                {[
                  { label: "Stablecoin APY", value: platform.stablecoinApy, color: "#3fb950" },
                  { label: "Compounding", value: platform.compounding, color: "var(--color-text)" },
                  { label: "Withdrawals", value: platform.withdrawals, color: "var(--color-text)" },
                  { label: "Min Deposit", value: platform.minDeposit, color: "var(--color-text)" },
                  { label: "Insurance", value: platform.insurance, color: platform.insurance !== "No explicit insurance fund" ? "#3fb950" : "#f85149" },
                  { label: "Regulated", value: platform.regulated ? "Yes" : "No", color: platform.regulated ? "#3fb950" : "#f85149" },
                ].map((stat) => (
                  <div key={stat.label} style={{
                    background: "var(--surface, #161b22)",
                    padding: "12px 16px"
                  }}>
                    <div style={{ fontSize: 10, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>{stat.label}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: stat.color, lineHeight: 1.3 }}>{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Pros & Cons + CTA */}
              <div style={{ padding: "20px 24px", display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 24, alignItems: "start", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#3fb950", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>✓ Pros</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                    {platform.pros.map((pro) => (
                      <li key={pro} style={{ fontSize: 13, color: "var(--color-text-secondary)", display: "flex", gap: 8 }}>
                        <span style={{ color: "#3fb950", flexShrink: 0 }}>+</span> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#f85149", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>✗ Cons</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                    {platform.cons.map((con) => (
                      <li key={con} style={{ fontSize: 13, color: "var(--color-text-secondary)", display: "flex", gap: 8 }}>
                        <span style={{ color: "#f85149", flexShrink: 0 }}>−</span> {con}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 140 }}>
                  <a
                    href={platform.affiliateUrl}
                    className="affiliate-cta"
                    style={{
                      display: "block", padding: "10px 20px", borderRadius: 10,
                      textAlign: "center", fontWeight: 700, fontSize: 14,
                      textDecoration: "none", color: "white"
                    }}
                  >
                    Visit {platform.name} →
                  </a>
                  <div style={{ fontSize: 10, color: "var(--color-text-secondary)", textAlign: "center" }}>
                    Trust Score: {platform.trustScore}/100
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Warning */}
        <div className="glass rounded-xl p-6 mt-10" style={{ borderLeft: "3px solid #f59e0b" }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f59e0b", marginBottom: 8 }}>⚠️ Risk Warning</h3>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
            Crypto savings accounts are not equivalent to FDIC-insured bank accounts. In 2022, platforms including Celsius, BlockFi, and Voyager Digital collapsed, resulting in billions of dollars of user losses. Never deposit more than you can afford to lose, always use regulated platforms where possible, and consider spreading deposits across multiple platforms to reduce concentration risk.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-10">
          <FAQSection faqs={faqs} />
        </div>

        {/* Internal Links */}
        <div className="glass rounded-xl p-6 mt-8">
          <h3 className="font-bold text-[var(--color-text)] mb-4">Related Guides</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: "/investing/best/staking", label: "Best Staking Platforms" },
              { href: "/defi-lending/best", label: "Best DeFi Lending Protocols" },
              { href: "/investing/best/cryptos-to-buy", label: "Best Cryptos to Buy" },
              { href: "/exchanges/best", label: "Best Crypto Exchanges" },
              { href: "/wallets/best", label: "Best Crypto Wallets" },
              { href: "/learn/crypto-for-beginners", label: "Crypto for Beginners" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="glass-subtle p-3 rounded-xl text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] card-hover"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
