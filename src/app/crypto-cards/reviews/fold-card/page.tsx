import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { cryptoCards } from "@/data/crypto-cards";
import ReviewPage from "@/components/ReviewPage";

const product = cryptoCards.find((c) => c.slug === "fold-card")!;

export const metadata: Metadata = {
  title: "Fold Card Review 2026: Bitcoin Rewards, Spin the Wheel &",
  description: "Our in-depth Fold Card review covers Bitcoin-only rewards, the spin-the-wheel mechanic, Fold+ subscription tiers, Lightning Network integration, and daily BTC",
  alternates: { canonical: "/crypto-cards/reviews/fold-card" }};

export default function FoldCardReview() {
  return (
    <ReviewPage
      product={product}
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      overview="The Fold Card is a Bitcoin-focused Visa debit card that has carved out a unique niche in the crypto card market by combining everyday spending with gamified Bitcoin rewards. Unlike multi-token reward cards, Fold is exclusively focused on Bitcoin, making it a favorite among Bitcoin maximalists who want to stack sats with every purchase. The card connects to your existing bank account (not a crypto exchange), drawing from your traditional USD balance while earning Bitcoin back on every transaction.

What makes the Fold Card distinctive is its gamified rewards system. Every qualifying purchase earns a spin on the Fold wheel, which can reward anywhere from a small number of satoshis to entire Bitcoin. The daily spin-the-wheel mechanic adds an element of excitement to routine purchases, though the base reward rates are what matter for long-term accumulation. Free-tier users earn variable rewards averaging around 0.5% back in Bitcoin, while Fold+ premium subscribers receive a guaranteed base rate of 1.5% plus enhanced wheel spins.

Fold has built a passionate community around the idea that every purchase is an opportunity to accumulate Bitcoin. The app extends beyond just the card, offering gift card purchases with Bitcoin rewards, a referral program, and Lightning Network integration for instant Bitcoin transfers. For users who are philosophically aligned with Bitcoin and want to make it a part of their daily spending routine, the Fold Card delivers an experience that no other card can match."
      sections={[
        {
          id: "spin-the-wheel",
          title: "Spin the Wheel Rewards Mechanic",
          content:
            "The Fold Card's signature feature is its spin-the-wheel mechanic. After every qualifying purchase of $1 or more, you earn a spin on the Fold wheel. The wheel contains segments ranging from small satoshi amounts (the smallest Bitcoin unit) to larger rewards and occasionally a full Bitcoin prize. The odds and reward sizes vary based on your subscription tier. Free-tier users get a standard wheel with modest reward potential, while Fold+ subscribers access an enhanced wheel with higher minimum rewards and better odds on larger prizes. There is also a daily free spin available to all users, even without making a purchase. The gamification element makes the Fold Card genuinely fun to use, though it is important to understand that the expected return is probabilistic. Over time, free-tier users typically average around 0.5% back, while premium users average significantly more. Fold publishes statistics on total Bitcoin distributed through the wheel, creating transparency around the reward pool.",
        },
        {
          id: "subscription-tiers",
          title: "Free Tier vs. Fold+ Subscription",
          content:
            "Fold offers two card tiers: a free tier and the premium Fold+ subscription at $150 per year (or $14.99 per month). The free tier provides variable Bitcoin rewards on every purchase via the spin wheel, with no guaranteed minimum rate. It also includes one daily free spin and access to gift card purchases with Bitcoin rewards. Fold+ subscribers receive a guaranteed 1.5% minimum Bitcoin back on every purchase, plus enhanced wheel spins with higher potential rewards. Premium members also receive priority access to new features, higher daily spin values, and an increased referral bonus. The $150 annual cost is recouped if you spend roughly $10,000 per year (earning $150 in rewards at 1.5%), making it worthwhile for moderate-to-heavy spenders. Fold+ also includes a distinctive premium card design that signals membership in the Bitcoin community.",
        },
        {
          id: "bitcoin-only-philosophy",
          title: "Bitcoin-Only Rewards Philosophy",
          content:
            "Fold is unapologetically Bitcoin-only. Every reward, referral bonus, and promotional incentive is denominated and paid in Bitcoin. There is no option to earn Ethereum, altcoins, or stablecoins. For Bitcoin maximalists, this is a feature, not a bug: it ensures that every dollar spent through the card contributes to their long-term Bitcoin accumulation strategy. The Bitcoin earned through the Fold Card is held in your Fold account and can be withdrawn at any time to a personal wallet, including via the Lightning Network for instant, low-fee transfers. This Bitcoin-only approach also simplifies the tax reporting process, as you only need to track one asset for reward income and potential capital gains. For users who want multi-token flexibility, the Fold Card is not the right choice, but for those committed to Bitcoin, it aligns perfectly with a stacking mentality.",
        },
        {
          id: "lightning-integration",
          title: "Lightning Network & Bitcoin Transfers",
          content:
            "The Fold Card integrates with the Bitcoin Lightning Network, enabling instant and near-free Bitcoin transfers. You can withdraw your earned Bitcoin from your Fold account to any Lightning-compatible wallet in seconds, without waiting for on-chain confirmations or paying significant transaction fees. This is a major advantage over cards that only support on-chain withdrawals, which can be slow and expensive during periods of network congestion. Lightning integration also enables receiving Bitcoin from external sources into your Fold account. The app includes a built-in Lightning-capable wallet for managing your balance, sending payments, and generating invoices. For users already embedded in the Lightning Network ecosystem, the Fold Card provides a seamless bridge between Bitcoin savings and everyday spending.",
        },
        {
          id: "gift-cards-ecosystem",
          title: "Gift Cards & Extended Earning",
          content:
            "Beyond the debit card itself, the Fold app offers a gift card marketplace where you can purchase gift cards from major retailers and earn additional Bitcoin rewards. Available brands include Amazon, Walmart, Target, Starbucks, Uber, and dozens of others. Gift card purchases often carry higher Bitcoin reward rates than standard card transactions, making them an effective way to maximize your BTC earnings on planned purchases. For example, purchasing a $100 Amazon gift card through Fold might earn 3-5% back in Bitcoin, significantly more than the standard card reward rate. The gift card balance is delivered instantly and can be used immediately. This extended earning ecosystem makes Fold more than just a debit card; it becomes a comprehensive Bitcoin rewards platform for daily life.",
        },
        {
          id: "bank-connection",
          title: "Bank Connection & Funding Model",
          content:
            "Unlike most crypto cards that require you to hold and spend cryptocurrency, the Fold Card connects to your existing bank account. When you make a purchase, the card draws USD from your linked bank account, just like a traditional debit card. The Bitcoin rewards are then earned on top of this standard spending. This means you do not need to own any cryptocurrency to start using the Fold Card and earning Bitcoin. The bank connection is established through a secure Plaid integration, and multiple bank accounts can be linked. This model eliminates the friction of loading a card balance, converting crypto, or managing exchange accounts. It also means that using the Fold Card does not trigger any crypto-to-fiat conversions, avoiding the tax implications that affect users of crypto debit cards like the Coinbase Card.",
        },
      ]}
      fees={{
        "Annual Fee (Free Tier)": "Free",
        "Annual Fee (Fold+)": "$150/year or $14.99/month",
        "Transaction Fee": "0% on all purchases",
        "ATM Withdrawal Fee": "$2.50 per domestic withdrawal",
        "Foreign Transaction Fee": "Up to 3%",
        "Card Replacement Fee": "$5",
        "Monthly Maintenance Fee": "None",
        "Lightning Withdrawal Fee": "Near-zero (Lightning Network fees)",
        "On-Chain Withdrawal Fee": "Network fee only",
      }}
      security={[
        "Bank account connection secured through Plaid with bank-grade encryption",
        "Bitcoin rewards held in Fold's custodial wallet with institutional security",
        "Two-factor authentication for account login and withdrawals",
        "Instant card freeze and unfreeze through the Fold app",
        "Push notifications for every card transaction",
        "PIN protection and chip security for in-store transactions",
        "Lightning Network withdrawals provide an additional layer of privacy",
      ]}
      features={[
        "Bitcoin-only rewards on every purchase via gamified spin-the-wheel mechanic",
        "Fold+ subscription with guaranteed 1.5% minimum Bitcoin back",
        "Daily free spin for Bitcoin rewards even without purchases",
        "Lightning Network integration for instant, low-fee Bitcoin withdrawals",
        "Gift card marketplace with enhanced Bitcoin reward rates from major retailers",
        "Connects to existing bank account with no crypto required to start",
        "Referral program earning Bitcoin for both referrer and referee",
        "No tax implications from crypto-to-fiat conversions during spending",
      ]}
      faqs={[
        {
          question: "Do I need to own Bitcoin to use the Fold Card?",
          answer:
            "No. The Fold Card connects to your existing bank account and spends USD. You earn Bitcoin as rewards on top of your normal spending. No crypto ownership or exchange account is required to get started.",
        },
        {
          question: "How much Bitcoin can I earn with the spin-the-wheel?",
          answer:
            "Reward amounts vary with each spin. Free-tier users average approximately 0.5% back in Bitcoin, while Fold+ subscribers earn a guaranteed minimum of 1.5% with potential for more. The wheel occasionally awards larger prizes, including whole Bitcoin in rare cases.",
        },
        {
          question: "Is the $150 Fold+ subscription worth it?",
          answer:
            "If you spend more than roughly $10,000 per year on the card, the guaranteed 1.5% back ($150+) will cover the subscription cost. Additional benefits like enhanced wheel spins and higher gift card rewards increase the value further for active users.",
        },
        {
          question: "Can I withdraw my Bitcoin from the Fold app?",
          answer:
            "Yes. You can withdraw your earned Bitcoin to any external wallet using either the Lightning Network (instant and nearly free) or on-chain Bitcoin transfer (standard network fees apply).",
        },
        {
          question: "Can I earn rewards in Ethereum or other cryptocurrencies?",
          answer:
            "No. Fold is a Bitcoin-only platform. All rewards, bonuses, and promotional incentives are paid exclusively in Bitcoin. There is no option to earn altcoins or stablecoins.",
        },
        {
          question: "Does using the Fold Card trigger a taxable event?",
          answer:
            "No. Since the Fold Card spends USD from your bank account and does not convert cryptocurrency, there is no taxable crypto disposition when making purchases. However, the Bitcoin rewards you earn may be considered taxable income, and any later sale of that Bitcoin may incur capital gains tax.",
        },
      ]}
      relatedReviews={[
        { name: "Rain Card", slug: "rain-card" },
        { name: "Coinbase Card", slug: "coinbase-card" },
        { name: "BitPay Card", slug: "bitpay-card" },
        { name: "Crypto.com Visa", slug: "crypto-com-visa" },
      ]}
      relatedGuides={[
        { title: "Best Crypto Cards", href: "/crypto-cards/best" },
        { title: "Best Crypto Rewards Cards", href: "/crypto-cards/best/rewards" },
        { title: "How to Spend Crypto", href: "/spending/learn/spending-crypto" },
      ]}
    />
  );
}
