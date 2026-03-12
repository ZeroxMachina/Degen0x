import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Difficulty? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what mining difficulty is, how it adjusts, and why it matters for blockchain security and stability.",
};

export default function DifficultyPage() {
  return (
    <LearnPageLayout
      title="What Is Difficulty?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Difficulty is a measure of how hard it is to find a valid hash for a new block on a proof-of-work blockchain. The network automatically adjusts difficulty to keep block production at a consistent rate, regardless of how much total computing power (hash rate) is participating. As more miners join, difficulty rises; as miners leave, it falls."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-difficulty", title: "What Is Difficulty?", level: 2 },
        { id: "how-adjustment-works", title: "how-adjustment-works", level: 2 },
        { id: "how-difficulty-adjustment-works", title: "How Difficulty Adjustment Works", level: 2 },
        { id: "bitcoin-difficulty", title: "bitcoin-difficulty", level: 2 },
        { id: "bitcoin-difficulty", title: "Bitcoin Difficulty", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-difficulty-matters", title: "Why Difficulty Matters", level: 2 },
        { id: "difficulty-and-profitability", title: "difficulty-and-profitability", level: 2 },
        { id: "difficulty-and-mining-profitability", title: "Difficulty and Mining Profitability", level: 2 }
      ]}
      faqs={[
        {
          question: "How often does Bitcoin's difficulty adjust?",
          answer:
            "Bitcoin's difficulty adjusts every 2,016 blocks, roughly every two weeks. The protocol compares the actual time taken to mine those blocks against the expected time (20,160 minutes) and scales difficulty proportionally.",
        },
        {
          question: "Does higher difficulty mean the network is more secure?",
          answer:
            "Yes. Higher difficulty means an attacker would need more computational power to attempt a 51% attack. As difficulty rises with hash rate, the cost of attacking the network increases proportionally.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Hash Rate?", href: "/learn/glossary/hash-rate", category: "Glossary" },
        { title: "What Is Proof of Work?", href: "/learn/glossary/pow", category: "Glossary" },
        { title: "What Is Mining?", href: "/learn/glossary/mining", category: "Glossary" },
        { title: "What Is a Block?", href: "/learn/glossary/block", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Difficulty?</h2>
      <p>
        In proof-of-work blockchains, miners compete to find a hash value below a specific target. Difficulty defines how small that target is. A higher difficulty means the target is smaller, requiring more computational guesses on average to find a valid hash. This mechanism ensures blocks are produced at a predictable cadence regardless of changes in total network hash rate.
      </p>

      <h2 id="how-adjustment-works">How Difficulty Adjustment Works</h2>
      <p>
        The network periodically evaluates how long recent blocks took to produce compared to the desired interval. If blocks came too fast, difficulty increases; if they came too slowly, it decreases. This self-regulating feedback loop is one of the most elegant aspects of proof-of-work design, maintaining stability without any central coordinator.
      </p>

      <h2 id="bitcoin-difficulty">Bitcoin Difficulty</h2>
      <p>
        Bitcoin recalculates difficulty every 2,016 blocks (approximately every two weeks). The adjustment factor is capped at 4x in either direction per period to prevent drastic swings. Since Bitcoin&apos;s launch, difficulty has increased by many orders of magnitude, reflecting the enormous growth in mining infrastructure from CPUs to specialized ASIC hardware.
      </p>

      <h2 id="why-it-matters">Why Difficulty Matters</h2>
      <p>
        Difficulty is critical for network security and economic predictability. It ensures that new coins are issued at a steady rate, preserving the monetary policy embedded in the protocol. Without difficulty adjustment, a sudden influx of mining power would produce blocks too quickly, accelerating coin issuance and undermining scarcity.
      </p>

      <h2 id="difficulty-and-profitability">Difficulty and Mining Profitability</h2>
      <p>
        Miners must weigh difficulty against block rewards and electricity costs. When difficulty spikes, the same hardware earns fewer rewards per unit of time. This dynamic creates natural economic cycles: high prices attract miners, raising difficulty, which squeezes margins and pushes less efficient operators offline, eventually lowering difficulty again.
      </p>
    </LearnPageLayout>
  );
}
