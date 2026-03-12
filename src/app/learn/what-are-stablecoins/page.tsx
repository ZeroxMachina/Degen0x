import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Are Stablecoins? Types and How They Work (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about stablecoins: how they maintain price stability, the differences between fiat-backed, crypto-backed, and algorithmic stablecoins, their use cases, and associated risks.",
};

export default function WhatAreStablecoinsPage() {
  return (
    <LearnPageLayout
      title="What Are Stablecoins? Types and How They Work"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Stablecoins are cryptocurrencies designed to maintain a stable value relative to a reference asset, most commonly the US dollar. They combine the benefits of blockchain technology — fast, borderless transfers and programmability — with the price stability needed for everyday commerce and financial applications. With a combined market capitalization exceeding $150 billion, stablecoins have become the backbone of DeFi, the primary trading pair on exchanges, and one of the most impactful applications of blockchain technology."
      toc={[
        { id: "why-stablecoins", title: "why-stablecoins", level: 2 },
        { id: "why-stablecoins-exist", title: "Why Stablecoins Exist", level: 2 },
        { id: "fiat-backed", title: "fiat-backed", level: 2 },
        { id: "fiat-backed-stablecoins", title: "Fiat-Backed Stablecoins", level: 2 },
        { id: "crypto-backed", title: "crypto-backed", level: 2 },
        { id: "crypto-backed-stablecoins", title: "Crypto-Backed Stablecoins", level: 2 },
        { id: "algorithmic", title: "algorithmic", level: 2 },
        { id: "algorithmic-stablecoins", title: "Algorithmic Stablecoins", level: 2 },
        { id: "risks-regulation", title: "risks-regulation", level: 2 },
        { id: "risks-and-regulation", title: "Risks and Regulation", level: 2 }
      ]}
      faqs={[
        {
          question: "Are stablecoins safe to hold?",
          answer:
            "Stablecoins carry different risks depending on their type. Fiat-backed stablecoins like USDC and USDT are generally stable but depend on the issuer's reserves and trustworthiness. Crypto-backed stablecoins depend on the health of the underlying collateral and protocol. No stablecoin is completely risk-free — even the most established ones have experienced brief de-pegging events.",
        },
        {
          question: "Do stablecoins earn interest?",
          answer:
            "Stablecoins themselves do not earn interest, but you can deposit them into DeFi lending protocols like Aave or Compound to earn yield, typically ranging from 2-8% depending on market conditions. Some protocols offer higher yields through liquidity mining incentives, but higher yields generally come with higher risk.",
        },
        {
          question: "What is the difference between USDC and USDT?",
          answer:
            "Both are fiat-backed stablecoins pegged to the US dollar, but they differ in transparency and issuer. USDC is issued by Circle with regular third-party audits of its reserves. USDT is issued by Tether, which has faced scrutiny over the composition and transparency of its reserves. USDT has the larger market cap and trading volume, while USDC is generally considered more transparent.",
        },
      ]}
      relatedArticles={[
        { title: "Crypto Lending Explained", href: "/learn/crypto-lending-explained", category: "Learn" },
        { title: "What Is DeFi?", href: "/learn/what-is-defi", category: "Learn" },
        { title: "CBDCs Explained", href: "/learn/cbdc-explained", category: "Learn" },
        { title: "DeFi Yield Strategies", href: "/learn/defi-yield-strategies", category: "Learn" },
      ]}
    >
      <section id="why-stablecoins">
        <h2>Why Stablecoins Exist</h2>
        <p>
          The primary purpose of stablecoins is to provide a stable store of value within the volatile cryptocurrency ecosystem. When Bitcoin or Ethereum prices swing 10% in a day, traders need a stable asset to park their profits or sit out market turbulence without converting back to fiat currency through slow and expensive banking channels. Stablecoins solve this by offering dollar-equivalent value that exists natively on the blockchain.
        </p>
        <p>
          Beyond trading, stablecoins enable practical blockchain use cases that require price stability: payroll, remittances, lending, borrowing, and everyday payments. A business cannot accept cryptocurrency payments if the token's value might drop 20% before they can convert it. Stablecoins make blockchain-based commerce viable by removing price volatility from the equation. They also serve as the primary unit of account in DeFi, with most lending rates, yield figures, and pricing denominated in stablecoin terms.
        </p>
      </section>

      <section id="fiat-backed">
        <h2>Fiat-Backed Stablecoins</h2>
        <p>
          Fiat-backed stablecoins are the simplest and most widely used type. They maintain their peg through a straightforward mechanism: for every stablecoin token in circulation, the issuer holds an equivalent amount of fiat currency (or fiat-equivalent assets like Treasury bills) in reserve. When you want to mint (create) stablecoins, you deposit dollars with the issuer. When you want to redeem, you return the tokens and receive dollars. This 1:1 backing provides a strong peg as long as the reserves are genuine and accessible.
        </p>
        <p>
          USDT (Tether) is the largest stablecoin by market cap and the most traded cryptocurrency in the world. USDC (USD Coin) by Circle is the second largest, known for regulatory compliance and transparent reserve reporting. These tokens exist on multiple blockchains and are deeply integrated into DeFi protocols, centralized exchanges, and payment systems. The main risk is issuer trust: holders must trust that the reserves truly back every token, and regulatory action against the issuer could affect token redemption.
        </p>
      </section>

      <section id="crypto-backed">
        <h2>Crypto-Backed Stablecoins</h2>
        <p>
          Crypto-backed stablecoins use cryptocurrency as collateral instead of fiat reserves. Because crypto is volatile, these stablecoins are over-collateralized — you must deposit more collateral value than the stablecoins you mint. MakerDAO's DAI is the most prominent example: users lock ETH, WBTC, or other approved assets in a smart contract vault and can borrow DAI up to a certain collateral ratio (typically 150% or more). If the collateral value falls below the required ratio, the position is automatically liquidated to protect the peg.
        </p>
        <p>
          The advantage of crypto-backed stablecoins is decentralization — no central entity holds reserves or can freeze tokens. The entire mechanism operates through transparent, auditable smart contracts. The trade-offs include capital inefficiency (locking up $150+ of ETH to mint $100 of stablecoins), liquidation risk during market crashes, and reliance on price oracles that accurately report collateral values. Despite these challenges, crypto-backed stablecoins have proven remarkably resilient, with DAI maintaining its peg through multiple severe market downturns.
        </p>
      </section>

      <section id="algorithmic">
        <h2>Algorithmic Stablecoins</h2>
        <p>
          Algorithmic stablecoins attempt to maintain their peg through supply-adjustment mechanisms rather than direct collateral backing. They use algorithms to expand supply when the price is above the peg (selling newly minted tokens to push the price down) and contract supply when below the peg (buying and burning tokens to push the price up). Some designs use a dual-token model where a secondary token absorbs volatility to stabilize the primary token.
        </p>
        <p>
          Algorithmic stablecoins have had a troubled history. The most notable failure was TerraUSD (UST) in May 2022, which lost its peg and collapsed to near zero, wiping out over $40 billion in value and triggering a broader crypto market crash. The incident demonstrated that algorithmic stability mechanisms can fail catastrophically during bank-run dynamics, where loss of confidence creates a death spiral of selling pressure. While research continues into more robust designs, fully algorithmic stablecoins remain the riskiest category and face significant skepticism from the market.
        </p>
      </section>

      <section id="risks-regulation">
        <h2>Risks and Regulation</h2>
        <p>
          All stablecoins carry risk, though the nature differs by type. Fiat-backed stablecoins face regulatory risk and counterparty risk — the issuer could be sanctioned, the bank holding reserves could fail, or audits could reveal insufficient backing. In March 2023, USDC briefly de-pegged when Circle disclosed exposure to the failing Silicon Valley Bank, demonstrating how traditional financial system risks can cascade into the stablecoin ecosystem.
        </p>
        <p>
          Regulatory attention on stablecoins is intensifying globally. The EU's MiCA framework includes specific stablecoin provisions, and US lawmakers have proposed several stablecoin regulatory bills. Potential regulations could require issuers to obtain banking licenses, maintain specific reserve compositions, undergo regular audits, and implement redemption guarantees. While regulation may reduce some risks, it could also limit innovation and concentrate the market among large, well-capitalized issuers. Understanding the regulatory landscape is important for anyone holding significant stablecoin positions.
        </p>
      </section>
    </LearnPageLayout>
  );
}
