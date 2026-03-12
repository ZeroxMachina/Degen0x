import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Flash Loan? Instant DeFi Loans Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what flash loans are, how they enable uncollateralized borrowing in DeFi, legitimate use cases, flash loan attacks, and their impact on the crypto ecosystem.",
  keywords: ["flash loan", "DeFi flash loan", "uncollateralized loan", "flash loan attack", "arbitrage", "Aave flash loan"],
};

export default function WhatIsAFlashLoanPage() {
  return (
    <LearnPageLayout
      title="What Is a Flash Loan?"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="7 min"
      intro="A flash loan is a DeFi innovation that allows users to borrow any amount of cryptocurrency without collateral, as long as the loan is repaid within the same blockchain transaction. If the loan is not repaid by the end of the transaction, the entire operation reverts as if it never happened. Flash loans have enabled novel applications in arbitrage and collateral management while also becoming a tool for sophisticated protocol exploits."
      toc={[
        { id: "how-flash-loans-work", title: "how-flash-loans-work", level: 2 },
        { id: "how-flash-loans-work", title: "How Flash Loans Work", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "legitimate-use-cases", title: "Legitimate Use Cases", level: 2 },
        { id: "flash-loan-attacks", title: "flash-loan-attacks", level: 2 },
        { id: "flash-loan-attacks", title: "Flash Loan Attacks", level: 2 },
        { id: "providers", title: "providers", level: 2 },
        { id: "flash-loan-providers", title: "Flash Loan Providers", level: 2 },
        { id: "impact", title: "impact", level: 2 },
        { id: "impact-on-defi", title: "Impact on DeFi", level: 2 }
      ]}
      faqs={[
        { question: "Do flash loans require collateral?", answer: "No. Flash loans are the only form of uncollateralized borrowing in DeFi. The key constraint is that the loan must be repaid within the same transaction. If repayment fails, the entire transaction reverts, meaning the loan never effectively occurred, which eliminates the lender's risk." },
        { question: "Can anyone use flash loans?", answer: "Flash loans require writing smart contract code or using specialized interfaces that construct the multi-step transaction. They are primarily used by developers and sophisticated DeFi users. Some platforms like Furucombo provide no-code interfaces for common flash loan strategies, making them more accessible." },
        { question: "Are flash loan attacks illegal?", answer: "Flash loan attacks exploit economic vulnerabilities rather than code bugs. Whether they are illegal depends on jurisdiction and the specific circumstances. Many exploits fall into a legal gray area — they follow the protocol's rules exactly as coded, even if the outcome was not intended by the developers." },
      ]}
      relatedArticles={[
        { title: "DeFi Exploit Prevention", href: "/learn/defi-exploit-prevention", category: "Learn" },
        { title: "What Is a Liquidity Pool?", href: "/learn/what-is-a-liquidity-pool", category: "Learn" },
        { title: "What Is Composability?", href: "/learn/what-is-composability", category: "Learn" },
        { title: "Arbitrage Glossary", href: "/learn/glossary/arbitrage", category: "Learn" },
      ]}
    >
      <section id="how-flash-loans-work">
        <h2>How Flash Loans Work</h2>
        <p>
          Flash loans exploit a unique property of blockchain transactions: atomicity. Every blockchain transaction either succeeds completely or fails completely — there is no partial execution. A flash loan works by borrowing tokens at the start of a transaction, using them for any purpose in the middle, and repaying them (with a small fee) at the end. If the repayment step fails for any reason, the entire transaction including the initial borrow is reverted. This means the lending protocol faces zero risk of default, enabling uncollateralized lending of virtually unlimited amounts.
        </p>
        <p>
          A typical flash loan transaction looks like this: (1) borrow 10 million USDC from Aave, (2) use the USDC in a series of trades or operations, (3) repay the 10 million USDC plus a 0.05% fee to Aave. All three steps happen in a single atomic transaction. If step 3 cannot be completed (because the intermediate steps did not generate enough to cover the repayment), the blockchain reverts everything, including step 1 — the borrow never happened, the borrower only loses the transaction gas fee.
        </p>
      </section>

      <section id="use-cases">
        <h2>Legitimate Use Cases</h2>
        <p>
          Arbitrage is the most common legitimate use. A trader spots a price difference between two DEXs — ETH is $3,000 on Uniswap and $3,010 on SushiSwap. They borrow millions of USDC via flash loan, buy ETH on Uniswap, sell on SushiSwap, and repay the loan with profit. This capital-free arbitrage improves market efficiency by equalizing prices across venues.
        </p>
        <p>
          Collateral swaps allow DeFi users to change their loan collateral without closing and reopening positions. Self-liquidation enables borrowers to repay their debt and withdraw collateral in one step, avoiding liquidation penalties. Position migration lets users move between protocols atomically. Each of these operations would require substantial capital without flash loans but can be executed with zero upfront capital using this mechanism. Flash loans democratize access to strategies previously reserved for well-capitalized actors.
        </p>
      </section>

      <section id="flash-loan-attacks">
        <h2>Flash Loan Attacks</h2>
        <p>
          Flash loans have been used in numerous DeFi exploits, often involving oracle manipulation. A typical attack pattern: (1) borrow a large amount via flash loan, (2) use it to manipulate a price oracle — for example, making a massive trade on a low-liquidity DEX that a lending protocol uses as its price source, (3) exploit the manipulated price to borrow or liquidate assets at artificial prices, (4) repay the flash loan and pocket the profit. These attacks do not exploit code bugs — they exploit economic design weaknesses.
        </p>
        <p>
          Flash loan attacks have resulted in hundreds of millions of dollars in losses across the DeFi ecosystem. Notable examples include attacks on bZx, Pancake Bunny, Cream Finance, and numerous smaller protocols. The attacks typically exploit protocols that use spot prices from single DEXs rather than robust, time-weighted oracle solutions. This has driven the industry toward more resilient oracle implementations and better economic security analysis in protocol design.
        </p>
      </section>

      <section id="providers">
        <h2>Flash Loan Providers</h2>
        <p>
          Aave is the largest flash loan provider, offering flash loans from any of its lending pools with a 0.05% fee. Uniswap V3 enables flash swaps, which function similarly by allowing traders to receive tokens before paying for them within the same transaction. dYdX offers flash loans with no fee through its margin trading infrastructure, making it popular for cost-sensitive strategies.
        </p>
        <p>
          Balancer, MakerDAO, and other protocols also support various forms of flash lending. The availability of flash loans across multiple platforms ensures competitive pricing and broad asset coverage. Some DeFi protocols specifically restrict flash loan interactions with their contracts to prevent manipulation, implementing checks that reject transactions originating from flash loan calls.
        </p>
      </section>

      <section id="impact">
        <h2>Impact on DeFi</h2>
        <p>
          Flash loans represent one of DeFi's most unique innovations — a financial instrument that has no parallel in traditional finance because it relies on the atomic execution property of blockchain transactions. They have simultaneously improved market efficiency through capital-free arbitrage and exposed vulnerabilities in protocol designs that assumed attackers would be capital-constrained.
        </p>
        <p>
          The long-term impact has been positive for DeFi security. Flash loan attacks revealed fundamental weaknesses in oracle design and economic security that would have been exploited eventually, even without flash loans (just by well-capitalized attackers). The attacks accelerated the adoption of robust oracle solutions, time-weighted price averages, and formal economic security analysis. Flash loans continue to serve valuable purposes in arbitrage, collateral management, and liquidation efficiency while pushing the ecosystem toward more resilient designs.
        </p>
      </section>
    </LearnPageLayout>
  );
}
