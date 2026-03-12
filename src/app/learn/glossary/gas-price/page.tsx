import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Gas Price? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what gas price means in blockchain, how gas prices are determined, the role of base fees and priority fees, and how to optimize your transaction costs.",
};

export default function GasPricePage() {
  return (
    <LearnPageLayout title="What Is Gas Price?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Gas price is the amount of cryptocurrency you pay per unit of gas consumed in a blockchain transaction. On Ethereum, gas price is denominated in gwei (one billionth of an ETH). Higher gas prices incentivize validators to include your transaction sooner, while lower gas prices mean longer wait times. Gas price fluctuates based on network demand and is the primary variable that determines your total transaction cost."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-gas-price", title: "What Is Gas Price?", level: 2 },
        { id: "base-and-priority", title: "base-and-priority", level: 2 },
        { id: "base-fee-and-priority-fee", title: "Base Fee and Priority Fee", level: 2 },
        { id: "price-fluctuations", title: "price-fluctuations", level: 2 },
        { id: "why-gas-prices-fluctuate", title: "Why Gas Prices Fluctuate", level: 2 },
        { id: "optimizing", title: "optimizing", level: 2 },
        { id: "optimizing-gas-price", title: "Optimizing Gas Price", level: 2 }
      ]}
      faqs={[{ question: "How is the total transaction fee calculated?", answer: "Total fee = gas used × gas price. On post-EIP-1559 Ethereum: total fee = gas used × (base fee + priority fee). The base fee is burned and adjusts automatically based on block utilization. The priority fee (tip) goes to validators. Your wallet calculates this automatically, but understanding the components helps you optimize costs." },
        { question: "When are gas prices lowest?", answer: "Gas prices are typically lowest during weekends and off-peak hours (late night to early morning in US time zones). Network congestion from NFT mints, popular token launches, and market volatility spikes drive prices higher. Gas tracking tools like Etherscan Gas Tracker and GasNow show current and historical gas price data." }]}
      relatedArticles={[{ title: "Gas", href: "/learn/glossary/gas", category: "Glossary" }, { title: "Gas Limit", href: "/learn/glossary/gas-limit", category: "Glossary" }, { title: "Gwei", href: "/learn/glossary/gwei", category: "Glossary" }, { title: "Wei", href: "/learn/glossary/wei", category: "Glossary" }]}
    >
      <h2 id="definition">What Is Gas Price?</h2>
      <p>Gas price is the cost per unit of gas, measured in gwei on Ethereum. It determines how much you pay for each computational step your transaction requires. If gas price is 30 gwei and your transaction uses 21,000 gas, the total fee is 630,000 gwei or 0.00063 ETH. Gas price is market-driven: when many users want transactions processed, they bid up the gas price, and validators prioritize higher-paying transactions.</p>

      <h2 id="base-and-priority">Base Fee and Priority Fee</h2>
      <p>Since EIP-1559, Ethereum gas pricing has two components. The base fee is set algorithmically based on how full the previous block was. If blocks are more than 50% full, the base fee increases; if less than 50% full, it decreases. The base fee is burned, permanently removing ETH from circulation. The priority fee (tip) is paid directly to validators as an incentive to include your transaction. You can adjust the priority fee but not the base fee.</p>

      <h2 id="price-fluctuations">Why Gas Prices Fluctuate</h2>
      <p>Gas prices are driven by supply and demand for block space. Each Ethereum block has a target gas limit, creating finite capacity. When popular events occur, such as trending NFT mints, new token launches, or market crashes with mass liquidations, users compete for limited space by offering higher gas prices. During calm periods, gas prices drop as blocks are not fully utilized. Layer 2 networks offer a permanent solution by moving most transactions off the expensive base layer.</p>

      <h2 id="optimizing">Optimizing Gas Price</h2>
      <p>Use gas price estimation tools in your wallet to select an appropriate fee level. Most wallets offer slow, standard, and fast options based on current network conditions. For non-urgent transactions, selecting a lower gas price and waiting for inclusion is cost-effective. For time-sensitive trades or mints, paying premium gas ensures fast inclusion. Using Layer 2 networks for routine transactions avoids mainnet gas prices entirely, saving 90-99% on fees.</p>
    </LearnPageLayout>
  );
}
