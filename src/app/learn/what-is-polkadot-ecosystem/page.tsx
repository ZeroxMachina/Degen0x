import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is the Polkadot Ecosystem? Complete Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about the Polkadot ecosystem, how parachains and shared security work, the DOT token, and the major projects building on Polkadot's multi-chain network.",
};

export default function WhatIsPolkadotEcosystemPage() {
  return (
    <LearnPageLayout
      title="What Is the Polkadot Ecosystem?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Polkadot is a multi-chain blockchain platform that enables different blockchains to interoperate and share security through a central relay chain. Founded by Ethereum co-founder Gavin Wood, Polkadot's unique architecture uses parachains — specialized blockchains that connect to the relay chain to benefit from its shared security and cross-chain messaging capabilities. This design allows each parachain to be optimized for specific use cases while maintaining seamless communication with the broader network."
      toc={[
        { id: "polkadot-overview", title: "Polkadot Overview", level: 2 },
        { id: "parachains", title: "Parachains and Shared Security", level: 2 },
        { id: "key-projects", title: "Key Polkadot Projects", level: 2 },
        { id: "dot-token", title: "The DOT Token", level: 2 },
      ]}
      faqs={[
        {
          question: "How is Polkadot different from Cosmos?",
          answer:
            "Polkadot provides shared security from the relay chain to all parachains, meaning parachains don't need their own validator sets. Cosmos chains each have independent validators and security. Polkadot uses parachain slots (previously auctioned), while Cosmos chains are sovereign from the start. Both enable cross-chain communication but with different trust and security models.",
        },
        {
          question: "What are parachain slots?",
          answer:
            "Parachain slots are positions on the Polkadot relay chain that allow blockchains to connect and benefit from shared security. Previously, slots were won through auctions where projects locked DOT tokens. Polkadot has since moved to a more flexible coretime model where chains can purchase block space on demand, lowering the barrier to entry for new projects.",
        },
        {
          question: "What is Substrate?",
          answer:
            "Substrate is the blockchain development framework created by Parity Technologies for building Polkadot-compatible blockchains. It provides modular components for consensus, networking, storage, and runtime logic, allowing developers to build custom blockchains without starting from scratch. Chains built with Substrate can easily connect to Polkadot as parachains.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Cosmos?", href: "/learn/what-is-cosmos-ecosystem", category: "Learn Crypto" },
        { title: "Layer 1 vs Layer 2", href: "/learn/layer-1-vs-layer-2", category: "Learn Crypto" },
        { title: "Cross-Chain", href: "/learn/glossary/cross-chain", category: "Glossary" },
        { title: "What Is Staking?", href: "/learn/what-is-staking", category: "Learn Crypto" },
      ]}
    >
      <section id="polkadot-overview">
        <h2>Polkadot Overview</h2>
        <p>
          Polkadot was created by Gavin Wood, who previously co-founded Ethereum and invented the Solidity programming language. Dissatisfied with Ethereum&apos;s scalability limitations and governance model, Wood designed Polkadot as a heterogeneous multi-chain platform where specialized blockchains operate in parallel while sharing a common security umbrella. The network launched its relay chain in 2020 and began supporting parachains in late 2021.
        </p>
        <p>
          The architecture consists of three main components: the relay chain (providing security and consensus), parachains (specialized blockchains connected to the relay chain), and bridges (connecting to external networks like Ethereum and Bitcoin). Validators on the relay chain secure all connected parachains, meaning individual chains do not need to bootstrap their own validator sets, dramatically reducing the cost and complexity of launching a new blockchain.
        </p>
      </section>

      <section id="parachains">
        <h2>Parachains and Shared Security</h2>
        <p>
          Parachains are the core innovation of Polkadot. Each parachain is a full blockchain that can have its own token, governance, and functionality, but benefits from the security of Polkadot&apos;s relay chain validators. This shared security model means a new parachain immediately gets the same level of security as the entire Polkadot network, without needing to attract its own validators.
        </p>
        <p>
          Cross-chain communication between parachains is handled through XCM (Cross-Consensus Messaging), a messaging format that enables token transfers, smart contract calls, and arbitrary data passing between chains. Unlike IBC in Cosmos, XCM messages are validated by the relay chain, providing an additional layer of security. Polkadot has recently transitioned from parachain slot auctions to a coretime marketplace, where block space can be purchased flexibly rather than requiring large DOT commitments for two-year lease periods.
        </p>
      </section>

      <section id="key-projects">
        <h2>Key Polkadot Projects</h2>
        <p>
          Moonbeam provides Ethereum compatibility on Polkadot, allowing Solidity developers to deploy existing contracts with minimal changes while benefiting from cross-chain capabilities. Acala serves as a DeFi hub offering a decentralized stablecoin (aUSD), lending, and liquid staking. Astar Network is a smart contract platform supporting both EVM and WebAssembly runtimes, attracting Japanese enterprise partnerships.
        </p>
        <p>
          Phala Network provides decentralized cloud computing with privacy features through trusted execution environments. Bifrost offers liquid staking for DOT and other assets. Hydration (formerly HydraDX) is building an omnipool DEX that combines all assets into a single pool for maximum capital efficiency. The ecosystem spans DeFi, identity, gaming, and infrastructure, though it has been slower to attract users compared to EVM-based ecosystems.
        </p>
      </section>

      <section id="dot-token">
        <h2>The DOT Token</h2>
        <p>
          DOT serves three primary functions: governance over the network, staking for security, and bonding for parachain connections. DOT holders can vote on runtime upgrades, treasury spending, and protocol parameters through a sophisticated on-chain governance system called OpenGov. Staking DOT with validators currently earns approximately 15-18% APR, with a nomination system that allows users to select up to 16 validators.
        </p>
        <p>
          DOT has undergone a denomination change (a 100x redenomination) and transitioned from a fixed-slot auction model to flexible coretime pricing. The token&apos;s value proposition depends on demand for Polkadot block space, staking participation rates, and the success of the parachain ecosystem in attracting users and developers. Polkadot has also been investing heavily from its treasury into ecosystem development, marketing, and developer tooling to accelerate adoption.
        </p>
      </section>
    </LearnPageLayout>
  );
}
