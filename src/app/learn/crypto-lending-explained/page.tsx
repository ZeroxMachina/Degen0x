import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Lending Explained: How to Earn Interest (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn how crypto lending works in DeFi and CeFi, how interest rates are determined, the risks of lending and borrowing crypto, and how to choose a lending platform.",
};

export default function CryptoLendingExplainedPage() {
  return (
    <LearnPageLayout
      title="Crypto Lending Explained: How to Earn Interest"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Crypto lending allows you to earn interest on your cryptocurrency holdings by depositing them into lending protocols, where borrowers pay interest to use your assets as loans. This concept mirrors traditional banking — depositors earn yield, borrowers pay interest — but operates through smart contracts instead of banks. Both decentralized (DeFi) and centralized (CeFi) platforms offer lending services, each with different risk profiles, interest rates, and user experiences."
      toc={[
        { id: "how-it-works", title: "How Crypto Lending Works", level: 2 },
        { id: "defi-lending", title: "DeFi Lending Protocols", level: 2 },
        { id: "cefi-lending", title: "CeFi Lending Platforms", level: 2 },
        { id: "interest-rates", title: "Understanding Interest Rates", level: 2 },
        { id: "risks", title: "Risks and Best Practices", level: 2 },
      ]}
      faqs={[
        {
          question: "How much interest can I earn on crypto lending?",
          answer:
            "Interest rates vary significantly by platform, asset, and market conditions. Stablecoin lending typically yields 2-8% APY on major DeFi protocols. Lending volatile assets like ETH or BTC usually earns less (1-4%) because borrowing demand is lower. Rates fluctuate in real-time based on supply and demand within each lending pool.",
        },
        {
          question: "Do I need collateral to borrow crypto?",
          answer:
            "In DeFi, yes. Most protocols require over-collateralization, meaning you must deposit more value than you borrow (typically 130-200% of the loan value). This protects lenders if the borrower's collateral loses value. Some newer protocols are exploring under-collateralized or uncollateralized lending for institutional borrowers with verified credit.",
        },
        {
          question: "What happens if my collateral drops in value?",
          answer:
            "If your collateral value falls below the protocol's required ratio (called the liquidation threshold), your position is partially or fully liquidated. The protocol automatically sells your collateral to repay the loan plus a liquidation penalty (typically 5-15%). To avoid liquidation, maintain a healthy collateral ratio and add more collateral when prices drop.",
        },
      ]}
      relatedArticles={[
        { title: "What Are Stablecoins?", href: "/learn/what-are-stablecoins", category: "Learn" },
        { title: "What Is Yield Farming?", href: "/learn/what-is-yield-farming", category: "Learn" },
        { title: "Risk Management in Crypto", href: "/learn/risk-management-crypto", category: "Learn" },
        { title: "What Is DeFi?", href: "/learn/what-is-defi", category: "Learn" },
      ]}
    >
      <section id="how-it-works">
        <h2>How Crypto Lending Works</h2>
        <p>
          Crypto lending creates a marketplace connecting lenders (who want to earn yield on idle assets) with borrowers (who want to access capital without selling their holdings). Lenders deposit cryptocurrency into a lending pool and receive interest payments, while borrowers provide collateral and pay interest to access loans. The interest rate is determined by the balance of supply and demand within each lending market.
        </p>
        <p>
          The most common reason to borrow crypto is to access liquidity without triggering a taxable event. If you hold ETH and need dollars, selling the ETH creates a capital gains tax liability. Instead, you can deposit your ETH as collateral and borrow stablecoins, maintaining your ETH exposure while accessing liquid funds. Other borrowing use cases include leveraged trading, short selling, and yield farming strategies that involve borrowing one asset to deploy in higher-yielding opportunities.
        </p>
      </section>

      <section id="defi-lending">
        <h2>DeFi Lending Protocols</h2>
        <p>
          DeFi lending protocols like Aave, Compound, and Spark operate entirely through smart contracts, with no centralized entity controlling deposits or setting rates. When you deposit assets, you receive tokens representing your deposit and accrued interest (aTokens on Aave, cTokens on Compound). These tokens can be transferred, traded, or used in other DeFi protocols, maintaining your exposure while using them productively elsewhere.
        </p>
        <p>
          Borrowing on DeFi protocols is over-collateralized and permissionless. You deposit collateral, choose how much to borrow (up to the protocol's loan-to-value ratio for that asset), and receive the borrowed tokens immediately. There is no credit check, application process, or fixed repayment schedule — you repay when you choose, though interest accrues continuously. If your collateral value drops too low relative to your debt, the protocol automatically liquidates enough collateral to restore a healthy ratio.
        </p>
      </section>

      <section id="cefi-lending">
        <h2>CeFi Lending Platforms</h2>
        <p>
          Centralized lending platforms like Nexo, BlockFi (before its collapse), and Ledn offer a more familiar banking experience. You deposit crypto and earn stated interest rates, often with higher yields than DeFi for certain assets. The platform manages the lending process, finding borrowers and managing risk on your behalf. The user experience is simpler, with no need to manage wallets, gas fees, or complex DeFi interactions.
        </p>
        <p>
          However, CeFi lending carries significant counterparty risk. You are trusting the platform with custody of your assets, and there is no transparent, on-chain proof of how your funds are being used. The collapses of Celsius, Voyager, and BlockFi in 2022 resulted in billions of dollars in customer losses, demonstrating the dangers of opaque CeFi operations. If you choose CeFi lending, prioritize platforms with transparent proof of reserves, regulatory compliance, and conservative risk management practices.
        </p>
      </section>

      <section id="interest-rates">
        <h2>Understanding Interest Rates</h2>
        <p>
          In DeFi, lending rates are determined algorithmically based on the utilization rate of each lending pool — the percentage of deposited funds that are currently borrowed. When utilization is low, rates are low to encourage borrowing. As utilization increases, rates rise to incentivize more deposits and discourage excessive borrowing. Most protocols use a kinked rate model that sharply increases rates above a target utilization (typically 80-90%) to ensure there is always liquidity available for depositors to withdraw.
        </p>
        <p>
          The difference between the supply rate (what lenders earn) and the borrow rate (what borrowers pay) is called the spread, which represents the protocol's margin. Some protocols distribute their governance tokens as additional incentives to lenders and borrowers, effectively subsidizing rates. When evaluating yields, always distinguish between the base rate (from lending alone) and incentivized rate (including token rewards), and consider the sustainability and potential dilution of incentive tokens.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Best Practices</h2>
        <p>
          Smart contract risk is the primary concern in DeFi lending — if the protocol's code has a vulnerability, deposited funds could be lost. Use established protocols with extensive audit histories and track records. Liquidation risk affects borrowers: rapid price drops can trigger liquidation before you can add collateral, and liquidation penalties (5-15%) significantly eat into your capital. Oracle risk exists when price feeds malfunction, potentially causing incorrect liquidations.
        </p>
        <p>
          To lend safely, diversify across multiple protocols and chains to limit exposure to any single smart contract. Keep your borrow health factor well above the liquidation threshold — a factor of 2.0 or higher provides a substantial buffer. Monitor your positions regularly, especially during volatile markets. Prefer lending stablecoins for a lower-risk strategy, or lend volatile assets you plan to hold long-term anyway. Never deposit more than you can afford to lose, and consider DeFi insurance products from providers like Nexus Mutual to protect against smart contract failures.
        </p>
      </section>
    </LearnPageLayout>
  );
}
