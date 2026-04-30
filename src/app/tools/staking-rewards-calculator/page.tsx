"use client";

import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import AuthorAttribution from "@/components/AuthorAttribution";

/* ── Focus-ring + hover + mobile-grid styles ── */
const POLISH_CSS = `
  .src-link:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  .src-link:hover {
    border-color: var(--color-primary) !important;
    background-color: var(--color-bg-card-hover) !important;
  }
  @media (max-width: 768px) {
    .src-grid-2col { grid-template-columns: 1fr !important; }
  }
`;

const faqs = [
  {
    q: "What is the difference between APY and APR for staking?",
    a: "APR (Annual Percentage Rate) is simple interest calculated once. APY (Annual Percentage Yield) includes compounding, where earned rewards generate their own rewards. For staking, APY is always higher than APR. Example: 5% APR with daily compounding = 5.13% APY.",
  },
  {
    q: "Which blockchain offers the highest staking yields?",
    a: "As of 2026, newer networks offer higher yields: ATOM (15-20%), Polkadot (12-15%), Solana (6-8%), and Ethereum (3-4%). Higher yields often mean higher network risk. Established networks like Ethereum have lower but more stable yields.",
  },
  {
    q: "Is exchange staking or self-staking better?",
    a: "Exchange staking (Kraken, Coinbase) is easier and lower-risk but takes a 10-15% commission. Self-staking via solo validators gives 100% of rewards but requires technical knowledge and a 32 ETH minimum for Ethereum.",
  },
  {
    q: "How much do staking fees reduce my returns?",
    a: "Exchange fees range from 10-25%. Liquid staking (Lido, Rocket Pool) charges 5-10%. Solo staking has 0% fees but requires setup costs and expertise. Calculate net returns: (APY × 0.85) for 15% fee staking.",
  },
  {
    q: "What are taxes on staking rewards?",
    a: "Most countries tax staking rewards as ordinary income when received. Report the USD value at the time you receive rewards, not when price changes. Keep detailed staking transaction records. Consult a crypto tax accountant.",
  },
  {
    q: "Can I lose money while staking?",
    a: 'Yes. If your validator performs poorly (network participation issues, downtime), penalties reduce rewards. Slashing can cause 32%+ losses on Ethereum for misbehavior. Also, if asset price crashes, rewards don\'t offset the loss.',
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://degen0x.com/" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://degen0x.com/tools" },
    { "@type": "ListItem", position: 3, name: "Staking Rewards Calculator" },
  ],
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Staking Rewards Calculator",
  url: "https://degen0x.com/tools/staking-rewards-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "All",
  description:
    "Calculate crypto staking rewards with our APY calculator. Compare yields across ETH, SOL, DOT, ATOM, and other assets. Calculate compound interest.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function StakingRewardsCalculatorPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
      <style dangerouslySetInnerHTML={{ __html: POLISH_CSS }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-success), var(--color-secondary))",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Tools", href: "/tools" },
              { label: "Staking Rewards Calculator" },
            ]}
          />
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px" }}>
            Staking Rewards Calculator
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.95 }}>
            Calculate crypto staking yields, compound interest, and projected returns across all major assets
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        {/* What is Staking */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            padding: "40px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "var(--color-primary)" }}>
            How Are Staking Rewards Calculated?
          </h2>
          <p style={{ lineHeight: "1.8", marginBottom: "15px", color: "var(--color-text)" }}>
            Staking rewards are calculated based on three core variables:
          </p>
          <ul style={{ lineHeight: "2", marginLeft: "20px", marginBottom: "20px", color: "var(--color-text)" }}>
            <li>
              <strong>APY (Annual Percentage Yield):</strong> The percentage return you earn per year,
              including compound interest
            </li>
            <li>
              <strong>Staking Amount:</strong> The total cryptocurrency you lock up to earn rewards
            </li>
            <li>
              <strong>Compounding Frequency:</strong> How often rewards are distributed and automatically
              restaked (daily, weekly, or monthly)
            </li>
          </ul>
          <p style={{ lineHeight: "1.8", color: "var(--color-text-secondary)" }}>
            The basic formula is: Annual Rewards = Staking Amount × APY. With daily compounding, your
            actual returns exceed the simple APY calculation because earned rewards immediately start
            generating their own returns.
          </p>
        </div>

        {/* APY vs APR */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            padding: "40px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "var(--color-primary)" }}>
            APY vs APR: Understanding the Difference
          </h2>
          <div className="src-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "30px" }}>
            <div style={{ backgroundColor: "var(--color-bg)", padding: "20px", borderRadius: "6px", borderLeft: "4px solid var(--color-primary)" }}>
              <h3 style={{ fontSize: "1.1rem", marginBottom: "10px", color: "var(--color-primary-light)" }}>APR (Simple)</h3>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.6", marginBottom: "10px" }}>
                <strong>No compounding.</strong> Rewards calculated once per year on the principal only.
              </p>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                Example: $10,000 at 5% APR = $500/year, always the same
              </p>
            </div>
            <div style={{ backgroundColor: "var(--color-bg)", padding: "20px", borderRadius: "6px", borderLeft: "4px solid var(--color-success)" }}>
              <h3 style={{ fontSize: "1.1rem", marginBottom: "10px", color: "var(--color-primary-light)" }}>APY (Compound)</h3>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: "1.6", marginBottom: "10px" }}>
                <strong>With compounding.</strong> Rewards earned daily and automatically added to your stake.
              </p>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                Example: $10,000 at 5% APY with daily compounding = $512.67/year (higher due to compound effect)
              </p>
            </div>
          </div>

          <AuthorAttribution
            author="0xMachina"
            role="Founder"
            publishedDate="2026-04-10"
            updatedDate="2026-04-12"
            readingTime={3}
            section="tools"
          />

          <p style={{ lineHeight: "1.8", color: "var(--color-text-secondary)" }}>
            For staking, always look for APY since that&apos;s your actual return. The more frequently
            rewards compound (daily is ideal, weekly is good, monthly is acceptable), the higher
            your effective APY becomes.
          </p>
        </div>

        {/* Top Staking Yields */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            padding: "40px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "var(--color-primary)" }}>
            Top Staking Yields by Asset (2026)
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.95rem",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-border)" }}>
                  <th style={{ padding: "12px", textAlign: "left", color: "var(--color-primary)" }}>Asset</th>
                  <th style={{ padding: "12px", textAlign: "left", color: "var(--color-primary)" }}>Exchange Staking</th>
                  <th style={{ padding: "12px", textAlign: "left", color: "var(--color-primary)" }}>Liquid Staking</th>
                  <th style={{ padding: "12px", textAlign: "left", color: "var(--color-primary)" }}>Solo Staking</th>
                  <th style={{ padding: "12px", textAlign: "left", color: "var(--color-primary)" }}>Risk Level</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "12px", color: "var(--color-text)", fontWeight: "bold" }}>Ethereum (ETH)</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>3-4%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>2.9-3.5%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>3.8-4.2%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>Low</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "12px", color: "var(--color-text)", fontWeight: "bold" }}>Solana (SOL)</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>6-8%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>5.5-7%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>6.5-8.5%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>Medium</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "12px", color: "var(--color-text)", fontWeight: "bold" }}>Polkadot (DOT)</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>12-15%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>11-14%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>13-17%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>Medium</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "12px", color: "var(--color-text)", fontWeight: "bold" }}>Cosmos (ATOM)</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>15-20%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>14-19%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>16-21%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>High</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "12px", color: "var(--color-text)", fontWeight: "bold" }}>Cardano (ADA)</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>4-5%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>3.8-4.8%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>4.5-6%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>Low</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", color: "var(--color-text)", fontWeight: "bold" }}>Avalanche (AVAX)</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>8-11%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>7.5-10%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>9-12%</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ lineHeight: "1.8", marginTop: "20px", color: "var(--color-text-secondary)" }}>
            Note: Yields vary based on network inflation, total staked amount, and validator performance.
            Higher yields on newer networks come with higher risk. These rates are approximate as of April 2026.
          </p>
        </div>

        {/* Factors Affecting Rewards */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            padding: "40px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "var(--color-primary)" }}>
            Factors Affecting Staking Rewards
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            <div style={{ backgroundColor: "var(--color-bg)", padding: "20px", borderRadius: "6px" }}>
              <h3 style={{ color: "var(--color-primary-light)", marginBottom: "10px" }}>Validator Performance</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                Offline validators earn reduced rewards. Poor attestation records reduce payouts. Solo
                validators who run unreliable nodes earn significantly less.
              </p>
            </div>
            <div style={{ backgroundColor: "var(--color-bg)", padding: "20px", borderRadius: "6px" }}>
              <h3 style={{ color: "var(--color-primary-light)", marginBottom: "10px" }}>Network Inflation Rate</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                New coins are created to pay stakers. When total staked amount increases, inflation is
                spread across more validators, reducing individual rewards.
              </p>
            </div>
            <div style={{ backgroundColor: "var(--color-bg)", padding: "20px", borderRadius: "6px" }}>
              <h3 style={{ color: "var(--color-primary-light)", marginBottom: "10px" }}>Commission Rates</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                Validators charge 5-25% commission on rewards. Exchange staking typically takes 10-15%.
                Liquid staking protocols take 5-10% commission.
              </p>
            </div>
            <div style={{ backgroundColor: "var(--color-bg)", padding: "20px", borderRadius: "6px" }}>
              <h3 style={{ color: "var(--color-primary-light)", marginBottom: "10px" }}>Lockup Period</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                Some networks offer bonus APY for longer lockups (3, 6, 12 months). Shorter lockups
                provide more flexibility but lower returns.
              </p>
            </div>
            <div style={{ backgroundColor: "var(--color-bg)", padding: "20px", borderRadius: "6px" }}>
              <h3 style={{ color: "var(--color-primary-light)", marginBottom: "10px" }}>Staking Method</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                Solo staking &gt; Liquid staking &gt; Exchange staking, in terms of raw APY. But solo staking
                requires technical expertise and upfront capital.
              </p>
            </div>
            <div style={{ backgroundColor: "var(--color-bg)", padding: "20px", borderRadius: "6px" }}>
              <h3 style={{ color: "var(--color-primary-light)", marginBottom: "10px" }}>Compounding Frequency</h3>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                Daily compounding &gt; Weekly &gt; Monthly. With daily compounding, rewards start generating
                their own returns immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Compound Staking Math */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            padding: "40px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "var(--color-primary)" }}>
            Compound Interest Examples
          </h2>
          <p style={{ lineHeight: "1.8", marginBottom: "20px", color: "var(--color-text)" }}>
            Here&apos;s how $10,000 compounds over time at different yields:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid var(--color-border)" }}>
                  <th style={{ padding: "12px", textAlign: "left", color: "var(--color-primary)" }}>Period</th>
                  <th style={{ padding: "12px", textAlign: "left", color: "var(--color-primary)" }}>4% APY</th>
                  <th style={{ padding: "12px", textAlign: "left", color: "var(--color-primary)" }}>8% APY</th>
                  <th style={{ padding: "12px", textAlign: "left", color: "var(--color-primary)" }}>15% APY</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "12px", color: "var(--color-text)" }}>1 Year</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>$10,408</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>$10,833</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>$11,618</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "12px", color: "var(--color-text)" }}>5 Years</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>$12,167</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>$14,693</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>$20,114</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td style={{ padding: "12px", color: "var(--color-text)" }}>10 Years</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>$14,802</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>$21,589</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>$40,455</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px", color: "var(--color-text)" }}>20 Years</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>$21,911</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>$46,610</td>
                  <td style={{ padding: "12px", color: "var(--color-text-secondary)" }}>$163,635</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ lineHeight: "1.8", marginTop: "20px", color: "var(--color-text-secondary)" }}>
            Note: These calculations assume APY remains constant and no additional staking. In reality,
            yields fluctuate as network conditions change. Higher yields compound dramatically over time,
            demonstrating the power of long-term staking.
          </p>
        </div>

        {/* Staking Methods Comparison */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            padding: "40px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "var(--color-primary)" }}>
            Staking Methods Comparison
          </h2>
          <div style={{ display: "grid", gap: "20px" }}>
            <div style={{ backgroundColor: "var(--color-bg)", padding: "20px", borderRadius: "6px", borderLeft: "4px solid var(--color-primary)" }}>
              <h3 style={{ color: "var(--color-primary-light)", marginBottom: "10px" }}>Exchange Staking (Kraken, Coinbase)</h3>
              <p style={{ color: "var(--color-text-secondary)", marginBottom: "10px" }}>
                <strong>APY:</strong> 3-8% after 10-15% commission | <strong>Minimum:</strong> $1-100 |
                <strong> Ease:</strong> Very easy
              </p>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                Pros: No technical setup, instant access, insured, custodial protection. Cons: Lower net returns,
                counterparty risk with exchange.
              </p>
            </div>
            <div style={{ backgroundColor: "var(--color-bg)", padding: "20px", borderRadius: "6px", borderLeft: "4px solid var(--color-success)" }}>
              <h3 style={{ color: "var(--color-primary-light)", marginBottom: "10px" }}>Liquid Staking (Lido, Rocket Pool)</h3>
              <p style={{ color: "var(--color-text-secondary)", marginBottom: "10px" }}>
                <strong>APY:</strong> 3-7% after 5-10% commission | <strong>Minimum:</strong> $0.01 |
                <strong> Ease:</strong> Easy
              </p>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                Pros: Get liquid token (stETH), trade/use collateral, higher yields than exchanges. Cons: Smart contract
                risk, slightly centralized validator set.
              </p>
            </div>
            <div style={{ backgroundColor: "var(--color-bg)", padding: "20px", borderRadius: "6px", borderLeft: "4px solid var(--color-accent)" }}>
              <h3 style={{ color: "var(--color-primary-light)", marginBottom: "10px" }}>Solo Staking (Own Validator)</h3>
              <p style={{ color: "var(--color-text-secondary)", marginBottom: "10px" }}>
                <strong>APY:</strong> 3.8-4.2% (ETH) | <strong>Minimum:</strong> 32 ETH (~$130k) |
                <strong> Ease:</strong> Very hard
              </p>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem" }}>
                Pros: Maximum rewards, true decentralization, 0% fees. Cons: High capital requirement, technical
                expertise, offline penalties, slashing risk.
              </p>
            </div>
          </div>
        </div>

        {/* Tax Implications */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            padding: "40px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "var(--color-primary)" }}>
            Tax Implications of Staking Rewards
          </h2>
          <p style={{ lineHeight: "1.8", marginBottom: "15px", color: "var(--color-text)" }}>
            Staking rewards are treated as ordinary income by most tax authorities:
          </p>
          <ul style={{ lineHeight: "2", marginLeft: "20px", marginBottom: "15px", color: "var(--color-text)" }}>
            <li>
              <strong>Income Tax Event:</strong> When rewards hit your wallet, you owe income tax on the
              USD value at that moment (not when you sell)
            </li>
            <li>
              <strong>Record Everything:</strong> Keep dates, amounts received, USD values, and validator names
              for tax filings
            </li>
            <li>
              <strong>Compounding Increases Tax Burden:</strong> Reinvested rewards create additional taxable
              events—track each distribution
            </li>
            <li>
              <strong>Capital Gains Tax:</strong> When you eventually sell staked assets, you owe capital gains
              tax on the appreciation since you received the reward
            </li>
            <li>
              <strong>Jurisdiction Matters:</strong> US (ordinary income), UK (income tax), Canada (50% inclusion),
              EU varies by country
            </li>
            <li>
              <strong>Form 8949 / Schedule D:</strong> Report all staking transactions on US tax returns
            </li>
          </ul>
          <p style={{ lineHeight: "1.8", color: "var(--color-text-secondary)" }}>
            Recommendation: Use a crypto tax software (Koinly, TokenTax) and consult a tax professional
            to ensure compliance, especially if earning over $1,000/year in rewards.
          </p>
        </div>

        {/* Related Tools */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            padding: "40px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "var(--color-primary)" }}>
            Related Tools & Resources
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
            <Link href="/exchanges/best-crypto-exchange-for-staking" className="src-link">
              <span
                style={{
                  display: "block",
                  padding: "15px",
                  backgroundColor: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "6px",
                  color: "var(--color-primary)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background-color 0.2s",
                }}
              >
                Best Exchange for Staking
              </span>
            </Link>
            <Link href="/wallets/best-wallet-for-staking" className="src-link">
              <span
                style={{
                  display: "block",
                  padding: "15px",
                  backgroundColor: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "6px",
                  color: "var(--color-primary)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background-color 0.2s",
                }}
              >
                Best Wallet for Staking
              </span>
            </Link>
            <Link href="/learn/solana-liquid-staking-guide-2026" className="src-link">
              <span
                style={{
                  display: "block",
                  padding: "15px",
                  backgroundColor: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "6px",
                  color: "var(--color-primary)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background-color 0.2s",
                }}
              >
                Solana Liquid Staking Guide
              </span>
            </Link>
            <Link href="/exchanges/crypto-exchange-staking-comparison" className="src-link">
              <span
                style={{
                  display: "block",
                  padding: "15px",
                  backgroundColor: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "6px",
                  color: "var(--color-primary)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background-color 0.2s",
                }}
              >
                Exchange Staking Comparison
              </span>
            </Link>
            <Link href="/investing/crypto-with-most-staking-rewards" className="src-link">
              <span
                style={{
                  display: "block",
                  padding: "15px",
                  backgroundColor: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "6px",
                  color: "var(--color-primary)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background-color 0.2s",
                }}
              >
                Highest Staking Rewards
              </span>
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div
          style={{
            backgroundColor: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            padding: "40px",
          }}
        >
          <h2 style={{ fontSize: "1.8rem", marginBottom: "30px", color: "var(--color-primary)" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "grid", gap: "20px" }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "6px",
                  padding: "20px",
                }}
              >
                <h3 style={{ fontSize: "1.1rem", marginBottom: "10px", color: "var(--color-primary-light)" }}>
                  {faq.q}
                </h3>
                <p style={{ lineHeight: "1.7", color: "var(--color-text-secondary)" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}
