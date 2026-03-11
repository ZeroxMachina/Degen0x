import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Boba Network (BOBA)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Boba Network (BOBA), the multichain Layer 2 with hybrid compute capabilities. Discover how it works, tokenomics, use cases, and how to buy BOBA.",
};

export default function BobaPage() {
  return (
    <LearnPageLayout
      title="What Is Boba Network (BOBA)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Boba Network is a multichain Layer 2 scaling solution that extends the capabilities of smart contracts through Hybrid Compute technology. Originally an Optimistic Rollup on Ethereum, Boba has expanded to multiple chains and introduced the ability for smart contracts to call external Web2 APIs and run off-chain computations, bridging the gap between on-chain logic and off-chain data."
      toc={[
        { id: "what-is", title: "What Is Boba Network?", level: 2 },
        { id: "how-it-works", title: "How Does Boba Network Work?", level: 2 },
        { id: "tokenomics", title: "BOBA Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy BOBA", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Boba Network?",
          answer:
            "Boba Network is a multichain Layer 2 with Hybrid Compute technology that allows smart contracts to call Web2 APIs and run off-chain computations, extending blockchain functionality beyond standard smart contracts.",
        },
        {
          question: "Where can I buy BOBA?",
          answer:
            "BOBA is available on Huobi, Gate.io, MEXC, and Uniswap. It trades against USDT, ETH, and BTC pairs.",
        },
        {
          question: "Is Boba Network a good investment?",
          answer:
            "Boba's Hybrid Compute is innovative, but the network has lower adoption than major L2s like Arbitrum and Optimism. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Arbitrum", href: "/investing/crypto/arbitrum", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Boba Network?</h2>
      <p>
        Boba Network was developed by Enya Labs (now Boba Foundation) and launched in late 2021 as a fork of the Optimism codebase. While sharing the optimistic rollup architecture, Boba differentiated itself by introducing Hybrid Compute, a feature that allows smart contracts to make synchronous calls to off-chain compute endpoints during transaction execution. This means a smart contract can query a machine learning model, fetch real-time data from an API, or run complex calculations off-chain within a single transaction.
      </p>
      <p>
        The network has since expanded beyond Ethereum to support deployments on BNB Chain, Avalanche, Fantom, and Moonbeam, making it one of the few Layer 2 solutions with a multichain presence. This multichain approach allows Boba to bring its Hybrid Compute capabilities to multiple blockchain ecosystems rather than being limited to a single base layer.
      </p>

      <h2 id="how-it-works">How Does Boba Network Work?</h2>
      <p>
        Boba uses an optimistic rollup architecture where transactions are executed on the Layer 2 and batched for submission to the base layer. The optimistic verification system assumes transactions are valid unless challenged, with a fraud proof window for disputing incorrect state transitions. Transaction fees on Boba are significantly lower than on the Ethereum mainnet.
      </p>
      <p>
        Hybrid Compute works by allowing smart contracts to specify an off-chain compute endpoint that should be called during transaction execution. The Boba sequencer pauses the transaction, makes the off-chain call, receives the result, and resumes execution with the returned data injected into the smart contract context. This enables use cases like AI inference, complex mathematical calculations, and real-time data integration that are impossible with standard smart contracts.
      </p>

      <h2 id="tokenomics">BOBA Tokenomics</h2>
      <p>
        BOBA has a total supply of approximately 500 million tokens. The token is used for governance over the Boba Network DAO, staking for network participation, and gas fee payments on the Boba network (alongside ETH). BOBA holders can stake their tokens to earn a share of network transaction fees. The token was distributed through an airdrop to OMG Network token holders and is available on multiple chains.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Boba Network powers AI-enhanced smart contracts through Hybrid Compute, cross-chain dApp deployment on multiple Layer 2 instances, low-cost DeFi transactions with off-chain computation capabilities, gaming applications requiring complex off-chain logic, and real-time data integration for smart contracts. The Hybrid Compute feature is particularly relevant for AI and machine learning applications in Web3.
      </p>

      <h2 id="how-to-buy">How to Buy BOBA</h2>
      <p>
        To buy BOBA, create an account on Huobi, Gate.io, or MEXC. Complete identity verification, deposit funds, and purchase BOBA tokens. BOBA is also available on Uniswap. After purchasing, stake BOBA for governance and fee revenue, or bridge to the Boba Network for DeFi use. Store BOBA in MetaMask with the Boba Network configured.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Boba Network has significantly less ecosystem activity and TVL compared to leading Layer 2s like Arbitrum, Optimism, and Base. The Hybrid Compute feature, while innovative, requires off-chain endpoints that may introduce centralization and reliability concerns. If the off-chain compute provider is unavailable, transactions relying on Hybrid Compute would fail.
      </p>
      <p>
        The multichain strategy, while providing broader reach, spreads development resources and liquidity across multiple deployments. Competition from major L2s with larger ecosystems and more developer tools is intense. Token utility depends on sustained network usage and DeFi activity. The optimistic rollup architecture faces competition from emerging zk-rollup solutions with faster finality.
      </p>
    </LearnPageLayout>
  );
}
