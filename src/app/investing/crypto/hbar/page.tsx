import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Hedera Hashgraph Token (HBAR)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about Hedera Hashgraph Token (HBAR), the enterprise-grade distributed ledger. Discover HBAR tokenomics and how to buy.",
};

export default function HbarPage() {
  return (
    <LearnPageLayout
      title="What Is Hedera Hashgraph Token (HBAR)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Hedera Hashgraph Token (HBAR) is the native cryptocurrency of the Hedera network, an enterprise-grade distributed ledger that uses hashgraph consensus instead of a traditional blockchain. Governed by a council of up to 39 major organizations including Google, IBM, and Boeing, Hedera offers fast, fair, and secure services for payments, token creation, consensus, and smart contracts."
      toc={[
        { id: "what-is", title: "What Is Hedera Hashgraph Token?", level: 2 },
        { id: "how-it-works", title: "How Does Hedera Work?", level: 2 },
        { id: "tokenomics", title: "HBAR Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy HBAR", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Hedera Hashgraph Token?", answer: "HBAR is the native token of the Hedera network, which uses hashgraph consensus for high-speed, low-cost transactions. It is governed by a council of major global corporations and institutions." },
        { question: "Where can I buy HBAR?", answer: "HBAR is available on Coinbase, Binance, KuCoin, and most major exchanges." },
        { question: "Is Hedera Hashgraph Token a good investment?", answer: "HBAR benefits from enterprise governance and real-world use cases in supply chain and payments. However, council governance centralization and competition from public blockchains are considerations." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is Hedera Hashgraph Token?</h2><p>Hedera is a distributed ledger technology platform that uses the hashgraph consensus algorithm, which provides mathematically proven asynchronous Byzantine fault tolerance (aBFT). Unlike blockchain-based networks that build blocks sequentially, hashgraph uses a gossip protocol and virtual voting to achieve consensus, enabling higher throughput and fairness in transaction ordering. The network processes over 10,000 transactions per second with finality in 3-5 seconds.</p><p>Hedera's governance model is unique in crypto: a council of up to 39 term-limited, globally distributed organizations manages the network. Current council members include Google, IBM, Boeing, Deutsche Telekom, Standard Bank, and others. This enterprise governance approach provides stability and regulatory credibility but introduces more centralization than typical public blockchains.</p></section>
      <section id="how-it-works"><h2>How Does Hedera Work?</h2><p>Hashgraph consensus works through a gossip-about-gossip protocol where nodes share transaction data and information about what other nodes have shared. Virtual voting derives consensus from this gossip history without additional communication rounds. The result is fast, fair, and energy-efficient consensus. Hedera offers multiple network services: the Hedera Token Service (HTS) for creating and managing fungible and non-fungible tokens, the Consensus Service (HCS) for timestamped message ordering, and smart contracts via EVM-compatible execution.</p><p>HBAR staking allows token holders to contribute to network security through proxy staking to nodes. The network's fixed fee structure (denominated in USD) provides predictable costs for developers and businesses, unlike variable gas fee models on other platforms.</p></section>
      <section id="tokenomics"><h2>HBAR Tokenomics</h2><p>HBAR has a fixed maximum supply of 50 billion tokens. The release schedule distributes tokens over time for network development, ecosystem grants, and purchase agreements. HBAR is used for paying network service fees, staking for network security, and governance at the token holder level. Network fees are set by the council and denominated in USD, meaning the HBAR cost per transaction varies with token price. A portion of fees goes to node operators and the treasury.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>HBAR is used for network fees, staking, and ecosystem participation. The Hedera network serves enterprise use cases including supply chain tracking, fraud prevention, carbon credit markets, decentralized identity, and payment processing. Consumer-facing applications include NFT marketplaces and DeFi protocols. The Hedera Consensus Service is used for timestamping and ordering data for compliance and audit trails. Hedera has seen particular adoption in sustainability and carbon market applications.</p></section>
      <section id="how-to-buy"><h2>How to Buy HBAR</h2><p>HBAR is available on Coinbase, Binance, KuCoin, OKX, and most major exchanges. After purchasing, HBAR can be staked through supported wallets or used in Hedera DeFi protocols like SaucerSwap. Store in HashPack Wallet, Blade Wallet, or Ledger hardware wallet for self-custody.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>Hedera's council governance model is more centralized than most public blockchains, which may limit appeal for decentralization-focused users. The scheduled release of remaining HBAR supply creates potential future sell pressure. Competition from Ethereum, Solana, and other smart contract platforms is intense. The patented hashgraph algorithm limits open-source community development. Enterprise adoption, while growing, has not yet reached the scale needed to justify the token's market capitalization relative to actual network usage.</p></section>
    </LearnPageLayout>
  );
}
