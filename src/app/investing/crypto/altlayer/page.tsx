import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is AltLayer (ALT)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about AltLayer (ALT), the rollups-as-a-service protocol for deploying custom rollups. Discover how it works, tokenomics, use cases, and how to buy ALT.",
};

export default function AltLayerPage() {
  return (
    <LearnPageLayout
      title="What Is AltLayer (ALT)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="AltLayer is a rollups-as-a-service (RaaS) protocol that allows developers to deploy custom rollups with no-code tooling across multiple rollup stacks including OP Stack, Arbitrum Orbit, and ZK Stack. AltLayer also provides restaked rollups through its integration with EigenLayer, enabling rollups to inherit Ethereum's economic security through restaking. ALT is the governance and utility token that powers the AltLayer ecosystem."
      toc={[
        { id: "what-is", title: "What Is AltLayer?", level: 2 },
        { id: "how-it-works", title: "How Does AltLayer Work?", level: 2 },
        { id: "tokenomics", title: "ALT Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy ALT", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is AltLayer?",
          answer: "AltLayer is a rollups-as-a-service platform that enables no-code deployment of custom rollups across OP Stack, Arbitrum Orbit, and ZK Stack, with optional EigenLayer restaking for enhanced security.",
        },
        {
          question: "Where can I buy ALT?",
          answer: "ALT is available on Binance, OKX, Bybit, KuCoin, and other major exchanges.",
        },
        {
          question: "Is AltLayer a good investment?",
          answer: "AltLayer is a leading RaaS provider with EigenLayer integration, but the rollup deployment market is still developing. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "EigenLayer", href: "/investing/crypto/eigenlayer", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is AltLayer?</h2>
      <p>
        AltLayer was founded by Yaoqi Jia and launched its token in January 2024 via a Binance Launchpool event. The protocol addresses the growing demand for application-specific rollups by providing a streamlined deployment platform that abstracts away the complexity of configuring and operating rollup infrastructure. AltLayer has partnered with major projects and chains to deploy their rollups, including gaming, DeFi, and social applications.
      </p>
      <p>
        The key innovation of AltLayer is the concept of restaked rollups, which combine rollup deployment with EigenLayer restaking to provide three critical services: VITAL (decentralized verification of rollup state), MACH (fast finality for rollup transactions), and SQUAD (decentralized sequencing). These services are secured by restaked ETH through EigenLayer&apos;s AVS framework, giving deployed rollups access to Ethereum-grade economic security without needing to bootstrap their own validator networks.
      </p>

      <h2 id="how-it-works">How Does AltLayer Work?</h2>
      <p>
        Developers use AltLayer&apos;s no-code dashboard or SDK to configure and deploy rollups. They select the rollup framework (OP Stack, Arbitrum Orbit, or ZK Stack), configure parameters like gas token, throughput limits, and data availability layer, and launch their rollup. AltLayer handles the infrastructure provisioning, including sequencer setup, prover configuration (for ZK rollups), and connection to the chosen settlement layer.
      </p>
      <p>
        For restaked rollups, ALT token staking enables participation in the three AVS modules on EigenLayer. MACH provides fast finality by having restaked operators verify and attest to rollup blocks, enabling faster confirmation than the standard optimistic rollup challenge period. VITAL provides decentralized state verification as an alternative to centralized fraud proof watchers. SQUAD enables decentralized sequencing to prevent single-sequencer censorship and downtime risks.
      </p>

      <h2 id="tokenomics">ALT Tokenomics</h2>
      <p>
        ALT has a total supply of 10 billion tokens. The distribution includes community allocations through the Binance Launchpool, airdrops, ecosystem development, core contributor vesting, and investor allocations. ALT is used for governance, staking within AltLayer&apos;s AVS modules on EigenLayer, and economic bonds for rollup operators. Stakers earn rewards from securing the VITAL, MACH, and SQUAD services that power restaked rollups.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        AltLayer enables no-code rollup deployment for applications needing dedicated blockspace, restaked rollup security through EigenLayer integration, fast finality services for optimistic rollups, and decentralized sequencing. The platform serves gaming studios deploying app-specific rollups, DeFi protocols needing custom execution environments, enterprises exploring blockchain, and existing L2 projects wanting to enhance their security with restaking.
      </p>

      <h2 id="how-to-buy">How to Buy ALT</h2>
      <p>
        To buy ALT, register on Binance, OKX, or Bybit. Complete identity verification, deposit funds, and purchase ALT tokens. ALT is also available on KuCoin and other exchanges. The token is an ERC-20 compatible with MetaMask and Ledger wallets. To participate in the restaking ecosystem, stake ALT through AltLayer&apos;s platform to help secure restaked rollups and earn staking rewards.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        The rollups-as-a-service market is competitive with players like Caldera, Conduit, and Gelato offering similar deployment services. The demand for application-specific rollups may be smaller than projected, as many applications can function well on shared rollups. AltLayer&apos;s restaked rollup model depends on EigenLayer, and any issues with the underlying restaking infrastructure would impact AltLayer&apos;s services.
      </p>
      <p>
        The business model requires sustained demand for new rollup deployments and ongoing infrastructure fees, which may be cyclical with market conditions. Token unlock schedules from investors and team create selling pressure. The rollup frameworks (OP Stack, Arbitrum Orbit) are open-source, meaning competitors can offer similar deployment services. ALT&apos;s value accrual depends on the adoption of restaked rollups, which is a novel concept still being validated by the market.
      </p>
    </LearnPageLayout>
  );
}
