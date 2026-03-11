import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Stablecoin Borrowing Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how to borrow stablecoins against crypto collateral. Compare USDC, USDT, DAI borrowing options and find the best rates across platforms.",
  keywords: ["borrow stablecoins", "stablecoin borrowing", "borrow usdc", "borrow dai"],
};

export default function StablecoinBorrowingGuidePage() {
  return (
    <LearnPageLayout
      title="Stablecoin Borrowing Guide"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="8 min"
      intro="Borrowing stablecoins against crypto collateral is the most common crypto loan use case, providing dollar-denominated liquidity without selling your crypto holdings. Whether you choose USDC, USDT, DAI, or protocol-native stablecoins, understanding the options, rate differences, and risk considerations helps you make the best borrowing decision."
      toc={[
        { id: "stablecoin-options", title: "Stablecoin Options", level: 2 },
        { id: "rate-comparison", title: "Borrowing Rate Comparison", level: 2 },
        { id: "protocol-stablecoins", title: "Protocol-Native Stablecoins", level: 2 },
        { id: "choosing-stablecoin", title: "Choosing the Right Stablecoin", level: 2 },
      ]}
      faqs={[
        { question: "Which stablecoin is safest to borrow?", answer: "USDC is generally considered the safest choice due to Circle's transparency, regular attestations, and regulatory compliance. DAI offers decentralized backing but is more complex. USDT has the deepest liquidity but less transparency. The safest choice depends on your specific use case and risk priorities." },
        { question: "Why do borrowing rates differ between stablecoins?", answer: "Rates reflect supply and demand for each stablecoin. USDC and USDT have different utilization levels across protocols, and protocol-native stablecoins like DAI have separate rate mechanisms. During high demand for leverage, all stablecoin borrow rates tend to increase together." },
      ]}
      relatedArticles={[
        { title: "Crypto Loan Interest Rates", href: "/crypto-loans/learn/crypto-loan-interest-rates", category: "Crypto Loans" },
        { title: "Stablecoin Lending", href: "/crypto-loans/learn/stablecoin-lending", category: "Crypto Loans" },
      ]}
    >
      <section id="stablecoin-options">
        <h2>Stablecoin Options</h2>
        <p>The major stablecoins available for borrowing each have distinct characteristics. USDC is backed by cash and short-term treasuries with regular attestations by Grant Thornton, offering strong transparency and regulatory compliance. USDT has the deepest liquidity and widest trading pair availability but less transparency about its reserves. DAI is a decentralized stablecoin backed by overcollateralized crypto positions and real-world assets, offering censorship resistance but more complexity. GHO is Aave's native stablecoin with rates set by governance. LUSD from Liquity offers fully decentralized, ETH-only backing. Each stablecoin's risk profile differs in terms of centralization, transparency, and peg stability, affecting which is most appropriate for your borrowing needs.</p>
      </section>
      <section id="rate-comparison">
        <h2>Borrowing Rate Comparison</h2>
        <p>Stablecoin borrowing rates vary significantly across platforms and between stablecoins. On Aave, USDC and USDT borrow rates are determined by utilization and typically range from 3-8% during normal conditions but can spike during high demand. DAI has a separate stability fee mechanism on MakerDAO that is set by governance. Compound V3 focuses on USDC as the borrowable asset with competitive rates. CeFi platforms offer rates from 0% for top-tier members to 13% or more for standard accounts. Liquity offers 0% ongoing interest for LUSD borrowing with a one-time fee. DeFi Llama and similar aggregators let you compare real-time borrowing rates across all major protocols and chains to find the most competitive option for your chosen stablecoin.</p>
      </section>
      <section id="protocol-stablecoins">
        <h2>Protocol-Native Stablecoins</h2>
        <p>Several lending protocols issue their own stablecoins. MakerDAO's DAI is the most established, backed by diversified collateral including crypto assets and real-world assets. Aave's GHO is minted by Aave borrowers with rates set through governance, often offering competitive rates to bootstrap adoption. Liquity's LUSD is unique in being fully decentralized with immutable contracts and zero ongoing interest. Abracadabra's MIM is borrowed against yield-bearing collateral. Protocol-native stablecoins may offer rate advantages but introduce additional risk since the stablecoin's peg depends on the protocol's health. If you plan to convert borrowed stablecoins to fiat, check the liquidity and exchange availability for your chosen stablecoin to ensure you can execute the conversion efficiently.</p>
      </section>
      <section id="choosing-stablecoin">
        <h2>Choosing the Right Stablecoin</h2>
        <p>Your choice of stablecoin should match your use case. For converting to fiat, choose USDC or USDT for their deep exchange liquidity and fiat off-ramp availability. For DeFi strategies, DAI and USDC are widely accepted across protocols. For censorship resistance, DAI and LUSD offer decentralized alternatives. For the lowest borrowing cost, compare current rates across all stablecoins since the cheapest option changes frequently. Consider the liquidity available for your chosen stablecoin on the chain where you plan to use it. On Ethereum mainnet, all major stablecoins have deep liquidity. On Layer 2s and alternative chains, USDC and USDT typically have the most liquidity while smaller stablecoins may have limited availability.</p>
      </section>
    </LearnPageLayout>
  );
}
