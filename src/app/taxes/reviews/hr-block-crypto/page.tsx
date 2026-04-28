import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";
import MethodologyBlock from '@/components/MethodologyBlock';

import ArticleSchema from "@/components/ArticleSchema";

import AuthoritySources from "@/components/AuthoritySources";

import ReviewSchema from "@/components/ReviewSchema";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

const product = {
  name: "H&R Block Crypto",
  slug: "hr-block-crypto",
  rating: 3.5,
  description: "H&R Block offers crypto tax filing support through its online platform and in-person tax professionals.",
  pros: ["In-person tax professional support", "Established tax filing brand", "Includes all income types", "Audit representation available"],
  cons: ["Very limited crypto-specific features", "No automated exchange imports", "Requires manual data entry or CSV", "Expensive for complex crypto portfolios"],
  bestFor: "Users who prefer in-person tax professional assistance and have simple crypto activity",
  affiliateUrl: "https://degen0x.com/go/hrblock",
  category: "taxes",
};

export const metadata: Metadata = {
  title: `H&R Block Crypto Review (2026): Tax Filing for Crypto | degen0x`,
  description: "Review of H&R Block's crypto tax capabilities. Understand when professional tax preparation makes sense and the limitations of H&R Block for crypto users.",
  alternates: { canonical: "/taxes/reviews/hr-block-crypto" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Taxes', item: 'https://degen0x.com/taxes' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/taxes/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Hr Block Crypto', },
  ],
};

export default function HRBlockCryptoReview() {
  return (
    <>
      <ReviewSchema
        itemName="H&R Block Crypto Review (2026): Tax Filing for Crypto"
        url="https://degen0x.com/taxes/reviews/hr-block-crypto"
        rating={4.0}
        datePublished="2024-06-01"
        dateModified="2026-04-17"
      />
      <ReviewPage
      product={product}
      categoryName="Taxes"
      categorySlug="taxes"
      overview="H&R Block is one of the largest tax preparation companies in the US, offering both self-filing online software and in-person professional tax preparation. The company has added cryptocurrency support to its offerings, allowing users to report crypto transactions through its online platform or with the help of a tax professional at one of its thousands of locations. While H&R Block's crypto-specific features are minimal compared to dedicated crypto tax tools, its strength lies in the ability to combine crypto reporting with comprehensive tax preparation including all other income types. For users with simple crypto transactions who value professional assistance, H&R Block provides a trusted option backed by decades of tax preparation experience."
      sections={[
        { id: "online-filing", title: "Online Crypto Filing", content: "H&R Block's online platform supports cryptocurrency reporting through its Premium and Self-Employed tiers. Users can report crypto transactions by importing data from select exchanges or manually entering transactions. The platform handles capital gains and losses calculations and generates the appropriate tax forms. Compared to TurboTax's crypto features, H&R Block offers a similar level of basic functionality. Exchange import support is limited, and DeFi transaction handling is minimal. The guided process asks relevant crypto questions and ensures proper reporting on Schedule D and Form 8949." },
        { id: "professional-help", title: "Professional Tax Preparation", content: "H&R Block's distinctive advantage is the option for in-person professional tax preparation. Tax professionals at H&R Block locations can handle your crypto reporting alongside all other tax items. This is valuable for users who have complex overall tax situations combining crypto with business income, investments, real estate, and other items. The quality of crypto-specific knowledge varies by tax professional, and not all preparers have deep crypto expertise. For the best results, bring well-organized crypto transaction data prepared using a dedicated crypto tax tool. The professional can then incorporate these figures into your complete tax return with confidence." },
        { id: "when-appropriate", title: "When H&R Block Makes Sense", content: "H&R Block is appropriate when you have a complex overall tax situation that benefits from professional preparation, when your crypto activity is simple and limited to basic exchange trading, when you prefer the confidence of having a tax professional handle your filing, or when you want in-person support and the ability to ask questions. The audit representation guarantee provides additional peace of mind. H&R Block is less appropriate as a standalone crypto tax solution. Its crypto-specific features are basic, and users with significant DeFi activity, multiple exchanges, or high transaction volumes should use a dedicated crypto tax tool for calculation before bringing the results to H&R Block for filing." },
        { id: "cost-consideration", title: "Cost Consideration", content: "H&R Block's pricing for online filing starts at a moderate level but the Premium tier required for crypto support costs more. In-person professional preparation is significantly more expensive, typically ranging from several hundred dollars depending on complexity. When evaluating cost, consider that you may also need a dedicated crypto tax tool for accurate calculations, adding to the total expense. For simple crypto portfolios, the combined cost of a crypto tax tool plus H&R Block may exceed what dedicated self-filing tools cost. For complex overall tax situations where professional preparation provides value beyond crypto, the cost may be justified." },
      ]}
      fees={{ "Online Premium": "Required for crypto", "In-Person": "Starts at several hundred dollars", "State Filing": "Additional cost", "Audit Protection": "Available add-on", "Crypto Tool": "May need separately" }}
      security={["Established since 1955", "SOC 2 compliant", "IRS authorized e-file provider", "In-person identity verification", "Secure document handling"]}
      features={["In-person tax professional support", "Online self-filing option", "Basic crypto transaction reporting", "Capital gains/losses calculation", "IRS e-filing", "Audit representation", "Comprehensive tax preparation", "Walk-in appointment availability"]}
      faqs={[
        { question: "Do H&R Block tax pros understand crypto?", answer: "Knowledge varies by location and individual preparer. Some H&R Block professionals have received crypto tax training, but expertise is not uniform. Ask about your preparer's crypto experience when booking. Bringing organized data from a crypto tax tool helps regardless of the preparer's crypto expertise." },
        { question: "Should I use H&R Block or a crypto tax tool?", answer: "These are not mutually exclusive. The best approach for complex situations is to use a dedicated crypto tax tool for accurate crypto calculations, then bring the results to H&R Block for professional filing alongside your other tax items. For very simple crypto activity, H&R Block alone may suffice." },
      ]}
      relatedReviews={[{ name: "TurboTax Crypto", slug: "turbotax-crypto" }, { name: "Koinly", slug: "koinly" }]}
      relatedGuides={[{ title: "How to File Crypto Taxes", href: "/taxes/learn/how-to-file" }, { title: "Reporting Requirements", href: "/taxes/learn/reporting-requirements" }]}
    />
      <ArticleSchema
        headline="H&R Block Crypto Review (2026): Tax Filing for Crypto | degen0x"
        description="H&R Block offers crypto tax filing support through its online platform and in-person tax professionals."
        url="https://degen0x.com/taxes/reviews/hr-block-crypto"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Reviews"
      />
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/taxes/reviews/hr-block-crypto" />
        <ReadingTime />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Online Crypto Filing", "description": "H&R Block offers crypto tax filing support through its online platform and in-person tax professionals.", "url": "https://degen0x.com/taxes/reviews/hr-block-crypto", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/taxes/reviews/accointing" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Accointing</a>
  <a href="/taxes/reviews/coinledger" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Coinledger</a>
  <a href="/taxes/reviews/coinpanda" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Coinpanda</a>
  <a href="/taxes/reviews/cointracker" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Cointracker</a>
  <a href="/taxes/reviews/cryptotaxcalculator" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Cryptotaxcalculator</a>
  <a href="/taxes/reviews/koinly" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Koinly</a>
  <a href="/taxes/reviews/taxbit" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Taxbit</a>
  <a href="/taxes/reviews/tokentax" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Tokentax</a>
</nav>
      <MethodologyBlock variant="review" />
      </>
  );
}
