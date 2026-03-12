import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Gas? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what gas fees are in blockchain, how they work on Ethereum, and why they are essential for network operation.",
};

export default function GasPage() {
  return (
    <LearnPageLayout
      title="What Is Gas?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Gas is a unit of measurement for the computational effort required to execute operations on a blockchain, most commonly associated with Ethereum. Every transaction and smart contract interaction requires gas, which is paid in the network's native token. Gas fees compensate validators for processing transactions and protect the network from spam by making computation costly."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-gas", title: "What Is Gas?", level: 2 },
        { id: "how-gas-works", title: "how-gas-works", level: 2 },
        { id: "how-gas-works", title: "How Gas Works", level: 2 },
        { id: "eip-1559", title: "eip-1559", level: 2 },
        { id: "eip-1559-and-fee-markets", title: "EIP-1559 and Fee Markets", level: 2 },
        { id: "gas-optimization", title: "gas-optimization", level: 2 },
        { id: "optimizing-gas-costs", title: "Optimizing Gas Costs", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-gas-matters", title: "Why Gas Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "Why are gas fees sometimes very high?",
          answer:
            "Gas fees spike when network demand exceeds capacity. During popular NFT mints, DeFi farming events, or market crashes with mass selling, many users compete for limited block space. This bidding war drives up gas prices. Layer-2 solutions and alternative blockchains exist partly to address this scalability limitation.",
        },
        {
          question: "Do I lose gas fees if my transaction fails?",
          answer:
            "Yes. Gas fees are paid for the computational work performed, regardless of the transaction outcome. If your transaction runs out of gas or encounters an error, the state changes revert but the gas consumed up to that point is still charged. Setting an appropriate gas limit helps minimize losses from failed transactions.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Gwei?", href: "/learn/glossary/gwei", category: "Glossary" },
        { title: "What Is the EVM?", href: "/learn/glossary/ethereum-virtual-machine", category: "Glossary" },
        { title: "What Is Layer 2?", href: "/learn/glossary/layer-2", category: "Glossary" },
        { title: "What Is a Smart Contract?", href: "/learn/glossary/smart-contract", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Gas?</h2>
      <p>
        Gas is the fee mechanism used by Ethereum and many other blockchains to price computational resources. Just as a car needs gasoline to run, Ethereum transactions need gas to execute. Each operation in the EVM has a fixed gas cost: a simple transfer costs 21,000 gas, while complex smart contract interactions can consume millions of gas units. The total fee is gas used multiplied by the gas price.
      </p>

      <h2 id="how-gas-works">How Gas Works</h2>
      <p>
        When you submit a transaction, you specify a gas limit (maximum gas you are willing to consume) and a gas price (how much you will pay per unit of gas). Validators prioritize transactions with higher gas prices. If your transaction requires less gas than your limit, you are refunded the difference. If it requires more, the transaction fails but you still pay for the gas consumed.
      </p>

      <h2 id="eip-1559">EIP-1559 and Fee Markets</h2>
      <p>
        Ethereum&apos;s EIP-1559 upgrade (August 2021) reformed the fee market. Instead of a simple auction, each block has a base fee that adjusts automatically based on demand. Users pay the base fee (which is burned, permanently removing ETH from circulation) plus an optional priority fee (tip) to incentivize validators. This makes fees more predictable and adds deflationary pressure to ETH supply.
      </p>

      <h2 id="gas-optimization">Optimizing Gas Costs</h2>
      <p>
        Users can reduce gas costs by transacting during periods of low network activity (typically weekends and off-peak hours). Batching multiple operations into single transactions saves gas. Using layer-2 solutions like Arbitrum or Optimism can reduce fees by 10-100x. Developers can optimize smart contracts to use less gas through efficient storage patterns and minimal on-chain data.
      </p>

      <h2 id="why-it-matters">Why Gas Matters</h2>
      <p>
        Gas is fundamental to blockchain economics. It prevents denial-of-service attacks by making spam prohibitively expensive. It creates a market for block space that reflects real demand. It compensates the validators who secure the network. And with EIP-1559, gas fees directly affect ETH supply dynamics. Understanding gas is essential for anyone interacting with Ethereum or EVM-compatible chains.
      </p>
    </LearnPageLayout>
  );
}
