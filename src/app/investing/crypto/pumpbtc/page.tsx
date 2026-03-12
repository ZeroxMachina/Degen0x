import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is pumpBTC (pumpBTC)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about pumpBTC (pumpBTC), the liquid staking solution for Babylon BTC staking. Discover how it works, tokenomics, use cases, and how to buy pumpBTC.",
};

export default function PumpBtcPage() {
  return (
    <LearnPageLayout
      title="What Is pumpBTC (pumpBTC)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="pumpBTC is a liquid staking protocol for Babylon Bitcoin staking that lets users stake BTC and receive pumpBTC tokens representing their staked position. The protocol partners with institutional custodians to manage BTC staking on Babylon while issuing liquid tokens across multiple chains, enabling Bitcoin holders to earn Babylon staking yields while using their BTC in DeFi."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-pumpbtc", title: "What Is pumpBTC?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-pumpbtc-work", title: "How Does pumpBTC Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "pumpbtc-tokenomics", title: "pumpBTC Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-pumpbtc", title: "How to Buy pumpBTC", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is pumpBTC?", answer: "pumpBTC is a liquid staking protocol for Babylon that lets users stake BTC and receive pumpBTC liquid tokens for DeFi use while earning Bitcoin staking rewards." },
        { question: "Where can I get pumpBTC?", answer: "pumpBTC can be obtained by staking BTC through the pumpBTC platform, or purchased on supported DEXs across multiple chains." },
        { question: "Is pumpBTC a good investment?", answer: "pumpBTC provides liquid access to Babylon BTC staking yields, but carries custodial and protocol risks. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Bitcoin", href: "/investing/crypto/bitcoin", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is pumpBTC?</h2>
      <p>
        pumpBTC emerged as part of the Babylon ecosystem to address the demand for liquid Bitcoin staking. The protocol works with regulated custodians to manage the BTC staking process on Babylon, removing the technical complexity for users while issuing a tradeable liquid staking token. pumpBTC has deployed across multiple chains including Ethereum, BNB Chain, and various Layer 2s to maximize DeFi accessibility for staked BTC.
      </p>
      <p>
        The protocol positions itself as a user-friendly entry point into Bitcoin staking, handling the technical aspects of Babylon staking while providing a familiar liquid staking token experience similar to what Ethereum users know from stETH or rETH. The multi-chain deployment strategy ensures that pumpBTC can be used wherever DeFi opportunities exist.
      </p>

      <h2 id="how-it-works">How Does pumpBTC Work?</h2>
      <p>
        Users deposit BTC or wrapped BTC (WBTC, BTCB) into the pumpBTC protocol. The deposited Bitcoin is staked on Babylon through custodial partners who manage the staking operations. Users receive pumpBTC tokens on their preferred chain at a 1:1 ratio. As Babylon staking rewards accumulate, the value of pumpBTC tokens appreciates, reflecting the earned yield.
      </p>
      <p>
        The custodial approach simplifies the user experience but introduces trust assumptions around the custodian. pumpBTC tokens can be used across DeFi protocols for lending, trading, and liquidity provision. Redemption allows users to convert pumpBTC back to BTC, subject to Babylon&apos;s unstaking period. The protocol maintains reserves and supports instant liquidity through DEX pools.
      </p>

      <h2 id="tokenomics">pumpBTC Tokenomics</h2>
      <p>
        pumpBTC is a liquid staking token with elastic supply based on total BTC deposits. The exchange rate appreciates as Babylon staking rewards accrue. The protocol charges a small fee on staking yields to fund operations and development. There may be a separate governance token for protocol governance decisions. Token supply is directly tied to staked BTC volume.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        pumpBTC enables liquid Bitcoin staking with Babylon yield, multi-chain DeFi collateral using staked BTC, lending and borrowing with BTC staking exposure, yield stacking through DeFi strategies on top of staking rewards, and simplified access to the Babylon staking ecosystem. The token serves as a bridge between Bitcoin staking and the broader DeFi ecosystem.
      </p>

      <h2 id="how-to-buy">How to Buy pumpBTC</h2>
      <p>
        To get pumpBTC, stake BTC through the pumpBTC platform interface or purchase pumpBTC on supported DEXs. The protocol supports deposits from multiple chains. After acquiring pumpBTC, use it in DeFi protocols for additional yield opportunities. Store pumpBTC in MetaMask or compatible wallets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        The custodial model introduces counterparty risk with custodian partners. Any custodian failure or compromise would affect user funds. pumpBTC&apos;s value depends on Babylon staking functioning correctly and generating sufficient yields. The liquid staking BTC market is competitive with multiple protocols vying for deposits.
      </p>
      <p>
        Smart contract risk across the protocol&apos;s multi-chain deployments increases the attack surface. The pumpBTC/BTC peg could deviate during market stress. Regulatory classification of custodial liquid staking products may differ from non-custodial alternatives. Babylon slashing events would reduce the value of pumpBTC relative to BTC.
      </p>
    </LearnPageLayout>
  );
}
