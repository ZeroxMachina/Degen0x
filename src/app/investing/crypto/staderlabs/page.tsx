import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Stader Labs (SD)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about Stader Labs (SD), the multi-chain liquid staking protocol. Discover how it works, tokenomics, use cases, and how to buy SD.",
};

export default function StaderLabsPage() {
  return (
    <LearnPageLayout
      title="What Is Stader Labs (SD)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Stader Labs is a multi-chain liquid staking platform that provides staking infrastructure across Ethereum, Polygon, BNB Chain, Hedera, and other proof-of-stake networks. Through its ETHx liquid staking token on Ethereum and staking solutions on other chains, Stader offers permissionless staking with diversified validator sets and competitive yields."
      toc={[
        { id: "what-is", title: "What Is Stader Labs?", level: 2 },
        { id: "how-it-works", title: "How Does Stader Labs Work?", level: 2 },
        { id: "tokenomics", title: "SD Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy SD", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Stader Labs?", answer: "Stader Labs is a multi-chain liquid staking platform offering ETHx on Ethereum and staking solutions across Polygon, BNB Chain, Hedera, and other PoS networks with permissionless validator participation." },
        { question: "Where can I buy SD?", answer: "SD is available on Binance, Coinbase, OKX, and KuCoin. It trades against USDT, USD, and ETH pairs." },
        { question: "Is Stader Labs a good investment?", answer: "Stader has multi-chain presence and the Kelp DAO restaking spinoff, but competes with Lido's dominant position. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Ethereum", href: "/investing/crypto/ethereum", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Stader Labs?</h2>
      <p>Stader Labs was founded by Amitej Gajjala and Sidhartha Doddipalli and has been building staking infrastructure since 2021. The protocol distinguishes itself through its multi-chain approach, offering liquid staking solutions across more PoS networks than most competitors. On Ethereum, Stader&apos;s ETHx token features a permissionless node operator onboarding process, allowing anyone to run a validator with a reduced bond requirement.</p>
      <p>Stader also spun off Kelp DAO for liquid restaking (rsETH), creating a complementary product that extends Stader&apos;s staking infrastructure into the EigenLayer restaking ecosystem. The combination of Stader&apos;s multi-chain staking and Kelp&apos;s restaking products positions the team across multiple staking verticals.</p>

      <h2 id="how-it-works">How Does Stader Labs Work?</h2>
      <p>On Ethereum, users deposit ETH and receive ETHx, a reward-bearing liquid staking token. The protocol operates a permissionless validator pool where node operators can join by providing a bond of 4 ETH plus SD tokens. This approach promotes decentralization by lowering the capital barrier for validators while maintaining security through the SD bond requirement.</p>
      <p>On other chains, Stader provides native staking solutions tailored to each network&apos;s specific architecture. Validator selection, reward distribution, and pool management are handled through smart contracts on each supported chain. The SD token serves as a cross-chain governance and utility token across all Stader deployments.</p>

      <h2 id="tokenomics">SD Tokenomics</h2>
      <p>SD has a total supply of 150 million tokens. The token is used for governance across all Stader products, node operator bonds on Ethereum, liquidity incentives, and potential fee revenue sharing. Node operators must stake SD alongside their ETH bond, creating demand tied to validator count. A portion of staking commissions across all chains contributes to the Stader DAO treasury.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>Stader enables multi-chain liquid staking across Ethereum and other PoS networks, permissionless validator operation with reduced bond requirements, ETHx as DeFi collateral with staking yield, SD token staking for governance and node operation, and institutional-grade staking infrastructure for enterprises seeking multi-chain staking solutions.</p>

      <h2 id="how-to-buy">How to Buy SD</h2>
      <p>To buy SD, create an account on Binance, Coinbase, or OKX. Complete identity verification and purchase SD tokens. To obtain ETHx, deposit ETH through the Stader platform. Store SD in MetaMask or a Ledger wallet.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>Lido dominates Ethereum liquid staking with significantly more TVL and integrations than Stader. Multi-chain expansion spreads development resources and may limit depth on any single chain. The SD bond requirement for validators creates token dependency that could deter participation if SD price is volatile. Smart contract risk applies across all chain deployments. Regulatory classification of liquid staking tokens remains uncertain.</p>
    </LearnPageLayout>
  );
}
