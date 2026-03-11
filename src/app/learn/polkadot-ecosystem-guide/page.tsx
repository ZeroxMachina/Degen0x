import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Polkadot Ecosystem Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to the Polkadot ecosystem including parachains, shared security, XCM messaging, DOT token, and how to navigate the heterogeneous multi-chain network.",
  keywords: ["Polkadot", "DOT", "parachains", "Polkadot ecosystem", "XCM", "shared security"],
};

export default function PolkadotEcosystemGuidePage() {
  return (
    <LearnPageLayout
      title="Polkadot Ecosystem Guide"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="9 min"
      intro="Polkadot is a heterogeneous multi-chain network designed to connect specialized blockchains (parachains) under a shared security umbrella. Founded by Ethereum co-founder Gavin Wood, Polkadot enables different blockchains to communicate and share security through its unique relay chain architecture, creating an interoperable ecosystem of purpose-built chains."
      toc={[
        { id: "overview", title: "Polkadot Overview", level: 2 },
        { id: "architecture", title: "Relay Chain Architecture", level: 2 },
        { id: "parachains", title: "Parachains", level: 2 },
        { id: "ecosystem", title: "Key Projects", level: 2 },
        { id: "dot-token", title: "DOT Token", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 },
      ]}
      faqs={[
        { question: "What is a parachain?", answer: "A parachain is a specialized blockchain connected to Polkadot's relay chain. Parachains benefit from shared security provided by Polkadot's validators and can communicate with other parachains through XCM messaging. Each parachain can be optimized for its specific use case while inheriting the security of the broader network." },
        { question: "How does Polkadot differ from Cosmos?", answer: "Both enable multi-chain ecosystems, but differ in security models. Polkadot provides shared security from the relay chain to all parachains, while Cosmos chains each secure themselves independently. Polkadot parachains are more integrated but less sovereign, while Cosmos chains are fully sovereign but must bootstrap their own security." },
        { question: "What can I do with DOT?", answer: "DOT is used for governance (voting on protocol changes), staking (securing the network and earning rewards), bonding (securing parachain slots), and paying transaction fees. DOT holders have direct influence over the protocol's evolution through on-chain governance." },
      ]}
      relatedArticles={[
        { title: "Cosmos Ecosystem Guide", href: "/learn/cosmos-ecosystem-guide", category: "Learn" },
        { title: "What Is Interoperability?", href: "/learn/what-is-interoperability", category: "Learn" },
        { title: "Parachain Glossary", href: "/learn/glossary/parachain", category: "Learn" },
        { title: "What Is Consensus?", href: "/learn/what-is-consensus", category: "Learn" },
      ]}
    >
      <section id="overview">
        <h2>Polkadot Overview</h2>
        <p>Polkadot was created by Gavin Wood, who co-founded Ethereum and created the Solidity programming language. His vision was a more scalable, interoperable blockchain platform where specialized chains share security and communicate natively. The project has attracted significant developer activity and institutional interest, with a treasury funding ecosystem development through on-chain governance.</p>
        <p>The Polkadot ecosystem is built on the Substrate framework, a modular blockchain development kit that enables teams to build custom chains with production-ready components. Substrate provides the flexibility to create highly specialized blockchains while maintaining compatibility with the Polkadot relay chain for shared security and cross-chain messaging.</p>
      </section>
      <section id="architecture">
        <h2>Relay Chain Architecture</h2>
        <p>The relay chain is Polkadot's central chain responsible for network security, consensus, and cross-chain interoperability. It does not support smart contracts directly — instead, it coordinates the network of parachains, providing shared security through its validator set and enabling cross-chain communication through the XCM messaging format.</p>
        <p>Polkadot's Nominated Proof of Stake (NPoS) consensus selects validators through a sophisticated nomination process where DOT holders back validators they trust. This creates a highly secure and decentralized validator set. The relay chain achieves finality through GRANDPA, a finality gadget that can finalize blocks rapidly even under adverse network conditions.</p>
      </section>
      <section id="parachains">
        <h2>Parachains</h2>
        <p>Parachains are purpose-built blockchains that connect to the relay chain through parachain slots. Historically, slots were obtained through candle auctions where projects bid DOT tokens. Polkadot has been evolving toward a more flexible model with agile coretime, where blockchains can purchase block production time on-demand rather than committing to multi-year slot leases.</p>
        <p>Active parachains include Moonbeam (EVM-compatible smart contracts), Acala (DeFi hub), Astar (multi-VM smart contracts), and Phala (privacy-preserving cloud computing). Each parachain processes its own transactions while leveraging the relay chain's validators for security, creating a scalable architecture where overall throughput increases with each new parachain added to the network.</p>
      </section>
      <section id="ecosystem">
        <h2>Key Projects</h2>
        <p>Moonbeam provides full EVM compatibility on Polkadot, allowing Ethereum dApps to deploy with minimal changes while accessing Polkadot's multi-chain capabilities. Acala serves as the DeFi hub with a decentralized stablecoin (aUSD), DEX, and liquid staking. Astar Network supports both EVM and WebAssembly smart contracts, creating a versatile development platform that bridges the Ethereum and Polkadot developer ecosystems.</p>
        <p>The broader ecosystem includes identity solutions (KILT Protocol), supply chain tracking (OriginTrail), decentralized storage (Crust Network), and privacy computing (Phala Network). This diversity demonstrates the versatility of the parachain model for supporting specialized blockchain applications across many verticals.</p>
      </section>
      <section id="dot-token">
        <h2>DOT Token</h2>
        <p>DOT serves three primary functions: governance (voting on referenda that control protocol upgrades), staking (securing the network with typical yields of 10-15%), and parachain bonding. Polkadot's OpenGov system enables any DOT holder to propose and vote on changes, creating one of the most active on-chain governance systems in crypto.</p>
        <p>The Polkadot treasury, funded by network inflation, holds significant resources that are deployed through governance votes to fund ecosystem development, marketing, tooling, and partnerships. This community-controlled funding model ensures that development priorities align with stakeholder interests rather than a central foundation's decisions.</p>
      </section>
      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>Install the Polkadot.js wallet extension or use Talisman wallet, which provides a more user-friendly experience for the Polkadot ecosystem. Acquire DOT through exchanges and consider staking to earn rewards while supporting network security. Explore parachains like Moonbeam for familiar EVM experiences or Acala for Polkadot-native DeFi.</p>
        <p>Participate in governance through the Polkadot portal to influence the network's evolution. The ecosystem rewards engaged participants through various mechanisms, and understanding the governance system gives you insight into the protocol's direction and priorities.</p>
      </section>
    </LearnPageLayout>
  );
}
