import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bitfinex Review (${CURRENT_YEAR}) | degen0x`,
  description:
    "Detailed Bitfinex review covering margin trading, fees, security, and advanced features. Everything you need to know about Bitfinex.",
};

export default function BitfinexReviewPage() {
  return (
    <ReviewPage
      product={{
        name: "Bitfinex",
        slug: "bitfinex",
        rating: 3.9,
        description:
          "Bitfinex is a veteran cryptocurrency exchange founded in 2012, known for deep liquidity, advanced margin trading, and its close relationship with the Tether stablecoin. It serves professional and institutional traders worldwide.",
        pros: [
          "Exceptional liquidity depth in BTC and ETH pairs",
          "Advanced margin trading with up to 10x leverage",
          "Comprehensive lending marketplace for passive income",
        ],
        cons: [
          "Complex interface not suited for beginners",
          "Controversial history including the 2016 security breach",
        ],
        bestFor: "Professional traders who need deep liquidity and advanced margin trading capabilities",
        affiliateUrl: "#",
        category: "exchange",
      }}
      categoryName="Exchanges"
      categorySlug="exchanges"
      overview="Bitfinex is one of the oldest and most established cryptocurrency exchanges, operating since 2012. Operated by iFinex Inc., the same company behind Tether (USDT), Bitfinex is renowned for its deep order books, particularly in BTC/USD and ETH/USD pairs. The platform is designed for experienced traders, offering margin trading, a peer-to-peer lending marketplace, derivatives trading, and advanced order types. While its history includes a significant 2016 hack, the exchange has since strengthened its security and repaid all affected users."
      sections={[
        { id: "features", title: "Features", content:
            "Bitfinex provides spot trading across 400+ pairs, margin trading with up to 10x leverage, derivatives including perpetual contracts, and a unique peer-to-peer funding marketplace where users earn interest by lending assets. Advanced order types include scaled orders, iceberg orders, and OCO (one-cancels-other). The Bitfinex Pulse social trading platform enables traders to share insights. API support is comprehensive for algorithmic trading.",
        },
        { id: "fees", title: "Fees", content:
            "Bitfinex uses a maker-taker model starting at 0.1% maker and 0.2% taker for spot trading. High-volume traders can reach 0% maker and 0.055% taker fees. Derivatives fees start at 0.02% maker rebate and 0.065% taker. Margin funding fees are market-determined. LEO token holders receive fee reductions across all products. Crypto deposits are free; fiat deposits carry variable fees depending on the method.",
        },
        { id: "security", title: "Security", content:
            "Following the 2016 breach where approximately 120,000 BTC was stolen, Bitfinex completely overhauled its security infrastructure. The exchange now uses multi-signature cold storage holding 99.5% of funds offline, advanced API key permissions, universal 2FA, withdrawal protection with time locks, and IP whitelisting. All BTC from the 2016 hack has been recovered with law enforcement assistance. Regular penetration testing and security audits are conducted.",
        },
      ]}
      fees={{
        "Spot Maker Fee": "0.1%",
        "Spot Taker Fee": "0.2%",
        "Derivatives Maker": "-0.02% (rebate)",
        "Derivatives Taker": "0.065%",
        "Withdrawal Fee": "Varies by asset",
      }}
      security={["99.5% cold storage", "Multi-signature wallets", "Universal 2FA", "Withdrawal time locks", "IP whitelisting", "Regular security audits"]}
      features={["400+ trading pairs", "Margin trading up to 10x", "P2P lending marketplace", "Derivatives trading", "Advanced order types", "Bitfinex Pulse social trading"]}
      faqs={[
        {
          question: "Is Bitfinex safe after the 2016 hack?",
          answer:
            "Bitfinex completely overhauled its security after 2016, repaid all affected users, and now keeps 99.5% of funds in cold storage. The stolen BTC was eventually recovered by US law enforcement in 2022.",
        },
        {
          question: "What is the Bitfinex lending marketplace?",
          answer:
            "Bitfinex offers a peer-to-peer funding market where users can lend their crypto or fiat to margin traders and earn interest. Rates are determined by supply and demand, and lenders can set their own terms.",
        },
      ]}
      relatedReviews={[
        { name: "Bitstamp", slug: "/exchanges/reviews/bitstamp" },
        { name: "Kraken", slug: "/exchanges/reviews/kraken" },
      ]}
      relatedGuides={[
        { title: "Margin Trading Guide", href: "/exchanges/learn/margin-trading-guide" },
        { title: "Bitstamp vs Kraken", href: "/exchanges/compare/bitstamp-vs-kraken" },
      ]}
    />
  );
}
