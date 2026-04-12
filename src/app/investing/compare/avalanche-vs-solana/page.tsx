import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = { title: `Avalanche vs Solana (${CURRENT_YEAR}) | ${SITE_NAME}`, description: `Avalanche vs Solana comparison for ${CURRENT_YEAR}. Subnet architecture vs monolithic performance — speed, fees, DeFi, and investment potential compared.` };

const items = [
  { name: "Avalanche (AVAX)", slug: "avalanche", rating: 4.3, affiliateUrl: "#", features: { "Consensus": "Avalanche Consensus (PoS)", "Architecture": "Multi-chain (Subnets)", "TPS (C-Chain)": "~4,500", "Block Time": "~2 seconds", "Avg Transaction Fee": "$0.01-0.10", "Smart Contract Language": "Solidity (EVM-compatible)", "TVL": "Top 10 in DeFi", "Staking Yield": "7-10%", "Subnet Customization": "Full control over VM and rules", "Institutional Focus": "Strong (Spruce, Evergreen)" } },
  { name: "Solana (SOL)", slug: "solana", rating: 4.6, affiliateUrl: "#", features: { "Consensus": "Proof-of-History + PoS", "Architecture": "Monolithic single-chain", "TPS (C-Chain)": "~4,000+ (burst to 65K)", "Block Time": "~400ms", "Avg Transaction Fee": "<$0.01", "Smart Contract Language": "Rust / Anchor", "TVL": "Top 3 in DeFi", "Staking Yield": "5-8%", "Subnet Customization": "N/A (single chain)", "Institutional Focus": "Growing (Visa, PayPal integrations)" } },
];

const faqs = [
  { question: "What are Avalanche Subnets?", answer: "Subnets are independent blockchain networks that run within the Avalanche ecosystem. Each Subnet can customize its virtual machine, consensus rules, and validator requirements. This allows enterprises and projects to create purpose-built blockchains while benefiting from Avalanche's consensus and cross-chain communication. Subnets can be permissioned or permissionless." },
  { question: "Which has better DeFi?", answer: "Solana has a larger and more active DeFi ecosystem with higher daily trading volumes and more innovative protocols, particularly order-book DEXs and perpetual futures. Avalanche's DeFi benefits from EVM compatibility, making it easy for Ethereum DeFi protocols to deploy. Trader Joe, Benqi, and GMX are Avalanche DeFi standouts. Both have healthy lending and DEX ecosystems." },
  { question: "Which is better for enterprise use?", answer: "Avalanche has stronger enterprise positioning through its Subnet architecture, which allows institutions to create compliant, customizable blockchains. Avalanche's partnerships with Deloitte, institutional DeFi through Spruce, and the Evergreen subnet framework specifically target enterprise needs. Solana focuses more on consumer applications and retail-facing products." },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Compare", href: "/investing/compare" }, { label: "Avalanche vs Solana" }]} />
      <AffiliateDisclosure />
      <header className="mb-8"><h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Avalanche vs Solana ({CURRENT_YEAR})</h1><p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p></header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">Two high-performance Layer 1 blockchains with fundamentally different scaling strategies. Avalanche uses a multi-chain Subnet architecture allowing customizable independent blockchains, while Solana optimizes a single monolithic chain for maximum throughput. Both target different market segments with distinct competitive advantages worth evaluating for investment portfolios.</p>
      <section className="mb-10"><ComparisonTable items={items} features={["Consensus", "Architecture", "TPS (C-Chain)", "Block Time", "Avg Transaction Fee", "Smart Contract Language", "TVL", "Staking Yield", "Subnet Customization", "Institutional Focus"]} title="Avalanche vs Solana" /></section>
      <div className="prose-crypto mb-10">
        <p>Avalanche&apos;s key differentiator is its Subnet architecture, which enables projects and enterprises to launch customized blockchains with their own consensus rules, virtual machines, and validator sets while remaining connected to the broader Avalanche ecosystem. This makes Avalanche particularly attractive for institutional and enterprise use cases that require regulatory compliance, permissioned access, or specific performance characteristics. The C-Chain provides EVM compatibility, allowing seamless porting of Ethereum DeFi applications, while Subnets like DFK Chain and Dexalot demonstrate purpose-built blockchain capabilities.</p>
        <p>Solana&apos;s monolithic approach delivers the lowest latency and highest raw throughput of any major blockchain, making it ideal for latency-sensitive applications like order-book trading, real-time gaming, and high-frequency DeFi. The single composable state means all applications on Solana can interact without bridging, avoiding the fragmentation inherent in multi-chain architectures. Solana&apos;s ecosystem has stronger consumer and retail momentum with meme coins, NFTs, and mobile-first applications. For investors, AVAX offers exposure to enterprise blockchain adoption and the multi-chain thesis, while SOL bets on consumer crypto adoption and monolithic chain performance superiority.</p>
      </div>
      <section className="mb-10"><h2 className="text-2xl font-bold mb-4">Related Content</h2>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Tokenomics analysis is our edge. Most retail investors skip the vesting schedule and supply inflation data that often determines long-term price action.
          </p>
        </div><ul className="space-y-2"><li><Link href="/investing/compare/solana-vs-ethereum" className="text-blue-600 hover:underline">Solana vs Ethereum</Link></li><li><Link href="/investing/compare/cardano-vs-solana" className="text-blue-600 hover:underline">Cardano vs Solana</Link></li></ul></section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
