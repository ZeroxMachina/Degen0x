import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Phantom vs Backpack (${CURRENT_YEAR}) - Which Solana Wallet Is Better? | ${SITE_NAME}`,
  description: `Phantom vs Backpack Solana wallet comparison for ${CURRENT_YEAR}. Features, xNFT support, DeFi access, and ecosystem integration compared.`,
};

const items = [
  { name: "Phantom", slug: "phantom", rating: 4.7, affiliateUrl: "#", features: { "Primary Chain": "Solana", "Multi-Chain": "ETH, Polygon", "NFT Support": "Excellent gallery", "Built-in Swap": "Yes (0.85%)", "xNFT Apps": "No", "Exchange Integration": "No", Staking: "Yes (SOL)", "Open Source": "No", "Mobile App": "Yes", "User Base": "Largest on Solana" } },
  { name: "Backpack", slug: "backpack-wallet", rating: 4.2, affiliateUrl: "#", features: { "Primary Chain": "Solana", "Multi-Chain": "ETH (limited)", "NFT Support": "Good + xNFTs", "Built-in Swap": "Yes", "xNFT Apps": "Yes", "Exchange Integration": "Backpack Exchange", Staking: "Limited", "Open Source": "Partially", "Mobile App": "Yes", "User Base": "Growing" } },
];

const faqs = [
  { question: "Which Solana wallet should I use?", answer: "For most users, Phantom is recommended due to broader dApp compatibility, larger community, and more polished experience. Backpack is worth considering if you are interested in xNFTs or want integration with the Backpack exchange." },
  { question: "What are xNFTs?", answer: "xNFTs (executable NFTs) are Backpack's innovation where NFTs contain full applications rather than just images. An xNFT could be a DeFi dashboard, game, or interactive app that lives in your wallet. This concept is unique to Backpack." },
  { question: "Can I use both Phantom and Backpack?", answer: "Yes, both can be installed simultaneously as separate browser extensions. They create separate wallet instances unless you import the same seed phrase. Many Solana users install both for full ecosystem access." },
];

export default function PhantomVsBackpackPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Wallets", href: "/wallets" }, { label: "Compare", href: "/wallets/compare" }, { label: "Phantom vs Backpack", href: "/wallets/compare/phantom-vs-backpack" }]} />
      <AffiliateDisclosure />
      <header className="mb-8"><h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Phantom vs Backpack ({CURRENT_YEAR})</h1><p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p></header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">Phantom and Backpack are the two leading Solana wallets competing for ecosystem dominance. Phantom is the established leader with the largest user base, while Backpack brings innovation with its xNFT app platform and exchange integration.</p>
      <section className="mb-10"><ComparisonTable items={items} features={["Primary Chain", "Multi-Chain", "NFT Support", "Built-in Swap", "xNFT Apps", "Exchange Integration", "Staking", "Open Source", "Mobile App", "User Base"]} title="Phantom vs Backpack" /></section>
      <div className="prose-crypto mb-10">
        <p>Phantom leads in Solana dApp compatibility, polish, and user base. Its NFT gallery, SOL staking, and swap features are mature and reliable. The wallet handles all Solana transaction types seamlessly and has the strongest ecosystem integration. Backpack introduces the xNFT concept where NFTs contain executable applications, and integrates with its own exchange for seamless trading between centralized and decentralized environments.</p>
        <p>For most Solana users, Phantom remains the safer choice due to broader compatibility and established track record. Backpack appeals to users who want cutting-edge features and are invested in the xNFT ecosystem. If you primarily use Solana DeFi and NFTs, Phantom&apos;s maturity is hard to beat. If you want exchange integration and are excited about executable NFTs, Backpack offers a differentiated experience worth exploring.</p>
      </div>
      <FAQSection faqs={faqs} />
      <section className="mt-12"><h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Related Content</h2>
        {/* editorial-voice */}
        <div style={{ background: '#0a1a0f', border: '1px solid #14532d', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🛡️</span>
            <strong style={{ color: '#22c55e', fontSize: 15 }}>Security Verdict</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            The wallet space moves fast. We update our reviews when significant firmware updates or security incidents occur, not on a fixed schedule.
          </p>
        </div><div className="grid md:grid-cols-2 gap-4"><Link href="/wallets/best/solana" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-primary)]">Best Of</span><h3 className="text-sm font-semibold text-[var(--color-text)]">Best Solana Wallets</h3></Link><Link href="/wallets/learn/nft-storage-guide" className="glass-subtle p-4 glass-hover"><span className="text-xs text-[var(--color-secondary)]">Guide</span><h3 className="text-sm font-semibold text-[var(--color-text)]">NFT Storage Guide</h3></Link></div></section>
    </div>
  );
}
