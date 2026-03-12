import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Liquidity Pool? DeFi Pools Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what liquidity pools are, how they power decentralized exchanges, how to provide liquidity, earning trading fees, and the risks of being a liquidity provider.",
  keywords: ["liquidity pool", "DeFi pool", "AMM", "liquidity provider", "LP tokens", "Uniswap pool"],
};

export default function WhatIsALiquidityPoolPage() {
  return (
    <LearnPageLayout
      title="What Is a Liquidity Pool?"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="8 min"
      intro="A liquidity pool is a collection of cryptocurrency deposited in a smart contract that provides the trading liquidity for a decentralized exchange. Instead of matching individual buyers with sellers through an order book, DEXs use liquidity pools where anyone can deposit tokens and earn trading fees in return. This innovation democratized market making and enabled permissionless token trading."
      toc={[
        { id: "how-pools-work", title: "how-pools-work", level: 2 },
        { id: "how-liquidity-pools-work", title: "How Liquidity Pools Work", level: 2 },
        { id: "amm-mechanics", title: "amm-mechanics", level: 2 },
        { id: "amm-mechanics", title: "AMM Mechanics", level: 2 },
        { id: "becoming-lp", title: "becoming-lp", level: 2 },
        { id: "becoming-a-liquidity-provider", title: "Becoming a Liquidity Provider", level: 2 },
        { id: "lp-tokens", title: "lp-tokens", level: 2 },
        { id: "lp-tokens", title: "LP Tokens", level: 2 },
        { id: "pool-types", title: "pool-types", level: 2 },
        { id: "types-of-pools", title: "Types of Pools", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "liquidity-pool-risks", title: "Liquidity Pool Risks", level: 2 }
      ]}
      faqs={[
        { question: "How do liquidity pools make money?", answer: "Liquidity pools generate revenue from trading fees charged on every swap. Uniswap V3 pools charge between 0.01% and 1% per trade. These fees are distributed proportionally to liquidity providers based on their share of the pool. Some pools also receive additional token incentives from the protocol." },
        { question: "Can anyone create a liquidity pool?", answer: "Yes. On most DEXs, anyone can create a new pool by depositing a pair of tokens. This permissionless creation is what enables any token to have a trading market without needing exchange listings. However, pools with very little liquidity will have high slippage and may not attract traders." },
        { question: "What is the minimum to provide liquidity?", answer: "There is technically no minimum on most DEXs — you can provide any amount. However, the transaction costs (gas fees) to deposit, withdraw, and claim rewards may make very small positions uneconomical, especially on Ethereum mainnet. Layer 2 networks make small LP positions more viable." },
      ]}
      relatedArticles={[
        { title: "What Is Impermanent Loss?", href: "/learn/what-is-impermanent-loss", category: "Learn" },
        { title: "How to Provide Liquidity", href: "/learn/how-to-provide-liquidity", category: "Learn" },
        { title: "What Is a DEX?", href: "/learn/what-is-a-dex", category: "Learn" },
        { title: "What Is Liquidity?", href: "/learn/what-is-liquidity", category: "Learn" },
      ]}
    >
      <section id="how-pools-work">
        <h2>How Liquidity Pools Work</h2>
        <p>
          A liquidity pool is a smart contract that holds reserves of two or more tokens. When a trader wants to swap Token A for Token B, they send Token A to the pool and receive Token B from the pool. The exchange rate is determined algorithmically based on the ratio of tokens in the pool. This automated market maker (AMM) model eliminates the need for a counterparty willing to take the other side of every trade, providing instant liquidity for any supported token pair.
        </p>
        <p>
          Liquidity providers deposit equal values of both tokens to increase the pool's depth. A larger pool means traders experience less slippage (price impact) on their trades, making the trading experience better and attracting more volume. More volume generates more fees for liquidity providers, which in turn attracts more liquidity — creating a virtuous cycle that has powered the explosive growth of decentralized exchanges.
        </p>
      </section>

      <section id="amm-mechanics">
        <h2>AMM Mechanics</h2>
        <p>
          The most common AMM formula is the constant product formula: x * y = k, where x and y are the quantities of each token in the pool and k is a constant. When someone buys Token A from the pool, x decreases and y increases to maintain the constant k. This means the price of Token A increases relative to Token B as it becomes scarcer in the pool. The formula automatically provides deeper liquidity near the current price while maintaining a market at any price level.
        </p>
        <p>
          More advanced AMM designs have emerged to improve capital efficiency. Concentrated liquidity (Uniswap V3) allows providers to specify price ranges, concentrating their capital where it is most needed. Curve's StableSwap formula is optimized for assets that trade near a 1:1 ratio, providing extremely low slippage for stablecoin and wrapped token swaps. Balancer allows pools with more than two tokens and customizable weight ratios. Each design makes different trade-offs between simplicity, capital efficiency, and LP experience.
        </p>
      </section>

      <section id="becoming-lp">
        <h2>Becoming a Liquidity Provider</h2>
        <p>
          To provide liquidity, connect your wallet to a DEX, select the pool you want to join, approve and deposit both tokens in the required ratio, and receive LP tokens representing your share of the pool. Your deposit immediately starts earning a share of trading fees proportional to your contribution. To exit, you return your LP tokens to the pool contract and receive your share of both tokens, which may differ from your original deposit due to trades that changed the pool composition.
        </p>
        <p>
          Before providing liquidity, research the pool's trading volume (higher volume means more fee income), the token pair's correlation (correlated pairs have less impermanent loss), the fee tier (higher fees mean more income per trade but may attract less volume), and any additional incentive programs. Consider starting with a small position to understand the mechanics before committing significant capital. Monitor your position regularly, as market conditions can change the risk-reward profile of any LP position.
        </p>
      </section>

      <section id="lp-tokens">
        <h2>LP Tokens</h2>
        <p>
          When you deposit into a liquidity pool, you receive LP tokens that represent your proportional share of the pool. These tokens are transferable and composable — they can be used as collateral in lending protocols, staked in yield farms for additional rewards, or traded on secondary markets. This composability is a key innovation of DeFi, allowing your deposited liquidity to simultaneously serve multiple purposes.
        </p>
        <p>
          LP tokens accrue value as the pool earns trading fees. When you burn your LP tokens to withdraw, you receive your proportional share of the pool's assets, which includes all accumulated fees. On some protocols, you may need to separately claim token incentives that are not embedded in the LP token value. Understanding what your LP tokens represent and how they accumulate value is important for accurately tracking your DeFi portfolio's performance.
        </p>
      </section>

      <section id="pool-types">
        <h2>Types of Pools</h2>
        <p>
          Standard constant product pools (Uniswap V2 style) are the simplest and most common, supporting any token pair with uniform liquidity distribution across all prices. Concentrated liquidity pools (Uniswap V3) allow LPs to specify price ranges for more capital-efficient liquidity provision. Stable pools (Curve) are optimized for assets that should trade at similar prices, like different stablecoins or wrapped versions of the same asset.
        </p>
        <p>
          Weighted pools (Balancer) support custom token ratios like 80/20 instead of the standard 50/50, enabling different exposure profiles. Multi-asset pools hold three or more tokens, enabling swaps between any pair without needing separate pools for each combination. Single-sided liquidity pools allow depositing only one token, with the protocol managing the pair balancing internally. Each pool type is designed for different use cases and risk preferences.
        </p>
      </section>

      <section id="risks">
        <h2>Liquidity Pool Risks</h2>
        <p>
          Impermanent loss is the primary risk for liquidity providers, where changes in the relative prices of pooled tokens result in less value than simply holding. Smart contract risk means that bugs or exploits in the pool's contract could result in loss of deposited funds. Rug pull risk exists for pools involving unverified tokens where the token creator could drain the pool by manipulating the token contract.
        </p>
        <p>
          Additional risks include regulatory risk if providing liquidity is deemed a financial service in your jurisdiction, opportunity cost of capital that could be deployed elsewhere, and gas costs that may eat into returns for small positions on expensive networks. Manage these risks by providing liquidity only in well-audited protocols, choosing token pairs you understand and are willing to hold, diversifying across multiple pools, and never committing more capital than you can afford to lose.
        </p>
      </section>
    </LearnPageLayout>
  );
}
