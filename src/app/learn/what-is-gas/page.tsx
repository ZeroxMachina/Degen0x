import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Gas in Crypto? Transaction Fees Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what gas fees are in cryptocurrency, how they work on Ethereum and other blockchains, why gas prices fluctuate, and strategies to minimize transaction costs.",
  keywords: ["gas fees", "crypto gas", "Ethereum gas", "transaction fees", "gwei", "gas optimization"],
};

export default function WhatIsGasPage() {
  return (
    <LearnPageLayout
      title="What Is Gas in Crypto? Transaction Fees Explained"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="8 min"
      intro="Gas is the unit of measurement for the computational effort required to execute transactions and smart contract operations on a blockchain. On Ethereum, every operation — from a simple ETH transfer to a complex DeFi interaction — requires gas, which is paid in the network's native currency. Understanding gas is essential for managing transaction costs and timing your blockchain interactions effectively."
      toc={[
        { id: "what-is-gas", title: "what-is-gas", level: 2 },
        { id: "understanding-gas", title: "Understanding Gas", level: 2 },
        { id: "how-gas-works", title: "how-gas-works", level: 2 },
        { id: "how-gas-fees-work", title: "How Gas Fees Work", level: 2 },
        { id: "eip-1559", title: "eip-1559", level: 2 },
        { id: "eip-1559-and-fee-markets", title: "EIP-1559 and Fee Markets", level: 2 },
        { id: "gas-on-other-chains", title: "gas-on-other-chains", level: 2 },
        { id: "gas-on-other-blockchains", title: "Gas on Other Blockchains", level: 2 },
        { id: "reducing-gas", title: "reducing-gas", level: 2 },
        { id: "strategies-to-reduce-gas-costs", title: "Strategies to Reduce Gas Costs", level: 2 },
        { id: "gas-future", title: "gas-future", level: 2 },
        { id: "the-future-of-gas-fees", title: "The Future of Gas Fees", level: 2 }
      ]}
      faqs={[
        {
          question: "Why are Ethereum gas fees so high?",
          answer: "Ethereum gas fees are high during periods of heavy network usage because block space is limited and users compete by offering higher fees to get their transactions included faster. Complex smart contract interactions require more computational steps and therefore more gas. Layer 2 solutions dramatically reduce costs by processing transactions off-chain.",
        },
        {
          question: "What is gwei?",
          answer: "Gwei is a denomination of ETH equal to 0.000000001 ETH (one billionth). Gas prices are typically quoted in gwei. A transaction might cost 20 gwei per unit of gas, and a simple ETH transfer uses 21,000 gas units, resulting in a total fee of 420,000 gwei (0.00042 ETH).",
        },
        {
          question: "Do all blockchains have gas fees?",
          answer: "Most blockchains charge transaction fees, though they may use different terminology and pricing models. Solana charges very low fees denominated in SOL, Bitcoin charges fees based on transaction data size, and some newer chains offer feeless or gasless transactions subsidized by other mechanisms.",
        },
        {
          question: "What happens if I set gas too low?",
          answer: "If your gas price is too low, your transaction may sit in the mempool pending for hours or indefinitely because miners/validators prioritize higher-paying transactions. If you set the gas limit too low, the transaction will fail (revert) and you'll lose the gas fee without the transaction being completed.",
        },
      ]}
      relatedArticles={[
        { title: "How to Avoid Gas Fees", href: "/learn/how-to-avoid-gas-fees", category: "Learn" },
        { title: "What Is Layer 2?", href: "/learn/what-is-layer-2", category: "Learn" },
        { title: "Gwei Glossary", href: "/learn/glossary/gwei", category: "Learn" },
        { title: "Gas Limit Glossary", href: "/learn/glossary/gas-limit", category: "Learn" },
      ]}
    >
      <section id="what-is-gas">
        <h2>Understanding Gas</h2>
        <p>
          Gas in blockchain terminology refers to the fee required to perform any computation on the network. Just as a car needs gasoline to run, blockchain transactions need gas to be processed. Each computational operation — storing data, transferring tokens, interacting with smart contracts — has a specific gas cost reflecting its complexity. A simple ETH transfer costs 21,000 gas units, while a Uniswap swap might cost 150,000-300,000 gas units.
        </p>
        <p>
          Gas serves two critical purposes. First, it compensates validators for the computational resources they expend processing and validating transactions. Second, it prevents spam attacks — if transactions were free, attackers could flood the network with meaningless transactions, degrading performance for everyone. By attaching a cost to every operation, gas ensures that block space is allocated to those who value it most.
        </p>
        <p>
          The total cost of a transaction is calculated by multiplying the gas used by the gas price. Gas price is denominated in gwei on Ethereum (1 gwei = 0.000000001 ETH) and fluctuates based on network demand. During peak congestion, gas prices can spike dramatically, making even simple transactions cost tens or hundreds of dollars. During quiet periods, the same transaction might cost only a few cents.
        </p>
      </section>

      <section id="how-gas-works">
        <h2>How Gas Fees Work</h2>
        <p>
          Every Ethereum transaction specifies two gas-related parameters: the gas limit and the gas price. The gas limit is the maximum amount of gas units the transaction is allowed to consume — setting this too low causes the transaction to fail, while setting it too high simply returns the unused gas. The gas price is how much the user is willing to pay per unit of gas. Wallet software typically estimates both values automatically based on current network conditions.
        </p>
        <p>
          The Ethereum Virtual Machine assigns a specific gas cost to each opcode (basic operation). Addition costs 3 gas, while storing a 256-bit value costs 20,000 gas. Reading from storage costs 2,100 gas. These costs are carefully calibrated to reflect the actual computational and storage resources each operation requires. Complex smart contract interactions that involve multiple reads, writes, and calculations naturally consume more gas than simple transfers.
        </p>
      </section>

      <section id="eip-1559">
        <h2>EIP-1559 and Fee Markets</h2>
        <p>
          In August 2021, Ethereum implemented EIP-1559, which fundamentally changed how gas fees work. Instead of a simple auction where users bid gas prices, transactions now include a base fee determined algorithmically by the protocol based on network congestion, plus an optional priority fee (tip) to incentivize validators. The base fee adjusts automatically — doubling when blocks are full and decreasing when they are empty — creating a more predictable fee market.
        </p>
        <p>
          The most significant innovation of EIP-1559 is that the base fee is burned (permanently destroyed) rather than paid to validators. This creates a deflationary pressure on ETH supply — during periods of high activity, more ETH is burned than is issued through staking rewards, making ETH net deflationary. Validators only receive the priority tip portion of the fee. This mechanism aligns the incentives of the network by connecting ETH value to network usage while still compensating validators for their service.
        </p>
      </section>

      <section id="gas-on-other-chains">
        <h2>Gas on Other Blockchains</h2>
        <p>
          Every blockchain handles transaction fees differently. Bitcoin uses a simpler model where fees are based on transaction data size in bytes rather than computational complexity — larger transactions with more inputs and outputs pay higher fees. Solana charges extremely low fees (fractions of a cent) enabled by its high throughput, making gas cost a non-factor for most users. Layer 2 networks like Arbitrum and Optimism use Ethereum-like gas models but with dramatically lower prices because they batch transactions.
        </p>
        <p>
          Some newer blockchains are experimenting with alternative fee models. Sui separates computation fees from storage fees to better align costs with resource usage. Some chains implement fee delegation where applications can pay gas on behalf of their users, removing a major friction point for onboarding. Account abstraction on Ethereum enables similar functionality, allowing smart contract wallets to sponsor gas or accept fee payment in tokens other than ETH.
        </p>
      </section>

      <section id="reducing-gas">
        <h2>Strategies to Reduce Gas Costs</h2>
        <p>
          The most effective strategy is to use Layer 2 networks for everyday transactions. Arbitrum, Optimism, and Base offer the same functionality as Ethereum mainnet at a fraction of the cost. For operations that must occur on L1, timing transactions during low-congestion periods — typically weekends and early morning hours in US time zones — can significantly reduce costs. Gas tracking tools and browser extensions display real-time gas prices to help you identify optimal timing.
        </p>
        <p>
          Other strategies include batching multiple operations into a single transaction where possible, using protocols that subsidize gas through meta-transactions or account abstraction, setting appropriate gas limits to avoid overpaying, and optimizing token approvals to avoid unlimited approval transactions. For developers, writing gas-efficient smart contracts through careful storage management, function optimization, and efficient data structures directly reduces the cost burden on users.
        </p>
      </section>

      <section id="gas-future">
        <h2>The Future of Gas Fees</h2>
        <p>
          The blockchain industry is converging on a future where gas fees become invisible to most users. Account abstraction enables applications to sponsor gas costs, pay fees in any token, and batch operations for efficiency. Layer 2 solutions continue to drive costs down toward fractions of a cent. Ethereum's danksharding roadmap will dramatically reduce the cost of posting data from L2s, further lowering L2 fees.
        </p>
        <p>
          The vision is a user experience where gas works like bandwidth on the internet — essential infrastructure that operates behind the scenes without requiring direct user interaction or decision-making. While we are not there yet, the rapid progress in L2 scaling, account abstraction, and fee abstraction technologies suggests that gas friction will be largely eliminated for mainstream users within the next few years, removing one of the biggest barriers to blockchain adoption.
        </p>
      </section>
    </LearnPageLayout>
  );
}
