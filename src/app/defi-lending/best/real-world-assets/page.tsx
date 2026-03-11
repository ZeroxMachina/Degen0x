import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best RWA DeFi Lending Platforms (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Compare the best DeFi lending platforms for real-world assets (RWA). Earn yields backed by real-economy assets like invoices, real estate, and trade receivables.",
  keywords: ["rwa defi", "real world asset lending", "tokenized assets defi", "rwa yield"],
};

export default function BestRWADefiLending() {
  return (
    <LearnPageLayout
      title="Best DeFi Lending for Real-World Assets"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="10 min"
      intro="Real-world asset (RWA) lending is one of the fastest-growing sectors in DeFi, bringing traditional finance assets like invoices, real estate, and trade receivables on-chain. These platforms offer yields backed by tangible economic activity rather than crypto speculation, providing diversification benefits and potentially more stable returns. This guide covers the leading RWA lending protocols."
      toc={[
        { id: "what-is-rwa", title: "What Is RWA Lending", level: 2 },
        { id: "top-platforms", title: "Top RWA Lending Platforms", level: 2 },
        { id: "yield-comparison", title: "RWA vs Crypto-Native Yields", level: 2 },
        { id: "risks", title: "Unique Risks of RWA Lending", level: 2 },
      ]}
      faqs={[
        { question: "What types of real-world assets can I lend against?", answer: "Common RWA categories include trade invoices, real estate mortgages, consumer credit, revenue-based financing, treasury bills, and corporate bonds. Each has different risk profiles and yield characteristics." },
        { question: "Are RWA yields correlated with crypto markets?", answer: "RWA yields are primarily driven by real-economy factors like interest rates, borrower credit quality, and asset performance. They are generally less correlated with crypto market movements, though DeFi-specific risks still apply." },
      ]}
      relatedArticles={[
        { title: "Real World Asset Lending", href: "/defi-lending/learn/real-world-asset-lending", category: "DeFi Lending" },
        { title: "Centrifuge Review", href: "/defi-lending/reviews/centrifuge", category: "DeFi Lending" },
        { title: "Goldfinch Review", href: "/defi-lending/reviews/goldfinch", category: "DeFi Lending" },
      ]}
    >
      <section id="what-is-rwa">
        <h2>What Is RWA Lending</h2>
        <p>Real-world asset lending in DeFi involves tokenizing off-chain assets and using them as the basis for on-chain lending pools. Asset originators create legal structures (typically special purpose vehicles) to hold the underlying assets, then represent these assets as on-chain tokens that serve as collateral for DeFi lending pools. Investors deposit stablecoins into these pools and earn yields generated from the real-world borrowers' interest payments. This model brings traditional credit markets on-chain, allowing DeFi participants to access yield opportunities that were previously only available to institutional investors and banks.</p>
      </section>
      <section id="top-platforms">
        <h2>Top RWA Lending Platforms</h2>
        <p>Centrifuge is a pioneer in RWA tokenization with tranched pools backed by trade receivables, real estate, and other assets, deeply integrated with MakerDAO. Goldfinch focuses on providing credit to businesses in emerging markets, offering attractive yields from underserved credit markets. Maple Finance has expanded into RWA lending alongside its institutional credit business. Credix operates on Solana, connecting DeFi capital with Latin American fintech lenders. MakerDAO itself is one of the largest RWA participants, with billions in DAI backed by US Treasury bills and other real-world assets through various vault structures.</p>
      </section>
      <section id="yield-comparison">
        <h2>RWA vs Crypto-Native Yields</h2>
        <p>RWA lending yields are typically influenced by traditional interest rate environments and borrower credit quality rather than crypto market dynamics. In high-interest-rate environments, RWA yields can be very competitive, often ranging from 5-12% APY depending on the asset type and risk level. Treasury bill-backed products offer lower but extremely stable yields. Emerging market credit and trade receivables offer higher yields with more risk. The key advantage is diversification: RWA yields tend to move independently of crypto market cycles, providing portfolio stability during crypto downturns.</p>
      </section>
      <section id="risks">
        <h2>Unique Risks of RWA Lending</h2>
        <p>RWA lending introduces risks not present in purely on-chain DeFi. Legal and jurisdictional risk affects the enforceability of claims on underlying assets. Asset valuation risk means the real-world assets may be worth less than estimated. Liquidity risk is significant because RWA positions are generally less liquid than crypto-native lending. Counterparty risk from asset originators requires due diligence on their operational quality and financial health. Regulatory risk exists as the legal framework for tokenized real-world assets continues to evolve. These risks make thorough research and diversification especially important in RWA lending.</p>
      </section>
    </LearnPageLayout>
  );
}
