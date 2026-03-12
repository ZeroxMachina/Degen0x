import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Debit Cards Explained (${CURRENT_YEAR}) - How They Work | degen0x`,
  description: `Understand how crypto debit cards work. Card types, conversion mechanics, reward structures, fee breakdowns, and how to choose the right crypto card for your needs.`,
};

export default function CryptoDebitCardsExplainedPage() {
  return (
    <LearnPageLayout
      title="Crypto Debit Cards Explained"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="8 min"
      intro="Crypto debit cards bridge the gap between your digital asset holdings and everyday spending. They let you use Bitcoin, Ethereum, stablecoins, and other cryptocurrencies at any merchant that accepts Visa or Mastercard. This guide explains how they work, the different types available, and what to consider before choosing one."
      toc={[
        { id: "how-they-work", title: "how-they-work", level: 2 },
        { id: "how-crypto-debit-cards-work", title: "How Crypto Debit Cards Work", level: 2 },
        { id: "card-types", title: "card-types", level: 2 },
        { id: "types-of-crypto-cards", title: "Types of Crypto Cards", level: 2 },
        { id: "rewards", title: "rewards", level: 2 },
        { id: "understanding-reward-structures", title: "Understanding Reward Structures", level: 2 },
        { id: "fees", title: "fees", level: 2 },
        { id: "fee-breakdown", title: "Fee Breakdown", level: 2 },
        { id: "choosing", title: "choosing", level: 2 },
        { id: "how-to-choose-the-right-card", title: "How to Choose the Right Card", level: 2 }
      ]}
      faqs={[
        { question: "Do merchants need to accept crypto for me to use a crypto debit card?", answer: "No. Crypto debit cards work on the Visa or Mastercard network, so they are accepted everywhere these networks are. The card provider handles the conversion from crypto to fiat behind the scenes. The merchant receives a standard fiat payment and never knows crypto was involved." },
        { question: "Is using a crypto debit card a taxable event?", answer: "In most jurisdictions, yes. When you spend cryptocurrency through a debit card, you are effectively selling it for fiat at the current market price. If the crypto has appreciated since you acquired it, the difference is a capital gain subject to tax. If it has depreciated, you may be able to claim a capital loss. Spending stablecoins minimizes this concern since there is typically no gain or loss on a dollar-pegged asset." },
        { question: "Can I use a crypto debit card at ATMs?", answer: "Most crypto debit cards support ATM withdrawals, though fees vary. Typical ATM fees range from $2 to $5 per withdrawal, and some cards have monthly free withdrawal limits. International ATM usage may incur additional currency conversion fees. Check your specific card terms for withdrawal limits and fee schedules." },
      ]}
      relatedArticles={[
        { title: "Best Crypto Debit Cards", href: "/spending/best/debit-cards", category: "Crypto Spending" },
        { title: "Tax Implications of Spending Crypto", href: "/spending/learn/tax-implications-spending", category: "Crypto Spending" },
        { title: "How to Spend Crypto", href: "/spending/learn/spending-crypto", category: "Crypto Spending" },
      ]}
    >
      <h2 id="how-they-work">How Crypto Debit Cards Work</h2>
      <p>Crypto debit cards function as a layer between your cryptocurrency holdings and the traditional payment card networks. When you make a purchase, the card provider automatically converts the required amount of cryptocurrency to fiat currency (dollars, euros, pounds) and processes the payment through Visa or Mastercard. The merchant receives a standard fiat payment identical to any other card transaction. The conversion happens in one of two ways depending on the card type: prepaid cards require you to load funds by converting crypto to fiat in advance, while direct-spend cards convert at the point of sale using the current exchange rate. The conversion is processed by the card provider at their exchange rate, which typically includes a small spread (0.5% to 2.5%) above the market rate. This spread is how many card providers generate revenue. Some cards connected to major exchanges like Coinbase or Binance use their exchange rates, which tend to be more competitive.</p>

      <h2 id="card-types">Types of Crypto Cards</h2>
      <p>There are three main types of crypto debit cards. Prepaid cards work like traditional prepaid Visa or Mastercard cards. You convert crypto to fiat and load it onto the card. Once loaded, the balance is in fiat and not subject to crypto price fluctuations. BitPay is the best-known example. Direct-spend cards convert crypto to fiat at the moment of each purchase. Your balance remains in crypto until you spend, meaning your purchasing power fluctuates with the market. Crypto.com and Coinbase Card follow this model. Crypto-collateralized cards let you spend against your crypto holdings without selling them. Instead, you borrow against your portfolio and repay over time, similar to a credit line. Nexo Card is the primary example. Each type has different risk profiles. Prepaid cards eliminate volatility risk after loading. Direct-spend cards expose you to market movements but let you benefit from price appreciation. Collateralized cards preserve your holdings but introduce borrowing costs and liquidation risk if your collateral drops below required thresholds.</p>

      <h2 id="rewards">Understanding Reward Structures</h2>
      <p>Most crypto debit cards offer cashback rewards paid in cryptocurrency rather than fiat. Reward rates typically range from 1% to 8%, but the highest tiers often require staking the card provider native token. For example, Crypto.com offers 1% cashback with no staking but up to 5% with significant CRO token staking. Binance Card similarly ties its highest 8% cashback to substantial BNB holdings. The reward token matters as much as the percentage. Receiving 5% in a volatile, low-liquidity token may be worth less than 2% in Bitcoin over time. Evaluate whether you would independently choose to buy and hold the reward token. Coinbase Card stands out by letting you choose your reward cryptocurrency from a list including BTC, ETH, and other major assets. Some cards offer additional perks beyond cashback, including subscription rebates (Spotify, Netflix), airport lounge access, and foreign transaction fee waivers, which can provide more value than the cashback alone depending on your spending patterns.</p>

      <h2 id="fees">Fee Breakdown</h2>
      <p>Understanding the full fee structure is essential for calculating the true cost of using a crypto debit card. Conversion spread is the difference between the rate you receive and the market rate when crypto is converted to fiat. This is often the largest hidden cost, ranging from 0.5% to 2.5% per transaction. Annual or monthly fees vary by card. Many offer free base tiers with premium tiers costing $5 to $15 per month. ATM withdrawal fees typically include a per-withdrawal charge ($2 to $5) plus potential daily and monthly limits on free withdrawals. Foreign transaction fees range from 0% (Crypto.com) to 3% on some cards for purchases made in a different currency than the card base currency. Inactivity fees are charged by some cards (like BitPay, $5 per month after 90 days of no activity) for dormant accounts. To calculate the true cost, subtract all fees from your expected rewards. A card offering 3% cashback but charging a 2% conversion spread effectively provides only 1% net value.</p>

      <h2 id="choosing">How to Choose the Right Card</h2>
      <p>Selecting the right crypto debit card depends on several personal factors. Your location determines availability since some cards are US-only, others EU-focused, and some are global. Your spending volume affects which reward tiers provide meaningful value. Your willingness to stake tokens determines whether premium tiers are accessible. If you prefer to avoid price volatility on your spending balance, a prepaid card or stablecoin-funded card is better than direct-spend. If you want to maximize rewards and are comfortable holding the reward token, direct-spend cards with staking tiers offer the highest returns. If you want to preserve your crypto holdings while spending, a collateralized card lets you access liquidity without triggering taxable sales events. Start with a no-fee, no-staking-required card to get comfortable with the experience, then consider upgrading to a premium tier if your spending volume justifies the staking commitment.</p>
    </LearnPageLayout>
  );
}
