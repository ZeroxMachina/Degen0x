import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { nftMarketplaces } from "@/data/nfts";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Ethereum NFT Marketplaces in ${CURRENT_YEAR} | degen0x`,
  description: `Compare the best Ethereum NFT marketplaces in ${CURRENT_YEAR}. Trade blue-chip collections, digital art, and more on the most established NFT blockchain.`,
};

const faqs = [
  {
    question: "Why are most valuable NFTs on Ethereum?",
    answer: "Ethereum was the first blockchain to support NFTs through the ERC-721 standard and has the longest history, largest collector base, and most established collections (CryptoPunks, Bored Ape Yacht Club, etc.). This network effect creates higher liquidity and more confidence in long-term value.",
  },
  {
    question: "Are Ethereum gas fees still high for NFTs?",
    answer: "Ethereum gas fees have decreased significantly since the merge to proof-of-stake and the introduction of Layer 2 solutions. However, during peak demand, fees can still reach $20-50+ per transaction. Layer 2 marketplaces and collections on Base, Arbitrum, or Polygon offer much lower costs.",
  },
  {
    question: "Which Ethereum NFT marketplace has the lowest fees?",
    answer: "Blur charges 0% marketplace fees on Ethereum, making it the cheapest option for traders. Zora also charges 0% fees. X2Y2 charges 0.5%, and OpenSea charges 2.5%. Note that blockchain gas fees apply on all platforms regardless of marketplace fees.",
  },
  {
    question: "What wallet do I need for Ethereum NFTs?",
    answer: "MetaMask is the most widely supported wallet for Ethereum NFT marketplaces. Coinbase Wallet, Rainbow, and hardware wallets like Ledger (connected via MetaMask) are also excellent options. Ensure your wallet supports the ERC-721 and ERC-1155 token standards.",
  },
];

export default function BestForEthereumPage() {
  const recommended = ["blur", "opensea", "looksrare", "x2y2", "rarible", "foundation", "superrare", "zora"];
  const filtered = nftMarketplaces
    .filter((m) => recommended.includes(m.slug))
    .sort((a, b) => b.rating - a.rating);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best Ethereum NFT Marketplaces ${CURRENT_YEAR}`,
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
            { label: "Ethereum", href: "/nfts/best/ethereum" },
          ]}
        />

        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Ethereum NFT Marketplaces in {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Ethereum remains the backbone of the NFT ecosystem, home to the most valuable collections,
            the largest community of artists and collectors, and the deepest liquidity. From zero-fee
            trading on Blur to curated art galleries on SuperRare, the Ethereum NFT marketplace landscape
            offers something for every type of user. We tested every major Ethereum platform to help you
            find the right fit for your needs.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Ethereum NFT Platforms</h2>
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
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Ethereum NFT Marketplace Landscape</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "For Professional Traders", desc: "Blur leads with zero fees, real-time analytics, and sweep tools built for active traders." },
              { title: "For General Collecting", desc: "OpenSea offers the broadest selection with an intuitive interface for all experience levels." },
              { title: "For Premium Art", desc: "SuperRare and Foundation provide curated gallery experiences for serious art collectors." },
              { title: "For Builders", desc: "Zora offers permissionless minting and custom smart contracts for developers and creators." },
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
