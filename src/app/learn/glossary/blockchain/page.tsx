import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Blockchain? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what blockchain technology is, how it works, the different types, and why it matters beyond cryptocurrency. A comprehensive guide to distributed ledger technology.",
};

export default function BlockchainPage() {
  return (
    <LearnPageLayout
      title="What Is Blockchain?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="6 min"
      intro="A blockchain is a distributed, immutable digital ledger that records transactions across a network of computers. Each block of transactions is cryptographically linked to the previous one, creating a tamper-resistant chain. This technology underpins all cryptocurrencies and enables trustless, transparent record-keeping without relying on a central authority."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-blockchain", title: "What Is Blockchain?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-blockchain-works", title: "How Blockchain Works", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-blockchains", title: "Types of Blockchains", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-blockchain-matters", title: "Why Blockchain Matters", level: 2 },
        { id: "beyond-crypto", title: "beyond-crypto", level: 2 },
        { id: "beyond-cryptocurrency", title: "Beyond Cryptocurrency", level: 2 }
      ]}
      faqs={[
        {
          question: "Is blockchain the same as Bitcoin?",
          answer:
            "No. Bitcoin is a cryptocurrency that uses blockchain technology. Blockchain is the underlying technology — a method of recording data. Many other cryptocurrencies and non-financial applications also use blockchain technology. Think of blockchain as the internet and Bitcoin as one website built on it.",
        },
        {
          question: "Can blockchain data be changed?",
          answer:
            "For practical purposes, no. Once data is recorded in a block and confirmed by the network, altering it would require re-computing all subsequent blocks and convincing a majority of the network to accept the change. This is computationally infeasible on established blockchains like Bitcoin and Ethereum.",
        },
        {
          question: "Is blockchain technology secure?",
          answer:
            "Blockchain itself is highly secure due to its cryptographic foundations and distributed nature. However, the applications built on blockchains (smart contracts, bridges, exchanges) can have vulnerabilities. Most crypto security breaches exploit application-layer flaws, not the blockchain itself.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Block?", href: "/learn/glossary/block", category: "Glossary" },
        { title: "What Is Consensus?", href: "/learn/glossary/consensus", category: "Glossary" },
        { title: "What Is a Node?", href: "/learn/glossary/node", category: "Glossary" },
        { title: "What Is Decentralization?", href: "/learn/glossary/decentralization", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Blockchain?</h2>
      <p>
        A blockchain is a type of distributed ledger technology (DLT) where data is structured into blocks that are chained together chronologically. Each block contains a set of transactions, a timestamp, and a cryptographic hash of the previous block. This linking mechanism ensures that no block can be modified without invalidating all subsequent blocks, making the ledger effectively immutable.
      </p>

      <h2 id="how-it-works">How Blockchain Works</h2>
      <p>
        When a user initiates a transaction, it is broadcast to a peer-to-peer network of computers (nodes). The nodes validate the transaction using the blockchain&apos;s consensus rules. Valid transactions are grouped into a block by a miner or validator. The new block is verified by other nodes and added to the chain. Every node maintains a full copy of the blockchain, ensuring there is no single point of failure.
      </p>
      <p>
        The consensus mechanism is what makes this work without a central authority. Whether it is proof of work, proof of stake, or another method, the consensus process ensures that all participants agree on the same version of the truth. This eliminates the need for trusted intermediaries like banks or clearinghouses.
      </p>

      <h2 id="types">Types of Blockchains</h2>
      <p>
        Public blockchains (like Bitcoin and Ethereum) are open to anyone and fully decentralized. Private blockchains restrict participation to approved entities, offering more control but less decentralization. Consortium blockchains are governed by a group of organizations. Each type offers different trade-offs between openness, performance, and control.
      </p>

      <h2 id="why-it-matters">Why Blockchain Matters</h2>
      <p>
        Blockchain enables trustless transactions — parties who do not know or trust each other can exchange value reliably. It creates transparency (all transactions are auditable), censorship resistance (no single entity can block transactions), and permanence (records cannot be altered). These properties make it valuable for finance, supply chain management, voting, identity, and many other applications.
      </p>

      <h2 id="beyond-crypto">Beyond Cryptocurrency</h2>
      <p>
        While cryptocurrency is the most well-known application, blockchain technology has broader uses. Supply chain tracking, digital identity verification, intellectual property management, real estate transactions, and healthcare records are all being explored. The tokenization of real-world assets on blockchains represents a massive potential shift in how traditional finance operates.
      </p>
    </LearnPageLayout>
  );
}
