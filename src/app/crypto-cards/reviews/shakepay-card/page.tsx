import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "Shakepay Card",
  slug: "shakepay-card",
  rating: 4.0,
  description: "Shakepay Card is a Canadian crypto Visa card that earns Bitcoin cashback on all purchases with no fees or minimum balance requirements.",
  pros: ["Bitcoin cashback on every purchase", "No annual or monthly fees", "No foreign transaction fees", "Simple and clean mobile app"],
  cons: ["Only available in Canada", "Bitcoin-only rewards", "Lower cashback rates than some competitors", "Limited advanced features"],
  bestFor: "Canadian users who want a simple, fee-free way to earn Bitcoin on everyday spending",
  affiliateUrl: "https://degen0x.com/go/shakepay",
  category: "crypto-cards",
};

export const metadata: Metadata = {
  title: `Shakepay Card Review (${CURRENT_YEAR}): Bitcoin Cashback for Canadians | ${SITE_NAME}`,
  description: "In-depth Shakepay Card review covering Bitcoin cashback rewards, fees, features, and how it compares to other Canadian crypto cards.",
};

export default function ShakepayCardReview() {
  return (
    <ReviewPage
      product={product}
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      overview="The Shakepay Card is a Visa prepaid card from one of Canada's most popular crypto platforms. It allows Canadian users to earn Bitcoin cashback on every purchase with no annual fees, no monthly fees, and no foreign transaction fees. The card connects to your Shakepay account and can be loaded with Canadian dollars for spending. What makes Shakepay stand out in the Canadian market is its simplicity and focus on Bitcoin rewards. The card is designed for everyday use, with a clean mobile app that tracks your Bitcoin earnings and provides instant notification for every transaction. Shakepay has built a loyal Canadian user base by offering a straightforward proposition: spend normally and accumulate Bitcoin automatically."
      sections={[
        { id: "bitcoin-cashback", title: "Bitcoin Cashback Rewards", content: "The Shakepay Card offers Bitcoin cashback on every purchase made with the card. The base cashback rate is competitive within the Canadian market, and Shakepay occasionally runs promotions that boost the reward rate for limited periods. All rewards are paid in Bitcoin and deposited directly into your Shakepay account. The cashback is calculated on the CAD amount of each transaction and converted to Bitcoin at the current exchange rate. There is no cap on how much Bitcoin you can earn, and rewards are credited quickly after each transaction. The simplicity of the reward structure is a key advantage. There are no rotating categories, no activation requirements, and no tier systems to navigate. Every purchase earns the same rate, making the card predictable and easy to use." },
        { id: "no-fees", title: "Fee-Free Structure", content: "One of the Shakepay Card's strongest features is its complete absence of fees. There is no annual fee, no monthly maintenance fee, and no foreign transaction fee. ATM withdrawals within the Allpoint network are also free. This fee-free structure makes the Shakepay Card particularly attractive for frequent travelers and international online shoppers who would normally pay two to three percent foreign transaction fees on traditional cards. The absence of fees means every dollar of your Bitcoin cashback is pure profit. Many competing crypto cards charge monthly fees, staking requirements, or transaction fees that eat into rewards. Shakepay eliminates all of these, making it one of the most straightforward crypto card offerings available in Canada." },
        { id: "shakepay-ecosystem", title: "Shakepay Ecosystem", content: "The Shakepay Card is part of the broader Shakepay platform, which offers buying, selling, and holding Bitcoin and Ethereum. The app features a shake-to-earn Bitcoin feature where users can literally shake their phone daily to earn a small amount of free Bitcoin, with the amount increasing based on a streak system. The platform also offers peer-to-peer payments between Shakepay users and instant e-Transfer funding in Canadian dollars. The card integrates seamlessly with the app, showing real-time transaction notifications, Bitcoin earnings tracking, and spending analytics. Shakepay is registered as a money services business in Canada and complies with Canadian regulatory requirements, providing a level of legitimacy and trust important for Canadian users." },
        { id: "limitations", title: "Limitations and Considerations", content: "The Shakepay Card is exclusively available to Canadian residents, limiting its audience. The card only offers Bitcoin as a reward option, so users who prefer earning other cryptocurrencies will need to look elsewhere. The cashback rate, while competitive, may be lower than what some premium crypto cards offer in other markets, though the fee-free structure compensates for this. As a prepaid card, it requires loading funds before spending, unlike debit cards that connect directly to a bank account. The card does not offer a credit line, so it cannot help build a credit history. For Canadian users specifically seeking Bitcoin rewards without complexity or fees, the Shakepay Card is an excellent choice, but those wanting higher reward rates may need to consider alternatives that require staking or fee commitments." },
      ]}
      fees={{ "Annual Fee": "None", "Monthly Fee": "None", "Foreign Transaction Fee": "None", "ATM Withdrawal": "Free (Allpoint network)", "Card Replacement": "Free" }}
      security={["Visa network security", "Instant transaction notifications", "Card freeze in app", "Canadian regulatory compliance", "Two-factor authentication"]}
      features={["Bitcoin cashback on all purchases", "No fees of any kind", "Shake-to-earn daily Bitcoin", "Instant transaction notifications", "Peer-to-peer payments", "Lightning Network support"]}
      faqs={[
        { question: "Is the Shakepay Card available outside Canada?", answer: "No, the Shakepay Card is currently only available to Canadian residents. Shakepay is a Canadian-registered money services business and currently serves only the Canadian market." },
        { question: "How much Bitcoin cashback does the Shakepay Card earn?", answer: "The exact cashback rate varies and Shakepay occasionally runs promotional rate increases. The base rate is competitive within the Canadian crypto card market. All rewards are paid in Bitcoin and credited to your Shakepay account shortly after each transaction." },
      ]}
      relatedReviews={[
        { name: "Coinbase Card", slug: "coinbase-card" },
        { name: "Bitpay Card", slug: "bitpay-card" },
      ]}
      relatedGuides={[
        { title: "How Crypto Cards Work", href: "/crypto-cards/learn/how-crypto-cards-work" },
        { title: "Best Crypto Cards Canada", href: "/crypto-cards/best/canada" },
      ]}
    />
  );
}
