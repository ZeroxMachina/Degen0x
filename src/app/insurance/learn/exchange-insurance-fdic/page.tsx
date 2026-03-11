import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";

export const metadata: Metadata = { title: "Exchange Insurance & FDIC: What Crypto Users Need to Know (2026)", description: "Understand how exchange insurance works, the difference between FDIC coverage and crypto insurance, and how to protect your funds on centralized exchanges." };

export default function ExchangeInsuranceFdicPage() {
  return (
    <LearnPageLayout title="Exchange Insurance & FDIC for Crypto" categoryName="Insurance" categorySlug="insurance" readTime="7 min"
      intro="Many crypto users assume their exchange deposits are insured like bank accounts, but the reality is more complex. This guide explains what protections actually exist for funds held on centralized exchanges, the limitations of FDIC coverage in the crypto context, and how to supplement with crypto-native insurance."
      toc={[{ id: "fdic-limits", title: "FDIC Coverage Limits", level: 2 }, { id: "exchange-insurance", title: "Exchange Insurance Funds", level: 2 }, { id: "crypto-cover", title: "Crypto-Native Exchange Cover", level: 2 }, { id: "protecting-funds", title: "Protecting Your Exchange Funds", level: 2 }]}
      faqs={[
        { question: "Are my crypto holdings on exchanges FDIC insured?", answer: "No. FDIC insurance only covers US dollar deposits at FDIC-member banks, up to $250,000 per depositor. Cryptocurrency holdings are not covered by FDIC, even if the exchange partners with an FDIC-insured bank for fiat deposits." },
        { question: "What happened with exchange insurance during the FTX collapse?", answer: "FTX did not have adequate insurance or reserves to cover customer deposits. Users who held assets on FTX faced significant losses. This event highlighted the importance of not relying solely on exchange promises and considering independent insurance coverage." },
        { question: "Should I keep funds on an exchange or self-custody?", answer: "Self-custody eliminates exchange counterparty risk but introduces personal security responsibility. Many users split their holdings: active trading funds on exchanges with insurance consideration, and long-term holdings in self-custody with hardware wallets. The right balance depends on your trading activity and security expertise." },
      ]}
      relatedArticles={[{ title: "What Is Crypto Insurance?", href: "/insurance/learn/what-is-crypto-insurance", category: "Insurance" }, { title: "Best Exchange Cover", href: "/insurance/best/exchange-cover", category: "Insurance" }]}
    >
      <h2 id="fdic-limits">FDIC Coverage and Its Limits</h2>
      <p>The Federal Deposit Insurance Corporation (FDIC) insures deposits at member banks up to $250,000 per depositor, per bank. Some crypto exchanges partner with FDIC-insured banks for their fiat currency services, meaning US dollar balances held in the exchange's partner bank account may receive FDIC protection. However, this protection only applies to the fiat currency portion, not to any cryptocurrency holdings. When a crypto exchange advertises FDIC insurance, it is referring exclusively to uninvested USD balances. Your Bitcoin, Ethereum, stablecoins, and other digital assets have zero FDIC protection. This distinction is critical and has been a source of confusion for many users, particularly after the SEC clarified that crypto assets on exchanges are not considered depositor assets in bankruptcy proceedings.</p>

      <h2 id="exchange-insurance">Exchange Insurance Funds</h2>
      <p>Some major exchanges maintain their own insurance funds or reserve pools to cover potential losses from security breaches. Coinbase maintains a crime insurance policy covering digital assets in hot storage. Binance operates the SAFU (Secure Asset Fund for Users) reserve, which has been used to reimburse users after past security incidents. Kraken maintains proof of reserves and security insurance. However, these internal insurance funds have limitations: they may not cover the full value of all user deposits, they are not regulated like traditional insurance, their terms can change, and they may be insufficient in catastrophic scenarios like the exchange failing entirely. The FTX collapse demonstrated that exchange promises about fund safety are only as reliable as the exchange itself.</p>

      <h2 id="crypto-cover">Crypto-Native Exchange Cover</h2>
      <p>Decentralized insurance protocols offer exchange cover that protects against centralized exchange failures independent of the exchange itself. Nexus Mutual offers custody cover for specific exchanges, protecting against events where the exchange halts withdrawals for an extended period due to a hack or insolvency. InsurAce provides similar coverage across multiple exchanges. These covers are backed by decentralized capital pools separate from the exchanges, meaning they can pay claims even if the exchange becomes insolvent. Premium costs for exchange cover typically range from 2-5% annually and depend on the perceived risk of each specific exchange. Exchanges with strong security track records and transparent reserves tend to have lower premiums.</p>

      <h2 id="protecting-funds">Protecting Your Exchange Funds</h2>
      <p>A comprehensive protection strategy combines multiple approaches. First, minimize the amount held on any single exchange to only what you need for active trading. Diversify across multiple reputable exchanges rather than concentrating on one. Enable all available security features including two-factor authentication, withdrawal address whitelisting, and anti-phishing codes. Monitor exchange health indicators like proof of reserves reports, regulatory compliance, and community sentiment. For funds that must remain on exchanges, consider purchasing crypto-native exchange cover from providers like Nexus Mutual. For long-term holdings, move them to self-custody using hardware wallets. Stay informed about exchange regulatory developments, as increased regulation may eventually bring more formal insurance requirements to the industry.</p>
    </LearnPageLayout>
  );
}
