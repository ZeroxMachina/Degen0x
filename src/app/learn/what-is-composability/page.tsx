import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Composability in DeFi? Money Legos Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what composability means in DeFi and blockchain, how protocols build on each other like money legos, benefits and risks, and why composability drives innovation.",
  keywords: ["composability", "money legos", "DeFi composability", "smart contract composability", "interoperable protocols"],
};

export default function WhatIsComposabilityPage() {
  return (
    <LearnPageLayout
      title="What Is Composability in DeFi?"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="7 min"
      intro="Composability is the ability of DeFi protocols and smart contracts to seamlessly interact with each other, like building blocks that can be combined in endless configurations. Often called 'money legos,' composable protocols enable developers to build complex financial products by combining existing primitives — a lending protocol plus an AMM plus a yield optimizer — without needing permission from any of the underlying projects."
      toc={[
        { id: "what-is-composability", title: "Understanding Composability", level: 2 },
        { id: "how-it-works", title: "How Composability Works", level: 2 },
        { id: "examples", title: "Composability in Action", level: 2 },
        { id: "benefits", title: "Benefits of Composability", level: 2 },
        { id: "risks", title: "Composability Risks", level: 2 },
      ]}
      faqs={[
        { question: "What are money legos?", answer: "Money legos is a popular metaphor for DeFi composability. Just as Lego bricks snap together to build complex structures, DeFi protocols can be combined to create financial products that would be impossible in traditional finance. Each protocol is a building block that other protocols can build upon." },
        { question: "Does composability only work within one blockchain?", answer: "Composability works best within a single blockchain where smart contracts can interact atomically. Cross-chain composability is more challenging but improving through messaging protocols and chain abstraction layers. Most DeFi composability today occurs within Ethereum and its L2 ecosystem." },
        { question: "Can composability cause systemic risk?", answer: "Yes. When protocols are deeply interconnected, a failure in one protocol can cascade through the entire ecosystem. A stablecoin depeg, oracle failure, or smart contract exploit can trigger liquidations and losses across all connected protocols — similar to contagion risk in traditional finance." },
      ]}
      relatedArticles={[
        { title: "Composability Glossary", href: "/learn/glossary/composability", category: "Learn" },
        { title: "What Is DeFi?", href: "/learn/what-is-defi", category: "Learn" },
        { title: "What Is a Smart Contract?", href: "/learn/what-is-a-smart-contract", category: "Learn" },
        { title: "What Is Yield Farming?", href: "/learn/what-is-yield-farming", category: "Learn" },
      ]}
    >
      <section id="what-is-composability">
        <h2>Understanding Composability</h2>
        <p>
          Composability means that any smart contract on a blockchain can interact with any other smart contract without requiring permission, APIs, or partnerships. Because all smart contracts on a given blockchain share the same execution environment and state, they can read each other's data, call each other's functions, and build on each other's functionality. This creates an open, permissionless innovation layer where new products can be assembled from existing components.
        </p>
        <p>
          In traditional finance, if you want to create a product that combines lending, trading, and insurance, you need partnerships with banks, exchanges, and insurance companies — each with their own APIs, legal agreements, and integration timelines. In DeFi, a developer can write a smart contract that integrates Aave for lending, Uniswap for trading, and Nexus Mutual for insurance, deploying a fully functional product in days rather than months. This radical openness is what drives DeFi's explosive pace of innovation.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Composability Works</h2>
        <p>
          Composability is enabled by standardized interfaces and shared execution environments. Token standards like ERC-20 ensure that any token can be used in any protocol that supports the standard. Smart contracts expose public functions that other contracts can call, creating an open API ecosystem. Because all interactions occur within a single transaction on the same blockchain, they are atomic — either everything succeeds or everything reverts, eliminating partial execution risk.
        </p>
        <p>
          Flash loans are the most dramatic example of atomic composability. A user can borrow millions of dollars from Aave, use those funds to arbitrage a price difference on Uniswap, repay the loan with interest, and pocket the profit — all in a single transaction that either succeeds completely or fails with no cost beyond the gas fee. This kind of atomic, permissionless interaction between protocols is impossible in traditional finance and represents a fundamental innovation in financial infrastructure.
        </p>
      </section>

      <section id="examples">
        <h2>Composability in Action</h2>
        <p>
          Yield aggregators like Yearn Finance exemplify composability by automatically moving user deposits between different lending protocols, liquidity pools, and farming opportunities to maximize returns. A single Yearn vault might interact with Aave, Compound, Curve, and Convex simultaneously, compounding rewards and rebalancing positions through complex strategies — all executed by smart contracts without human intervention.
        </p>
        <p>
          Liquid staking demonstrates another dimension of composability. When you stake ETH through Lido, you receive stETH — a token representing your staked ETH. This stETH can then be used as collateral on Aave to borrow stablecoins, which can be deployed in a Curve liquidity pool to earn additional yield. Each layer of composability adds functionality and potential returns while building on the previous layer's infrastructure.
        </p>
      </section>

      <section id="benefits">
        <h2>Benefits of Composability</h2>
        <p>
          The primary benefit is accelerated innovation. Developers do not need to rebuild existing functionality — they can focus on their unique value proposition while leveraging established, battle-tested protocols for everything else. This dramatically reduces development time, security risk (by reusing audited code), and capital requirements for launching new products.
        </p>
        <p>
          Composability also creates powerful network effects. Each new protocol that joins the ecosystem becomes available for every other protocol to build upon, increasing the total value of the system exponentially. Users benefit from more sophisticated financial products, better capital efficiency, and competition that drives down costs. The open nature of composability ensures that no single entity can capture or restrict the innovation layer.
        </p>
      </section>

      <section id="risks">
        <h2>Composability Risks</h2>
        <p>
          The interconnected nature of composable DeFi creates systemic risk. When Protocol A depends on Protocol B, which depends on Protocol C, a failure anywhere in the chain can cascade through the entire system. The collapse of the UST stablecoin in 2022 demonstrated this risk, as protocols throughout the ecosystem that held UST or LUNA experienced cascading liquidations and losses.
        </p>
        <p>
          Complexity risk is another concern. As composable strategies become more layered, it becomes increasingly difficult to understand and quantify all the risks involved. A yield strategy that chains five protocols together carries the combined smart contract risk, oracle risk, governance risk, and economic risk of all five protocols. Users must understand that higher composability often means higher complexity and potentially higher risk, even when the individual components are well-audited and battle-tested.
        </p>
      </section>
    </LearnPageLayout>
  );
}
