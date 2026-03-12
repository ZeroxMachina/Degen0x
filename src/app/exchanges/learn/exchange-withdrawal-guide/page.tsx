import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Withdrawal Guide: Networks and Fees (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how to withdraw crypto from exchanges. Network selection, withdrawal fees, processing times, address formats, and avoiding costly mistakes.",
};

export default function ExchangeWithdrawalGuide() {
  return (
    <LearnPageLayout
      title="Crypto Withdrawal Guide: Networks and Fees"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="9 min read"
      intro="Withdrawing cryptocurrency from an exchange requires careful attention to network selection, addresses, and fees. Choosing the wrong network or entering an incorrect address can result in permanent loss of funds. This guide walks you through the withdrawal process, explains network differences, and helps you minimize fees while keeping your assets safe."
      toc={[
        { id: "withdrawal-basics", title: "withdrawal-basics", level: 2 },
        { id: "withdrawal-basics", title: "Withdrawal Basics", level: 2 },
        { id: "network-selection", title: "network-selection", level: 2 },
        { id: "choosing-the-right-network", title: "Choosing the Right Network", level: 2 },
        { id: "fees", title: "fees", level: 2 },
        { id: "understanding-withdrawal-fees", title: "Understanding Withdrawal Fees", level: 2 },
        { id: "address-formats", title: "address-formats", level: 2 },
        { id: "address-formats-and-memo-tags", title: "Address Formats and Memo Tags", level: 2 },
        { id: "processing-times", title: "processing-times", level: 2 },
        { id: "processing-times", title: "Processing Times", level: 2 },
        { id: "common-mistakes", title: "common-mistakes", level: 2 },
        { id: "common-mistakes-to-avoid", title: "Common Mistakes to Avoid", level: 2 },
        { id: "tips", title: "tips", level: 2 },
        { id: "withdrawal-best-practices", title: "Withdrawal Best Practices", level: 2 }
      ]}
      faqs={[
        { question: "What happens if I send to the wrong network?", answer: "Sending crypto on the wrong network can result in permanent loss. For example, sending ETH via BSC to an address that does not support BSC may make the funds unrecoverable. Some wallets can recover cross-chain sends but this is not guaranteed." },
        { question: "Why do withdrawal fees vary so much?", answer: "Withdrawal fees depend on the blockchain network used. Bitcoin and Ethereum have higher network fees due to congestion. Layer-2 networks, BSC, Solana, and other alternative networks are significantly cheaper. Exchanges also add their own margin." },
        { question: "How long do withdrawals take?", answer: "It depends on the network and exchange processing. Bitcoin typically takes 30-60 minutes for confirmations. Solana and BSC complete in seconds to minutes. Exchange processing adds additional time, sometimes requiring manual review for large amounts." },
        { question: "Do I need a memo or tag for all withdrawals?", answer: "Only certain blockchains require memos or tags, including XRP (destination tag), XLM (memo), ATOM (memo), and BNB Beacon Chain (memo). Forgetting the memo when required often results in lost funds or lengthy recovery processes." },
      ]}
      relatedArticles={[
        { title: "Exchange Deposit Methods", href: "/exchanges/learn/exchange-deposit-methods", category: "Exchanges" },
        { title: "Exchange Fees Explained", href: "/exchanges/learn/exchange-fees-explained", category: "Exchanges" },
        { title: "Exchange Security Features", href: "/exchanges/learn/exchange-security-features", category: "Exchanges" },
      ]}
    >
      <section id="withdrawal-basics">
        <h2>Withdrawal Basics</h2>
        <p>To withdraw crypto from an exchange, you need a destination wallet address on a compatible blockchain network. Navigate to the withdrawal section of your exchange, select the asset you want to withdraw, enter the destination address, choose the network, and specify the amount.</p>
        <p>Most exchanges require withdrawal confirmation via email and/or 2FA verification. Some impose a waiting period after enabling a new withdrawal address or changing security settings. Large withdrawals may trigger manual security reviews that add processing time.</p>
        <p>There are two types of withdrawals: crypto withdrawals that send digital assets to another wallet or exchange, and fiat withdrawals that convert crypto to traditional currency and send it to your bank account. This guide focuses on crypto withdrawals.</p>
      </section>

      <section id="network-selection">
        <h2>Choosing the Right Network</h2>
        <p>Many cryptocurrencies exist on multiple blockchain networks. USDT, for example, is available on Ethereum (ERC-20), Tron (TRC-20), BSC (BEP-20), Solana, Arbitrum, and many others. Choosing the right network is critical because sending on an incompatible network can result in lost funds.</p>
        <p>Always match the withdrawal network with the destination wallet's supported network. If your receiving wallet only supports Ethereum, send via the Ethereum network even if Tron is cheaper. The receiving address must be compatible with the selected network.</p>
        <p>For transfers between exchanges, check which networks both exchanges support and choose the cheapest compatible option. Tron (TRC-20) is popular for USDT transfers due to low fees. Solana and Arbitrum are increasingly popular for their speed and low costs.</p>
      </section>

      <section id="fees">
        <h2>Understanding Withdrawal Fees</h2>
        <p>Withdrawal fees consist of two components: the blockchain network fee (gas) and the exchange's processing fee. Some exchanges charge a flat fee that covers both, while others show them separately. The total fee varies significantly by network choice.</p>
        <p>Ethereum network withdrawals are typically the most expensive, ranging from $5-50+ depending on network congestion. Bitcoin withdrawals cost $1-20 depending on mempool conditions. Layer-2 networks like Arbitrum and Optimism cost $0.10-1. Solana, Tron, and BSC withdrawals often cost less than $1.</p>
        <p>Compare withdrawal fees across exchanges for the same asset and network. Fees vary by exchange and are sometimes negotiable for high-volume users. Some exchanges periodically run promotions with reduced or zero withdrawal fees on certain networks.</p>
      </section>

      <section id="address-formats">
        <h2>Address Formats and Memo Tags</h2>
        <p>Different blockchains use different address formats. Ethereum addresses start with "0x" followed by 40 hexadecimal characters. Bitcoin addresses start with "1", "3", or "bc1". Solana addresses are base58 encoded strings. Always double-check the format matches the expected network.</p>
        <p>Some blockchains require a memo, tag, or destination ID in addition to the wallet address. XRP uses destination tags, Stellar uses memos, and Cosmos uses memos. These identifiers tell the receiving platform which user account to credit. Omitting the memo typically results in funds being lost or requiring manual recovery.</p>
        <p>Use copy-paste for addresses rather than typing manually. Even a single wrong character sends funds to an unrecoverable address. Some wallets support QR code scanning which eliminates manual entry errors entirely. Always verify the first and last several characters after pasting.</p>
      </section>

      <section id="processing-times">
        <h2>Processing Times</h2>
        <p>Exchange processing is the first step. The exchange reviews and broadcasts your transaction to the blockchain. This can be instant for automated small withdrawals or take minutes to hours if manual review is required. Large withdrawals, new addresses, and recently changed security settings may trigger additional review.</p>
        <p>Blockchain confirmation time is the second step. Bitcoin requires 1-6 confirmations (10-60 minutes). Ethereum needs 12-36 confirmations (3-10 minutes). Solana confirms in seconds. The receiving platform determines how many confirmations are required before crediting your account.</p>
        <p>During high network congestion, processing times can increase dramatically. Bitcoin mempool backlogs can delay transactions for hours or days. Ethereum gas price spikes slow processing. Choosing networks with consistent fast confirmation times helps avoid delays.</p>
      </section>

      <section id="common-mistakes">
        <h2>Common Mistakes to Avoid</h2>
        <p>Sending on the wrong network is the most expensive mistake. Always verify the selected network matches your destination wallet's capabilities. If unsure, send a small test transaction first to confirm everything works correctly before sending the full amount.</p>
        <p>Forgetting memo tags for XRP, XLM, ATOM, and similar chains results in funds being sent to the exchange's hot wallet without attribution to your account. Recovery is sometimes possible but requires contacting support and may take weeks. Always double-check memo field requirements.</p>
        <p>Withdrawing to smart contract addresses from some exchanges is unsupported and may fail. Certain exchanges cannot send to contract addresses, only to standard wallet addresses. Check exchange restrictions before attempting withdrawals to DeFi protocols or smart contract wallets.</p>
      </section>

      <section id="tips">
        <h2>Withdrawal Best Practices</h2>
        <p>Always send a small test withdrawal before transferring large amounts, especially to a new address or using a new network. The small fee for a test transaction is insignificant compared to the risk of losing a large withdrawal.</p>
        <p>Whitelist your frequently used withdrawal addresses in your exchange's security settings. This prevents unauthorized withdrawals to unknown addresses and creates a verified address book for your regular transfers.</p>
        <p>Keep records of all withdrawals including transaction hashes, timestamps, networks, and amounts. This documentation is essential for tax reporting, dispute resolution, and tracking your assets across multiple wallets and exchanges. Most exchanges provide downloadable withdrawal history in their account settings.</p>
      </section>
    </LearnPageLayout>
  );
}
