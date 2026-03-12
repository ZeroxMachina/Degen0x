import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Bear Market Strategies (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Proven strategies for navigating crypto bear markets. Learn how to protect your portfolio, accumulate at lower prices, and position for the next cycle.`,
};

export default function CryptoBearMarketStrategiesPage() {
  return (
    <LearnPageLayout
      title="Crypto Bear Market Strategies"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="11 min"
      intro="Bear markets are an inevitable part of the crypto cycle, with drawdowns of 70-90% being historically normal. While painful, bear markets also present the best accumulation opportunities for long-term investors. This guide covers proven strategies for surviving and thriving during crypto downturns."
      toc={[
        { id: "understanding-bear-markets", title: "understanding-bear-markets", level: 2 },
        { id: "understanding-crypto-bear-markets", title: "Understanding Crypto Bear Markets", level: 2 },
        { id: "capital-preservation", title: "capital-preservation", level: 2 },
        { id: "capital-preservation-strategies", title: "Capital Preservation Strategies", level: 2 },
        { id: "accumulation", title: "accumulation", level: 2 },
        { id: "accumulation-strategies", title: "Accumulation Strategies", level: 2 },
        { id: "earning-yield", title: "earning-yield", level: 2 },
        { id: "earning-yield-in-bear-markets", title: "Earning Yield in Bear Markets", level: 2 }
      ]}
      faqs={[
        { question: "How long do crypto bear markets last?", answer: "Historically, crypto bear markets have lasted 1-2 years from peak to trough. The 2018 bear market lasted approximately 12 months from top to bottom, while the 2022 bear market lasted about 13 months. Recovery to previous highs typically takes an additional 1-2 years." },
        { question: "Should I sell everything in a bear market?", answer: "Selling at a loss during a bear market locks in losses permanently. If you hold fundamentally strong assets like BTC and ETH, historical data shows that holding through bear markets and continuing to accumulate has been the most profitable long-term strategy. However, rotating out of weak altcoins into stronger assets is a valid approach." },
      ]}
      relatedArticles={[
        { title: "Crypto Bull Market Strategies", href: "/investing/learn/crypto-bull-market-strategies", category: "Investing" },
        { title: "Dollar-Cost Averaging", href: "/investing/learn/dollar-cost-averaging", category: "Investing" },
        { title: "Risk Management Guide", href: "/investing/learn/risk-management", category: "Investing" },
      ]}
    >
      <h2 id="understanding-bear-markets">Understanding Crypto Bear Markets</h2>
      <p>
        Crypto bear markets typically feature 70-90% drawdowns from all-time highs for Bitcoin and
        even steeper declines for altcoins. They are driven by a combination of excess leverage
        unwinding, retail capitulation, regulatory uncertainty, and broader macroeconomic conditions.
        Understanding that bear markets are a normal part of the crypto cycle helps maintain
        perspective and avoid panic-driven decisions.
      </p>

      <h2 id="capital-preservation">Capital Preservation Strategies</h2>
      <p>
        The first priority in a bear market is preserving capital. Reduce exposure to high-risk
        altcoins and concentrate holdings in BTC and ETH, which have the strongest recovery track
        records. Consider holding a portion of your portfolio in stablecoins to reduce drawdown
        exposure and provide dry powder for accumulation. Avoid leverage entirely during bear
        markets, as cascading liquidations can wipe out positions even in fundamentally strong
        assets.
      </p>

      <h2 id="accumulation">Accumulation Strategies</h2>
      <p>
        Dollar-cost averaging is the most effective accumulation strategy during bear markets.
        Set up automatic recurring purchases of BTC and ETH on a weekly or bi-weekly schedule.
        Increase your buy amounts during periods of extreme fear (measured by the Crypto Fear and
        Greed Index below 20). Focus on assets with strong fundamentals: active development,
        growing user adoption, and sustainable tokenomics. The best bear market investments are
        projects that continue building regardless of price action.
      </p>

      <h2 id="earning-yield">Earning Yield in Bear Markets</h2>
      <p>
        Bear markets reduce DeFi yields significantly, but earning any yield helps offset
        unrealized losses. Staking ETH through liquid staking protocols provides consistent
        3-4% APY regardless of market conditions. Stablecoin lending on established platforms
        offers lower risk yield. Avoid chasing high APY on unknown protocols, as bear markets
        see increased rug pulls and protocol failures. Stick to battle-tested platforms with
        strong security track records.
      </p>
    </LearnPageLayout>
  );
}
