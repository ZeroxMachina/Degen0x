import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Lending Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "NFT lending allows holders to borrow against their NFTs without selling them, or lend their NFTs to earn yield...",
};

export default function NftLendingGuidePage() {
  return (
    <LearnPageLayout
      title="NFT Lending Guide"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="10 min"
      intro="NFT lending allows holders to borrow against their NFTs without selling them, or lend their NFTs to earn yield. This emerging DeFi category unlocks liquidity from otherwise illiquid NFT holdings."
      toc={[
        { id: "section-1", title: "NFT Lending Overview", level: 2 },
        { id: "section-2", title: "Lending Protocols and Models", level: 2 },
        { id: "section-3", title: "Borrowing Against NFTs", level: 2 },
        { id: "section-4", title: "Risks and Best Practices", level: 2 },
      ]}
      faqs={[
        { question: "How does NFT lending work?", answer: "NFT lending platforms allow holders to use their NFTs as collateral for loans. The NFT is locked in a smart contract, and the borrower receives cryptocurrency. The loan must be repaid with interest to reclaim the NFT, or the lender can claim the collateral." },
        { question: "Can I lose my NFT through lending?", answer: "Yes. If you fail to repay the loan by the deadline or if the NFT's value drops below the liquidation threshold, the lender can claim your NFT. Always understand the terms and maintain adequate collateral ratios." },
      ]}
      relatedArticles={[
        { title: "NFT Complete Guide", href: "/nfts/learn/nft-complete-guide", category: "NFTs" },
        { title: "NFT Valuation Methods", href: "/nfts/learn/nft-valuation-methods", category: "NFTs" },
        { title: "Best Fractional NFTs", href: "/nfts/best/fractional", category: "NFTs" },
      ]}
    >
      <section id="section-1">
        <h2>NFT Lending Overview</h2>
        <p>NFT lending bridges the gap between valuable NFT holdings and liquid capital needs. Holders who believe in the long-term value of their NFTs but need short-term liquidity can borrow against their assets without selling. This mirrors traditional asset-backed lending but operates through smart contracts on the blockchain, enabling permissionless access to capital without credit checks or institutional intermediaries.</p>
        <p>The NFT lending market has grown significantly as blue-chip collection floor prices have established stable value floors. Lenders can earn yield by providing capital to borrowers who collateralize with high-value NFTs. The smart contract handles escrow, interest calculation, and liquidation mechanics automatically, creating a transparent and efficient lending market for digital collectibles and art.</p>
      </section>

      <section id="section-2">
        <h2>Lending Protocols and Models</h2>
        <p>Peer-to-peer lending platforms like NFTfi match individual borrowers with individual lenders who agree on loan terms including amount, interest rate, and duration. This model allows customized terms but requires both parties to agree, which can take time. Peer-to-pool models like BendDAO aggregate lender capital into pools that borrowers can instantly access, providing faster liquidity at standardized terms.</p>
        <p>Each model has trade-offs. Peer-to-peer offers more favorable terms for rare NFTs where custom valuation is needed. Pool-based lending provides instant liquidity but may offer lower loan-to-value ratios and higher interest rates to compensate for automated risk assessment. Hybrid models are emerging that combine pool efficiency with peer-to-peer flexibility for different NFT value tiers and collection categories.</p>
      </section>

      <section id="section-3">
        <h2>Borrowing Against NFTs</h2>
        <p>When borrowing against an NFT, consider the loan-to-value ratio, interest rate, loan duration, and liquidation conditions. Most platforms offer 30-50% of floor price as loan value for established collections. Higher LTV ratios carry greater liquidation risk. Interest rates vary by platform and collection, typically ranging from 10-50% APR depending on the collateral quality and market conditions.</p>
        <p>The borrowing process involves listing your NFT as collateral, receiving loan offers or accessing pool liquidity, and managing the loan through to repayment. Monitor your position regularly as floor price fluctuations can trigger liquidation. Set up alerts for price changes and maintain repayment schedules. Some platforms offer refinancing options to extend terms or adjust amounts based on changing collateral values.</p>
      </section>

      <section id="section-4">
        <h2>Risks and Best Practices</h2>
        <p>Liquidation risk is the primary concern in NFT lending. If the collateral NFT's value drops significantly or you fail to repay on time, you lose the NFT. Smart contract risk exists on the lending platform itself. Market volatility can create cascading liquidations that further depress floor prices, amplifying losses for borrowers across a collection.</p>
        <p>Best practices include borrowing conservatively relative to your NFT's value, maintaining awareness of loan deadlines, setting price alerts for your collateral, and having a repayment plan before borrowing. Only use established, audited lending platforms. Avoid over-leveraging by borrowing against multiple NFTs simultaneously. Treat NFT loans as short-term liquidity tools rather than long-term financing mechanisms for the safest approach.</p>
      </section>
    </LearnPageLayout>
  );
}
