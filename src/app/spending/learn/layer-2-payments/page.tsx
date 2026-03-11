import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Layer 2 Payments Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Understanding Layer 2 payment solutions in ${CURRENT_YEAR}. Lightning Network, rollups, and sidechains for fast, cheap crypto transactions and everyday spending.`,
  alternates: { canonical: "/spending/learn/layer-2-payments" },
};

const toc = [
  { id: "what-are-l2s", title: "What Are Layer 2 Solutions", level: 2 },
  { id: "lightning-network", title: "Lightning Network", level: 2 },
  { id: "rollups", title: "Rollups for Payments", level: 2 },
  { id: "payment-use-cases", title: "Payment Use Cases", level: 2 },
  { id: "future", title: "The Future of L2 Payments", level: 2 },
];

const faqs = [
  { question: "What is the Lightning Network?", answer: "The Lightning Network is a Layer 2 payment protocol built on top of Bitcoin. It enables instant, near-free transactions by creating payment channels between users. Transactions happen off-chain and are only settled on the Bitcoin blockchain when channels are opened or closed. This makes it practical for small everyday payments like buying coffee." },
  { question: "How cheap are Layer 2 transactions?", answer: "Layer 2 transaction fees are dramatically lower than Layer 1. Lightning Network payments cost less than $0.01 regardless of amount. Optimistic rollups like Arbitrum and Optimism cost $0.05-0.50 per transaction. ZK-rollups are even cheaper. Compare this to Ethereum Layer 1 fees that can exceed $5-20 during congestion." },
  { question: "Are Layer 2 payments secure?", answer: "Layer 2 solutions inherit security from their parent chain. Lightning Network is secured by Bitcoin, and Ethereum rollups are secured by Ethereum. The security model varies: optimistic rollups use fraud proofs with a challenge period, while ZK-rollups use mathematical proofs for instant finality. Both are considered highly secure." },
];

const relatedArticles = [
  { title: "Lightning Network Payments", href: "/spending/learn/lightning-network-payments", category: "Spending" },
  { title: "Stablecoin Payments", href: "/spending/learn/stablecoin-payments", category: "Spending" },
  { title: "Crypto Remittances", href: "/spending/learn/crypto-remittances", category: "Spending" },
];

export default function Layer2PaymentsPage() {
  return (
    <LearnPageLayout
      title="Layer 2 Payments: Fast, Cheap Crypto Transactions"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="8 min"
      intro="Layer 2 solutions are transforming crypto payments by solving the fundamental scalability problem that has limited blockchain adoption for everyday transactions. By processing transactions off the main chain while inheriting its security, Layer 2 networks enable near-instant, sub-cent payments that make crypto practical for everything from coffee purchases to international remittances."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="what-are-l2s">What Are Layer 2 Solutions</h2>
      <p>
        Layer 2 solutions are protocols built on top of existing blockchains (Layer 1) that handle
        transactions off-chain before settling them on the main chain. This architecture increases transaction
        throughput from roughly 7-30 transactions per second on Layer 1 to thousands or even tens of thousands
        on Layer 2. The key categories are payment channels (Lightning Network), optimistic rollups (Arbitrum,
        Optimism), ZK-rollups (zkSync, StarkNet), and sidechains (Polygon PoS).
      </p>

      <h2 id="lightning-network">Lightning Network</h2>
      <p>
        The Lightning Network is Bitcoin&apos;s premier Layer 2 solution for payments. It works by opening payment
        channels between parties where unlimited transactions can occur instantly and nearly free. Channels
        can be routed, so you do not need a direct channel with every recipient. Payments settle in under a
        second with fees typically below one cent. El Salvador&apos;s adoption of Bitcoin as legal tender relies
        heavily on Lightning for everyday transactions. Services like Strike and Wallet of Satoshi make
        Lightning accessible to regular users without technical knowledge.
      </p>

      <h2 id="rollups">Rollups for Payments</h2>
      <p>
        Ethereum rollups like Arbitrum, Optimism, and zkSync process transactions off-chain and post
        compressed data back to Ethereum. This reduces costs by 10-100x while maintaining Ethereum&apos;s security.
        For payments, rollups enable stablecoin transfers (USDC, USDT) at a fraction of mainnet cost. A USDC
        transfer on Ethereum might cost $5-20 in gas, while the same transfer on Arbitrum costs $0.10-0.50.
        ZK-rollups offer the lowest fees and fastest finality, making them ideal for payment applications.
      </p>

      <h2 id="payment-use-cases">Payment Use Cases</h2>
      <p>
        Layer 2s unlock several payment use cases that were impractical on Layer 1. Micropayments under $1
        become viable when fees are sub-cent, enabling pay-per-article content, streaming payments, and
        machine-to-machine transactions. Point-of-sale payments become practical with sub-second confirmation
        times. International remittances benefit from the combination of low fees and fast settlement. Payroll
        in stablecoins on Layer 2 allows employers to pay workers with minimal transaction costs.
      </p>

      <h2 id="future">The Future of L2 Payments</h2>
      <p>
        The Layer 2 payment landscape is evolving rapidly. Cross-chain bridges and interoperability protocols
        are connecting different L2 networks. Account abstraction is simplifying the user experience by
        removing gas fee complexity. Embedded wallets in apps are making L2 payments invisible to end users.
        As fees continue to drop and user experience improves, Layer 2 payments are positioned to make crypto
        a genuine competitor to traditional payment networks for everyday transactions.
      </p>
    </LearnPageLayout>
  );
}
