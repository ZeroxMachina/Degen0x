import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Satoshi? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what a satoshi is, how Bitcoin denominations work, and why the smallest unit of Bitcoin matters for adoption.",
};

export default function SatoshiPage() {
  return (
    <LearnPageLayout
      title="What Is a Satoshi?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="A satoshi (sat) is the smallest unit of Bitcoin, equal to 0.00000001 BTC (one hundred-millionth of a Bitcoin). Named after Bitcoin's pseudonymous creator, Satoshi Nakamoto, satoshis make Bitcoin practical for small transactions even as the price of a whole Bitcoin rises. Pricing things in sats rather than BTC helps people understand that you do not need to buy a whole Bitcoin to participate."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-satoshi", title: "What Is a Satoshi?", level: 2 },
        { id: "denominations", title: "denominations", level: 2 },
        { id: "bitcoin-denominations", title: "Bitcoin Denominations", level: 2 },
        { id: "stacking-sats", title: "stacking-sats", level: 2 },
        { id: "stacking-sats", title: "Stacking Sats", level: 2 },
        { id: "sat-standard", title: "sat-standard", level: 2 },
        { id: "the-sat-standard", title: "The Sat Standard", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-satoshis-matter", title: "Why Satoshis Matter", level: 2 }
      ]}
      faqs={[
        {
          question: "How many satoshis are in one Bitcoin?",
          answer:
            "There are 100,000,000 (100 million) satoshis in one Bitcoin. This is similar to how there are 100 cents in a dollar, except with many more decimal places. With Bitcoin's maximum supply of 21 million BTC, the total number of satoshis that will ever exist is 2.1 quadrillion (2,100,000,000,000,000).",
        },
        {
          question: "Can I send fractions of a satoshi?",
          answer:
            "On Bitcoin's base layer, a satoshi is the minimum unit. However, the Lightning Network (Bitcoin's Layer 2) can handle payments smaller than a satoshi, called millisatoshis (1/1000 of a sat). This enables micropayments that would be impractical on the base layer due to transaction fees.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Gwei?", href: "/learn/glossary/gwei", category: "Glossary" },
        { title: "What Is Bitcoin Dominance?", href: "/learn/glossary/bitcoin-dominance", category: "Glossary" },
        { title: "What Is a Genesis Block?", href: "/learn/glossary/genesis-block", category: "Glossary" },
        { title: "What Is HODL?", href: "/learn/glossary/hodl", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Satoshi?</h2>
      <p>
        A satoshi is the smallest indivisible unit of Bitcoin, representing 0.00000001 BTC. It is named after Satoshi Nakamoto, the pseudonymous individual or group who created Bitcoin. Just as a dollar can be divided into 100 cents, a Bitcoin can be divided into 100 million satoshis. This divisibility is built into Bitcoin&apos;s protocol and ensures the currency remains usable regardless of how high the BTC price rises.
      </p>

      <h2 id="denominations">Bitcoin Denominations</h2>
      <p>
        While satoshi is the smallest and most commonly referenced sub-unit, Bitcoin has other denominations. A millibitcoin (mBTC) equals 0.001 BTC or 100,000 sats. A microbitcoin (bits) equals 0.000001 BTC or 100 sats. In practice, people most commonly use BTC for large amounts and sats for small amounts. Some wallets and exchanges offer the option to display balances in satoshis for clarity.
      </p>

      <h2 id="stacking-sats">Stacking Sats</h2>
      <p>
        &quot;Stacking sats&quot; is a popular expression in the Bitcoin community meaning to steadily accumulate small amounts of Bitcoin over time. The phrase emphasizes that you do not need large sums to start saving in Bitcoin. Through regular small purchases (dollar-cost averaging), anyone can gradually build a Bitcoin position measured in satoshis. This philosophy democratizes Bitcoin ownership and makes it accessible at any budget level.
      </p>

      <h2 id="sat-standard">The Sat Standard</h2>
      <p>
        Some Bitcoin advocates promote pricing goods and services in sats rather than BTC. When Bitcoin costs $50,000, saying something costs &quot;0.0002 BTC&quot; is unintuitive, but &quot;20,000 sats&quot; is easier to grasp. Pricing in sats also helps newcomers understand that Bitcoin is highly divisible. Several platforms and wallets have adopted sat-denominated displays to make Bitcoin more approachable for everyday transactions.
      </p>

      <h2 id="why-it-matters">Why Satoshis Matter</h2>
      <p>
        Satoshis address the psychological barrier of Bitcoin&apos;s high per-unit price. Many potential buyers mistakenly believe they need to purchase a whole Bitcoin. Understanding satoshis makes it clear that anyone can buy a meaningful amount of Bitcoin. As Bitcoin&apos;s value grows, satoshis become increasingly relevant as the practical unit for daily transactions, tipping, and micropayments.
      </p>
    </LearnPageLayout>
  );
}
