import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Ankr (ANKR)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Ankr (ANKR), the decentralized Web3 infrastructure provider. Discover how it works, tokenomics, use cases, and how to buy ANKR.",
};

export default function AnkrPage() {
  return (
    <LearnPageLayout
      title="What Is Ankr (ANKR)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Ankr is a decentralized Web3 infrastructure platform that provides node hosting, RPC endpoints, and liquid staking services for blockchain developers and users. By offering distributed, multi-cloud infrastructure, Ankr lowers the barrier to entry for accessing and building on blockchains across multiple networks."
      toc={[
        { id: "what-is", title: "What Is Ankr?", level: 2 },
        { id: "how-it-works", title: "How Does Ankr Work?", level: 2 },
        { id: "tokenomics", title: "ANKR Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy ANKR", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Ankr?",
          answer:
            "Ankr is a decentralized Web3 infrastructure provider offering RPC endpoints, node hosting, and liquid staking across 50+ blockchains. It makes blockchain access affordable and reliable for developers.",
        },
        {
          question: "Where can I buy ANKR?",
          answer:
            "ANKR is available on Coinbase, Binance, Kraken, and other major centralized exchanges. It also trades on Uniswap and other DEXs.",
        },
        {
          question: "Is Ankr a good investment?",
          answer:
            "Ankr provides essential Web3 infrastructure with growing demand, but faces competition from Infura, Alchemy, and other RPC providers. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Ethereum", href: "/investing/crypto/ethereum", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Ankr?</h2>
      <p>
        Ankr was founded in 2017 by Chandler Song and Ryan Fang with the goal of making Web3 infrastructure accessible and affordable. The platform initially focused on distributed cloud computing before evolving into a comprehensive blockchain infrastructure provider. Today, Ankr serves billions of RPC requests daily across more than 50 blockchain networks, supporting developers who need reliable access to on-chain data.
      </p>
      <p>
        The protocol operates a decentralized network of node operators who provide RPC (Remote Procedure Call) endpoints, allowing dApps, wallets, and other Web3 services to interact with blockchains. Ankr also offers liquid staking solutions, AppChains-as-a-Service, and advanced API tools, making it a one-stop shop for blockchain infrastructure needs.
      </p>

      <h2 id="how-it-works">How Does Ankr Work?</h2>
      <p>
        Ankr&apos;s infrastructure is built on a distributed network of independent node providers rather than centralized data centers. When developers send an RPC request through Ankr, it is automatically routed to the nearest available node, ensuring low latency and high uptime. The premium tier offers dedicated endpoints with guaranteed throughput, while the public tier provides free access with rate limits.
      </p>
      <p>
        The liquid staking component allows users to stake assets like ETH, BNB, MATIC, and others while receiving liquid staking tokens (such as ankrETH) that can be used in DeFi. Ankr&apos;s AppChains service enables projects to launch customized blockchain environments with dedicated infrastructure, validator management, and block explorer tooling.
      </p>

      <h2 id="tokenomics">ANKR Tokenomics</h2>
      <p>
        ANKR has a total supply of 10 billion tokens. The token is used to pay for premium RPC services, participate in governance decisions, and stake within the Ankr network. Node operators must stake ANKR as collateral to provide infrastructure services, aligning incentives between providers and users. A portion of protocol fees is used to buy back and burn ANKR tokens, creating deflationary pressure as network usage grows.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Ankr powers multi-chain RPC access for dApp developers, liquid staking across major proof-of-stake networks, AppChains deployment for projects needing dedicated infrastructure, and advanced blockchain data APIs. The platform is widely used by wallets, DeFi protocols, NFT marketplaces, and blockchain analytics tools that require reliable node access without the operational burden of running their own infrastructure.
      </p>

      <h2 id="how-to-buy">How to Buy ANKR</h2>
      <p>
        To buy ANKR, create an account on Coinbase, Binance, or Kraken. Complete identity verification, deposit funds via bank transfer or card, and purchase ANKR tokens. You can also acquire ANKR on decentralized exchanges like Uniswap by swapping ETH. After purchasing, store your tokens in MetaMask or a Ledger hardware wallet for security.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Ankr operates in a competitive infrastructure market alongside Infura, Alchemy, QuickNode, and other established providers with significant enterprise relationships. Many competing services offer free tiers that limit ANKR token demand. The transition to a more decentralized node network introduces complexity and potential reliability concerns during the migration.
      </p>
      <p>
        Token utility depends on sustained developer demand for paid infrastructure services, which can fluctuate with broader crypto market cycles. Liquid staking faces competition from Lido, Rocket Pool, and other specialized protocols. Regulatory uncertainty around staking services could impact the liquid staking business. Smart contract risk applies to all staking and DeFi integrations.
      </p>
    </LearnPageLayout>
  );
}
