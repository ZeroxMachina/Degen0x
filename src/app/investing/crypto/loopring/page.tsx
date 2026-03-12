import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Loopring (LRC)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Loopring (LRC), the zkRollup Layer 2 protocol for trading and payments. Discover how it works, tokenomics, use cases, and how to buy LRC.",
};

export default function LoopringPage() {
  return (
    <LearnPageLayout
      title="What Is Loopring (LRC)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Loopring is an Ethereum Layer 2 zkRollup protocol focused on decentralized trading and payments. As one of the earliest ZK rollup implementations, Loopring provides a high-throughput order book and AMM exchange with Ethereum-level security at a fraction of the gas cost. The protocol gained widespread attention through its partnership with GameStop for their NFT marketplace."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-loopring", title: "What Is Loopring?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-loopring-work", title: "How Does Loopring Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "lrc-tokenomics", title: "LRC Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-lrc", title: "How to Buy LRC", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Loopring?",
          answer:
            "Loopring is an Ethereum Layer 2 zkRollup protocol providing a decentralized exchange with order book and AMM trading, plus a smart wallet for low-cost Ethereum payments and asset management.",
        },
        {
          question: "Where can I buy LRC?",
          answer:
            "LRC is available on Coinbase, Binance, Kraken, and other major exchanges. It also trades on the Loopring DEX itself.",
        },
        {
          question: "Is Loopring a good investment?",
          answer:
            "Loopring was a ZK rollup pioneer but faces intense competition from newer, more general-purpose L2 solutions. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Ethereum", href: "/investing/crypto/ethereum", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Loopring?</h2>
      <p>
        Loopring was founded by Daniel Wang in 2017, making it one of the oldest Layer 2 projects in the Ethereum ecosystem. The protocol pioneered the application of zero-knowledge proofs for scaling Ethereum transactions before general-purpose zkEVMs existed. Loopring&apos;s approach was application-specific: rather than creating a general-purpose L2, it built a ZK rollup optimized specifically for order book exchanges and payment transfers.
      </p>
      <p>
        The protocol gained significant mainstream attention in late 2021 when GameStop partnered with Loopring to build their NFT marketplace on the L2. This partnership brought Loopring to the attention of the retail investment community and briefly pushed LRC into the top 50 cryptocurrencies by market cap. Loopring also developed a smart wallet application that provides Ethereum L2 functionality directly to end users.
      </p>

      <h2 id="how-it-works">How Does Loopring Work?</h2>
      <p>
        Loopring batches thousands of trades and transfers into a single transaction with a ZK-SNARK proof that is verified on Ethereum mainnet. Each batch compresses the state changes from many individual operations into a single proof, achieving throughput of over 2,000 trades per second. The ZK proof guarantees that all trades in the batch were executed correctly without Ethereum needing to re-execute each one.
      </p>
      <p>
        The protocol supports both order book trading (where makers and takers place limit and market orders) and AMM trading (where liquidity providers deposit into pools). The Loopring Smart Wallet provides social recovery features and L2-native account management, allowing users to interact with the Loopring L2 directly without first depositing to an Ethereum L1 address.
      </p>

      <h2 id="tokenomics">LRC Tokenomics</h2>
      <p>
        LRC has a fixed supply of approximately 1.37 billion tokens with no inflation. The token is used for protocol fee discounts (LRC stakers receive reduced trading fees), staking for protocol insurance, governance, and as an economic incentive for ecosystem participation. A portion of trading fees collected by the protocol is used to buy and burn LRC, while another portion goes to LRC stakers as rewards.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Loopring powers low-cost order book and AMM trading on Ethereum L2, fast and cheap ETH and ERC-20 token transfers, NFT minting and trading at L2 costs, smart wallet functionality with social recovery, and payment applications requiring near-instant finality. The protocol is suited for users who want the security of Ethereum with the speed and cost of a centralized exchange.
      </p>

      <h2 id="how-to-buy">How to Buy LRC</h2>
      <p>
        To buy LRC, create an account on Coinbase, Binance, or Kraken. Complete identity verification, deposit funds, and purchase LRC tokens. You can also trade directly on the Loopring DEX by depositing ETH into the L2. After purchasing, stake LRC for protocol fee revenue and trading fee discounts. LRC is an ERC-20 token stored in MetaMask or Ledger wallets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Loopring&apos;s application-specific L2 approach has been overtaken by general-purpose zkEVMs like zkSync and Scroll that offer full smart contract programmability alongside trading. The DEX trading volume on Loopring has declined relative to competitors on other L2s. The GameStop partnership, while notable, has not translated into sustained ecosystem growth.
      </p>
      <p>
        Daniel Wang&apos;s departure to found Taiko raised questions about ongoing development leadership. Competition from Uniswap, dYdX, and other DEXs across multiple L2s limits Loopring&apos;s market share. The smart wallet faces competition from more feature-rich alternatives. Without a general-purpose smart contract platform, Loopring cannot capture the broader L2 ecosystem growth trend.
      </p>
    </LearnPageLayout>
  );
}
