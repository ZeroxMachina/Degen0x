import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Token? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what a crypto token is, the difference between tokens and coins, token standards like ERC-20, and how tokens are used across the blockchain ecosystem.",
};

export default function TokenPage() {
  return (
    <LearnPageLayout
      title="What Is a Token?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="5 min read"
      intro="A token is a digital asset created on an existing blockchain using smart contracts. Unlike coins (which are native to their own blockchain, like ETH on Ethereum or BTC on Bitcoin), tokens are built on top of another chain's infrastructure. Tokens can represent anything from voting rights and utility access to real-world assets and collectibles. They are the fundamental building block of the crypto economy."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-token", title: "What Is a Token?", level: 2 },
        { id: "tokens-vs-coins", title: "tokens-vs-coins", level: 2 },
        { id: "tokens-vs-coins", title: "Tokens vs Coins", level: 2 },
        { id: "token-standards", title: "token-standards", level: 2 },
        { id: "token-standards", title: "Token Standards", level: 2 },
        { id: "why-tokens-matter", title: "why-tokens-matter", level: 2 },
        { id: "why-tokens-matter", title: "Why Tokens Matter", level: 2 }
      ]}
      faqs={[
        { question: "What is the difference between a token and a coin?", answer: "A coin is the native cryptocurrency of its own blockchain (BTC, ETH, SOL). A token is created on top of an existing blockchain using smart contracts (UNI on Ethereum, BONK on Solana). Coins are needed to pay transaction fees on their chain, while tokens derive their functionality from the smart contract that created them." },
        { question: "Can anyone create a token?", answer: "Yes. Creating a token on most blockchains requires only deploying a smart contract that follows the chain's token standard. On Ethereum, anyone can deploy an ERC-20 token in minutes. This low barrier to entry is both a feature (enabling innovation) and a risk (enabling scam tokens)." },
      ]}
      relatedArticles={[
        { title: "Utility Token", href: "/learn/glossary/utility-token", category: "Glossary" },
        { title: "Security Token", href: "/learn/glossary/security-token", category: "Glossary" },
        { title: "Wrapped Token", href: "/learn/glossary/wrapped-token", category: "Glossary" },
        { title: "Tokenomics Explained", href: "/learn/tokenomics-explained", category: "Learn Crypto" },
      ]}
    >
      <h2 id="definition">What Is a Token?</h2>
      <p>
        A token is a digital asset issued on a blockchain through a smart contract. Tokens are distinct from native blockchain currencies because they do not have their own blockchain but instead live as contract state on an existing chain. The token&apos;s smart contract defines its supply, transfer rules, and any special functionality. Tokens are the primary way that DeFi protocols, DAOs, and blockchain applications distribute ownership and utility to their users.
      </p>

      <h2 id="tokens-vs-coins">Tokens vs Coins</h2>
      <p>
        The distinction between tokens and coins is important. Coins like Bitcoin and Ether are the native assets of their respective blockchains and are required to pay transaction fees. Tokens like UNI, LINK, and USDC are created by deploying smart contracts on blockchains like Ethereum. A single blockchain can host thousands of different tokens. When you send a token, you pay the gas fee in the native coin of the chain the token lives on.
      </p>

      <h2 id="token-standards">Token Standards</h2>
      <p>
        Token standards define the rules and interfaces that tokens must follow. Ethereum&apos;s ERC-20 is the most widely used fungible token standard, defining functions like transfer, approve, and balanceOf. ERC-721 defines non-fungible tokens (NFTs) where each token is unique. ERC-1155 supports both fungible and non-fungible tokens in a single contract. Solana uses the SPL token standard, and other chains have their own equivalents.
      </p>

      <h2 id="why-tokens-matter">Why Tokens Matter</h2>
      <p>
        Tokens enable the entire crypto economy beyond simple payments. Governance tokens give holders voting power over protocol decisions. Utility tokens grant access to services or features. Stablecoins tokenize fiat currency value. LP tokens represent positions in liquidity pools. Liquid staking tokens represent staked assets. The programmability of tokens through smart contracts allows for financial instruments and incentive mechanisms that have no equivalent in traditional finance.
      </p>
    </LearnPageLayout>
  );
}
