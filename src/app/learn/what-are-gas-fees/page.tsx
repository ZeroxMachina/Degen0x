import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Are Gas Fees and How to Reduce Them (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what gas fees are in crypto, how they are calculated on Ethereum and other blockchains, why they fluctuate, and practical strategies to minimize your transaction costs.",
};

export default function WhatAreGasFeesPage() {
  return (
    <LearnPageLayout
      title="What Are Gas Fees and How to Reduce Them"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="Gas fees are the transaction costs paid to blockchain validators for processing and confirming your transactions. On Ethereum, gas fees are denominated in gwei (a fraction of ETH) and fluctuate based on network demand. High gas fees have been one of the biggest pain points for blockchain users, sometimes making small transactions uneconomical. Understanding how gas works and knowing strategies to reduce costs can save you significant money when interacting with decentralized applications."
      toc={[
        { id: "what-is-gas", title: "what-is-gas", level: 2 },
        { id: "what-is-gas", title: "What Is Gas?", level: 2 },
        { id: "how-calculated", title: "how-calculated", level: 2 },
        { id: "how-gas-fees-are-calculated", title: "How Gas Fees Are Calculated", level: 2 },
        { id: "why-fluctuate", title: "why-fluctuate", level: 2 },
        { id: "why-gas-fees-fluctuate", title: "Why Gas Fees Fluctuate", level: 2 },
        { id: "reduce-fees", title: "reduce-fees", level: 2 },
        { id: "strategies-to-reduce-gas-fees", title: "Strategies to Reduce Gas Fees", level: 2 },
        { id: "other-chains", title: "other-chains", level: 2 },
        { id: "gas-fees-on-other-blockchains", title: "Gas Fees on Other Blockchains", level: 2 }
      ]}
      faqs={[
        {
          question: "What happens if I set my gas too low?",
          answer:
            "If your gas price is too low, your transaction may remain pending in the mempool for an extended period because validators prioritize higher-paying transactions. Eventually, the transaction may be dropped. Most wallets allow you to speed up a pending transaction by resubmitting it with a higher gas price.",
        },
        {
          question: "Do I pay gas fees even if my transaction fails?",
          answer:
            "Yes. Gas fees compensate validators for the computational work of processing your transaction, regardless of whether it succeeds. If a smart contract interaction reverts due to an error, you still pay for the gas consumed up to the point of failure. This is why setting appropriate gas limits and verifying transaction parameters before submitting is important.",
        },
        {
          question: "Why are some transactions more expensive than others?",
          answer:
            "Gas cost depends on the computational complexity of the transaction. A simple ETH transfer costs 21,000 gas units. A token swap on a DEX might cost 150,000-300,000 gas units because it involves multiple smart contract interactions. Complex DeFi operations like providing liquidity or deploying contracts can cost even more.",
        },
      ]}
      relatedArticles={[
        { title: "Layer 1 vs Layer 2", href: "/learn/layer-1-vs-layer-2", category: "Learn" },
        { title: "What Is a DEX?", href: "/learn/what-is-a-dex", category: "Learn" },
        { title: "What Is Blockchain?", href: "/learn/what-is-blockchain", category: "Learn" },
        { title: "MEV Explained", href: "/learn/mev-explained", category: "Learn" },
      ]}
    >
      <section id="what-is-gas">
        <h2>What Is Gas?</h2>
        <p>
          Gas is a unit of measurement for the computational effort required to execute operations on a blockchain. Every operation — from a simple transfer to a complex smart contract interaction — requires a certain amount of gas. The concept is analogous to how a car uses gasoline: the further you drive (the more complex the computation), the more fuel you need. Gas ensures that validators are compensated for the resources they expend and prevents malicious actors from spamming the network with infinite loops or resource-intensive computations.
        </p>
        <p>
          On Ethereum, gas is priced in gwei, where 1 gwei equals 0.000000001 ETH (one billionth of an ETH). The total fee you pay for a transaction is calculated by multiplying the gas used by the gas price. For example, a standard ETH transfer uses 21,000 gas units. If the gas price is 20 gwei, the total fee would be 21,000 multiplied by 20 gwei, equaling 420,000 gwei or 0.00042 ETH.
        </p>
      </section>

      <section id="how-calculated">
        <h2>How Gas Fees Are Calculated</h2>
        <p>
          Since Ethereum's EIP-1559 upgrade in August 2021, gas fees consist of two components: a base fee and a priority tip. The base fee is determined algorithmically by the protocol based on network congestion — it increases when blocks are more than 50% full and decreases when they are less than 50% full. This base fee is burned (permanently removed from circulation), making ETH deflationary during periods of high usage. The priority tip is an optional additional payment that incentivizes validators to include your transaction faster.
        </p>
        <p>
          Each transaction type has a minimum gas requirement. Simple ETH transfers require 21,000 gas units. ERC-20 token transfers typically require 45,000-65,000 gas units. DEX swaps can range from 100,000 to 500,000 gas units depending on the complexity of the route. Smart contract deployments may require millions of gas units. Wallets estimate gas costs before you confirm a transaction, though complex interactions can sometimes use more gas than estimated.
        </p>
      </section>

      <section id="why-fluctuate">
        <h2>Why Gas Fees Fluctuate</h2>
        <p>
          Gas fees are driven by supply and demand. Each Ethereum block has a limited gas capacity (currently targeting 15 million gas per block with a maximum of 30 million). When many users compete to include their transactions in the next block, they bid up the gas price, driving fees higher. During periods of low activity, fees drop because there is less competition for block space.
        </p>
        <p>
          Major events can cause gas fee spikes: popular NFT mints, airdrop claims, token launches, and periods of extreme market volatility all drive surges in transaction volume. During the peak of the 2021 bull market, Ethereum gas fees regularly exceeded $50-100 for a simple swap. Conversely, during quiet market periods, the same transaction might cost less than a dollar. This volatility in transaction costs has been a significant barrier to mainstream adoption.
        </p>
      </section>

      <section id="reduce-fees">
        <h2>Strategies to Reduce Gas Fees</h2>
        <p>
          The most effective strategy is to use Layer 2 networks. Rollups like Arbitrum, Optimism, and Base offer the same DeFi protocols and dApps available on Ethereum mainnet but at a fraction of the gas cost — often less than a cent per transaction. Bridging your assets to an L2 and conducting your activity there can reduce your gas expenses by 90-99% compared to Ethereum mainnet.
        </p>
        <p>
          Timing your transactions can also help. Gas fees are typically lowest during periods of low network activity, such as weekends and early morning hours in US time zones. Gas tracking tools and browser extensions can alert you when fees drop below a target threshold. Batching multiple operations into a single transaction, using protocols that offer gasless or gas-sponsored transactions, and setting your wallet to use a lower priority tip when speed is not critical are additional strategies for minimizing costs.
        </p>
      </section>

      <section id="other-chains">
        <h2>Gas Fees on Other Blockchains</h2>
        <p>
          Different blockchains have vastly different fee structures. Solana transactions typically cost a fraction of a cent, enabled by its high-throughput architecture. BNB Chain, Avalanche, and Polygon offer fees significantly lower than Ethereum mainnet. Some newer chains like Sei and Aptos promise near-zero fees through optimized execution environments. Bitcoin uses a fee market similar to Ethereum's, where fees spike during periods of high demand for block space.
        </p>
        <p>
          When choosing a blockchain for your transactions, consider the trade-off between fees and security. Lower fees often come from higher throughput achieved through more centralized validator sets or different security assumptions. For high-value transactions where security is paramount, paying higher fees on a battle-tested network may be worthwhile. For everyday interactions, lower-fee networks and L2s provide a more cost-effective experience without significantly compromising security for most use cases.
        </p>
      </section>
    </LearnPageLayout>
  );
}
