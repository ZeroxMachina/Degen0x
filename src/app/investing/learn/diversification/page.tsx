import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Diversification Strategies ${CURRENT_YEAR} - Build a Balanced Portfolio`,
  description: `Learn how to diversify your crypto portfolio effectively. Strategies for spreading risk across sectors, market caps, and investment approaches.`,
  alternates: { canonical: "/investing/learn/diversification" },
};

const toc = [
  { id: "why-diversify", title: "Why Diversify", level: 2 },
  { id: "sector-diversification", title: "Sector Diversification", level: 2 },
  { id: "market-cap-diversification", title: "Market Cap Diversification", level: 2 },
  { id: "beyond-crypto", title: "Beyond Crypto Diversification", level: 2 },
];

const faqs = [
  { question: "How many cryptocurrencies should I hold?", answer: "For most investors, 5-15 different cryptocurrencies provides adequate diversification without becoming unmanageable. Core positions in BTC and ETH, 3-5 established altcoins for sector exposure, and optionally 2-3 higher-risk positions. Holding too many positions dilutes your conviction and makes portfolio management difficult." },
  { question: "Should I diversify across exchanges?", answer: "Yes. Keeping all your crypto on one exchange creates counterparty risk. Distribute assets across 2-3 reputable exchanges and consider hardware wallet self-custody for significant holdings. This protects against exchange hacks, insolvency, or regulatory actions." },
  { question: "Does diversification reduce returns?", answer: "Diversification typically reduces your maximum potential return compared to going all-in on the single best performer. However, it dramatically reduces your risk of catastrophic loss. Since you cannot predict which asset will perform best in advance, diversification provides a better risk-adjusted return for most investors." },
];

export default function DiversificationPage() {
  return (
    <LearnPageLayout
      title="Crypto Diversification Strategies"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="8 min"
      intro="Diversification is the only free lunch in investing. By spreading your crypto holdings across different assets, sectors, and risk levels, you reduce the impact of any single investment's poor performance on your overall portfolio."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Portfolio Allocation", href: "/investing/learn/portfolio-allocation", category: "Investing" },
        { title: "Risk Management", href: "/investing/learn/risk-management", category: "Investing" },
      ]}
    >
      <section id="why-diversify" className="mb-10">
        <h2>Why Diversify?</h2>
        <p>
          In crypto, even well-regarded projects can fail or dramatically underperform. Terra/Luna
          was a top-10 project before its collapse wiped out $40 billion in value. FTX was the
          second-largest exchange before its fraud was exposed. Diversification ensures no single
          failure can destroy your portfolio. The goal is not to eliminate risk entirely but to
          manage it so that you can survive any single adverse event.
        </p>
      </section>

      <section id="sector-diversification" className="mb-10">
        <h2>Sector Diversification</h2>
        <p>
          The crypto market has distinct sectors: Layer 1 blockchains (ETH, SOL), DeFi protocols
          (AAVE, UNI), Layer 2 solutions (ARB, OP), oracle networks (LINK), AI crypto (RNDR,
          FET), and real-world assets (ONDO). Each sector has different risk profiles and growth
          drivers. Spreading investments across sectors means if one narrative cools, your
          portfolio is not entirely exposed. Different sectors often rotate in and out of favor.
        </p>
      </section>

      <section id="market-cap-diversification" className="mb-10">
        <h2>Market Cap Diversification</h2>
        <p>
          Large-cap tokens (BTC, ETH) provide stability and liquidity. Mid-caps offer growth
          with moderate risk. Small-caps have the highest return potential but also the highest
          failure rate. A balanced approach might allocate 60% to large-caps, 25% to mid-caps,
          and 15% to small-caps. Adjust based on your risk tolerance and where you are in the
          market cycle (lean more conservative late in bull markets).
        </p>
      </section>

      <section id="beyond-crypto" className="mb-10">
        <h2>Beyond Crypto Diversification</h2>
        <p>
          True diversification extends beyond crypto. Maintain a balanced portfolio that includes
          traditional assets (stocks, bonds, real estate), cash reserves for emergencies, and
          crypto as one component. Crypto should not be your entire investment portfolio. Having
          non-crypto assets provides stability during crypto bear markets and ensures you never
          need to sell crypto at unfavorable prices to meet financial obligations.
        </p>
      </section>
    </LearnPageLayout>
  );
}
