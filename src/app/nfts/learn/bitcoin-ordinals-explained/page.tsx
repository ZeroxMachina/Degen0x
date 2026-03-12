import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bitcoin Ordinals Explained: NFTs on Bitcoin (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what Bitcoin Ordinals are, how inscriptions work, the differences from Ethereum NFTs, and how to buy, create, and trade Ordinals on the Bitcoin blockchain.",
};

export default function BitcoinOrdinalsExplainedPage() {
  return (
    <LearnPageLayout
      title="Bitcoin Ordinals Explained"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="12 min"
      intro="Bitcoin Ordinals have brought NFT-like functionality to the world's oldest and most secure blockchain. Launched in January 2023, the Ordinals protocol allows users to inscribe data directly onto individual satoshis (the smallest unit of Bitcoin), creating unique digital artifacts that live permanently on the Bitcoin blockchain. This guide explains how Ordinals work, how they differ from traditional NFTs, and how to participate in this rapidly growing ecosystem."
      toc={[
        { id: "what-are-ordinals", title: "what-are-ordinals", level: 2 },
        { id: "what-are-bitcoin-ordinals", title: "What Are Bitcoin Ordinals?", level: 2 },
        { id: "how-inscriptions-work", title: "how-inscriptions-work", level: 2 },
        { id: "how-inscriptions-work", title: "How Inscriptions Work", level: 2 },
        { id: "ordinals-vs-nfts", title: "ordinals-vs-nfts", level: 2 },
        { id: "ordinals-vs-ethereum-nfts", title: "Ordinals vs Ethereum NFTs", level: 2 },
        { id: "buying-ordinals", title: "buying-ordinals", level: 2 },
        { id: "how-to-buy-ordinals", title: "How to Buy Ordinals", level: 2 },
        { id: "creating-inscriptions", title: "creating-inscriptions", level: 2 },
        { id: "creating-your-own-inscriptions", title: "Creating Your Own Inscriptions", level: 2 },
        { id: "brc20-and-runes", title: "brc20-and-runes", level: 2 },
        { id: "brc-20-tokens-and-runes", title: "BRC-20 Tokens and Runes", level: 2 }
      ]}
      faqs={[
        {
          question: "Are Ordinals truly stored on the Bitcoin blockchain?",
          answer:
            "Yes, Ordinal inscriptions are stored entirely on-chain in Bitcoin transaction witness data. Unlike most Ethereum NFTs which store media off-chain, the full content of an Ordinal inscription lives on the Bitcoin blockchain permanently. This makes them extremely durable but limits file sizes.",
        },
        {
          question: "How much does it cost to create an Ordinal inscription?",
          answer:
            "The cost depends on the file size and current Bitcoin network fees. Small text inscriptions can cost under $5, while larger image inscriptions may cost $20 to $200 or more during periods of high network activity. The data is stored in the transaction witness, so costs scale with byte size.",
        },
        {
          question: "What wallet do I need for Ordinals?",
          answer:
            "You need a Bitcoin wallet that supports Ordinals, such as Xverse, Unisat, or Hiro Wallet. Standard Bitcoin wallets may accidentally spend the satoshi containing your inscription as a regular transaction fee, which would effectively destroy your Ordinal. Use only Ordinals-compatible wallets.",
        },
        {
          question: "Where can I trade Ordinals?",
          answer:
            "Magic Eden is the largest marketplace for Bitcoin Ordinals. Other options include Unisat Marketplace, Ordinals Wallet, and OKX NFT Marketplace. The ecosystem is growing rapidly with new platforms launching to serve the Ordinals community.",
        },
        {
          question: "What are the most valuable Ordinals collections?",
          answer:
            "Notable collections include Bitcoin Punks, Ordinal Punks, Bitcoin Frogs, NodeMonkes, and early sub-1000 inscriptions which hold historical significance. The market values early inscription numbers, unique artistic quality, and collections with strong communities, similar to the Ethereum NFT market.",
        },
      ]}
      relatedArticles={[
        { title: "What Are NFTs?", href: "/nfts/learn/what-are-nfts", category: "NFTs" },
        { title: "How to Buy NFTs", href: "/nfts/learn/how-to-buy-nfts", category: "NFTs" },
        { title: "NFT Storage Solutions", href: "/nfts/learn/nft-storage", category: "NFTs" },
      ]}
    >
      <h2 id="what-are-ordinals">What Are Bitcoin Ordinals?</h2>
      <p>
        Bitcoin Ordinals are a protocol created by Casey Rodarmor that assigns a unique serial number
        to every individual satoshi (sat) in existence. Since there are 100 million satoshis in one
        Bitcoin, and approximately 21 million Bitcoin will ever exist, each of the roughly 2.1
        quadrillion satoshis can be individually identified and tracked. This numbering system is called
        Ordinal Theory.
      </p>
      <p>
        The inscription component allows arbitrary data, including images, text, audio, video, and even
        applications, to be attached to a specific satoshi. This data is stored in the witness section
        of a Bitcoin transaction, made possible by the SegWit and Taproot upgrades. Once inscribed, the
        data is permanently part of the Bitcoin blockchain and cannot be altered or removed.
      </p>

      <h2 id="how-inscriptions-work">How Inscriptions Work</h2>
      <p>
        When you create an inscription, you craft a special Bitcoin transaction that embeds your data in
        the witness field. The data is associated with the first satoshi of the transaction output. This
        inscribed satoshi can then be transferred between wallets like any other Bitcoin, carrying the
        inscription data with it. The inscription number is assigned based on the order it was created
        on the blockchain.
      </p>
      <p>
        File size is limited by Bitcoin&apos;s block size. In practice, inscriptions up to about 400 KB
        are feasible, though larger files significantly increase transaction costs. Most image
        inscriptions are optimized to small sizes, and creative compression techniques are common.
        Unlike Ethereum NFTs, there is no separate metadata layer; everything about the inscribed
        artifact lives in one place on the Bitcoin blockchain.
      </p>

      <h2 id="ordinals-vs-nfts">Ordinals vs Ethereum NFTs</h2>
      <p>
        The fundamental difference is on-chain storage. Ordinals store the complete content on Bitcoin,
        while most Ethereum NFTs store only a pointer to off-chain data. This means Ordinals are as
        permanent as Bitcoin itself, with no dependency on IPFS pinning services or external servers.
        However, Ethereum NFTs benefit from smart contract programmability, enabling features like
        royalties, dynamic metadata, and complex trading mechanics.
      </p>
      <p>
        Ethereum has a mature ecosystem with established marketplaces, lending protocols, and
        fractionalization tools. The Ordinals ecosystem is younger but growing rapidly, attracting
        users who value Bitcoin&apos;s security and permanence. Transaction costs on Bitcoin can be lower
        or higher than Ethereum depending on network congestion, and Bitcoin lacks the smart contract
        flexibility that powers DeFi-style NFT applications.
      </p>

      <h2 id="buying-ordinals">How to Buy Ordinals</h2>
      <p>
        To buy Ordinals, set up an Ordinals-compatible wallet like Xverse or Unisat. Fund it with
        Bitcoin by purchasing BTC on an exchange and sending it to your wallet. Then browse collections
        on Magic Eden, the largest Ordinals marketplace, or alternatives like Unisat Marketplace.
        Connect your wallet and purchase just as you would on any NFT marketplace.
      </p>
      <p>
        Pay attention to inscription numbers, as lower numbers are generally valued higher for their
        historical significance. Verify the inscription content on an Ordinals explorer before purchasing
        to ensure authenticity. The Ordinals market is still developing safety features, so exercise
        extra caution compared to more established Ethereum marketplaces.
      </p>

      <h2 id="creating-inscriptions">Creating Your Own Inscriptions</h2>
      <p>
        You can create inscriptions using tools like Unisat, Ordinals Bot, or the ord command-line
        tool for technically inclined users. Upload your file, choose the fee rate (higher fees mean
        faster confirmation), and submit the transaction. The inscription is assigned a number once
        the transaction is confirmed in a Bitcoin block.
      </p>
      <p>
        Optimize your files for size to minimize costs. Use compressed formats, reduce image dimensions,
        and consider SVG for vector graphics. Some creators use recursive inscriptions, which reference
        other inscriptions on-chain, allowing complex compositions without duplicating shared assets
        like JavaScript libraries or font files.
      </p>

      <h2 id="brc20-and-runes">BRC-20 Tokens and Runes</h2>
      <p>
        The Ordinals ecosystem has expanded beyond simple inscriptions. BRC-20 tokens use inscriptions
        to create fungible tokens on Bitcoin, similar to ERC-20 tokens on Ethereum but without smart
        contract support. While innovative, BRC-20 transactions are inefficient and have faced criticism
        for congesting the Bitcoin network.
      </p>
      <p>
        Runes, also created by Casey Rodarmor, is a more efficient protocol for fungible tokens on
        Bitcoin. Unlike BRC-20, Runes uses Bitcoin&apos;s UTXO model natively, reducing blockchain
        bloat. The Runes protocol launched with Bitcoin&apos;s halving in April 2024 and has seen
        significant adoption. Together, Ordinals inscriptions and Runes are building a comprehensive
        token ecosystem on Bitcoin that did not exist just two years ago.
      </p>
    </LearnPageLayout>
  );
}
