import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Lido DAO (LDO)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Lido DAO (LDO), the largest liquid staking protocol on Ethereum. Discover how it works, tokenomics, use cases, and how to buy LDO.",
};

export default function LidoPage() {
  return (
    <LearnPageLayout
      title="What Is Lido DAO (LDO)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Lido is the largest liquid staking protocol in crypto, enabling users to stake ETH and receive stETH (staked ETH) tokens that can be used across DeFi while earning staking rewards. With over 28% of all staked ETH flowing through Lido, the protocol is critical infrastructure for the Ethereum ecosystem. LDO is the governance token of the Lido DAO."
      toc={[
        { id: "what-is", title: "What Is Lido DAO?", level: 2 },
        { id: "how-it-works", title: "How Does Lido Work?", level: 2 },
        { id: "tokenomics", title: "LDO Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy LDO", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Lido DAO?",
          answer: "Lido is the largest liquid staking protocol allowing users to stake ETH and receive stETH, a liquid token that earns staking rewards while being usable in DeFi applications.",
        },
        {
          question: "Where can I buy LDO?",
          answer: "LDO is available on Coinbase, Binance, Kraken, OKX, and other major exchanges.",
        },
        {
          question: "Is Lido a good investment?",
          answer: "Lido dominates liquid staking with real revenue, but faces centralization concerns and competition. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Rocket Pool", href: "/investing/crypto/rocket-pool", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Lido DAO?</h2>
      <p>
        Lido was launched in December 2020 to solve a key problem with Ethereum staking: the 32 ETH minimum requirement and the inability to use staked ETH in DeFi. By pooling user deposits and distributing them across professional node operators, Lido enables anyone to stake any amount of ETH. In return, users receive stETH, a rebasing token that accrues staking rewards daily while remaining liquid and usable across DeFi.
      </p>
      <p>
        Lido has become the single largest holder of staked ETH, managing over 28% of all staked Ethereum. This dominant market position makes Lido critical infrastructure for the Ethereum network, but also raises concerns about centralization of staking power. The Lido DAO, governed by LDO holders, manages protocol parameters, node operator selection, and treasury allocation.
      </p>

      <h2 id="how-it-works">How Does Lido Work?</h2>
      <p>
        Users deposit ETH into Lido&apos;s smart contracts and receive stETH at a 1:1 ratio. Lido distributes deposited ETH across a curated set of professional node operators who run validators. stETH balances automatically rebase daily to reflect earned staking rewards, minus Lido&apos;s 10% fee (split between node operators and the DAO treasury). stETH can be traded, used as collateral in lending protocols like Aave, or provided as liquidity in DEXs.
      </p>

      <h2 id="tokenomics">LDO Tokenomics</h2>
      <p>
        LDO has a total supply of 1 billion tokens. The distribution includes allocations for DAO treasury, investors, founders and team, and validators and withdrawal key signers. LDO is used exclusively for governance of the Lido DAO, including voting on protocol upgrades, node operator additions, fee changes, and treasury spending. Lido generates significant protocol revenue through the 5% fee taken from staking rewards.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Lido enables liquid staking of ETH without the 32 ETH minimum, DeFi composability with stETH across lending, trading, and yield protocols, institutional-grade staking through professional node operators, and multi-chain liquid staking (Lido also supports Polygon staking). stETH has become one of the most widely used DeFi collateral assets.
      </p>

      <h2 id="how-to-buy">How to Buy LDO</h2>
      <p>
        To buy LDO, register on Coinbase, Binance, or Kraken. Complete identity verification, deposit funds, and purchase LDO tokens. To use Lido for staking, visit the Lido website and stake ETH to receive stETH. LDO is an ERC-20 token compatible with MetaMask and Ledger hardware wallets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Lido&apos;s dominance has raised serious centralization concerns within the Ethereum community, as one protocol controlling over 28% of staked ETH could theoretically influence consensus. Regulatory scrutiny of liquid staking as a potential securities offering adds legal risk. Competition from Rocket Pool, Coinbase, and newer restaking protocols like EigenLayer is intensifying.
      </p>
      <p>
        LDO does not directly capture protocol revenue (it is purely a governance token), limiting its direct value accrual mechanism. Smart contract risk is significant given the massive amount of ETH held in Lido&apos;s contracts. The stETH peg to ETH has historically deviated during market stress, creating risk for DeFi positions using stETH as collateral.
      </p>
    </LearnPageLayout>
  );
}
