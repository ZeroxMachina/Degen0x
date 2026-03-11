import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Obol Network (OBOL)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about Obol Network (OBOL), the DVT middleware for Ethereum staking. Discover how it works, tokenomics, use cases, and how to buy OBOL.",
};

export default function ObolPage() {
  return (
    <LearnPageLayout
      title="What Is Obol Network (OBOL)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Obol Network is a Distributed Validator Technology (DVT) middleware protocol that enables trust-minimized Ethereum staking through distributed validators using the Charon client. Obol's approach allows multiple independent parties to collectively operate validators, improving resilience and decentralization while reducing the risk of slashing and downtime."
      toc={[
        { id: "what-is", title: "What Is Obol Network?", level: 2 },
        { id: "how-it-works", title: "How Does Obol Network Work?", level: 2 },
        { id: "tokenomics", title: "OBOL Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy OBOL", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Obol Network?", answer: "Obol Network is a DVT middleware protocol using the Charon client to enable distributed validators where multiple operators collectively run a single Ethereum validator for enhanced resilience and decentralization." },
        { question: "Where can I buy OBOL?", answer: "OBOL is available on major exchanges following its token launch. Check CoinGecko for current listings and trading pairs." },
        { question: "Is Obol Network a good investment?", answer: "Obol provides essential DVT infrastructure for Ethereum staking security, but DVT adoption is still developing. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Ethereum", href: "/investing/crypto/ethereum", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Obol Network?</h2>
      <p>Obol Network was co-founded by Collin Myers and Oisin Kyne with the mission of scaling Ethereum consensus by enabling trust-minimized staking through DVT. The flagship product, Charon, is a middleware client that sits between the consensus client and validator client, coordinating distributed validator duties across multiple operator nodes using BLS threshold signatures.</p>
      <p>Obol has been supported by the Ethereum Foundation and integrated by major staking protocols including Lido. The Obol Collective, a community of operators and staking services, operates thousands of distributed validators across the Ethereum network. Obol&apos;s technology is particularly important for staking protocols seeking to decentralize their validator operations while maintaining high performance.</p>

      <h2 id="how-it-works">How Does Obol Network Work?</h2>
      <p>Charon operates as a middleware daemon that multiple operators run alongside their standard Ethereum clients. During a distributed key generation (DKG) ceremony, operators collectively create a validator key that is split into shares, with no single operator ever holding the complete key. Charon coordinates consensus among operators for each validator duty, using BLS threshold signatures to produce valid attestations and block proposals.</p>
      <p>Operators use the Obol Launchpad to form squads (groups of operators running a distributed validator together). The split validator contracts handle reward distribution among squad members. The protocol supports various cluster sizes and threshold configurations depending on the desired resilience and performance trade-offs.</p>

      <h2 id="tokenomics">OBOL Tokenomics</h2>
      <p>OBOL is the governance and utility token of the Obol Network. The token is used for governance over protocol parameters and development direction, staking for protocol participation, and retroactive funding for the Obol Collective. A portion of staking rewards from distributed validators flows to the Obol treasury through a small protocol fee on distributed validator earnings.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>Obol enables distributed validator operation for liquid staking protocols, trust-minimized solo staking through squad-based validation, institutional-grade validator redundancy, Ethereum network decentralization through geographic and organizational distribution of validators, and community-operated staking squads for collaborative validation.</p>

      <h2 id="how-to-buy">How to Buy OBOL</h2>
      <p>To buy OBOL, check major exchanges for available trading pairs following the token launch. OBOL may also be available on DEXs. Store OBOL in MetaMask or a Ledger wallet.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>DVT adoption is still nascent, and the value proposition requires education and operator onboarding. Competition from SSV Network for DVT market share is direct. The middleware approach adds complexity and potential latency to validator operations. Revenue from protocol fees on distributed validator earnings must grow significantly. Regulatory uncertainty around staking infrastructure tokens adds risk.</p>
    </LearnPageLayout>
  );
}
