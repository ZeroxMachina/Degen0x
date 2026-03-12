import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `MakerDAO vs Aave (${CURRENT_YEAR}) | degen0x`,
  description:
    "Compare MakerDAO and Aave lending protocols. Understand the differences between Maker's CDP model and Aave's lending pool approach for DeFi borrowing.",
};

export default function MakerdaoVsAavePage() {
  return (
    <LearnPageLayout
      title="MakerDAO vs Aave"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="9 min read"
      intro="MakerDAO and Aave are both foundational DeFi lending protocols, but they operate on fundamentally different models. MakerDAO allows users to mint DAI stablecoins against crypto collateral through its vault system, while Aave operates a peer-to-pool lending model where users supply and borrow existing assets. Understanding these structural differences is key to choosing the right protocol for your needs."
      toc={[
        { id: "model-differences", title: "model-differences", level: 2 },
        { id: "fundamental-model-differences", title: "Fundamental Model Differences", level: 2 },
        { id: "borrowing-comparison", title: "borrowing-comparison", level: 2 },
        { id: "borrowing-experience", title: "Borrowing Experience", level: 2 },
        { id: "rates-costs", title: "rates-costs", level: 2 },
        { id: "rates-and-costs", title: "Rates and Costs", level: 2 },
        { id: "risk-profiles", title: "risk-profiles", level: 2 },
        { id: "risk-profiles", title: "Risk Profiles", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "best-use-cases-for-each", title: "Best Use Cases for Each", level: 2 }
      ]}
      faqs={[
        { question: "What is the main difference between MakerDAO and Aave?", answer: "MakerDAO lets you mint new DAI stablecoins against collateral (creating new money), while Aave lets you borrow existing assets from liquidity pools supplied by other users. Maker is essentially a decentralized central bank, while Aave is a decentralized lending marketplace." },
        { question: "Which has lower borrowing costs?", answer: "MakerDAO charges a stability fee (interest rate) set by governance, while Aave charges variable or stable rates determined by market supply and demand. Rates vary over time, but Maker's rates tend to be more stable and predictable. Compare current rates for your specific situation." },
        { question: "Can I earn yield on both platforms?", answer: "Aave allows you to earn interest by supplying assets to lending pools. MakerDAO offers the DAI Savings Rate (DSR) where you can deposit DAI to earn yield. You cannot earn interest by simply holding collateral in a Maker vault. For earning opportunities, Aave is more versatile." },
        { question: "Which is safer?", answer: "Both are extensively audited, battle-tested protocols. MakerDAO has the longest track record in DeFi (since 2017). Aave has operated since 2020 without major core contract exploits. MakerDAO's risk is concentrated in DAI stability, while Aave's risk is distributed across multiple asset markets." },
      ]}
      relatedArticles={[
        { title: "Aave vs Compound", href: "/crypto-loans/compare/aave-vs-compound-lending", category: "Crypto Loans" },
        { title: "Spark vs Aave", href: "/crypto-loans/compare/spark-vs-aave", category: "Crypto Loans" },
        { title: "Interest Rate Models", href: "/defi-lending/learn/interest-rate-models", category: "DeFi Lending" },
      ]}
    >
      <h2 id="model-differences">Fundamental Model Differences</h2>
      <p>
        MakerDAO operates as a decentralized credit facility. When you deposit collateral into a Maker Vault, you mint new DAI tokens that did not exist before. The protocol acts as a central bank, creating and destroying money. The DAI supply expands when users borrow and contracts when they repay. This model means Maker does not need depositors to supply lendable assets; it creates the borrowed asset (DAI) from scratch. Aave operates as a peer-to-pool lending marketplace. Lenders deposit assets into liquidity pools, and borrowers draw from these pools against their collateral. No new tokens are created; existing assets are lent from suppliers to borrowers. This model requires a healthy balance of supply and demand. The pool model allows borrowing of many different assets (ETH, WBTC, stablecoins), while Maker only allows minting DAI.
      </p>

      <h2 id="borrowing-comparison">Borrowing Experience</h2>
      <p>
        On MakerDAO, you open a Vault by depositing collateral (ETH, WBTC, and other approved assets). You then generate (mint) DAI against this collateral up to the maximum LTV. The process is one-directional: you can only borrow DAI. To close your position, you repay the DAI (plus accumulated stability fee) and withdraw your collateral. On Aave, you deposit collateral and can borrow any supported asset, not just stablecoins. You might deposit ETH and borrow USDC, or deposit USDC and borrow ETH. This flexibility enables more diverse strategies. Aave also allows rate switching between variable and stable rates and supports flash loans. Maker&apos;s single-asset borrowing is simpler but less flexible. For users who simply need stablecoin liquidity against crypto collateral, both work well. For users who need to borrow specific non-stablecoin assets, Aave is the better choice.
      </p>

      <h2 id="rates-costs">Rates and Costs</h2>
      <p>
        MakerDAO charges a stability fee set by MKR governance votes. This fee acts as the interest rate on DAI borrowed. Stability fees have historically ranged from 0% to 8% depending on market conditions and governance decisions. Changes happen through governance proposals, not automatically. Aave&apos;s rates are algorithmic and adjust continuously based on pool utilization. Variable rates can spike during high-demand periods but also drop when demand is low. Aave also offers a stable rate option that provides some predictability but is typically higher than the variable rate. Both protocols charge liquidation penalties: Maker charges a 13% penalty on liquidated collateral, while Aave charges 5-10% depending on the asset. Gas costs are comparable for both protocols on Ethereum mainnet. The DAI Savings Rate on Maker provides a yield opportunity for DAI holders, funded by stability fee revenue.
      </p>

      <h2 id="risk-profiles">Risk Profiles</h2>
      <p>
        MakerDAO&apos;s primary risk is DAI stability. If DAI loses its peg due to market conditions or governance failures, all participants are affected. The protocol manages this through overcollateralization requirements, liquidation mechanisms, and the MKR token as a backstop of last resort (MKR can be minted and sold to cover protocol shortfalls). Maker has also diversified into real-world asset collateral, introducing credit risk from traditional finance. Aave&apos;s risks are more distributed across its many asset markets. A problem with one asset (oracle failure, liquidity crisis) primarily affects that asset&apos;s market, though contagion is possible. Aave&apos;s Safety Module provides a backstop through staked AAVE tokens. Both protocols face smart contract risk, though extensive audits and years of operation reduce this concern. Oracle risk affects both: incorrect price feeds can trigger improper liquidations or enable exploits.
      </p>

      <h2 id="use-cases">Best Use Cases for Each</h2>
      <p>
        MakerDAO is ideal for users who want to generate stablecoins against crypto collateral for long-term positions. The predictable stability fee and simple model suit users who want to borrow DAI for expenses, investments, or yield strategies without worrying about rate fluctuations. Maker is also valuable for DAI holders who want to earn the DAI Savings Rate. Aave is better for users who need flexibility: borrowing different assets, switching rates, using flash loans, or operating across multiple chains. Aave is the better choice for sophisticated DeFi strategies that require composability with other protocols. Many users use both: minting DAI on Maker for stable, predictable borrowing costs, and using Aave for flexible multi-asset strategies. The protocols are complementary rather than strictly competitive.
      </p>
    </LearnPageLayout>
  );
}
