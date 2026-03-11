import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Mempool? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what the mempool is, how pending transactions are managed, and why it matters for gas fees and MEV.",
};

export default function MempoolPage() {
  return (
    <LearnPageLayout
      title="What Is a Mempool?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="The mempool (memory pool) is a waiting area where valid but unconfirmed transactions sit before being included in a block. When you submit a transaction to a blockchain, it first enters the mempool of the nodes that receive it. Miners or validators then select transactions from the mempool, typically prioritizing those with higher fees, to include in the next block."
      toc={[
        { id: "definition", title: "What Is the Mempool?", level: 2 },
        { id: "how-it-works", title: "How the Mempool Works", level: 2 },
        { id: "congestion", title: "Mempool Congestion", level: 2 },
        { id: "mev", title: "Mempool and MEV", level: 2 },
        { id: "why-it-matters", title: "Why the Mempool Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "Is there one mempool or many?",
          answer:
            "Each node maintains its own mempool, so technically there are thousands of mempools across the network. They are not perfectly synchronized because transactions propagate through the peer-to-peer network with slight delays. What we call 'the mempool' is an approximation of the aggregate pending transaction pool across all nodes.",
        },
        {
          question: "Can I cancel a transaction in the mempool?",
          answer:
            "On Ethereum, you can attempt to cancel a pending transaction by submitting a new transaction with the same nonce but higher gas price. If the replacement transaction gets included first, the original is invalidated. However, this is not guaranteed, especially if the original transaction has already been picked up by a builder or is close to inclusion.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Gas?", href: "/learn/glossary/gas", category: "Glossary" },
        { title: "What Is a Block?", href: "/learn/glossary/block", category: "Glossary" },
        { title: "What Is a Node?", href: "/learn/glossary/node", category: "Glossary" },
        { title: "What Is a Nonce?", href: "/learn/glossary/nonce", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is the Mempool?</h2>
      <p>
        The mempool is a temporary storage area within each blockchain node where pending transactions wait to be confirmed. When you send a transaction, it is broadcast to the network and enters the mempools of receiving nodes. Each node validates the transaction against protocol rules and, if valid, holds it until a miner or validator selects it for inclusion in a block.
      </p>

      <h2 id="how-it-works">How the Mempool Works</h2>
      <p>
        Transactions in the mempool are ordered by the fees they offer. Higher-fee transactions are generally included sooner because miners and validators are economically incentivized to maximize their revenue. When a block is produced, the selected transactions are removed from the mempool. Transactions that remain may wait for subsequent blocks or eventually expire if they linger too long.
      </p>

      <h2 id="congestion">Mempool Congestion</h2>
      <p>
        When more transactions are submitted than can fit in a block, the mempool grows and a fee market develops. Users must bid higher gas prices to get their transactions included promptly. During peak congestion — popular NFT mints, market crashes, or airdrop claims — mempool backlogs can grow to tens of thousands of transactions, and gas fees spike dramatically as users compete for block space.
      </p>

      <h2 id="mev">Mempool and MEV</h2>
      <p>
        The mempool is the primary hunting ground for MEV (Maximal Extractable Value). Searchers and bots monitor the mempool for profitable opportunities like arbitrage, liquidations, and sandwich attacks. By observing pending transactions before they are confirmed, these actors can front-run trades or insert their own transactions strategically. This has led to the development of private mempools and MEV-protection solutions.
      </p>

      <h2 id="why-it-matters">Why the Mempool Matters</h2>
      <p>
        Understanding the mempool helps you make better decisions about gas pricing and transaction timing. Monitoring mempool size and gas prices lets you choose optimal times to transact. Awareness of MEV risks helps you protect your trades. The mempool is also crucial for understanding blockchain throughput limitations and why scaling solutions are needed to handle growing transaction demand.
      </p>
    </LearnPageLayout>
  );
}
