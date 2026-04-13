import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { CRYPTO_LOAN_PRODUCTS } from "@/data/crypto-loans";
import ReviewPage from "@/components/ReviewPage";

const product = CRYPTO_LOAN_PRODUCTS.find((p) => p.slug === "compound-loans")!;

export const metadata: Metadata = { title: "Compound Loans Review 2026: DeFi Borrowing Analysis", description: "Review of borrowing on Compound V3. Covers isolated markets, rates, collateral, COMP rewards, and comparison to alternatives. Updated March 2026." ,
  alternates: { canonical: "/crypto-loans/reviews/compound-loans" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Crypto Loans', item: 'https://degen0x.com/crypto-loans' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/crypto-loans/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Compound Loans', },
  ],
};

export default function CompoundLoansReview() {
  return (
    <>
      <ReviewPage product={product} categoryName="Crypto Loans" categorySlug="crypto-loans"
      overview="Compound V3 offers decentralized borrowing through its innovative isolated market architecture. Each market centers around a single borrowable base asset (like USDC or ETH) with multiple approved collateral types. This isolated design means a failure in one market cannot cascade to others, providing cleaner risk separation than pooled lending models. Since pioneering DeFi lending in 2018, Compound has processed billions in loans with a strong security track record. COMP governance token rewards provide additional incentives for both borrowers and lenders."
      sections={[
        { id: "v3-markets", title: "V3 Isolated Markets", content: "Compound V3 operates through isolated markets, each focused on one borrowable asset. The USDC market on Ethereum accepts ETH, WBTC, wstETH, and other approved tokens as collateral for borrowing USDC. The ETH market accepts similar collateral for ETH borrowing. This isolation means risk is contained within each market, a significant improvement over V2's shared-pool model where all assets shared liquidity and risk." },
        { id: "rates", title: "Interest Rates & COMP Rewards", content: "Compound V3 uses algorithmic interest rates based on utilization. Borrow rates increase as more of the pool is utilized. COMP token rewards are distributed to borrowers as an incentive, effectively reducing the net cost of borrowing. The COMP reward rate is set by governance and varies by market. When factoring in COMP rewards, the effective borrow rate can be significantly lower than the stated APR." },
        { id: "collateral", title: "Collateral Management", content: "In V3, deposited collateral does not earn interest, which is a key difference from V2 and from Aave. This design simplifies the protocol and improves risk isolation. Each collateral type has specific LTV ratios and liquidation thresholds set by governance. Users should note that collateral assets are locked and cannot be used elsewhere in DeFi while deposited in Compound." },
        { id: "liquidation", title: "Liquidation Process", content: "When a borrower's collateral value drops below the liquidation threshold, their position becomes eligible for absorption. Compound V3 uses an absorption mechanism where the protocol absorbs underwater positions and sells the collateral to repay the debt. This is different from Aave's liquidator-based system and can result in different outcomes during high-volatility events." },
        { id: "ux", title: "User Experience", content: "Compound V3 offers a clean, intuitive interface for borrowing. The single-asset market model simplifies decision-making since you only need to choose what to borrow and what to use as collateral. The health factor display clearly shows how close you are to liquidation. Third-party interfaces like Instadapp and DeFi Saver also support Compound positions for advanced management." },
      ]}
      fees={{ "Borrow Rate": "Variable (3-10% typical)", "COMP Rewards": "Reduce effective cost", "Liquidation Penalty": "5% on absorbed collateral", "Origination Fee": "None", "Gas Costs": "Varies by chain" }}
      security={["Battle-tested since 2018", "Extensive OpenZeppelin audits", "Simplified V3 reduces attack surface", "Bug bounty via Immunefi", "On-chain governance with timelock", "Formal verification of critical paths"]}
      features={["Isolated single-asset borrowing markets", "COMP governance and reward token", "Multiple collateral types per market", "Multi-chain deployment", "Clean, intuitive borrowing interface", "Developer-friendly SDK and API", "Absorption-based liquidation mechanism"]}
      faqs={[
        { question: "Why does Compound collateral not earn interest in V3?", answer: "This is a deliberate design choice for risk isolation. By not allowing collateral to earn interest, the protocol avoids complex interactions between lending and collateral pools. It simplifies the codebase, reduces attack surface, and ensures cleaner risk separation." },
        { question: "Is Compound V3 better than V2?", answer: "For most users, yes. V3 offers better risk isolation through its single-asset market model, improved gas efficiency, and a cleaner user experience. The main trade-off is that collateral does not earn interest in V3, whereas it did in V2." },
      ]}
      relatedReviews={[{ name: "Aave", slug: "aave-loans" }, { name: "MakerDAO", slug: "makerdao" }]}
      relatedGuides={[{ title: "CeFi vs DeFi Lending", href: "/crypto-loans/learn/cefi-vs-defi-lending" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
