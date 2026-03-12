import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bitcoin Ordinals and Inscriptions Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Bitcoin Ordinals bring NFT-like functionality to Bitcoin by assigning serial numbers to individual satoshis...",
};

export default function OrdinalsInscriptionsGuidePage() {
  return (
    <LearnPageLayout
      title="Bitcoin Ordinals and Inscriptions Guide"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="10 min"
      intro="Bitcoin Ordinals bring NFT-like functionality to Bitcoin by assigning serial numbers to individual satoshis and enabling data inscription directly on the Bitcoin blockchain."
      toc={[
        { id: "section-1", title: "section-1", level: 2 },
        { id: "what-are-bitcoin-ordinals", title: "What Are Bitcoin Ordinals", level: 2 },
        { id: "section-2", title: "section-2", level: 2 },
        { id: "how-inscriptions-work", title: "How Inscriptions Work", level: 2 },
        { id: "section-3", title: "section-3", level: 2 },
        { id: "ordinals-ecosystem", title: "Ordinals Ecosystem", level: 2 },
        { id: "section-4", title: "section-4", level: 2 },
        { id: "collecting-and-creating-ordinals", title: "Collecting and Creating Ordinals", level: 2 }
      ]}
      faqs={[
        { question: "What are Bitcoin Ordinals?", answer: "Bitcoin Ordinals is a system that assigns unique serial numbers to individual satoshis, the smallest unit of Bitcoin. This allows satoshis to be tracked, traded, and collected individually. Inscriptions attach data like images or text directly to these numbered satoshis." },
        { question: "How are Ordinals different from Ethereum NFTs?", answer: "Ordinals store data directly on the Bitcoin blockchain rather than referencing off-chain storage. They use Bitcoin's security and decentralization but lack smart contract programmability. The cultural emphasis tends toward digital artifacts and on-chain permanence." },
      ]}
      relatedArticles={[
        { title: "NFT Complete Guide", href: "/nfts/learn/nft-complete-guide", category: "NFTs" },
        { title: "How NFTs Work", href: "/nfts/learn/how-nfts-work", category: "NFTs" },
        { title: "Best NFT Art Marketplaces", href: "/nfts/best/art", category: "NFTs" },
      ]}
    >
      <section id="section-1">
        <h2>What Are Bitcoin Ordinals</h2>
        <p>Bitcoin Ordinals is a numbering scheme created by Casey Rodarmor that assigns unique ordinal numbers to individual satoshis based on the order in which they were mined. This creates a way to identify and track specific satoshis as they move through transactions. Combined with the ability to inscribe data onto satoshis, Ordinals effectively brings NFT functionality to Bitcoin without requiring changes to the Bitcoin protocol.</p>
        <p>The system leverages features enabled by the Taproot upgrade, particularly the expanded data capacity in witness data. Each inscription is permanently embedded in the Bitcoin blockchain, making it as durable as Bitcoin itself. This on-chain permanence is a key philosophical distinction from most Ethereum NFTs that store media off-chain, and it has attracted collectors who value immutability above all else.</p>
      </section>

      <section id="section-2">
        <h2>How Inscriptions Work</h2>
        <p>Inscriptions attach arbitrary data to a specific satoshi using Bitcoin transactions. The data is stored in the transaction's witness field, which can include images, text, HTML, audio, and other file types. The inscription is permanently associated with the satoshi it was inscribed on, and transferring that satoshi transfers the inscription. File size is limited by Bitcoin block size constraints, typically allowing up to around 4MB per inscription.</p>
        <p>The inscription process involves creating a special Bitcoin transaction that embeds data in the witness. Tools and wallets designed for Ordinals handle the technical complexity, allowing creators to inscribe content by uploading files and paying the associated Bitcoin transaction fee. Fees vary significantly based on Bitcoin network congestion and the size of the inscribed data, with larger files requiring higher fees.</p>
      </section>

      <section id="section-3">
        <h2>Ordinals Ecosystem</h2>
        <p>The Ordinals ecosystem has grown rapidly to include dedicated marketplaces, wallets, and tooling. Magic Eden, Ordinals Market, and other platforms support buying, selling, and browsing inscriptions. Specialized wallets like Xverse and Hiro handle the unique requirements of managing and transferring inscribed satoshis. Explorer tools allow searching and viewing inscriptions by number, type, and content.</p>
        <p>Collections on Ordinals range from profile picture projects and generative art to experimental text inscriptions and recursive inscriptions that reference other on-chain content. BRC-20 tokens extend the Ordinals concept to create fungible tokens on Bitcoin. The ecosystem continues to evolve with new standards, tools, and creative applications pushing the boundaries of what is possible on the Bitcoin blockchain.</p>
      </section>

      <section id="section-4">
        <h2>Collecting and Creating Ordinals</h2>
        <p>Collecting Ordinals requires a Bitcoin wallet that supports Ordinals and the ability to manage individual satoshis. Unlike Ethereum where all NFTs in a wallet are easily visible, Ordinals require wallet software that understands ordinal theory to prevent accidentally spending inscribed satoshis in regular Bitcoin transactions. Using dedicated Ordinals wallets prevents this risk.</p>
        <p>Creating inscriptions involves preparing your content, selecting an inscription service or running inscription software, and paying the Bitcoin transaction fee. Consider file size carefully as it directly affects cost. The permanence of inscriptions means content cannot be updated or deleted once inscribed, so verify everything before committing. Early inscription numbers carry collector premium due to their historical significance in the Ordinals timeline.</p>
      </section>
    </LearnPageLayout>
  );
}
