import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Rug Pull? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what rug pulls are, the different types, and how to identify and avoid this common crypto scam.",
};

export default function RugPullPage() {
  return (
    <LearnPageLayout
      title="What Is a Rug Pull?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A rug pull is a crypto scam where the developers of a project suddenly abandon it and run away with investor funds. The name comes from the expression 'pulling the rug out from under someone.' Rug pulls typically involve creating a token, generating hype, attracting investment, and then draining the liquidity pool or dumping the developer's token holdings, leaving investors with worthless tokens."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-rug-pull", title: "What Is a Rug Pull?", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-rug-pulls", title: "Types of Rug Pulls", level: 2 },
        { id: "red-flags", title: "red-flags", level: 2 },
        { id: "red-flags-to-watch-for", title: "Red Flags to Watch For", level: 2 },
        { id: "protecting-yourself", title: "protecting-yourself", level: 2 },
        { id: "how-to-protect-yourself", title: "How to Protect Yourself", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "How much money has been lost to rug pulls?",
          answer:
            "Billions of dollars have been lost to rug pulls across the crypto ecosystem. Some are small, affecting a few hundred investors for thousands of dollars. Others have been massive, like the Squid Game token rug pull that stole millions. The true total is likely much higher than reported because many smaller rug pulls go unreported.",
        },
        {
          question: "Can rug pull developers be caught?",
          answer:
            "Sometimes. Blockchain transactions are traceable, and if developers used centralized exchanges, their identities may be discoverable. Law enforcement has successfully prosecuted some rug pull operators. However, anonymous developers using privacy tools and decentralized exchanges can be extremely difficult to identify. Prevention is far more effective than seeking recovery after the fact.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Pump and Dump?", href: "/learn/glossary/pump-and-dump", category: "Glossary" },
        { title: "What Is a Liquidity Pool?", href: "/learn/glossary/liquidity-pool", category: "Glossary" },
        { title: "What Is a Memecoin?", href: "/learn/glossary/memecoin", category: "Glossary" },
        { title: "What Is Degen?", href: "/learn/glossary/degen", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Rug Pull?</h2>
      <p>
        A rug pull is a type of exit scam specific to the crypto ecosystem. Developers create a seemingly legitimate project, build community interest, attract investment, and then abscond with the funds. The term became widely used during the DeFi boom of 2020-2021 when the ease of creating tokens and liquidity pools on decentralized exchanges made rug pulls trivially simple to execute.
      </p>

      <h2 id="types">Types of Rug Pulls</h2>
      <p>
        Liquidity pulls involve developers removing all liquidity from a DEX pool, making the token untradeable and worthless. Selling pressure rugs occur when developers dump a massive pre-allocated supply on the market. Limiting sell orders involves malicious smart contract code that prevents buyers from selling (a honeypot). Some rug pulls are slow, with developers gradually draining funds over weeks rather than all at once.
      </p>

      <h2 id="red-flags">Red Flags to Watch For</h2>
      <p>
        Anonymous teams with no verifiable track record are higher risk. Unlocked liquidity means developers can drain the pool at any time. Unaudited smart contracts may contain hidden functions. Unrealistic promises and pressure to invest quickly are classic tactics. Concentrated token ownership where the team holds a large percentage creates dump risk. Recently deployed contracts with minimal transaction history deserve extreme caution.
      </p>

      <h2 id="protecting-yourself">How to Protect Yourself</h2>
      <p>
        Verify that liquidity is locked through a reputable time-lock contract. Read the smart contract or check audit reports from trusted firms. Research the team and verify identities. Check token distribution — if a few wallets hold most of the supply, the risk is high. Start with small positions in new projects. Use tools like Token Sniffer or rug pull checkers to analyze contracts for known scam patterns before investing.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Rug pulls are one of the biggest obstacles to mainstream crypto adoption. They erode trust, cause financial harm, and attract negative regulatory attention. While the permissionless nature of crypto means anyone can create a token, this same openness enables fraud. Education about rug pull risks and red flags is essential for protecting yourself and for the long-term health of the crypto ecosystem.
      </p>
    </LearnPageLayout>
  );
}
