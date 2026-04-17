import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";
import MethodologyBlock from '@/components/MethodologyBlock';

import ArticleSchema from "@/components/ArticleSchema";

import AuthoritySources from "@/components/AuthoritySources";

import ReviewSchema from "@/components/ReviewSchema";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: `Tender.fi Review 2026: Arbitrum Lending Protocol`,
  description: "Complete Tender.fi review covering lending on Arbitrum, oracle-based pricing, yield rates, and the protocol's position in the Arbitrum DeFi ecosystem.",
  alternates: { canonical: "/defi-lending/reviews/tender" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/defi-lending/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Tender', },
  ],
};

export default function TenderReview() {
  return (
    <>
      <ReviewSchema
        itemName="Tender.fi Review 2026: Arbitrum Lending Protocol"
        url="https://degen0x.com/defi-lending/reviews/tender"
        rating={4.0}
        datePublished="2024-06-01"
        dateModified="2026-04-17"
      />
      <ReviewPage
      product={{ name: "Tender.fi", slug: "tender", rating: 3.4, description: "Tender.fi is a lending and borrowing protocol on Arbitrum offering Compound-style markets with GMX-integrated pricing oracles and support for Arbitrum DeFi ecosystem tokens.", pros: ["Arbitrum-native lending protocol with ecosystem focus", "GMX oracle integration for price feeds", "Supports GLP and other Arbitrum DeFi tokens as collateral", "Low gas costs on Arbitrum network", "Niche asset support not found on larger protocols"], cons: ["Very small TVL and limited liquidity", "Protocol experienced a white-hat exploit incident", "Limited development activity recently", "Competing against Aave V3 on Arbitrum", "Token incentives have diminished significantly"], bestFor: "Arbitrum users seeking to borrow against GLP and niche DeFi tokens", affiliateUrl: "#", category: "defi-lending" }}
      categoryName="DeFi Lending" categorySlug="defi-lending"
      overview="Tender.fi is an Arbitrum-native lending protocol that differentiates by supporting Arbitrum ecosystem tokens like GLP as collateral and integrating with GMX's oracle infrastructure for price feeds. The protocol experienced a notable white-hat exploit incident where a researcher demonstrated a vulnerability by borrowing against inflated collateral, then returned the funds and was paid a bounty. This event highlighted both the protocol's vulnerabilities and the community's ability to resolve security issues constructively. Tender.fi serves a niche in the Arbitrum ecosystem by offering lending markets for assets that larger protocols may not support, though its TVL remains small."
      sections={[
        { id: "lending", title: "Lending Markets — Defi-Lending (defi-lending / reviews / tender)", content: "Tender.fi operates Compound-style lending markets on Arbitrum supporting ETH, USDC, USDT, ARB, GLP, and other Arbitrum DeFi tokens. The protocol's key differentiator is its support for GLP (GMX Liquidity Provider tokens) as collateral, allowing GLP holders to borrow against their yield-generating positions without exiting them. Interest rates follow standard utilization curves, though some markets have limited activity. The lending mechanics are familiar to anyone who has used Compound-style protocols, with supply, borrow, repay, and withdraw operations working as expected." },
        { id: "gmx-integration", title: "GMX Oracle Integration", content: "Tender.fi integrates with GMX's oracle infrastructure for pricing GLP and other GMX-related assets. This integration is important because GLP is a basket asset whose value depends on the composition of the GMX liquidity pool, making standard price feeds insufficient. The GMX oracle provides more accurate pricing for these assets, enabling safer collateral valuation. This integration also positions Tender.fi as a complementary protocol to GMX, serving GLP holders who want to leverage their positions through borrowing." },
        { id: "exploit-history", title: "White-Hat Exploit Incident", content: "In 2023, a security researcher exploited a vulnerability in Tender.fi by manipulating oracle prices to borrow approximately $1.6M against inflated collateral. The researcher then contacted the team and returned the funds in exchange for a bug bounty. This white-hat incident demonstrated both a real vulnerability in the protocol and the constructive resolution that is possible in the DeFi community. The team patched the vulnerability and continued operations, but the incident raised questions about the protocol's security review process." },
        { id: "current-state", title: "Current State & Risks", content: "Tender.fi continues to operate on Arbitrum but with limited TVL and reduced development activity. The protocol serves a niche for users wanting to borrow against GLP and other Arbitrum DeFi tokens, but the small scale creates risks including limited liquidator activity, low exit liquidity, and reduced economic incentive for ongoing security maintenance. Users should carefully consider position sizing relative to the protocol's TVL and evaluate whether the niche asset support justifies the additional risks of using a smaller protocol." },
      ]}
      fees={{ "Supply APY": "Variable (1-5%)", "Borrow APR": "Variable (3-15%)", "Liquidation Penalty": "5-10%", "Gas Costs": "Low on Arbitrum" }}
      security={["Post-exploit security patches applied", "GMX oracle integration for accurate pricing", "Standard liquidation mechanisms", "Compound-style architecture", "White-hat bounty program demonstrated"]}
      features={["GLP collateral support for borrowing", "GMX oracle price feed integration", "Compound-style lending mechanics", "Support for Arbitrum ecosystem tokens", "Low gas costs on Arbitrum", "Niche asset lending markets"]}
      faqs={[
        { question: "Is Tender.fi safe after the exploit?", answer: "The vulnerability was patched after the white-hat incident, but the event raised security concerns. The protocol has limited TVL and development activity, which adds risk. Exercise extra caution with position sizing." },
        { question: "Can I borrow against GLP on Tender.fi?", answer: "Yes, Tender.fi supports GLP as collateral, allowing you to borrow while maintaining your GLP yield-generating position. This is one of the protocol's key differentiating features." },
        { question: "Why is TVL so low on Tender.fi?", answer: "The exploit incident, competition from Aave V3 on Arbitrum, and reduced token incentives have all contributed to lower TVL. Users have migrated to larger protocols for better liquidity and security assurance." },
      ]}
      relatedReviews={[{ name: "Lodestar", slug: "lodestar" }, { name: "Sonne", slug: "sonne" }, { name: "Granary", slug: "granary" }]}
      relatedGuides={[{ title: "DeFi on Arbitrum", href: "/defi-lending/learn/defi-on-arbitrum" }, { title: "Yield Risk Assessment", href: "/defi-lending/learn/yield-risk-assessment" }]}
    />
      <ArticleSchema
        headline="Tender.fi Review 2026: Arbitrum Lending Protocol"
        description="Complete Tender.fi review covering lending on Arbitrum, oracle-based pricing, yield rates, and the protocol"
        url="https://degen0x.com/defi-lending/reviews/tender"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Reviews"
      />
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/defi-lending/reviews/tender" />
        <ReadingTime />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Lending Markets", "description": "Complete Tender.fi review covering lending on Arbitrum, oracle-based pricing, yield rates, and the protocol's position in the Arbitrum DeFi ecosystem.", "url": "https://degen0x.com/defi-lending/reviews/tender", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/defi-lending/reviews/aave" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aave</a>
  <a href="/defi-lending/reviews/alpaca-finance" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Alpaca Finance</a>
  <a href="/defi-lending/reviews/aurelius" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aurelius</a>
  <a href="/defi-lending/reviews/bastion" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bastion</a>
  <a href="/defi-lending/reviews/benqi" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Benqi</a>
  <a href="/defi-lending/reviews/centrifuge" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Centrifuge</a>
  <a href="/defi-lending/reviews/clearpool" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Clearpool</a>
  <a href="/defi-lending/reviews/compound" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Compound</a>
</nav>
      <MethodologyBlock variant="review" />
      </>
  );
}
