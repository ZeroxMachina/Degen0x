import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Gas Limit? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what gas limit means in blockchain transactions, how to set it correctly, and what happens when you set it too low or too high.",
};

export default function GasLimitPage() {
  return (
    <LearnPageLayout title="What Is Gas Limit?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Gas limit is the maximum amount of gas units a user is willing to spend on a blockchain transaction. It acts as a safety cap that prevents runaway costs from complex or buggy smart contract interactions. Setting the gas limit correctly is important: too low and your transaction fails (while still consuming gas), too high and you reserve more resources than needed, though unused gas is refunded."
      toc={[{ id: "definition", title: "What Is Gas Limit?", level: 2 }, { id: "how-it-works", title: "How Gas Limit Works", level: 2 }, { id: "setting-gas-limit", title: "Setting the Right Gas Limit", level: 2 }, { id: "common-issues", title: "Common Gas Limit Issues", level: 2 }]}
      faqs={[{ question: "What happens if my gas limit is too low?", answer: "Your transaction will fail with an 'out of gas' error. The blockchain still charges you for the gas consumed up to the point of failure because the computational work was performed. The state changes are reverted, but the fee is not refunded. Always use the recommended gas limit or slightly above." },
        { question: "Do I get refunded for unused gas?", answer: "Yes. If your transaction uses less gas than your gas limit, the unused portion is refunded to your wallet. For example, if you set a gas limit of 100,000 but the transaction only uses 60,000, you are refunded for the 40,000 unused gas units. This is why setting a higher gas limit than necessary is safer than setting it too low." }]}
      relatedArticles={[{ title: "Gas", href: "/learn/glossary/gas", category: "Glossary" }, { title: "Gas Price", href: "/learn/glossary/gas-price", category: "Glossary" }, { title: "Gwei", href: "/learn/glossary/gwei", category: "Glossary" }, { title: "What Are Gas Fees?", href: "/learn/what-are-gas-fees", category: "Learn Crypto" }]}
    >
      <h2 id="definition">What Is Gas Limit?</h2>
      <p>Gas limit defines the maximum number of gas units a transaction can consume. Each EVM operation has a fixed gas cost: a simple ETH transfer always costs 21,000 gas, while a complex DeFi swap might consume 150,000-300,000 gas. The gas limit ensures that if a smart contract has an infinite loop or unexpected behavior, it will terminate when the gas limit is reached rather than running indefinitely and draining your wallet.</p>

      <h2 id="how-it-works">How Gas Limit Works</h2>
      <p>When you submit a transaction, your wallet estimates the gas needed and suggests a gas limit, typically with a small buffer above the estimate. The total maximum fee you could pay is gas limit multiplied by gas price. Validators execute your transaction and charge only for the gas actually used. The transaction is included in a block as long as the total gas of all transactions does not exceed the block gas limit, which caps the total computation per block.</p>

      <h2 id="setting-gas-limit">Setting the Right Gas Limit</h2>
      <p>Most wallets automatically estimate gas limits accurately. For standard transfers, 21,000 is always sufficient. For token transfers, 65,000 is typical. Complex DeFi interactions may need 200,000-500,000. When interacting with new or unverified contracts, increase the suggested limit by 20-30% as a safety margin. Never set an arbitrarily high gas limit thinking you will be charged more, as you only pay for gas actually consumed.</p>

      <h2 id="common-issues">Common Gas Limit Issues</h2>
      <p>The most common issue is the out-of-gas error from setting the limit too low, especially on complex transactions. Some smart contracts have dynamic gas requirements that depend on network state, making static estimates unreliable. Block gas limits also cap how much total computation can fit in a single block, which during congestion means transactions with lower gas prices may be delayed even with correct gas limits. Using gas estimation APIs from providers like Alchemy can help avoid these issues.</p>
    </LearnPageLayout>
  );
}
