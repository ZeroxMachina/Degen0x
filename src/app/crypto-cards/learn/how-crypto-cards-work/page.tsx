import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How Do Crypto Cards Work? A Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how crypto debit and credit cards work, how they convert crypto to fiat at the point of sale, and what you need to know before getting your first crypto card.",
};

export default function HowCryptoCardsWorkPage() {
  return (
    <LearnPageLayout
      title="How Do Crypto Cards Work? A Complete Guide"
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      readTime="10 min"
      intro="Crypto cards bridge the gap between your digital assets and everyday spending. They let you use Bitcoin, Ethereum, and other cryptocurrencies at millions of merchants worldwide, just like a regular Visa or Mastercard. But how exactly does the conversion happen, and what should you understand before getting one? This guide explains the complete mechanics behind crypto cards."
      toc={[
        { id: "what-are-crypto-cards", title: "What Are Crypto Cards?", level: 2 },
        { id: "how-conversion-works", title: "How Crypto-to-Fiat Conversion Works", level: 2 },
        { id: "types-of-crypto-cards", title: "Types of Crypto Cards", level: 2 },
        { id: "getting-started", title: "Getting Started with a Crypto Card", level: 2 },
        { id: "pros-and-cons", title: "Pros and Cons of Crypto Cards", level: 2 },
      ]}
      faqs={[
        {
          question: "Do merchants need to accept crypto for me to use a crypto card?",
          answer:
            "No. Crypto cards work on the Visa or Mastercard networks, so they are accepted anywhere those networks are accepted. The merchant receives fiat currency, and the crypto conversion happens on the card provider's side before the payment reaches the merchant.",
        },
        {
          question: "Is using a crypto card a taxable event?",
          answer:
            "In many jurisdictions, including the US, spending cryptocurrency is considered a disposal and may trigger capital gains tax. Each transaction where crypto is converted to fiat is potentially taxable. Spending stablecoins like USDC may minimize this issue since there is typically no gain or loss.",
        },
        {
          question: "Can I use a crypto card without owning any cryptocurrency?",
          answer:
            "Some cards like the Fold Card connect to your bank account and earn crypto rewards on fiat spending. Others like the Gemini Credit Card are true credit cards that earn crypto rewards. However, most crypto debit cards require you to hold crypto or load fiat onto the card before spending.",
        },
        {
          question: "What happens if my crypto drops in value after I load my card?",
          answer:
            "For prepaid cards, once you load fiat onto the card, your balance is stable regardless of crypto price movements. For cards that convert crypto at the point of sale, the conversion happens at the current market rate, so a price drop means your crypto buys less fiat at checkout.",
        },
      ]}
      relatedArticles={[
        {
          title: "Crypto Card Rewards Explained",
          href: "/crypto-cards/learn/crypto-card-rewards-explained",
          category: "Crypto Cards",
        },
        {
          title: "Crypto Card Fees Explained",
          href: "/crypto-cards/learn/crypto-card-fees-explained",
          category: "Crypto Cards",
        },
        {
          title: "How to Choose the Right Crypto Card",
          href: "/crypto-cards/learn/how-to-choose-crypto-card",
          category: "Crypto Cards",
        },
        {
          title: "Crypto Cards vs Traditional Credit Cards",
          href: "/crypto-cards/learn/crypto-vs-traditional-cards",
          category: "Crypto Cards",
        },
      ]}
    >
      <h2 id="what-are-crypto-cards">What Are Crypto Cards?</h2>
      <p>
        Crypto cards are payment cards issued by cryptocurrency platforms that allow you to spend
        your digital assets at any merchant that accepts Visa or Mastercard. They come in several
        forms including prepaid debit cards, standard debit cards, and even true credit cards. The
        common thread is that they connect your crypto holdings to the traditional payment
        infrastructure.
      </p>
      <p>
        From the merchant&apos;s perspective, a crypto card transaction looks identical to any other
        card payment. They receive fiat currency (dollars, euros, pounds) through the normal payment
        rails. The crypto-to-fiat conversion happens on the card issuer&apos;s side, completely
        transparent to the merchant. This is why crypto cards work at virtually every retailer,
        restaurant, and online store.
      </p>

      <h2 id="how-conversion-works">How Crypto-to-Fiat Conversion Works</h2>
      <p>
        When you swipe or tap your crypto card, the card issuer converts your cryptocurrency to the
        local fiat currency in real time. The exact mechanics depend on the card type. Prepaid cards
        like Crypto.com require you to top up the card beforehand by converting crypto to fiat in the
        app. Point-of-sale conversion cards like the Coinbase Card automatically sell your crypto at
        the current market rate when you make a purchase.
      </p>
      <p>
        The exchange rate used is typically close to the spot market rate, but most providers include
        a small spread or conversion fee. This spread can range from 0% (for stablecoin spending) to
        2.5% or more. Understanding this hidden cost is important because it directly reduces the
        value you get from each transaction.
      </p>
      <p>
        Credit-line cards like the Nexo Card work differently. Instead of selling your crypto, they
        let you borrow against it. Your crypto serves as collateral, and you receive a spending limit
        based on the value of your deposited assets. You repay the credit line over time, and your
        crypto remains in your account.
      </p>

      <h2 id="types-of-crypto-cards">Types of Crypto Cards</h2>
      <p>
        Prepaid debit cards are the most common type. You load fiat currency onto the card (either
        from your bank or by converting crypto) and spend that balance. Cards from Crypto.com and
        BitPay follow this model. The advantage is simplicity and no risk of overspending. The
        downside is the extra step of topping up before you can spend.
      </p>
      <p>
        Direct-spend debit cards like the Coinbase Card and Binance Card draw from your exchange
        account at the point of sale. You do not need to pre-load the card. The platform sells the
        necessary amount of crypto to cover each purchase in real time. This is more convenient but
        means you are selling crypto with every transaction.
      </p>
      <p>
        True credit cards like the Gemini Credit Card function exactly like a traditional credit card.
        You receive a billing statement, pay it off monthly, and it reports to credit bureaus. You do
        not spend crypto; instead, you earn crypto rewards on your fiat purchases. This type is ideal
        for users who want crypto exposure without the complexity of managing digital assets.
      </p>
      <p>
        Credit-line cards like the Nexo Card let you spend without selling your crypto. Your
        deposited assets serve as collateral for a revolving credit line. This model is popular with
        long-term holders who believe their crypto will appreciate and do not want to trigger taxable
        sales.
      </p>

      <h2 id="getting-started">Getting Started with a Crypto Card</h2>
      <p>
        To get started, choose a card provider that suits your needs and create an account on their
        platform. Most providers require identity verification (KYC) including a government-issued
        photo ID. The verification process typically takes minutes to a few days depending on the
        provider.
      </p>
      <p>
        Once verified, you can order a physical card (usually free or with a small issuance fee)
        and often receive a virtual card immediately for online purchases. Fund your card according
        to the provider&apos;s model, whether that means depositing crypto, topping up with fiat, or
        simply linking your exchange account.
      </p>
      <p>
        Before making your first purchase, familiarize yourself with any fees, cashback rates, and
        spending limits. Many cards have daily and monthly spending caps, ATM withdrawal limits, and
        specific rules about which merchants qualify for cashback rewards.
      </p>

      <h2 id="pros-and-cons">Pros and Cons of Crypto Cards</h2>
      <p>
        The main advantages of crypto cards include the ability to spend crypto at any merchant,
        earn crypto rewards on purchases, access your digital wealth for daily expenses, and benefit
        from competitive exchange rates. For frequent travelers, many crypto cards offer zero foreign
        transaction fees, which traditional banks often charge at 1-3%.
      </p>
      <p>
        The drawbacks include potential tax implications on every crypto-to-fiat conversion, conversion
        spreads that reduce your effective spending power, the need to trust a centralized card
        provider with your assets, and the complexity of managing staking tiers and reward tokens.
        Additionally, crypto card rewards are typically paid in volatile tokens, meaning the value of
        your cashback can fluctuate significantly.
      </p>
      <p>
        For most users, the benefits outweigh the drawbacks, especially if you already hold crypto
        and want a convenient way to spend it. The key is choosing a card that matches your spending
        habits, geographic location, and comfort level with staking or token management.
      </p>
    </LearnPageLayout>
  );
}
