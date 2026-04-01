'use client';
import Breadcrumb from "@/components/Breadcrumb";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";

const S = {
  bg: "var(--color-bg, #0d1117)", border: "var(--glass-border, #30363d)",
  text: "var(--color-text, #e6edf3)", text2: "var(--color-text-secondary, #8b949e)",
  primary: "#6366f1", blue: "#58a6ff", green: "#3fb950", purple: "#bc8cff",
  yellow: "#d29922", red: "#f85149", orange: "#F6851B",
};

const breadcrumbs = [
  { label: "Home", href: "/" }, { label: "Learn", href: "/learn" },
  { label: "BitGo IPO Guide", href: "/learn/bitgo-ipo-crypto-infrastructure-guide" },
];

const faqData = [
  {
    question: "What is BitGo and why does it matter?",
    answer: "BitGo is a cryptocurrency custody and infrastructure company that serves institutional clients including asset managers, exchanges, and custodians. It provides multi-signature cold storage, institutional-grade APIs, and blockchain infrastructure. BitGo matters because it represents the first major pure-play crypto custody firm to go public, signaling that institutional adoption and maturity are reaching critical mass.",
  },
  {
    question: "What were BitGo's IPO details?",
    answer: "BitGo filed for IPO in January 2026, raising $212.8 million at $18 per share on the NYSE under ticker BTGO. The IPO valued the company at $2.08 billion. Trading began on January 22, 2026, with shares opening at $22.43 (24.6% above IPO price) and eventually closing at $18.49 (2.7% gain).",
  },
  {
    question: "What are BitGo's financials?",
    answer: "BitGo generated $308 million in revenue in FY2024 with a net profit of $15.66 million. The company is about to report Q4 2025 and full-year 2025 results on March 26, 2026 (the day after this guide&apos;s publication) with a conference call at 5:00 PM ET. These earnings will provide critical insight into growth trends and profitability.",
  },
  {
    question: "Who are BitGo's main competitors?",
    answer: "BitGo&apos;s key competitors include Coinbase Custody (part of publicly traded Coinbase), Fireblocks (a leading digital asset custody platform), Anchorage (acquired by Kraken), and traditional custodians like Fidelity and BNY Mellon expanding into crypto. However, BitGo remains the first pure-play crypto custody IPO.",
  },
  {
    question: "What does BitGo&apos;s IPO signal about crypto markets?",
    answer: "BitGo&apos;s successful IPO signals that institutional adoption of crypto is maturing and becoming more mainstream. Combined with Morgan Stanley&apos;s spot Bitcoin ETF filing and other traditional finance moves into crypto, it suggests that digital assets are transitioning from speculative assets to standard institutional asset classes. The IPO validates the business model of crypto infrastructure companies.",
  },
];

const articleSchema = generateArticleSchema({
  title: "BitGo IPO Guide 2026: What the First Crypto Custody IPO Means for Institutional Adoption",
  description: "Learn about BitGo's January 2026 IPO, the first major crypto custody firm to go public. Understand the company's financials, competitive landscape, and what this signals for institutional adoption of cryptocurrency infrastructure.",
  url: "https://degen0x.com/learn/bitgo-ipo-crypto-infrastructure-guide",
  datePublished: "2026-03-25T00:00:00Z",
  dateModified: "2026-03-25T00:00:00Z",
  author: "degen0x Team",
  image: "https://degen0x.com/og-bitgo-ipo.svg",
  wordCount: 3000,
});

const faqSchema = generateFAQSchema(faqData);
const schema = combineSchemas([articleSchema, faqSchema]);

export default function BitGoIPOGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh" }}>
      <StructuredData data={schema} />
      <div style={{ borderBottom: `1px solid ${S.border}`, paddingTop: 24 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 24px" }}>
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>
      <article style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* ── Header ── */}
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40` }}>🏦 Institutional</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Crypto Infrastructure</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.yellow}20`, color: S.yellow, border: `1px solid ${S.yellow}40` }}>Intermediate</span>
            <span style={{ fontSize: 12, color: S.text2 }}>Published March 25, 2026 · 15 min read</span>
          </div>
          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            BitGo IPO Guide 2026: What the First Crypto Custody IPO Means for Institutional Adoption
          </h1>
          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75 }}>
            On January 22, 2026, BitGo became the first major cryptocurrency custody and infrastructure firm to go public, launching on the NYSE under ticker BTGO. The company raised $212.8 million at $18 per share, valuing it at $2.08 billion. This milestone signals a critical moment: crypto infrastructure is maturing from a speculative sector into a core institutional business. This guide breaks down BitGo&apos;s business model, financials, competitive landscape, and what the IPO means for the future of digital asset custody.
          </p>
        </header>

        {/* ── Table of Contents ── */}
        <nav style={{ background: "#161b22", border: `1px solid ${S.border}`, borderRadius: 14, padding: 24, marginBottom: 40 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: S.blue }}>Table of Contents</h2>
          <ol style={{ paddingLeft: 20, color: S.text2, fontSize: 14, lineHeight: 2.2 }}>
            {[
              ["what-is-bitgo", "1. What Is BitGo?"],
              ["ipo-details", "2. The IPO: $212.8M Raised at $2B Valuation"],
              ["financial-performance", "3. Financial Performance & First Earnings"],
              ["crypto-custody-landscape", "4. The Crypto Custody Competitive Landscape"],
              ["institutional-momentum", "5. Institutional Momentum: Morgan Stanley, BlackRock & Beyond"],
              ["what-ipo-signals", "6. What BitGo&apos;s IPO Signals for Crypto Markets"],
              ["risks", "7. Risks & Considerations"],
              ["faq", "FAQ"],
            ].map(([id, label]) => (
              <li key={id}><a href={`#${id}`} style={{ color: S.blue, textDecoration: "none" }}>{label}</a></li>
            ))}
          </ol>
        </nav>

        {/* ── Section 1: What Is BitGo ── */}
        <section id="what-is-bitgo" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>1. What Is BitGo?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            BitGo, founded in 2013, is a cryptocurrency custody and infrastructure company that serves institutional clients. The company operates in the critical intersection of crypto and traditional finance, providing secure storage, institutional-grade APIs, and blockchain infrastructure that enables asset managers, exchanges, and other custodians to safely hold and move digital assets at scale.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Unlike consumer-facing crypto exchanges, BitGo operates entirely in the institutional layer. Its core business is providing the &quot;plumbing&quot; that allows large financial institutions to participate in crypto markets without building their own infrastructure from scratch.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginBottom: 20 }}>
            {[
              { icon: "🔐", title: "Custody Solutions", desc: "Multi-signature cold storage and key management for institutional assets" },
              { icon: "⚙️", title: "Blockchain Infrastructure", desc: "APIs and tools for blockchain interaction and digital asset management" },
              { icon: "🏦", title: "Institutional Focus", desc: "Serves asset managers, exchanges, and custodians globally" },
              { icon: "✓", title: "Enterprise-Grade Security", desc: "Regulatory compliance and insurance coverage for managed assets" },
            ].map((item) => (
              <div key={item.title} style={{ background: `${S.blue}08`, border: `1px solid ${S.blue}25`, borderRadius: 12, padding: 18 }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, color: S.blue, fontSize: 14, marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: S.text2, lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ background: `${S.green}08`, border: `1px solid ${S.green}25`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
            <div style={{ fontWeight: 800, color: S.green, marginBottom: 12 }}>💡 Why BitGo Matters</div>
            <p style={{ color: S.text2, fontSize: 14, lineHeight: 1.7 }}>
              BitGo bridges the gap between crypto innovation and traditional financial infrastructure. As institutions seek to add crypto exposure, they need custody solutions that meet their regulatory and operational standards. BitGo&apos;s IPO validates this business model and demonstrates that crypto infrastructure can generate real revenue and profitability at institutional scale.
            </p>
          </div>
        </section>

        {/* ── Section 2: IPO Details ── */}
        <section id="ipo-details" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>2. The IPO: $212.8M Raised at $2B Valuation</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            BitGo&apos;s January 2026 IPO marked a watershed moment for the crypto industry — the first major pure-play crypto custody firm to access the public markets. Here&apos;s how the offering broke down:
          </p>

          <div style={{ background: "#161b22", border: `1px solid ${S.border}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20 }}>
              {[
                { label: "Capital Raised", value: "$212.8M", color: S.green },
                { label: "IPO Price", value: "$18/share", color: S.blue },
                { label: "IPO Valuation", value: "$2.08B", color: S.purple },
                { label: "Ticker & Exchange", value: "BTGO (NYSE)", color: S.orange },
                { label: "Trading Start Date", value: "Jan 22, 2026", color: S.text2 },
                { label: "First Day Open", value: "$22.43 (+24.6%)", color: S.green },
              ].map((m) => (
                <div key={m.label}>
                  <div style={{ fontSize: 20, fontWeight: 900, color: m.color, marginBottom: 4 }}>{m.value}</div>
                  <div style={{ fontSize: 12, color: S.text2 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            On the first day of trading, shares opened at $22.43 — a 24.6% premium to the IPO price — indicating strong institutional demand. The stock hit an intraday high of $24.50 before settling at $18.49 (a 2.7% gain for the day), reflecting normal post-IPO volatility as the market sought an equilibrium price.
          </p>

          <div style={{ background: `${S.yellow}08`, border: `1px solid ${S.yellow}25`, borderRadius: 14, padding: 24 }}>
            <div style={{ fontWeight: 800, color: S.yellow, marginBottom: 12 }}>⚡ IPO Structure & Participants</div>
            <p style={{ color: S.text2, fontSize: 14, lineHeight: 1.7 }}>
              BitGo&apos;s IPO was structured with institutional backing from major financial players. BNY Mellon manages cash and administrative operations for BitGo&apos;s institutional custody business, while Coinbase serves as the company&apos;s prime broker. This partnership model — embedding BitGo within the broader institutional crypto ecosystem — is crucial to its business strategy and institutional credibility.
            </p>
          </div>
        </section>

        {/* ── Section 3: Financial Performance ── */}
        <section id="financial-performance" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>3. Financial Performance & First Earnings</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            BitGo has demonstrated strong revenue growth and profitability, unusual for crypto infrastructure companies. Here&apos;s what we know about the company&apos;s financials:
          </p>

          <div style={{ overflowX: "auto", marginBottom: 20 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  <th style={{ textAlign: "left", padding: "10px 12px", color: S.text2, fontWeight: 600 }}>Metric</th>
                  <th style={{ textAlign: "right", padding: "10px 12px", color: S.text2, fontWeight: 600 }}>FY2024</th>
                  <th style={{ textAlign: "right", padding: "10px 12px", color: S.text2, fontWeight: 600 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Total Revenue", "$308M", "Confirmed"],
                  ["Net Profit", "$15.66M", "Confirmed"],
                  ["Profit Margin", "5.1%", "Calculated"],
                  ["Year-over-Year Growth", "~45% est.", "Market expectation"],
                  ["Q4 2025 & FY2025 Earnings", "March 26, 2026", "Pending announcement"],
                ].map(([metric, value, status]) => (
                  <tr key={metric} style={{ borderBottom: `1px solid ${S.border}` }}>
                    <td style={{ padding: "10px 12px", fontWeight: 600, color: S.text }}>{metric}</td>
                    <td style={{ padding: "10px 12px", textAlign: "right", color: S.green, fontWeight: 600 }}>{value}</td>
                    <td style={{ padding: "10px 12px", textAlign: "right", color: S.text2, fontSize: 12 }}>{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            BitGo was already profitable at the time of its IPO, which is remarkable for a crypto infrastructure company. Most crypto platforms either operate at a loss (betting on future profitability) or rely heavily on token emissions. BitGo&apos;s ability to generate real, sustainable revenue through its custody and infrastructure services is a key validation of its business model.
          </p>

          <div style={{ background: `${S.purple}08`, border: `1px solid ${S.purple}25`, borderRadius: 14, padding: 24, marginBottom: 16 }}>
            <div style={{ fontWeight: 800, color: S.purple, marginBottom: 12 }}>📊 Critical Catalyst: Earnings on March 26, 2026</div>
            <div style={{ fontSize: 14, color: S.text2, lineHeight: 1.7 }}>
              <p style={{ marginBottom: 10 }}>BitGo is scheduled to report Q4 2025 and full-year 2025 results on <strong>March 26, 2026</strong> (the day after this guide&apos;s publication) with a conference call at 5:00 PM ET. This is the company&apos;s first earnings report as a public company.</p>
              <p style={{ marginBottom: 10 }}>Investors will be watching for:</p>
              <ul style={{ paddingLeft: 20 }}>
                <li>Revenue growth acceleration (crypto markets surged in Q4 2025 / early 2026)</li>
                <li>Profitability and margin expansion</li>
                <li>Assets under custody (AUC) growth and diversification</li>
                <li>New institutional client wins</li>
                <li>Forward guidance for 2026</li>
              </ul>
              <p style={{ marginTop: 10 }}>These numbers will significantly impact BTGO&apos;s stock price and set expectations for institutional investor participation in crypto infrastructure.</p>
            </div>
          </div>
        </section>

        {/* ── Section 4: Crypto Custody Landscape ── */}
        <section id="crypto-custody-landscape" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>4. The Crypto Custody Competitive Landscape</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            BitGo doesn&apos;t operate in isolation. While it&apos;s the first pure-play crypto custody IPO, it competes with both established crypto players and traditional finance moving into digital assets. Here&apos;s how the competitive landscape looks:
          </p>

          <div style={{ overflowX: "auto", marginBottom: 20 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${S.border}` }}>
                  <th style={{ textAlign: "left", padding: "10px 12px", color: S.text2, fontWeight: 600 }}>Provider</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", color: S.text2, fontWeight: 600 }}>Type</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", color: S.text2, fontWeight: 600 }}>Key Strength</th>
                  <th style={{ textAlign: "left", padding: "10px 12px", color: S.text2, fontWeight: 600 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["BitGo", "Pure-Play Custody", "Enterprise security, BNY partnership", "Public (BTGO, Jan 2026)"],
                  ["Coinbase Custody", "Exchange-Backed", "Coinbase ecosystem integration", "Part of public COIN"],
                  ["Fireblocks", "Digital Asset Platform", "Institutional-grade APIs, speed", "Private (Series E)"],
                  ["Anchorage", "Crypto-Native Custodian", "Kraken backing, governance", "Acquired by Kraken"],
                  ["Fidelity Digital Assets", "Traditional Finance", "Fidelity brand & compliance", "Part of FDL (private)"],
                  ["BNY Mellon Custody", "Traditional Custodian", "Legacy institution, global reach", "Part of public BK"],
                ].map(([provider, type, strength, status]) => (
                  <tr key={provider} style={{ borderBottom: `1px solid ${S.border}` }}>
                    <td style={{ padding: "10px 12px", fontWeight: 600, color: S.text }}>{provider}</td>
                    <td style={{ padding: "10px 12px", color: S.text2 }}>{type}</td>
                    <td style={{ padding: "10px 12px", color: S.text2 }}>{strength}</td>
                    <td style={{ padding: "10px 12px", color: S.green, fontWeight: 500 }}>{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            The custody space is bifurcating: crypto-native players like BitGo, Fireblocks, and Coinbase Custody are competing on features, speed, and crypto expertise, while traditional custodians like Fidelity and BNY Mellon are entering the market with their existing institutional relationships and regulatory infrastructure. BitGo&apos;s IPO signals that crypto-native custody businesses have viable long-term economics — they&apos;re not bridge technologies waiting to be replaced, but core institutional infrastructure.
          </p>
        </section>

        {/* ── Section 5: Institutional Momentum ── */}
        <section id="institutional-momentum" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>5. Institutional Momentum: Morgan Stanley, BlackRock & Beyond</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            BitGo&apos;s IPO doesn&apos;t exist in a vacuum. It&apos;s part of a larger wave of institutional crypto adoption and infrastructure development. Here&apos;s the timeline of key institutional moves in early 2026:
          </p>

          <div style={{ display: "grid", gap: 12, marginBottom: 20 }}>
            {[
              { date: "Jan 2026", title: "BitGo IPO", desc: "First major crypto custody firm goes public on NYSE (BTGO, $2.08B valuation)" },
              { date: "Jan 2026", title: "Morgan Stanley Bitcoin ETF Filing", desc: "MSBT spot Bitcoin ETF filing signals major traditional finance entry; CEO says crypto is now core institutional asset class" },
              { date: "Q1 2026", title: "Bitcoin & Ethereum ETF Proliferation", desc: "Spot ETFs continue attracting billions in inflows, validating on-ramp for institutions" },
              { date: "March 26, 2026", title: "BitGo Earnings", desc: "First earnings report as public company; market will assess profitability and growth trajectory" },
              { date: "Q2 2026", title: "Expected: More Custody IPOs", desc: "Other infrastructure firms (Fireblocks, etc.) may pursue IPOs, following BitGo&apos;s path" },
            ].map((milestone) => (
              <div key={milestone.title} style={{ display: "flex", gap: 16, background: "#161b22", border: `1px solid ${S.border}`, borderRadius: 12, padding: 18 }}>
                <div style={{ minWidth: 70, height: "auto", color: S.blue, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12 }}>{milestone.date}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: S.text, marginBottom: 4 }}>{milestone.title}</div>
                  <div style={{ fontSize: 14, color: S.text2, lineHeight: 1.6 }}>{milestone.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: `${S.green}08`, border: `1px solid ${S.green}25`, borderRadius: 14, padding: 24 }}>
            <div style={{ fontWeight: 800, color: S.green, marginBottom: 12 }}>🚀 The Institutional Adoption Flywheel</div>
            <p style={{ color: S.text2, fontSize: 14, lineHeight: 1.7 }}>
              As institutions move into crypto, they need custody (BitGo). They need on-ramps like ETFs (Morgan Stanley&apos;s MSBT, iShares, Fidelity, etc.). They need prime brokerage and clearing services (Coinbase, Galaxy, others). Each successful institutional move validates the next. BitGo&apos;s IPO is both a result of this momentum and an accelerant for future institutional moves into crypto infrastructure.
            </p>
          </div>
        </section>

        {/* ── Section 6: What IPO Signals ── */}
        <section id="what-ipo-signals" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>6. What BitGo&apos;s IPO Signals for Crypto Markets</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            BitGo&apos;s successful IPO sends several critical signals to the market:
          </p>

          <div style={{ display: "grid", gap: 12 }}>
            {[
              {
                title: "Institutional Infrastructure Has Real Economics",
                desc: "BitGo is profitable. It generates real revenue from institutional clients. This proves that crypto infrastructure isn&apos;t a speculative bet — it&apos;s a viable, revenue-generating business with a clear path to profitability and scale.",
                icon: "💰",
              },
              {
                title: "Custody is a Core Service, Not a Niche",
                desc: "For decades, crypto was seen as too risky or niche for major institutions. BitGo&apos;s IPO signals that digital asset custody is now a mainstream service — comparable to traditional asset custody in structure and importance.",
                icon: "🏛️",
              },
              {
                title: "Maturity Attracts Capital",
                desc: "Public markets provide access to vast pools of capital. BitGo&apos;s IPO gives institutional investors direct exposure to crypto infrastructure growth. Other crypto infrastructure companies will follow, accelerating the sector&apos;s maturation.",
                icon: "📈",
              },
              {
                title: "Regulators Are Becoming Comfortable",
                desc: "A company can&apos;t go public without SEC approval and compliance. BitGo&apos;s IPO signals that regulators view crypto infrastructure as legitimate, regulated financial services — not gray-area activities.",
                icon: "⚖️",
              },
              {
                title: "Crypto is Now an Institutional Asset Class",
                desc: "When the infrastructure plays go public and attract institutional capital, it means crypto has transitioned from a speculative niche to a core institutional asset class. This is a tipping point.",
                icon: "🎯",
              },
            ].map((signal) => (
              <div key={signal.title} style={{ background: `${S.primary}08`, border: `1px solid ${S.primary}25`, borderRadius: 12, padding: 18 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 8 }}>
                  <span style={{ fontSize: 24 }}>{signal.icon}</span>
                  <div style={{ fontWeight: 700, color: S.primary, fontSize: 15 }}>{signal.title}</div>
                </div>
                <div style={{ fontSize: 14, color: S.text2, lineHeight: 1.7 }}>{signal.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 7: Risks ── */}
        <section id="risks" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>7. Risks & Considerations</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            While BitGo&apos;s IPO is bullish for crypto infrastructure, investors and institutions should consider these risks:
          </p>
          <div style={{ display: "grid", gap: 12 }}>
            {[
              {
                title: "Regulatory Changes",
                desc: "Crypto custody operates under evolving regulations. Changes to AML/KYC requirements, digital asset classification, or custody standards could impact BitGo&apos;s business model or margins. Especially as the SEC and CFTC continue to define digital asset custody rules.",
                color: S.red,
              },
              {
                title: "Competition from Traditional Finance",
                desc: "Fidelity, BNY Mellon, and other traditional custodians have massive scale, brand trust, and regulatory relationships. As they expand crypto custody, they could undercut or absorb BitGo&apos;s market share through price competition or acquisition.",
                color: S.orange,
              },
              {
                title: "Smart Contract & Security Risk",
                desc: "Despite multi-signature architecture, no custody solution is 100% immune to hacks or exploits. A major security incident — even if insured — could damage BitGo&apos;s reputation and client trust permanently.",
                color: S.red,
              },
              {
                title: "Assets Under Custody Concentration",
                desc: "If BitGo&apos;s revenue is concentrated among a few large clients or if institutional adoption slows, revenue growth could stall. The company&apos;s profitability depends on growing AUC and preventing client churn.",
                color: S.yellow,
              },
              {
                title: "Crypto Market Volatility",
                desc: "Custody revenue may be tied to trading volume or AUC. A major crypto bear market or regulatory crackdown could reduce institutions&apos; crypto allocations, impacting BitGo&apos;s revenue.",
                color: S.orange,
              },
              {
                title: "Valuation Risk",
                desc: "BitGo&apos;s IPO valued the company at $2.08 billion based on $308M FY2024 revenue (6.7x forward revenue multiple). If growth slows or profitability declines, the stock could face pressure.",
                color: S.yellow,
              },
            ].map((risk) => (
              <div key={risk.title} style={{ background: `${risk.color}08`, border: `1px solid ${risk.color}25`, borderRadius: 12, padding: 18 }}>
                <div style={{ fontWeight: 700, color: risk.color, marginBottom: 6 }}>⚠️ {risk.title}</div>
                <div style={{ fontSize: 14, color: S.text2, lineHeight: 1.7 }}>{risk.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 20 }}>Frequently Asked Questions</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {faqData.map((faq) => (
              <div key={faq.question} style={{ background: "#161b22", border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                <div style={{ fontWeight: 700, color: S.text, marginBottom: 8 }}>{faq.question}</div>
                <div style={{ fontSize: 14, color: S.text2, lineHeight: 1.7 }}>{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Key Takeaways ── */}
        <section style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}25`, borderRadius: 16, padding: 28, marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>🏦 Key Takeaways</h2>
          {[
            "BitGo became the first major pure-play crypto custody firm to go public in January 2026, raising $212.8M at $18/share and valuing the company at $2.08B on NYSE (ticker: BTGO).",
            "The company generated $308M in revenue and $15.66M in net profit in FY2024 — rare profitability for a crypto infrastructure firm — validating the business model.",
            "BitGo competes with Coinbase Custody, Fireblocks, traditional custodians, and emerging entrants. Its IPO signals crypto custody is a core institutional service, not a niche.",
            "The IPO is part of a broader institutional momentum wave including Morgan Stanley's spot Bitcoin ETF, proliferation of crypto ETFs, and expanding institutional crypto allocations.",
            "Risks include regulatory changes, competition from traditional finance, smart contract security, and crypto market volatility — but the long-term trajectory signals institutional adoption is accelerating.",
            "BitGo's Q4 2025 and full-year 2025 earnings on March 26, 2026 will be critical in validating growth and profitability trends. Watch for AUC growth, margin expansion, and forward guidance.",
          ].map((pt, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
              <span style={{ color: S.primary, fontWeight: 800, marginTop: 2 }}>✦</span>
              <span style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{pt}</span>
            </div>
          ))}
        </section>

        {/* ── Related Resources ── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 16 }}>Related Resources</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { title: "Morgan Stanley Bitcoin ETF (MSBT) Guide", url: "/learn/morgan-stanley-bitcoin-etf-msbt-guide" },
              { title: "Bitcoin ETF Guide 2026", url: "/learn/bitcoin-etf-guide-2026" },
              { title: "Crypto ETFs: Complete Guide", url: "/learn/crypto-etfs-complete-guide" },
              { title: "Staked Crypto ETFs Guide 2026", url: "/learn/staked-crypto-etfs-guide-2026" },
              { title: "Portfolio Tracker Tool", url: "/tools/portfolio-tracker" },
            ].map((link) => (
              <a key={link.url} href={link.url} style={{
                background: "#161b22", border: `1px solid ${S.border}`, borderRadius: 12, padding: 16,
                textDecoration: "none", color: S.blue, fontWeight: 500, fontSize: 14, transition: "all 0.2s"
              }}>
                {link.title} →
              </a>
            ))}
          </div>
        </section>

        {/* ── Disclaimer ── */}
        <div style={{ background: `${S.yellow}08`, border: `1px solid ${S.yellow}25`, borderRadius: 12, padding: 20, fontSize: 13, color: S.text2, lineHeight: 1.7 }}>
          ⚠️ This guide is for informational and educational purposes only. It is not financial advice and should not be construed as investment advice. Cryptocurrency and digital asset investments involve substantial risk. Past performance is not indicative of future results. BitGo&apos;s stock (BTGO) may be volatile. Always conduct your own due diligence and consult with a financial advisor before making investment decisions. Data sourced from public announcements, SEC filings, and market reports as of March 25, 2026.
        </div>
      </article>
      <BackToTop />
    </main>
  );
}
