import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bitcoin Lightning Payments Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how Bitcoin Lightning Network payments work. Instant, near-free transactions for everyday spending, tipping, and peer-to-peer transfers.",
  keywords: ["lightning network", "bitcoin lightning", "lightning payments"],
};

export default function BitcoinLightningPaymentsPage() {
  return (
    <LearnPageLayout
      title="Bitcoin Lightning Payments Guide"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="11 min"
      intro="The Lightning Network is Bitcoin's Layer 2 payment protocol that enables instant, near-zero-fee transactions. By processing payments off-chain through a network of bidirectional payment channels, Lightning makes Bitcoin practical for everyday purchases, micropayments, and peer-to-peer transfers."
      toc={[
        { id: "how-it-works", title: "How Lightning Works", level: 2 },
        { id: "wallets", title: "Best Lightning Wallets", level: 2 },
        { id: "spending", title: "Spending via Lightning", level: 2 },
        { id: "receiving", title: "Receiving Lightning Payments", level: 2 },
        { id: "limitations", title: "Current Limitations", level: 2 },
      ]}
      faqs={[
        { question: "How fast are Lightning payments?", answer: "Lightning payments confirm in under one second, making them suitable for point-of-sale transactions and real-time payments." },
        { question: "How much do Lightning transactions cost?", answer: "Lightning fees are typically fractions of a cent, often less than one satoshi for small payments. Routing fees depend on the payment path but are negligible." },
        { question: "Do I need to run a node for Lightning?", answer: "No. Mobile wallets like Phoenix, Breez, and Wallet of Satoshi handle all the technical complexity automatically." },
      ]}
      relatedArticles={[
        { title: "Fold App Review", href: "/spending/reviews/fold-app", category: "Spending" },
        { title: "Best Crypto P2P Payments", href: "/spending/best/peer-to-peer", category: "Spending" },
        { title: "Crypto Tipping Guide", href: "/spending/learn/crypto-tipping-guide", category: "Spending" },
      ]}
    >
      <section id="how-it-works">
        <h2>How Lightning Works</h2>
        <p>The Lightning Network operates as a second layer on top of Bitcoin's blockchain. Two parties open a payment channel by locking Bitcoin in a multi-signature on-chain transaction. Once the channel is open, they can transact unlimited times between themselves instantly and without fees, only settling the final balance on-chain when the channel closes. The network routes payments across multiple channels, meaning you do not need a direct channel with every person you pay.</p>
        <p>Payment routing works similarly to internet packet routing. When you send a Lightning payment, your wallet finds a path through the network connecting you to the recipient. Each hop charges a tiny routing fee, typically fractions of a cent. The payment is secured by cryptographic hash time-locked contracts that ensure either the entire payment completes or it is fully refunded.</p>
      </section>

      <section id="wallets">
        <h2>Best Lightning Wallets</h2>
        <p>Phoenix Wallet offers the best self-custodial Lightning experience for most users. It handles channel management automatically, supports both Lightning and on-chain Bitcoin, and provides a clean interface for everyday payments. Breez is another strong self-custodial option with additional features for merchants including a built-in point-of-sale mode.</p>
        <p>For maximum simplicity, Wallet of Satoshi provides a custodial Lightning experience where you can start sending and receiving instantly. Cash App integrates Lightning for Bitcoin withdrawals and external payments. Muun wallet offers a hybrid approach with a unified balance for both on-chain and Lightning transactions.</p>
      </section>

      <section id="spending">
        <h2>Spending via Lightning</h2>
        <p>Lightning payments are accepted at a growing number of online and physical merchants. Bitrefill processes gift card purchases via Lightning, enabling crypto spending at major retailers. Fold App integrates Lightning for its rewards ecosystem. Many Bitcoin-accepting merchants now prefer Lightning over on-chain payments due to instant confirmation and minimal fees.</p>
        <p>El Salvador's adoption of Bitcoin as legal tender has driven significant Lightning merchant adoption. Other countries are following suit as Lightning infrastructure matures. Online platforms including content sites, gaming services, and digital goods vendors increasingly offer Lightning checkout for fast, low-cost payments.</p>
      </section>

      <section id="receiving">
        <h2>Receiving Lightning Payments</h2>
        <p>Receiving Lightning payments requires generating an invoice that specifies the amount and payment details. Most wallets generate invoices automatically. LNURL and Lightning Address protocols enable static payment links that can receive payments without a new invoice each time, making them practical for tips, donations, and recurring payments.</p>
        <p>For merchants, receiving Lightning payments is straightforward with apps like Breez that include point-of-sale functionality. The merchant enters the purchase amount, the app generates a QR code, and the customer scans and pays. Confirmation is instant. BTCPay Server provides a self-hosted Lightning payment processing solution for online businesses.</p>
      </section>

      <section id="limitations">
        <h2>Current Limitations</h2>
        <p>Channel liquidity constrains the maximum payment size, though multi-path payments that split large transactions across multiple routes have improved this. Inbound liquidity can be challenging for new recipients. Some wallets address this with liquidity services that open channels on demand.</p>
        <p>Occasional routing failures can occur for large payments or payments to nodes with limited connectivity. Privacy on Lightning is better than on-chain for intermediate hops but less private for endpoints. Despite these limitations, Lightning handles millions of transactions monthly and is the most practical Bitcoin payment method for everyday use.</p>
      </section>
    </LearnPageLayout>
  );
}
