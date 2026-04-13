import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from "next/link";

// ─────────────────────────────────────────────
//  German (DE) Localization Landing Page
//  degen0x · Sprint 25 · Day 31
//  Targeting Germany (#1 EU crypto market), Austria, Switzerland (DE)
//  DACH region: 100M+ German speakers, €180B+ crypto market
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  title: "degen0x auf Deutsch — Krypto Exchanges, Wallets & DeFi",
  description: "degen0x ist Ihr vertrauenswürdiger Krypto-Ratgeber auf Deutsch. Vergleichen Sie Exchanges, Wallets und DeFi-Protokolle. Expertenbewertungen, kostenlose Tools",
  alternates: {
    canonical: "/de",
    languages: {
      "fr": "https://degen0x.com/fr",
      "de": "https://degen0x.com/de",
      "en": "https://degen0x.com",
    },
  },
  openGraph: {
    title: "degen0x auf Deutsch — Ihr Krypto-Ratgeber für den DACH-Raum",
    description:
      "Vergleichen Sie die besten Krypto-Exchanges, Wallets und DeFi-Protokolle. Alles auf Deutsch, speziell für Anleger in Deutschland, Österreich und der Schweiz.",
    locale: "de_DE",
    type: "website",
  },
  twitter: { card: "summary_large_image" }};

const KATEGORIEN = [
  {
    name: "Krypto Exchanges",
    desc: "Vergleichen Sie die besten Handelsplätze nach Gebühren, Sicherheit und verfügbaren Coins",
    href: "/exchanges/best",
    emoji: "🔀",
    color: "#6366f1",
  },
  {
    name: "Krypto Wallets",
    desc: "Die besten Hardware- und Software-Wallets für maximale Sicherheit Ihrer Krypto-Assets",
    href: "/wallets/best",
    emoji: "👛",
    color: "#06b6d4",
  },
  {
    name: "DeFi & Krypto-Kredite",
    desc: "Die besten dezentralen Protokolle für Renditen, Lending und Borrowing",
    href: "/defi-lending/best",
    emoji: "⚡",
    color: "#22c55e",
  },
  {
    name: "Krypto Investieren",
    desc: "Umfassende Guides für Investments in Bitcoin, Ethereum und Altcoins",
    href: "/investing",
    emoji: "📈",
    color: "#f59e0b",
  },
  {
    name: "Krypto Steuern",
    desc: "Alles zur Besteuerung von Kryptowährungen in Deutschland, Österreich und der Schweiz",
    href: "/taxes",
    emoji: "🧾",
    color: "#f0883e",
  },
  {
    name: "Kostenlose Tools",
    desc: "Rechner, Preisbeobachtung, DCA-Simulatoren — völlig kostenlos",
    href: "/tools",
    emoji: "🛠️",
    color: "#bc8cff",
  },
  {
    name: "NFTs",
    desc: "NFT-Guides, Marktplätze und wie man sicher kauft und verkauft",
    href: "/nfts",
    emoji: "🖼️",
    color: "#f85149",
  },
  {
    name: "Krypto Lernen",
    desc: "Vom Anfänger zum Experten — Blockchain, DeFi und Web3 auf Deutsch erklärt",
    href: "/learn",
    emoji: "🎓",
    color: "#3fb950",
  },
  {
    name: "Staking & Passives Einkommen",
    desc: "Die besten Staking-Plattformen und wie Sie Ihr Krypto-Portfolio für Sie arbeiten lassen",
    href: "/investing/best/staking",
    emoji: "💰",
    color: "#f7931a",
  },
];

const BELIEBTE_GUIDES = [
  { title: "Beste Krypto Exchanges 2026", href: "/exchanges/best", tag: "Beliebtester Guide" },
  { title: "Beste Hardware Wallets", href: "/wallets/best/hardware", tag: "Sicherheit" },
  { title: "Bitcoin kaufen in Deutschland", href: "/learn/how-to-buy-bitcoin", tag: "Einsteiger" },
  { title: "Krypto Steuer Guide 2026", href: "/taxes/learn/crypto-tax-guide", tag: "Steuern" },
  { title: "Beste DeFi Lending Protokolle", href: "/defi-lending/best", tag: "DeFi" },
  { title: "Krypto für Anfänger", href: "/learn/crypto-for-beginners", tag: "Lernen" },
];

const DE_STEUER_INFO = [
  {
    title: "1-Jahres-Haltefrist (§ 23 EStG)",
    desc: "In Deutschland sind Krypto-Gewinne nach einer Haltedauer von mindestens einem Jahr komplett steuerfrei — unabhängig von der Gewinnsumme. Das gilt für Bitcoin, Ethereum und alle anderen Coins.",
    icon: "📅",
  },
  {
    title: "Freigrenze: 1.000 € pro Jahr",
    desc: "Gewinne unter 1.000 € pro Kalenderjahr sind steuerfrei (erhöht ab 2024 von vormals 600 €). Bei Überschreitung werden alle Gewinne — nicht nur der Anteil über 1.000 € — mit dem persönlichen Einkommensteuersatz versteuert.",
    icon: "💶",
  },
  {
    title: "Mining & Staking als Einkünfte",
    desc: "Mining- und Staking-Erträge zählen als sonstige Einkünfte und müssen in Ihrer Einkommensteuererklärung angegeben werden. Der persönliche Steuersatz (bis 45%) kommt zur Anwendung.",
    icon: "⛏️",
  },
  {
    title: "Verlustverrechnung möglich",
    desc: "Realisierte Verluste aus Krypto-Trades können mit gleichartigen Gewinnen desselben Jahres verrechnet werden. Ein Verlustvortrag in Folgejahre ist ebenfalls möglich (§ 10d EStG).",
    icon: "📉",
  },
  {
    title: "Austria (AT): KESt 27,5%",
    desc: "In Österreich gilt seit 2022 eine einheitliche Kapitalertragsteuer (KESt) von 27,5% auf alle Krypto-Gewinne — ohne Haltefristen-Regelung. Die Steuer wird automatisch abgeführt, wenn Sie bei einem österreichischen Broker handeln.",
    icon: "🇦🇹",
  },
  {
    title: "Schweiz (CH): Weitgehend steuerfrei",
    desc: "Private Krypto-Gewinne sind in der Schweiz für Privatanleger grundsätzlich einkommenssteuerfrei. Das Krypto-Vermögen unterliegt jedoch der Vermögenssteuer. Mining gilt als selbstständige Erwerbstätigkeit.",
    icon: "🇨🇭",
  },
];

const DE_EXCHANGES_TOP = [
  { name: "Coinbase", note: "BaFin-lizenziert · Ideal für Anfänger", flag: "🇩🇪", rating: "9.4/10" },
  { name: "Binance", note: "Höchstes Volumen · Niedrigste Gebühren", flag: "🌍", rating: "9.1/10" },
  { name: "Kraken", note: "Maximale Sicherheit · EU-reguliert", flag: "🔒", rating: "8.9/10" },
  { name: "Bitpanda", note: "Österreichischer Anbieter · DACH-Spezialist", flag: "🇦🇹", rating: "8.7/10" },
];

const DACH_STATS = [
  { country: "🇩🇪 Deutschland", stat: "#1 EU", desc: "Krypto-Markt Europa" },
  { country: "🇦🇹 Österreich", stat: "KESt 27,5%", desc: "Einheitliche Krypto-Steuer" },
  { country: "🇨🇭 Schweiz", stat: "Crypto Valley", desc: "Weltweiter Blockchain-Hub" },
  { country: "🌍 DACH gesamt", stat: "100M+", desc: "Deutschsprachige Nutzer" },
];

const DACH_TOOLS = [
  { name: "DCA Rechner", desc: "Berechnen Sie Ihren Durchschnittskaufpreis mit automatischen Sparplän-Simulationen", href: "/tools/dca-calculator", emoji: "📊" },
  { name: "Steuer-Rechner", desc: "Krypto-Steuern für DE/AT/CH berechnen — Haltefrist, Freigrenze, KESt", href: "/tools/tax-calculator", emoji: "🧾" },
  { name: "Portfolio Tracker", desc: "Behalten Sie Ihr Krypto-Portfolio im Blick — P&L, Allocation, Rebalancing", href: "/tools/portfolio-tracker", emoji: "💼" },
  { name: "Exchange Gebühren Vergleich", desc: "Vergleichen Sie Maker/Taker-Gebühren aller großen Exchanges auf einen Blick", href: "/tools/exchange-fees", emoji: "💱" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'De', },
  ],
};

export default function GermanLandingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="de"
      />
      {/* ── Hero ── */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-6"
          style={{ background: "#00000020", color: "#cc0000", border: "1px solid #cc000040" }}
        >
          🇩🇪 Krypto-Ratgeber für den DACH-Raum
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[var(--color-text)] mb-5 leading-tight">
          Ihr vertrauenswürdiger{" "}
          <span className="gradient-text">Krypto-Ratgeber</span>
          <br />
          auf Deutsch
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          Vergleichen Sie Exchanges, Wallets und DeFi-Protokolle. Unabhängige Expertenbewertungen,
          kostenlose interaktive Tools und detaillierte Guides — speziell für Anleger in
          Deutschland, Österreich und der Schweiz.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/exchanges/best"
            className="affiliate-cta px-7 py-3 rounded-xl text-white font-bold text-base"
          >
            Exchanges vergleichen
          </Link>
          <Link href="/exchanges/best"
            className="glass px-7 py-3 rounded-xl font-bold text-base text-[var(--color-text)]"
          >
            📚 Krypto lernen
          </Link>
        </div>
        {/* trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-[var(--color-text-secondary)]">
          <span>✅ 100% unabhängige Bewertungen</span>
          <span>🔒 Keine bezahlte Werbung</span>
          <span>🇩🇪 Deutsches Steuerrecht</span>
          <span>🆓 Alle Tools kostenlos</span>
        </div>
      </section>

      {/* ── Top DACH Exchanges ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-black text-[var(--color-text)] mb-2">
          🏆 Beste Krypto Exchanges für den DACH-Raum
        </h2>
        <p className="text-[var(--color-text-secondary)] text-sm mb-5">
          Ausgewählt nach BaFin-/FMA-Lizenzierung, deutschsprachigem Support und wettbewerbsfähigen Gebühren.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DE_EXCHANGES_TOP.map((ex, i) => (
            <div
              key={ex.name}
              className="rounded-2xl border border-[var(--color-border)] p-5"
              style={{ background: "var(--color-surface)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-lg font-black text-[var(--color-text)]">
                  {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : "⭐"} {ex.name}
                </div>
                <div className="text-xl">{ex.flag}</div>
              </div>
              <div className="text-xs text-[var(--color-text-secondary)] mb-3">{ex.note}</div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold" style={{ color: "#3fb950" }}>
                  {ex.rating}
                </span>
                <Link href="/exchanges/best"
                  className="text-xs px-3 py-1 rounded-lg font-bold text-[var(--color-text)]"
                  style={{ background: "var(--color-primary)" }}
                >
                  Zum Test →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Kategorien ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-black text-[var(--color-text)] mb-2">
          📂 Alle Kategorien
        </h2>
        <p className="text-[var(--color-text-secondary)] text-sm mb-5">
          Umfassende Guides und Vergleiche für jeden Aspekt des Krypto-Investments.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {KATEGORIEN.map((kat) => (
            <Link href={kat.href}
              key={kat.href}
              className="rounded-2xl border border-[var(--color-border)] p-5 hover:border-[var(--color-primary)] transition-all group"
              style={{ background: "var(--color-surface)" }}
            >
              <div className="text-3xl mb-3">{kat.emoji}</div>
              <div className="font-bold text-[var(--color-text)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                {kat.name}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">{kat.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── DACH Steuer Guide ── */}
      <section className="mb-16">
        <div
          className="rounded-2xl border border-[var(--color-border)] overflow-hidden"
          style={{ background: "var(--color-surface)" }}
        >
          <div
            className="p-6 border-b border-[var(--color-border)]"
            style={{ background: "linear-gradient(135deg, #cc000008, #00000008)" }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3"
              style={{ background: "#cc000020", color: "#cc0000" }}
            >
              🇩🇪🇦🇹🇨🇭 Krypto-Steuer DACH 2026
            </div>
            <h2 className="text-2xl font-black text-[var(--color-text)]">
              Kryptowährungen versteuern im DACH-Raum
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm mt-2">
              Was jeder Anleger in Deutschland, Österreich und der Schweiz wissen muss. Aktualisiert für die Steuererklärung 2026.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px"
            style={{ background: "var(--color-border)" }}
          >
            {DE_STEUER_INFO.map((item) => (
              <div key={item.title} className="p-5" style={{ background: "var(--color-surface)" }}>
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-[var(--color-text)] mb-1">{item.title}</div>
                <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
          <div className="p-5 border-t border-[var(--color-border)]">
            <p className="text-xs text-[var(--color-text-secondary)]">
              ⚠️ Diese Informationen dienen ausschließlich als allgemeine Orientierung. Für Ihre individuelle steuerliche Situation wenden Sie sich bitte an einen Steuerberater.
            </p>
            <Link href="/exchanges/best"
              className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-[var(--color-primary)]"
            >
              Vollständiger Steuer-Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Kostenlose Tools ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-black text-[var(--color-text)] mb-2">
          🛠️ Kostenlose Tools für DACH-Anleger
        </h2>
        <p className="text-[var(--color-text-secondary)] text-sm mb-5">
          Professionelle Krypto-Tools, speziell für den deutschsprachigen Markt optimiert.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DACH_TOOLS.map((tool) => (
            <Link href={kat.href}
              key={tool.href}
              className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] p-5 hover:border-[var(--color-primary)] transition-all group"
              style={{ background: "var(--color-surface)" }}
            >
              <div className="text-3xl flex-shrink-0">{tool.emoji}</div>
              <div>
                <div className="font-bold text-[var(--color-text)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                  {tool.name}
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">{tool.desc}</div>
              </div>
              <div className="ml-auto text-[var(--color-text-secondary)] self-center">→</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Beliebte Guides ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-black text-[var(--color-text)] mb-5">
          📖 Beliebteste Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {BELIEBTE_GUIDES.map((guide) => (
            <Link href={guide.href}
              key={guide.href}
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 hover:border-[var(--color-primary)] transition-all group"
              style={{ background: "var(--color-surface)" }}
            >
              <div>
                <div className="font-bold text-sm text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {guide.title}
                </div>
                <div
                  className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block font-bold"
                  style={{ background: "#6366f120", color: "#818cf8" }}
                >
                  {guide.tag}
                </div>
              </div>
              <div className="ml-auto text-[var(--color-text-secondary)]">→</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── DACH Market Stats ── */}
      <section className="mb-10">
        <div
          className="rounded-2xl border border-[var(--color-border)] p-6"
          style={{ background: "var(--color-surface)" }}
        >
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4">
            🌍 Krypto im DACH-Raum
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
            {DACH_STATS.map((item) => (
              <div
                key={item.country}
                className="text-center p-4 rounded-xl border border-[var(--color-border)]"
                style={{ background: "var(--color-bg)" }}
              >
                <div className="text-sm font-bold text-[var(--color-text)] mb-1">{item.country}</div>
                <div className="text-xl font-black" style={{ color: "var(--color-primary)" }}>
                  {item.stat}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-4 border border-[var(--color-border)]" style={{ background: "var(--color-bg)" }}>
            <div className="text-sm font-bold text-[var(--color-text)] mb-2">📰 Regulatorische Lage 2026</div>
            <div className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Deutschland: BaFin reguliert Krypto-Verwahrung als Finanzdienstleistung. Exchanges benötigen eine
              BaFin-Lizenz. MiCA (Markets in Crypto-Assets) gilt seit 2024 EU-weit und schafft einheitliche
              Regeln für alle 27 EU-Mitgliedsstaaten. Österreich: FMA übernimmt die Aufsicht. Schweiz: FINMA
              reguliert, Zug bleibt das „Crypto Valley" mit besonders innovationsfreundlichen Rahmenbedingungen.
            </div>
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] mt-4">
            Über 100 Millionen deutschsprachige Nutzer weltweit. degen0x deckt die steuerlichen und
            regulatorischen Besonderheiten jedes Marktes im DACH-Raum ab.
          </p>
        </div>
      </section>

      {/* ── Other Languages ── */}
      <div className="flex flex-wrap gap-3 text-sm">
        <span className="text-[var(--color-text-secondary)]">Auch verfügbar in:</span>
        <Link href="/" className="text-[var(--color-primary)] hover:underline">🇺🇸 English</Link>
        <Link href="/es" className="text-[var(--color-primary)] hover:underline">🇪🇸 Español</Link>
        <Link href="/pt-br" className="text-[var(--color-primary)] hover:underline">🇧🇷 Português</Link>
        <Link href="/fr" className="text-[var(--color-primary)] hover:underline">🇫🇷 Français</Link>
      </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "degen0x auf Deutsch \u2014 Krypto Exchanges, Wallets & DeFi", "description": "degen0x ist Ihr vertrauensw\u00fcrdiger Krypto-Ratgeber auf Deutsch. Vergleichen Sie Exchanges, Wallets und DeFi-Protokolle. Expertenbewertungen, kostenlose Tools", "url": "https://degen0x.com/de", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/portfolio-onchain" style={{ color: "#fb923c", marginRight: "1rem" }}>Portfolio Onchain</a>
        
          <a href="/portfolio-live" style={{ color: "#fb923c", marginRight: "1rem" }}>Portfolio Live</a>
        
          <a href="/daily-challenge" style={{ color: "#fb923c", marginRight: "1rem" }}>Daily Challenge</a>
        </nav>
    </main>
  );
}
