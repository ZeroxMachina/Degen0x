import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bridge Transaction Taxes (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understand how cross-chain bridge transactions are taxed. Learn about taxable events, cost basis tracking, and reporting requirements for bridging crypto assets.",
  keywords: ["bridge transaction taxes", "cross-chain taxes", "crypto bridge tax", "bridging crypto taxes"],
};

export default function BridgeTransactionTaxesPage() {
  return (
    <LearnPageLayout
      title="Bridge Transaction Taxes"
      categoryName="Taxes"
      categorySlug="taxes"
      readTime="8 min"
      intro="Cross-chain bridges allow users to move crypto assets between different blockchains, but the tax treatment of these transfers is not always straightforward. Depending on how a bridge operates, the transaction may or may not trigger a taxable event. Some bridges use lock-and-mint mechanisms that create a new token on the destination chain, while others use liquidity pools that swap assets. Understanding the distinction is critical for accurate crypto tax reporting."
      toc={[
        { id: "how-bridges-work", title: "how-bridges-work", level: 2 },
        { id: "how-bridges-work-for-tax-purposes", title: "How Bridges Work for Tax Purposes", level: 2 },
        { id: "taxable-vs-nontaxable", title: "taxable-vs-nontaxable", level: 2 },
        { id: "taxable-vs-non-taxable-bridges", title: "Taxable vs Non-Taxable Bridges", level: 2 },
        { id: "cost-basis-tracking", title: "cost-basis-tracking", level: 2 },
        { id: "cost-basis-tracking-across-chains", title: "Cost Basis Tracking Across Chains", level: 2 },
        { id: "reporting-bridge-transactions", title: "reporting-bridge-transactions", level: 2 },
        { id: "reporting-bridge-transactions", title: "Reporting Bridge Transactions", level: 2 }
      ]}
      faqs={[
        { question: "Is bridging crypto a taxable event?", answer: "It depends on the bridge mechanism. If you are simply transferring the same asset to another chain via a lock-and-mint bridge, it is generally treated as a non-taxable transfer, similar to moving crypto between your own wallets. However, if the bridge involves swapping one token for another or uses a liquidity pool, it may be treated as a taxable disposition." },
        { question: "How do I track cost basis when bridging?", answer: "Your cost basis should carry over from the original chain to the destination chain if the bridge is a non-taxable transfer. Track the bridge transaction details including date, amount, and any fees paid. Bridge fees can typically be added to your cost basis. Use crypto tax software that supports multi-chain tracking to automate this process." },
      ]}
      relatedArticles={[
        { title: "DeFi Tax Guide", href: "/taxes/learn/defi-tax-guide", category: "Taxes" },
        { title: "Cost Basis Methods", href: "/taxes/learn/cost-basis-methods", category: "Taxes" },
      ]}
    >
      <section id="how-bridges-work">
        <h2>How Bridges Work for Tax Purposes</h2>
        <p>Cross-chain bridges facilitate the movement of assets between different blockchain networks, but they use several distinct mechanisms that carry different tax implications. Lock-and-mint bridges lock your original token on the source chain and mint a wrapped representation on the destination chain. When you bridge back, the wrapped token is burned and the original is unlocked. This mechanism most closely resembles a wallet-to-wallet transfer and is generally considered a non-taxable event. Liquidity pool bridges use pools of assets on both chains to facilitate transfers. You deposit a token on one chain and receive an equivalent token from a pool on the other chain. Since this involves a swap through a liquidity pool, it may be classified as a taxable exchange by some interpretations. Atomic swap bridges directly exchange tokens across chains, which more clearly resembles a taxable trade. Understanding which mechanism your bridge uses is the first step in determining tax treatment.</p>
      </section>
      <section id="taxable-vs-nontaxable">
        <h2>Taxable vs Non-Taxable Bridges</h2>
        <p>The IRS has not issued specific guidance on cross-chain bridge taxation, creating uncertainty that crypto taxpayers must navigate carefully. The most conservative approach treats any bridge transaction that results in receiving a different token identifier as a taxable event. Under this interpretation, bridging ETH to receive WETH on another chain could trigger a disposition. A more permissive interpretation treats bridges as transfers between your own wallets when you maintain effective ownership and the economic substance of the asset does not change. Most crypto tax professionals lean toward treating lock-and-mint bridges as non-taxable transfers, especially when the bridged asset is a direct wrapped version of the original. However, bridges that involve intermediary tokens, fee deductions from the transferred amount, or liquidity pool swaps are more likely to be taxable. Bridge aggregators that route through multiple protocols may combine taxable and non-taxable steps in a single transaction. Document your reasoning for whatever position you take, as consistency and documentation are important if your approach is questioned.</p>
      </section>
      <section id="cost-basis-tracking">
        <h2>Cost Basis Tracking Across Chains</h2>
        <p>Maintaining accurate cost basis records across multiple chains is one of the most challenging aspects of bridge transaction tax compliance. When a bridge is treated as a non-taxable transfer, your original cost basis and acquisition date should carry over to the asset on the destination chain. Bridge fees paid in the native gas token of either chain can be treated as transaction costs and added to the cost basis of the bridged asset or deducted from proceeds when you eventually sell. For taxable bridge transactions, you must recognize gain or loss at the time of the bridge based on the fair market value of the asset received versus your cost basis in the asset sent. The fair market value on the destination chain may differ slightly from the source chain due to liquidity differences. Multi-chain crypto tax software like CryptoTaxCalculator and Koinly can track assets across chains and handle bridge categorization, though manual review is recommended. Keeping a separate spreadsheet that maps bridge transactions with source chain address, destination chain address, amounts, fees, and transaction hashes helps reconcile records when tax software misclassifies bridge transfers as taxable swaps.</p>
      </section>
      <section id="reporting-bridge-transactions">
        <h2>Reporting Bridge Transactions</h2>
        <p>When reporting bridge transactions on your tax return, the classification determines the reporting method. Non-taxable bridge transfers do not need to be reported as dispositions but should be documented in your records to maintain the cost basis trail. If you treat a bridge as a taxable event, report the gain or loss on Form 8949 and Schedule D, using the fair market value of the asset received on the destination chain as your proceeds and your cost basis in the original asset as your cost. For failed bridge transactions where assets are stuck or lost, you may be able to claim a loss, though the timing and method of claiming depends on whether the assets are permanently inaccessible. Some bridges have experienced exploits resulting in user fund losses, which may be deductible as theft or casualty losses under certain conditions. Given the lack of specific IRS guidance on bridge transactions, maintaining detailed records and working with a tax professional who understands cross-chain DeFi activity is strongly recommended for anyone with significant bridge transaction volume.</p>
      </section>
    </LearnPageLayout>
  );
}
