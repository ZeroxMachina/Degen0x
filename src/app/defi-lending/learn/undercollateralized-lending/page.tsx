import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Undercollateralized DeFi Lending (${CURRENT_YEAR}) | degen0x`,
  description: "Guide to undercollateralized lending in DeFi. Learn how protocols enable lending without full collateral, credit assessment on-chain, and the risks involved.",
};

export default function UndercollateralizedLendingPage() {
  return (
    <LearnPageLayout title="Undercollateralized DeFi Lending" categoryName="DeFi Lending" categorySlug="defi-lending" readTime="8 min read"
      intro="Undercollateralized lending is one of the most ambitious frontiers in DeFi, attempting to replicate the traditional credit system on-chain. Unlike standard DeFi lending that requires 150%+ overcollateralization, undercollateralized protocols extend credit based on reputation, identity, or institutional vetting. This unlocks greater capital efficiency but introduces default risk that overcollateralized DeFi avoids."
      toc={[
        { id: "why-undercollateralized", title: "why-undercollateralized", level: 2 },
        { id: "why-undercollateralized-lending", title: "Why Undercollateralized Lending?", level: 2 },
        { id: "approaches", title: "approaches", level: 2 },
        { id: "different-approaches", title: "Different Approaches", level: 2 },
        { id: "protocols", title: "protocols", level: 2 },
        { id: "key-protocols", title: "Key Protocols", level: 2 },
        { id: "risks-lessons", title: "risks-lessons", level: 2 },
        { id: "risks-and-lessons-learned", title: "Risks and Lessons Learned", level: 2 }
      ]}
      faqs={[
        { question: "What is undercollateralized lending?", answer: "Undercollateralized lending provides loans where the borrower posts less than 100% collateral relative to the loan value. This requires some form of credit assessment, reputation system, or legal agreement to manage default risk. It enables higher capital efficiency but with higher risk." },
        { question: "How do protocols manage default risk?", answer: "Different protocols use different approaches: credit committees assess institutional borrowers (Maple), community backers perform due diligence (Goldfinch), on-chain credit scoring uses wallet history (TrueFi), and legal agreements provide off-chain recourse. None fully eliminates default risk." },
        { question: "Have there been defaults?", answer: "Yes. The 2022 crypto downturn caused significant defaults on undercollateralized lending platforms. Maple had multiple pool defaults from borrowers like Orthogonal Trading. TrueFi experienced defaults. These events demonstrated the real credit risk in undercollateralized DeFi lending." },
      ]}
      relatedArticles={[
        { title: "Maple vs Goldfinch", href: "/crypto-loans/compare/maple-vs-goldfinch", category: "Crypto Loans" },
        { title: "Institutional Crypto Lending", href: "/crypto-loans/learn/institutional-crypto-lending", category: "Crypto Loans" },
        { title: "Lending Risk Management", href: "/defi-lending/learn/lending-risk-management", category: "DeFi Lending" },
      ]}
    >
      <h2 id="why-undercollateralized">Why Undercollateralized Lending?</h2>
      <p>Overcollateralized lending is capital-inefficient. Requiring $150 of collateral to borrow $100 means most capital sits unused. In traditional finance, trillions of dollars in lending occurs without full collateralization, enabled by credit scoring, legal enforcement, and institutional trust. DeFi&apos;s overcollateralization requirement limits its addressable market to those who already have more capital than they need to borrow. Undercollateralized lending expands DeFi&apos;s potential market dramatically by enabling credit extension based on reputation, identity, and creditworthiness rather than just capital lock-up. For institutional borrowers, posting 50% collateral instead of 150% means three times more capital efficiency. For real-world borrowers in emerging markets, undercollateralized DeFi lending can provide access to capital that traditional banks do not serve.</p>

      <h2 id="approaches">Different Approaches</h2>
      <p>Institutional credit delegation uses professional credit analysts (pool delegates) to assess borrower creditworthiness, similar to traditional corporate lending. Borrowers are typically hedge funds, trading firms, or market makers with verifiable track records. Community-based assessment distributes due diligence to a community of backers who stake capital to verify borrower quality. On-chain credit scoring attempts to build credit profiles from wallet transaction history, DeFi participation, and on-chain behavior. Identity-based approaches use verified identity (KYC) and legal agreements to provide recourse in case of default. Social-based approaches use reputation and social connections to vouch for borrowers. Each approach trades off between decentralization, scalability, and effectiveness. No approach has fully solved the credit assessment problem in a trustless manner.</p>

      <h2 id="protocols">Key Protocols</h2>
      <p>Maple Finance uses pool delegates who assess institutional borrowers and manage lending pools. Lenders deposit into pools curated by these credit professionals. Goldfinch extends credit to real-world businesses through a two-tier system of Backers (first-loss capital with due diligence responsibility) and Senior Pool (passive, diversified exposure). TrueFi uses a combination of governance voting and credit analysis for loan approval. Clearpool enables permissionless pool creation where institutional borrowers offer their own terms and lenders decide whether to participate based on the borrower&apos;s credit profile. Centrifuge focuses on tokenizing real-world credit assets. Each protocol represents a different philosophy on how to extend credit in a decentralized context, and the market is still evolving through experimentation and learning from defaults.</p>

      <h2 id="risks-lessons">Risks and Lessons Learned</h2>
      <p>The 2022 crypto downturn was a crucible for undercollateralized lending. Multiple borrowers defaulted, demonstrating that credit risk in crypto is at least as severe as in traditional finance. Key lessons: crypto-native borrowers are highly correlated with crypto market conditions, making them prone to simultaneous default during downturns. Credit assessment in crypto is harder than in traditional finance because borrower financials are often opaque. Legal recourse for DeFi loans across international jurisdictions is slow and uncertain. Pool delegates and credit committees can fail in their assessment responsibilities. For lenders considering undercollateralized protocols: understand that yields above overcollateralized DeFi rates reflect real credit risk. Diversify across multiple pools, borrowers, and protocols. Never invest more than you can afford to lose entirely. Treat undercollateralized lending as a higher-risk allocation within a broader portfolio.</p>
    </LearnPageLayout>
  );
}
