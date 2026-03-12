import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Mars Protocol (MARS)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Mars Protocol (MARS), the Cosmos lending and credit protocol. Discover how it works, tokenomics, use cases, and how to buy MARS.",
};

export default function MarsProtocolPage() {
  return (
    <LearnPageLayout
      title="What Is Mars Protocol (MARS)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Mars Protocol is a lending and credit protocol in the Cosmos ecosystem that introduces the concept of 'credit accounts' allowing users to combine lending, borrowing, and leveraged yield farming in a single interface. Operating across multiple Cosmos chains including Osmosis and Neutron, Mars aims to become the primary credit layer for Cosmos DeFi."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-mars-protocol", title: "What Is Mars Protocol?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-mars-protocol-work", title: "How Does Mars Protocol Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "mars-tokenomics", title: "MARS Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-mars", title: "How to Buy MARS", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Mars Protocol?",
          answer:
            "Mars Protocol is a Cosmos lending and credit protocol offering credit accounts that combine lending, borrowing, and leveraged yield farming. It operates on Osmosis and Neutron chains.",
        },
        {
          question: "Where can I buy MARS?",
          answer:
            "MARS is available on Osmosis DEX and some smaller centralized exchanges. It trades against OSMO, ATOM, and USDC pairs.",
        },
        {
          question: "Is Mars Protocol a good investment?",
          answer:
            "Mars offers innovative credit features for Cosmos DeFi, but has limited TVL and faces competition from larger lending platforms. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Cosmos", href: "/investing/crypto/cosmos", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Mars Protocol?</h2>
      <p>
        Mars Protocol was originally built on Terra before migrating to the broader Cosmos ecosystem after Terra&apos;s collapse. The protocol relaunched on Osmosis and subsequently deployed on Neutron, establishing itself as a multi-chain lending protocol within Cosmos. Mars distinguishes itself from standard lending protocols through its Rover credit accounts, which allow users to manage multiple DeFi positions within a single margin account.
      </p>
      <p>
        The credit account model is similar to how a brokerage margin account works: users deposit collateral into their Rover account and can then borrow, swap, and provide liquidity all within the same account, using their entire portfolio as cross-collateral. This enables capital-efficient strategies like leveraged yield farming and delta-neutral positions that would otherwise require complex multi-protocol interactions.
      </p>

      <h2 id="how-it-works">How Does Mars Protocol Work?</h2>
      <p>
        Mars operates through two primary components: the Red Bank (a standard lending pool where depositors earn yield and borrowers access credit) and Rover (credit accounts for leveraged strategies). The Red Bank functions similarly to Aave or Compound, with dynamic interest rates based on utilization. Rover extends this by allowing users to borrow within their credit account and deploy capital to whitelisted DeFi strategies.
      </p>
      <p>
        Risk parameters for each asset and strategy are governed by the Mars DAO, with liquidation thresholds, borrowing caps, and interest rate models carefully calibrated. Mars deploys as CosmWasm smart contracts on each supported chain, with oracle integration from Pyth and other providers for accurate price feeds. The Health Factor system monitors credit account positions and triggers liquidations when necessary.
      </p>

      <h2 id="tokenomics">MARS Tokenomics</h2>
      <p>
        MARS has a total supply of approximately 1 billion tokens. The token is used for governance over risk parameters, asset listings, and protocol upgrades. MARS stakers can deposit into a safety module that acts as a backstop for protocol shortfalls, earning additional rewards for providing this insurance. A portion of protocol revenue from borrowing interest is directed to the MARS treasury and safety module stakers.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Mars Protocol enables standard lending and borrowing for Cosmos assets, leveraged yield farming through Rover credit accounts, cross-collateralized DeFi positions, capital-efficient margin trading, and safety module staking for protocol insurance yield. The credit account model is particularly useful for experienced DeFi users seeking to maximize capital efficiency across Cosmos DeFi protocols.
      </p>

      <h2 id="how-to-buy">How to Buy MARS</h2>
      <p>
        To buy MARS, visit Osmosis DEX and swap ATOM, OSMO, or USDC for MARS using Keplr wallet. After purchasing, stake MARS in the safety module to earn protocol revenue or hold for governance participation. MARS tokens can be stored in Keplr or any Cosmos-compatible wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Mars Protocol&apos;s credit account model introduces complex liquidation dynamics where multiple positions within a single account interact. Oracle failures or manipulation could trigger incorrect liquidations. The protocol&apos;s TVL is relatively small compared to Ethereum-based lending platforms, limiting liquidity depth. The migration from Terra raises questions about long-term ecosystem stability.
      </p>
      <p>
        Smart contract risk is heightened by the complexity of the credit account system. Competition from other Cosmos lending protocols and the gravitational pull of Ethereum DeFi limits growth potential. Market conditions significantly affect borrowing demand and protocol revenue. Regulatory uncertainty around lending protocols and leveraged DeFi strategies adds compliance risk.
      </p>
    </LearnPageLayout>
  );
}
