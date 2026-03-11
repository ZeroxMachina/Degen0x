import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Finality in Blockchain? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what finality means in blockchain, the different types of finality, how long finality takes on major networks, and why it matters for transactions.",
};

export default function FinalityPage() {
  return (
    <LearnPageLayout title="What Is Finality?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Finality in blockchain refers to the point at which a transaction is considered irreversible and permanently recorded on the ledger. Once a transaction reaches finality, it cannot be altered, reversed, or double-spent. Different blockchains achieve finality through different mechanisms and at different speeds, ranging from seconds to hours. Understanding finality is crucial for determining when you can safely consider a received payment as confirmed."
      toc={[{ id: "definition", title: "What Is Finality?", level: 2 }, { id: "types-of-finality", title: "Types of Finality", level: 2 }, { id: "finality-by-chain", title: "Finality Across Chains", level: 2 }, { id: "why-finality-matters", title: "Why Finality Matters", level: 2 }]}
      faqs={[{ question: "How many confirmations do I need for finality?", answer: "It varies by chain. Bitcoin requires 6 confirmations (about 60 minutes) for strong probabilistic finality. Ethereum achieves finality in about 13 minutes (2 epochs). Solana has near-instant finality in about 400 milliseconds. Exchanges often require different confirmation counts depending on the asset and amount." },
        { question: "Can finalized transactions be reversed?", answer: "Practically, no. Reversing a finalized transaction would require reorganizing the blockchain, which on major networks like Bitcoin and Ethereum would require controlling a majority of mining/staking power — an economically infeasible attack. However, theoretical reversibility decreases asymptotically with more confirmations rather than reaching absolute zero." }]}
      relatedArticles={[{ title: "Consensus", href: "/learn/glossary/consensus", category: "Glossary" }, { title: "Epoch", href: "/learn/glossary/epoch", category: "Glossary" }, { title: "Consensus Mechanisms", href: "/learn/consensus-mechanisms", category: "Learn Crypto" }, { title: "What Is Blockchain?", href: "/learn/what-is-blockchain", category: "Learn Crypto" }]}
    >
      <h2 id="definition">What Is Finality?</h2>
      <p>Finality is the guarantee that a blockchain transaction, once confirmed, cannot be changed or reversed. It is the blockchain equivalent of a bank transfer being fully settled. Without finality guarantees, users would risk having received payments clawed back through chain reorganizations. The speed and type of finality a blockchain provides affects its suitability for different use cases, from instant payments to high-value settlements.</p>

      <h2 id="types-of-finality">Types of Finality</h2>
      <p>Probabilistic finality means the chance of reversal decreases with each new block but never reaches absolute zero. Bitcoin uses this model, where each confirmation makes reversal exponentially more expensive. Deterministic finality means transactions are absolutely irreversible after a specific point. Chains using BFT-based consensus like Cosmos and Solana provide deterministic finality. Economic finality means reversal is theoretically possible but would cost more than any rational attacker would spend, as in Ethereum&apos;s proof of stake.</p>

      <h2 id="finality-by-chain">Finality Across Chains</h2>
      <p>Bitcoin achieves strong probabilistic finality after 6 blocks (approximately 60 minutes). Ethereum achieves economic finality after 2 epochs (approximately 13 minutes). Solana provides deterministic finality in about 400 milliseconds. Cosmos chains using Tendermint achieve instant finality once a block is committed (1-7 seconds). Avalanche achieves finality in under one second through its novel consensus mechanism. Faster finality enables better user experience and more efficient cross-chain operations.</p>

      <h2 id="why-finality-matters">Why Finality Matters</h2>
      <p>Finality is critical for exchanges determining when deposits are safe to credit, bridges verifying cross-chain transfers, merchants accepting crypto payments, and DeFi protocols confirming collateral deposits. Faster finality enables better user experiences and reduces the risk window for double-spend attacks. For cross-chain communication, finality speed determines how quickly assets can be bridged between networks, making it a key factor in multi-chain application design.</p>
    </LearnPageLayout>
  );
}
