import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Custody Insurance Guide (${CURRENT_YEAR}) - Protect Your Assets | ${SITE_NAME}`,
  description: `Learn about crypto custody insurance in ${CURRENT_YEAR}. How custody insurance works, what it covers, top providers, and whether you need it for your crypto holdings.`,
  alternates: { canonical: "/insurance/learn/crypto-custody-insurance" },
};

const toc = [
  { id: "what-is-custody-insurance", title: "What Is Crypto Custody Insurance?", level: 2 },
  { id: "how-it-works", title: "How Custody Insurance Works", level: 2 },
  { id: "coverage-types", title: "Types of Coverage", level: 2 },
  { id: "exchange-insurance", title: "Exchange Insurance Policies", level: 2 },
  { id: "do-you-need-it", title: "Do You Need Custody Insurance?", level: 2 },
];

const faqs = [
  { question: "Does Coinbase insure my crypto?", answer: "Coinbase maintains crime insurance that covers a portion of digital assets held in hot storage against losses from security breaches, hacking, or employee theft. However, this insurance does not cover losses from your personal account being compromised (phishing, password theft). Crypto held on Coinbase is not FDIC insured. Only USD balances up to $250,000 are covered by FDIC through partner banks." },
  { question: "What does crypto custody insurance cover?", answer: "Crypto custody insurance typically covers theft of private keys, internal fraud by custody employees, physical destruction of storage devices, hacking of hot wallets, and sometimes losses from operational errors. It generally does not cover market losses, individual account compromises due to user negligence, regulatory actions, or smart contract failures." },
  { question: "How much does crypto custody insurance cost?", answer: "Premiums for institutional crypto custody insurance typically range from 0.5% to 2% of the insured value annually, depending on the security measures in place, the amount covered, and the assets held. Retail investors cannot typically purchase custody insurance directly but benefit indirectly when they use insured exchanges and custodians." },
  { question: "Is crypto insured like bank deposits?", answer: "No. Cryptocurrency is not covered by FDIC or SIPC insurance, which protect traditional bank deposits and brokerage accounts. Some exchanges carry private insurance policies, but coverage varies and is typically limited to a fraction of total assets held. This is a fundamental difference between keeping money in a bank versus holding crypto on an exchange." },
  { question: "What happens if an insured exchange gets hacked?", answer: "If an exchange with custody insurance is hacked, the insurance policy would cover losses up to the policy limit. Users may be reimbursed for stolen crypto depending on the policy terms and coverage amount relative to total losses. However, insurance claims take time to process, and users may face delays in accessing their funds during the investigation and claims process." },
];

const relatedArticles = [
  { title: "DeFi Hack Protection", href: "/insurance/learn/defi-hack-protection", category: "Insurance" },
  { title: "Hot vs Cold Wallets", href: "/wallets/learn/hot-vs-cold-wallets", category: "Wallets" },
  { title: "Crypto Inheritance Planning", href: "/long-term/learn/crypto-inheritance", category: "Long-Term" },
];

export default function CryptoCustodyInsurancePage() {
  return (
    <LearnPageLayout
      title="Crypto Custody Insurance: Protecting Your Digital Assets"
      categoryName="Crypto Insurance"
      categorySlug="insurance"
      readTime="8 min"
      intro="Crypto custody insurance protects against the loss of digital assets held by exchanges, custodians, and institutional storage providers. Unlike traditional bank deposits protected by FDIC insurance, crypto assets require specialized coverage. This guide explains how custody insurance works, what it covers, and how to evaluate whether your assets are adequately protected."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="what-is-custody-insurance">What Is Crypto Custody Insurance?</h2>
      <p>
        Crypto custody insurance is a specialized insurance product that covers the loss of
        digital assets held by a custodian (an exchange, custody provider, or institutional
        storage service). It protects against specific risks including hacking, theft, internal
        fraud, and physical loss of private keys. As crypto assets have grown in value, the
        demand for professional custody insurance has increased dramatically.
      </p>
      <p>
        Unlike FDIC insurance for bank deposits (which is government-backed and automatic),
        crypto custody insurance is provided by private insurers and varies significantly between
        providers. Coverage limits, policy terms, and the specific risks covered differ from one
        custodian to another. Understanding what is and is not covered by your custodian&apos;s
        insurance policy is essential for managing your overall crypto risk.
      </p>

      <h2 id="how-it-works">How Custody Insurance Works</h2>
      <p>
        Crypto custody insurers evaluate the security practices of the custodian before issuing
        a policy. This includes reviewing cold storage procedures, key management systems,
        employee access controls, physical security, and incident response plans. Higher security
        standards result in lower premiums and higher coverage limits. The insurer may require
        regular audits and compliance checks as conditions of maintaining coverage.
      </p>
      <p>
        When a covered loss occurs, the custodian files a claim with the insurer. The insurer
        investigates the incident to determine if it falls within the policy terms. If approved,
        the insurer reimburses the custodian, who then makes users whole. This process can take
        weeks to months depending on the complexity of the incident. Coverage typically applies
        to the portfolio as a whole, not to individual user accounts.
      </p>

      <h2 id="coverage-types">Types of Coverage</h2>
      <p>
        Hot wallet insurance covers crypto assets stored in internet-connected systems. This is
        the highest-risk category and typically has the most limited coverage. Most exchanges
        keep a small percentage of total assets in hot wallets and insure this portion specifically.
        Cold storage insurance covers assets stored offline in hardware security modules, air-gapped
        systems, or physical vaults. Cold storage insurance is easier to obtain and typically
        covers a larger percentage of assets.
      </p>
      <p>
        Crime and theft insurance covers losses from external hacking, internal employee theft,
        and fraud. Some policies also cover errors and omissions, protecting against operational
        mistakes like sending funds to wrong addresses. Comprehensive policies may include
        business interruption coverage for the custodian and third-party liability if client
        losses result in legal action. Review the specific policy type your custodian carries
        to understand your protection level.
      </p>

      <h2 id="exchange-insurance">Exchange Insurance Policies</h2>
      <p>
        Major exchanges maintain varying levels of custody insurance. Coinbase has disclosed
        crime insurance covering digital assets in hot storage. Kraken maintains insurance
        policies though specific details vary. Gemini offers insurance through its custodial
        services. The exact coverage amounts and terms are often not publicly disclosed in full
        detail, making direct comparison difficult.
      </p>
      <p>
        When evaluating an exchange&apos;s insurance coverage, look for public disclosures about the
        insurance provider, coverage limits relative to total assets held, whether hot and cold
        storage are both covered, and whether the policy covers user losses from exchange-side
        security failures. Remember that no exchange insurance covers losses from your own account
        being phished or your personal credentials being stolen.
      </p>

      <h2 id="do-you-need-it">Do You Need Custody Insurance?</h2>
      <p>
        If you hold significant crypto on exchanges or with custodians, custody insurance provides
        an important safety net. Prefer exchanges that maintain insurance policies, especially
        if you keep large balances for trading. However, do not rely on insurance as your primary
        security measure. Self-custody with a hardware wallet eliminates the need for custody
        insurance altogether by removing the custodian from the equation.
      </p>
      <p>
        The most robust approach combines multiple strategies: use insured exchanges for trading
        and fiat conversion, maintain self-custody for long-term holdings, and consider DeFi
        insurance protocols for smart contract coverage. No single insurance product covers all
        crypto risks. Understanding the limits of each type of protection helps you build a
        comprehensive risk management strategy that protects your assets from the most likely
        threat vectors.
      </p>
    </LearnPageLayout>
  );
}
