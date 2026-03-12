import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Central Bank Digital Currencies (CBDCs) Explained (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about CBDCs: how central bank digital currencies work, the difference from cryptocurrency and stablecoins, global CBDC projects, benefits, concerns, and implications for the crypto industry.",
};

export default function CbdcExplainedPage() {
  return (
    <LearnPageLayout
      title="Central Bank Digital Currencies (CBDCs) Explained"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Central Bank Digital Currencies (CBDCs) are digital forms of a country's fiat currency, issued and backed by the central bank. Unlike cryptocurrencies, which are decentralized and typically operate outside government control, CBDCs are centralized digital currencies that give governments new tools for monetary policy, financial inclusion, and payment system efficiency. With over 130 countries exploring or piloting CBDCs, representing more than 98% of global GDP, these digital currencies will likely become a significant part of the global monetary system."
      toc={[
        { id: "what-are-cbdcs", title: "what-are-cbdcs", level: 2 },
        { id: "what-are-cbdcs", title: "What Are CBDCs?", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-cbdcs", title: "Types of CBDCs", level: 2 },
        { id: "global-projects", title: "global-projects", level: 2 },
        { id: "global-cbdc-projects", title: "Global CBDC Projects", level: 2 },
        { id: "benefits-concerns", title: "benefits-concerns", level: 2 },
        { id: "benefits-and-concerns", title: "Benefits and Concerns", level: 2 },
        { id: "crypto-implications", title: "crypto-implications", level: 2 },
        { id: "implications-for-cryptocurrency", title: "Implications for Cryptocurrency", level: 2 }
      ]}
      faqs={[
        {
          question: "Is a CBDC the same as cryptocurrency?",
          answer:
            "No. CBDCs and cryptocurrencies share the use of digital technology but differ fundamentally. CBDCs are centralized (issued and controlled by a central bank), have no supply cap, and operate under government authority. Cryptocurrencies like Bitcoin are decentralized, often have fixed supply caps, and operate independently of any government. CBDCs do not provide the censorship resistance, pseudonymity, or permissionless access that characterize most cryptocurrencies.",
        },
        {
          question: "Will CBDCs replace physical cash?",
          answer:
            "Most central banks have stated that CBDCs are intended to complement, not replace, physical cash. However, as digital payments grow and cash usage declines in many countries, CBDCs could gradually reduce the role of physical currency. Some countries are implementing explicit legislation to protect the right to use physical cash alongside digital alternatives.",
        },
        {
          question: "Can CBDCs be used for programmable money?",
          answer:
            "Yes, programmability is one of the most discussed features of CBDCs. Smart contract-like features could enable automatic tax collection, conditional payments (like aid that can only be spent on food), and expiring money (that must be spent within a timeframe to stimulate economic activity). While proponents see efficiency gains, critics view programmable money as a tool for unprecedented government control over personal spending.",
        },
      ]}
      relatedArticles={[
        { title: "What Are Stablecoins?", href: "/learn/what-are-stablecoins", category: "Learn" },
        { title: "Crypto Regulation in the US", href: "/learn/crypto-regulation-us", category: "Learn" },
        { title: "Legal Status of Crypto Worldwide", href: "/learn/crypto-legal-status", category: "Learn" },
        { title: "What Is Blockchain?", href: "/learn/what-is-blockchain", category: "Learn" },
      ]}
    >
      <section id="what-are-cbdcs">
        <h2>What Are CBDCs?</h2>
        <p>
          A CBDC is a digital representation of a country's fiat currency that is issued and guaranteed by the nation's central bank. Just as physical cash is a direct liability of the central bank, a CBDC would represent a digital claim on the central bank, distinguishing it from commercial bank deposits (which are liabilities of private banks) and from stablecoins (which are liabilities of private companies). This direct central bank backing provides the highest level of credit safety for the holder.
        </p>
        <p>
          CBDCs may or may not use blockchain or distributed ledger technology — many designs use centralized databases that are more efficient for the controlled environment of a state currency. The technology choice varies by project, but the defining characteristic is the issuer (a central bank) rather than the underlying technology. CBDCs aim to combine the trust and stability of central bank money with the efficiency and programmability of digital systems, creating a modern payment infrastructure that can serve as the foundation for the digital economy.
        </p>
      </section>

      <section id="types">
        <h2>Types of CBDCs</h2>
        <p>
          Retail CBDCs are designed for use by the general public for everyday payments, similar to physical cash. They provide direct access to central bank money without requiring a commercial bank account, potentially improving financial inclusion for unbanked populations. Retail CBDC designs range from account-based models (where users hold accounts with the central bank or intermediaries) to token-based models (where digital tokens can be transferred peer-to-peer, more similar to cash).
        </p>
        <p>
          Wholesale CBDCs are designed for use by financial institutions for interbank settlements and large-value transactions. They aim to make the financial plumbing faster and more efficient, reducing settlement times from days to seconds and enabling new capabilities like atomic settlement of securities transactions. Many central banks are exploring wholesale CBDCs as a less controversial starting point, as they primarily affect institutional operations rather than retail consumers and raise fewer privacy concerns than retail models.
        </p>
      </section>

      <section id="global-projects">
        <h2>Global CBDC Projects</h2>
        <p>
          China's digital yuan (e-CNY) is the most advanced major economy CBDC, with millions of wallets created and billions in transactions processed through pilot programs across dozens of cities. The digital yuan operates through a two-tier system where the central bank issues e-CNY to commercial banks, which distribute it to the public through mobile apps. The project has progressed from internal testing to real-world deployment at an unprecedented scale.
        </p>
        <p>
          The European Central Bank is developing the digital euro, with a preparation phase underway. The Bank of England is exploring a digital pound. India's digital rupee is in pilot phase with participating banks. The Bahamas launched the Sand Dollar, one of the first fully deployed retail CBDCs. Nigeria launched the eNaira in 2021. Brazil's Drex is in advanced development. The United States has been more cautious, with the Federal Reserve studying the concept but facing political resistance from lawmakers who have concerns about financial surveillance and the impact on commercial banking.
        </p>
      </section>

      <section id="benefits-concerns">
        <h2>Benefits and Concerns</h2>
        <p>
          Proponents cite several benefits: financial inclusion for the unbanked (CBDCs can be accessed through basic mobile phones without a bank account), more efficient payment systems (instant, low-cost domestic and cross-border transfers), improved monetary policy transmission (central banks can implement policy changes that reach citizens directly), reduced costs of cash production and management, and the ability to compete with private digital currencies and stablecoins.
        </p>
        <p>
          Critics raise significant concerns about privacy and surveillance. A CBDC gives the government unprecedented visibility into every financial transaction, potentially enabling tracking of purchases, political donations, and other personal financial activities. Programmability features could allow governments to restrict how money is spent, implement negative interest rates that cannot be avoided, or freeze individual accounts. The potential for financial surveillance and control represents a fundamental shift in the relationship between citizens and the state, and privacy-preserving design is considered essential by many civil liberties organizations.
        </p>
      </section>

      <section id="crypto-implications">
        <h2>Implications for Cryptocurrency</h2>
        <p>
          CBDCs and cryptocurrency serve different purposes and are likely to coexist rather than directly compete. CBDCs provide efficient, government-backed payment rails but are centralized and subject to state control. Cryptocurrencies provide censorship resistance, decentralization, and permissionless innovation that CBDCs by design do not offer. Stablecoins sit in between, offering some benefits of both worlds, and may face the most direct competitive pressure from CBDCs.
        </p>
        <p>
          Some crypto advocates view CBDCs as a catalyst for crypto adoption: as people become more familiar with digital currencies through CBDC usage, they may more readily understand and adopt decentralized alternatives. CBDCs could also validate the concept of digital programmable money, creating infrastructure (digital wallets, payment terminals) that benefits the broader digital currency ecosystem. However, there is also a risk that governments could use CBDC frameworks to impose restrictions on private cryptocurrency, requiring conversion through regulated channels or limiting the use of non-state digital currencies. The interplay between CBDCs and crypto will be a defining dynamic of the digital currency landscape in the coming decades.
        </p>
      </section>
    </LearnPageLayout>
  );
}
