import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Base Ecosystem Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to the Base L2 ecosystem built by Coinbase, including top applications, DeFi protocols, social apps, and how to get started.",
  keywords: ["Base", "Base ecosystem", "Coinbase L2", "Base chain", "Base DeFi"],
};

export default function BaseEcosystemGuidePage() {
  return (
    <LearnPageLayout
      title="Base Ecosystem Guide"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="9 min"
      intro="Base is an Ethereum Layer 2 network built by Coinbase using the OP Stack. Launched in August 2023, Base has rapidly grown to become one of the most active L2s, driven by Coinbase's massive user base, a thriving creator economy, and innovative social and consumer applications that are bringing new users into crypto."
      toc={[
        { id: "overview", title: "overview", level: 2 },
        { id: "base-overview", title: "Base Overview", level: 2 },
        { id: "technology", title: "technology", level: 2 },
        { id: "technology-stack", title: "Technology Stack", level: 2 },
        { id: "ecosystem", title: "ecosystem", level: 2 },
        { id: "key-applications", title: "Key Applications", level: 2 },
        { id: "onchain-culture", title: "onchain-culture", level: 2 },
        { id: "onchain-culture", title: "Onchain Culture", level: 2 },
        { id: "getting-started", title: "getting-started", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 }
      ]}
      faqs={[
        { question: "Does Base have its own token?", answer: "No. Base does not have a native token and Coinbase has stated there are no plans to launch one. Gas fees on Base are paid in ETH. This distinguishes Base from many other L2s that have issued governance tokens." },
        { question: "Is Base centralized because Coinbase built it?", answer: "Base currently relies on a centralized sequencer operated by Coinbase, which is common among L2s in their early stages. The roadmap includes progressive decentralization, and Base is part of the Optimism Superchain vision which aims to decentralize the sequencer role across the collective." },
        { question: "How do I get ETH on Base?", answer: "The easiest way is to withdraw ETH directly from Coinbase to Base. You can also bridge from Ethereum using the official Base Bridge or third-party bridges. Direct exchange withdrawals to Base are becoming increasingly available." },
      ]}
      relatedArticles={[
        { title: "What Is Layer 2?", href: "/learn/what-is-layer-2", category: "Learn" },
        { title: "Optimism Ecosystem Guide", href: "/learn/optimism-ecosystem-guide", category: "Learn" },
        { title: "Arbitrum Ecosystem Guide", href: "/learn/arbitrum-ecosystem-guide", category: "Learn" },
        { title: "Ethereum Ecosystem Guide", href: "/learn/ethereum-ecosystem-guide", category: "Learn" },
      ]}
    >
      <section id="overview">
        <h2>Base Overview</h2>
        <p>Base represents Coinbase's strategic bet on bringing its 100+ million verified users on-chain. As a public company with significant regulatory compliance, Coinbase's backing provides Base with unique advantages in institutional credibility, user onboarding, and fiat-to-crypto infrastructure. The network has become a hub for consumer crypto applications, social tokens, and creator economy tools.</p>
        <p>Base is part of the Optimism Superchain — a network of L2 chains built on the shared OP Stack technology. This collaboration means Base contributes to and benefits from shared development, and plans for seamless interoperability between Superchain members are advancing. Base contributes a portion of its sequencer revenue to the Optimism Collective, supporting public goods funding.</p>
      </section>
      <section id="technology">
        <h2>Technology Stack</h2>
        <p>Base is built on the OP Stack, the same open-source framework that powers Optimism mainnet. As an optimistic rollup, it posts transaction data to Ethereum and uses fraud proofs for security. The OP Stack provides EVM equivalence, meaning any Ethereum smart contract can be deployed on Base without modification, and developer tooling works identically.</p>
        <p>Transaction costs on Base are among the lowest of major L2s, particularly after Ethereum's EIP-4844 (proto-danksharding) significantly reduced the cost of posting data to L1. Sub-cent transactions are common for simple operations, making Base economically viable for the frequent, low-value transactions characteristic of social and gaming applications.</p>
      </section>
      <section id="ecosystem">
        <h2>Key Applications</h2>
        <p>Aerodrome has emerged as Base's dominant DEX, capturing the majority of trading volume through its vote-escrow tokenomics model. Other major DeFi protocols include Moonwell for lending, Extra Finance for leveraged yield farming, and major cross-chain protocols like Uniswap and Aave that have deployed on Base. The DeFi ecosystem is growing rapidly as TVL increases.</p>
        <p>Social and consumer applications differentiate Base from other L2s. Friend.tech pioneered tokenized social connections on Base, while Farcaster's growing user base generates significant on-chain activity. Zora provides NFT infrastructure for creators, and numerous consumer apps are leveraging Base's low fees and Coinbase's smart wallet technology to create seamless onboarding experiences for mainstream users.</p>
      </section>
      <section id="onchain-culture">
        <h2>Onchain Culture</h2>
        <p>Base has cultivated a distinctive onchain culture centered around the concept of bringing the next billion users to crypto. The "Based" meme and blue-themed aesthetics have created a recognizable brand identity. Coinbase actively promotes onchain activities through campaigns, events, and developer incentives that encourage building consumer-friendly applications.</p>
        <p>The creator economy on Base is particularly notable, with artists, musicians, and content creators minting and selling work at accessible price points. The low transaction costs make micro-transactions viable, enabling new business models like onchain tipping, micro-subscriptions, and tokenized content that would be impossible on higher-fee networks.</p>
      </section>
      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>The simplest way to start is by withdrawing ETH from your Coinbase account directly to Base — this avoids bridging entirely. Coinbase's smart wallet technology also enables gasless onboarding for many Base applications, allowing new users to interact with dApps without first acquiring ETH for gas. For users on other platforms, bridging from Ethereum via the official bridge or third-party services is straightforward.</p>
        <p>Explore the ecosystem through base.org's app directory. Try swapping tokens on Aerodrome, minting an NFT on Zora, or exploring social apps built on Farcaster. The combination of low costs, familiar Coinbase integration, and innovative consumer applications makes Base one of the most accessible entry points into the on-chain world.</p>
      </section>
    </LearnPageLayout>
  );
}
