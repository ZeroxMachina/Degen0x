import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH, SITE_URL } from "@/lib/constants";
import LendingRatesClient from "./LendingRatesClient";
import LendingCalculator from "./LendingCalculator";
import ProtocolOverview from "./ProtocolOverview";

export const metadata: Metadata = {
  title: `Crypto Lending Rates Comparison | DeFi & CeFi Yields | ${SITE_NAME}`,
  description: `Compare real-time lending rates across 20+ DeFi and CeFi platforms including Aave, Compound, MakerDAO, Morpho, Spark, JustLend, Venus, and more. Find the best APY for USDC, USDT, ETH, WBTC, and 10+ crypto assets. Interactive comparison table, lending calculator, and risk analysis.`,
  alternates: { canonical: `${SITE_URL}/tools/lending-rates` },
};

export default function LendingRatesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `Crypto Lending Rates Comparison — ${SITE_NAME}`,
    description: "Interactive tool to compare crypto lending rates across 20+ DeFi and CeFi platforms with real-time APY, TVL, and risk metrics",
    url: `${SITE_URL}/tools/lending-rates`,
    applicationCategory: "FinanceApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    potentialAction: {
      "@type": "UseAction",
      target: `${SITE_URL}/tools/lending-rates`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Lending Rates", href: "/tools/lending-rates" },
          ]}
        />

        {/* ──────────────── Hero Section ──────────────── */}
        <div className="space-y-4">
          <div>
            <h1 className="text-5xl font-bold text-[var(--color-text)] mb-4">
              Crypto Lending Rates Comparison
            </h1>
            <p className="text-xl text-[#8b949e] max-w-4xl leading-relaxed">
              Compare real-time lending rates across 20+ DeFi and CeFi platforms. Discover the best APY for your assets, analyze protocol risk, and calculate projected earnings with our comprehensive lending comparison tool.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Platforms", value: "20+", icon: "🏦" },
              { label: "Supported Assets", value: "10+", icon: "💰" },
              { label: "Blockchains", value: "7", icon: "⛓️" },
              { label: "Data Updated", value: "Mar 2026", icon: "📊" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-sm text-[#8b949e]">{stat.label}</div>
                <div className="text-lg font-bold text-[#e6edf3]">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────────── */
        {/* Protocol Overview */
        {/* ──────────────────────────────────────────────────────────────── */}
        <ProtocolOverview />

        {/* ──────────────────────────────────────────────────────────────── */
        {/* Main Comparison Table & Filters */
        {/* ──────────────────────────────────────────────────────────────── */}
        <section className="space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-[#e6edf3] mb-2">
              Interactive Rate Comparison
            </h2>
            <p className="text-[#8b949e]">
              Filter by asset, blockchain, and protocol type. Sort by APY, TVL, or risk score to find your ideal lending platform.
            </p>
          </div>
          <LendingRatesClient />
        </section>

        {/* ──────────────────────────────────────────────────────────────── */
        {/* Lending Calculator */
        {/* ──────────────────────────────────────────────────────────────── */}
        <section className="space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-[#e6edf3] mb-2">
              Lending Calculator
            </h2>
            <p className="text-[#8b949e]">
              Calculate projected earnings based on deposit amount and time period. Compare earnings across multiple protocols.
            </p>
          </div>
          <LendingCalculator />
        </section>

        {/* ──────────────────────────────────────────────────────────────── */
        {/* DeFi vs CeFi Comparison */
        {/* ──────────────────────────────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-[#e6edf3] mb-6">
            DeFi vs CeFi Lending
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                type: "DeFi Lending",
                icon: "🔗",
                pros: [
                  "Non-custodial (you control keys)",
                  "Higher yields potential",
                  "Transparent on-chain data",
                  "No KYC requirements",
                  "24/7 availability",
                ],
                cons: [
                  "Smart contract risk",
                  "More technical complexity",
                  "No insurance typically",
                  "Variable yields",
                  "Price volatility exposure",
                ],
              },
              {
                type: "CeFi Lending",
                icon: "🏛️",
                pros: [
                  "Custodial convenience",
                  "Insurance available",
                  "Lower technical barrier",
                  "Stable/predictable rates",
                  "Customer support",
                ],
                cons: [
                  "Centralized risk",
                  "KYC requirements",
                  "Lower yields often",
                  "Withdrawal restrictions",
                  "Counterparty risk",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="bg-[#0d1117] border border-[#30363d] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{section.icon}</span>
                  <h3 className="text-xl font-bold text-[#e6edf3]">{section.type}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#3fb950] mb-3 text-sm">Advantages</h4>
                    <ul className="space-y-2">
                      {section.pros.map((pro, j) => (
                        <li key={j} className="flex gap-2 text-sm text-[#8b949e]">
                          <span className="text-[#3fb950] flex-shrink-0">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#f85149] mb-3 text-sm">Considerations</h4>
                    <ul className="space-y-2">
                      {section.cons.map((con, j) => (
                        <li key={j} className="flex gap-2 text-sm text-[#8b949e]">
                          <span className="text-[#f85149] flex-shrink-0">!</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────── */
        {/* Risk Assessment Guide */
        {/* ──────────────────────────────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-[#e6edf3] mb-6">
            Understanding Risk Scores
          </h2>
          <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  score: "1-3",
                  level: "Low Risk",
                  color: "#3fb950",
                  examples: "Aave V3, Compound V3, MakerDAO",
                  factors: [
                    "Battle-tested protocols (5+ years)",
                    "Large TVL (1B+)",
                    "Multiple audits",
                    "Established track record",
                    "Low smart contract complexity",
                  ],
                },
                {
                  score: "4-6",
                  level: "Medium Risk",
                  color: "#d29922",
                  examples: "Morpho Blue, Yearn, Pendle",
                  factors: [
                    "Newer protocols (2-5 years)",
                    "Moderate TVL (100M-1B)",
                    "Audited but less proven",
                    "Some market stress test data",
                    "Higher complexity",
                  ],
                },
                {
                  score: "7-10",
                  level: "High Risk",
                  color: "#f85149",
                  examples: "GMX, JustLend, New protocols",
                  factors: [
                    "Very new (< 2 years)",
                    "Lower TVL (< 100M)",
                    "Limited audit history",
                    "Unproven under stress",
                    "Complex mechanisms",
                  ],
                },
              ].map((risk, i) => (
                <div key={i} className="border border-[#30363d] rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: risk.color }}
                    />
                    <span className="text-sm font-semibold text-[#e6edf3]">
                      Score: {risk.score}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: risk.color }}>
                    {risk.level}
                  </h4>
                  <p className="text-xs text-[#8b949e] mb-3">
                    <strong>Examples:</strong> {risk.examples}
                  </p>
                  <div className="space-y-1">
                    {risk.factors.map((factor, j) => (
                      <p key={j} className="text-xs text-[#8b949e]">
                        • {factor}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────── */
        {/* FAQ Section */
        {/* ──────────────────────────────────────────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-[#e6edf3]">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "What's the difference between Supply APY and Borrow APR?",
                a: "Supply APY is the yield you earn by depositing assets in a lending protocol. Borrow APR is the interest rate you pay when borrowing. These rates fluctuate based on supply/demand dynamics.",
              },
              {
                q: "How often are these rates updated?",
                a: "Lending rates fluctuate continuously based on supply and demand. This page shows indicative rates as of March 2026. Always check live rates on protocol websites before depositing.",
              },
              {
                q: "What's TVL (Total Value Locked)?",
                a: "TVL is the total value of crypto assets deposited in a protocol. Larger TVL generally indicates stronger liquidity, more stability, and potentially lower slippage, but doesn't guarantee safety.",
              },
              {
                q: "Do these yields guarantee returns?",
                a: "No. Lending yields are variable and depend on borrower demand. During bear markets, yields can drop significantly or to zero. High yields often indicate elevated risk.",
              },
              {
                q: "Which platforms are safest for beginners?",
                a: "Start with low-risk protocols like Aave V3, Compound V3, or MakerDAO on Ethereum. These have the largest TVL, longest track records, and most security audits.",
              },
              {
                q: "Can I lose my principal in crypto lending?",
                a: "In DeFi, your principal is at smart contract risk. In CeFi, there's counterparty risk. Only lend funds you can afford to lose. Diversify across multiple protocols to reduce risk.",
              },
              {
                q: "What are the best assets to lend?",
                a: "Stablecoins (USDC, USDT, DAI) offer consistent yields with lower volatility. Volatile assets (ETH, WBTC) may yield more but carry price risk. Choose based on your risk tolerance.",
              },
              {
                q: "How do I minimize my lending risk?",
                a: "Diversify across multiple low-risk protocols. Start with small amounts. Only use audited platforms. Monitor protocol changes. Never put all funds in one platform. Research before depositing.",
              },
              {
                q: "Are there tax implications for lending yields?",
                a: "Yes, most jurisdictions tax lending yields as income or capital gains. Consult a tax professional about your specific situation, especially regarding DeFi protocols.",
              },
              {
                q: "What's the difference between fixed and variable rates?",
                a: "Most crypto lending uses variable rates that fluctuate with market conditions. Some protocols offer fixed-rate instruments. Variable rates can be higher but less predictable.",
              },
              {
                q: "Can I withdraw my assets anytime?",
                a: "Most DeFi protocols allow instant withdrawals. Some CeFi platforms have lock periods (e.g., 30 days) or withdrawal fees. Check specific platform terms before depositing.",
              },
              {
                q: "How do I choose between DeFi and CeFi?",
                a: "DeFi offers higher yields and self-custody but more technical risk. CeFi is easier but centralized. Most degens diversify: split funds between both types.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#0d1117] border border-[#30363d] rounded-lg p-5">
                <h3 className="font-semibold text-[#e6edf3] mb-3 text-sm flex items-start gap-2">
                  <span className="text-[#58a6ff] flex-shrink-0 mt-0.5">Q:</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-sm text-[#8b949e] leading-relaxed flex gap-2">
                  <span className="text-[#79c0ff] flex-shrink-0">A:</span>
                  <span>{item.a}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────── */
        {/* Key Metrics Explained */
        {/* ──────────────────────────────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-[#e6edf3] mb-6">
            Key Metrics Explained
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                metric: "APY",
                full: "Annual Percentage Yield",
                desc: "Annual return on your deposited assets, including compounding effects",
                icon: "📈",
              },
              {
                metric: "TVL",
                full: "Total Value Locked",
                desc: "Total value of assets deposited in the protocol, indicator of liquidity and popularity",
                icon: "💰",
              },
              {
                metric: "Risk Score",
                full: "Protocol Risk Assessment",
                desc: "1-10 scale based on age, TVL, audits, complexity, and historical security",
                icon: "⚠️",
              },
              {
                metric: "LTV",
                full: "Loan-to-Value Ratio",
                desc: "Maximum borrow amount as percentage of collateral value, varies by asset",
                icon: "📊",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-[#e6edf3] text-sm mb-1">{item.metric}</h4>
                <p className="text-xs text-[#58a6ff] mb-2">{item.full}</p>
                <p className="text-xs text-[#8b949e]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────── */
        {/* Best Practices */
        {/* ──────────────────────────────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-[#e6edf3] mb-6">
            Crypto Lending Best Practices
          </h2>
          <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Risk Management",
                  icon: "🛡️",
                  tips: [
                    "Never deposit funds you can't afford to lose",
                    "Start small to test platforms",
                    "Diversify across multiple protocols",
                    "Prefer battle-tested platforms (5+ years)",
                    "Monitor for smart contract vulnerabilities",
                  ],
                },
                {
                  title: "Due Diligence",
                  icon: "🔍",
                  tips: [
                    "Review protocol audits and security reports",
                    "Check TVL trends over time",
                    "Read governance forum discussions",
                    "Test with small amounts first",
                    "Understand liquidation mechanics",
                  ],
                },
                {
                  title: "Yield Optimization",
                  icon: "💡",
                  tips: [
                    "Compare APY across protocols and chains",
                    "Account for gas fees and withdrawal costs",
                    "Consider compounding frequency",
                    "Monitor for incentive programs (yield farming)",
                    "Rebalance based on market conditions",
                  ],
                },
                {
                  title: "Security",
                  icon: "🔐",
                  tips: [
                    "Use hardware wallets for deposits",
                    "Enable two-factor authentication on CeFi",
                    "Never share private keys or seed phrases",
                    "Verify URLs carefully (phishing risks)",
                    "Use multi-signature wallets for large amounts",
                  ],
                },
              ].map((section, i) => (
                <div key={i} className="border border-[#30363d] rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">{section.icon}</span>
                    <h4 className="text-lg font-bold text-[#e6edf3]">{section.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {section.tips.map((tip, j) => (
                      <li key={j} className="flex gap-2 text-sm text-[#8b949e]">
                        <span className="text-[#58a6ff] flex-shrink-0">→</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────── */
        {/* Disclaimers */
        {/* ──────────────────────────────────────────────────────────────── */}
        <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-6 space-y-4">
          <h3 className="font-bold text-[#e6edf3] text-lg flex items-center gap-2">
            <span>⚠️</span> Important Disclaimers & Legal Notice
          </h3>
          <ul className="text-sm text-[#8b949e] space-y-3 list-disc list-inside">
            <li>
              <strong className="text-[#e6edf3]">Indicative Rates:</strong> All rates shown are estimates as of March 2026 and subject to change. Always verify current rates on official protocol websites before transacting.
            </li>
            <li>
              <strong className="text-[#e6edf3]">Not Investment Advice:</strong> This tool is for informational and educational purposes only. We do not provide financial, investment, legal, or tax advice. Do not make investment decisions based solely on this information.
            </li>
            <li>
              <strong className="text-[#e6edf3]">Smart Contract Risk:</strong> All blockchain protocols carry smart contract risk. Hacks, exploits, and bugs can result in permanent loss of funds. Only deposit funds you can afford to lose completely.
            </li>
            <li>
              <strong className="text-[#e6edf3]">Variable Returns:</strong> Lending yields are variable and depend on borrower demand, market conditions, and protocol mechanics. Yields can decrease significantly, drop to zero, or become negative.
            </li>
            <li>
              <strong className="text-[#e6edf3]">CeFi Counterparty Risk:</strong> Centralized lending platforms depend on company solvency. Historical failures show that CeFi yields can disappear due to bankruptcy or fraud.
            </li>
            <li>
              <strong className="text-[#e6edf3]">Regulatory Risk:</strong> Cryptocurrency regulations are evolving. Changes in laws could affect platform operations, yields, or your ability to withdraw funds.
            </li>
            <li>
              <strong className="text-[#e6edf3]">Tax Implications:</strong> Lending yields are generally taxable as income in most jurisdictions. Consult a tax professional about your specific situation.
            </li>
            <li>
              <strong className="text-[#e6edf3]">Affiliate Links:</strong> Some platform links may be affiliate partnerships. This does not affect your rates but helps support this site's maintenance.
            </li>
          </ul>
        </div>

        {/* ──────────────────────────────────────────────────────────────── */
        {/* Related Resources */
        {/* ──────────────────────────────────────────────────────────────── */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#e6edf3]">Related Tools & Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "DeFi Yields Tracker",
                href: "/tools/defi-yields",
                tag: "Tools",
                desc: "Track yields across DeFi protocols in real-time",
              },
              {
                title: "Staking APY Comparison",
                href: "/tools/staking-apy",
                tag: "Yield",
                desc: "Compare staking rewards across validators and networks",
              },
              {
                title: "How to Lend Crypto Safely",
                href: "/learn/how-to-lend-crypto",
                tag: "Education",
                desc: "Step-by-step guide to safely lend cryptocurrencies",
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="bg-[#0d1117] border border-[#30363d] rounded-xl p-5 hover:border-[#58a6ff] transition-colors block"
              >
                <span className="inline-block text-[#58a6ff] text-xs font-medium px-3 py-1 mb-3 rounded-full border border-[#58a6ff]">
                  {item.tag}
                </span>
                <h3 className="font-semibold text-[#e6edf3] text-base mb-2">{item.title}</h3>
                <p className="text-sm text-[#8b949e]">{item.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────── */
        {/* Footer Info */
        {/* ──────────────────────────────────────────────────────────────── */}
        <div className="border-t border-[#30363d] pt-8 text-xs text-[#8b949e] space-y-2">
          <p>
            <strong className="text-[#e6edf3]">Last Updated:</strong> March 11, 2026 15:30 UTC
          </p>
          <p>
            <strong className="text-[#e6edf3]">Data Source:</strong> Aggregated from official protocol websites, blockchain explorers, and DeFi data providers. Rates are indicative and may vary.
          </p>
          <p>
            <strong className="text-[#e6edf3]">Feedback:</strong> Found an issue or have suggestions? Please reach out to help us improve this tool.
          </p>
        </div>
      </div>
    </>
  );
}
