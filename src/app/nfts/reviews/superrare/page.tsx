import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { nftMarketplaces } from "@/data/nfts";
import ReviewPage from "@/components/ReviewPage";

const product = nftMarketplaces.find((m) => m.slug === "superrare")!;

export const metadata: Metadata = {
  title: "SuperRare Review 2026: Fees, Features, Pros & Cons",
  description: "Our in-depth SuperRare review covers premium art curation, RARE governance, 1-of-1 focus, and whether it's worth the premium fees. Updated March 2026.",
  alternates: { canonical: "/nfts/reviews/superrare" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Nfts', item: 'https://degen0x.com/nfts' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/nfts/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Superrare', },
  ],
};

export default function SuperRareReview() {
  return (
    <>
      <ReviewPage
      product={product}
      categoryName="NFT Marketplaces"
      categorySlug="nfts"
      overview="SuperRare launched in 2018 as an ultra-curated NFT art marketplace, positioning itself as the digital equivalent of a world-class art gallery. The platform exclusively features 1-of-1 artworks from vetted artists, maintaining the highest curatorial standards in the NFT space. SuperRare has hosted sales from some of the most celebrated digital artists, with individual pieces selling for hundreds of ETH.

The platform's selective artist approval process ensures that every work listed meets high artistic standards. While this exclusivity limits the number of available artworks, it creates a concentrated environment of quality that attracts serious collectors willing to pay premium prices. SuperRare's community of artists and collectors forms one of the most engaged and sophisticated networks in the digital art world.

In 2021, SuperRare introduced the RARE governance token and transitioned toward a more decentralized curation model. Community-curated galleries called SuperRare Spaces allow RARE token holders to curate exhibitions, expanding the platform's curatorial capacity while maintaining quality through collective decision-making."
      sections={[
        { id: "user-experience", title: "User Experience", content: "SuperRare presents the most gallery-like digital experience in the NFT marketplace space. Each artwork is displayed with generous framing, detailed artist statements, and comprehensive provenance records. The browsing experience feels more like visiting a virtual museum than using a trading platform. Artist profiles showcase their complete body of work with biographical information and collection history. The auction and offer interfaces are clean and straightforward. While beautiful, the interface prioritizes aesthetics over trading efficiency, which may frustrate users looking for rapid-fire trading tools." },
        { id: "curation-model", title: "Curation Model", content: "SuperRare's curation is its defining feature. Artists must apply and be accepted through a review process that evaluates artistic quality, originality, and fit with the platform's aesthetic standards. Acceptance rates are low, making a SuperRare listing a meaningful credential for digital artists. The introduction of SuperRare Spaces has expanded curation through community-governed galleries where RARE holders curate themed exhibitions. This hybrid model maintains high standards while allowing the community to shape the platform's artistic direction." },
        { id: "rare-token", title: "RARE Token & Governance", content: "The RARE token provides governance over the SuperRare ecosystem, including decisions about platform development, curation policies, and treasury allocation. SuperRare Spaces are governed by RARE holders who propose, vote on, and curate gallery exhibitions. The token creates economic alignment between the platform, artists, and collectors. RARE also enables the community to decide which new artists are onboarded through community curation votes, partially decentralizing the previously centralized acceptance process." },
        { id: "collector-experience", title: "Collector Experience", content: "SuperRare caters to serious art collectors with tools for building and showcasing collections. Collector profiles display owned artworks in a gallery format that can be shared publicly. The platform's focus on 1-of-1 pieces means every acquisition is unique, appealing to collectors who value exclusivity. Price history and provenance tracking provide transparent ownership records. The secondary market for SuperRare artworks benefits from the platform's prestige, with many pieces appreciating significantly after initial sale." },
      ]}
      fees={{ "Buyer Premium": "3% on all purchases", "Primary Sale Commission": "15% (artist receives 85%)", "Secondary Sale Royalty": "10% to artist", "Secondary Marketplace Fee": "3% buyer premium", "Listing Fee": "Free", "Gas Fees": "Ethereum network fees apply" }}
      security={[ "Audited smart contracts for marketplace and gallery mechanics", "Vetted artist onboarding process reduces counterfeit risk", "Non-custodial architecture with wallet-based authentication", "Comprehensive provenance tracking for all artworks", "RARE governance for community oversight of platform policies" ]}
      features={[ "Ultra-curated 1-of-1 digital art marketplace", "Vetted artist approval process ensuring quality", "RARE governance token for community curation", "SuperRare Spaces for community-curated exhibitions", "Gallery-quality artwork presentation and display", "Comprehensive provenance and ownership history", "Reserve auction system for premium sales", "Artist profiles with biographical context" ]}
      faqs={[
        { question: "How do I become a SuperRare artist?", answer: "Artists must apply through SuperRare's application process. The review evaluates artistic quality, originality, and technical skill. Acceptance rates are selective. Additionally, community curation through SuperRare Spaces provides an alternative pathway for artists to gain platform presence through RARE token holder votes." },
        { question: "Why is SuperRare more expensive than other platforms?", answer: "SuperRare charges a 3% buyer premium and 15% primary sale commission because it operates as an ultra-premium art platform with strict curation, gallery-quality presentation, and comprehensive artist support. The higher fees support the curatorial infrastructure and ensure meaningful returns for artists." },
        { question: "What is the difference between SuperRare and Foundation?", answer: "SuperRare is more exclusive with stricter artist vetting and focuses exclusively on 1-of-1 works. Foundation is more accessible, now open to all creators, and supports editions alongside unique pieces. SuperRare commands higher average prices while Foundation has broader participation." },
      ]}
      relatedReviews={[ { name: "Foundation", slug: "foundation" }, { name: "Zora", slug: "zora" }, { name: "OpenSea", slug: "opensea" } ]}
      relatedGuides={[ { title: "Best for Art", href: "/nfts/best/art" }, { title: "NFT Art Guide", href: "/nfts/learn/nft-art-guide" } ]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "SuperRare Review 2026: Fees, Features, Pros & Cons", "description": "Our in-depth SuperRare review covers premium art curation, RARE governance, 1-of-1 focus, and whether it's worth the premium fees. Updated March 2026.", "url": "https://degen0x.com/nfts/reviews/superrare", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/nfts/reviews/blur" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Blur</a>
  <a href="/nfts/reviews/element-market" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Element Market</a>
  <a href="/nfts/reviews/foundation" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Foundation</a>
  <a href="/nfts/reviews/looksrare" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Looksrare</a>
  <a href="/nfts/reviews/magic-eden" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Magic Eden</a>
  <a href="/nfts/reviews/opensea" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Opensea</a>
  <a href="/nfts/reviews/ordinals-market" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Ordinals Market</a>
  <a href="/nfts/reviews/rarible" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Rarible</a>
</nav>
      </>
  );
}
