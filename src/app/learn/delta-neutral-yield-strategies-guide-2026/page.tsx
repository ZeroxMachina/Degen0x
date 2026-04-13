import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Delta-Neutral Yield Strategies Guide 2026 — Basis Trading &",
  description: "Learn delta-neutral crypto strategies: funding rate arbitrage, basis trading, and protocols like Ethena USDe. Earn yield without directional risk. Updated",
  keywords: [
    "delta neutral crypto",
    "basis trade crypto",
    "funding rate arbitrage",
    "ethena usde",
    "delta neutral yield",
    "cash and carry crypto",
    "perpetual futures arbitrage 2026",
  ],
  openGraph: {
    title: "Delta-Neutral Yield Strategies Guide 2026 | degen0x",
    description:
      "The definitive guide to delta-neutral strategies, basis trading, and funding rate arbitrage in crypto.",
    type: "article",
    publishedTime: "2026-03-24T00:00:00Z",
    url: "https://degen0x.com/learn/delta-neutral-yield-strategies-guide-2026",
    images: [
      {
        url: "https://degen0x.com/og-delta-neutral-yield-strategies-guide-2026.svg",
        width: 1200,
        height: 630,
        alt: "Delta-Neutral Yield Strategies Guide 2026 - Basis Trading & Funding Rate Arbitrage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delta-Neutral Yield Strategies Guide 2026 | degen0x",
    description:
      "Master basis trading, funding rate arbitrage, and delta-neutral yield strategies with Ethena USDe.",
  },

  alternates: { canonical: "/learn/delta-neutral-yield-strategies-guide-2026" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Delta-Neutral Yield Strategies Guide 2026' },
  ],
};

// ─── Structured Data ──────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "Delta-Neutral Yield Strategies Guide 2026 — Basis Trading & Funding Rate Arbitrage",
  description: "Learn delta-neutral crypto strategies: funding rate arbitrage, basis trading, and protocols like Ethena USDe. Earn yield without directional risk.",
  url: "https://degen0x.com/learn/delta-neutral-yield-strategies-guide-2026",
  datePublished: "2026-03-24T00:00:00Z",
  dateModified: "2026-03-24T00:00:00Z",
  author: "degen0x Team",
  image: "https://degen0x.com/og-delta-neutral-yield-strategies-guide-2026.svg",
  wordCount: 4500,
});

const faqSchema = generateFAQSchema([
  {
    question: "What is a delta-neutral strategy?",
    answer: "A delta-neutral strategy involves holding an asset long while opening an equal-sized short position, resulting in near-zero net exposure to price direction. You earn yield from funding rates, basis spreads, or protocol rewards without directional risk.",
  },
  {
    question: "How much can I earn from funding rate arbitrage?",
    answer: "Historically, funding rates averaged ~11% annualized in 2024 and ~5% in 2025. Current rates vary by market conditions and asset. During bull markets, funding is usually positive (shorts earn fees). During bear markets, funding can turn negative, creating losses.",
  },
  {
    question: "What is basis trading?",
    answer: "Basis trading means buying an asset in the spot market and simultaneously selling dated futures at a premium. You lock in the 'basis' (premium) as yield. The premium converges to zero at expiry, guaranteeing profit minus fees.",
  },
  {
    question: "Is Ethena's USDe safe?",
    answer: "USDe is backed by delta-neutral positions (long ETH/BTC + short perps) and generates yield from funding rates. Risks include de-peg risk, custodian risk, liquidation risk, and negative funding rates. As of Q1 2026, USDe has ~$6.7B TVL with institutional backing from Kraken and Franklin Templeton.",
  },
  {
    question: "What are the main risks of delta-neutral strategies?",
    answer: "Key risks: negative funding rates during bear markets, exchange counterparty risk, liquidation risk if margin is insufficient, smart contract risk for DeFi implementations, and basis can go negative during backwardation.",
  },
  {
    question: "Can I set up delta-neutral strategies on my own?",
    answer: "Yes, but it requires experience with spot and perpetual futures markets, managing multiple positions, monitoring liquidation risks, and calculating net delta exposure. Alternatively, use protocols like Ethena USDe, Binance BFUSD, or Pendle Boros for automated exposure.",
  },
]);

const combinedSchema = combineSchemas(articleSchema, faqSchema);

const DeltaNeutralGuide = () => {
  return (
    <article
      style={{
        backgroundColor: "#0d1117",
        color: "#e6edf3",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <StructuredData data={combinedSchema} />
      <div
        style={{
          maxWidth: "820px",
          margin: "0 auto",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: "Delta-Neutral Yield Strategies Guide 2026" },
        ]} />

        {/* Badges */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          <span
            style={{
              display: "inline-block",
              padding: "6px 12px",
              backgroundColor: "#161b22",
              border: "1px solid #30363d",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: "600",
              color: "#58a6ff",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Learn Guide
          </span>
          <span
            style={{
              display: "inline-block",
              padding: "6px 12px",
              backgroundColor: "#161b22",
              border: "1px solid #30363d",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: "600",
              color: "#bc8cff",
            }}
          >
            Advanced
          </span>
          <span
            style={{
              display: "inline-block",
              padding: "6px 12px",
              backgroundColor: "#161b22",
              border: "1px solid #30363d",
              borderRadius: "6px",
              fontSize: "12px",
              color: "#8b949e",
            }}
          >
            Updated March 2026
          </span>
        </div>

        {/* Hero Heading */}
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: "900",
            lineHeight: "1.2",
            marginBottom: "16px",
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginTop: "32px",
          }}
        >
          Delta-Neutral Yield Strategies: Basis Trading & Funding Rate Arbitrage
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#8b949e",
            marginBottom: "40px",
            lineHeight: "1.6",
          }}
        >
          Master the art of earning crypto yield without directional risk. This
          comprehensive guide covers delta-neutral strategies, from manual basis
          trading to protocols like Ethena USDe that automate delta-neutral
          exposure at scale. Learn how to profit from funding rates, basis
          spreads, and arbitrage opportunities in 2026.
        </p>

        {/* Table of Contents */}
        <nav
          style={{
            backgroundColor: "#161b22",
            border: "1px solid #30363d",
            borderRadius: "8px",
            padding: "24px",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "14px",
              fontWeight: "700",
              color: "#e6edf3",
              textTransform: "uppercase",
              marginBottom: "16px",
              letterSpacing: "0.5px",
            }}
          >
            Table of Contents
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "8px",
            }}
          >
            {[
              { href: "#delta-neutral-fundamentals", label: "Delta-Neutral Fundamentals" },
              { href: "#funding-rate-arbitrage", label: "Funding Rate Arbitrage Explained" },
              { href: "#basis-trading", label: "Basis Trading (Cash-and-Carry)" },
              { href: "#ethena-usde", label: "Ethena's USDe: Delta-Neutral at Scale" },
              { href: "#comparison", label: "Comparison: Delta-Neutral Yield Options" },
              { href: "#setup-guide", label: "Step-by-Step: Setting Up a Position" },
              { href: "#risks", label: "Risks and Limitations" },
              { href: "#faq", label: "FAQ" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  style={{
                    color: "#58a6ff",
                    textDecoration: "none",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "color 0.2s",
                  }}
                >
                  <ChevronRight size={16} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Section 1: Delta-Neutral Fundamentals */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            id="delta-neutral-fundamentals"
            style={{
              fontSize: "32px",
              fontWeight: "800",
              marginBottom: "20px",
              color: "#e6edf3",
              borderBottom: "2px solid #30363d",
              paddingBottom: "12px",
            }}
          >
            What Are Delta-Neutral Strategies?
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "16px",
              color: "#e6edf3",
            }}
          >
            A delta-neutral strategy involves holding an asset long while
            simultaneously opening an equal-sized short position. The result is
            net exposure to price direction that approximates zero—hence
            "delta-neutral." Instead of betting on price direction, you earn
            yield from funding rates, basis spreads, or protocol rewards.
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

          <div
            style={{
              backgroundColor: "#161b22",
              border: "1px solid #30363d",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "24px",
            }}
          >
            <p style={{ margin: 0, fontSize: "14px", color: "#8b949e" }}>
              <strong style={{ color: "#e6edf3" }}>Key Insight:</strong> Delta-neutral
              strategies are popular among institutional investors and risk-averse
              traders because they isolate specific yield sources (funding, basis,
              rewards) while eliminating directional market risk. This makes them
              ideal for consistent, low-volatility income generation.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "16px",
              color: "#e6edf3",
            }}
          >
            The concept is simple: if you hold 1 BTC spot at $100,000 and short
            1 BTC perpetual futures, your exposure to BTC price is neutralized.
            Whether BTC goes to $80,000 or $120,000, your P&L from the long and
            short cancel each other out. What remains is yield from the funding
            rate (the mechanism that keeps perpetual prices pegged to spot), the
            futures premium over spot (basis), or rewards offered by the protocol.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#e6edf3",
            }}
          >
            By 2026, delta-neutral strategies have evolved from niche trading
            tactics to major infrastructure for stablecoin protocols (Ethena),
            yield aggregators (Pendle), and exchange products (Binance BFUSD).
            Institutional adoption has validated the approach as a legitimate
            yield source that outperforms traditional finance in many cases.
          </p>
        </section>

        {/* Section 2: Funding Rate Arbitrage */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            id="funding-rate-arbitrage"
            style={{
              fontSize: "32px",
              fontWeight: "800",
              marginBottom: "20px",
              color: "#e6edf3",
              borderBottom: "2px solid #30363d",
              paddingBottom: "12px",
            }}
          >
            Funding Rate Arbitrage Explained
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "24px",
              color: "#e6edf3",
            }}
          >
            Perpetual futures contracts are designed to track spot prices through
            a mechanism called funding rates. When perpetuals trade above spot
            (bullish premium), longs pay shorts. When perpetuals trade below spot
            (bearish discount), shorts pay longs. This mechanism keeps perpetual
            prices in line with spot prices.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                backgroundColor: "#161b22",
                border: "2px solid #30363d",
                borderRadius: "8px",
                padding: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#79c0ff",
                  marginBottom: "16px",
                }}
              >
                How Funding Rate Arbitrage Works
              </h3>
              <ol
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {[
                  { num: "1.", text: "Buy crypto in the spot market (e.g., 1 BTC at $100,000)" },
                  { num: "2.", text: "Simultaneously short the same amount in perpetual futures" },
                  { num: "3.", text: "Collect funding fees every 8 hours (or epoch, depending on exchange)" },
                  { num: "4.", text: "Funding rate is typically positive (shorts earn from longs)" },
                  { num: "5.", text: "Repeat: as long as funding stays positive, you earn yield without price risk" },
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "14px",
                      color: "#e6edf3",
                      marginBottom: "12px",
                      paddingLeft: "32px",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#79c0ff",
                        fontWeight: "600",
                      }}
                    >
                      {item.num}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ol>
            </div>
          </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-24"
          updatedDate="2026-04-12"
          readingTime={4}
          section="learn"
        />


          <h3
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#e6edf3",
              marginBottom: "16px",
            }}
          >
            Funding Rate History & Current Yields
          </h3>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "16px",
              color: "#e6edf3",
            }}
          >
            Historically, funding rates have been positive most of the time, meaning
            the market is willing to pay to be long. This creates a steady income
            stream for shorts (delta-neutral arbitrageurs). Here's the historical data:
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 24px 0",
            }}
          >
            {[
              { year: "2024", rate: "~11% annualized", desc: "Strong bull year, high demand to be long" },
              { year: "2025", rate: "~5% annualized", desc: "More normalized market conditions" },
              { year: "2026 (YTD)", rate: "~6-8% annualized", desc: "Variable, depends on market sentiment" },
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  backgroundColor: "#161b22",
                  border: "1px solid #30363d",
                  borderRadius: "8px",
                  padding: "16px",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontWeight: "600", color: "#e6edf3" }}>
                    {item.year}
                  </span>
                  <span style={{ color: "#79c0ff", fontWeight: "600" }}>
                    {item.rate}
                  </span>
                </div>
                <p style={{ margin: "8px 0 0 0", fontSize: "14px", color: "#8b949e" }}>
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>

          <div
            style={{
              backgroundColor: "#1a1f2e",
              border: "1px solid #bc8cff",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "24px",
            }}
          >
            <p style={{ margin: 0, fontSize: "15px", color: "#e6edf3" }}>
              <strong style={{ color: "#bc8cff" }}>Example:</strong> Pendle's
              backtesting of Boros (their funding rate arbitrage protocol) showed
              a weighted average fixed APR of 11.4% on funding rate strategies,
              demonstrating the viability of this approach at scale.
            </p>
          </div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#e6edf3",
            }}
          >
            The key risk: if funding rates turn negative (as they do in sustained
            bear markets), you pay the longs instead of earning. This is why
            delta-neutral strategies are not "free money"—they're exposure to
            funding rate risk, which is real and can be costly.
          </p>
        </section>

        {/* Section 3: Basis Trading */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            id="basis-trading"
            style={{
              fontSize: "32px",
              fontWeight: "800",
              marginBottom: "20px",
              color: "#e6edf3",
              borderBottom: "2px solid #30363d",
              paddingBottom: "12px",
            }}
          >
            Basis Trading (Cash-and-Carry)
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "16px",
              color: "#e6edf3",
            }}
          >
            Basis trading is the second major delta-neutral strategy. It involves
            buying an asset in the spot market and simultaneously selling dated
            futures (e.g., quarterly BTC futures expiring 3 months out) at a
            premium. The "basis" is the difference between the futures price and
            the spot price. By locking in this premium, you earn risk-free yield
            as the futures price converges to spot at expiry.
          </p>

          <h3
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#e6edf3",
              marginBottom: "16px",
            }}
          >
            How Basis Trading Works
          </h3>

          <div
            style={{
              backgroundColor: "#161b22",
              border: "1px solid #30363d",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "24px",
            }}
          >
            <ol
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {[
                { num: "1.", text: "Spot market: Buy 1 BTC at $100,000" },
                { num: "2.", text: "Futures market: Sell 1 BTC quarterly futures at $102,000" },
                { num: "3.", text: "Basis locked in: $2,000 (2% over 3 months ≈ 8% annualized)" },
                { num: "4.", text: "At expiry in 3 months: futures converge to spot, you collect the basis" },
                { num: "5.", text: "Result: 2% profit regardless of whether BTC is at $80k or $120k" },
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "14px",
                    color: "#e6edf3",
                    marginBottom: "12px",
                    paddingLeft: "32px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "#79c0ff",
                      fontWeight: "600",
                    }}
                  >
                    {item.num}
                  </span>
                  {item.text}
                </li>
              ))}
            </ol>
          </div>

          <h3
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#e6edf3",
              marginBottom: "16px",
            }}
          >
            Where to Trade Basis
          </h3>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "16px",
              color: "#e6edf3",
            }}
          >
            Basis trading is most liquid on exchanges with active derivatives markets:
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 24px 0",
            }}
          >
            {[
              { exchange: "Binance", pairs: "BTC, ETH quarterly futures", basis: "Typically 1-3% per quarter" },
              { exchange: "Deribit", pairs: "Options + spot for advanced strategies", basis: "Varies by volatility" },
              { exchange: "OKX", pairs: "Multiple tenors (monthly, quarterly)", basis: "2-5% depending on tenor" },
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  backgroundColor: "#161b22",
                  border: "1px solid #30363d",
                  borderRadius: "8px",
                  padding: "16px",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ fontWeight: "600", color: "#e6edf3" }}>
                    {item.exchange}
                  </span>
                  <span style={{ color: "#79c0ff", fontSize: "14px" }}>
                    {item.basis}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "14px", color: "#8b949e" }}>
                  {item.pairs}
                </p>
              </li>
            ))}
          </ul>

          <div
            style={{
              backgroundColor: "#1a1f2e",
              border: "1px solid #f85149",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "24px",
            }}
          >
            <p style={{ margin: 0, fontSize: "15px", color: "#e6edf3" }}>
              <strong style={{ color: "#f85149" }}>Warning:</strong> During
              backwardation (futures trading below spot), the basis turns negative.
              This is the inverse trade: you'd need to short spot and buy futures,
              which has different risks and capital requirements.
            </p>
          </div>
        </section>

        {/* Section 4: Ethena USDe */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            id="ethena-usde"
            style={{
              fontSize: "32px",
              fontWeight: "800",
              marginBottom: "20px",
              color: "#e6edf3",
              borderBottom: "2px solid #30363d",
              paddingBottom: "12px",
            }}
          >
            Ethena's USDe: Delta-Neutral at Scale
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "16px",
              color: "#e6edf3",
            }}
          >
            Ethena is the first major protocol to package delta-neutral strategies
            into a stablecoin. USDe is a synthetic dollar backed by delta-neutral
            positions (long ETH/BTC + short perpetuals) that earn yield from
            funding rates. This innovation allows retail users and institutions
            to access delta-neutral yield without managing positions manually.
          </p>

          <h3
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#e6edf3",
              marginBottom: "16px",
            }}
          >
            USDe: The Numbers
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            {[
              { metric: "Peak Market Cap (2025)", value: "$14B", color: "#79c0ff" },
              { metric: "Current TVL (Q1 2026)", value: "$6.7B", color: "#79c0ff" },
              { metric: "sUSDe Yield (Historical)", value: "5-15% APY", color: "#79c0ff" },
              { metric: "Stablecoin Ranking", value: "#3 Largest", color: "#79c0ff" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#161b22",
                  border: "1px solid #30363d",
                  borderRadius: "8px",
                  padding: "16px",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    color: "#8b949e",
                    margin: "0 0 8px 0",
                    textTransform: "uppercase",
                    fontWeight: "600",
                  }}
                >
                  {item.metric}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: item.color,
                    margin: 0,
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <h3
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#e6edf3",
              marginBottom: "16px",
            }}
          >
            How USDe Works
          </h3>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "16px",
              color: "#e6edf3",
            }}
          >
            USDe maintains a 1:1 backing through a delta-neutral collateral pool:
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 24px 0",
            }}
          >
            {[
              "Hold long ETH and/or BTC (collateral)",
              "Short equivalent notional amount in perpetual futures",
              "Net exposure: delta-neutral, earn from funding rates",
              "Yield flows to sUSDe stakers (variable, ~6-10% current)",
              "De-peg protection: ethena treasury and insurance",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: "15px",
                  color: "#e6edf3",
                  marginBottom: "12px",
                  paddingLeft: "24px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "#79c0ff",
                    fontWeight: "600",
                  }}
                >
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>

          <h3
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#e6edf3",
              marginBottom: "16px",
            }}
          >
            Q1 2026 Institutional Evolution
          </h3>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "16px",
              color: "#e6edf3",
            }}
          >
            By Q1 2026, Ethena has achieved significant institutional adoption:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            {[
              { init: "Kraken Custody", desc: "Enterprise custody for institutional USDe holdings" },
              { init: "Spark Liquidity Layer", desc: "Enhanced liquidity and DeFi integrations" },
              { init: "Franklin Templeton", desc: "Backing iUSDe for TradFi capital access" },
              { init: "Broader CEX/DEX Integration", desc: "USDe now accessible on most major platforms" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#161b22",
                  border: "1px solid #30363d",
                  borderRadius: "8px",
                  padding: "14px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#79c0ff",
                    margin: "0 0 4px 0",
                  }}
                >
                  {item.init}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#8b949e",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: "#1a1f2e",
              border: "1px solid #bc8cff",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "24px",
            }}
          >
            <p style={{ margin: 0, fontSize: "15px", color: "#e6edf3" }}>
              <strong style={{ color: "#bc8cff" }}>iUSDe Update:</strong> Franklin
              Templeton-backed iUSDe is designed to bridge delta-neutral yield to
              regulated TradFi institutional capital, positioning Ethena as the
              gateway for traditional finance exposure to crypto yield strategies.
            </p>
          </div>
        </section>

        {/* Section 5: Comparison Table */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            id="comparison"
            style={{
              fontSize: "32px",
              fontWeight: "800",
              marginBottom: "20px",
              color: "#e6edf3",
              borderBottom: "2px solid #30363d",
              paddingBottom: "12px",
            }}
          >
            Comparison: Delta-Neutral Yield Options in 2026
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "24px",
              color: "#e6edf3",
            }}
          >
            Several options exist for accessing delta-neutral yield. Here's how
            they compare:
          </p>

          <div
            style={{
              overflowX: "auto",
              marginBottom: "24px",
            }}
          >
            <table
              style={{
                width: "100%",
                minWidth: "650px",
                borderCollapse: "collapse",
                fontSize: "14px",
                color: "#e6edf3",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid #30363d" }}>
                  {[
                    "Strategy/Protocol",
                    "Yield (Current)",
                    "Ease of Use",
                    "Custody",
                    "Key Risk",
                  ].map((header) => (
                    <th
                      key={header}
                      style={{
                        padding: "16px 12px",
                        textAlign: "left",
                        fontWeight: "700",
                        color: "#79c0ff",
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    strategy: "Manual Funding Rate Arb",
                    yield: "6-10% APY",
                    ease: "Hard",
                    custody: "CEX (counterparty)",
                    risk: "Negative funding",
                  },
                  {
                    strategy: "Manual Basis Trading",
                    yield: "4-8% APY",
                    ease: "Hard",
                    custody: "CEX + Futures",
                    risk: "Backwardation",
                  },
                  {
                    strategy: "Ethena (sUSDe)",
                    yield: "6-10% APY",
                    ease: "Very Easy",
                    custody: "Smart Contract",
                    risk: "De-peg, liquidation",
                  },
                  {
                    strategy: "Binance BFUSD",
                    yield: "~4.77% APY",
                    ease: "Easy",
                    custody: "CEX custody",
                    risk: "CEX counterparty",
                  },
                  {
                    strategy: "Pendle Boros",
                    yield: "~11% APY (historical)",
                    ease: "Medium",
                    custody: "Smart Contract",
                    risk: "Smart contract, IL",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid #30363d",
                      backgroundColor: i % 2 === 0 ? "#0d1117" : "#161b22",
                    }}
                  >
                    <td style={{ padding: "14px 12px", fontWeight: "600" }}>
                      {row.strategy}
                    </td>
                    <td style={{ padding: "14px 12px", color: "#79c0ff" }}>
                      {row.yield}
                    </td>
                    <td style={{ padding: "14px 12px" }}>
                      {row.ease}
                    </td>
                    <td style={{ padding: "14px 12px", fontSize: "13px" }}>
                      {row.custody}
                    </td>
                    <td style={{ padding: "14px 12px", fontSize: "13px" }}>
                      {row.risk}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              backgroundColor: "#161b22",
              border: "1px solid #30363d",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <p style={{ margin: 0, fontSize: "14px", color: "#8b949e" }}>
              <strong style={{ color: "#e6edf3" }}>Note:</strong> Yields are
              variable and depend on market conditions, funding rates, and basis
              spreads. Always verify current rates before deploying capital.
            </p>
          </div>
        </section>

        {/* Section 6: Setup Guide */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            id="setup-guide"
            style={{
              fontSize: "32px",
              fontWeight: "800",
              marginBottom: "20px",
              color: "#e6edf3",
              borderBottom: "2px solid #30363d",
              paddingBottom: "12px",
            }}
          >
            Step-by-Step: Setting Up a Delta-Neutral Position
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "24px",
              color: "#e6edf3",
            }}
          >
            If you want to set up a manual delta-neutral position (funding rate
            arbitrage or basis trade), here's how to do it responsibly:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            {[
              {
                step: "1. Choose Your Exchange",
                details: [
                  "Need both spot and perpetual futures (or spot + dated futures)",
                  "Binance, Deribit, OKX are best for liquidity and low fees",
                  "Check lending/borrowing costs if shorting via margin",
                ],
              },
              {
                step: "2. Deposit Capital",
                details: [
                  "Deposit stablecoin or crypto to both spot and futures accounts",
                  "Keep some capital in reserve for liquidation buffer (10-20% extra margin)",
                  "Start small: test with $5-10k before scaling",
                ],
              },
              {
                step: "3. Calculate Position Size",
                details: [
                  "Determine how much to deploy (e.g., $10k in spot BTC)",
                  "Short exactly the same notional amount in perps",
                  "Delta exposure should be close to zero",
                ],
              },
              {
                step: "4. Execute the Trade",
                details: [
                  "Buy spot: Purchase 0.1 BTC in spot market at $100k = $10k",
                  "Short perps: Open 0.1 BTC short in perpetuals",
                  "Monitor margin: ensure liquidation price is far from current price",
                ],
              },
              {
                step: "5. Harvest Yield",
                details: [
                  "Collect funding fees every 8 hours (perpetual) or at expiry (futures)",
                  "Reinvest or hold as cash reserve",
                  "Monitor funding rates daily: exit if they turn sharply negative",
                ],
              },
              {
                step: "6. Unwind & Rebalance",
                details: [
                  "Close positions when yield dries up or market conditions change",
                  "For basis trades: hold to expiry to lock in full basis",
                  "Account for fees: spot trading, futures fees, potential slippage",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#161b22",
                  border: "1px solid #30363d",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#79c0ff",
                    margin: "0 0 12px 0",
                  }}
                >
                  {item.step}
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {item.details.map((detail, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: "14px",
                        color: "#e6edf3",
                        marginBottom: j < item.details.length - 1 ? "8px" : 0,
                        paddingLeft: "20px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          color: "#79c0ff",
                        }}
                      >
                        •
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: "#1a1f2e",
              border: "1px solid #f85149",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "24px",
            }}
          >
            <p style={{ margin: 0, fontSize: "15px", color: "#e6edf3" }}>
              <strong style={{ color: "#f85149" }}>Critical:</strong> Always maintain
              sufficient margin to avoid liquidation. A 10% adverse move in the
              funding rate or basis can force liquidation if margins are tight.
              Use leverage cautiously, ideally not exceeding 2x.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#161b22",
              border: "1px solid #30363d",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: "#e6edf3",
                marginTop: 0,
                marginBottom: "12px",
              }}
            >
              Alternative: Use a Protocol Instead
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#e6edf3",
                margin: 0,
                lineHeight: "1.6",
              }}
            >
              For simplicity, consider using Ethena (USDe/sUSDe), Binance BFUSD,
              or Pendle Boros instead. These handle position management, hedging,
              and rebalancing automatically. The trade-off: slightly lower yields
              due to protocol fees, but much lower execution and monitoring risk.
            </p>
          </div>
        </section>

        {/* Section 7: Risks and Limitations */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            id="risks"
            style={{
              fontSize: "32px",
              fontWeight: "800",
              marginBottom: "20px",
              color: "#e6edf3",
              borderBottom: "2px solid #30363d",
              paddingBottom: "12px",
            }}
          >
            Risks and Limitations
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "24px",
              color: "#e6edf3",
            }}
          >
            Delta-neutral strategies are not risk-free. Understanding the risks
            is essential before deploying capital.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            {[
              {
                risk: "Negative Funding Rates",
                desc: "During sustained bear markets or when shorts are crowded, funding can turn negative. You pay longs instead of earning, creating losses. This is the primary risk of the strategy.",
              },
              {
                risk: "Exchange Counterparty Risk",
                desc: "If you hold spot and futures on a CEX, you're exposed to exchange insolvency or hacks. Deribit, Kraken, and Binance are relatively safe, but risk remains.",
              },
              {
                risk: "Liquidation Risk",
                desc: "If margin is insufficient and funding turns sharply negative, positions can be liquidated. You lose capital and incur liquidation penalties.",
              },
              {
                risk: "Smart Contract Risk (DeFi)",
                desc: "Protocols like Ethena and Pendle are subject to smart contract bugs. An exploit could result in significant losses for users.",
              },
              {
                risk: "Basis Can Turn Negative (Backwardation)",
                desc: "In bear markets, futures trade below spot (backwardation). The basis you locked in turns negative, and you're forced to hold losing positions until expiry.",
              },
              {
                risk: "De-peg Risk (Stablecoin Protocols)",
                desc: "USDe and BFUSD could de-peg if funding rates collapse or if collateral becomes unsafe. A de-peg event can result in losses or capital freezes.",
              },
              {
                risk: "Basis Compression / Premium Decay",
                desc: "As expiry approaches, the futures premium decays. Early exit means you miss the full basis. Timing exit is crucial.",
              },
              {
                risk: "Fees & Slippage",
                desc: "Spot trading fees, futures trading fees, borrowing costs, and slippage can significantly reduce net returns. In a thin market, execution slippage alone can wipe out months of yield.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#161b22",
                  border: "1px solid #30363d",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#f85149",
                    margin: "0 0 8px 0",
                  }}
                >
                  {item.risk}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#e6edf3",
                    margin: 0,
                    lineHeight: "1.6",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: "#1a1f2e",
              border: "1px solid #bc8cff",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <p style={{ margin: 0, fontSize: "15px", color: "#e6edf3" }}>
              <strong style={{ color: "#bc8cff" }}>Risk Mitigation:</strong> Start
              small, use only reputable exchanges/protocols, maintain excess margin
              (10-20%), diversify across strategies (don't concentrate in one yield
              source), and monitor positions daily. Delta-neutral doesn't mean
              risk-free—it means you've hedged price direction but exposed yourself
              to other risks.
            </p>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section style={{ marginBottom: "48px" }}>
          <h2
            id="faq"
            style={{
              fontSize: "32px",
              fontWeight: "800",
              marginBottom: "20px",
              color: "#e6edf3",
              borderBottom: "2px solid #30363d",
              paddingBottom: "12px",
            }}
          >
            Frequently Asked Questions
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
            {[
              {
                q: "What is a delta-neutral strategy?",
                a: "A delta-neutral strategy involves holding an asset long while opening an equal-sized short position, resulting in near-zero net exposure to price direction. You earn yield from funding rates, basis spreads, or protocol rewards without directional risk.",
              },
              {
                q: "How much can I earn from funding rate arbitrage?",
                a: "Historically, funding rates averaged ~11% annualized in 2024 and ~5% in 2025. Current rates vary by market conditions and asset. During bull markets, funding is usually positive (shorts earn fees). During bear markets, funding can turn negative, creating losses.",
              },
              {
                q: "What is basis trading?",
                a: "Basis trading means buying an asset in the spot market and simultaneously selling dated futures at a premium. You lock in the 'basis' (premium) as yield. The premium converges to zero at expiry, guaranteeing profit minus fees.",
              },
              {
                q: "Is Ethena's USDe safe?",
                a: "USDe is backed by delta-neutral positions (long ETH/BTC + short perps) and generates yield from funding rates. Risks include de-peg risk, custodian risk, liquidation risk, and negative funding rates. As of Q1 2026, USDe has ~$6.7B TVL with institutional backing from Kraken and Franklin Templeton.",
              },
              {
                q: "What are the main risks of delta-neutral strategies?",
                a: "Key risks: negative funding rates during bear markets, exchange counterparty risk, liquidation risk if margin is insufficient, smart contract risk for DeFi implementations, and basis can go negative during backwardation.",
              },
              {
                q: "Can I set up delta-neutral strategies on my own?",
                a: "Yes, but it requires experience with spot and perpetual futures markets, managing multiple positions, monitoring liquidation risks, and calculating net delta exposure. Alternatively, use protocols like Ethena USDe, Binance BFUSD, or Pendle Boros for automated exposure.",
              },
            ].map((item, i) => (
              <details
                key={i}
                style={{
                  backgroundColor: "#161b22",
                  border: "1px solid #30363d",
                  borderRadius: "8px",
                  padding: "20px",
                  cursor: "pointer",
                }}
              >
                <summary
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#e6edf3",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  {item.q}
                </summary>
                <p
                  style={{
                    fontSize: "15px",
                    color: "#e6edf3",
                    margin: "12px 0 0 0",
                    lineHeight: "1.6",
                  }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Resources */}
        <section
          style={{
            backgroundColor: "#161b22",
            border: "1px solid #30363d",
            borderRadius: "8px",
            padding: "24px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#e6edf3",
              margin: "0 0 16px 0",
            }}
          >
            Related Resources
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "8px",
            }}
          >
            {[
              { href: "/learn/real-yield-defi-guide-2026", label: "Real Yield DeFi Guide 2026" },
              { href: "/learn/yield-bearing-stablecoins", label: "Yield-Bearing Stablecoins" },
              { href: "/learn/ethena-usde-guide", label: "Ethena USDe Guide" },
              { href: "/learn/best-perpetual-dex-guide", label: "Best Perpetual DEX Guide" },
              { href: "/learn/defi-vaults-structured-products-guide-2026", label: "DeFi Vaults & Structured Products 2026" },
              { href: "/tools/defi-yields", label: "DeFi Yields Tool" },
            ].map((link, i) => (
              <li key={i}>
                <Link href={item.href}
                  style={{
                    color: "#58a6ff",
                    textDecoration: "none",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <ChevronRight size={14} />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <div
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid #30363d",
            fontSize: "13px",
            color: "#8b949e",
            textAlign: "center",
          }}
        >
          <p style={{ margin: "0 0 12px 0" }}>
            This guide was last updated March 24, 2026. Delta-neutral strategies
            are complex and carry real risks. Always do your own research and
            verify current yields, funding rates, and market conditions before
            deploying capital.
          </p>
          <p style={{ margin: 0, fontSize: "12px" }}>
            <strong style={{ color: "#e6edf3" }}>Disclaimer:</strong> This guide
            is educational only and not financial advice. Crypto and DeFi carry
            significant risks including permanent loss of capital. Always consult
            a financial advisor before making investment decisions.
          </p>
        </div>
      </div>
      <BackToTop />
    
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/tools/crypto-exchange-fee-comparison-tool" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Exchange Fee Comparison Tool</a></li>
            <li><a href="/tools/crypto-tax-calculator-free" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Tax Calculator Free</a></li>
            <li><a href="/tools/ethereum-gas-tracker" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Ethereum Gas Tracker</a></li>
            <li><a href="/tools/staking-rewards-calculator" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Staking Rewards Calculator</a></li>
          </ul>
        </nav>

        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Delta Neutral Yield Strategies Guide 2026",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/delta-neutral-yield-strategies-guide-2026"
            })
          }}
        />
      <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <span style={{ color: "#8b949e" }}>Related: </span>
  <a href="/learn/hyperliquid-hip3-tokenized-futures-guide" style={{ color: "#fb923c", marginRight: "1rem" }}>Hyperliquid Hip3 Tokenized Futures Guide</a>
  <a href="/learn/[slug]" style={{ color: "#fb923c", marginRight: "1rem" }}>[slug]</a>
  <a href="/learn/defi-vaults-structured-products-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Defi Vaults Structured Products Guide 2026</a>

          <a href="/learn/crypto-tax-loss-harvesting-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Crypto Tax Loss Harvesting Guide 2026</a>
        </nav>
      </article>
  );
};

export default DeltaNeutralGuide;
