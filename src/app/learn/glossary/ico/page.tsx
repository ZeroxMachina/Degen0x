import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is an ICO? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what an Initial Coin Offering is, how it works, and the history of ICOs as a crypto fundraising mechanism.",
};

export default function IcoPage() {
  return (
    <LearnPageLayout
      title="What Is an ICO?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="An Initial Coin Offering (ICO) is a fundraising method where a crypto project sells tokens to early investors before or during development. ICOs were the dominant fundraising model during the 2017 crypto boom, raising billions of dollars. While they democratized access to early-stage investing, the lack of regulation led to widespread fraud, and most ICO tokens ultimately lost significant value."
      toc={[
        { id: "definition", title: "What Is an ICO?", level: 2 },
        { id: "how-it-works", title: "How ICOs Work", level: 2 },
        { id: "history", title: "ICO History", level: 2 },
        { id: "risks", title: "Risks and Problems", level: 2 },
        { id: "evolution", title: "Evolution Beyond ICOs", level: 2 },
      ]}
      faqs={[
        {
          question: "Are ICOs legal?",
          answer:
            "The legality depends on the jurisdiction. Many countries now regulate ICOs as securities offerings, requiring registration and compliance. The SEC in the US has taken enforcement action against many ICO issuers. Some projects use alternative structures like SAFT (Simple Agreement for Future Tokens) to comply with securities laws.",
        },
        {
          question: "Do ICOs still happen?",
          answer:
            "Traditional ICOs have largely been replaced by other mechanisms like Initial DEX Offerings (IDOs), Initial Exchange Offerings (IEOs), airdrops, and fair launches. These newer models attempt to address the regulatory and fraud concerns associated with ICOs while still enabling projects to raise funds and distribute tokens.",
        },
      ]}
      relatedArticles={[
        { title: "What Is an Airdrop?", href: "/learn/glossary/airdrop", category: "Glossary" },
        { title: "What Is ERC-20?", href: "/learn/glossary/erc-20", category: "Glossary" },
        { title: "What Is a Rug Pull?", href: "/learn/glossary/rug-pull", category: "Glossary" },
        { title: "What Is KYC?", href: "/learn/glossary/kyc", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is an ICO?</h2>
      <p>
        An Initial Coin Offering is a fundraising event where a project creates and sells tokens to investors, typically in exchange for ETH or BTC. The name is derived from Initial Public Offering (IPO) in traditional finance, though ICOs historically had far less regulation. Investors receive tokens that may grant utility within the project&apos;s ecosystem or represent a claim on future value.
      </p>

      <h2 id="how-it-works">How ICOs Work</h2>
      <p>
        A project publishes a whitepaper describing its vision, technology, and token economics. It then creates a smart contract that accepts cryptocurrency and distributes tokens at a predetermined rate. There may be different phases (private sale, presale, public sale) with varying prices. After the ICO concludes, tokens are distributed to investors and typically listed on exchanges for secondary trading.
      </p>

      <h2 id="history">ICO History</h2>
      <p>
        Ethereum itself was funded through a 2014 ICO that raised approximately 31,000 BTC. The ICO boom peaked in 2017-2018, with thousands of projects raising billions collectively. Notable ICOs include EOS ($4.1 billion), Telegram ($1.7 billion), and Filecoin ($257 million). However, the vast majority of ICO projects failed to deliver on their promises or were outright scams.
      </p>

      <h2 id="risks">Risks and Problems</h2>
      <p>
        ICOs were plagued by fraud, with numerous exit scams where teams disappeared with investor funds. Many projects had no working product, only a whitepaper and marketing. The lack of regulatory oversight meant investors had no legal recourse. Even legitimate projects often saw their tokens lose 90%+ of value as the market cooled. These issues prompted regulatory crackdowns worldwide.
      </p>

      <h2 id="evolution">Evolution Beyond ICOs</h2>
      <p>
        The crypto industry has evolved beyond traditional ICOs. Initial Exchange Offerings (IEOs) add exchange vetting. Initial DEX Offerings (IDOs) use decentralized exchanges for fairer distribution. Fair launches skip pre-sales entirely. Airdrops distribute tokens to users who contribute to protocols. These newer mechanisms attempt to balance fundraising needs with investor protection and fair distribution.
      </p>
    </LearnPageLayout>
  );
}
