import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is StakeWise (SWISE)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about StakeWise (SWISE), the liquid staking protocol with Vaults. Discover how it works, tokenomics, use cases, and how to buy SWISE.",
};

export default function StakeWisePage() {
  return (
    <LearnPageLayout
      title="What Is StakeWise (SWISE)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="StakeWise is an Ethereum liquid staking protocol featuring a unique Vault architecture that allows anyone to launch their own staking pool with customizable parameters. Through StakeWise V3, users can create isolated staking Vaults with their own validators, fee structures, and risk profiles, while the osETH liquid staking token provides unified DeFi composability across all Vaults."
      toc={[
        { id: "what-is", title: "What Is StakeWise?", level: 2 },
        { id: "how-it-works", title: "How Does StakeWise Work?", level: 2 },
        { id: "tokenomics", title: "SWISE Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy SWISE", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is StakeWise?", answer: "StakeWise is an Ethereum liquid staking protocol with customizable Vaults where anyone can launch staking pools, unified by the osETH liquid staking token for DeFi composability." },
        { question: "Where can I buy SWISE?", answer: "SWISE is available on Uniswap, Gate.io, and other DEXs. osETH is obtained by minting from Vaults." },
        { question: "Is StakeWise a good investment?", answer: "StakeWise's Vault architecture is innovative for staking decentralization, but TVL is much smaller than Lido. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Ethereum", href: "/investing/crypto/ethereum", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is StakeWise?</h2>
      <p>StakeWise was one of the earliest Ethereum staking protocols, launching before the Merge. StakeWise V3 introduced the Vault architecture, a significant innovation in staking decentralization. Any entity, from solo stakers to institutions, can create a Vault with their own validators and customize parameters like fees, access controls, and MEV strategies. This modular approach promotes staking decentralization by enabling many independent staking operations under a unified protocol.</p>
      <p>The osETH token is minted by Vault depositors who want liquidity from their staked position. osETH is overcollateralized, meaning the total ETH staked in Vaults exceeds the osETH supply, providing a buffer against slashing losses. This design makes osETH one of the most conservatively designed liquid staking tokens in terms of risk management.</p>

      <h2 id="how-it-works">How Does StakeWise Work?</h2>
      <p>Vault operators deploy isolated staking pools with their own validators. Users deposit ETH into their chosen Vault and can either hold their Vault position directly or mint osETH to gain DeFi liquidity. osETH&apos;s overcollateralization means it is insulated from single Vault slashing events, as the collateral buffer absorbs losses before affecting osETH holders.</p>
      <p>The Smoothing Pool aggregates MEV and priority fees across all Vaults, distributing them fairly to all participants. The oracle system tracks total staked ETH and rewards across all Vaults to maintain accurate osETH pricing. The DAO governance controls protocol parameters including Vault approval criteria and osETH collateralization ratios.</p>

      <h2 id="tokenomics">SWISE Tokenomics</h2>
      <p>SWISE has a total supply of approximately 1 billion tokens. The token is used for governance over protocol parameters, Vault approval processes, and fee structures. SWISE stakers may receive a share of protocol revenue from Vault fees. The token was distributed through early community programs and liquidity incentives.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>StakeWise enables customizable staking Vaults for operators of all sizes, osETH as overcollateralized liquid staking with DeFi utility, institutional-grade staking with custom compliance requirements, solo staker liquid staking with individual Vaults, and MEV smoothing across the entire protocol for fair reward distribution.</p>

      <h2 id="how-to-buy">How to Buy SWISE</h2>
      <p>To buy SWISE, swap ETH on Uniswap or purchase on Gate.io. To obtain osETH, deposit ETH into a StakeWise Vault and mint osETH. Store SWISE and osETH in MetaMask or a Ledger wallet.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>StakeWise&apos;s smaller TVL compared to Lido results in lower DeFi liquidity for osETH. The Vault architecture&apos;s complexity may deter simpler users. Vault quality depends on individual operators, creating variable risk across the protocol. Smart contract risk and oracle dependency remain standard staking concerns. Competition from Lido, Rocket Pool, and restaking protocols limits growth potential.</p>
    </LearnPageLayout>
  );
}
