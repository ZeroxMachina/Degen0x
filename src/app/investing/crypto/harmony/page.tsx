import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Harmony (ONE)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Harmony (ONE), the sharded blockchain for cross-chain interoperability. Discover how it works, tokenomics, use cases, and how to buy ONE.",
};

export default function HarmonyPage() {
  return (
    <LearnPageLayout
      title="What Is Harmony (ONE)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="7 min read"
      intro="Harmony is a sharded, EVM-compatible blockchain designed for scalability and cross-chain interoperability. Using effective proof-of-stake consensus and random sharding, Harmony aims to provide fast and low-cost transactions. The ONE token is used for staking, governance, and transaction fees across the network."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-harmony", title: "What Is Harmony?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-harmony-work", title: "How Does Harmony Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "one-tokenomics", title: "ONE Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-one", title: "How to Buy ONE", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Harmony?",
          answer:
            "Harmony is a sharded blockchain using effective proof-of-stake for fast, low-cost EVM-compatible transactions with cross-chain bridge capabilities.",
        },
        {
          question: "Where can I buy ONE?",
          answer:
            "ONE is available on Binance, KuCoin, Gate.io, and some other exchanges. Availability varies by region.",
        },
        {
          question: "Is Harmony a good investment?",
          answer:
            "Harmony has solid technology but suffered a major bridge hack and faces strong competition. This is a higher-risk investment. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Zilliqa", href: "/investing/crypto/zilliqa", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Harmony?</h2>
      <p>
        Harmony was founded in 2018 by Stephen Tse and launched its mainnet in 2019. The blockchain uses sharding to divide the network into parallel processing groups, achieving higher throughput than non-sharded chains while maintaining full EVM compatibility. Harmony&apos;s two-second finality and low transaction costs attracted a DeFi ecosystem during the 2021 bull market.
      </p>
      <p>
        The project suffered a significant setback when its Horizon cross-chain bridge was hacked for approximately $100 million in June 2022. The aftermath of this hack, including challenges in making affected users whole, has significantly impacted the project&apos;s reputation and ecosystem development.
      </p>

      <h2 id="how-it-works">How Does Harmony Work?</h2>
      <p>
        Harmony uses Effective Proof of Stake (EPoS), which distributes stake evenly across shards to prevent power concentration. Random sharding assigns validators to shards unpredictably, enhancing security. Cross-shard transactions are handled through a relay mechanism that maintains atomicity across shard boundaries. The network currently operates with four shards.
      </p>
      <p>
        Fast Byzantine Fault Tolerance (FBFT) consensus achieves two-second finality within each shard. Full EVM compatibility allows existing Ethereum dApps to deploy on Harmony with minimal modifications, and developers can use familiar Solidity tooling.
      </p>

      <h2 id="tokenomics">ONE Tokenomics</h2>
      <p>
        ONE has a circulating supply of approximately 14.1 billion tokens with ongoing inflation from staking rewards. Annual issuance is capped at 441 million ONE. Transaction fees are burned, providing deflationary pressure. ONE is used for transaction fees, staking with validators (earning approximately 8-10% APY), and governance voting on protocol proposals.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Harmony supports DeFi protocols, NFT marketplaces, cross-chain bridges, and gaming applications. The ecosystem includes DEXs, lending protocols, and yield farms. The chain&apos;s low costs make it accessible for smaller transactions and micro-payments. Cross-chain interoperability through bridges (rebuilt with improved security post-hack) connects Harmony to other ecosystems.
      </p>

      <h2 id="how-to-buy">How to Buy ONE</h2>
      <p>
        To buy ONE, register on Binance, KuCoin, or Gate.io. Complete identity verification, deposit funds, and purchase ONE tokens. After buying, you can stake ONE through the Harmony staking dashboard for rewards. ONE is stored in MetaMask (configured for Harmony network) or the official Harmony Chrome extension wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        The $100 million Horizon bridge hack severely damaged trust in the Harmony ecosystem. Recovery and compensation efforts have been slow, deterring users and developers. The ecosystem has shrunk significantly, with many DeFi protocols and developers migrating to other chains. Competition from newer, more feature-rich blockchains limits Harmony&apos;s ability to attract new projects.
      </p>
      <p>
        Token inflation creates persistent dilution for holders. The team&apos;s ability to rebuild trust and attract developers back to the platform is uncertain. ONE should be considered a higher-risk investment given the project&apos;s challenges and reduced ecosystem activity compared to its peak.
      </p>
    </LearnPageLayout>
  );
}
