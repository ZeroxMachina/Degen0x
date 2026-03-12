import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Puffer Finance (PUFFER)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Puffer Finance (PUFFER), the liquid restaking protocol with anti-slashing technology. Discover how it works, tokenomics, use cases, and how to buy PUFFER.",
};

export default function PufferPage() {
  return (
    <LearnPageLayout
      title="What Is Puffer Finance (PUFFER)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Puffer Finance is a liquid restaking protocol on Ethereum that combines native liquid staking with EigenLayer restaking through its pufETH token. Featuring proprietary anti-slashing technology called Secure-Signer, Puffer aims to lower the barrier for solo validators while providing a liquid restaking token that earns both Ethereum staking and EigenLayer restaking rewards."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-puffer-finance", title: "What Is Puffer Finance?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-puffer-finance-work", title: "How Does Puffer Finance Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "puffer-tokenomics", title: "PUFFER Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-puffer", title: "How to Buy PUFFER", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is Puffer Finance?", answer: "Puffer Finance is a liquid restaking protocol issuing pufETH, combining Ethereum staking with EigenLayer restaking yields and anti-slashing technology for enhanced validator security." },
        { question: "Where can I buy PUFFER?", answer: "PUFFER is available on Binance, Gate.io, and DEXs. pufETH can be obtained by depositing ETH through the Puffer platform." },
        { question: "Is Puffer Finance a good investment?", answer: "Puffer has innovative anti-slashing tech and restaking integration, but the LRT market is crowded. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Ethereum", href: "/investing/crypto/ethereum", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Puffer Finance?</h2>
      <p>
        Puffer Finance was born from Ethereum Foundation-funded research into reducing slashing risk for validators. The protocol&apos;s Secure-Signer technology runs validator signing keys inside a Trusted Execution Environment (TEE), preventing double-signing and other slashable offenses at the hardware level. This breakthrough allows Puffer to accept as little as 1 ETH from node operators (compared to 32 ETH for standard validators), dramatically lowering solo staking barriers.
      </p>
      <p>
        The protocol issues pufETH, a liquid restaking token that earns both Ethereum consensus rewards and EigenLayer restaking yields. Puffer has also developed UniFi, a based rollup infrastructure that uses Puffer validators for transaction sequencing, creating an additional value stream for the protocol. The combination of staking, restaking, and based rollup sequencing makes Puffer a vertically integrated Ethereum infrastructure provider.
      </p>

      <h2 id="how-it-works">How Does Puffer Finance Work?</h2>
      <p>
        Stakers deposit ETH and receive pufETH, which represents a share of the protocol&apos;s staked and restaked ETH. Node operators provide a small bond (starting from 1 ETH) and run validators using Puffer&apos;s Secure-Signer, which prevents slashable offenses. The staked ETH is natively restaked on EigenLayer to earn additional rewards from securing AVSs, with pufETH reflecting both staking and restaking yields.
      </p>
      <p>
        The UniFi based rollup allows Puffer validators to also sequence transactions for L2 rollups, earning sequencing fees in addition to staking and restaking rewards. This multi-layered value capture means pufETH holders benefit from three revenue streams: Ethereum staking rewards, EigenLayer restaking yields, and rollup sequencing fees.
      </p>

      <h2 id="tokenomics">PUFFER Tokenomics</h2>
      <p>
        PUFFER is the governance token with a total supply of 1 billion tokens. The token is used for governance over protocol parameters, AVS selection, and fee structures. PUFFER holders can vote on which EigenLayer AVSs to restake with and how protocol revenue is allocated. pufETH is the separate liquid restaking token that appreciates as yields accrue.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Puffer enables liquid restaking with combined staking and EigenLayer yields, low-barrier solo validation with 1 ETH bonds, anti-slashing protection through Secure-Signer TEE technology, based rollup sequencing through UniFi, and DeFi composability with pufETH across Ethereum and L2s. The protocol addresses multiple Ethereum infrastructure needs in an integrated platform.
      </p>

      <h2 id="how-to-buy">How to Buy PUFFER</h2>
      <p>
        To buy PUFFER, create an account on Binance or Gate.io. Complete identity verification and purchase PUFFER tokens. To obtain pufETH, deposit ETH through the Puffer Finance platform. Store PUFFER and pufETH in MetaMask or a Ledger wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Restaking carries compounded slashing risk across Ethereum staking and EigenLayer. While Secure-Signer mitigates validator slashing, it introduces dependency on TEE hardware security. The liquid restaking token market is extremely competitive with EtherFi, Kelp, Renzo, and Swell all competing for deposits. Smart contract risk spans Puffer&apos;s own contracts and EigenLayer.
      </p>
      <p>
        The pufETH/ETH peg could deviate during market stress. UniFi based rollup adoption is still early. Token unlock schedules create selling pressure. Regulatory classification of restaking products remains uncertain. The complexity of combining staking, restaking, and rollup sequencing increases the overall system&apos;s attack surface.
      </p>
    </LearnPageLayout>
  );
}
