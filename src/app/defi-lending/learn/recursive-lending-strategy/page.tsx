import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Recursive Lending Strategy Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how recursive lending loops work in DeFi, how to amplify yields through deposit-borrow-redeposit strategies, and manage the associated liquidation risks.",
  keywords: ["recursive lending", "lending loops", "DeFi looping strategy", "leveraged lending"],
};

export default function RecursiveLendingStrategyPage() {
  return (
    <LearnPageLayout
      title="Recursive Lending Strategy"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="11 min"
      intro="Recursive lending, also known as looping, is a DeFi strategy where users deposit an asset, borrow the same or correlated asset against it, redeposit the borrowed asset, and repeat. This amplifies exposure to lending incentives, staking yields, or points programs. While powerful for yield optimization, looping introduces significant liquidation risk that must be carefully managed."
      toc={[
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-recursive-lending-works", title: "How Recursive Lending Works", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "common-use-cases", title: "Common Use Cases", level: 2 },
        { id: "platforms", title: "platforms", level: 2 },
        { id: "platforms-supporting-loops", title: "Platforms Supporting Loops", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-liquidation-mechanics", title: "Risks & Liquidation Mechanics", level: 2 }
      ]}
      faqs={[
        { question: "How many loops should I do?", answer: "The optimal number of loops depends on borrowing costs, reward rates, and your risk tolerance. Each loop adds incremental yield but also incremental risk. Most strategies use 2-5 loops, with diminishing returns beyond that." },
        { question: "Can I automate recursive lending?", answer: "Yes, platforms like Seamless (ILMs), Kamino (Multiply), and DeFi Saver offer automated looping. These vaults handle the recursive borrowing and can auto-deleverage if positions approach liquidation thresholds." },
        { question: "What triggers liquidation in a loop?", answer: "If the borrowed asset appreciates relative to your collateral (or a de-peg occurs for correlated assets), your debt-to-collateral ratio worsens. Once it crosses the liquidation threshold, your position is partially or fully liquidated." },
      ]}
      relatedArticles={[
        { title: "Leveraged Yield Farming", href: "/defi-lending/learn/leveraged-yield-farming", category: "DeFi Lending" },
        { title: "LSD Yield Strategies", href: "/defi-lending/learn/lsd-yield-strategies", category: "DeFi Lending" },
        { title: "Points Farming in DeFi", href: "/defi-lending/learn/points-farming-defi", category: "DeFi Lending" },
      ]}
    >
      <section id="how-it-works">
        <h2>How Recursive Lending Works</h2>
        <p>Recursive lending creates leveraged exposure to lending yields through iterative deposit-borrow cycles. The process begins by depositing an asset (say stETH) into a lending protocol. You then borrow a correlated asset (ETH) against it. The borrowed ETH is swapped for more stETH and redeposited. Each loop increases your effective exposure while maintaining a single, growing position. The net yield is the staking spread between the stETH yield and ETH borrow rate, multiplied by the effective leverage. For example, if stETH yields 4%, ETH borrowing costs 2%, and you achieve 3x leverage, the net yield is approximately 6% on top of your base stETH exposure. Automated platforms like Seamless ILMs or Kamino Multiply handle this process in a single transaction, reducing gas costs and complexity.</p>
      </section>
      <section id="use-cases">
        <h2>Common Use Cases</h2>
        <p>The most popular recursive lending use case is stETH/ETH looping on Ethereum, amplifying the spread between staking yield and borrow rates. On Solana, jitoSOL/SOL loops capture amplified staking yield plus potential MEV rewards. Points farming is another major use case: protocols distributing points based on lending activity reward loopers who maximize their deposits through recursion. Stablecoin loops (deposit USDC, borrow USDT, redeposit) capture incentive token rewards when protocols offer lending incentives proportional to deposit size. Each use case has different risk profiles depending on the correlation between deposited and borrowed assets, the stability of yield spreads, and the nature of rewards being farmed.</p>
      </section>
      <section id="platforms">
        <h2>Platforms Supporting Loops</h2>
        <p>Several platforms offer automated or manual recursive lending. Seamless Protocol on Base provides Integrated Liquidity Markets that automate the looping process for strategies like wstETH/ETH. Kamino Finance on Solana offers Multiply vaults for one-click leveraged staking positions. Morpho Vaults on Ethereum support optimized lending loops. DeFi Saver on Ethereum provides tools for manual loop creation and management with automated safety features. For manual looping, any lending protocol that supports both deposit and borrow of correlated assets can be used, though gas costs on Ethereum mainnet make manual loops impractical for smaller positions. L2 networks and Solana are more efficient for manual looping due to lower transaction costs.</p>
      </section>
      <section id="risks">
        <h2>Risks and Liquidation Mechanics</h2>
        <p>The primary risk of recursive lending is liquidation from asset de-correlation. If stETH trades at a discount to ETH (as happened during the 2022 market stress), the collateral value drops while the debt value remains constant, pushing the position toward liquidation. Higher loop counts mean higher leverage and lower tolerance for price divergence. Interest rate risk is another factor: if borrowing costs increase above the yield earned, the position becomes unprofitable and the accumulated interest may push it toward liquidation. Oracle risk matters because incorrect price reporting can trigger unwarranted liquidations. Smart contract risk is amplified because looped positions interact with lending protocols at higher TVL exposure. To manage these risks, maintain conservative leverage ratios, monitor de-peg risks for your specific asset pair, and use platforms with automated deleverage capabilities.</p>
      </section>
    </LearnPageLayout>
  );
}
