import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Yield Farming? (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about yield farming in DeFi: how it works, common strategies, liquidity mining rewards, risk factors, and how to evaluate yield farming opportunities.",
};

export default function WhatIsYieldFarmingPage() {
  return (
    <LearnPageLayout
      title="What Is Yield Farming?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="Yield farming is the practice of deploying cryptocurrency across various DeFi protocols to maximize returns. It involves strategically moving assets between lending pools, liquidity pools, staking contracts, and other yield-generating opportunities to earn the highest possible yield. Born during the 'DeFi Summer' of 2020, yield farming transformed the way users interact with decentralized protocols and became one of the primary drivers of DeFi growth and innovation."
      toc={[
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-yield-farming-works", title: "How Yield Farming Works", level: 2 },
        { id: "strategies", title: "strategies", level: 2 },
        { id: "common-yield-farming-strategies", title: "Common Yield Farming Strategies", level: 2 },
        { id: "liquidity-mining", title: "liquidity-mining", level: 2 },
        { id: "liquidity-mining", title: "Liquidity Mining", level: 2 },
        { id: "evaluating", title: "evaluating", level: 2 },
        { id: "evaluating-yield-farming-opportunities", title: "Evaluating Yield Farming Opportunities", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-of-yield-farming", title: "Risks of Yield Farming", level: 2 }
      ]}
      faqs={[
        {
          question: "Is yield farming still profitable?",
          answer:
            "Yes, though yields have compressed significantly from the triple-digit APYs of 2020-2021. Sustainable yields in established protocols typically range from 3-15% for stablecoin strategies and higher for more volatile or newer protocols. The highest advertised APYs often involve significant risks including impermanent loss, smart contract risk, and token devaluation.",
        },
        {
          question: "How much capital do I need to start yield farming?",
          answer:
            "There is no minimum, but gas costs matter. On Ethereum mainnet, transaction fees can make small positions unprofitable. Layer 2 networks like Arbitrum and Base have near-zero gas costs, making yield farming accessible with smaller amounts. Start with at least a few hundred dollars to ensure fees do not eat into your returns.",
        },
        {
          question: "What is the difference between APR and APY?",
          answer:
            "APR (Annual Percentage Rate) is the simple annual return without compounding. APY (Annual Percentage Yield) includes the effect of compounding — reinvesting earned returns to earn additional returns. A 10% APR compounded daily would result in approximately 10.52% APY. DeFi protocols may display either metric, so always check which one is being quoted.",
        },
      ]}
      relatedArticles={[
        { title: "Impermanent Loss Explained", href: "/learn/impermanent-loss", category: "Learn" },
        { title: "Crypto Lending Explained", href: "/learn/crypto-lending-explained", category: "Learn" },
        { title: "What Is Liquid Staking?", href: "/learn/what-is-liquid-staking", category: "Learn" },
        { title: "DeFi Yield Strategies", href: "/learn/defi-yield-strategies", category: "Learn" },
      ]}
    >
      <section id="how-it-works">
        <h2>How Yield Farming Works</h2>
        <p>
          Yield farming works by depositing cryptocurrency into DeFi protocols that generate returns through various mechanisms. At the simplest level, you might deposit stablecoins into a lending protocol like Aave and earn interest from borrowers. More complex strategies involve providing liquidity to DEXs, staking LP tokens in reward farms, leveraging lending protocols to amplify yield, or combining multiple protocols in layered strategies where the output of one becomes the input of another.
        </p>
        <p>
          The returns come from multiple sources: lending interest paid by borrowers, trading fees earned by liquidity providers, governance token rewards distributed by protocols to incentivize usage, and protocol revenue sharing. Advanced yield farmers continuously monitor rates across protocols and chains, moving capital to wherever the highest risk-adjusted returns are available. Yield aggregators like Yearn Finance automate this process by using smart contracts to automatically compound rewards and reallocate capital to the highest-yielding strategies.
        </p>
      </section>

      <section id="strategies">
        <h2>Common Yield Farming Strategies</h2>
        <p>
          The simplest strategy is single-asset staking: deposit a token into a lending protocol or staking contract and earn a straightforward yield with no impermanent loss risk. Stablecoin lending on protocols like Aave or Compound typically offers 2-6% APY with minimal complexity. This is the lowest-risk form of yield farming and the best starting point for beginners.
        </p>
        <p>
          Liquidity provision involves depositing token pairs into AMM pools and earning trading fees plus potential token rewards. Leveraged yield farming uses borrowed funds to amplify returns — for example, depositing ETH as collateral, borrowing stablecoins, and deploying those stablecoins in a high-yield farm. This amplifies both gains and losses and carries liquidation risk. Recursive lending involves depositing an asset, borrowing against it, depositing the borrowed asset, and repeating — earning the spread between the lending incentive and the borrowing cost. Each strategy adds complexity and risk.
        </p>
      </section>

      <section id="liquidity-mining">
        <h2>Liquidity Mining</h2>
        <p>
          Liquidity mining is a specific yield farming mechanism where protocols distribute their governance tokens to users who provide liquidity or use the protocol. Compound popularized this approach in June 2020 by distributing COMP tokens to lenders and borrowers, sparking a rush of capital into DeFi that became known as DeFi Summer. The concept spread rapidly as new protocols launched with generous token incentives to bootstrap liquidity and user adoption.
        </p>
        <p>
          The appeal of liquidity mining is that it creates a positive-sum dynamic in the early stages: users earn tokens with speculative value, the protocol gains liquidity and usage metrics, and the growing ecosystem attracts more users. However, liquidity mining can be unsustainable. When token incentives diminish or the reward token's price declines, yield drops and mercenary capital moves elsewhere, sometimes leaving protocols with a fraction of their peak TVL. Evaluating the sustainability of liquidity mining rewards requires analyzing the token's emission schedule, the protocol's revenue relative to incentive costs, and the token's governance value.
        </p>
      </section>

      <section id="evaluating">
        <h2>Evaluating Yield Farming Opportunities</h2>
        <p>
          When evaluating a yield farming opportunity, start by understanding the source of yield. Sustainable yields come from real economic activity — borrowing demand, trading fees, protocol revenue. Unsustainable yields come from token emissions that dilute holders. If a farm offers 100% APY, ask where that money comes from. If the answer is primarily token emissions, the yield is likely to decrease substantially over time.
        </p>
        <p>
          Assess the smart contract risk by checking audit reports, the protocol's track record, and total value locked (higher TVL generally indicates more trust). Consider the lock-up period and exit costs — can you withdraw at any time, or are funds locked? Factor in gas costs for entering, harvesting rewards, and exiting the position. Compare the net yield after all costs and risks against simpler alternatives like lending or staking. A 5% yield on a battle-tested lending protocol may be a better risk-adjusted choice than a 50% yield on an unaudited farm.
        </p>
      </section>

      <section id="risks">
        <h2>Risks of Yield Farming</h2>
        <p>
          Smart contract risk is the most severe — a bug or exploit in any protocol in your strategy can result in total loss of deposited funds. Composability risk compounds this: if your strategy involves multiple protocols (deposit in A, borrow from B, farm on C), a failure in any one link can cascade across the entire strategy. Impermanent loss affects liquidity provision positions, and liquidation risk threatens leveraged strategies.
        </p>
        <p>
          Token price risk is often underestimated. Yield farming rewards paid in governance tokens are only valuable if those tokens maintain or increase their price. Many farming tokens have declined 90% or more from their peaks, turning ostensibly high APYs into real losses. Regulatory risk is also emerging as governments scrutinize DeFi activities. The best defense against these risks is diversification, using only established protocols, starting small, and never investing more than you can afford to lose entirely.
        </p>
      </section>
    </LearnPageLayout>
  );
}
