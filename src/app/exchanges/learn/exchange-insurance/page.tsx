import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How Exchange Insurance Works (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how crypto exchange insurance works. FDIC coverage, SAFU funds, custodial insurance, what's covered, and how to protect your crypto assets.",
};

export default function ExchangeInsurance() {
  return (
    <LearnPageLayout
      title="How Exchange Insurance Works"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="8 min read"
      intro="Crypto exchange insurance is one of the most misunderstood aspects of the industry. Some exchanges offer robust protection while others provide minimal coverage. After high-profile collapses like FTX, understanding exactly what is and is not insured has become essential for every crypto user. This guide breaks down the different types of exchange insurance and their limitations."
      toc={[
        { id: "types", title: "types", level: 2 },
        { id: "types-of-exchange-insurance", title: "Types of Exchange Insurance", level: 2 },
        { id: "fdic", title: "fdic", level: 2 },
        { id: "fdic-and-fiat-insurance", title: "FDIC and Fiat Insurance", level: 2 },
        { id: "hot-wallet", title: "hot-wallet", level: 2 },
        { id: "hot-wallet-insurance", title: "Hot Wallet Insurance", level: 2 },
        { id: "self-insurance", title: "self-insurance", level: 2 },
        { id: "self-insurance-funds", title: "Self-Insurance Funds", level: 2 },
        { id: "not-covered", title: "not-covered", level: 2 },
        { id: "what-is-not-covered", title: "What Is NOT Covered", level: 2 },
        { id: "evaluating", title: "evaluating", level: 2 },
        { id: "evaluating-exchange-coverage", title: "Evaluating Exchange Coverage", level: 2 },
        { id: "protecting", title: "protecting", level: 2 },
        { id: "protecting-yourself", title: "Protecting Yourself", level: 2 }
      ]}
      faqs={[
        { question: "Is crypto insured like bank deposits?", answer: "No. Crypto itself is not FDIC insured. However, USD cash balances held at certain US exchanges may be FDIC insured up to $250,000 through partner banks. This only covers the cash, not your crypto holdings." },
        { question: "What does Binance SAFU cover?", answer: "The SAFU fund covers losses from certain security breaches at the exchange level. It has been valued at over $1 billion. However, it does not cover individual account compromises from weak user security." },
        { question: "Will I be reimbursed if an exchange is hacked?", answer: "It depends on the exchange and circumstances. Exchanges with insurance or reserve funds may cover exchange-level breaches. However, if your individual account was compromised due to your own security practices, reimbursement is unlikely." },
        { question: "Should insurance affect my exchange choice?", answer: "Yes, insurance coverage should be one factor in your decision. Exchanges with strong insurance programs (Coinbase, Gemini, Binance) provide additional protection. However, it should not replace proper personal security practices." },
      ]}
      relatedArticles={[
        { title: "Exchange Security Features", href: "/exchanges/learn/exchange-security-features", category: "Exchanges" },
        { title: "How to Choose a Crypto Exchange", href: "/exchanges/learn/how-to-choose-exchange", category: "Exchanges" },
        { title: "Exchange Withdrawal Guide", href: "/exchanges/learn/exchange-withdrawal-guide", category: "Exchanges" },
      ]}
    >
      <section id="types">
        <h2>Types of Exchange Insurance</h2>
        <p>Exchange insurance comes in several forms with varying levels of protection. FDIC insurance covers USD cash balances at US-regulated exchanges through banking partners. Commercial crime insurance covers losses from theft, hacking, and employee fraud. Self-insurance funds like Binance's SAFU pool exchange revenue as an emergency reserve.</p>
        <p>The type and amount of coverage varies dramatically between exchanges. Major US exchanges like Coinbase and Gemini carry the most comprehensive insurance. International exchanges may have limited or no formal insurance, relying instead on internal reserve funds.</p>
        <p>Understanding exactly which assets are covered, under what circumstances, and up to what amounts is crucial. Marketing claims about being "insured" often overstate the actual protection available to individual users.</p>
      </section>

      <section id="fdic">
        <h2>FDIC and Fiat Insurance</h2>
        <p>US-regulated exchanges often hold customer USD deposits at FDIC-insured banks. This means your uninvested cash balance may be insured up to $250,000 per depositor through the Federal Deposit Insurance Corporation. Coinbase, Gemini, and Kraken offer this protection on USD balances.</p>
        <p>Critically, FDIC insurance covers only cash deposits, never cryptocurrency. If Bitcoin drops 50% or your crypto is stolen, FDIC insurance provides zero protection. The insurance only applies if the partner bank fails, not if the exchange itself faces problems.</p>
        <p>Some exchanges use multiple banking partners to potentially provide coverage beyond $250,000 through sweep programs. Verify whether your exchange specifically states FDIC coverage and understand it protects cash only.</p>
      </section>

      <section id="hot-wallet">
        <h2>Hot Wallet Insurance</h2>
        <p>Some exchanges carry commercial insurance policies covering crypto assets in hot wallets. Coinbase maintains insurance covering a portion of digital assets held in hot storage against theft including cybersecurity breaches. Gemini carries similar coverage as a New York trust company.</p>
        <p>Hot wallet insurance typically covers exchange-level security failures like external hacks or insider theft. The coverage amounts are often a fraction of total assets held, as insurers are cautious about crypto-specific risk. Coverage terms and limits are not always publicly disclosed in detail.</p>
        <p>Cold storage assets are generally considered more secure and may not require the same insurance coverage. The combination of cold storage for the majority of funds plus hot wallet insurance for the actively used portion represents the industry's current best practice.</p>
      </section>

      <section id="self-insurance">
        <h2>Self-Insurance Funds</h2>
        <p>Binance's SAFU (Secure Asset Fund for Users) is the most prominent self-insurance fund. Binance allocates 10% of trading fees to this emergency reserve, which was valued at over $1 billion. The fund was used after the 2019 security incident to reimburse affected users.</p>
        <p>Other exchanges maintain similar reserve funds without formal names. OKX, Bitget, and other major exchanges have created emergency funds following the industry trend toward greater user protection after the FTX collapse.</p>
        <p>Self-insurance funds depend entirely on the exchange's financial health and willingness to pay claims. Unlike regulated insurance, there is no independent third party guaranteeing payment. If the exchange itself becomes insolvent, the self-insurance fund may be insufficient or inaccessible.</p>
      </section>

      <section id="not-covered">
        <h2>What Is NOT Covered</h2>
        <p>Individual account compromises due to weak user security are almost never covered. If someone steals your password and 2FA because you reused credentials or fell for phishing, the exchange will likely not reimburse you. Personal security is your responsibility.</p>
        <p>Market losses and trading losses are never insured. If your leveraged position gets liquidated or a token you hold drops to zero, no insurance covers these investment risks. Insurance protects against theft and security failures, not market risk.</p>
        <p>Exchange insolvency may not be covered either. If an exchange goes bankrupt like FTX, user funds may be tied up in bankruptcy proceedings regardless of insurance claims. Insurance policies typically do not cover the exchange's own financial mismanagement or fraud.</p>
      </section>

      <section id="evaluating">
        <h2>Evaluating Exchange Coverage</h2>
        <p>Look for exchanges that clearly disclose their insurance arrangements, including coverage types, limits, and what qualifies for claims. Vague statements about being "insured" without details are a yellow flag.</p>
        <p>Check whether the exchange publishes proof of reserves showing they hold sufficient assets. Regulated exchanges under jurisdictions like the US, EU, or Japan typically have stronger oversight requirements that provide additional protection layers.</p>
        <p>Consider the exchange's track record with security incidents. How they handled past breaches, whether users were made whole, and whether they maintain transparent communication about security matters all indicate how they would handle future incidents.</p>
      </section>

      <section id="protecting">
        <h2>Protecting Yourself</h2>
        <p>Do not rely solely on exchange insurance. The safest approach is minimizing exchange exposure by keeping only actively traded amounts online. Transfer long-term holdings to hardware wallets where you control the private keys.</p>
        <p>Diversify across multiple exchanges to reduce single-point-of-failure risk. If one exchange experiences issues, your assets on other platforms remain safe. This is especially important for large portfolios.</p>
        <p>Enable every security feature your exchange offers: hardware 2FA, withdrawal whitelists, anti-phishing codes, and address book restrictions. Strong personal security is always more reliable than relying on insurance to recover from a preventable breach.</p>
      </section>
    </LearnPageLayout>
  );
}
