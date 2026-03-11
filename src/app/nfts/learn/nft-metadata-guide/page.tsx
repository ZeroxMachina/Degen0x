import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Metadata Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "NFT metadata defines everything about a token beyond its on-chain ownership record, including the image, attributes, description...",
};

export default function NftMetadataGuidePage() {
  return (
    <LearnPageLayout
      title="NFT Metadata Guide"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="10 min"
      intro="NFT metadata defines everything about a token beyond its on-chain ownership record, including the image, attributes, description, and external links. How metadata is stored and structured dramatically affects the long-term durability of NFTs."
      toc={[
        { id: "section-1", title: "Metadata Structure", level: 2 },
        { id: "section-2", title: "Storage Solutions", level: 2 },
        { id: "section-3", title: "Metadata Standards", level: 2 },
        { id: "section-4", title: "Best Practices", level: 2 },
      ]}
      faqs={[
        { question: "What is NFT metadata?", answer: "NFT metadata is the descriptive information attached to a token, including name, description, image URL, and attributes like traits and rarity. It is typically stored off-chain and referenced by the smart contract through a URI." },
        { question: "Why does metadata storage matter?", answer: "If metadata is stored on centralized servers, it can disappear if the server goes down. IPFS and Arweave provide decentralized storage that persists independently of any single entity, protecting the long-term value of your NFTs." },
      ]}
      relatedArticles={[
        { title: "NFT Complete Guide", href: "/nfts/learn/nft-complete-guide", category: "NFTs" },
        { title: "IPFS and NFT Storage", href: "/nfts/learn/ipfs-nft-storage", category: "NFTs" },
        { title: "Best NFT Art Marketplaces", href: "/nfts/best/art", category: "NFTs" },
      ]}
    >
      <section id="section-1">
        <h2>Metadata Structure</h2>
        <p>NFT metadata follows a JSON schema that describes the token's properties. The standard fields include name, description, image (or animation_url for multimedia), and attributes. Attributes are an array of trait-value pairs that define characteristics like background color, accessory type, or rarity tier. Marketplaces parse this metadata to display NFTs with their visual content and filterable properties.</p>
        <p>The metadata JSON is referenced by the smart contract through a tokenURI function that returns a URL. This URL can point to IPFS, Arweave, a centralized server, or even return base64-encoded data for fully on-chain metadata. The reliability and permanence of this URL directly determines whether your NFT will continue to display its content years into the future.</p>
      </section>

      <section id="section-2">
        <h2>Storage Solutions</h2>
        <p>Centralized storage on platforms like AWS or traditional web servers is the simplest approach but creates dependency on the server operator. If the company goes bankrupt or the server is decommissioned, the metadata and images disappear, leaving tokens pointing to dead URLs. This has already happened with numerous early NFT projects whose content is no longer accessible.</p>
        <p>Decentralized storage solutions like IPFS use content addressing where the URL is a hash of the content itself, ensuring the URL always references the correct data regardless of where it is hosted. Arweave provides permanent storage through economic incentives that fund perpetual hosting. On-chain storage encodes data directly in the blockchain, providing maximum durability at higher cost. Each solution offers different trade-offs between cost, permanence, and accessibility.</p>
      </section>

      <section id="section-3">
        <h2>Metadata Standards</h2>
        <p>OpenSea established the de facto metadata standard that most marketplaces follow. The standard specifies fields for name, description, image, external_url, attributes, and background_color. Extensions support animation_url for video and 3D content, and properties for additional structured data. Following these standards ensures your NFTs display correctly across all major marketplaces and aggregators.</p>
        <p>Different chains and ecosystems may have variations in metadata standards. Solana uses the Metaplex metadata standard with fields for creators, seller fees, and collection grouping. Tezos NFTs follow TZIP standards. Understanding the metadata conventions for your target chain ensures proper rendering and marketplace integration, which directly affects discoverability and trading experience for collectors.</p>
      </section>

      <section id="section-4">
        <h2>Best Practices</h2>
        <p>Always use decentralized storage for metadata and media files. Pin your IPFS content through multiple pinning services to ensure availability. Use frozen metadata where the tokenURI cannot be changed after minting to prevent rug pulls where creators swap artwork after sale. Include comprehensive attributes to enable filtering and rarity calculations on marketplaces.</p>
        <p>For generative collections, validate metadata completeness before deployment. Ensure all trait combinations are valid and that images match their metadata descriptions. Use metadata refresh tools provided by marketplaces after any updates. Keep metadata files well-organized with consistent naming conventions, and always test metadata rendering on target marketplaces before launching a collection to the public.</p>
      </section>
    </LearnPageLayout>
  );
}
