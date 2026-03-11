import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Market Maker? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what market makers are, how they provide liquidity, and their essential role in crypto markets.",
};

export default function MarketMakerPage() {
  return (
    <LearnPageLayout
      title="What Is a Market Maker?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A market maker is an entity that continuously places buy and sell orders on an exchange, providing liquidity and facilitating smooth trading. Market makers profit from the spread between their buy (bid) and sell (ask) prices. In crypto, they range from large institutional firms using sophisticated algorithms to DeFi liquidity providers depositing into automated market maker pools."
      toc={[
        { id: "definition", title: "What Is a Market Maker?", level: 2 },
        { id: "how-it-works", title: "How Market Making Works", level: 2 },
        { id: "types", title: "Types of Market Makers in Crypto", level: 2 },
        { id: "controversies", title: "Controversies", level: 2 },
        { id: "why-it-matters", title: "Why Market Makers Matter", level: 2 },
      ]}
      faqs={[
        {
          question: "How do market makers make money?",
          answer:
            "Market makers profit from the bid-ask spread — the difference between their buy and sell prices. If they buy at $99 and sell at $101, they earn $2 per round trip. They aim to complete many small trades while maintaining a neutral net position. Some also earn fees from exchanges and revenue from providing market-making services to token projects.",
        },
        {
          question: "Are market makers the same as liquidity providers in DeFi?",
          answer:
            "They serve similar functions but operate differently. Traditional market makers actively manage orders and positions. DeFi liquidity providers passively deposit tokens into automated pools. AMM pools algorithmically determine prices, while traditional market makers manually set their quotes. Both ultimately provide the liquidity that makes trading possible.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Liquidity?", href: "/learn/glossary/liquidity", category: "Glossary" },
        { title: "What Is an AMM?", href: "/learn/glossary/amm", category: "Glossary" },
        { title: "What Is a Centralized Exchange?", href: "/learn/glossary/centralized-exchange", category: "Glossary" },
        { title: "What Is Slippage?", href: "/learn/glossary/slippage", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Market Maker?</h2>
      <p>
        A market maker is a participant that provides liquidity to a market by simultaneously quoting bid (buy) and ask (sell) prices. They stand ready to trade at any time, ensuring that other participants can always find a counterparty. In traditional finance, designated market makers have formal obligations to maintain quotes. In crypto, market making is generally performed by specialized firms and DeFi protocols.
      </p>

      <h2 id="how-it-works">How Market Making Works</h2>
      <p>
        Market makers place limit orders on both sides of the order book. They might bid $99.50 to buy and offer $100.50 to sell, earning $1 on each completed round trip. They use algorithms to continuously adjust quotes based on market conditions, inventory levels, and risk parameters. The goal is to earn small profits on many trades while managing the risk of holding inventory during price movements.
      </p>

      <h2 id="types">Types of Market Makers in Crypto</h2>
      <p>
        Institutional firms like Wintermute, Jump Crypto, and GSR provide market making on centralized exchanges using high-frequency trading strategies. Token projects often hire these firms to ensure their tokens have adequate liquidity. In DeFi, automated market makers (Uniswap, Curve) replace human market makers with smart contracts and mathematical formulas, allowing anyone to provide liquidity.
      </p>

      <h2 id="controversies">Controversies</h2>
      <p>
        Market makers in crypto face criticism for potential conflicts of interest. Some have been accused of manipulating prices, front-running orders, or using their privileged position to trade against clients. The collapse of Alameda Research highlighted the risks when a market maker also operates as a proprietary trader and exchange affiliate. Transparency and regulation remain ongoing challenges.
      </p>

      <h2 id="why-it-matters">Why Market Makers Matter</h2>
      <p>
        Without market makers, crypto markets would be illiquid and volatile. Traders would face wide spreads and high slippage, making it impractical to trade most assets. Market makers narrow spreads, reduce volatility, and enable price discovery. They are an essential but often invisible infrastructure layer that makes liquid, functioning crypto markets possible.
      </p>
    </LearnPageLayout>
  );
}
