import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Rai Reflex Index (RAI)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Rai Reflex Index (RAI), the non-pegged stable asset backed only by ETH. Discover RAI mechanics, its unique design, and how to buy.",
};

export default function RaiPage() {
  return (
    <LearnPageLayout
      title="What Is Rai Reflex Index (RAI)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Rai Reflex Index (RAI) is a non-pegged stable asset backed entirely by ETH. Unlike traditional stablecoins pegged to the US dollar, RAI uses an algorithmic controller to maintain a floating stable price without relying on fiat reserves or dollar pegs. Created by Reflexer Labs, RAI represents a purely crypto-native approach to stability."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-rai-reflex-index", title: "What Is Rai Reflex Index?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-rai-reflex-index-work", title: "How Does Rai Reflex Index Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "rai-tokenomics", title: "RAI Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-rai", title: "How to Buy RAI", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is Rai Reflex Index?", answer: "RAI is a non-dollar-pegged stable asset backed only by ETH. It uses a PID controller algorithm to maintain a floating stable price, typically around $3, without relying on any fiat reserves or dollar peg." },
        { question: "Where can I buy RAI?", answer: "RAI can be purchased on Uniswap and other Ethereum DEXs. It can also be minted by depositing ETH as collateral through the Reflexer app." },
        { question: "Is Rai Reflex Index a good investment?", answer: "RAI is designed for stability, not appreciation. It serves as a crypto-native stable asset for users who want to avoid fiat-pegged stablecoins. Its niche usage and small market cap make it less liquid than major stablecoins." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is Rai Reflex Index?</h2><p>RAI is an Ethereum-based stable asset with a unique design: it is not pegged to any fiat currency. Instead of targeting a $1 price, RAI uses a reflexive controller mechanism to dampen volatility and maintain a slowly moving stable value. The system is entirely ETH-collateralized, making it one of the most decentralized and censorship-resistant stable assets available. RAI was praised by Ethereum co-founder Vitalik Buterin as an example of ideal money design for a decentralized ecosystem.</p><p>Reflexer Labs launched RAI as a minimalist approach to stability that avoids the regulatory and centralization risks associated with fiat-pegged stablecoins. The protocol's smart contracts have been made immutable, meaning no entity can modify, upgrade, or censor the system after its governance-minimized final deployment.</p></section>
      <section id="how-it-works"><h2>How Does Rai Reflex Index Work?</h2><p>RAI uses a PID (proportional-integral-derivative) controller, similar to those used in industrial control systems, to adjust the redemption price of RAI based on market conditions. When RAI trades above its target, the redemption rate decreases to discourage holding and encourage selling. When it trades below target, the rate increases to incentivize accumulation. This creates a self-stabilizing feedback loop without any external peg or oracle to fiat currencies.</p><p>Users generate RAI by depositing ETH as collateral into the Reflexer protocol, similar to MakerDAO's Vault system. The minimum collateralization ratio ensures overcollateralization, and automatic liquidations protect the system's solvency.</p></section>
      <section id="tokenomics"><h2>RAI Tokenomics</h2><p>RAI has a variable supply that expands when users open collateral positions and contracts when they repay. There is no maximum supply cap. The redemption price floats based on the controller algorithm, typically settling around $3 but not targeting any specific dollar amount. The system's key metric is stability rather than peg accuracy. FLX is the governance token of the Reflexer protocol, separate from RAI itself.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>RAI serves users who want a stable crypto asset without reliance on fiat currencies or centralized issuers. It is used in DeFi as collateral, a stable trading pair, and a store of value by crypto-native participants who prioritize decentralization. RAI's immutable, governance-minimized design makes it suitable for protocols seeking a censorship-resistant stable asset that cannot be frozen or blacklisted.</p></section>
      <section id="how-to-buy"><h2>How to Buy RAI</h2><p>RAI can be purchased on Uniswap and other Ethereum DEXs. It can also be minted by depositing ETH through the Reflexer app at app.reflexer.finance. Due to its niche nature and smaller market cap, liquidity may be limited compared to major stablecoins. Store in any Ethereum wallet including MetaMask or Ledger.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>RAI has a significantly smaller market cap and lower liquidity than major stablecoins, which can result in higher slippage on trades. The non-pegged design means RAI's value fluctuates, which may be unfamiliar to users accustomed to dollar-pegged stablecoins. Sole dependence on ETH as collateral means extreme ETH price drops could stress the system. The immutable smart contracts mean any bugs cannot be patched. Limited DeFi integrations compared to DAI, USDC, or USDT reduce its utility as a general-purpose stable asset.</p></section>
    </LearnPageLayout>
  );
}
