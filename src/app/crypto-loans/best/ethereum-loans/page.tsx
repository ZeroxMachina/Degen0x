import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Ethereum-Backed Loans (${CURRENT_YEAR}) | degen0x`,
  description: "Compare the best platforms for borrowing against your ETH. Review rates, LTV ratios, and liquidation terms for Ethereum-backed loans.",
};

export default function EthereumLoansPage() {
  return (
    <LearnPageLayout
      title="Best Ethereum-Backed Loans"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="9 min read"
      intro="Ethereum is one of the most widely accepted collateral assets in crypto lending. Whether you use CeFi or DeFi platforms, borrowing against ETH lets you access liquidity without selling your position. With staking yield now available on ETH, you can even earn while borrowing. Here are the top platforms for Ethereum-backed loans."
      toc={[
        { id: "top-platforms", title: "top-platforms", level: 2 },
        { id: "top-eth-loan-platforms", title: "Top ETH Loan Platforms", level: 2 },
        { id: "cefi-vs-defi", title: "cefi-vs-defi", level: 2 },
        { id: "cefi-vs-defi-for-eth-loans", title: "CeFi vs DeFi for ETH Loans", level: 2 },
        { id: "staking-collateral", title: "staking-collateral", level: 2 },
        { id: "using-staked-eth-as-collateral", title: "Using Staked ETH as Collateral", level: 2 },
        { id: "how-to-borrow", title: "how-to-borrow", level: 2 },
        { id: "how-to-borrow-against-eth", title: "How to Borrow Against ETH", level: 2 }
      ]}
      faqs={[
        { question: "Can I borrow against staked ETH?", answer: "Yes. Many DeFi protocols accept liquid staking tokens like stETH and rETH as collateral, allowing you to earn staking yield while borrowing simultaneously." },
        { question: "What LTV can I get on Ethereum loans?", answer: "Most DeFi platforms offer 75-82.5% LTV on ETH collateral. CeFi platforms like Nexo offer up to 90%. Higher LTV means more borrowing power but greater liquidation risk." },
      ]}
      relatedArticles={[
        { title: "Best Bitcoin-Backed Loans", href: "/crypto-loans/best/bitcoin-loans", category: "Crypto Loans" },
        { title: "LTV Ratio Explained", href: "/crypto-loans/learn/ltv-ratio-explained", category: "Crypto Loans" },
        { title: "Liquidation Risk Guide", href: "/crypto-loans/learn/liquidation-risk", category: "Crypto Loans" },
      ]}
    >
      <h2 id="top-platforms">Top ETH Loan Platforms</h2>
      <p>Aave leads the DeFi space with deep ETH liquidity pools across Ethereum mainnet, Arbitrum, and Optimism. Compound Finance offers reliable ETH borrowing with a straightforward interface. On the CeFi side, Nexo and YouHodler accept ETH with competitive rates. Spark Protocol (formerly MakerDAO) also supports ETH and stETH collateral for borrowing DAI at governance-set rates.</p>

      <h2 id="cefi-vs-defi">CeFi vs DeFi for ETH Loans</h2>
      <p>CeFi platforms provide a simpler user experience with customer support and fiat withdrawal options. DeFi protocols offer permissionless access, on-chain transparency, and typically lower rates. DeFi also eliminates counterparty risk but introduces smart contract risk. For large ETH positions, many borrowers prefer DeFi for its transparency and self-custody model.</p>

      <h2 id="staking-collateral">Using Staked ETH as Collateral</h2>
      <p>Liquid staking tokens such as Lido&apos;s stETH and Rocket Pool&apos;s rETH are accepted on major DeFi protocols. This lets you earn 3-4% staking yield on your collateral while borrowing against it. The effective cost of your loan drops significantly when you factor in staking rewards. Some protocols even offer specialized markets for these assets with higher LTV limits.</p>

      <h2 id="how-to-borrow">How to Borrow Against ETH</h2>
      <p>For DeFi: Connect your wallet to Aave or Compound, supply ETH as collateral, and borrow stablecoins or other assets. Monitor your health factor to avoid liquidation. For CeFi: Create an account, complete KYC, deposit ETH, and receive a credit line. Start with a conservative LTV (under 50%) and add collateral during market dips to protect your position.</p>
    </LearnPageLayout>
  );
}
