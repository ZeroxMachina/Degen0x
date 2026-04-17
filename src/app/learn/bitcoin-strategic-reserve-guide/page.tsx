import { Metadata } from "next";
import Link from "next/link";
import SovereignBTCTracker from "@/components/SovereignBTCTracker";
import {
  generateArticleSchema,
  generateFAQSchema,
  combineSchemas,
} from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import { SITE_URL } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


export const metadata: Metadata = {
  title: "Bitcoin Strategic Reserve 2026: Which Countries Are Holding BTC",
  description:
    "The US formally established a 325,000 BTC strategic reserve in March 2026. Learn which countries are building Bitcoin reserves, why governments are buying BTC, and what it means for price.",
  openGraph: {
    title: "Bitcoin Strategic Reserve 2026: Governments Stacking BTC",
    description:
      "The US holds 325,000 BTC. Brazil wants 1 million. Bhutan mines it with hydropower. Here's the full breakdown of sovereign Bitcoin reserves.",
    url: `${SITE_URL}/learn/bitcoin-strategic-reserve-guide`,
    type: "article",
    publishedTime: "2026-03-15T00:00:00Z",
    modifiedTime: "2026-03-15T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: `${SITE_URL}/api/og?title=Bitcoin+Strategic+Reserve&category=Bitcoin&type=learn`,
        width: 1200,
        height: 630,
        alt: "Bitcoin Strategic Reserve Guide 2026 — degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Strategic Reserve 2026: Which Countries Are Holding BTC",
    description:
      "The US holds 325,000 BTC. Brazil wants 1M. Bhutan mines with hydro. Full guide to sovereign Bitcoin reserves.",
    images: [`${SITE_URL}/api/og?title=Bitcoin+Strategic+Reserve&category=Bitcoin&type=learn`],
  },
};

const articleSchema = generateArticleSchema({
  title: "Bitcoin Strategic Reserve 2026: Which Countries Are Holding BTC",
  description:
    "The US formally established a 325,000 BTC strategic reserve in March 2026. Learn which countries are building Bitcoin reserves and what it means for price and adoption.",
  url: `${SITE_URL}/learn/bitcoin-strategic-reserve-guide`,
  datePublished: "2026-03-15T00:00:00Z",
  dateModified: "2026-03-15T00:00:00Z",
  author: "degen0x Team",
  image: `${SITE_URL}/api/og?title=Bitcoin+Strategic+Reserve&category=Bitcoin&type=learn`,
  wordCount: 2600,
});

const faqSchema = generateFAQSchema([
  {
    question: "Can the US government sell its Bitcoin reserve?",
    answer:
      "Technically yes — the executive framework establishing the reserve doesn't prevent a future administration from liquidating holdings. However, the current policy frames the reserve as a long-term strategic asset. Legislative codification would be needed for permanent protection.",
  },
  {
    question: "How much Bitcoin does the US government hold?",
    answer:
      "As of March 2026, the US government holds an estimated 325,000–328,000 BTC, accumulated primarily through law enforcement seizures of darknet markets and crypto fraud cases. This makes the US the largest known sovereign Bitcoin holder.",
  },
  {
    question: "What is a Bitcoin strategic reserve?",
    answer:
      "A Bitcoin strategic reserve is a government's decision to hold Bitcoin as an official state asset — similar to how central banks hold gold or foreign currencies. Instead of keeping value in a vault, the state holds private keys to wallets containing Bitcoin.",
  },
  {
    question: "Which country was first to have a Bitcoin strategic reserve?",
    answer:
      "El Salvador was the first country to formally hold Bitcoin as a sovereign asset, making it legal tender in September 2021. The US formalized its Strategic Bitcoin Reserve in early 2026, making it the largest holder by volume.",
  },
  {
    question: "Does the US government buying Bitcoin make it more centralized?",
    answer:
      "Not technically — the Bitcoin network's rules don't change based on who holds BTC. However, a government holding 1.6% of supply does create concentration risk and potential for policy influence. The community debate around this is ongoing.",
  },
  {
    question: "What's the difference between a Bitcoin reserve and legal tender?",
    answer:
      "El Salvador made Bitcoin legal tender, meaning merchants are required to accept it for payment. A strategic reserve simply means a government holds BTC as a financial asset — it says nothing about domestic payment obligations.",
  },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

export default function BitcoinStrategicReserveGuidePage() {
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
            style={{ background: "#6366f120", color: "#6366f1" }}
          >
            Macro
          </span>
          <span
            style={{ background: "#22c55e20", color: "#22c55e" }}
          >
            Intermediate
          </span>
          <span
            style={{ background: "#0ea5e920", color: "#0ea5e9" }}
          >
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
          Bitcoin Strategic Reserve: Why Governments Are Stacking BTC in 2026
        </h1>

        <p
          className="text-lg"
          style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}
        >
          In March 2026 the United States formally established a Strategic Bitcoin Reserve, holding
          over 325,000 BTC worth more than $21 billion. Multiple other nations are following. Here's
          what a Bitcoin strategic reserve actually is, who's building one, and what it means for the
          market.
        </p>

        <p
          className="text-sm mt-3"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Updated March 2026 · 9 min read
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
          ₿ Sovereign BTC Holdings (March 2026)
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "US Government BTC", value: "~325,000 BTC" },
            { label: "El Salvador BTC", value: "~7,508 BTC" },
            { label: "Total Govt Holdings", value: ">460,000 BTC" },
            { label: "% of Total Supply", value: "~2.3%" },
            { label: "Brazil Proposed Target", value: "1,000,000 BTC" },
            { label: "Countries with Plans", value: "5+" },
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
          publishedDate="2026-03-15"
          updatedDate="2026-03-15"
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
        ⚠️ This guide is for informational purposes only and does not constitute financial or
        investment advice. Always do your own research before making any investment decisions.
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
          style={{ color: "var(--color-text-secondary)" }}
        >
          Table of Contents
        </h2>
        <ol className="space-y-1 text-sm" style={{ color: "#6366f1" }}>
          {[
            ["#what-is", "What Is a Bitcoin Strategic Reserve?"],
            ["#us-reserve", "The US Strategic Bitcoin Reserve"],
            ["#other-countries", "Other Countries Building Bitcoin Reserves"],
            ["#why-bitcoin", "Why Bitcoin and Not Other Crypto?"],
            ["#market-impact", "Market Impact: What Sovereign Buying Means"],
            ["#risks", "Risks and Criticisms"],
            ["#faq", "FAQ"],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} style={{ color: "#6366f1" }}>
                {label}
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>

        {/* Section 1 */}
        <h2
          id="what-is"
          className="text-xl font-extrabold mt-10 mb-3"
          style={{ color: "var(--color-text)" }}
        >
          1. What Is a Bitcoin Strategic Reserve?
        </h2>
        <p className="mb-4">
          A <strong style={{ color: "var(--color-text)" }}>Bitcoin strategic reserve</strong> is a
          government's decision to hold Bitcoin as an official state asset — similar to how central
          banks hold gold or foreign currencies like USD and EUR as reserves. Instead of keeping
          value in a vault or a foreign bank account, the state holds private keys to wallets
          containing Bitcoin.
        </p>
        <p className="mb-4">
          The concept isn't entirely new: El Salvador made Bitcoin legal tender in 2021 and has been
          accumulating BTC ever since. But 2025–2026 marked a turning point. The United States
          formalized a Strategic Bitcoin Reserve under executive authority, and a wave of other
          nations followed with proposals, legislation, and outright acquisition programs.
        </p>
        <p className="mb-4">
          The core argument for a Bitcoin reserve mirrors the case for gold: Bitcoin is scarce (capped
          at 21 million coins), globally portable, uncensorable, and not controlled by any single
          government. For countries concerned about dollar dependence or currency debasement, Bitcoin
          offers a neutral reserve asset outside the traditional financial system.
        </p>

        {/* Info box */}
        <div
          className="rounded-xl p-4 mb-6 text-sm"
          style={{
            background: "#161b22",
            border: "1px solid #30363d",
            borderRadius: "12px",
          }}
        >
          <strong style={{ color: "#f7931a" }}>💡 Key Concept: Reserve Assets</strong>
          <p className="mt-2" style={{ color: "var(--color-text-secondary)" }}>
            Reserve assets are stores of value held by governments to support their currency,
            absorb economic shocks, and settle international obligations. Traditionally these are
            USD, EUR, gold, and IMF Special Drawing Rights. Bitcoin is the first new reserve asset
            class to gain serious sovereign adoption in decades.
          </p>
        </div>

        {/* Section 2 */}
        <h2
          id="us-reserve"
          style={{ color: "var(--color-text)" }}
        >
          2. The US Strategic Bitcoin Reserve
        </h2>
        <p className="mb-4">
          The US government's Bitcoin holdings didn't start as a strategic reserve — they accumulated
          through law enforcement seizures. Over years of prosecuting darknet markets, ransomware
          operators, and crypto fraud cases, the DOJ and other agencies confiscated hundreds of
          thousands of BTC. Rather than immediately auctioning it (as was the practice with the
          Silk Road and Bitfinex seizures), the Treasury formalized these holdings into an official
          Strategic Bitcoin Reserve in early 2026.
        </p>
        <p className="mb-4">
          As of March 2026, the US holds an estimated{" "}
          <strong style={{ color: "var(--color-text)" }}>325,000–328,000 BTC</strong>, making it
          the largest known sovereign Bitcoin holder in the world. This represents approximately 1.6%
          of Bitcoin's total 21 million supply.
        </p>
        <p className="mb-4">
          The reserve is managed under a "digital Fort Knox" framework: holdings are custodied with
          institutional-grade security, audited, and not intended for sale. The policy signal is
          clear — the US government views Bitcoin as a long-term strategic asset, not a confiscated
          item to be liquidated.
        </p>

        <SovereignBTCTracker />

        {/* Stats table */}
        <div className="overflow-x-auto mb-6">
          <table
            className="w-full text-sm"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid var(--color-border)" }}>
                {["Country", "BTC Holdings", "How Acquired", "Status"].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left py-3 px-3 text-xs font-bold uppercase"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  country: "🇺🇸 United States",
                  btc: "~325,000",
                  how: "Law enforcement seizures",
                  status: "Active Reserve (est. March 2026)",
                },
                {
                  country: "🇸🇻 El Salvador",
                  btc: "~7,508",
                  how: "Treasury purchases",
                  status: "Active (since 2021)",
                },
                {
                  country: "🇧🇹 Bhutan",
                  btc: "~13,000+",
                  how: "State hydropower mining",
                  status: "Active (since 2019)",
                },
                {
                  country: "🇧🇷 Brazil",
                  btc: "Proposed",
                  how: "Legislation (RESBit bill)",
                  status: "Proposal (up to 1M BTC over 5 yrs)",
                },
                {
                  country: "🇵🇰 Pakistan",
                  btc: "Proposed",
                  how: "Government directive",
                  status: "Announced 2026",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: "1px solid var(--color-border)",
                    background: i % 2 === 0 ? "transparent" : "#ffffff05",
                  }}
                >
                  <td className="py-3 px-3 font-medium" style={{ color: "var(--color-text)" }}>
                    {row.country}
                  </td>
                  <td className="py-3 px-3" style={{ color: "#f7931a" }}>
                    {row.btc}
                  </td>
                  <td className="py-3 px-3">{row.how}</td>
                  <td className="py-3 px-3">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 3 */}
        <h2
          id="other-countries"
          style={{ color: "var(--color-text)" }}
        >
          3. Other Countries Building Bitcoin Reserves
        </h2>
        <p className="mb-4">
          The US formalization of its reserve has catalyzed activity globally. Here's where other
          nations stand:
        </p>

        <h3 className="text-lg font-bold mt-6 mb-2" style={{ color: "var(--color-text)" }}>
          🇸🇻 El Salvador
        </h3>
        <p className="mb-4">
          The pioneer. El Salvador made Bitcoin legal tender in September 2021 under President Nayib
          Bukele — the first country in history to do so. The country's National Bitcoin Office
          maintains a public tracker showing treasury holdings. Despite pressure from the IMF to
          roll back its Bitcoin policies, El Salvador continues to accumulate. As of December 2025,
          the treasury held 7,508 BTC. The country also runs a "Bitcoin bonds" program to fund
          infrastructure with Bitcoin-backed debt.
        </p>

        <h3 className="text-lg font-bold mt-6 mb-2" style={{ color: "var(--color-text)" }}>
          🇧🇹 Bhutan
        </h3>
        <p className="mb-4">
          Perhaps the most quietly aggressive sovereign miner. Bhutan's government-owned Druk
          Holding & Investments has been using surplus hydropower to mine Bitcoin since at least
          2019. Estimates place their holdings above 13,000 BTC. Bhutan mines BTC at near-zero
          marginal cost thanks to abundant renewable energy — a model other small nations with
          cheap electricity are now studying.
        </p>

        <h3 className="text-lg font-bold mt-6 mb-2" style={{ color: "var(--color-text)" }}>
          🇧🇷 Brazil
        </h3>
        <p className="mb-4">
          Brazil's Congress reintroduced the RESBit bill in February 2026, proposing to accumulate
          up to 1 million Bitcoin over five years — roughly 5% of total supply. If passed, this
          would represent the most aggressive sovereign accumulation program ever proposed. The bill
          frames Bitcoin as "digital gold" and a hedge against dollar dependence. As of March 2026,
          the legislation is under review.
        </p>

        <h3 className="text-lg font-bold mt-6 mb-2" style={{ color: "var(--color-text)" }}>
          🇵🇰 Pakistan
        </h3>
        <p className="mb-4">
          Pakistan announced the creation of a government-led Strategic Bitcoin Reserve in 2026,
          signaling a significant policy shift. Pakistan has historically had complicated
          relationships with cryptocurrency — it briefly banned trading before reversing course.
          The new reserve announcement reflects a broader recalibration among emerging market
          nations seeking alternatives to USD-denominated reserves.
        </p>

        {/* Section 4 */}
        <h2
          id="why-bitcoin"
          style={{ color: "var(--color-text)" }}
        >
          4. Why Bitcoin and Not Other Crypto?
        </h2>
        <p className="mb-4">
          Every country building a sovereign reserve has chosen Bitcoin specifically — not Ethereum,
          Solana, or any other cryptocurrency. This isn't arbitrary. Bitcoin has several properties
          that make it uniquely suited to function as a reserve asset:
        </p>

        <div className="space-y-3 mb-6">
          {[
            {
              icon: "🔒",
              title: "Hard Cap of 21 Million",
              desc: "No government, developer, or company can inflate Bitcoin's supply. The monetary policy is enforced by code, not institutions. Central banks can print dollars and euros; nobody can print more Bitcoin.",
            },
            {
              icon: "⏱️",
              title: "15-Year Track Record",
              desc: "Bitcoin has operated continuously since January 2009 without a single successful network-level hack. No other crypto asset has this length of uninterrupted operation under adversarial conditions.",
            },
            {
              icon: "🌐",
              title: "Decentralization and Neutrality",
              desc: "Bitcoin has no central issuer, no CEO, and no headquarters. It can't be sanctioned at the protocol level. For countries wary of dollar weaponization, this neutrality is a feature, not a bug.",
            },
            {
              icon: "💧",
              title: "Deep Liquidity",
              desc: "Bitcoin trades $50B+ daily across hundreds of venues globally. A sovereign reserve needs to be liquidatable in an emergency without crashing the price — Bitcoin is one of few crypto assets deep enough to handle that.",
            },
            {
              icon: "🏛️",
              title: "Regulatory Recognition",
              desc: "The launch of spot Bitcoin ETFs in the US (2024) and the formal US strategic reserve (2026) have effectively given Bitcoin state-level legitimacy. That makes it much easier for foreign governments to justify holding it.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl"
              style={{
                background: "#161b22",
                border: "1px solid #30363d",
                borderRadius: "12px",
              }}
            >
              <div
                className="font-bold mb-1"
                style={{ color: "var(--color-text)" }}
              >
                {item.icon} {item.title}
              </div>
              <div className="text-sm">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Section 5 */}
        <h2
          id="market-impact"
          style={{ color: "var(--color-text)" }}
        >
          5. Market Impact: What Sovereign Buying Means
        </h2>
        <p className="mb-4">
          Governments holding Bitcoin changes the market dynamics in ways that compound over time.
          Here's the supply/demand math: approximately 460,000+ BTC is already locked in sovereign
          reserves and likely not for sale. US ETFs hold another ~1.2 million BTC. Long-term
          HODLers hold millions more. The result: the effective liquid supply of Bitcoin shrinks
          while demand from both institutions and governments grows.
        </p>
        <p className="mb-4">
          The "game theory" effect may matter even more than the direct buying. When the US
          establishes a Bitcoin reserve, it creates pressure on other nations to do the same before
          the price climbs further. Brazil's proposed 1 million BTC target captures this logic
          explicitly: accumulate now while it's still possible, or regret it later. This sovereign
          FOMO dynamic is structurally different from retail or institutional buying cycles.
        </p>
        <p className="mb-4">
          It's also worth noting what government reserves signal to the corporate world. Microsoft,
          MicroStrategy (now Strategy), and dozens of public companies have added Bitcoin to their
          treasuries. Sovereign reserves validate the "digital gold" thesis at the highest political
          level, potentially unlocking a new wave of institutional and corporate adoption.
        </p>

        {/* Info box */}
        <div
          style={{
            background: "#161b22",
            border: "1px solid #30363d",
            borderRadius: "12px",
          }}
        >
          <strong style={{ color: "#22c55e" }}>📊 Supply Context</strong>
          <p className="mt-2" style={{ color: "var(--color-text-secondary)" }}>
            As of March 2026, the 20 millionth Bitcoin was mined — a symbolic milestone that
            highlights just how close we are to the 21M hard cap. With ~1M BTC left to mine over
            ~120 years and governments competing to accumulate, the supply crunch narrative has
            never had more structural support. See our{" "}
            <Link href="/learn/bitcoin-20-million-supply-milestone"
              style={{ color: "#6366f1" }}
            >
              Bitcoin 20 Million Supply Milestone guide
            </Link>
            .
          </p>
        </div>

        {/* Section 6 */}
        <h2
          id="risks"
          style={{ color: "var(--color-text)" }}
        >
          6. Risks and Criticisms
        </h2>
        <p className="mb-4">
          The strategic reserve narrative isn't without critics. Here are the substantive concerns:
        </p>

        <div className="space-y-4 mb-6">
          <div
            style={{
              background: "#161b22",
              border: "1px solid #f7453620",
              borderRadius: "12px",
            }}
          >
            <div className="font-bold mb-1" style={{ color: "#f74536" }}>
              ⚡ Volatility Risk
            </div>
            <p className="text-sm">
              Bitcoin regularly drops 40–70% in bear markets. A country holding 325,000 BTC at $65K
              (~$21B) could see that value fall to $8B in a prolonged bear cycle. Unlike gold,
              Bitcoin has no industrial use floor. Countries holding BTC accept mark-to-market
              swings that would be intolerable in traditional reserves.
            </p>
          </div>
          <div
            style={{
              background: "#161b22",
              border: "1px solid #f7453620",
              borderRadius: "12px",
            }}
          >
            <div className="font-bold mb-1" style={{ color: "#f74536" }}>
              🔑 Custody and Security
            </div>
            <p className="text-sm">
              Nation-state custody of Bitcoin introduces unique risks: insider threats, key
              management failures, and the ever-present risk of a nation-state level attack. If a
              government loses its private keys, those Bitcoin are gone forever. No bailout, no
              FDIC. The US approach involves multi-institution custody, but details of the
              operational security remain classified.
            </p>
          </div>
          <div
            style={{
              background: "#161b22",
              border: "1px solid #f7453620",
              borderRadius: "12px",
            }}
          >
            <div className="font-bold mb-1" style={{ color: "#f74536" }}>
              🏛️ Political and Regulatory Risk
            </div>
            <p className="text-sm">
              A future administration could reverse the reserve policy. Executive actions can be
              undone with executive actions. Legislation would provide more durable protection, but
              as of March 2026 the US reserve remains primarily executive-order-based. Similarly,
              many nations' proposed reserves depend on bills that have not yet passed.
            </p>
          </div>
          <div
            style={{
              background: "#161b22",
              border: "1px solid #f7453620",
              borderRadius: "12px",
            }}
          >
            <div className="font-bold mb-1" style={{ color: "#f74536" }}>
              🤔 Opportunity Cost
            </div>
            <p className="text-sm">
              Critics argue that governments could deploy the same capital into infrastructure,
              healthcare, or education with more reliable returns. Bitcoin's value is speculative by
              nature. A country that bought BTC at $100K and watches it drop to $30K faces real
              political consequences.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <h2
          id="faq"
          className="text-xl font-extrabold mt-10 mb-4"
          style={{ color: "var(--color-text)" }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 mb-10">
          {[
            {
              q: "Can the US government sell its Bitcoin reserve?",
              a: "Technically yes — the executive framework establishing the reserve doesn't prevent a future administration from liquidating holdings. However, the current policy frames the reserve as a long-term strategic asset. Legislative codification would be needed for permanent protection.",
            },
            {
              q: "How does the US government custody its Bitcoin?",
              a: "Specifics are not fully public, but the framework references multi-institution custody with institutional-grade security protocols. The approach is likely similar to how agencies custody other confiscated assets — with multiple signing authorities required for any movement.",
            },
            {
              q: "Does the US government buying Bitcoin make it more centralized?",
              a: "Not technically — the Bitcoin network's rules don't change based on who holds BTC. However, a government holding 1.6% of supply does create concentration risk and potential for policy influence. The community debate around this is ongoing.",
            },
            {
              q: "What's the difference between a Bitcoin reserve and legal tender?",
              a: "El Salvador made Bitcoin legal tender, meaning merchants are required to accept it for payment. A strategic reserve simply means a government holds BTC as a financial asset — it says nothing about domestic payment obligations.",
            },
            {
              q: "Could China or Russia build a Bitcoin reserve?",
              a: "China banned domestic Bitcoin trading in 2021, but some analysts believe the government still holds seized BTC from exchange raids. Russia has shown interest in using crypto for sanctions evasion. The geopolitical dimension of Bitcoin reserves is developing in real time.",
            },
            {
              q: "What happens to Bitcoin price if more nations build reserves?",
              a: "Basic supply/demand would suggest upward pressure — more demand for a fixed supply. But the actual effect depends on timing, size of purchases, and overall macro conditions. This is not a guarantee; Bitcoin can still drop sharply even as adoption grows.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="p-5 rounded-xl"
              style={{
                background: "#161b22",
                border: "1px solid #30363d",
                borderRadius: "12px",
              }}
            >
              <div
                className="font-bold mb-2"
                style={{ color: "var(--color-text)" }}
              >
                {faq.q}
              </div>
              <div className="text-sm">{faq.a}</div>
            </div>
          ))}
        </div>

        {/* Related Articles */}
        <div
          className="rounded-xl p-5"
          style={{
            background: "#161b22",
            border: "1px solid #30363d",
            borderRadius: "12px",
          }}
        >
          <h3
            style={{ color: "var(--color-text-secondary)" }}
          >
            Related Guides
          </h3>
          <div className="space-y-2 text-sm">
            {[
              ["/learn/bitcoin-etf-guide-2026", "Bitcoin ETF Guide 2026"],
              ["/learn/bitcoin-20-million-supply-milestone", "Bitcoin 20 Million Supply Milestone"],
              ["/learn/real-world-assets-rwa-guide", "Real-World Assets (RWA) Guide"],
              ["/learn/crypto-etfs-guide", "Crypto ETFs: Complete Guide"],
              ["/tools/dca-calculator", "Bitcoin DCA Calculator"],
            ].map(([href, label]) => (
              <div key={href}>
                <Link href={href} style={{ color: "#6366f1" }}>
                  → {label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/investing/best-gaming-crypto-tokens" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Best Gaming Crypto Tokens</a></li>
            <li><a href="/investing/best-restaking-tokens-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Best Restaking Tokens 2026</a></li>
            <li><a href="/investing/crypto-dollar-cost-averaging-vs-lump-sum" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Dollar Cost Averaging Vs Lump Sum</a></li>
            <li><a href="/investing/crypto-sentiment-analysis-investing" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Sentiment Analysis Investing</a></li>
          </ul>
        </nav>

        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      <RelatedContent category="learn" currentSlug="/learn/bitcoin-strategic-reserve-guide" />
      </article>
  );
}
