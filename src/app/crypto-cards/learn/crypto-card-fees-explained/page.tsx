import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Card Fees Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Understand all the fees associated with crypto cards. From conversion spreads and ATM fees to hidden charges and staking costs, learn what crypto cards really cost.",
};

export default function CryptoCardFeesExplainedPage() {
  return (
    <LearnPageLayout
      title="Crypto Card Fees Explained"
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      readTime="9 min"
      intro="Crypto cards often advertise 'no annual fee' and 'zero transaction fees,' but the real cost of using these cards extends beyond the headline numbers. Conversion spreads, ATM charges, foreign transaction fees, inactivity penalties, and staking opportunity costs all affect your bottom line. This guide exposes every fee category so you can calculate the true cost of your crypto card."
      toc={[
        { id: "conversion-fees", title: "Conversion Spreads and Liquidation Fees", level: 2 },
        { id: "atm-and-foreign", title: "ATM and Foreign Transaction Fees", level: 2 },
        { id: "hidden-fees", title: "Hidden Fees and Penalties", level: 2 },
        { id: "staking-costs", title: "The True Cost of Staking", level: 2 },
        { id: "fee-comparison", title: "Fee Comparison Across Major Cards", level: 2 },
      ]}
      faqs={[
        {
          question: "Which crypto card has the lowest overall fees?",
          answer:
            "For US users, the Coinbase Card spent with USDC has among the lowest fees: no annual fee, no conversion spread on USDC, and no foreign transaction fees. For international users, the Crypto.com Visa at the Ruby Steel tier or higher offers zero foreign transaction fees and free ATM withdrawals within monthly limits.",
        },
        {
          question: "Do crypto cards charge interchange fees?",
          answer:
            "Interchange fees are charged to the merchant, not the cardholder. Crypto cards operate on Visa and Mastercard networks that charge standard interchange rates to merchants. As a cardholder, you do not pay interchange fees directly, but they are baked into the prices merchants charge.",
        },
        {
          question: "Is the conversion spread the same as a fee?",
          answer:
            "Effectively, yes. A conversion spread is the difference between the mid-market exchange rate and the rate the card provider gives you. If the spread is 1%, you receive 1% less value on every crypto-to-fiat conversion. It functions exactly like a fee even though it is not labeled as one.",
        },
        {
          question: "Can I avoid all fees on a crypto card?",
          answer:
            "It is difficult to avoid all fees, but you can minimize them significantly. Use USDC on Coinbase Card to avoid conversion spreads, choose a card with no annual or inactivity fees, use in-network ATMs, and select a card with zero foreign transaction fees. Staking costs and opportunity costs are harder to eliminate entirely.",
        },
      ]}
      relatedArticles={[
        {
          title: "How Do Crypto Cards Work?",
          href: "/crypto-cards/learn/how-crypto-cards-work",
          category: "Crypto Cards",
        },
        {
          title: "Crypto Card Rewards Explained",
          href: "/crypto-cards/learn/crypto-card-rewards-explained",
          category: "Crypto Cards",
        },
        {
          title: "Tax Implications of Crypto Cards",
          href: "/crypto-cards/learn/crypto-card-tax-implications",
          category: "Crypto Cards",
        },
        {
          title: "How to Choose the Right Crypto Card",
          href: "/crypto-cards/learn/how-to-choose-crypto-card",
          category: "Crypto Cards",
        },
      ]}
    >
      <h2 id="conversion-fees">Conversion Spreads and Liquidation Fees</h2>
      <p>
        The conversion spread is the most significant hidden cost for crypto card users. When your
        card converts crypto to fiat at the point of sale, the exchange rate includes a markup over
        the mid-market rate. This spread varies by provider and asset. Coinbase Card charges a 2.49%
        liquidation spread when spending crypto (but 0% for USDC). Crypto.com includes a spread in
        its app-based conversion but not on the card&apos;s fiat spending.
      </p>
      <p>
        To understand the impact, consider this example. If you spend $1,000 worth of Bitcoin through
        a card with a 2% conversion spread, you are effectively paying $20 in fees. At $2,000 monthly
        spending, that is $240 per year in hidden conversion costs. This significantly reduces or even
        eliminates the value of cashback rewards if your reward rate is 1% to 2%.
      </p>
      <p>
        The most effective way to minimize conversion costs is to spend stablecoins or pre-loaded fiat
        rather than volatile crypto. Converting to USDC on Coinbase is free, and spending USDC through
        the Coinbase Card has no liquidation spread. Crypto.com users can top up their card with fiat
        to avoid the app&apos;s crypto conversion spread.
      </p>

      <h2 id="atm-and-foreign">ATM and Foreign Transaction Fees</h2>
      <p>
        ATM withdrawal fees vary widely across crypto cards. BitPay charges $3 per domestic
        withdrawal. Binance Card charges 0.9% of the withdrawal amount. Crypto.com offers free ATM
        withdrawals up to monthly limits ($200 to $1,000 depending on tier), with a 2% fee above
        the limit. Coinbase Card charges standard ATM operator fees.
      </p>
      <p>
        Foreign transaction fees are charged when you make purchases in a currency different from
        your card&apos;s base currency. BitPay charges 3%, Gemini charges 3%, and most other crypto
        cards charge 0%. For frequent travelers, this is one of the biggest advantages of crypto
        cards over traditional bank cards, which commonly charge 1% to 3% for foreign transactions.
      </p>
      <p>
        Be aware that even cards with 0% foreign transaction fees may include a conversion spread
        when converting between currencies. The headline claim of zero foreign transaction fees may
        be technically accurate while still costing you money through the exchange rate. Always check
        the effective exchange rate against the mid-market rate to understand your true cost.
      </p>

      <h2 id="hidden-fees">Hidden Fees and Penalties</h2>
      <p>
        Inactivity fees catch occasional users by surprise. BitPay charges $5 per month after 90
        days of no card activity. Some card programs charge annual maintenance fees that are not
        prominently displayed. Always read the complete fee schedule before committing to a card.
      </p>
      <p>
        Card issuance and replacement fees apply to some providers. BitPay charges $10 for the
        initial card. Replacement cards may cost $10 to $50 depending on the provider and tier.
        Expedited shipping for replacement cards carries additional charges at most providers.
      </p>
      <p>
        Top-up fees can apply when loading funds onto prepaid cards. While most providers offer
        free crypto-to-card loading, some charge for bank transfer or credit card top-ups. Check
        whether your preferred funding method incurs charges before assuming the process is free.
      </p>

      <h2 id="staking-costs">The True Cost of Staking</h2>
      <p>
        Staking for card tiers introduces an opportunity cost that most users overlook. If you stake
        $4,000 in CRO for the Jade Green tier, that $4,000 cannot be invested in BTC, ETH, index
        funds, or other assets. At a conservative 7% annual return on alternative investments, the
        opportunity cost is $280 per year. At a 10% return, it is $400 per year.
      </p>
      <p>
        Token depreciation risk compounds this cost. If CRO drops 30% during your staking period,
        you lose $1,200 on a $4,000 stake. No amount of cashback rewards can offset that loss in a
        year of normal spending. The staking requirement effectively makes you a forced holder of a
        single volatile asset.
      </p>
      <p>
        When evaluating staking costs, calculate the total annual cost as the sum of the opportunity
        cost plus the expected token depreciation risk minus the incremental cashback and perk value
        from the higher tier. If this number is positive, the lower tier (or a no-stake card) is the
        more cost-effective choice.
      </p>

      <h2 id="fee-comparison">Fee Comparison Across Major Cards</h2>
      <p>
        When comparing total costs, look beyond the headline fee. A card with no annual fee but a
        2.49% conversion spread costs more over time than a card with a $150 annual fee and zero
        conversion spread, if you spend more than approximately $6,000 per year. The breakeven
        calculation depends entirely on your spending volume and patterns.
      </p>
      <p>
        For a typical user spending $2,000 per month, the annual fee impact of various cards looks
        different when you factor in all costs. Coinbase Card with USDC: approximately $0 total
        fees. Crypto.com Ruby Steel: $0 direct fees plus $400 staking opportunity cost. BitPay:
        $120 issuance plus potential inactivity. Fold Card basic: $0 fees. Fold+: $150 subscription.
      </p>
      <p>
        The lowest total cost option depends on your usage pattern, geographic location, and risk
        tolerance for staking. For most users, the Coinbase Card with USDC spending or the basic
        Crypto.com tier offers the best balance of rewards versus total costs.
      </p>
    </LearnPageLayout>
  );
}
