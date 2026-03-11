import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is an Atomic Swap? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what atomic swaps are, how they enable trustless cross-chain cryptocurrency exchanges, and the technology behind hash time-locked contracts.",
  keywords: ["atomic swap", "cross-chain swap", "HTLC", "trustless exchange", "peer-to-peer swap"],
};

export default function AtomicSwapPage() {
  return (
    <LearnPageLayout title="What Is an Atomic Swap?" categoryName="Glossary" categorySlug="learn/glossary" readTime="4 min" intro="An atomic swap is a smart contract technology that enables the exchange of cryptocurrencies across different blockchains without requiring a trusted intermediary. The swap is 'atomic' because it either completes entirely or does not execute at all — there is no scenario where one party loses funds while the other gains."
      toc={[{ id: "definition", title: "Definition", level: 2 },{ id: "how-it-works", title: "How It Works", level: 2 },{ id: "applications", title: "Applications", level: 2 }]}
      faqs={[
        { question: "How do atomic swaps work?", answer: "Atomic swaps use Hash Time-Locked Contracts (HTLCs). Both parties create conditional transactions locked by the same cryptographic hash. When one party reveals the secret (preimage), both transactions can be claimed. If the secret is not revealed within the time limit, both transactions are refunded automatically." },
        { question: "Are atomic swaps widely used?", answer: "While technically elegant, atomic swaps have seen limited mainstream adoption due to liquidity limitations, speed constraints, and the requirement for both chains to support compatible scripting. Cross-chain bridges and DEXs have become more popular alternatives for cross-chain trading." },
      ]}
      relatedArticles={[
        { title: "Cross-Chain", href: "/learn/glossary/cross-chain", category: "Glossary" },
        { title: "Bridge", href: "/learn/glossary/bridge", category: "Glossary" },
        { title: "What Is Interoperability?", href: "/learn/what-is-interoperability", category: "Learn" },
        { title: "DEX", href: "/learn/glossary/dex", category: "Glossary" },
      ]}
    >
      <section id="definition"><h2>Definition</h2><p>An atomic swap is a peer-to-peer exchange of cryptocurrencies between different blockchains that executes without any trusted third party. The term "atomic" refers to the indivisible nature of the operation — like an atomic database transaction, it either succeeds completely or fails completely, ensuring neither party can cheat the other. Atomic swaps were first theorized in 2013 and the first on-chain atomic swap between Bitcoin and Litecoin was performed in 2017.</p></section>
      <section id="how-it-works"><h2>How It Works</h2><p>Atomic swaps use Hash Time-Locked Contracts (HTLCs), which combine cryptographic hash functions with time-based expiration. Alice creates a secret value, generates its hash, and locks her BTC in a contract that requires the secret to claim. Bob sees the hash and locks his LTC in a similar contract using the same hash. Alice claims Bob's LTC by revealing the secret, which Bob then uses to claim Alice's BTC. If neither party acts within the time limit, both contracts expire and funds are returned to their original owners.</p></section>
      <section id="applications"><h2>Applications</h2><p>Atomic swaps enable truly trustless cross-chain trading without centralized exchanges or bridge protocols. They are used in decentralized exchange protocols, cross-chain liquidity networks, and Bitcoin's Lightning Network (which uses a similar mechanism for payment routing). While direct on-chain atomic swaps face practical limitations around speed and liquidity, the underlying cryptographic principles inform many modern cross-chain solutions and remain an important building block for blockchain interoperability.</p></section>
    </LearnPageLayout>
  );
}
