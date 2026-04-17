import { Metadata } from "next";
import Link from "next/link";
import BitcoinSupplyBreakdown from "@/components/BitcoinSupplyBreakdown";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';
import LiveMiniStat from '@/components/LiveMiniStat';
import AutoTOC from '@/components/AutoTOC';
import ReadingTime from '@/components/ReadingTime';


// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Bitcoin Supply Shock 2026: Exchange Reserves, ETF Custody &",
  description:
    "Bitcoin exchange reserves hit 7-year lows while ETFs hold 1.3M BTC. Explore the 2026 supply shock thesis — who holds what, what's lost, and what it means for price.",
  keywords: [
    "bitcoin supply shock",
    "bitcoin supply shock 2026",
    "bitcoin exchange reserves",
    "bitcoin ETF holdings",
    "BTC supply dynamics",
    "bitcoin long term holders",
    "bitcoin lost coins",
    "bitcoin scarcity",
    "bitcoin liquid supply",
  ],
  openGraph: {
    title: "Bitcoin Supply Shock 2026 — Who Holds All the BTC?",
    description:
      "Exchange reserves at 7-year lows, ETFs holding 1.3M BTC, 3.7M coins lost forever. The complete breakdown.",
    url: "https://degen0x.com/learn/bitcoin-supply-shock-guide-2026",
    type: "article",
    publishedTime: "2026-03-23T00:00:00Z",
    modifiedTime: "2026-03-23T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: "https://degen0x.com/og-bitcoin-supply-shock-guide-2026.svg",
        width: 1200,
        height: 630,
        alt: "Bitcoin Supply Shock 2026 - Supply Distribution Breakdown",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Supply Shock 2026 — The Complete Breakdown",
    description:
      "Exchange reserves at 7-year lows. ETFs hold 1.3M BTC. 3.7M coins lost forever. Here's what it means.",
  },

  alternates: { canonical: "/learn/bitcoin-supply-shock-guide-2026" }};

// ─── Structured Data ──────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "Bitcoin Supply Shock 2026: Exchange Reserves, ETF Custody & Price Impact",
  description:
    "Complete analysis of Bitcoin supply dynamics in 2026 — exchange reserves, ETF custody, long-term holder behavior, lost coins, and what the supply shock thesis means for price.",
  url: "https://degen0x.com/learn/bitcoin-supply-shock-guide-2026",
  datePublished: "2026-03-23T00:00:00Z",
  dateModified: "2026-03-23T00:00:00Z",
  author: "degen0x Team",
  image: "https://degen0x.com/og-bitcoin-supply-shock-guide-2026.svg",
  wordCount: 2800,
});

const faqSchema = generateFAQSchema([
  {
    question: "What is a Bitcoin supply shock?",
    answer:
      "A Bitcoin supply shock occurs when sell-side liquidity becomes scarce — fewer coins are available for sale on exchanges. If demand rises during these conditions (e.g., from ETF inflows or institutional buying), prices can move sharply higher because there simply aren't enough coins to meet demand at current prices.",
  },
  {
    question: "How much Bitcoin is on exchanges in 2026?",
    answer:
      "As of March 2026, centralized exchange reserves hold approximately 2.75 million BTC — the lowest level since 2019. This is down from 3.02 million BTC in early 2025, with over 270,000 BTC leaving exchanges during that period.",
  },
  {
    question: "How much Bitcoin do ETFs hold?",
    answer:
      "Spot Bitcoin ETFs collectively hold approximately 1.3 million BTC as of March 2026, representing about 6.7% of the total circulating supply. BlackRock's IBIT is the largest holder with over $52 billion in AUM.",
  },
  {
    question: "How much Bitcoin is lost forever?",
    answer:
      "An estimated 3.7 million BTC is considered permanently lost — roughly 18.7% of the circulating supply. This includes Satoshi Nakamoto's untouched ~1.1 million BTC, early mining rewards sent to addresses with lost keys, and coins in wallets where access has been permanently lost.",
  },
  {
    question: "What percentage of Bitcoin is held by long-term holders?",
    answer:
      "As of early 2026, long-term holders (addresses that haven't moved BTC in over 12 months) control approximately 14.8 million Bitcoin, representing about 79% of the circulating supply. This is an all-time high for LTH dominance.",
  },
  {
    question: "When is the next Bitcoin halving?",
    answer:
      "The next Bitcoin halving is expected in April 2028. It will reduce the block reward from 3.125 BTC to 1.5625 BTC per block, further tightening the rate of new supply entering the market.",
  },
]);

const schemas = combineSchemas([articleSchema, faqSchema]);

// ─── Page ─────────────────────────────────────────────────────────────────────
const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Bitcoin Supply Shock Guide 2026', },
  ],
};

export default function BitcoinSupplyShockGuidePage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <StructuredData data={schemas} />
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Learn", href: "/learn" },
            { label: "Bitcoin Supply Shock 2026" },
          ]}
        />

        {/* ── Header ── */}
        <div style={{ marginTop: 24, marginBottom: 32 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
            <span
              className="text-xs px-3 py-1 rounded-full font-bold"
              style={{ background: "#f7931a20", color: "#f7931a" }}
            >
              Bitcoin
            </span>
            <span
              style={{ background: "#6366f120", color: "#6366f1" }}
            >
              On-Chain Analysis
            </span>
            <span
              style={{ background: "#06b6d420", color: "#06b6d4" }}
            >
              Intermediate
            </span>
            <span
              style={{ background: "#22c55e20", color: "#22c55e" }}
            >
              Updated March 2026
            </span>
          </div>

          <h1
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{
              color: "var(--color-text)",
              lineHeight: 1.2,
              background: "linear-gradient(135deg, #f7931a, #f59e0b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Bitcoin Supply Shock 2026: Who Holds All the BTC?
          </h1>

          <ReadingTime />
          <AutoTOC />
          <p className="text-lg" style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
            Exchange reserves just hit 7-year lows. ETFs custody 1.3 million BTC. An estimated 3.7 million coins are lost
            forever. With 79% of circulating supply locked up by long-term holders, the effective &ldquo;liquid&rdquo;
            Bitcoin available for purchase has never been smaller. Here&rsquo;s the complete breakdown of where all
            21 million Bitcoin actually are — and why it matters for price.
          </p>

          <div style={{ marginTop: 12, fontSize: 13, color: "var(--color-text-secondary)" }}>
            Updated March 2026 &middot; 12 min read
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-23"
          updatedDate="2026-03-23"
          readingTime={5}
          section="learn"
        />


        {/* ── Table of Contents ── */}
        <nav
          className="glass rounded-xl p-5 mb-8"
          style={{ borderLeft: "4px solid #f7931a" }}
        >
          <h2
            className="text-sm font-extrabold mb-3 uppercase tracking-wide"
            style={{ color: "#f7931a" }}
          >
            📋 Table of Contents
          </h2>
          <ol style={{ paddingLeft: 20, color: "var(--color-text-secondary)", fontSize: 14, lineHeight: 2.2 }}>
            <li><a href="#what-is-supply-shock" style={{ color: "#58a6ff", textDecoration: "none" }}>What Is a Bitcoin Supply Shock?</a></li>
            <li><a href="#supply-breakdown" style={{ color: "#58a6ff", textDecoration: "none" }}>Interactive: Bitcoin Supply Breakdown</a></li>
            <li><a href="#exchange-reserves" style={{ color: "#58a6ff", textDecoration: "none" }}>Exchange Reserves at 7-Year Lows</a></li>
            <li><a href="#etf-custody" style={{ color: "#58a6ff", textDecoration: "none" }}>ETF Custody: The Institutional Vacuum</a></li>
            <li><a href="#long-term-holders" style={{ color: "#58a6ff", textDecoration: "none" }}>Long-Term Holders Control 79% of Supply</a></li>
            <li><a href="#lost-bitcoin" style={{ color: "#58a6ff", textDecoration: "none" }}>3.7 Million Bitcoin Lost Forever</a></li>
            <li><a href="#price-implications" style={{ color: "#58a6ff", textDecoration: "none" }}>What This Means for Price</a></li>
            <li><a href="#how-to-track" style={{ color: "#58a6ff", textDecoration: "none" }}>How to Track Supply Metrics Yourself</a></li>
            <li><a href="#faq" style={{ color: "#58a6ff", textDecoration: "none" }}>FAQ</a></li>
          </ol>
        </nav>

        {/* ── Content ── */}
        <div style={{ color: "var(--color-text-secondary)", lineHeight: 1.8, fontSize: 15 }}>

          {/* Section 1 */}
          <section id="what-is-supply-shock" style={{ marginBottom: 40 }}>
            <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
              1. What Is a Bitcoin Supply Shock?
            </h2>
            <p className="mb-4">
              Bitcoin has a hard cap of 21 million coins — a rule enforced by code that no government, corporation, or
              developer can change. But the <em>effective</em> supply available for purchase at any given moment is far
              lower than the total circulating supply. When this available supply dries up while demand stays constant or
              increases, you get a <strong style={{ color: "var(--color-text)" }}>supply shock</strong> — a structural
              imbalance that historically precedes sharp price increases.
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
            <p className="mb-4">
              In March 2026, multiple converging forces are creating what on-chain analysts describe as the most
              pronounced supply squeeze in Bitcoin&rsquo;s history. Centralized exchange reserves have plunged to levels
              not seen since 2019. Spot ETFs have absorbed over 1.3 million BTC into regulated custody. Long-term
              holders are sitting on 79% of all circulating coins. And an estimated 3.7 million BTC is lost forever.
            </p>

            <div
              className="glass rounded-xl p-5 my-6"
              style={{ borderLeft: "3px solid #f59e0b" }}
            >
              <h3 className="text-sm font-bold mb-2" style={{ color: "#f59e0b" }}>
                ⚡ Why Supply Shocks Matter
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7 }}>
                In traditional markets, companies can issue more shares to meet demand. Bitcoin can&rsquo;t. The only new
                supply comes from mining — currently 3.125 BTC per block (~450 BTC/day). When demand from ETFs alone can
                exceed daily mining output, the math gets very simple: price must adjust upward to find willing sellers.
              </p>
            </div>
          </section>

          {/* Section 2 — Interactive Component */}
          <section id="supply-breakdown" style={{ marginBottom: 40 }}>
            <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
              2. Bitcoin Supply Breakdown — Interactive
            </h2>
            <p className="mb-4">
              Hover over the chart below to see exactly where Bitcoin&rsquo;s 19.84 million circulating coins are
              distributed. Switch to the timeline view to see how exchange reserves and long-term holder percentages have
              shifted since 2020.
            </p>
            <BitcoinSupplyBreakdown />
          </section>

          {/* Section 3 */}
          <section id="exchange-reserves" style={{ marginBottom: 40 }}>
            <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
              3. Exchange Reserves at 7-Year Lows
            </h2>
            <p className="mb-4">
              Centralized exchange Bitcoin reserves have fallen to approximately 2.75 million BTC as of March 2026 — the
              lowest since 2019. That&rsquo;s down from 3.02 million BTC in early 2025, meaning more than 270,000 BTC
              left exchange wallets in about a year.
            </p>
            <p className="mb-4">
              This exodus signals a fundamental shift in investor behavior. Rather than keeping BTC on exchanges for
              quick trading, holders are moving coins to cold storage and long-term custody — suggesting conviction
              rather than speculation. When reserves drop this low, even modest buy pressure can cause outsized price
              movements because the available sell-side liquidity has thinned dramatically.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--color-border)" }}>
                    {["Metric", "Value", "Change"].map((h) => (
                      <th key={h} className="text-left py-3 px-3 text-xs font-bold uppercase" style={{ color: "var(--color-text-secondary)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: "Exchange Reserves", value: "2.75M BTC", change: "-270K since Jan 2025", color: "#ef4444" },
                    { metric: "Lowest Since", value: "2019", change: "7-year low", color: "#f59e0b" },
                    { metric: "Net Exchange Flow (30d)", value: "-18,400 BTC", change: "Consistent outflows", color: "#ef4444" },
                    { metric: "Largest Outflows", value: "Coinbase, Binance", change: "Institutional custody moves", color: "#6366f1" },
                  ].map((r) => (
                    <tr key={r.metric} style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <td className="py-2.5 px-3 font-semibold" style={{ color: "var(--color-text)" }}>{r.metric}</td>
                      <td className="py-2.5 px-3 font-mono font-bold" style={{ color: r.color }}>{r.value}</td>
                      <td className="py-2.5 px-3">{r.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mb-4">
              Track real-time exchange flows using our{" "}
              <Link href="/tools/whale-tracker" style={{ color: "#58a6ff", textDecoration: "none" }}>
                Whale Tracker
              </Link>{" "}
              tool, which monitors large BTC movements between exchanges and cold wallets.
            </p>
          </section>

          {/* Section 4 */}
          <section id="etf-custody" style={{ marginBottom: 40 }}>
            <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
              4. ETF Custody: The Institutional Vacuum
            </h2>
            <p className="mb-4">
              Since spot Bitcoin ETFs launched in January 2024, they&rsquo;ve become the single largest structural buyer
              of BTC. As of March 2026, ETF custodians (primarily Coinbase Prime) hold approximately 1.3 million BTC —
              about 6.7% of the entire circulating supply. This Bitcoin sits in regulated, insured cold storage and
              doesn&rsquo;t trade on spot markets, effectively removing it from the liquid supply.
            </p>
            <p className="mb-4">
              The scale of ETF accumulation has been staggering. On high-inflow days, ETFs can absorb more BTC in a
              single trading session than miners produce in an entire week. BlackRock&rsquo;s IBIT alone manages over
              $52 billion in AUM, and approximately 15-20% of large US pension funds now allocate 1-3% to Bitcoin ETFs.
            </p>

            <div
              style={{ borderLeft: "3px solid #22c55e" }}
            >
              <h3 className="text-sm font-bold mb-2" style={{ color: "#22c55e" }}>
                🏛️ ETF Supply Math
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7 }}>
                Miners produce ~450 BTC per day. On strong inflow days, ETFs can buy 5,000-10,000+ BTC. Even on
                average days, net ETF buying often exceeds new mining output. This creates a persistent demand/supply
                imbalance that can only resolve through higher prices.
              </p>
            </div>

            <p className="mb-4">
              For a deeper dive into how these funds work, see our{" "}
              <Link href="/learn/bitcoin-etf-guide-2026" style={{ color: "#58a6ff", textDecoration: "none" }}>
                Bitcoin ETF Guide 2026
              </Link>.
            </p>
          </section>

          {/* Section 5 */}
          <section id="long-term-holders" style={{ marginBottom: 40 }}>
            <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
              5. Long-Term Holders Control 79% of Supply
            </h2>
            <p className="mb-4">
              Long-term holders (LTHs) — defined as addresses that haven&rsquo;t moved their BTC in over 12 months —
              now control approximately 14.8 million Bitcoin, representing 79% of the circulating supply. This is an
              all-time high for LTH dominance and marks a significant departure from previous market cycles.
            </p>
            <p className="mb-4">
              What makes the 2026 cycle unique is that exchange balances have continued to decline even during strong
              price rallies. In previous cycles, rallies triggered profit-taking and exchange inflows as holders moved
              coins to sell. This time, coins are flowing in the opposite direction — from exchanges to cold storage —
              even at elevated price levels. The implication: holders have higher conviction and higher price targets
              than in previous cycles.
            </p>
            <p className="mb-4">
              Illiquid supply — coins that haven&rsquo;t moved in over a year — has grown to represent approximately
              70% of all circulating Bitcoin. Combined with the coins locked in ETF custody and estimated lost BTC, the
              truly &ldquo;available&rdquo; supply that could be sold on any given day is a fraction of what most people
              assume.
            </p>
          </section>

          {/* Section 6 */}
          <section id="lost-bitcoin" style={{ marginBottom: 40 }}>
            <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
              6. 3.7 Million Bitcoin Lost Forever
            </h2>
            <p className="mb-4">
              An estimated 3.7 million BTC — roughly 18.7% of the circulating supply — is considered permanently
              unrecoverable. This includes Satoshi Nakamoto&rsquo;s untouched ~1.1 million BTC (mined in 2009-2010 and
              never moved), early mining rewards sent to addresses with lost private keys, and coins in wallets where
              access has been permanently lost due to hardware failures, deaths, or forgotten passwords.
            </p>

            <div
              style={{ borderLeft: "3px solid #ef4444" }}
            >
              <h3 className="text-sm font-bold mb-2" style={{ color: "#ef4444" }}>
                🔐 Effective Supply vs Circulating Supply
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7 }}>
                The headline &ldquo;circulating supply&rdquo; of ~19.84M BTC is misleading. Subtract lost coins (3.7M),
                ETF custody (1.3M), and long-term holders unlikely to sell (14.8M), and the truly liquid supply available
                for purchase is roughly <strong style={{ color: "var(--color-text)" }}>~2M BTC</strong> — less than 10%
                of the circulating total.
              </p>
            </div>

            <p className="mb-4">
              This scarcity is permanent and compounding. Every halving reduces new supply issuance, and lost coins are
              never recovered. Bitcoin&rsquo;s effective inflation rate (new coins as a percentage of existing supply)
              is already lower than gold&rsquo;s, and it halves again in April 2028.
            </p>
          </section>

          {/* Section 7 */}
          <section id="price-implications" style={{ marginBottom: 40 }}>
            <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
              7. What This Means for Price
            </h2>
            <p className="mb-4">
              Supply shock dynamics don&rsquo;t guarantee price increases — they set the stage for them. The key
              relationship is between the shrinking pool of available coins and the structural demand from ETFs,
              corporate treasuries, and sovereign wealth funds. Here&rsquo;s how the forces stack up:
            </p>

            <div className="glass rounded-xl p-5 my-6" style={{ border: "1px solid var(--color-border)" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: "#22c55e" }}>📈 Bullish Factors</h3>
                  <div className="space-y-2 text-sm">
                    <p>Exchange reserves at multi-year lows</p>
                    <p>ETF inflows exceeding daily mining output</p>
                    <p>LTH dominance at all-time highs (79%)</p>
                    <p>Pension funds allocating 1-3% to BTC ETFs</p>
                    <p>Next halving in 2028 further cuts supply</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: "#f59e0b" }}>⚠️ Risk Factors</h3>
                  <div className="space-y-2 text-sm">
                    <p>LTH distribution during euphoria phase</p>
                    <p>CLARITY Act uncertainty on stablecoin yields</p>
                    <p>Macro risks (rate hikes, recession fears)</p>
                    <p>ETF outflows during market downturns</p>
                    <p>Regulatory crackdowns in key markets</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-4">
              Historically, previous supply shock setups (2017, 2020-2021) preceded major rallies. But past performance
              doesn&rsquo;t guarantee future results. The key metric to watch is the &ldquo;illiquid supply ratio&rdquo;
              — the percentage of circulating coins that haven&rsquo;t moved in over a year. As long as this stays above
              65%, the structural scarcity thesis remains intact.
            </p>

            <p className="mb-4">
              Monitor live sentiment and price momentum with our{" "}
              <Link href="/tools/sentiment-dashboard" style={{ color: "#58a6ff", textDecoration: "none" }}>
                Crypto Sentiment Dashboard
              </Link>{" "}
              and{" "}
              <Link href="/tools/fear-greed-timeline" style={{ color: "#58a6ff", textDecoration: "none" }}>
                Fear &amp; Greed Timeline
              </Link>.
            </p>
          </section>

          {/* Section 8 */}
          <section id="how-to-track" style={{ marginBottom: 40 }}>
            <h2 className="text-xl font-extrabold mt-8 mb-3" style={{ color: "var(--color-text)" }}>
              8. How to Track Supply Metrics Yourself
            </h2>
            <p className="mb-4">
              You don&rsquo;t need to trust anyone&rsquo;s supply shock narrative — the data is on-chain and verifiable.
              Here are the best tools for tracking Bitcoin supply dynamics:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--color-border)" }}>
                    {["Metric", "Best Tool", "What to Watch"].map((h) => (
                      <th key={h} className="text-left py-3 px-3 text-xs font-bold uppercase" style={{ color: "var(--color-text-secondary)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: "Exchange Reserves", tool: "CryptoQuant, Glassnode", watch: "Declining = bullish" },
                    { metric: "ETF Holdings", tool: "Bitbo.io, CoinGlass", watch: "Daily inflow/outflow trends" },
                    { metric: "LTH Supply", tool: "Glassnode, Checkonchain", watch: "% above 75% = strong conviction" },
                    { metric: "Illiquid Supply", tool: "Glassnode", watch: "Ratio above 65% = supply shock zone" },
                    { metric: "Miner Reserves", tool: "CryptoQuant", watch: "Declining = miners selling costs" },
                    { metric: "Net Unrealized P/L", tool: "Glassnode", watch: "High NUPL = overheated market" },
                  ].map((r) => (
                    <tr key={r.metric} style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <td className="py-2.5 px-3 font-semibold" style={{ color: "var(--color-text)" }}>{r.metric}</td>
                      <td className="py-2.5 px-3">{r.tool}</td>
                      <td className="py-2.5 px-3">{r.watch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mb-4">
              For live price tracking with technical indicators, use our{" "}
              <Link href="/tools/advanced-charting" style={{ color: "#58a6ff", textDecoration: "none" }}>
                Advanced Charting
              </Link>{" "}
              tool. For portfolio management, check out the{" "}
              <Link href="/tools/portfolio-tracker" style={{ color: "#58a6ff", textDecoration: "none" }}>
                Portfolio Tracker
              </Link>.
            </p>
          </section>

          {/* Disclaimer */}
          <div
            className="glass rounded-xl p-5 my-8"
            style={{ borderLeft: "3px solid #f59e0b" }}
          >
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>
              ⚠️ This guide is for informational purposes only. It is not financial advice. Supply dynamics are one
              factor among many that influence price. Always do your own research before making investment decisions.
              Past supply shock events do not guarantee future price performance.
            </p>
          </div>

          {/* FAQ */}
          <section id="faq" style={{ marginTop: 48, marginBottom: 40 }}>
            <h2 className="text-xl font-extrabold mb-6" style={{ color: "var(--color-text)" }}>
              Frequently Asked Questions
            </h2>

            {[
              {
                q: "What is a Bitcoin supply shock?",
                a: "A Bitcoin supply shock occurs when sell-side liquidity becomes scarce — fewer coins are available for sale on exchanges. If demand rises during these conditions (e.g., from ETF inflows or institutional buying), prices can move sharply higher because there simply aren't enough coins to meet demand at current prices.",
              },
              {
                q: "How much Bitcoin is on exchanges in 2026?",
                a: "As of March 2026, centralized exchange reserves hold approximately 2.75 million BTC — the lowest level since 2019. This is down from 3.02 million BTC in early 2025, with over 270,000 BTC leaving exchanges during that period.",
              },
              {
                q: "How much Bitcoin do ETFs hold?",
                a: "Spot Bitcoin ETFs collectively hold approximately 1.3 million BTC as of March 2026, representing about 6.7% of the total circulating supply. BlackRock's IBIT is the largest holder.",
              },
              {
                q: "How much Bitcoin is lost forever?",
                a: "An estimated 3.7 million BTC is considered permanently lost — roughly 18.7% of the circulating supply. This includes Satoshi's untouched ~1.1 million BTC and coins in wallets where keys have been permanently lost.",
              },
              {
                q: "What percentage of Bitcoin is held by long-term holders?",
                a: "Long-term holders control approximately 14.8 million Bitcoin (79% of circulating supply) as of early 2026 — an all-time high for LTH dominance.",
              },
              {
                q: "When is the next Bitcoin halving?",
                a: "The next Bitcoin halving is expected in April 2028, reducing the block reward from 3.125 BTC to 1.5625 BTC per block.",
              },
            ].map((faq) => (
              <div
                key={faq.question}
                className="glass rounded-xl p-5 mb-3"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <h3 className="text-sm font-bold mb-2" style={{ color: "var(--color-text)" }}>
                  {faq.question}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7 }}>{faq.answer}</p>
              </div>
            ))}
          </section>

          {/* Related Content */}
          <section style={{ marginTop: 40 }}>
            <h2 className="text-xl font-extrabold mb-4" style={{ color: "var(--color-text)" }}>
              Related Guides & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "Bitcoin ETF Guide 2026", href: "/learn/bitcoin-etf-guide-2026", emoji: "📊" },
                { title: "Bitcoin Strategic Reserve Guide", href: "/learn/bitcoin-strategic-reserve-guide", emoji: "🏛️" },
                { title: "Whale Tracker", href: "/tools/whale-tracker", emoji: "🐋" },
                { title: "Portfolio Tracker", href: "/tools/portfolio-tracker", emoji: "📈" },
                { title: "Sentiment Dashboard", href: "/tools/sentiment-dashboard", emoji: "🧠" },
                { title: "Advanced Charting", href: "/tools/advanced-charting", emoji: "📉" },
              ].map((link) => (
                <Link href="#price-implications"
                  key={link.href}
                  className="glass rounded-lg p-4 hover:opacity-80 transition-opacity"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    border: "1px solid var(--color-border)",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ fontSize: 20 }}>{link.emoji}</span>
                  <span className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
        <BackToTop />
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Bitcoin Supply Shock Guide 2026",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/bitcoin-supply-shock-guide-2026"
            })
          }}
        />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Bitcoin Supply Shock 2026: Exchange Reserves, ETF Custody &", "description": "Bitcoin exchange reserves hit 7-year lows while ETFs hold 1.3M BTC. Explore the 2026 supply shock thesis \u2014 who holds what, what", "url": "https://degen0x.com/learn/bitcoin-supply-shock-guide-2026", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
      <LiveMiniStat id="bitcoin" />
      <RelatedContent category="learn" currentSlug="/learn/bitcoin-supply-shock-guide-2026" />
</div>
  );
}
