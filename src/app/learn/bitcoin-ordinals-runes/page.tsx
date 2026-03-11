import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bitcoin Ordinals and Runes: Digital Assets on Bitcoin L1 in ${CURRENT_YEAR}`,
  description:
    "Complete guide to Bitcoin Ordinals, BRC-20 tokens, and the Runes protocol. Learn how digital assets, NFTs, and tokens exist on Bitcoin without changing the protocol.",
  keywords: [
    "Bitcoin Ordinals",
    "Runes protocol",
    "BRC-20",
    "Bitcoin tokens",
    "Bitcoin NFTs",
    "Bitcoin L1",
    "inscriptions",
  ],
};

export default function BitcoinOrdinalsRunesPage() {
  return (
    <LearnPageLayout
      title="Bitcoin Ordinals and Runes: Digital Assets on Bitcoin L1"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="13 min"
      intro="Bitcoin Ordinals and Runes represent a paradigm shift in Bitcoin's role from purely a peer-to-peer payment network to a platform for digital assets. Ordinals inscribe arbitrary data (images, videos, contracts) directly into Bitcoin's immutable blockchain, creating native Bitcoin NFTs. Runes expand on this, providing a fungible token standard that's more efficient than earlier approaches. These innovations occurred without requiring Bitcoin protocol changes—instead leveraging existing Bitcoin mechanics in novel ways. The result: Bitcoin now supports NFTs, tokens, and smart contracts, attracting new users and capital while maintaining Bitcoin's core value proposition of decentralization and security. This guide explains Ordinals, Runes, and their implications for Bitcoin's future."
      toc={[
        { id: "what-are-ordinals", title: "What Are Bitcoin Ordinals?", level: 2 },
        { id: "how-ordinals-work", title: "How Ordinals Work: The Indexing Theory", level: 2 },
        { id: "inscriptions-explained", title: "Inscriptions: Storing Data on Bitcoin", level: 2 },
        { id: "brc-20-tokens", title: "BRC-20 Tokens: Fungible Assets on Bitcoin", level: 2 },
        { id: "runes-protocol", title: "Runes Protocol: Improved Token Design", level: 2 },
        { id: "ordinals-use-cases", title: "Use Cases: Digital Art, Gaming, Identity", level: 2 },
        { id: "ordinals-controversies", title: "Ordinals Debates: Blockchain Bloat and Philosophy", level: 2 },
        { id: "future-of-ordinals", title: "The Future of Bitcoin Assets", level: 2 },
      ]}
      faqs={[
        {
          question: "How do Ordinals actually create NFTs on Bitcoin?",
          answer:
            "Ordinals use Bitcoin's Taproot upgrade to attach arbitrary data (images, metadata) to satoshis (Bitcoin's smallest unit). The inscription process wraps data in witness data (a Bitcoin transaction component that doesn't count toward transaction size limits pre-Taproot, enabling efficient large data storage). By indexing satoshis and attaching data, Ordinals create unique, traceable assets on Bitcoin. The innovation is entirely software—no Bitcoin protocol change required.",
        },
        {
          question: "What's the difference between Ordinals and BRC-20?",
          answer:
            "Ordinals are an indexing standard enabling asset creation on Bitcoin. BRC-20 is a token standard using Ordinals. BRC-20 tokens are deployed as inscriptions that specify token contract logic (ticker, supply, balances). Users interact with BRC-20 tokens by creating inscriptions representing transactions (mints, transfers). This leverages Ordinals for token logic without requiring smart contracts.",
        },
        {
          question: "Are Ordinals real NFTs or just data on Bitcoin?",
          answer:
            "Ordinals are real NFTs in the sense that they're immutable, uniquely identifiable assets on Bitcoin. However, unlike Ethereum NFTs which have executable logic (ERC-721 smart contracts), Ordinals are purely data. The utility and value derive from indexing software and community consensus, not smart contract logic. This is philosophically different but equally valid—Bitcoin's immutability provides certainty Ethereum NFTs cannot match.",
        },
        {
          question: "What are Runes and why are they better than BRC-20?",
          answer:
            "Runes are a fungible token protocol optimized for efficiency. BRC-20 creates a token by deploying an inscription, then additional inscriptions represent mints and transfers—requiring multiple transactions per action. Runes use Bitcoin's UTXO model more efficiently: a UTXO contains a rune balance, and spending the UTXO transfers it. This is far more efficient—one transaction per action instead of multiple. Runes also reduce blockchain bloat.",
        },
        {
          question: "Can you lose your Ordinal NFT?",
          answer:
            "Ordinals are attached to satoshis. If you lose control of the satoshis (lose private keys), you lose the Ordinals. If you send satoshis to an incorrect address, you lose the Ordinals attached. Importantly, if you send satoshis to an exchange that doesn't recognize Ordinals, they might be lost—the exchange won't track them. Ordinals aren't protected by smart contracts; they rely on user care and software recognizing them.",
        },
        {
          question: "Does Bitcoin support smart contracts like Ethereum?",
          answer:
            "Bitcoin's scripting is fundamentally limited compared to Ethereum's Turing-complete smart contracts. Bitcoin can't run arbitrary code. Ordinals and BRC-20 work within Bitcoin's constraints by using inscriptions to store contract data and indexing software to track state. This is more like storing a database on Bitcoin than running smart contracts. True Bitcoin smart contracts would require protocol changes or layer 2 solutions.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Bitcoin?", href: "/learn/what-is-bitcoin", category: "Learn Crypto" },
        { title: "Bitcoin vs Ethereum", href: "/learn/bitcoin-vs-ethereum", category: "Learn Crypto" },
        { title: "What Are NFTs?", href: "/learn/what-are-nfts", category: "Learn Crypto" },
        { title: "Bitcoin Halving 2028 Guide", href: "/learn/bitcoin-halving-2028-guide", category: "Learn Crypto" },
      ]}
    >
      <h2 id="what-are-ordinals">What Are Bitcoin Ordinals?</h2>
      <p>
        Ordinals are digital assets inscribed onto Bitcoin's immutable blockchain. Each inscription is attached to a satoshi (Bitcoin's smallest unit, 1/100,000,000th of a Bitcoin) and becomes permanent and immutable. Since satoshis are uniquely traceable on Bitcoin, ordinals are uniquely traceable assets. This enables Bitcoin to host NFTs, images, videos, documents, and arbitrary data without protocol changes.
      </p>
      <p>
        The conceptual breakthrough was recognizing that satoshis themselves can be indexed and tracked. Bitcoin doesn't natively track satoshi identity (from Bitcoin's perspective, 1 satoshi equals another), but software can index and follow specific satoshis. By attaching data to satoshis and tracking them, Ordinals create Bitcoin-native digital assets.
      </p>

      <h2 id="how-ordinals-work">How Ordinals Work: The Indexing Theory</h2>
      <p>
        Ordinals assigns each satoshi a unique number based on its creation time and position. The first satoshi created in the first block is Ordinal #0. The next satoshi is #1, and so on. This numbering is deterministic—everyone can independently compute which satoshi is which. With satoshis numbered, data can be inscribed onto specific satoshis, making them uniquely identifiable assets.
      </p>
      <p>
        The inscription process uses Bitcoin Taproot's witness data, a component designed to store data without consuming block space in the traditional sense. A user creates a transaction that stores data in witness, attaching it to a specific satoshi. Bitcoin validators store this data as part of the transaction. Indexing software then reads this data and associates it with the satoshi.
      </p>

      <h2 id="inscriptions-explained">Inscriptions: Storing Data on Bitcoin</h2>
      <p>
        An inscription stores arbitrary data on Bitcoin—images, videos, metadata, contracts. The inscription process creates a transaction with the data, mines it into a block, and it becomes permanent. Users can inscribe JPEGs, PNGs, videos, documents, or any content. A single inscription can be relatively large (up to megabytes with optimized encoding), making Bitcoin capable of storing substantial digital assets.
      </p>

      <h2 id="brc-20-tokens">BRC-20 Tokens: Fungible Assets on Bitcoin</h2>
      <p>
        BRC-20 is a standard for creating fungible tokens on Bitcoin using Ordinals. Rather than smart contracts, BRC-20 tokens are defined through inscriptions specifying contract logic (ticker, max supply, decimals). A user creates a deploy inscription defining a token. Mint inscriptions represent users minting tokens. Transfer inscriptions represent transactions. An indexer (software) tracks all these inscriptions and maintains the token state.
      </p>

      <h2 id="runes-protocol">Runes Protocol: Improved Token Design</h2>
      <p>
        Runes is a newer fungible token protocol designed to improve on BRC-20. Rather than relying on off-chain indexing of inscriptions, Runes use Bitcoin's UTXO (Unspent Transaction Output) model directly. A UTXO can contain a rune balance. Spending a UTXO transfers the rune. This is far more efficient—rune transfers require single transactions instead of multiple inscriptions. Runes also reduce blockchain bloat by leveraging Bitcoin's native data structures.
      </p>

      <h2 id="ordinals-use-cases">Use Cases: Digital Art, Gaming, Identity</h2>
      <p>
        Ordinals enable digital art to be inscribed permanently on Bitcoin. Artists can sell Bitcoin-native NFTs without relying on external platforms. The immutability of Bitcoin provides permanence—unlike Ethereum NFTs (which depend on IPFS or servers for metadata), Ordinal NFTs have their data immutably stored on Bitcoin itself.
      </p>
      <p>
        Gaming assets and in-game items can be inscribed on Bitcoin, enabling provably-scarce digital items. Identity applications can use Ordinals to represent verifiable credentials and attestations. These use cases benefit from Bitcoin's security and immutability.
      </p>

      <h2 id="ordinals-controversies">Ordinals Debates: Blockchain Bloat and Philosophy</h2>
      <p>
        Ordinals sparked debate within Bitcoin's community. Critics argue that storing NFT images on Bitcoin bloats the blockchain, increasing node storage requirements and harming Bitcoin's utility as currency. Supporters counter that Bitcoin is large enough to accommodate ordinals without meaningful impact, and Bitcoin's abundance of security and immutability makes it superior for digital assets compared to side chains.
      </p>
      <p>
        The philosophical debate is more fundamental: should Bitcoin focus purely on being peer-to-peer cash, or should it embrace a broader platform function? Ordinals proponents argue Bitcoin's immutability is valuable enough to justify additional uses. Critics believe Bitcoin's original vision should remain centered on payments. This tension will likely persist, but market adoption suggests ordinals have genuine utility.
      </p>

      <h2 id="future-of-ordinals">The Future of Bitcoin Assets</h2>
      <p>
        Bitcoin Ordinals and Runes have demonstrated that Bitcoin can host digital assets without protocol changes, through creative use of existing mechanics. As these protocols mature, more sophisticated asset types and applications will emerge. Bitcoin NFTs may eventually rival Ethereum NFTs in utility and adoption. Token creation on Bitcoin may become routine.
      </p>
      <p>
        The long-term implication is that Bitcoin's role may expand beyond currency into a comprehensive digital asset platform—all while maintaining its core security and decentralization guarantees. Whether this aligns with Bitcoin's philosophical vision remains debated, but the capability is now proven and increasingly adopted.
      </p>
    </LearnPageLayout>
  );
}
