import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { nftDetailedComparisons, nftComparisonFeatures } from "@/data/nfts";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `OpenSea vs Blur: Which NFT Marketplace Is Better? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Detailed comparison of OpenSea vs Blur. Compare fees, features, trading tools, and user experience to find which NFT marketplace is right for you.",
};

export default function OpenSeaVsBlurPage() {
  const opensea = nftDetailedComparisons["opensea"];
  const blur = nftDetailedComparisons["blur"];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[ { label: "Home", href: "/" }, { label: "NFTs", href: "/nfts" }, { label: "Compare", href: "/nfts/compare" }, { label: "OpenSea vs Blur", href: "#" } ]} />
      <AffiliateDisclosure />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">OpenSea vs Blur: Which NFT Marketplace Is Better in {CURRENT_YEAR}?</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        OpenSea and Blur represent two fundamentally different approaches to NFT trading. OpenSea is the largest
        marketplace by collection count with multi-chain support and beginner-friendly features. Blur dominates
        Ethereum trading volume with zero fees and professional-grade tools. This comparison helps you decide
        which platform matches your trading style.
      </p>
      <ComparisonTable items={[opensea, blur]} features={nftComparisonFeatures} title="OpenSea vs Blur: Head-to-Head" />
      <div className="prose-crypto mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Fee Comparison</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Fees are where Blur has a decisive advantage. Blur charges 0% marketplace fees, meaning sellers
          keep their entire sale proceeds minus gas. OpenSea charges 2.5% on every sale. For a 10 ETH NFT,
          that is a savings of 0.25 ETH per trade on Blur.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          For active traders executing multiple trades per day, the fee difference is enormous. A trader
          doing $100,000 in monthly volume saves $2,500 per month by using Blur instead of OpenSea. Creator
          royalties are optional on both platforms, though OpenSea has historically been more supportive of
          royalty enforcement.
        </p>
        <h2 className="text-2xl font-bold text-white mb-4">Trading Experience</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          Blur's trading interface is built for speed and data. Real-time floor tracking, sweep tools, collection
          bids, and portfolio analytics give professional traders everything they need to make informed decisions
          quickly. The platform also aggregates listings from OpenSea and other marketplaces.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          OpenSea provides a more approachable experience with visual browsing, detailed collection pages,
          auction support, and a mobile app. Its multi-chain support means you can trade on Ethereum, Polygon,
          Solana, and other chains from a single interface. OpenSea Pro adds professional features but still
          trails Blur in pure trading speed and analytics.
        </p>
        <h2 className="text-2xl font-bold text-white mb-4">Verdict</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            <strong className="text-white">Choose OpenSea if</strong> you are a beginner, want multi-chain
            support, prefer visual browsing and auctions, or trade across multiple blockchains including Solana
            and Polygon.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            <strong className="text-white">Choose Blur if</strong> you are an active Ethereum NFT trader
            who wants zero fees, real-time analytics, sweep tools, and the fastest possible execution speed.
          </p>
        </div>
      </div>
      <FAQSection faqs={[
        { question: "Can I use both OpenSea and Blur?", answer: "Yes, and many traders do. Since Blur aggregates OpenSea listings, you can buy OpenSea-listed NFTs through Blur's interface at zero marketplace fees. You might use OpenSea for browsing and discovery and Blur for actual trading execution." },
        { question: "Which has more NFT listings?", answer: "OpenSea has more total listings across all chains. However, on Ethereum specifically, Blur and OpenSea have similar collection coverage since Blur indexes all Ethereum NFTs. Blur does not support other chains." },
        { question: "Which is better for selling NFTs?", answer: "For maximum exposure, list on both. OpenSea reaches a broader audience including beginners and multi-chain users. Blur reaches professional traders who may be willing to pay higher prices but expect zero marketplace fees on their end." },
      ]} />
    </div>
  );
}
