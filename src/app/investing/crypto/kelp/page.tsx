import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Kelp DAO (rsETH)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Kelp DAO (rsETH), the liquid restaking protocol for EigenLayer. Discover how it works, tokenomics, use cases, and how to buy rsETH.",
};

export default function KelpPage() {
  return (
    <LearnPageLayout
      title="What Is Kelp DAO (rsETH)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Kelp DAO is a liquid restaking protocol that issues rsETH, a liquid restaking token representing ETH restaked on EigenLayer. Built by the Stader Labs team, Kelp allows users to restake their ETH or liquid staking tokens and receive rsETH for use in DeFi, combining EigenLayer restaking yields with DeFi composability across Ethereum and Layer 2 ecosystems."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-kelp-dao", title: "What Is Kelp DAO?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-kelp-dao-work", title: "How Does Kelp DAO Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "rseth-tokenomics", title: "rsETH Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-rseth", title: "How to Buy rsETH", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is Kelp DAO?", answer: "Kelp DAO is a liquid restaking protocol by Stader Labs that issues rsETH, representing ETH restaked on EigenLayer with DeFi composability across Ethereum and Layer 2s." },
        { question: "Where can I get rsETH?", answer: "rsETH can be obtained by depositing ETH or LSTs through Kelp DAO, or purchased on DEXs like Uniswap, Curve, and Balancer." },
        { question: "Is rsETH a good investment?", answer: "rsETH provides restaking yield with DeFi utility, but carries compounded staking and restaking risks. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Ethereum", href: "/investing/crypto/ethereum", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Kelp DAO?</h2>
      <p>Kelp DAO was created by the Stader Labs team to address the liquidity problem in EigenLayer restaking. When users restake ETH on EigenLayer, their assets are locked and unavailable for DeFi use. Kelp solves this by accepting ETH deposits, restaking them on EigenLayer, and issuing rsETH tokens that can be freely traded and used in DeFi while earning restaking rewards.</p>
      <p>The protocol has attracted billions in TVL and established rsETH as one of the most widely integrated liquid restaking tokens in DeFi. rsETH is accepted as collateral on major lending platforms and available on numerous DEXs across Ethereum and Layer 2 networks. Kelp&apos;s managed approach to AVS selection and operator delegation provides a curated restaking experience.</p>

      <h2 id="how-it-works">How Does Kelp DAO Work?</h2>
      <p>Users deposit ETH or liquid staking tokens (stETH, ETHx) into Kelp DAO and receive rsETH at the current exchange rate. The deposited assets are restaked on EigenLayer through selected operators and AVSs. As restaking rewards accrue, the rsETH exchange rate appreciates against ETH. The DAO governance determines operator selection, AVS allocation, and risk parameters.</p>
      <p>rsETH supports instant withdrawals through DEX liquidity pools and delayed withdrawals through the EigenLayer unstaking queue. The protocol monitors restaking positions and manages rebalancing across operators and AVSs to optimize risk-adjusted returns. Cross-chain deployments on Arbitrum, Optimism, Base, and other L2s enable rsETH usage across the broader DeFi ecosystem.</p>

      <h2 id="tokenomics">rsETH Tokenomics</h2>
      <p>rsETH has elastic supply based on deposits. The exchange rate increases as restaking yields accrue. Kelp charges a management fee on yields. A separate KELP governance token may be used for protocol governance. rsETH is available on Ethereum mainnet and multiple Layer 2 networks for DeFi composability.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>rsETH enables liquid access to EigenLayer restaking yields, DeFi collateral with restaking exposure, yield layering through lending and liquidity provision, managed EigenLayer AVS exposure, and cross-chain restaking utility across L2 ecosystems. The token bridges the gap between restaking participation and DeFi capital efficiency.</p>

      <h2 id="how-to-buy">How to Buy rsETH</h2>
      <p>To get rsETH, deposit ETH through the Kelp DAO platform or purchase on Uniswap, Curve, or Balancer. rsETH is also available on L2 DEXs. Store rsETH in MetaMask or a hardware wallet.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>rsETH carries compounded risks from Ethereum staking and EigenLayer restaking. AVS-level slashing could reduce rsETH value. Smart contract risk spans Kelp, EigenLayer, and integrated DeFi protocols. Competition from other LRTs fragments liquidity. The rsETH/ETH peg could deviate during market stress. Regulatory treatment of restaking tokens is uncertain.</p>
    </LearnPageLayout>
  );
}
