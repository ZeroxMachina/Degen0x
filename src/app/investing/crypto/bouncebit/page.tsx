import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is BounceBit (BB)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about BounceBit (BB), the BTC restaking and CeDeFi chain. Discover how it works, tokenomics, use cases, and how to buy BB.",
};

export default function BounceBitPage() {
  return (
    <LearnPageLayout
      title="What Is BounceBit (BB)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="BounceBit is a BTC restaking chain that combines centralized finance (CeFi) and decentralized finance (DeFi) into a CeDeFi framework. The platform allows Bitcoin holders to earn yield through a dual-token staking mechanism and institutional-grade custody solutions, bridging the gap between traditional Bitcoin custody and on-chain DeFi opportunities."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-bouncebit", title: "What Is BounceBit?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-bouncebit-work", title: "How Does BounceBit Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "bb-tokenomics", title: "BB Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-bb", title: "How to Buy BB", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is BounceBit?", answer: "BounceBit is a BTC restaking and CeDeFi chain that lets Bitcoin holders earn yield through dual-token staking, institutional custody, and on-chain DeFi strategies." },
        { question: "Where can I buy BB?", answer: "BB is available on Binance, Gate.io, and other exchanges. It trades against USDT and BTC pairs." },
        { question: "Is BounceBit a good investment?", answer: "BounceBit offers unique BTC yield opportunities through CeDeFi, but the model involves centralized custody components. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Bitcoin", href: "/investing/crypto/bitcoin", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is BounceBit?</h2>
      <p>
        BounceBit was launched with Binance Labs backing and introduced the CeDeFi concept, where BTC is custodied through regulated, institutional-grade custodians while simultaneously being used to generate on-chain yield. The platform recognizes that most Bitcoin holders are cautious about fully decentralized DeFi and offers a middle ground with the security assurances of institutional custody combined with DeFi yield opportunities.
      </p>
      <p>
        The BounceBit chain operates as a proof-of-stake blockchain with a dual-token staking model that accepts both BTC and BB tokens as validator stake. This creates a unique security model where Bitcoin&apos;s economic weight contributes to chain security. Users who deposit BTC receive bounceBTC (BBTC), a liquid custody receipt that can be used in DeFi protocols on the BounceBit chain and other networks.
      </p>

      <h2 id="how-it-works">How Does BounceBit Work?</h2>
      <p>
        Users deposit BTC into BounceBit through regulated custodians (like Ceffu, Binance&apos;s custody arm) and receive BBTC tokens. These BBTC tokens can be staked to validators to earn staking rewards, used as collateral in DeFi protocols, or deposited into CeDeFi vaults that run yield strategies using the custodied BTC. The dual-token PoS consensus requires validators to stake both BTC and BB.
      </p>
      <p>
        CeDeFi vaults implement strategies like funding rate arbitrage and basis trading using the custodied Bitcoin, generating real yield from market activities. The Shared Security Client (SSC) framework allows other protocols to use BounceBit&apos;s staked BTC for additional security. Smart contracts on the BounceBit chain are EVM-compatible, supporting standard DeFi applications.
      </p>

      <h2 id="tokenomics">BB Tokenomics</h2>
      <p>
        BB has a total supply of approximately 2.1 billion tokens. The token is used alongside BTC for dual-token staking, governance over protocol parameters, gas fees on the BounceBit chain, and ecosystem incentives. Validators must stake BB in addition to BTC, creating sustained demand for the token. Staking rewards come from chain inflation and CeDeFi vault fees distributed to participants.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        BounceBit enables BTC yield generation through CeDeFi vaults, institutional-grade BTC custody with DeFi composability, dual-token staking for chain security, EVM-compatible DeFi using BTC as primary collateral, and shared security for external protocols through restaked BTC. The platform targets Bitcoin holders who want yield without the perceived risks of fully decentralized DeFi custody.
      </p>

      <h2 id="how-to-buy">How to Buy BB</h2>
      <p>
        To buy BB, create an account on Binance or Gate.io. Complete identity verification, deposit funds, and purchase BB tokens. After purchasing, stake BB alongside BTC for dual-token staking rewards, or participate in BounceBit DeFi. Store BB in MetaMask with the BounceBit network configured.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        The CeDeFi model introduces centralized custody risk, as users must trust institutional custodians with their BTC. Custodian failure or compromise could result in loss of deposited Bitcoin. CeDeFi vault strategies involve market risk, and funding rate arbitrage profits can decline in certain market conditions. The reliance on Binance ecosystem partnerships creates concentration risk.
      </p>
      <p>
        Competition from pure DeFi BTC yield solutions (Babylon, Lombard) and centralized yield products challenges BounceBit&apos;s positioning. The dual-token model adds complexity and may confuse users. Regulatory treatment of CeDeFi products is uncertain. Token unlock schedules create selling pressure. The ecosystem is still early with limited DeFi depth compared to established chains.
      </p>
    </LearnPageLayout>
  );
}
