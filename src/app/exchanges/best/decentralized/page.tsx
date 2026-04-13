import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Decentralized Exchanges (DEXs) in ${CURRENT_YEAR}`,
  description: `Compare the top decentralized exchanges (DEXs) of ${CURRENT_YEAR}. Trade directly from your wallet with no intermediaries. Uniswap, dYdX, Jupiter, and more.`,
  alternates: { canonical: "/exchanges/best/decentralized" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const dexes = [
  {
    name: "Uniswap",
    chain: "Ethereum, Polygon, Arbitrum, Optimism, Base",
    type: "AMM (Automated Market Maker)",
    fees: "0.3% standard (0.05%, 0.3%, 1% pools)",
    tvl: "$5B+",
    bestFor: "ERC-20 token swaps",
    description: "The largest and most established DEX, pioneering the AMM model. Uniswap V3 introduced concentrated liquidity, dramatically improving capital efficiency.",
    pros: ["Largest liquidity pools for ERC-20 tokens", "Battle-tested smart contracts", "Available on multiple L2 chains", "Permissionless token listings"],
    cons: ["Gas fees on Ethereum mainnet can be high", "Impermanent loss risk for LPs", "No order book or limit orders natively"],
  },
  {
    name: "dYdX",
    chain: "dYdX Chain (Cosmos)",
    type: "Order Book DEX",
    fees: "0%–0.05% maker/taker",
    tvl: "$500M+",
    bestFor: "Decentralized perpetual futures",
    description: "A decentralized derivatives exchange offering perpetual futures with up to 20x leverage. Migrated to its own Cosmos-based appchain for better performance and full decentralization.",
    pros: ["True order book trading on-chain", "Low fees for perpetual futures", "No KYC required", "High throughput on dedicated chain"],
    cons: ["Limited to derivatives trading", "Smaller ecosystem than Ethereum DEXs", "Learning curve for new DeFi users"],
  },
  {
    name: "Jupiter",
    chain: "Solana",
    type: "DEX Aggregator",
    fees: "0% (only network fees + route fees)",
    tvl: "$2B+",
    bestFor: "Solana token swaps",
    description: "The leading DEX aggregator on Solana, Jupiter routes trades across multiple DEXs to find the best price. Features limit orders, DCA, and perpetual futures through its expanding product suite.",
    pros: ["Best prices through aggregation", "Ultra-low Solana gas fees", "Limit orders and DCA built-in", "Growing perpetuals platform"],
    cons: ["Limited to Solana ecosystem", "Newer platform with less track record", "Token rug pull risk on Solana DEXs"],
  },
  {
    name: "Curve Finance",
    chain: "Ethereum, multiple L2s",
    type: "Stablecoin AMM",
    fees: "0.04% standard",
    tvl: "$2B+",
    bestFor: "Stablecoin swaps with minimal slippage",
    description: "Specializes in efficient stablecoin and pegged asset trading with extremely low slippage. Curve's unique bonding curve algorithm makes it the go-to for large stablecoin trades.",
    pros: ["Best rates for stablecoin swaps", "Extremely low slippage", "Deep liquidity for pegged assets", "CRV rewards for liquidity providers"],
    cons: ["Complex interface", "Limited to stablecoins and pegged assets for best performance", "Smart contract risk"],
  },
  {
    name: "PancakeSwap",
    chain: "BNB Chain, Ethereum, Arbitrum",
    type: "AMM",
    fees: "0.25%",
    tvl: "$1.5B+",
    bestFor: "BNB Chain token trading",
    description: "The leading DEX on BNB Chain, offering swaps, farming, staking, and a lottery system. Low gas fees on BNB Chain make it popular for smaller trades that would be expensive on Ethereum.",
    pros: ["Very low gas fees on BNB Chain", "Rich DeFi ecosystem (farms, pools, lottery)", "Large BNB Chain token selection", "Cross-chain deployment"],
    cons: ["BNB Chain is more centralized than Ethereum", "Higher risk tokens prevalent", "Impermanent loss risk"],
  },
];

const faqs = [
  {
    question: "What is a decentralized exchange (DEX)?",
    answer: "A DEX is a cryptocurrency exchange that operates without a central authority. Trades are executed through smart contracts on a blockchain, allowing users to trade directly from their wallets without depositing funds on a platform. This gives users full custody of their assets throughout the trading process.",
  },
  {
    question: "Are DEXs safer than centralized exchanges?",
    answer: "DEXs eliminate counterparty risk since you maintain custody of your funds. However, they introduce smart contract risk (bugs or exploits in the code). They also lack consumer protections like insurance and customer support. Both CEXs and DEXs have trade-offs in security.",
  },
  {
    question: "Do I need to do KYC to use a DEX?",
    answer: "No. DEXs do not require identity verification since they are non-custodial. You simply connect your crypto wallet and start trading. This is one of the primary appeals of decentralized trading for privacy-conscious users.",
  },
  {
    question: "What is impermanent loss?",
    answer: "Impermanent loss occurs when the price ratio of tokens in a liquidity pool changes compared to when you deposited them. The greater the price change, the more impermanent loss you experience. It is called 'impermanent' because the loss only becomes permanent when you withdraw your liquidity.",
  },
  {
    question: "Which blockchain has the best DEXs?",
    answer: "Ethereum has the most mature DEX ecosystem with the deepest liquidity (Uniswap, Curve). Solana offers the fastest and cheapest trades (Jupiter, Raydium). BNB Chain provides low-cost alternatives (PancakeSwap). Your choice depends on which tokens you want to trade and your gas fee tolerance.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Exchanges', item: 'https://degen0x.com/exchanges' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/exchanges/best' },
    { '@type': 'ListItem', position: 4, name: 'Decentralized', },
  ],
};

export default function DecentralizedExchangesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "Decentralized (DEXs)", href: "/exchanges/best/decentralized" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Decentralized Exchanges (DEXs) in {CURRENT_YEAR}
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Decentralized exchanges let you trade crypto directly from your wallet without trusting
          a centralized intermediary. You maintain full custody of your assets throughout the
          entire trading process. DEXs have grown dramatically, now handling billions in daily
          volume across multiple blockchains. Here are the best DEXs across different categories
          and chains.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">CEX vs DEX: When to Use Each</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Use a CEX when you need fiat on/off ramps, customer support, or insurance protection.
          Use a DEX when you want maximum privacy, custody of your funds, access to tokens not
          listed on centralized exchanges, or participation in DeFi protocols like liquidity
          provision and yield farming.
        </p>
      </div>

      <div className="space-y-6 mb-12">
        {dexes.map((dex, index) => (
          <div
            key={dex.name}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-text)] font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text)]">{dex.name}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{dex.chain}</p>
                </div>
              </div>

        <AuthorAttribution
          author="NullPointer"
          role="Data Engineer"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="exchanges"
        />

            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">{dex.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
                Type: {dex.type}
              </span>
              <span className="inline-flex items-center rounded-full bg-[var(--color-success)]/10 px-3 py-1 text-xs font-medium text-[var(--color-success)]">
                Fees: {dex.fees}
              </span>
              <span className="inline-flex items-center rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
                TVL: {dex.tvl}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-semibold text-[var(--color-success)] mb-1">Pros</h4>
                <ul className="space-y-1">
                  {dex.pros.map((pro, i) => (
                    <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-1">
                      <span className="text-[var(--color-success)] mt-0.5">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[var(--color-danger)] mb-1">Cons</h4>
                <ul className="space-y-1">
                  {dex.cons.map((con, i) => (
                    <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-1">
                      <span className="text-[var(--color-danger)] mt-0.5">-</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Exchanges/best/decentralized", "description": "The largest and most established DEX, pioneering the AMM model. Uniswap V3 introduced concentrated liquidity, dramatically improving capital efficiency.", "url": "https://degen0x.com/exchanges/best/decentralized"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/exchanges" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Exchanges
          </Link>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Trading Tools
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Exchanges
          </Link>
        </div>
      </div>
    </div>
  );
}
