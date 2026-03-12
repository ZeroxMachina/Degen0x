import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { nftDetailedComparisons, nftComparisonFeatures } from "@/data/nfts";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Magic Eden vs OpenSea: Which NFT Marketplace Is Better? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Detailed comparison of Magic Eden vs OpenSea. Compare fees, supported chains, features, and user experience to find which NFT marketplace is right for you.",
};

export default function MagicEdenVsOpenSeaPage() {
  const magicEden = nftDetailedComparisons["magic-eden"];
  const opensea = nftDetailedComparisons["opensea"];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[ { label: "Home", href: "/" }, { label: "NFTs", href: "/nfts" }, { label: "Compare", href: "/nfts/compare" }, { label: "Magic Eden vs OpenSea", href: "#" } ]} />
      <AffiliateDisclosure />
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Magic Eden vs OpenSea: Which NFT Marketplace Is Better in {CURRENT_YEAR}?</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        Magic Eden and OpenSea are two of the most popular multi-chain NFT marketplaces, but they serve
        different audiences. OpenSea is the largest marketplace by total collection count with the broadest
        blockchain support. Magic Eden dominates Solana and Bitcoin Ordinals trading while expanding into
        Ethereum and other chains. This comparison helps you decide which platform fits your needs.
      </p>
      <ComparisonTable items={[magicEden, opensea]} features={nftComparisonFeatures} title="Magic Eden vs OpenSea: Head-to-Head" />
      <div className="prose-crypto mt-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Fee Comparison</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Magic Eden charges a 2% marketplace fee on Solana transactions, while OpenSea charges 2.5%
          across all chains. On Ethereum, Magic Eden has introduced competitive fee structures to
          attract traders from OpenSea. The 0.5% difference may seem small, but it adds up significantly
          for active traders with high monthly volume.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          Both platforms enforce creator royalties on Solana but make them optional on Ethereum. Magic
          Eden was one of the first major marketplaces to implement royalty enforcement on Solana through
          its partnership with Metaplex. For Solana creators, this makes Magic Eden a more supportive
          platform for sustaining royalty income.
        </p>
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Chain Support and Specialization</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          OpenSea supports the widest range of blockchains: Ethereum, Polygon, Solana, Arbitrum,
          Avalanche, BNB Chain, Base, and more. This makes it the most versatile single platform for
          multi-chain collectors. Magic Eden supports Solana, Ethereum, Bitcoin Ordinals, Polygon, and
          Base, with a particular strength in Solana and Bitcoin ecosystems.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          Where Magic Eden truly excels is Bitcoin Ordinals. It was one of the first major marketplaces
          to support Ordinals trading and has become the dominant platform for that ecosystem. If you
          trade Bitcoin Ordinals or primarily collect on Solana, Magic Eden is the clear leader. For
          broad Ethereum collection browsing, OpenSea remains the standard.
        </p>
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Verdict</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            <strong className="text-[var(--color-text)]">Choose Magic Eden if</strong> you trade primarily on Solana
            or Bitcoin Ordinals, want lower fees on Solana, or are interested in the Launchpad for
            new collection mints across multiple chains.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            <strong className="text-[var(--color-text)]">Choose OpenSea if</strong> you want the widest blockchain
            support, the largest collection library, beginner-friendly tools, or advanced features
            through OpenSea Pro.
          </p>
        </div>
      </div>
      <FAQSection faqs={[
        { question: "Can I use both Magic Eden and OpenSea?", answer: "Yes, many collectors use both. Magic Eden for Solana and Ordinals trading, and OpenSea for Ethereum collections and broader browsing. Since your NFTs are in your wallet, you can list and buy on either platform freely." },
        { question: "Which has better Solana NFT support?", answer: "Magic Eden is the leader for Solana NFTs with the deepest collection coverage, Launchpad for new mints, and enforced creator royalties. OpenSea supports Solana but has a smaller selection and fewer Solana-specific features." },
        { question: "Which marketplace is more beginner-friendly?", answer: "Both offer approachable interfaces, but OpenSea is generally considered more beginner-friendly due to its simpler layout and more extensive help documentation. Magic Eden's multi-chain interface can feel slightly more complex for newcomers." },
      ]} />
    </div>
  );
}
