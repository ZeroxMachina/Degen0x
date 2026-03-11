import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Consensus Mechanism? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what consensus mechanisms are, how PoW and PoS work, other types of consensus, and why they are essential for blockchain security.",
};

export default function ConsensusPage() {
  return (
    <LearnPageLayout
      title="What Is a Consensus Mechanism?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="6 min"
      intro="A consensus mechanism is the method by which a decentralized blockchain network agrees on the current state of the ledger. Since there is no central authority to validate transactions, the network needs rules that allow independent participants to reach agreement on which transactions are valid and in what order they occurred. The two dominant approaches are Proof of Work and Proof of Stake."
      toc={[
        { id: "definition", title: "What Is Consensus?", level: 2 },
        { id: "pow", title: "Proof of Work (PoW)", level: 2 },
        { id: "pos", title: "Proof of Stake (PoS)", level: 2 },
        { id: "others", title: "Other Mechanisms", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "Which consensus mechanism is best?",
          answer:
            "There is no universally 'best' mechanism — each involves trade-offs. PoW offers proven security but consumes significant energy. PoS is energy-efficient but faces concerns about wealth concentration. The optimal choice depends on a network's priorities regarding security, decentralization, scalability, and environmental impact.",
        },
        {
          question: "Why did Ethereum switch from PoW to PoS?",
          answer:
            "Ethereum transitioned to PoS (called 'The Merge') in September 2022 primarily to reduce energy consumption by approximately 99.95%, improve scalability potential for future upgrades like sharding, and align with environmental sustainability goals while maintaining security.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Proof of Work?", href: "/learn/glossary/pow", category: "Glossary" },
        { title: "What Is Proof of Stake?", href: "/learn/glossary/pos", category: "Glossary" },
        { title: "What Is Blockchain?", href: "/learn/glossary/blockchain", category: "Glossary" },
        { title: "What Is a Node?", href: "/learn/glossary/node", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Consensus?</h2>
      <p>
        In a decentralized network, no single entity decides what the &quot;truth&quot; is. Consensus mechanisms solve this problem by creating rules and incentives that lead all honest participants to agree on the same version of the ledger. This agreement must be achieved even in the presence of malicious actors who may try to manipulate the system.
      </p>

      <h2 id="pow">Proof of Work (PoW)</h2>
      <p>
        PoW requires miners to expend computational energy to solve complex mathematical puzzles. The first miner to find a valid solution gets to propose the next block and earn the block reward. The difficulty of the puzzle adjusts to maintain consistent block times. Bitcoin, the largest PoW blockchain, has operated securely since 2009 using this mechanism.
      </p>

      <h2 id="pos">Proof of Stake (PoS)</h2>
      <p>
        PoS requires validators to lock up (stake) cryptocurrency as collateral. Validators are selected to propose blocks based on their stake size and other factors. If a validator acts maliciously, their stake is slashed (partially or fully confiscated). PoS uses far less energy than PoW and is used by Ethereum, Solana, Cardano, and most modern blockchains.
      </p>

      <h2 id="others">Other Mechanisms</h2>
      <p>
        Delegated Proof of Stake (DPoS) lets token holders vote for validators. Proof of History (PoH), used by Solana, creates a verifiable passage of time. Proof of Authority (PoA) relies on approved validators with known identities. Practical Byzantine Fault Tolerance (pBFT) is used in permissioned blockchains. Each mechanism offers different trade-offs in the trilemma of security, decentralization, and scalability.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        The consensus mechanism is the most fundamental design choice in any blockchain. It determines the network&apos;s security model, energy consumption, transaction throughput, finality time, and degree of decentralization. Understanding consensus helps you evaluate blockchain projects and understand why different networks make different trade-offs.
      </p>
    </LearnPageLayout>
  );
}
