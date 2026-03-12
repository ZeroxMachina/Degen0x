import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Liquidity Mining Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Learn how liquidity mining works in DeFi. Understand yield farming, impermanent loss, and how to evaluate liquidity mining opportunities.`,
};

export default function LiquidityMiningGuidePage() {
  return (
    <LearnPageLayout
      title="Liquidity Mining Guide"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="11 min"
      intro="Liquidity mining is a DeFi mechanism where users provide liquidity to decentralized exchanges and lending protocols in exchange for token rewards. It became the primary driver of DeFi growth during the 2020 DeFi Summer and continues to be a major yield-generating strategy. This guide explains how liquidity mining works and how to evaluate opportunities."
      toc={[
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-liquidity-mining-works", title: "How Liquidity Mining Works", level: 2 },
        { id: "impermanent-loss", title: "impermanent-loss", level: 2 },
        { id: "understanding-impermanent-loss", title: "Understanding Impermanent Loss", level: 2 },
        { id: "evaluating-opportunities", title: "evaluating-opportunities", level: 2 },
        { id: "evaluating-opportunities", title: "Evaluating Opportunities", level: 2 },
        { id: "strategies", title: "strategies", level: 2 },
        { id: "liquidity-mining-strategies", title: "Liquidity Mining Strategies", level: 2 }
      ]}
      faqs={[
        { question: "What is impermanent loss?", answer: "Impermanent loss occurs when the price ratio of tokens in a liquidity pool changes from when you deposited. The greater the price divergence, the larger the loss compared to simply holding the tokens. It is called impermanent because the loss only becomes permanent when you withdraw. Trading fees and token rewards can offset impermanent loss if they are high enough." },
        { question: "Is liquidity mining safe?", answer: "Liquidity mining carries several risks: smart contract vulnerabilities, impermanent loss, token price depreciation of reward tokens, and rug pulls on unaudited protocols. Stick to established protocols with audit histories, and never commit more capital than you can afford to lose. Always research the protocol thoroughly before depositing." },
      ]}
      relatedArticles={[
        { title: "DeFi vs CeFi Investing", href: "/investing/learn/defi-vs-cefi-investing", category: "Investing" },
        { title: "Liquidity Pool Taxes", href: "/taxes/learn/liquidity-pool-taxes", category: "Taxes" },
        { title: "Yield vs Growth Investing", href: "/investing/learn/yield-vs-growth", category: "Investing" },
      ]}
    >
      <h2 id="how-it-works">How Liquidity Mining Works</h2>
      <p>
        Liquidity mining involves depositing pairs of tokens into automated market maker (AMM)
        pools on decentralized exchanges like Uniswap, Curve, or Balancer. Your deposited tokens
        provide liquidity for traders, and you earn a share of trading fees proportional to your
        pool share. Additionally, many protocols distribute their governance tokens as extra
        incentives to liquidity providers, which is the &quot;mining&quot; aspect of the strategy.
      </p>

      <h2 id="impermanent-loss">Understanding Impermanent Loss</h2>
      <p>
        Impermanent loss is the opportunity cost of providing liquidity versus simply holding tokens.
        When one token in your pair appreciates significantly relative to the other, the AMM
        automatically rebalances by selling the appreciating token and buying the depreciating
        one. This means you end up with more of the worse-performing token and less of the
        better-performing one. For stablecoin pairs or correlated asset pairs, impermanent loss
        is minimal. For volatile pairs, it can be substantial.
      </p>

      <h2 id="evaluating-opportunities">Evaluating Opportunities</h2>
      <p>
        High APY figures can be misleading. Always check whether the APY includes reward token
        emissions (which may decline over time) or is purely from trading fees (more sustainable).
        Evaluate the total value locked (TVL) relative to trading volume, as high TVL with low
        volume means diluted fees. Research the reward token&apos;s price history and selling
        pressure. The most sustainable opportunities are those where trading fees alone provide
        attractive returns.
      </p>

      <h2 id="strategies">Liquidity Mining Strategies</h2>
      <p>
        Conservative strategies focus on stablecoin pools (USDC-USDT, DAI-USDC) on established
        DEXs, earning 2-8% APY with minimal impermanent loss. Moderate strategies target
        correlated pairs like ETH-stETH or BTC-WBTC. Aggressive strategies pursue high-APY
        farming on newer protocols, which carry the highest rewards but also the greatest risks.
        Regularly harvest and sell reward tokens to realize gains, as reward token prices
        frequently decline over time due to selling pressure.
      </p>
    </LearnPageLayout>
  );
}
