import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { nftMarketplaces } from "@/data/nfts";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best NFT Marketplaces for Free Minting in ${CURRENT_YEAR} | CryptoDegen`,
  description: `Find the best NFT marketplaces with free minting in ${CURRENT_YEAR}. Create and list NFTs without upfront gas costs using lazy minting and low-cost chains.`,
};

const faqs = [
  {
    question: "Can I really mint NFTs for free?",
    answer: "Yes, several platforms offer free or near-free minting. OpenSea supports lazy minting where the NFT is created on-chain only when someone purchases it, meaning no upfront gas cost. Zora and platforms on Layer 2 networks offer minting for fractions of a cent. On Solana, minting costs are typically under $0.01.",
  },
  {
    question: "What is lazy minting?",
    answer: "Lazy minting is a technique where the NFT metadata is stored off-chain until a buyer purchases the item. At that point, the NFT is minted on-chain and the gas fee is included in the purchase price, effectively making minting free for the creator. OpenSea popularized this approach.",
  },
  {
    question: "Which blockchain has the cheapest NFT minting?",
    answer: "Solana and Layer 2 networks like Polygon, Base, and Zora Network offer the cheapest minting costs, typically under $0.01 per NFT. Ethereum mainnet is the most expensive for minting, with gas costs ranging from $5 to $50+ depending on network congestion.",
  },
  {
    question: "Are free-minted NFTs lower quality?",
    answer: "Not at all. The minting cost has no relationship to the quality or value of the NFT. Many successful collections and established artists use free or low-cost minting options. The value of an NFT comes from the art, the artist, the community, and market demand, not from how much it cost to mint.",
  },
];

export default function BestForFreeMintPage() {
  const recommended = ["opensea", "zora", "magic-eden", "rarible", "tensor"];
  const filtered = nftMarketplaces
    .filter((m) => recommended.includes(m.slug))
    .sort((a, b) => {
      const order = recommended.indexOf(a.slug) - recommended.indexOf(b.slug);
      return order;
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best NFT Marketplaces for Free Minting ${CURRENT_YEAR}`,
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
            { label: "Free Minting", href: "/nfts/best/free-mint" },
          ]}
        />

        <h1 className="text-4xl font-bold text-white mb-4">
          Best NFT Marketplaces for Free Minting in {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            High minting costs should not be a barrier to creating NFTs. The best platforms offer
            lazy minting, Layer 2 support, or native low-cost blockchains that allow creators to
            list their work with minimal or zero upfront costs. We evaluated each platform on their
            free minting capabilities, supported chains, and the overall creator experience for
            those working on a budget.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Best Platforms for Free Minting</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Free Minting Options Compared</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Lazy Minting (OpenSea)", desc: "NFT is minted on-chain only when purchased. Zero upfront cost for creators on Ethereum." },
              { title: "Zora Network L2", desc: "Mint on Zora's own Layer 2 for fractions of a cent with full Ethereum security." },
              { title: "Solana Minting", desc: "Solana's low fees make minting cost under $0.01 per NFT on platforms like Magic Eden." },
              { title: "Polygon Support", desc: "Several platforms support Polygon minting with gas fees under $0.01 per transaction." },
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
