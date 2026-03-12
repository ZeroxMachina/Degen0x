import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Optimism Ecosystem Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to the Optimism ecosystem including the Superchain vision, OP Stack, retroactive public goods funding, DeFi protocols, and how to get started.",
  keywords: ["Optimism", "OP Stack", "Superchain", "OP token", "Optimism DeFi", "retroPGF"],
};

export default function OptimismEcosystemGuidePage() {
  return (
    <LearnPageLayout
      title="Optimism Ecosystem Guide"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="9 min"
      intro="Optimism is an Ethereum Layer 2 pioneering the vision of the Superchain — a network of interoperable L2 chains built on the shared OP Stack. Beyond its technical contributions, Optimism is notable for its innovative governance model and commitment to funding public goods through retroactive grants, creating a sustainable economic model for open-source development."
      toc={[
        { id: "overview", title: "overview", level: 2 },
        { id: "optimism-overview", title: "Optimism Overview", level: 2 },
        { id: "superchain", title: "superchain", level: 2 },
        { id: "the-superchain-vision", title: "The Superchain Vision", level: 2 },
        { id: "governance", title: "governance", level: 2 },
        { id: "governance-model", title: "Governance Model", level: 2 },
        { id: "ecosystem", title: "ecosystem", level: 2 },
        { id: "defi-and-applications", title: "DeFi and Applications", level: 2 },
        { id: "getting-started", title: "getting-started", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 }
      ]}
      faqs={[
        { question: "What is the Superchain?", answer: "The Superchain is Optimism's vision for a network of interoperable L2 chains sharing the OP Stack technology, a shared bridge, and sequencer infrastructure. Base, Zora, Mode, and others are Superchain members, creating a unified ecosystem where assets and messages flow seamlessly between chains." },
        { question: "What is RetroPGF?", answer: "Retroactive Public Goods Funding (RetroPGF) is Optimism's mechanism for rewarding contributors who have created value for the ecosystem. Rather than funding promises, RetroPGF rewards demonstrated impact after the fact, creating a sustainable model for open-source development." },
        { question: "How does Optimism compare to Arbitrum?", answer: "Both are optimistic rollups with similar security properties. Arbitrum currently has higher TVL and more DeFi protocols. Optimism differentiates through the Superchain vision, the OP Stack open-source framework, and its innovative governance and public goods funding model." },
      ]}
      relatedArticles={[
        { title: "What Is Layer 2?", href: "/learn/what-is-layer-2", category: "Learn" },
        { title: "Arbitrum Ecosystem Guide", href: "/learn/arbitrum-ecosystem-guide", category: "Learn" },
        { title: "Base Ecosystem Guide", href: "/learn/base-ecosystem-guide", category: "Learn" },
        { title: "What Is a DAO?", href: "/learn/what-is-a-dao", category: "Learn" },
      ]}
    >
      <section id="overview">
        <h2>Optimism Overview</h2>
        <p>Optimism, developed by OP Labs, was one of the first optimistic rollups to launch on Ethereum. The project's impact extends far beyond its own network — the open-source OP Stack has become the most widely adopted L2 framework, powering Base (Coinbase), Zora, Mode, Worldcoin, and dozens of other chains. This proliferation of OP Stack chains creates the foundation for the Superchain, where multiple L2s share infrastructure and interoperability.</p>
        <p>The Optimism Collective governs the ecosystem through a bicameral governance system consisting of the Token House (OP holders who vote on protocol upgrades and economics) and the Citizens House (identity-verified members who allocate retroactive public goods funding). This dual structure balances stakeholder interests and creates a more representative governance model than typical token-weighted DAOs.</p>
      </section>
      <section id="superchain">
        <h2>The Superchain Vision</h2>
        <p>The Superchain represents Optimism's answer to L2 fragmentation. Rather than each L2 operating in isolation, Superchain members share a common bridge, sequencing infrastructure, and governance framework. This enables seamless asset transfers and messaging between chains, creating a unified user experience across the entire network of OP Stack chains. The vision is that using any Superchain member feels like using a single, coherent platform.</p>
        <p>Superchain economics create a sustainable ecosystem where each member chain contributes a portion of its sequencer revenue to the Optimism Collective, funding public goods and shared infrastructure development. This model aligns incentives — the more successful individual chains become, the more resources are available for shared infrastructure improvements that benefit everyone. It represents a novel approach to ecosystem coordination and funding.</p>
      </section>
      <section id="governance">
        <h2>Governance Model</h2>
        <p>The Token House consists of OP token holders who vote on technical protocol upgrades, incentive programs, and treasury spending. Delegation is encouraged, with active delegates building reputations through consistent participation and transparent voting rationales. The Citizens House consists of members verified through an attestation process who allocate funds through RetroPGF rounds.</p>
        <p>RetroPGF has distributed hundreds of millions of dollars to builders, educators, and infrastructure providers who have contributed value to the Optimism ecosystem. The mechanism is innovative because it funds proven impact rather than promised deliverables, reducing the risk of misallocated grants. This approach has attracted significant attention as a potential model for sustainable open-source funding beyond the blockchain industry.</p>
      </section>
      <section id="ecosystem">
        <h2>DeFi and Applications</h2>
        <p>Optimism's DeFi ecosystem includes major protocols like Velodrome (the dominant DEX using ve(3,3) tokenomics), Aave, Uniswap, Synthetix (which originated on Optimism), and a growing number of native projects. The Bedrock upgrade significantly reduced transaction costs, making Optimism competitive with other L2s on price while maintaining strong security properties.</p>
        <p>Beyond DeFi, Optimism hosts a diverse application ecosystem including Farcaster infrastructure, NFT platforms, gaming projects, and identity solutions. The Superchain ecosystem creates network effects where applications on any member chain benefit from shared infrastructure and cross-chain composability, making the combined ecosystem more valuable than the sum of its parts.</p>
      </section>
      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>Add Optimism to your wallet (natively supported by most wallets), bridge ETH from Ethereum or withdraw directly from an exchange that supports Optimism. Explore the ecosystem through the Optimism app directory. Try Velodrome for trading, explore RetroPGF to understand the governance model, and consider delegating your OP tokens to an active delegate if you hold the governance token.</p>
        <p>For developers, the OP Stack documentation provides comprehensive guides for building on Optimism or launching your own OP Stack chain. The ecosystem actively supports builders through grants, RetroPGF, and developer tooling, making it one of the most welcoming environments for L2 development.</p>
      </section>
    </LearnPageLayout>
  );
}
