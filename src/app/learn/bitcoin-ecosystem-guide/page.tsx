import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `The Bitcoin Ecosystem Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Explore the Bitcoin ecosystem including Ordinals, BRC-20 tokens, Lightning Network, Layer 2s, and the growing DeFi landscape building on Bitcoin.",
};

export default function BitcoinEcosystemGuidePage() {
  return (
    <LearnPageLayout
      title="The Bitcoin Ecosystem Guide"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="10 min read"
      intro="Bitcoin is more than just digital gold. While BTC remains the dominant store-of-value cryptocurrency, the Bitcoin ecosystem has expanded dramatically with Ordinals, BRC-20 tokens, the Lightning Network, and emerging Layer 2 solutions. This new wave of Bitcoin innovation is bringing DeFi, NFTs, and programmability to the most secure and decentralized blockchain in existence, creating an entirely new economy built on Bitcoin's unmatched foundation."
      toc={[
        { id: "bitcoin-ecosystem", title: "The Evolving Bitcoin Ecosystem", level: 2 },
        { id: "ordinals-brc20", title: "Ordinals and BRC-20 Tokens", level: 2 },
        { id: "lightning-network", title: "Lightning Network", level: 2 },
        { id: "bitcoin-layer2s", title: "Bitcoin Layer 2s and DeFi", level: 2 },
      ]}
      faqs={[
        {
          question: "Can Bitcoin do smart contracts?",
          answer:
            "Bitcoin's base layer has limited scripting capabilities, but innovations like Ordinals, Runes, and Layer 2 solutions are bringing smart contract functionality to Bitcoin. Bitcoin Layer 2s like Stacks, BOB, and Merlin enable full programmability while settling on Bitcoin. Bitvm is also exploring trust-minimized computation verification on Bitcoin.",
        },
        {
          question: "What are Bitcoin Ordinals?",
          answer:
            "Ordinals are a protocol that allows data to be inscribed onto individual satoshis (the smallest unit of Bitcoin). This enables NFT-like assets that live directly on the Bitcoin blockchain without requiring a sidechain or separate token. Inscriptions can include images, text, audio, and even applications, all stored permanently on Bitcoin.",
        },
        {
          question: "Is the Lightning Network widely used?",
          answer:
            "The Lightning Network processes millions of transactions monthly with growing adoption, particularly for payments and micropayments. Countries like El Salvador use it for retail Bitcoin payments. Major exchanges support Lightning deposits and withdrawals. However, it requires channel management and has usability challenges that limit mainstream adoption.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Bitcoin?", href: "/learn/what-is-bitcoin", category: "Learn Crypto" },
        { title: "Ethereum Ecosystem Guide", href: "/learn/ethereum-ecosystem-guide", category: "Learn Crypto" },
        { title: "What Is Mining?", href: "/learn/what-is-mining", category: "Learn Crypto" },
        { title: "What Are NFTs?", href: "/learn/what-are-nfts", category: "Learn Crypto" },
      ]}
    >
      <section id="bitcoin-ecosystem">
        <h2>The Evolving Bitcoin Ecosystem</h2>
        <p>
          For most of its history, Bitcoin was viewed primarily as a monetary network for transferring and storing value. The ecosystem was limited to wallets, exchanges, and mining. Starting in 2023, a wave of innovation unlocked new possibilities on Bitcoin. Ordinals brought NFTs to the base layer, BRC-20 and Runes created fungible token standards, and Layer 2 solutions began offering smart contract capabilities secured by Bitcoin&apos;s proof of work.
        </p>
        <p>
          This expansion has been controversial within the Bitcoin community. Purists argue that additional functionality increases block space competition and detracts from Bitcoin&apos;s monetary mission. Proponents counter that increased fee revenue from ecosystem activity makes Bitcoin mining more sustainable as block rewards decline with each halving. The debate continues, but the ecosystem&apos;s growth has been undeniable, with billions in value flowing into Bitcoin-native assets and protocols.
        </p>
      </section>

      <section id="ordinals-brc20">
        <h2>Ordinals and BRC-20 Tokens</h2>
        <p>
          Ordinals, introduced by Casey Rodarmor in January 2023, assign a unique number to every satoshi based on the order it was mined. Data can then be inscribed onto these numbered satoshis, creating unique digital artifacts that live directly on the Bitcoin blockchain. Unlike NFTs on Ethereum which typically store images on IPFS, Ordinal inscriptions are fully on-chain and benefit from Bitcoin&apos;s permanence and security.
        </p>
        <p>
          BRC-20 tokens built on Ordinals introduced fungible tokens to Bitcoin using JSON inscriptions, though they are less capital-efficient than Ethereum&apos;s ERC-20 standard. The Runes protocol, launched at the 2024 halving, provides a more efficient fungible token standard designed specifically for Bitcoin. These token standards have created an active trading ecosystem with dedicated marketplaces, though they also cause temporary fee spikes on the Bitcoin network.
        </p>
      </section>

      <section id="lightning-network">
        <h2>Lightning Network</h2>
        <p>
          The Lightning Network is a Layer 2 payment channel network that enables instant, near-zero-fee Bitcoin transactions. It works by creating bidirectional payment channels between parties, with transactions only settling on the Bitcoin base layer when channels are opened or closed. Routing through a network of channels allows payments to reach any participant without requiring a direct channel, creating a scalable payment network.
        </p>
        <p>
          Lightning capacity has grown to thousands of BTC, and the network processes millions of transactions monthly. It is used for retail payments, tipping, gaming, and micropayments. Wallets like Wallet of Satoshi, Phoenix, and Breez provide user-friendly Lightning experiences. Nostr, the decentralized social protocol, uses Lightning for native tipping functionality. Despite growing adoption, Lightning still faces challenges around channel liquidity management and routing reliability.
        </p>
      </section>

      <section id="bitcoin-layer2s">
        <h2>Bitcoin Layer 2s and DeFi</h2>
        <p>
          Bitcoin Layer 2 solutions are bringing DeFi capabilities to the Bitcoin ecosystem. Stacks is the most established, offering smart contracts through its Clarity language while settling on Bitcoin. The upcoming Nakamoto upgrade promises faster block times and a trust-minimized sBTC bridge. BOB (Build on Bitcoin) provides an EVM-compatible L2 that connects to Bitcoin through a hybrid bridge architecture.
        </p>
        <p>
          Bitcoin DeFi, sometimes called BTCFi, is emerging through lending protocols, decentralized exchanges, and staking mechanisms. Babylon Protocol enables Bitcoin staking for securing proof-of-stake chains, creating yield opportunities for BTC holders without giving up custody. Liquid Network by Blockstream offers confidential transactions and token issuance on a Bitcoin sidechain. As these Layer 2s mature, Bitcoin is evolving from a passive store of value into an active financial ecosystem rivaling what Ethereum has built.
        </p>
      </section>
    </LearnPageLayout>
  );
}
