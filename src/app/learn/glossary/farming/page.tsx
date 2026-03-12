import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Yield Farming? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what yield farming is, how it works in DeFi, popular farming strategies, and the risks and rewards of farming cryptocurrency yields.",
};

export default function FarmingPage() {
  return (
    <LearnPageLayout title="What Is Farming?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Yield farming (or liquidity mining) is the practice of deploying cryptocurrency across DeFi protocols to maximize returns. Farmers move their capital between protocols, pools, and strategies to capture the highest available yields. Farming became a cultural phenomenon during DeFi Summer 2020 when protocols like Compound began distributing governance tokens to users, creating lucrative incentive programs that attracted billions in capital."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-farming", title: "What Is Farming?", level: 2 },
        { id: "farming-strategies", title: "farming-strategies", level: 2 },
        { id: "common-farming-strategies", title: "Common Farming Strategies", level: 2 },
        { id: "farming-risks", title: "farming-risks", level: 2 },
        { id: "farming-risks", title: "Farming Risks", level: 2 },
        { id: "modern-farming", title: "modern-farming", level: 2 },
        { id: "modern-farming-landscape", title: "Modern Farming Landscape", level: 2 }
      ]}
      faqs={[{ question: "Is yield farming profitable?", answer: "It can be, but profitability depends on the strategy, capital deployed, gas costs, and market conditions. High-yield opportunities attract competition, compressing returns quickly. Farmers who identify new opportunities early earn the most. After accounting for gas fees, impermanent loss, and time spent managing positions, many casual farmers find that simple staking provides better risk-adjusted returns." },
        { question: "What is the difference between farming and staking?", answer: "Staking involves locking tokens to secure a proof-of-stake network and earning network rewards. Farming is broader, encompassing any strategy that deploys crypto for yield: providing DEX liquidity, lending, leveraged positions, and participating in incentive programs. Staking is typically simpler and lower-risk, while farming strategies can be complex and carry additional risks." }]}
      relatedArticles={[{ title: "Yield", href: "/learn/glossary/yield", category: "Glossary" }, { title: "Pool", href: "/learn/glossary/pool", category: "Glossary" }, { title: "What Is Yield Farming?", href: "/learn/what-is-yield-farming", category: "Learn Crypto" }, { title: "DeFi Yield Strategies", href: "/learn/defi-yield-strategies", category: "Learn Crypto" }]}
    >
      <h2 id="definition">What Is Farming?</h2>
      <p>Farming is the active pursuit of yield across DeFi protocols. It originated when Compound began distributing COMP tokens to lenders and borrowers, creating an additional incentive layer on top of lending interest. Users quickly realized they could borrow tokens, deposit them into another protocol earning higher incentives, and recursively leverage positions to amplify returns. This recursive yield optimization became known as yield farming.</p>

      <h2 id="farming-strategies">Common Farming Strategies</h2>
      <p>LP farming involves providing liquidity to DEX pools and staking LP tokens in reward contracts. Lending farming deposits assets into lending protocols earning both interest and token incentives. Leveraged farming borrows against deposited collateral and redeploys the borrowed assets for additional yield. Points farming uses protocols with points systems that are expected to convert into token airdrops. Each strategy carries different risk profiles and requires different levels of active management.</p>

      <h2 id="farming-risks">Farming Risks</h2>
      <p>Smart contract risk is compounded when farming across multiple protocols, as each additional contract in the strategy adds a potential failure point. Impermanent loss from LP positions can exceed farming rewards. Token reward values can drop sharply, negating yield gains. Leveraged farming positions can be liquidated during market volatility. Gas costs for frequent harvesting and compounding can eat into profits, especially on Ethereum mainnet.</p>

      <h2 id="modern-farming">Modern Farming Landscape</h2>
      <p>Modern farming has evolved from manual strategy management to automated vault systems. Platforms like Yearn Finance and Beefy Finance automate farming strategies, handling harvesting, compounding, and rebalancing. Points-based farming has replaced direct token emissions in many protocols, with projects like EigenLayer and various L2s using points to incentivize activity ahead of token launches. The farming meta continues to evolve with each market cycle.</p>
    </LearnPageLayout>
  );
}
