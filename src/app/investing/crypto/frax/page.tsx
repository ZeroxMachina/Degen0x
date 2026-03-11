import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Frax (FRAX)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Frax (FRAX), the fractional-algorithmic stablecoin protocol. Discover FRAX stablecoin mechanics, the Frax ecosystem, and how to buy.",
};

export default function FraxPage() {
  return (
    <LearnPageLayout
      title="What Is Frax (FRAX)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Frax (FRAX) is a decentralized stablecoin that pioneered the fractional-algorithmic model, combining collateral backing with algorithmic mechanisms to maintain its dollar peg. The Frax ecosystem has expanded beyond stablecoins to include Frax Ether (frxETH) for liquid staking, Frax Finance lending, and the Fraxtal Layer 2 blockchain."
      toc={[
        { id: "what-is", title: "What Is Frax?", level: 2 },
        { id: "how-it-works", title: "How Does Frax Work?", level: 2 },
        { id: "tokenomics", title: "FRAX Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy FRAX", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Frax?", answer: "FRAX is a decentralized stablecoin pegged to the US dollar. Originally using a fractional-algorithmic model, FRAX has moved toward full collateralization. The Frax ecosystem includes stablecoins, liquid staking (frxETH), and the Fraxtal L2 chain." },
        { question: "Where can I buy FRAX?", answer: "FRAX is available on Curve Finance, Uniswap, and other DEXs. Some centralized exchanges also list FRAX trading pairs." },
        { question: "Is Frax a good investment?", answer: "FRAX as a stablecoin is designed to maintain a $1 peg, not appreciate. For investment exposure to the Frax ecosystem, see Frax Share (FXS), the governance and value accrual token." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is Frax?</h2><p>Frax is a decentralized stablecoin protocol that launched in December 2020 as the first fractional-algorithmic stablecoin. The original design used a combination of USDC collateral and the algorithmic burning/minting of FXS (Frax Share) to maintain the dollar peg. Following lessons from the Terra/UST collapse, Frax transitioned toward full collateralization through its V3 upgrade, making FRAX backed entirely by real-world assets and crypto collateral.</p><p>The Frax ecosystem has grown significantly beyond its stablecoin origins. It now includes frxETH and sfrxETH for Ethereum liquid staking, Frax Lend for decentralized lending, sFRAX for yield-bearing stablecoin deposits, FPI (Frax Price Index) pegged to CPI inflation, and Fraxtal, a Layer 2 blockchain built on the OP Stack.</p></section>
      <section id="how-it-works"><h2>How Does Frax Work?</h2><p>Under the V3 model, FRAX is backed by a combination of USDC, US Treasury bonds (through real-world asset partnerships), and other high-quality collateral held in the protocol's balance sheet. The protocol maintains a collateral ratio above 100%, ensuring that every FRAX token is fully redeemable for one dollar of underlying assets. sFRAX is a staked version of FRAX that earns yield from the protocol's Treasury bond holdings and DeFi lending activities.</p><p>The protocol uses an AMO (Algorithmic Market Operations) system to deploy idle collateral productively while maintaining the peg. AMOs can provide liquidity on Curve, lend on Aave, or invest in other yield sources, generating revenue that benefits FXS holders and the protocol treasury.</p></section>
      <section id="tokenomics"><h2>FRAX Tokenomics</h2><p>FRAX as a stablecoin has a variable supply that expands and contracts based on demand. It is minted when users deposit collateral and burned when they redeem. There is no maximum supply cap. The stability of FRAX depends on the protocol's ability to maintain full collateral backing and the effective operation of its AMOs. Protocol revenue from lending, liquidity provision, and Treasury bond yields flows to the ecosystem and FXS token holders.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>FRAX serves as a decentralized stablecoin for DeFi trading, lending, and liquidity provision. sFRAX provides yield-bearing stablecoin exposure. The broader Frax ecosystem enables liquid staking through frxETH, lending through Frax Lend, and inflation-hedged savings through FPI. FRAX is widely integrated across DeFi protocols on Ethereum, Arbitrum, and other chains as a trading pair and collateral asset.</p></section>
      <section id="how-to-buy"><h2>How to Buy FRAX</h2><p>FRAX can be minted directly through the Frax protocol by depositing collateral, or purchased on DEXs like Curve Finance and Uniswap. For yield generation, deposit FRAX as sFRAX to earn protocol yields. Store FRAX in any Ethereum-compatible wallet. For investment exposure to the Frax ecosystem's growth, consider FXS (Frax Share) rather than FRAX itself.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>FRAX faces regulatory risk as stablecoin regulation evolves globally. Dependence on USDC as primary collateral means any issues with Circle affect FRAX. Smart contract risk across the complex AMO system and multiple ecosystem products is significant. Real-world asset backing introduces counterparty risk with Treasury bond custodians. Competition from DAI, USDC, USDT, and newer decentralized stablecoins is ongoing. The transition to full collateralization has reduced algorithmic risk but introduced different dependency structures.</p></section>
    </LearnPageLayout>
  );
}
