import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Credit Scoring Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Explore on-chain credit scoring in DeFi. Learn about reputation systems, undercollateralized lending, credit delegation, and the future of DeFi credit.",
  keywords: ["defi credit scoring", "on-chain reputation", "credit delegation", "undercollateralized defi"],
};

export default function DefiCreditScoringPage() {
  return (
    <LearnPageLayout
      title="DeFi Credit Scoring"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="9 min"
      intro="On-chain credit scoring represents the next evolution of DeFi lending, moving beyond overcollateralized loans toward reputation-based borrowing. By analyzing wallet history, protocol interactions, and repayment behavior, emerging credit systems aim to enable undercollateralized or even unsecured lending in DeFi. This guide explores the current state of DeFi credit scoring, its approaches, and its implications for the lending landscape."
      toc={[
        { id: "why-credit-scoring", title: "Why DeFi Needs Credit Scoring", level: 2 },
        { id: "approaches", title: "Current Approaches", level: 2 },
        { id: "credit-delegation", title: "Credit Delegation", level: 2 },
        { id: "challenges", title: "Challenges and Limitations", level: 2 },
        { id: "future-outlook", title: "Future Outlook", level: 2 },
      ]}
      faqs={[
        { question: "Can I get an unsecured loan in DeFi?", answer: "Currently, unsecured DeFi loans are primarily available to institutional borrowers through protocols like Maple Finance and TrueFi. Retail unsecured lending is still limited but emerging through credit delegation and reputation-based systems." },
        { question: "How is on-chain credit different from traditional credit?", answer: "On-chain credit is based on verifiable blockchain activity rather than self-reported financial data. It is pseudonymous, transparent, and composable across protocols. However, it cannot currently account for off-chain financial behavior, real-world income, or traditional creditworthiness factors." },
      ]}
      relatedArticles={[
        { title: "How DeFi Lending Works", href: "/defi-lending/learn/how-defi-lending-works", category: "DeFi Lending" },
        { title: "Collateralization Ratios", href: "/defi-lending/learn/collateralization-ratios", category: "DeFi Lending" },
      ]}
    >
      <section id="why-credit-scoring">
        <h2>Why DeFi Needs Credit Scoring</h2>
        <p>The current overcollateralization model in DeFi is capital-inefficient. Borrowers must lock up more value than they borrow, which limits the utility of DeFi lending compared to traditional finance where credit scores enable undercollateralized and unsecured borrowing. This capital inefficiency means that only users with existing crypto wealth can access DeFi lending, excluding the underbanked populations that could benefit most from decentralized financial services. Credit scoring in DeFi would unlock undercollateralized lending, expand access to a broader user base, improve capital efficiency across the ecosystem, and enable new financial products like lines of credit and credit cards in a decentralized setting. The challenge is building reliable creditworthiness assessment in a pseudonymous, permissionless environment where traditional identity verification and credit bureau infrastructure do not exist.</p>
      </section>
      <section id="approaches">
        <h2>Current Approaches</h2>
        <p>Several approaches to DeFi credit scoring have emerged. Protocol-level reputation systems track a wallet's borrowing and repayment history within a specific protocol, rewarding consistent repayment with better terms. Cross-protocol scoring aggregates activity across multiple DeFi protocols, analyzing total transaction history, protocol diversity, and consistency of behavior. Spectral Finance builds credit scores from on-chain data using machine learning models that analyze wallet behavior patterns. Credora provides institutional credit assessment combining on-chain analysis with off-chain data for institutional borrowers. Goldfinch uses a trust through consensus model where backers stake capital to signal trust in specific borrowers, effectively creating a decentralized credit assessment network. Soul-bound tokens and verifiable credentials are emerging as ways to create persistent, non-transferable reputation that cannot be purchased or gamed by simply moving funds between wallets.</p>
      </section>
      <section id="credit-delegation">
        <h2>Credit Delegation</h2>
        <p>Credit delegation is a mechanism available on Aave that allows depositors to delegate their borrowing power to other addresses. A depositor with unused borrowing capacity can authorize another wallet to borrow against their collateral, effectively providing an unsecured loan to the delegated address. The original depositor bears the liquidation risk if the delegated borrower fails to repay. This creates a trust-based lending relationship on top of the overcollateralized protocol infrastructure. Credit delegation has been used primarily in institutional contexts where legal agreements supplement the on-chain delegation. It represents a bridge between the current overcollateralized model and future reputation-based lending, allowing trusted relationships to enable more capital-efficient borrowing within the existing DeFi framework without requiring new protocol infrastructure.</p>
      </section>
      <section id="challenges">
        <h2>Challenges and Limitations</h2>
        <p>DeFi credit scoring faces significant challenges. Sybil resistance is the most fundamental: since anyone can create new wallets, a borrower who defaults can simply create a new address with a clean history. Current solutions include soul-bound tokens and identity verification, but these introduce centralization and privacy concerns. Limited data availability means on-chain credit scores can only assess crypto-native behavior, missing crucial information about real-world income, employment, and financial obligations. Privacy concerns arise from the transparency of blockchain data, as comprehensive credit scoring requires analyzing detailed transaction histories that users may not want publicly linked to their identity. Gaming and manipulation risks exist when users can strategically manage their on-chain behavior specifically to improve their credit score without genuine creditworthiness improvement. Finally, legal and regulatory uncertainty surrounds automated lending decisions based on algorithmic scoring in a decentralized context.</p>
      </section>
      <section id="future-outlook">
        <h2>Future Outlook</h2>
        <p>The convergence of several technologies could make DeFi credit scoring viable at scale. Zero-knowledge proofs enable proving creditworthiness claims without revealing underlying data, addressing privacy concerns. Decentralized identity standards allow users to build portable, verifiable credentials across platforms. Cross-chain data aggregation provides more comprehensive behavioral data as users interact across multiple blockchains. Real-world asset integration through RWA protocols creates connections between on-chain and off-chain financial behavior. As these technologies mature, expect a gradual expansion of undercollateralized lending, starting with institutional and semi-permissioned contexts and eventually reaching retail users. The most likely near-term development is tiered collateral requirements based on on-chain reputation, where established addresses with strong repayment histories can borrow at lower collateral ratios rather than a binary shift from overcollateralized to unsecured lending.</p>
      </section>
    </LearnPageLayout>
  );
}
