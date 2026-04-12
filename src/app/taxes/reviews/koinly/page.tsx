import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import StarRating from "@/components/StarRating";
import TableOfContents from "@/components/TableOfContents";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Koinly Review (${CURRENT_YEAR}) - Fees, Features, Pros & Cons | ${SITE_NAME}`,
  description: `In-depth Koinly review for ${CURRENT_YEAR}. We tested Koinly's crypto tax software covering pricing, exchange integrations, DeFi support, accuracy, and ease of use.`,
  alternates: { canonical: "/taxes/reviews/koinly" }};

const toc = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "key-features", title: "Key Features", level: 2 },
  { id: "pricing", title: "Pricing & Plans", level: 2 },
  { id: "supported-integrations", title: "Supported Integrations", level: 2 },
  { id: "defi-nft-support", title: "DeFi & NFT Support", level: 2 },
  { id: "tax-reports", title: "Tax Reports & Forms", level: 2 },
  { id: "ease-of-use", title: "Ease of Use", level: 2 },
  { id: "pros-cons", title: "Pros & Cons", level: 2 },
  { id: "who-is-it-for", title: "Who Is Koinly Best For?", level: 2 },
  { id: "verdict", title: "Final Verdict", level: 2 },
];

const faqs = [
  { question: "Is Koinly free to use?", answer: "Koinly offers a free portfolio tracking tier with unlimited transaction imports. However, generating tax reports requires a paid plan starting at $49 per year. The free tier lets you import data and preview your tax summary before committing to a purchase." },
  { question: "Does Koinly support DeFi transactions?", answer: "Yes. Koinly supports automatic DeFi tracking for most major protocols including Uniswap, Aave, Compound, and Curve. It can detect swaps, liquidity pool entries/exits, staking rewards, and yield farming income. Some less common protocols may require manual CSV import." },
  { question: "How accurate is Koinly?", answer: "Koinly is highly accurate for standard exchange trades and most DeFi transactions. It supports all IRS-approved cost basis methods (FIFO, LIFO, HIFO, ACB). Complex DeFi interactions may occasionally need manual review, but the platform flags potential issues for you to verify." },
  { question: "Can I use Koinly with TurboTax?", answer: "Koinly generates tax reports that can be imported into TurboTax. It exports IRS Form 8949 as a CSV or PDF that can be uploaded to TurboTax. However, it does not have the same direct integration that CoinTracker offers." },
];

export default function KoinlyReviewPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Taxes", href: "/taxes" },
          { label: "Reviews", href: "/taxes" },
          { label: "Koinly", href: "/taxes/reviews/koinly" },
        ]}
      />

      <AffiliateDisclosure />

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
            Koinly Review {CURRENT_YEAR}: Is It the Best Crypto Tax Software?
          </h1>
          <div className="flex items-center gap-4 mb-4">
            <StarRating rating={4.8} size="lg" />
            <span className="text-sm text-[var(--color-text-secondary)]">
              Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
            </span>
          </div>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Koinly is the most popular crypto tax software on the market, and for good reason.
            With 800+ exchange integrations, solid DeFi support, and multi-country tax report
            generation, it has earned our top rating. In this review, we cover everything you
            need to know about Koinly to decide if it is the right tool for your crypto taxes.
          </p>
          <div className="mt-4">
            <a
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="affiliate-cta inline-block px-6 py-3 rounded-lg text-white font-medium"
            >
              Try Koinly Free
            </a>
          </div>
        </header>

        <TableOfContents items={toc} />

        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Overview</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Founded in 2018, Koinly has grown to become the go-to crypto tax solution for
            investors worldwide. The platform supports over 800 exchanges, wallets, and
            blockchains, making it one of the most comprehensive integration networks in the
            industry. Koinly automatically imports your transaction history, calculates your
            capital gains and losses, and generates tax reports compliant with tax authorities
            in over 20 countries.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a0d14', border: '1px solid #4c1d2a', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📋</span>
            <strong style={{ color: '#fb7185', fontSize: 15 }}>Tax Reality Check</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Every jurisdiction has different rules, and they're changing fast. We note when guidance is US-specific vs. internationally applicable.
          </p>
        </div>
          <p className="text-[var(--color-text-secondary)] mb-4">
            What sets Koinly apart is its balance of power and simplicity. While it handles
            complex scenarios like DeFi yield farming, NFT trades, and multi-wallet tracking,
            the interface remains approachable for crypto newcomers who just need to report
            their Coinbase trades. The free portfolio tracking tier lets you import everything
            and see your tax summary before paying for the full report.
          </p>
        </section>

        <section id="key-features" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Auto-Import", desc: "Connect exchanges and wallets via API or CSV for automatic transaction import across 800+ platforms." },
              { title: "Smart Transfer Detection", desc: "Automatically matches transfers between your wallets so they are not miscategorized as taxable events." },
              { title: "Cost Basis Methods", desc: "Supports FIFO, LIFO, HIFO, and average cost methods. Switch between methods to optimize your tax position." },
              { title: "Tax Loss Harvesting", desc: "Identifies unrealized losses in your portfolio that you could sell to offset capital gains." },
              { title: "Multi-Country Reports", desc: "Generates tax reports for 20+ countries including US Form 8949, UK HMRC reports, and Australian ATO formats." },
              { title: "Portfolio Dashboard", desc: "Real-time portfolio tracking with performance charts, asset allocation, and transaction history." },
            ].map((f) => (
              <div key={f.title} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
                <h3 className="text-sm font-semibold text-[var(--color-text)] mb-1">{f.title}</h3>
                <p className="text-xs text-[var(--color-text-secondary)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Pricing & Plans</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Koinly uses a tiered pricing model based on the number of transactions per tax year.
            All plans include unlimited exchange integrations and access to every tax report format.
            The main difference between tiers is the transaction limit.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { plan: "Free", price: "$0", txns: "Unlimited imports", notes: "Portfolio tracking only, no tax reports" },
              { plan: "Newbie", price: "$49", txns: "100 transactions", notes: "Full tax reports for simple portfolios" },
              { plan: "Hodler", price: "$99", txns: "1,000 transactions", notes: "Most popular for active investors" },
              { plan: "Trader", price: "$179", txns: "10,000+ transactions", notes: "For active traders and DeFi users" },
            ].map((p) => (
              <div key={p.plan} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
                <h3 className="text-sm font-semibold text-[var(--color-text)]">{p.plan}</h3>
                <p className="text-2xl font-bold text-[var(--color-primary)] my-2">{p.price}</p>
                <p className="text-xs text-[var(--color-text-secondary)]">{p.txns}</p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">{p.notes}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="supported-integrations" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Supported Integrations</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Koinly supports over 800 integrations including all major centralized exchanges
            (Coinbase, Binance, Kraken, Gemini, KuCoin, and more), popular wallets (MetaMask,
            Ledger, Trezor, Trust Wallet), and direct blockchain imports for Ethereum, Bitcoin,
            Solana, Polygon, Arbitrum, Optimism, Avalanche, and many other networks. API
            connections provide real-time syncing, while CSV imports are available for platforms
            without API support.
          </p>
        </section>

        <section id="defi-nft-support" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">DeFi & NFT Support</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Koinly automatically detects and categorizes most DeFi transactions when you import
            data from blockchain addresses. It handles swaps on Uniswap and SushiSwap, lending
            and borrowing on Aave and Compound, yield farming rewards, liquidity pool entries
            and exits, and staking across various protocols. NFT purchases, sales, and royalties
            are also tracked with automatic cost basis calculation.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            While Koinly covers most common DeFi scenarios well, some edge cases on newer or
            less common protocols may require manual categorization. The platform flags
            unrecognized transactions and makes it easy to classify them correctly.
          </p>
        </section>

        <section id="tax-reports" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Tax Reports & Forms</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Koinly generates complete tax reports including IRS Form 8949, Schedule D, and
            international equivalents. Reports can be downloaded as PDF or CSV for manual
            filing, or exported in formats compatible with TurboTax, H&R Block, and
            TaxAct. The platform also provides a complete transaction history, income
            summary, and capital gains breakdown for your records.
          </p>
        </section>

        <section id="ease-of-use" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Ease of Use</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Koinly strikes an excellent balance between power and usability. The onboarding
            process guides you through connecting your first exchange, and the dashboard clearly
            shows your portfolio, transactions, and tax summary. The review workflow highlights
            transactions that need attention, making it easy to fix issues before generating
            your tax report. For most users with standard exchange activity, the process from
            import to tax report takes less than 30 minutes.
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";

          </p>
        </section>

        <section id="pros-cons" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Pros & Cons</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
              <h3 className="text-lg font-semibold text-[var(--color-success)] mb-3">Pros</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>+ 800+ exchange and wallet integrations</li>
                <li>+ Automatic DeFi and NFT tracking</li>
                <li>+ Free portfolio tracking tier</li>
                <li>+ Multi-country tax report generation</li>
                <li>+ Tax loss harvesting insights</li>
                <li>+ Smart transfer matching between wallets</li>
                <li>+ All cost basis methods supported</li>
              </ul>
            </div>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
              <h3 className="text-lg font-semibold text-[var(--color-danger)] mb-3">Cons</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>- Paid plans required for tax reports</li>
                <li>- Some DeFi protocols need manual import</li>
                <li>- Customer support can be slow during tax season</li>
                <li>- No direct TurboTax integration (CSV export only)</li>
                <li>- Higher tiers needed for active DeFi users</li>
              </ul>
            </div>
          </div>

        <AuthorAttribution
          author="NullPointer"
          role="Data Engineer"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="taxes"
        />

        </section>

        <section id="who-is-it-for" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Who Is Koinly Best For?</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Koinly is the best choice for most crypto investors. It is particularly well-suited
            for users who trade on multiple exchanges, hold assets in various wallets, and want
            a comprehensive tax solution that handles both CeFi and DeFi activity. International
            users benefit from its multi-country support, which is broader than most competitors.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            If you exclusively use DeFi and need the deepest protocol-level tracking,
            CryptoTaxCalculator may be a better fit. If you want direct TurboTax integration,
            consider CoinTracker. But for the best all-around experience, Koinly is hard to beat.
          </p>
        </section>

        <section id="verdict" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Final Verdict</h2>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <div className="flex items-center gap-4 mb-4">
              <StarRating rating={4.8} size="lg" />
              <span className="text-lg font-semibold text-[var(--color-text)]">4.8 / 5.0</span>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-4">
              Koinly earns our top rating for crypto tax software in {CURRENT_YEAR}. Its massive
              integration library, solid DeFi support, intuitive interface, and competitive
              pricing make it the best choice for the majority of crypto investors. The free
              portfolio tracking tier is a major advantage, letting you import everything and
              verify your data before committing to a paid plan.
            </p>
            <a
            >
              Try Koinly Free
            </a>
          </div>
        </section>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/taxes/compare/koinly-vs-cointracker" className="text-[var(--color-primary)] hover:underline">Koinly vs CoinTracker &#8594;</Link>
          <Link href="/taxes/compare/koinly-vs-cryptotaxcalculator" className="text-[var(--color-primary)] hover:underline">Koinly vs CryptoTaxCalculator &#8594;</Link>
          <Link href="/taxes/best/software" className="text-[var(--color-primary)] hover:underline">All Tax Software &#8594;</Link>
        </div>
      </article>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Overview", "description": "Crypto content on degen0x", "url": "https://degen0x.com/taxes/reviews/koinly"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={{
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
            All Learning Guides
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
            Crypto Tools
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
            Compare Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
