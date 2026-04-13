import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "Accointing",
  slug: "accointing",
  rating: 3.8,
  description: "Accointing (now part of Glassnode) offers crypto tax reporting and portfolio tracking with strong international support.",
  pros: ["Good international tax support", "Portfolio tracking features", "Clean user interface", "Acquired by Glassnode for stability"],
  cons: ["Reduced standalone development", "DeFi support varies", "Integration into Glassnode ongoing", "Some features in transition"],
  bestFor: "International users seeking combined portfolio tracking and tax reporting with a clean interface",
  affiliateUrl: "https://degen0x.com/go/accointing",
  category: "taxes",
};

export const metadata: Metadata = {
  title: `Accointing Review (2026): Tax Reporting & Portfolio Tracking | degen0x`,
  description: "In-depth Accointing review covering tax reporting, portfolio tracking, international support, and its integration with Glassnode.",
  alternates: { canonical: "/taxes/reviews/accointing" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Taxes', item: 'https://degen0x.com/taxes' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/taxes/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Accointing', },
  ],
};

export default function AccointingReview() {
  return (
    <>
      <ReviewPage
      product={product}
      categoryName="Taxes"
      categorySlug="taxes"
      overview="Accointing is a crypto tax and portfolio tracking platform that was acquired by Glassnode, the blockchain analytics company. Originally launched as a standalone tax tool, Accointing differentiates itself through strong international tax support covering multiple countries' tax frameworks, and a combined approach that merges portfolio tracking with tax calculation. The platform supports connections to major exchanges and wallets, automatic categorization of transactions, and generation of tax reports for various jurisdictions. Since the Glassnode acquisition, the platform has been integrating with Glassnode's data infrastructure, though some features may be in transition. Accointing maintains a clean, visual interface that makes tax reporting more approachable for users who find spreadsheet-style tools intimidating."
      sections={[
        { id: "tax-reporting", title: "Tax Reporting", content: "Accointing generates tax reports for multiple countries including the US, Germany, Austria, Switzerland, and others. The platform supports various cost basis methods required by different jurisdictions and produces country-specific tax forms. Transaction imports work through API connections and CSV uploads from major exchanges. The tax calculation engine handles standard trading, staking rewards, airdrops, and mining income. DeFi support has been improving but may not cover all protocols and transaction types comprehensively. Users should review automated categorizations for accuracy, especially for complex transactions." },
        { id: "portfolio-tracking", title: "Portfolio Tracking", content: "Beyond tax reporting, Accointing provides portfolio tracking features that display your holdings, performance, and asset allocation across connected exchanges and wallets. The portfolio view gives a consolidated picture of your crypto wealth with real-time pricing and historical performance charts. This dual functionality means you can use Accointing year-round for portfolio monitoring rather than only during tax season. The portfolio tracking component helps identify tax-loss harvesting opportunities by showing unrealized gains and losses across your holdings." },
        { id: "international", title: "International Support", content: "Accointing stands out for its international tax framework support. While many crypto tax tools focus primarily on US tax reporting, Accointing was originally developed in Europe and supports tax calculations for multiple European countries with country-specific rules. The platform understands different holding period requirements, tax-free thresholds, and reporting formats used across jurisdictions. This makes it particularly valuable for users in Germany, Austria, Switzerland, and other European countries where crypto tax rules differ significantly from US frameworks." },
        { id: "glassnode-integration", title: "Glassnode Integration", content: "The acquisition by Glassnode brings both opportunities and uncertainties. Glassnode's deep blockchain data infrastructure could significantly improve Accointing's transaction parsing and categorization accuracy. However, the integration process means some features may be in flux and the product roadmap may shift. Users should evaluate the current state of the platform rather than relying on pre-acquisition reviews. The Glassnode backing provides financial stability and development resources that standalone crypto tax startups may lack, but the long-term direction of the consumer tax product remains to be fully defined." },
      ]}
      fees={{ "Free Tier": "Limited transactions", "Hobby": "Moderate transaction limit", "Trader": "Higher limits", "Pro": "Unlimited transactions", "Portfolio Tracking": "Included in all tiers" }}
      security={["Backed by Glassnode", "Read-only exchange connections", "Data encryption", "No custody of assets", "GDPR compliance"]}
      features={["Multi-country tax support", "Portfolio tracking dashboard", "Exchange and wallet imports", "Multiple cost basis methods", "Tax-loss harvesting identification", "Country-specific tax forms", "Clean visual interface", "Glassnode data integration"]}
      faqs={[
        { question: "Is Accointing still being maintained after the Glassnode acquisition?", answer: "Yes, though the product is evolving as it integrates with Glassnode's infrastructure. Core tax reporting functionality continues to operate. Check the current feature set and roadmap to understand the latest state of the platform." },
        { question: "Is Accointing good for US taxes?", answer: "Accointing supports US tax reporting including Form 8949 generation. However, it was originally developed with a European focus. For US-only users, dedicated US-focused tools like CoinTracker or Koinly may offer more tailored features." },
      ]}
      relatedReviews={[{ name: "Koinly", slug: "koinly" }, { name: "CoinTracker", slug: "cointracker" }]}
      relatedGuides={[{ title: "Crypto Tax Guide", href: "/taxes/learn/crypto-tax-guide" }, { title: "How to File Crypto Taxes", href: "/taxes/learn/how-to-file" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Tax Reporting", "description": "Accointing (now part of Glassnode) offers crypto tax reporting and portfolio tracking with strong international support.", "url": "https://degen0x.com/taxes/reviews/accointing", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
