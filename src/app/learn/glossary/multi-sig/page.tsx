import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Multi-Sig? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what multi-signature wallets are, how they work, and why they are essential for securing crypto treasuries and organizations.",
};

export default function MultiSigPage() {
  return (
    <LearnPageLayout
      title="What Is Multi-Sig?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A multi-sig (multi-signature) wallet requires multiple private keys to authorize a transaction, rather than a single key. Configured as 'm-of-n' (for example, 3-of-5), it requires m signatures from n designated key holders. Multi-sigs are the standard security model for DAO treasuries, protocol funds, and team-managed wallets, eliminating single points of failure and requiring collaborative authorization."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-multi-sig", title: "What Is Multi-Sig?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-multi-sig-works", title: "How Multi-Sig Works", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "use-cases", title: "Use Cases", level: 2 },
        { id: "popular-solutions", title: "popular-solutions", level: 2 },
        { id: "popular-multi-sig-solutions", title: "Popular Multi-Sig Solutions", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-multi-sig-matters", title: "Why Multi-Sig Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "What does 3-of-5 multi-sig mean?",
          answer:
            "A 3-of-5 multi-sig means there are 5 authorized key holders, and any 3 of them must sign a transaction for it to execute. This provides redundancy (if 2 keys are lost, the funds are still accessible) and security (an attacker would need to compromise 3 separate keys). The specific m-of-n ratio is chosen based on the security needs of the organization.",
        },
        {
          question: "Are multi-sig wallets harder to use?",
          answer:
            "Multi-sig wallets add complexity since transactions require multiple approvals. Modern interfaces like Safe (formerly Gnosis Safe) have made the process much smoother, with web-based signing and transaction queuing. For individuals, the added friction is a security benefit that prevents impulsive or unauthorized transactions. For organizations, it enforces collaborative decision-making.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a DAO?", href: "/learn/glossary/dao", category: "Glossary" },
        { title: "What Is a Private Key?", href: "/learn/glossary/private-key", category: "Glossary" },
        { title: "What Is a Smart Contract?", href: "/learn/glossary/smart-contract", category: "Glossary" },
        { title: "What Is a Cold Wallet?", href: "/learn/glossary/cold-wallet", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Multi-Sig?</h2>
      <p>
        A multi-signature wallet is a smart contract or protocol feature that requires multiple cryptographic signatures to authorize a transaction. Instead of a single person having unilateral control over funds, multi-sig distributes authority among multiple key holders. This model mirrors real-world practices like requiring multiple executives to sign large checks, adapted for blockchain-based asset management.
      </p>

      <h2 id="how-it-works">How Multi-Sig Works</h2>
      <p>
        When a transaction is proposed from a multi-sig wallet, it enters a pending state. Each authorized signer reviews the transaction details and adds their signature. Once the required threshold of signatures is reached, the transaction is executed on-chain. If the threshold is not met within a specified time or if signers reject it, the transaction is not executed. This creates a deliberate, collaborative approval process.
      </p>

      <h2 id="use-cases">Use Cases</h2>
      <p>
        DAO treasuries commonly use multi-sigs to manage community funds, often requiring core team members or elected delegates to approve spending. Protocol admin keys use multi-sigs to prevent a single compromised key from changing critical parameters. Companies use multi-sigs for corporate crypto custody. Individuals can use multi-sigs for personal security, distributing keys across devices and locations.
      </p>

      <h2 id="popular-solutions">Popular Multi-Sig Solutions</h2>
      <p>
        Safe (formerly Gnosis Safe) is the most widely used multi-sig smart contract on Ethereum and EVM chains, securing hundreds of billions of dollars. Bitcoin supports native multi-sig through Script. Squads is a popular multi-sig solution on Solana. These platforms provide user-friendly interfaces for creating multi-sig wallets, proposing transactions, and managing signers without requiring deep technical knowledge.
      </p>

      <h2 id="why-it-matters">Why Multi-Sig Matters</h2>
      <p>
        Multi-sig is a cornerstone of crypto security and decentralized governance. It prevents single points of failure, protects against key compromise, and enforces collaborative decision-making. For any organization or protocol managing significant funds, multi-sig is not optional — it is essential. The vast majority of the largest DeFi protocols and DAOs rely on multi-sig wallets for their most critical operations.
      </p>
    </LearnPageLayout>
  );
}
