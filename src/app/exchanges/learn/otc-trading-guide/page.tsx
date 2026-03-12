import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `OTC Crypto Trading Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how OTC crypto trading works. Large block trades, OTC desks, pricing, settlement, and when over-the-counter trading makes sense.",
};

export default function OTCTradingGuide() {
  return (
    <LearnPageLayout
      title="OTC Crypto Trading Explained"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="8 min read"
      intro="Over-the-counter (OTC) crypto trading facilitates large trades without impacting public market prices. When institutions, high-net-worth individuals, or companies need to buy or sell significant amounts of cryptocurrency, OTC desks provide a discreet and efficient alternative to exchange order books. This guide explains how OTC trading works and who benefits from it."
      toc={[
        { id: "what-is-otc", title: "what-is-otc", level: 2 },
        { id: "what-is-otc-trading", title: "What Is OTC Trading?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-otc-desks-work", title: "How OTC Desks Work", level: 2 },
        { id: "pricing", title: "pricing", level: 2 },
        { id: "otc-pricing-and-fees", title: "OTC Pricing and Fees", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-otc-services", title: "Types of OTC Services", level: 2 },
        { id: "who-uses", title: "who-uses", level: 2 },
        { id: "who-uses-otc-trading", title: "Who Uses OTC Trading?", level: 2 },
        { id: "platforms", title: "platforms", level: 2 },
        { id: "major-otc-platforms", title: "Major OTC Platforms", level: 2 },
        { id: "considerations", title: "considerations", level: 2 },
        { id: "key-considerations", title: "Key Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is the minimum for OTC trades?", answer: "OTC desk minimums typically range from $50,000 to $100,000, though some platforms have lowered minimums to $10,000. The exact minimum depends on the OTC desk and the asset being traded." },
        { question: "Are OTC prices better than exchange prices?", answer: "For large trades, yes. Executing a $1M order on an exchange would cause significant slippage, potentially moving the price 1-5%. OTC desks provide a fixed quote that avoids this slippage, often resulting in a better overall execution price." },
        { question: "Is OTC trading regulated?", answer: "OTC desks operated by regulated exchanges follow the same compliance requirements including KYC/AML. Independent OTC desks may have varying levels of regulation depending on their jurisdiction." },
        { question: "How long does OTC settlement take?", answer: "OTC trades typically settle within minutes to hours for crypto-to-crypto. Fiat settlement depends on banking processes and may take 1-3 business days. Some OTC desks offer instant settlement for verified clients." },
      ]}
      relatedArticles={[
        { title: "P2P Trading Guide", href: "/exchanges/learn/p2p-trading-guide", category: "Exchanges" },
        { title: "Exchange Fees Explained", href: "/exchanges/learn/exchange-fees-explained", category: "Exchanges" },
        { title: "Exchange VIP Programs", href: "/exchanges/learn/exchange-vip-programs", category: "Exchanges" },
      ]}
    >
      <section id="what-is-otc">
        <h2>What Is OTC Trading?</h2>
        <p>OTC (over-the-counter) trading refers to buying or selling cryptocurrency directly between two parties, typically facilitated by a specialized desk, rather than through a public exchange order book. OTC trades are executed privately and do not appear on exchange trading volumes or affect visible market prices.</p>
        <p>The primary purpose of OTC trading is handling large orders without market impact. Placing a $5 million sell order on an exchange would push the price down significantly as it eats through the order book. An OTC desk matches this order with a willing buyer at a negotiated price, avoiding public market disruption.</p>
        <p>OTC trading has been a standard practice in traditional finance for decades. In crypto, OTC desks have grown rapidly as institutional participation increases and larger transactions become more common.</p>
      </section>

      <section id="how-it-works">
        <h2>How OTC Desks Work</h2>
        <p>A client contacts an OTC desk with their trade requirements: the asset, direction (buy or sell), and quantity. The desk provides a quote based on current market conditions, their liquidity sources, and trade size. The client can accept or negotiate the quote.</p>
        <p>Once agreed upon, both parties settle the trade. For crypto-to-fiat trades, the client sends fiat while the desk sends crypto, or vice versa. For crypto-to-crypto swaps, both sides exchange assets simultaneously. The desk acts as the counterparty or matches the client with another counterparty.</p>
        <p>Settlement methods include atomic swaps, escrow services, or trust-based settlement with established clients. The settlement process is agreed upon before the trade and varies by desk and client relationship. Regulated OTC desks require full KYC documentation before executing any trades.</p>
      </section>

      <section id="pricing">
        <h2>OTC Pricing and Fees</h2>
        <p>OTC pricing is based on the current market spot price plus or minus a spread. The spread compensates the OTC desk for their service and risk. Typical spreads range from 0.1% to 1% depending on trade size, asset liquidity, and market volatility.</p>
        <p>Larger trades often receive tighter spreads because the absolute fee amount is still significant. A 0.2% spread on a $10 million trade generates $20,000 in revenue for the desk. Smaller trades near the minimum may see wider spreads to cover operational costs.</p>
        <p>For comparison, executing the same $10 million order on an exchange might incur 1-5% in slippage depending on the asset's order book depth. Even with the OTC spread, the total cost is typically lower for large orders than exchange execution with slippage.</p>
      </section>

      <section id="types">
        <h2>Types of OTC Services</h2>
        <p>Principal OTC desks trade from their own inventory. They buy crypto from sellers and sell to buyers using their balance sheet. This model provides immediate liquidity but the desk carries price risk. Major exchange OTC desks often operate this way.</p>
        <p>Agency OTC desks match buyers with sellers without holding inventory. They find counterparties for each trade and earn a commission. This model carries less risk for the desk but may take longer to execute as a matching counterparty must be found.</p>
        <p>Some OTC services offer algorithmic execution, breaking large orders into smaller pieces executed over time on exchanges. This approach reduces market impact while using exchange liquidity. It is slower but can provide competitive pricing for very large orders.</p>
      </section>

      <section id="who-uses">
        <h2>Who Uses OTC Trading?</h2>
        <p>Institutional investors including hedge funds, family offices, and corporate treasuries use OTC desks for large allocations. Companies like MicroStrategy making multi-million dollar Bitcoin purchases would use OTC services to avoid moving the market with exchange orders.</p>
        <p>Crypto mining operations use OTC desks to sell mined cryptocurrency. Miners often have regular large-volume sell requirements and benefit from the predictable execution and reduced slippage that OTC desks provide.</p>
        <p>High-net-worth individuals making significant investments or liquidating large positions use OTC for discretion and better execution prices. Early crypto adopters sitting on large holdings often prefer OTC sales to avoid exchange order book transparency and potential front-running.</p>
      </section>

      <section id="platforms">
        <h2>Major OTC Platforms</h2>
        <p>Coinbase Prime and Kraken OTC serve institutional clients with regulated, compliant OTC services. Both offer deep liquidity, multiple settlement options, and integration with their exchange's custody and trading infrastructure.</p>
        <p>Binance OTC, OKX OTC, and Bybit OTC provide OTC services integrated with their respective exchange platforms. These desks benefit from the exchanges' deep liquidity pools and wide asset selections. They typically offer competitive spreads for major trading pairs.</p>
        <p>Independent OTC desks like Cumberland (a DRW company) and Circle Trade operate separately from exchanges, offering services across multiple venues. These independent desks may provide better pricing through their multi-venue execution capabilities.</p>
      </section>

      <section id="considerations">
        <h2>Key Considerations</h2>
        <p>Counterparty risk is the primary concern in OTC trading. Ensure you trade through reputable, regulated desks with established track records. Verify the desk's regulatory status, audit history, and reputation within the industry before sending funds.</p>
        <p>Settlement risk can be mitigated through proper processes. Use escrow services for first-time counterparties. Atomic swap technology enables simultaneous exchange, eliminating the risk that one party receives assets while the other does not deliver.</p>
        <p>Price verification matters. Always compare the OTC quote against current exchange prices plus estimated slippage for your order size. A legitimate OTC desk should provide better total execution than exchange trading for large orders. If the quote seems far from market, seek competing quotes from other desks.</p>
      </section>
    </LearnPageLayout>
  );
}
