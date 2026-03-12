import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Gwei? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what gwei is, how Ethereum denominations work, and why gwei is the standard unit for measuring gas prices.",
};

export default function GweiPage() {
  return (
    <LearnPageLayout
      title="What Is Gwei?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="Gwei is a denomination of Ether (ETH), where 1 gwei equals 0.000000001 ETH (one billionth of an ETH). It is the standard unit for expressing gas prices on the Ethereum network. The name comes from 'giga-wei,' with wei being the smallest possible unit of ETH. When someone says gas is '30 gwei,' they mean each unit of gas costs 0.00000003 ETH."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-gwei", title: "What Is Gwei?", level: 2 },
        { id: "eth-denominations", title: "eth-denominations", level: 2 },
        { id: "eth-denominations", title: "ETH Denominations", level: 2 },
        { id: "gas-prices", title: "gas-prices", level: 2 },
        { id: "gwei-and-gas-prices", title: "Gwei and Gas Prices", level: 2 },
        { id: "calculating-fees", title: "calculating-fees", level: 2 },
        { id: "calculating-transaction-fees", title: "Calculating Transaction Fees", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-gwei-matters", title: "Why Gwei Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "Why not just use ETH to measure gas prices?",
          answer:
            "Gas prices in ETH would be extremely small numbers like 0.00000003 ETH, which is hard to read and compare. Using gwei makes the numbers manageable — 30 gwei is much easier to work with than 0.00000003 ETH. It is similar to how we use cents instead of fractions of a dollar for small amounts.",
        },
        {
          question: "What is a typical gas price in gwei?",
          answer:
            "Gas prices vary based on network demand. During quiet periods, gas might be 5-15 gwei. Normal activity ranges from 20-50 gwei. During peak demand (popular NFT mints, market crashes), gas can spike to hundreds or even thousands of gwei. Layer-2 solutions typically have much lower effective gas costs.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Gas?", href: "/learn/glossary/gas", category: "Glossary" },
        { title: "What Is the EVM?", href: "/learn/glossary/ethereum-virtual-machine", category: "Glossary" },
        { title: "What Is a Satoshi?", href: "/learn/glossary/satoshi", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Gwei?</h2>
      <p>
        Gwei (pronounced &quot;gee-way&quot;) is a unit of measurement in the Ethereum ecosystem equal to one billion wei, or 0.000000001 ETH. Wei is the smallest denomination of ETH, named after Wei Dai, a cryptography pioneer. Gwei is also sometimes called &quot;nanoether&quot; or &quot;shannon.&quot; It has become the standard unit for discussing and comparing gas prices across the Ethereum network.
      </p>

      <h2 id="eth-denominations">ETH Denominations</h2>
      <p>
        Like traditional currencies have cents and dollars, ETH has multiple denominations. The smallest is wei (1 ETH = 10^18 wei). Gwei sits in the middle at 10^9 wei. Other denominations exist (kwei, mwei, microether, milliether) but are rarely used. In practice, only ETH, gwei, and occasionally wei are referenced in everyday crypto discussions and tooling.
      </p>

      <h2 id="gas-prices">Gwei and Gas Prices</h2>
      <p>
        When you send a transaction on Ethereum, you specify how much you are willing to pay per unit of gas in gwei. Post-EIP-1559, this includes a base fee (set by the protocol) and an optional priority fee (tip to validators). Wallet interfaces display gas prices in gwei, and gas tracker tools report current network gas prices in gwei to help users time their transactions for lower costs.
      </p>

      <h2 id="calculating-fees">Calculating Transaction Fees</h2>
      <p>
        The total transaction fee equals gas units used multiplied by the gas price in gwei. For example, a simple ETH transfer uses 21,000 gas. At 30 gwei, the fee is 21,000 x 30 = 630,000 gwei, or 0.00063 ETH. A complex DeFi swap might use 200,000 gas, costing 6,000,000 gwei (0.006 ETH) at the same gas price. Understanding this math helps you estimate costs before transacting.
      </p>

      <h2 id="why-it-matters">Why Gwei Matters</h2>
      <p>
        Gwei is the language of Ethereum transaction costs. Monitoring gas prices in gwei helps users optimize when to transact, saving significant money over time. Developers use gwei to estimate contract deployment and interaction costs. DeFi users track gwei to determine whether a trade is profitable after gas costs. It is a fundamental unit that every Ethereum user encounters regularly.
      </p>
    </LearnPageLayout>
  );
}
