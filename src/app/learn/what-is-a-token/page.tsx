import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Token? Crypto Tokens Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what crypto tokens are, the difference between tokens and coins, token standards like ERC-20 and ERC-721, token types, and how tokens power the blockchain ecosystem.",
  keywords: ["crypto token", "what is a token", "ERC-20", "token types", "token vs coin", "utility token"],
};

export default function WhatIsATokenPage() {
  return (
    <LearnPageLayout
      title="What Is a Token? Crypto Tokens Explained"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="8 min"
      intro="A crypto token is a digital asset created on an existing blockchain using smart contracts, as opposed to coins like Bitcoin or Ether that are native to their own blockchain. Tokens can represent virtually anything — from voting rights and access passes to real-world assets and financial instruments — making them the most versatile building blocks of the Web3 economy."
      toc={[
        { id: "tokens-vs-coins", title: "tokens-vs-coins", level: 2 },
        { id: "tokens-vs-coins", title: "Tokens vs Coins", level: 2 },
        { id: "token-standards", title: "token-standards", level: 2 },
        { id: "token-standards", title: "Token Standards", level: 2 },
        { id: "types-of-tokens", title: "types-of-tokens", level: 2 },
        { id: "types-of-tokens", title: "Types of Tokens", level: 2 },
        { id: "how-tokens-work", title: "how-tokens-work", level: 2 },
        { id: "how-tokens-work", title: "How Tokens Work", level: 2 },
        { id: "token-creation", title: "token-creation", level: 2 },
        { id: "creating-tokens", title: "Creating Tokens", level: 2 },
        { id: "evaluating-tokens", title: "evaluating-tokens", level: 2 },
        { id: "evaluating-tokens", title: "Evaluating Tokens", level: 2 }
      ]}
      faqs={[
        {
          question: "What is the difference between a token and a coin?",
          answer: "A coin (like BTC or ETH) is the native currency of its own blockchain, used to pay for transactions and secure the network. A token is built on top of an existing blockchain using smart contracts. For example, USDC is a token on Ethereum, while ETH is Ethereum's native coin.",
        },
        {
          question: "Can tokens be converted to real money?",
          answer: "Yes, tokens with sufficient market liquidity can be exchanged for fiat currency through centralized exchanges or converted to stablecoins on decentralized exchanges. However, not all tokens have active markets, and illiquid tokens may be difficult or impossible to sell.",
        },
        {
          question: "Are all tokens investments?",
          answer: "No. While many tokens are traded speculatively, tokens serve many non-investment purposes including governance voting, accessing platform features, representing identity credentials, serving as in-game items, and functioning as stablecoins for payments.",
        },
        {
          question: "How are token prices determined?",
          answer: "Token prices are determined by supply and demand on exchanges. Factors influencing price include the token's utility, project fundamentals, market sentiment, total and circulating supply, token emission schedules, and broader cryptocurrency market conditions.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Tokenomics?", href: "/learn/what-is-tokenomics", category: "Learn" },
        { title: "ERC-20 Glossary", href: "/learn/glossary/erc-20", category: "Learn" },
        { title: "What Is an Altcoin?", href: "/learn/what-is-an-altcoin", category: "Learn" },
        { title: "What Is Market Cap?", href: "/learn/what-is-market-cap", category: "Learn" },
      ]}
    >
      <section id="tokens-vs-coins">
        <h2>Tokens vs Coins</h2>
        <p>
          The distinction between tokens and coins is fundamental to understanding the crypto ecosystem. A coin is the native cryptocurrency of its own blockchain — Bitcoin (BTC) runs on the Bitcoin network, Ether (ETH) runs on Ethereum, and SOL runs on Solana. These coins are integral to their blockchain&apos;s operation, used to pay transaction fees, reward validators, and secure the network through staking or mining.
        </p>
        <p>
          Tokens, in contrast, are created on top of existing blockchains using smart contracts. They leverage the security and infrastructure of the host blockchain without building their own network. Thousands of tokens exist on Ethereum alone, from stablecoins like USDC to governance tokens like UNI to meme tokens like PEPE. Each token is managed by a smart contract that defines its total supply, transfer rules, and any special functionality.
        </p>
        <p>
          This distinction matters practically because tokens require the host blockchain&apos;s native coin for transaction fees. To transfer an ERC-20 token on Ethereum, you need ETH to pay gas fees. To transfer an SPL token on Solana, you need SOL. Understanding this relationship helps you navigate the ecosystem and manage your wallets effectively.
        </p>
      </section>

      <section id="token-standards">
        <h2>Token Standards</h2>
        <p>
          Token standards are predefined smart contract interfaces that ensure compatibility across the ecosystem. The most important standard is ERC-20, which defines a common interface for fungible tokens on Ethereum — tokens where each unit is interchangeable with any other. Every ERC-20 token supports the same basic functions: checking balances, transferring tokens, and approving other contracts to spend tokens on your behalf. This standardization means any wallet, exchange, or protocol can instantly support any new ERC-20 token.
        </p>
        <p>
          ERC-721 is the standard for non-fungible tokens (NFTs), where each token has a unique identifier and can represent distinct items. ERC-1155 is a multi-token standard that supports both fungible and non-fungible tokens in a single contract, popular in gaming applications. Other blockchains have their own standards: SPL on Solana, BEP-20 on BNB Chain, and TIP-3 on TON. While the naming differs, the core concepts remain similar across platforms.
        </p>
      </section>

      <section id="types-of-tokens">
        <h2>Types of Tokens</h2>
        <p>
          Utility tokens provide access to a product or service within a specific ecosystem. For example, Filecoin (FIL) is used to pay for decentralized storage, and Chainlink (LINK) compensates oracle node operators for providing data feeds. The value of utility tokens is theoretically linked to demand for the underlying service.
        </p>
        <p>
          Governance tokens grant holders voting rights over protocol decisions. UNI holders vote on Uniswap treasury allocations and protocol changes. AAVE holders govern the Aave lending protocol. These tokens represent ownership stakes in decentralized protocols. Security tokens represent ownership in real-world assets like equity, real estate, or bonds, and are subject to securities regulations. Stablecoins are tokens pegged to the value of fiat currencies, with USDC, USDT, and DAI being the most prominent examples.
        </p>
        <p>
          Wrapped tokens represent assets from one blockchain on another — wrapped Bitcoin (WBTC) is an ERC-20 token backed 1:1 by real BTC, allowing Bitcoin to be used in Ethereum DeFi. Liquid staking tokens like stETH represent staked assets while maintaining liquidity, and receipt tokens represent deposits in lending or liquidity protocols.
        </p>
      </section>

      <section id="how-tokens-work">
        <h2>How Tokens Work</h2>
        <p>
          A token is essentially a smart contract that maintains a ledger of balances mapping wallet addresses to token amounts. When you send tokens, the smart contract deducts from your balance and adds to the recipient&apos;s balance — no physical tokens move, only the contract&apos;s internal accounting changes. This transaction is recorded permanently on the blockchain and visible to anyone.
        </p>
        <p>
          The approval mechanism is particularly important to understand. Before a DeFi protocol can use your tokens — for trading, lending, or providing liquidity — you must first approve the protocol&apos;s smart contract to spend a specified amount of your tokens. This is done through an approval transaction that grants the protocol permission. Managing and revoking unnecessary approvals is an important security practice, as a compromised protocol could drain approved tokens from your wallet.
        </p>
      </section>

      <section id="token-creation">
        <h2>Creating Tokens</h2>
        <p>
          Creating a token is technically straightforward — deploying a basic ERC-20 contract requires minimal programming knowledge and costs only the gas fee for contract deployment. Platforms like OpenZeppelin provide audited, production-ready token contract templates that developers can customize with features like minting caps, transfer fees, pause functions, and access controls.
        </p>
        <p>
          The low barrier to token creation is both a strength and a risk of the ecosystem. It enables rapid innovation and experimentation but also makes it trivial for bad actors to create fraudulent tokens. Thousands of tokens are created daily, and the vast majority are either abandoned, scams, or fail to gain traction. This is why thorough research into a token&apos;s smart contract, team, tokenomics, and utility is essential before acquiring any token.
        </p>
      </section>

      <section id="evaluating-tokens">
        <h2>Evaluating Tokens</h2>
        <p>
          When evaluating a token, start with the fundamentals: what problem does the project solve, and is the token necessary for that solution? Many projects could function without a token — the token exists purely to raise funds. Legitimate utility tokens have a clear role in the protocol&apos;s operation that creates natural demand beyond speculation.
        </p>
        <p>
          Examine the tokenomics carefully: total supply, circulating supply, emission schedule, vesting periods for team and investor allocations, and any burn or buyback mechanisms. A token with heavy upcoming unlocks from early investors faces selling pressure. Check the distribution — if insiders hold a disproportionate share, the token may be vulnerable to coordinated selling. Verify the smart contract on a blockchain explorer to ensure it is verified, audited, and does not contain hidden admin functions that could manipulate supply or freeze transfers.
        </p>
      </section>
    </LearnPageLayout>
  );
}
