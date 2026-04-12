import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { nftMarketplaces, nftDetailedComparisons, nftComparisonFeatures } from "@/data/nfts";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `10 Best NFT Marketplaces of ${CURRENT_YEAR} (Ranked & Reviewed)`,
  description: `Compare the top 10 NFT marketplaces of ${CURRENT_YEAR}. We tested fees, creator tools, security, and user experience. Find the best platform for buying, selling, and creating NFTs.`,
};

const faqs = [
  {
    question: "What is the best NFT marketplace overall?",
    answer: `Based on our testing in ${CURRENT_YEAR}, OpenSea ranks highest overall thanks to its massive collection library, multi-chain support, and user-friendly interface. For professional traders focused on Ethereum, Blur offers zero fees and advanced analytics. For Solana users, Magic Eden is the clear leader.`,
  },
  {
    question: "What is the cheapest NFT marketplace?",
    answer: "Blur and Zora both charge 0% marketplace fees, making them the cheapest options for traders. X2Y2 charges just 0.5%, and Tensor offers reduced fees for TNSR token holders. Keep in mind that blockchain gas fees still apply regardless of marketplace fees.",
  },
  {
    question: "Which NFT marketplace is best for beginners?",
    answer: "OpenSea is the most beginner-friendly NFT marketplace. It offers an intuitive interface, extensive help documentation, multi-chain support, and lazy minting for creators who want to list NFTs without upfront gas costs. Rarible is another good option with its straightforward minting tools.",
  },
  {
    question: "Which NFT marketplace has the most collections?",
    answer: "OpenSea has the largest selection with over 2 million collections across multiple blockchains. On Solana specifically, Magic Eden and Tensor have the most comprehensive collections. For premium curated art, Foundation and SuperRare offer the highest quality selections.",
  },
  {
    question: "Do I need a crypto wallet to use NFT marketplaces?",
    answer: "Yes, you need a compatible crypto wallet to buy, sell, or create NFTs on any marketplace. MetaMask is the most popular wallet for Ethereum-based marketplaces, while Phantom is the standard for Solana platforms. Most marketplaces support multiple wallet options.",
  },
  {
    question: "Are creator royalties still enforced on NFT marketplaces?",
    answer: "Creator royalty enforcement varies by marketplace. Platforms like Foundation and SuperRare fully enforce royalties. OpenSea made royalties optional in 2024, and Blur allows sellers to choose. On Solana, Magic Eden supports royalty enforcement for collections that opt in.",
  },
];

export default function BestNftMarketplacesPage() {
  const rankedMarketplaces = [...nftMarketplaces].sort((a, b) => b.rating - a.rating);
  const comparisonItems = rankedMarketplaces.slice(0, 5).map((m) => nftDetailedComparisons[m.slug]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `10 Best NFT Marketplaces of ${CURRENT_YEAR}`,
    dateModified: new Date().toISOString(),
    author: { "@type": "Organization", name: "degen0x" },
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
            { label: "NFTs", href: "/nfts" },
            { label: "Best NFT Marketplaces", href: "/nfts/best" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          10 Best NFT Marketplaces of {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            The NFT marketplace landscape has evolved dramatically, with platforms now competing on fees,
            multi-chain support, creator tools, and trading features. We spent over 150 hours testing
            the top marketplaces, buying and selling NFTs, testing minting tools, and evaluating the
            overall experience on each platform.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            Our top pick for most users is <strong className="text-[var(--color-text)]">OpenSea</strong> for
            its unmatched collection breadth and multi-chain support. For professional traders seeking zero
            fees and advanced tools, <strong className="text-[var(--color-text)]">Blur</strong> dominates Ethereum
            volume. And for Solana enthusiasts, <strong className="text-[var(--color-text)]">Magic Eden</strong> is
            the clear leader with additional Bitcoin Ordinals support.
          </p>
        </div>

        {/* Rankings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Rankings</h2>
          <div className="space-y-4">
            {rankedMarketplaces.map((marketplace, index) => (
              <ProductCard
                key={marketplace.slug}
                product={marketplace}
                rank={index + 1}
                categorySlug="nfts"
              />
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
            Top 5 Marketplaces Compared
          </h2>
          <ComparisonTable
            items={comparisonItems}
            features={nftComparisonFeatures}
            title="Feature Comparison"
          />
        </section>

        {/* Methodology */}
        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Methodology</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            We evaluate each NFT marketplace across six key categories, each weighted based on importance
            to the average user:
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a0d1e', border: '1px solid #5b2141', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🎨</span>
            <strong style={{ color: '#f472b6', fontSize: 15 }}>NFT Reality</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            The NFT market has matured significantly. We focus on utility and community value rather than floor price speculation.
          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Fees (25%)", desc: "Marketplace fees, creator royalties, gas costs, and hidden charges." },
              { title: "User Experience (20%)", desc: "Interface design, onboarding flow, search tools, and mobile experience." },
              { title: "Collection Breadth (20%)", desc: "Number of collections, supported chains, and variety of NFT types." },
              { title: "Creator Tools (15%)", desc: "Minting tools, launchpad features, royalty support, and custom contracts." },
              { title: "Security (10%)", desc: "Smart contract audits, verified collections, anti-fraud measures, and safety features." },
              { title: "Trading Features (10%)", desc: "Advanced order types, analytics, portfolio tracking, and bulk tools." },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-lg bg-[var(--color-bg)]/50">
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Reviews Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
            Quick Summaries
          </h2>
          <div className="space-y-6">
            {rankedMarketplaces.slice(0, 5).map((marketplace, index) => (
              <div
                key={marketplace.slug}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
              >
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">
                  {index + 1}. {marketplace.name} &mdash; Best for {marketplace.bestFor}
                </h3>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  {marketplace.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--color-success)] mb-2">
                      What We Like
                    </h4>
                    <ul className="space-y-1">
                      {marketplace.pros.map((pro, i) => (
                        <li
                          key={i}
                          className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2"
                        >
                          <span className="text-[var(--color-success)] mt-0.5">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--color-danger)] mb-2">
                      What Could Improve
                    </h4>
                    <ul className="space-y-1">
                      {marketplace.cons.map((con, i) => (
                        <li
                          key={i}
                        >
                          <span className="text-[var(--color-danger)] mt-0.5">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="nfts"
        />

                <div className="mt-4 flex gap-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="affiliate-cta px-4 py-2 rounded-lg text-white text-sm font-medium"
                  >
                    Visit {marketplace.name}
                  </a>
                  <a
                    className="px-4 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] text-sm font-medium hover:bg-[var(--color-bg)]/50 transition-colors"
                  >
                    Read Full Review
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
