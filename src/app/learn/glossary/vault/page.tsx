import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Vault in DeFi? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what vaults are in DeFi, how they automate yield strategies, the different types of vaults, and how to evaluate vault opportunities safely.",
};

export default function VaultPage() {
  return (
    <LearnPageLayout title="What Is a Vault?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="A vault in DeFi is an automated smart contract that manages deposited assets according to a predefined strategy to generate yield. Users deposit tokens into a vault, and the vault's strategy automatically deploys those assets across DeFi protocols, compounds rewards, and rebalances positions. Vaults simplify yield generation by abstracting away the complexity of managing multiple DeFi positions manually, making sophisticated strategies accessible to any user."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-vault", title: "What Is a Vault?", level: 2 },
        { id: "how-vaults-work", title: "how-vaults-work", level: 2 },
        { id: "how-vaults-work", title: "How Vaults Work", level: 2 },
        { id: "vault-types", title: "vault-types", level: 2 },
        { id: "types-of-vaults", title: "Types of Vaults", level: 2 },
        { id: "vault-risks", title: "vault-risks", level: 2 },
        { id: "vault-risks", title: "Vault Risks", level: 2 }
      ]}
      faqs={[{ question: "Are vaults safe?", answer: "Vaults add a layer of smart contract risk on top of the underlying protocol risks. A vault that deposits into Aave carries both Aave's smart contract risk and the vault contract's own risk. Well-audited vaults from established protocols like Yearn Finance have strong track records, but newer or unaudited vaults carry higher risk." },
        { question: "What fees do vaults charge?", answer: "Most vaults charge performance fees (10-20% of earned yield), management fees (0-2% annually), and sometimes deposit or withdrawal fees. These fees compensate strategists and protocol governance. Compare net yield (after fees) rather than gross yield when evaluating vaults." }]}
      relatedArticles={[{ title: "Yield", href: "/learn/glossary/yield", category: "Glossary" }, { title: "Pool", href: "/learn/glossary/pool", category: "Glossary" }, { title: "Farming", href: "/learn/glossary/farming", category: "Glossary" }, { title: "What Is Yield Farming?", href: "/learn/what-is-yield-farming", category: "Learn Crypto" }]}
    >
      <h2 id="definition">What Is a Vault?</h2>
      <p>A vault is a smart contract that accepts user deposits and executes a yield-generating strategy automatically. Think of it as a managed fund where the fund manager is code rather than a person. When you deposit tokens into a Yearn vault, the contract automatically deploys your assets into the highest-yielding opportunities, harvests rewards, compounds them, and reinvests, all without requiring any action from you after the initial deposit.</p>

      <h2 id="how-vaults-work">How Vaults Work</h2>
      <p>Users deposit tokens and receive vault shares (receipt tokens) proportional to their share of the total vault deposits. The vault&apos;s strategy contract interacts with DeFi protocols to generate yield. Periodically, the strategy harvests earned rewards, takes protocol fees, and reinvests the remainder. As the vault generates yield, each share becomes worth more underlying tokens. Users withdraw by burning their vault shares to receive their original deposit plus accumulated earnings.</p>

      <h2 id="vault-types">Types of Vaults</h2>
      <p>Yield-optimizing vaults like Yearn automatically move capital between lending protocols to capture the highest rates. Liquidity provision vaults manage LP positions on DEXs with automated rebalancing. Leveraged vaults use borrowing to amplify yield exposure. Options vaults sell covered calls or puts to generate premium income. Delta-neutral vaults construct hedged positions that generate yield regardless of price direction.</p>

      <h2 id="vault-risks">Vault Risks</h2>
      <p>Vault risks include smart contract vulnerabilities in both the vault and underlying protocols, strategy risks from adverse market conditions, impermanent loss from LP-based strategies, and depeg risk for stablecoin strategies. Some vaults use leverage, amplifying both returns and losses. Always review the vault&apos;s strategy documentation, audit reports, and historical performance before depositing. Start with small amounts and increase your position as you gain confidence in the vault&apos;s reliability.</p>
    </LearnPageLayout>
  );
}
