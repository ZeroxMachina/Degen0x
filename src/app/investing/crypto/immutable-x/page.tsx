import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Immutable X (IMX)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Immutable X (IMX), the Layer 2 scaling solution for NFTs and gaming on Ethereum. Discover how it works, tokenomics, use cases, and how to buy IMX.",
};

export default function ImmutableXPage() {
  return (
    <LearnPageLayout
      title="What Is Immutable X (IMX)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Immutable X is an Ethereum Layer 2 scaling solution specifically designed for NFTs and blockchain gaming. Using StarkEx zero-knowledge rollup technology, Immutable offers gas-free NFT minting and trading with instant confirmation while inheriting Ethereum's security. IMX is the native token used for fees, staking, and governance."
      toc={[
        { id: "what-is", title: "What Is Immutable X?", level: 2 },
        { id: "how-it-works", title: "How Does Immutable X Work?", level: 2 },
        { id: "tokenomics", title: "IMX Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy IMX", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Immutable X?",
          answer:
            "Immutable X is an Ethereum Layer 2 designed for NFTs and gaming. It provides gas-free minting and trading through ZK-rollup technology while maintaining Ethereum-level security.",
        },
        {
          question: "Where can I buy IMX?",
          answer:
            "IMX is available on Coinbase, Binance, Kraken, OKX, and other major exchanges. It is an ERC-20 token.",
        },
        {
          question: "Is Immutable X a good investment?",
          answer:
            "Immutable has strong partnerships in gaming and NFTs with over 300 game studios, but depends on blockchain gaming adoption. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Gala Games", href: "/investing/crypto/gala", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Immutable X?</h2>
      <p>
        Immutable X was created by Immutable, an Australian Web3 gaming company founded by James and Robbie Ferguson in 2018. The platform launched in 2021 as the first Layer 2 for NFTs on Ethereum, addressing the prohibitively high gas costs that made NFT minting and trading expensive on Ethereum mainnet. Immutable has since expanded to include Immutable zkEVM, built in partnership with Polygon.
      </p>
      <p>
        The platform has partnered with over 300 game studios and developers, providing gas-free NFT minting, a global orderbook for asset trading, comprehensive SDKs, and the Immutable Passport for seamless user onboarding. This makes Immutable one of the leading blockchain gaming infrastructure providers.
      </p>

      <h2 id="how-it-works">How Does Immutable X Work?</h2>
      <p>
        Immutable X uses StarkEx, a ZK-rollup scaling engine by StarkWare, to batch thousands of NFT transactions off-chain and post a single validity proof to Ethereum. This achieves up to 9,000 transactions per second with zero gas fees for users. Immutable zkEVM provides full EVM compatibility for developers who want to deploy existing Ethereum smart contracts with Immutable&apos;s scaling benefits.
      </p>
      <p>
        The Immutable Passport provides a unified login and wallet system for games, simplifying onboarding for mainstream gamers. Both Immutable X and zkEVM are connected through a shared orderbook and liquidity layer, enabling cross-platform asset trading.
      </p>

      <h2 id="tokenomics">IMX Tokenomics</h2>
      <p>
        IMX has a maximum supply of 2 billion tokens distributed among ecosystem development, project development, private investors, and public participants. IMX is required for 20% of all protocol fees (the rest payable in ETH), staking for governance, and building on the platform. Protocol fees from NFT trades are distributed among stakers and the ecosystem treasury.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Immutable powers NFT minting and trading for gaming assets, in-game marketplaces, digital collectible platforms, and cross-game asset interoperability. Notable games include Gods Unchained, Illuvium, and Guild of Guardians. The platform serves as the backbone for blockchain gaming infrastructure, handling the complexity of asset management so developers can focus on gameplay.
      </p>

      <h2 id="how-to-buy">How to Buy IMX</h2>
      <p>
        To buy IMX, register on Coinbase, Binance, or Kraken. Complete identity verification, deposit funds, and purchase IMX tokens. After buying, you can stake IMX to participate in governance and earn protocol fee rewards. IMX is stored in any Ethereum-compatible wallet like MetaMask or Ledger hardware wallets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Immutable&apos;s success is tied to blockchain gaming adoption, which has faced significant headwinds. Many announced game partnerships are still in development. The NFT market has cooled from 2021-2022 highs, affecting trading volume and fee generation. Competition from Ronin, Beam, and general-purpose L2s is intensifying.
      </p>
      <p>
        Token unlock schedules create selling pressure. The split between Immutable X (StarkEx) and Immutable zkEVM adds ecosystem complexity. Revenue from protocol fees remains modest relative to the token&apos;s market capitalization.
      </p>
    </LearnPageLayout>
  );
}
