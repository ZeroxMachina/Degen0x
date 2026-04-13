import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = { title: `Best NFT-Collateral Loans 2026 - Borrow Against NFTs`, description: `Compare platforms for borrowing against NFTs in ${CURRENT_YEAR}. Use your CryptoPunks, BAYC, and other NFTs as loan collateral.` ,
  alternates: { canonical: "/crypto-loans/best/nft-collateral" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const products: Product[] = [
  { name: "Blur Lending (Blend)", slug: "blend", rating: 4.5, description: "Blur's Blend protocol offers NFT-backed perpetual loans with no fixed expiry and no oracle dependency. Borrowers can take loans against blue-chip NFTs with competitive rates set by market-driven lender competition. The largest NFT lending platform by volume.", pros: ["Largest NFT lending volume", "No loan expiration", "Market-driven rates", "Deep integration with Blur marketplace"], cons: ["Limited to blue-chip collections", "Ethereum only", "Lender can trigger refinancing"], fees: "Market-driven interest", bestFor: "Blue-chip NFT holders", affiliateUrl: "https://degen0x.com/go/blend", category: "crypto-loans", featured: true },
  { name: "NFTfi", slug: "nftfi", rating: 4.3, description: "NFTfi is a peer-to-peer NFT lending marketplace where borrowers list their NFTs and lenders make loan offers. This model allows any NFT to be used as collateral (not just blue chips) with terms negotiated directly between parties.", pros: ["Any NFT can be collateral", "Peer-to-peer negotiated terms", "Established since 2020", "No forced liquidation during loan"], cons: ["Must find a willing lender", "Fixed-term loans only", "Smaller lending pool"], fees: "5% of lender interest", bestFor: "Non-blue-chip NFT borrowing", affiliateUrl: "https://degen0x.com/go/nftfi", category: "crypto-loans" },
  { name: "BendDAO", slug: "benddao", rating: 4.1, description: "BendDAO operates as a pool-based NFT lending protocol where blue-chip NFT holders can instantly borrow ETH from a shared liquidity pool. Floor price oracles determine LTV ratios, and liquidation occurs if the health factor drops too low.", pros: ["Instant pool-based borrowing", "No counterparty negotiation", "Flash claim for liquidated NFTs", "24-hour liquidation protection"], cons: ["Limited to supported collections", "Oracle-dependent floor prices", "Pool liquidity constraints"], fees: "Variable borrow rates", bestFor: "Instant NFT-backed ETH loans", affiliateUrl: "https://degen0x.com/go/benddao", category: "crypto-loans" },
];

const faqs: FAQ[] = [
  { question: "What NFTs can I use as collateral?", answer: "Blue-chip collections like CryptoPunks, Bored Ape Yacht Club, Azuki, and Pudgy Penguins are supported on most platforms. Peer-to-peer platforms like NFTfi accept any NFT, but finding a lender may be harder for less popular collections." },
  { question: "How is NFT collateral valued?", answer: "Most platforms use floor price oracles that track the minimum price of an NFT collection. Some use time-weighted average prices (TWAP) to reduce manipulation risk. Peer-to-peer platforms let lenders set their own valuations." },
  { question: "What happens if I cannot repay my NFT loan?", answer: "If you default or are liquidated, your NFT is transferred to the lender (P2P) or sold at auction (pool-based). Some platforms offer grace periods. Always monitor your loan health factor and repay or add collateral before liquidation." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Crypto Loans', item: 'https://degen0x.com/crypto-loans' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/crypto-loans/best' },
    { '@type': 'ListItem', position: 4, name: 'Nft Collateral', },
  ],
};

export default function NftCollateralPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="crypto-loans"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }, { label: "Best", href: "/crypto-loans/best" }, { label: "NFT Collateral", href: "/crypto-loans/best/nft-collateral" }]} />
      <AffiliateDisclosure />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best NFT-Collateral Loans ({CURRENT_YEAR})</h1>
      
        <p style={{ color: "#9CA3AF", lineHeight: "1.7", marginBottom: "1.5rem" }}>
          NFT-collateral loans are emerging but volatile, with rates of 10–30% annually due to unpredictable collateral valuations. Platforms like BendDAO and Blur Lending process $50M+ in NFT-backed borrowing.
        </p><p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">NFT lending allows you to borrow crypto (typically ETH) by using your NFTs as collateral. This unlocks liquidity from illiquid assets without forcing a sale. Whether you hold blue-chip PFPs or niche collections, there are platforms that can help you access the value locked in your NFTs.</p>
      </div>
      <div className="space-y-4 mb-12">{products.map((p, i) => (<ProductCard key={p.slug} product={p} rank={i + 1} categorySlug="crypto-loans" />))}</div>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Crypto Loans/best/nft Collateral", "description": "Blur", "url": "https://degen0x.com/crypto-loans/best/nft-collateral", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
