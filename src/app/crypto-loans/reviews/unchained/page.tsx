import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "Unchained",
  slug: "unchained",
  rating: 4.3,
  description: "Unchained offers collaborative custody Bitcoin loans where you retain key control of your collateral.",
  pros: ["Collaborative custody (you hold keys)", "Bitcoin-native security model", "No rehypothecation of collateral", "Strong privacy focus"],
  cons: ["Bitcoin-only collateral", "Higher minimum loan amounts", "More complex setup process", "US-focused platform"],
  bestFor: "Bitcoin holders who want loan access without giving up custody of their keys",
  affiliateUrl: "https://degen0x.com/go/unchained",
  category: "crypto-loans",
};

export const metadata: Metadata = {
  title: `Unchained Review (2026): Bitcoin Loans with Key Control | degen0x`,
  description: "In-depth Unchained review covering collaborative custody Bitcoin loans, multisig security, rates, and how it compares to custodial crypto lenders.",
  alternates: { canonical: "/crypto-loans/reviews/unchained" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Crypto Loans', item: 'https://degen0x.com/crypto-loans' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/crypto-loans/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Unchained', },
  ],
};

export default function UnchainedReview() {
  return (
    <>
      <ReviewPage
      product={product}
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      overview="Unchained, formerly Unchained Capital, is a Bitcoin-native financial services company based in Austin, Texas that offers a unique approach to crypto-backed lending through collaborative custody. Unlike traditional CeFi lenders where you surrender your Bitcoin to the platform, Unchained uses a 2-of-3 multisig vault where you retain one key, Unchained holds one key, and a third key is held by a collaborative custody partner. This means your Bitcoin collateral is never fully controlled by the lending platform, dramatically reducing counterparty risk. Unchained focuses exclusively on Bitcoin, reflecting a philosophical commitment to the most secure and decentralized cryptocurrency."
      sections={[
        { id: "collaborative-custody", title: "Collaborative Custody Model", content: "Unchained's collaborative custody model is its defining feature. When you take a loan, your Bitcoin collateral is held in a 2-of-3 multisig vault on the Bitcoin blockchain. You hold one key, Unchained holds another, and a third party holds the remaining key. Moving Bitcoin requires two of the three keys, meaning Unchained alone cannot access your funds. If Unchained were to become insolvent, your Bitcoin remains accessible through your key and the third-party key. This model provides significantly stronger security guarantees than traditional custodial lending platforms where the lender has full control of deposited assets. The approach directly addresses the counterparty risk that caused billions in losses during the 2022 CeFi collapses." },
        { id: "loan-terms", title: "Loan Terms and Rates", content: "Unchained offers Bitcoin-backed loans with competitive interest rates and flexible terms. Loans are typically structured with 12-month terms, though options may vary. The loan-to-value ratio is generally conservative, starting around 40-50%, providing significant buffer against Bitcoin price volatility. Interest can be paid monthly or added to the loan balance. Minimum loan amounts are higher than some competitors, reflecting Unchained's focus on serious Bitcoin holders rather than small retail borrowers. The conservative LTV and collaborative custody model mean that borrowers face lower liquidation risk compared to higher-LTV platforms, though they also receive less borrowing power per dollar of collateral." },
        { id: "security-model", title: "Security Architecture", content: "Beyond collaborative custody, Unchained employs a comprehensive security model. All Bitcoin is held on-chain in verifiable multisig addresses, meaning you can independently verify that your collateral exists at any time using the Bitcoin blockchain. There is no rehypothecation, meaning Unchained does not lend out or trade with your collateral. This is in stark contrast to CeFi platforms that historically used deposited assets for trading and lending activities. The multisig architecture also means that a security breach at Unchained would not automatically compromise your funds, since an attacker would need access to two separate key holders." },
        { id: "additional-services", title: "Additional Services", content: "Unchained offers additional Bitcoin financial services beyond lending. Their vault product provides collaborative custody for long-term Bitcoin storage without a loan. IRA products allow tax-advantaged Bitcoin holding with the same collaborative custody model. The platform also offers a trading desk for buying and selling Bitcoin. Inheritance planning services help ensure Bitcoin holdings can be securely transferred to heirs. These services reflect Unchained's position as a comprehensive Bitcoin financial services provider rather than a general crypto lending platform." },
      ]}
      fees={{ "Loan Interest": "Competitive fixed rates", "Origination Fee": "Varies by loan", "Vault Storage": "Annual fee for custody", "Trading Fee": "Competitive spread", "Early Repayment": "Check terms for details" }}
      security={["2-of-3 multisig collaborative custody", "No rehypothecation of collateral", "On-chain verifiable Bitcoin holdings", "Independent key distribution", "No single entity controls your funds", "SOC 2 compliance"]}
      features={["Collaborative custody Bitcoin loans", "2-of-3 multisig security model", "On-chain verifiable collateral", "No rehypothecation policy", "Bitcoin vault storage product", "IRA products for tax-advantaged holding", "Inheritance planning services", "Trading desk"]}
      faqs={[
        { question: "What happens if Unchained goes bankrupt?", answer: "This is the key advantage of collaborative custody. Since your Bitcoin is in a 2-of-3 multisig where you hold one key, Unchained cannot unilaterally access your funds even in bankruptcy. You can work with the third-party key holder to move your Bitcoin independently of Unchained." },
        { question: "Is Unchained only for large Bitcoin holders?", answer: "Unchained focuses on serious Bitcoin holders with minimum loan amounts that may be higher than some competitors. The collaborative custody model and associated costs make it most practical for larger positions. Check their current minimums for specific thresholds." },
      ]}
      relatedReviews={[{ name: "Ledn", slug: "ledn" }, { name: "Nexo", slug: "nexo" }]}
      relatedGuides={[{ title: "Bitcoin-Backed Loans", href: "/crypto-loans/learn/bitcoin-backed-loans" }, { title: "CeFi vs DeFi Lending", href: "/crypto-loans/learn/cefi-vs-defi-lending" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Collaborative Custody Model", "description": "Unchained offers collaborative custody Bitcoin loans where you retain key control of your collateral.", "url": "https://degen0x.com/crypto-loans/reviews/unchained", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
