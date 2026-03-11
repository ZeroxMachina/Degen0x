import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Flash Loans in Crypto Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Complete guide to flash loans in DeFi. Learn how flash loans work, their use cases, risks, and how they enable arbitrage and liquidation strategies.",
};

export default function FlashLoanGuidePage() {
  return (
    <LearnPageLayout
      title="Flash Loans in Crypto Explained"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="9 min read"
      intro="Flash loans are one of DeFi's most innovative and unique financial primitives. They allow users to borrow any amount of assets without collateral, as long as the loan is repaid within the same blockchain transaction. If the loan is not repaid, the entire transaction reverts as if it never happened. Flash loans enable sophisticated strategies like arbitrage, collateral swaps, and self-liquidation that are impossible in traditional finance."
      toc={[
        { id: "how-they-work", title: "How Flash Loans Work", level: 2 },
        { id: "use-cases", title: "Flash Loan Use Cases", level: 2 },
        { id: "protocols", title: "Flash Loan Protocols", level: 2 },
        { id: "risks-attacks", title: "Risks and Flash Loan Attacks", level: 2 },
        { id: "getting-started", title: "Getting Started with Flash Loans", level: 2 },
      ]}
      faqs={[
        { question: "What is a flash loan?", answer: "A flash loan is an uncollateralized loan that must be borrowed and repaid within a single blockchain transaction. If the borrower cannot repay the full amount plus fees by the end of the transaction, the entire transaction is reverted by the smart contract, meaning the loan never happened. This atomic nature eliminates default risk for the lender." },
        { question: "Do flash loans require collateral?", answer: "No. Flash loans require zero collateral because the loan must be repaid within the same transaction. The smart contract guarantees that either the full repayment occurs or the entire transaction reverts. This makes flash loans uniquely accessible but requires technical knowledge to execute." },
        { question: "How much do flash loans cost?", answer: "Flash loan fees are typically very small. Aave charges 0.05% to 0.09% of the borrowed amount. Some protocols have offered zero-fee flash loans. The main cost is the gas fee for executing the transaction, which can be significant on Ethereum during high-congestion periods." },
        { question: "Can anyone use flash loans?", answer: "Technically yes, but flash loans require writing or using smart contracts. You cannot execute a flash loan through a standard wallet interface. You need to deploy a contract that calls the flash loan function, performs the desired operations, and repays the loan, all in one transaction. Tools and templates exist to simplify this." },
      ]}
      relatedArticles={[
        { title: "DeFi vs CeFi Lending", href: "/crypto-loans/learn/defi-vs-cefi-lending", category: "Crypto Loans" },
        { title: "Aave vs Compound", href: "/crypto-loans/compare/aave-vs-compound-lending", category: "Crypto Loans" },
        { title: "Lending Pool Mechanics", href: "/defi-lending/learn/lending-pool-mechanics", category: "DeFi Lending" },
      ]}
    >
      <h2 id="how-they-work">How Flash Loans Work</h2>
      <p>
        Flash loans exploit a fundamental property of blockchain transactions: atomicity. Every Ethereum transaction either executes completely or reverts entirely. A flash loan works in three steps within a single transaction. First, the borrower&apos;s smart contract requests a loan from the flash loan provider (like Aave). Second, the contract executes whatever operations it needs with the borrowed funds, such as arbitrage trades, collateral swaps, or liquidations. Third, the contract repays the full loan amount plus the fee back to the provider. If at any point during the transaction the repayment condition cannot be met, the entire transaction reverts. The lender never loses funds because the blockchain enforces atomic execution. This is fundamentally different from traditional lending where default risk exists.
      </p>

      <h2 id="use-cases">Flash Loan Use Cases</h2>
      <p>
        Arbitrage is the most common flash loan use case. If the same token is priced differently on two DEXs, a flash loan can borrow funds, buy on the cheaper exchange, sell on the more expensive one, repay the loan, and pocket the difference, all without any starting capital. Collateral swaps allow users to change their loan collateral on lending platforms without repaying the loan first. You flash-borrow to repay your loan, withdraw your collateral, deposit new collateral, borrow again, and repay the flash loan. Self-liquidation lets users close undercollateralized positions more efficiently than waiting for a third-party liquidator. Debt refinancing between protocols is also common: flash-borrow to repay a loan on one platform and immediately open a new loan on another with better rates.
      </p>

      <h2 id="protocols">Flash Loan Protocols</h2>
      <p>
        Aave is the largest flash loan provider, offering flash loans from its lending pools across multiple networks including Ethereum, Polygon, Arbitrum, and Optimism. Aave V3 charges 0.05% for flash loans. dYdX offers flash loans with zero fees on certain assets, making it attractive for arbitrage. Uniswap V2 and V3 support flash swaps, a variation where you receive tokens first and must return them (or their equivalent value) by the end of the transaction. Balancer offers flash loans from its vault with competitive fees. MakerDAO supports flash minting of DAI, allowing anyone to mint DAI and repay it within the same transaction. Each protocol has different available assets, fees, and integration patterns. Multi-protocol flash loans can chain borrowing across providers for larger amounts or different asset combinations.
      </p>

      <h2 id="risks-attacks">Risks and Flash Loan Attacks</h2>
      <p>
        Flash loans have been used in numerous DeFi exploits. Flash loan attacks typically involve borrowing a large amount to manipulate prices on low-liquidity pools, exploiting protocols that rely on spot prices from DEXs as oracles. The attacker borrows millions, dumps into a pool to crash the price, exploits a protocol that reads the manipulated price, and then repays the loan. Notable flash loan attacks have drained hundreds of millions from DeFi protocols. However, flash loans are tools, not inherently malicious. The vulnerabilities lie in the protocols being exploited, not in the flash loan mechanism itself. Protocols defend against flash loan attacks by using time-weighted average prices (TWAP) instead of spot prices, implementing Chainlink oracles instead of on-chain price feeds, and adding delay mechanisms for price-sensitive operations.
      </p>

      <h2 id="getting-started">Getting Started with Flash Loans</h2>
      <p>
        Building a flash loan requires Solidity development knowledge. Aave provides a FlashLoanReceiverBase contract that you can inherit and implement. Your contract must implement the executeOperation function, which receives the borrowed funds and must ensure repayment before the function ends. For those without coding skills, platforms like Furucombo and DeFi Saver offer visual interfaces for constructing flash loan transactions by combining predefined building blocks. These tools allow you to create collateral swap and debt refinancing strategies without writing code. For developers, extensive tutorials and template repositories exist on GitHub. Start with small amounts on testnets before deploying on mainnet. Flash loan opportunities are highly competitive, and most profitable arbitrage is captured by MEV bots running sophisticated infrastructure.
      </p>
    </LearnPageLayout>
  );
}
