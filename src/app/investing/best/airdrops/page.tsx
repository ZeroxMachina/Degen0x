import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import TableOfContents from "@/components/TableOfContents";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { AIRDROP_FAQS } from "@/data/investing";

export const metadata: Metadata = {
  title: `Best Crypto Airdrops ${CURRENT_YEAR} - Upcoming Free Token Drops`,
  description: `Find the best crypto airdrops for ${CURRENT_YEAR}. Guide to qualifying for upcoming token distributions, retroactive airdrops, and airdrop farming strategies.`,
  alternates: { canonical: "/investing/best/airdrops" },
};

const toc = [
  { id: "upcoming", title: "Potential Upcoming Airdrops", level: 2 },
  { id: "how-to-qualify", title: "How to Qualify for Airdrops", level: 2 },
  { id: "strategies", title: "Airdrop Farming Strategies", level: 2 },
  { id: "safety", title: "Airdrop Safety Guide", level: 2 },
  { id: "taxes", title: "Airdrop Tax Implications", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
];

const potentialAirdrops = [
  { name: "LayerZero", category: "Cross-chain Protocol", action: "Bridge assets and use supported dApps across chains", risk: "Medium" },
  { name: "Linea", category: "L2 (zkRollup)", action: "Bridge to Linea, use DeFi protocols, and interact with dApps", risk: "Medium" },
  { name: "Scroll", category: "L2 (zkRollup)", action: "Bridge and use DeFi on Scroll mainnet", risk: "Medium" },
  { name: "Berachain", category: "L1 Blockchain", action: "Participate in testnet and early ecosystem dApps", risk: "Low" },
  { name: "Monad", category: "L1 Blockchain", action: "Engage with testnet when available", risk: "Low" },
];

export default function BestAirdropsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Best Airdrops", href: "/investing/best/airdrops" },
      ]} />

      <AffiliateDisclosure />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Crypto Airdrops for {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Airdrops are free token distributions rewarding early protocol users. Some of the
          largest airdrops in crypto history have been worth thousands of dollars per wallet.
          Here is our guide to the most promising upcoming airdrop opportunities and how to
          position yourself to qualify.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <TableOfContents items={toc} />

      <section id="upcoming" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Potential Upcoming Airdrops</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          These protocols have not yet launched tokens and may distribute airdrops to early users.
          There is no guarantee any of these will airdrop, and criteria are speculative.
        </p>
        <div className="space-y-4">
          {potentialAirdrops.map((drop) => (
            <div key={drop.name} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-[var(--color-text)]">{drop.name}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  {drop.category}
                </span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                <strong className="text-[var(--color-text)]">What to do:</strong> {drop.action}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-text)]">Capital risk:</strong> {drop.risk}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-to-qualify" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How to Qualify for Airdrops</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Most retroactive airdrops reward genuine protocol usage. To maximize your chances,
          use protocols organically rather than just doing the minimum. Bridge assets to new
          chains, swap tokens on DEXs, provide liquidity, vote in governance proposals, and
          participate in testnets. Projects increasingly use Sybil detection to filter out
          bot farms, so focus on quality interactions over quantity.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Maintain activity over multiple months rather than doing everything in a single session.
          Use multiple chains and protocols within the same ecosystem. Engage with the community
          through Discord and governance forums. The more genuine your usage pattern, the more
          likely you are to qualify for larger allocations.
        </p>
      </section>

      <section id="strategies" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Airdrop Farming Strategies</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Focus on protocols backed by top-tier VCs that have not yet launched tokens. These
          projects have the resources to conduct meaningful airdrops. Layer 2 networks, cross-chain
          bridges, and novel DeFi protocols are the most likely categories for future airdrops.
          Track your activity and costs to ensure the gas fees spent farming do not exceed the
          potential airdrop value.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          A cost-effective approach is to use protocols on low-fee chains where transaction costs
          are minimal. Chains like Arbitrum, Base, and Optimism have gas fees under a few cents
          per transaction, making it affordable to build a genuine usage history without
          significant capital outlay.
        </p>
      </section>

      <section id="safety" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Airdrop Safety Guide</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Be extremely cautious of scam airdrops. Legitimate projects never ask you to send
          crypto to receive an airdrop. Never connect your wallet to unknown websites claiming
          to distribute free tokens. Use a dedicated wallet for airdrop farming separate from
          your main holdings. Verify all airdrop claims through official project channels
          only, not through links in emails, direct messages, or social media posts.
        </p>
      </section>

      <section id="taxes" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Airdrop Tax Implications</h2>
        <p className="text-[var(--color-text-secondary)]">
          In the US, airdrops are generally taxable as ordinary income at their fair market value
          when you receive them (or when you gain dominion and control over them). Your cost basis
          for the airdropped tokens is their value at the time of receipt. If you later sell or
          trade them, you owe capital gains or losses based on the difference. Consult a tax
          professional and use crypto tax software to track airdrop income accurately.
        </p>
      </section>

      <section id="faq">
        <FAQSection faqs={AIRDROP_FAQS} />
      </section>
    </div>
  );
}
