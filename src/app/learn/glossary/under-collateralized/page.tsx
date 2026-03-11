import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Under-Collateralized Lending? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what under-collateralized lending means in DeFi, how it works without full collateral backing, the risks involved, and major protocols in this space.",
};

export default function UnderCollateralizedPage() {
  return (
    <LearnPageLayout title="What Is Under-Collateralized?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Under-collateralized lending allows borrowers to take loans worth more than their deposited collateral, or sometimes with no collateral at all. This mirrors traditional lending where banks extend credit based on reputation and creditworthiness. In DeFi, under-collateralized lending is more complex because it requires trust mechanisms in a trustless environment. Protocols use institutional reputation, on-chain credit scoring, or social guarantees to manage the default risk."
      toc={[{ id: "definition", title: "What Is Under-Collateralized Lending?", level: 2 }, { id: "how-it-works", title: "How It Works in DeFi", level: 2 }, { id: "risks", title: "Risks and Challenges", level: 2 }, { id: "protocols", title: "Under-Collateralized Protocols", level: 2 }]}
      faqs={[{ question: "Is under-collateralized lending safe?", answer: "It carries higher default risk than over-collateralized lending. Several under-collateralized protocols have experienced defaults, including Maple Finance and TrueFi, resulting in losses for lenders. The risk is partially managed through credit assessments, pool diversification, and insurance, but losses are possible." },
        { question: "Who can access under-collateralized loans in DeFi?", answer: "Most under-collateralized DeFi loans are available only to institutional borrowers like market makers, trading firms, and DAOs that have established on-chain reputations. Retail under-collateralized lending in DeFi is rare due to the difficulty of enforcing repayment without traditional legal mechanisms." }]}
      relatedArticles={[{ title: "Over-Collateralized", href: "/learn/glossary/over-collateralized", category: "Glossary" }, { title: "Collateralization", href: "/learn/glossary/collateralization", category: "Glossary" }, { title: "Lending Protocol", href: "/learn/glossary/lending-protocol", category: "Glossary" }, { title: "Borrowing", href: "/learn/glossary/borrowing", category: "Glossary" }]}
    >
      <h2 id="definition">What Is Under-Collateralized Lending?</h2>
      <p>Under-collateralized lending extends credit beyond the value of posted collateral. In a fully under-collateralized loan, the borrower may post no collateral at all. This is the standard model in traditional finance (credit cards, mortgages, business loans) but is challenging in DeFi because there is no legal system to force repayment. Under-collateralized DeFi lending relies on alternative trust mechanisms to manage default risk.</p>

      <h2 id="how-it-works">How It Works in DeFi</h2>
      <p>DeFi under-collateralized lending typically requires borrowers to establish identity and reputation through KYC processes and on-chain credit history. Pool delegates or credit assessors evaluate borrower risk and approve loans. Some protocols use social staking where third parties vouch for borrowers by putting up collateral. Flash loans are a special case of zero-collateral borrowing where the loan must be repaid within a single transaction, eliminating default risk through atomicity.</p>

      <h2 id="risks">Risks and Challenges</h2>
      <p>The primary risk is borrower default. Without sufficient collateral to seize, lenders face potential losses. The collapse of FTX and other CeFi entities in 2022 caused significant defaults on under-collateralized DeFi loans, highlighting the counterparty risk. Lenders in under-collateralized pools must carefully assess borrower quality and diversify across multiple loans to manage the risk of any single default impacting their portfolio.</p>

      <h2 id="protocols">Under-Collateralized Protocols</h2>
      <p>Maple Finance offers institutional under-collateralized lending through delegate-managed pools. TrueFi uses a credit scoring model for unsecured lending. Goldfinch focuses on under-collateralized lending to real-world businesses in emerging markets. Clearpool provides permissioned lending pools where institutional borrowers set terms. These protocols represent a growing segment of DeFi that bridges decentralized infrastructure with credit-based lending models.</p>
    </LearnPageLayout>
  );
}
