import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Photography: How to Sell Photos as NFTs (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how to mint and sell photography as NFTs. Discover the best platforms, pricing strategies, and how professional photographers are building sustainable income with NFT photography.",
};

export default function NftPhotographyPage() {
  return (
    <LearnPageLayout
      title="NFT Photography: How to Sell Photos as NFTs"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="10 min"
      intro="NFT photography has emerged as a transformative opportunity for photographers to monetize their work through blockchain technology. Unlike traditional stock photography where images sell for pennies, NFT photography enables direct sales to collectors with ongoing royalty income from secondary sales. From fine art photographers to travel and street photographers, creators are finding new audiences and revenue streams in the NFT space."
      toc={[
        { id: "why-nft-photography", title: "why-nft-photography", level: 2 },
        { id: "why-nft-photography-matters", title: "Why NFT Photography Matters", level: 2 },
        { id: "best-platforms", title: "best-platforms", level: 2 },
        { id: "best-platforms-for-photo-nfts", title: "Best Platforms for Photo NFTs", level: 2 },
        { id: "minting-photos", title: "minting-photos", level: 2 },
        { id: "how-to-mint-photography-nfts", title: "How to Mint Photography NFTs", level: 2 },
        { id: "pricing-editions", title: "pricing-editions", level: 2 },
        { id: "pricing-and-edition-strategies", title: "Pricing and Edition Strategies", level: 2 },
        { id: "building-audience", title: "building-audience", level: 2 },
        { id: "building-a-collector-audience", title: "Building a Collector Audience", level: 2 }
      ]}
      faqs={[
        { question: "Do I need to be a professional photographer to sell NFT photos?", answer: "No, but quality and uniqueness matter. The NFT photography market rewards compelling images with strong artistic vision, storytelling, or technical excellence. Amateur photographers with distinctive perspectives can succeed, especially in niches like street photography, abstract, or documentary work." },
        { question: "How much can I earn selling photography NFTs?", answer: "Earnings vary enormously. Established photographers sell single editions for thousands of dollars. Emerging artists may start with sales in the $50-500 range. Open editions can generate volume sales at lower price points. Royalties from secondary sales provide ongoing income. The key factors are audience building, consistent quality, and community engagement." },
        { question: "Should I sell 1/1 editions or open editions?", answer: "Both strategies work. Single editions (1/1) create scarcity and can command premium prices from serious collectors. Open editions or limited editions reach a wider audience at lower price points and can generate more total revenue. Many photographers use a mix: 1/1 for flagship work and limited editions for popular images." },
      ]}
      relatedArticles={[
        { title: "How to Create NFTs", href: "/nfts/learn/how-to-create-nfts", category: "NFTs" },
        { title: "NFT Royalties Explained", href: "/nfts/learn/nft-royalties-explained", category: "NFTs" },
        { title: "Best NFT Marketplaces for Art", href: "/nfts/best/art", category: "NFTs" },
      ]}
    >
      <h2 id="why-nft-photography">Why NFT Photography Matters</h2>
      <p>Traditional photography monetization is broken. Stock photography pays cents per download. Gallery representation is exclusive and takes large commissions. Social media provides exposure but not income. NFT photography changes the economics fundamentally by enabling photographers to sell directly to collectors, set their own prices, and earn royalties on every subsequent resale. A single photograph can generate income for years through secondary market royalties. This shift in power from intermediaries to creators is why photographers from all backgrounds are exploring NFTs.</p>

      <h2 id="best-platforms">Best Platforms for Photo NFTs</h2>
      <p>Foundation has become a hub for high-quality photography NFTs with its curated gallery-style presentation. SuperRare features ultra-premium 1/1 photography from vetted artists. Objkt on Tezos offers a lower-cost entry point with an active photography community. Glass Protocol specializes exclusively in photography NFTs with an Instagram-like interface. OpenSea provides the broadest market reach. Zora offers a decentralized option with no marketplace fees. Each platform attracts different collector demographics and price ranges, so research where your style of photography finds the most appreciation.</p>

      <h2 id="minting-photos">How to Mint Photography NFTs</h2>
      <p>Minting involves uploading your photograph and creating a blockchain token representing ownership. Choose your blockchain: Ethereum for premium market access, Tezos for low minting costs, or Solana for a middle ground. Prepare your image at the highest quality your platform supports. Write a compelling title and description that tells the story behind the photograph. Set edition type (1/1, limited, or open), price, and royalty percentage (typically 5-10% for secondary sales). Confirm the minting transaction in your wallet. The photograph is now an NFT that collectors can discover, purchase, and trade.</p>

      <h2 id="pricing-editions">Pricing and Edition Strategies</h2>
      <p>Pricing requires balancing market positioning with accessibility. Research comparable photographers on your target platform to understand price ranges. For 1/1 editions, prices typically range from 0.1 ETH for emerging artists to several ETH for established names. Limited editions of 5-25 copies allow lower individual prices while generating higher total revenue. Open editions with time-limited availability create urgency and accessibility. Consider offering a mix: anchor pieces as 1/1 editions at premium prices and accessible editions for new collectors. Price progression is important: start modestly and increase as demand builds rather than pricing too high initially.</p>

      <h2 id="building-audience">Building a Collector Audience</h2>
      <p>Success in NFT photography depends on building relationships with collectors. Share your work and process on Twitter/X, which is the primary social platform for the NFT community. Engage with other photographers and collectors by commenting, sharing, and participating in community events. Join photography-focused NFT communities on Discord. Participate in group exhibitions and collaborative projects. Tell the story behind each photograph because collectors buy stories as much as images. Consistency matters: regular drops, active community presence, and genuine engagement build a collector base over time.</p>
    </LearnPageLayout>
  );
}
