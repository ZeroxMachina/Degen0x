import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Multi-Sig Wallets Explained: What They Are & How They Work (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Complete guide to multi-signature wallets in ${CURRENT_YEAR}. Learn how multi-sig works, when to use it, popular solutions, and setup considerations.`,
};

export default function MultiSigWalletsExplainedPage() {
  return (
    <LearnPageLayout
      title="Multi-Sig Wallets Explained: What They Are & How They Work"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="11 min"
      intro="Multi-signature (multi-sig) wallets require multiple private keys to authorize a transaction, rather than just one. This creates a security model where no single person can unilaterally move funds. Multi-sig is used by businesses, DAOs, families, and security-conscious individuals to protect crypto assets against single-point-of-failure risks."
      toc={[
        { id: "what-is-multisig", title: "what-is-multisig", level: 2 },
        { id: "what-is-multi-sig", title: "What Is Multi-Sig?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-multi-sig-works", title: "How Multi-Sig Works", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "common-use-cases", title: "Common Use Cases", level: 2 },
        { id: "popular-solutions", title: "popular-solutions", level: 2 },
        { id: "popular-multi-sig-solutions", title: "Popular Multi-Sig Solutions", level: 2 },
        { id: "pros-cons", title: "pros-cons", level: 2 },
        { id: "advantages-disadvantages", title: "Advantages & Disadvantages", level: 2 },
        { id: "setup", title: "setup", level: 2 },
        { id: "setting-up-a-multi-sig-wallet", title: "Setting Up a Multi-Sig Wallet", level: 2 }
      ]}
      faqs={[
        {
          question: "What does 2-of-3 multi-sig mean?",
          answer: "A 2-of-3 multi-sig wallet has 3 authorized signers, and any 2 of them must approve a transaction for it to execute. This means one key can be lost without losing access (the other 2 can still sign), and one key being compromised does not allow unauthorized transactions (the attacker needs 2 keys).",
        },
        {
          question: "Is multi-sig the same as 2FA?",
          answer: "No. Two-factor authentication (2FA) verifies your identity to a centralized service. Multi-sig is a blockchain-level security mechanism that requires multiple independent private keys to authorize a transaction. 2FA can be bypassed by the service provider; multi-sig cannot be bypassed by anyone who does not hold the required number of keys.",
        },
        {
          question: "Do I need multi-sig for personal use?",
          answer: "For most individuals, a single-key wallet with a hardware device and proper seed phrase management is sufficient. Multi-sig becomes valuable for larger holdings (six figures and above), shared accounts (couples, families), business treasuries, or situations where you want protection against single-device compromise or coercion.",
        },
      ]}
      relatedArticles={[
        { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" },
        { title: "Seed Phrase Security", href: "/wallets/learn/seed-phrase-security", category: "Wallets" },
        { title: "Safe (Gnosis) Review", href: "/wallets/reviews/safe", category: "Wallets" },
      ]}
    >
      <h2 id="what-is-multisig">What Is Multi-Sig?</h2>
      <p>
        A multi-signature wallet is a type of cryptocurrency wallet that requires authorization from multiple private keys before a transaction can be executed. Unlike a standard wallet where a single private key controls everything, a multi-sig wallet distributes control among multiple keys. The wallet is configured with an M-of-N threshold, meaning M signatures out of N total signers are required. Common configurations include 2-of-3, 3-of-5, and 2-of-2. This design eliminates the single point of failure that makes standard wallets vulnerable to theft, loss, or coercion.
      </p>

      <h2 id="how-it-works">How Multi-Sig Works</h2>
      <p>
        When a multi-sig wallet is created, the threshold and list of authorized signers are defined and encoded into a smart contract (on Ethereum and EVM chains) or into the transaction structure itself (on Bitcoin). When someone wants to send funds, they create a transaction proposal. This proposal must then be signed by the required number of key holders. Each signer reviews the transaction details independently and adds their cryptographic signature. Once the threshold is met, the transaction is broadcast to the blockchain and executed. On Ethereum, this process is managed by smart contracts like Safe (formerly Gnosis Safe).
      </p>

      <h2 id="use-cases">Common Use Cases</h2>
      <p>
        Business treasuries use multi-sig to ensure no single employee can move company funds. DAOs use multi-sig to manage protocol treasuries with community-elected signers. Families use multi-sig to manage shared savings with spousal or family member approval. Security-conscious individuals distribute keys across multiple devices and locations. Exchanges use multi-sig for their cold storage to prevent insider theft. Inheritance planning uses multi-sig to ensure heirs can access funds when needed while preventing premature access.
      </p>

      <h2 id="popular-solutions">Popular Multi-Sig Solutions</h2>
      <p>
        Safe (formerly Gnosis Safe) is the most widely used multi-sig solution on Ethereum and EVM chains, securing hundreds of billions of dollars in assets. It provides a web interface for creating and managing multi-sig wallets. Bitcoin-native multi-sig is built into the protocol itself, with wallets like Sparrow, Electrum, and Nunchuk supporting multi-sig setups. Squads Protocol provides multi-sig functionality for Solana. Fireblocks offers institutional-grade multi-sig and MPC custody for businesses. Each solution has its own setup process, user experience, and chain support.
      </p>

      <h2 id="pros-cons">Advantages &amp; Disadvantages</h2>
      <p>
        The advantages of multi-sig include elimination of single points of failure, protection against individual key compromise, shared control suitable for organizations, and enhanced security for large holdings. The disadvantages include increased transaction complexity, higher gas fees (on Ethereum due to smart contract execution), potential coordination challenges among signers, and the risk that enough signers become unavailable to meet the threshold. Multi-sig also requires more technical knowledge to set up and manage correctly.
      </p>

      <h2 id="setup">Setting Up a Multi-Sig Wallet</h2>
      <p>
        To set up a multi-sig on Ethereum, the most common approach is using Safe (app.safe.global). Connect your existing wallet, create a new Safe, add the addresses of all intended signers, set the confirmation threshold (e.g., 2-of-3), and deploy the smart contract. Each signer should ideally use a different type of device or security setup (hardware wallet, mobile wallet, different locations) to maximize the security benefit. After creation, the Safe address becomes the address you send funds to, and any outgoing transaction requires the configured number of approvals.
      </p>
    </LearnPageLayout>
  );
}
