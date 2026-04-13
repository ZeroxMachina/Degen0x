import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "Ledn",
  slug: "ledn",
  rating: 4.1,
  description: "Ledn offers Bitcoin-backed loans and yield products with a focus on transparency and proof of reserves.",
  pros: ["Transparent proof of reserves", "Bitcoin-focused lending expertise", "Competitive BTC loan rates", "No minimum loan amounts"],
  cons: ["Limited asset support (BTC and ETH focused)", "CeFi counterparty risk", "KYC required", "Geographic restrictions apply"],
  bestFor: "Bitcoin holders seeking BTC-backed loans with transparent CeFi operations",
  affiliateUrl: "https://degen0x.com/go/ledn",
  category: "crypto-loans",
};

export const metadata: Metadata = {
  title: `Ledn Review (${CURRENT_YEAR}): Rates, Features & Pros/Cons | ${SITE_NAME}`,
  description: "In-depth Ledn review covering Bitcoin-backed loans, yield products, proof of reserves, and how Ledn compares to other crypto lending platforms.",
  alternates: { canonical: "/crypto-loans/reviews/ledn" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Crypto Loans', item: 'https://degen0x.com/crypto-loans' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/crypto-loans/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Ledn', },
  ],
};

export default function LednReview() {
  return (
    <>
      <ReviewPage
      product={product}
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      overview="Ledn is a Toronto-based crypto lending platform founded in 2018 that specializes in Bitcoin-backed financial services. The platform differentiates itself through a strong commitment to transparency, publishing monthly proof-of-reserves attestations through third-party auditors. Ledn offers Bitcoin-backed loans, allowing users to borrow USD or USDC against their BTC holdings without selling. The platform also provides yield-earning products for BTC and USDC deposits. Ledn's focus on Bitcoin rather than a broad range of altcoins reflects a more conservative approach to asset management. Following the CeFi crisis of 2022, Ledn emphasized its transparent operations and has maintained a clean track record of meeting all client obligations."
      sections={[
        { id: "btc-loans", title: "Bitcoin-Backed Loans", content: "Ledn's core product allows users to borrow USD or stablecoins against Bitcoin collateral. The loan-to-value ratio typically starts at 50%, meaning you can borrow up to half the value of your deposited BTC. There is no minimum loan amount, making the platform accessible to smaller borrowers. Interest rates are competitive within the CeFi space, and loans can be open-ended with no fixed repayment date as long as the LTV ratio stays healthy. If BTC price drops and your LTV increases, Ledn provides margin call notifications and allows you to add collateral or partially repay to restore the ratio." },
        { id: "transparency", title: "Proof of Reserves", content: "Ledn publishes monthly proof-of-reserves attestations, making it one of the most transparent CeFi lending platforms. These attestations are conducted by third-party accounting firms and verify that Ledn holds sufficient assets to cover all client deposits. This transparency became a significant differentiator after the Celsius and BlockFi collapses revealed that many CeFi platforms were not fully backed. Ledn's commitment to regular attestations provides an additional layer of confidence for depositors, though it is important to note that proof of reserves does not eliminate all counterparty risk." },
        { id: "yield-products", title: "Yield Products", content: "Beyond borrowing, Ledn offers yield-generating products for Bitcoin and USDC deposits. BTC Growth Accounts allow users to earn yield on their Bitcoin holdings through Ledn's lending activities. USDC savings accounts provide competitive stablecoin yields. The yield generated comes from Ledn's lending operations, where deposited assets are lent to institutional and retail borrowers. Yield rates fluctuate based on market demand and Ledn's lending activity. Users should understand that yield products involve some risk as deposits are used in lending activities." },
        { id: "security", title: "Security and Compliance", content: "Ledn stores client assets with institutional custody providers and maintains comprehensive insurance coverage. The platform operates under Canadian regulatory oversight and requires full KYC verification for all users. Ledn has not experienced any security breaches or loss of client funds since its founding. The platform implements standard security measures including two-factor authentication, address whitelisting for withdrawals, and activity notifications. Ledn's regulatory compliance includes registration with financial authorities and adherence to anti-money laundering requirements." },
      ]}
      fees={{ "Loan Interest": "Variable, competitive rates", "Origination Fee": "None", "Withdrawal Fee": "Network fees only", "Early Repayment": "No penalties", "Account Maintenance": "Free" }}
      security={["Monthly proof-of-reserves attestations", "Institutional custody providers", "Insurance coverage on custodied assets", "Canadian regulatory oversight", "Two-factor authentication", "Address whitelisting for withdrawals"]}
      features={["Bitcoin-backed loans with no minimum", "Monthly proof of reserves", "BTC and USDC yield products", "Open-ended loan terms", "Margin call notifications", "Mobile and web platform", "Institutional-grade custody"]}
      faqs={[
        { question: "Is Ledn safe after the CeFi collapses?", answer: "Ledn has maintained transparency through monthly proof-of-reserves attestations and has met all client obligations. While no CeFi platform is completely risk-free, Ledn's transparency measures provide more visibility into its operations than most alternatives." },
        { question: "What happens if Bitcoin drops and my LTV increases?", answer: "Ledn sends margin call notifications when your LTV approaches the liquidation threshold. You can add more BTC collateral or partially repay the loan to reduce the LTV. If you do not act and the LTV exceeds the liquidation threshold, a portion of your collateral may be sold to restore the ratio." },
      ]}
      relatedReviews={[{ name: "Nexo", slug: "nexo" }, { name: "Salt Lending", slug: "salt-lending" }]}
      relatedGuides={[{ title: "Bitcoin-Backed Loans", href: "/crypto-loans/learn/bitcoin-backed-loans" }, { title: "LTV Ratio Guide", href: "/crypto-loans/learn/ltv-ratio-guide" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
