import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Crypto Address? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what a cryptocurrency address is, how it works, the different types, and best practices for using addresses safely. A complete guide for beginners.",
};

export default function AddressPage() {
  return (
    <LearnPageLayout
      title="What Is a Crypto Address?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A crypto address is a unique string of alphanumeric characters that serves as a destination for sending and receiving cryptocurrency on a blockchain. Think of it like a bank account number — you share it with others so they can send you funds, but unlike traditional banking, addresses are generated from cryptographic key pairs and do not require personal identity to create."
      toc={[
        { id: "definition", title: "What Is a Crypto Address?", level: 2 },
        { id: "how-it-works", title: "How Addresses Work", level: 2 },
        { id: "types", title: "Types of Addresses", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
        { id: "best-practices", title: "Best Practices", level: 2 },
      ]}
      faqs={[
        {
          question: "Can I reuse a crypto address?",
          answer:
            "Technically yes, but for privacy it is recommended to generate a new address for each transaction. Most modern wallets do this automatically. Reusing addresses makes it easier to track your transaction history on the public blockchain.",
        },
        {
          question: "What happens if I send crypto to the wrong address?",
          answer:
            "Blockchain transactions are irreversible. If you send cryptocurrency to an incorrect address, the funds are likely lost permanently. Always double-check the address and send a small test transaction first for large transfers.",
        },
        {
          question: "Are crypto addresses anonymous?",
          answer:
            "Crypto addresses are pseudonymous, not anonymous. While addresses do not contain personal information, blockchain analytics can often link addresses to real identities through exchange KYC data, transaction patterns, and other on-chain analysis.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Private Key?", href: "/learn/glossary/private-key", category: "Glossary" },
        { title: "What Is a Cold Wallet?", href: "/learn/glossary/cold-wallet", category: "Glossary" },
        { title: "What Is a Hot Wallet?", href: "/learn/glossary/hot-wallet", category: "Glossary" },
        { title: "What Is a Seed Phrase?", href: "/learn/glossary/seed-phrase", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Crypto Address?</h2>
      <p>
        A cryptocurrency address is a unique identifier that represents a destination on a blockchain network. It is derived from a public key through cryptographic hashing and encoding. When someone wants to send you Bitcoin, Ethereum, or any other cryptocurrency, they send it to your address. Each blockchain has its own address format — Bitcoin addresses typically start with &quot;1&quot;, &quot;3&quot;, or &quot;bc1&quot;, while Ethereum addresses start with &quot;0x&quot;.
      </p>
      <p>
        Addresses are public by design. You can safely share your address with anyone who needs to send you funds. However, the private key associated with that address must be kept secret, as it is what authorizes spending from the address.
      </p>

      <h2 id="how-it-works">How Addresses Work</h2>
      <p>
        The process begins with generating a private key — a random 256-bit number. From the private key, a public key is derived using elliptic curve cryptography. The public key is then hashed and encoded to produce the human-readable address. This one-way process means you can generate an address from a private key, but you cannot reverse-engineer a private key from an address.
      </p>
      <p>
        When you initiate a transaction, your wallet software creates a message specifying the recipient address and amount, signs it with your private key, and broadcasts it to the network. Nodes verify the signature against your public key to confirm you authorized the transaction, then add it to the blockchain.
      </p>

      <h2 id="types">Types of Addresses</h2>
      <p>
        Different blockchains use different address formats. Bitcoin has Legacy addresses (starting with 1), SegWit addresses (starting with 3), and Native SegWit or Bech32 addresses (starting with bc1). Native SegWit addresses are preferred because they offer lower transaction fees. Ethereum uses a single address format starting with 0x followed by 40 hexadecimal characters.
      </p>
      <p>
        Some networks also support human-readable addresses through naming services. Ethereum Name Service (ENS) lets you map a name like &quot;yourname.eth&quot; to your Ethereum address. Similar services exist for other chains. These make it easier to share addresses and reduce the risk of errors.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Understanding crypto addresses is fundamental to using cryptocurrency safely. Since blockchain transactions are irreversible, sending funds to the wrong address means permanent loss. Knowing the difference between address formats helps you avoid cross-chain errors, such as sending Bitcoin to an Ethereum address.
      </p>
      <p>
        Addresses also play a key role in privacy. Because all transactions are recorded on a public ledger, anyone can view the balance and transaction history of any address. Using fresh addresses for each transaction, as recommended by most wallet software, helps protect your financial privacy.
      </p>

      <h2 id="best-practices">Best Practices</h2>
      <p>
        Always copy and paste addresses rather than typing them manually. Verify the first and last several characters after pasting, as clipboard malware can swap addresses. Send a small test amount before transferring large sums. Use address book features in your wallet to save frequently used addresses. Never share your private key or seed phrase — only share your public address.
      </p>
    </LearnPageLayout>
  );
}
