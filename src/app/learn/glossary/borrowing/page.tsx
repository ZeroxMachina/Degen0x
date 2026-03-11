import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Borrowing in DeFi? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what borrowing means in DeFi, how to borrow against crypto collateral, the costs involved, and strategies for using DeFi loans effectively.",
};

export default function BorrowingPage() {
  return (
    <LearnPageLayout title="What Is Borrowing?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Borrowing in DeFi allows users to take loans against their cryptocurrency collateral without selling their holdings. By depositing assets like ETH or BTC as collateral, you can borrow stablecoins or other tokens for expenses, trading, or yield strategies while maintaining your crypto exposure. DeFi borrowing is permissionless, instant, and available 24/7, making it a powerful tool for capital management."
      toc={[{ id: "definition", title: "What Is Borrowing?", level: 2 }, { id: "how-borrowing-works", title: "How DeFi Borrowing Works", level: 2 }, { id: "borrowing-costs", title: "Borrowing Costs", level: 2 }, { id: "strategies", title: "Borrowing Strategies", level: 2 }]}
      faqs={[{ question: "Why would I borrow instead of selling?", answer: "Borrowing lets you access liquidity without triggering a taxable event (selling crypto). You maintain exposure to potential price appreciation. If ETH doubles while you have a loan, you still benefit. Borrowing is useful for covering expenses, creating leverage, or accessing different tokens without exiting your positions." },
        { question: "What happens if I cannot repay my loan?", answer: "DeFi loans have no repayment deadline. However, if your collateral value drops below the liquidation threshold, your collateral will be automatically sold to repay the debt. You keep the borrowed assets but lose some or all of your collateral. There are no credit score impacts since DeFi borrowing is anonymous." }]}
      relatedArticles={[{ title: "Lending Protocol", href: "/learn/glossary/lending-protocol", category: "Glossary" }, { title: "Collateralization", href: "/learn/glossary/collateralization", category: "Glossary" }, { title: "Liquidation", href: "/learn/glossary/liquidation", category: "Glossary" }, { title: "Margin Call", href: "/learn/glossary/margin-call", category: "Glossary" }]}
    >
      <h2 id="definition">What Is Borrowing?</h2>
      <p>Borrowing in DeFi is the act of taking a loan from a lending protocol by depositing cryptocurrency as collateral. The process is fully automated by smart contracts: deposit collateral, receive borrowed assets instantly, and repay whenever you choose. There are no credit checks, approval processes, or fixed terms. Interest accrues continuously on the borrowed amount, and the loan remains open until you repay or your position is liquidated.</p>

      <h2 id="how-borrowing-works">How DeFi Borrowing Works</h2>
      <p>To borrow, connect your wallet to a lending protocol, deposit collateral, and select the asset and amount you want to borrow. The protocol calculates your health factor based on collateral value, borrowed amount, and the asset&apos;s risk parameters. As long as your health factor remains above 1.0, your position is safe. If the value of your collateral drops or your debt grows (from accrued interest), your health factor decreases toward liquidation territory.</p>

      <h2 id="borrowing-costs">Borrowing Costs</h2>
      <p>Borrowing costs include the variable interest rate (which changes based on pool utilization), any origination fees, and gas costs for transactions. Interest rates can range from under 1% for low-demand assets to over 20% for high-demand stablecoins during volatile periods. Some protocols offer stable rate borrowing that locks in a fixed rate, though it is typically higher than the variable rate. Always monitor your borrowing rate as it can change rapidly.</p>

      <h2 id="strategies">Borrowing Strategies</h2>
      <p>Leveraged long positions involve depositing ETH, borrowing stablecoins, buying more ETH, and repeating. This amplifies gains but also losses. Carry trade strategies borrow low-rate assets and deposit them into higher-yield opportunities. Tax optimization uses borrowing to access liquidity without triggering capital gains. Hedging involves borrowing assets you expect to decline, selling them, and repaying later at a lower price. Each strategy has distinct risk profiles that must be carefully managed.</p>
    </LearnPageLayout>
  );
}
