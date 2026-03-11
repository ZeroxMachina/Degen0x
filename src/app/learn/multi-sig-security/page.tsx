import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Multi-Signature Wallets for Security (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about multi-signature wallets: how they work, common configurations like 2-of-3, use cases for individuals and organizations, popular multi-sig solutions, and best practices.",
};

export default function MultiSigSecurityPage() {
  return (
    <LearnPageLayout
      title="Multi-Signature Wallets for Security"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="Multi-signature (multi-sig) wallets require multiple private keys to authorize a transaction, providing a critical security upgrade over single-key wallets. Instead of one key controlling all funds, a multi-sig configuration like 2-of-3 requires at least two out of three designated keys to sign any transaction. This eliminates the single point of failure inherent in standard wallets and is the security model of choice for DAO treasuries, crypto businesses, and security-conscious individuals holding significant assets."
      toc={[
        { id: "how-it-works", title: "How Multi-Sig Wallets Work", level: 2 },
        { id: "configurations", title: "Common Configurations", level: 2 },
        { id: "use-cases", title: "Use Cases", level: 2 },
        { id: "solutions", title: "Popular Multi-Sig Solutions", level: 2 },
        { id: "best-practices", title: "Best Practices", level: 2 },
      ]}
      faqs={[
        {
          question: "Is a multi-sig wallet harder to use than a regular wallet?",
          answer:
            "Multi-sig wallets add an extra step to transactions: one signer proposes a transaction, and the required number of additional signers must approve it. This process is straightforward with modern interfaces but does add time and coordination requirements. For everyday small transactions, a standard hardware wallet may be more practical, while multi-sig is ideal for high-value or organizational funds.",
        },
        {
          question: "What happens if one signer loses their key?",
          answer:
            "This is where the threshold configuration matters. In a 2-of-3 setup, losing one key does not prevent access to funds — the remaining two signers can still authorize transactions. They should immediately set up a new multi-sig wallet and transfer funds to it, replacing the lost key with a new one. This resilience against single key loss is one of the primary advantages of multi-sig.",
        },
        {
          question: "Are multi-sig wallets available on all blockchains?",
          answer:
            "Multi-sig implementations vary by blockchain. Ethereum and EVM chains have mature multi-sig solutions like Safe (formerly Gnosis Safe). Bitcoin supports multi-sig natively through its scripting language. Some newer chains have built-in multi-sig support, while others rely on smart contract-based implementations. Not all chains have equally mature or audited multi-sig solutions.",
        },
      ]}
      relatedArticles={[
        { title: "Crypto Security Guide", href: "/learn/crypto-security-guide", category: "Learn" },
        { title: "What Is a DAO?", href: "/learn/what-is-a-dao", category: "Learn" },
        { title: "Smart Contract Security", href: "/learn/smart-contract-security", category: "Learn" },
        { title: "Social Engineering in Crypto", href: "/learn/social-engineering-crypto", category: "Learn" },
      ]}
    >
      <section id="how-it-works">
        <h2>How Multi-Sig Wallets Work</h2>
        <p>
          A multi-sig wallet is defined by two parameters: M (the number of signatures required to execute a transaction) and N (the total number of authorized signers). For example, a 2-of-3 multi-sig requires any two of three designated key holders to approve a transaction before it can be executed. One signer initiates a transaction proposal, which is then queued for approval. The other required signers review the transaction details and sign if they agree. Only after the threshold is met does the transaction execute on the blockchain.
        </p>
        <p>
          On Ethereum and EVM-compatible chains, multi-sig wallets are implemented as smart contracts. The contract holds the funds and enforces the signing rules. When a transaction is submitted, the contract verifies that the correct number of valid signatures have been provided before executing the requested operation. On Bitcoin, multi-sig is supported natively through Pay-to-Script-Hash (P2SH) addresses, where the spending conditions (requiring M-of-N signatures) are encoded directly in the transaction script.
        </p>
      </section>

      <section id="configurations">
        <h2>Common Configurations</h2>
        <p>
          The 2-of-3 configuration is the most popular for individuals. Three keys are distributed across different devices and locations — for example, one on a hardware wallet you carry, one on a hardware wallet in a safe, and one with a trusted family member or in a safety deposit box. Any two keys can authorize transactions, so losing one key does not lock you out. This provides strong security while remaining practical for regular use.
        </p>
        <p>
          Organizations commonly use 3-of-5, 4-of-7, or higher thresholds depending on their size and security requirements. A startup might use 2-of-3 with three co-founders. A DAO treasury might use 5-of-9 with signers distributed across different organizations and geographies. The choice of threshold involves balancing security (higher threshold makes unauthorized transactions harder) against operational flexibility (higher threshold makes legitimate transactions slower and harder to coordinate, especially if signers are in different time zones).
        </p>
      </section>

      <section id="use-cases">
        <h2>Use Cases</h2>
        <p>
          DAO treasuries are the most prominent use case for multi-sig wallets. Major DeFi protocols manage treasuries worth hundreds of millions or billions of dollars through multi-sig wallets, with signers typically being core team members, community-elected representatives, and security council members. The multi-sig ensures that no single person can unilaterally move funds and that any transaction requires consensus among multiple trusted parties.
        </p>
        <p>
          For individuals, multi-sig provides inheritance planning (trusted parties can access funds if you become incapacitated), protection against single device compromise (a hacker who steals one key cannot access funds), and shared account management for families or business partners. Companies use multi-sig for operational security: employees who need to make payments must get approval from a second signer, preventing unauthorized transfers and reducing the impact of a compromised employee account.
        </p>
      </section>

      <section id="solutions">
        <h2>Popular Multi-Sig Solutions</h2>
        <p>
          Safe (formerly Gnosis Safe) is the dominant multi-sig wallet on Ethereum and EVM chains, securing hundreds of billions of dollars in assets. It offers a user-friendly web interface, mobile app, and extensive integrations with DeFi protocols and governance platforms. Safe supports customizable ownership structures, transaction batching, spending policies, and modular extensions. Its contracts have been extensively audited and battle-tested over years of operation.
        </p>
        <p>
          For Bitcoin, popular options include Unchained Capital's Caravan, Casa, and Sparrow Wallet, each providing tools for creating and managing Bitcoin multi-sig setups with hardware wallet integration. Newer solutions like Squads (for Solana) and multi-sig modules for Cosmos-based chains are expanding multi-sig availability across the broader blockchain ecosystem. When choosing a multi-sig solution, prioritize platforms with extensive security audits, long operational track records, and active development teams.
        </p>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <p>
          Distribute keys across different physical locations, devices, and ideally different hardware wallet manufacturers to avoid a single point of failure at any level. Document your multi-sig setup clearly and store the documentation securely, including which devices hold which keys, the multi-sig configuration, and recovery procedures. Ensure that all signers understand how to use the multi-sig and have practiced signing transactions before they need to do so urgently.
        </p>
        <p>
          Regularly test your setup by executing small transactions to verify that all signers can still access and use their keys. If a signer is compromised, leaves the organization, or loses their key, replace them immediately by creating a new multi-sig and migrating funds. Never let the number of available signers drop below your threshold, as this would permanently lock your funds. Consider using a timelock on large transactions, adding a delay period that allows other signers to review and potentially cancel suspicious transactions before they execute.
        </p>
      </section>
    </LearnPageLayout>
  );
}
