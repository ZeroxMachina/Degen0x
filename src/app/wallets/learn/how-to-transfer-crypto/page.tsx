import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import LearnPage from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Transfer Crypto Between Wallets (2026) | degen0x`,
  description: `Step-by-step guide to transferring cryptocurrency between wallets in ${CURRENT_YEAR}. Covers sending, receiving, network selection, fees, and avoiding common mistakes.`,
  alternates: { canonical: "/wallets/learn/how-to-transfer-crypto" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const toc = [
  { id: "basics", title: "Transfer Basics", level: 2 },
  { id: "sending", title: "How to Send Crypto", level: 2 },
  { id: "receiving", title: "How to Receive Crypto", level: 2 },
  { id: "network-selection", title: "Choosing the Right Network", level: 2 },
  { id: "common-mistakes", title: "Common Mistakes to Avoid", level: 2 },
];

const faqs = [
  { question: "Can I send Bitcoin to an Ethereum address?", answer: "No. Bitcoin and Ethereum are different blockchains with incompatible address formats. Sending Bitcoin to an Ethereum address will result in permanent loss of funds. Always verify you are sending to the correct network. Some wallets display warnings when address formats do not match the selected network." },
  { question: "How long do crypto transfers take?", answer: "Transfer speed depends on the blockchain: Bitcoin takes 10-60 minutes, Ethereum takes 15 seconds to a few minutes, Solana takes under a second, and Layer 2 networks like Arbitrum take a few seconds. Faster blockchains generally have lower fees. Some networks may take longer during periods of high congestion." },
  { question: "Can I cancel a crypto transfer?", answer: "Once a transaction is confirmed on the blockchain, it cannot be cancelled or reversed. Some blockchains allow replacing a pending (unconfirmed) transaction by sending a new one with a higher fee. This is why it is critical to verify the recipient address and amount before confirming." },
];

const relatedArticles = [
  { title: "How to Set Up a Wallet", href: "/wallets/learn/how-to-set-up-wallet", category: "Wallets" },
  { title: "What Is a Crypto Wallet?", href: "/wallets/learn/what-is-a-crypto-wallet", category: "Wallets" },
  { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Learn', item: 'https://degen0x.com/wallets/learn' },
    { '@type': 'ListItem', position: 4, name: 'How To Transfer Crypto', },
  ],
};

export default function HowToTransferCryptoPage() {
  return (
    <LearnPage
      title="How to Transfer Crypto Between Wallets"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="7 min"
      intro="Transferring cryptocurrency between wallets is one of the most fundamental operations in crypto. Whether you are moving funds from an exchange to a self-custody wallet or sending crypto to another person, understanding the process, network selection, and potential pitfalls is essential to avoid costly mistakes."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <h2 id="basics">Transfer Basics</h2>
      <p>
        Every crypto transfer involves three elements: a sender address, a recipient address, and the blockchain
        network. The sender initiates the transaction from their wallet, specifying the recipient&apos;s address
        and the amount to send. The transaction is broadcast to the blockchain, validated by the network, and
        recorded permanently. A network fee (gas fee) is paid by the sender to compensate the validators
        processing the transaction.
      </p>

      <h2 id="sending">How to Send Crypto</h2>
      <p>
        To send crypto, open your wallet and select the asset you want to transfer. Tap &quot;Send&quot; and
        enter the recipient&apos;s address. You can type or paste the address, scan a QR code, or select from
        saved contacts if your wallet supports them. Enter the amount to send and review the transaction details
        including the estimated network fee.
      </p>
      <p>
        Always double-check the recipient address before confirming. Crypto transactions are irreversible, so
        sending to the wrong address means permanent loss. Start with a small test transaction when sending to
        a new address for the first time. Once you confirm, the transaction is broadcast to the network. You
        can track its status using the transaction hash on a block explorer.
      </p>

      <h2 id="receiving">How to Receive Crypto</h2>
      <p>
        To receive crypto, open your wallet and select the asset you want to receive. Tap &quot;Receive&quot; to
        display your wallet address and QR code. Share your address with the sender by copying the text or having
        them scan the QR code. Make sure the sender is using the correct blockchain network that matches your
        wallet address.
      </p>
      <p>
        After the sender initiates the transfer, you will see the incoming transaction in your wallet once the
        network confirms it. Confirmation times vary by blockchain: Bitcoin may take 10-60 minutes, Ethereum
        takes seconds to minutes, and Solana is nearly instant.
      </p>

      <h2 id="network-selection">Choosing the Right Network</h2>
      <p>
        One of the most critical aspects of crypto transfers is selecting the correct network. Many tokens exist
        on multiple blockchains. For example, USDC exists on Ethereum, Polygon, Arbitrum, Solana, and others.
        Both the sender and receiver must use the same network. Sending USDC on Ethereum to an address that only
        supports Polygon USDC can result in lost funds.
      </p>
      <p>
        When withdrawing from an exchange, pay close attention to the network selection dropdown. Exchanges
        typically support multiple networks for popular tokens. Choose the network that matches your receiving
        wallet. Layer 2 networks like Arbitrum, Optimism, and Polygon often have much lower fees than Ethereum
        mainnet, so using them when possible can save significant money.
      </p>

      <h2 id="common-mistakes">Common Mistakes to Avoid</h2>
      <p>
        Wrong network selection is the most common and costly mistake. Always verify the network before sending.
        Address errors can be prevented by copying and pasting rather than typing manually, and by verifying at
        least the first and last few characters of the address. Sending to a smart contract address rather than
        a wallet address can sometimes lock funds permanently.
      </p>
      <p>
        Insufficient gas is another common issue. You need enough of the native chain token (ETH for Ethereum,
        SOL for Solana) in your wallet to pay for the transaction fee, in addition to the tokens you are sending.
        If you are sending your entire balance of a native token, you need to leave enough behind for gas.
      </p>
    </LearnPage>
  );
}
      <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/wallets/learn/[slug]" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>[Slug]</a>
  <a href="/wallets/learn/custodial-vs-non-custodial" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Custodial Vs Non Custodial</a>
  <a href="/wallets/learn/hot-vs-cold-wallets" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Hot Vs Cold Wallets</a>
  <a href="/wallets/learn/how-to-set-up-wallet" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>How To Set Up Wallet</a>
  <a href="/wallets/learn/multi-sig-wallets" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Multi Sig Wallets</a>
  <a href="/wallets/learn/seed-phrase-explained" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Seed Phrase Explained</a>
  <a href="/wallets/learn/wallet-backup-guide" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Wallet Backup Guide</a>
  <a href="/wallets/learn/wallet-security-best-practices" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Wallet Security Best Practices</a>
</nav>