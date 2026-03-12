import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Merkle Tree? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what Merkle trees are, how they enable efficient data verification, and their critical role in blockchain technology.",
};

export default function MerkleTreePage() {
  return (
    <LearnPageLayout
      title="What Is a Merkle Tree?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A Merkle tree is a data structure used in blockchains to efficiently summarize and verify large sets of data. It organizes transactions into a tree of cryptographic hashes, where each leaf node represents a transaction hash and each parent is the hash of its children. The single hash at the top (the Merkle root) serves as a compact fingerprint of all the data, allowing quick verification without downloading the entire dataset."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-merkle-tree", title: "What Is a Merkle Tree?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-merkle-trees-work", title: "How Merkle Trees Work", level: 2 },
        { id: "merkle-proofs", title: "merkle-proofs", level: 2 },
        { id: "merkle-proofs", title: "Merkle Proofs", level: 2 },
        { id: "blockchain-usage", title: "blockchain-usage", level: 2 },
        { id: "usage-in-blockchains", title: "Usage in Blockchains", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-merkle-trees-matter", title: "Why Merkle Trees Matter", level: 2 }
      ]}
      faqs={[
        {
          question: "Who invented Merkle trees?",
          answer:
            "Merkle trees were patented in 1979 by Ralph Merkle, a computer scientist and cryptography pioneer. The data structure predates blockchain by decades and is used in many areas of computer science, including file systems, databases, and version control. Bitcoin adapted Merkle trees for efficient transaction verification.",
        },
        {
          question: "How do Merkle trees make blockchains more efficient?",
          answer:
            "Without Merkle trees, verifying a single transaction would require downloading and checking all transactions in a block. With a Merkle proof, you only need a small number of hashes (logarithmic in the number of transactions) to verify that a transaction is included. This enables lightweight nodes to verify transactions without storing the full blockchain.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Block?", href: "/learn/glossary/block", category: "Glossary" },
        { title: "What Is Blockchain?", href: "/learn/glossary/blockchain", category: "Glossary" },
        { title: "What Is a Node?", href: "/learn/glossary/node", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Merkle Tree?</h2>
      <p>
        A Merkle tree (also called a hash tree) is a hierarchical data structure where every leaf node contains the hash of a data block, and every non-leaf node contains the hash of its child nodes. This recursive hashing creates a tree that culminates in a single root hash. Any change to any piece of underlying data changes the root hash, making tampering immediately detectable.
      </p>

      <h2 id="how-it-works">How Merkle Trees Work</h2>
      <p>
        Consider four transactions: A, B, C, D. Each is hashed individually to create leaf hashes (HA, HB, HC, HD). Then pairs are combined and hashed: HAB = hash(HA + HB) and HCD = hash(HC + HD). Finally, the root is computed: HABCD = hash(HAB + HCD). This root hash uniquely represents all four transactions. Changing even one bit of any transaction produces a completely different root.
      </p>

      <h2 id="merkle-proofs">Merkle Proofs</h2>
      <p>
        A Merkle proof allows verification that a specific piece of data is included in the tree without revealing all the data. To prove transaction B is in the tree, you only need HB, HA (to compute HAB), and HCD (to compute the root). You then verify the computed root matches the known root. For a tree with millions of leaves, the proof requires only a logarithmic number of hashes — extremely efficient.
      </p>

      <h2 id="blockchain-usage">Usage in Blockchains</h2>
      <p>
        In Bitcoin and Ethereum, each block header contains a Merkle root of all transactions in the block. This allows light clients (SPV nodes) to verify that a transaction is included in a block by requesting a Merkle proof from a full node. Merkle trees are also used in airdrop claims (verifying eligibility without revealing the full list) and in state management for smart contract platforms.
      </p>

      <h2 id="why-it-matters">Why Merkle Trees Matter</h2>
      <p>
        Merkle trees are essential infrastructure for scalable and efficient blockchains. They enable lightweight verification, reduce bandwidth requirements, and allow nodes with limited resources to participate in the network. Without Merkle trees, every participant would need to download and process all data to verify anything, making decentralized networks impractically resource-intensive.
      </p>
    </LearnPageLayout>
  );
}
