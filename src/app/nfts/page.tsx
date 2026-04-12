import type { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { nftMarketplaces } from "@/data/nfts";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best NFT Marketplaces of ${CURRENT_YEAR} - Compare & Review`,
  description: `Compare the best NFT marketplaces of ${CURRENT_YEAR}. Expert reviews, fee comparisons, creator tools analysis, and guides to help you find the right platform for buying, selling, and creating NFTs.`,
  alternates: { canonical: "/nfts" }};

const bestOfLinks = [
  { title: "Best NFT Marketplaces", href: "/nfts/best", description: "Our top-rated NFT marketplaces across all categories" },
  { title: "Best for Beginners", href: "/nfts/best/beginners", description: "Easy-to-use platforms for NFT newcomers" },
  { title: "Best for Art", href: "/nfts/best/art", description: "Top platforms for digital art NFTs" },
  { title: "Best for Gaming", href: "/nfts/best/gaming", description: "Leading gaming NFT marketplaces" },
  { title: "Best for Music", href: "/nfts/best/music", description: "Top platforms for music NFTs" },
  { title: "Best for Photography", href: "/nfts/best/photography", description: "Curated photography NFT platforms" },
  { title: "Best on Solana", href: "/nfts/best/solana", description: "Top Solana NFT marketplaces" },
  { title: "Best on Ethereum", href: "/nfts/best/ethereum", description: "Leading Ethereum NFT platforms" },
  { title: "Best for Bitcoin Ordinals", href: "/nfts/best/bitcoin-ordinals", description: "Trade Bitcoin-native NFTs" },
  { title: "Best for Free Mints", href: "/nfts/best/free-mint", description: "Platforms with free minting tools" },
  { title: "Lowest Fee Marketplaces", href: "/nfts/best/low-fee", description: "Save money with the cheapest fees" },
  { title: "Best for Creators", href: "/nfts/best/creators", description: "Top tools for NFT creators" },
];

const reviewLinks = [
  { name: "OpenSea", slug: "opensea" },
  { name: "Blur", slug: "blur" },
  { name: "Magic Eden", slug: "magic-eden" },
  { name: "LooksRare", slug: "looksrare" },
  { name: "X2Y2", slug: "x2y2" },
  { name: "Rarible", slug: "rarible" },
  { name: "Foundation", slug: "foundation" },
  { name: "SuperRare", slug: "superrare" },
  { name: "Zora", slug: "zora" },
  { name: "Tensor", slug: "tensor" },
];

const compareLinks = [
  { title: "OpenSea vs Blur", href: "/nfts/compare/opensea-vs-blur" },
  { title: "Magic Eden vs OpenSea", href: "/nfts/compare/magic-eden-vs-opensea" },
  { title: "LooksRare vs X2Y2", href: "/nfts/compare/looksrare-vs-x2y2" },
  { title: "Foundation vs SuperRare", href: "/nfts/compare/foundation-vs-superrare" },
  { title: "OpenSea vs Rarible", href: "/nfts/compare/opensea-vs-rarible" },
  { title: "Tensor vs Magic Eden", href: "/nfts/compare/tensor-vs-magic-eden" },
];

const learnLinks = [
  { title: "What Are NFTs?", href: "/nfts/learn/what-are-nfts" },
  { title: "How to Buy NFTs", href: "/nfts/learn/how-to-buy-nfts" },
  { title: "How to Create NFTs", href: "/nfts/learn/how-to-create-nfts" },
  { title: "NFT Marketplaces Explained", href: "/nfts/learn/nft-marketplaces-explained" },
  { title: "NFT Investing Guide", href: "/nfts/learn/nft-investing-guide" },
  { title: "NFT Royalties Explained", href: "/nfts/learn/nft-royalties-explained" },
  { title: "NFT Storage Guide", href: "/nfts/learn/nft-storage" },
  { title: "NFT Security Tips", href: "/nfts/learn/nft-security-tips" },
  { title: "NFT Tax Guide", href: "/nfts/learn/nft-tax-guide" },
  { title: "Bitcoin Ordinals Explained", href: "/nfts/learn/bitcoin-ordinals-explained" },
  { title: "NFT Gaming Guide", href: "/nfts/learn/nft-gaming-guide" },
  { title: "NFT Art Guide", href: "/nfts/learn/nft-art-guide" },
];

const toolLinks = [
  { title: "Rarity Checker", href: "/nfts/tools/rarity-checker", description: "Check rarity rankings for any NFT collection" },
  { title: "Floor Price Tracker", href: "/nfts/tools/floor-price-tracker", description: "Track floor prices across collections" },
  { title: "Profit Calculator", href: "/nfts/tools/profit-calculator", description: "Calculate your NFT trading profits and losses" },
];

const faqs = [
  {
    question: "What is an NFT marketplace?",
    answer: "An NFT marketplace is a digital platform where you can buy, sell, and trade non-fungible tokens (NFTs). These platforms serve as intermediaries connecting creators who mint NFTs with collectors who want to purchase them. Popular marketplaces include OpenSea, Blur, and Magic Eden, each with different fee structures, supported blockchains, and specializations.",
  },
  {
    question: "How do I choose the right NFT marketplace?",
    answer: "Consider factors like the blockchain you want to use (Ethereum, Solana, Bitcoin), the type of NFTs you are interested in (art, gaming, music), marketplace fees, available tools, liquidity, and user interface. Beginners should prioritize ease of use, while professional traders may value advanced analytics and low fees.",
  },
  {
    question: "What fees do NFT marketplaces charge?",
    answer: "NFT marketplace fees typically range from 0% to 5%. Blur and Zora charge 0%, while OpenSea charges 2.5% and Foundation charges 5%. In addition to marketplace fees, sellers may pay creator royalties (usually 5-10%) and blockchain gas fees for transactions on networks like Ethereum.",
  },
  {
    question: "Are NFT marketplaces safe?",
    answer: "Reputable NFT marketplaces employ smart contract security audits, verified collection badges, and anti-fraud measures. However, risks include phishing attacks, counterfeit NFTs, and smart contract vulnerabilities. Always verify collection authenticity, use hardware wallets for valuable NFTs, and never share your seed phrase.",
  },
  {
    question: "Can I create and sell NFTs for free?",
    answer: "Yes, several platforms offer free or low-cost minting. OpenSea supports lazy minting where the NFT is minted only when purchased. Zora and platforms on Layer 2 networks like Polygon offer very low minting costs. However, you will still need a crypto wallet and may pay gas fees depending on the blockchain.",
  },
];

export default function NftsPage() {
  const topMarketplaces = [...nftMarketplaces].sort((a, b) => b.rating - a.rating).slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Best NFT Marketplaces of ${CURRENT_YEAR}`,
    description: `Compare the best NFT marketplaces of ${CURRENT_YEAR}. Expert reviews, fee comparisons, and creator tools analysis.`,
    url: "https://degen0x.com/nfts",
    isPartOf: { "@type": "WebSite", name: SITE_NAME },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "NFT Marketplaces", href: "/nfts" },
          ]}
        />

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
            NFT Marketplaces Hub
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Your complete resource for comparing NFT marketplaces. Find expert reviews,
            head-to-head comparisons, guides, and tools to help you choose the best
            platform for buying, selling, and creating NFTs. Last updated {CURRENT_MONTH} {CURRENT_YEAR}.
          </p>
        </div>

        {/* Top Marketplaces Quick Look */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">Top-Rated NFT Marketplaces</h2>
            <Link href="/nfts/best"
              className="text-[var(--color-primary)] hover:underline text-sm font-medium"
            >
              View all rankings &rarr;
            </Link>
          </div>
          <AffiliateDisclosure />
          <div className="space-y-4">
            {topMarketplaces.map((marketplace, index) => (
              <ProductCard
                key={marketplace.slug}
                product={marketplace}
                rank={index + 1}
                categorySlug="nfts"
              />
            ))}
          </div>
        </section>

        {/* Best-Of Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Find the Best NFT Marketplace For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bestOfLinks.map((link) => (
              <Link href="/nfts/best"
                key={link.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover block"
              >
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{link.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Marketplace Reviews */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Marketplace Reviews</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {reviewLinks.map((review) => (
              <Link href="/nfts/best"
                key={review.slug}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover text-center block"
              >
                <span className="text-[var(--color-text)] font-semibold">{review.name}</span>
                <span className="block text-xs text-[var(--color-text-secondary)] mt-1">
                  Full Review
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Comparisons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Head-to-Head Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {compareLinks.map((link) => (
              <Link href="/nfts/best"
                key={link.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover block"
              >
                <span className="text-[var(--color-text)] font-semibold">{link.title}</span>
                <span className="block text-xs text-[var(--color-text-secondary)] mt-1">
                  Detailed comparison &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Tools & Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {toolLinks.map((tool) => (
              <Link href="/nfts/best"
                key={tool.href}
              >
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{tool.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Learn Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Learn About NFTs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learnLinks.map((link) => (
              <Link href="/nfts/best"
                key={link.href}
              >
                <span className="text-[var(--color-text)] font-semibold">{link.title}</span>
                <span className="block text-xs text-[var(--color-text-secondary)] mt-1">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How We Review NFT Marketplaces</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Our NFT marketplace reviews are based on rigorous hands-on testing. Each platform is evaluated
            across multiple categories including fees, user experience, creator tools, supported blockchains,
            security measures, and community quality. We actively trade on every marketplace we review and
            regularly update our ratings to reflect changes in the rapidly evolving NFT ecosystem.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            Our editorial team consists of experienced NFT collectors, creators, and researchers who have
            collectively spent thousands of hours using these platforms. We believe in full transparency:
            when you click an affiliate link and sign up, we may receive a commission at no extra cost
            to you. This helps us keep our content free and up-to-date.
          </p>
        </section>

        <FAQSection faqs={faqs} />
            <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            All Learning Guides
          </Link>
          <Link href="/tools" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Crypto Tools
          </Link>
          <Link href="/compare" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
