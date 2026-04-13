import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from "next/link";

// ─────────────────────────────────────────────
//  French (FR) Localization Landing Page
//  degen0x · Sprint 24 · Day 30
//  Targeting France (#5 EU crypto market), Belgium, Switzerland, Canada (QC)
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  title: "degen0x en Français — Comparer Exchanges, Wallets et DeFi",
  description:
    "degen0x est votre guide de confiance pour les cryptomonnaies en français. Comparez les exchanges, wallets et protocoles DeFi. Avis d'experts, outils interactifs et guides complets pour investir dans la crypto.",
  alternates: {
    canonical: "https://degen0x.com/fr",
    languages: {
      "fr": "https://degen0x.com/fr",
      "de": "https://degen0x.com/de",
      "en": "https://degen0x.com",
    },
  },
  openGraph: {
    title: "degen0x en Français — Votre Guide Crypto de Confiance",
    description: "Comparez les meilleures plateformes d'échange, wallets et protocoles DeFi. Tout en français, fait pour les investisseurs francophones.",
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image" }};

const CATEGORIES = [
  {
    nom: "Exchanges de Crypto",
    desc: "Comparez les meilleures plateformes par frais, sécurité et coins disponibles",
    href: "/exchanges/best",
    emoji: "🔀",
    color: "#6366f1",
  },
  {
    nom: "Wallets Crypto",
    desc: "Les meilleures portefeuilles froids et chauds pour sécuriser vos actifs numériques",
    href: "/wallets/best",
    emoji: "👛",
    color: "#06b6d4",
  },
  {
    nom: "DeFi & Prêts Crypto",
    desc: "Les meilleurs protocoles DeFi pour générer des rendements et obtenir des prêts crypto",
    href: "/defi-lending/best",
    emoji: "⚡",
    color: "#22c55e",
  },
  {
    nom: "Investir dans la Crypto",
    desc: "Guides complets pour investir dans Bitcoin, Ethereum et altcoins en toute confiance",
    href: "/investing",
    emoji: "📈",
    color: "#f59e0b",
  },
  {
    nom: "Fiscalité Crypto",
    desc: "Tout ce que vous devez savoir sur la fiscalité des cryptomonnaies en France",
    href: "/taxes",
    emoji: "🧾",
    color: "#f0883e",
  },
  {
    nom: "Outils Gratuits",
    desc: "Calculateurs, suivi de prix, simulateurs DCA — tout gratuit",
    href: "/tools",
    emoji: "🛠️",
    color: "#bc8cff",
  },
  {
    nom: "NFTs",
    desc: "Guides complets sur les NFTs, les marketplaces et comment acheter en sécurité",
    href: "/nfts",
    emoji: "🖼️",
    color: "#f85149",
  },
  {
    nom: "Apprendre la Crypto",
    desc: "Du débutant à l'expert — apprenez la blockchain, le DeFi et le Web3 en français",
    href: "/learn",
    emoji: "🎓",
    color: "#3fb950",
  },
  {
    nom: "Staking & Revenus Passifs",
    desc: "Les meilleures plateformes de staking et comment générer des revenus passifs",
    href: "/investing/best/staking",
    emoji: "💰",
    color: "#f7931a",
  },
];

const GUIDES_POPULAIRES = [
  { title: "Meilleures Exchanges Crypto", href: "/exchanges/best", tag: "Le Plus Populaire" },
  { title: "Meilleurs Hardware Wallets", href: "/wallets/best/hardware", tag: "Sécurité" },
  { title: "Comment Acheter du Bitcoin", href: "/learn/how-to-buy-bitcoin", tag: "Débutants" },
  { title: "Fiscalité Crypto France 2026", href: "/taxes/learn/crypto-tax-guide", tag: "Impôts" },
  { title: "Meilleurs Protocoles DeFi", href: "/defi-lending/best", tag: "DeFi" },
  { title: "Guide NFT Complet", href: "/nfts", tag: "NFTs" },
];

const FR_TAX_INFO = [
  {
    title: "Flat Tax (PFU) de 30%",
    desc: "Les plus-values crypto sont taxées à 30% (17,2% de prélèvements sociaux + 12,8% d'impôt sur le revenu) via le Prélèvement Forfaitaire Unique.",
    icon: "📊",
  },
  {
    title: "Exonération jusqu'à 305€",
    desc: "Vos plus-values sont exonérées si la somme totale de vos cessions annuelles ne dépasse pas 305€. En dessous, aucune déclaration requise.",
    icon: "✅",
  },
  {
    title: "Déclaration Obligatoire",
    desc: "Tous les comptes détenus sur des exchanges étrangers doivent être déclarés à l'administration fiscale française (formulaire 3916-bis).",
    icon: "📋",
  },
  {
    title: "Mining et Staking Imposables",
    desc: "Les revenus du mining et du staking sont considérés comme des BNC (Bénéfices Non Commerciaux) et taxés à votre tranche marginale.",
    icon: "⛏️",
  },
];

const FR_EXCHANGES_TOP = [
  { name: "Coinbase", note: "Idéal débutants · Conforme AMF", flag: "🇫🇷", rating: "9.4/10" },
  { name: "Binance",  note: "Plus de volume · Frais ultra-bas",  flag: "🌍", rating: "9.1/10" },
  { name: "Kraken",   note: "Sécurité maximale · Réputé",        flag: "🔒", rating: "8.9/10" },
  { name: "Bitpanda", note: "Base européenne · Excellent pour EU", flag: "🇪🇺", rating: "8.7/10" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Fr', },
  ],
};

export default function FrenchLandingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="fr"
      />
      {/* ── Hero ── */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-6"
             style={{ background: "#0055a420", color: "#0055a4" }}>
          🇫🇷 Guide Francophone de la Cryptomonnaie
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[var(--color-text)] mb-5 leading-tight">
          Votre Guide de Confiance{" "}
          <span className="gradient-text">pour la Crypto</span>
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-8">
          Comparez les exchanges, wallets et protocoles DeFi. Avis d&apos;experts indépendants,
          outils interactifs gratuits et guides détaillés pour investir intelligemment dans les
          cryptomonnaies.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/exchanges/best"
                className="affiliate-cta px-7 py-3 rounded-xl text-white font-bold text-base">
            Comparer les Exchanges
          </Link>
          <Link href="/learn"
                className="glass px-7 py-3 rounded-xl font-bold text-base text-[var(--color-text)]">
            📚 Apprendre la Crypto
          </Link>
        </div>
        {/* trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-[var(--color-text-secondary)]">
          <span>✅ Avis 100% indépendants</span>
          <span>🔒 Aucune publicité payante</span>
          <span>🇫🇷 Contexte fiscal français</span>
          <span>🆓 Outils totalement gratuits</span>
        </div>
      </section>

      {/* ── Top FR Exchanges ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-black text-[var(--color-text)] mb-2">
          🏆 Meilleures Exchanges pour Francophones
        </h2>
        <p className="text-[var(--color-text-secondary)] text-sm mb-5">
          Sélectionnées pour leur conformité réglementaire, leur support en français et leurs frais compétitifs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FR_EXCHANGES_TOP.map((ex, i) => (
            <div key={ex.name}
                 className="rounded-2xl border border-[var(--color-border)] p-5"
                 style={{ background: "var(--color-surface)" }}>
              <div className="flex items-center justify-between mb-3">
                <div className="text-lg font-black text-[var(--color-text)]">
                  {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : "⭐"} {ex.name}
                </div>
                <div className="text-xl">{ex.flag}</div>
              </div>
              <div className="text-xs text-[var(--color-text-secondary)] mb-3">{ex.note}</div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold" style={{ color: "#3fb950" }}>{ex.rating}</span>
                <Link href={ex.url}
                      className="text-xs px-3 py-1 rounded-lg font-bold text-[var(--color-text)]"
                      style={{ background: "var(--color-primary)" }}>
                  Voir avis &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-black text-[var(--color-text)] mb-2">
          📂 Toutes les Catégories
        </h2>
        <p className="text-[var(--color-text-secondary)] text-sm mb-5">
          Guides complets et comparatifs pour chaque aspect de l&apos;investissement crypto.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map(cat => (
            <Link key={cat.href} href={cat.href}
                  className="rounded-2xl border border-[var(--color-border)] p-5 hover:border-[var(--color-primary)] transition-all group"
                  style={{ background: "var(--color-surface)" }}>
              <div className="text-3xl mb-3">{cat.emoji}</div>
              <div className="font-bold text-[var(--color-text)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                {cat.nom}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)]">{cat.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── French Tax Guide ── */}
      <section className="mb-16">
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden"
             style={{ background: "var(--color-surface)" }}>
          <div className="p-6 border-b border-[var(--color-border)]"
               style={{ background: "linear-gradient(135deg, #0055a408, #ef413408)" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3"
                 style={{ background: "#ef413420", color: "#ef4134" }}>
              🇫🇷 Fiscalité Française 2026
            </div>
            <h2 className="text-2xl font-black text-[var(--color-text)]">
              Impôts sur les Cryptomonnaies en France
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm mt-2">
              Ce que tout investisseur français doit savoir. Mis à jour pour la déclaration 2026.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px"
               style={{ background: "var(--color-border)" }}>
            {FR_TAX_INFO.map(item => (
              <div key={item.title} className="p-5"
                   style={{ background: "var(--color-surface)" }}>
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-[var(--color-text)] mb-1">{item.title}</div>
                <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="p-5 border-t border-[var(--color-border)]">
            <p className="text-xs text-[var(--color-text-secondary)]">
              ⚠️ Ces informations sont fournies à titre indicatif. Consultez un expert-comptable ou fiscaliste pour votre situation personnelle.
            </p>
            <Link href="/taxes/learn/crypto-tax-guide"
                  className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-[var(--color-primary)]">
              Guide Fiscal Complet →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Guides Populaires ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-black text-[var(--color-text)] mb-5">
          📖 Guides les Plus Populaires
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {GUIDES_POPULAIRES.map(guide => (
            <Link key={guide.href} href={guide.href}
                  className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 hover:border-[var(--color-primary)] transition-all group"
                  style={{ background: "var(--color-surface)" }}>
              <div>
                <div className="font-bold text-sm text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {guide.title}
                </div>
                <div className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block font-bold"
                     style={{ background: "#6366f120", color: "#818cf8" }}>
                  {guide.tag}
                </div>
              </div>
              <div className="ml-auto text-[var(--color-text-secondary)]">→</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Crypto Markets in French-Speaking Countries ── */}
      <section className="mb-10">
        <div className="rounded-2xl border border-[var(--color-border)] p-6"
             style={{ background: "var(--color-surface)" }}>
          <h2 className="text-xl font-black text-[var(--color-text)] mb-4">
            🌍 La Crypto dans les Pays Francophones
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { country: "🇫🇷 France",    stat: "#5 EU",       desc: "Taux d'adoption crypto" },
              { country: "🇧🇪 Belgique",  stat: "TVA 0%",      desc: "Gains crypto exonérés" },
              { country: "🇨🇭 Suisse",    stat: "Crypto Valley",desc: "Hub blockchain mondial" },
              { country: "🇨🇦 Canada (QC)", stat: "Top 10",    desc: "Adoption mondiale" },
            ].map(item => (
              <div key={item.country} className="text-center p-4 rounded-xl border border-[var(--color-border)]"
                   style={{ background: "var(--color-bg)" }}>
                <div className="text-sm font-bold text-[var(--color-text)] mb-1">{item.country}</div>
                <div className="text-xl font-black" style={{ color: "var(--color-primary)" }}>{item.stat}</div>
                <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--color-text-secondary)] mt-4">
            Plus de 300 millions de francophones dans le monde. degen0x couvre les particularités fiscales
            et réglementaires de chaque marché.
          </p>
        </div>
      </section>

      {/* ── Other Languages ── */}
      <div className="flex flex-wrap gap-3 text-sm">
        <span className="text-[var(--color-text-secondary)]">Disponible aussi en :</span>
        <Link href="/" className="text-[var(--color-primary)] hover:underline">🇺🇸 English</Link>
        <Link href="/es" className="text-[var(--color-primary)] hover:underline">🇪🇸 Español</Link>
        <Link href="/pt-br" className="text-[var(--color-primary)] hover:underline">🇧🇷 Português</Link>
      </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "degen0x en Fran\u00e7ais \u2014 Comparer Exchanges, Wallets et DeFi", "description": "degen0x est votre guide de confiance pour les cryptomonnaies en fran\u00e7ais. Comparez les exchanges, wallets et protocoles DeFi. Avis d", "url": "https://degen0x.com/fr", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
