import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Insurance Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Guide to cryptocurrency insurance covering DeFi insurance protocols, exchange insurance funds, custodial insurance, and how to protect your digital assets.",
  keywords: ["crypto insurance", "DeFi insurance", "Nexus Mutual", "crypto coverage", "smart contract insurance", "exchange insurance"],
};

export default function CryptoInsuranceGuidePage() {
  return (
    <LearnPageLayout title="Crypto Insurance Guide" categoryName="Crypto Education" categorySlug="learn" readTime="7 min" intro="Cryptocurrency insurance is an emerging field that aims to protect users against the unique risks of digital assets — from smart contract exploits and exchange hacks to stablecoin depegs and validator slashing. Both decentralized insurance protocols and traditional insurance products are developing to fill the coverage gap in the crypto ecosystem."
      toc={[
        { id: "overview", title: "overview", level: 2 },
        { id: "insurance-in-crypto", title: "Insurance in Crypto", level: 2 },
        { id: "defi-insurance", title: "defi-insurance", level: 2 },
        { id: "defi-insurance-protocols", title: "DeFi Insurance Protocols", level: 2 },
        { id: "exchange-insurance", title: "exchange-insurance", level: 2 },
        { id: "exchange-insurance-funds", title: "Exchange Insurance Funds", level: 2 },
        { id: "custodial-insurance", title: "custodial-insurance", level: 2 },
        { id: "custodial-insurance", title: "Custodial Insurance", level: 2 },
        { id: "choosing-coverage", title: "choosing-coverage", level: 2 },
        { id: "choosing-coverage", title: "Choosing Coverage", level: 2 }
      ]}
      faqs={[
        { question: "Does FDIC insurance cover crypto?", answer: "No, FDIC insurance does not cover cryptocurrency holdings, even if held on a regulated US exchange. FDIC only covers fiat currency deposits at member banks. Some exchanges hold customer fiat in FDIC-insured accounts, but the crypto assets themselves are not covered." },
        { question: "What does DeFi insurance cover?", answer: "DeFi insurance protocols typically cover smart contract failures (bugs, exploits), stablecoin depegs, oracle failures, and protocol-specific risks. Coverage is purchased per-protocol and per-amount, with premiums varying based on the assessed risk level of the covered protocol." },
        { question: "Is crypto insurance expensive?", answer: "Premiums vary widely based on the covered protocol's risk level. Coverage for well-established protocols like Aave might cost 2-5% annually, while newer or riskier protocols can be significantly more expensive. Premiums reflect the actual risk level assessed by the insurance market." },
      ]}
      relatedArticles={[
        { title: "Smart Contract Risks", href: "/learn/smart-contract-risks", category: "Learn" },
        { title: "DeFi Exploit Prevention", href: "/learn/defi-exploit-prevention", category: "Learn" },
        { title: "Is Cryptocurrency Safe?", href: "/learn/is-cryptocurrency-safe", category: "Learn" },
        { title: "Self-Custody Guide", href: "/learn/self-custody-guide", category: "Learn" },
      ]}
    >
      <section id="overview"><h2>Insurance in Crypto</h2><p>Traditional insurance has been slow to cover cryptocurrency risks due to the difficulty of assessing and pricing these novel risks. The result is a significant insurance gap — most crypto assets are uninsured against theft, hacks, and protocol failures. This gap has created opportunities for both decentralized insurance protocols that operate on-chain and traditional insurance companies developing specialized crypto products.</p><p>The challenge of crypto insurance lies in the correlation of risks: a major smart contract exploit can affect multiple protocols simultaneously, a regulatory crackdown impacts an entire market, and systemic events can trigger cascading failures across DeFi. Unlike traditional insurance where risks are largely independent, crypto risks are often highly correlated, making traditional actuarial models less applicable.</p></section>
      <section id="defi-insurance"><h2>DeFi Insurance Protocols</h2><p>Decentralized insurance protocols like Nexus Mutual, InsurAce, and Unslashed Finance allow users to purchase coverage against specific DeFi risks. These protocols pool capital from stakers who earn premiums in exchange for providing coverage capacity. Claims are assessed through on-chain governance processes where token holders or designated assessors evaluate whether a covered event has occurred.</p><p>Coverage types include smart contract failure (bugs or exploits in a specific protocol), stablecoin depeg events, oracle failure, and custodial risk. Users select the protocol they want coverage for, the amount of coverage, and the duration. Premiums are paid in cryptocurrency and vary based on the perceived risk level — protocols with longer track records and multiple audits typically have lower premiums than newer, unaudited projects.</p></section>
      <section id="exchange-insurance"><h2>Exchange Insurance Funds</h2><p>Major cryptocurrency exchanges maintain insurance funds to cover potential losses from security breaches. Coinbase, for example, carries crime insurance, and Binance maintains the Secure Asset Fund for Users (SAFU) funded by a percentage of trading fees. These funds provide a buffer against hack-related losses, though they may not cover all scenarios — particularly insolvency or regulatory seizure.</p><p>The size and scope of exchange insurance funds vary significantly. Some funds are transparently audited with on-chain proof of reserves, while others provide limited transparency about fund size and coverage terms. When evaluating exchanges, consider the size of the insurance fund relative to total assets held, what events are covered, and the claims process. No exchange insurance fund guarantees complete coverage of all user assets in a worst-case scenario.</p></section>
      <section id="custodial-insurance"><h2>Custodial Insurance</h2><p>Institutional cryptocurrency custodians typically carry insurance from traditional insurance underwriters (Lloyd's of London, Marsh, Aon) covering theft, hacking, and internal fraud. This insurance is a key differentiator for custodians serving institutional clients who require insurance coverage as part of their risk management framework. Coverage limits and terms vary by custodian.</p><p>Some custodians offer pass-through insurance that covers individual client accounts up to certain limits. This institutional-grade insurance typically covers a broader range of risks than DeFi insurance protocols but may exclude certain events like regulatory action, protocol-level failures, or market risk. The emergence of custodial insurance has been important for institutional adoption of cryptocurrency.</p></section>
      <section id="choosing-coverage"><h2>Choosing Coverage</h2><p>Evaluate your insurance needs based on the size and distribution of your holdings. For significant DeFi positions, protocol-specific coverage through DeFi insurance may be worthwhile, especially for positions in newer or less-tested protocols. For exchange holdings, verify what insurance the exchange provides and consider whether additional coverage is available or necessary.</p><p>Consider the cost-benefit ratio: insurance premiums reduce your overall returns, so coverage makes more sense for larger positions where potential losses would be significant. Diversification across protocols, chains, and custody methods remains the most effective risk mitigation strategy. Insurance should complement, not replace, good security practices and thoughtful risk management across your entire portfolio.</p></section>
    </LearnPageLayout>
  );
}
