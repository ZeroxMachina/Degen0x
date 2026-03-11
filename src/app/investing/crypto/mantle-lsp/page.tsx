import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Mantle LSP (mETH)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Mantle LSP (mETH), Mantle's liquid staking protocol for ETH. Discover how it works, tokenomics, use cases, and how to buy mETH.",
};

export default function MantleLspPage() {
  return (
    <LearnPageLayout
      title="What Is Mantle LSP (mETH)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Mantle LSP (Liquid Staking Protocol) is a permissionless ETH liquid staking protocol developed by Mantle that issues mETH, a liquid staking token representing staked ETH. Backed by Mantle's substantial treasury, mETH offers competitive staking yields and deep DeFi integrations across the Mantle L2 ecosystem and beyond, making it one of the fastest-growing liquid staking tokens."
      toc={[
        { id: "what-is", title: "What Is Mantle LSP?", level: 2 },
        { id: "how-it-works", title: "How Does Mantle LSP Work?", level: 2 },
        { id: "tokenomics", title: "mETH Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy mETH", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Mantle LSP?", answer: "Mantle LSP is a liquid staking protocol that allows users to stake ETH and receive mETH, a liquid staking token usable in DeFi while earning Ethereum staking rewards." },
        { question: "Where can I get mETH?", answer: "mETH can be obtained by staking ETH through the Mantle LSP interface, or purchased on DEXs like Uniswap and Curve. It is also available on the Mantle L2." },
        { question: "Is mETH a good investment?", answer: "mETH provides ETH staking exposure with DeFi composability, but carries smart contract and validator risk. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Mantle", href: "/investing/crypto/mantle", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Mantle LSP?</h2>
      <p>
        Mantle LSP launched in late 2023 as part of the Mantle ecosystem, leveraging Mantle&apos;s massive treasury (one of the largest DAO treasuries in crypto) to bootstrap a competitive liquid staking product. The protocol quickly accumulated billions in TVL, making mETH one of the top liquid staking tokens by deposits. mETH is designed to be a reward-bearing token where its value appreciates against ETH as staking rewards accrue.
      </p>
      <p>
        The protocol benefits from Mantle&apos;s ecosystem incentives, which encourage mETH usage across DeFi applications on the Mantle L2. By creating a liquid staking token deeply integrated with its own Layer 2, Mantle creates a synergistic relationship where mETH provides liquidity and yield for Mantle DeFi, while Mantle DeFi creates utility and demand for mETH.
      </p>

      <h2 id="how-it-works">How Does Mantle LSP Work?</h2>
      <p>
        Users deposit ETH into the Mantle LSP smart contract and receive mETH at the current exchange rate. The deposited ETH is staked across a diversified set of professional node operators selected by the Mantle governance process. Staking rewards accumulate and are reflected in the increasing exchange rate of mETH to ETH, meaning mETH holders earn staking yield without any action required.
      </p>
      <p>
        The protocol supports both staking (ETH to mETH) and unstaking (mETH back to ETH) with a processing period determined by Ethereum&apos;s validator exit queue. mETH can also be swapped instantly on secondary markets like Curve and Uniswap pools for users who need immediate liquidity. The oracle system tracks the total ETH staked and rewards earned to maintain accurate exchange rate calculations.
      </p>

      <h2 id="tokenomics">mETH Tokenomics</h2>
      <p>
        mETH supply is elastic, growing as more ETH is staked and shrinking as ETH is withdrawn. The exchange rate between mETH and ETH increases over time as staking rewards accrue. Mantle LSP charges a protocol fee on staking rewards, which is directed to the Mantle treasury and ecosystem development. There is no separate governance token for the LSP; governance is handled through the MNT token of the broader Mantle ecosystem.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        mETH serves as a yield-bearing ETH position in DeFi, collateral for lending and borrowing on Mantle L2 protocols, liquidity provision in mETH trading pairs, restaking collateral on EigenLayer and other restaking platforms, and a treasury management asset for DAOs seeking ETH exposure with staking yield. The deep integration with Mantle L2 DeFi makes mETH particularly useful within that ecosystem.
      </p>

      <h2 id="how-to-buy">How to Buy mETH</h2>
      <p>
        To get mETH, visit the Mantle LSP interface and stake ETH directly. Alternatively, purchase mETH on Curve or Uniswap by swapping ETH. mETH can also be obtained on the Mantle L2 through bridging. After acquiring mETH, use it in DeFi protocols on Mantle L2 or Ethereum mainnet for additional yield opportunities. Store mETH in MetaMask or a Ledger hardware wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        mETH carries smart contract risk inherent to all liquid staking protocols. Validator slashing events could reduce the value of mETH relative to ETH. The protocol&apos;s node operator selection is governed by Mantle, introducing centralization risk in validator management. Competition from Lido (stETH), Rocket Pool (rETH), and other established LSTs is intense.
      </p>
      <p>
        The close integration with Mantle L2 means mETH&apos;s DeFi utility is partially dependent on Mantle ecosystem growth. Regulatory uncertainty around liquid staking tokens and their classification as securities remains unresolved. The mETH/ETH exchange rate could deviate on secondary markets during high volatility. Dependency on Mantle treasury funding for competitive incentives may not be sustainable long-term.
      </p>
    </LearnPageLayout>
  );
}
