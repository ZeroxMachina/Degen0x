import { Metadata } from "next";
import Link from "next/link";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import Breadcrumb from '@/components/Breadcrumb';
import BackToTop from "@/components/BackToTop";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


const S = {
  bg: "var(--color-bg, #0d1117)",
  surface: "var(--color-surface, #161b22)",
  border: "var(--glass-border, #30363d)",
  text: "var(--color-text, #e6edf3)",
  text2: "var(--color-text-secondary, #8b949e)",
  primary: "#8b5cf6",
  blue: "#58a6ff",
  green: "#3fb950",
  orange: "#f0883e",
  yellow: "#d29922",
};

export const metadata: Metadata = {
  title: "Solana ETF Guide 2026 — Spot SOL ETF Status, How to Invest",
  description: "Everything you need to know about the Solana ETF in 2026. Track approval status, compare SOL ETF issuers (VanEck, 21Shares, Grayscale), understand fees, and",
  keywords: ["solana etf", "sol etf", "spot solana etf", "solana etf approval", "solana etf 2026", "sol etf how to buy", "vaneck solana etf", "grayscale solana trust", "crypto etf"],
  openGraph: {
    title: "Solana ETF Guide 2026 — Everything You Need to Know | degen0x",
    description: "Spot Solana ETF filings, approval timeline, issuer comparison, fee breakdown, and how to invest. The complete SOL ETF guide for 2026.",
    url: "https://degen0x.com/learn/solana-etf-guide-2026",
    type: "article",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    images: [{ url: "https://degen0x.com/api/og?title=Solana+ETF+Guide+2026&category=Learn&type=learn", width: 1200, height: 630, alt: "Solana ETF Guide 2026 — degen0x" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana ETF Guide 2026",
    description: "Spot Solana ETF status, issuer comparison, fees, and how to invest. The complete SOL ETF guide.",
  },

  alternates: { canonical: "/learn/solana-etf-guide-2026" }};

const articleSchema = generateArticleSchema({
  title: "Solana ETF Guide 2026 — Spot SOL ETF Status, Issuers, Fees & How to Invest",
  description: "Complete guide to the Solana ETF in 2026. Track approval status, compare VanEck, 21Shares, Grayscale, Canary Capital, and Bitwise SOL ETF filings. Understand expense ratios, staking yield, and how SOL ETFs differ from buying SOL directly.",
  url: "https://degen0x.com/learn/solana-etf-guide-2026",
  datePublished: "2026-03-17T00:00:00Z",
  dateModified: "2026-03-17T00:00:00Z",
  author: "degen0x Team",
  image: "https://degen0x.com/api/og?title=Solana+ETF+Guide+2026&category=Learn&type=learn",
  wordCount: 2800,
});

const faqSchema = generateFAQSchema([
  { question: "Is a Solana ETF approved in the US?", answer: "Multiple asset managers including VanEck, 21Shares, Grayscale, Canary Capital, and Bitwise have filed for spot Solana ETFs with the SEC. Approval decisions are expected in 2026, following the precedent set by Bitcoin and Ethereum spot ETF approvals in 2024." },
  { question: "How is a Solana ETF different from buying SOL directly?", answer: "A Solana ETF trades on traditional stock exchanges (NYSE, Nasdaq) through your regular brokerage account. You don't need a crypto wallet, private keys, or a crypto exchange account. However, you can't stake ETF shares for yield, can't use SOL in DeFi, and you pay an annual expense ratio (typically 0.20-0.95%)." },
  { question: "Can you stake SOL through a Solana ETF?", answer: "Some Solana ETF filings have proposed including staking yield as part of the fund's returns. If approved, this would be a unique advantage over Bitcoin ETFs (which can't generate staking yield). However, the SEC may require ETF issuers to exclude staking revenue initially." },
  { question: "What are the fees for a Solana ETF?", answer: "Expected expense ratios range from 0.20% to 0.95% annually. Some issuers may offer fee waivers in the first year to attract assets. Compare this to buying SOL directly on an exchange (0.1-0.5% one-time trading fee) or through DeFi (gas fees only)." },
  { question: "Should I buy a Solana ETF or SOL directly?", answer: "A Solana ETF is better for traditional investors who want SOL exposure through a brokerage or retirement account (IRA/401k) without managing crypto custody. Buying SOL directly is better for users who want staking yield (6-8% APY), DeFi access, and lower long-term costs. Many investors use both approaches." },
]);

const schemas = combineSchemas([articleSchema, faqSchema]);

export default function SolanaETFGuide() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", paddingBottom: "4rem" }}>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Learn", href: "/learn" },
        { label: "Solana ETF Guide", href: "#" }
      ]} />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1rem" }}>
        <StructuredData data={schemas} />
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            <span style={{ backgroundColor: S.surface, border: `1px solid ${S.border}`, padding: "0.4rem 0.8rem", borderRadius: "4px", fontSize: "0.85rem" }}>📈 Investing</span>
            <span style={{ backgroundColor: S.surface, border: `1px solid ${S.border}`, padding: "0.4rem 0.8rem", borderRadius: "4px", fontSize: "0.85rem" }}>ETFs</span>
            <span style={{ backgroundColor: "#d29922", color: "#000", padding: "0.4rem 0.8rem", borderRadius: "4px", fontSize: "0.85rem", fontWeight: "600" }}>Beginner</span>
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "0.5rem" }}>Solana ETF Guide 2026</h1>
          <p style={{ fontSize: "1.2rem", color: S.text2 }}>Spot SOL ETF Status, Issuers, Fees & How to Invest</p>
          <p style={{ color: S.text2, marginTop: "1rem", fontSize: "0.9rem" }}>Updated March 17, 2026 · 13 min read</p>
        </div>

        <div style={{ backgroundColor: S.surface, border: `1px solid ${S.border}`, borderRadius: "8px", padding: "1.5rem", marginBottom: "2rem" }}>
          <p style={{ lineHeight: "1.7" }}>A Solana ETF lets you invest in SOL through a traditional brokerage account — no crypto wallets or exchanges required. Multiple asset managers have filed for spot Solana ETFs with the SEC, following the successful launch of Bitcoin and Ethereum ETFs in 2024. This guide covers the approval timeline, compares every major issuer, breaks down the fees, and helps you decide whether a Solana ETF or direct SOL ownership is right for you.</p>
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginTop: "2.5rem", marginBottom: "1rem" }}>Why a Solana ETF Matters</h2>
        <p style={{ color: S.text2, lineHeight: "1.7", marginBottom: "1.5rem" }}>Bitcoin ETFs attracted over $30B in net inflows within their first year. Ethereum ETFs followed with strong demand. A Solana ETF would represent the third major crypto asset available to traditional investors — and the first one that could potentially include staking yield, making it uniquely attractive.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {[
            { label: "5+", desc: "ETF Issuers Filed with the SEC" },
            { label: "$80B+", desc: "SOL Market Cap (March 2026)" },
            { label: "6-8%", desc: "SOL Staking APY (Potential ETF Yield)" },
            { label: "$30B+", desc: "Bitcoin ETF First-Year Inflows (Precedent)" }
          ].map((stat, i) => (
            <div key={i} style={{ backgroundColor: S.surface, border: `1px solid ${S.border}`, borderRadius: "8px", padding: "1.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: "700", color: S.primary, marginBottom: "0.5rem" }}>{stat.label}</div>
              <div style={{ color: S.text2, fontSize: "0.9rem" }}>{stat.desc}</div>
            </div>        ))}


        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-17"
          updatedDate="2026-03-17"
          readingTime={3}
          section="learn"
        />


        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginTop: "2.5rem", marginBottom: "1rem" }}>What Is a Solana ETF?</h2>
        <p style={{ color: S.text2, lineHeight: "1.7", marginBottom: "1rem" }}>A spot Solana ETF is an exchange-traded fund that holds actual SOL tokens and tracks the price of Solana. It trades on traditional stock exchanges like the NYSE or Nasdaq, meaning you can buy and sell shares through any brokerage account — Fidelity, Schwab, Robinhood, or your retirement account.</p>
        <p style={{ color: S.text2, lineHeight: "1.7", marginBottom: "1.5rem" }}>Unlike buying SOL on Coinbase or Phantom, an ETF handles custody, security, and regulatory compliance for you. The tradeoff is an annual expense ratio and reduced flexibility (no staking, no DeFi, no transfers).</p>

        <div style={{ backgroundColor: S.surface, border: `1px solid ${S.primary}`, borderRadius: "8px", padding: "1.5rem", marginBottom: "2rem" }}>
          <p style={{ fontWeight: "700", marginBottom: "0.8rem" }}>💡 Key Difference: Solana vs Bitcoin/Ethereum ETFs</p>
          <p style={{ color: S.text2, lineHeight: "1.7" }}>Solana is a proof-of-stake network, meaning SOL can be staked for ~6-8% annual yield. Some Solana ETF filings propose passing this staking yield to shareholders — a feature impossible with Bitcoin ETFs and not yet included in Ethereum ETFs. This could make Solana ETFs the first crypto ETF with built-in yield.</p>
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginTop: "2.5rem", marginBottom: "1rem" }}>Solana ETF Issuers Compared</h2>
        <p style={{ color: S.text2, lineHeight: "1.7", marginBottom: "1.5rem" }}>Several major asset managers have filed for spot Solana ETFs. Here's how they compare:</p>
        <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${S.border}` }}>
                {["Issuer", "Product", "Expected Fee", "Staking Yield?", "Custodian"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "1rem", color: S.primary, fontWeight: "700" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: "VanEck", product: "VanEck Solana Trust", fee: "~0.20%", staking: "Proposed", custodian: "Institutional-grade" },
                { name: "21Shares", product: "21Shares Core Solana", fee: "~0.21%", staking: "Proposed", custodian: "Coinbase Custody" },
                { name: "Grayscale", product: "Grayscale Solana Trust (GSOL)", fee: "~0.75%", staking: "Under review", custodian: "Coinbase Custody" },
                { name: "Canary Capital", product: "Canary Solana ETF", fee: "~0.50%", staking: "Proposed", custodian: "BitGo" },
                { name: "Bitwise", product: "Bitwise Solana ETF", fee: "~0.25%", staking: "Proposed", custodian: "Coinbase Custody" }
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${S.border}` }}>
                  <td style={{ padding: "1rem", fontWeight: "600" }}>{row.name}</td>
                  <td style={{ padding: "1rem", color: S.text2 }}>{row.product}</td>
                  <td style={{ padding: "1rem", color: S.green }}>{row.fee}</td>
                  <td style={{ padding: "1rem", color: S.blue }}>{row.staking}</td>
                  <td style={{ padding: "1rem", color: S.text2, fontSize: "0.9rem" }}>{row.custodian}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginTop: "2.5rem", marginBottom: "1rem" }}>Approval Timeline & Regulatory Status</h2>
        <p style={{ color: S.text2, lineHeight: "1.7", marginBottom: "1.5rem" }}>The SEC's path to a Solana ETF follows the same pattern as Bitcoin and Ethereum ETFs. Here are the key milestones:</p>
        <ol style={{ backgroundColor: S.surface, border: `1px solid ${S.border}`, borderRadius: "8px", padding: "1.5rem", marginBottom: "2rem", lineHeight: "1.8" }}>
          <li style={{ marginBottom: "1rem" }}><strong>Bitcoin Spot ETFs Approved (Jan 2024):</strong> 11 issuers launched simultaneously, attracting $30B+ in year-one inflows</li>
          <li style={{ marginBottom: "1rem" }}><strong>Ethereum Spot ETFs Approved (May 2024):</strong> SEC approved 19b-4 filings, ETH ETFs launched in July 2024</li>
          <li style={{ marginBottom: "1rem" }}><strong>Solana ETF Filings (Mid-Late 2024):</strong> VanEck, 21Shares, Canary Capital, Grayscale, and Bitwise filed S-1 registrations</li>
          <li style={{ marginBottom: "1rem" }}><strong>SEC Leadership Change (2025):</strong> New SEC leadership under a crypto-friendlier administration shifted regulatory posture</li>
          <li><strong>Expected Decision (2026):</strong> SEC review process underway with multiple comment periods and potential approval windows</li>
        </ol>

        <div style={{ backgroundColor: S.surface, border: `1px solid ${S.orange}`, borderRadius: "8px", padding: "1.5rem", marginBottom: "2rem" }}>
          <p style={{ fontWeight: "700", marginBottom: "0.8rem", color: S.orange }}>⚡ Key Regulatory Question: Is SOL a Security?</p>
          <p style={{ color: S.text2, lineHeight: "1.7" }}>The SEC previously classified SOL as a security in lawsuits against crypto exchanges. For a Solana ETF to be approved, the SEC would need to either reverse this classification or create a regulatory framework that accommodates securities-based crypto ETFs. This is the single biggest hurdle for approval.</p>
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginTop: "2.5rem", marginBottom: "1rem" }}>Solana ETF vs Buying SOL Directly</h2>
        <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${S.border}` }}>
                {["Factor", "Solana ETF", "Direct SOL Purchase"].map(h => (
                  <th key={h} style={{ textAlign: "left", padding: "1rem", color: S.primary, fontWeight: "700" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { factor: "Where to Buy", etf: "Brokerage (Fidelity, Schwab)", direct: "Crypto exchange (Coinbase, Phantom)" },
                { factor: "Custody", etf: "Fund handles it", direct: "You manage keys" },
                { factor: "Annual Cost", etf: "0.20-0.95% expense ratio", direct: "0% (after one-time trade fee)" },
                { factor: "Staking Yield", etf: "Maybe (if approved)", direct: "Yes — 6-8% APY" },
                { factor: "DeFi Access", etf: "No", direct: "Full access (Marinade, Jupiter, Raydium)" },
                { factor: "Tax Account", etf: "IRA / 401k eligible", direct: "Taxable account only (usually)" },
                { factor: "Trading Hours", etf: "Market hours (9:30-4 ET)", direct: "24/7/365" },
                { factor: "Security Risk", etf: "Institutional custody", direct: "Self-custody (seed phrase)" }
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${S.border}` }}>
                  <td style={{ padding: "1rem", fontWeight: "600" }}>{row.factor}</td>
                  <td style={{ padding: "1rem", color: S.text2 }}>{row.etf}</td>
                  <td style={{ padding: "1rem", color: S.text2 }}>{row.direct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginTop: "2.5rem", marginBottom: "1rem" }}>Who Should Consider a Solana ETF?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {[
            { title: "Traditional Investors", desc: "Want SOL exposure without learning crypto custody, wallets, or exchanges. Buy through your existing brokerage." },
            { title: "Retirement Accounts", desc: "Want to hold SOL in an IRA or 401k for tax-advantaged gains. ETFs are the only way to do this easily." },
            { title: "Institutional Allocators", desc: "Funds, family offices, and advisors who need regulated, audited crypto exposure with institutional custody." },
            { title: "Diversified Crypto Exposure", desc: "Already hold BTC and ETH ETFs. A SOL ETF adds L1 diversification with potential staking yield." }
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: S.surface, border: `1px solid ${S.border}`, borderRadius: "8px", padding: "1.5rem" }}>
              <div style={{ fontWeight: "700", marginBottom: "0.5rem", color: S.primary }}>{item.title}</div>
              <p style={{ color: S.text2, fontSize: "0.95rem" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginTop: "2.5rem", marginBottom: "1rem" }}>The Staking Yield Advantage</h2>
        <p style={{ color: S.text2, lineHeight: "1.7", marginBottom: "1.5rem" }}>What makes a Solana ETF potentially more attractive than Bitcoin or Ethereum ETFs is staking yield. Solana validators earn ~6-8% APY for securing the network, and several ETF filings propose passing this yield to shareholders.</p>
        <div style={{ backgroundColor: S.surface, border: `1px solid ${S.border}`, borderRadius: "8px", padding: "1.5rem", marginBottom: "2rem" }}>
          <p style={{ fontWeight: "700", marginBottom: "1rem" }}>Hypothetical Staking Yield Comparison</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", textAlign: "center" }}>
            {[
              { label: "Bitcoin ETF", yield: "0%", note: "No staking (PoW)" },
              { label: "Ethereum ETF", yield: "0%*", note: "Staking excluded (so far)" },
              { label: "Solana ETF", yield: "~6-8%", note: "Staking yield proposed" }
            ].map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: "1.4rem", fontWeight: "700", color: i === 2 ? S.green : S.text2 }}>{item.yield}</div>
                <div style={{ fontWeight: "600", marginBottom: "0.3rem" }}>{item.label}</div>
                <div style={{ color: S.text2, fontSize: "0.85rem" }}>{item.note}</div>
              </div>
            ))}
          </div>
          <p style={{ color: S.text2, fontSize: "0.85rem", marginTop: "1rem" }}>*Ethereum ETFs could add staking yield in the future, but it hasn't been approved yet.</p>
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginTop: "2.5rem", marginBottom: "1rem" }}>Risks to Consider</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
          <div style={{ backgroundColor: S.surface, border: `2px solid ${S.orange}`, borderRadius: "8px", padding: "1.5rem" }}>
            <div style={{ fontWeight: "700", color: S.orange, marginBottom: "1rem" }}>Regulatory Risks</div>
            <ul style={{ color: S.text2, lineHeight: "1.8", fontSize: "0.95rem" }}>
              <li>• SEC may reject or delay approval</li>
              <li>• SOL's "security" classification unresolved</li>
              <li>• Staking yield may be excluded initially</li>
              <li>• Political shifts could reverse progress</li>
            </ul>
          </div>
          <div style={{ backgroundColor: S.surface, border: `2px solid ${S.orange}`, borderRadius: "8px", padding: "1.5rem" }}>
            <div style={{ fontWeight: "700", color: S.orange, marginBottom: "1rem" }}>Market Risks</div>
            <ul style={{ color: S.text2, lineHeight: "1.8", fontSize: "0.95rem" }}>
              <li>• SOL is more volatile than BTC or ETH</li>
              <li>• Network outages have occurred historically</li>
              <li>• Concentrated validator set vs Ethereum</li>
              <li>• ETF premium/discount to NAV possible</li>
            </ul>
          </div>
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginTop: "2.5rem", marginBottom: "1rem" }}>Key Takeaways</h2>
        <div style={{ backgroundColor: S.surface, border: `1px solid ${S.primary}`, borderRadius: "8px", padding: "1.5rem", marginBottom: "2rem" }}>
          <ul style={{ lineHeight: "1.8" }}>
            <li style={{ marginBottom: "0.8rem" }}>✦ Multiple major asset managers (VanEck, 21Shares, Grayscale, Bitwise) have filed for spot Solana ETFs</li>
            <li style={{ marginBottom: "0.8rem" }}>✦ A Solana ETF would be the first crypto ETF that could include staking yield (~6-8% APY)</li>
            <li style={{ marginBottom: "0.8rem" }}>✦ Expected expense ratios range from 0.20% to 0.95% annually</li>
            <li style={{ marginBottom: "0.8rem" }}>✦ Best for traditional investors, retirement accounts, and institutional allocators</li>
            <li>✦ Biggest hurdle: SEC classification of SOL as a potential security</li>
          </ul>
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: "700", marginTop: "2.5rem", marginBottom: "1rem" }}>Related Resources</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {[
            { title: "Bitcoin ETF Guide 2026", href: "/learn/bitcoin-etf-guide-2026" },
            { title: "Crypto ETFs Guide", href: "/learn/crypto-etfs-guide" },
            { title: "Altcoin ETF Guide 2026", href: "/learn/altcoin-etf-guide-2026" },
            { title: "Staking APY Calculator", href: "/tools/staking-apy-calculator" },
            { title: "ETF Tracker", href: "/tools/etf-tracker" }
          ].map((link, i) => (
            <a key={i} href={link.href} style={{ backgroundColor: S.surface, border: `1px solid ${S.border}`, borderRadius: "8px", padding: "1.5rem", textDecoration: "none", color: S.blue, fontWeight: "600", transition: "all 0.2s" }}>
              → {link.title}
            </a>
          ))}
        </div>

        <div style={{ backgroundColor: S.surface, border: `1px solid ${S.yellow}`, borderRadius: "8px", padding: "1.5rem", marginBottom: "2rem" }}>
          <p style={{ color: S.text, lineHeight: "1.7" }}>⚠️ <strong>Disclaimer:</strong> This guide is for informational purposes only. It is not financial advice. ETF availability, fees, and features may change. Always do your own research before making investment decisions.</p>
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Solana Etf Guide 2026",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/solana-etf-guide-2026"
            })
          }}
        />
      </div>
      <BackToTop />
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
