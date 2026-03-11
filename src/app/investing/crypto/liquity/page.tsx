import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Liquity (LQTY)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Liquity (LQTY), the governance-free lending protocol with interest-free borrowing. Discover LQTY tokenomics, LUSD stablecoin, and how to buy.",
};

export default function LiquityPage() {
  return (
    <LearnPageLayout
      title="What Is Liquity (LQTY)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Liquity (LQTY) is the utility and reward token of the Liquity protocol, a decentralized borrowing platform that allows users to draw interest-free loans against ETH collateral. The protocol issues LUSD, a fully decentralized stablecoin, and operates with immutable smart contracts and no governance, making it one of the most censorship-resistant lending platforms in DeFi."
      toc={[
        { id: "what-is", title: "What Is Liquity?", level: 2 },
        { id: "how-it-works", title: "How Does Liquity Work?", level: 2 },
        { id: "tokenomics", title: "LQTY Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy LQTY", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Liquity?", answer: "Liquity is a decentralized borrowing protocol with immutable smart contracts and no governance. Users deposit ETH to borrow LUSD (an interest-free stablecoin). LQTY is the reward token earned by stakers and liquidity providers." },
        { question: "Where can I buy LQTY?", answer: "LQTY is available on Coinbase, Binance, KuCoin, and other exchanges. It can also be purchased on Uniswap." },
        { question: "Is Liquity a good investment?", answer: "LQTY captures revenue from borrowing fees and LUSD redemptions. The protocol's immutable, governance-free design provides strong decentralization but limits adaptability. Liquity V2 expands the protocol's capabilities." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is Liquity?</h2><p>Liquity is an immutable, governance-free lending protocol on Ethereum that enables users to borrow LUSD (a USD-pegged stablecoin) against ETH collateral at no ongoing interest rate. Instead of charging interest, Liquity charges a one-time borrowing fee. The protocol was designed to be maximally decentralized: its smart contracts cannot be upgraded, have no admin keys, and operate autonomously without any governance mechanism.</p><p>LUSD maintains its peg through hard redemption mechanisms that allow anyone to redeem LUSD for ETH at face value, creating a price floor. The Stability Pool, where users deposit LUSD to absorb liquidations and earn ETH discounts, serves as the protocol's primary liquidation mechanism. Liquity V2 expands the protocol's capabilities with multi-collateral support and user-set interest rates.</p></section>
      <section id="how-it-works"><h2>How Does Liquity Work?</h2><p>Users deposit ETH into Troves (individual loan positions) and borrow LUSD at a minimum collateral ratio of 110%, one of the lowest in DeFi. A one-time issuance fee is charged upon borrowing, after which no ongoing interest accrues. If a Trove's collateral ratio falls below 110%, it is liquidated against the Stability Pool. Stability Pool depositors absorb the LUSD debt and receive the ETH collateral at a discount, typically profiting from the liquidation spread.</p><p>LQTY is distributed to Stability Pool depositors and frontend operators who build interfaces for the protocol. LQTY can be staked to earn a share of borrowing and redemption fees paid in ETH and LUSD. This fee-sharing mechanism provides real yield to LQTY stakers backed by actual protocol usage.</p></section>
      <section id="tokenomics"><h2>LQTY Tokenomics</h2><p>LQTY has a maximum supply of 100 million tokens. Distribution includes community issuance through Stability Pool rewards, team and investor allocations, and ecosystem reserves. LQTY emissions to the Stability Pool decrease over time following a predetermined schedule. Staked LQTY earns a share of all borrowing fees (in LUSD) and redemption fees (in ETH), providing protocol-revenue-backed yield.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>LQTY is used for staking to earn protocol fee revenue and as a reward token for Stability Pool participation. The Liquity protocol enables interest-free ETH-backed borrowing, LUSD stablecoin usage across DeFi, and yield generation through the Stability Pool. The protocol's immutability and governance-free design make it attractive to users who value censorship resistance and predictable protocol behavior.</p></section>
      <section id="how-to-buy"><h2>How to Buy LQTY</h2><p>LQTY is available on Coinbase, Binance, KuCoin, and other centralized exchanges. It can also be purchased on Uniswap on Ethereum. After buying, staking LQTY on the Liquity platform to earn borrowing and redemption fee revenue is the primary use case. Store in MetaMask, Ledger, or any Ethereum-compatible wallet.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>Liquity's immutability means any smart contract bugs or design limitations cannot be addressed through upgrades. The 110% minimum collateral ratio creates higher liquidation risk compared to protocols with higher requirements. LUSD adoption has been limited compared to DAI and USDC, which constrains protocol usage and fee generation. The governance-free model, while maximizing decentralization, limits the protocol's ability to adapt to changing market conditions. ETH-only collateral limits the protocol's addressable market.</p></section>
    </LearnPageLayout>
  );
}
