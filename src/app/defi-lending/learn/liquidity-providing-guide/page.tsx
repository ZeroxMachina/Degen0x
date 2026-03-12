import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Provide Liquidity (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to providing liquidity in DeFi. Learn how AMMs work, impermanent loss calculations, concentrated liquidity strategies, and the best protocols for LPs.",
  keywords: ["provide liquidity", "liquidity provider", "DeFi liquidity", "LP tokens", "AMM liquidity"],
};

export default function LiquidityProvidingGuidePage() {
  return (
    <LearnPageLayout
      title="How to Provide Liquidity"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="12 min read"
      intro="Providing liquidity is one of the foundational activities in DeFi. By depositing token pairs into automated market maker (AMM) pools, liquidity providers (LPs) enable decentralized trading and earn fees in return. However, successful liquidity provision requires understanding impermanent loss, fee structures, concentrated liquidity mechanics, and the tradeoffs between different pool types and protocols."
      toc={[
        { id: "amm-basics", title: "amm-basics", level: 2 },
        { id: "how-amms-liquidity-pools-work", title: "How AMMs & Liquidity Pools Work", level: 2 },
        { id: "impermanent-loss", title: "impermanent-loss", level: 2 },
        { id: "understanding-impermanent-loss", title: "Understanding Impermanent Loss", level: 2 },
        { id: "concentrated-liquidity", title: "concentrated-liquidity", level: 2 },
        { id: "concentrated-liquidity-uniswap-v3", title: "Concentrated Liquidity (Uniswap V3)", level: 2 },
        { id: "pool-selection", title: "pool-selection", level: 2 },
        { id: "choosing-the-right-pool", title: "Choosing the Right Pool", level: 2 },
        { id: "step-by-step", title: "step-by-step", level: 2 },
        { id: "step-by-step-lp-guide", title: "Step-by-Step LP Guide", level: 2 },
        { id: "optimization", title: "optimization", level: 2 },
        { id: "optimizing-lp-returns", title: "Optimizing LP Returns", level: 2 }
      ]}
      faqs={[
        { question: "What is impermanent loss?", answer: "Impermanent loss occurs when the price ratio of tokens in your LP position changes from when you deposited. The greater the price divergence, the more value you lose compared to simply holding the tokens. It is called impermanent because it reverses if prices return to the original ratio." },
        { question: "How much do LPs earn?", answer: "Earnings depend on trading volume, pool size, fee tier, and incentives. Stablecoin pools typically earn 2-10% APY, while volatile pairs can earn 20-100%+ but with higher impermanent loss risk. Fee revenue is proportional to your share of the pool." },
        { question: "What is concentrated liquidity?", answer: "Concentrated liquidity, pioneered by Uniswap V3, allows LPs to provide liquidity within specific price ranges rather than across the entire price curve. This increases capital efficiency dramatically but requires active management as positions go out of range." },
        { question: "Is providing liquidity risky?", answer: "Yes. Risks include impermanent loss, smart contract exploits, rug pulls on unverified tokens, and token depreciation. Stablecoin pairs minimize impermanent loss. Always research the protocol and tokens before providing liquidity." },
      ]}
      relatedArticles={[
        { title: "Yield Farming Guide", href: "/defi-lending/learn/yield-farming-guide", category: "DeFi Lending" },
        { title: "Impermanent Loss Explained", href: "/defi-lending/learn/impermanent-loss", category: "DeFi Lending" },
        { title: "DeFi Risks Guide", href: "/defi-lending/learn/defi-risks-guide", category: "DeFi Lending" },
      ]}
    >
      <h2 id="amm-basics">How AMMs &amp; Liquidity Pools Work</h2>
      <p>
        Automated Market Makers replace traditional order books with liquidity pools containing pairs of tokens. The most common model uses the constant product formula (x * y = k), where the product of the two token quantities stays constant. When a trader swaps token A for token B, they add A to the pool and remove B. The formula adjusts prices automatically based on supply and demand. LPs deposit equal values of both tokens and receive LP tokens representing their share of the pool. As trades occur, LPs earn a percentage of each swap fee proportional to their pool share. Major AMMs include Uniswap, Curve, Balancer, and SushiSwap.
      </p>

      <h2 id="impermanent-loss">Understanding Impermanent Loss</h2>
      <p>
        Impermanent loss is the difference between holding tokens in an LP position versus simply holding them in your wallet. When the price ratio between the two tokens changes, arbitrageurs rebalance the pool, leaving you with more of the depreciated token and less of the appreciated token compared to a simple hold strategy. For example, if you provide ETH/USDC liquidity and ETH doubles in price, your LP position is worth less than if you had just held the ETH and USDC separately. The loss ranges from 0% at no price change to about 5.7% at a 2x price change and 25.5% at a 5x change. Stablecoin pairs minimize this risk since the price ratio stays near 1:1.
      </p>

      <h2 id="concentrated-liquidity">Concentrated Liquidity (Uniswap V3)</h2>
      <p>
        Uniswap V3 introduced concentrated liquidity, allowing LPs to allocate capital within custom price ranges rather than the entire 0 to infinity range. If ETH is trading at $3,000, you might concentrate your liquidity between $2,500 and $3,500. Within your range, your capital works much harder, earning far more fees per dollar than full-range positions. The tradeoff is that if the price moves outside your range, your position stops earning fees entirely and converts fully to one token. Active management is required to adjust ranges as prices move. Some protocols like Gamma, Arrakis, and Maverick automate this process.
      </p>

      <h2 id="pool-selection">Choosing the Right Pool</h2>
      <p>
        Pool selection depends on your goals and risk tolerance. Stablecoin pools (USDC/USDT, DAI/USDC) offer low impermanent loss and steady fee income. Blue-chip pairs (ETH/USDC, BTC/ETH) have good volume but more IL risk. Exotic pairs with new tokens can have high incentives but extreme IL and rug pull risk. Consider the fee tier: 0.01% for very stable pairs, 0.05% for correlated assets, 0.30% for standard pairs, and 1% for exotic pairs. Higher fee tiers compensate for greater IL risk. Check the pool's trading volume relative to TVL to estimate your potential fee income before committing capital.
      </p>

      <h2 id="step-by-step">Step-by-Step LP Guide</h2>
      <p>
        To provide liquidity: First, choose a DEX and pool. Second, acquire equal USD values of both tokens in the pair. Third, connect your wallet to the DEX interface. Fourth, select the pool and deposit your tokens, approving token spending if prompted. Fifth, confirm the transaction and pay gas fees. You will receive LP tokens representing your position. For Uniswap V3, you also need to set your price range before depositing. Monitor your position regularly to check fee accrual and impermanent loss. To withdraw, return to the DEX, select your LP position, and remove liquidity. You will receive both tokens in the current pool ratio plus any uncollected fees.
      </p>

      <h2 id="optimization">Optimizing LP Returns</h2>
      <p>
        Maximize LP returns by compounding earned fees back into the position regularly. Auto-compounding vaults on platforms like Beefy Finance and Yearn handle this automatically. For concentrated liquidity, use active management tools or range-setting strategies based on historical volatility. Consider providing liquidity on Layer 2 networks where lower gas costs make smaller positions viable and compounding economical. Stacking incentives by depositing LP tokens into farming contracts can boost total returns. Monitor pool metrics using tools like DefiLlama and Revert Finance to track your actual returns versus impermanent loss and identify when it is time to exit a position.
      </p>
    </LearnPageLayout>
  );
}
