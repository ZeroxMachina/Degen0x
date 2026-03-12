import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Choose the Right Crypto Card (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "A step-by-step guide to choosing the best crypto card for your needs. Consider rewards, fees, availability, card type, and your personal spending habits.",
};

export default function HowToChooseCryptoCardPage() {
  return (
    <LearnPageLayout
      title="How to Choose the Right Crypto Card"
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      readTime="10 min"
      intro="With over a dozen crypto cards on the market, choosing the right one can feel overwhelming. The best card for you depends on where you live, how much you spend, what rewards you value, and how much complexity you are willing to manage. This guide walks you through the key decision factors step by step so you can confidently select a card that matches your needs."
      toc={[
        { id: "geographic-availability", title: "geographic-availability", level: 2 },
        { id: "step-1-check-geographic-availability", title: "Step 1: Check Geographic Availability", level: 2 },
        { id: "card-type", title: "card-type", level: 2 },
        { id: "step-2-choose-your-card-type", title: "Step 2: Choose Your Card Type", level: 2 },
        { id: "reward-model", title: "reward-model", level: 2 },
        { id: "step-3-evaluate-the-reward-model", title: "Step 3: Evaluate the Reward Model", level: 2 },
        { id: "fees-and-costs", title: "fees-and-costs", level: 2 },
        { id: "step-4-calculate-total-costs", title: "Step 4: Calculate Total Costs", level: 2 },
        { id: "final-selection", title: "final-selection", level: 2 },
        { id: "step-5-make-your-final-selection", title: "Step 5: Make Your Final Selection", level: 2 }
      ]}
      faqs={[
        {
          question: "What is the best crypto card for beginners?",
          answer:
            "For US beginners, the Coinbase Card is the simplest option with no staking requirements and integration with the beginner-friendly Coinbase platform. For European beginners, the Crypto.com Visa at the free Midnight Blue tier requires no financial commitment and provides a gentle introduction to crypto card usage.",
        },
        {
          question: "Can I have more than one crypto card?",
          answer:
            "Yes. Many experienced users carry two or three crypto cards to optimize rewards across different spending categories. There are no restrictions on holding cards from multiple providers, though managing multiple accounts adds complexity.",
        },
        {
          question: "How long does it take to get a crypto card?",
          answer:
            "Virtual cards are often issued instantly after account verification. Physical cards typically arrive within 7 to 14 business days, though shipping times vary by provider and location. Some premium tier cards may take longer due to metal card production.",
        },
        {
          question: "Should I choose a debit card or credit card?",
          answer:
            "Choose a credit card (Gemini, Rain) if you want to build credit, prefer paying a monthly statement, and value consumer protections. Choose a debit card (Crypto.com, Coinbase, Fold) if you want to spend existing crypto holdings, avoid interest charges, and prefer a pay-as-you-go model.",
        },
      ]}
      relatedArticles={[
        {
          title: "How Do Crypto Cards Work?",
          href: "/crypto-cards/learn/how-crypto-cards-work",
          category: "Crypto Cards",
        },
        {
          title: "Crypto Card Fees Explained",
          href: "/crypto-cards/learn/crypto-card-fees-explained",
          category: "Crypto Cards",
        },
        {
          title: "Cashback vs Rewards: Which Type Is Better?",
          href: "/crypto-cards/learn/cashback-vs-rewards",
          category: "Crypto Cards",
        },
        {
          title: "Crypto Cards vs Traditional Credit Cards",
          href: "/crypto-cards/learn/crypto-vs-traditional-cards",
          category: "Crypto Cards",
        },
      ]}
    >
      <h2 id="geographic-availability">Step 1: Check Geographic Availability</h2>
      <p>
        Your location is the most important filter. Many crypto cards are restricted to specific
        regions. In the US, your primary options include the Coinbase Card, Gemini Credit Card, Fold
        Card, BitPay Card, and the Crypto.com Visa (app-based). In Europe, you have access to
        Crypto.com, Binance Card, Wirex, Plutus, and others. Some markets have very limited options.
      </p>
      <p>
        Start by listing which cards are actually available in your country. Check each provider&apos;s
        website for the most current availability information, as coverage expands regularly. There is
        no point evaluating a card you cannot get.
      </p>
      <p>
        If you travel frequently, consider international usability. Cards with zero foreign
        transaction fees and broad Visa or Mastercard acceptance (Crypto.com, Wirex, Nexo) are
        valuable for travelers. Cards limited to domestic use may not be ideal if you spend
        internationally often.
      </p>

      <h2 id="card-type">Step 2: Choose Your Card Type</h2>
      <p>
        Decide whether you want a prepaid card, debit card, credit card, or credit-line card. Prepaid
        cards (Crypto.com, BitPay) require loading funds before spending. Debit cards (Coinbase,
        Binance) draw from your account balance at purchase time. Credit cards (Gemini, Rain) give
        you a billing cycle and build your credit score. Credit-line cards (Nexo) let you borrow
        against crypto collateral.
      </p>
      <p>
        If building credit is important, a true credit card is necessary. If you want to spend your
        existing crypto without selling it, the Nexo credit-line model is unique. If you want
        straightforward crypto spending with rewards, a debit or prepaid card from Crypto.com or
        Coinbase works well.
      </p>
      <p>
        Consider whether you want to spend crypto you already hold or earn crypto on fiat spending.
        Cards like Coinbase and Binance convert your crypto to fiat for purchases. Cards like Fold
        and Gemini charge your bank account or credit line and reward you with crypto. These are
        fundamentally different use cases.
      </p>

      <h2 id="reward-model">Step 3: Evaluate the Reward Model</h2>
      <p>
        Map your monthly spending by category: dining, groceries, gas, travel, subscriptions, and
        general purchases. Then calculate expected earnings from each card you are considering. A
        user spending $500 on dining and $2,500 elsewhere earns more from Gemini (3% dining + 1%
        other = $40) than from a flat 1% card ($30) but less than a flat 2% card ($60).
      </p>
      <p>
        Consider the reward currency. If you believe in Bitcoin&apos;s long-term appreciation,
        earning BTC rewards (even at 1%) may outperform earning 5% in a less established token. If
        you prefer certainty, stablecoin rewards lock in dollar value. If you are bullish on a
        specific platform, its native token rewards give you the highest rates.
      </p>
      <p>
        Factor in staking requirements. A card offering 5% cashback with $40,000 staking is not
        comparable to a 2% card with no staking. The staked capital has opportunity costs and token
        price risk. Compare rewards net of all costs, not just the headline cashback percentage.
      </p>

      <h2 id="fees-and-costs">Step 4: Calculate Total Costs</h2>
      <p>
        Add up all costs associated with each card you are considering. Include the annual or monthly
        fee (if any), conversion spreads on each transaction, ATM fees if you use cash, foreign
        transaction fees if you travel, and the opportunity cost of any staking requirement.
      </p>
      <p>
        For an honest comparison, calculate your net annual reward: total cashback minus total fees.
        A card earning $600 in cashback but costing $200 in spreads and $280 in staking opportunity
        cost nets $120. A simpler card earning $300 in cashback with $0 in fees nets $300. The
        higher-reward card is not always the higher-value card.
      </p>
      <p>
        Create a simple spreadsheet with your typical monthly spending, each card&apos;s cashback
        rate, and all associated fees. This five-minute exercise can save you from choosing the wrong
        card and potentially losing money on a staking commitment that does not pay for itself.
      </p>

      <h2 id="final-selection">Step 5: Make Your Final Selection</h2>
      <p>
        After filtering by availability, card type, reward model, and total costs, you should have
        two or three strong candidates. For your final decision, consider the user experience. Read
        reviews about each card&apos;s mobile app, customer support quality, and transaction speed.
        A great rewards structure is worth less if the app crashes or customer support is unreachable.
      </p>
      <p>
        Start with the card that offers the best net value at the lowest commitment level. You can
        always upgrade to a higher tier or add a second card later. There is no reason to commit
        thousands of dollars in staking for your first crypto card experience.
      </p>
      <p>
        Finally, revisit your choice every six to twelve months. The crypto card market evolves
        rapidly, with new products launching and existing cards adjusting their rewards and fees.
        What was the best card last year may not be the best choice today. Stay informed and be
        willing to switch if a better option emerges that suits your needs.
      </p>
    </LearnPageLayout>
  );
}
