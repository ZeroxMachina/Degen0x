import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Are Zero-Knowledge Proofs? ZK Technology Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what zero-knowledge proofs are, how ZK-SNARKs and ZK-STARKs work, their applications in blockchain scaling and privacy, and why ZK technology is transforming crypto.",
  keywords: ["zero knowledge proofs", "ZK proofs", "ZK-SNARK", "ZK-STARK", "zk rollup", "blockchain privacy"],
};

export default function WhatAreZkProofsPage() {
  return (
    <LearnPageLayout
      title="What Are Zero-Knowledge Proofs?"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="10 min"
      intro="Zero-knowledge proofs (ZKPs) are cryptographic methods that allow one party to prove to another that a statement is true without revealing any information beyond the truth of the statement itself. In blockchain, ZK technology enables both scaling solutions that process thousands of transactions with a single proof, and privacy features that verify transactions without exposing their details."
      toc={[
        { id: "concept", title: "concept", level: 2 },
        { id: "the-zero-knowledge-concept", title: "The Zero-Knowledge Concept", level: 2 },
        { id: "how-they-work", title: "how-they-work", level: 2 },
        { id: "how-zk-proofs-work", title: "How ZK Proofs Work", level: 2 },
        { id: "snarks-vs-starks", title: "snarks-vs-starks", level: 2 },
        { id: "snarks-vs-starks", title: "SNARKs vs STARKs", level: 2 },
        { id: "scaling", title: "scaling", level: 2 },
        { id: "zk-proofs-for-scaling", title: "ZK Proofs for Scaling", level: 2 },
        { id: "privacy", title: "privacy", level: 2 },
        { id: "zk-proofs-for-privacy", title: "ZK Proofs for Privacy", level: 2 },
        { id: "applications", title: "applications", level: 2 },
        { id: "current-applications", title: "Current Applications", level: 2 },
        { id: "future", title: "future", level: 2 },
        { id: "the-future-of-zk", title: "The Future of ZK", level: 2 }
      ]}
      faqs={[
        { question: "What is the difference between ZK-SNARKs and ZK-STARKs?", answer: "ZK-SNARKs (Succinct Non-interactive Arguments of Knowledge) produce smaller proofs and are faster to verify but require a trusted setup ceremony. ZK-STARKs (Scalable Transparent Arguments of Knowledge) have no trusted setup requirement and are quantum-resistant but produce larger proofs. Both achieve the same goal through different mathematical approaches." },
        { question: "Are ZK rollups better than optimistic rollups?", answer: "ZK rollups offer faster finality since they do not require a challenge period, and they provide mathematical certainty of correctness. However, they are more complex to build, can be slower to generate proofs, and achieving full EVM compatibility has been challenging. Many experts believe ZK rollups will eventually become dominant, but optimistic rollups currently have greater adoption." },
        { question: "Can ZK proofs make crypto completely private?", answer: "ZK proofs enable selective disclosure — proving specific properties about a transaction without revealing all details. While projects like Zcash offer strong transaction privacy, completely anonymous blockchains face regulatory challenges. The future likely involves privacy-preserving compliance where users can prove regulatory compliance without exposing all financial details." },
        { question: "Do I need to understand the math behind ZK proofs?", answer: "No. As a user, you interact with ZK-powered applications just like any other blockchain application. The cryptographic proofs are generated and verified automatically behind the scenes. Understanding the concept and its implications is valuable, but the mathematics are abstracted away by the infrastructure." },
      ]}
      relatedArticles={[
        { title: "What Is a Rollup?", href: "/learn/what-is-a-rollup", category: "Learn" },
        { title: "What Is Layer 2?", href: "/learn/what-is-layer-2", category: "Learn" },
        { title: "Cryptography Glossary", href: "/learn/glossary/cryptography", category: "Learn" },
        { title: "What Is a Bridge?", href: "/learn/what-is-a-bridge", category: "Learn" },
      ]}
    >
      <section id="concept">
        <h2>The Zero-Knowledge Concept</h2>
        <p>
          The concept of zero-knowledge proofs was introduced in 1985 by Shafi Goldwasser, Silvio Micali, and Charles Rackoff. The classic analogy involves a cave with two paths that connect through a secret door. The prover wants to demonstrate they know the secret to open the door without revealing the secret itself. By repeatedly entering from a random path and exiting from the path the verifier requests, the prover demonstrates knowledge of the secret with increasing certainty — after enough rounds, the probability of faking it becomes negligibly small.
        </p>
        <p>
          In cryptographic terms, a zero-knowledge proof satisfies three properties: completeness (if the statement is true, an honest prover can convince the verifier), soundness (if the statement is false, no dishonest prover can convince the verifier, except with negligible probability), and zero-knowledge (the verifier learns nothing beyond the truth of the statement). These properties enable powerful applications where verification is needed without information disclosure.
        </p>
        <p>
          In the blockchain context, zero-knowledge proofs have become revolutionary tools for both scaling and privacy. For scaling, they allow a single compact proof to verify the correctness of thousands of transactions, dramatically reducing the on-chain data and computation needed. For privacy, they allow users to prove they have sufficient funds, meet compliance requirements, or hold valid credentials without revealing the underlying details.
        </p>
      </section>

      <section id="how-they-work">
        <h2>How ZK Proofs Work</h2>
        <p>
          At a high level, ZK proofs work by encoding a computational statement as a mathematical problem. The prover performs the computation and generates a proof — a compact piece of data that attests to the correctness of the computation. The verifier can check this proof quickly without re-executing the original computation. The mathematical structure ensures that creating a valid proof is only feasible if the underlying computation was performed correctly.
        </p>
        <p>
          Modern ZK proof systems typically involve arithmetic circuits — mathematical representations of computations expressed as polynomial equations. The prover commits to the values of these polynomials and uses sophisticated cryptographic techniques to demonstrate that the committed values satisfy all the required relationships. The verifier checks a small number of conditions to convince themselves, with overwhelming probability, that the proof is valid. The proof itself reveals nothing about the specific values, only that they satisfy the stated relationships.
        </p>
      </section>

      <section id="snarks-vs-starks">
        <h2>SNARKs vs STARKs</h2>
        <p>
          ZK-SNARKs (Succinct Non-interactive Arguments of Knowledge) are the most widely deployed ZK proof system. They produce very small proofs (typically a few hundred bytes) that can be verified in milliseconds with minimal gas cost on-chain. However, most SNARK constructions require a trusted setup — a one-time ceremony where cryptographic parameters are generated. If the ceremony is compromised, fake proofs could be created. Projects mitigate this through multi-party computation ceremonies where the parameters are secure as long as at least one participant is honest.
        </p>
        <p>
          ZK-STARKs (Scalable Transparent Arguments of Knowledge), developed by StarkWare, eliminate the trusted setup requirement entirely, relying instead on publicly verifiable randomness derived from hash functions. STARKs are also quantum-resistant, meaning they remain secure even against future quantum computers. The trade-off is larger proof sizes (tens to hundreds of kilobytes) and higher verification costs. StarkNet uses STARKs for its ZK rollup, while many other projects use SNARK-based systems. Emerging proof systems like Plonky2 and Halo2 aim to combine the best properties of both approaches.
        </p>
      </section>

      <section id="scaling">
        <h2>ZK Proofs for Scaling</h2>
        <p>
          ZK rollups are the primary scaling application of zero-knowledge proofs. They execute transactions off-chain, compute the resulting state, and generate a validity proof that mathematically guarantees the correctness of all state transitions. This proof is submitted to Ethereum along with compressed transaction data, allowing the L1 to verify thousands of transactions by checking a single proof. The result is dramatically lower per-transaction costs while inheriting Ethereum's security.
        </p>
        <p>
          The key advantage over optimistic rollups is finality speed. Since ZK proofs provide mathematical certainty, there is no need for a seven-day challenge period. State updates are considered final as soon as the proof is verified on L1, enabling faster withdrawals and better capital efficiency. Leading ZK rollups include zkSync Era, StarkNet, Polygon zkEVM, Scroll, and Linea, each taking different approaches to achieving EVM compatibility and optimizing proof generation.
        </p>
      </section>

      <section id="privacy">
        <h2>ZK Proofs for Privacy</h2>
        <p>
          Privacy-focused applications of ZK proofs allow users to transact without revealing transaction details on-chain. Zcash pioneered this approach, using ZK-SNARKs to enable shielded transactions where the sender, receiver, and amount are hidden while still proving that the transaction is valid and no tokens are being created from nothing. This provides strong financial privacy comparable to cash transactions.
        </p>
        <p>
          Beyond simple privacy, ZK proofs enable a concept called selective disclosure or privacy-preserving compliance. Users can prove specific properties about themselves — that they are over 18, that they are not on a sanctions list, that they have a valid credential — without revealing any additional information. This approach offers a potential path to reconciling the blockchain industry's privacy values with regulatory compliance requirements, allowing verification without surveillance.
        </p>
      </section>

      <section id="applications">
        <h2>Current Applications</h2>
        <p>
          Beyond rollups and privacy coins, ZK proofs are being applied across the blockchain ecosystem. ZK bridges use validity proofs to enable secure cross-chain asset transfers without trusted intermediaries. ZK identity systems allow users to prove credential claims without revealing the credentials themselves. ZK voting enables verifiable anonymous elections where anyone can confirm the vote tally is correct without learning how individuals voted.
        </p>
        <p>
          ZK machine learning (ZKML) is an emerging field where ZK proofs verify that an AI model was executed correctly on specific inputs without revealing the model parameters or input data. ZK coprocessors allow smart contracts to verify complex off-chain computations that would be too expensive to perform on-chain. These applications are still early but demonstrate the broad applicability of ZK technology beyond its initial blockchain scaling use case.
        </p>
      </section>

      <section id="future">
        <h2>The Future of ZK</h2>
        <p>
          Zero-knowledge proofs are widely considered the most important cryptographic technology in blockchain. Proof generation is becoming dramatically faster through hardware acceleration, proof aggregation, and algorithmic improvements. Client-side proving — generating proofs directly on user devices — is becoming feasible for mobile phones, enabling privacy-preserving applications without relying on centralized provers.
        </p>
        <p>
          The long-term vision includes a world where every computation can be verified without re-execution, where privacy is the default rather than the exception, and where blockchains can scale to millions of transactions per second through recursive proof composition. While significant engineering challenges remain, the pace of ZK research and development is extraordinary, with new breakthroughs emerging regularly and an increasingly vibrant ecosystem of developers building on ZK infrastructure.
        </p>
      </section>
    </LearnPageLayout>
  );
}
