import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Complete Guide to Crypto Card Fees (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understand every type of fee charged by crypto cards. Learn about conversion spreads, ATM fees, inactivity fees, and how to minimize total costs.",
  keywords: ["crypto card fees guide", "crypto card costs", "crypto card hidden fees", "crypto debit card charges"],
};

export default function CryptoCardFeesGuidePage() {
  return (
    <LearnPageLayout
      title="Complete Guide to Crypto Card Fees"
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      readTime="8 min"
      intro="Understanding the full fee structure of crypto cards is essential for maximizing the value of your rewards and avoiding unexpected charges. Many crypto cards advertise zero fees on the surface but have conversion spreads, withdrawal limits, and conditional charges buried in the fine print. This comprehensive guide breaks down every type of fee you might encounter and how to minimize your total cost."
      toc={[
        { id: "conversion-spreads", title: "conversion-spreads", level: 2 },
        { id: "conversion-spreads", title: "Conversion Spreads", level: 2 },
        { id: "card-fees", title: "card-fees", level: 2 },
        { id: "card-and-account-fees", title: "Card and Account Fees", level: 2 },
        { id: "transaction-fees", title: "transaction-fees", level: 2 },
        { id: "transaction-fees", title: "Transaction Fees", level: 2 },
        { id: "minimizing-fees", title: "minimizing-fees", level: 2 },
        { id: "minimizing-fees", title: "Minimizing Fees", level: 2 }
      ]}
      faqs={[
        { question: "What is a crypto conversion spread?", answer: "A conversion spread is the difference between the market price and the rate at which your crypto card converts crypto to fiat. If the market rate for ETH is $2,000 but the card converts at $1,980, the spread is 1%. This functions as a hidden fee on every transaction where crypto is converted." },
        { question: "Which crypto card has the lowest overall fees?", answer: "Cards with no annual fee, no foreign transaction fee, and the tightest conversion spread offer the lowest total cost. The Crypto.com Visa offers interbank exchange rates for fiat conversions. Shakepay has zero fees across the board. Compare the total cost including spread rather than just explicit fees." },
      ]}
      relatedArticles={[
        { title: "Best No-Fee Crypto Cards", href: "/crypto-cards/best/no-fees", category: "Crypto Cards" },
        { title: "How Crypto Cards Work", href: "/crypto-cards/learn/how-crypto-cards-work", category: "Crypto Cards" },
      ]}
    >
      <section id="conversion-spreads">
        <h2>Conversion Spreads</h2>
        <p>The conversion spread is the most significant and often least transparent fee on crypto cards. Every time you spend crypto through a card, the crypto is converted to fiat currency to pay the merchant. The rate at which this conversion happens typically includes a markup over the actual market price. Spreads range from 0.5% on the best cards to 2.5% or more on less competitive options. Stablecoin conversions usually have the tightest spreads, often under 0.5%, since the exchange rate is nearly one-to-one with the dollar. Bitcoin and Ethereum conversions typically have moderate spreads of 0.5% to 1.5%. Smaller altcoins may have wider spreads due to lower liquidity. Some cards advertise zero conversion fees but embed the cost in a wider spread, making direct comparison difficult. To test the actual spread, compare the amount debited from your crypto balance to the purchase amount using the real-time market rate. The difference is your effective spread. Some premium cards like the Crypto.com Visa offer interbank exchange rates for fiat-to-fiat conversions, but may still charge a spread on crypto-to-fiat conversions.</p>
      </section>
      <section id="card-fees">
        <h2>Card and Account Fees</h2>
        <p>Beyond conversion spreads, crypto cards may charge various account and card-related fees. Annual fees range from zero for basic tiers to several hundred dollars for premium metal cards. Monthly maintenance fees are less common but exist on some platforms. Card issuance fees cover the cost of producing and shipping the physical card and typically range from five to fifty dollars. Card replacement fees apply if you lose your card or need a reissue. Some cards charge for virtual card issuance, while others provide it free. Inactivity fees penalize users who do not use their card for a specified period, typically 12 months. Account closure fees are rare but exist on some platforms. Loading fees may apply when adding funds to prepaid cards, especially when using a credit card to load rather than a bank transfer. Upgrade and downgrade fees may apply when changing between card tiers. Read the complete fee schedule before signing up and check for any recently added fees in the terms of service, as card issuers occasionally add new fees with advance notice to existing users.</p>
      </section>
      <section id="transaction-fees">
        <h2>Transaction Fees</h2>
        <p>Transaction-specific fees can add up quickly for active card users. ATM withdrawal fees are common, with most cards offering a monthly free withdrawal limit (typically $200 to $800) and charging 2% to 3% on amounts above the limit. International ATM fees may be higher than domestic ones. Foreign transaction fees range from zero on the best cards to 3% on others. These fees apply when you make a purchase in a currency different from your card's base currency. Point-of-sale transaction fees are uncommon but exist on some cards as a flat fee per transaction. Declined transaction fees are rare but some platforms charge for transactions that fail due to insufficient balance. Chargebacks and disputes may carry processing fees on some platforms. For online subscriptions, some cards charge a small authorization fee for recurring payment setup. Understanding which fees apply to your expected usage patterns helps you choose the most cost-effective card. A card with a small annual fee but no transaction fees may be cheaper than a fee-free card with high per-transaction charges for active users.</p>
      </section>
      <section id="minimizing-fees">
        <h2>Minimizing Fees</h2>
        <p>Several strategies can help minimize your total crypto card fees. Spending stablecoins instead of volatile crypto minimizes conversion spreads since the rate is near one-to-one. Loading your card with fiat currency before spending eliminates the crypto-to-fiat conversion spread entirely on some platforms. Staying within ATM free withdrawal limits avoids the most common transaction fee. Choosing a card with no annual fee eliminates the largest recurring cost. Using your card regularly avoids inactivity fees. For international spending, selecting a card with no foreign transaction fees can save 2% to 3% on every purchase abroad. Compare the effective cost across cards using your actual spending patterns. Calculate annual spend multiplied by the conversion spread, plus any annual fees, plus estimated ATM charges, plus foreign transaction fees. The card with the lowest total cost is not always the one with the best headline reward rate. A 2% cashback card with a 1.5% conversion spread effectively provides only 0.5% net benefit, while a 1% cashback card with a 0.2% spread provides 0.8% net benefit.</p>
      </section>
    </LearnPageLayout>
  );
}
