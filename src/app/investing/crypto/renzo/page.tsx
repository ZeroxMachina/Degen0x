import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Renzo (REZ)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Renzo (REZ), the liquid restaking protocol for EigenLayer. Discover how it works, tokenomics, use cases, and how to buy REZ.",
};

export default function RenzoPage() {
  return (
    <LearnPageLayout
      title="What Is Renzo (REZ)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Renzo is a liquid restaking protocol that simplifies EigenLayer restaking by issuing ezETH, a liquid restaking token representing ETH restaked across multiple AVSs on EigenLayer. Renzo manages the complexity of operator selection, AVS allocation, and reward optimization, providing a streamlined restaking experience for both retail and institutional users."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-renzo", title: "What Is Renzo?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-renzo-work", title: "How Does Renzo Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "rez-tokenomics", title: "REZ Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-rez", title: "How to Buy REZ", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is Renzo?", answer: "Renzo is a liquid restaking protocol issuing ezETH for simplified EigenLayer restaking with managed AVS allocation and DeFi composability." },
        { question: "Where can I buy REZ?", answer: "REZ is available on Binance, OKX, KuCoin, and DEXs. ezETH is obtained by depositing ETH through Renzo." },
        { question: "Is Renzo a good investment?", answer: "Renzo has significant restaking TVL and strong exchange listings, but faces intense LRT competition. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Ethereum", href: "/investing/crypto/ethereum", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Renzo?</h2>
      <p>Renzo was founded by Lucas Kozinski and James Poole and quickly became one of the largest liquid restaking protocols by TVL. The protocol was designed to abstract the complexity of EigenLayer restaking, where users would otherwise need to select operators, choose AVSs, and manage restaking positions manually. Renzo handles all of this automatically, providing a simple deposit-and-earn interface.</p>
      <p>ezETH has been integrated across major DeFi protocols as collateral for lending, liquidity in DEX pools, and as a building block for yield strategies. Renzo supports deposits from multiple chains and liquid staking tokens, making it accessible to a broad user base. The protocol also offers institutional-grade features for larger depositors seeking managed restaking exposure.</p>

      <h2 id="how-it-works">How Does Renzo Work?</h2>
      <p>Users deposit ETH or liquid staking tokens into Renzo and receive ezETH. The protocol&apos;s Strategy Manager allocates the deposited assets across vetted EigenLayer operators and AVSs based on risk-reward optimization. As restaking rewards from AVSs accumulate, the ezETH exchange rate increases. The Renzo team actively monitors and rebalances allocations to maintain optimal risk-adjusted returns.</p>
      <p>The protocol supports cross-chain deposits and cross-chain ezETH through bridge integrations, allowing users on Layer 2s to participate without bridging to Ethereum mainnet first. Withdrawals are processed through the EigenLayer unstaking queue or can be done instantly through DEX secondary markets.</p>

      <h2 id="tokenomics">REZ Tokenomics</h2>
      <p>REZ has a total supply of 10 billion tokens. The token is used for governance over protocol parameters, operator and AVS selection, and fee structures. REZ was distributed through an airdrop to early ezETH depositors. A portion of restaking management fees may be directed to REZ stakers in future governance proposals.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>Renzo enables simplified EigenLayer restaking through ezETH, DeFi collateral with restaking yield, cross-chain restaking access from Layer 2s, managed AVS portfolio optimization, and institutional restaking services. The protocol serves as a gateway to the EigenLayer ecosystem for users seeking hands-off restaking exposure.</p>

      <h2 id="how-to-buy">How to Buy REZ</h2>
      <p>To buy REZ, create an account on Binance, OKX, or KuCoin. Complete identity verification and purchase REZ tokens. To obtain ezETH, deposit ETH through the Renzo platform. Store REZ and ezETH in MetaMask or a hardware wallet.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>The ezETH depeg event in April 2024, triggered by confusion around withdrawal mechanics, highlighted the fragility of LRT pegs. Compounded slashing risk from EigenLayer restaking adds to standard staking risks. Smart contract risk across Renzo, EigenLayer, and integrated protocols increases the attack surface. Competition from EtherFi, Kelp, Puffer, and Swell is intense.</p>
      <p>The large REZ token supply creates dilution concerns. AVS yield sustainability is unproven at scale. Regulatory treatment of restaking tokens and their governance tokens remains undefined. Cross-chain deployments introduce bridge risk for ezETH on Layer 2 networks.</p>
    </LearnPageLayout>
  );
}
