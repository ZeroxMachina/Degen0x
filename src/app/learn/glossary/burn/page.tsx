import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Token Burning? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what token burning is, how it works, why projects burn tokens, and how burns affect price and supply. A complete guide to crypto token burns.",
};

export default function BurnPage() {
  return (
    <LearnPageLayout
      title="What Is Token Burning?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="Token burning is the permanent removal of cryptocurrency tokens from circulation, typically by sending them to an unspendable wallet address. Burns reduce the total supply of a token, making remaining tokens scarcer. Projects burn tokens to create deflationary pressure, reward holders, or manage supply as part of their tokenomics design."
      toc={[
        { id: "definition", title: "What Is Token Burning?", level: 2 },
        { id: "how-it-works", title: "How Burns Work", level: 2 },
        { id: "types", title: "Types of Burns", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "Does burning tokens increase the price?",
          answer:
            "Burning reduces supply, which can create upward price pressure if demand stays the same or increases. However, burns alone do not guarantee price appreciation — demand, utility, and market conditions all play a role. A burn mechanism is one factor among many in a token's value.",
        },
        {
          question: "How can I verify a token burn?",
          answer:
            "Burns are visible on the blockchain. You can check the burn address on a block explorer to verify that tokens have been sent there. The burn address is typically a known address with no private key, such as the Ethereum zero address (0x000...000).",
        },
      ]}
      relatedArticles={[
        { title: "What Is Market Cap?", href: "/learn/glossary/market-cap", category: "Glossary" },
        { title: "What Is Minting?", href: "/learn/glossary/mint", category: "Glossary" },
        { title: "What Is Gas?", href: "/learn/glossary/gas", category: "Glossary" },
        { title: "What Is a Smart Contract?", href: "/learn/glossary/smart-contract", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Token Burning?</h2>
      <p>
        Token burning means permanently removing tokens from the available supply. The tokens are sent to a &quot;burn address&quot; — a wallet address that no one can access because it has no private key. Once sent there, the tokens can never be recovered or spent. The burn is verifiable on the blockchain by anyone.
      </p>

      <h2 id="how-it-works">How Burns Work</h2>
      <p>
        A project sends tokens to a burn address via a smart contract transaction. Some burns are manual (the team decides to burn), while others are automated (built into the protocol). Ethereum&apos;s EIP-1559 introduced an automatic burn mechanism where a portion of every transaction fee is burned, making ETH potentially deflationary during periods of high network activity.
      </p>

      <h2 id="types">Types of Burns</h2>
      <p>
        Protocol-level burns are built into the blockchain rules, like Ethereum&apos;s base fee burn. Buyback and burn is when a project uses revenue to buy tokens on the open market and then burns them, similar to stock buybacks. Scheduled burns occur at predetermined intervals. Community burns may be voted on by token holders through governance. Each mechanism has different implications for supply dynamics and price.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Burns are a key tool in tokenomics design. They counter inflation from new token issuance, align incentives between the project and token holders, and signal confidence in the token&apos;s value. However, burns should be evaluated in context — a burn mechanism does not make a fundamentally weak project valuable. The best burns are those tied to genuine economic activity and revenue generation.
      </p>
    </LearnPageLayout>
  );
}
