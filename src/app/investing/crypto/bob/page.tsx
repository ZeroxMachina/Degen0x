import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is BOB (Build on Bitcoin) (BOB)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about BOB (BOB), the hybrid Layer 2 combining Bitcoin and Ethereum security. Discover how it works, tokenomics, use cases, and how to buy BOB.",
};

export default function BobPage() {
  return (
    <LearnPageLayout
      title="What Is BOB (Build on Bitcoin) (BOB)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="BOB (Build on Bitcoin) is a hybrid Layer 2 that combines Bitcoin's security with Ethereum's smart contract capabilities. Built as an OP Stack rollup that settles on Ethereum while incorporating Bitcoin proof-of-work verification, BOB provides an EVM-compatible environment for building BTCfi applications with access to both Bitcoin and Ethereum ecosystems."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-bob", title: "What Is BOB?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-bob-work", title: "How Does BOB Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "bob-tokenomics", title: "BOB Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-bob", title: "How to Buy BOB", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is BOB?", answer: "BOB is a hybrid Layer 2 combining Bitcoin PoW verification with Ethereum smart contracts via an OP Stack rollup, creating a bridge between Bitcoin and Ethereum DeFi ecosystems." },
        { question: "Where can I buy BOB?", answer: "BOB tokens may be available on DEXs and exchanges following the token launch. Check CoinGecko for current listings." },
        { question: "Is BOB a good investment?", answer: "BOB's hybrid approach is unique but the Bitcoin L2 space is crowded and the long-term winner is unclear. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Bitcoin", href: "/investing/crypto/bitcoin", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is BOB?</h2>
      <p>
        BOB was created by a team with deep experience in both Bitcoin and Ethereum development, launching with the insight that the best Bitcoin Layer 2 should leverage Ethereum&apos;s mature smart contract tooling and rollup infrastructure rather than building everything from scratch. By using the OP Stack, BOB inherits the battle-tested rollup framework while adding Bitcoin-native features like a BTC light client and Bitcoin proof-of-work verification.
      </p>
      <p>
        The hybrid approach allows BOB to offer the full EVM development experience (Solidity, Hardhat, Foundry) while natively verifying Bitcoin block headers on-chain. This means BOB smart contracts can trustlessly verify Bitcoin transactions, enabling sophisticated BTCfi applications that interact with the Bitcoin base layer without relying on centralized oracles or multisig bridges for BTC state verification.
      </p>

      <h2 id="how-it-works">How Does BOB Work?</h2>
      <p>
        BOB runs as an OP Stack optimistic rollup that settles on Ethereum for data availability and dispute resolution. On top of this, BOB integrates a Bitcoin light client that verifies Bitcoin block headers and allows smart contracts to validate Bitcoin transactions through SPV (Simplified Payment Verification) proofs. This enables trustless BTC interactions without modifying the Bitcoin protocol.
      </p>
      <p>
        BTC enters the BOB ecosystem through multiple bridge options including tBTC (threshold bridge), WBTC, and other wrapped BTC formats. The BOB SDK provides developers with tools for building applications that interact with both Bitcoin and Ethereum. The network plans to progressively add Bitcoin-based security through merged mining and BitVM verification alongside its Ethereum settlement layer.
      </p>

      <h2 id="tokenomics">BOB Tokenomics</h2>
      <p>
        BOB token serves as the governance and utility token for the BOB network. It is used for governance over protocol parameters, ecosystem incentives, and future staking roles. The token may also be used for gas fees on the BOB network in future upgrades. Distribution includes allocations for the community, ecosystem development, team, and early supporters.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        BOB powers BTCfi applications with trustless Bitcoin transaction verification, cross-ecosystem DeFi bridging Bitcoin and Ethereum, Bitcoin-collateralized lending and borrowing, DEX trading with native BTC support, and hybrid applications that leverage both Bitcoin security and Ethereum smart contracts. The platform is targeted at developers who want to build Bitcoin-native DeFi without sacrificing EVM tooling.
      </p>

      <h2 id="how-to-buy">How to Buy BOB</h2>
      <p>
        To acquire BOB tokens, check major exchanges and DEXs for current listings and trading pairs. Bridge assets to the BOB network through supported bridges for DeFi participation. Store BOB tokens in MetaMask with the BOB network configured, or use a compatible hardware wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        The hybrid approach adds complexity compared to pure Bitcoin L2s or pure Ethereum L2s. Settling on Ethereum rather than Bitcoin may not appeal to Bitcoin maximalists. The Bitcoin L2 space has dozens of competitors, and it is unclear which approach will gain dominant adoption. BTC bridging remains a key challenge, and current bridge solutions carry varying degrees of trust assumptions.
      </p>
      <p>
        The OP Stack dependency means BOB inherits any Optimism-level risks. Ecosystem development is early, and TVL is still growing. Developer interest in BTCfi must continue growing to justify the infrastructure investment. Regulatory treatment of hybrid Bitcoin-Ethereum protocols is uncharted territory.
      </p>
    </LearnPageLayout>
  );
}
