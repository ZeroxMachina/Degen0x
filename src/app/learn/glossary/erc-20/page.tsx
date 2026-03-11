import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is ERC-20? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what ERC-20 tokens are, how the standard works, and why it became the foundation for fungible tokens on Ethereum.",
};

export default function Erc20Page() {
  return (
    <LearnPageLayout
      title="What Is ERC-20?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="ERC-20 is a technical standard for creating fungible tokens on the Ethereum blockchain. It defines a common set of rules that all compliant tokens must follow, including how transfers work, how balances are tracked, and how approvals are granted. This standardization allows any ERC-20 token to work seamlessly with wallets, exchanges, and DeFi protocols."
      toc={[
        { id: "definition", title: "What Is ERC-20?", level: 2 },
        { id: "how-it-works", title: "How the ERC-20 Standard Works", level: 2 },
        { id: "key-functions", title: "Key ERC-20 Functions", level: 2 },
        { id: "use-cases", title: "Use Cases", level: 2 },
        { id: "limitations", title: "Limitations and Evolution", level: 2 },
      ]}
      faqs={[
        {
          question: "Are all Ethereum tokens ERC-20?",
          answer:
            "No. ERC-20 is only for fungible tokens (where each unit is identical). NFTs use ERC-721 or ERC-1155. Some tokens use custom standards. However, the vast majority of fungible tokens on Ethereum follow ERC-20 because of its wide support across the ecosystem.",
        },
        {
          question: "Can I create my own ERC-20 token?",
          answer:
            "Yes. Anyone can deploy an ERC-20 token by writing a smart contract that implements the required functions. The barrier to entry is low, which is why thousands of ERC-20 tokens exist. However, creating a token with real value requires building utility and community trust.",
        },
      ]}
      relatedArticles={[
        { title: "What Is ERC-721?", href: "/learn/glossary/erc-721", category: "Glossary" },
        { title: "What Is a Smart Contract?", href: "/learn/glossary/smart-contract", category: "Glossary" },
        { title: "What Is an EIP?", href: "/learn/glossary/eip", category: "Glossary" },
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is ERC-20?</h2>
      <p>
        ERC-20 stands for Ethereum Request for Comments 20, a proposal introduced in 2015 that became the dominant token standard on Ethereum. Before ERC-20, each token contract could implement its own interface, making it difficult for wallets and exchanges to support new tokens. ERC-20 solved this by establishing a universal interface that all fungible tokens can share.
      </p>

      <h2 id="how-it-works">How the ERC-20 Standard Works</h2>
      <p>
        An ERC-20 token is a smart contract deployed on Ethereum that maintains a mapping of addresses to balances. The standard defines mandatory functions and events that the contract must implement. When you transfer tokens, the contract updates its internal ledger. Because every ERC-20 token exposes the same interface, any application that supports one ERC-20 token automatically supports all of them.
      </p>

      <h2 id="key-functions">Key ERC-20 Functions</h2>
      <p>
        The standard requires six functions: totalSupply (returns total tokens in existence), balanceOf (returns an address&apos;s balance), transfer (moves tokens to another address), approve (grants a spender permission to use tokens), transferFrom (allows approved spenders to move tokens), and allowance (checks remaining approved amount). Two events, Transfer and Approval, must be emitted for tracking.
      </p>

      <h2 id="use-cases">Use Cases</h2>
      <p>
        ERC-20 tokens power a vast range of applications. Stablecoins like USDC and USDT are ERC-20 tokens. Governance tokens for DAOs, utility tokens for platforms, wrapped versions of other assets, and liquidity pool tokens in DeFi all use this standard. The uniformity of ERC-20 is what made the explosion of DeFi composability possible.
      </p>

      <h2 id="limitations">Limitations and Evolution</h2>
      <p>
        ERC-20 has known limitations. The approve-then-transferFrom pattern can lead to race conditions. Tokens sent directly to contracts that do not expect them can be permanently lost. Later standards like ERC-223 and ERC-777 attempted to address these issues, though ERC-20 remains dominant due to its massive ecosystem support and simplicity.
      </p>
    </LearnPageLayout>
  );
}
