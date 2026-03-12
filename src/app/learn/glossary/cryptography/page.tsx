import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Cryptography in Crypto? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what cryptography means in blockchain, how public-key cryptography secures transactions, and the role of hashing and digital signatures in cryptocurrency.",
  keywords: ["cryptography", "blockchain cryptography", "public key cryptography", "digital signatures", "hash functions crypto"],
};

export default function CryptographyPage() {
  return (
    <LearnPageLayout title="What Is Cryptography?" categoryName="Glossary" categorySlug="learn/glossary" readTime="5 min" intro="Cryptography is the mathematical foundation that makes blockchain technology possible. It provides the tools for securing transactions, proving ownership of assets, ensuring data integrity, and maintaining privacy — all without requiring trust in any central authority. The 'crypto' in cryptocurrency directly refers to the cryptographic techniques that underpin every aspect of how blockchains function."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "definition", title: "Definition", level: 2 },
        { id: "public-key", title: "public-key", level: 2 },
        { id: "public-key-cryptography", title: "Public-Key Cryptography", level: 2 },
        { id: "hash-functions", title: "hash-functions", level: 2 },
        { id: "hash-functions", title: "Hash Functions", level: 2 },
        { id: "digital-signatures", title: "digital-signatures", level: 2 },
        { id: "digital-signatures", title: "Digital Signatures", level: 2 },
        { id: "applications", title: "applications", level: 2 },
        { id: "blockchain-applications", title: "Blockchain Applications", level: 2 }
      ]}
      faqs={[
        { question: "Can quantum computers break blockchain cryptography?", answer: "Current quantum computers cannot break the cryptographic algorithms used in blockchains, but sufficiently powerful future quantum computers could theoretically break elliptic curve cryptography (used for wallet keys) and weaken hash functions. The blockchain industry is actively researching quantum-resistant algorithms, and most experts believe there is time to transition before quantum computers become a practical threat." },
        { question: "What happens if someone cracks the cryptography behind Bitcoin?", answer: "If the elliptic curve cryptography (secp256k1) used by Bitcoin were broken, an attacker could derive private keys from public keys and steal funds. However, addresses that have never sent a transaction only expose a hash of the public key, providing an additional layer of protection. Breaking SHA-256 would require a complete rethinking of all digital security, not just cryptocurrency." },
        { question: "Do I need to understand cryptography to use crypto?", answer: "No, you do not need to understand the mathematical details to use cryptocurrency safely. However, understanding the basic concepts — that private keys prove ownership, that transactions are digitally signed, and that hash functions ensure data integrity — helps you make better security decisions and understand why practices like protecting your seed phrase matter." },
      ]}
      relatedArticles={[
        { title: "Private Key", href: "/learn/glossary/private-key", category: "Glossary" },
        { title: "Hash Rate", href: "/learn/glossary/hash-rate", category: "Glossary" },
        { title: "Nonce", href: "/learn/glossary/nonce", category: "Glossary" },
        { title: "What Is a Blockchain?", href: "/learn/what-is-blockchain", category: "Learn" },
      ]}
    >
      <section id="definition"><h2>Definition</h2><p>Cryptography is the science of securing information through mathematical techniques that make it computationally infeasible to tamper with or forge data. In the context of blockchain, cryptography serves three critical functions: authentication (proving you own an asset without revealing your private key), integrity (ensuring transaction data has not been altered), and non-repudiation (making it impossible to deny having authorized a transaction). These properties are achieved through a combination of public-key cryptography, cryptographic hash functions, and digital signature algorithms that collectively form the security backbone of every blockchain network.</p></section>
      <section id="public-key"><h2>Public-Key Cryptography</h2><p>Public-key (asymmetric) cryptography uses mathematically linked key pairs — a private key and a public key. The private key is a secret number that must never be shared, while the public key can be freely distributed. In blockchain, the private key signs transactions to prove ownership, and anyone can verify the signature using the corresponding public key. Bitcoin uses the secp256k1 elliptic curve, while Ethereum uses the same curve for accounts. The critical property is that deriving the private key from the public key is computationally infeasible — it would take billions of years with current technology. This one-way mathematical relationship is what makes trustless ownership of digital assets possible.</p></section>
      <section id="hash-functions"><h2>Hash Functions</h2><p>Cryptographic hash functions take input of any size and produce a fixed-size output (the hash or digest) with specific properties: the same input always produces the same output, even a tiny change in input produces a completely different hash, and it is computationally infeasible to reverse the process or find two different inputs that produce the same hash. Bitcoin uses SHA-256 (producing 256-bit hashes), while Ethereum uses Keccak-256. Hash functions are used to create block hashes that chain blocks together, generate Merkle trees for efficient transaction verification, derive addresses from public keys, and form the basis of Proof of Work mining puzzles.</p></section>
      <section id="digital-signatures"><h2>Digital Signatures</h2><p>Digital signatures combine public-key cryptography with hash functions to create unforgeable proof that a specific private key authorized a transaction. When you send cryptocurrency, your wallet hashes the transaction data and then encrypts that hash with your private key to create the signature. Network nodes verify the signature using your public key, confirming both that you authorized the transaction and that the transaction data has not been modified. The Elliptic Curve Digital Signature Algorithm (ECDSA) is used by Bitcoin and Ethereum, while newer chains like Solana use EdDSA (Ed25519) for improved performance and simpler implementation.</p></section>
      <section id="applications"><h2>Blockchain Applications</h2><p>Beyond basic transaction security, cryptography enables advanced blockchain features. Zero-knowledge proofs allow one party to prove knowledge of information without revealing the information itself, powering privacy protocols like Zcash and scaling solutions like zkRollups. Merkle trees use recursive hashing to allow efficient verification of large datasets — a light client can verify a transaction is included in a block by checking only a small proof rather than the entire block. Multi-party computation enables protocols where multiple parties can jointly compute a function without any party revealing their private inputs. These cryptographic innovations continue to expand what blockchains can achieve in terms of privacy, scalability, and functionality.</p></section>
    </LearnPageLayout>
  );
}
