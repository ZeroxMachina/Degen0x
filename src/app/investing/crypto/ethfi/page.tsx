import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Ether.fi (ETHFI)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Ether.fi (ETHFI), the decentralized liquid restaking protocol. Discover how it works, tokenomics, use cases, and how to buy ETHFI.",
};

export default function EthfiPage() {
  return (
    <LearnPageLayout
      title="What Is Ether.fi (ETHFI)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Ether.fi is a decentralized, non-custodial liquid restaking protocol that allows users to stake ETH, earn staking rewards, restake on EigenLayer for additional yield, and receive eETH as a liquid token representing their position. Ether.fi is the largest liquid restaking protocol by total value locked."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-ether-fi", title: "What Is Ether.fi?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-ether-fi-work", title: "How Does Ether.fi Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "ethfi-tokenomics", title: "ETHFI Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-ethfi", title: "How to Buy ETHFI", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Ether.fi?",
          answer: "Ether.fi is a non-custodial liquid restaking protocol where users stake ETH, restake on EigenLayer, and receive eETH as a liquid token while earning multiple layers of yield.",
        },
        {
          question: "Where can I buy ETHFI?",
          answer: "ETHFI is available on Binance, OKX, Bybit, and other exchanges.",
        },
        {
          question: "Is Ether.fi a good investment?",
          answer: "Ether.fi leads liquid restaking by TVL with growing DeFi integrations, but the restaking model is new. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "EigenLayer", href: "/investing/crypto/eigenlayer", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Ether.fi?</h2>
      <p>
        Ether.fi was founded by Mike Silagadze and launched in 2023 as a non-custodial liquid restaking protocol. The key innovation is that stakers retain control of their validator keys, unlike most liquid staking protocols where the protocol manages keys on behalf of users. This non-custodial approach provides an additional layer of security and decentralization.
      </p>
      <p>
        By staking through Ether.fi, users earn three layers of yield: Ethereum staking rewards, EigenLayer restaking rewards from AVSs, and loyalty points that convert to ETHFI tokens. The eETH token represents the user&apos;s staked and restaked position and can be used across DeFi for additional yield opportunities.
      </p>

      <h2 id="how-it-works">How Does Ether.fi Work?</h2>
      <p>
        Users deposit ETH into Ether.fi and receive eETH, a rebasing liquid restaking token. Ether.fi stakes the ETH on Ethereum and simultaneously restakes it on EigenLayer to secure AVSs. The non-custodial design means stakers create their own validator keys and can exit independently. weETH (wrapped eETH) provides a non-rebasing alternative that is more DeFi-compatible.
      </p>

      <h2 id="tokenomics">ETHFI Tokenomics</h2>
      <p>
        ETHFI has a total supply of 1 billion tokens distributed through airdrops to early stakers, investors, team, and protocol treasury. The token is used for governance over the Ether.fi protocol, including decisions about AVS selection, fee parameters, and treasury management. Protocol revenue from staking and restaking fees provides a sustainable funding mechanism.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Ether.fi enables non-custodial liquid restaking with eETH, multi-layer yield from staking and restaking, DeFi composability with eETH/weETH across lending and DEX protocols, and access to EigenLayer restaking without the complexity of running operators. The Ether.fi Cash product is exploring crypto-native debit card functionality using staking yields.
      </p>

      <h2 id="how-to-buy">How to Buy ETHFI</h2>
      <p>
        To buy ETHFI, register on Binance, OKX, or Bybit. Complete identity verification, deposit funds, and purchase ETHFI tokens. To use the restaking service, deposit ETH on the Ether.fi platform to receive eETH. ETHFI is an ERC-20 token compatible with MetaMask and Ledger wallets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Liquid restaking introduces compounded risk: smart contract risk across Ether.fi, EigenLayer, and AVSs, plus slashing risk from restaking. The eETH peg to ETH could deviate during market stress. The restaking model is new and untested in severe conditions. Competition from other liquid restaking protocols (Puffer, Kelp, Renzo) intensifies pricing pressure.
      </p>
      <p>
        Token unlock schedules create selling pressure. Dependence on EigenLayer means any issues with the underlying restaking protocol would impact Ether.fi directly. Regulatory uncertainty around liquid restaking tokens as securities adds legal risk to the investment thesis.
      </p>
    </LearnPageLayout>
  );
}
