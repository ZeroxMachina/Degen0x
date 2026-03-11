import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Internet Computer Token (ICP)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about Internet Computer Token (ICP), the governance token of the Internet Computer blockchain. Discover ICP tokenomics and how to buy.",
};

export default function IcpTokenPage() {
  return (
    <LearnPageLayout
      title="What Is Internet Computer Token (ICP)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Internet Computer Token (ICP) is the native utility and governance token of the Internet Computer Protocol, a blockchain network developed by the DFINITY Foundation that aims to extend the functionality of the internet by hosting smart contracts and applications at web speed. ICP is used for governance through the Network Nervous System, conversion to cycles for computation, and staking."
      toc={[
        { id: "what-is", title: "What Is Internet Computer Token?", level: 2 },
        { id: "how-it-works", title: "How Does Internet Computer Work?", level: 2 },
        { id: "tokenomics", title: "ICP Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy ICP", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Internet Computer Token?", answer: "ICP is the governance and utility token of the Internet Computer blockchain by DFINITY. It powers governance through the NNS, converts to cycles for computation, and is staked by neurons for network governance participation." },
        { question: "Where can I buy ICP?", answer: "ICP is available on Coinbase, Binance, KuCoin, and most major exchanges." },
        { question: "Is Internet Computer Token a good investment?", answer: "ICP has ambitious technology for hosting entire web applications on-chain. The ecosystem is growing but faces competition from traditional cloud and other blockchains. The token experienced significant price decline from its launch peak." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is Internet Computer Token?</h2><p>The Internet Computer is a blockchain created by the DFINITY Foundation that enables smart contracts to serve web content directly to users, effectively allowing entire web applications and services to run entirely on-chain without traditional cloud infrastructure. ICP launched in May 2021 with significant expectations and a high initial valuation, positioning itself as a comprehensive alternative to centralized cloud computing for web services.</p><p>The platform uses a novel consensus mechanism and canister smart contracts (written in Rust or Motoko) that can hold state, serve HTTP requests, and interact with external systems. The Network Nervous System (NNS) is an algorithmic governance system where ICP holders stake tokens in neurons to vote on network proposals, earning rewards for participation.</p></section>
      <section id="how-it-works"><h2>How Does Internet Computer Work?</h2><p>The Internet Computer runs on a network of independently operated data centers running specialized node machines. The chain-key cryptography technology enables the network to finalize transactions in 1-2 seconds and allows smart contracts to directly interact with other blockchains like Bitcoin and Ethereum without bridges. Canister smart contracts can store data, process computations, and serve web content, functioning like serverless cloud functions but on a decentralized network.</p><p>ICP tokens are converted to cycles, which are the computation fuel for running canisters (similar to gas in Ethereum but with a stable cost model pegged to computing resources). The NNS manages the network autonomously, handling node provider management, subnet creation, and protocol upgrades through stake-weighted voting.</p></section>
      <section id="tokenomics"><h2>ICP Tokenomics</h2><p>ICP has an inflationary supply model where new tokens are minted for governance rewards and node provider compensation. ICP is burned when converted to cycles for computation, creating a deflationary counter-force. The net supply change depends on the balance between minting and burning. Neurons (staking positions) have dissolve delays of up to eight years, with longer commitments earning higher voting power and rewards. The NNS governance system controls all tokenomics parameters.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>ICP is used for NNS governance voting and rewards, conversion to cycles for computation, and as the native currency for the Internet Computer ecosystem. The platform enables fully on-chain web applications, decentralized social media, cross-chain smart contract integration with Bitcoin and Ethereum, and enterprise web services. Notable applications include OpenChat (decentralized messaging), DSCVR (social platform), and various DeFi protocols.</p></section>
      <section id="how-to-buy"><h2>How to Buy ICP</h2><p>ICP is available on Coinbase, Binance, KuCoin, OKX, and most major exchanges. After purchasing, ICP can be staked in the NNS by creating neurons for governance participation and rewards. The Internet Identity system provides passwordless authentication for Internet Computer applications. Store in the NNS dapp, Plug Wallet, or supported hardware wallets.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>ICP experienced a dramatic price decline from its launch highs, eroding investor confidence. The Internet Computer's ambitious scope creates execution risk across multiple technology fronts. Competition from established cloud providers and other blockchain platforms is intense. The neuron dissolve delay creates significant liquidity risk for stakers. Centralization concerns around DFINITY's influence and the specialized node hardware requirements are debated. The learning curve for IC development is steep compared to EVM-compatible chains.</p></section>
    </LearnPageLayout>
  );
}
