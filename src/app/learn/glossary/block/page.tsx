import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Block in Blockchain? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what a block is in blockchain technology, what data it contains, how blocks are created, and why they matter for security. A complete guide.",
};

export default function BlockPage() {
  return (
    <LearnPageLayout
      title="What Is a Block?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A block is a container of data that holds a batch of validated transactions on a blockchain. Each block is cryptographically linked to the previous block through its hash, forming the 'chain' in blockchain. Blocks are the fundamental building units that make blockchain technology work — they ensure transactions are permanently recorded and tamper-resistant."
      toc={[
        { id: "definition", title: "What Is a Block?", level: 2 },
        { id: "structure", title: "Block Structure", level: 2 },
        { id: "how-created", title: "How Blocks Are Created", level: 2 },
        { id: "why-it-matters", title: "Why Blocks Matter", level: 2 },
        { id: "block-sizes", title: "Block Size and Limits", level: 2 },
      ]}
      faqs={[
        {
          question: "How long does it take to create a block?",
          answer:
            "Block time varies by blockchain. Bitcoin produces a block approximately every 10 minutes, Ethereum about every 12 seconds, and Solana processes blocks roughly every 400 milliseconds. Block time affects transaction confirmation speed and throughput.",
        },
        {
          question: "What is block height?",
          answer:
            "Block height is the number of blocks that have been added to the blockchain since the genesis block (block 0). It serves as a sequential identifier for blocks. For example, block height 800,000 means 800,000 blocks have been mined since Bitcoin's inception.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Blockchain?", href: "/learn/glossary/blockchain", category: "Glossary" },
        { title: "What Is a Block Explorer?", href: "/learn/glossary/block-explorer", category: "Glossary" },
        { title: "What Is the Genesis Block?", href: "/learn/glossary/genesis-block", category: "Glossary" },
        { title: "What Is a Block Reward?", href: "/learn/glossary/block-reward", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Block?</h2>
      <p>
        A block is a data structure on a blockchain that records a group of transactions. Think of it like a page in a ledger book — each page records several transactions, and the pages are bound together in sequence. Once a block is added to the chain, the transactions within it become a permanent part of the blockchain&apos;s history.
      </p>

      <h2 id="structure">Block Structure</h2>
      <p>
        Every block contains a header and a body. The header includes the block&apos;s hash, the hash of the previous block (creating the chain link), a timestamp, and a Merkle root (a summary hash of all transactions in the block). The body contains the actual transaction data. This structure ensures that any attempt to alter a past transaction would change the block&apos;s hash, breaking the chain link and alerting the network.
      </p>

      <h2 id="how-created">How Blocks Are Created</h2>
      <p>
        In proof-of-work systems like Bitcoin, miners compete to solve a cryptographic puzzle. The winner gets to propose the next block and receives the block reward. In proof-of-stake systems like Ethereum, validators are selected to propose blocks based on their staked amount. In both cases, other network participants verify the block&apos;s validity before it is accepted.
      </p>

      <h2 id="why-it-matters">Why Blocks Matter</h2>
      <p>
        Blocks provide the fundamental security guarantee of blockchain technology. The chaining of blocks through cryptographic hashes makes the ledger tamper-resistant — altering any historical block would require re-computing all subsequent blocks, which is computationally infeasible. This property enables trustless, decentralized record-keeping without relying on a central authority.
      </p>

      <h2 id="block-sizes">Block Size and Limits</h2>
      <p>
        Each blockchain has limits on how much data a block can contain. Bitcoin has a block weight limit of 4 MB, while Ethereum uses a gas limit that caps computational complexity per block. Block size limits create a trade-off between throughput and decentralization — larger blocks allow more transactions per second but require more storage and bandwidth, potentially reducing the number of nodes that can participate.
      </p>
    </LearnPageLayout>
  );
}
