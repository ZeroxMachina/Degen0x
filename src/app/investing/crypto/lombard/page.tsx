import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Lombard (LBTC)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Lombard (LBTC), the liquid Bitcoin staking protocol. Discover how it works, tokenomics, use cases, and how to buy LBTC.",
};

export default function LombardPage() {
  return (
    <LearnPageLayout
      title="What Is Lombard (LBTC)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Lombard is a liquid Bitcoin staking protocol that allows users to stake BTC through Babylon and receive LBTC, a liquid staking token representing their staked Bitcoin position. LBTC enables Bitcoin holders to earn Babylon staking yield while maintaining DeFi composability, using their staked BTC as collateral across Ethereum, Layer 2s, and other DeFi ecosystems."
      toc={[
        { id: "what-is", title: "What Is Lombard?", level: 2 },
        { id: "how-it-works", title: "How Does Lombard Work?", level: 2 },
        { id: "tokenomics", title: "LBTC Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy LBTC", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Lombard?", answer: "Lombard is a liquid Bitcoin staking protocol that stakes BTC through Babylon and issues LBTC, a liquid staking token usable across DeFi while earning Bitcoin staking yields." },
        { question: "Where can I get LBTC?", answer: "LBTC can be obtained by staking BTC through the Lombard platform, or by purchasing on DEXs like Curve and Uniswap." },
        { question: "Is Lombard a good investment?", answer: "Lombard provides liquid BTC staking exposure, but depends on Babylon's success and BTC staking demand. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Bitcoin", href: "/investing/crypto/bitcoin", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Lombard?</h2>
      <p>
        Lombard was developed to solve the liquidity problem in Babylon&apos;s Bitcoin staking. When users stake BTC through Babylon, their Bitcoin is locked in timelocked UTXOs and cannot be used in DeFi. Lombard addresses this by issuing LBTC, an ERC-20 liquid staking token that represents a claim on Babylon-staked BTC plus accumulated staking rewards. This allows Bitcoin holders to earn staking yield and participate in DeFi simultaneously.
      </p>
      <p>
        The protocol has quickly accumulated significant TVL, becoming one of the leading liquid BTC staking solutions. LBTC is designed to be cross-chain, with deployments on Ethereum, multiple Layer 2s, and other chains. The Lombard Security Consortium, comprising reputable industry participants, manages the BTC staking operations and LBTC minting through a distributed key management system.
      </p>

      <h2 id="how-it-works">How Does Lombard Work?</h2>
      <p>
        Users deposit BTC through the Lombard interface, and the protocol stakes this BTC on Babylon through the Security Consortium. Users receive LBTC tokens on their chosen destination chain (Ethereum, Arbitrum, etc.) at a 1:1 ratio with deposited BTC. As Babylon staking rewards accrue, the value backing each LBTC increases, making it a reward-bearing asset that appreciates against BTC over time.
      </p>
      <p>
        The Security Consortium uses threshold signature schemes to manage BTC staking operations, with no single member able to unilaterally move funds. LBTC can be used as collateral in lending protocols, traded on DEXs, deposited into yield strategies, or redeemed for the underlying BTC. The cross-chain deployment allows LBTC to be used across multiple DeFi ecosystems simultaneously.
      </p>

      <h2 id="tokenomics">LBTC Tokenomics</h2>
      <p>
        LBTC is a liquid staking token with elastic supply tied to staked BTC deposits. It does not have a fixed supply but grows as more BTC is staked through Lombard. The exchange rate between LBTC and BTC increases over time as staking rewards accumulate. Lombard charges a fee on staking rewards to sustain protocol operations and development. Governance over the Lombard protocol is managed through a separate governance mechanism.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        LBTC serves as a yield-bearing Bitcoin position in DeFi, collateral for lending and borrowing across Ethereum and L2s, liquidity provision in BTC-denominated pools, restaking collateral for additional yield layers, and a bridge between Bitcoin staking yields and EVM DeFi opportunities. LBTC enables Bitcoin holders to access the full DeFi ecosystem without sacrificing staking rewards.
      </p>

      <h2 id="how-to-buy">How to Buy LBTC</h2>
      <p>
        To get LBTC, stake BTC through the Lombard platform or purchase LBTC on DEXs like Curve or Uniswap. After acquiring LBTC, use it in DeFi protocols across Ethereum and Layer 2s for additional yield. Store LBTC in MetaMask or a Ledger hardware wallet as an ERC-20 token.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        LBTC&apos;s value depends on Babylon&apos;s staking system functioning correctly. Any Babylon protocol issues or slashing events would directly affect LBTC holders. The Security Consortium introduces trust assumptions, as members collectively control the staked BTC. Smart contract risk affects both the Lombard contracts and the underlying Babylon protocol.
      </p>
      <p>
        LBTC&apos;s peg to BTC could deviate on secondary markets during high volatility or liquidity stress. Competition from other liquid BTC staking solutions (pumpBTC, Solv) fragments the market. The BTC staking yield from Babylon must be attractive enough to justify the additional smart contract risk. Regulatory classification of liquid staking BTC derivatives is uncertain.
      </p>
    </LearnPageLayout>
  );
}
