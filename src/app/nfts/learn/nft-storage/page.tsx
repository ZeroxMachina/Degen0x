import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Storage Solutions: How and Where NFT Data Is Stored (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Understand how NFT data is stored, the differences between on-chain and off-chain storage, IPFS vs Arweave, and how to ensure your NFTs remain accessible long-term.",
};

export default function NftStoragePage() {
  return (
    <LearnPageLayout
      title="NFT Storage Solutions"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="11 min"
      intro="Where and how an NFT's media and metadata are stored is one of the most important yet overlooked factors in evaluating digital assets. An NFT on the blockchain is only a token with a pointer to data. If that data disappears because a server goes offline, the NFT becomes a link to nothing. This guide explains the different storage approaches, their trade-offs, and how to evaluate the durability of an NFT before you buy."
      toc={[
        { id: "on-chain-vs-off-chain", title: "On-Chain vs Off-Chain Storage", level: 2 },
        { id: "ipfs", title: "IPFS: The Decentralized Standard", level: 2 },
        { id: "arweave", title: "Arweave: Permanent Storage", level: 2 },
        { id: "centralized-storage", title: "Centralized Storage Risks", level: 2 },
        { id: "evaluating-storage", title: "Evaluating an NFT's Storage", level: 2 },
        { id: "best-practices", title: "Storage Best Practices for Creators", level: 2 },
      ]}
      faqs={[
        {
          question: "What happens to my NFT if IPFS goes down?",
          answer:
            "IPFS itself cannot go down as it is a protocol, not a single server. However, the data must be pinned (actively hosted) by at least one node. If all pinning services stop hosting your file, it becomes unavailable until someone re-pins it. Pinning services like Pinata and NFT.Storage help ensure persistence.",
        },
        {
          question: "Are on-chain NFTs better than off-chain?",
          answer:
            "On-chain NFTs are the most durable since all data lives on the blockchain permanently. However, storing large files on-chain is expensive, so on-chain NFTs are typically limited to small images, generative art code, or text. For larger media, a combination of on-chain metadata with decentralized off-chain storage is considered best practice.",
        },
        {
          question: "How much does it cost to store NFT data on Arweave?",
          answer:
            "Arweave storage costs are a one-time payment that varies based on file size and current network pricing. As of 2025, storing 1 MB on Arweave costs approximately $0.01 to $0.05. This is a permanent fee with no recurring costs, making it extremely economical for long-term storage.",
        },
        {
          question: "Can I change where my NFT data is stored after minting?",
          answer:
            "It depends on the smart contract. If the metadata URI is updatable in the contract, the creator can migrate storage. If the metadata is frozen or immutable, the storage location is permanent. Some creators intentionally freeze metadata to guarantee collectors that the data will not change.",
        },
        {
          question: "What is the best storage solution for NFT creators?",
          answer:
            "The gold standard is storing metadata on-chain with media on Arweave for permanent storage. A good middle ground is IPFS with a reliable pinning service like Pinata or NFT.Storage. Avoid using centralized servers alone, as they create a single point of failure.",
        },
      ]}
      relatedArticles={[
        { title: "What Are NFTs?", href: "/nfts/learn/what-are-nfts", category: "NFTs" },
        { title: "How to Create and Mint NFTs", href: "/nfts/learn/how-to-create-nfts", category: "NFTs" },
        { title: "NFT Security Best Practices", href: "/nfts/learn/nft-security-tips", category: "NFTs" },
      ]}
    >
      <h2 id="on-chain-vs-off-chain">On-Chain vs Off-Chain Storage</h2>
      <p>
        On-chain storage means all NFT data, including the media file, lives directly on the blockchain.
        This is the most durable approach since the data persists as long as the blockchain exists.
        However, storing data on Ethereum costs approximately $15,000 per megabyte at current gas prices,
        making it impractical for large files. Projects like CryptoPunks and Autoglyphs store data
        on-chain, but they use extremely small file sizes or generative code.
      </p>
      <p>
        Off-chain storage places the media file on an external system and stores only a reference (URI)
        on the blockchain. This is far more cost-effective and supports files of any size. The trade-off
        is that the media file depends on the storage system remaining available. The quality of that
        storage system varies enormously, from permanent decentralized networks to fragile cloud servers.
      </p>

      <h2 id="ipfs">IPFS: The Decentralized Standard</h2>
      <p>
        The InterPlanetary File System (IPFS) is the most widely used storage solution for NFTs. IPFS
        uses content-addressing, meaning each file is identified by a hash of its contents rather than
        a location. This ensures that the same content always resolves to the same address, and tampering
        is detectable. When you see an NFT pointing to an ipfs:// URI, it is using this system.
      </p>
      <p>
        The key requirement with IPFS is pinning. Files must be actively pinned by at least one node
        to remain available on the network. Pinning services like Pinata, NFT.Storage, and Infura
        provide reliable hosting for IPFS data. Without active pinning, files may be garbage-collected
        and become unavailable. Creators should use a dedicated pinning service and ideally pin data
        across multiple providers for redundancy.
      </p>

      <h2 id="arweave">Arweave: Permanent Storage</h2>
      <p>
        Arweave is a blockchain-based storage network designed specifically for permanent data storage.
        You pay a one-time fee to upload data, and the network&apos;s economic model incentivizes miners
        to store it indefinitely. This eliminates the ongoing maintenance required with IPFS pinning and
        provides the strongest durability guarantee of any off-chain solution.
      </p>
      <p>
        Many high-profile NFT projects use Arweave for their metadata and media. The cost is minimal for
        individual files and scales reasonably for collections. The trade-off is that Arweave has a
        smaller ecosystem than IPFS and less universal tooling support. However, its permanence guarantee
        makes it increasingly popular among creators who value long-term durability above all else.
      </p>

      <h2 id="centralized-storage">Centralized Storage Risks</h2>
      <p>
        Some NFTs point to URLs on centralized servers (Amazon S3, Google Cloud, or the project&apos;s
        own website). This is the most fragile approach. If the company shuts down, stops paying hosting
        bills, or changes the URL structure, the NFT&apos;s media becomes permanently inaccessible. Your
        on-chain token remains, but it points to a dead link.
      </p>
      <p>
        This has already happened to numerous NFT projects. When marketplaces or small projects go
        offline, thousands of NFTs lose their associated media. Before purchasing any NFT, check the
        metadata URI. If it starts with https:// pointing to a regular website rather than ipfs:// or
        ar://, the storage is centralized and carries significant long-term risk.
      </p>

      <h2 id="evaluating-storage">Evaluating an NFT&apos;s Storage</h2>
      <p>
        To check how an NFT&apos;s data is stored, view the token on a block explorer like Etherscan.
        Find the tokenURI function and examine where it points. IPFS URIs (ipfs://...) indicate
        decentralized storage. Arweave URIs (ar://... or arweave.net/...) indicate permanent storage.
        Standard HTTP URLs indicate centralized hosting with associated risks.
      </p>
      <p>
        Also check whether the metadata itself is stored on-chain or off-chain. Some projects store
        the media on IPFS but keep the metadata (which links to the media) on a centralized server.
        The chain is only as strong as its weakest link. The most robust NFTs have both metadata and
        media on decentralized or permanent storage.
      </p>

      <h2 id="best-practices">Storage Best Practices for Creators</h2>
      <p>
        As a creator, prioritize storing your NFT media on IPFS with a reliable pinning service or on
        Arweave for permanent storage. Store metadata on-chain when feasible, or at minimum on IPFS
        with the media. Freeze your metadata after minting if your contract supports it, so collectors
        can trust that the data will not change.
      </p>
      <p>
        Consider using multiple storage layers for redundancy. Some creators store media on both IPFS
        and Arweave, with the on-chain URI pointing to IPFS and a backup on Arweave. Document your
        storage approach transparently so collectors can evaluate the durability of your NFTs before
        purchasing.
      </p>
    </LearnPageLayout>
  );
}
