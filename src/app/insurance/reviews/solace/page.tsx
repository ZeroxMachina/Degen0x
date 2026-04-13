import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Solace Review ${CURRENT_YEAR}: Fees, Features, Pros & Cons`,
  description: "Solace is a decentralized insurance protocol offering portfolio-level coverage for DeFi positions, protecting users against smart contract exploits.",
  alternates: { canonical: "/insurance/reviews/solace" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Insurance', item: 'https://degen0x.com/insurance' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/insurance/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Solace', },
  ],
};

export default function SolaceReview() {
  return (
    <>
      <ReviewPage
      product={{
        name: "Solace",
        slug: "solace",
        rating: 3.8,
        description: "Solace is a decentralized insurance protocol offering portfolio-level coverage for DeFi positions, protecting users against smart contract exploits, oracle failures, and governance attacks across multiple protocols simultaneously.",
        pros: [
          "Portfolio-level coverage across multiple DeFi protocols",
          "Single policy covers diverse DeFi positions",
          "Automated claims assessment via on-chain data",
          "Competitive premium pricing through risk pooling",
          "Transparent on-chain policy management",
        ],
        cons: [
          "Smaller coverage capacity than established competitors",
          "Limited protocol coverage compared to larger platforms",
          "Relatively new protocol with limited track record",
          "Complex pricing model for new users",
        ],
        bestFor: "DeFi users seeking portfolio-wide coverage across multiple protocols",
        affiliateUrl: "#",
        category: "insurance",
      }}
      categoryName="Crypto Insurance"
      categorySlug="insurance"
      overview={`Solace takes an innovative approach to DeFi insurance by offering portfolio-level coverage rather than individual protocol policies. Instead of purchasing separate cover for each DeFi position, users can insure their entire portfolio with a single policy that monitors positions across supported protocols. This simplifies the insurance buying process and ensures comprehensive coverage without gaps.

The protocol uses on-chain data monitoring to assess risk in real-time and automate claims processing. When a covered event occurs, the system can verify the incident through on-chain evidence and initiate the claims payment process without requiring lengthy manual review.

Solace's underwriting model pools risk across all covered protocols, enabling more efficient capital utilization and competitive premium pricing. The protocol's native token governs decisions about risk parameters, coverage expansion, and development.`}
      sections={[
        { id: "portfolio-coverage", title: "Portfolio Coverage Model", content: "Solace's portfolio coverage model monitors your DeFi positions across supported protocols and provides blanket protection. Rather than managing individual policies separately, a single Solace policy covers all eligible positions. The system tracks positions through wallet monitoring and adjusts coverage automatically as you enter or exit DeFi positions. This dynamic model eliminates the risk of forgetting to purchase coverage for a new position." },
        { id: "claims-automation", title: "Automated Claims Process", content: "Claims on Solace leverage on-chain data to verify covered events and process payouts efficiently. When a smart contract exploit or oracle failure affects a covered protocol, the system identifies impacted users through blockchain analysis. This data-driven approach reduces subjectivity in claims assessment and accelerates payout timelines compared to governance-based claims models." },
        { id: "risk-underwriting", title: "Risk Assessment and Underwriting", content: "Solace's underwriting engine evaluates the risk profile of supported protocols based on audit history, TVL, track record, and governance structure. Premium pricing reflects these assessments. Capital providers earn yield by supplying assets to the underwriting pool, accepting the risk of claims payouts in exchange for premium income from the diversified risk pool." },
      ]}
      fees={{
        "Annual Premium": "Variable based on portfolio risk",
        "Minimum Coverage": "Check current minimums",
        "Claims Processing": "Automated via on-chain data",
        "Coverage Cap": "Subject to pool capacity",
      }}
      security={[
        "On-chain position monitoring and coverage tracking",
        "Automated claims verification",
        "Smart contract audits",
        "Transparent risk assessment methodology",
        "Decentralized governance",
      ]}
      features={[
        "Portfolio-level DeFi coverage",
        "Automated claims processing",
        "Dynamic position monitoring",
        "Multi-protocol single policy",
        "On-chain policy management",
        "Risk-adjusted pricing",
      ]}
      faqs={[
        { question: "How does Solace portfolio coverage work?", answer: "Solace monitors your wallet positions across supported DeFi protocols and provides blanket coverage. A single policy covers all eligible positions automatically." },
        { question: "How are claims processed?", answer: "Solace uses on-chain data to verify covered events and automate claims assessment, reducing processing time compared to manual review processes." },
      ]}
      relatedReviews={[
        { name: "InsurAce", slug: "insurace" },
        { name: "Unslashed", slug: "unslashed" },
      ]}
      relatedGuides={[
        { title: "Crypto Insurance Complete Guide", href: "/insurance/learn/crypto-insurance-complete-guide" },
        { title: "Risk Assessment in DeFi", href: "/insurance/learn/risk-assessment-defi" },
      ]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
