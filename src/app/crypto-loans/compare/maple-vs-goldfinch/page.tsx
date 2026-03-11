import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Maple vs Goldfinch (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Compare Maple Finance and Goldfinch institutional lending protocols. Analysis of yield, risk, borrower types, and how undercollateralized DeFi lending works.",
};

export default function MapleVsGoldfinchPage() {
  return (
    <LearnPageLayout
      title="Maple vs Goldfinch"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="8 min read"
      intro="Maple Finance and Goldfinch represent the undercollateralized DeFi lending sector, offering higher yields by lending to vetted institutional borrowers without requiring full overcollateralization. Both protocols experienced challenges during the 2022 crypto downturn but have rebuilt. Maple focuses on crypto-native institutional borrowers, while Goldfinch extends crypto capital to real-world businesses globally. Understanding their different approaches, risk models, and track records is essential for yield-seeking investors."
      toc={[
        { id: "model-comparison", title: "Lending Model Comparison", level: 2 },
        { id: "yield-risk", title: "Yield and Risk Profiles", level: 2 },
        { id: "borrower-types", title: "Borrower Types", level: 2 },
        { id: "track-record", title: "Track Record and Lessons", level: 2 },
      ]}
      faqs={[
        { question: "What is undercollateralized DeFi lending?", answer: "Unlike standard DeFi lending where borrowers must deposit 150%+ collateral, undercollateralized protocols lend to vetted borrowers with less than full collateralization, relying on creditworthiness assessment and legal agreements. This enables higher yields for lenders but with higher default risk." },
        { question: "What yields do Maple and Goldfinch offer?", answer: "Yields are typically 8-15% APY for stablecoin lending, significantly higher than overcollateralized protocols. Higher yields reflect the credit risk of lending to borrowers who may default. Actual yields vary by pool and borrower risk profile." },
        { question: "Did these protocols have defaults?", answer: "Yes. Both experienced defaults during the 2022 crypto downturn. Maple had several pool defaults when borrowers like Orthogonal Trading and Auros defaulted on loans. Goldfinch experienced some delays in repayments from emerging market borrowers. Both have restructured their risk management since." },
        { question: "Who are the borrowers?", answer: "Maple focuses on crypto-native institutional borrowers: market makers, trading firms, and DeFi protocols. Goldfinch focuses on real-world credit: fintech lenders, small business lenders, and financial institutions in emerging markets who extend the borrowed capital to local businesses." },
      ]}
      relatedArticles={[
        { title: "Institutional Crypto Lending", href: "/crypto-loans/learn/institutional-crypto-lending", category: "Crypto Loans" },
        { title: "Undercollateralized Lending", href: "/defi-lending/learn/undercollateralized-lending", category: "DeFi Lending" },
        { title: "Real World Asset Lending", href: "/defi-lending/learn/real-world-asset-lending", category: "DeFi Lending" },
      ]}
    >
      <h2 id="model-comparison">Lending Model Comparison</h2>
      <p>
        Maple Finance uses a delegated lending model. Pool Delegates are credit professionals who create lending pools, assess borrower creditworthiness, negotiate terms, and manage the pool. Lenders deposit stablecoins into pools managed by specific delegates, earning yield from borrower interest payments. The pool delegate serves as a credit intermediary between DeFi lenders and institutional borrowers. Goldfinch uses a two-tier lending model. Senior Pool capital provides broad diversification across all Goldfinch borrowers, while Backers provide first-loss capital to specific borrower pools after conducting their own due diligence. Backers earn higher returns for taking higher risk. Both protocols use legal agreements alongside smart contracts: borrowers sign off-chain loan agreements that provide legal recourse in case of default, bridging DeFi mechanics with traditional credit enforcement.
      </p>

      <h2 id="yield-risk">Yield and Risk Profiles</h2>
      <p>
        Maple&apos;s yields vary by pool and delegate, typically ranging from 8-15% APY for stablecoin deposits. Higher-risk pools targeting less-established borrowers may offer higher yields. The primary risk is borrower default, which can result in partial or total loss of principal. Pool delegates provide some protection through their due diligence, but defaults have occurred. Goldfinch&apos;s Senior Pool typically yields 7-12% APY, while Backers can earn 15-20%+ for providing first-loss capital. The risk profile differs from Maple: Goldfinch&apos;s borrowers are real-world businesses, so risks include currency risk, political risk, and operational risk in emerging markets. However, the diversification across many underlying borrowers in different geographies provides some portfolio effect. Both protocols carry smart contract risk in addition to credit risk.
      </p>

      <h2 id="borrower-types">Borrower Types</h2>
      <p>
        Maple&apos;s borrowers are primarily crypto-native institutions: market makers who need inventory financing, trading firms requiring working capital, and DeFi protocols seeking treasury management loans. These borrowers understand crypto markets but are exposed to crypto market cycles. During the 2022 downturn, several crypto-native borrowers defaulted due to market losses. Goldfinch&apos;s borrowers are real-world financial intermediaries who on-lend to end borrowers in their local markets. Examples include motorcycle financing in Africa, small business lending in Southeast Asia, and fintech lending platforms in Latin America. These borrowers are less correlated with crypto market cycles but face emerging market risks including currency devaluation, political instability, and local economic conditions. The diversification away from crypto-correlated risk is both Goldfinch&apos;s unique value proposition and a source of different, harder-to-assess risks.
      </p>

      <h2 id="track-record">Track Record and Lessons</h2>
      <p>
        The 2022 crypto downturn tested both protocols severely. Maple experienced significant defaults in pools managed by certain delegates, with millions in bad debt from borrowers like Orthogonal Trading. This led to protocol redesign, improved due diligence requirements, and more conservative lending parameters. Maple V2 introduced better risk management tools and transparency. Goldfinch experienced some repayment delays and partial defaults from emerging market borrowers but generally weathered the crypto downturn better because its borrowers were less crypto-correlated. Both protocols have strengthened their risk frameworks since. For investors considering either protocol, understand that yields above overcollateralized DeFi rates reflect real credit risk. Diversify across multiple pools and protocols. Never invest more than you can afford to lose entirely, as the legal recourse for DeFi protocol defaults across international jurisdictions is uncertain and slow.
      </p>
    </LearnPageLayout>
  );
}
