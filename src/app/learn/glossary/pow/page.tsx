import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Proof of Work (PoW)? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what proof of work is, how it secures Bitcoin, and the trade-offs between PoW and proof of stake consensus.",
};

export default function PowPage() {
  return (
    <LearnPageLayout
      title="What Is Proof of Work (PoW)?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="6 min"
      intro="Proof of Work (PoW) is the original blockchain consensus mechanism, first implemented by Bitcoin. Miners compete to solve computationally intensive cryptographic puzzles, and the winner earns the right to add the next block and receive the block reward. PoW secures the network by making attacks prohibitively expensive in terms of hardware and electricity. It remains the consensus mechanism used by Bitcoin, the largest cryptocurrency."
      toc={[
        { id: "definition", title: "What Is Proof of Work?", level: 2 },
        { id: "how-it-works", title: "How PoW Works", level: 2 },
        { id: "security-model", title: "Security Model", level: 2 },
        { id: "energy-debate", title: "The Energy Debate", level: 2 },
        { id: "why-it-matters", title: "Why PoW Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "Why does Bitcoin still use proof of work?",
          answer:
            "Bitcoin's community values PoW's proven security track record, simplicity, and philosophical alignment with requiring real-world resource expenditure to create new money. PoW has secured Bitcoin for over 15 years without a successful attack on the consensus layer. The Bitcoin community generally views the energy expenditure as a feature, not a bug, as it anchors digital value to physical resources.",
        },
        {
          question: "Can proof of work be made more energy efficient?",
          answer:
            "Yes, but not without changing its fundamental nature. Mining hardware becomes more energy-efficient over time (more hashes per watt), and miners increasingly use renewable or stranded energy. However, PoW inherently requires energy expenditure proportional to network security. Some argue this physical cost is necessary for true decentralized security, while others see proof of stake as a superior alternative.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Proof of Stake?", href: "/learn/glossary/pos", category: "Glossary" },
        { title: "What Is Mining?", href: "/learn/glossary/mining", category: "Glossary" },
        { title: "What Is Hash Rate?", href: "/learn/glossary/hash-rate", category: "Glossary" },
        { title: "What Is Consensus?", href: "/learn/glossary/consensus", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Proof of Work?</h2>
      <p>
        Proof of Work is a consensus mechanism that requires participants (miners) to expend computational effort to produce new blocks. The &quot;work&quot; involves repeatedly hashing data until a result meeting the difficulty target is found. This process is intentionally resource-intensive, ensuring that producing blocks is costly while verifying them is easy. PoW was described by Satoshi Nakamoto in the Bitcoin whitepaper and has been operating since January 2009.
      </p>

      <h2 id="how-it-works">How PoW Works</h2>
      <p>
        Miners collect pending transactions, form a candidate block, and repeatedly compute its hash with different nonce values. Each hash is essentially a random lottery ticket. When a miner finds a hash below the difficulty target, they broadcast the block to the network. Other nodes quickly verify the proof (checking that the hash is valid takes negligible effort) and add the block to their chain. The winning miner receives the block reward.
      </p>

      <h2 id="security-model">Security Model</h2>
      <p>
        PoW security derives from the cost of computation. To reverse confirmed transactions, an attacker would need to redo the work for the target block and all subsequent blocks faster than the honest network continues to build the chain. This requires controlling over 51% of total hash power. For Bitcoin, this would require billions of dollars in hardware and enormous ongoing electricity costs, making attacks economically irrational.
      </p>

      <h2 id="energy-debate">The Energy Debate</h2>
      <p>
        PoW&apos;s energy consumption is its most controversial aspect. Bitcoin consumes electricity comparable to some medium-sized countries. Critics argue this is environmentally irresponsible. Proponents counter that mining increasingly uses renewable energy, monetizes stranded energy that would otherwise be wasted, and that the energy expenditure is a necessary cost for securing a globally accessible, censorship-resistant monetary network.
      </p>

      <h2 id="why-it-matters">Why PoW Matters</h2>
      <p>
        Proof of Work proved that decentralized consensus is possible without trusted intermediaries. It solved the double-spending problem that had prevented digital cash for decades. While newer consensus mechanisms like PoS have emerged, PoW remains the most battle-tested approach, securing the largest and most valuable cryptocurrency. Understanding PoW is fundamental to understanding how blockchain technology works and why Bitcoin was revolutionary.
      </p>
    </LearnPageLayout>
  );
}
