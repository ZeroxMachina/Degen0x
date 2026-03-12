import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Genesis Block? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what a genesis block is, why it is significant, and the history behind Bitcoin's famous Block 0.",
};

export default function GenesisBlockPage() {
  return (
    <LearnPageLayout
      title="What Is a Genesis Block?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="The genesis block is the first block ever created on a blockchain, designated as Block 0 (or Block 1 in some implementations). It is the foundation upon which every subsequent block is built. The genesis block is unique because it has no reference to a previous block. Bitcoin's genesis block, mined by Satoshi Nakamoto on January 3, 2009, is the most famous and contains a hidden message that has become iconic in crypto history."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-genesis-block", title: "What Is a Genesis Block?", level: 2 },
        { id: "bitcoin-genesis", title: "bitcoin-genesis", level: 2 },
        { id: "bitcoin", title: "Bitcoin", level: 2 }
      ]}
      faqs={[
        {
          question: "What message is in Bitcoin's genesis block?",
          answer:
            "Satoshi Nakamoto embedded a newspaper headline in Bitcoin's genesis block coinbase parameter: 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.' This served as both a timestamp proof and a statement about the financial system that motivated Bitcoin's creation.",
        },
        {
          question: "Can the genesis block be changed?",
          answer:
            "No. The genesis block is hardcoded into the blockchain software. Every subsequent block ultimately references back to it. Changing the genesis block would create an entirely different blockchain that is incompatible with the original. It is the immutable starting point of the entire chain.",
        }
      ]}
      relatedArticles={[
        { title: "What Is a Block?", href: "/learn/glossary/block", category: "Glossary" },
        { title: "What Is Blockchain?", href: "/learn/glossary/blockchain", category: "Glossary" },
        { title: "What Is Mining?", href: "/learn/glossary/mining", category: "Glossary" },
        { title: "What Is a Satoshi?", href: "/learn/glossary/satoshi", category: "Glossary" }
      ]}
    >
      <h2 id="definition">What Is a Genesis Block?</h2>
      <p>
        The genesis block is the very first block in a blockchain. Unlike all subsequent blocks, it does not contain a reference to a previous block hash because there is nothing before it. The genesis block is typically hardcoded into the blockchain client software and serves as the root from which the entire chain grows. Every block that follows can trace its lineage back to this original block.
      </p>

      <h2 id="bitcoin-genesis">Bitcoin&apos;s Genesis Block</h2>
      <p>
        Bitcoin&apos;s genesis block (Block 0) was mined by Satoshi Nakamoto on January 3, 2009. It contained a reward of 50 BTC that is unspendable due to a quirk in the code. The block includes a famous embedded message referencing a Times of London headline about bank bailouts, which many interpret as Satoshi&apos;s commentary on the failures of the traditional financial system that Bitcoin was designed to address.
      </p>

      <h2 id="technical-details">Technical Details</h2>
      <p>
        A genesis block has unique properties compared to regular blocks. Its previous block hash is set to all zeros since no prior block exists. In Bitcoin, the genesis block&apos;s reward transaction cannot be spent due to how the original code handled the first block. The genesis block also serves as a checkpoint: nodes use it to verify they are on the correct chain during initial synchronization.
      </p>

      <h2 id="other-genesis-blocks">Other Notable Genesis Blocks</h2>
      <p>
        Every blockchain has its own genesis block. Ethereum&apos;s genesis block was created on July 30, 2015, and included pre-allocated ETH from the crowd sale. Litecoin&apos;s genesis block came in October 2011. When a blockchain forks, the new chain shares all blocks up to the fork point but diverges from there, effectively sharing the same genesis block as the original chain.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        The genesis block is more than a technical artifact. It represents the birth of a new network, economy, and community. For Bitcoin, the genesis block symbolizes the beginning of a movement toward decentralized money. For developers, it is the foundation that all consensus and validation rules build upon. Understanding the genesis block provides context for how blockchains start and establish their initial state.
      </p>
    </LearnPageLayout>
  );
}
