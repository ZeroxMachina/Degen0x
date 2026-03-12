import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Stride (STRD)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Stride (STRD), the liquid staking protocol for the Cosmos ecosystem. Discover how it works, tokenomics, use cases, and how to buy STRD.",
};

export default function StridePage() {
  return (
    <LearnPageLayout
      title="What Is Stride (STRD)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Stride is the leading liquid staking protocol in the Cosmos ecosystem, allowing users to stake their Cosmos-based tokens and receive liquid staking derivatives (stTokens) that can be used in DeFi while earning staking rewards. By unlocking liquidity from staked assets across multiple Cosmos chains, Stride serves as the Lido equivalent for the Cosmos network."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-stride", title: "What Is Stride?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-stride-work", title: "How Does Stride Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "strd-tokenomics", title: "STRD Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-strd", title: "How to Buy STRD", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Stride?",
          answer:
            "Stride is the leading liquid staking protocol for Cosmos, letting users stake ATOM, OSMO, and other Cosmos tokens while receiving liquid stTokens usable in DeFi across the Cosmos ecosystem.",
        },
        {
          question: "Where can I buy STRD?",
          answer:
            "STRD is available on Osmosis DEX, Gate.io, and MEXC. It primarily trades against OSMO and USDC pairs in the Cosmos ecosystem.",
        },
        {
          question: "Is Stride a good investment?",
          answer:
            "Stride dominates Cosmos liquid staking with growing TVL, but its value depends on Cosmos ecosystem growth and staking demand. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Cosmos", href: "/investing/crypto/cosmos", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Stride?</h2>
      <p>
        Stride was founded by Aidan Salzmann, Vishal Talasani, and Riley Edmunds, launching in late 2022 as the first multichain liquid staking solution in the Cosmos ecosystem. The protocol addresses a key capital inefficiency in Cosmos: when users stake their ATOM, OSMO, or other tokens to secure their respective chains, those assets become locked and unavailable for DeFi use during the unbonding period (typically 14-21 days).
      </p>
      <p>
        Stride solves this by issuing liquid staking tokens (stATOM, stOSMO, stDYDX, etc.) that represent staked positions. These stTokens automatically accrue staking rewards and can be traded, lent, or used as collateral in Cosmos DeFi protocols. Stride has become the dominant liquid staking provider in Cosmos, securing a significant share of staked assets across multiple chains.
      </p>

      <h2 id="how-it-works">How Does Stride Work?</h2>
      <p>
        When users deposit tokens on Stride, the protocol stakes them with a diversified set of validators on the respective chain using Interchain Accounts (ICA) via IBC. Users receive stTokens at an exchange rate that increases over time as staking rewards accumulate. For example, stATOM appreciates against ATOM as rewards compound, meaning stTokens are always worth more than the underlying asset over time.
      </p>
      <p>
        Stride operates as a Cosmos SDK appchain secured by the Cosmos Hub through Interchain Security (ICS), meaning it shares the validator set and security of ATOM. This eliminates the need for Stride to bootstrap its own validator set and provides Cosmos Hub-level security for the liquid staking protocol. Users can redeem stTokens for the underlying assets, subject to the standard unbonding period of the target chain.
      </p>

      <h2 id="tokenomics">STRD Tokenomics</h2>
      <p>
        STRD has a total supply of approximately 135 million tokens. The token is used for governance over protocol parameters, fee structures, and validator selection criteria. Stride charges a fee on staking rewards (typically 10%), which is split between the protocol treasury, STRD stakers, and the Cosmos Hub (as part of the ICS arrangement). STRD stakers earn a portion of all liquid staking revenue generated across every supported chain.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Stride enables liquid staking for ATOM, OSMO, DYDX, and other major Cosmos tokens, DeFi yield strategies using stTokens as collateral on lending platforms, liquidity provision with stToken pairs on Osmosis and other DEXs, and governance participation while maintaining staking rewards. The protocol is integral to Cosmos DeFi capital efficiency, allowing users to earn staking rewards and DeFi yields simultaneously.
      </p>

      <h2 id="how-to-buy">How to Buy STRD</h2>
      <p>
        To buy STRD, visit the Osmosis DEX and swap ATOM or USDC for STRD using Keplr wallet. STRD is also available on Gate.io and MEXC for those preferring centralized exchanges. After purchasing, stake STRD to earn a share of protocol revenue from liquid staking fees. Store STRD in Keplr wallet for access to Cosmos DeFi and governance.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Stride&apos;s value is directly tied to the Cosmos ecosystem&apos;s health and the total staked value on supported chains. If Cosmos chains lose market share, the addressable market for liquid staking shrinks. Smart contract and IBC risks could affect stToken pegs or result in loss of staked assets. Competition from other Cosmos liquid staking solutions like Quicksilver and pSTAKE could fragment the market.
      </p>
      <p>
        The Interchain Security arrangement, while providing strong security, also means Stride must share revenue with the Cosmos Hub, affecting protocol economics. Validator slashing events on underlying chains would reduce stToken values. Regulatory classification of liquid staking tokens as securities remains an unresolved legal question. DeFi integrations create composability risk where issues in one protocol could cascade.
      </p>
    </LearnPageLayout>
  );
}
