import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is THORChain (RUNE)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about THORChain (RUNE), the cross-chain decentralized liquidity protocol. Discover how native asset swaps work, tokenomics, and how to buy RUNE.",
};

export default function ThorchainPage() {
  return (
    <LearnPageLayout
      title="What Is THORChain (RUNE)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="THORChain is a decentralized cross-chain liquidity protocol that enables native asset swaps between different blockchains without wrapping or bridging. Users can swap real BTC for real ETH directly, without intermediaries or wrapped tokens. RUNE is the native settlement asset and the backbone of the THORChain network."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-thorchain", title: "What Is THORChain?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-thorchain-works", title: "How THORChain Works", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "thorchain-tokenomics", title: "THORChain Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "use-cases-ecosystem", title: "Use Cases & Ecosystem", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-rune", title: "How to Buy RUNE", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-considerations", title: "Risks & Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is THORChain?",
          answer:
            "THORChain is a decentralized cross-chain liquidity network that enables native asset swaps between blockchains like Bitcoin, Ethereum, and Cosmos without bridges or wrapped tokens.",
        },
        {
          question: "Where can I buy RUNE?",
          answer:
            "RUNE is available on Binance, Kraken, Bybit, and other major exchanges. You can also acquire RUNE by providing liquidity to THORChain pools.",
        },
        {
          question: "Is THORChain a good investment?",
          answer:
            "THORChain solves a fundamental problem of cross-chain swaps but carries smart contract and node security risks. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Best Crypto Exchanges", href: "/exchanges/best", category: "Exchanges" },
        { title: "Cosmos", href: "/investing/crypto/cosmos", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is THORChain?</h2>
      <p>
        THORChain is a decentralized liquidity protocol built on the Cosmos SDK that enables native cross-chain asset swaps. Unlike bridges that create wrapped tokens, THORChain holds real native assets in its vaults and processes swaps between actual Layer 1 tokens. This means users swap real BTC for real ETH without any intermediary tokens.
      </p>
      <p>
        The protocol uses an automated market maker (AMM) model where all liquidity pools are paired with RUNE. A network of independent node operators manages the protocol&apos;s vaults and processes cross-chain transactions through a Byzantine Fault Tolerant consensus mechanism.
      </p>
      <p>
        THORChain supports swaps across Bitcoin, Ethereum, BNB Chain, Avalanche, Cosmos, Dogecoin, Bitcoin Cash, Litecoin, and other major chains. The protocol also offers streaming swaps for large trades and a lending feature that allows users to borrow against their crypto collateral.
      </p>

      <h2 id="how-it-works">How THORChain Works</h2>
      <p>
        THORChain operates through a network of node operators who bond RUNE tokens to participate in consensus and vault management. Each supported chain has a vault managed by the active validator set using threshold signature schemes (TSS). When a user initiates a swap, the protocol observes the inbound transaction, executes the swap logic, and sends the output asset from the appropriate vault.
      </p>
      <p>
        The continuous liquidity pool model pairs every asset with RUNE, meaning a BTC-to-ETH swap routes through BTC/RUNE and RUNE/ETH pools. Streaming swaps break large trades into smaller sub-swaps over time to minimize price impact. Liquidity providers deposit assets into pools and earn swap fees and block rewards.
      </p>

      <h2 id="tokenomics">THORChain Tokenomics</h2>
      <p>
        RUNE has a maximum supply of 500 million tokens. RUNE serves as the settlement asset in every liquidity pool, the bond asset for node operators, and the governance token. The deterministic value theorem suggests RUNE&apos;s market cap should be at least three times the total value locked in liquidity pools.
      </p>
      <p>
        Node operators must bond twice the value of the assets they secure, creating a strong economic security model. Block rewards are split between node operators and liquidity providers based on an incentive pendulum that balances security and liquidity. RUNE is also used for network fees and protocol governance.
      </p>

      <h2 id="use-cases">Use Cases &amp; Ecosystem</h2>
      <p>
        THORChain&apos;s primary use case is trustless cross-chain swaps for users who want to move between different blockchain assets without centralized intermediaries or wrapped tokens. Interfaces like THORSwap, ShapeShift, and Trust Wallet provide user-friendly access to THORChain liquidity.
      </p>
      <p>
        The lending feature allows users to deposit BTC or ETH as collateral and borrow against it with no liquidation risk and no interest. Savers vaults enable single-asset yield earning on native assets like BTC and ETH. These features position THORChain as a comprehensive cross-chain DeFi hub.
      </p>

      <h2 id="how-to-buy">How to Buy RUNE</h2>
      <p>
        To buy RUNE, create an account on Binance, Kraken, or Bybit. Complete identity verification, deposit funds, and purchase RUNE tokens. You can also swap into RUNE directly through THORSwap or other THORChain interfaces using Bitcoin or Ethereum without needing a centralized exchange account.
      </p>

      <h2 id="risks">Risks &amp; Considerations</h2>
      <p>
        THORChain&apos;s cross-chain architecture introduces complex security risks, and the protocol has suffered multiple exploits in its history. Managing real native assets across multiple chains requires sophisticated cryptographic operations that present unique attack vectors. Node operator collusion is a theoretical but monitored risk.
      </p>
      <p>
        The lending feature and its impact on RUNE tokenomics have been debated within the community. RUNE&apos;s value is structurally tied to the total value locked in pools, meaning TVL declines directly impact the token. Regulatory scrutiny of cross-chain swap services could affect the protocol&apos;s accessibility.
      </p>
    </LearnPageLayout>
  );
}
