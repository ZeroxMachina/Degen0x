import { Metadata } from "next";
import TokenSecurityScanner from "@/components/TokenSecurityScanner";
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import { generateToolPageSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


// ── SEO Metadata ────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Token Security Scanner - Rug Pull & Honeypot Checker | degen0x",
  description: "Scan any crypto token contract for rug pull risks, honeypot functions, and security red flags. Free token security checker across 6+ chains.",
  keywords: "token security scanner, rug pull checker, honeypot detector, crypto scam checker, smart contract audit, token safety",
  openGraph: {
    title: "Token Security Scanner - Check Any Crypto Token | degen0x",
    description: "Free crypto token security scanner. Detect rug pulls, honeypots, and scam tokens before you buy.",
    url: "https://degen0x.com/tools/token-security-scanner",
    type: "website",
    images: [{
      url: "https://degen0x.com/og-token-security-scanner.svg",
      width: 1200,
      height: 630,
      alt: "degen0x Token Security Scanner",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Token Security Scanner | degen0x",
    description: "Scan any token for rug pull risks and honeypot functions. Free, no signup.",
  },
};

// ── Structured Data ─────────────────────────────────────────
const toolSchema = generateToolPageSchema({
  name: "Token Security Scanner",
  description: "Scan any crypto token contract for rug pull risks, honeypot functions, and security red flags. Free token security checker across 6+ chains.",
  url: "https://degen0x.com/tools/token-security-scanner",
  category: "Security",
});

const faqSchema = generateFAQSchema([
  {
    question: "What is a rug pull in crypto?",
    answer: "A rug pull is a type of scam where a project's creators abandon the project and steal all the liquidity from the pool, leaving investors with worthless tokens. Rug pulls can happen suddenly with zero notice, making detection tools essential for safety.",
  },
  {
    question: "How does honeypot detection work?",
    answer: "A honeypot token allows investors to buy tokens but blocks them from selling. Our scanner checks contract functions to detect sell restrictions, blacklist functions, and other mechanisms that prevent token sales.",
  },
  {
    question: "What does it mean if a contract is verified?",
    answer: "A verified contract means the source code is publicly visible on the blockchain explorer (like Etherscan). Unverified contracts are a major red flag because the actual code cannot be reviewed independently.",
  },
  {
    question: "Why is liquidity locking important?",
    answer: "When liquidity is locked, the developer cannot withdraw it immediately. This reduces rug pull risk significantly. We check lock duration and whether liquidity is controlled by a multi-sig wallet rather than a single person.",
  },
  {
    question: "What is a mint function and why does it matter?",
    answer: "A mint function allows creators to create new tokens at will, instantly diluting your investment. Hidden mint functions are a common scam technique. We flag contracts with unrestricted mint capabilities.",
  },
  {
    question: "What chains are supported by this scanner?",
    answer: "Our Token Security Scanner supports Ethereum, BSC (Binance Smart Chain), Arbitrum, Base, Polygon, and Solana. You can select your chain and instantly scan any token contract.",
  },
]);

const combinedSchemas = combineSchemas(toolSchema, faqSchema);

export default function TokenSecurityScannerPage() {
  return (
    <div style={{ backgroundColor: "var(--color-bg)" }} className="min-h-screen">
      <StructuredData data={combinedSchemas} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* ────── Breadcrumb ────── */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Token Security Scanner" },
          ]}
        />

        {/* ────── Hero Section ────── */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30">
              Security
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-4">
            Token Security Scanner
          </h1>

          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8">
            Scan any crypto token contract for rug pull risks, honeypot functions, and security red flags.
            Get a detailed security report in seconds.
          </p>
        </div>

        {/* ────── Scanner Component ────── */}
        <div className="mb-16">
          <TokenSecurityScanner />
        </div>

        {/* ────── Features Section ────── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8 text-center">
            Comprehensive Security Analysis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1: Multi-Chain Support */}
            <div
              className="glass p-6 rounded-lg border border-[var(--glass-border)]"
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                Multi-Chain Support
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Scan tokens across 6+ chains: Ethereum, BSC, Arbitrum, Base, Polygon, and Solana.
              </p>
            </div>

            {/* Feature 2: Honeypot Detection */}
            <div
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              <div className="text-3xl mb-3">🍯</div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                Honeypot Detection
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Detects sell restrictions, blacklist functions, and other mechanisms that prevent token sales.
              </p>
            </div>

            {/* Feature 3: Liquidity Analysis */}
            <div
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              <div className="text-3xl mb-3">💧</div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                Liquidity Analysis
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Check if liquidity is locked, duration, and whether it's controlled by multi-sig wallets.
              </p>
            </div>

            {/* Feature 4: Contract Audit */}
            <div
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                Contract Audit
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Verifies source code, checks for hidden mint functions, and analyzes owner privileges.
              </p>
            </div>
          </div>

        <AuthorAttribution
          author="0xMachina"
          role="Founder"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="tools"
        />

        </section>

        {/* ────── How to Use Section ────── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8 text-center">
            How to Use
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div
                className="glass p-6 rounded-lg border border-[var(--glass-border)] min-h-[200px] flex flex-col justify-between"
                style={{
                  background: "var(--glass-bg)",
                  backdropFilter: "var(--glass-blur)",
                }}
              >
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
                    Enter Token Address
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Copy and paste the token contract address from your blockchain explorer. Make sure it matches your target chain.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div
                style={{
                  background: "var(--glass-bg)",
                  backdropFilter: "var(--glass-blur)",
                }}
              >
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
                    Select Blockchain
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Choose the correct blockchain where the token is deployed: Ethereum, BSC, Arbitrum, Base, Polygon, or Solana.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div
                style={{
                  background: "var(--glass-bg)",
                  backdropFilter: "var(--glass-blur)",
                }}
              >
                <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
                    Review Results
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Get a detailed security report with risk score, individual check results, and token holder information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ────── FAQ Section ────── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details
              className="glass p-6 rounded-lg border border-[var(--glass-border)] cursor-pointer group"
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text)] select-none">
                <span>What is a rug pull in crypto?</span>
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-sm text-[var(--color-text-secondary)] mt-4">
                A rug pull is a type of scam where a project's creators abandon the project and steal all the liquidity from the pool,
                leaving investors with worthless tokens. Rug pulls can happen suddenly with zero notice, making detection tools essential
                for safety.
              </p>
            </details>

            {/* FAQ 2 */}
            <details
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text)] select-none">
                <span>How does honeypot detection work?</span>
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-sm text-[var(--color-text-secondary)] mt-4">
                A honeypot token allows investors to buy tokens but blocks them from selling. Our scanner checks contract functions to
                detect sell restrictions, blacklist functions, and other mechanisms that prevent token sales.
              </p>
            </details>

            {/* FAQ 3 */}
            <details
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text)] select-none">
                <span>What does it mean if a contract is verified?</span>
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-sm text-[var(--color-text-secondary)] mt-4">
                A verified contract means the source code is publicly visible on the blockchain explorer (like Etherscan). Unverified
                contracts are a major red flag because the actual code cannot be reviewed independently.
              </p>
            </details>

            {/* FAQ 4 */}
            <details
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text)] select-none">
                <span>Why is liquidity locking important?</span>
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-sm text-[var(--color-text-secondary)] mt-4">
                When liquidity is locked, the developer cannot withdraw it immediately. This reduces rug pull risk significantly. We
                check lock duration and whether liquidity is controlled by a multi-sig wallet rather than a single person.
              </p>
            </details>

            {/* FAQ 5 */}
            <details
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text)] select-none">
                <span>What is a mint function and why does it matter?</span>
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-sm text-[var(--color-text-secondary)] mt-4">
                A mint function allows creators to create new tokens at will, instantly diluting your investment. Hidden mint functions
                are a common scam technique. We flag contracts with unrestricted mint capabilities.
              </p>
            </details>

            {/* FAQ 6 */}
            <details
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              <summary className="flex items-center justify-between font-semibold text-[var(--color-text)] select-none">
                <span>What chains are supported by this scanner?</span>
                <span className="text-[var(--color-primary)] group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="text-sm text-[var(--color-text-secondary)] mt-4">
                Our Token Security Scanner supports Ethereum, BSC (Binance Smart Chain), Arbitrum, Base, Polygon, and Solana. You can
                select your chain and instantly scan any token contract.
              </p>
            </details>
          </div>
        </section>

        {/* ────── Related Tools Section ────── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8 text-center">
            Related Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Related Tool 1 */}
            <a
              className="glass p-4 rounded-lg border border-[var(--glass-border)] hover:border-[var(--color-primary)] transition-colors group"
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-semibold text-[var(--color-text)] text-sm group-hover:text-[var(--color-primary)] transition-colors">
                Wallet Security Audit
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                Audit your wallet security practices
              </p>
            </a>

            {/* Related Tool 2 */}
            <a
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-[var(--color-text)] text-sm group-hover:text-[var(--color-primary)] transition-colors">
                DeFi Risk Scanner
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                Assess protocol risks
              </p>
            </a>

            {/* Related Tool 3 */}
            <a
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold text-[var(--color-text)] text-sm group-hover:text-[var(--color-primary)] transition-colors">
                Smart Money Tracker
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                Track whale activity
              </p>
            </a>

            {/* Related Tool 4 */}
            <a
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              <div className="text-2xl mb-2">📈</div>
              <h3 className="font-semibold text-[var(--color-text)] text-sm group-hover:text-[var(--color-primary)] transition-colors">
                Token Screener
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                Filter & find tokens
              </p>
            </a>

            {/* Related Tool 5 */}
            <a
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
              }}
            >
              <div className="text-2xl mb-2">📚</div>
              <h3 className="font-semibold text-[var(--color-text)] text-sm group-hover:text-[var(--color-primary)] transition-colors">
                Common Scams Guide
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                Learn about crypto scams
              </p>
            </a>
          </div>
        </section>

        {/* ────── Educational Content ────── */}
        <section
          className="glass p-8 rounded-lg border border-[var(--glass-border)]"
          style={{
            background: "var(--glass-bg)",
            backdropFilter: "var(--glass-blur)",
          }}
        >
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
            Token Security: What You Need to Know
          </h2>

          <div className="space-y-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
            <p>
              Cryptocurrency theft and scams cost investors billions of dollars annually. According to recent reports, token-related
              frauds account for a significant portion of crypto losses, with rug pulls and honeypot contracts being among the most
              common attack vectors. Unlike traditional finance where transactions can be reversed, blockchain transactions are
              permanent and irreversible.
            </p>

            <p>
              The Token Security Scanner was designed to help investors make informed decisions before buying tokens. By checking for
              common red flags like unverified contracts, suspicious functions, and concentrated holder distributions, you can
              significantly reduce your exposure to scams and fraudulent projects.
            </p>

            <p>
              Key security indicators include: contract verification status, liquidity lock duration, presence of mint/pause functions,
              blacklist mechanisms, tax rates, and holder concentration. A high-risk score doesn't always mean a token is a scam, but
              it should prompt further research before investing.
            </p>

            <p>
              This tool should be part of your due diligence process alongside community research, team verification, and fundamental
              analysis. Always remember the golden rule: if something seems too good to be true, it probably is. Take your time, do
              your research, and never invest more than you can afford to lose.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
