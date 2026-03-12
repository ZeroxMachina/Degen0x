import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Proof of Work (PoW) Explained (${CURRENT_YEAR}) | degen0x`,
  description:
    "Understand how Proof of Work consensus works, its role in securing Bitcoin and other blockchains, the mining process, energy debate, and comparison with Proof of Stake.",
};

export default function ProofOfWorkPage() {
  return (
    <LearnPageLayout
      title="Proof of Work (PoW) Explained"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Proof of Work (PoW) is the original consensus mechanism used by Bitcoin and several other blockchains to validate transactions and secure the network. It requires participants called miners to expend computational energy solving complex mathematical puzzles, with the winner earning the right to add the next block of transactions and receive a reward. PoW is the foundation upon which the first decentralized digital currency was built and remains one of the most battle-tested security models in blockchain."
      toc={[
        { id: "what-is-pow", title: "what-is-pow", level: 2 },
        { id: "what-is-proof-of-work", title: "What Is Proof of Work?", level: 2 },
        { id: "mining-process", title: "mining-process", level: 2 },
        { id: "the-mining-process", title: "The Mining Process", level: 2 },
        { id: "security-model", title: "security-model", level: 2 },
        { id: "security-model-and-51-attacks", title: "Security Model and 51% Attacks", level: 2 },
        { id: "energy-debate", title: "energy-debate", level: 2 },
        { id: "the-energy-debate", title: "The Energy Debate", level: 2 },
        { id: "pow-vs-pos", title: "pow-vs-pos", level: 2 },
        { id: "pow-vs-pos-key-differences", title: "PoW vs PoS: Key Differences", level: 2 }
      ]}
      faqs={[
        {
          question: "Why does Proof of Work require so much energy?",
          answer:
            "PoW intentionally makes block creation computationally expensive to prevent spam and attacks. Miners must perform trillions of hash calculations to find a valid block, which requires specialized hardware and significant electricity. This energy expenditure is what makes the network secure — attacking it would require matching or exceeding the honest miners' total computational power.",
        },
        {
          question: "Can you mine Bitcoin with a regular computer?",
          answer:
            "In Bitcoin's early days, mining was possible with a standard CPU. Today, the difficulty has increased so dramatically that profitable Bitcoin mining requires specialized hardware called ASICs (Application-Specific Integrated Circuits). Some smaller PoW cryptocurrencies can still be mined with consumer GPUs.",
        },
        {
          question: "Is Proof of Work becoming obsolete?",
          answer:
            "While many newer blockchains use Proof of Stake, PoW remains the consensus mechanism for Bitcoin, the largest cryptocurrency by market cap. Bitcoin's community values PoW for its proven security track record and the physical cost required to attack the network. PoW and PoS serve different design philosophies and will likely coexist.",
        },
      ]}
      relatedArticles={[
        { title: "Proof of Stake Explained", href: "/learn/proof-of-stake", category: "Learn" },
        { title: "Consensus Mechanisms Explained", href: "/learn/consensus-mechanisms", category: "Learn" },
        { title: "What Is Blockchain?", href: "/learn/what-is-blockchain", category: "Learn" },
        { title: "The Blockchain Trilemma", href: "/learn/blockchain-trilemma", category: "Learn" },
      ]}
    >
      <section id="what-is-pow">
        <h2>What Is Proof of Work?</h2>
        <p>
          Proof of Work is a consensus mechanism that requires network participants to solve a computationally difficult puzzle before they can add a new block of transactions to the blockchain. The concept predates Bitcoin — it was originally proposed in 1993 as a way to combat email spam and was later refined by Adam Back in his Hashcash system. Satoshi Nakamoto adapted the concept for Bitcoin, using it to solve the double-spending problem in a decentralized digital currency.
        </p>
        <p>
          The core idea is straightforward: making it expensive to create new blocks prevents malicious actors from flooding the network with fraudulent transactions. Miners must invest real-world resources — hardware and electricity — to participate, which creates an economic incentive to play by the rules. Honest mining is profitable, while attempting to cheat costs more than it could possibly gain.
        </p>
      </section>

      <section id="mining-process">
        <h2>The Mining Process</h2>
        <p>
          Mining begins when transactions are broadcast to the network and collected into a candidate block. The miner constructs this block with a header containing the previous block's hash, a Merkle root of all included transactions, a timestamp, and a nonce — a variable number that miners repeatedly change. The goal is to find a nonce that, when combined with the rest of the header and run through the SHA-256 hash function, produces a hash below a target threshold set by the network's difficulty.
        </p>
        <p>
          Because hash functions are one-way and unpredictable, there is no shortcut to finding a valid nonce other than brute-force trial and error. Miners perform billions or trillions of hash calculations per second using specialized ASIC hardware. When a miner discovers a valid hash, they broadcast the completed block to the network. Other nodes quickly verify the solution (verification is computationally trivial even though finding the solution is hard) and, if valid, add the block to their copy of the chain.
        </p>
        <p>
          The successful miner receives a block reward — newly minted cryptocurrency plus transaction fees from all transactions included in the block. Bitcoin's block reward halves approximately every four years, creating a predictable and decreasing supply schedule that contributes to its scarcity-driven value proposition.
        </p>
      </section>

      <section id="security-model">
        <h2>Security Model and 51% Attacks</h2>
        <p>
          PoW security is rooted in the economic cost of computation. To successfully attack a PoW blockchain, an adversary would need to control more than 50% of the network's total hash rate — a so-called 51% attack. With majority hash power, an attacker could theoretically reverse recent transactions (double-spend) or prevent new transactions from being confirmed. However, the attacker could not steal funds from wallets or create coins out of thin air.
        </p>
        <p>
          For Bitcoin, a 51% attack is economically infeasible. The network's hash rate is so enormous that acquiring and operating the necessary hardware and electricity would cost billions of dollars, far exceeding any potential gains from an attack. Smaller PoW blockchains with less hash rate are more vulnerable, and several have experienced successful 51% attacks, underscoring the importance of network size and hash rate in PoW security.
        </p>
      </section>

      <section id="energy-debate">
        <h2>The Energy Debate</h2>
        <p>
          The energy consumption of PoW blockchains, particularly Bitcoin, is one of the most debated topics in the cryptocurrency space. Critics argue that the electricity used by Bitcoin mining rivals that of some small countries and contributes to carbon emissions. Proponents counter that a significant and growing share of Bitcoin mining uses renewable energy, that mining operations often utilize stranded or wasted energy that would otherwise go unused, and that the energy expenditure is the fundamental source of Bitcoin's security.
        </p>
        <p>
          The debate often lacks nuance. Bitcoin's energy use should be evaluated in the context of the value it provides — a censorship-resistant, globally accessible monetary network — and compared against the energy footprint of the traditional financial system, including bank branches, data centers, armored vehicles, and military expenditures to defend fiat currencies. Nonetheless, the energy question has motivated many newer blockchain projects to adopt Proof of Stake as a more energy-efficient alternative.
        </p>
      </section>

      <section id="pow-vs-pos">
        <h2>PoW vs PoS: Key Differences</h2>
        <p>
          The fundamental difference between Proof of Work and Proof of Stake lies in what participants must risk. In PoW, miners risk capital expenditure on hardware and operational costs for electricity. In PoS, validators risk their staked cryptocurrency, which can be slashed (partially destroyed) if they act dishonestly. Both mechanisms create economic incentives for honest behavior, but they do so through different means.
        </p>
        <p>
          PoW tends to favor decentralization of security through physical distribution of mining hardware, though economies of scale have led to mining pool concentration. PoS can achieve much higher transaction throughput and uses a fraction of the energy, but introduces different centralization risks related to wealth concentration among large stakers. Neither system is objectively superior — the choice depends on a blockchain's specific design goals and the trade-offs its community is willing to accept.
        </p>
      </section>
    </LearnPageLayout>
  );
}
