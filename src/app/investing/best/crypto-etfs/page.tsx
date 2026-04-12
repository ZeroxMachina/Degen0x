import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ProductCard from "@/components/ProductCard";
import FAQSection from "@/components/FAQSection";
import TableOfContents from "@/components/TableOfContents";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { CRYPTO_ETFS, ETF_FAQS } from "@/data/investing";

export const metadata: Metadata = {
  title: `Best Crypto ETFs ${CURRENT_YEAR} - Top Bitcoin & Ethereum ETFs`,
  description: `Compare the best cryptocurrency ETFs for ${CURRENT_YEAR}. Expert analysis of spot Bitcoin ETFs, Ethereum ETFs, expense ratios, and performance for investors.`,
  alternates: { canonical: "/investing/best/crypto-etfs" },
};

const toc = [
  { id: "top-picks", title: "Top Crypto ETFs", level: 2 },
  { id: "what-are-crypto-etfs", title: "What Are Crypto ETFs", level: 2 },
  { id: "bitcoin-vs-ethereum", title: "Bitcoin vs Ethereum ETFs", level: 2 },
  { id: "how-to-buy", title: "How to Buy Crypto ETFs", level: 2 },
  { id: "etf-vs-direct", title: "ETFs vs Buying Crypto Directly", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
];

export default function BestCryptoETFsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Best Crypto ETFs", href: "/investing/best/crypto-etfs" },
      ]} />

      <AffiliateDisclosure />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Crypto ETFs for {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Crypto ETFs provide the easiest way to gain exposure to Bitcoin and Ethereum through
          your existing brokerage or retirement account. We compare the top spot crypto ETFs
          by expense ratio, AUM, liquidity, and custodial quality.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <TableOfContents items={toc} />

      <section id="top-picks" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Top Crypto ETFs for {CURRENT_YEAR}</h2>
        <div className="space-y-4">
          {CRYPTO_ETFS.map((product, idx) => (
            <ProductCard key={product.slug} product={product} rank={idx + 1} categorySlug="investing" />
          ))}
        </div>
      </section>

      <section id="what-are-crypto-etfs" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Are Crypto ETFs?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Cryptocurrency Exchange-Traded Funds are regulated investment vehicles that track the
          price of cryptocurrencies like Bitcoin or Ethereum. Spot crypto ETFs hold the actual
          underlying asset, meaning when you buy shares of a Bitcoin ETF, the fund purchases
          and stores real Bitcoin on your behalf. This is different from futures-based ETFs, which
          track derivative contracts rather than the asset itself.
        </p>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We are long-term Bitcoin and Ethereum believers. Our analysis of other assets applies the same rigorous framework regardless of personal conviction.
          </p>
        </div>
        <p className="text-[var(--color-text-secondary)]">
          The approval of spot Bitcoin ETFs in January 2024 was a watershed moment for crypto
          adoption, bringing billions in institutional capital into the market. Spot Ethereum
          ETFs followed later that year. These products trade on traditional stock exchanges
          and are available through virtually every brokerage account, including IRAs and 401(k)s,
          making them the most accessible way for traditional investors to gain crypto exposure.
        </p>
      </section>

      <section id="bitcoin-vs-ethereum" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Bitcoin ETFs vs Ethereum ETFs</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Bitcoin ETFs like IBIT and FBTC offer exposure to Bitcoin, the largest cryptocurrency
          by market cap. Bitcoin is primarily valued as a digital store of value and inflation
          hedge, making Bitcoin ETFs suitable for conservative crypto allocations. These ETFs
          have attracted significantly more capital than their Ethereum counterparts.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Ethereum ETFs like ETHA provide exposure to the leading smart contract platform. Ethereum
          has different value drivers than Bitcoin, including DeFi activity, NFT markets, and
          Layer 2 growth. However, current Ethereum ETFs do not pass through staking rewards,
          meaning you miss out on the 3-4% annual yield available to direct ETH stakers. For
          investors who want both assets, a combination approach works well.
        </p>
      </section>

      <section id="how-to-buy" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How to Buy Crypto ETFs</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Buying crypto ETFs is as simple as purchasing any stock or ETF through your brokerage
          account. Open or log into your account at Fidelity, Schwab, Vanguard, or any other
          brokerage. Search for the ETF ticker (IBIT, FBTC, ETHA, etc.), enter the number of
          shares you want to buy, and place your order during market hours. Most brokerages charge
          zero commission for ETF trades.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Crypto ETFs are also available in tax-advantaged accounts like Traditional and Roth IRAs.
          This means you can gain crypto exposure while benefiting from tax-deferred or tax-free
          growth, which is not possible when holding crypto directly on exchanges or in self-custody
          wallets.
        </p>
      </section>

      <section id="etf-vs-direct" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">ETFs vs Buying Crypto Directly</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Crypto ETFs offer convenience, regulation, and tax-advantaged account access but come
          with annual expense ratios (typically 0.20-0.25%) and no ability to use your crypto
          in DeFi or earn staking rewards. Buying crypto directly on exchanges gives you full
          control, staking opportunities, and DeFi access but requires managing your own security
          and does not fit into traditional retirement accounts.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Many investors use both approaches. ETFs work well for long-term retirement allocations
          and investors who prefer traditional financial infrastructure. Direct ownership is
          better for active crypto users who want to participate in staking, DeFi, and governance.
          Your choice depends on your investment goals, technical comfort level, and desired
          level of involvement with the crypto ecosystem.
        </p>
      </section>

      <section id="faq">
        <FAQSection faqs={ETF_FAQS} />
      </section>
    </div>
  );
}
