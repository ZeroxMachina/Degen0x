import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Linea (LINEA)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Linea (LINEA), the Consensys-backed zkEVM Layer 2 for Ethereum. Discover how it works, ecosystem, use cases, and how to participate in Linea.",
};

export default function LineaPage() {
  return (
    <LearnPageLayout
      title="What Is Linea (LINEA)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Linea is an Ethereum Layer 2 network developed by Consensys, the company behind MetaMask, Infura, and other core Ethereum infrastructure. Linea uses a type 2 zkEVM (zero-knowledge Ethereum Virtual Machine) to provide fast, low-cost transactions with Ethereum-grade security. Backed by one of the most established companies in blockchain, Linea benefits from deep integration with the MetaMask wallet and Infura node infrastructure."
      toc={[
        { id: "what-is", title: "What Is Linea?", level: 2 },
        { id: "how-it-works", title: "How Does Linea Work?", level: 2 },
        { id: "tokenomics", title: "LINEA Token & Ecosystem", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Use Linea", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Linea?",
          answer: "Linea is a Consensys-developed Ethereum Layer 2 zkEVM network that provides low-cost transactions with deep MetaMask integration and Ethereum-equivalent smart contract support.",
        },
        {
          question: "Does Linea have a token?",
          answer: "Linea has not yet launched a public token as of early 2025, but a future LINEA token for governance is anticipated based on ecosystem activity programs.",
        },
        {
          question: "Is Linea a good investment?",
          answer: "Linea benefits from Consensys backing and MetaMask integration but has not launched a token yet and faces strong L2 competition. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "zkSync", href: "/investing/crypto/zksync", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Linea?</h2>
      <p>
        Linea was developed by Consensys, founded by Ethereum co-founder Joseph Lubin. The network launched its mainnet in July 2023 after extensive testnet phases. Linea represents Consensys&apos;s strategic entry into the Layer 2 scaling space, leveraging the company&apos;s deep relationships with Ethereum developers and its suite of developer tools including MetaMask (over 30 million monthly active users), Infura (the leading Ethereum node provider), and Truffle development framework.
      </p>
      <p>
        The key advantage of Linea is its integration with the Consensys ecosystem. MetaMask features built-in Linea network support, making it seamless for millions of existing MetaMask users to bridge assets and interact with Linea dApps. Infura provides reliable RPC endpoints for developers building on Linea. This distribution advantage through existing infrastructure sets Linea apart from independent L2 projects that must build user acquisition channels from scratch.
      </p>

      <h2 id="how-it-works">How Does Linea Work?</h2>
      <p>
        Linea uses a lattice-based zkEVM that generates zero-knowledge proofs for transaction batches executed on the network. Transactions are processed by the sequencer, which orders and executes them off-chain. The execution traces are then compiled into ZK proofs using Consensys&apos;s custom prover technology. These proofs are verified on Ethereum mainnet, ensuring that all state transitions are mathematically correct and cannot be forged.
      </p>
      <p>
        The type 2 zkEVM classification means Linea is fully equivalent to the EVM at the bytecode level, allowing developers to deploy existing Ethereum smart contracts without modifications. Linea supports all standard Ethereum tooling and development workflows. The network processes transactions significantly faster than Ethereum mainnet at a fraction of the gas cost, while maintaining the same security guarantees through ZK proof verification.
      </p>

      <h2 id="tokenomics">LINEA Token &amp; Ecosystem</h2>
      <p>
        As of early 2025, Linea has not launched a public token. However, the network has run multiple ecosystem activity campaigns (Linea Voyage, Linea Surge) that reward users with LXP (Linea Experience Points) and LXP-L for DeFi activity. These points programs are widely anticipated to form the basis for a future token distribution. The Linea ecosystem includes major DeFi protocols, NFT platforms, and infrastructure projects that have deployed on the network.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Linea enables low-cost Ethereum transactions with seamless MetaMask integration, DeFi applications including DEXs, lending protocols, and yield farming. The MetaMask distribution channel makes Linea accessible to mainstream crypto users. Developers benefit from Consensys tooling and Infura infrastructure for building and deploying applications. Enterprise use cases leverage Consensys&apos;s established relationships with institutional players interested in blockchain adoption.
      </p>

      <h2 id="how-to-buy">How to Use Linea</h2>
      <p>
        To use Linea, add the Linea network to MetaMask (it may be pre-configured in recent versions). Bridge ETH from Ethereum mainnet using the official Linea bridge or third-party bridges like Hop Protocol and Stargate. Once on Linea, interact with DeFi protocols, mint NFTs, and participate in ecosystem activities. If and when the LINEA token launches, it will likely be available on major exchanges and Linea-native DEXs.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Linea&apos;s centralized development under Consensys means governance and decision-making are controlled by a single corporate entity, which contradicts the decentralization ethos of the broader crypto ecosystem. The sequencer is centralized, creating censorship and liveness risks. Competition from zkSync, Scroll, Polygon zkEVM, and optimistic rollups like Arbitrum and Base makes the L2 landscape highly competitive.
      </p>
      <p>
        The absence of a token creates uncertainty about the eventual tokenomics and distribution. Points programs may not convert to tokens as community members expect. Consensys&apos;s financial health directly impacts Linea&apos;s development and support. The zkEVM proving infrastructure is resource-intensive, and the economics of running the network at scale depend on achieving sufficient transaction volume to cover proving costs.
      </p>
    </LearnPageLayout>
  );
}
