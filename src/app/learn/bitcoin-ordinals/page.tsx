import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bitcoin Ordinals and Inscriptions Explained (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Bitcoin Ordinals: how inscriptions work, the difference from Ethereum NFTs, BRC-20 tokens, the impact on Bitcoin block space, and the debate within the Bitcoin community.",
};

export default function BitcoinOrdinalsPage() {
  return (
    <LearnPageLayout
      title="Bitcoin Ordinals and Inscriptions Explained"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Bitcoin Ordinals are a system for numbering and tracking individual satoshis (the smallest unit of Bitcoin, one hundred millionth of a BTC) and inscribing them with arbitrary data — images, text, video, or code. Launched in January 2023 by developer Casey Rodarmor, Ordinals brought NFT-like functionality to Bitcoin without requiring any protocol changes, sparking a wave of innovation, controversy, and a fundamental debate about Bitcoin's purpose. The technology has created a vibrant ecosystem of Bitcoin-native digital artifacts, collectibles, and fungible tokens."
      toc={[
        { id: "how-ordinals-work", title: "how-ordinals-work", level: 2 },
        { id: "how-ordinals-work", title: "How Ordinals Work", level: 2 },
        { id: "inscriptions", title: "inscriptions", level: 2 },
        { id: "inscriptions-bitcoin-native-digital-artifacts", title: "Inscriptions: Bitcoin-Native Digital Artifacts", level: 2 },
        { id: "brc20", title: "brc20", level: 2 },
        { id: "brc-20-tokens", title: "BRC-20 Tokens", level: 2 },
        { id: "ecosystem", title: "ecosystem", level: 2 },
        { id: "the-ordinals-ecosystem", title: "The Ordinals Ecosystem", level: 2 },
        { id: "debate", title: "debate", level: 2 },
        { id: "the-bitcoin-community-debate", title: "The Bitcoin Community Debate", level: 2 }
      ]}
      faqs={[
        {
          question: "How are Ordinals different from Ethereum NFTs?",
          answer:
            "Ordinals inscriptions store data directly on the Bitcoin blockchain within transaction witness data, making them fully on-chain. Most Ethereum NFTs store only a reference (URL) on-chain, with the actual media hosted on IPFS or centralized servers. Ordinals are immutable and permanent once inscribed, while Ethereum NFTs can point to content that changes or disappears. However, Ordinals lack the programmability of Ethereum smart contracts.",
        },
        {
          question: "Do Ordinals increase Bitcoin transaction fees?",
          answer:
            "Yes. Inscriptions compete for block space with financial transactions, and during periods of high Ordinals activity, fees have increased significantly. This has been both celebrated (providing additional revenue for miners and demonstrating demand for Bitcoin block space) and criticized (making simple Bitcoin transfers more expensive for everyday users).",
        },
        {
          question: "Can Ordinals be filtered or censored by miners?",
          answer:
            "Technically, miners could choose not to include inscription transactions in their blocks, but economically, this is unlikely because inscription transactions pay fees. Some Bitcoin developers have proposed changes to make filtering easier, while others argue that any valid transaction paying appropriate fees should be included. The debate touches fundamental questions about Bitcoin's role as a neutral, censorship-resistant network.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Blockchain?", href: "/learn/what-is-blockchain", category: "Learn" },
        { title: "Proof of Work Explained", href: "/learn/proof-of-work", category: "Learn" },
        { title: "What Are Gas Fees?", href: "/learn/what-are-gas-fees", category: "Learn" },
        { title: "Layer 1 vs Layer 2", href: "/learn/layer-1-vs-layer-2", category: "Learn" },
      ]}
    >
      <section id="how-ordinals-work">
        <h2>How Ordinals Work</h2>
        <p>
          The Ordinals protocol assigns a unique sequential number to every satoshi based on the order in which it was mined. The first satoshi ever mined is ordinal 0, the second is ordinal 1, and so on. This numbering system, combined with rules for tracking satoshis through transactions (using a first-in-first-out convention), makes each of Bitcoin's 2.1 quadrillion satoshis individually identifiable and trackable. This is purely a convention — no changes to Bitcoin's protocol were required.
        </p>
        <p>
          The ordinal numbering system creates rarity tiers based on when satoshis were mined. Satoshis from the genesis block, from halving blocks, or from other historically significant blocks are considered rare or legendary. This rarity system has created a market for specific satoshis with notable ordinal numbers, reminiscent of how rare serial numbers on paper currency command premiums among collectors. The numbering system provides the foundation for inscriptions, which attach data to specific satoshis.
        </p>
      </section>

      <section id="inscriptions">
        <h2>Inscriptions: Bitcoin-Native Digital Artifacts</h2>
        <p>
          Inscriptions are the Ordinals equivalent of NFTs. They work by embedding arbitrary data (images, text, HTML, audio, video) into the witness portion of a Bitcoin transaction, which was made possible by the Taproot upgrade activated in November 2021. The witness data is stored permanently on the Bitcoin blockchain, making inscriptions fully on-chain and immutable. Once inscribed, the data is tied to a specific satoshi and can be transferred along with it.
        </p>
        <p>
          The fully on-chain nature of inscriptions distinguishes them from most Ethereum NFTs, where the media typically resides on external storage. An inscribed image on Bitcoin will exist as long as Bitcoin exists, with no dependency on external servers or IPFS pinning. However, this permanence comes at a cost: storing data on Bitcoin is expensive (paid through transaction fees), and there are practical size limits. The largest inscriptions have been several megabytes, but most are optimized to be much smaller to keep costs manageable.
        </p>
      </section>

      <section id="brc20">
        <h2>BRC-20 Tokens</h2>
        <p>
          BRC-20 is an experimental token standard built on top of the Ordinals protocol that enables the creation of fungible tokens on Bitcoin. Unlike Ethereum's ERC-20 standard, which uses smart contracts, BRC-20 tokens use JSON inscriptions to define token properties (name, supply, mint limit) and track transfers. Users deploy new tokens by inscribing a deployment inscription, mint them by inscribing mint operations, and transfer them by inscribing transfer operations.
        </p>
        <p>
          BRC-20 tokens generated enormous activity and fees on Bitcoin in 2023, with speculative trading volumes reaching billions of dollars. The Runes protocol, also created by Casey Rodarmor and launched in April 2024, provides a more efficient alternative to BRC-20. Runes uses Bitcoin's UTXO model directly rather than JSON inscriptions, resulting in less block space consumption and a more Bitcoin-native design. The rapid iteration from BRC-20 to Runes demonstrates the active experimentation happening in the Bitcoin ecosystem around fungible token standards.
        </p>
      </section>

      <section id="ecosystem">
        <h2>The Ordinals Ecosystem</h2>
        <p>
          A robust ecosystem has emerged around Ordinals, including dedicated marketplaces (Magic Eden Bitcoin, Ordinals Wallet, Gamma), inscription tools (Ord.io, Unisat), and wallet infrastructure (Xverse, Leather, Unisat Wallet). Notable inscription collections have achieved significant secondary market value, and the cultural identity of the Bitcoin inscription community is distinct from the Ethereum NFT community, often emphasizing Bitcoin-native values and aesthetics.
        </p>
        <p>
          The ecosystem has also catalyzed broader innovation on Bitcoin. Layer 2 solutions and sidechains are being developed to bring more functionality to Bitcoin while keeping the base layer simple. Projects exploring smart contract capabilities, decentralized finance, and other applications on Bitcoin have gained renewed momentum, driven partly by the demonstration that there is significant demand for Bitcoin-native applications beyond simple value transfer. Ordinals have reinvigorated the conversation about what Bitcoin can and should be used for.
        </p>
      </section>

      <section id="debate">
        <h2>The Bitcoin Community Debate</h2>
        <p>
          Ordinals have been deeply divisive within the Bitcoin community. Proponents argue that inscriptions are valid transactions paying legitimate fees, that they increase miner revenue (strengthening Bitcoin's security budget as block rewards decrease), that they bring new users and developers to Bitcoin, and that Bitcoin should be a neutral platform that does not discriminate between transaction types. They see Ordinals as a natural evolution of Bitcoin's capabilities.
        </p>
        <p>
          Critics argue that inscriptions clog block space needed for financial transactions, increase fees for everyday users, waste precious block space on images and memes, and distract from Bitcoin's core mission as sound money. Some developers have proposed protocol changes to make inscriptions more difficult or expensive. This debate touches on fundamental philosophical questions about Bitcoin: is it purely a monetary network, or is it a general-purpose ledger? Should miners be able to filter legal transactions based on content type? The resolution of this debate will significantly influence Bitcoin's evolution in the coming years.
        </p>
      </section>
    </LearnPageLayout>
  );
}
