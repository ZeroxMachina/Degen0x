import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { nftMarketplaces } from "@/data/nfts";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best NFT Marketplaces for Music in ${CURRENT_YEAR} | degen0x`,
  description: `Discover the best platforms for music NFTs in ${CURRENT_YEAR}. Buy, sell, and collect music NFTs from independent and established artists on top marketplaces.`,
};

const faqs = [
  {
    question: "What are music NFTs?",
    answer: "Music NFTs are non-fungible tokens representing ownership of music-related digital assets, including songs, albums, beats, stems, concert passes, and exclusive audio experiences. They allow artists to sell directly to fans while retaining more revenue compared to traditional streaming platforms.",
  },
  {
    question: "Which marketplace is best for music NFTs?",
    answer: "Zora is an excellent choice for music NFTs due to its zero fees and creator-friendly tools. OpenSea offers the broadest reach for music collections. Foundation provides a curated environment that attracts quality music creators. The best platform depends on your specific needs as an artist or collector.",
  },
  {
    question: "How do music NFTs help artists?",
    answer: "Music NFTs enable artists to sell their work directly to fans without intermediaries, retain a higher percentage of revenue, earn ongoing royalties from secondary sales, build closer relationships with their audience, and offer exclusive content or experiences tied to token ownership.",
  },
  {
    question: "Can I listen to music NFTs?",
    answer: "Yes, most music NFTs include playback functionality on the marketplace or through compatible players. Owning a music NFT typically grants access to the audio file, though the specific rights (personal use vs. commercial licensing) vary by collection and creator terms.",
  },
];

export default function BestForMusicPage() {
  const recommended = ["zora", "opensea", "foundation", "rarible", "superrare"];
  const filtered = nftMarketplaces
    .filter((m) => recommended.includes(m.slug))
    .sort((a, b) => {
      const order = recommended.indexOf(a.slug) - recommended.indexOf(b.slug);
      return order;
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best NFT Marketplaces for Music ${CURRENT_YEAR}`,
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
            { label: "For Music", href: "/nfts/best/music" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best NFT Marketplaces for Music in {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Music NFTs are transforming how artists distribute and monetize their work. From
            independent musicians releasing debut tracks to established artists offering exclusive
            content, the right marketplace can make all the difference. We evaluated platforms on
            their audio support, creator tools, community engagement, royalty infrastructure, and
            the overall experience for music creators and collectors.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Platforms for Music NFTs</h2>
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
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Key Features for Music NFT Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Audio Playback", desc: "Built-in music players that let collectors preview and listen to tracks directly on the platform." },
              { title: "Edition Support", desc: "Ability to mint multiple editions of a track, allowing artists to reach more fans at accessible price points." },
              { title: "Royalty Infrastructure", desc: "Robust on-chain royalties ensuring artists earn from every secondary sale of their music." },
              { title: "Community Tools", desc: "Features that help artists build fan communities, offer exclusives, and engage directly with collectors." },
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
