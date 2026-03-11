import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Card Fees Compared (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Compare fees across major crypto debit and credit cards. Understand conversion spreads, annual fees, ATM charges, and hidden costs to find the most cost-effective card.",
};

export default function CryptoCardFeesComparedPage() {
  return (
    <LearnPageLayout
      title="Crypto Card Fees Compared"
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      readTime="8 min"
      intro="Crypto card fees can significantly impact the value you get from your card. While many cards advertise zero annual fees, the real costs hide in conversion spreads, ATM withdrawal fees, inactivity charges, and foreign transaction markups. This guide provides a transparent comparison of fees across all major crypto cards so you can make an informed choice."
      toc={[
        { id: "conversion-fees", title: "Conversion Spreads and Fees", level: 2 },
        { id: "annual-monthly", title: "Annual and Monthly Fees", level: 2 },
        { id: "atm-fees", title: "ATM Withdrawal Fees", level: 2 },
        { id: "foreign-transaction", title: "Foreign Transaction Fees", level: 2 },
        { id: "hidden-costs", title: "Hidden Costs to Watch For", level: 2 },
      ]}
      faqs={[
        { question: "Which crypto card has the lowest fees overall?", answer: "Binance Card has zero transaction fees and no annual fee, making it the lowest-cost option where available. Crypto.com has no annual fee and competitive conversion rates. Coinbase Card charges no fee when spending USDC. The lowest-cost card depends on your spending patterns and location." },
        { question: "Do crypto cards charge more than traditional debit cards?", answer: "Crypto cards typically have higher per-transaction costs due to the crypto-to-fiat conversion spread (usually 0.5-2.5%). Traditional debit cards have no conversion fee for domestic transactions. However, crypto cards often have lower foreign transaction fees (0% vs 1-3%) making them cheaper for international use." },
        { question: "How can I avoid conversion fees?", answer: "Spend USDC or other stablecoins on cards that waive conversion fees for stablecoin spending, like the Coinbase Card. Pre-load fiat onto prepaid cards like BitPay before the conversion. Some cards on Crypto.com have free top-up from bank accounts, allowing you to spend fiat through the card without any crypto conversion." },
      ]}
      relatedArticles={[
        { title: "Best Crypto Card Rewards", href: "/crypto-cards/learn/best-crypto-card-rewards", category: "Crypto Cards" },
        { title: "Prepaid vs Debit Crypto Cards", href: "/crypto-cards/learn/prepaid-vs-debit-crypto", category: "Crypto Cards" },
        { title: "Crypto Card Tax Implications", href: "/crypto-cards/learn/crypto-card-taxes", category: "Crypto Cards" },
      ]}
    >
      <h2 id="conversion-fees">Conversion Spreads and Fees</h2>
      <p>The conversion spread is the most significant cost for most crypto card users. Coinbase Card charges a 2.49% spread when spending crypto but zero when spending USDC. Crypto.com offers competitive rates with no explicit conversion fee but includes a market-rate spread. Binance Card charges zero transaction fees with competitive Binance exchange rates. BitPay converts at market rate with no additional conversion fee when loading the card. Wirex includes a small spread markup on its interbank rates. The spread varies by market conditions and transaction size, so the effective cost can fluctuate day to day.</p>

      <h2 id="annual-monthly">Annual and Monthly Fees</h2>
      <p>Most crypto cards advertise no annual fee, and this is generally accurate for the base tiers. Coinbase Card, Crypto.com, Binance Card, and BitPay all have no annual fees. Plutus charges monthly subscription fees of $14.99-$49.99 for premium tiers. Wirex charges $2.99-$29.99 monthly for premium plans. Fold charges $150 annually for the Fold+ premium tier. The free tiers are genuinely free, but premium tiers with higher rewards require ongoing subscription costs that must be offset by increased cashback and perks to provide net value.</p>

      <h2 id="atm-fees">ATM Withdrawal Fees</h2>
      <p>ATM withdrawal fees vary significantly across providers. Crypto.com offers free ATM withdrawals up to a monthly limit based on card tier ($200-$1,000/month), charging 2% above the limit. Coinbase Card charges no fee from Coinbase but ATM operator fees may apply. BitPay charges $3 per domestic ATM withdrawal. Binance Card ATM fees vary by region. Most cards have daily and monthly withdrawal limits. ATM withdrawals also incur the crypto-to-fiat conversion spread, making them more expensive than card purchases. For large cash needs, selling crypto on an exchange and withdrawing to a bank account is typically cheaper.</p>

      <h2 id="foreign-transaction">Foreign Transaction Fees</h2>
      <p>Foreign transaction fees are where crypto cards often outperform traditional bank cards. Crypto.com charges zero foreign transaction fees across all tiers. Wirex also has zero foreign transaction fees. Nexo Card has zero fees in 200+ countries. Coinbase Card charges up to 2% for international transactions. BitPay charges up to 3%. For comparison, most traditional bank debit cards charge 1-3% for foreign transactions. If you travel internationally or make purchases in foreign currencies, the zero-fee cards can save 2-5% compared to a typical bank card.</p>

      <h2 id="hidden-costs">Hidden Costs to Watch For</h2>
      <p>Beyond the obvious fees, watch for several hidden costs. Inactivity fees apply on some cards: BitPay charges $5/month after 90 days of no activity. Staking requirements for higher tiers represent locked capital with opportunity cost. Card replacement fees range from free to $50. Some cards have minimum top-up amounts or loading fees from certain sources. The conversion spread can widen during periods of high volatility, costing more than the typical rate. Monthly cashback caps limit how much you can earn, particularly on free tiers. Always calculate the total annual cost including all fees, opportunity costs, and spread estimates against your expected rewards.</p>
    </LearnPageLayout>
  );
}
