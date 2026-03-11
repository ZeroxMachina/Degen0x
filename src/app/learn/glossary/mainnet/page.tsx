import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Mainnet? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what mainnet means, how it differs from testnet, and why mainnet launches are significant milestones for crypto projects.",
};

export default function MainnetPage() {
  return (
    <LearnPageLayout
      title="What Is Mainnet?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="Mainnet (short for main network) is the primary, live blockchain network where actual transactions with real value take place. It is the production environment of a blockchain, as opposed to testnets used for development and experimentation. When a project launches its mainnet, it transitions from testing to a fully operational network with real economic activity and consequences."
      toc={[
        { id: "definition", title: "What Is Mainnet?", level: 2 },
        { id: "mainnet-vs-testnet", title: "Mainnet vs Testnet", level: 2 },
        { id: "mainnet-launch", title: "Mainnet Launches", level: 2 },
        { id: "mainnet-upgrades", title: "Mainnet Upgrades", level: 2 },
        { id: "why-it-matters", title: "Why Mainnet Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "What happens during a mainnet launch?",
          answer:
            "A mainnet launch is when a blockchain goes live for real use. The genesis block is created, validators or miners begin operating, and real tokens with actual value start being transacted. Projects often migrate from testnet tokens to mainnet tokens. It marks the transition from a proof of concept to a functioning production network.",
        },
        {
          question: "Can a blockchain have multiple mainnets?",
          answer:
            "A blockchain has one mainnet, which is its canonical production network. However, if a fork occurs, the chain may split into two separate mainnets (like Ethereum and Ethereum Classic). Some multi-chain architectures like Polkadot have a relay chain mainnet with multiple connected parachain mainnets.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Testnet?", href: "/learn/glossary/testnet", category: "Glossary" },
        { title: "What Is a Genesis Block?", href: "/learn/glossary/genesis-block", category: "Glossary" },
        { title: "What Is a Node?", href: "/learn/glossary/node", category: "Glossary" },
        { title: "What Is a Fork?", href: "/learn/glossary/fork", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Mainnet?</h2>
      <p>
        Mainnet is the live, fully operational version of a blockchain network. It is where real cryptocurrency has real value and real transactions are permanently recorded. Every major blockchain you interact with — Bitcoin, Ethereum, Solana — is a mainnet. When you send ETH or swap tokens on Uniswap, you are operating on Ethereum&apos;s mainnet.
      </p>

      <h2 id="mainnet-vs-testnet">Mainnet vs Testnet</h2>
      <p>
        Testnets are parallel networks used for development and testing. Testnet tokens have no real value and can be obtained from faucets for free. Developers use testnets to experiment with smart contracts without risking real funds. Mainnet is the production environment where everything counts. Deploying a contract on mainnet costs real gas fees and interacts with real assets.
      </p>

      <h2 id="mainnet-launch">Mainnet Launches</h2>
      <p>
        A mainnet launch is a major milestone for any crypto project. It signals that the technology has matured from concept and testnet to production readiness. Mainnet launches often trigger significant market interest and price movements. Projects typically go through multiple testnet phases, security audits, and community testing before launching their mainnet to ensure stability and security.
      </p>

      <h2 id="mainnet-upgrades">Mainnet Upgrades</h2>
      <p>
        Mainnets are regularly upgraded through hard forks or soft forks to add features, improve performance, or fix issues. Ethereum&apos;s transition from proof of work to proof of stake (The Merge) was a mainnet upgrade. These upgrades are carefully coordinated, often tested on testnets first, and require nodes to update their software to continue participating in the network.
      </p>

      <h2 id="why-it-matters">Why Mainnet Matters</h2>
      <p>
        Mainnet is where the real action happens. It is the difference between a theoretical project and a working product. Evaluating whether a project has a live mainnet is crucial for due diligence. Many projects have raised funds with only whitepapers and testnets but never shipped a working mainnet. A functioning mainnet with real users and activity is one of the strongest signals of project legitimacy.
      </p>
    </LearnPageLayout>
  );
}
