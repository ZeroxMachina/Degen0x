import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Security Token? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what security tokens are, how they differ from utility tokens, the regulatory framework around them, and how they enable tokenized securities on blockchain.",
};

export default function SecurityTokenPage() {
  return (
    <LearnPageLayout
      title="What Is a Security Token?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="5 min read"
      intro="A security token is a digital asset on a blockchain that represents an ownership stake in a real-world asset, company, or investment contract. Security tokens are subject to securities regulations and must comply with legal frameworks like the SEC's regulations in the US. They bring the benefits of blockchain technology — transparency, programmability, and fractional ownership — to traditional financial instruments like stocks, bonds, and real estate."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-security-token", title: "What Is a Security Token?", level: 2 },
        { id: "how-they-work", title: "how-they-work", level: 2 },
        { id: "how-security-tokens-work", title: "How Security Tokens Work", level: 2 },
        { id: "regulation", title: "regulation", level: 2 },
        { id: "regulatory-framework", title: "Regulatory Framework", level: 2 },
        { id: "benefits", title: "benefits", level: 2 },
        { id: "benefits-of-security-tokens", title: "Benefits of Security Tokens", level: 2 }
      ]}
      faqs={[
        { question: "How are security tokens different from regular tokens?", answer: "Security tokens represent investment contracts and are subject to securities laws. They require regulatory compliance including KYC/AML procedures, transfer restrictions, and registration with securities authorities. Regular utility tokens are not (in theory) investment contracts and face less regulatory burden." },
        { question: "Can I buy security tokens on regular crypto exchanges?", answer: "Generally no. Security tokens must be traded on regulated platforms that comply with securities laws. Specialized security token exchanges like tZERO and INX provide compliant trading venues. Some jurisdictions are developing frameworks that may eventually allow broader trading of security tokens." },
      ]}
      relatedArticles={[
        { title: "Token", href: "/learn/glossary/token", category: "Glossary" },
        { title: "Utility Token", href: "/learn/glossary/utility-token", category: "Glossary" },
        { title: "What Is RWA Tokenization?", href: "/learn/what-is-rwa", category: "Learn Crypto" },
        { title: "Crypto Regulation", href: "/learn/crypto-regulation", category: "Learn Crypto" },
      ]}
    >
      <h2 id="definition">What Is a Security Token?</h2>
      <p>
        A security token is a blockchain-based representation of a traditional security such as a stock, bond, or fund share. It passes the Howey Test, meaning holders invest money in a common enterprise with an expectation of profits derived from the efforts of others. Security tokens must comply with securities regulations, which means issuers need proper registration, investors must pass KYC checks, and trading must occur on licensed platforms.
      </p>

      <h2 id="how-they-work">How Security Tokens Work</h2>
      <p>
        Security tokens are issued through Security Token Offerings (STOs), which are the regulated equivalent of ICOs. Smart contracts enforce compliance rules including investor accreditation checks, holding periods, transfer restrictions, and maximum holder counts. When a security token is transferred, the smart contract verifies that both parties meet regulatory requirements before allowing the transaction. Dividends and other distributions can be automated through the contract.
      </p>

      <h2 id="regulation">Regulatory Framework</h2>
      <p>
        In the US, security tokens fall under SEC jurisdiction and must be offered under exemptions like Regulation D (accredited investors), Regulation A+ (mini-IPO), or Regulation S (offshore). European security tokens comply with MiFID II. Each jurisdiction has its own framework, creating a complex landscape for global issuers. The regulatory burden is higher than for utility tokens, but it provides legal protections for investors and legitimacy for issuers.
      </p>

      <h2 id="benefits">Benefits of Security Tokens</h2>
      <p>
        Security tokens offer fractional ownership, enabling small investors to access assets traditionally reserved for institutions. They provide 24/7 trading instead of limited market hours. Settlement is near-instant compared to the T+2 standard in traditional markets. Programmable compliance automates regulatory requirements. And global accessibility allows investors from multiple jurisdictions to participate in offerings that would otherwise be geographically limited.
      </p>
    </LearnPageLayout>
  );
}
