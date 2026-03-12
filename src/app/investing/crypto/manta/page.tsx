import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Manta Network (MANTA)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Manta Network (MANTA), the modular blockchain for zero-knowledge applications. Discover how it works, tokenomics, use cases, and how to buy MANTA.",
};

export default function MantaPage() {
  return (
    <LearnPageLayout
      title="What Is Manta Network (MANTA)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Manta Network is a modular blockchain ecosystem focused on zero-knowledge (ZK) applications, consisting of Manta Pacific (an Ethereum Layer 2 for ZK app deployment) and Manta Atlantic (a Polkadot-based chain). Manta Pacific provides developers with tools to build ZK-enabled applications without needing deep ZK expertise, using Universal Circuits for simplified zero-knowledge proof integration."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-manta-network", title: "What Is Manta Network?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-manta-network-work", title: "How Does Manta Network Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "manta-tokenomics", title: "MANTA Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-manta", title: "How to Buy MANTA", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Manta Network?",
          answer:
            "Manta Network is a modular blockchain ecosystem for ZK applications, featuring Manta Pacific (Ethereum L2) that simplifies building ZK-enabled apps using Universal Circuits and modular data availability.",
        },
        {
          question: "Where can I buy MANTA?",
          answer:
            "MANTA is available on Binance, OKX, Bybit, KuCoin, and major DEXs. It trades against USDT, BTC, and ETH pairs.",
        },
        {
          question: "Is Manta Network a good investment?",
          answer:
            "Manta has strong ZK technology and growing ecosystem, but faces competition from other ZK-focused L2s and general-purpose rollups. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "zkSync", href: "/investing/crypto/zksync", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Manta Network?</h2>
      <p>
        Manta Network was co-founded by Kenny Li and Shumo Chu (a cryptography professor) with the mission of making zero-knowledge proofs accessible to mainstream developers. The project launched Manta Pacific as a modular Layer 2 on Ethereum using Celestia for data availability, achieving lower transaction costs than L2s that post data directly to Ethereum. Manta Pacific rapidly attracted significant TVL through its New Paradigm campaign.
      </p>
      <p>
        The key differentiator is Manta&apos;s Universal Circuits technology, which provides pre-built ZK circuit libraries that developers can integrate into their applications through simple SDK calls. This abstracts away the complexity of ZK proof generation, allowing Solidity developers to add privacy features, identity verification, or compliance tools to their dApps without learning ZK-specific programming languages or circuit design.
      </p>

      <h2 id="how-it-works">How Does Manta Network Work?</h2>
      <p>
        Manta Pacific operates as an OP Stack-based rollup on Ethereum using Celestia for data availability. Transactions execute on the L2 with state commitments posted to Ethereum. The modular architecture separates execution (Manta Pacific), data availability (Celestia), and settlement (Ethereum) layers for optimal performance and cost. Transaction fees are significantly lower than mainnet Ethereum.
      </p>
      <p>
        Universal Circuits provide Typescript and Solidity SDKs for integrating ZK proofs. Developers can generate proofs client-side and verify them on-chain. zkSBTs (zero-knowledge Soulbound Tokens) enable privacy-preserving identity and credentials. The Manta New Paradigm staking program incentivized deposits while rewarding users with MANTA tokens and ecosystem project tokens for providing liquidity and engagement.
      </p>

      <h2 id="tokenomics">MANTA Tokenomics</h2>
      <p>
        MANTA has a total supply of 1 billion tokens. The token is used for gas fees on Manta Pacific, governance over protocol parameters, staking for network security, and ecosystem incentives. A portion of gas fees is burned, providing deflationary pressure as network activity increases. MANTA was distributed through airdrops to early ecosystem participants and stakers who participated in the New Paradigm campaign.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Manta Network powers privacy-preserving DeFi applications using Universal Circuits, ZK-based identity verification (zkKYC, zkSBTs), compliant DeFi with selective disclosure, low-cost EVM smart contract execution, and modular rollup infrastructure. The platform is particularly suited for applications requiring privacy features, regulatory compliance tools, or identity verification without revealing underlying personal data.
      </p>

      <h2 id="how-to-buy">How to Buy MANTA</h2>
      <p>
        To buy MANTA, create an account on Binance, OKX, or Bybit. Complete identity verification, deposit funds, and purchase MANTA tokens. After purchasing, bridge MANTA to Manta Pacific for DeFi use or stake for governance participation. Store MANTA in MetaMask with the Manta Pacific network configured, or in a Ledger hardware wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        The L2 space is extremely competitive, with Arbitrum, Optimism, Base, zkSync, and others competing for developers and users. Manta&apos;s use of Celestia for data availability introduces dependency on an external chain and different security assumptions than pure Ethereum rollups. The ZK tooling market is evolving rapidly, and larger teams may replicate Universal Circuits functionality.
      </p>
      <p>
        Ecosystem growth incentive programs (like New Paradigm) may attract mercenary capital that leaves when rewards decrease. Token unlock schedules from early investors create selling pressure. The dual-chain strategy (Pacific and Atlantic) splits focus and resources. Regulatory scrutiny of privacy-enabling technologies could impact adoption of ZK-based identity and compliance tools.
      </p>
    </LearnPageLayout>
  );
}
