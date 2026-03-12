import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Use Uniswap (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Step-by-step guide to using Uniswap DEX for token swaps, providing liquidity, and understanding fees, slippage, and best practices.",
  keywords: ["Uniswap", "how to use Uniswap", "Uniswap tutorial", "token swap", "DEX trading", "Uniswap guide"],
};

export default function HowToUseUniswapPage() {
  return (
    <LearnPageLayout title="How to Use Uniswap" categoryName="Crypto Education" categorySlug="learn" readTime="7 min" intro="Uniswap is the largest decentralized exchange by volume, enabling permissionless token swaps through automated market maker (AMM) technology. Available on Ethereum and multiple Layer 2 networks, Uniswap allows you to trade tokens directly from your wallet without creating an account or trusting a centralized intermediary."
      toc={[
        { id: "getting-started", title: "getting-started", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 },
        { id: "swapping", title: "swapping", level: 2 },
        { id: "swapping-tokens", title: "Swapping Tokens", level: 2 },
        { id: "liquidity", title: "liquidity", level: 2 },
        { id: "providing-liquidity", title: "Providing Liquidity", level: 2 },
        { id: "fees-slippage", title: "fees-slippage", level: 2 },
        { id: "fees-slippage", title: "Fees & Slippage", level: 2 },
        { id: "tips", title: "tips", level: 2 },
        { id: "tips-best-practices", title: "Tips & Best Practices", level: 2 }
      ]}
      faqs={[
        { question: "What is slippage on Uniswap?", answer: "Slippage is the difference between the expected price and the execution price of a trade. It occurs because AMM prices change with each trade. Uniswap allows you to set a maximum slippage tolerance — if the price moves beyond this tolerance before your trade executes, the transaction will revert to protect you." },
        { question: "Which network should I use for Uniswap?", answer: "Uniswap is available on Ethereum mainnet, Arbitrum, Polygon, Optimism, Base, and other networks. Layer 2 networks offer significantly lower gas fees. For smaller trades, L2 networks are more cost-effective. For large trades, Ethereum mainnet may offer better liquidity and tighter spreads." },
        { question: "Is Uniswap safe?", answer: "Uniswap's smart contracts have been extensively audited and have secured billions in value. However, risks include trading scam tokens (always verify token contract addresses), impermanent loss from providing liquidity, and high gas fees on Ethereum mainnet. Use the official app.uniswap.org domain." },
      ]}
      relatedArticles={[
        { title: "How to Use MetaMask", href: "/learn/how-to-use-metamask", category: "Learn" },
        { title: "What Is a DEX?", href: "/learn/what-is-a-dex", category: "Learn" },
        { title: "What Is Impermanent Loss?", href: "/learn/what-is-impermanent-loss", category: "Learn" },
        { title: "How to Provide Liquidity", href: "/learn/how-to-provide-liquidity", category: "Learn" },
      ]}
    >
      <section id="getting-started"><h2>Getting Started</h2><p>Navigate to app.uniswap.org (always verify the URL) and connect your wallet by clicking "Connect Wallet" and selecting MetaMask or your preferred wallet. Ensure you have ETH (or the native token of your chosen network) for gas fees. Select the network you want to trade on using the network selector — Layer 2 networks like Arbitrum and Base offer much lower fees than Ethereum mainnet.</p><p>The Uniswap interface shows a simple swap module where you select the tokens you want to trade. If a token does not appear in the default list, you can paste its contract address to find it. Always verify token contract addresses from official project sources — scam tokens with identical names are common. Uniswap will show you the exchange rate, estimated gas fee, and price impact before you confirm any trade.</p></section>
      <section id="swapping"><h2>Swapping Tokens</h2><p>To swap tokens: select the input token (what you are selling) and output token (what you are buying), enter the amount, review the quote including price impact and minimum received amount, adjust slippage tolerance if needed (0.5% is the default, higher for volatile tokens), and click "Swap." Your wallet will prompt you to confirm the transaction, showing the gas fee and transaction details.</p><p>For your first swap of a given token, you may need to approve the token for spending — this is a one-time transaction per token that allows Uniswap's router contract to access that specific token. After approval, execute the swap. The transaction typically confirms within seconds on Layer 2 networks or within a few minutes on Ethereum mainnet, depending on gas price and network congestion.</p></section>
      <section id="liquidity"><h2>Providing Liquidity</h2><p>Uniswap V3 uses concentrated liquidity, where you choose a price range for your liquidity position. Navigate to the "Pool" tab, click "New Position," select a token pair and fee tier, then set your price range. Narrower ranges earn higher fees when the price stays within your range but require more active management. Wider ranges provide more consistent but lower returns.</p><p>Providing liquidity earns you a share of trading fees proportional to your share of liquidity in the active price range. However, be aware of impermanent loss — the risk that your position's value may decrease compared to simply holding the tokens, particularly during large price movements. Concentrated liquidity amplifies both the fee earnings and impermanent loss compared to traditional AMM designs.</p></section>
      <section id="fees-slippage"><h2>Fees & Slippage</h2><p>Uniswap charges swap fees that go to liquidity providers. Fee tiers vary by pool: 0.01% for stablecoin pairs, 0.05% for correlated pairs, 0.3% for standard pairs, and 1% for exotic pairs. Additionally, you pay network gas fees for each transaction. On Ethereum mainnet, gas fees can be significant for smaller trades, making Layer 2 networks more economical.</p><p>Price impact measures how much your trade moves the market price — larger trades relative to pool liquidity have higher price impact. High price impact indicates poor liquidity and unfavorable execution. For large trades, consider splitting into multiple smaller transactions or using limit orders. Uniswap will warn you if price impact exceeds 3%, indicating a potentially unfavorable trade.</p></section>
      <section id="tips"><h2>Tips & Best Practices</h2><p>Always verify token contract addresses before trading — use official project websites, CoinGecko, or CoinMarketCap to find verified addresses. Set appropriate slippage tolerance: too low may cause transactions to fail, too high may result in poor execution or front-running. For stablecoin swaps, 0.1% slippage is usually sufficient. For volatile tokens, 1-3% may be needed.</p><p>Monitor gas prices and trade during periods of lower network activity for reduced fees on Ethereum mainnet. Bookmark app.uniswap.org and always access it through the bookmark rather than search results to avoid phishing sites. Review transaction details in your wallet before confirming. Consider using the Uniswap mobile app for on-the-go trading with built-in security features.</p></section>
    </LearnPageLayout>
  );
}
