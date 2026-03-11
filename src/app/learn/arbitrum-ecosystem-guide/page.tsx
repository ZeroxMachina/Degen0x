import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Arbitrum Ecosystem Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to the Arbitrum ecosystem including top DeFi protocols, NFT projects, gaming apps, bridges, and how to get started on Arbitrum One.",
  keywords: ["Arbitrum", "Arbitrum ecosystem", "Arbitrum One", "ARB token", "Arbitrum DeFi"],
};

export default function ArbitrumEcosystemGuidePage() {
  return (
    <LearnPageLayout
      title="Arbitrum Ecosystem Guide"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="10 min"
      intro="Arbitrum is the largest Ethereum Layer 2 by total value locked, processing more transactions than Ethereum itself while offering dramatically lower fees. Built as an optimistic rollup, Arbitrum inherits Ethereum's security while providing a fast, affordable environment for DeFi, gaming, and social applications."
      toc={[
        { id: "overview", title: "Arbitrum Overview", level: 2 },
        { id: "technology", title: "Technology and Architecture", level: 2 },
        { id: "defi", title: "DeFi Ecosystem", level: 2 },
        { id: "nfts-gaming", title: "NFTs and Gaming", level: 2 },
        { id: "arb-token", title: "The ARB Token", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 },
      ]}
      faqs={[
        { question: "How do I bridge to Arbitrum?", answer: "You can bridge from Ethereum using the official Arbitrum Bridge or faster third-party bridges like Across or Hop. Many centralized exchanges also support direct withdrawals to Arbitrum, which is the simplest onramp." },
        { question: "Is Arbitrum safe?", answer: "Arbitrum inherits Ethereum's security through its optimistic rollup design. Transaction data is posted to Ethereum, and fraud proofs ensure correctness. However, the sequencer is currently centralized, and the upgrade mechanism requires trust in the security council." },
        { question: "What are Arbitrum's fees like?", answer: "Arbitrum transaction fees are typically 10-50x lower than Ethereum mainnet, usually ranging from a few cents to under a dollar for most operations." },
      ]}
      relatedArticles={[
        { title: "What Is Layer 2?", href: "/learn/what-is-layer-2", category: "Learn" },
        { title: "What Is a Rollup?", href: "/learn/what-is-a-rollup", category: "Learn" },
        { title: "How to Use Layer 2", href: "/learn/how-to-use-layer-2", category: "Learn" },
        { title: "Optimism Ecosystem Guide", href: "/learn/optimism-ecosystem-guide", category: "Learn" },
      ]}
    >
      <section id="overview">
        <h2>Arbitrum Overview</h2>
        <p>Arbitrum, developed by Offchain Labs, launched its mainnet in August 2021 and has grown to become the dominant Ethereum Layer 2 network. It processes millions of transactions daily across thousands of deployed applications, with total value locked consistently ranking among the highest of all L2s. The network achieved this position through early mover advantage, strong DeFi ecosystem development, and full EVM compatibility.</p>
        <p>The Arbitrum ecosystem consists of multiple networks. Arbitrum One is the primary network for DeFi and general-purpose applications. Arbitrum Nova is optimized for high-throughput, low-cost applications like gaming and social platforms. Arbitrum Orbit enables projects to launch their own customizable L3 chains built on Arbitrum technology.</p>
      </section>
      <section id="technology">
        <h2>Technology and Architecture</h2>
        <p>Arbitrum One is an optimistic rollup that executes transactions off-chain and posts compressed transaction data to Ethereum. The system assumes transactions are valid unless challenged through fraud proofs. The Nitro upgrade replaced the original AVM with a WASM-based execution environment, improving performance and reducing fees significantly.</p>
        <p>The Stylus upgrade adds support for writing smart contracts in Rust, C, and C++ alongside Solidity, enabling developers to use familiar programming languages and access a broader ecosystem of libraries. This multi-language support differentiates Arbitrum from other EVM rollups and attracts developers from outside the traditional Solidity ecosystem.</p>
      </section>
      <section id="defi">
        <h2>DeFi Ecosystem</h2>
        <p>Arbitrum hosts one of the most vibrant DeFi ecosystems of any L2. GMX, a perpetual futures exchange native to Arbitrum, became one of the most successful DeFi protocols by offering low-fee leveraged trading with deep liquidity. Uniswap, Aave, Curve, and most major Ethereum DeFi protocols have deployed on Arbitrum. Camelot serves as the native DEX, while Pendle has become a major yield trading platform.</p>
        <p>The low fees make complex multi-step strategies economically viable that would be prohibitively expensive on Ethereum mainnet. Yield strategies involving multiple protocol interactions, frequent rebalancing, and small position management are all practical on Arbitrum, attracting both retail and institutional DeFi users.</p>
      </section>
      <section id="nfts-gaming">
        <h2>NFTs and Gaming</h2>
        <p>Arbitrum has attracted significant gaming activity, particularly through Treasure DAO, which built a decentralized gaming ecosystem and NFT marketplace on the network. Low transaction costs make Arbitrum suitable for gaming applications that require frequent on-chain interactions. Arbitrum Nova is specifically designed for gaming and social applications where cost per transaction is critical.</p>
        <p>The NFT scene includes collections, marketplaces, and creative projects that benefit from lower minting and trading costs. While Ethereum mainnet remains the premium NFT venue, Arbitrum has become a thriving ecosystem for gaming NFTs, utility-focused projects, and creators who prioritize accessibility.</p>
      </section>
      <section id="arb-token">
        <h2>The ARB Token</h2>
        <p>The ARB token was distributed through one of the largest airdrops in crypto history in March 2023. ARB serves as the governance token for the Arbitrum DAO, which controls protocol upgrades, treasury management, and ecosystem funding decisions. The DAO treasury holds significant funds for grants and strategic investments.</p>
        <p>ARB holders can participate in governance by voting on proposals or delegating their voting power to active delegates. Community discussions about potential fee-sharing or utility expansion for ARB continue within the governance forums, as the ecosystem explores ways to create more direct value accrual for token holders.</p>
      </section>
      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>To start using Arbitrum, add the network to your MetaMask or preferred wallet. Bridge ETH from Ethereum using the official bridge or a third-party bridge, or withdraw directly from a supporting exchange. Once funded, explore the ecosystem through the Arbitrum portal, which catalogs applications across DeFi, gaming, NFTs, and more.</p>
        <p>Start with established protocols like Uniswap or Aave for familiar experiences. Explore Arbitrum-native projects like GMX and Camelot for unique opportunities. Keep ETH in your Arbitrum wallet for gas fees, which are paid in ETH just like on Ethereum mainnet but at a fraction of the cost.</p>
      </section>
    </LearnPageLayout>
  );
}
