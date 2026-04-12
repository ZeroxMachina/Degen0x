import { Metadata } from "next";
import Link from "next/link";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";
import AaveV4SpokesExplorer from "@/components/AaveV4SpokesExplorer";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Aave v4 Explained 2026 — Hub & Spoke Architecture | degen0x",
  description:
    "Aave v4 rewrites DeFi's largest lending market with a unified Hub & Spoke architecture. Learn what changes for lenders, borrowers, and AAVE holders in 2026.",
  keywords: [
    "aave v4",
    "aave v4 guide",
    "aave v4 explained",
    "aave v4 2026",
    "aave unified liquidity",
    "aave hub and spoke",
    "aave v4 vs v3",
    "GHO stablecoin",
    "aave horizon",
    "defi lending 2026",
  ],
  openGraph: {
    title: "Aave v4 Explained — The Complete 2026 Guide | degen0x",
    description:
      "Aave v4 rewrites how DeFi lending works. Hub & Spoke architecture, unified liquidity, dynamic risk premiums, GHO expansion — here's everything that changes.",
    url: "https://degen0x.com/learn/aave-v4-guide",
    type: "article",
    publishedTime: "2026-03-15T00:00:00Z",
    modifiedTime: "2026-03-15T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/og-aave-v4-guide.png",
        width: 1200,
        height: 630,
        alt: "Aave v4 Guide 2026 — degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aave v4 Explained 2026",
    description:
      "The biggest overhaul in Aave's history. Here's exactly what changes — and what it means for your deposits.",
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "Aave v4 Guide 2026 — Hub & Spoke Architecture, GHO & What Changes",
  description:
    "Aave v4 is the biggest upgrade to DeFi's largest lending protocol. This guide covers the Hub & Spoke architecture, Unified Liquidity Layer, GHO stablecoin, Horizon institutional markets, and how v4 compares to v3.",
  url: "https://degen0x.com/learn/aave-v4-guide",
  datePublished: "2026-03-15T00:00:00Z",
  dateModified: "2026-03-15T00:00:00Z",
  author: "degen0x Team",
  image: "https://degen0x.com/og-aave-v4-guide.png",
  wordCount: 3200,
});

const faqSchema = generateFAQSchema([
  {
    question: "What is Aave v4?",
    answer:
      "Aave v4 is the fourth major version of Aave, the largest DeFi lending protocol. It introduces a Hub & Spoke architecture that unifies all liquidity into a single layer per chain, replacing the fragmented pool model of v3. It also brings ERC-4626 share accounting, dynamic risk premiums, and better cross-chain capabilities.",
  },
  {
    question: "When does Aave v4 launch?",
    answer:
      "Aave v4 is targeting an Ethereum mainnet launch in Q2 2026, following an extended testnet period and multiple security audits. The launch was originally planned for Q4 2025 and was pushed to ensure thorough security review.",
  },
  {
    question: "What is the difference between Aave v3 and Aave v4?",
    answer:
      "The biggest changes are: (1) Hub & Spoke architecture replaces siloed pools with a unified Liquidity Hub; (2) ERC-4626 share accounting replaces the rebasing aToken model; (3) Dynamic risk premiums that auto-adjust based on collateral quality; (4) Fuzzy-liquidation engine that reduces bad debt; and (5) Improved cross-chain expansion capabilities.",
  },
  {
    question: "What is GHO and how does it work in Aave v4?",
    answer:
      "GHO is Aave's native overcollateralized stablecoin, soft-pegged to $1 USD. Users can mint GHO by providing collateral in Aave. In v4, GHO gains access to the unified liquidity layer and cross-chain deployments, with the supply growing toward $500M after a strong 2025.",
  },
  {
    question: "What is Aave Horizon?",
    answer:
      "Aave Horizon is a permissioned lending market for institutional users and tokenized real-world assets (RWAs). Launched in August 2025, it allows regulated institutions to participate in DeFi lending using compliant assets. Partners include Franklin Templeton, VanEck, and Ripple.",
  },
  {
    question: "Is it safe to use Aave v4?",
    answer:
      "Aave has one of the best security track records in DeFi, with $50B+ in TVL at peak and no protocol-level exploits since launch. V4 has undergone multiple formal audits. That said, all DeFi carries smart contract risk. Never deposit more than you can afford to lose.",
  },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

// ─── Page Component ───────────────────────────────────────────────────────────
export default function AaveV4GuidePage() {
  return (
    <>
      <StructuredData data={combinedSchema} />

      <main style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px", color: "#e6edf3", fontFamily: "system-ui, sans-serif" }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ background: "#1f6feb", color: "#fff", fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 6 }}>
              DeFi
            </span>
            <span style={{ background: "#388bfd22", color: "#388bfd", fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 6, border: "1px solid #388bfd44" }}>
              Intermediate
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 16, background: "linear-gradient(135deg, #79c0ff 0%, #a5d6ff 50%, #cae8ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Aave v4: The Complete Guide to DeFi&apos;s Biggest Lending Upgrade in 2026
          </h1>

          <p style={{ fontSize: 18, color: "#8b949e", lineHeight: 1.6, marginBottom: 12 }}>
            Aave v4 rewires the largest lending protocol in DeFi from the ground up. Here&apos;s exactly what changes, what stays the same, and what it means for your deposits.
          </p>

          <p style={{ fontSize: 13, color: "#6e7681" }}>Updated March 2026 · 13 min read · by degen0x Team</p>
        </div>

        {/* ── Disclaimer ── */}
        <div style={{ background: "#1f2937", border: "1px solid #374151", borderRadius: 10, padding: "14px 18px", marginBottom: 32, display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ fontSize: 18 }}>⚠️</span>
          <p style={{ margin: 0, fontSize: 13, color: "#9ca3af", lineHeight: 1.6 }}>
            This guide is for informational purposes only. It is not financial advice. Always do your own research before making investment decisions. DeFi protocols carry smart contract risk.
          </p>
        </div>

        {/* ── Table of Contents ── */}
        <nav style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "20px 24px", marginBottom: 40 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#6e7681", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 12px" }}>Table of Contents</p>
          <ol style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              ["1", "what-is-aave", "What Is Aave?"],
              ["2", "why-v4", "Why Does Aave Need v4?"],
              ["3", "hub-spoke", "The Hub & Spoke Architecture"],
              ["4", "key-features", "Key Features of Aave v4"],
              ["5", "gho-stablecoin", "GHO Stablecoin in v4"],
              ["6", "horizon", "Aave Horizon: Institutional DeFi"],
              ["7", "v3-vs-v4", "Aave v3 vs v4 Comparison"],
              ["8", "aave-token", "The AAVE Token & Tokenomics"],
              ["9", "risks", "Risks to Understand"],
              ["10", "faq", "FAQ"],
            ].map(([num, anchor, label]) => (
              <li key={anchor} style={{ fontSize: 14 }}>
                <a href={`#${anchor}`} style={{ color: "#58a6ff", textDecoration: "none", transition: "text-decoration 0.15s" }} onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")} onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}>
                  {num}. {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── Section 1: What Is Aave ── */}
        <section id="what-is-aave" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            1. What Is Aave? 🏦
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 16 }}>
            Aave is a decentralized lending and borrowing protocol — the largest in DeFi by total value locked (<code style={{ background: "#161b22", padding: "2px 6px", borderRadius: 4, fontSize: 14 }}>TVL</code>). You deposit crypto assets and earn yield, or you post collateral and borrow against it, all without handing your funds to a bank, a company, or any single third party.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We wrote this guide because the existing explanations online are either too simplified or assume PhD-level knowledge. Neither serves most readers.
          </p>
        </div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 16 }}>
            Originally called ETHLend and launched in 2017, Aave has processed trillions of dollars in loan volume across dozens of blockchains. At its 2025 peak, Aave held over <strong style={{ color: "#e6edf3" }}>$75 billion</strong> in total deposits — a figure that would rank it among the top 50 banks in the United States if it were a traditional institution.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            The protocol has gone through three major versions since launch. Aave v1 introduced flash loans. Aave v2 refined the interest rate model. Aave v3 brought isolated markets, cross-chain portals, and efficiency mode (<code style={{ background: "#161b22", padding: "2px 6px", borderRadius: 4, fontSize: 14 }}>eMode</code>). Now Aave v4 is the most ambitious overhaul yet — a ground-up rethink of how lending markets are structured.
          </p>
        </section>

        {/* ── Section 2: Why v4 ── */}
        <section id="why-v4" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            2. Why Does Aave Need v4? 🔄
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 16 }}>
            Aave v3 worked well. But as Aave expanded to 14+ networks and added dozens of asset markets, a core problem emerged: <strong style={{ color: "#e6edf3" }}>fragmented liquidity</strong>. Every market (USDC on Ethereum, ETH on Arbitrum, wBTC on Base) sat in its own silo. Capital efficiency suffered. Risk management was duplicated across dozens of contracts. The codebase became unwieldy.
          </p>

          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "20px 24px", marginBottom: 20 }}>
            <p style={{ fontWeight: 600, color: "#58a6ff", margin: "0 0 10px", fontSize: 14 }}>📌 The Core Problem</p>
            <p style={{ margin: 0, fontSize: 15, color: "#c9d1d9", lineHeight: 1.7 }}>
              In Aave v3, a stablecoin deposited in the USDC market couldn&apos;t be used to fill a loan demand in the DAI market, even if both markets had the same risk profile. This stranded capital and reduced yields for lenders while increasing borrowing costs for users.
            </p>
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 16 }}>
            Aave v4 is Aave Labs&apos; answer to this. The team describes it as <em>"the most significant architectural evolution of the Aave Protocol since V1."</em> Rather than patching the existing structure, v4 introduces an entirely new model — one built for the next phase of DeFi&apos;s scale.
          </p>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            The mainnet launch on Ethereum is targeted for <strong style={{ color: "#e6edf3" }}>Q2 2026</strong>, following an extended public testnet and multiple independent security audits. V3 markets will continue running in parallel during migration — users won&apos;t need to urgently move positions.
          </p>
        </section>

        {/* ── Section 3: Hub & Spoke ── */}
        <section id="hub-spoke" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            3. The Hub &amp; Spoke Architecture ⚙️
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 20 }}>
            The centerpiece of Aave v4 is its new <strong style={{ color: "#e6edf3" }}>Hub & Spoke architecture</strong>. Instead of dozens of isolated pools, all assets on a given network flow into a single <strong style={{ color: "#e6edf3" }}>Liquidity Hub</strong>. Individual markets — called <strong style={{ color: "#e6edf3" }}>Spokes</strong> — connect to that hub to borrow liquidity as needed.
          </p>

          {/* Diagram */}
          <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: 14, padding: 28, marginBottom: 24 }}>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#6e7681", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 20px", textAlign: "center" }}>Simplified Architecture</p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              {/* Hub */}
              <div style={{ background: "#1f6feb22", border: "2px solid #1f6feb", borderRadius: 10, padding: "12px 32px", textAlign: "center", width: "fit-content" }}>
                <p style={{ margin: 0, fontWeight: 700, color: "#79c0ff", fontSize: 15 }}>🏛 Liquidity Hub</p>
                <p style={{ margin: "4px 0 0", fontSize: 12, color: "#6e7681" }}>Central asset pool — tracks all spokes</p>
              </div>
              {/* Connector */}
              <div style={{ color: "#30363d", fontSize: 20 }}>│</div>
              {/* Spokes */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                {[
                  { label: "Stablecoin Spoke", sub: "USDC, DAI, GHO" },
                  { label: "ETH Derivatives Spoke", sub: "wstETH, rETH, cbETH" },
                  { label: "High-Risk Spoke", sub: "Long-tail assets" },
                  { label: "Horizon Spoke", sub: "Permissioned / RWAs" },
                ].map((spoke) => (
                  <div key={spoke.label} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 8, padding: "10px 16px", textAlign: "center", minWidth: 140 }}>
                    <p style={{ margin: 0, fontWeight: 600, color: "#e6edf3", fontSize: 13 }}>{spoke.label}</p>
                    <p style={{ margin: "4px 0 0", fontSize: 11, color: "#6e7681" }}>{spoke.sub}</p>
                  </div>
                ))}
              </div>
            </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-15"
          updatedDate="2026-03-15"
          readingTime={4}
          section="learn"
        />

          </div>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 16 }}>
            Here&apos;s the critical insight: <strong style={{ color: "#e6edf3" }}>the Hub doesn&apos;t care which Spoke a user interacts with</strong>. A stablecoin deposit is available to any Spoke authorized to use it, within defined limits. If demand spikes in the ETH derivatives Spoke, it can draw from the same pool of capital as the stablecoin Spoke. Capital flows to where it&apos;s needed automatically.
          </p>

          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "20px 24px", marginBottom: 16 }}>
            <p style={{ fontWeight: 600, color: "#3fb950", margin: "0 0 10px", fontSize: 14 }}>✅ What This Means for Lenders</p>
            <p style={{ margin: 0, fontSize: 15, color: "#c9d1d9", lineHeight: 1.7 }}>
              Higher capital utilization = higher yields. In v3, your USDC might sit idle in a low-demand market. In v4, that same USDC is always working across whichever Spoke has the most borrowing demand.
            </p>
          </div>

          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "20px 24px" }}>
            <p style={{ fontWeight: 600, color: "#3fb950", margin: "0 0 10px", fontSize: 14 }}>✅ What This Means for Borrowers</p>
            <p style={{ margin: 0, fontSize: 15, color: "#c9d1d9", lineHeight: 1.7 }}>
              More available liquidity = lower borrowing rates. Borrowers competing for a deep unified pool face less rate pressure than borrowers hitting isolated market ceilings.
            </p>
          </div>
        </section>

        {/* ── Interactive Component ── */}
        <AaveV4SpokesExplorer />

        {/* ── Section 4: Key Features ── */}
        <section id="key-features" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            4. Key Features of Aave v4 🔑
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 24 }}>
            The Hub & Spoke is the headline, but v4 ships a full suite of improvements underneath it.
          </p>

          {/* Feature Cards */}
          {[
            {
              icon: "📐",
              title: "ERC-4626 Share Accounting",
              body: "Aave v3 uses rebasing aTokens — your balance ticks up in your wallet every block. While elegant, rebasing tokens are a nightmare for tax accounting and DeFi composability. V4 switches to ERC-4626 vault shares: your token count stays fixed, but each share is worth more underlying assets over time. This makes Aave positions cleaner to integrate, easier to tax, and more compatible with the rest of DeFi.",
            },
            {
              icon: "📊",
              title: "Dynamic Risk Premiums",
              body: "In v3, interest rates adjust based on utilization, but collateral quality isn't factored in directly. In v4, borrowing rates include a dynamic risk premium tied to the quality of your collateral. Higher-volatility collateral = higher rate. Stablecoin collateral = lower rate. This creates more accurate pricing of risk and reduces bad debt accumulation.",
            },
            {
              icon: "🛡️",
              title: "Fuzzy Liquidation Engine",
              body: "V3 liquidations are binary: when your health factor drops below 1.0, a liquidator takes a fixed percentage of your collateral. V4 introduces a softer liquidation curve — positions are partially liquidated across a range of health factors rather than all at once. This reduces the penalty for borrowers and decreases the liquidation cascades that amplify market volatility.",
            },
            {
              icon: "⛽",
              title: "Gas Efficiency Improvements",
              body: "The unified Hub architecture means core state (who owns what) is stored once, not duplicated per market. Combined with Move VM learnings and Ethereum's Pectra upgrade, typical Aave v4 transactions are expected to cost significantly less gas than their v3 equivalents — a meaningful improvement as Aave expands to more L2 networks.",
            },
            {
              icon: "🌉",
              title: "Cross-Chain by Design",
              body: "V4's Hub is designed from day one to support native cross-chain liquidity. A deposit on Ethereum can, with appropriate bridge infrastructure, support a borrow on Base or Arbitrum — without requiring users to manually bridge assets or manage positions across multiple interfaces.",
            },
          ].map((feature) => (
            <div key={feature.title} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "20px 24px", marginBottom: 16 }}>
              <p style={{ fontWeight: 700, color: "#e6edf3", margin: "0 0 8px", fontSize: 15 }}>
                {feature.icon} {feature.title}
              </p>
              <p style={{ margin: 0, fontSize: 15, color: "#c9d1d9", lineHeight: 1.75 }}>{feature.body}</p>
            </div>
          ))}
        </section>

        {/* ── Section 5: GHO ── */}
        <section id="gho-stablecoin" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            5. GHO Stablecoin in v4 💵
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 16 }}>
            <code style={{ background: "#161b22", padding: "2px 6px", borderRadius: 4, fontSize: 14 }}>GHO</code> is Aave&apos;s native overcollateralized stablecoin, soft-pegged to $1 USD. You mint GHO by providing Aave-approved collateral — similar to how DAI works, but with Aave&apos;s liquidity and governance backing it.
          </p>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 16 }}>
            GHO had a breakout 2025: total supply grew to nearly <strong style={{ color: "#e6edf3" }}>$500M</strong>, driven by cross-chain deployments and new facilitator integrations. GHO became a meaningful revenue driver for the Aave DAO, generating over <strong style={{ color: "#e6edf3" }}>$14M in annualized revenue</strong> by year-end.
          </p>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 16 }}>
            In v4, GHO gets deeper integration into the Unified Liquidity Layer. It can be minted within dedicated GHO Spokes with optimized parameters, and the cross-chain architecture enables GHO to expand natively to new networks without relying on third-party bridges.
          </p>

          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "20px 24px" }}>
            <p style={{ fontWeight: 600, color: "#58a6ff", margin: "0 0 10px", fontSize: 14 }}>📌 GHO vs. Other DeFi Stablecoins</p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, color: "#c9d1d9" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #30363d" }}>
                    {["Stablecoin", "Type", "Backing", "Issuer", "Supply (approx.)"].map((h) => (
                      <th key={h} style={{ textAlign: "left", padding: "8px 12px", color: "#8b949e", fontWeight: 600 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["GHO", "Overcollateralized", "Crypto assets via Aave", "Aave DAO", "~$500M"],
                    ["DAI / USDS", "Overcollateralized + RWA", "Crypto + RWA", "MakerDAO / Sky", "~$5B"],
                    ["crvUSD", "Overcollateralized", "Curve LP positions", "Curve DAO", "~$1B"],
                    ["USDC", "Fiat-backed", "USD reserves", "Circle", "~$45B"],
                    ["USDT", "Fiat-backed", "USD + reserves", "Tether", "~$140B"],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #21262d" }}>
                      {row.map((cell, j) => (
                        <td key={j} style={{ padding: "10px 12px", color: j === 0 ? "#e6edf3" : "#c9d1d9", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Section 6: Horizon ── */}
        <section id="horizon" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            6. Aave Horizon: Institutional DeFi 🏛️
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 16 }}>
            Launched in August 2025, <strong style={{ color: "#e6edf3" }}>Aave Horizon</strong> is a permissioned Spoke designed for institutional participants and tokenized real-world assets (RWAs). It operates on the same Aave infrastructure as the public market but with KYC/AML requirements and support for regulated asset types.
          </p>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 16 }}>
            Horizon crossed <strong style={{ color: "#e6edf3" }}>$580M in net deposits</strong> by December 2025 and is targeting $1B+ in 2026. Partners already on the platform include <strong style={{ color: "#e6edf3" }}>Franklin Templeton, VanEck, Circle, and Ripple</strong>.
          </p>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 16 }}>
            The strategic angle: as tokenized US Treasuries, money market funds, and equities grow on-chain, they need somewhere to borrow against. Horizon gives institutions a DeFi lending venue that satisfies their compliance teams — without forking the protocol or building something new.
          </p>

          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "20px 24px" }}>
            <p style={{ fontWeight: 600, color: "#3fb950", margin: "0 0 12px", fontSize: 14 }}>✅ Horizon Fast Facts</p>
            <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Launched: August 2025",
                "TVL: $580M+ as of December 2025",
                "Access: Permissioned — KYC required",
                "Collateral: Tokenized US Treasuries, tokenized equity, major crypto",
                "Partners: Franklin Templeton, VanEck, Circle, Ripple",
                "V4 integration: Runs as a dedicated permissioned Spoke on the Liquidity Hub",
              ].map((item) => (
                <li key={item} style={{ fontSize: 14, color: "#c9d1d9" }}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Section 7: v3 vs v4 ── */}
        <section id="v3-vs-v4" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            7. Aave v3 vs Aave v4: Side-by-Side 📋
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 20 }}>
            Here&apos;s how the two versions stack up on the features that matter most to lenders and borrowers:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, color: "#c9d1d9" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #30363d" }}>
                  {["Feature", "Aave v3", "Aave v4"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "10px 14px", color: "#8b949e", fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Architecture", "Isolated pools per market", "Unified Hub & Spoke"],
                  ["Token Standard", "Rebasing aTokens", "ERC-4626 vault shares"],
                  ["Interest Rate Model", "Utilization-based", "Utilization + dynamic risk premium"],
                  ["Liquidation Mechanism", "Binary (fixed %) at health factor < 1.0", "Fuzzy curve — partial liquidations"],
                  ["Capital Efficiency", "Medium — siloed markets", "High — shared liquidity"],
                  ["Cross-Chain", "Portals (limited)", "Native cross-chain by design"],
                  ["Institutional Access", "Public only", "Public + Horizon (permissioned)"],
                  ["GHO Integration", "External facilitator model", "Native Spoke in Liquidity Hub"],
                  ["Gas Costs", "Higher (per-market storage)", "Lower (shared Hub state)"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #21262d", background: i % 2 === 0 ? "#0d1117" : "transparent" }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "10px 14px", color: j === 0 ? "#e6edf3" : j === 2 ? "#3fb950" : "#c9d1d9", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 8: AAVE Token ── */}
        <section id="aave-token" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            8. The AAVE Token &amp; Tokenomics 🪙
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 16 }}>
            <code style={{ background: "#161b22", padding: "2px 6px", borderRadius: 4, fontSize: 14 }}>AAVE</code> is the governance and safety module token of the Aave protocol. Holders vote on risk parameters, new asset listings, and protocol upgrades — including the v4 migration itself.
          </p>

          {/* Token Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 24 }}>
            {[
              { label: "Price (approx.)", value: "~$190", sub: "March 2026" },
              { label: "Market Cap", value: "~$3B", sub: "16M supply" },
              { label: "Max Supply", value: "16M AAVE", sub: "Fixed, no inflation" },
              { label: "Protocol Revenue", value: "$100-120M/yr", sub: "Annualized" },
              { label: "TVL (2025 peak)", value: "$75B", sub: "Top 50 US banks" },
              { label: "Market Share", value: "~65%", sub: "DeFi lending" },
            ].map((m) => (
              <div key={m.label} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "14px 16px" }}>
                <p style={{ margin: "0 0 4px", fontSize: 12, color: "#6e7681" }}>{m.label}</p>
                <p style={{ margin: "0 0 2px", fontSize: 18, fontWeight: 700, color: "#e6edf3" }}>{m.value}</p>
                <p style={{ margin: 0, fontSize: 11, color: "#6e7681" }}>{m.sub}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 16 }}>
            One important dynamic: AAVE has a <strong style={{ color: "#e6edf3" }}>fixed max supply of 16 million tokens</strong>, and nearly all of it already circulates. There&apos;s no inflation diluting holders. Protocol revenue flows into the Safety Module (a backstop reserve) and is partially distributed to <code style={{ background: "#161b22", padding: "2px 6px", borderRadius: 4, fontSize: 14 }}>stkAAVE</code> stakers.
          </p>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9" }}>
            The 2026 roadmap also includes <strong style={{ color: "#e6edf3" }}>Umbrella</strong>, a revamped safety module that improves how the protocol handles shortfall events. This reduces the risk of AAVE being slashed in a bad debt scenario — a key concern for token holders.
          </p>
        </section>

        {/* ── Section 9: Risks ── */}
        <section id="risks" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            9. Risks to Understand 🔴
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#c9d1d9", marginBottom: 24 }}>
            Aave has one of the best security records in DeFi, but no protocol is risk-free. Understand these before depositing.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { color: "#f85149", label: "Smart Contract Risk", body: "V4 introduces a new, complex codebase. New code = new attack surface. Even with multiple audits, undiscovered bugs remain possible. The Unified Liquidity Hub is a single point of failure — if exploited, all Spokes are affected. This risk is higher at launch and diminishes over time as the code is battle-tested." },
              { color: "#f85149", label: "Oracle Risk", body: "Aave's liquidation engine depends on price oracles (primarily Chainlink). A manipulated or stale oracle feed can trigger unfair liquidations or allow under-collateralized borrows. V4's dynamic risk premiums add more oracle dependency, not less." },
              { color: "#d29922", label: "Migration Risk", body: "Moving positions from v3 to v4 carries execution risk — gas costs, smart contract interaction complexity, and potential timing issues during high network congestion. Aave will offer migration tooling, but users should proceed carefully." },
              { color: "#d29922", label: "Governance Risk", body: "AAVE governance is concentrated — large holders (VCs, Aave Labs itself) can influence key votes. Parameter changes that seem beneficial on paper can have unintended consequences for regular depositors and borrowers." },
              { color: "#3fb950", label: "Liquidation Risk (Borrowers)", body: "If you're borrowing in v4, you still get liquidated if your collateral value drops below required thresholds. V4's fuzzy liquidation is gentler than v3's, but it does not eliminate liquidation risk. Manage your health factor actively." },
            ].map((risk) => (
              <div key={risk.label} style={{ background: "#161b22", border: `1px solid ${risk.color}44`, borderLeft: `4px solid ${risk.color}`, borderRadius: 10, padding: "16px 20px" }}>
                <p style={{ fontWeight: 700, color: risk.color, margin: "0 0 8px", fontSize: 14 }}>{risk.label}</p>
                <p style={{ margin: 0, fontSize: 15, color: "#c9d1d9", lineHeight: 1.75 }}>{risk.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 10: FAQ ── */}
        <section id="faq" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 24, color: "#e6edf3" }}>
            10. FAQ ❓
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                q: "What is Aave v4?",
                a: "Aave v4 is the fourth major version of the Aave lending protocol. It introduces a Hub & Spoke architecture that unifies all liquidity on a given chain into a single pool, replacing the fragmented market structure of v3. It also brings ERC-4626 share accounting, dynamic risk premiums, and a fuzzy liquidation engine.",
              },
              {
                q: "When does Aave v4 launch?",
                a: "Aave v4 is targeting an Ethereum mainnet launch in Q2 2026. The launch was delayed from Q4 2025 to allow additional security audits. V3 markets will continue running in parallel — there's no hard deadline to migrate.",
              },
              {
                q: "What happens to my Aave v3 positions?",
                a: "V3 markets won't be switched off overnight. Aave will provide official migration tooling and a transition period. Your v3 positions will continue earning/accruing interest until you choose to migrate. Watch official Aave governance forums for the exact timeline.",
              },
              {
                q: "What is GHO and how do I mint it?",
                a: "GHO is Aave's native overcollateralized stablecoin pegged to $1. You mint it by depositing eligible collateral in Aave and borrowing GHO against it. The interest you pay on GHO borrows goes directly to the Aave DAO treasury — not to a third-party stablecoin issuer.",
              },
              {
                q: "What is Aave Horizon?",
                a: "Horizon is Aave's permissioned institutional lending market, launched August 2025. It requires KYC and is designed for tokenized RWAs and institutional capital. By December 2025 it had $580M+ in deposits, with partners including Franklin Templeton, VanEck, Circle, and Ripple.",
              },
              {
                q: "Should I stake AAVE tokens?",
                a: "stkAAVE earns protocol revenue but carries slashing risk — if Aave suffers a bad debt shortfall, stakers can have up to 30% of their AAVE slashed to cover it. V4's Umbrella module redesigns this safety mechanism to reduce the slashing risk. This is not financial advice — always research before staking.",
              },
            ].map(({ q, a }) => (
              <div key={q} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "18px 22px" }}>
                <p style={{ fontWeight: 700, color: "#e6edf3", margin: "0 0 8px", fontSize: 15 }}>Q: {q}</p>
                <p style={{ margin: 0, fontSize: 15, color: "#c9d1d9", lineHeight: 1.75 }}>A: {a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related Articles ── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Related Guides</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { href: "/learn/restaking-eigenlayer-guide", label: "Restaking & EigenLayer Guide" },
              { href: "/learn/real-world-assets-rwa-guide", label: "Real-World Assets (RWA) Guide" },
              { href: "/learn/liquid-staking-derivatives", label: "Liquid Staking Derivatives" },
              { href: "/learn/advanced-defi-strategies", label: "Advanced DeFi Strategies" },
              { href: "/learn/stablecoin-comparison", label: "Stablecoin Comparison 2026" },
            ].map(({ href, label }) => (
              <Link href={href}
                key={href}
                style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "14px 16px", color: "#58a6ff", textDecoration: "none", fontSize: 14, fontWeight: 500, display: "block", transition: "border-color 0.2s" }}
              >
                {label} →
              </Link>
            ))}
          </div>
        </section>

        {/* ── Bottom Disclaimer ── */}
        <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "16px 20px" }}>
          <p style={{ margin: 0, fontSize: 13, color: "#6e7681", lineHeight: 1.6 }}>
            ⚠️ <strong style={{ color: "#8b949e" }}>Disclaimer:</strong> This content is for educational purposes only and does not constitute financial or investment advice. Cryptocurrency and DeFi protocols involve significant risk. Always conduct your own research and consult a qualified financial advisor before making any investment decisions. Data sourced from Aave documentation, DefiLlama, and CoinGecko — verified March 2026 but subject to change.
          </p>
        </div>

      </main>
      <BackToTop />
    </>
  );
}
