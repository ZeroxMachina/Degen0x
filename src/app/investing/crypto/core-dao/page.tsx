import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Core DAO (CORE)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Core DAO (CORE), the Bitcoin-powered EVM blockchain using Satoshi Plus consensus. Discover how it works, tokenomics, use cases, and how to buy CORE.",
};

export default function CoreDaoPage() {
  return (
    <LearnPageLayout
      title="What Is Core DAO (CORE)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Core DAO is a Layer 1 blockchain that combines Bitcoin mining hash power with a delegated proof-of-stake consensus mechanism called Satoshi Plus. This unique design leverages Bitcoin's security while providing an EVM-compatible smart contract platform, allowing Bitcoin miners to earn additional rewards by delegating their hash power to Core validators without diverting resources from Bitcoin mining."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-core-dao", title: "What Is Core DAO?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-core-dao-work", title: "How Does Core DAO Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "core-tokenomics", title: "CORE Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-core", title: "How to Buy CORE", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is Core DAO?", answer: "Core DAO is a Layer 1 blockchain using Satoshi Plus consensus that combines Bitcoin mining hash power with delegated proof-of-stake for an EVM-compatible smart contract platform secured by Bitcoin miners." },
        { question: "Where can I buy CORE?", answer: "CORE is available on OKX, Bybit, Gate.io, MEXC, and other exchanges. It trades against USDT and BTC pairs." },
        { question: "Is Core DAO a good investment?", answer: "Core DAO's unique Bitcoin-aligned consensus is innovative, but the chain needs to build a larger DeFi ecosystem to compete. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Bitcoin", href: "/investing/crypto/bitcoin", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Core DAO?</h2>
      <p>
        Core DAO launched its mainnet in January 2023 with the mission of creating a blockchain that is aligned with Bitcoin&apos;s security model while offering smart contract functionality. The Satoshi Plus consensus mechanism is designed so that Bitcoin miners can participate in Core validation by simply including metadata in their Bitcoin coinbase transactions, earning CORE rewards without redirecting any hash power away from Bitcoin mining.
      </p>
      <p>
        This approach positions Core as a non-competitive extension of Bitcoin&apos;s security, where miners earn supplementary income while maintaining their Bitcoin mining operations unchanged. Core has also introduced Non-Custodial Bitcoin Staking, allowing Bitcoin holders to lock BTC on the Bitcoin network and delegate it to Core validators to earn CORE rewards, enabling Bitcoin yield without bridging or wrapping BTC.
      </p>

      <h2 id="how-it-works">How Does Core DAO Work?</h2>
      <p>
        Satoshi Plus consensus combines three elements: Delegated Proof of Work (miners delegate hash power), Delegated Proof of Stake (CORE token staking), and Non-Custodial BTC Staking (Bitcoin holders lock BTC). Validators are elected based on a weighted combination of all three delegation types. Block producers are rotated regularly, and slashing conditions apply for misbehavior.
      </p>
      <p>
        The EVM-compatible execution layer supports standard Solidity smart contracts and development tools. Bitcoin miners delegate by embedding Core validator addresses in their Bitcoin block coinbase transactions. BTC staking uses timelocked UTXOs on Bitcoin, meaning the BTC never leaves the Bitcoin network. Core&apos;s bridge infrastructure enables wrapped BTC (coreBTC) for use in DeFi applications on the Core chain.
      </p>

      <h2 id="tokenomics">CORE Tokenomics</h2>
      <p>
        CORE has a maximum supply of 2.1 billion tokens (mirroring Bitcoin&apos;s 21 million in scale). The token is used for validator staking, gas fees, governance, and reward distribution to miners and stakers. Block rewards are distributed to validators and their delegators from both CORE inflation and transaction fees. A percentage of block rewards is burned, creating deflationary mechanics as network usage increases.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Core DAO enables Bitcoin-secured smart contract execution, supplementary income for Bitcoin miners, non-custodial BTC staking for yield, EVM DeFi with Bitcoin security alignment, and BTCfi applications leveraging bridged Bitcoin. The platform appeals to the Bitcoin community seeking smart contract functionality and yield without compromising on Bitcoin&apos;s security principles.
      </p>

      <h2 id="how-to-buy">How to Buy CORE</h2>
      <p>
        To buy CORE, create an account on OKX, Bybit, or Gate.io. Complete identity verification, deposit funds, and purchase CORE tokens. After purchasing, stake CORE with validators to earn staking rewards. You can also delegate BTC to Core validators for BTC staking rewards. Store CORE in MetaMask with the Core network configured.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        The effectiveness of Satoshi Plus in securing the chain long-term remains to be proven at scale. Bitcoin miner participation in Core delegation is voluntary and may fluctuate. The DeFi ecosystem on Core is still developing compared to established EVM chains. Competition from other Bitcoin L2 and sidechain solutions is growing rapidly.
      </p>
      <p>
        Non-custodial BTC staking, while innovative, requires users to lock their BTC, reducing liquidity. Bridged Bitcoin on Core carries bridge risk. The large token supply and ongoing inflation from block rewards create selling pressure. Regulatory uncertainty around Bitcoin staking derivatives and alternative Layer 1 tokens adds risk.
      </p>
    </LearnPageLayout>
  );
}
