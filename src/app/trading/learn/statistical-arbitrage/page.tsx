import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Statistical Arbitrage Strategies (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn statistical arbitrage strategies for crypto. Use quantitative models, pair trading, and statistical analysis for market-neutral profits.",
};

export default function StatisticalArbitragePage() {
  return (
    <LearnPageLayout
      title="Statistical Arbitrage Strategies"
      categoryName="Trading"
      categorySlug="trading"
      readTime="9 min read"
      intro="Statistical arbitrage uses quantitative models and statistical analysis to identify mispricings between related crypto assets. Unlike simple arbitrage, stat arb relies on historical correlations and mean reversion patterns to generate market-neutral returns. This guide covers the fundamental concepts, pair trading techniques, and how to build a basic stat arb strategy for crypto markets."
      toc={[
        { id: "what-is-stat-arb", title: "what-is-stat-arb", level: 2 },
        { id: "what-is-statistical-arbitrage", title: "What Is Statistical Arbitrage?", level: 2 },
        { id: "pair-trading", title: "pair-trading", level: 2 },
        { id: "pair-trading-in-crypto", title: "Pair Trading in Crypto", level: 2 },
        { id: "building-models", title: "building-models", level: 2 },
        { id: "building-stat-arb-models", title: "Building Stat Arb Models", level: 2 },
        { id: "practical-considerations", title: "practical-considerations", level: 2 },
        { id: "practical-considerations", title: "Practical Considerations", level: 2 }
      ]}
      faqs={[
        { question: "Is statistical arbitrage the same as regular arbitrage?", answer: "No. Regular arbitrage exploits a guaranteed price difference for risk-free profit. Statistical arbitrage relies on statistical probabilities and historical patterns, meaning there is a real risk that the expected reversion does not occur. Stat arb is a probabilistic strategy, not a risk-free one." },
        { question: "What programming skills are needed for stat arb?", answer: "Python is the most common language for stat arb, with libraries like pandas, numpy, statsmodels, and scikit-learn. You need knowledge of time series analysis, cointegration testing, correlation analysis, and basic machine learning concepts." },
      ]}
      relatedArticles={[
        { title: "Crypto Arbitrage Trading Guide", href: "/trading/learn/arbitrage-trading", category: "Trading" },
        { title: "Mean Reversion Trading Strategy", href: "/trading/learn/mean-reversion", category: "Trading" },
        { title: "Algorithmic Crypto Trading Guide", href: "/trading/learn/algorithmic-trading", category: "Trading" },
        { title: "Crypto Trading Bots: Complete Guide", href: "/trading/learn/trading-bots-guide", category: "Trading" },
      ]}
    >
      <section id="what-is-stat-arb">
        <h2>What Is Statistical Arbitrage?</h2>
        <p>
          Statistical arbitrage identifies pairs or baskets of crypto assets whose prices historically move together and trades the temporary divergences between them. When one asset outperforms its statistical relationship with another, the strategy goes long on the underperformer and short on the outperformer, betting on convergence.
        </p>
        <p>
          The key concept is cointegration: two assets are cointegrated if their price spread tends to revert to a mean over time, even if each asset individually trends in any direction. Cointegration is a stronger relationship than simple correlation and forms the basis of most stat arb strategies.
        </p>
        <p>
          Stat arb aims to be market-neutral, meaning profits come from the relative performance of the pair rather than the overall market direction. This makes it attractive during uncertain market conditions when directional trading is risky.
        </p>
      </section>

      <section id="pair-trading">
        <h2>Pair Trading in Crypto</h2>
        <p>
          Pair trading is the most common form of stat arb. Identify two crypto assets with a strong historical correlation, such as ETH and SOL, or two DeFi tokens within the same sector. Calculate their spread or ratio and look for deviations beyond normal statistical bounds.
        </p>
        <p>
          When the spread widens beyond two standard deviations from its mean, enter the convergence trade: go long the relatively cheap asset and short the relatively expensive one. The trade profits when the spread narrows back toward its historical mean.
        </p>
        <p>
          Position sizing should be based on the dollar value of each leg, not the number of tokens. If ETH is worth 20x more than the paired token, you need 20x more of the cheaper token to create a balanced pair. Beta-adjusted sizing accounts for the different volatilities of the two assets.
        </p>
      </section>

      <section id="building-models">
        <h2>Building Stat Arb Models</h2>
        <p>
          Start with correlation screening to identify potential pairs. Look for assets with a rolling correlation above 0.7 over 60-90 day windows. Then apply the Engle-Granger cointegration test to confirm that the spread is mean-reverting rather than just temporarily correlated.
        </p>
        <p>
          Calculate the z-score of the spread to standardize deviation measurements. Entry signals trigger when the z-score exceeds plus or minus 2.0, and positions are closed when the z-score returns to zero or reverses past minus or plus 0.5 on the other side.
        </p>
        <p>
          Backtest the strategy extensively using out-of-sample data. Walk-forward optimization, where parameters are re-estimated on rolling windows, helps avoid overfitting. Transaction costs, slippage, and borrowing costs for the short leg must be realistically modeled.
        </p>
      </section>

      <section id="practical-considerations">
        <h2>Practical Considerations</h2>
        <p>
          Short selling availability is a key constraint in crypto. Not all exchanges offer margin trading for all assets, and borrowing rates can fluctuate significantly. Perpetual futures can substitute for direct shorting, but funding rate costs must be factored into the strategy economics.
        </p>
        <p>
          Regime changes can break historical correlations. The relationship between two assets may change due to fundamental developments, regulatory actions, or market structure shifts. Continuously monitor cointegration and be prepared to exit pairs whose statistical relationship has deteriorated.
        </p>
        <p>
          Execution across both legs must be nearly simultaneous to avoid leg risk: the danger that one side fills while the other does not, leaving you with a directional position. Use exchange APIs with concurrent order submission for both legs of the trade.
        </p>
      </section>
    </LearnPageLayout>
  );
}
