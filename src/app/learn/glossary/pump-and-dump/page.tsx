import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Pump and Dump? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what pump-and-dump schemes are, how they work in crypto markets, and how to protect yourself from this common fraud.",
};

export default function PumpAndDumpPage() {
  return (
    <LearnPageLayout
      title="What Is a Pump and Dump?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A pump and dump is a market manipulation scheme where promoters artificially inflate the price of an asset through misleading hype (the pump), then sell their holdings at the inflated price (the dump), leaving other buyers with losses. This is one of the most common forms of fraud in crypto, particularly affecting small-cap tokens and memecoins. Pump and dumps are illegal in regulated securities markets but enforcement in crypto remains limited."
      toc={[
        { id: "definition", title: "What Is a Pump and Dump?", level: 2 },
        { id: "how-it-works", title: "How Pump and Dumps Work", level: 2 },
        { id: "warning-signs", title: "Warning Signs", level: 2 },
        { id: "protecting-yourself", title: "Protecting Yourself", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "Are pump and dumps legal in crypto?",
          answer:
            "Pump and dumps are illegal in regulated securities markets. Whether specific crypto tokens are securities remains a legal gray area in many jurisdictions. Regardless of legal classification, pump and dumps are a form of fraud. Regulators are increasingly pursuing enforcement actions against crypto market manipulators, but the decentralized and global nature of crypto makes enforcement challenging.",
        },
        {
          question: "How common are pump and dumps in crypto?",
          answer:
            "Extremely common, especially among small-cap tokens and new launches. Studies have found that a significant percentage of tokens listed on DEXs show patterns consistent with pump-and-dump activity. Telegram and Discord groups openly coordinate pumps. The low barrier to creating new tokens and the lack of oversight make crypto particularly susceptible to this type of manipulation.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Rug Pull?", href: "/learn/glossary/rug-pull", category: "Glossary" },
        { title: "What Is a Memecoin?", href: "/learn/glossary/memecoin", category: "Glossary" },
        { title: "What Is FOMO?", href: "/learn/glossary/fomo", category: "Glossary" },
        { title: "What Is FUD?", href: "/learn/glossary/fud", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Pump and Dump?</h2>
      <p>
        A pump and dump is a fraudulent scheme designed to profit from artificial price inflation. Organizers accumulate a large position in a low-liquidity asset, then aggressively promote it to drive up demand and price. Once the price has risen sufficiently, they sell their holdings into the buying pressure they created, crashing the price and leaving late buyers with substantial losses.
      </p>

      <h2 id="how-it-works">How Pump and Dumps Work</h2>
      <p>
        The scheme typically follows a pattern. Organizers quietly accumulate tokens at low prices. They then launch a coordinated marketing campaign across social media, Telegram groups, and sometimes paid influencers. Claims of revolutionary technology, insider information, or imminent exchange listings create FOMO. As new buyers pile in, the price rises. Once organizers have sold enough, buying subsides and the price crashes.
      </p>

      <h2 id="warning-signs">Warning Signs</h2>
      <p>
        Be wary of sudden, aggressive promotion of unknown tokens. Guaranteed return promises are a red flag. Anonymous teams, recently created tokens, and locked (or unlocked) liquidity pools deserve scrutiny. Social media posts with rocket emojis and unrealistic price targets often precede dumps. Check on-chain data: if a small number of wallets hold most of the supply, manipulation is easy and likely.
      </p>

      <h2 id="protecting-yourself">Protecting Yourself</h2>
      <p>
        Research before buying anything that is being aggressively promoted. Check the token contract for red flags (mint functions, honeypot code, concentrated ownership). Verify team identities and track records. Be skeptical of urgency — legitimate opportunities do not require immediate action. If something sounds too good to be true, it almost certainly is. Never invest money you cannot afford to lose in heavily promoted unknown tokens.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Pump and dumps cause real financial harm to victims and damage the reputation of the broader crypto ecosystem. They disproportionately affect less experienced investors who are most susceptible to FOMO and social pressure. Understanding how these schemes operate is essential self-defense for anyone participating in crypto markets. An educated community is the best protection against market manipulation.
      </p>
    </LearnPageLayout>
  );
}
