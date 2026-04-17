import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";
import { Product } from "@/lib/types";
import MethodologyBlock from '@/components/MethodologyBlock';

import ArticleSchema from "@/components/ArticleSchema";

import AuthoritySources from "@/components/AuthoritySources";

import ReviewSchema from "@/components/ReviewSchema";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

const product: Product = {
  name: "Foundation",
  slug: "foundation",
  rating: 4.0,
  description: "Foundation is a curated NFT marketplace that has built its reputation as the premier destination for digital art. The platform features gallery-quality",
  pros: [
    "Curated, high-quality art-focused collections",
    "Strong reputation among digital artists and collectors",
    "Beautiful gallery-style presentation of artwork",
    "Built-in 24-hour auction system for premium art sales",
    "Enforced 10% creator royalties on all secondary sales",
  ],
  cons: [
    "5% marketplace fee is the highest among major platforms",
    "Ethereum-only with no multi-chain support",
    "Limited discovery and filtering tools compared to larger platforms",
    "Not suitable for gaming or utility NFTs",
  ],
  fees: "5% marketplace fee",
  bestFor: "Digital art collectors & artists",
  affiliateUrl: "https://degen0x.com/go/foundation",
  category: "nfts",
};

export const metadata: Metadata = {
  title: `Foundation Review: Premium NFT Art Marketplace (2026) | degen0x`,
  description:
    "In-depth Foundation review covering its curated art focus, auction system, creator tools, fees, and whether it's the right NFT marketplace for art collectors.",
  alternates: { canonical: "/nfts/reviews/foundation" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Nfts', item: 'https://degen0x.com/nfts' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/nfts/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Foundation', },
  ],
};

export default function FoundationReviewPage() {
  return (
    <>
      <ReviewSchema
        itemName="Foundation Review: Premium NFT Art Marketplace (2026)"
        url="https://degen0x.com/nfts/reviews/foundation"
        rating={4.0}
        datePublished="2024-06-01"
        dateModified="2026-04-17"
      />
      <ReviewPage
      product={product}
      categoryName="NFT Marketplaces"
      categorySlug="nfts"
      overview="Foundation launched in 2021 and quickly established itself as the premier marketplace for digital art NFTs. The platform built its reputation through a curated, invite-only model that attracted high-quality artists and serious collectors. While Foundation has since opened access to all creators, its brand association with quality persists, making it a destination for collectors seeking museum-caliber digital artwork.

The platform's gallery-style presentation sets it apart from the utilitarian interfaces of trading-focused platforms. Each artwork is displayed prominently with generous spacing, clean typography, and a design philosophy that lets the art speak for itself. Foundation's signature 24-hour reserve auction system has become iconic in the NFT art world, creating urgency and excitement that drives competitive bidding.

Foundation enforces a 10% creator royalty on all secondary sales and charges a 5% marketplace fee. While this makes it the most expensive mainstream platform, it is also one of the most creator-friendly. For artists, listing on Foundation signals quality and can attract serious collectors willing to pay premium prices for curated digital art."
      sections={[
        {
          id: "gallery-experience",
          title: "Gallery-Quality Browsing Experience",
          content:
            "Foundation provides a browsing experience that treats each artwork with the respect of a physical gallery. The homepage features curated selections, trending artists, and recent drops presented in a clean grid layout. Individual artwork pages display the piece prominently with detailed descriptions, edition information, and complete provenance history. The overall aesthetic is minimal and art-focused, prioritizing visual impact over data density. While this gallery approach enhances the art collecting experience, it means discovery tools are more limited than what you find on data-heavy marketplaces like OpenSea or Blur.",
        },
        {
          id: "auction-system",
          title: "24-Hour Reserve Auction System",
          content:
            "Foundation's signature feature is its 24-hour reserve auction. When a collector places the first bid at or above the reserve price, a 24-hour countdown begins. Any bid placed in the final 15 minutes extends the auction by 15 minutes, preventing last-second sniping and ensuring active bidders have fair opportunity to respond. This mechanism creates genuine excitement and has produced some of the most notable NFT art sales in the ecosystem. The auction format works particularly well for unique artwork where price discovery benefits from competitive bidding. Fixed-price listings and direct offers are also supported for artists who prefer immediate sales.",
        },
        {
          id: "creator-tools",
          title: "Creator Tools and Minting",
          content:
            "Foundation has evolved from invite-only to an open marketplace, though its brand still carries the prestige of its curated origins. Artists can mint single editions, open editions, and limited edition series through a streamlined interface. The minting process emphasizes art presentation with support for images, videos, and audio works. Foundation enforces 10% creator royalties on every secondary sale, providing meaningful ongoing revenue that many other platforms have made optional. The art-focused audience means collections listed on Foundation tend to attract more engaged collectors who value artistic merit over speculative trading potential.",
        },
        {
          id: "collector-community",
          title: "Collector Community and Culture",
          content:
            "Foundation has cultivated one of the strongest art collector communities in the NFT space. The early curation model attracted influential digital artists, which in turn drew serious collectors willing to invest in high-quality work. Social features including follows, activity feeds, and collection showcases foster ongoing community engagement. The platform regularly highlights emerging artists and hosts digital exhibitions that introduce new work to established collectors. The culture is distinctly art-world oriented, differentiating it from trading-focused platforms where collections are valued primarily for floor price speculation.",
        },
        {
          id: "fees-economics",
          title: "Fee Structure and Economics",
          content:
            "Foundation charges a 5% marketplace fee on all sales, the highest among major NFT platforms. On primary sales, the artist receives 85% after the 5% platform fee and 10% royalty allocation. On secondary sales, the seller pays 5% to the platform and 10% in creator royalties. While expensive compared to zero-fee platforms like Blur or Zora, Foundation's fee structure supports its curation efforts, gallery-quality infrastructure, and full royalty enforcement. For artists, the guaranteed royalty income on every secondary sale provides sustainable revenue that justifies the higher platform cost. Gas fees on Ethereum apply on top of marketplace fees.",
        },
      ]}
      fees={{
        "Marketplace Fee": "5% per sale",
        "Creator Royalties": "10% enforced on all secondary sales",
        "Primary Sale Split": "85% to artist, 5% platform, 10% royalty",
        "Listing Fee": "Free",
        "Gas Fees": "Ethereum network fees apply",
        "Auction Reserve": "No minimum reserve required",
      }}
      security={[
        "Audited smart contracts for marketplace and auction mechanics",
        "Non-custodial architecture with direct wallet settlements",
        "Escrow system for secure auction settlements",
        "Collection verification through platform curation history",
        "Anti-fraud monitoring for suspicious bidding activity",
      ]}
      features={[
        "Gallery-style art presentation and curation",
        "24-hour reserve auction system with anti-sniping",
        "Enforced 10% creator royalties on all secondary sales",
        "Single edition, limited edition, and open edition support",
        "Artist profiles with collection showcases",
        "Activity feeds and social discovery features",
        "Art-focused community of collectors and creators",
        "Clean minimal interface optimized for artwork display",
      ]}
      faqs={[
        {
          question: "Do I need an invitation to sell on Foundation?",
          answer:
            "No, Foundation is now open to all creators. While the platform originally used an invite-only model that helped establish its reputation for quality, it has since opened access. Any artist can create an account, mint artwork, and list it for sale.",
        },
        {
          question: "Why are Foundation's fees higher than other marketplaces?",
          answer:
            "Foundation charges 5% because it positions itself as a premium art platform with curated experiences, gallery-quality presentation, and enforced 10% creator royalties. The higher fees support the platform's focus on quality and ensure meaningful ongoing revenue for artists through guaranteed royalties.",
        },
        {
          question: "How does the Foundation auction work?",
          answer:
            "When an artwork is listed with a reserve price and the first bid meets or exceeds that reserve, a 24-hour countdown begins. Additional bids extend the countdown by 15 minutes if placed in the final 15 minutes, preventing last-second sniping and ensuring fair price discovery.",
        },
        {
          question: "Is Foundation good for NFT investing?",
          answer:
            "Foundation is best suited for collectors who value digital art and want to support artists directly. The 5% marketplace fee and 10% royalties mean transaction costs are high for frequent trading. However, high-quality art NFTs purchased on Foundation have historically held value well compared to speculative collections.",
        },
      ]}
      relatedReviews={[
        { name: "Magic Eden", slug: "magic-eden" },
        { name: "LooksRare", slug: "looksrare" },
        { name: "Tensor", slug: "tensor" },
      ]}
      relatedGuides={[
        {
          title: "How to Create NFTs",
          href: "/nfts/learn/how-to-create-nfts",
        },
        {
          title: "NFT Investing Guide",
          href: "/nfts/learn/nft-investing-guide",
        },
      ]}
    />
      <ArticleSchema
        headline="Foundation Review: Premium NFT Art Marketplace (2026) | degen0x"
        description="Foundation is a curated NFT marketplace that has built its reputation as the premier destination for digital art. The platform features gallery-quality"
        url="https://degen0x.com/nfts/reviews/foundation"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Reviews"
      />
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/nfts/reviews/foundation" />
        <ReadingTime />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Gallery-Quality Browsing Experience", "description": "Foundation is a curated NFT marketplace that has built its reputation as the premier destination for digital art. The platform features gallery-quality", "url": "https://degen0x.com/nfts/reviews/foundation", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/nfts/reviews/blur" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Blur</a>
  <a href="/nfts/reviews/element-market" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Element Market</a>
  <a href="/nfts/reviews/looksrare" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Looksrare</a>
  <a href="/nfts/reviews/magic-eden" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Magic Eden</a>
  <a href="/nfts/reviews/opensea" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Opensea</a>
  <a href="/nfts/reviews/ordinals-market" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Ordinals Market</a>
  <a href="/nfts/reviews/rarible" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Rarible</a>
  <a href="/nfts/reviews/superrare" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Superrare</a>
</nav>
      <MethodologyBlock variant="review" />
      </>
  );
}
