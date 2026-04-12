import { Metadata } from "next";
import Link from "next/link";
import {
  generateArticleSchema,
  generateFAQSchema,
  combineSchemas,
} from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import { SITE_URL } from "@/lib/constants";
import BackToTop from "@/components/BackToTop";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Bitcoin Safe Haven 2026: Is BTC a Hedge Against Geopolitical Risk?",
  description:
    "Bitcoin dropped 47% from its ATH while gold hit $5,000. Explore the data on whether BTC is a safe-haven asset, how it performs during crises, and what the US Strategic Reserve means.",
  openGraph: {
    title: "Bitcoin Safe Haven 2026: Crisis Hedge or Risk Asset?",
    description:
      "Gold hit $5K. Bitcoin dropped 47% from ATH. Here's the real data on BTC as a geopolitical hedge in 2026.",
    url: `${SITE_URL}/learn/bitcoin-safe-haven-guide-2026`,
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    modifiedTime: "2026-03-25T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: `${SITE_URL}/og-bitcoin-safe-haven-guide-2026.svg`,
        width: 1200,
        height: 630,
        alt: "Bitcoin Safe Haven Guide 2026 — degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Safe Haven 2026: Crisis Hedge or Risk Asset?",
    description:
      "Gold hit $5K. BTC dropped 47%. The safe-haven debate gets real data.",
    images: [
      `${SITE_URL}/og-bitcoin-safe-haven-guide-2026.svg`,
    ],
  },
};

const articleSchema = generateArticleSchema({
  title: "Bitcoin Safe Haven 2026: Is BTC a Hedge Against Geopolitical Risk?",
  description:
    "An evidence-based analysis of Bitcoin's performance during the 2026 Iran conflict, its correlation with gold, spot ETF flow dynamics, and the role of the US Strategic Bitcoin Reserve in reshaping the safe-haven narrative.",
  url: `${SITE_URL}/learn/bitcoin-safe-haven-guide-2026`,
  datePublished: "2026-03-25T00:00:00Z",
  dateModified: "2026-03-25T00:00:00Z",
  author: "degen0x Team",
  image: `${SITE_URL}/api/og?title=Bitcoin+Safe+Haven+Guide&category=Bitcoin&type=learn`,
  wordCount: 3200,
});

const faqSchema = generateFAQSchema([
  {
    question: "Is Bitcoin a safe-haven asset in 2026?",
    answer:
      "The data is mixed. During the 2026 Iran conflict, Bitcoin fell roughly 20% alongside equities while gold surged past $5,000/oz. However, institutional spot-ETF inflows remained positive for four consecutive weeks, suggesting large allocators still treat BTC as a long-term store of value even when short-term price action tracks risk assets.",
  },
  {
    question: "How did Bitcoin perform during the 2026 Iran crisis?",
    answer:
      "Bitcoin dropped from its October 2025 all-time high of approximately $126,000 to around $67,000–68,000 by early March 2026 — a roughly 47% decline. The selloff accelerated alongside tech stocks when global tariffs were raised. Gold, by contrast, rallied to record highs above $5,000/oz.",
  },
  {
    question: "What is the Bitcoin-gold correlation in 2026?",
    answer:
      "The trailing 12-month correlation between Bitcoin and gold is near zero (0.01), meaning they move largely independently. During acute crisis periods, the correlation briefly dropped to –0.88, with BTC falling while gold rose. More recently the correlation has turned slightly positive, suggesting BTC is beginning to decouple from pure risk-asset behavior.",
  },
  {
    question: "Does the US Strategic Bitcoin Reserve make BTC a safe-haven?",
    answer:
      "The US government holds an estimated 328,000 BTC in its Strategic Reserve established by Executive Order in March 2025. While sovereign adoption legitimizes Bitcoin as a reserve asset, it does not automatically make BTC behave like gold during short-term crises — it remains more sensitive to liquidity conditions and risk appetite.",
  },
  {
    question: "Should I buy Bitcoin as a hedge against war or inflation?",
    answer:
      "Bitcoin has historically performed well as a long-term debasement hedge — protecting against currency depreciation over multi-year periods. However, during sudden geopolitical shocks it tends to sell off alongside equities before recovering. Most analysts recommend treating BTC as a long-horizon strategic allocation rather than a short-term crisis hedge. This is not financial advice.",
  },
  {
    question: "Is gold better than Bitcoin as a safe haven?",
    answer:
      "In 2026, gold has clearly outperformed Bitcoin during geopolitical crises, breaching $5,000/oz while BTC declined. Gold benefits from millennia of institutional adoption, deep central-bank liquidity, and physical scarcity. Bitcoin offers algorithmic scarcity and 24/7 global liquidity but remains more volatile. Many investors hold both for different purposes.",
  },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

export default function BitcoinSafeHavenGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <StructuredData data={combinedSchema} />

      {/* Header badges */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          <span
            className="text-xs px-3 py-1 rounded-full font-bold"
            style={{ background: "#f7931a20", color: "#f7931a" }}
          >
            Bitcoin
          </span>
          <span
            className="text-xs px-3 py-1 rounded-full font-bold"
            style={{ background: "#6366f120", color: "#6366f1" }}
          >
            Macro
          </span>
          <span
            className="text-xs px-3 py-1 rounded-full font-bold"
            style={{ background: "#22c55e20", color: "#22c55e" }}
          >
            Intermediate
          </span>
          <span
            className="text-xs px-3 py-1 rounded-full font-bold"
            style={{ background: "#0ea5e920", color: "#0ea5e9" }}
          >
            Updated March 2026
          </span>
        </div>

        <h1
          className="text-3xl md:text-4xl font-extrabold mb-4"
          style={{
            background: "linear-gradient(135deg, #f7931a 0%, #fbbf24 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.2",
          }}
        >
          Bitcoin as a Safe Haven: Is BTC a Real Hedge Against Geopolitical Risk?
        </h1>

        <p
          className="text-lg"
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}
        >
          Gold breached $5,000 per ounce. Bitcoin dropped 47% from its all-time
          high. The Iran conflict tested the &quot;digital gold&quot; thesis harder
          than ever — and the results are complicated. Here&apos;s what the data
          actually says about BTC as a safe-haven asset in 2026.
        </p>

        <p
          className="text-sm mt-3"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Updated March 2026 · 12 min read
        </p>
      </div>

      {/* Key Stats Box */}
      <div
        className="glass rounded-xl p-5 mb-8"
        style={{ borderLeft: "4px solid #f7931a" }}
      >
        <h2
          className="text-sm font-extrabold mb-3 uppercase tracking-wide"
          style={{ color: "#f7931a" }}
        >
          Key Numbers (March 2026)
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "BTC ATH (Oct 2025)", value: "~$126,000" },
            { label: "BTC March 2026", value: "~$68,000" },
            { label: "Gold Price", value: ">$5,000/oz" },
            { label: "BTC-Gold Correlation", value: "~0.01" },
            { label: "Spot ETF Inflows (March)", value: "$890M" },
            { label: "US Strategic Reserve", value: "~328,000 BTC" },
          ].map((s) => (
            <div
              key={s.label}
              className="p-3 rounded-lg"
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div
                className="text-xs"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {s.label}
              </div>
              <div
                className="text-sm font-bold"
                style={{ color: "var(--color-text)" }}
              >
                {s.value}
              </div>
            </div>        ))}


        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-25"
          updatedDate="2026-03-25"
          readingTime={5}
          section="learn"
        />


        </div>
      </div>

      {/* Disclaimer */}
      <div
        className="rounded-xl p-4 mb-8 text-sm"
        style={{
          background: "#161b22",
          border: "1px solid #30363d",
          borderRadius: "12px",
          color: "var(--color-text-secondary)",
        }}
      >
        This guide is for informational purposes only and does not constitute
        financial or investment advice. Always do your own research before making
        any investment decisions.
      </div>

      {/* Table of Contents */}
      <div
        className="rounded-xl p-5 mb-10"
        style={{
          background: "#161b22",
          border: "1px solid #30363d",
          borderRadius: "12px",
        }}
      >
        <h2
          className="text-sm font-bold mb-3 uppercase tracking-wide"
          style={{ color: "var(--color-text-secondary)" }}
        >
          In This Guide
        </h2>
        <nav className="space-y-2 text-sm">
          {[
            { href: "#what-safe-haven", label: "1. What Makes an Asset a Safe Haven?" },
            { href: "#btc-vs-gold", label: "2. Bitcoin vs Gold: The 2026 Scoreboard" },
            { href: "#iran-crisis", label: "3. The Iran Crisis Stress Test" },
            { href: "#etf-flows", label: "4. What Spot ETF Flows Tell Us" },
            { href: "#strategic-reserve", label: "5. The US Strategic Bitcoin Reserve Factor" },
            { href: "#correlation", label: "6. Correlation Data: What the Numbers Say" },
            { href: "#framework", label: "7. A Better Framework: Crisis Hedge vs Debasement Hedge" },
            { href: "#portfolio", label: "8. How to Position BTC in Your Portfolio" },
            { href: "#faq", label: "9. FAQ" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block hover:underline"
              style={{ color: "#58a6ff" }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* ── Section 1 ── */}
      <section className="mb-10" id="what-safe-haven">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--color-text)" }}
        >
          1. What Makes an Asset a &quot;Safe Haven&quot;?
        </h2>
        <p
          className="mb-4"
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          A safe-haven asset is one that retains or increases in value during periods of
          market stress, geopolitical uncertainty, or economic turmoil. Gold is the textbook
          example — it&apos;s been a crisis hedge for thousands of years. US Treasury bonds,
          the Swiss franc, and the Japanese yen have traditionally filled this role as well.
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
        <p
          className="mb-4"
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          For Bitcoin to qualify as a safe haven, it would need to show non-correlation or
          negative correlation with equities during crisis events, retain purchasing power during
          periods of high uncertainty, and attract inflows when investors are de-risking from
          traditional markets.
        </p>
        <p
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          The 2026 geopolitical environment — with an active Iran conflict, elevated global
          tariffs, and central-bank policy uncertainty — has provided the most rigorous real-world
          test of this thesis yet.
        </p>
      </section>

      {/* ── Section 2 ── */}
      <section className="mb-10" id="btc-vs-gold">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--color-text)" }}
        >
          2. Bitcoin vs Gold: The 2026 Scoreboard
        </h2>

        <div className="overflow-x-auto mb-6">
          <table
            className="w-full text-sm"
            style={{
              borderCollapse: "collapse",
              border: "1px solid #30363d",
              borderRadius: "12px",
            }}
          >
            <thead>
              <tr style={{ background: "#161b22" }}>
                <th className="text-left p-3 font-bold" style={{ color: "var(--color-text)", borderBottom: "1px solid #30363d" }}>Metric</th>
                <th className="text-left p-3 font-bold" style={{ color: "#f7931a", borderBottom: "1px solid #30363d" }}>Bitcoin</th>
                <th className="text-left p-3 font-bold" style={{ color: "#fbbf24", borderBottom: "1px solid #30363d" }}>Gold</th>
              </tr>
            </thead>
            <tbody style={{ color: "var(--color-text-secondary)" }}>
              {[
                ["Price Change (Oct 2025 – Mar 2026)", "–47%", "+28%"],
                ["Reaction to Iran Strikes", "–20% (first week)", "+8%"],
                ["Correlation with S&P 500", "0.65 (high)", "–0.15 (negative)"],
                ["Correlation with Each Other", "~0.01 (near zero)", "~0.01"],
                ["Institutional ETF Flows (March)", "$890M inflows", "$4.2B inflows"],
                ["24/7 Market Access", "Yes", "Limited"],
                ["Sovereign Reserves", "US, El Salvador, Bhutan", "120+ central banks"],
                ["Scarcity Model", "Algorithmic (21M cap)", "Physical (~1.5%/yr supply growth)"],
              ].map(([metric, btc, gold], i) => (
                <tr
                  key={i}
                  style={{ borderBottom: "1px solid #30363d" }}
                >
                  <td className="p-3 font-medium" style={{ color: "var(--color-text)" }}>{metric}</td>
                  <td className="p-3">{btc}</td>
                  <td className="p-3">{gold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          The numbers are stark. Gold delivered exactly what safe-haven investors needed
          in early 2026 — rallying through uncertainty to breach the historic $5,000/oz mark.
          Bitcoin, meanwhile, tracked risk assets downward. But the story is more nuanced
          than the headline suggests.
        </p>
      </section>

      {/* ── Section 3 ── */}
      <section className="mb-10" id="iran-crisis">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--color-text)" }}
        >
          3. The Iran Crisis Stress Test
        </h2>
        <p
          className="mb-4"
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          When the US escalated military action against Iranian energy infrastructure in
          late February 2026, crypto markets got caught in the crossfire. Bitcoin&apos;s 20%
          decline in the first week mirrored moves in the Nasdaq and S&P 500, confirming
          what quantitative researchers have long argued: during acute liquidity shocks,
          BTC behaves more like a high-beta tech stock than a store of value.
        </p>
        <p
          className="mb-4"
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          The derivatives market amplified the selloff. Over $400 million in leveraged
          positions were liquidated in a single session as Bitcoin dipped to $68,000. The
          forced selling cascaded through perpetual futures markets, dragging spot prices
          lower in a pattern familiar to anyone who lived through 2022.
        </p>
        <p
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          Yet there was a counterweight. When Trump announced a pause on further strikes
          in late March, Bitcoin rallied immediately. And throughout the conflict, spot
          Bitcoin ETFs recorded four consecutive weeks of net inflows — suggesting
          institutional capital was accumulating the dip even as retail leverage was
          getting blown out.
        </p>
      </section>

      {/* ── Section 4 ── */}
      <section className="mb-10" id="etf-flows">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--color-text)" }}
        >
          4. What Spot ETF Flows Tell Us
        </h2>
        <p
          className="mb-4"
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          ETF flow data tells a more nuanced story than spot price alone. March 2026 saw
          $890 million in net inflows to spot Bitcoin ETFs — down 73% from February&apos;s $3.3
          billion peak, but still positive during a military conflict. On March 2 alone,
          $521 million flowed in, breaking a five-week outflow streak of $4 billion.
        </p>
        <p
          className="mb-4"
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          The institutional story gets more interesting when you look at who&apos;s entering.
          Morgan Stanley filed a second S-1 amendment for its own spot Bitcoin ETF (ticker: MSBT),
          making it the first major US bank to issue a BTC fund under its own name. This
          signals long-term conviction from traditional finance even as prices fall.
        </p>

        <div
          className="rounded-xl p-4 mb-4"
          style={{
            background: "#161b22",
            border: "1px solid #30363d",
            borderRadius: "12px",
          }}
        >
          <p
            className="text-sm font-bold mb-2"
            style={{ color: "#58a6ff" }}
          >
            The Big Shift: BTC ETFs to Tokenized Assets
          </p>
          <p
            className="text-sm"
            style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}
          >
            A critical trend: Bitcoin ETF inflows represented just 6.5% of total institutional
            digital asset flows in March 2026, down from 34% in January. Where did the money go?
            $12.8 billion flowed into tokenized treasury products — BlackRock&apos;s BUIDL token alone
            attracted $7.2 billion. Institutions are diversifying their crypto exposure beyond
            BTC into yield-bearing on-chain assets.
          </p>
        </div>

        <p
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          Learn more about institutional crypto products in our{" "}
          <Link href="/learn/institutional-crypto-adoption-guide-2026" style={{ color: "#58a6ff" }}>
            institutional adoption guide
          </Link>{" "}
          and the{" "}
          <Link href="/learn/morgan-stanley-bitcoin-etf-msbt-guide" style={{ color: "#58a6ff" }}>
            Morgan Stanley MSBT breakdown
          </Link>.
        </p>
      </section>

      {/* ── Section 5 ── */}
      <section className="mb-10" id="strategic-reserve">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--color-text)" }}
        >
          5. The US Strategic Bitcoin Reserve Factor
        </h2>
        <p
          className="mb-4"
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          The US government holds an estimated 328,000 BTC in its Strategic Reserve,
          established by executive order in March 2025. The policy frames Bitcoin as a
          &quot;permanent reserve asset&quot; that shall not be sold — language that mirrors
          how the US treats its gold reserves at Fort Knox.
        </p>
        <p
          className="mb-4"
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          The BITCOIN Act of 2025 proposes going further: acquiring 200,000 BTC per year
          for five years, targeting 1 million BTC total — roughly 5% of the total supply.
          Multiple US states including Texas and New Hampshire are racing to establish their
          own Bitcoin reserves.
        </p>
        <p
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          Sovereign adoption legitimizes the store-of-value thesis, but it hasn&apos;t
          changed BTC&apos;s short-term crisis behavior — yet. As more nations accumulate,
          the structural demand floor for Bitcoin rises, potentially reducing drawdowns
          during future shocks. Read our full{" "}
          <Link href="/learn/bitcoin-strategic-reserve-guide" style={{ color: "#58a6ff" }}>
            Bitcoin Strategic Reserve guide
          </Link>{" "}
          for the complete picture.
        </p>
      </section>

      {/* ── Section 6 ── */}
      <section className="mb-10" id="correlation">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--color-text)" }}
        >
          6. Correlation Data: What the Numbers Say
        </h2>
        <p
          className="mb-4"
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          The trailing 12-month correlation between Bitcoin and gold sits near zero (0.01),
          meaning the two assets move independently most of the time. During the acute Iran
          crisis, the correlation dropped to –0.88 — the most negative reading since late 2022,
          as gold surged while BTC fell.
        </p>
        <p
          className="mb-4"
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          Bitcoin&apos;s correlation with the S&P 500 remains elevated at approximately 0.65.
          This means BTC still moves more like equities than like gold or bonds during
          periods of market stress. The explanation is structural: many of the same
          institutions hold both tech stocks and BTC, and when they de-risk, they sell both.
        </p>
        <p
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          There is a silver lining. In late March, the BTC-gold correlation flipped positive
          for the first time in weeks — hinting that the market may be starting to treat
          Bitcoin less as a tech proxy. Whether this decoupling sticks will be one of the
          most important narratives to watch through mid-2026.
        </p>
      </section>

      {/* ── Section 7 ── */}
      <section className="mb-10" id="framework">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--color-text)" }}
        >
          7. A Better Framework: Crisis Hedge vs Debasement Hedge
        </h2>

        <div
          className="rounded-xl p-4 mb-6"
          style={{
            background: "#161b22",
            border: "1px solid #30363d",
            borderRadius: "12px",
          }}
        >
          <p
            className="text-sm font-bold mb-2"
            style={{ color: "#fbbf24" }}
          >
            The Key Distinction
          </p>
          <p
            className="text-sm"
            style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}
          >
            <strong style={{ color: "var(--color-text)" }}>Gold is the crisis hedge</strong>{" "}
            — it reliably rises when bombs drop, markets panic, and uncertainty spikes.{" "}
            <strong style={{ color: "var(--color-text)" }}>Bitcoin is the debasement hedge</strong>{" "}
            — it protects against long-term currency depreciation, monetary expansion, and the
            erosion of purchasing power over multi-year periods.
          </p>
        </div>

        <p
          className="mb-4"
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          This distinction matters for how you think about portfolio construction. If you
          need an asset that holds value during a sudden military escalation or banking
          crisis, gold (and to some extent US Treasuries) remains the proven choice. If
          you&apos;re worried about monetary debasement, fiscal deficits, and fiat currency
          depreciation over the next decade, Bitcoin&apos;s algorithmically fixed supply of
          21 million coins makes a compelling structural case.
        </p>
        <p
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          Think of it this way: gold protects your wealth when the world catches fire
          tomorrow. Bitcoin protects your wealth when governments print money for the
          next ten years. The 2026 data reinforces this framework perfectly — gold
          surged during the Iran conflict, while Bitcoin&apos;s long-term thesis (scarcity,
          sovereign adoption, institutional accumulation) remains intact despite the
          short-term drawdown.
        </p>
      </section>

      {/* ── Section 8 ── */}
      <section className="mb-10" id="portfolio">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--color-text)" }}
        >
          8. How to Position BTC in Your Portfolio
        </h2>
        <p
          className="mb-4"
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          Given the evidence, here&apos;s how many crypto-aware investors are thinking
          about allocation in 2026 (not financial advice — do your own research):
        </p>

        <div className="overflow-x-auto mb-6">
          <table
            className="w-full text-sm"
            style={{
              borderCollapse: "collapse",
              border: "1px solid #30363d",
              borderRadius: "12px",
            }}
          >
            <thead>
              <tr style={{ background: "#161b22" }}>
                <th className="text-left p-3 font-bold" style={{ color: "var(--color-text)", borderBottom: "1px solid #30363d" }}>Strategy</th>
                <th className="text-left p-3 font-bold" style={{ color: "var(--color-text)", borderBottom: "1px solid #30363d" }}>Approach</th>
                <th className="text-left p-3 font-bold" style={{ color: "var(--color-text)", borderBottom: "1px solid #30363d" }}>Best For</th>
              </tr>
            </thead>
            <tbody style={{ color: "var(--color-text-secondary)" }}>
              {[
                ["DCA Through Volatility", "Buy small amounts weekly regardless of price", "Long-term conviction holders"],
                ["Barbell: Gold + BTC", "Hold both gold (crisis) and BTC (debasement)", "Macro-aware investors"],
                ["ETF Allocation", "Use spot BTC ETFs for tax-advantaged exposure", "TradFi investors adding crypto"],
                ["Yield on Idle BTC", "Deploy BTC into BTCFi protocols for 3-8% APY", "Active DeFi participants"],
              ].map(([strategy, approach, best], i) => (
                <tr
                  key={i}
                  style={{ borderBottom: "1px solid #30363d" }}
                >
                  <td className="p-3 font-medium" style={{ color: "var(--color-text)" }}>{strategy}</td>
                  <td className="p-3">{approach}</td>
                  <td className="p-3">{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
        >
          Explore our{" "}
          <Link href="/tools/dca-calculator" style={{ color: "#58a6ff" }}>
            DCA calculator
          </Link>{" "}
          to model dollar-cost averaging scenarios, or check the{" "}
          <Link href="/tools/portfolio-tracker" style={{ color: "#58a6ff" }}>
            portfolio tracker
          </Link>{" "}
          to monitor your allocation in real time.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="mb-10" id="faq">
        <h2
          className="text-2xl font-bold mb-6"
          style={{ color: "var(--color-text)" }}
        >
          9. Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "Is Bitcoin a safe-haven asset in 2026?",
              a: "The data is mixed. BTC fell ~20% during the Iran conflict while gold surged past $5,000/oz. However, spot ETF inflows remained positive, suggesting institutions still view BTC as a long-term store of value. It's more accurate to call Bitcoin a debasement hedge than a crisis hedge.",
            },
            {
              q: "How did Bitcoin react to the Iran crisis?",
              a: "Bitcoin dropped from ~$126,000 (Oct 2025 ATH) to ~$68,000 by early March 2026 — a ~47% decline. The selloff accelerated alongside tech stocks and was amplified by $400M+ in derivatives liquidations.",
            },
            {
              q: "What's the Bitcoin-gold correlation?",
              a: "The trailing 12-month correlation is near zero (0.01). During the acute crisis it dropped to –0.88. More recently it's turned slightly positive, suggesting a potential shift in how markets classify BTC.",
            },
            {
              q: "Does the US Bitcoin Reserve make BTC safer?",
              a: "It legitimizes Bitcoin as a sovereign reserve asset (the US holds ~328,000 BTC), but hasn't changed BTC's short-term crisis behavior. It does create a structural demand floor that may reduce future drawdowns.",
            },
            {
              q: "Should I hold gold or Bitcoin?",
              a: "Many investors hold both. Gold performs better during sudden crises (crisis hedge). Bitcoin performs better against long-term monetary debasement (debasement hedge). Your allocation depends on your time horizon and risk tolerance. This is not financial advice.",
            },
            {
              q: "Is gold better than Bitcoin as a safe haven?",
              a: "In 2026, gold has outperformed BTC during geopolitical crises, breaching $5,000/oz. Gold benefits from millennia of adoption and deep central-bank liquidity. Bitcoin offers algorithmic scarcity and 24/7 liquidity but remains more volatile short-term.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="rounded-xl p-4"
              style={{
                background: "#161b22",
                border: "1px solid #30363d",
                borderRadius: "12px",
              }}
            >
              <h3
                className="font-bold mb-2"
                style={{ color: "var(--color-text)" }}
              >
                {faq.q}
              </h3>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related ── */}
      <div
        className="rounded-xl p-5"
        style={{
          background: "#161b22",
          border: "1px solid #30363d",
          borderRadius: "12px",
        }}
      >
        <h2
          className="text-sm font-bold mb-3 uppercase tracking-wide"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Related Guides
        </h2>
        <div className="space-y-2 text-sm">
          {[
            { href: "/learn/bitcoin-strategic-reserve-guide", label: "Bitcoin Strategic Reserve: Why Governments Are Stacking BTC" },
            { href: "/learn/bitcoin-etf-guide-2026", label: "Bitcoin ETF Guide 2026" },
            { href: "/learn/tokenized-gold-guide-2026", label: "Tokenized Gold Guide: XAUT, PAXG & Digital Gold" },
            { href: "/learn/crypto-risk-management-guide-2026", label: "Crypto Risk Management Guide" },
            { href: "/learn/btc-yield-earning-strategies-guide-2026", label: "BTC Yield & BTCFi Earning Strategies 2026" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block hover:underline"
              style={{ color: "#58a6ff" }}
            >
              {link.label}
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
      </article>
  );
}
