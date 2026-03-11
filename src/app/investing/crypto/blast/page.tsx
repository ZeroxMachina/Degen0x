import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Blast (BLAST)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Blast (BLAST), the Ethereum Layer 2 with native yield for ETH and stablecoins. Discover how it works, tokenomics, use cases, and how to buy BLAST.",
};

export default function BlastPage() {
  return (
    <LearnPageLayout
      title="What Is Blast (BLAST)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Blast is an Ethereum Layer 2 optimistic rollup that distinguishes itself by providing native yield on ETH and stablecoins deposited on the network. Founded by Tieshun Roquerre (Pacman), the creator of Blur NFT marketplace, Blast automatically yields ETH deposits through Lido staking and stablecoin deposits through MakerDAO's DAI Savings Rate, passing this yield directly to users and dApps built on the network."
      toc={[
        { id: "what-is", title: "What Is Blast?", level: 2 },
        { id: "how-it-works", title: "How Does Blast Work?", level: 2 },
        { id: "tokenomics", title: "BLAST Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy BLAST", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Blast?",
          answer: "Blast is an Ethereum L2 optimistic rollup that provides native yield on ETH and stablecoins by auto-staking deposits through Lido and MakerDAO, distributing yields to users and dApps.",
        },
        {
          question: "Where can I buy BLAST?",
          answer: "BLAST is available on OKX, Bybit, Gate.io, KuCoin, and decentralized exchanges on the Blast network like Thruster.",
        },
        {
          question: "Is Blast a good investment?",
          answer: "Blast offers unique native yield mechanics but faces questions about long-term sustainability and competition. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Blur", href: "/investing/crypto/blur", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Blast?</h2>
      <p>
        Blast was founded by Tieshun Roquerre, known as Pacman, who previously created Blur, the dominant NFT marketplace by trading volume. Blast launched with a controversial invite-only deposit phase in November 2023, accumulating over $2 billion in TVL before mainnet launch in February 2024. The network raised $20 million from Paradigm and Standard Crypto, generating significant attention through its aggressive points-based incentive system and native yield proposition.
      </p>
      <p>
        The core innovation of Blast is that idle ETH and stablecoins on the network automatically generate yield. On other L2s, deposited ETH sits idle in bridge contracts. Blast instead stakes this ETH through Lido (earning stETH yield) and deposits stablecoins into MakerDAO&apos;s DAI Savings Rate, then rebases these yields directly to user balances. This means holding ETH on Blast earns approximately 4% APY and holding USDB (Blast&apos;s native stablecoin) earns approximately 5% APY without any user action required.
      </p>

      <h2 id="how-it-works">How Does Blast Work?</h2>
      <p>
        Blast operates as an optimistic rollup with custom modifications for yield distribution. When users bridge ETH to Blast, the bridge contract stakes the ETH through Lido, receiving stETH. The yield from stETH is distributed to Blast users through an automatic rebasing mechanism where ETH balances on Blast increase over time. Similarly, bridged stablecoins are deposited into MakerDAO&apos;s DAI Savings Rate and represented as USDB on the network.
      </p>
      <p>
        dApps on Blast can access and redirect the native yield programmatically. Smart contracts can configure how yield is distributed, enabling new DeFi primitives where applications can use native yield for rewards, fee subsidies, or protocol revenue. The gas revenue rebate program returns a portion of gas fees to dApp developers, providing an additional revenue stream for builders on the network.
      </p>

      <h2 id="tokenomics">BLAST Tokenomics</h2>
      <p>
        BLAST has a total supply of 100 billion tokens. The initial distribution was heavily focused on community allocation through the airdrop to users who participated in the points program by depositing assets and interacting with Blast dApps. The token is used for governance over protocol parameters, yield distribution mechanisms, and ecosystem incentives. Community members, core contributors, and investors received allocations with varying vesting schedules.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Blast enables native yield earning on idle crypto assets, DeFi applications that leverage auto-yield for innovative mechanics, yield-enhanced lending and borrowing markets, and gas rebates for dApp developers. The native yield creates unique opportunities for gaming applications (yield-generating in-game assets), social platforms (yield-funded rewards), and perpetual DEXs (Thruster, Hyperlock) that can offer better economics by incorporating native yield into their protocols.
      </p>

      <h2 id="how-to-buy">How to Buy BLAST</h2>
      <p>
        To buy BLAST, register on OKX, Bybit, or Gate.io. Complete identity verification, deposit funds, and purchase BLAST tokens. You can also bridge ETH to the Blast network using the official bridge and trade BLAST on native DEXs like Thruster. BLAST is an ERC-20 token compatible with MetaMask and other Ethereum wallets after adding the Blast network. Bridging to Blast also earns native yield on your deposited assets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Blast&apos;s native yield depends on external protocols (Lido and MakerDAO), introducing dependency risk. If either protocol experiences issues or yield rates decline, Blast&apos;s value proposition weakens. The pre-mainnet deposit phase was criticized for locking user funds in an EOA multisig before the bridge smart contracts were deployed, raising trust concerns. The aggressive points farming attracted mercenary capital that may leave after incentives end.
      </p>
      <p>
        The BLAST token airdrop distribution was controversial, with some users feeling the allocation was disproportionate to their contributions. The L2 market is extremely competitive, and Blast must retain users beyond the initial incentive phase. The sequencer is centralized, and the network&apos;s security model as an optimistic rollup relies on fraud proofs that are still being hardened. Regulatory risk exists around the yield-bearing nature of deposits potentially being classified as securities.
      </p>
    </LearnPageLayout>
  );
}
