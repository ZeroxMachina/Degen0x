import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Flash Loans Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to DeFi flash loans. Learn how flash loans work, their use cases including arbitrage and liquidations, associated risks, and major protocols offering them.",
  keywords: ["flash loans", "DeFi flash loans", "flash loan explained", "flash loan arbitrage"],
};

export default function FlashLoansExplainedPage() {
  return (
    <LearnPageLayout
      title="Flash Loans Explained"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="10 min read"
      intro="Flash loans are one of the most innovative and uniquely DeFi financial primitives. They allow anyone to borrow any amount of crypto with zero collateral, as long as the loan is repaid within the same blockchain transaction. If the loan is not repaid, the entire transaction reverts as if it never happened. Flash loans have enabled sophisticated arbitrage, efficient liquidations, and collateral swaps, but have also been used in some of the largest DeFi exploits."
      toc={[
        { id: "how-they-work", title: "how-they-work", level: 2 },
        { id: "how-flash-loans-work", title: "How Flash Loans Work", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "legitimate-use-cases", title: "Legitimate Use Cases", level: 2 },
        { id: "flash-loan-attacks", title: "flash-loan-attacks", level: 2 },
        { id: "flash-loan-attacks", title: "Flash Loan Attacks", level: 2 },
        { id: "providers", title: "providers", level: 2 },
        { id: "flash-loan-providers", title: "Flash Loan Providers", level: 2 },
        { id: "building", title: "building", level: 2 },
        { id: "building-with-flash-loans", title: "Building with Flash Loans", level: 2 },
        { id: "future", title: "future", level: 2 },
        { id: "the-future-of-flash-loans", title: "The Future of Flash Loans", level: 2 }
      ]}
      faqs={[
        { question: "Do I need collateral for a flash loan?", answer: "No. Flash loans require zero collateral because the loan must be repaid within the same transaction. If repayment fails, the entire transaction reverts atomically, meaning the lending protocol never actually loses funds." },
        { question: "Can anyone use a flash loan?", answer: "Technically yes, but flash loans require writing smart contract code to execute multi-step transactions within a single block. They are primarily used by developers and sophisticated DeFi users. Some platforms like Furucombo offer no-code flash loan interfaces." },
        { question: "Are flash loans legal?", answer: "Flash loans themselves are a neutral technology. Using them for arbitrage and legitimate DeFi operations is legal. However, using them to exploit protocol vulnerabilities raises legal questions that are still being debated. The technology is legal; specific uses may not be." },
        { question: "How much does a flash loan cost?", answer: "Flash loan fees are typically 0.05-0.09% of the borrowed amount. Aave V3 charges 0.05% for flash loans. Some protocols like dYdX have offered zero-fee flash loans. Gas costs for executing the transaction are additional." },
      ]}
      relatedArticles={[
        { title: "Smart Contract Risks", href: "/defi-lending/learn/smart-contract-risks", category: "DeFi Lending" },
        { title: "What is DeFi Lending", href: "/defi-lending/learn/what-is-defi-lending", category: "DeFi Lending" },
        { title: "DeFi Risks Guide", href: "/defi-lending/learn/defi-risks-guide", category: "DeFi Lending" },
      ]}
    >
      <h2 id="how-they-work">How Flash Loans Work</h2>
      <p>
        Flash loans exploit the atomic nature of blockchain transactions. In a single transaction on Ethereum, multiple operations can be executed sequentially. A flash loan transaction follows this pattern: borrow tokens from a lending pool, execute whatever operations you need (arbitrage, liquidation, collateral swap), repay the loan plus a small fee, and if any step fails or the loan is not fully repaid, the entire transaction reverts and nothing happens. The lending protocol is never at risk because the smart contract enforces repayment within the same transaction. This is only possible on blockchains where transactions are atomic and indivisible.
      </p>

      <h2 id="use-cases">Legitimate Use Cases</h2>
      <p>
        Flash loans enable several valuable DeFi operations. Arbitrage: borrow a large sum to exploit price differences between exchanges and profit from the spread. Liquidation: borrow funds to liquidate undercollateralized positions on lending protocols and earn the liquidation bonus. Collateral swaps: change the collateral backing a loan without closing the position, saving gas and avoiding market impact. Self-liquidation: repay a loan using the collateral without having to source additional capital. Debt refinancing: move a loan from one protocol to another with better rates in a single transaction. These use cases improve market efficiency and benefit the broader DeFi ecosystem.
      </p>

      <h2 id="flash-loan-attacks">Flash Loan Attacks</h2>
      <p>
        Flash loans have been central to numerous DeFi exploits. In flash loan attacks, the borrower manipulates on-chain state within the transaction to exploit vulnerabilities. Common attack vectors include oracle manipulation (using flash-borrowed funds to skew a price oracle, then profiting from the incorrect price), governance attacks (borrowing enough tokens to pass a malicious proposal), and economic exploits (manipulating pool ratios or reward calculations). Notable incidents include attacks on bZx, Harvest Finance, and Pancake Bunny. The key insight is that flash loans do not create vulnerabilities; they amplify existing ones by giving anyone temporary access to massive capital.
      </p>

      <h2 id="providers">Flash Loan Providers</h2>
      <p>
        Aave is the most popular flash loan provider, offering flash loans from its multi-billion dollar lending pools across multiple chains at a 0.05% fee. Uniswap V2 and V3 support flash swaps, which are conceptually similar and allow borrowing any token from a liquidity pool within a single transaction. Balancer offers flash loans from its vault with no fee on the flash loan itself. dYdX provides flash loans on its platform. Maker allows flash minting of DAI. Each provider has different available assets, fees, and integration patterns. The choice depends on which assets you need and which chain you are operating on.
      </p>

      <h2 id="building">Building with Flash Loans</h2>
      <p>
        Building a flash loan transaction requires Solidity programming knowledge. The basic pattern is to create a smart contract that implements the flash loan callback interface, execute your logic within the callback function, and ensure the borrowed amount plus fee is returned before the function completes. Tools like Foundry and Hardhat provide testing frameworks for developing flash loan contracts locally. Platforms like Furucombo and DeFi Saver offer no-code interfaces that package common flash loan operations like collateral swaps and leverage adjustments into user-friendly transactions. For arbitrage bots, flash loans are integrated into MEV strategies using Flashbots or similar infrastructure.
      </p>

      <h2 id="future">The Future of Flash Loans</h2>
      <p>
        Flash loans continue to evolve as DeFi matures. Cross-chain flash loans, enabled by bridges and messaging protocols, could allow borrowing on one chain and executing on another. Flash loan aggregators that source liquidity from multiple providers optimize for the best rates and deepest liquidity. Protocols are also developing better defenses against flash loan attacks through time-weighted average prices, delayed oracles, and multi-block verification. As DeFi becomes more complex with composable protocols layered on top of each other, flash loans will remain a critical tool for maintaining market efficiency and enabling sophisticated financial operations.
      </p>
    </LearnPageLayout>
  );
}
