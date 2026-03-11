import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { nftMarketplaces } from "@/data/nfts";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Solana NFT Marketplaces in ${CURRENT_YEAR} | CryptoDegen`,
  description: `Compare the best Solana NFT marketplaces in ${CURRENT_YEAR}. Fast transactions, low fees, and vibrant collections on the Solana blockchain.`,
};

const faqs = [
  {
    question: "Why buy NFTs on Solana instead of Ethereum?",
    answer: "Solana offers significantly lower transaction fees (typically under $0.01 vs $5-50+ on Ethereum), faster confirmation times (under 1 second vs 12+ seconds), and a vibrant NFT ecosystem with unique collections. The lower barrier to entry makes Solana attractive for both new collectors and high-frequency traders.",
  },
  {
    question: "What wallet do I need for Solana NFTs?",
    answer: "Phantom is the most popular wallet for Solana NFTs, offering seamless integration with all major Solana marketplaces. Solflare and Backpack are also excellent alternatives. All three support SOL tokens, SPL tokens, and Solana NFTs natively.",
  },
  {
    question: "Which is better for Solana NFTs: Magic Eden or Tensor?",
    answer: "Magic Eden is better for general Solana NFT browsing, discovery, and new collection launches through its Launchpad. Tensor is better for professional traders who want advanced analytics, real-time data, and DeFi-style trading tools. Many serious Solana NFT traders use both platforms.",
  },
  {
    question: "What are compressed NFTs on Solana?",
    answer: "Compressed NFTs (cNFTs) use state compression to dramatically reduce minting costs on Solana. Instead of paying for individual on-chain accounts, cNFTs store data in Merkle trees, reducing costs by up to 99%. Tensor has been a leader in supporting cNFT trading.",
  },
];

export default function BestForSolanaPage() {
  const recommended = ["magic-eden", "tensor", "opensea"];
  const filtered = nftMarketplaces
    .filter((m) => recommended.includes(m.slug))
    .sort((a, b) => {
      const order = recommended.indexOf(a.slug) - recommended.indexOf(b.slug);
      return order;
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Best Solana NFT Marketplaces ${CURRENT_YEAR}`,
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
            { label: "Solana", href: "/nfts/best/solana" },
          ]}
        />

        <h1 className="text-4xl font-bold text-white mb-4">
          Best Solana NFT Marketplaces in {CURRENT_YEAR}
        </h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Solana has established itself as one of the top blockchains for NFTs, offering blazing-fast
            transactions, near-zero gas fees, and a thriving ecosystem of collections. The Solana NFT
            space has its own distinct culture and top-tier platforms purpose-built for the chain. We
            evaluated Solana marketplaces on speed, analytics, collection breadth, and the trading tools
            available to both casual collectors and professional traders.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Best Solana NFT Platforms</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Why Solana for NFTs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Near-Zero Fees", desc: "Transaction costs under $0.01 make frequent trading and experimentation affordable." },
              { title: "Instant Finality", desc: "Sub-second transaction confirmation enables real-time trading and rapid minting." },
              { title: "Compressed NFTs", desc: "cNFT technology enables minting millions of NFTs at a fraction of traditional costs." },
              { title: "Growing Ecosystem", desc: "Vibrant creator community with unique collections, gaming projects, and DeFi integrations." },
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
