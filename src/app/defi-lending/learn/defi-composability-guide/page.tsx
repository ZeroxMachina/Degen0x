import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Composability Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understand DeFi composability and money legos. Learn how protocols interact, build on each other, and create complex financial strategies through composition.",
  keywords: ["defi composability", "money legos", "defi building blocks", "protocol composition"],
};

export default function DefiComposabilityGuidePage() {
  return (
    <LearnPageLayout
      title="DeFi Composability Guide"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="10 min"
      intro="Composability is often called DeFi's superpower. It means that protocols can interact with each other seamlessly, like building blocks or money legos, creating complex financial strategies by combining simple primitives. A lending protocol's receipt token can be used as collateral in another protocol, which can then be deposited into a yield optimizer. This guide explains how composability works and how to leverage it effectively."
      toc={[
        { id: "what-is-composability", title: "What Is Composability", level: 2 },
        { id: "money-legos", title: "Money Legos in Practice", level: 2 },
        { id: "composable-strategies", title: "Composable Strategies", level: 2 },
        { id: "risks", title: "Composability Risks", level: 2 },
        { id: "future", title: "The Future of Composability", level: 2 },
      ]}
      faqs={[
        { question: "Why is composability unique to DeFi?", answer: "Traditional finance systems use closed, proprietary infrastructure that prevents interoperability. DeFi protocols are built on open, permissionless smart contracts on shared blockchains, allowing any protocol to integrate with any other without requiring permission or partnership agreements." },
        { question: "Does composability increase risk?", answer: "Yes. Each layer of composition adds dependency risk. If any protocol in a composed strategy has a vulnerability, all connected protocols and positions may be affected. This interconnected risk is sometimes called composability risk or systemic risk in DeFi." },
      ]}
      relatedArticles={[
        { title: "Flash Loans Guide", href: "/defi-lending/learn/flash-loans-guide", category: "DeFi Lending" },
        { title: "Yield Farming Strategies", href: "/defi-lending/learn/yield-farming-strategies", category: "DeFi Lending" },
      ]}
    >
      <section id="what-is-composability">
        <h2>What Is Composability</h2>
        <p>Composability in DeFi means that protocols can be combined and layered to create more complex financial products and strategies. This is possible because DeFi protocols are built as open smart contracts on shared blockchains, with standardized interfaces that allow seamless interaction. When you deposit ETH into Aave, you receive aETH, an interest-bearing token that represents your deposit. This aETH token can then be used in other protocols because it follows standard token interfaces. You could deposit aETH as collateral on another platform, use it in a liquidity pool, or integrate it into an automated strategy. This layered approach would be extremely difficult or impossible in traditional finance, where each institution operates its own closed system with proprietary interfaces. The open and permissionless nature of blockchain enables anyone to build on top of existing protocols without requiring approval.</p>
      </section>
      <section id="money-legos">
        <h2>Money Legos in Practice</h2>
        <p>The money legos metaphor captures how DeFi primitives snap together. At the base layer, lending protocols like Aave create interest-bearing tokens. DEXs like Uniswap provide token swaps and liquidity pools. Staking protocols like Lido create liquid staking tokens. Above these base protocols, aggregators and optimizers combine them. Yearn Finance automatically moves funds between lending protocols to maximize yield. Morpho optimizes lending rates by matching borrowers and lenders peer-to-peer on top of Aave and Compound. Pendle splits yield-bearing tokens into principal and yield components for trading. A practical example: deposit ETH into Lido to receive stETH, deposit stETH into Aave to borrow USDC, swap USDC for more ETH on Uniswap, and repeat. This leveraged staking strategy compounds yield through multiple protocol interactions within a single user flow.</p>
      </section>
      <section id="composable-strategies">
        <h2>Composable Strategies</h2>
        <p>Several powerful strategies emerge from DeFi composability. Leveraged yield farming uses lending protocols to amplify farming positions by borrowing against deposited collateral to acquire more of the farming asset. Yield tokenization through Pendle allows selling future yield for upfront payment or buying discounted future yield from other users. Automated vault strategies on platforms like Yearn and Beefy combine multiple protocols into a single position that automatically compounds, rebalances, and optimizes returns. Cross-protocol arbitrage exploits rate differences between lending platforms. Liquid staking with lending combines staking yield with borrowing power, effectively earning staking returns while maintaining the ability to deploy capital elsewhere. Each of these strategies relies on the seamless interaction between multiple protocols, demonstrating the multiplicative power of composability in creating financial products that exceed the sum of their parts.</p>
      </section>
      <section id="risks">
        <h2>Composability Risks</h2>
        <p>The interconnected nature of composable DeFi creates systemic risks not present in isolated protocols. A vulnerability in one protocol can cascade through all protocols that depend on it. When the stablecoin UST depegged in 2022, it affected every protocol and strategy that used UST, demonstrating how a failure in one composable piece can propagate. Oracle manipulation in one protocol can affect collateral valuations across all connected lending markets. Smart contract risk compounds multiplicatively: if each protocol has a 99% chance of being secure, a strategy using five protocols has roughly a 95% chance of avoiding any individual exploit. Liquidity risk intensifies during market stress when multiple protocols experience high demand simultaneously. To manage composability risk, limit the number of protocol layers in any strategy, prefer battle-tested protocols, and understand the full dependency chain of every position you hold.</p>
      </section>
      <section id="future">
        <h2>The Future of Composability</h2>
        <p>Cross-chain composability is the next frontier, with bridges and messaging protocols enabling strategies that span multiple blockchains. LayerZero, Wormhole, and Axelar are building infrastructure for cross-chain protocol interactions, though bridge security remains a significant concern. Account abstraction and smart accounts will make complex composed strategies more accessible by allowing multi-step transactions to be bundled and executed atomically. Intent-based architectures will allow users to specify desired outcomes and let specialized solvers find optimal execution paths across composed protocols. Standardization of interfaces and security practices will reduce integration risk as the ecosystem matures. The evolution toward modular blockchain architecture with separate execution, settlement, and data availability layers creates new composability possibilities at the infrastructure level that will enable even more sophisticated financial products.</p>
      </section>
    </LearnPageLayout>
  );
}
