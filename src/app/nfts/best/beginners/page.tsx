import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { nftMarketplaces } from "@/data/nfts";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best NFT Marketplaces for Beginners in ${CURRENT_YEAR} | CryptoDegen`,
  description: `Discover the best NFT marketplaces for beginners in ${CURRENT_YEAR}. Easy-to-use platforms with simple minting, intuitive browsing, and helpful onboarding for first-time NFT buyers and creators.`,
};

const faqs = [
  {
    question: "What is the easiest NFT marketplace to use?",
    answer: "OpenSea is widely considered the easiest NFT marketplace for beginners. It offers an intuitive interface, supports multiple blockchains, and provides lazy minting so creators can list NFTs without paying upfront gas fees. The platform also has extensive help documentation and tutorials.",
  },
  {
    question: "Do I need technical knowledge to buy NFTs?",
    answer: "No, you do not need technical knowledge to buy NFTs. You only need a crypto wallet (like MetaMask or Phantom), some cryptocurrency to cover the purchase price and gas fees, and a basic understanding of how to connect your wallet to a marketplace. Most platforms guide you through the process step by step.",
  },
  {
    question: "How much does it cost to start buying NFTs?",
    answer: "You can start buying NFTs for as little as a few dollars on Layer 2 networks like Polygon or Solana where gas fees are minimal. On Ethereum mainnet, gas fees can range from $5 to $50+ depending on network congestion, plus the cost of the NFT itself. Many collections offer free mints where you only pay gas.",
  },
  {
    question: "What wallet do I need for NFT marketplaces?",
    answer: "For Ethereum-based marketplaces like OpenSea and Blur, MetaMask is the most popular wallet. For Solana marketplaces like Magic Eden and Tensor, Phantom is the standard choice. Most wallets are free browser extensions that take just a few minutes to set up.",
  },
];

export default function BestForBeginnersPage() {
  const recommended = ["opensea", "rarible", "magic-eden", "foundation", "zora"];
  const filtered = nftMarketplaces
    .filter((m) => recommended.includes(m.slug))
    .sort((a, b) => b.rating - a.rating);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best NFT Marketplaces for Beginners ${CURRENT_YEAR}`,
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "CryptoDegen" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "NFTs", href: "/nfts" },
            { label: "Best NFT Marketplaces", href: "/nfts/best" },
            { label: "For Beginners", href: "/nfts/best/beginners" },
          ]}
        />

        <h1 className="text-4xl font-bold text-white mb-4">
          Best NFT Marketplaces for Beginners in {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Getting started with NFTs does not have to be intimidating. The best marketplaces for
            beginners offer intuitive interfaces, helpful tutorials, and straightforward buying and
            minting processes. We evaluated each platform based on ease of use, onboarding experience,
            support resources, and how quickly a complete newcomer can make their first purchase or
            create their first NFT.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Our Top Picks for Beginners</h2>
          <div className="space-y-4">
            {filtered.map((marketplace, index) => (
              <ProductCard
                key={marketplace.slug}
                product={marketplace}
                rank={index + 1}
                categorySlug="nfts"
              />
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-white mb-4">What Beginners Should Look For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Simple Interface", desc: "Clean design with clear navigation, easy search, and straightforward buy/sell flows." },
              { title: "Multi-Chain Support", desc: "Access to low-cost chains like Polygon and Solana alongside Ethereum." },
              { title: "Free Minting", desc: "Lazy minting or gasless options so creators can start without spending ETH." },
              { title: "Educational Content", desc: "Built-in guides, tooltips, and help documentation for NFT newcomers." },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-lg bg-[var(--color-bg)]/50">
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
