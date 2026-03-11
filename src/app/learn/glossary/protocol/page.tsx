import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Protocol? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what protocols mean in crypto, how they define the rules of blockchain networks and DeFi applications.",
};

export default function ProtocolPage() {
  return (
    <LearnPageLayout
      title="What Is a Protocol?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="In crypto, a protocol is a set of rules and standards that define how a blockchain network or decentralized application operates. At the base layer, protocols like Bitcoin and Ethereum define consensus rules, transaction formats, and network communication. At the application layer, DeFi protocols like Uniswap and Aave define how specific financial services function. Protocols are the code-based equivalents of laws and regulations."
      toc={[
        { id: "definition", title: "What Is a Protocol?", level: 2 },
        { id: "types", title: "Types of Protocols", level: 2 },
        { id: "protocol-governance", title: "Protocol Governance", level: 2 },
        { id: "composability", title: "Protocol Composability", level: 2 },
        { id: "why-it-matters", title: "Why Protocols Matter", level: 2 },
      ]}
      faqs={[
        {
          question: "What is the difference between a protocol and a platform?",
          answer:
            "A protocol is the set of rules (often embodied in smart contracts) that define how something works. A platform is the user-facing product built on top of a protocol. Uniswap the protocol is the smart contracts that enable token swapping. Uniswap the platform is the web interface that lets you interact with those contracts. Others can build different interfaces for the same protocol.",
        },
        {
          question: "Can protocols be changed?",
          answer:
            "Yes, through governance processes. Base layer protocols change through hard or soft forks coordinated among node operators. Application protocols change through governance votes by token holders. Some protocols have admin keys that allow immediate changes, while others are immutable once deployed. The degree of upgradeability is a key characteristic of any protocol.",
        },
      ]}
      relatedArticles={[
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
        { title: "What Is a Smart Contract?", href: "/learn/glossary/smart-contract", category: "Glossary" },
        { title: "What Is a Fork?", href: "/learn/glossary/fork", category: "Glossary" },
        { title: "What Is Governance Token?", href: "/learn/glossary/governance-token", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Protocol?</h2>
      <p>
        A protocol is a formal set of rules that governs how participants in a network interact. In blockchain, protocols encode the rules of the system into software that every participant runs. These rules determine how transactions are structured, validated, and recorded. Because the rules are enforced by code rather than institutions, protocols create trustless systems where compliance is automatic and guaranteed.
      </p>

      <h2 id="types">Types of Protocols</h2>
      <p>
        Layer 1 protocols (Bitcoin, Ethereum, Solana) define the fundamental blockchain rules: consensus mechanism, block structure, and native token economics. Layer 2 protocols (Arbitrum, Optimism) define how transactions are processed off-chain and settled on L1. Application protocols (Uniswap, Aave, Compound) define specific DeFi functions. Communication protocols (IPFS, libp2p) handle data transfer between nodes.
      </p>

      <h2 id="protocol-governance">Protocol Governance</h2>
      <p>
        Decentralized protocols face unique governance challenges: how do you update rules in a system designed to have no central authority? Solutions range from off-chain social consensus (Bitcoin&apos;s BIP process) to on-chain governance through token voting (many DeFi protocols). Some protocols aim for immutability after deployment, while others prioritize adaptability through governance mechanisms.
      </p>

      <h2 id="composability">Protocol Composability</h2>
      <p>
        One of the most powerful properties of open protocols is composability — the ability of protocols to interact and build on each other. A lending protocol can use a DEX protocol for liquidations, which uses an oracle protocol for price feeds. This &quot;money legos&quot; effect creates an ecosystem where the whole is greater than the sum of its parts, enabling complex financial products from simple building blocks.
      </p>

      <h2 id="why-it-matters">Why Protocols Matter</h2>
      <p>
        Protocols are the foundation of the decentralized economy. They replace the need for trusted institutions with transparent, auditable code. Anyone can verify the rules, and everyone plays by the same ones. Understanding what a protocol does, how it is governed, and what assumptions it makes is essential for anyone using or investing in crypto. The value of the crypto ecosystem ultimately derives from the quality and utility of its protocols.
      </p>
    </LearnPageLayout>
  );
}
