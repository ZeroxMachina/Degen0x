import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Provide Liquidity in DeFi (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Guide to providing liquidity on decentralized exchanges including AMM mechanics, concentrated liquidity, impermanent loss, and yield strategies.",
  keywords: ["provide liquidity", "liquidity provider", "LP tokens", "AMM liquidity", "DeFi yield", "impermanent loss"],
};

export default function HowToProvideLiquidityPage() {
  return (
    <LearnPageLayout title="How to Provide Liquidity" categoryName="Crypto Education" categorySlug="learn" readTime="8 min" intro="Providing liquidity to decentralized exchanges is one of the fundamental ways to earn yield in DeFi. By depositing tokens into liquidity pools, you enable trading activity and earn a share of trading fees. Understanding the mechanics, risks, and strategies of liquidity provision is essential for making informed decisions about this yield-generating activity."
      toc={[
        { id: "how-it-works", title: "How Liquidity Provision Works", level: 2 },
        { id: "concentrated-liquidity", title: "Concentrated Liquidity", level: 2 },
        { id: "impermanent-loss", title: "Understanding Impermanent Loss", level: 2 },
        { id: "strategies", title: "LP Strategies", level: 2 },
        { id: "step-by-step", title: "Getting Started", level: 2 },
      ]}
      faqs={[
        { question: "How much can I earn providing liquidity?", answer: "Returns vary dramatically based on the trading pair, fee tier, pool volume, and your position's range. Stablecoin pairs might earn 2-10% APY, while volatile pairs can earn 20-100%+ but carry higher impermanent loss risk. Actual returns depend on market conditions and cannot be guaranteed." },
        { question: "What is impermanent loss?", answer: "Impermanent loss occurs when the price ratio of tokens in your pool changes from when you deposited. The greater the price divergence, the larger the loss relative to simply holding the tokens. It is called 'impermanent' because it reverses if prices return to the original ratio. Fee earnings may or may not offset this loss." },
        { question: "Which pools should I start with?", answer: "Beginners should start with stablecoin pairs (USDC/USDT) or correlated pairs (ETH/stETH) which have minimal impermanent loss risk. As you gain experience, explore volatile pairs that offer higher fee income but require more active management and impermanent loss tolerance." },
      ]}
      relatedArticles={[
        { title: "What Is a Liquidity Pool?", href: "/learn/what-is-a-liquidity-pool", category: "Learn" },
        { title: "What Is Impermanent Loss?", href: "/learn/what-is-impermanent-loss", category: "Learn" },
        { title: "How to Use Uniswap", href: "/learn/how-to-use-uniswap", category: "Learn" },
        { title: "What Is APY vs APR?", href: "/learn/what-is-apy-vs-apr", category: "Learn" },
      ]}
    >
      <section id="how-it-works"><h2>How Liquidity Provision Works</h2><p>Automated Market Makers (AMMs) rely on liquidity pools — smart contracts holding pairs of tokens that enable trading. When you deposit tokens into a pool, you become a liquidity provider (LP). Traders swap against your pool, paying fees that are distributed proportionally to all LPs. You receive LP tokens representing your share of the pool, which you can later redeem for your portion of the pool's assets plus accumulated fees.</p><p>In a standard AMM pool (like Uniswap V2), you deposit equal value of two tokens. The pool uses a mathematical formula (x * y = k) to determine exchange rates. As traders swap one token for the other, the pool's balance shifts, and the exchange rate adjusts automatically. Your share of the pool changes in composition as trades occur, which is the source of impermanent loss.</p></section>
      <section id="concentrated-liquidity"><h2>Concentrated Liquidity</h2><p>Uniswap V3 and similar protocols introduced concentrated liquidity, where you choose a specific price range for your liquidity. Your capital is only active when the trading price is within your selected range. Narrower ranges provide more capital efficiency (higher fee earnings per dollar deployed) but require more frequent adjustment as prices move. If the price moves outside your range, you stop earning fees.</p><p>Concentrated liquidity positions are represented as NFTs rather than fungible LP tokens. Managing concentrated liquidity requires active monitoring and potentially frequent rebalancing. For passive liquidity providers, wider ranges or full-range positions reduce management overhead at the cost of lower capital efficiency. Some protocols offer managed concentrated liquidity vaults that handle rebalancing automatically.</p></section>
      <section id="impermanent-loss"><h2>Understanding Impermanent Loss</h2><p>Impermanent loss is the opportunity cost of providing liquidity versus simply holding the tokens. If you deposit ETH and USDC into a pool and ETH's price doubles, your LP position will contain more USDC and less ETH than your original deposit. The total value of your position will be less than if you had simply held the original ETH and USDC amounts separately.</p><p>The loss is impermanent because it reverses if prices return to their original ratio. However, if you withdraw while prices have diverged, the loss becomes permanent. Fee earnings offset impermanent loss — the goal is to earn more in fees than you lose to impermanent loss. Stablecoin and correlated asset pairs experience minimal impermanent loss, making them safer for conservative liquidity providers.</p></section>
      <section id="strategies"><h2>LP Strategies</h2><p>Conservative strategy: provide liquidity to stablecoin pairs (USDC/USDT, USDC/DAI) with negligible impermanent loss and steady fee income. Moderate strategy: use correlated pairs like ETH/stETH where price divergence is limited. Aggressive strategy: provide concentrated liquidity on volatile pairs for maximum fee earnings, requiring active management and tolerance for impermanent loss.</p><p>Many DeFi protocols offer additional incentives (farming rewards) on top of trading fees for providing liquidity to specific pools. These incentives can significantly boost returns but may be temporary and denominated in the protocol's governance token. Evaluate the total return (fees plus incentives minus impermanent loss) when comparing opportunities, and be aware that high incentives often attract sufficient liquidity to dilute per-LP returns over time.</p></section>
      <section id="step-by-step"><h2>Getting Started</h2><p>Choose a DEX and pool. For your first position, select a stablecoin pair on a well-established DEX. Connect your wallet, navigate to the pool or liquidity section, select the token pair and fee tier. For concentrated liquidity pools, set your price range (a full-range position is safest for beginners). Enter the amount of each token to deposit, approve the token contracts, and confirm the deposit transaction.</p><p>After depositing, your LP position will appear in the pool's interface. Monitor your position periodically — check accumulated fees, current pool composition, and whether your position is in range (for concentrated liquidity). You can withdraw at any time by redeeming your LP tokens or NFT position through the same interface. Plan your exit by monitoring fee earnings versus impermanent loss to determine when withdrawal makes sense.</p></section>
    </LearnPageLayout>
  );
}
