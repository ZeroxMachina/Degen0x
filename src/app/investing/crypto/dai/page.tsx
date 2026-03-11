import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Dai Stablecoin (DAI)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Dai (DAI), the decentralized stablecoin from MakerDAO backed by crypto collateral. Discover DAI mechanics, savings rate, and how to buy.",
};

export default function DaiPage() {
  return (
    <LearnPageLayout
      title="What Is Dai Stablecoin (DAI)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Dai (DAI) is a decentralized, crypto-collateralized stablecoin created by the MakerDAO protocol on Ethereum. Pegged to the US dollar, DAI is generated when users lock collateral in Maker Vaults and is maintained through overcollateralization and automated liquidation mechanisms. DAI is one of the most widely integrated stablecoins in DeFi."
      toc={[
        { id: "what-is", title: "What Is Dai Stablecoin?", level: 2 },
        { id: "how-it-works", title: "How Does Dai Work?", level: 2 },
        { id: "tokenomics", title: "DAI Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy DAI", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Dai Stablecoin?", answer: "DAI is a decentralized stablecoin on Ethereum created by the MakerDAO protocol. It maintains a $1 peg through crypto overcollateralization in Maker Vaults and is governed by MKR token holders." },
        { question: "Where can I buy DAI?", answer: "DAI is available on virtually every exchange and DEX. It can be minted directly through MakerDAO by depositing collateral, or purchased on Coinbase, Uniswap, Curve, and others." },
        { question: "Is Dai a good investment?", answer: "DAI is designed to maintain a $1 peg, not appreciate in value. The DAI Savings Rate (DSR) offers yield on deposited DAI. For investment exposure to MakerDAO, see MKR governance token." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is Dai Stablecoin?</h2><p>DAI is one of the most established decentralized stablecoins in crypto, created by the MakerDAO protocol in 2017. Unlike centralized stablecoins such as USDC and USDT that are backed by bank deposits and treasury bonds, DAI is backed by a diversified basket of crypto collateral, real-world assets, and USDC held in Maker Vaults. This decentralized architecture makes DAI censorship-resistant and transparent, with all collateral verifiable on-chain.</p><p>DAI has maintained its dollar peg through multiple market cycles, including extreme volatility events. The DAI Savings Rate (DSR) allows holders to earn yield by depositing DAI into the Maker savings contract, with rates set by MakerDAO governance based on protocol revenue and market conditions.</p></section>
      <section id="how-it-works"><h2>How Does Dai Work?</h2><p>DAI is created when users deposit approved collateral into Maker Vaults and generate DAI against it. Each Vault requires overcollateralization, meaning the collateral value must significantly exceed the DAI generated. If collateral value falls below the liquidation threshold, the position is automatically liquidated and the collateral is sold to repay the DAI debt. Accepted collateral types include ETH, WBTC, stETH, and various other crypto assets and real-world asset tokens.</p><p>The DAI Savings Rate provides passive yield to DAI holders through a simple deposit mechanism. The rate is funded by stability fees charged to Vault creators and revenue from real-world asset investments. MakerDAO governance continuously adjusts these parameters to maintain the peg and optimize protocol revenue.</p></section>
      <section id="tokenomics"><h2>DAI Tokenomics</h2><p>DAI has no maximum supply and expands or contracts based on demand for Vault creation and DAI generation. The circulating supply has ranged from hundreds of millions to billions of dollars depending on market conditions. All DAI in circulation is backed by collateral locked in Maker Vaults, ensuring that redemption value is maintained. The protocol's balance sheet is fully transparent and auditable on-chain at all times.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>DAI serves as a decentralized dollar for DeFi trading, lending, borrowing, and savings. It is widely used as a base pair on DEXs, collateral in lending protocols, a savings vehicle through the DSR, and a censorship-resistant dollar for cross-border transfers. DAI's integration across hundreds of DeFi protocols, wallets, and payment platforms makes it one of the most composable stablecoins in the ecosystem.</p></section>
      <section id="how-to-buy"><h2>How to Buy DAI</h2><p>DAI is available on essentially every major exchange including Coinbase, Binance, and Kraken. It can also be purchased on Uniswap, Curve, and other DEXs, or minted directly through the MakerDAO Oasis app by depositing collateral. After acquiring DAI, deposit into the DAI Savings Rate contract (sDAI) to earn yield. Store in any Ethereum-compatible wallet.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>DAI faces smart contract risk through the complex Maker Vault system. Dependence on USDC as a significant portion of collateral introduces centralized counterparty risk. Real-world asset collateral introduces traditional financial system risks. Extreme market volatility could stress the liquidation system and create bad debt. Stablecoin regulation may impact DAI's operations and accepted collateral types. Competition from USDC, USDT, and newer decentralized stablecoins continues to evolve.</p></section>
    </LearnPageLayout>
  );
}
