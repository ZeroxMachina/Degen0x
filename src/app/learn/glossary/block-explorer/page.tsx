import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Block Explorer? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what a block explorer is, how to use one, popular explorers for different blockchains, and why they matter for transparency. A complete guide.",
};

export default function BlockExplorerPage() {
  return (
    <LearnPageLayout
      title="What Is a Block Explorer?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="A block explorer is a web-based tool that allows anyone to search and view all activity on a blockchain network. You can look up individual transactions, wallet addresses, blocks, and smart contracts. Block explorers are essential for verifying transactions, researching projects, and understanding on-chain activity."
      toc={[
        { id: "definition", title: "What Is a Block Explorer?", level: 2 },
        { id: "how-to-use", title: "How to Use a Block Explorer", level: 2 },
        { id: "popular-explorers", title: "Popular Block Explorers", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "Is the information on block explorers public?",
          answer:
            "Yes. All data on public blockchains is transparent by design. Block explorers simply provide a user-friendly interface to browse this publicly available information. Anyone can view any address balance or transaction history without needing permission.",
        },
        {
          question: "Can I track a wallet using a block explorer?",
          answer:
            "Yes. By entering a wallet address into a block explorer, you can see its complete transaction history, current token balances, and all interactions with smart contracts. This is useful for verifying deposits, tracking whale movements, and researching project wallets.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Block?", href: "/learn/glossary/block", category: "Glossary" },
        { title: "What Is Blockchain?", href: "/learn/glossary/blockchain", category: "Glossary" },
        { title: "What Is On-Chain?", href: "/learn/glossary/on-chain", category: "Glossary" },
        { title: "What Is an Address?", href: "/learn/glossary/address", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Block Explorer?</h2>
      <p>
        A block explorer is essentially a search engine for blockchain data. Just as you use Google to search the web, you use a block explorer to search for transaction hashes, wallet addresses, block numbers, and smart contract details. The explorer reads data directly from the blockchain and displays it in a human-readable format.
      </p>

      <h2 id="how-to-use">How to Use a Block Explorer</h2>
      <p>
        To verify a transaction, paste the transaction hash (txid) into the explorer&apos;s search bar. You will see the sender, recipient, amount transferred, gas fees paid, block number, and confirmation status. To check a wallet, paste the address to view its balance, token holdings, and complete transaction history. You can also browse blocks by number to see all transactions within a specific block.
      </p>

      <h2 id="popular-explorers">Popular Block Explorers</h2>
      <p>
        Etherscan is the most widely used explorer for Ethereum and ERC-20 tokens. Bitcoin uses Blockchain.com Explorer or Mempool.space. Solscan covers the Solana network. BscScan handles Binance Smart Chain. Arbiscan and Optimistic Etherscan cover their respective Layer 2 networks. Each blockchain typically has at least one dedicated explorer.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Block explorers embody the transparency principle of blockchain technology. They allow anyone to audit transactions, verify smart contracts, monitor whale wallets, and confirm that their own transactions have been processed. For DeFi users, block explorers are indispensable for verifying contract interactions and checking token approvals. They are a fundamental tool for anyone using cryptocurrency.
      </p>
    </LearnPageLayout>
  );
}
