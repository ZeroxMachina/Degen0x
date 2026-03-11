import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Lightning Network Payments Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn how Lightning Network enables instant, low-cost Bitcoin payments. Understand payment channels, wallets, and how to use Lightning for everyday transactions.",
};

export default function LightningNetworkPaymentsPage() {
  return (
    <LearnPageLayout
      title="Lightning Network Payments Explained"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="11 min"
      intro="The Lightning Network is a second-layer protocol built on top of Bitcoin that enables near-instant payments with fees of less than a cent. By moving transactions off the main blockchain into payment channels, Lightning solves Bitcoin's scalability challenges and makes it practical for everyday purchases like coffee, groceries, and transit. This guide explains how Lightning works, the best wallets to use, and where you can spend with Lightning today."
      toc={[
        { id: "how-lightning-works", title: "How the Lightning Network Works", level: 2 },
        { id: "lightning-wallets", title: "Best Lightning Wallets", level: 2 },
        { id: "making-payments", title: "Making Lightning Payments", level: 2 },
        { id: "where-to-spend", title: "Where to Spend with Lightning", level: 2 },
        { id: "advantages-limitations", title: "Advantages and Limitations", level: 2 },
      ]}
      faqs={[
        { question: "How much does a Lightning payment cost?", answer: "Lightning payments typically cost less than one cent regardless of the amount. Fees are based on a base fee per hop plus a proportional fee. For a typical payment routed through 2-3 nodes the total fee is usually 1-10 satoshis, a fraction of a cent." },
        { question: "Is the Lightning Network safe?", answer: "Lightning uses the same cryptographic security as Bitcoin. Funds in payment channels are secured by multi-signature transactions on the blockchain. Using reputable wallets from established developers minimizes risk. For large amounts, the Bitcoin base layer remains more appropriate." },
        { question: "Do I need to run a Lightning node?", answer: "No, modern wallets handle all technical complexity automatically. Wallets like Phoenix, Breez, and Wallet of Satoshi manage channels and routing for you. Running your own node gives maximum control but is not necessary for everyday use." },
      ]}
      relatedArticles={[
        { title: "How to Spend Bitcoin", href: "/spending/learn/how-to-spend-bitcoin", category: "Spending" },
        { title: "Stablecoin Payments", href: "/spending/learn/stablecoin-payments", category: "Spending" },
        { title: "What Is Bitcoin?", href: "/learn/what-is-bitcoin", category: "Learn" },
      ]}
    >
      <h2 id="how-lightning-works">How the Lightning Network Works</h2>
      <p>The Lightning Network operates through a network of payment channels between users. Two parties open a channel by locking Bitcoin into a multi-signature transaction on the blockchain. Once open, they can make unlimited transactions instantly without touching the blockchain. When done, they close the channel and final balances are settled on-chain. The network effect comes from routing: if Alice has a channel with Bob and Bob with Carol, Alice can pay Carol through Bob. This web of interconnected channels creates a global payment network capable of millions of transactions per second.</p>

      <h2 id="lightning-wallets">Best Lightning Wallets</h2>
      <p>Phoenix Wallet by ACINQ is widely considered the best Lightning wallet for most users with automatic channel management and non-custodial security. Breez combines a Lightning wallet with point-of-sale features and a podcast player with streaming payments. Wallet of Satoshi is the simplest option as a custodial wallet with zero setup, ideal for beginners. Muun offers a unified Bitcoin and Lightning wallet. Zeus allows connecting to your own Lightning node for maximum control. For desktop users, Zap and Electrum both support Lightning.</p>

      <h2 id="making-payments">Making Lightning Payments</h2>
      <p>Making a Lightning payment is as simple as scanning a QR code. The recipient generates a Lightning invoice appearing as a QR code or text string. Scan the invoice with your wallet, verify the amount, and confirm. The transaction settles in under a second. Lightning also supports keysend payments without invoices, and LNURL protocols that simplify the experience. Newer wallets support NFC tap-to-pay for contactless Lightning payments at physical merchants.</p>

      <h2 id="where-to-spend">Where to Spend with Lightning</h2>
      <p>Lightning acceptance is growing rapidly. In El Salvador every merchant is required to accept Bitcoin payments, and Lightning is the primary rail. Bitrefill accepts Lightning for gift cards from thousands of retailers. Strike provides Lightning-based payment rails for remittances and merchant payments. Many Bitcoin-focused businesses, cafes, and restaurants in Bitcoin-friendly cities accept Lightning. Online, Lightning is widely used for tipping content creators, paying for API access, and purchasing digital goods.</p>

      <h2 id="advantages-limitations">Advantages and Limitations</h2>
      <p>Lightning's primary advantages are speed, cost, and scalability. Payments settle in under a second versus 10-60 minutes on-chain. Fees are fractions of a cent versus dollars during busy periods. However, Lightning requires both parties to be online, payment amounts are limited by channel capacity, routing large payments can fail without sufficient liquidity, and the user experience is still less polished than traditional payment apps. Privacy is also a consideration since routing nodes can observe payment flows.</p>
    </LearnPageLayout>
  );
}
