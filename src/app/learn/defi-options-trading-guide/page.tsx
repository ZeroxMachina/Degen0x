import type { Metadata } from "next";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";
import OptionsPnLCalculator from "@/components/OptionsPnLCalculator";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "DeFi Options Trading Guide 2026: On-Chain Options Explained | degen0x",
  description:
    "Learn how to trade crypto options on-chain in 2026. Understand calls, puts, and the Greeks. Compare top protocols: Derive, Stryke, Premia, and Panoptic.",
  keywords: [
    "defi options trading",
    "crypto options on-chain",
    "defi options protocols 2026",
    "derive lyra options",
    "stryke dopex options",
    "options greeks crypto",
    "crypto covered calls",
  ],
  openGraph: {
    title: "DeFi Options Trading Guide 2026: How to Trade On-Chain Options",
    description:
      "Calls, puts, Greeks, and the best on-chain options protocols explained. Derive, Stryke, Premia, and Panoptic compared.",
    url: "https://degen0x.com/learn/defi-options-trading-guide",
    type: "article",
    publishedTime: "2026-03-16T00:00:00Z",
    modifiedTime: "2026-03-16T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: "https://degen0x.com/og-defi-options-trading-guide.png",
        width: 1200,
        height: 630,
        alt: "DeFi Options Trading Guide 2026 — calls, puts, Greeks explained with Derive, Stryke, Premia, and Panoptic protocol comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeFi Options Trading Guide 2026",
    description:
      "Calls, puts, Greeks, and the best on-chain protocols — Derive, Stryke, Premia, and Panoptic explained for crypto traders.",
    images: ["https://degen0x.com/og-defi-options-trading-guide.png"],
  },
};

// ─── Structured Data ───────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "DeFi Options Trading Guide 2026: On-Chain Options Explained",
  description:
    "A complete guide to trading crypto options on-chain: understanding calls, puts, and the Greeks, and comparing the top DeFi options protocols.",
  url: "https://degen0x.com/learn/defi-options-trading-guide",
  datePublished: "2026-03-16T00:00:00Z",
  dateModified: "2026-03-16T00:00:00Z",
  author: "degen0x Team",
  image: "https://degen0x.com/og-defi-options-trading-guide.png",
  wordCount: 2700,
});

const faqSchema = generateFAQSchema([
  {
    question: "What is DeFi options trading?",
    answer:
      "DeFi options trading refers to buying and selling crypto options contracts through on-chain protocols rather than centralized exchanges like Deribit. Smart contracts handle pricing, collateralization, and settlement automatically.",
  },
  {
    question: "What are the best DeFi options protocols in 2026?",
    answer:
      "The top DeFi options protocols in 2026 include Derive (formerly Lyra, 70%+ market share), Stryke (formerly Dopex, concentrated liquidity AMM), Premia (liquidity-sensitive pricing), and Panoptic (perpetual on-chain options built on Uniswap v4).",
  },
  {
    question: "What is delta in crypto options?",
    answer:
      "Delta measures how much an option's price changes for every $1 move in the underlying asset. A delta of 0.5 means the option gains $0.50 for each $1 ETH increases. Delta ranges from 0 to 1 for calls and -1 to 0 for puts.",
  },
  {
    question: "Can I lose more than my premium when buying crypto options?",
    answer:
      "No. When you buy an option (call or put), your maximum loss is limited to the premium you paid. This makes buying options a defined-risk strategy compared to leveraged spot or perpetual futures trading.",
  },
  {
    question: "What is theta decay in options?",
    answer:
      "Theta measures the time decay of an option — how much value an option loses each day as it approaches expiry. Theta works against options buyers (your position loses value over time even if price stays flat) and in favor of options sellers.",
  },
  {
    question: "How do DeFi options vaults work?",
    answer:
      "DeFi options vaults (DOVs) automate options strategies like covered calls or put selling. You deposit assets, and the vault automatically sells options and returns premiums as yield — typically 5-20% APY depending on market volatility.",
  },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

// ─── Protocol Data ─────────────────────────────────────────────────────────────
const protocols = [
  {
    name: "Derive",
    subtitle: "formerly Lyra Finance",
    chain: "Derive L2 (Ethereum)",
    style: "Order Book",
    bestFor: "Active traders",
    tvl: "$120M+",
    color: "#3b82f6",
    description:
      "Holds 70%+ market share in decentralized options. Uses Black-Scholes pricing on its own optimized L2 for low-latency order book execution — closer to Deribit's UX than a typical AMM. Monthly volume exceeds $369M.",
  },
  {
    name: "Stryke",
    subtitle: "formerly Dopex",
    chain: "Arbitrum",
    style: "Concentrated LP AMM",
    bestFor: "Yield-seeking LPs",
    tvl: "Growing",
    color: "#f97316",
    description:
      "Reimagined as a liquidity providing platform. LPs deposit into concentrated ranges and earn standard AMM fees when idle — plus up to 40x higher premiums when their liquidity is used for options writing.",
  },
  {
    name: "Premia",
    subtitle: "",
    chain: "Arbitrum / Ethereum",
    style: "Hybrid AMM",
    bestFor: "Intermediate traders",
    tvl: "Active",
    color: "#a855f7",
    description:
      "Pricing accounts for IV skew, pool capital supply/demand, and position size — not just Black-Scholes. More sophisticated pricing that rewards understanding the nuances of on-chain liquidity.",
  },
  {
    name: "Panoptic",
    subtitle: "",
    chain: "Ethereum (Uniswap v4)",
    style: "Perpetual Options",
    bestFor: "Advanced DeFi users",
    tvl: "Emerging",
    color: "#ec4899",
    description:
      "The most novel protocol in this space. Builds options on top of Uniswap liquidity positions. Options never expire; positions are funded continuously via streaming fees. Supports any Uniswap v4 pool.",
  },
];

// ─── Page Component ────────────────────────────────────────────────────────────
export default function DeFiOptionsTradingGuidePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3" }}>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style>{`
        .defi-options-article a:focus-visible {
          outline: 2px solid #6366f1;
          outline-offset: 2px;
          border-radius: 4px;
        }
        .defi-options-article button:focus-visible {
          outline: 2px solid #6366f1;
          outline-offset: 2px;
          border-radius: 4px;
        }
        .defi-options-article .scroll-hint {
          position: relative;
        }
        .defi-options-article .scroll-hint::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 32px;
          background: linear-gradient(to right, transparent, #0d1117);
          pointer-events: none;
          border-radius: 0 12px 12px 0;
        }
        @media (min-width: 700px) {
          .defi-options-article .scroll-hint::after {
            display: none;
          }
        }
        .defi-options-article .related-link:hover {
          border-color: #58a6ff60 !important;
          background: #161b2280 !important;
        }
      `}</style>
      <StructuredData data={combinedSchema} />

      <article className="defi-options-article" style={{ maxWidth: 820, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: "#8b949e", marginBottom: 24 }}>
          <a href="/" style={{ color: "#58a6ff", textDecoration: "none" }}>Home</a>
          <span style={{ margin: "0 8px" }}>/</span>
          <a href="/learn" style={{ color: "#58a6ff", textDecoration: "none" }}>Learn</a>
          <span style={{ margin: "0 8px" }}>/</span>
          <span aria-current="page">DeFi Options Trading Guide</span>
        </nav>

        {/* ── Header ── */}
        <header style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
            <span style={{
              padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600,
              background: "#6366f120", color: "#818cf8", border: "1px solid #6366f140",
            }}>
              DeFi
            </span>
            <span style={{
              padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600,
              background: "#0369a120", color: "#38bdf8", border: "1px solid #0369a140",
            }}>
              Intermediate
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 14,
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            DeFi Options Trading Guide: How to Trade Crypto Options On-Chain in 2026
          </h1>
          <p style={{ color: "#c9d1d9", fontSize: 17, lineHeight: 1.7, marginBottom: 10 }}>
            Options are Wall Street&apos;s most versatile instrument — and DeFi has rebuilt them
            on-chain. You can now buy puts to hedge your ETH, sell covered calls for yield, or
            trade volatility directly without touching a centralized exchange. On-chain options
            volume has surged over 10x year-on-year. This guide breaks down how it works, which
            protocols to use, and how to avoid the most common mistakes.
          </p>
          <div style={{ fontSize: 13, color: "#8b949e" }}>Updated March 2026 · 11 min read</div>
        </header>

        {/* ── Table of Contents ── */}
        <nav aria-label="Table of Contents" style={{
          background: "#161b22", border: "1px solid #30363d", borderRadius: 12,
          padding: 20, marginBottom: 40,
        }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: "#58a6ff" }}>
            Table of Contents
          </h2>
          <ol style={{ paddingLeft: 20, color: "#8b949e", fontSize: 14, lineHeight: 2.1, margin: 0 }}>
            <li><a href="#what-are-options" style={{ color: "#58a6ff", textDecoration: "none" }}>What Are Crypto Options?</a></li>
            <li><a href="#greeks" style={{ color: "#58a6ff", textDecoration: "none" }}>The Four Options Greeks (Simplified)</a></li>
            <li><a href="#calls-puts" style={{ color: "#58a6ff", textDecoration: "none" }}>Calls vs. Puts: When to Use Each</a></li>
            <li><a href="#pnl-calculator" style={{ color: "#58a6ff", textDecoration: "none" }}>Interactive P&amp;L Calculator</a></li>
            <li><a href="#how-defi-options-work" style={{ color: "#58a6ff", textDecoration: "none" }}>How DeFi Options Work On-Chain</a></li>
            <li><a href="#protocols" style={{ color: "#58a6ff", textDecoration: "none" }}>Top DeFi Options Protocols in 2026</a></li>
            <li><a href="#structured-products" style={{ color: "#58a6ff", textDecoration: "none" }}>Structured Products: 1-Click Options Yield</a></li>
            <li><a href="#risks" style={{ color: "#58a6ff", textDecoration: "none" }}>Key Risks of On-Chain Options</a></li>
            <li><a href="#defi-vs-cefi" style={{ color: "#58a6ff", textDecoration: "none" }}>DeFi Options vs. Deribit (Centralized)</a></li>
            <li><a href="#faq" style={{ color: "#58a6ff", textDecoration: "none" }}>FAQ</a></li>
          </ol>
        </nav>

        {/* ── Section 1: What Are Options ── */}
        <section id="what-are-options" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            1. What Are Crypto Options?
          </h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            An option is a contract that gives you the{" "}
            <strong style={{ color: "#e6edf3" }}>right, but not the obligation</strong>, to buy or
            sell an asset at a specific price (the <strong style={{ color: "#e6edf3" }}>strike price</strong>)
            before a specific date (the <strong style={{ color: "#e6edf3" }}>expiry</strong>).
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 20 }}>
            <div style={{ background: "#161b22", border: "1px solid #22c55e30", borderRadius: 12, padding: 18 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#22c55e", marginBottom: 8 }}>📈 Call Option</h3>
              <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                The right to <strong style={{ color: "#e6edf3" }}>buy</strong> an asset at the strike price.
                You profit if the asset rises above the strike. Use when you&apos;re bullish.
              </p>
            </div>
            <div style={{ background: "#161b22", border: "1px solid #f8514930", borderRadius: 12, padding: 18 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#f85149", marginBottom: 8 }}>📉 Put Option</h3>
              <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                The right to <strong style={{ color: "#e6edf3" }}>sell</strong> an asset at the strike price.
                You profit if the asset drops below the strike. Use for hedging or bearish bets.
              </p>
            </div>
          </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-16"
          updatedDate="2026-03-16"
          readingTime={3}
          section="learn"
        />

          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#58a6ff", marginBottom: 10 }}>Example</h3>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              You buy an ETH call option with a $4,000 strike expiring in 30 days, paying a $150
              premium. If ETH rises to $5,000, your option is worth $1,000 — minus the $150 premium
              = <strong style={{ color: "#22c55e" }}>$850 profit</strong>. If ETH stays below $4,000,
              you lose only the <strong style={{ color: "#f85149" }}>$150 premium</strong>.
            </p>
          </div>
          <div style={{ background: "#161b2280", border: "1px solid #6366f140", borderRadius: 12, padding: 16 }}>
            <p style={{ color: "#818cf8", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              💡 <strong>Key insight:</strong> Options let you express a directional view or hedge
              your portfolio with defined, capped risk. This is powerful in crypto&apos;s volatile markets
              compared to leveraged perp positions with unlimited downside.
            </p>
          </div>
        </section>

        {/* ── Section 2: Greeks ── */}
        <section id="greeks" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            2. The Four Options Greeks (Simplified)
          </h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            The &ldquo;Greeks&rdquo; measure how an option&apos;s price responds to different market conditions.
            You don&apos;t need to memorize formulas — just understand what each one means in practice.
          </p>
          <div role="region" aria-label="Options Greeks comparison table" className="scroll-hint" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" as const, marginBottom: 20 }}>
            <table style={{
              width: "100%", minWidth: 540, borderCollapse: "collapse", fontSize: 14,
              background: "#161b22", borderRadius: 12, overflow: "hidden",
            }}>
              <thead>
                <tr style={{ background: "#21262d" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "#8b949e", fontWeight: 600 }}>Greek</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "#8b949e", fontWeight: 600 }}>What It Measures</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "#8b949e", fontWeight: 600 }}>Practical Meaning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { greek: "Delta (Δ)", measures: "Sensitivity to underlying price", meaning: "A delta of 0.5 means the option moves $0.50 for every $1 ETH moves" },
                  { greek: "Gamma (Γ)", measures: "Rate of delta change", meaning: "High gamma = delta changes rapidly as price moves (good for directional bets)" },
                  { greek: "Theta (Θ)", measures: "Time decay", meaning: "Negative for buyers — your option loses value every day toward expiry" },
                  { greek: "Vega (V)", measures: "Sensitivity to implied volatility", meaning: "High vega = option price changes a lot when market volatility spikes" },
                ].map((row, i) => (
                  <tr key={row.greek} style={{ borderTop: "1px solid #30363d", background: i % 2 === 0 ? "transparent" : "#0d111780" }}>
                    <td style={{ padding: "12px 16px", color: "#58a6ff", fontWeight: 600 }}>{row.greek}</td>
                    <td style={{ padding: "12px 16px", color: "#c9d1d9" }}>{row.measures}</td>
                    <td style={{ padding: "12px 16px", color: "#c9d1d9" }}>{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 3: Calls vs Puts ── */}
        <section id="calls-puts" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            3. Calls vs. Puts: When to Use Each
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginBottom: 16 }}>
            <div style={{ background: "#161b22", border: "1px solid #22c55e30", borderRadius: 12, padding: 18 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#22c55e", marginBottom: 10 }}>Buy a Call When:</h3>
              <ul style={{ color: "#c9d1d9", fontSize: 13, lineHeight: 1.8, paddingLeft: 18, margin: 0 }}>
                <li>You&apos;re bullish on ETH/BTC but want defined risk</li>
                <li>You want leveraged upside with a capped max loss</li>
                <li>Ahead of a major catalyst (upgrade, halving, ETF decision)</li>
              </ul>
            </div>
            <div style={{ background: "#161b22", border: "1px solid #f8514930", borderRadius: 12, padding: 18 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#f85149", marginBottom: 10 }}>Buy a Put When:</h3>
              <ul style={{ color: "#c9d1d9", fontSize: 13, lineHeight: 1.8, paddingLeft: 18, margin: 0 }}>
                <li>You hold ETH and want to hedge a potential downturn</li>
                <li>You&apos;re bearish on an asset and want defined-risk short exposure</li>
                <li>During elevated uncertainty — like insurance on your portfolio</li>
              </ul>
            </div>
            <div style={{ background: "#161b22", border: "1px solid #d2992230", borderRadius: 12, padding: 18 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#d29922", marginBottom: 10 }}>Sell Options When:</h3>
              <ul style={{ color: "#c9d1d9", fontSize: 13, lineHeight: 1.8, paddingLeft: 18, margin: 0 }}>
                <li>You hold ETH long-term and want to earn premium (covered calls)</li>
                <li>You&apos;re neutral-to-bullish and want to collect premium (cash-secured puts)</li>
                <li>Implied volatility is elevated and you expect it to fall</li>
              </ul>
            </div>
          </div>
          <div style={{ background: "#161b2280", border: "1px solid #d2992240", borderRadius: 12, padding: 16 }}>
            <p style={{ color: "#d29922", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              ⚠️ <strong>Warning:</strong> Selling uncovered (naked) options exposes you to theoretically
              unlimited losses. Stick to covered calls and cash-secured puts until you fully understand the risk.
            </p>
          </div>
        </section>

        {/* ── Interactive Calculator ── */}
        <section id="pnl-calculator" style={{ marginBottom: 40 }}>
          <OptionsPnLCalculator />
        </section>

        {/* ── Section 4: How DeFi Options Work ── */}
        <section id="how-defi-options-work" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            4. How DeFi Options Work On-Chain
          </h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Traditional options are settled through clearinghouses (CBOE, CME). DeFi options
            replace these with <strong style={{ color: "#e6edf3" }}>smart contracts and AMM-based
            pricing</strong>. The core components:
          </p>
          {[
            {
              title: "Option Minting",
              body: "You deposit collateral (ETH or USDC) into a smart contract. The contract mints option tokens representing your right to buy/sell at the strike price.",
            },
            {
              title: "Pricing",
              body: "Most DeFi protocols use the Black-Scholes model on-chain, adjusted for liquidity conditions. Premia adds liquidity sensitivity — larger trades get worse pricing due to pool depth.",
            },
            {
              title: "Settlement",
              body: "Options settle automatically at expiry. European-style (most common in DeFi) settle at expiry only. American-style can be exercised any time before expiry.",
            },
            {
              title: "Collateralization",
              body: "Since there's no central clearinghouse, the protocol enforces collateral requirements on-chain. If you sell a call, the contract holds your collateral until expiry.",
            },
          ].map((item) => (
            <div key={item.title} style={{
              background: "#161b22", border: "1px solid #30363d",
              borderRadius: 12, padding: 16, marginBottom: 12,
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#58a6ff", marginBottom: 6 }}>{item.title}</h3>
              <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </section>

        {/* ── Section 5: Protocols ── */}
        <section id="protocols" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            5. Top DeFi Options Protocols in 2026
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 24 }}>
            {protocols.map((p) => (
              <div key={p.name} style={{
                background: "#161b22", border: `1px solid ${p.color}30`,
                borderRadius: 12, padding: 20,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: p.color, marginBottom: 2 }}>{p.name}</h3>
                    {p.subtitle && (
                      <span style={{ fontSize: 11, color: "#8b949e" }}>{p.subtitle}</span>
                    )}
                  </div>
                  <span style={{
                    padding: "2px 8px", borderRadius: 6, fontSize: 11, fontWeight: 600,
                    background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}40`,
                  }}>
                    {p.style}
                  </span>
                </div>
                <p style={{ color: "#c9d1d9", fontSize: 13, lineHeight: 1.7, marginBottom: 12 }}>
                  {p.description}
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, color: "#8b949e" }}>🔗 {p.chain}</span>
                  <span style={{ fontSize: 11, color: "#8b949e" }}>✅ Best for: {p.bestFor}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div role="region" aria-label="DeFi options protocol comparison table" className="scroll-hint" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" as const }}>
            <table style={{
              width: "100%", minWidth: 560, borderCollapse: "collapse", fontSize: 13,
              background: "#161b22", borderRadius: 12, overflow: "hidden",
            }}>
              <thead>
                <tr style={{ background: "#21262d" }}>
                  {["Protocol", "Chain", "Style", "Best For", "Expiry"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#8b949e", fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Derive", chain: "Derive L2", style: "Order book", for: "Active traders", expiry: "Traditional" },
                  { name: "Stryke", chain: "Arbitrum", style: "LP AMM", for: "Yield seekers", expiry: "Traditional" },
                  { name: "Premia", chain: "Arbitrum", style: "Hybrid AMM", for: "Intermediate", expiry: "Traditional" },
                  { name: "Panoptic", chain: "Ethereum", style: "Perp options", for: "Advanced", expiry: "Perpetual" },
                  { name: "Deribit", chain: "CeFi", style: "Order book", for: "Institutional", expiry: "Traditional" },
                ].map((row, i) => (
                  <tr key={row.name} style={{ borderTop: "1px solid #30363d", background: i % 2 === 0 ? "transparent" : "#0d111780" }}>
                    <td style={{ padding: "10px 14px", color: "#58a6ff", fontWeight: 600 }}>{row.name}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{row.chain}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{row.style}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{row.for}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{row.expiry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 6: Structured Products ── */}
        <section id="structured-products" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            6. Structured Products: 1-Click Options Yield
          </h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Not ready to actively manage options positions? Structured products (also called DOVs —
            DeFi Options Vaults) bundle complex strategies into a single deposit.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, marginBottom: 16 }}>
            <div style={{ background: "#161b22", border: "1px solid #22c55e30", borderRadius: 12, padding: 18 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#22c55e", marginBottom: 10 }}>Covered Call Vaults</h3>
              <p style={{ color: "#c9d1d9", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                Deposit ETH. The vault automatically sells weekly out-of-the-money call options and
                returns the premium as yield. If ETH doesn&apos;t exceed the strike, you keep ETH +
                premium. If ETH rockets past the strike, your upside is capped but you still profit.
              </p>
            </div>
            <div style={{ background: "#161b22", border: "1px solid #f8514930", borderRadius: 12, padding: 18 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#f85149", marginBottom: 10 }}>Put-Selling Vaults</h3>
              <p style={{ color: "#c9d1d9", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
                Deposit USDC. The vault sells ETH put options and returns premiums as yield. You earn
                yield unless ETH crashes below the strike — at which point you buy ETH at a
                below-market price (often fine for accumulators).
              </p>
            </div>
          </div>
          <div style={{ background: "#161b2280", border: "1px solid #6366f140", borderRadius: 12, padding: 16 }}>
            <p style={{ color: "#818cf8", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              📊 <strong>Typical yields:</strong> 5–20% APY depending on volatility conditions and the
              asset. Higher volatility = higher premium = higher yield. These are real yields from
              options premiums — not inflationary token rewards.
            </p>
          </div>
        </section>

        {/* ── Section 7: Risks ── */}
        <section id="risks" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            7. Key Risks of On-Chain Options
          </h2>
          {[
            { title: "Smart Contract Risk", body: "Options protocols are complex. More complex code = more potential bugs. Even audited protocols have suffered exploits. Use established protocols and don't over-allocate." },
            { title: "Liquidity Risk", body: "DeFi options liquidity is still thin compared to Deribit. For large positions, you'll get significantly worse pricing than the mid-market price." },
            { title: "Theta Decay", body: "Holding options too long without the expected move will erode your premium via time decay. Time = money in options — and it always works against buyers." },
            { title: "Oracle Risk", body: "Options pricing and settlement depend on on-chain price oracles. Oracle manipulation can cause incorrect settlement — this has happened before in DeFi." },
            { title: "Complexity Risk", body: "Getting the Greeks wrong is expensive. Understand delta, theta, and vega before trading more complex strategies like spreads or straddles." },
          ].map((risk) => (
            <div key={risk.title} style={{
              background: "#161b22", border: "1px solid #f8514920",
              borderRadius: 12, padding: 16, marginBottom: 10,
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#f85149", marginBottom: 6 }}>⚠️ {risk.title}</h3>
              <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{risk.body}</p>
            </div>
          ))}
        </section>

        {/* ── Section 8: DeFi vs CeFi ── */}
        <section id="defi-vs-cefi" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            8. DeFi Options vs. Deribit (Centralized)
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, marginBottom: 20 }}>
            <div style={{ background: "#161b22", border: "1px solid #6366f130", borderRadius: 12, padding: 18 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#818cf8", marginBottom: 10 }}>Choose DeFi Options When:</h3>
              <ul style={{ color: "#c9d1d9", fontSize: 13, lineHeight: 1.8, paddingLeft: 18, margin: 0 }}>
                <li>You want non-custodial exposure (no KYC, no withdrawal risk)</li>
                <li>You&apos;re trading assets not listed on Deribit</li>
                <li>You want passive structured product yield</li>
                <li>You want Panoptic&apos;s perpetual model (no CeFi equivalent)</li>
              </ul>
            </div>
            <div style={{ background: "#161b22", border: "1px solid #06b6d430", borderRadius: 12, padding: 18 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#38bdf8", marginBottom: 10 }}>Choose Deribit When:</h3>
              <ul style={{ color: "#c9d1d9", fontSize: 13, lineHeight: 1.8, paddingLeft: 18, margin: 0 }}>
                <li>You need deep liquidity for large positions</li>
                <li>You want tighter spreads and more strike/expiry choices</li>
                <li>You want the most sophisticated tooling (IV surface, block trades)</li>
                <li>You&apos;re an institutional trader</li>
              </ul>
            </div>
          </div>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.8 }}>
            Deribit still dominates in institutional BTC/ETH options. DeFi options are improving
            fast, but for serious size they remain a step behind. That gap is closing. If you&apos;re
            also interested in perpetual futures trading, check out our{" "}
            <a href="/learn/perpetual-futures-guide" style={{ color: "#58a6ff" }}>perpetual futures guide</a>{" "}
            and our comparison of the{" "}
            <a href="/learn/best-perpetual-dex-guide" style={{ color: "#58a6ff" }}>best perpetual DEXs</a>.
          </p>
          <div style={{ background: "#161b2280", border: "1px solid #d2992240", borderRadius: 12, padding: 16, marginTop: 16 }}>
            <p style={{ color: "#d29922", fontSize: 13, lineHeight: 1.7, margin: 0 }}>
              ⚠️ This guide is for informational purposes only. It is not financial advice.
              Options trading carries significant risk of loss. Always do your own research.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 20, color: "#e6edf3" }}>
            Frequently Asked Questions
          </h2>
          {[
            {
              q: "Can I lose more than my premium when buying options?",
              a: "No. When you buy an option, the maximum loss is the premium you paid. This is one of options' core advantages over leveraged spot or perp trading — your downside is always capped.",
            },
            {
              q: "What's implied volatility (IV) and why does it matter?",
              a: "IV is the market's expectation of future price movement baked into the option price. High IV = expensive options. After a major event, IV often 'crushes' — options can lose value even if price moved in your direction. One of the trickiest aspects of options trading.",
            },
            {
              q: "Which crypto assets have DeFi options?",
              a: "Mostly ETH and BTC on major protocols. Stryke supports more exotic assets through its AMM approach. Panoptic theoretically supports any Uniswap v4 pool — meaning hundreds of tokens.",
            },
            {
              q: "What's the minimum I need to start trading DeFi options?",
              a: "No formal minimum on most protocols. Practically, option premiums on small positions may cost $20–$100+. Derive's L2 has lower gas costs than Ethereum mainnet, making smaller positions more viable.",
            },
            {
              q: "How are DeFi options taxed?",
              a: "Tax treatment varies by jurisdiction. In most regions, options premiums and gains are treated as capital gains events. Crypto tax rules are evolving rapidly in 2026 — consult a specialist.",
            },
            {
              q: "What is a DeFi options vault (DOV)?",
              a: "A DOV automates an options strategy like a covered call or put sale. You deposit an asset, the vault executes the strategy on a rolling basis, and you receive the premium as yield — typically 5-20% APY depending on market conditions.",
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: "#161b22", border: "1px solid #30363d",
              borderRadius: 12, padding: 20, marginBottom: 12,
            }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>
                {item.q}
              </h3>
              <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                {item.a}
              </p>
            </div>
          ))}
        </section>

        {/* ── Related Articles ── */}
        <section>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>
            Related Articles
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {[
              { href: "/learn/perpetual-futures-guide", label: "Perpetual Futures Guide" },
              { href: "/learn/best-perpetual-dex-guide", label: "Best Perpetual DEX Guide" },
              { href: "/tools/dca-calculator", label: "DCA Calculator" },
              { href: "/learn/advanced-defi-strategies", label: "Advanced DeFi Strategies" },
              { href: "/learn/mev-protection-guide", label: "MEV Protection Guide" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="related-link" style={{
                display: "block", padding: "14px 16px",
                background: "#161b22", border: "1px solid #30363d",
                borderRadius: 10, color: "#58a6ff", fontSize: 14,
                textDecoration: "none", fontWeight: 500,
                transition: "border-color 0.2s, background 0.2s",
              }}>
                {link.label} →
              </a>
            ))}
          </div>
        </section>

      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>

      <BackToTop />
    </div>
  );
}
