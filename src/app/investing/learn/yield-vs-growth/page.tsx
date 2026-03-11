import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Yield vs Growth Crypto Investing (${CURRENT_YEAR}) - Strategy Guide | ${SITE_NAME}`,
  description: `Compare yield-generating vs growth-oriented crypto strategies in ${CURRENT_YEAR}. Staking, DeFi yields, capital appreciation, and how to balance both approaches in your portfolio.`,
  alternates: { canonical: "/investing/learn/yield-vs-growth" },
};

const toc = [
  { id: "yield-vs-growth", title: "Yield vs Growth: Two Approaches", level: 2 },
  { id: "yield-strategies", title: "Crypto Yield Strategies", level: 2 },
  { id: "growth-strategies", title: "Growth-Oriented Strategies", level: 2 },
  { id: "risk-comparison", title: "Risk Comparison", level: 2 },
  { id: "balanced-approach", title: "Building a Balanced Portfolio", level: 2 },
];

const faqs = [
  { question: "Is yield farming or holding for growth more profitable?", answer: "Historically, holding major assets like BTC and ETH through full market cycles has outperformed most yield strategies due to capital appreciation. However, yield provides consistent returns regardless of price direction, which is valuable during sideways or bear markets. The best approach combines both: hold core positions for growth and put a portion to work earning yield." },
  { question: "What are the safest crypto yield strategies?", answer: "The safest yield strategies include Ethereum staking (currently 3-4% APR with minimal smart contract risk), lending stablecoins on established protocols like Aave (4-8% APR), and providing liquidity to deep, established pools. Avoid strategies promising yields above 20% without understanding the source of that yield, as unsustainable yields often end in losses." },
  { question: "Should beginners focus on yield or growth?", answer: "Beginners should focus on growth first by building positions in established assets (BTC, ETH) through dollar-cost averaging. Once you have a solid foundation and understand the technology, explore yield opportunities. Starting with staking ETH is a natural next step. Advanced yield strategies in DeFi should only be attempted after gaining significant experience." },
  { question: "What is impermanent loss?", answer: "Impermanent loss occurs when you provide liquidity to a decentralized exchange pool and the price ratio between the two assets changes. The pool automatically rebalances, leaving you with more of the declining asset and less of the appreciating one. In volatile markets, impermanent loss can exceed the trading fees earned, resulting in a net loss compared to simply holding the assets." },
  { question: "Can I earn yield on Bitcoin?", answer: "Yes, though options are more limited than for ETH. You can earn yield through Bitcoin lending platforms, wrapped BTC in DeFi protocols (wBTC on Aave), Bitcoin L2 networks that support staking, or by providing liquidity in BTC trading pairs. Yields on BTC are typically 1-5% APR. Be cautious with platforms offering higher rates, as they may carry significant counterparty risk." },
];

const relatedArticles = [
  { title: "Dollar-Cost Averaging Strategy", href: "/investing/learn/dollar-cost-averaging", category: "Investing" },
  { title: "DeFi vs CeFi Investing", href: "/investing/learn/defi-vs-cefi-investing", category: "Investing" },
  { title: "Crypto Portfolio Rebalancing", href: "/investing/learn/crypto-portfolio-rebalancing", category: "Investing" },
];

export default function YieldVsGrowthPage() {
  return (
    <LearnPageLayout
      title="Yield vs Growth Investing in Crypto"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="8 min"
      intro="Crypto investors face a fundamental choice: pursue yield by putting assets to work earning returns, or focus on growth by holding tokens expected to appreciate in value. Each approach has distinct risk profiles, time commitments, and return characteristics. Understanding the trade-offs between yield and growth strategies is essential for building a portfolio that matches your goals and risk tolerance."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="yield-vs-growth">Yield vs Growth: Two Approaches</h2>
      <p>
        Yield investing means generating regular returns from your crypto holdings. This includes
        staking ETH (earning 3-4% annually), lending stablecoins on Aave or Compound (4-8%),
        providing liquidity on decentralized exchanges (variable returns from trading fees), or
        participating in various DeFi protocols that distribute rewards. Yield strategies produce
        income regardless of whether the underlying asset price goes up or down.
      </p>
      <p>
        Growth investing focuses on capital appreciation. You buy tokens you believe will increase
        in value and hold them. The classic example is buying and holding Bitcoin or Ethereum
        through market cycles. Growth investing in crypto also includes identifying undervalued
        altcoins, investing in new ecosystem tokens, or positioning in emerging narratives like
        AI or RWA before they gain mainstream attention. Growth potential in crypto far exceeds
        traditional markets but so does downside risk.
      </p>

      <h2 id="yield-strategies">Crypto Yield Strategies</h2>
      <p>
        Ethereum staking is the most straightforward yield strategy. By staking ETH (directly
        or through liquid staking tokens like stETH), you earn protocol rewards for helping
        secure the network. The yield fluctuates but has been in the 3-5% range. Liquid staking
        tokens let you earn staking yield while maintaining liquidity to use in DeFi, effectively
        earning yield on your yield.
      </p>
      <p>
        Stablecoin lending is popular for risk-averse yield seekers. Depositing USDC or USDT on
        Aave typically earns 4-8% APR depending on market conditions. The underlying asset does
        not fluctuate (it is pegged to $1), so your returns are purely from yield. Liquidity
        provision on DEXs earns trading fees proportional to the volume flowing through the pool.
        Higher volume pools generate more fees but also require pairing two assets, exposing you
        to impermanent loss if prices diverge.
      </p>

      <h2 id="growth-strategies">Growth-Oriented Strategies</h2>
      <p>
        The simplest growth strategy is buying and holding Bitcoin and Ethereum. These assets have
        produced the most consistent long-term returns in crypto, with BTC averaging over 100%
        annual returns across its history (though with extreme volatility). Dollar-cost averaging
        into BTC and ETH during bear markets has been the most reliable growth strategy for
        patient investors who can withstand multi-year drawdowns.
      </p>
      <p>
        More aggressive growth strategies include investing in emerging L1 and L2 ecosystems,
        sector-specific tokens (AI, DeFi, gaming), or early-stage projects. These offer higher
        potential returns but significantly higher risk. The vast majority of altcoins underperform
        BTC and ETH over a full market cycle. Successful altcoin growth investing requires deep
        research, active management, and strict risk controls. Position sizing matters enormously
        when individual positions can decline 80-90%.
      </p>

      <h2 id="risk-comparison">Risk Comparison</h2>
      <p>
        Yield strategies carry smart contract risk (the DeFi protocol could be exploited),
        impermanent loss risk (for liquidity providers), and counterparty risk (for centralized
        lending). However, yields provide a buffer against price declines. If you earn 5% yield
        on an asset that drops 10%, your net loss is only 5%. The downside of yield strategies
        is complexity, gas costs, and the opportunity cost of capital that could have been
        allocated to higher-growth assets.
      </p>
      <p>
        Growth strategies carry concentration risk and maximum drawdown risk. Holding a single
        altcoin for growth exposes you to total loss if the project fails. Even established
        assets like BTC and ETH have experienced 70-80% drawdowns that took years to recover from.
        Growth investing requires the emotional resilience to hold through severe bear markets
        without panic selling at the bottom. The reward is that successful growth investments can
        return 10-100x, far exceeding any yield strategy.
      </p>

      <h2 id="balanced-approach">Building a Balanced Portfolio</h2>
      <p>
        A balanced crypto portfolio allocates between growth and yield based on your risk tolerance
        and market conditions. A common framework is 60% growth holdings (BTC, ETH, high-conviction
        altcoins) and 40% yield-generating positions (staked ETH, stablecoin lending, liquidity
        provision). During bull markets, you might tilt toward yield to lock in gains. During bear
        markets, tilt toward growth to accumulate discounted assets.
      </p>
      <p>
        The key insight is that yield and growth are not mutually exclusive. Staked ETH earns yield
        while you benefit from ETH price appreciation. Liquid staking tokens can be used as collateral
        to borrow stablecoins for additional yield. DeFi composability lets you stack multiple yield
        sources while maintaining growth exposure. Start simple, master each strategy individually,
        and gradually build toward a portfolio that generates yield while maintaining upside exposure
        to the assets you believe in most.
      </p>
    </LearnPageLayout>
  );
}
