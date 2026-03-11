import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `CBDCs Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Central Bank Digital Currencies explained for ${CURRENT_YEAR}. What are CBDCs, how they work, global adoption status, and how they differ from stablecoins and cryptocurrency.`,
  alternates: { canonical: "/spending/learn/cbdc-explained" },
};

const toc = [
  { id: "what-are-cbdcs", title: "What Are CBDCs", level: 2 },
  { id: "how-they-work", title: "How CBDCs Work", level: 2 },
  { id: "global-status", title: "Global CBDC Status", level: 2 },
  { id: "cbdc-vs-crypto", title: "CBDCs vs Cryptocurrency", level: 2 },
  { id: "implications", title: "Implications for Crypto Users", level: 2 },
];

const faqs = [
  { question: "What is a CBDC?", answer: "A Central Bank Digital Currency (CBDC) is a digital form of a country's fiat currency issued and backed by its central bank. Unlike cryptocurrency, CBDCs are centralized and fully controlled by the government. They are essentially digital cash that combines the convenience of digital payments with the backing of a sovereign government." },
  { question: "How are CBDCs different from stablecoins?", answer: "Stablecoins like USDC are issued by private companies and pegged to fiat currency. CBDCs are issued directly by central banks. Stablecoins operate on public blockchains and can be used in DeFi. CBDCs typically run on permissioned infrastructure controlled by the central bank. Stablecoins have counterparty risk; CBDCs have the full backing of the issuing government." },
  { question: "Will CBDCs replace cryptocurrency?", answer: "CBDCs and cryptocurrency serve different purposes. CBDCs are centralized digital fiat designed for efficient payments and monetary policy. Cryptocurrency offers decentralization, censorship resistance, and programmable money. CBDCs may reduce some use cases for stablecoins but are unlikely to replace decentralized crypto. The two will likely coexist, serving different needs." },
];

const relatedArticles = [
  { title: "Stablecoin Payments", href: "/spending/learn/stablecoin-payments", category: "Spending" },
  { title: "Layer 2 Payments", href: "/spending/learn/layer-2-payments", category: "Spending" },
  { title: "Crypto Remittances", href: "/spending/learn/crypto-remittances", category: "Spending" },
];

export default function CBDCExplainedPage() {
  return (
    <LearnPageLayout
      title="CBDCs Explained: Central Bank Digital Currencies"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="8 min"
      intro="Central Bank Digital Currencies represent the intersection of traditional monetary policy and digital payment technology. As over 130 countries explore or develop CBDCs, understanding what they are, how they work, and how they relate to existing cryptocurrency is essential for anyone interested in the future of money and digital payments."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="what-are-cbdcs">What Are CBDCs</h2>
      <p>
        A CBDC is the digital equivalent of physical cash issued by a central bank. Just as a dollar bill
        is a liability of the Federal Reserve, a digital dollar CBDC would be a digital liability of the
        central bank. CBDCs aim to modernize payment infrastructure, improve financial inclusion, reduce
        cash handling costs, and give central banks new tools for monetary policy. They come in two forms:
        wholesale CBDCs for interbank settlement and retail CBDCs for public use.
      </p>

      <h2 id="how-they-work">How CBDCs Work</h2>
      <p>
        Most CBDC designs use a two-tier model. The central bank issues the digital currency and manages the
        underlying ledger. Commercial banks and payment providers distribute CBDCs to consumers and businesses,
        similar to how physical cash is distributed today. The technology varies: some CBDCs use distributed
        ledger technology (a form of blockchain), while others use centralized databases. Transactions are
        processed through regulated intermediaries with the central bank as the ultimate authority.
      </p>

      <h2 id="global-status">Global CBDC Status</h2>
      <p>
        China&apos;s digital yuan (e-CNY) is the most advanced major economy CBDC, with millions of users in
        pilot programs across major cities. The European Central Bank is developing the digital euro. The
        Bahamas launched the Sand Dollar as the first nationwide CBDC. Nigeria launched the eNaira. India
        is piloting the digital rupee. The US Federal Reserve is studying a potential digital dollar but
        has not committed to launching one. Each country&apos;s approach reflects its unique economic priorities
        and regulatory environment.
      </p>

      <h2 id="cbdc-vs-crypto">CBDCs vs Cryptocurrency</h2>
      <p>
        The fundamental difference is control. Cryptocurrency like Bitcoin is decentralized with no single
        authority controlling the network. CBDCs are fully centralized and controlled by the issuing central
        bank. Crypto offers pseudonymity; CBDCs will likely have full transaction visibility for the
        government. Crypto is permissionless; CBDCs require authorized intermediaries. Crypto has a fixed
        supply (for Bitcoin); CBDC supply is managed by monetary policy. These differences mean they serve
        fundamentally different purposes in the financial system.
      </p>

      <h2 id="implications">Implications for Crypto Users</h2>
      <p>
        CBDCs may improve on-ramps and off-ramps between fiat and crypto by enabling faster, cheaper transfers
        from digital fiat to exchanges. They could reduce demand for stablecoins as a payment medium while
        potentially highlighting the value proposition of decentralized alternatives. Privacy-focused users
        may gravitate more toward crypto as CBDCs increase government financial surveillance capabilities.
        The coexistence of CBDCs and crypto will likely shape the digital payment landscape for decades.
      </p>
    </LearnPageLayout>
  );
}
