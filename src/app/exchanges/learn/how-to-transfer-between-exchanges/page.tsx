import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = { title: `How to Transfer Crypto Between Exchanges (${CURRENT_YEAR}) | ${SITE_NAME}`, description: "Step-by-step guide to transferring cryptocurrency between exchanges safely. Network selection, fees, confirmation times, and common mistakes to avoid." };

export default function Page() {
  return (
    <LearnPageLayout title="How to Transfer Crypto Between Exchanges" categoryName="Crypto Exchanges" categorySlug="exchanges" readTime="8 min" intro="Transferring crypto between exchanges is a fundamental skill that requires attention to detail. Sending to the wrong address or selecting the wrong network can result in permanent loss of funds. This guide walks you through the process step by step."
      toc={[
        { id: "before-transfer", title: "before-transfer", level: 2 },
        { id: "before-you-transfer", title: "Before You Transfer", level: 2 },
        { id: "step-by-step", title: "step-by-step", level: 2 },
        { id: "step-by-step-transfer-process", title: "Step-by-Step Transfer Process", level: 2 },
        { id: "network-selection", title: "network-selection", level: 2 },
        { id: "choosing-the-right-network", title: "Choosing the Right Network", level: 2 },
        { id: "fees-times", title: "fees-times", level: 2 },
        { id: "fees-and-confirmation-times", title: "Fees and Confirmation Times", level: 2 },
        { id: "common-mistakes", title: "common-mistakes", level: 2 },
        { id: "common-mistakes-to-avoid", title: "Common Mistakes to Avoid", level: 2 }
      ]}
      faqs={[{question:"How long do transfers take?",answer:"It depends on the blockchain. Bitcoin transfers typically take 10-60 minutes (1-6 confirmations). Ethereum takes 5-15 minutes. Solana transfers are nearly instant. Exchange processing adds additional time."},{question:"Can I send Bitcoin to an Ethereum address?",answer:"No. Sending crypto to an address on the wrong blockchain will result in permanent loss of funds. Always verify both the token and the network match between sending and receiving exchanges."},{question:"Why does the receiving exchange require multiple confirmations?",answer:"Confirmations add security by making it increasingly difficult to reverse transactions. More confirmations mean more certainty that the transaction is permanent. Exchanges require more confirmations for larger amounts."}]}
      relatedArticles={[{title:"Exchange vs Wallet",href:"/exchanges/learn/exchange-vs-wallet",category:"Exchanges"},{title:"Exchange Fees Explained",href:"/exchanges/learn/exchange-fees-explained",category:"Exchanges"},{title:"What Are Trading Pairs",href:"/exchanges/learn/what-are-trading-pairs",category:"Exchanges"}]}
    >
      <section id="before-transfer"><h2>Before You Transfer</h2><p>Before initiating any transfer, verify three things. First, confirm that the receiving exchange supports the specific cryptocurrency you want to send. Second, ensure both exchanges support a common transfer network for that crypto. Third, check withdrawal limits on the sending exchange and deposit minimums on the receiving exchange. Some exchanges require a minimum number of account confirmations or a waiting period before withdrawals are enabled on new accounts.</p></section>
      <section id="step-by-step"><h2>Step-by-Step Transfer Process</h2><p>Step 1: On the receiving exchange, navigate to deposits and select the cryptocurrency. Copy the deposit address and note the required network. Step 2: On the sending exchange, navigate to withdrawals and select the same cryptocurrency. Paste the deposit address carefully. Step 3: Select the matching network — this must be identical on both ends. Step 4: Enter the amount to transfer. Step 5: Review all details carefully — address, network, and amount. Step 6: Confirm the withdrawal and complete any 2FA verification. Step 7: Monitor the transaction using the provided transaction hash until it confirms on the receiving exchange.</p></section>
      <section id="network-selection"><h2>Choosing the Right Network</h2><p>Many cryptocurrencies can be transferred over multiple networks. USDT, for example, can be sent over Ethereum (ERC-20), Tron (TRC-20), Solana (SPL), BSC (BEP-20), and others. Each network has different fees and speeds. Tron is often cheapest at around $1. Ethereum can cost $5-$50. Solana is very cheap and fast. Always choose the same network on both exchanges. If you send USDT over the Tron network but the receiving exchange only gave you an Ethereum address, your funds may be lost permanently.</p></section>
      <section id="fees-times"><h2>Fees and Confirmation Times</h2><p>Withdrawal fees vary by exchange and network. Bitcoin withdrawals typically cost $1-$10. Ethereum withdrawals cost $5-$25. Solana transfers cost under $0.01. Some exchanges like Gemini offer a limited number of free withdrawals per month. To minimize fees, use cheaper networks when available and consolidate transfers rather than making many small ones. Confirmation times range from seconds (Solana) to an hour (Bitcoin, 6 confirmations).</p></section>
      <section id="common-mistakes"><h2>Common Mistakes to Avoid</h2><p>The most dangerous mistake is sending crypto to the wrong network. Always double-check that the network selected on the sending exchange matches the network of the deposit address. Never manually type addresses — always copy and paste, then verify the first and last several characters match. Send a small test transaction first when transferring large amounts to a new address. Be aware that some tokens require a memo or tag in addition to the address (common for XRP, XLM, and ATOM) — omitting this can result in lost funds.</p></section>
    </LearnPageLayout>
  );
}
