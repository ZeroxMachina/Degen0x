import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Account Abstraction Explained (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about account abstraction: how smart contract wallets improve crypto UX with social recovery, gas sponsorship, batched transactions, and why AA is key to mainstream blockchain adoption.",
};

export default function AccountAbstractionPage() {
  return (
    <LearnPageLayout
      title="Account Abstraction Explained"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="Account abstraction is a blockchain upgrade that transforms user accounts from simple key pairs into programmable smart contracts, enabling features like social recovery, gas sponsorship, transaction batching, and custom authentication methods. By making wallets smarter and more flexible, account abstraction removes many of the usability barriers that have prevented mainstream adoption of blockchain technology. It represents a fundamental shift in how users interact with blockchains, making the experience closer to traditional web applications while preserving the benefits of decentralization."
      toc={[
        { id: "problem", title: "problem", level: 2 },
        { id: "the-problem-with-traditional-accounts", title: "The Problem with Traditional Accounts", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-account-abstraction-works", title: "How Account Abstraction Works", level: 2 },
        { id: "key-features", title: "key-features", level: 2 },
        { id: "key-features-enabled-by-aa", title: "Key Features Enabled by AA", level: 2 },
        { id: "erc4337", title: "erc4337", level: 2 },
        { id: "erc-4337-and-implementation", title: "ERC-4337 and Implementation", level: 2 },
        { id: "adoption", title: "adoption", level: 2 },
        { id: "current-adoption-and-future-outlook", title: "Current Adoption and Future Outlook", level: 2 }
      ]}
      faqs={[
        {
          question: "Do I need to upgrade my existing wallet for account abstraction?",
          answer:
            "Existing externally owned accounts (EOAs) like standard MetaMask wallets continue to work normally. Account abstraction introduces new smart contract wallets as an option. You can gradually transition by creating a new AA wallet and transferring assets. Some wallets, like Coinbase Smart Wallet and Safe, already implement account abstraction features.",
        },
        {
          question: "Is account abstraction less secure than a traditional wallet?",
          answer:
            "AA wallets can be more secure because they enable features like multi-sig authentication, social recovery, spending limits, and time-locked transactions that are impossible with traditional wallets. However, as smart contracts, they introduce smart contract risk. The security depends on the wallet implementation and the specific features you configure.",
        },
        {
          question: "Does account abstraction work on all blockchains?",
          answer:
            "ERC-4337 works on Ethereum and all EVM-compatible chains. Some L2s like StarkNet and zkSync have native account abstraction built into the protocol, providing even deeper integration. Non-EVM chains like Solana are developing their own account abstraction approaches. The concept is blockchain-agnostic, but implementations vary.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Web3?", href: "/learn/what-is-web3", category: "Learn" },
        { title: "What Are Smart Contracts?", href: "/learn/what-are-smart-contracts", category: "Learn" },
        { title: "What Are Gas Fees?", href: "/learn/what-are-gas-fees", category: "Learn" },
        { title: "Crypto Security Guide", href: "/learn/crypto-security-guide", category: "Learn" },
      ]}
    >
      <section id="problem">
        <h2>The Problem with Traditional Accounts</h2>
        <p>
          Traditional blockchain accounts (Externally Owned Accounts or EOAs) are controlled by a single private key derived from a seed phrase. If you lose your seed phrase, you permanently lose access to all assets. If someone steals your seed phrase, they gain complete control. Every transaction requires the account to hold the native token (ETH) for gas fees, even if you only want to transfer another token. Each transaction must be signed and submitted individually, making complex multi-step operations tedious and expensive.
        </p>
        <p>
          These limitations create a terrible user experience compared to traditional web applications. Imagine if using a banking app required memorizing a 24-word passphrase with no recovery option, buying a separate currency just to pay transaction fees, and confirming each step of a multi-step payment separately. This is the current state of most blockchain interactions, and it is the primary reason why blockchain adoption has remained limited to technically sophisticated early adopters.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Account Abstraction Works</h2>
        <p>
          Account abstraction replaces the rigid EOA model with programmable smart contract wallets that can define custom validation logic. Instead of a fixed rule (transaction is valid if signed by the private key), AA wallets can implement any authentication scheme: multi-signature requirements, biometric verification, session keys for dApps, social recovery through trusted contacts, or any combination of these. The wallet is a smart contract, so its rules can be as flexible and sophisticated as any other smart contract.
        </p>
        <p>
          The ERC-4337 standard, deployed on Ethereum mainnet in March 2023, implements account abstraction without requiring changes to the core protocol. It introduces UserOperations (user intents that describe desired actions), Bundlers (entities that batch UserOperations into regular transactions), Paymasters (contracts that can sponsor gas fees on behalf of users), and an EntryPoint contract that coordinates the entire flow. This architecture allows AA wallets to operate within the existing Ethereum infrastructure while providing dramatically improved functionality.
        </p>
      </section>

      <section id="key-features">
        <h2>Key Features Enabled by AA</h2>
        <p>
          Social recovery allows users to designate trusted contacts (guardians) who can help restore wallet access if the primary key is lost. Instead of a single point of failure (seed phrase), you can require a majority of guardians to approve a recovery request. Gas sponsorship through Paymasters enables applications to pay gas fees on behalf of their users, removing the requirement to hold ETH before making any transaction. This allows completely gasless onboarding where new users can start interacting with blockchain apps immediately.
        </p>
        <p>
          Transaction batching combines multiple operations into a single transaction: approve a token, swap it on a DEX, and deposit the result into a yield protocol — all in one click. Session keys allow you to grant temporary, limited permissions to dApps (like a game being allowed to make transactions up to a certain value for a set time period) without exposing your main signing key. Spending limits, time-delayed large transactions, and address whitelisting provide additional security layers that are impossible with traditional EOAs.
        </p>
      </section>

      <section id="erc4337">
        <h2>ERC-4337 and Implementation</h2>
        <p>
          ERC-4337 creates a parallel transaction mempool specifically for UserOperations. When you interact with an AA wallet, your intent is expressed as a UserOperation that specifies what you want to do, how it should be validated, and optionally which Paymaster should cover gas. Bundlers collect these UserOperations, verify them, and submit them to the EntryPoint contract as regular Ethereum transactions. The EntryPoint validates each operation according to the wallet's custom rules and executes them.
        </p>
        <p>
          Major implementations include Safe (formerly Gnosis Safe) for multi-sig wallets, Coinbase Smart Wallet for consumer-facing AA, ZeroDev and Biconomy for developer SDKs that make it easy to integrate AA features into dApps, and Alchemy's Account Kit for enterprise-grade AA infrastructure. Several Layer 2 networks, including StarkNet and zkSync, have account abstraction built into the protocol at a deeper level, providing even more efficient AA implementations with lower overhead.
        </p>
      </section>

      <section id="adoption">
        <h2>Current Adoption and Future Outlook</h2>
        <p>
          Account abstraction adoption is accelerating rapidly. Millions of AA wallets have been deployed across Ethereum and its L2 ecosystem. Coinbase's Smart Wallet has brought AA to millions of retail users. Gaming and social dApps increasingly use session keys and gas sponsorship to create frictionless user experiences. The infrastructure layer (bundlers, paymasters, and wallet SDKs) has matured significantly since ERC-4337's launch.
        </p>
        <p>
          The future roadmap includes deeper protocol-level AA integration on Ethereum (EIP-7702 and beyond), cross-chain AA that allows a single smart wallet to operate across multiple networks, and improved interoperability between different AA implementations. As these technologies mature, the goal is for blockchain interactions to feel as seamless as using any web application — no seed phrases to manage, no gas tokens to acquire, no complex transaction signing. Account abstraction is widely regarded as the most important UX improvement for achieving mainstream blockchain adoption.
        </p>
      </section>
    </LearnPageLayout>
  );
}
