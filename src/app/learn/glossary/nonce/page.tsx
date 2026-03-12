import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Nonce? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what a nonce is in blockchain, how it is used in mining and transactions, and why it matters for network security.",
};

export default function NoncePage() {
  return (
    <LearnPageLayout
      title="What Is a Nonce?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="A nonce (number used once) is a number that serves a specific one-time purpose in blockchain systems. In mining, the nonce is the variable that miners change repeatedly to find a valid block hash. In Ethereum transactions, the nonce is a sequential counter that tracks the number of transactions sent from an address, preventing replay attacks and ensuring transactions are processed in order."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-nonce", title: "What Is a Nonce?", level: 2 },
        { id: "mining-nonce", title: "mining-nonce", level: 2 },
        { id: "nonce-in-mining", title: "Nonce in Mining", level: 2 },
        { id: "transaction-nonce", title: "transaction-nonce", level: 2 },
        { id: "transaction-nonce", title: "Transaction Nonce", level: 2 },
        { id: "nonce-issues", title: "nonce-issues", level: 2 },
        { id: "common-nonce-issues", title: "Common Nonce Issues", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-nonces-matter", title: "Why Nonces Matter", level: 2 }
      ]}
      faqs={[
        {
          question: "What happens if I use the wrong nonce in a transaction?",
          answer:
            "If you submit a transaction with a nonce higher than expected, it will sit pending in the mempool until all transactions with lower nonces are confirmed. If you submit a transaction with the same nonce as a pending transaction, it can replace the earlier one if it has a higher gas price. Wallets typically manage nonces automatically.",
        },
        {
          question: "Can the mining nonce run out?",
          answer:
            "The Bitcoin block header nonce is a 32-bit number, allowing about 4 billion values. Modern ASICs can exhaust all possible nonces in seconds. Miners use additional fields like the extra nonce in the coinbase transaction and the timestamp to effectively create an unlimited search space beyond the 32-bit nonce.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Mining?", href: "/learn/glossary/mining", category: "Glossary" },
        { title: "What Is a Mempool?", href: "/learn/glossary/mempool", category: "Glossary" },
        { title: "What Is a Block?", href: "/learn/glossary/block", category: "Glossary" },
        { title: "What Is Gas?", href: "/learn/glossary/gas", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Nonce?</h2>
      <p>
        The term nonce comes from &quot;number used once.&quot; In cryptography and blockchain, it refers to an arbitrary number used a single time in a specific context. The nonce ensures that old communications or transactions cannot be replayed and provides randomness in otherwise deterministic processes. In blockchain, the term has two distinct meanings depending on whether you are discussing mining or transactions.
      </p>

      <h2 id="mining-nonce">Nonce in Mining</h2>
      <p>
        In proof-of-work mining, the nonce is a field in the block header that miners modify to produce different hash outputs. Since a cryptographic hash function produces completely different outputs for even tiny input changes, incrementing the nonce by one produces an entirely new hash. Miners iterate through nonce values until they find one that produces a hash below the difficulty target, proving they performed computational work.
      </p>

      <h2 id="transaction-nonce">Transaction Nonce</h2>
      <p>
        On Ethereum, each account has a nonce that starts at 0 and increments by 1 with each outgoing transaction. The first transaction from an address has nonce 0, the second has nonce 1, and so on. This sequential numbering prevents double-spending (the same transaction cannot be submitted twice) and ensures transactions are processed in order. It also enables transaction replacement by submitting a new transaction with the same nonce.
      </p>

      <h2 id="nonce-issues">Common Nonce Issues</h2>
      <p>
        Nonce gaps occur when a transaction fails or gets stuck, causing subsequent transactions to remain pending because they depend on the skipped nonce. Stuck transactions can be resolved by resubmitting with the same nonce and higher gas. DApps and wallets sometimes create nonce issues when multiple transactions are submitted rapidly. Advanced users may manually manage nonces for complex transaction sequences.
      </p>

      <h2 id="why-it-matters">Why Nonces Matter</h2>
      <p>
        Nonces are a simple but critical mechanism for blockchain security and ordering. The mining nonce is at the heart of proof-of-work consensus, making block production computationally expensive and unpredictable. The transaction nonce prevents replay attacks and enforces sequencing. Without nonces, blockchains would be vulnerable to fundamental security issues including double-spending and transaction replay.
      </p>
    </LearnPageLayout>
  );
}
