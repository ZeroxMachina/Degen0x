import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { CRYPTO_LOAN_PRODUCTS } from "@/data/crypto-loans";
import ReviewPage from "@/components/ReviewPage";

const product = CRYPTO_LOAN_PRODUCTS.find((p) => p.slug === "nexo")!;

export const metadata: Metadata = { title: "Nexo Review 2026: Rates, Security, Pros & Cons", description: "In-depth Nexo review covering loan rates, earning products, security, and whether Nexo is the right crypto lending platform for you. Updated March 2026." ,
  alternates: { canonical: "/crypto-loans/reviews/nexo" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Crypto Loans', item: 'https://degen0x.com/crypto-loans' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/crypto-loans/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Nexo', },
  ],
};

export default function NexoReview() {
  return (
    <>
      <ReviewPage product={product} categoryName="Crypto Loans" categorySlug="crypto-loans"
      overview="Nexo is one of the leading centralized crypto lending platforms, offering both borrowing and earning services. Founded in 2018 and based in Switzerland, Nexo serves over 6 million users worldwide. The platform allows users to borrow against 60+ cryptocurrencies at rates starting from 0% APR for top-tier loyalty members, while also offering competitive yield on crypto deposits. Nexo operates under a tiered loyalty system based on NEXO token holdings, with Platinum members receiving the best rates and highest yields. The platform emphasizes regulatory compliance, holding licenses in multiple jurisdictions and maintaining insurance coverage for custodied assets."
      sections={[
        { id: "borrowing", title: "Borrowing Experience", content: "Nexo's borrowing process is straightforward: deposit crypto collateral, and instantly access a credit line. There are no monthly payments required, and interest accrues until you choose to repay. You can borrow fiat (USD, EUR, GBP) or stablecoins against your crypto holdings with LTV ratios up to 90% depending on the collateral type. The instant credit line model means you only pay interest on what you actually withdraw, not your total credit limit. Repayment is flexible and can be made at any time in crypto or fiat." },
        { id: "loyalty-tiers", title: "Loyalty Tiers & NEXO Token", content: "Nexo's rate structure is heavily dependent on its loyalty tier system. Tiers range from Base to Platinum, determined by the percentage of your portfolio held in NEXO tokens. Platinum members (10%+ in NEXO) get 0% APR on borrowing and the highest earn rates. This creates a strong incentive to hold NEXO tokens but also introduces additional token price risk. Users who do not hold NEXO tokens receive Base tier rates, which are significantly less competitive." },
        { id: "security", title: "Security & Regulation", content: "Nexo stores the majority of user assets in cold storage through institutional custody providers. The platform maintains $775 million in insurance coverage through Lloyd's of London and other underwriters. Nexo has obtained licenses in multiple European jurisdictions and has been expanding its regulatory footprint. The platform has not experienced any security breaches or loss of customer funds since launch." },
        { id: "earn-products", title: "Earn Products", content: "Beyond borrowing, Nexo offers competitive yield on crypto deposits. Users can earn interest on 35+ assets including Bitcoin, Ethereum, and major stablecoins. Yield rates are tiered based on loyalty level and whether interest is paid in NEXO tokens or in-kind. Stablecoin yields can reach double-digit APY for Platinum members receiving interest in NEXO. Terms are flexible with no lock-up periods for standard earn products." },
        { id: "cefi-risks", title: "CeFi Risk Considerations", content: "As a centralized lending platform, Nexo carries counterparty risk that DeFi protocols do not. The collapse of Celsius and BlockFi demonstrated that even large CeFi lenders can fail. While Nexo has maintained transparency with regular real-time attestations and no reported solvency issues, users should be aware that deposited funds are controlled by the company rather than smart contracts. Geographic restrictions also apply, with some services unavailable in certain US states." },
      ]}
      fees={{ "Borrowing APR": "0-13.9% (tier-dependent)", "Credit Line Fee": "None (interest only on withdrawn amount)", "Origination Fee": "None", "Withdrawal Fee": "Free (1-5 per month depending on tier)", "Exchange Fee": "Up to 0.5% spread" }}
      security={["Cold storage through institutional custody providers", "$775M insurance coverage through Lloyd's of London", "Licensed in multiple European jurisdictions", "Real-time attestations of assets", "SOC 2 Type 2 compliance", "Two-factor authentication and biometric login", "No security breaches since 2018 launch"]}
      features={["Instant crypto credit lines with flexible repayment", "60+ supported collateral assets", "Fiat and stablecoin borrowing options", "Earn interest on 35+ cryptocurrencies", "NEXO loyalty tier system for better rates", "Nexo Card for crypto-backed spending", "Mobile app for iOS and Android", "OTC desk for large transactions"]}
      faqs={[
        { question: "Is Nexo safe after Celsius collapsed?", answer: "Nexo has maintained transparency through regular real-time attestations and has not reported solvency issues. Unlike Celsius, Nexo maintains insurance coverage and operates under regulatory oversight. However, all CeFi platforms carry counterparty risk. Consider spreading deposits across platforms and keeping large holdings in self-custody." },
        { question: "How do I get 0% interest on Nexo?", answer: "You need Platinum loyalty tier, which requires holding NEXO tokens equal to at least 10% of your total portfolio balance on the platform. Platinum members can borrow at 0% APR and receive the highest earn rates." },
        { question: "Is Nexo available in the US?", answer: "Nexo is available to US residents in most states, though some features (like the earn product) have been restricted in certain states due to regulatory requirements. Check Nexo's terms for availability in your specific state." },
      ]}
      relatedReviews={[{ name: "MakerDAO", slug: "makerdao" }, { name: "Aave", slug: "aave-loans" }]}
      relatedGuides={[{ title: "CeFi vs DeFi Lending", href: "/crypto-loans/learn/cefi-vs-defi-lending" }, { title: "LTV Ratio Explained", href: "/crypto-loans/learn/ltv-ratio-explained" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Nexo Review 2026: Rates, Security, Pros & Cons", "description": "In-depth Nexo review covering loan rates, earning products, security, and whether Nexo is the right crypto lending platform for you. Updated March 2026.", "url": "https://degen0x.com/crypto-loans/reviews/nexo", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/crypto-loans/reviews/aave-loans" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aave Loans</a>
  <a href="/crypto-loans/reviews/abracadabra" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Abracadabra</a>
  <a href="/crypto-loans/reviews/benqi-loans" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Benqi Loans</a>
  <a href="/crypto-loans/reviews/celsius" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Celsius</a>
  <a href="/crypto-loans/reviews/celsius-successor" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Celsius Successor</a>
  <a href="/crypto-loans/reviews/compound-loans" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Compound Loans</a>
  <a href="/crypto-loans/reviews/ledn" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Ledn</a>
  <a href="/crypto-loans/reviews/liquity" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Liquity</a>
</nav>
      </>
  );
}
