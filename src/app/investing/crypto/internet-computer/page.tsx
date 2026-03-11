import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Internet Computer (ICP)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Internet Computer (ICP), the blockchain platform aiming to become the world computer. Discover how it works, tokenomics, and how to buy ICP.",
};

export default function InternetComputerPage() {
  return (
    <LearnPageLayout
      title="What Is Internet Computer (ICP)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Internet Computer is a groundbreaking blockchain platform developed by the DFINITY Foundation that aims to extend the public internet into a global computing platform. ICP enables developers to build websites, enterprise systems, and internet services entirely on-chain without traditional cloud infrastructure. The ICP token powers computation and governance on the network."
      toc={[
        { id: "what-is", title: "What Is Internet Computer?", level: 2 },
        { id: "how-it-works", title: "How Internet Computer Works", level: 2 },
        { id: "tokenomics", title: "ICP Tokenomics", level: 2 },
        { id: "use-cases", title: "Use Cases & Ecosystem", level: 2 },
        { id: "how-to-buy", title: "How to Buy ICP", level: 2 },
        { id: "risks", title: "Risks & Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Internet Computer?",
          answer:
            "Internet Computer is a blockchain network by DFINITY that allows developers to build and host decentralized applications, websites, and services entirely on-chain at web speed.",
        },
        {
          question: "Where can I buy ICP?",
          answer:
            "ICP is available on major exchanges including Binance, Coinbase, Kraken, and KuCoin. You can trade it against USDT, BTC, or fiat currencies.",
        },
        {
          question: "Is ICP a good investment?",
          answer:
            "ICP offers unique technology for hosting decentralized web services, but it faces competition from traditional cloud and other blockchains. This is not financial advice. Do your own research before investing.",
        },
      ]}
      relatedArticles={[
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Best Crypto Exchanges", href: "/exchanges/best", category: "Exchanges" },
        { title: "Filecoin", href: "/investing/crypto/filecoin", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Internet Computer?</h2>
      <p>
        Internet Computer (ICP) is a blockchain platform created by the DFINITY Foundation, launched in May 2021. It aims to create a decentralized world computer that can host websites, applications, and enterprise systems entirely on a blockchain network, eliminating the need for centralized cloud services like AWS or Google Cloud.
      </p>
      <p>
        The platform uses a novel consensus protocol and a unique architecture of subnet blockchains that can scale horizontally by adding new subnets. This approach allows the network to process smart contract transactions at near-web speed with low costs.
      </p>
      <p>
        ICP represents one of the most ambitious blockchain projects, with the vision of reimagining the internet as a fully decentralized public utility. It supports smart contracts called canisters that can serve web content directly to users through standard browsers.
      </p>

      <h2 id="how-it-works">How Internet Computer Works</h2>
      <p>
        ICP uses a novel consensus mechanism called Threshold Relay combined with Chain Key Technology. The network is composed of independent data centers running specialized node machines that are organized into subnets. Each subnet is an independent blockchain that processes smart contracts in parallel with other subnets.
      </p>
      <p>
        Chain Key Technology enables a single public key for the entire network, allowing any device to verify the authenticity of content served by ICP. This technology also enables cross-subnet communication and the ability to create new subnets on demand, providing virtually unlimited scalability.
      </p>

      <h2 id="tokenomics">ICP Tokenomics</h2>
      <p>
        ICP tokens serve three primary functions: governance through the Network Nervous System (NNS), conversion to cycles for computation, and rewarding node providers. Token holders can lock ICP in the NNS to create voting neurons that earn staking rewards.
      </p>
      <p>
        The token supply is inflationary, with new tokens minted for governance rewards and node provider compensation. However, ICP is also deflationary when tokens are burned to create cycles for computation. The net inflation rate depends on network usage and governance participation.
      </p>

      <h2 id="use-cases">Use Cases &amp; Ecosystem</h2>
      <p>
        The ICP ecosystem includes decentralized social media platforms, DeFi protocols, NFT marketplaces, and enterprise solutions. Notable projects include OpenChat (decentralized messaging), DSCVR (social media), and ICPSwap (decentralized exchange). The platform also supports Bitcoin and Ethereum integration natively.
      </p>
      <p>
        ICP&apos;s ability to host full web applications on-chain opens unique use cases in decentralized identity, multi-chain DeFi, and enterprise SaaS applications. The chain-key Bitcoin integration allows smart contracts to directly hold and transact with real Bitcoin.
      </p>

      <h2 id="how-to-buy">How to Buy ICP</h2>
      <p>
        To buy ICP, sign up on a major exchange like Coinbase, Binance, or Kraken. Complete KYC verification, deposit funds, and purchase ICP. You can then hold ICP on the exchange or transfer it to the NNS dapp for staking and governance participation. Hardware wallet support is available through Ledger.
      </p>

      <h2 id="risks">Risks &amp; Considerations</h2>
      <p>
        ICP&apos;s ambitious vision carries execution risk, and the project has faced criticism regarding its tokenomics and the large allocation to early investors and the DFINITY Foundation. The token experienced a dramatic price decline from its launch price, which has affected investor confidence.
      </p>
      <p>
        Competition from traditional cloud providers and other decentralized computing platforms poses ongoing challenges. The complexity of the technology may also slow developer adoption compared to simpler EVM-compatible chains. Regulatory uncertainty around decentralized internet services adds another layer of risk.
      </p>
    </LearnPageLayout>
  );
}
