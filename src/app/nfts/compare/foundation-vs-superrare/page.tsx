import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { nftDetailedComparisons, nftComparisonFeatures } from "@/data/nfts";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Foundation vs SuperRare: Which Art NFT Platform Is Better? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Detailed comparison of Foundation vs SuperRare for NFT art. Compare curation, fees, artist access, auction formats, and collecting experience on both platforms.",
  alternates: { canonical: "/nfts/compare/foundation-vs-superrare" }};

export default function FoundationVsSuperRarePage() {
  const foundation = nftDetailedComparisons["foundation"];
  const superrare = nftDetailedComparisons["superrare"];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[ { label: "Home", href: "/" }, { label: "NFTs", href: "/nfts" }, { label: "Compare", href: "/nfts/compare" }, { label: "Foundation vs SuperRare", href: "#" } ]} />
      <AffiliateDisclosure />
      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Foundation vs SuperRare: Which Art NFT Platform Is Better in {CURRENT_YEAR}?</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        Foundation and SuperRare are the two leading curated NFT art platforms, both focused on
        high-quality digital art rather than mass-market collectibles. While they share a commitment
        to art-first experiences, they differ significantly in curation approach, fee structures,
        artist accessibility, and collector demographics. This comparison helps art collectors and
        creators choose the right platform.
      </p>
      <ComparisonTable items={[foundation, superrare]} features={nftComparisonFeatures} title="Foundation vs SuperRare: Head-to-Head" />
      <div className="prose-crypto mt-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Curation and Artist Access</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          SuperRare has the most selective curation in the NFT space. Artists must apply and be approved
          by the SuperRare curation team or through community-curated Spaces. This rigorous vetting
          results in a consistently high-quality catalog but limits access for emerging artists. The
          platform specializes exclusively in 1-of-1 artworks.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          Foundation originally used an invite-based system where existing artists could invite new
          ones. It has since opened access more broadly while maintaining a strong art-focused identity.
          Foundation supports both 1-of-1 pieces and editions, giving artists more flexibility in how
          they release work. The broader accessibility means more variety but also more variation in
          quality.
        </p>
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Fee Comparison</h2>
        <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          SuperRare charges a 3% buyer premium plus a 15% commission on primary sales. Secondary sales
          incur a 10% creator royalty. Foundation charges a 5% marketplace fee on all sales with creator
          royalties set at 10% for secondary sales. The total cost structure varies based on whether
          you are buying primary or secondary market works.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
          For primary purchases, SuperRare&apos;s combined buyer and seller fees are higher. For
          secondary market purchases, Foundation&apos;s 5% flat fee can be more or less favorable
          depending on the price point. Both platforms enforce creator royalties, which is a key
          differentiator from general marketplaces that have moved toward optional royalties.
        </p>
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Verdict</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            <strong className="text-[var(--color-text)]">Choose Foundation if</strong> you want broader artist access,
            support for both 1-of-1s and editions, 24-hour reserve auctions, or a slightly lower total
            fee structure for most transactions.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            <strong className="text-[var(--color-text)]">Choose SuperRare if</strong> you collect premium 1-of-1
            digital art, value the highest level of curation, want RARE governance token participation,
            or prefer an ultra-premium gallery experience.
          </p>
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

      <FAQSection faqs={[
        { question: "Which platform has higher-quality art?", answer: "SuperRare's stricter curation generally results in a more consistently premium selection. Foundation has broader access, which means more variety in quality but also more opportunities to discover emerging talent before they reach premium price levels." },
        { question: "Can I list on both platforms?", answer: "Yes, artists approved on both platforms can list different works on each. However, listing the same piece on both simultaneously is not typically done since both platforms focus on unique, curated presentations. Many artists strategically choose which works go to which platform." },
        { question: "Which is better for emerging artists?", answer: "Foundation is more accessible for emerging artists, as SuperRare's approval process is extremely selective. Foundation's broader artist base means more competition for visibility, but the lower barrier to entry makes it a better starting point for building an on-chain art career." },
      ]} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Nfts/compare/foundation Vs Superrare", "description": "Detailed comparison of Foundation vs SuperRare for NFT art. Compare curation, fees, artist access, auction formats, and collecting experience on both platforms.", "url": "https://degen0x.com/nfts/compare/foundation-vs-superrare"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Learning Guides
          </Link>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Crypto Tools
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
