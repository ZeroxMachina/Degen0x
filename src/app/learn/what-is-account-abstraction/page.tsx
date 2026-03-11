import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Account Abstraction? Smart Wallets Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what account abstraction is, how ERC-4337 works, smart contract wallets, gasless transactions, social recovery, and why account abstraction is key to crypto adoption.",
  keywords: ["account abstraction", "ERC-4337", "smart wallet", "gasless transactions", "social recovery", "crypto UX"],
};

export default function WhatIsAccountAbstractionPage() {
  return (
    <LearnPageLayout
      title="What Is Account Abstraction? Smart Wallets Explained"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="9 min"
      intro="Account abstraction is a blockchain upgrade that transforms wallets from simple key pairs into programmable smart contracts, enabling features like gasless transactions, social recovery, multi-signature security, and session keys. It represents the most significant improvement to crypto user experience since the invention of wallet software, and is widely considered essential for mainstream blockchain adoption."
      toc={[
        { id: "the-problem", title: "The Wallet Problem", level: 2 },
        { id: "how-it-works", title: "How Account Abstraction Works", level: 2 },
        { id: "erc-4337", title: "ERC-4337 Standard", level: 2 },
        { id: "key-features", title: "Key Features", level: 2 },
        { id: "smart-wallets", title: "Smart Contract Wallets", level: 2 },
        { id: "adoption", title: "Adoption and Future", level: 2 },
      ]}
      faqs={[
        { question: "What is ERC-4337?", answer: "ERC-4337 is the Ethereum standard for account abstraction that works without requiring protocol-level changes. It introduces UserOperations, a separate mempool, and bundler nodes that package user intent into regular transactions. This allows smart contract wallets to operate with enhanced features on existing Ethereum infrastructure." },
        { question: "Can I use account abstraction today?", answer: "Yes. Several wallets and platforms already support account abstraction, including Safe (formerly Gnosis Safe), Biconomy, ZeroDev, and various embedded wallet solutions. Many newer applications use account abstraction behind the scenes to provide seamless user experiences." },
        { question: "Does account abstraction eliminate seed phrases?", answer: "Account abstraction enables alternatives to seed phrases for wallet recovery. Social recovery allows designated guardians to help restore access. Passkey-based wallets use device biometrics instead of seed phrases. However, some form of backup remains necessary — the improvement is in the user experience and safety of recovery mechanisms." },
        { question: "Is account abstraction only for Ethereum?", answer: "While ERC-4337 is an Ethereum standard, the concept applies broadly. Some blockchains like StarkNet and zkSync have native account abstraction built into the protocol. Other EVM-compatible chains support ERC-4337. The concept of programmable wallets is being adopted across the blockchain ecosystem." },
      ]}
      relatedArticles={[
        { title: "How to Create a Wallet", href: "/learn/how-to-create-wallet", category: "Learn" },
        { title: "What Is Gas?", href: "/learn/what-is-gas", category: "Learn" },
        { title: "What Is Web3?", href: "/learn/what-is-web3", category: "Learn" },
        { title: "How to Use MetaMask", href: "/learn/how-to-use-metamask", category: "Learn" },
      ]}
    >
      <section id="the-problem">
        <h2>The Wallet Problem</h2>
        <p>
          Traditional crypto wallets (Externally Owned Accounts or EOAs) are controlled by a single private key — a random string of characters that must be kept secret and safe forever. Lose the key, lose your funds permanently. Get phished, and an attacker has complete control of your assets. Every transaction requires signing with this key and paying gas fees in the native token. This model creates enormous friction: users must manage seed phrases, maintain ETH balances for gas, approve every transaction individually, and accept that a single mistake can result in permanent loss.
        </p>
        <p>
          This user experience is fundamentally incompatible with mainstream adoption. Regular users expect password recovery options, familiar login methods, protection against mistakes, and seamless payment experiences. Account abstraction bridges this gap by replacing rigid EOAs with programmable smart contract wallets that can implement any authentication, recovery, and transaction logic the developer can imagine. It transforms wallets from dumb key stores into intelligent, customizable accounts.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Account Abstraction Works</h2>
        <p>
          Account abstraction decouples the concepts of "who initiates a transaction" from "who pays for it" and "how is it authorized." In the traditional model, these are all tied to a single private key. With account abstraction, a transaction can be initiated by any authorized method (password, biometric, multisig), paid for by anyone (the user, the application, or a third-party sponsor), and validated by custom logic defined in the wallet's smart contract.
        </p>
        <p>
          The user submits a UserOperation — a data structure describing their intended action — to a network of bundlers. Bundlers collect these UserOperations, package them into regular Ethereum transactions, and submit them to the blockchain. Paymaster contracts can sponsor gas costs, allowing users to transact without holding ETH. The wallet's smart contract validates the operation according to its programmed rules before executing the requested action.
        </p>
      </section>

      <section id="erc-4337">
        <h2>ERC-4337 Standard</h2>
        <p>
          ERC-4337 is the dominant standard for account abstraction on Ethereum and EVM-compatible chains. Rather than requiring a hard fork to change Ethereum's core protocol, ERC-4337 achieves account abstraction entirely through smart contracts and off-chain infrastructure. This pragmatic approach allowed deployment without waiting for protocol-level changes and has enabled rapid adoption across the ecosystem.
        </p>
        <p>
          The standard defines several key components: the EntryPoint contract that serves as the central hub for processing UserOperations, the Account contract (the user's smart contract wallet), Bundler nodes that collect and submit UserOperations, and Paymaster contracts that can sponsor gas costs. Together, these components create a flexible infrastructure that supports a wide variety of wallet implementations while maintaining compatibility with the existing Ethereum ecosystem.
        </p>
      </section>

      <section id="key-features">
        <h2>Key Features</h2>
        <p>
          Gasless transactions allow applications to pay gas fees on behalf of their users through Paymaster contracts. This removes the requirement for users to hold the native token and understand gas mechanics. Session keys enable users to grant temporary, limited permissions to applications — for example, allowing a game to submit transactions on your behalf for an hour without requiring approval for each action.
        </p>
        <p>
          Social recovery replaces vulnerable seed phrases with a guardian system. Users designate trusted friends, family members, or institutions as guardians who can collectively authorize wallet recovery if access is lost. Transaction batching combines multiple operations into a single transaction, saving gas and simplifying complex interactions. Custom validation logic allows wallets to implement spending limits, whitelists, time-locked transfers, and other security rules that prevent unauthorized access even if credentials are compromised.
        </p>
      </section>

      <section id="smart-wallets">
        <h2>Smart Contract Wallets</h2>
        <p>
          Smart contract wallets are the user-facing manifestation of account abstraction. Safe (formerly Gnosis Safe) is the most widely used, managing billions of dollars in crypto assets with multi-signature security. Newer implementations like those from Biconomy, ZeroDev, and Privy focus on seamless onboarding experiences, enabling users to create wallets through social logins, email, or passkeys without ever seeing a seed phrase or private key.
        </p>
        <p>
          Embedded wallets take this further by creating invisible wallet infrastructure within applications. Users interact with the app normally — logging in with their email, making purchases, earning rewards — while a smart contract wallet operates behind the scenes handling all blockchain interactions. This approach makes Web3 applications indistinguishable from Web2 in terms of user experience while preserving the benefits of decentralization and self-custody.
        </p>
      </section>

      <section id="adoption">
        <h2>Adoption and Future</h2>
        <p>
          Account abstraction adoption is accelerating rapidly. Major infrastructure providers including Alchemy, Biconomy, and Pimlico offer account abstraction services. Layer 2 networks like Base, Optimism, and Arbitrum have embraced ERC-4337. Some networks like StarkNet and zkSync Era have native account abstraction built into the protocol, making every account a smart contract by default.
        </p>
        <p>
          The future direction includes deeper integration with hardware security modules for enterprise use, cross-chain account abstraction enabling a single wallet to operate across all networks, and AI-powered transaction validation that can identify and block suspicious activity in real-time. As account abstraction matures, the distinction between Web2 and Web3 user experiences will continue to blur, removing the last major barrier to mainstream blockchain adoption.
        </p>
      </section>
    </LearnPageLayout>
  );
}
