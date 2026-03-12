import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { nftMarketplaces } from "@/data/nfts";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best NFT Marketplaces for Gaming in ${CURRENT_YEAR} | degen0x`,
  description: `Find the best NFT marketplaces for gaming assets in ${CURRENT_YEAR}. Trade in-game items, virtual land, characters, and gaming collectibles on top platforms.`,
};

const faqs = [
  {
    question: "What are gaming NFTs?",
    answer: "Gaming NFTs are non-fungible tokens representing in-game assets such as characters, weapons, virtual land, skins, and collectibles. Unlike traditional game items, gaming NFTs can be truly owned by players, traded on open marketplaces, and potentially used across multiple games.",
  },
  {
    question: "Which marketplace is best for trading gaming NFTs?",
    answer: "OpenSea has the broadest selection of gaming NFTs across multiple chains. Magic Eden is excellent for Solana-based gaming collections. For Ethereum gaming NFTs with professional trading tools, Blur offers zero-fee trading. The best choice depends on which blockchain your preferred games use.",
  },
  {
    question: "Can I make money trading gaming NFTs?",
    answer: "Some traders profit from gaming NFTs by buying early in promising games, trading rare items, or flipping virtual land. However, gaming NFT markets can be volatile, and many game projects fail. Research the game's team, community, and long-term viability before investing.",
  },
  {
    question: "Are gaming NFTs different from art NFTs?",
    answer: "Yes. Gaming NFTs have utility within their game ecosystems, providing in-game benefits, access, or functionality. Art NFTs are primarily valued for their aesthetic and cultural significance. Gaming NFTs often have more volatile pricing tied to game popularity and player counts.",
  },
];

export default function BestForGamingPage() {
  const recommended = ["opensea", "magic-eden", "blur", "rarible", "tensor"];
  const filtered = nftMarketplaces
    .filter((m) => recommended.includes(m.slug))
    .sort((a, b) => {
      const order = recommended.indexOf(a.slug) - recommended.indexOf(b.slug);
      return order;
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best NFT Marketplaces for Gaming ${CURRENT_YEAR}`,
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "degen0x" },
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
            { label: "For Gaming", href: "/nfts/best/gaming" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best NFT Marketplaces for Gaming in {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Gaming NFTs represent one of the fastest-growing segments of the NFT market. From in-game
            items and virtual land to playable characters and tournament passes, gaming assets require
            marketplaces with strong liquidity, fast transactions, and support for the blockchains where
            games are built. We evaluated platforms based on gaming collection breadth, transaction speed,
            fees, and the overall trading experience for gaming assets.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Platforms for Gaming NFTs</h2>
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
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What to Consider for Gaming NFTs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Chain Compatibility", desc: "Ensure the marketplace supports the blockchain your game is built on (Ethereum, Solana, Polygon, etc.)." },
              { title: "Transaction Speed", desc: "Gaming NFTs are traded frequently, so fast settlement times and low gas fees matter." },
              { title: "Collection Breadth", desc: "Look for platforms that list major gaming collections and frequently add new game partnerships." },
              { title: "Liquidity Depth", desc: "Higher liquidity means faster sales and more accurate pricing for gaming items." },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-lg bg-[var(--color-bg)]/50">
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{item.title}</h3>
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
