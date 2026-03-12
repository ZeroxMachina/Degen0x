import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Nervos Network (CKB)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Nervos Network (CKB), the layered blockchain infrastructure for Bitcoin interoperability. Discover how it works, tokenomics, use cases, and how to buy CKB.",
};

export default function NervosPage() {
  return (
    <LearnPageLayout
      title="What Is Nervos Network (CKB)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Nervos Network is a layered blockchain infrastructure that uses the Common Knowledge Base (CKB) as its Layer 1 proof-of-work blockchain. Designed for interoperability and flexibility, Nervos has positioned itself as a key infrastructure for Bitcoin Layer 2 solutions and cross-chain applications through its UTXO-based Cell Model."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-nervos-network", title: "What Is Nervos Network?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-nervos-work", title: "How Does Nervos Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "ckb-tokenomics", title: "CKB Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-ckb", title: "How to Buy CKB", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Nervos Network?",
          answer: "Nervos is a layered blockchain using the CKB proof-of-work chain as its base layer, featuring a UTXO-based Cell Model for flexible state storage and Bitcoin interoperability.",
        },
        {
          question: "Where can I buy CKB?",
          answer: "CKB is available on Binance, Gate.io, KuCoin, and other exchanges.",
        },
        {
          question: "Is Nervos a good investment?",
          answer: "Nervos benefits from the Bitcoin L2 narrative with its UTXO compatibility, but has a smaller ecosystem. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Kaspa", href: "/investing/crypto/kaspa", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Nervos Network?</h2>
      <p>
        Nervos Network was founded by Kevin Wang, Terry Tai, and Cipher Wang and launched its CKB (Common Knowledge Base) Layer 1 in 2019. The network uses a unique Cell Model that generalizes Bitcoin&apos;s UTXO model, making it naturally compatible with Bitcoin&apos;s architecture while supporting smart contracts and complex state management. This UTXO compatibility has positioned Nervos as a key player in the Bitcoin Layer 2 ecosystem.
      </p>
      <p>
        The layered architecture design uses CKB as a secure, decentralized base layer for state storage, while Layer 2 solutions handle transaction processing and application logic. This approach mirrors Bitcoin&apos;s philosophy of keeping the base layer simple and secure while enabling innovation on higher layers.
      </p>

      <h2 id="how-it-works">How Does Nervos Work?</h2>
      <p>
        CKB uses proof-of-work consensus with the Eaglesong mining algorithm for base-layer security. The Cell Model stores data in cells that can contain any type of information, verified by custom scripts written in any programming language compiled to RISC-V. This flexibility allows Nervos to natively verify Bitcoin transactions, making it ideal for trustless Bitcoin bridges and RGB++ protocol support.
      </p>
      <p>
        RGB++ is a protocol that extends Bitcoin&apos;s capabilities by binding Bitcoin UTXOs to CKB cells, enabling smart contracts and complex DeFi applications that are secured by Bitcoin while executing on CKB. This creates a Bitcoin Layer 2 experience without requiring users to bridge their Bitcoin to a separate chain.
      </p>

      <h2 id="tokenomics">CKB Tokenomics</h2>
      <p>
        CKB has a dual issuance model: base issuance follows a Bitcoin-like halving schedule (halving every 4 years), while secondary issuance provides inflation to compensate miners for storing state data. CKB tokens represent the right to store data on the blockchain; occupying on-chain storage requires locking CKB tokens, creating natural demand as more applications deploy. Secondary issuance is partly burned when CKB is locked in the NervosDAO.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Nervos supports Bitcoin Layer 2 infrastructure through RGB++, cross-chain interoperability leveraging UTXO compatibility, DeFi applications on CKB, digital asset issuance and management, and decentralized identity solutions. The Bitcoin interoperability narrative has become the primary driver of interest in the Nervos ecosystem.
      </p>

      <h2 id="how-to-buy">How to Buy CKB</h2>
      <p>
        To buy CKB, register on Binance, Gate.io, or KuCoin. Complete identity verification, deposit funds, and purchase CKB tokens. After buying, you can deposit CKB in the NervosDAO to earn secondary issuance rewards that offset inflation. CKB can be stored in the Neuron wallet or JoyID wallet for interacting with the ecosystem.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Nervos has a smaller ecosystem and developer community than major blockchains. The Bitcoin L2 narrative is competitive, with many projects vying for the same positioning. The proof-of-work model faces environmental criticism. The Cell Model, while flexible, requires developers to learn new paradigms. Token inflation from secondary issuance dilutes holders who do not stake in the NervosDAO.
      </p>
      <p>
        Success depends largely on the broader adoption of Bitcoin Layer 2 solutions and whether Nervos can establish itself as the preferred infrastructure in this space. Competition from Stacks, Lightning Network, and other Bitcoin L2 approaches adds uncertainty. Limited major exchange support outside of Asia reduces global accessibility.
      </p>
    </LearnPageLayout>
  );
}
