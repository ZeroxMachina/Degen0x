import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Smart Contract Wallets Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about smart contract wallets, account abstraction, social recovery, multi-sig features, and how they differ from traditional externally owned accounts.",
};

export default function SmartContractWalletsPage() {
  return (
    <LearnPageLayout title="Smart Contract Wallets Explained" categoryName="Crypto Wallets" categorySlug="wallets" readTime="9 min read"
      intro="Smart contract wallets represent the next evolution of crypto wallets, replacing traditional externally owned accounts (EOAs) with programmable smart contracts that serve as your account. This architecture enables features impossible with traditional wallets: social recovery, multi-signature security, transaction batching, gas sponsorship, and spending limits. With Ethereum's ERC-4337 account abstraction standard gaining adoption, smart contract wallets are becoming increasingly practical and accessible for everyday users."
      toc={[
        { id: "eoa-vs-smart-wallet", title: "eoa-vs-smart-wallet", level: 2 },
        { id: "eoa-vs-smart-contract-wallets", title: "EOA vs Smart Contract Wallets", level: 2 },
        { id: "key-features", title: "key-features", level: 2 },
        { id: "key-features", title: "Key Features", level: 2 },
        { id: "account-abstraction", title: "account-abstraction", level: 2 },
        { id: "account-abstraction-erc-4337", title: "Account Abstraction (ERC-4337)", level: 2 },
        { id: "smart-wallet-options", title: "smart-wallet-options", level: 2 },
        { id: "smart-wallet-options", title: "Smart Wallet Options", level: 2 }
      ]}
      faqs={[{ question: "Can I lose funds if I lose my seed phrase with a smart contract wallet?", answer: "Smart contract wallets can implement social recovery, meaning you can designate trusted guardians (friends, family, or a service) who can collectively approve a key change if you lose access. This eliminates the single point of failure of seed phrases. However, the recovery mechanism must be set up in advance. Some smart wallets like Safe require multiple signers by default, providing inherent redundancy." },
        { question: "Do smart contract wallets work on all chains?", answer: "Smart contract wallets are chain-specific since they are deployed as contracts on each blockchain. They work best on Ethereum and EVM-compatible chains. Each chain requires a separate deployment. Cross-chain smart wallet solutions are emerging but are not yet mature. Safe (formerly Gnosis Safe) is available on Ethereum, Arbitrum, Optimism, Polygon, BNB Chain, and several other EVM chains." },
        { question: "Are smart contract wallets more expensive to use?", answer: "Smart contract wallet transactions cost more gas than EOA transactions because executing smart contract logic is more expensive than simple transfers. However, features like transaction batching (combining multiple operations into one transaction) can reduce overall costs. Gas sponsorship through paymasters can eliminate gas costs entirely for users, with the dApp or wallet provider covering the fees." }]}
      relatedArticles={[{ title: "Wallet Types Explained", href: "/wallets/learn/wallet-types-explained", category: "Wallets" }, { title: "DeFi Wallet Setup", href: "/wallets/learn/defi-wallet-setup", category: "Wallets" }, { title: "Wallet Permissions Guide", href: "/wallets/learn/wallet-permissions-guide", category: "Wallets" }, { title: "What Is a Crypto Wallet?", href: "/wallets/learn/what-is-a-crypto-wallet", category: "Wallets" }]}
    >
      <section id="eoa-vs-smart-wallet">
        <h2>EOA vs Smart Contract Wallets</h2>
        <p>Traditional crypto wallets are Externally Owned Accounts (EOAs), controlled by a single private key derived from a seed phrase. If you lose the key, you lose everything. There is no recovery mechanism, no spending limits, and no conditional logic. Every action requires a separate transaction with a gas fee paid in the native token. EOAs are simple but inflexible, offering no programmability or advanced security features.</p>
        <p>Smart contract wallets replace this single key model with a programmable contract that defines how the account operates. The contract can require multiple signatures for transactions, implement daily spending limits, enable social recovery through guardian addresses, batch multiple operations into single transactions, and even allow gas fees to be paid in any token. This programmability transforms wallets from simple key-based access into sophisticated financial accounts.</p>
      </section>

      <section id="key-features">
        <h2>Key Features</h2>
        <p>Social recovery allows you to designate trusted guardians who can collectively authorize a key rotation if you lose access. This eliminates the catastrophic risk of lost seed phrases. Multi-signature requirements enforce that multiple parties must approve transactions above certain thresholds, ideal for organizations and high-value accounts. Transaction batching combines multiple actions (approve, swap, stake) into a single transaction, saving gas and time.</p>
        <p>Spending limits can be programmed to restrict daily or per-transaction amounts, providing protection against both external theft and impulsive decisions. Session keys allow temporary, limited permissions to dApps without exposing full account control. Gas abstraction enables paying transaction fees in any token (like USDC) rather than requiring the native chain token, dramatically simplifying the onboarding experience for new users who do not hold ETH.</p>
      </section>

      <section id="account-abstraction">
        <h2>Account Abstraction (ERC-4337)</h2>
        <p>ERC-4337 is the Ethereum standard that enables account abstraction without requiring changes to the core protocol. It introduces UserOperations (a new transaction type processed by bundlers), an EntryPoint contract that validates and executes these operations, and Paymasters that can sponsor gas fees on behalf of users. This infrastructure allows smart contract wallets to offer features like gasless transactions and custom validation logic.</p>
        <p>The ERC-4337 ecosystem includes bundlers that collect and submit UserOperations, paymasters that sponsor gas fees, and wallet factories that deploy new smart contract wallets. Major infrastructure providers like Alchemy, Pimlico, and Biconomy offer bundler and paymaster services. As adoption grows, more dApps are integrating account abstraction support, making the smart contract wallet experience increasingly seamless for end users.</p>
      </section>

      <section id="smart-wallet-options">
        <h2>Smart Wallet Options</h2>
        <p>Safe (formerly Gnosis Safe) is the most established smart contract wallet, securing over $100 billion in assets. It focuses on multi-signature functionality for organizations and DAOs. Coinbase Smart Wallet implements ERC-4337 with passkey authentication, eliminating seed phrases entirely. Argent uses social recovery and guardian-based security with a mobile-first approach. Kernel by ZeroDev and Biconomy Smart Accounts provide developer-focused infrastructure for building custom smart wallet experiences.</p>
        <p>For individual users, Coinbase Smart Wallet and Argent offer the most user-friendly experiences. For organizations, Safe is the standard with extensive multi-sig features and a proven security track record. For developers building applications, ERC-4337 SDKs from ZeroDev, Alchemy, and Biconomy provide the tools to embed smart wallet functionality directly into dApps. The smart contract wallet space is evolving rapidly, with new features and providers appearing regularly as account abstraction adoption accelerates.</p>
      </section>
    </LearnPageLayout>
  );
}
