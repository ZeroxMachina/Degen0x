import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Hash? Cryptographic Hashing Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what cryptographic hashing is, how hash functions work in blockchain, hash properties, common algorithms like SHA-256, and why hashing is fundamental to crypto security.",
  keywords: ["hash", "cryptographic hash", "SHA-256", "hashing", "blockchain hash", "hash function"],
};

export default function WhatIsAHashPage() {
  return (
    <LearnPageLayout
      title="What Is a Hash? Cryptographic Hashing Explained"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="7 min"
      intro="A hash is a fixed-length string of characters produced by a mathematical function that takes any input data and converts it into a unique digital fingerprint. Cryptographic hashing is the backbone of blockchain technology — it secures transactions, links blocks together, verifies data integrity, and powers the mining process that creates new Bitcoin."
      toc={[
        { id: "what-is-hashing", title: "what-is-hashing", level: 2 },
        { id: "what-is-hashing", title: "What Is Hashing", level: 2 },
        { id: "properties", title: "properties", level: 2 },
        { id: "key-properties-of-hash-functions", title: "Key Properties of Hash Functions", level: 2 },
        { id: "blockchain-role", title: "blockchain-role", level: 2 },
        { id: "hashing-in-blockchain", title: "Hashing in Blockchain", level: 2 },
        { id: "algorithms", title: "algorithms", level: 2 },
        { id: "common-hash-algorithms", title: "Common Hash Algorithms", level: 2 },
        { id: "practical-uses", title: "practical-uses", level: 2 },
        { id: "practical-uses-of-hashing", title: "Practical Uses of Hashing", level: 2 }
      ]}
      faqs={[
        { question: "Can a hash be reversed?", answer: "No. Cryptographic hash functions are one-way functions — you cannot derive the original input from the hash output. This property is called pre-image resistance and is fundamental to blockchain security. The only way to find an input that produces a specific hash is through brute-force guessing." },
        { question: "Can two different inputs produce the same hash?", answer: "Theoretically yes — this is called a collision. However, for secure hash functions like SHA-256, the probability of a collision is so astronomically low (1 in 2^128 for a birthday attack) that it is considered computationally infeasible. Finding a collision would require more energy than exists in the solar system." },
        { question: "What is SHA-256?", answer: "SHA-256 (Secure Hash Algorithm 256-bit) is the hash function used by Bitcoin. It produces a 256-bit (32-byte) hash output regardless of input size. It is part of the SHA-2 family designed by the NSA and is widely used in cryptography, SSL certificates, and blockchain systems." },
        { question: "How does hashing relate to mining?", answer: "In Proof of Work mining, miners repeatedly hash block data with different nonce values, searching for a hash that meets the network's difficulty target. This process requires trillions of hash computations per second across the network, and the first miner to find a valid hash earns the block reward." },
      ]}
      relatedArticles={[
        { title: "What Is Proof of Work?", href: "/learn/what-is-proof-of-work", category: "Learn" },
        { title: "Hash Rate Glossary", href: "/learn/glossary/hash-rate", category: "Learn" },
        { title: "Merkle Tree Glossary", href: "/learn/glossary/merkle-tree", category: "Learn" },
        { title: "Cryptography Glossary", href: "/learn/glossary/cryptography", category: "Learn" },
      ]}
    >
      <section id="what-is-hashing">
        <h2>What Is Hashing</h2>
        <p>
          Hashing is the process of converting any input — a word, a file, a transaction, or an entire block of data — into a fixed-length output string using a mathematical function. No matter how large or small the input, the output (called a hash, hash value, or digest) is always the same length. For SHA-256, which Bitcoin uses, the output is always 256 bits long (typically displayed as 64 hexadecimal characters).
        </p>
        <p>
          The beauty of cryptographic hashing is that even the tiniest change in the input produces a completely different output. Changing a single character in a document produces an entirely unrecognizable hash — there is no pattern or relationship between similar inputs and their hashes. This property, called the avalanche effect, makes hashing invaluable for detecting tampering: if someone modifies even one byte of data, the hash changes dramatically, instantly revealing the alteration.
        </p>
        <p>
          Hashing is distinct from encryption. Encryption is a two-way process where data can be encrypted and then decrypted back to its original form using a key. Hashing is a one-way function — there is no key or method to reverse a hash back to its original input. This irreversibility is what makes hashing so useful for security applications.
        </p>
      </section>

      <section id="properties">
        <h2>Key Properties of Hash Functions</h2>
        <p>
          Deterministic: the same input always produces the same hash output. This is essential for verification — anyone can independently hash the same data and confirm the result matches. Fast computation: hash functions are designed to compute quickly, enabling the processing of millions of hashes per second on modern hardware. Fixed output length: regardless of whether you hash a single character or an entire database, the output length is constant.
        </p>
        <p>
          Pre-image resistance means it is computationally infeasible to find an input that produces a specific hash output. Second pre-image resistance means that given an input and its hash, it is infeasible to find a different input that produces the same hash. Collision resistance means it is infeasible to find any two different inputs that produce the same hash. Together, these properties ensure that hashes serve as reliable, tamper-evident fingerprints for data of any kind.
        </p>
      </section>

      <section id="blockchain-role">
        <h2>Hashing in Blockchain</h2>
        <p>
          Every block in a blockchain contains the hash of the previous block, creating a chain of cryptographically linked blocks. If anyone attempts to modify a transaction in a past block, the block's hash changes, which invalidates the next block's reference, which invalidates the block after that, and so on — the entire chain after the modified block becomes invalid. This is what makes blockchains tamper-evident and immutable.
        </p>
        <p>
          Transactions are also hashed into a Merkle tree structure within each block. This binary tree of hashes allows efficient verification of whether a specific transaction is included in a block without downloading the entire block data. Merkle proofs enable lightweight clients to verify transactions using only a small amount of data, which is crucial for mobile wallets and other resource-constrained devices. The root of the Merkle tree (the Merkle root) is included in the block header, committing to all transactions in the block with a single hash.
        </p>
      </section>

      <section id="algorithms">
        <h2>Common Hash Algorithms</h2>
        <p>
          SHA-256 is the most prominent hash function in cryptocurrency, used by Bitcoin for mining and block hashing. It produces a 256-bit output and has withstood decades of cryptanalysis without any practical attacks being discovered. Ethereum uses Keccak-256, a variant of SHA-3, for its hashing needs. While similar in security properties, Keccak-256 has a different internal structure than SHA-256.
        </p>
        <p>
          Other hash functions in the crypto ecosystem include BLAKE2 and BLAKE3, which offer faster performance while maintaining strong security properties and are used by some newer blockchains. Scrypt and Ethash were designed as memory-hard hash functions intended to resist ASIC mining, though dedicated hardware has eventually been developed for both. The choice of hash function affects the security properties, mining hardware landscape, and performance characteristics of a blockchain network.
        </p>
      </section>

      <section id="practical-uses">
        <h2>Practical Uses of Hashing</h2>
        <p>
          Beyond mining and block linking, hashing is used throughout the crypto ecosystem. Wallet addresses are derived from public keys through hashing, providing a shorter and more manageable identifier. Smart contracts use hashes for access control, commitment schemes, and data verification. Decentralized storage systems use content-addressed hashing where data is identified by its hash rather than its location, ensuring integrity and enabling deduplication.
        </p>
        <p>
          Hashing also powers zero-knowledge proof systems, digital signatures (where messages are hashed before signing for efficiency), password storage (storing hashes instead of plaintext passwords), and distributed hash tables used in peer-to-peer networks. Understanding hashing provides a foundation for understanding virtually every aspect of blockchain technology and cryptographic security.
        </p>
      </section>
    </LearnPageLayout>
  );
}
