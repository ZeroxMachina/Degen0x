import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Wrapped Token? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what wrapped tokens are, how they work, major examples like WBTC and WETH, and why they are essential for cross-chain and DeFi functionality.",
};

export default function WrappedTokenPage() {
  return (
    <LearnPageLayout
      title="What Is a Wrapped Token?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="5 min read"
      intro="A wrapped token is a cryptocurrency token pegged to the value of another asset, enabling that asset to be used on a different blockchain or within smart contracts that do not natively support it. The original asset is held in custody (locked in a smart contract or with a custodian), and an equivalent amount of the wrapped version is minted on the target chain. Wrapped tokens are essential for cross-chain interoperability and DeFi composability."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-wrapped-token", title: "What Is a Wrapped Token?", level: 2 },
        { id: "how-wrapping-works", title: "how-wrapping-works", level: 2 },
        { id: "how-wrapping-works", title: "How Wrapping Works", level: 2 },
        { id: "major-examples", title: "major-examples", level: 2 },
        { id: "major-wrapped-tokens", title: "Major Wrapped Tokens", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-of-wrapped-tokens", title: "Risks of Wrapped Tokens", level: 2 }
      ]}
      faqs={[
        { question: "Why do we need Wrapped Bitcoin (WBTC)?", answer: "Bitcoin cannot natively interact with Ethereum smart contracts. WBTC is an ERC-20 token on Ethereum backed 1:1 by Bitcoin held in custody. This allows Bitcoin holders to participate in Ethereum DeFi by using their BTC as collateral for lending, providing liquidity, or yield farming without selling their Bitcoin." },
        { question: "Is a wrapped token always worth the same as the original?", answer: "Wrapped tokens are designed to maintain a 1:1 peg with the underlying asset, but this depends on the reliability of the custodian or smart contract holding the reserves. If the custodian becomes insolvent or the bridge is hacked, wrapped tokens can lose their peg and become worthless." },
      ]}
      relatedArticles={[
        { title: "Token", href: "/learn/glossary/token", category: "Glossary" },
        { title: "What Is a Bridge?", href: "/learn/what-is-a-bridge", category: "Learn Crypto" },
        { title: "Cross-Chain", href: "/learn/glossary/cross-chain", category: "Glossary" },
        { title: "What Is DeFi?", href: "/learn/what-is-defi", category: "Learn Crypto" },
      ]}
    >
      <h2 id="definition">What Is a Wrapped Token?</h2>
      <p>
        A wrapped token is a tokenized representation of a cryptocurrency from one blockchain that can be used on another blockchain. The wrapping process locks the original asset and mints an equivalent token on the destination chain. This allows assets like Bitcoin to be used in Ethereum DeFi protocols, or Ethereum tokens to be used on Solana. The wrapped version trades at the same value as the original because it is redeemable for the underlying asset.
      </p>

      <h2 id="how-wrapping-works">How Wrapping Works</h2>
      <p>
        The wrapping process involves a custodian (either a centralized entity or a decentralized smart contract) that holds the original asset and issues the wrapped version. To wrap BTC into WBTC, you send Bitcoin to a custodian who locks it and mints WBTC on Ethereum. To unwrap, you burn the WBTC and the custodian releases the original BTC. The custodian must maintain reserves equal to or exceeding the total wrapped token supply, verifiable through proof of reserves.
      </p>

      <h2 id="major-examples">Major Wrapped Tokens</h2>
      <p>
        WBTC (Wrapped Bitcoin) is the largest wrapped asset, bringing billions in Bitcoin value to Ethereum DeFi. WETH (Wrapped Ether) wraps ETH into an ERC-20 format for compatibility with DeFi protocols. Bridged tokens from Layer 2s like Arbitrum and Optimism are technically wrapped versions of mainnet assets. Wormhole-wrapped tokens enable assets to move between Ethereum, Solana, and other chains through the Wormhole bridge protocol.
      </p>

      <h2 id="risks">Risks of Wrapped Tokens</h2>
      <p>
        The primary risk is custodial or bridge failure. If the entity holding the backing assets is compromised, wrapped tokens become unbacked. The Ronin bridge hack resulted in wrapped tokens losing their backing. Centralized custodians introduce counterparty risk, while decentralized bridges face smart contract risk. Always verify the backing mechanism and audit status of wrapped tokens before holding significant amounts in DeFi positions.
      </p>
    </LearnPageLayout>
  );
}
