import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Secret Network (SCRT)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Secret Network (SCRT), the privacy-preserving blockchain with encrypted smart contracts. Discover SCRT tokenomics and how to buy.",
};

export default function SecretPage() {
  return (
    <LearnPageLayout
      title="What Is Secret Network (SCRT)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Secret Network (SCRT) is a blockchain with privacy-preserving smart contracts built on the Cosmos SDK. Secret contracts encrypt inputs, outputs, and state by default using trusted execution environments, enabling confidential DeFi, private NFTs, and encrypted data processing. SCRT is the native token used for staking, governance, and gas fees."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-secret-network", title: "What Is Secret Network?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-secret-network-work", title: "How Does Secret Network Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "scrt-tokenomics", title: "SCRT Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-scrt", title: "How to Buy SCRT", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is Secret Network?", answer: "Secret Network is a privacy-focused blockchain where smart contracts process encrypted data by default. Built on Cosmos SDK, it enables confidential DeFi, private NFTs, and secure data computation." },
        { question: "Where can I buy SCRT?", answer: "SCRT is available on Binance, KuCoin, and other exchanges. It can also be acquired on Osmosis DEX in the Cosmos ecosystem." },
        { question: "Is Secret Network a good investment?", answer: "Secret Network pioneers privacy in smart contracts, but the small ecosystem, competition from other privacy solutions, and limited DeFi adoption are challenges." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is Secret Network?</h2><p>Secret Network is a Layer 1 blockchain that provides default privacy for smart contract computation. Unlike most blockchains where all transaction data is publicly visible, Secret Network encrypts smart contract inputs, outputs, and state, making it possible to build applications that handle sensitive data without exposing it on-chain. The network launched in 2020 as a privacy-focused evolution of the Enigma project.</p><p>Built on the Cosmos SDK with IBC interoperability, Secret Network connects to the broader Cosmos ecosystem while providing privacy capabilities that other chains lack. Secret contracts (the private smart contracts) use Intel SGX trusted execution environments to process encrypted data in a secure enclave, ensuring that even node operators cannot see the data being processed.</p></section>
      <section id="how-it-works"><h2>How Does Secret Network Work?</h2><p>Secret contracts are written in Rust and compiled to WebAssembly (WASM). When a contract receives input, the data is encrypted and processed inside a TEE. The output is encrypted and only accessible to authorized parties through viewing keys or permits. This architecture enables private token transfers (SNIP-20), confidential DeFi where trading positions are hidden, private NFTs with hidden metadata, and encrypted messaging.</p><p>The consensus layer uses delegated proof-of-stake through Tendermint BFT, with SCRT stakers and validators securing the network. IBC connections allow assets to be bridged from other Cosmos chains and Ethereum, with the bridge process wrapping tokens into their secret (encrypted) equivalents.</p></section>
      <section id="tokenomics"><h2>SCRT Tokenomics</h2><p>SCRT has an inflationary supply model with staking rewards generated through token inflation. The inflation rate adjusts based on the percentage of tokens staked, targeting a specific staking ratio. Validators and delegators earn SCRT rewards for securing the network. Transaction fees on Secret Network are paid in SCRT. The community pool receives a portion of block rewards for ecosystem development and grants.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>SCRT is used for staking, governance, and gas fees. Secret Network enables private DeFi (ShadeProtocol, SecretSwap), confidential NFTs, encrypted voting, private data monetization, and cross-chain privacy through secret bridges. The network is particularly relevant for applications where data privacy is legally required or commercially valuable, such as healthcare data, financial transactions, and identity management.</p></section>
      <section id="how-to-buy"><h2>How to Buy SCRT</h2><p>SCRT is available on Binance, KuCoin, Gate.io, and within the Cosmos ecosystem on Osmosis DEX. After purchasing, stake SCRT with a validator through the Keplr wallet to earn staking rewards and participate in governance. For privacy features, interact with Secret DeFi protocols through the Keplr wallet with Secret Network enabled.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>Secret Network's TEE-based privacy depends on Intel SGX hardware, which has been subject to side-channel vulnerabilities. The ecosystem is relatively small with limited DeFi activity and liquidity. Competition from Oasis Network, Aztec's privacy on Ethereum, and other privacy solutions is growing. Privacy coins and protocols face regulatory scrutiny in many jurisdictions, which could limit exchange listings and accessibility. Developer adoption has been slow due to the specialized nature of privacy-preserving smart contract development.</p></section>
    </LearnPageLayout>
  );
}
