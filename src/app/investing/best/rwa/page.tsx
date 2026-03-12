import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ProductCard from "@/components/ProductCard";
import FAQSection from "@/components/FAQSection";
import TableOfContents from "@/components/TableOfContents";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { RWA_FAQS } from "@/data/investing";
import { Product } from "@/lib/types";

export const metadata: Metadata = {
  title: `Best RWA Crypto Tokens ${CURRENT_YEAR} - Real World Asset Investments`,
  description: `Discover the best Real World Asset (RWA) crypto tokens for ${CURRENT_YEAR}. Tokenized treasuries, real estate, and commodities bridging TradFi and DeFi.`,
  alternates: { canonical: "/investing/best/rwa" },
};

const rwaTokens: Product[] = [
  {
    name: "Ondo Finance (ONDO)",
    slug: "ondo",
    rating: 4.4,
    description: "A leading RWA protocol offering tokenized US Treasury products and institutional-grade yield on-chain. Backed by major investors and growing rapidly in TVL.",
    pros: ["Tokenized US Treasuries", "Institutional backing", "Regulatory-focused approach", "Growing TVL"],
    cons: ["Governance token with limited utility", "Centralized custody of real assets", "Regulatory risk"],
    bestFor: "Tokenized treasury exposure",
    affiliateUrl: "https://degen0x.com/go/ondo",
    category: "rwa",
  },
  {
    name: "Centrifuge (CFG)",
    slug: "centrifuge",
    rating: 4.1,
    description: "A decentralized protocol for financing real-world assets on-chain, connecting DeFi liquidity with real-world credit markets including invoices and real estate.",
    pros: ["Real-world credit markets on-chain", "MakerDAO integration", "Diverse asset types", "Growing institutional adoption"],
    cons: ["Complex credit assessment", "Default risk on underlying assets", "Lower liquidity"],
    bestFor: "Real-world credit exposure",
    affiliateUrl: "https://degen0x.com/go/centrifuge",
    category: "rwa",
  },
  {
    name: "Maple Finance (MPL)",
    slug: "maple",
    rating: 4.0,
    description: "An institutional capital market protocol providing undercollateralized lending to institutions, offering attractive yields backed by real borrower credit.",
    pros: ["Institutional lending yields", "Credit assessment process", "Real revenue generation", "Growing loan book"],
    cons: ["Past default incidents", "Concentrated borrower risk", "Complex risk assessment"],
    bestFor: "Institutional credit yields",
    affiliateUrl: "https://degen0x.com/go/maple",
    category: "rwa",
  },
  {
    name: "Mantle Staked ETH (mETH)",
    slug: "mantle-staked-eth",
    rating: 4.0,
    description: "Mantle's liquid staking solution offering exposure to ETH staking yield with additional RWA-backed returns through treasury management strategies.",
    pros: ["ETH staking plus RWA yield", "Backed by Mantle Treasury", "Liquid staking token", "Competitive APY"],
    cons: ["Dependent on Mantle ecosystem", "Complex yield sources", "Newer product"],
    bestFor: "Enhanced ETH staking yield",
    affiliateUrl: "https://degen0x.com/go/mantle",
    category: "rwa",
  },
];

const toc = [
  { id: "top-picks", title: "Top RWA Tokens", level: 2 },
  { id: "what-are-rwas", title: "What Are RWA Tokens", level: 2 },
  { id: "why-rwa", title: "Why RWA Matters", level: 2 },
  { id: "risks", title: "RWA Risks", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
];

export default function BestRWAPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Best RWA Tokens", href: "/investing/best/rwa" },
      ]} />

      <AffiliateDisclosure />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best RWA Crypto Tokens for {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Real World Asset (RWA) tokenization is bridging traditional finance with DeFi, bringing
          trillions in real-world value on-chain. From tokenized treasuries to real estate and
          private credit, RWA tokens offer yield backed by tangible assets.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <TableOfContents items={toc} />

      <section id="top-picks" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Top RWA Tokens for {CURRENT_YEAR}</h2>
        <div className="space-y-4">
          {rwaTokens.map((product, idx) => (
            <ProductCard key={product.slug} product={product} rank={idx + 1} categorySlug="investing" />
          ))}
        </div>
      </section>

      <section id="what-are-rwas" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Are RWA Tokens?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          RWA tokens represent real-world assets that have been tokenized on a blockchain. This
          includes US Treasury bonds, real estate, commodities, private credit, and more. The
          process involves a custodian holding the real asset while a corresponding token is
          minted on-chain, creating a digital representation that can be traded, used in DeFi,
          and settled 24/7 without traditional market hours or intermediaries.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          The RWA sector has grown significantly as both crypto-native protocols and traditional
          institutions recognize the efficiency gains of tokenization. Fractional ownership enables
          smaller investors to access assets like commercial real estate and institutional credit
          that were previously reserved for wealthy or institutional investors.
        </p>
      </section>

      <section id="why-rwa" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Why RWA Matters for Crypto</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          RWA tokenization addresses one of crypto's biggest challenges: sustainable yield. Unlike
          speculative DeFi yields that depend on token emissions, RWA yields are backed by
          real economic activity. Tokenized US Treasuries provide risk-free rates on-chain, while
          tokenized credit offers spreads above that baseline. This creates a more sustainable
          and predictable income source for DeFi participants.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          The total addressable market for RWA tokenization is enormous, potentially encompassing
          hundreds of trillions in global assets. As regulatory frameworks mature and institutional
          adoption grows, RWA is positioned to become one of the largest sectors in crypto.
        </p>
      </section>

      <section id="risks" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">RWA Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)]">
          RWA tokens carry unique risks beyond standard crypto volatility. Custodial risk is
          paramount because someone must physically hold the real assets, creating counterparty
          risk. Legal and regulatory frameworks for tokenized assets are still developing, creating
          uncertainty about enforcement and investor protections. Oracle risk exists where price
          feeds connecting real-world valuations to on-chain tokens could be inaccurate or
          manipulated. Always verify the legal structure, audit status, and custodial arrangements
          before investing in RWA tokens.
        </p>
      </section>

      <section id="faq">
        <FAQSection faqs={RWA_FAQS} />
      </section>
    </div>
  );
}
