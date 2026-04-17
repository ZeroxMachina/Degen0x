import { Metadata } from "next";
import FundingRateTracker from "@/components/FundingRateTracker";
import Breadcrumb from "@/components/Breadcrumb";
import { generateToolPageSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Crypto Funding Rate Tracker - Compare Perp Rates Across Exchanges | degen0x",
  description:
    "Track real-time perpetual futures funding rates across Binance, Bybit, OKX, Bitget, dYdX & Hyperliquid. Compare 8h and annualized rates for BTC, ETH, SOL & more. Free, no signup.",
  keywords:
    "funding rate tracker, perpetual futures funding, crypto funding rates, binance funding rate, bybit funding rate, funding rate arbitrage, perp funding, bitcoin funding rate",
  openGraph: {
    title: "Crypto Funding Rate Tracker - Compare Rates Across Exchanges",
    description:
      "Compare perpetual futures funding rates across 6 major exchanges. Spot arbitrage opportunities with real-time data.",
    url: "https://degen0x.com/tools/funding-rate-tracker",
    type: "website",
    images: [
      {
        url: "https://degen0x.com/og-funding-rate-tracker.svg",
        width: 1200,
        height: 630,
        alt: "degen0x Funding Rate Tracker - Compare crypto perp funding rates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Funding Rate Tracker | degen0x",
    description:
      "Compare perpetual futures funding rates across Binance, Bybit, OKX & more. Spot funding rate arbitrage.",
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────
const toolSchema = generateToolPageSchema({
  name: "Crypto Funding Rate Tracker",
  description:
    "Track and compare perpetual futures funding rates across major crypto exchanges including Binance, Bybit, OKX, Bitget, dYdX, and Hyperliquid.",
  url: "https://degen0x.com/tools/funding-rate-tracker",
  category: "FinanceApplication",
  image: "https://degen0x.com/og-funding-rate-tracker.png",
  aggregateRating: { ratingValue: 4.7, ratingCount: 890 },
});

const faqSchema = generateFAQSchema([
  {
    question: "What is a crypto funding rate?",
    answer:
      "A funding rate is a periodic payment between long and short traders in perpetual futures markets. It keeps the futures price close to the spot price. When the rate is positive, longs pay shorts. When negative, shorts pay longs. Payments typically occur every 8 hours.",
  },
  {
    question: "How often do funding rates change?",
    answer:
      "Funding rates are recalculated and settled every 8 hours on most centralized exchanges (Binance, Bybit, OKX). Some decentralized exchanges like dYdX settle every hour, while Hyperliquid settles every 8 hours. The rate fluctuates based on the premium between futures and spot prices.",
  },
  {
    question: "What is funding rate arbitrage?",
    answer:
      "Funding rate arbitrage involves buying an asset on the spot market while simultaneously shorting it on a perpetual futures exchange with a high positive funding rate. You earn the funding payments while staying market-neutral since your spot position hedges price risk. Annualized returns of 10-30% are possible during high-funding periods.",
  },
  {
    question: "What does a high positive funding rate mean?",
    answer:
      "A high positive funding rate (above 0.01% per 8h) indicates bullish market sentiment — more traders are long than short, and they're willing to pay a premium to hold their positions. This can signal overheated markets and potential for a pullback.",
  },
  {
    question: "Which exchange has the lowest funding rates?",
    answer:
      "Funding rates vary by exchange and change every 8 hours. Generally, exchanges with higher open interest like Binance and Bybit have more stable funding rates. Decentralized exchanges like dYdX and Hyperliquid may have different rate structures. Use our tracker to compare rates in real-time across all major exchanges.",
  },
  {
    question: "Can you make money from funding rates?",
    answer:
      "Yes. Traders use funding rate arbitrage strategies to earn consistent yield. By holding a spot position and shorting the same asset on a perp exchange with positive funding, you collect funding payments every 8 hours while staying delta-neutral. This strategy works best during bullish markets when funding rates are consistently positive.",
  },
]);

const schemas = combineSchemas([toolSchema, faqSchema]);

// ─── Component ───────────────────────────────────────────────────────────────
export default function FundingRateTrackerPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <StructuredData data={schemas} />
      <div
        style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem 4rem" }}
      >
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Funding Rate Tracker" },
          ]}
        />

        {/* ── Header ── */}
        <div style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              background: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              borderRadius: 20,
              fontSize: 12,
              color: "var(--color-primary)",
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            DERIVATIVES
          </div>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 900,
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
            }}
          >
            Crypto Funding Rate Tracker
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.6,
              marginTop: 8,
            }}
          >
            Compare perpetual futures funding rates across Binance, Bybit, OKX,
            Bitget, dYdX &amp; Hyperliquid. Spot arbitrage opportunities and
            gauge market sentiment in real time.
          </p>
        </div>

        <FundingRateTracker />

        {/* ── How It Works ── */}
        <div style={{ marginTop: 48, marginBottom: 32 }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "var(--color-text)",
              marginBottom: 16,
            }}
          >
            How Funding Rates Work
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {[
              {
                step: "1",
                title: "Price Diverges",
                desc: "When the perpetual futures price trades above spot, the funding rate turns positive. Longs pay shorts to bring prices back in line.",
              },
              {
                step: "2",
                title: "Payments Settle",
                desc: "Every 8 hours (on most exchanges), funding payments are automatically exchanged between long and short position holders.",
              },
              {
                step: "3",
                title: "Equilibrium Restores",
                desc: "The payment mechanism incentivizes traders to take the opposite side, pushing the futures price back toward spot price.",
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "var(--glass-radius-sm)",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "rgba(99, 102, 241, 0.15)",
                    color: "#818cf8",
                    fontWeight: 800,
                    fontSize: 14,
                    marginBottom: 12,
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--color-text)",
                    marginBottom: 6,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
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


        {/* ── FAQ Section ── */}
        <div style={{ marginTop: 48 }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "var(--color-text)",
              marginBottom: 20,
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              {
                q: "What is a crypto funding rate?",
                a: "A funding rate is a periodic payment between long and short traders in perpetual futures markets. It keeps the futures price close to the spot price. When the rate is positive, longs pay shorts; when negative, shorts pay longs.",
              },
              {
                q: "How can I profit from funding rates?",
                a: "The most common strategy is funding rate arbitrage: buy an asset on spot while shorting the same asset on a perp exchange with high positive funding. You collect payments every 8 hours while staying market-neutral. Annualized returns of 10-30% are possible during bullish periods.",
              },
              {
                q: "What does a negative funding rate mean?",
                a: "A negative funding rate means shorts are paying longs — more traders are betting on a price decline. This can signal oversold conditions or extreme fear in the market, and often precedes price recoveries.",
              },
              {
                q: "How often are funding rates paid?",
                a: "Most centralized exchanges (Binance, Bybit, OKX) settle funding every 8 hours. Some decentralized exchanges like dYdX settle hourly. The rate is calculated based on the premium/discount between the perpetual price and the spot index.",
              },
              {
                q: "Why do funding rates differ across exchanges?",
                a: "Each exchange has its own user base and open interest composition. An exchange with more retail longs will have higher positive funding than one with more institutional shorts. These differences create arbitrage opportunities for savvy traders.",
              },
              {
                q: "Is funding rate arbitrage risk-free?",
                a: "Not entirely. While the strategy is delta-neutral (hedged against price moves), risks include: liquidation of the short position during sharp spikes, exchange counterparty risk, withdrawal delays, and trading fees eating into profits. Always use proper position sizing.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                style={{
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "var(--glass-radius-sm)",
                  padding: "1.25rem",
                }}
              >
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--color-text)",
                    marginBottom: 8,
                  }}
                >
                  {faq.q}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RelatedContent category="tools" currentSlug="/tools/funding-rate-tracker" />
    </div>
  );
}
