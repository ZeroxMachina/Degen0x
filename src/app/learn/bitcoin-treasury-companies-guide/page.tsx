import { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import {
  generateArticleSchema,
  generateFAQSchema,
  combineSchemas,
} from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Bitcoin Treasury Companies 2026: Who's Buying BTC?",
  description: "172+ public companies hold Bitcoin on their balance sheets. How corporate BTC treasury strategies work, who the biggest holders are, and what it means for",
  keywords: [
    "bitcoin treasury companies",
    "corporate bitcoin holdings",
    "Strategy bitcoin",
    "MicroStrategy bitcoin",
    "Metaplanet bitcoin",
    "bitcoin treasury strategy 2026",
    "companies buying bitcoin",
    "DAT companies",
    "corporate bitcoin adoption",
  ],
  openGraph: {
    title: "Bitcoin Treasury Companies 2026: Who Holds the Most BTC?",
    description:
      "Strategy holds 687K BTC. Metaplanet holds 35K. 172+ public companies now hold Bitcoin. Here's everything you need to know about corporate BTC treasury strategies.",
    url: `${SITE_URL}/learn/bitcoin-treasury-companies-guide`,
    type: "article",
    publishedTime: "2026-03-16T00:00:00Z",
    modifiedTime: "2026-03-16T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: `${SITE_URL}/og-bitcoin-treasury-companies.png`,
        width: 1200,
        height: 630,
        alt: "Bitcoin Treasury Companies 2026 — 172+ companies holding BTC, Strategy holds 687K",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Treasury Companies 2026: Who Holds the Most BTC?",
    description:
      "Strategy holds 687K BTC. Metaplanet holds 35K. 172+ companies stack BTC. Full guide to corporate Bitcoin treasury strategies.",
    images: [`${SITE_URL}/og-bitcoin-treasury-companies.png`],
  },

  alternates: { canonical: "/learn/bitcoin-treasury-companies-guide" }};

export default function BitcoinTreasuryCompaniesGuidePage() {
  const articleSchema = generateArticleSchema({
    title: "Bitcoin Treasury Companies 2026: Strategy, Metaplanet & Who's Buying BTC",
    description:
      "172+ public companies now hold Bitcoin on their balance sheets. Learn how corporate Bitcoin treasury strategies work, who the biggest holders are, and what it means for investors in 2026.",
    url: `${SITE_URL}/learn/bitcoin-treasury-companies-guide`,
    datePublished: "2026-03-16T00:00:00Z",
    dateModified: "2026-03-16T00:00:00Z",
    author: "degen0x Team",
    image: `${SITE_URL}/og-bitcoin-treasury-companies.png`,
    wordCount: 2800,
  });

  const faqSchema = generateFAQSchema([
    {
      question: "What is a Bitcoin treasury company?",
      answer:
        "A Bitcoin treasury company is a publicly traded firm that holds Bitcoin as a primary or significant balance sheet asset. Unlike simply buying BTC as a side investment, these companies treat Bitcoin accumulation as a core business strategy — often raising capital specifically to buy more BTC.",
    },
    {
      question: "How much Bitcoin does Strategy (formerly MicroStrategy) hold?",
      answer:
        "As of early 2026, Strategy holds approximately 687,410 BTC — more than 3% of the total 21 million Bitcoin that will ever exist. This makes it the largest corporate Bitcoin holder in the world by a significant margin.",
    },
    {
      question: "Why do companies put Bitcoin on their balance sheet?",
      answer:
        "Companies adopt Bitcoin treasury strategies for several reasons: to hedge against dollar inflation, to signal confidence in digital assets to crypto-native investors, to access a new base of shareholders, and in some cases to generate returns that exceed their core business. The strategy pioneered by MicroStrategy has shown that a company's stock can trade at a premium to its Bitcoin NAV when execution is strong.",
    },
    {
      question: "What is a DAT company?",
      answer:
        "A Digital Asset Treasury (DAT) company is a newer term for firms whose primary business model is accumulating and holding crypto assets — particularly Bitcoin — rather than treating it as a sideline to another business. DAT companies differ from traditional Bitcoin treasury companies in that crypto accumulation IS the business.",
    },
    {
      question: "Is buying shares in a Bitcoin treasury company the same as buying Bitcoin?",
      answer:
        "No — and the difference matters. When you buy shares in a company like Strategy, you get indirect exposure to Bitcoin plus business risk, management fees (implicit), equity dilution risk, and the company's operational overhead. You also get potential upside if the stock trades at a premium to NAV. Buying Bitcoin directly (or through a spot ETF) is simpler and more direct.",
    },
    {
      question: "What is Bitcoin NAV premium or discount?",
      answer:
        "NAV (Net Asset Value) premium or discount measures how a Bitcoin treasury company's stock price compares to the value of its Bitcoin holdings per share. If a company holds $10 of BTC per share but its stock trades at $15, it has a 50% NAV premium. If it trades at $8, it has a 20% discount. Strategy historically traded at large premiums, but by early 2026 briefly dipped to a discount during market corrections.",
    },
  ]);

  const combinedSchema = combineSchemas([articleSchema, faqSchema]);

  const topHolders = [
    { company: "Strategy (MSTR)", country: "USA", btc: "~687,410", note: "Pioneered the model" },
    { company: "Marathon Digital (MARA)", country: "USA", btc: "~53,250", note: "Mining + retention" },
    { company: "Twenty One Capital", country: "USA", btc: "~43,514", note: "Cantor-backed DAT" },
    { company: "Metaplanet (3350.T)", country: "Japan", btc: "~35,102", note: "'Asia's MicroStrategy'" },
    { company: "Riot Platforms (RIOT)", country: "USA", btc: "~18,005", note: "Mining + hold" },
    { company: "Coinbase (COIN)", country: "USA", btc: "~14,548", note: "Operational reserve" },
    { company: "CleanSpark (CLSK)", country: "USA", btc: "~13,099", note: "Mining + hold" },
  ];

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <StructuredData data={combinedSchema} />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Learn", href: "/learn" }, { label: "Bitcoin Treasury Companies" }]} />

      {/* Header badges */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: "#f7931a20", color: "#f7931a" }}>
            Bitcoin
          </span>
          <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: "#6366f120", color: "#6366f1" }}>
            Macro
          </span>
          <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: "#3b82f620", color: "#3b82f6" }}>
            Intermediate
          </span>
          <span className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: "#0ea5e920", color: "#0ea5e9" }}>
            Updated March 2026
          </span>
        </div>

        <h1
          className="text-3xl md:text-4xl font-extrabold mb-4"
          style={{
            background: "linear-gradient(135deg, #f7931a 0%, #ffb347 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.2",
          }}
        >
          Bitcoin Treasury Companies 2026: Who&apos;s Stacking BTC and Why
        </h1>

        <p className="text-lg" style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}>
          Over 172 public companies now hold Bitcoin on their balance sheets, collectively controlling
          roughly 1 million BTC — about 5% of the total supply that will ever exist. This is the complete
          guide to how corporate Bitcoin treasury strategies work, who the biggest players are, and what
          this trend means for the market in 2026.
        </p>

        <p className="text-sm mt-3" style={{ color: "var(--color-text-secondary)" }}>
          Updated March 2026 · 11 min read
        </p>
      </div>

      {/* Key Stats Box */}
      <div className="glass rounded-xl p-5 mb-8" style={{ borderLeft: "4px solid #f7931a" }}>
        <h2 className="text-sm font-extrabold mb-3 uppercase tracking-wide" style={{ color: "#f7931a" }}>
          Corporate BTC Holdings Snapshot — March 2026
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Public Companies Holding BTC", value: "172+" },
            { label: "Total Corporate BTC", value: "~1,000,000 BTC" },
            { label: "% of Total Supply", value: "~4.8%" },
            { label: "Largest Single Holder", value: "Strategy (~687K BTC)" },
            { label: "YoY Growth in Companies", value: "+40% (Q3 2025)" },
            { label: "Strategy BTC per Share YoY", value: "+22.8%" },
          ].map((s) => (
            <div
              key={s.label}
              className="p-3 rounded-lg"
              style={{ background: "var(--glass-bg)", border: "1px solid var(--color-border)" }}
            >
              <div className="text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>{s.label}</div>
              <div className="font-bold text-sm" style={{ color: "var(--color-text)" }}>{s.value}</div>
            </div>        ))}


        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-16"
          updatedDate="2026-03-16"
          readingTime={3}
          section="learn"
        />


        </div>
        <p className="text-xs mt-3" style={{ color: "var(--color-text-secondary)" }}>
          Data approximate. Sources: Bitwise, BitcoinTreasuries.net, company filings. March 2026.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="glass rounded-xl p-5 mb-8">
        <h2 className="text-sm font-extrabold mb-3 uppercase tracking-wide" style={{ color: "var(--color-text-secondary)" }}>
          In This Guide
        </h2>
        <ol className="space-y-1 text-sm">
          {[
            ["What Is a Bitcoin Treasury Strategy?", "#what-is"],
            ["Why Companies Are Buying Bitcoin", "#why-buying"],
            ["The Biggest Corporate Bitcoin Holders", "#top-holders"],
            ["How Strategy Raised Capital to Buy BTC", "#strategy-model"],
            ["The DAT Company Model", "#dat-companies"],
            ["Risks for Companies (and Their Shareholders)", "#risks"],
            ["How to Get Corporate BTC Exposure as an Investor", "#investor-angle"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <li key={href}>
              <a href={href} style={{ color: "#f7931a" }} className="hover:underline">
                {label}
              </a>
            </li>
          ))}
        </ol>
      </div>

      {/* Section 1 */}
      <section id="what-is" className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
          1. What Is a Bitcoin Treasury Strategy?
        </h2>
        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          A Bitcoin treasury strategy is a corporate decision to hold Bitcoin as a primary reserve asset
          on the company&apos;s balance sheet — similar to how traditional corporations hold cash, short-term
          bonds, or gold. The key distinction from casual crypto investing is intentionality: these
          companies treat Bitcoin accumulation as a core part of their capital allocation policy, not a
          speculative side bet.
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
        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          The concept was popularised by Michael Saylor at MicroStrategy (now Strategy) in August 2020,
          when the company converted its $250 million cash reserve into Bitcoin rather than risk
          inflation eating into its value. What started as an unconventional treasury move has since
          become a playbook copied by hundreds of public companies worldwide.
        </p>
        <div className="glass rounded-xl p-4 mb-4" style={{ borderLeft: "4px solid #6366f1" }}>
          <p className="text-sm font-bold mb-1" style={{ color: "#6366f1" }}>Key Concept: Bitcoin Per Share</p>
          <p className="text-sm" style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}>
            Bitcoin treasury companies often measure performance using <strong>Bitcoin per share</strong> —
            the amount of BTC attributable to each share of the company. Growing BTC per share over time
            is the primary KPI. Strategy grew its BTC per share by 22.8% in 2025 and 74.3% the year prior.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section id="why-buying" className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
          2. Why Companies Are Buying Bitcoin in 2026
        </h2>
        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          The motivations vary by company type, but they typically fall into a few categories:
        </p>

        <div className="space-y-4 mb-6">
          {[
            {
              title: "Inflation Hedge",
              color: "#f7931a",
              body: "With the US national debt exceeding $36 trillion and the Fed\u2019s balance sheet expanded significantly post-2020, many CFOs view holding cash as losing a slow game. Bitcoin\u2019s fixed supply of 21 million coins makes it an appealing store of value. This was Saylor\u2019s original thesis and it remains the most common rationale.",
            },
            {
              title: "Shareholder Signal",
              color: "#22c55e",
              body: "Holding Bitcoin sends a strong signal to a new cohort of crypto-native investors and institutions. Companies that hold BTC often trade at higher price-to-book multiples than peers, because their shareholder base includes crypto-forward funds and retail investors attracted by Bitcoin exposure.",
            },
            {
              title: "Capital Efficiency",
              color: "#3b82f6",
              body: "For companies that can raise debt or equity cheaply, buying Bitcoin with borrowed capital creates a carry trade: if BTC appreciates faster than the cost of capital, the trade is profitable. Strategy has consistently raised convertible notes at low rates and deployed proceeds into BTC.",
            },
            {
              title: "Supply Tightening Effect",
              color: "#a855f7",
              body: "When corporations lock BTC in custody, they reduce the available liquid supply on exchanges. This structurally makes large price drops harder to trigger — a dynamic that benefits all Bitcoin holders and attracts further institutional interest.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass rounded-xl p-4"
              style={{ borderLeft: `4px solid ${item.color}` }}
            >
              <p className="font-bold mb-1 text-sm" style={{ color: item.color }}>{item.title}</p>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section id="top-holders" className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
          3. The Biggest Corporate Bitcoin Holders (March 2026)
        </h2>
        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          Strategy dominates corporate BTC ownership, but the top 10 list now spans the US, Japan,
          and a growing number of international markets.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm min-w-[480px]" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                {["Company", "Country", "Approx. BTC Held", "Notes"].map((h) => (
                  <th key={h} className="text-left py-2 px-3 text-xs font-bold uppercase tracking-wide" style={{ color: "var(--color-text-secondary)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topHolders.map((row, i) => (
                <tr
                  key={row.company}
                  style={{
                    borderBottom: "1px solid var(--color-border)",
                    background: i % 2 === 0 ? "var(--glass-bg)" : "transparent",
                  }}
                >
                  <td className="py-2 px-3 font-semibold" style={{ color: "var(--color-text)" }}>{row.company}</td>
                  <td className="py-2 px-3" style={{ color: "var(--color-text-secondary)" }}>{row.country}</td>
                  <td className="py-2 px-3 font-bold" style={{ color: "#f7931a" }}>{row.btc}</td>
                  <td className="py-2 px-3 text-xs" style={{ color: "var(--color-text-secondary)" }}>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
          Data sourced from BitcoinTreasuries.net and company filings. Holdings approximate as of Q1 2026. Subject to change.
        </p>
      </section>

      {/* Section 4 */}
      <section id="strategy-model" className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
          4. How Strategy Raises Capital to Buy Bitcoin
        </h2>
        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          Strategy&apos;s approach is a masterclass in financial engineering applied to Bitcoin. The company
          doesn&apos;t simply take profits from its software business and buy BTC — it actively raises capital
          from equity and debt markets specifically to acquire more Bitcoin. Here&apos;s the playbook:
        </p>

        <div className="space-y-3 mb-6">
          {[
            { step: "1", title: "Convertible Notes", body: "Strategy issues convertible bonds — debt instruments that can convert into equity. By offering conversion features, they attract buyers willing to accept lower interest rates. The proceeds go directly into Bitcoin purchases." },
            { step: "2", title: "At-The-Market (ATM) Equity Offerings", body: "Strategy regularly sells new shares into the market. As long as the stock trades at a significant premium to the Bitcoin NAV, diluting existing shareholders is accretive to BTC per share — because each new dollar raised buys more BTC at market price than the dilution costs." },
            { step: "3", title: "Preferred Stock Issuances", body: "More recently, Strategy has issued preferred equity with fixed dividends, bringing in a new class of capital at defined costs, again recycled into Bitcoin." },
            { step: "4", title: "HODL Forever", body: "Unlike a hedge fund, Strategy does not trade its Bitcoin. The entire treasury is held long-term in qualified custodians. This commitment is itself part of the value proposition — it signals conviction and prevents panic selling pressure from the largest holder." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 glass rounded-xl p-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0"
                style={{ background: "#f7931a20", color: "#f7931a" }}
              >
                {item.step}
              </div>
              <div>
                <p className="font-bold mb-1 text-sm" style={{ color: "var(--color-text)" }}>{item.title}</p>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass rounded-xl p-4" style={{ borderLeft: "4px solid #f59e0b" }}>
          <p className="text-sm font-bold mb-1" style={{ color: "#f59e0b" }}>Market Context (Early 2026)</p>
          <p className="text-sm" style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}>
            As Bitcoin declined ~25% from late 2025 highs, Strategy&apos;s stock briefly traded at a 16%
            discount to its Bitcoin NAV — a reversal from the 7x premium seen at peak enthusiasm. This
            illustrates the volatility amplification inherent in leveraged Bitcoin treasury companies.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section id="dat-companies" className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
          5. The DAT Company Model: Next Evolution
        </h2>
        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          A <strong>Digital Asset Treasury (DAT) company</strong> takes the Bitcoin treasury concept
          a step further: crypto accumulation is the entire business, not a side strategy for an
          existing software firm. Think of it as a publicly traded Bitcoin holding company with no
          operating business diluting the exposure.
        </p>
        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          Twenty One Capital, backed by Cantor Fitzgerald and launching in early 2026 with ~43,514 BTC,
          is the clearest example of a pure-play DAT company. Its mandate is straightforward: raise
          capital, buy Bitcoin, hold Bitcoin, grow BTC per share. No enterprise software revenues.
          No hardware mining operations. Pure exposure.
        </p>
        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          For investors who want corporate Bitcoin exposure without the operational noise of a tech
          company, DAT structures can offer a cleaner product. The tradeoff is that they&apos;re entirely
          dependent on Bitcoin price appreciation to generate value — there&apos;s no underlying business
          generating cash flow to fall back on.
        </p>
      </section>

      {/* Section 6 */}
      <section id="risks" className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
          6. Risks for Companies (and Their Shareholders)
        </h2>

        <div className="glass rounded-xl p-4 mb-6" style={{ borderLeft: "4px solid #ef4444" }}>
          <p className="text-sm font-bold mb-1" style={{ color: "#ef4444" }}>
            Warning: This is Not Financial Advice
          </p>
          <p className="text-sm" style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}>
            Bitcoin treasury companies amplify both Bitcoin&apos;s upside and downside. Before buying shares,
            understand that you are taking on Bitcoin price risk, company-specific risk, and in many
            cases leverage risk simultaneously.
          </p>
        </div>

        <div className="space-y-3">
          {[
            { risk: "Leverage Risk", color: "#ef4444", detail: "Companies like Strategy use debt to buy Bitcoin. If Bitcoin falls far enough and the company faces margin calls or debt maturities, forced liquidation of BTC at the worst time becomes possible. This amplifies downside beyond a simple BTC holding." },
            { risk: "NAV Premium Collapse", color: "#f59e0b", detail: "Stocks that trade at large NAV premiums can see sharp declines if sentiment shifts — independent of Bitcoin's price movement. The premium compresses as enthusiasm fades, creating a double-hit of declining BTC price plus declining premium." },
            { risk: "Equity Dilution", color: "#a855f7", detail: "ATM offerings constantly issue new shares. If the company's stock trades near or below NAV, these offerings dilute shareholders without proportionally increasing BTC per share. Investors need to track BTC per share — not just total BTC held." },
            { risk: "Regulatory Exposure", color: "#3b82f6", detail: "Regulators in the US, EU, and Asia are increasingly scrutinising corporate Bitcoin holdings, tax treatment of unrealised gains/losses, and disclosure requirements. Regulatory changes could affect how these holdings are accounted for or taxed." },
            { risk: "Concentration Risk", color: "#22c55e", detail: "Owning shares in multiple Bitcoin treasury companies doesn't diversify your Bitcoin exposure — you're concentrated in BTC regardless. Actual diversification requires owning assets uncorrelated with Bitcoin." },
          ].map((item) => (
            <div key={item.risk} className="glass rounded-xl p-4" style={{ borderLeft: `4px solid ${item.color}` }}>
              <p className="font-bold mb-1 text-sm" style={{ color: item.color }}>{item.risk}</p>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7 */}
      <section id="investor-angle" className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
          7. How to Get Corporate Bitcoin Exposure as an Investor
        </h2>
        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          You have several options for gaining exposure to corporate Bitcoin strategies, each with
          different tradeoff profiles:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                {["Method", "BTC Exposure", "Simplicity", "Additional Risk"].map((h) => (
                  <th key={h} className="text-left py-2 px-3 text-xs font-bold uppercase tracking-wide" style={{ color: "var(--color-text-secondary)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { method: "Buy Bitcoin directly", btc: "1:1 Pure", simplicity: "Moderate", risk: "Bitcoin price only" },
                { method: "Spot Bitcoin ETF", btc: "~1:1", simplicity: "High", risk: "Bitcoin price + fund fees" },
                { method: "Strategy (MSTR) shares", btc: "Leveraged", simplicity: "High (via broker)", risk: "BTC + equity + leverage + NAV premium" },
                { method: "Bitcoin miner stocks", btc: "Indirect", simplicity: "High (via broker)", risk: "BTC + operational + energy cost" },
                { method: "DAT company shares", btc: "Near 1:1 (no leverage)", simplicity: "High (via broker)", risk: "BTC + NAV premium collapse" },
              ].map((row, i) => (
                <tr
                  key={row.method}
                  style={{
                    borderBottom: "1px solid var(--color-border)",
                    background: i % 2 === 0 ? "var(--glass-bg)" : "transparent",
                  }}
                >
                  <td className="py-2 px-3 font-semibold" style={{ color: "var(--color-text)" }}>{row.method}</td>
                  <td className="py-2 px-3" style={{ color: "#f7931a" }}>{row.btc}</td>
                  <td className="py-2 px-3" style={{ color: "var(--color-text-secondary)" }}>{row.simplicity}</td>
                  <td className="py-2 px-3 text-xs" style={{ color: "var(--color-text-secondary)" }}>{row.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          For most investors who simply want Bitcoin price exposure, a{" "}
          <Link href="/learn/bitcoin-etf-guide-2026" style={{ color: "#f7931a" }} className="hover:underline">
            spot Bitcoin ETF
          </Link>{" "}
          is the cleanest option. Bitcoin treasury company stocks are better suited to investors who
          believe in leveraged BTC exposure and are comfortable tracking NAV premiums, dilution risk,
          and company-specific factors. They are not a substitute for Bitcoin — they are a derivatives
          play on Bitcoin with additional complexity baked in.
        </p>

        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          Useful tools for tracking your BTC exposure:{" "}
          <Link href="/tools/portfolio-tracker" style={{ color: "#f7931a" }} className="hover:underline">
            Portfolio Tracker
          </Link>
          {" "}and our{" "}
          <Link href="/tools/dca-calculator" style={{ color: "#f7931a" }} className="hover:underline">
            DCA Calculator
          </Link>{" "}
          for modelling long-term BTC accumulation.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "What is a Bitcoin treasury company?",
              a: "A Bitcoin treasury company is a publicly traded firm that holds Bitcoin as a primary or significant balance sheet asset. Unlike simply buying BTC as a side investment, these companies treat Bitcoin accumulation as a core business strategy — often raising capital specifically to buy more BTC.",
            },
            {
              q: "How much Bitcoin does Strategy hold?",
              a: "As of early 2026, Strategy holds approximately 687,410 BTC — more than 3% of the total 21 million Bitcoin that will ever exist, making it the largest corporate holder by a significant margin.",
            },
            {
              q: "What is a DAT company?",
              a: "A Digital Asset Treasury (DAT) company is a firm whose primary business model is accumulating and holding crypto — particularly Bitcoin. Unlike Strategy which also runs a software business, a pure DAT company has no other operating business; crypto accumulation is the entire mission.",
            },
            {
              q: "Is buying Strategy shares the same as buying Bitcoin?",
              a: "No. Strategy shares give you indirect Bitcoin exposure but also add business risk, equity dilution risk, and leveraged volatility. When Bitcoin drops, MSTR often drops more. When Bitcoin rallies, MSTR can outperform — but only if it trades at a NAV premium.",
            },
            {
              q: "Why is Metaplanet called the MicroStrategy of Asia?",
              a: "Metaplanet, a Japanese hotel company, pivoted in 2024 to adopt a Bitcoin treasury strategy modelled after MicroStrategy. By early 2026 it holds ~35,102 BTC, making it the largest corporate BTC holder in Asia and expanding the trend beyond North America.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="glass rounded-xl p-4">
              <p className="font-bold mb-2 text-sm" style={{ color: "var(--color-text)" }}>{q}</p>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <div className="glass rounded-xl p-4 mb-8" style={{ borderLeft: "4px solid #6366f1" }}>
        <p className="text-xs" style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}>
          <strong style={{ color: "var(--color-text)" }}>Disclaimer:</strong> This guide is for informational
          purposes only. It is not financial advice. Bitcoin and Bitcoin treasury company stocks are highly
          volatile assets. Past performance does not guarantee future results. Always do your own research
          before making investment decisions.
        </p>
      </div>

      {/* Related Articles */}
      <div className="glass rounded-xl p-5">
        <h2 className="text-sm font-extrabold mb-3 uppercase tracking-wide" style={{ color: "var(--color-text-secondary)" }}>
          Related Guides
        </h2>
        <div className="space-y-2">
          {[
            { href: "/learn/bitcoin-strategic-reserve-guide", label: "Bitcoin Strategic Reserve: Governments Stacking BTC" },
            { href: "/learn/bitcoin-etf-guide-2026", label: "Bitcoin ETF Guide 2026: Spot ETFs Explained" },
            { href: "/learn/btcfi-bitcoin-defi-guide-2026", label: "BTCFi: Bitcoin DeFi Guide 2026" },
            { href: "/tools/portfolio-tracker", label: "Portfolio Tracker — Track Your BTC & Crypto" },
            { href: "/tools/dca-calculator", label: "DCA Calculator — Model Long-Term BTC Accumulation" },
          ].map(({ href, label }) => (
            <Link href="/learn/bitcoin-etf-guide-2026"
              key={href}
              className="flex items-center gap-2 text-sm hover:underline"
              style={{ color: "#f7931a" }}
            >
              <span>→</span>
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
      <BackToTop />
    
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
              "headline": "Bitcoin Treasury Companies Guide",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/bitcoin-treasury-companies-guide"
            })
          }}
        />
      </article>
  );
}
