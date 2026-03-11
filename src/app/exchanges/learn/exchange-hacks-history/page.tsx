import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `History of Crypto Exchange Hacks (${CURRENT_YEAR}): Lessons Learned`,
  description: "A comprehensive history of major crypto exchange hacks and security breaches. Learn what went wrong, how much was lost, and how to protect yourself.",
};

const toc = [
  { id: "overview", title: "Overview of Exchange Hacks", level: 2 },
  { id: "major-hacks", title: "Major Exchange Hacks Timeline", level: 2 },
  { id: "common-vectors", title: "Common Attack Vectors", level: 2 },
  { id: "industry-response", title: "How the Industry Responded", level: 2 },
  { id: "protect-yourself", title: "How to Protect Yourself", level: 2 },
];

const faqs = [
  { question: "How much has been stolen from crypto exchanges?", answer: "Over $6 billion has been stolen from centralized crypto exchanges since 2011. The largest single hack was Mt. Gox (850,000 BTC, worth billions at current prices). The frequency and severity of exchange hacks has decreased as security practices have improved, but they continue to occur." },
  { question: "Will I be reimbursed if my exchange gets hacked?", answer: "It depends on the exchange. Major exchanges like Binance (SAFU fund) and Coinbase (insurance) may reimburse users. Smaller exchanges may not be able to. Mt. Gox creditors waited over a decade for partial reimbursement. Never keep more on an exchange than you can afford to lose." },
  { question: "Are decentralized exchanges safer from hacks?", answer: "DEXs eliminate custodial risk because you maintain control of your keys. However, DEXs can still be exploited through smart contract vulnerabilities, oracle manipulation, or frontend attacks. The risk profile is different, not necessarily lower." },
];

export default function ExchangeHacksHistoryPage() {
  return (
    <LearnPageLayout
      title="History of Crypto Exchange Hacks: Lessons Learned"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="14 min"
      intro="The history of cryptocurrency is punctuated by devastating exchange hacks that have cost users billions of dollars. From Mt. Gox in 2014 to modern exploits, each incident has driven improvements in exchange security practices. Understanding this history helps you assess exchange risk and take appropriate precautions with your own assets."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Proof of Reserves", href: "/exchanges/learn/proof-of-reserves", category: "Exchanges" },
        { title: "Exchange Security Tips", href: "/exchanges/learn/exchange-security-tips", category: "Exchanges" },
        { title: "How to Choose an Exchange", href: "/exchanges/learn/how-to-choose-exchange", category: "Exchanges" },
      ]}
    >
      <h2 id="overview">Overview of Exchange Hacks</h2>
      <p>
        Since the early days of cryptocurrency, centralized exchanges have been prime targets
        for hackers. Exchanges hold large pools of customer funds in relatively concentrated
        infrastructure, making them attractive targets. The crypto industry has learned painful
        lessons from each major breach, leading to the security standards we see today.
      </p>
      <p>
        The good news is that exchange security has improved dramatically. Cold storage standards,
        multi-signature requirements, proof of reserves, and insurance funds are now common.
        However, no exchange is completely immune to attack, which is why self-custody remains
        the gold standard for long-term holdings.
      </p>

      <h2 id="major-hacks">Major Exchange Hacks Timeline</h2>
      <p>
        Mt. Gox (2014) was the most devastating exchange hack, with approximately 850,000 Bitcoin
        stolen. The exchange handled over 70% of global Bitcoin transactions at its peak. The
        hack resulted from a combination of poor security practices, including inadequate cold
        storage and lack of proper auditing systems.
      </p>
      <p>
        Bitfinex (2016) lost approximately 120,000 BTC through a sophisticated multi-signature
        wallet exploit. Coincheck (2018) lost $530 million in NEM tokens stored in a hot wallet
        without multi-sig protection. KuCoin (2020) lost $280 million but recovered most funds
        through cooperation with project teams who froze stolen tokens.
      </p>
      <p>
        The FTX collapse (2022) was different from traditional hacks. Billions in customer funds
        were misappropriated by exchange leadership. This demonstrated that even large, seemingly
        reputable exchanges can fail from internal malfeasance rather than external attacks.
      </p>

      <h2 id="common-vectors">Common Attack Vectors</h2>
      <p>
        Hot wallet compromises remain the most common attack vector, where hackers gain access
        to private keys of internet-connected wallets. Social engineering attacks target exchange
        employees to gain internal access. Supply chain attacks compromise third-party software
        used by exchanges. SIM swapping has been used to bypass two-factor authentication on
        employee accounts.
      </p>

      <h2 id="industry-response">How the Industry Responded</h2>
      <p>
        The industry responded with significant improvements. Cold storage standards now require
        the vast majority of funds to be held offline. Multi-signature wallets require multiple
        independent approvals for large transactions. Proof of reserves became standard after
        FTX. Insurance funds (like Binance SAFU) provide a safety net for users.
      </p>

      <h2 id="protect-yourself">How to Protect Yourself</h2>
      <p>
        Use reputable, regulated exchanges with strong security track records. Enable all
        available security features including hardware-based 2FA. Never keep more on an exchange
        than you need for active trading. Move long-term holdings to a hardware wallet. Diversify
        across multiple exchanges to limit exposure to any single platform failure.
      </p>
      <p>
        Check whether your exchange publishes proof of reserves, carries insurance, and maintains
        a security fund. These indicators suggest the exchange takes security seriously and has
        mechanisms to protect users in case of an incident.
      </p>
    </LearnPageLayout>
  );
}
