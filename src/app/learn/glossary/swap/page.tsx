import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Swap? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what token swaps are, how they work on decentralized exchanges, and why swapping is fundamental to DeFi.",
};

export default function SwapPage() {
  return (
    <LearnPageLayout
      title="What Is a Swap?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A swap in crypto is the direct exchange of one cryptocurrency for another, typically executed through a decentralized exchange or automated market maker. Unlike traditional exchanges where you place buy/sell orders and wait for a match, DEX swaps are instant: you send one token to a smart contract and receive another token back in a single transaction. Swapping is the most fundamental activity in DeFi."
      toc={[
        { id: "definition", title: "What Is a Swap?", level: 2 },
        { id: "how-it-works", title: "How Swaps Work", level: 2 },
        { id: "dex-aggregators", title: "DEX Aggregators", level: 2 },
        { id: "swap-costs", title: "Swap Costs", level: 2 },
        { id: "why-it-matters", title: "Why Swaps Matter", level: 2 },
      ]}
      faqs={[
        {
          question: "Is swapping different from trading?",
          answer:
            "Swapping and trading achieve the same result — exchanging one asset for another. In crypto, 'swap' usually refers to direct token-for-token exchanges on DEXs using AMMs, while 'trading' often implies order-book-based exchanges (centralized or decentralized). Swaps are simpler: you specify what you have and what you want, and the protocol handles the rest.",
        },
        {
          question: "Are swaps taxable?",
          answer:
            "In most jurisdictions, yes. Swapping one cryptocurrency for another is typically treated as a taxable event (selling one asset and buying another). This means you may owe capital gains taxes on any appreciation in the token you swapped away. Tax rules vary by country, so consult a tax professional for your specific situation.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a DEX?", href: "/learn/glossary/dex", category: "Glossary" },
        { title: "What Is an AMM?", href: "/learn/glossary/amm", category: "Glossary" },
        { title: "What Is Slippage?", href: "/learn/glossary/slippage", category: "Glossary" },
        { title: "What Is Gas?", href: "/learn/glossary/gas", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Swap?</h2>
      <p>
        A swap is an instant exchange of one token for another using a smart contract. You connect your wallet to a DEX like Uniswap, select the tokens you want to trade, specify the amount, and confirm the transaction. The smart contract takes your input tokens, interacts with a liquidity pool, and sends you the output tokens — all in a single atomic transaction. If any step fails, the entire swap reverts.
      </p>

      <h2 id="how-it-works">How Swaps Work</h2>
      <p>
        When you swap on an AMM-based DEX, your tokens are sent to a liquidity pool smart contract. The AMM algorithm calculates how many output tokens you receive based on the pool&apos;s reserves and the mathematical formula it uses. The pool&apos;s token ratios shift, changing the price for subsequent swaps. A small fee (typically 0.3%) is deducted and added to the pool as earnings for liquidity providers.
      </p>

      <h2 id="dex-aggregators">DEX Aggregators</h2>
      <p>
        DEX aggregators like 1inch, Paraswap, and Jupiter route your swap across multiple liquidity pools and DEXs to find the best possible price. Instead of swapping through a single pool, the aggregator may split your trade across several pools or route it through intermediate tokens to minimize price impact and slippage. Using an aggregator typically results in better execution than trading on a single DEX.
      </p>

      <h2 id="swap-costs">Swap Costs</h2>
      <p>
        The total cost of a swap includes the trading fee (paid to liquidity providers), gas fees (paid to the network for processing the transaction), and slippage (the price impact of your trade). On Ethereum mainnet, gas fees for a swap can exceed $10 during congestion. Layer 2 networks and alternative chains offer swaps for fractions of a cent. Understanding all three cost components is essential for evaluating whether a swap is worthwhile.
      </p>

      <h2 id="why-it-matters">Why Swaps Matter</h2>
      <p>
        Swapping is the foundational activity of decentralized finance. It enables permissionless token exchange without intermediaries, KYC requirements, or centralized order books. The simplicity and accessibility of token swaps opened finance to anyone with a wallet and an internet connection. Swaps also power more complex DeFi strategies: yield farming, arbitrage, and portfolio rebalancing all depend on efficient token exchange.
      </p>
    </LearnPageLayout>
  );
}
