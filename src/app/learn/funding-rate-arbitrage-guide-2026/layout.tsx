import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funding Rate Arbitrage Guide 2026: Delta-Neutral Perp Strategies | degen0x",
  description:
    "Master funding rate arbitrage for perpetual futures. Cash-and-carry, cross-exchange arb, delta-neutral strategies. 5-25% APY depending on market conditions. Covers Binance, Hyperliquid, dYdX, GMX.",
  keywords: [
    "funding rate arbitrage",
    "perpetual futures arbitrage",
    "delta neutral strategy",
    "cash and carry trade crypto",
    "funding rate strategy",
    "perp arbitrage",
    "crypto arbitrage 2026",
    "funding rate trading",
    "Hyperliquid funding",
    "dYdX funding rates",
    "cross exchange arbitrage",
    "delta neutral crypto",
    "perpetual futures strategy",
    "funding rate APY",
  ],
  openGraph: {
    title: "Funding Rate Arbitrage Guide 2026: Delta-Neutral Perp Strategies",
    description:
      "Complete guide to funding rate arbitrage. Cash-and-carry, cross-exchange arb, and delta-neutral strategies for 5-25% APY on perpetual futures.",
    url: "https://degen0x.com/learn/funding-rate-arbitrage-guide-2026",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    modifiedTime: "2026-03-25T00:00:00Z",
    authors: ["degen0x Team"],
    images: [{ url: "https://degen0x.com/og-funding-rate-arbitrage-guide-2026.svg", width: 1200, height: 630, alt: "Funding Rate Arbitrage Guide 2026 — degen0x" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funding Rate Arbitrage Guide 2026 | degen0x",
    description:
      "Delta-neutral perp strategies: cash-and-carry, cross-exchange arb, and funding rate capture. 5-25% APY with managed risk.",
    images: ["https://degen0x.com/og-funding-rate-arbitrage-guide-2026.svg"],
  },
};

export default function FundingRateArbitrageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Funding Rate Arbitrage Guide 2026: Delta-Neutral Strategies for Perpetual Futures",
            description:
              "Complete guide to funding rate arbitrage strategies for perpetual futures. Covers cash-and-carry, cross-exchange arbitrage, delta-neutral approaches, risk management, and expected returns across market conditions.",
            image: "https://degen0x.com/og-funding-rate-arbitrage-guide-2026.svg",
            datePublished: "2026-03-25T00:00:00Z",
            dateModified: "2026-03-25T00:00:00Z",
            author: {
              "@type": "Organization",
              name: "degen0x",
              url: "https://degen0x.com",
            },
            publisher: {
              "@type": "Organization",
              name: "degen0x",
              url: "https://degen0x.com",
            },
            mainEntity: {
              "@type": "Thing",
              name: "Funding Rate Arbitrage",
              description: "Trading strategy that captures periodic funding rate payments on perpetual futures through delta-neutral positioning",
            },
            keywords: [
              "funding rate arbitrage",
              "perpetual futures",
              "delta neutral",
              "cash and carry",
              "cross exchange arbitrage",
              "crypto trading strategy",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is funding rate arbitrage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Funding rate arbitrage is a trading strategy that captures periodic funding rate payments on perpetual futures exchanges. By holding opposing positions (e.g., long spot and short perpetual), traders earn the funding rate while remaining market-neutral. Returns typically range from 5-25% APY depending on market conditions.",
                },
              },
              {
                "@type": "Question",
                name: "How much can you make from funding rate arbitrage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Expected returns vary by market conditions: 15-25% APY during bull markets with elevated funding rates, 5-12% APY in normal markets, and 2-5% APY in bear markets. Current returns (March 2026) are in the 2-6% APY range due to compressed funding rates.",
                },
              },
              {
                "@type": "Question",
                name: "What is a cash-and-carry trade in crypto?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A cash-and-carry trade involves buying an asset on the spot market and simultaneously shorting it on a perpetual futures exchange. When funding rates are positive (longs pay shorts), you collect funding payments while your spot position hedges against price movement. It's the most common and safest funding rate arbitrage strategy.",
                },
              },
              {
                "@type": "Question",
                name: "What are the risks of funding rate arbitrage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Key risks include: liquidation risk if margin is insufficient during volatile moves, basis risk from spot-perp price divergence, funding rate reversal where rates flip against your position, exchange/counterparty risk, and gas costs on DEX platforms. Maintaining 15-20% excess margin above liquidation requirements is recommended.",
                },
              },
              {
                "@type": "Question",
                name: "Which exchanges are best for funding rate arbitrage?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For CEX: Binance and Bybit offer the deepest liquidity with 8-hour funding settlement. For DEX: Hyperliquid offers hourly funding with competitive rates, dYdX provides 1-hour funding on 100+ pairs, and GMX uses dynamic funding. Cross-CEX-DEX arbitrage between Binance and Hyperliquid often yields the best spreads (8-20 bps).",
                },
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
