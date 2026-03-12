import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Transaction Fee: What It Means in Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what transaction fees mean in cryptocurrency. Understand gas fees, how blockchain fees are calculated, and strategies to minimize transaction costs.",
  keywords: ["transaction fee", "gas fee", "blockchain fee", "crypto transaction cost"],
};

export default function TransactionFeeGlossaryPage() {
  return (
    <LearnPageLayout
      title="Transaction Fee: What It Means in Crypto"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="5 min"
      intro="A transaction fee in cryptocurrency is the cost paid by users to have their transactions processed and included in a block on the blockchain. These fees compensate validators or miners for the computational resources they expend and help prevent network spam."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "definition", title: "Definition", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-it-works", title: "How It Works", level: 2 },
        { id: "examples", title: "examples", level: 2 },
        { id: "examples-use-cases", title: "Examples & Use Cases", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "Why do crypto transaction fees vary so much?",
          answer:
            "Transaction fees fluctuate based on network congestion. When many users are submitting transactions simultaneously, competition for limited block space drives fees up. During quiet periods, fees drop significantly. Different blockchains also have fundamentally different fee structures based on their architecture and capacity.",
        },
        {
          question: "How can I reduce my transaction fees?",
          answer:
            "You can reduce fees by transacting during low-congestion periods, using Layer 2 networks like Arbitrum or Optimism, batching multiple operations into a single transaction, or using blockchains with inherently lower fees. Gas price trackers can help you identify optimal times to transact.",
        },
      ]}
      relatedArticles={[
        { title: "Scalability", href: "/learn/glossary/scalability", category: "Glossary" },
        { title: "Rollup", href: "/learn/glossary/rollup", category: "Glossary" },
        { title: "How Ethereum Works", href: "/learn/how-ethereum-works", category: "Learn" },
      ]}
    >
      <section id="definition">
        <h2>Definition</h2>
        <p>
          A transaction fee, often called a gas fee on Ethereum and similar networks, is the payment required to process and confirm a transaction on a blockchain. Every action on a blockchain, whether sending tokens, interacting with a smart contract, minting an NFT, or swapping tokens on a DEX, requires computational work from the network's validators or miners. Transaction fees serve multiple purposes: they compensate the validators who invest resources in securing the network, they create an economic barrier against spam attacks that could overwhelm the network with frivolous transactions, and they help prioritize transactions when demand for block space exceeds supply. The fee model varies significantly across different blockchains, with some using auction-based pricing where users bid for inclusion, others using fixed or predictable fee schedules, and some employing hybrid models that combine base fees with priority tips.
        </p>
      </section>
      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>
          On Ethereum, transaction fees are calculated as gas used multiplied by gas price. Gas represents units of computational effort, with simple transfers requiring about 21,000 gas and complex smart contract interactions requiring much more. The gas price has two components since EIP-1559: a base fee that is algorithmically determined by network demand and is burned, and an optional priority fee (tip) that goes to the validator. Users set a maximum fee they are willing to pay, and any unused portion is refunded. On Bitcoin, fees are calculated based on the transaction's data size in bytes rather than computational complexity, since Bitcoin transactions are simpler. On newer blockchains like Solana, fees are extremely low and more predictable because the network has higher throughput and uses a different fee model. Layer 2 networks like Arbitrum and Optimism process transactions with fees that are a fraction of Ethereum mainnet costs while still posting data to Ethereum for security. Users typically see fee estimates in their wallet before confirming a transaction.
        </p>
      </section>
      <section id="examples">
        <h2>Examples & Use Cases</h2>
        <p>
          On Ethereum mainnet, a simple ETH transfer might cost a few dollars during normal conditions but could spike to tens of dollars during peak congestion events like a popular NFT mint or major market movement. Complex DeFi operations involving multiple contract calls can cost significantly more. On Layer 2 networks, the same transactions typically cost only cents. Solana transactions cost fractions of a cent regardless of network activity. Bitcoin transaction fees vary with network demand but are generally between one and a few dollars for standard transfers. The Lightning Network enables Bitcoin micropayments with fees of less than a cent. Some blockchain applications have explored meta-transactions or gasless transactions where the application developer pays the fees on behalf of users, improving the user experience. Account abstraction on Ethereum also enables fee payments in tokens other than ETH, making the fee experience more flexible for end users.
        </p>
      </section>
      <section id="why-it-matters">
        <h2>Why It Matters</h2>
        <p>
          Transaction fees are one of the most important factors affecting blockchain usability and adoption. High fees price out small users and limit the types of applications that are economically viable on a blockchain. When Ethereum fees spike during congestion, activities like small-value DeFi trades, gaming transactions, or micropayments become prohibitively expensive, driving users to cheaper alternatives. Fee dynamics also have significant implications for token economics, as on Ethereum, burned base fees reduce ETH supply, contributing to its potential as a deflationary asset. For validators and miners, transaction fees represent a major revenue stream that incentivizes network security. The ongoing competition among blockchains and Layer 2 solutions to offer the lowest fees while maintaining security represents one of the most active areas of blockchain innovation. Understanding transaction fees helps users optimize their blockchain interactions, choose the right network for their needs, and avoid overpaying for transactions during periods of high congestion.
        </p>
      </section>
    </LearnPageLayout>
  );
}
