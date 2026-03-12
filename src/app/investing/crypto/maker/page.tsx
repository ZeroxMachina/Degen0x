import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Maker (MKR)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Maker (MKR), the governance token behind the MakerDAO protocol and DAI stablecoin. Discover MKR tokenomics, use cases, and how to buy.",
};

export default function MakerPage() {
  return (
    <LearnPageLayout
      title="What Is Maker (MKR)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Maker (MKR) is the governance token of the MakerDAO protocol, one of the oldest and most influential decentralized finance platforms on Ethereum. MakerDAO enables users to generate DAI, a decentralized stablecoin pegged to the US dollar, by depositing crypto collateral into smart contract vaults. MKR holders govern the protocol and serve as backstop capital."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-maker", title: "What Is Maker?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-maker-work", title: "How Does Maker Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "mkr-tokenomics", title: "MKR Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-mkr", title: "How to Buy MKR", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Maker?",
          answer:
            "Maker (MKR) is the governance token of MakerDAO, the protocol behind the DAI stablecoin. MKR holders vote on risk parameters, collateral types, and protocol upgrades. MKR also serves as recapitalization capital if the system becomes undercollateralized.",
        },
        {
          question: "Where can I buy MKR?",
          answer:
            "MKR is available on Coinbase, Binance, Kraken, Uniswap, and virtually all major exchanges. It is one of the most liquid DeFi governance tokens.",
        },
        {
          question: "Is Maker a good investment?",
          answer:
            "MKR has strong fundamentals as the governance token behind one of DeFi's most established protocols. The protocol generates revenue from stability fees, a portion of which is used to buy back and burn MKR. However, regulatory risks around stablecoins and smart contract risks remain.",
        },
      ]}
      relatedArticles={[
        {
          title: "Best Cryptos to Buy",
          href: "/investing/best/cryptos-to-buy",
          category: "Investing",
        },
        {
          title: "How to Invest in Crypto",
          href: "/investing/learn/how-to-invest-in-crypto",
          category: "Investing",
        },
      ]}
    >
      <section id="what-is">
        <h2>What Is Maker?</h2>
        <p>
          Maker (MKR) is the governance and utility token of the MakerDAO protocol, which launched on Ethereum in 2017 and is the creator of DAI, the leading decentralized stablecoin. MakerDAO pioneered the concept of collateralized debt positions (now called Vaults), where users lock up crypto assets to generate DAI. The protocol has grown to manage billions of dollars in total value locked and is considered a cornerstone of the DeFi ecosystem.
        </p>
        <p>
          MKR holders participate in governance by voting on critical protocol parameters including collateral types, stability fees, debt ceilings, and risk management policies. The MakerDAO governance system has been described as one of the most active and decentralized in all of DeFi, with regular participation in executive votes and signal requests.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Maker Work?</h2>
        <p>
          The Maker protocol allows users to deposit approved collateral assets (ETH, WBTC, stablecoins, and real-world assets) into Vaults to generate DAI. Each Vault requires overcollateralization, meaning the value of deposited collateral must exceed the DAI generated. If collateral value drops below the liquidation threshold, the Vault is automatically liquidated to protect the system. Stability fees, charged as interest on generated DAI, are the primary revenue source for the protocol.
        </p>
        <p>
          MKR serves a dual role: governance power and system backstop. If the protocol ever becomes undercollateralized due to extreme market conditions, new MKR tokens can be minted and sold to recapitalize the system. Conversely, surplus revenue is used to buy back and burn MKR, reducing supply and benefiting holders.
        </p>
      </section>

      <section id="tokenomics">
        <h2>MKR Tokenomics</h2>
        <p>
          MKR has a current supply of approximately 900,000 tokens, making it one of the lowest supply governance tokens in DeFi. The supply is deflationary during normal operations because protocol revenue is used to buy back and burn MKR. However, during severe undercollateralization events, new MKR can be minted, temporarily increasing supply. The protocol's transition under the Endgame plan introduced SubDAOs and new tokenomics structures designed to further decentralize governance and align incentives across the ecosystem.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          MKR is used for protocol governance, including voting on collateral onboarding, fee adjustments, and risk parameters. It serves as backstop capital to recapitalize the system during black swan events. Holding MKR provides exposure to the growth of the DAI stablecoin ecosystem and the protocol's revenue. MKR is also widely used as collateral in other DeFi protocols, as a portfolio diversification asset for DeFi-focused investors, and in liquidity provision across decentralized exchanges.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy MKR</h2>
        <p>
          MKR is one of the most accessible DeFi tokens, available on Coinbase, Binance, Kraken, Gemini, and nearly every major exchange. It can also be purchased on Uniswap and other Ethereum DEXs. To buy, create an account on your preferred exchange, deposit funds, and search for the MKR trading pair. Due to its relatively high per-token price, fractional purchases are common. Store MKR in any Ethereum wallet such as MetaMask, Ledger, or Coinbase Wallet for self-custody and governance participation.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          MKR faces several risks including smart contract vulnerabilities, even though the protocol has been audited extensively and battle-tested since 2017. Stablecoin regulation could directly impact DAI and by extension MKR's value. During extreme market downturns, the MKR dilution mechanism can increase supply and depress the token price. Competition from other lending protocols and stablecoin issuers is ongoing. The complexity of the Endgame governance restructuring introduces execution risk as the protocol transitions to its new architecture.
        </p>
      </section>
    </LearnPageLayout>
  );
}
