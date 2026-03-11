import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Use a Multisig Wallet (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Guide to multisig wallets including setup, use cases, popular platforms like Safe, configuration options, and best practices for multi-signature security.",
  keywords: ["multisig wallet", "multi-signature", "Safe wallet", "Gnosis Safe", "multisig setup", "crypto multisig"],
};

export default function HowToUseMultisigPage() {
  return (
    <LearnPageLayout title="How to Use a Multisig Wallet" categoryName="Crypto Education" categorySlug="learn" readTime="7 min" intro="A multisig (multi-signature) wallet requires multiple private keys to authorize transactions, eliminating single points of failure. Used by DAOs, project treasuries, and security-conscious individuals, multisig wallets provide institutional-grade security by ensuring no single person can unilaterally move funds."
      toc={[
        { id: "what-is-multisig", title: "What Is a Multisig?", level: 2 },
        { id: "setup", title: "Setting Up a Multisig", level: 2 },
        { id: "using", title: "Using a Multisig", level: 2 },
        { id: "configurations", title: "Configuration Options", level: 2 },
        { id: "best-practices", title: "Best Practices", level: 2 },
      ]}
      faqs={[
        { question: "What does 2-of-3 multisig mean?", answer: "A 2-of-3 multisig requires any 2 out of 3 designated signers to approve a transaction. This means one key can be lost or compromised without affecting fund access. Common configurations include 2-of-3, 3-of-5, and 4-of-7, balancing security with operational convenience." },
        { question: "Is Safe (Gnosis Safe) free?", answer: "Creating and using a Safe multisig wallet is free from platform fees. However, you pay blockchain gas fees for creating the multisig contract, adding signers, and executing transactions. Since each signature confirmation is an on-chain transaction, multisig operations are more expensive than single-signature wallets." },
        { question: "Can I use a multisig with DeFi?", answer: "Yes, Safe wallets can interact with DeFi protocols through the Safe Apps ecosystem and WalletConnect. You can swap tokens, provide liquidity, stake, and perform other DeFi operations, with each transaction requiring the configured number of approvals before execution." },
      ]}
      relatedArticles={[
        { title: "Self-Custody Guide", href: "/learn/self-custody-guide", category: "Learn" },
        { title: "How to Participate in Governance", href: "/learn/how-to-participate-in-governance", category: "Learn" },
        { title: "Hardware Security Modules", href: "/learn/hardware-security-modules", category: "Learn" },
        { title: "Operational Security for Crypto", href: "/learn/operational-security-crypto", category: "Learn" },
      ]}
    >
      <section id="what-is-multisig"><h2>What Is a Multisig?</h2><p>A multisig wallet is a smart contract wallet that requires multiple authorized signatures to execute transactions. Unlike a standard wallet controlled by a single private key, a multisig distributes control among multiple parties. A transaction is only executed when the required number of signers (the threshold) approve it. This eliminates the risk of a single compromised key resulting in total fund loss.</p><p>Multisig wallets are standard for managing DAO treasuries, project operational funds, and personal holdings where additional security is warranted. The most widely used multisig platform is Safe (formerly Gnosis Safe), which secures hundreds of billions in digital assets across multiple EVM chains. Multisig provides security benefits similar to traditional corporate banking, where multiple officers must authorize large transfers.</p></section>
      <section id="setup"><h2>Setting Up a Multisig</h2><p>To create a Safe multisig: go to app.safe.global, connect your wallet, click "Create new Safe," choose your network, add the Ethereum addresses of all signers, set the confirmation threshold (number of signatures required), and deploy the contract by paying the creation gas fee. The Safe contract will be created at a unique address that becomes your multisig wallet.</p><p>When configuring signers, distribute signing keys across different security domains: different devices, different wallet types (hardware and software), and if possible, different physical locations. For a 2-of-3 setup, you might use a Ledger hardware wallet, a mobile wallet, and a separate hardware wallet stored in a secure location. This ensures no single disaster can prevent access to funds.</p></section>
      <section id="using"><h2>Using a Multisig</h2><p>To send a transaction from a multisig: one signer initiates the transaction through the Safe interface (specifying recipient, amount, and data), then other signers review and confirm. Once the threshold is met, any signer can execute the transaction on-chain. Each confirmation step requires a blockchain transaction (with gas fees) from the confirming signer.</p><p>Safe's App Store provides access to DeFi protocols directly within the Safe interface. You can access Uniswap, Aave, Lido, and many other protocols through pre-built Safe Apps. WalletConnect integration allows the multisig to connect to any dApp that supports it. Transaction batching allows combining multiple actions into a single multisig approval, improving efficiency for complex operations.</p></section>
      <section id="configurations"><h2>Configuration Options</h2><p>Common configurations balance security and convenience: 2-of-3 provides good protection while allowing one unavailable signer, suitable for small teams and personal use. 3-of-5 is popular for DAOs and medium-sized treasuries. 4-of-7 provides high security for large treasuries. Higher thresholds increase security but also increase the operational overhead and risk of being unable to reach quorum.</p><p>Signers and thresholds can be modified after creation through a governance transaction requiring the current threshold. Consider operational scenarios when designing your configuration: what happens if a signer loses their key, becomes unavailable, or acts maliciously? Ensure your threshold is low enough to maintain operational capability even with some signers unavailable, while high enough that no small group can act unilaterally.</p></section>
      <section id="best-practices"><h2>Best Practices</h2><p>Use hardware wallets for at least some multisig signers to protect against malware and phishing. Establish clear signing procedures: signers should independently verify transaction details (recipient, amount, function calls) before confirming. For DAOs, implement proposal discussion periods before signing to ensure community awareness of treasury operations.</p><p>Maintain updated documentation of all signer addresses and contact methods. Have a key rotation plan for when signers need to be added or removed. Test recovery scenarios periodically to ensure the multisig remains accessible. For large treasuries, consider using timelocks in addition to the multisig, which add a mandatory delay between transaction approval and execution, giving the community time to react to potentially malicious proposals.</p></section>
    </LearnPageLayout>
  );
}
