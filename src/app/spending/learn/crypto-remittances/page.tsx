import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Sending Remittances with Crypto (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how to send money abroad using Bitcoin and stablecoins. Compare crypto remittance platforms, fees, and corridors versus traditional services like Western Union.",
};

export default function CryptoRemittancesPage() {
  return (
    <LearnPageLayout
      title="Sending Remittances with Crypto"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="9 min"
      intro="Cryptocurrency is transforming the $800 billion global remittance industry by offering faster, cheaper alternatives to traditional money transfer services. Where Western Union and MoneyGram charge 5-10% fees and take days, crypto remittance services can transfer value across borders in minutes for a fraction of the cost. This guide covers how crypto remittances work, the best platforms, and which corridors benefit most."
      toc={[
        { id: "why-crypto-remittances", title: "why-crypto-remittances", level: 2 },
        { id: "why-use-crypto-for-remittances", title: "Why Use Crypto for Remittances", level: 2 },
        { id: "platforms", title: "platforms", level: 2 },
        { id: "crypto-remittance-platforms", title: "Crypto Remittance Platforms", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-crypto-remittances-work", title: "How Crypto Remittances Work", level: 2 },
        { id: "best-corridors", title: "best-corridors", level: 2 },
        { id: "best-remittance-corridors", title: "Best Remittance Corridors", level: 2 },
        { id: "challenges", title: "challenges", level: 2 },
        { id: "challenges-and-considerations", title: "Challenges and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "How much can I save using crypto for remittances?", answer: "Savings vary by corridor but can be substantial. Traditional services charge 5-10% while crypto platforms typically charge 1-3%. On a $500 remittance you might save $20-40 per transfer. Over a year of monthly remittances, savings can reach $250-500." },
        { question: "Does the recipient need a crypto wallet?", answer: "Not necessarily. Many platforms convert to local currency and deliver via bank deposit, mobile money, or cash pickup. Strike converts Bitcoin to local fiat automatically. Direct wallet-to-wallet transfers using stablecoins are the cheapest option." },
        { question: "Is it legal to send remittances with crypto?", answer: "In most countries sending money via crypto is legal, but regulations vary. Both sender and recipient should verify local regulations. Using licensed remittance platforms that comply with money transmission laws provides the safest legal framework." },
      ]}
      relatedArticles={[
        { title: "Cross-Border Payments", href: "/spending/learn/cross-border-payments", category: "Spending" },
        { title: "Stablecoin Payments", href: "/spending/learn/stablecoin-payments", category: "Spending" },
        { title: "Lightning Network Payments", href: "/spending/learn/lightning-network-payments", category: "Spending" },
      ]}
    >
      <h2 id="why-crypto-remittances">Why Use Crypto for Remittances</h2>
      <p>Traditional remittance services charge an average of 6.2% globally, with some corridors reaching 10-15%. These fees disproportionately affect low-income workers sending money home. Crypto remittances reduce costs to 1-3% while improving speed from days to minutes. Bitcoin and stablecoins operate 24/7 without bank holidays. There is no need for either party to have a bank account, making crypto accessible to the 1.7 billion unbanked adults worldwide. Blockchain transparency provides clear confirmation of delivery.</p>

      <h2 id="platforms">Crypto Remittance Platforms</h2>
      <p>Strike uses Bitcoin and Lightning Network as payment rails while allowing users to send and receive in local fiat currencies. The recipient does not need to understand Bitcoin. Bitso processes billions in remittances on the US-Mexico corridor. Chipper Cash serves African markets with crypto-powered transfers. Coins.ph serves the Philippines market with crypto-to-peso conversion. Wise has begun integrating crypto alongside traditional transfers. Each platform specializes in specific corridors where they have local banking relationships.</p>

      <h2 id="how-it-works">How Crypto Remittances Work</h2>
      <p>The process has three steps. The sender deposits fiat or crypto into the remittance platform. The platform converts to cryptocurrency and transfers across borders via blockchain in minutes rather than the days required by correspondent banking. The platform then converts back to local currency and delivers via bank deposit, mobile money, or cash pickup. The entire process typically takes 10-30 minutes. For users comfortable with crypto, direct wallet-to-wallet stablecoin transfers eliminate all intermediary costs.</p>

      <h2 id="best-corridors">Best Remittance Corridors</h2>
      <p>Crypto remittances provide the most value where traditional fees are highest and banking infrastructure is weakest. The US-to-Philippines corridor sees significant crypto adoption through Coins.ph. The US-to-Mexico corridor benefits from Bitso processing over $1 billion quarterly. Sub-Saharan African corridors where traditional fees often exceed 8% see growing crypto adoption. El Salvador's Bitcoin adoption has made it a key destination. South Asian corridors serving India, Bangladesh, and Nepal see increasing competition from crypto.</p>

      <h2 id="challenges">Challenges and Considerations</h2>
      <p>Despite advantages, crypto remittances face challenges. Volatility risk exists during conversion unless stablecoins are used throughout. Regulatory uncertainty in some countries can make cash-out difficult. Recipient digital literacy and smartphone access may limit usability in rural areas. On-ramp and off-ramp availability varies significantly by country. Exchange rate spreads on conversion steps can erode savings. Always compare total end-to-end cost including all fees against traditional services for your specific corridor.</p>
    </LearnPageLayout>
  );
}
