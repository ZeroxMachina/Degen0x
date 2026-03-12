import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Umee (UX)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Umee (UX), the cross-chain DeFi lending hub in Cosmos. Discover how it works, tokenomics, use cases, and how to buy UX.",
};

export default function UmeePage() {
  return (
    <LearnPageLayout
      title="What Is Umee (UX)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Umee, now rebranded as UX Chain, is a cross-chain DeFi lending and borrowing protocol built as a Cosmos SDK appchain. The protocol aims to be the primary lending hub for the Cosmos ecosystem while connecting to Ethereum and other chains, offering lending markets for Cosmos-native assets and enabling cross-chain collateralization through IBC."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-umee", title: "What Is Umee?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-umee-work", title: "How Does Umee Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "ux-tokenomics", title: "UX Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-ux", title: "How to Buy UX", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Umee?",
          answer:
            "Umee (UX Chain) is a cross-chain DeFi lending protocol on Cosmos enabling lending, borrowing, and leverage for Cosmos-native assets with IBC-based cross-chain collateralization.",
        },
        {
          question: "Where can I buy UX?",
          answer:
            "UX is available on Osmosis DEX, Gate.io, and MEXC. It trades against OSMO, ATOM, and USDT pairs.",
        },
        {
          question: "Is Umee a good investment?",
          answer:
            "Umee provides essential lending infrastructure for Cosmos DeFi, but faces competition and limited TVL compared to Ethereum-based lenders. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Cosmos", href: "/investing/crypto/cosmos", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Umee?</h2>
      <p>
        Umee was founded by Brent Xu, a former Goldman Sachs infrastructure engineer, and launched in 2022. The protocol recognized that the Cosmos ecosystem lacked robust lending and borrowing infrastructure comparable to Aave or Compound on Ethereum. By building as a dedicated appchain, Umee can optimize its chain parameters for lending operations and leverage IBC for cross-chain collateral access across the Cosmos ecosystem.
      </p>
      <p>
        The protocol rebranded from Umee to UX Chain to better reflect its expanded mission as a comprehensive DeFi hub. Beyond basic lending, UX Chain aims to support leveraged staking, cross-chain margin accounts, and interest rate products. The platform supports a growing list of Cosmos assets including ATOM, OSMO, stATOM, and various stablecoins as lending and collateral assets.
      </p>

      <h2 id="how-it-works">How Does Umee Work?</h2>
      <p>
        Umee operates lending pools where depositors supply assets and earn interest, while borrowers post collateral to access loans. Interest rates adjust dynamically based on pool utilization, similar to the Aave model. The protocol uses overcollateralization to protect lenders, with liquidation mechanisms to manage undercollateralized positions. IBC enables assets from any connected Cosmos chain to be used as collateral.
      </p>
      <p>
        The meToken feature allows users to deposit multiple collateral types into a single index token, simplifying portfolio management and collateral optimization. The chain runs on a proof-of-stake consensus with its own validator set. Oracle price feeds from multiple sources ensure accurate asset pricing for collateral calculations and liquidation triggers.
      </p>

      <h2 id="tokenomics">UX Tokenomics</h2>
      <p>
        UX has a total supply of approximately 10 billion tokens. The token is used for staking to secure the chain, governance over lending parameters and asset listings, and liquidity incentives for lending pools. Validators and delegators earn staking rewards from inflation and a share of protocol revenue from borrowing interest. The large supply means individual token price is low, with value measured through market capitalization.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Umee enables lending and borrowing of Cosmos-native assets, cross-chain collateralization using IBC-connected tokens, leveraged staking strategies using liquid staking tokens as collateral, interest rate discovery for Cosmos assets, and composable DeFi building blocks for other Cosmos protocols. The platform serves users seeking to borrow against their staked Cosmos positions without unstaking.
      </p>

      <h2 id="how-to-buy">How to Buy UX</h2>
      <p>
        To buy UX, visit Osmosis DEX and swap ATOM or USDC for UX tokens using Keplr wallet. UX is also available on Gate.io and MEXC. After purchasing, stake UX to earn staking rewards or deposit into lending pools on the UX Chain platform. Store UX in Keplr or any Cosmos-compatible wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Umee competes directly with Mars Protocol and Neutron-based lending protocols for Cosmos DeFi market share. The protocol&apos;s TVL is modest compared to Ethereum lending platforms, limiting liquidity depth and borrowing capacity. The large token supply may create sustained selling pressure from ongoing emissions and staking unlocks.
      </p>
      <p>
        Smart contract and oracle risks could lead to bad debt if liquidations fail to execute properly during extreme market volatility. Cross-chain collateral introduces IBC relay risks. The Cosmos lending market is small relative to Ethereum DeFi, limiting the revenue potential of the protocol. Regulatory uncertainty around DeFi lending adds compliance risk across jurisdictions.
      </p>
    </LearnPageLayout>
  );
}
