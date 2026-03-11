import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Private Key? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what private keys are, how they secure your crypto, and why protecting them is the most important aspect of self-custody.",
};

export default function PrivateKeyPage() {
  return (
    <LearnPageLayout
      title="What Is a Private Key?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A private key is a secret cryptographic code that proves ownership of a blockchain address and authorizes transactions from it. It is a long string of numbers and letters that must be kept absolutely secret. Anyone who has your private key has complete control over your funds. Private keys are the foundation of crypto self-custody — they are the ultimate proof that you own your digital assets."
      toc={[
        { id: "definition", title: "What Is a Private Key?", level: 2 },
        { id: "how-it-works", title: "How Private Keys Work", level: 2 },
        { id: "key-management", title: "Key Management", level: 2 },
        { id: "what-not-to-do", title: "What Not to Do", level: 2 },
        { id: "why-it-matters", title: "Why Private Keys Matter", level: 2 },
      ]}
      faqs={[
        {
          question: "What happens if I lose my private key?",
          answer:
            "If you lose your private key and do not have a backup (such as a seed phrase), your funds are permanently inaccessible. There is no customer support, no password reset, and no recovery mechanism. The funds remain on the blockchain forever but no one can ever access them. This is why secure backup of keys and seed phrases is absolutely critical.",
        },
        {
          question: "Is a seed phrase the same as a private key?",
          answer:
            "A seed phrase (recovery phrase) is a human-readable representation of your private key(s). It is a list of 12 or 24 words that can deterministically generate all your private keys using a standard algorithm (BIP-39). The seed phrase is easier to write down and back up than a raw private key. Both must be kept equally secret.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Seed Phrase?", href: "/learn/glossary/seed-phrase", category: "Glossary" },
        { title: "What Is a Hardware Wallet?", href: "/learn/glossary/hardware-wallet", category: "Glossary" },
        { title: "What Is a Hot Wallet?", href: "/learn/glossary/hot-wallet", category: "Glossary" },
        { title: "What Is an Address?", href: "/learn/glossary/address", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Private Key?</h2>
      <p>
        A private key is a randomly generated 256-bit number that serves as the secret credential for a blockchain account. In practice, it looks like a long hexadecimal string. From the private key, a corresponding public key and blockchain address are mathematically derived. The private key can sign transactions (proving ownership), but the public key and address alone cannot reverse-engineer the private key. This asymmetric relationship is the basis of blockchain security.
      </p>

      <h2 id="how-it-works">How Private Keys Work</h2>
      <p>
        When you send cryptocurrency, your wallet uses the private key to create a digital signature for the transaction. This signature proves that the transaction was authorized by the owner of the address without revealing the private key itself. Network nodes verify the signature using the public key. This system, based on elliptic curve cryptography, allows secure authorization without ever transmitting the secret key.
      </p>

      <h2 id="key-management">Key Management</h2>
      <p>
        Most users interact with private keys through wallet software that manages them automatically. Hardware wallets store keys in secure chips. Software wallets encrypt keys on your device. Seed phrases provide a human-readable backup. The key management strategy you choose determines your security profile. For significant holdings, hardware wallets with seed phrase backups stored in multiple secure physical locations are the standard recommendation.
      </p>

      <h2 id="what-not-to-do">What Not to Do</h2>
      <p>
        Never share your private key or seed phrase with anyone, for any reason. Never enter them on any website. Never store them in cloud services, email, or digital notes accessible from the internet. Never take screenshots of them. Never respond to support requests asking for keys. Legitimate services will never ask for your private key. Any request for your private key is a scam, no exceptions.
      </p>

      <h2 id="why-it-matters">Why Private Keys Matter</h2>
      <p>
        &quot;Not your keys, not your coins&quot; is the fundamental principle of crypto self-custody. If an exchange holds your keys, they control your funds (and may lose them, as many exchange collapses have demonstrated). Private keys give you sovereign control over your digital assets — no bank, government, or company can freeze, seize, or access your funds. This power comes with responsibility: securing your private keys is entirely your duty.
      </p>
    </LearnPageLayout>
  );
}
