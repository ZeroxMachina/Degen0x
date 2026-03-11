import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Dust in Crypto? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what dust means in cryptocurrency, how dust attacks work, why small balances accumulate, and how to handle dust in your crypto wallet.",
};

export default function DustPage() {
  return (
    <LearnPageLayout title="What Is Dust?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Dust refers to tiny amounts of cryptocurrency that are too small to be economically spent because the transaction fee would exceed the value of the tokens. These small balances accumulate in wallets from rounding errors, partial trades, airdrops, and deliberate dust attacks. While dust itself has negligible value, it can be used maliciously to track wallet activity and potentially compromise privacy."
      toc={[{ id: "definition", title: "What Is Dust?", level: 2 }, { id: "how-dust-accumulates", title: "How Dust Accumulates", level: 2 }, { id: "dust-attacks", title: "Dust Attacks Explained", level: 2 }, { id: "managing-dust", title: "Managing Dust", level: 2 }]}
      faqs={[{ question: "Should I worry about dust in my wallet?", answer: "Small dust balances from normal trading activity are harmless. However, if you receive unexpected tiny token amounts from unknown sources, be cautious. Do not try to swap or interact with unknown dust tokens, as they may trigger malicious smart contracts. Simply ignore them." },
        { question: "Can I convert dust to usable amounts?", answer: "Some centralized exchanges offer dust conversion features that let you consolidate small balances into a single token like BTC or the exchange's native token. On-chain, consolidating dust is usually not economical because the gas fees exceed the dust value. Some DEX aggregators have minimum trade thresholds that prevent dust swaps." }]}
      relatedArticles={[{ title: "Whale", href: "/learn/glossary/whale", category: "Glossary" }, { title: "Gas", href: "/learn/glossary/gas", category: "Glossary" }, { title: "Common Crypto Scams", href: "/learn/common-crypto-scams", category: "Learn Crypto" }, { title: "Wei", href: "/learn/glossary/wei", category: "Glossary" }]}
    >
      <h2 id="definition">What Is Dust?</h2>
      <p>Dust is a cryptocurrency balance so small that it cannot be economically transacted. The exact threshold depends on the blockchain and current gas prices. On Ethereum, any ERC-20 token balance worth less than the gas cost to transfer it is effectively dust. On Bitcoin, the dust limit is defined by the protocol as outputs smaller than the cost to spend them. Dust clutters wallet interfaces and represents stranded value that cannot be practically accessed.</p>

      <h2 id="how-dust-accumulates">How Dust Accumulates</h2>
      <p>Dust accumulates through several mechanisms: rounding during token swaps leaves fractional remainders, partial order fills on exchanges create small leftover balances, failed transactions consume gas but may leave partial token amounts, and airdrops of low-value tokens deposit small amounts across many wallets. Over time, active crypto users accumulate dust across multiple tokens and chains that individually has no practical value.</p>

      <h2 id="dust-attacks">Dust Attacks Explained</h2>
      <p>A dust attack involves sending tiny amounts of cryptocurrency to many wallet addresses. The attacker then monitors how the dust is spent to trace wallet activity patterns and potentially link multiple addresses to a single user. This technique threatens user privacy by creating connections between otherwise unrelated wallets. Some attacks also use dust tokens with malicious smart contract logic that triggers when the user attempts to interact with them.</p>

      <h2 id="managing-dust">Managing Dust</h2>
      <p>The best approach to dust from unknown sources is to simply ignore it. Do not try to swap, transfer, or interact with unknown tokens in your wallet. For dust from your own trading activity, centralized exchanges offer conversion features. On-chain, wait for low gas periods or use chains with minimal fees to consolidate small balances. Some wallet interfaces allow you to hide dust tokens to keep your portfolio view clean.</p>
    </LearnPageLayout>
  );
}
