import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Market Depth? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what market depth means, how to read depth charts, why depth matters for trading, and how to use market depth data in your trading decisions.",
};

export default function MarketDepthPage() {
  return (
    <LearnPageLayout title="What Is Market Depth?" categoryName="Learn Crypto" categorySlug="learn" readTime="4 min read"
      intro="Market depth is a measure of the volume of buy and sell orders at various price levels in an order book. It shows how much liquidity is available at each price point and indicates how much buying or selling pressure is needed to move the price. Deep markets can absorb large orders with minimal price impact, while shallow markets experience significant slippage from even moderate-sized trades."
      toc={[{ id: "definition", title: "What Is Market Depth?", level: 2 }, { id: "reading-depth-charts", title: "Reading Depth Charts", level: 2 }, { id: "depth-and-trading", title: "Why Depth Matters for Trading", level: 2 }, { id: "depth-limitations", title: "Limitations of Depth Data", level: 2 }]}
      faqs={[{ question: "What does a depth chart show?", answer: "A depth chart displays cumulative buy orders (green, left side) and sell orders (red, right side) plotted against price. The steeper the curve, the more orders are concentrated near the current price. A wide gap between curves indicates a wide spread. Large steps in the curve indicate significant orders (walls) at specific price levels." },
        { question: "Can market depth predict price movements?", answer: "Market depth provides clues but is not a reliable predictor. Large buy walls may suggest support, but they can be pulled (removed) instantly. Depth is most useful for understanding likely slippage on your trades and identifying potential areas of strong supply or demand. Combine depth analysis with volume and price action for better insights." }]}
      relatedArticles={[{ title: "Order Book", href: "/learn/glossary/order-book", category: "Glossary" }, { title: "Spread", href: "/learn/glossary/spread", category: "Glossary" }, { title: "Volume", href: "/learn/glossary/volume", category: "Glossary" }, { title: "Whale", href: "/learn/glossary/whale", category: "Glossary" }]}
    >
      <h2 id="definition">What Is Market Depth?</h2>
      <p>Market depth represents the total quantity of orders waiting to be executed at each price level in an order book. A market with deep order books has substantial volume at prices close to the current price, meaning large trades can execute with minimal price impact. Shallow markets have thin order books, where even modest trades significantly move the price. Market depth is crucial for institutional traders and anyone executing large orders.</p>

      <h2 id="reading-depth-charts">Reading Depth Charts</h2>
      <p>Depth charts visually represent the order book as two cumulative curves meeting at the current price. The green curve (buy side) shows total bid volume below the current price. The red curve (sell side) shows total ask volume above. Horizontal sections indicate price levels with heavy order concentration. A significantly larger buy side suggests strong demand, while a larger sell side suggests potential selling pressure. However, orders can be added or removed instantly, so depth charts represent a snapshot rather than a guarantee.</p>

      <h2 id="depth-and-trading">Why Depth Matters for Trading</h2>
      <p>For traders, market depth determines the cost of executing trades. If you want to buy $100,000 of a token but only $20,000 exists within 1% of the current price, your order will push the price up significantly (high slippage). Deep markets allow large orders to execute near the quoted price. Before placing trades, check the depth to estimate potential slippage and consider splitting large orders across time or multiple venues.</p>

      <h2 id="depth-limitations">Limitations of Depth Data</h2>
      <p>Order book depth can be misleading. Spoof orders create false impressions of support or resistance and can be canceled instantly. Iceberg orders hide their true size, making the visible depth appear shallower than it actually is. Hidden liquidity from market makers may fill orders at prices not shown on the book. On DEXs, liquidity pool depth provides a more reliable view since pooled liquidity cannot be instantly withdrawn like order book orders.</p>
    </LearnPageLayout>
  );
}
