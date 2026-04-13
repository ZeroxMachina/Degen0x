import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Sherlock Review ${CURRENT_YEAR}: Fees, Features, Pros & Cons`,
  description: "Sherlock combines smart contract auditing with exploit coverage, where audit quality directly backs insurance.",
  alternates: { canonical: "/insurance/reviews/sherlock" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Insurance', item: 'https://degen0x.com/insurance' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/insurance/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Sherlock', },
  ],
};

export default function SherlockReview() {
  return (
    <>
      <ReviewPage
      product={{
        name: "Sherlock",
        slug: "sherlock",
        rating: 4.0,
        description: "Sherlock combines smart contract auditing with exploit coverage, where audit quality directly backs insurance. Protocols audited by Sherlock receive coverage backed by the staking pool.",
        pros: [
          "Unique audit-backed coverage model",
          "Strong auditor network with competitive marketplace",
          "Coverage backed by community staking pool",
          "Focus on smart contract exploit coverage",
          "Transparent published audit reports",
        ],
        cons: [
          "Coverage limited to Sherlock-audited protocols",
          "Staking carries risk of loss from claims",
          "Smaller coverage capacity than larger competitors",
          "Complex governance for claims disputes",
        ],
        bestFor: "DeFi protocols seeking combined audit and coverage services",
        affiliateUrl: "#",
        category: "insurance",
      }}
      categoryName="Crypto Insurance"
      categorySlug="insurance"
      overview={`Sherlock represents a novel approach to DeFi insurance by directly linking smart contract security audits with exploit coverage. The protocol operates an audit marketplace where security researchers compete to find vulnerabilities. Protocols that pass Sherlock's audit receive exploit coverage backed by the staking pool.

This model aligns incentives uniquely. Auditors have skin in the game because the staking pool that backs coverage also compensates them. If an audited protocol is exploited due to a missed vulnerability, the staking pool pays the claim.

Sherlock's staking mechanism allows anyone to provide capital to the coverage pool, earning yield from audit fees and premiums in exchange for accepting claims risk.`}
      sections={[
        { id: "audit-marketplace", title: "Audit Marketplace", content: "Sherlock operates a competitive audit marketplace where security researchers compete to find vulnerabilities. Audits are structured as contests where multiple auditors independently review the same codebase. The contest model attracts top security talent by offering competitive rewards for significant findings. Reports are published publicly for transparency." },
        { id: "coverage-model", title: "Audit-Backed Coverage", content: "Protocols completing a Sherlock audit receive smart contract exploit coverage as part of the package. If an exploit occurs due to a vulnerability present during the audit, the staking pool pays claims. This direct connection between audit quality and financial outcomes creates stronger accountability." },
        { id: "staking-mechanics", title: "Staking and Capital Provision", content: "Sherlock's staking pool accepts deposits from anyone willing to provide capital backing for coverage. Stakers earn yield from audit fees, premiums, and DeFi strategies. In exchange, stakers accept the risk that capital may be used to pay claims. Lock-up periods apply to ensure capital stability." },
      ]}
      fees={{
        "Audit Cost": "Variable based on codebase complexity",
        "Coverage Premium": "Included with audit",
        "Staking Yield": "Variable APY",
        "Claims": "Paid from staking pool",
      }}
      security={[
        "Competitive multi-auditor review",
        "Published audit reports",
        "Economic alignment between audit quality and coverage",
        "Staking pool capital monitoring",
        "Escalation committee for complex claims",
      ]}
      features={[
        "Combined audit and coverage platform",
        "Competitive audit marketplace",
        "Staking yield for capital providers",
        "Transparent audit publications",
        "Direct incentive alignment",
        "Protocol-specific coverage terms",
      ]}
      faqs={[
        { question: "How does Sherlock combine auditing and insurance?", answer: "Protocols audited by Sherlock receive exploit coverage backed by the staking pool. If exploited due to a missed vulnerability, the pool pays claims, creating financial accountability for audit quality." },
        { question: "Can anyone stake on Sherlock?", answer: "Yes. Anyone can provide capital to the staking pool, earning yield from fees and premiums while accepting the risk of claims payouts." },
      ]}
      relatedReviews={[
        { name: "InsurAce", slug: "insurace" },
        { name: "Neptune Mutual", slug: "neptune-mutual" },
      ]}
      relatedGuides={[
        { title: "Smart Contract Cover Explained", href: "/insurance/learn/smart-contract-cover-explained" },
        { title: "Risk Assessment in DeFi", href: "/insurance/learn/risk-assessment-defi" },
      ]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
