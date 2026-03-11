import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Insurance: Protecting Your Digital Assets (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about crypto insurance options: DeFi cover protocols, exchange insurance, smart contract cover, custodial insurance, how claims work, and evaluating coverage for your crypto holdings.",
};

export default function CryptoInsuranceOptionsPage() {
  return (
    <LearnPageLayout
      title="Crypto Insurance: Protecting Your Digital Assets"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="Crypto insurance provides financial protection against losses from smart contract exploits, exchange hacks, stablecoin de-pegging events, and other risks unique to the digital asset ecosystem. As the crypto market has matured, insurance options have expanded from basic exchange coverage to sophisticated on-chain protocols that allow users to purchase cover for specific DeFi positions. While crypto insurance cannot protect against all risks, it adds a valuable layer of protection for users with significant holdings."
      toc={[
        { id: "why-insurance", title: "Why Crypto Insurance Matters", level: 2 },
        { id: "defi-cover", title: "DeFi Cover Protocols", level: 2 },
        { id: "exchange-insurance", title: "Exchange and Custodial Insurance", level: 2 },
        { id: "evaluating", title: "Evaluating Insurance Options", level: 2 },
      ]}
      faqs={[
        {
          question: "How much does crypto insurance cost?",
          answer:
            "Premiums vary significantly based on what is covered. DeFi smart contract cover typically costs 2-8% annually of the covered amount for established protocols, with riskier or newer protocols costing more. The cost reflects the assessed probability of a claim event occurring. Compare this against the potential total loss to determine whether the premium is worthwhile for your situation.",
        },
        {
          question: "Does FDIC insurance cover crypto on exchanges?",
          answer:
            "No. FDIC insurance covers US dollar deposits at insured banks, not cryptocurrency holdings. Even if an exchange holds your USD in an FDIC-insured bank, only the fiat portion would be covered (up to $250,000), and only in the event of the bank's failure — not the exchange's failure. Cryptocurrency held on exchanges has no government insurance protection.",
        },
        {
          question: "What events does DeFi insurance typically cover?",
          answer:
            "Most DeFi cover protocols insure against smart contract exploits (bugs or vulnerabilities that result in fund loss), oracle failures, and governance attacks. Some also cover stablecoin de-pegging events, bridge exploits, and slashing events for validators. Coverage typically does not include losses from market price declines, user error, or phishing attacks.",
        },
      ]}
      relatedArticles={[
        { title: "Smart Contract Security", href: "/learn/smart-contract-security", category: "Learn" },
        { title: "Crypto Security Guide", href: "/learn/crypto-security-guide", category: "Learn" },
        { title: "Risk Management in Crypto", href: "/learn/risk-management-crypto", category: "Learn" },
        { title: "Common Crypto Scams", href: "/learn/common-crypto-scams", category: "Learn" },
      ]}
    >
      <section id="why-insurance">
        <h2>Why Crypto Insurance Matters</h2>
        <p>
          The crypto ecosystem has suffered billions of dollars in losses from smart contract exploits, exchange hacks, and protocol failures. Unlike traditional finance, where deposits are typically protected by government insurance programs and regulated custodians carry liability insurance, crypto users bear the full risk of loss. A single smart contract vulnerability can wipe out an entire protocol's deposits, and the irreversible nature of blockchain transactions means stolen funds are rarely recovered.
        </p>
        <p>
          Crypto insurance addresses this gap by creating financial protection mechanisms, both centralized and decentralized, that compensate policyholders when covered events occur. For institutional investors, insurance is often a prerequisite for allocating capital to DeFi. For individual users with significant DeFi positions, insurance provides peace of mind and a safety net against the catastrophic tail risks that remain inherent in a relatively young and experimental financial system. The cost of premiums should be weighed against the value of the protection and the probability of a claim event.
        </p>
      </section>

      <section id="defi-cover">
        <h2>DeFi Cover Protocols</h2>
        <p>
          Nexus Mutual is the largest decentralized insurance protocol, offering smart contract cover for a wide range of DeFi protocols. Members stake NXM tokens to underwrite risk, and claims are assessed through a decentralized voting process. When a covered exploit occurs, affected policyholders submit claims, assessors review the evidence, and approved claims are paid from the protocol's capital pool. Nexus Mutual has paid out millions in claims from real exploits.
        </p>
        <p>
          InsurAce offers multi-chain cover with a portfolio-based approach where users can insure multiple DeFi positions under a single policy. Unslashed Finance provides a broader range of coverage including validator slashing and centralized exchange risks. OpenCover acts as a distributor, aggregating coverage from multiple underwriting protocols. These protocols represent a new model of insurance — transparent, borderless, and governed by communities rather than corporate boards — though they also introduce unique risks like smart contract vulnerability in the insurance protocol itself.
        </p>
      </section>

      <section id="exchange-insurance">
        <h2>Exchange and Custodial Insurance</h2>
        <p>
          Major centralized exchanges maintain insurance funds to cover losses from security breaches. Coinbase carries a crypto insurance policy and stores the vast majority of customer funds in offline cold storage. Binance maintains the SAFU (Secure Asset Fund for Users), an emergency insurance fund funded by a percentage of trading fees. However, these protections have limits, and they did not help users of FTX, Celsius, or other platforms that collapsed due to mismanagement rather than external hacks.
        </p>
        <p>
          Institutional custodians like Coinbase Custody, BitGo, and Fireblocks carry significant insurance policies (often hundreds of millions of dollars) from traditional insurance carriers like Lloyd's of London. This institutional-grade coverage is a key reason why many funds and corporations choose regulated custodians over self-custody. For retail users, the practical takeaway is to understand the specific protections your exchange or custodian provides, verify them independently, and recognize their limitations — no insurance covers every possible scenario.
        </p>
      </section>

      <section id="evaluating">
        <h2>Evaluating Insurance Options</h2>
        <p>
          When evaluating crypto insurance, start by understanding exactly what is covered and what is excluded. Read the policy terms carefully: does cover extend to governance attacks, oracle manipulation, and bridge exploits, or only to direct smart contract bugs? Is there a deductible? What is the claims process, and how long does payout take? For DeFi cover protocols, understand the claims assessment mechanism — who decides whether a claim is valid, and what evidence is required?
        </p>
        <p>
          Assess the solvency of the insurance provider. For DeFi cover protocols, check the total capital in the pool relative to total active coverage — if the protocol is over-leveraged (total coverage exceeds available capital), it may not be able to pay all claims in a large-scale event. For centralized insurance, verify the underwriter's rating and financial stability. Finally, consider the cost-benefit analysis: if you have $10,000 in a well-established DeFi protocol, paying $500 per year for insurance may or may not be worthwhile depending on your risk tolerance. For larger positions, the math often favors purchasing coverage as a prudent risk management tool.
        </p>
      </section>
    </LearnPageLayout>
  );
}
