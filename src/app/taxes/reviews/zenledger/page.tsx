import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "ZenLedger",
  slug: "zenledger",
  rating: 4.0,
  description: "ZenLedger is a crypto tax software that supports a wide range of exchanges and DeFi protocols with CPA-friendly reporting.",
  pros: ["Supports 400+ exchanges", "CPA access feature for accountants", "DeFi and NFT support", "Tax-loss harvesting tools"],
  cons: ["Higher pricing than some competitors", "Interface can be complex", "Slower import for large portfolios", "Limited free tier"],
  bestFor: "Users with complex portfolios who work with CPAs and need comprehensive exchange coverage",
  affiliateUrl: "https://degen0x.com/go/zenledger",
  category: "taxes",
};

export const metadata: Metadata = {
  title: `ZenLedger Review (${CURRENT_YEAR}): Features, Pricing & Comparison | ${SITE_NAME}`,
  description: "In-depth ZenLedger review covering features, pricing, DeFi support, tax-loss harvesting, and how it compares to other crypto tax software.",
  alternates: { canonical: "/taxes/reviews/zenledger" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Taxes', item: 'https://degen0x.com/taxes' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/taxes/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Zenledger', },
  ],
};

export default function ZenLedgerReview() {
  return (
    <>
      <ReviewPage
      product={product}
      categoryName="Taxes"
      categorySlug="taxes"
      overview="ZenLedger is a comprehensive crypto tax software platform that supports over 400 exchanges and wallets, making it one of the most broadly compatible options available. The platform caters to both individual investors and tax professionals through its CPA access feature, which allows your accountant to directly access your tax data. ZenLedger supports standard crypto transactions as well as DeFi activities, NFT trading, and staking rewards. The platform generates IRS-ready tax forms including Form 8949 and Schedule D, along with reports compatible with TurboTax, TaxAct, and other tax filing software. ZenLedger also offers tax-loss harvesting tools that help identify opportunities to reduce your tax liability."
      sections={[
        { id: "features", title: "Key Features", content: "ZenLedger's core features include automatic transaction import from hundreds of exchanges and wallets via API or CSV upload. The platform categorizes transactions, calculates gains and losses using your chosen cost basis method (FIFO, LIFO, HIFO, or specific identification), and generates tax forms. The DeFi module handles lending, borrowing, liquidity provision, and yield farming transactions. NFT tracking covers purchases, sales, and minting events. The tax-loss harvesting dashboard identifies unrealized losses in your portfolio that could be sold to offset gains. The CPA access feature creates a separate login for your tax professional, streamlining the filing process." },
        { id: "pricing", title: "Pricing and Plans", content: "ZenLedger offers tiered pricing based on transaction volume. The free tier covers a limited number of transactions, making it suitable for very casual traders. Paid plans escalate based on the number of transactions, with premium tiers adding DeFi support, priority customer service, and CPA access. Pricing is competitive for users with moderate transaction volumes but can become expensive for very active traders with thousands of transactions. Annual pricing is available at a discount compared to monthly billing. Each plan includes a specific number of transactions, and exceeding the limit requires upgrading to the next tier." },
        { id: "defi-support", title: "DeFi and NFT Support", content: "ZenLedger has invested significantly in DeFi support, handling transactions from major protocols on Ethereum, BSC, Polygon, and other chains. The platform can categorize lending deposits, borrow events, liquidity additions and removals, yield farming rewards, and staking income. NFT transaction support covers marketplace purchases, sales, and minting costs. The DeFi integration quality varies by protocol and chain, with Ethereum-based protocols generally having the best coverage. For complex DeFi strategies involving multiple protocols, manual review of categorized transactions may be necessary to ensure accuracy." },
        { id: "accuracy", title: "Accuracy and Limitations", content: "ZenLedger generally produces accurate tax calculations for straightforward exchange trading. DeFi transaction categorization can require manual review for complex strategies. The platform sometimes struggles with cross-chain transactions and bridge transfers, which may need manual adjustment. Import speed can be slow for large portfolios with thousands of transactions. Customer support responsiveness varies, with premium tier users receiving faster responses. The platform is primarily focused on US tax reporting, though international users can generate generic gain/loss reports." },
      ]}
      fees={{ "Free Tier": "Limited transactions", "Starter": "Moderate transaction limit", "Premium": "Higher limits + DeFi", "Executive": "Unlimited + priority support", "CPA Access": "Included in paid plans" }}
      security={["SOC 2 compliance", "Data encryption at rest and in transit", "No private key storage", "Read-only API connections", "Two-factor authentication"]}
      features={["400+ exchange and wallet integrations", "DeFi transaction support", "NFT trading support", "Tax-loss harvesting tools", "CPA access feature", "Multiple cost basis methods", "IRS Form 8949 generation", "TurboTax integration"]}
      faqs={[
        { question: "Is ZenLedger accurate for DeFi transactions?", answer: "ZenLedger handles common DeFi transactions well but complex multi-protocol strategies may require manual review. Always verify DeFi categorizations before filing. The platform is continuously improving its DeFi parsing capabilities." },
        { question: "Can my CPA use ZenLedger directly?", answer: "Yes. ZenLedger's CPA access feature provides a separate login for your tax professional to view your data and download reports. This eliminates the need to manually share files and allows your accountant to review transactions directly." },
      ]}
      relatedReviews={[{ name: "Koinly", slug: "koinly" }, { name: "CoinTracker", slug: "cointracker" }]}
      relatedGuides={[{ title: "How to File Crypto Taxes", href: "/taxes/learn/how-to-file" }, { title: "Tax Loss Harvesting", href: "/taxes/learn/tax-loss-harvesting" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
