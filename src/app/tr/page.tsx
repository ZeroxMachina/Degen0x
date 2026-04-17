import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from "next/link";

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

// ─────────────────────────────────────────────
//  Turkish (TR) Localization Landing Page
//  degen0x · Sprint 28 · Day 34
//  Targeting Turkey: #1 crypto adoption globally per Chainalysis, 85M+ Turkish speakers
//  Turkish crypto market: high adoption, growing regulatory clarity, TRY inflation hedge narrative
//  Crypto exchanges: BtcTurk, Paribu, Bitci, Binance TR
//  Regulatory: MASAK (FIU), SPK oversight, no crypto-specific tax law yet (2026), proposed 0.03% transaction tax
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  title: "degen0x Türkçe — Kripto Para Borsaları, Cüzdanlar ve DeFi",
  description:
    "degen0x, Türkiye için kapsamlı kripto para karşılaştırma platformudur. Borsaları, cüzdanları, DeFi protokollerini karşılaştırın; Türkiye'de vergi, düzenleme ve ücretsiz araçlar hakkında bilgi alın.",
  alternates: { canonical: "/tr" },
  openGraph: {
    title: "degen0x Türkçe — Kripto Para Borsaları ve Yatırım Rehberi",
    description:
      "Türkiye'nin en iyi kripto para borsalarını, cüzdanlarını ve DeFi protokollerini karşılaştırın. Vergi, düzenleme ve güvenlik hakkında tam rehberi okuyun.",
    locale: "tr_TR",
    type: "website",
  },
  twitter: { card: "summary_large_image" }};

const CATEGORIES = [
  {
    name: "Kripto Para Borsaları",
    desc: "BtcTurk, Paribu, Bitci ve Binance TR'yi ücretler, güvenlik ve desteklenen paraların göre karşılaştırın",
    href: "/exchanges/best",
    emoji: "🔀",
    color: "#6366f1",
  },
  {
    name: "Kripto Para Cüzdanları",
    desc: "Ledger, Trezor ve yazılım cüzdanlarını kapsamlı ve güvenilir şekilde karşılaştırın",
    href: "/wallets/best",
    emoji: "👛",
    color: "#06b6d4",
  },
  {
    name: "DeFi ve Kredi Alma",
    desc: "Merkezi olmayan borç verme, borç alma ve Staking yoluyla yüksek getiri elde edin",
    href: "/defi-lending/best",
    emoji: "⚡",
    color: "#22c55e",
  },
  {
    name: "Kripto Para Yatırımı",
    desc: "Bitcoin, Ethereum ve altcoinlere yatırım yapmak için kapsamlı rehber",
    href: "/investing",
    emoji: "📈",
    color: "#f59e0b",
  },
  {
    name: "Kripto Para Vergileri",
    desc: "Türkiye'deki kripto para vergilendirmesi hakkında kapsamlı bilgi. Raporlama ve vergi tasarrufu",
    href: "/taxes",
    emoji: "🧾",
    color: "#f0883e",
  },
  {
    name: "Ücretsiz Araçlar",
    desc: "Para çevirici, DCA hesaplama, portföy takibi — tamamı ücretsiz",
    href: "/tools",
    emoji: "🛠️",
    color: "#bc8cff",
  },
  {
    name: "NFT ve Dijital Sanat",
    desc: "NFT satın alma, satma, pazarlar ve riskleri hakkında rehber",
    href: "/nfts",
    emoji: "🖼️",
    color: "#f85149",
  },
  {
    name: "Kripto Para Öğren",
    desc: "Baştan başlayanlar için sona kadar. Blockchain, DeFi ve Web3'ü Türkçe öğrenin",
    href: "/learn",
    emoji: "🎓",
    color: "#3fb950",
  },
];

const TR_EXCHANGES = [
  {
    name: "BtcTurk",
    rating: "9.5/10",
    desc: "Türkiye'nin en büyük ve en güvenilir kripto para borsası. Fiat giriş çıkış, yüksek likidite ve 24/7 Türkçe destek",
    badge: "En Güvenilir",
    badgeColor: "#f7931a",
    href: "/exchanges/btcturk",
    pros: ["Türkiye'den giriş çıkış", "Yüksek likidite", "Düşük ücretler"],
    flag: "🇹🇷",
  },
  {
    name: "Paribu",
    rating: "9.2/10",
    desc: "Türk kripto para borsası, kolay arayüz ve hızlı işlemler. P2P ticareti ve geniş kripto seçimi",
    badge: "Kolay Kullanım",
    badgeColor: "#3fb950",
    href: "/exchanges/paribu",
    pros: ["P2P ticareti", "Basit arayüz", "Türkçe destek"],
    flag: "🇹🇷",
  },
  {
    name: "Bitci",
    rating: "8.8/10",
    desc: "Yüksek güvenlik standartları ve gelişmiş ticaret özellikleri ile Türk yatırımcılar için ideal",
    badge: "Güvenlik Odağı",
    badgeColor: "#6366f1",
    href: "/exchanges/bitci",
    pros: ["Yüksek güvenlik", "Gelişmiş ticaret", "Türkçe platform"],
    flag: "🇹🇷",
  },
  {
    name: "Binance TR",
    rating: "9.0/10",
    desc: "Global lider Binance'in Türkiye bölümü. Geniş kripto seçimi, düşük ücretler ve uluslararası güvenlik standartları",
    badge: "Global Lider",
    badgeColor: "#06b6d4",
    href: "/exchanges/binance-tr",
    pros: ["Geniş kripto seçimi", "Düşük ücretler", "Dünya standartları"],
    flag: "🌍",
  },
];

const TR_GUIDES = [
  { title: "Türkiye'de Kripto Para ile Başlamak", href: "/learn/how-to-buy-crypto", tag: "Başlangıç" },
  { title: "2026 Türkiye Kripto Vergi Rehberi", href: "/taxes/learn/crypto-tax-guide", tag: "Vergi" },
  { title: "Güvenli Donanım Cüzdanı Seçimi Rehberi", href: "/wallets/best/hardware", tag: "Güvenlik" },
  { title: "DeFi ile Kazanç Elde Etme — Staking ve Borç Verme", href: "/defi-lending/best", tag: "DeFi" },
  { title: "Bitcoin Nedir? Başlangıç Seviyesi Kapsamlı Rehber", href: "/learn/what-is-bitcoin", tag: "Bitcoin" },
  { title: "NFT Satın Alma ve Satış Rehberi", href: "/nfts/how-to-buy", tag: "NFT" },
];

const TR_TOOLS = [
  { name: "Kripto Para Çevirici", desc: "BTC, ETH, XRP'yi Türk Lirası'na çevir", href: "/tools/converter", emoji: "🔄" },
  { name: "DCA Hesaplası", desc: "Aylık yatırım simulasyonu ve planlama", href: "/tools/dca-calculator", emoji: "📊" },
  { name: "Borsa Ücret Karşılaştırıcısı", desc: "Tüm borsaların ücretlerini bir bakışta karşılaştır", href: "/tools/exchange-fees", emoji: "💰" },
  { name: "Vergi Hesaplası", desc: "Kripto karlarını ve ödenmesi gereken vergileri hesapla", href: "/tools/tax-calculator", emoji: "🧾" },
  { name: "Portföy Takip Aracı", desc: "Varlıklarını gerçek zamanda yönet ve takip et", href: "/tools/portfolio-tracker", emoji: "📱" },
  { name: "Gas Ücreti Takipçisi", desc: "ETH gas ücretlerini gerçek zamanda takip et", href: "/tools/gas-tracker", emoji: "⛽" },
];

const TR_STATS = [
  { label: "Türkiye'de Kripto Kullanıcısı", value: "10+ Milyon", sub: "Tahmini kayıtlı kullanıcı" },
  { label: "Türkiye Global Kripto Sıralaması", value: "#1", sub: "Chainalysis 2025 raporuna göre" },
  { label: "Kripto Benimseme Oranı", value: "Dünya 1'ncisi", sub: "Türkiye'de yüksek benimseme hızı" },
  { label: "Türk Lirası Değer Kaybı", value: "80%+ (5 yıl)", sub: "Enflasyon ve döviz kuru düşüşü" },
  { label: "Kripto Yatırımcı Büyümesi", value: "Yıllık 45%+", sub: "TRY enflasyonuna karşı korunma" },
  { label: "Blockchain Startup'ları", value: "500+", sub: "Türkiye'de aktif kripto projeleri" },
];

const TR_REG_NOTES = [
  {
    icon: "⚖️",
    title: "MASAK Düzenlemesi ve FIU",
    body: "Türkiye'nin Mali İntelijen Birimi (MASAK) kripto para piyasasını denetler. 2024'te MASAK, kripto para borsalarının ve saklama hizmetleri sağlayıcılarının kaydedilmesini zorunlu hale getirmiştir. Tüm borsa ve cüzdan hizmetleri MASAK tarafından onaylanmalıdır.",
  },
  {
    icon: "🧾",
    title: "SPK Gözetimi ve Vergilendirilme",
    body: "Sermaye Piyasası Kurulu (SPK), kripto para piyasasında koordinasyon sağlamaktadır. Henüz kripto'ya özel bir vergi kanunu yoktur, ancak 2026'da %0,03 işlem vergisi önerilmektedir. Gelir, normal vergi oranlarına tabi tutulabilir.",
  },
  {
    icon: "🔒",
    title: "Kripto Varlık Güvenliği Standartları",
    body: "MASAK onaylı tüm borsalar, kullanıcı varlıklarını soğuk cüzdanlarla depolama zorunluluğuna sahiptir. En az %95 varlıklar soğuk saklama ortamında bulunmalı ve sigortalı olmalıdır.",
  },
  {
    icon: "🏛️",
    title: "AML/KYC ve Kimlik Doğrulama",
    body: "Tüm kripto borsaları kara para aklamaya karşı yasalar (AML) ve müşteri tanı kurallarına (KYC) kesinlikle uymalıdır. Kullanıcılar kimlik belgesi, TCKN ve adres belgesi ile doğrulanmalıdır. Şüpheli işlemler MASAK'a bildirilir.",
  },
];

const TR_FAQ = [
  {
    q: "Türkiye'de kripto para satın almak yasal mı?",
    a: "Evet, tamamen yasal. MASAK onaylı borsalardan satın almak güvenlidir. Ancak, tüm işlemlerin vergisel sonuçları vardır.",
  },
  {
    q: "Türkiye'de kripto para vergisi nedir?",
    a: "Henüz kripto'ya özel vergi kanunu yok, ama kazançlar normal gelir vergisine tabi. 2026'da %0,03 işlem vergisi önerilmiştir. Vergiler KDV'den ayrı tutulabilir.",
  },
  {
    q: "Hangi borsalar Türkiye'de en güvenli?",
    a: "BtcTurk, Paribu, Bitci ve Binance TR — tümü MASAK onaylı ve en yüksek güvenlik standartlarına sahip.",
  },
  {
    q: "Türk Lirası'ndan kripto'ya geçmek mantıklı mı?",
    a: "Türk Lirası 5 yılda %80'den fazla değer kaybetti. Birçok Türk yatırımcı kripto'yu enflasyona karşı bir korunma aracı olarak görüyor.",
  },
  {
    q: "Kripto parayla vergi kaçırmak ne kadar riskli?",
    a: "Çok riskli. MASAK tüm işlemleri takip eder ve cezalar ağır olabilir. Yasal bir muhasebeci veya vergi danışmanı ile çalışmak akıllıca.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tr', },
  ],
};

export default function TurkishPage() {
  return (
    <div style={{ background: "var(--color-bg, #0d1117)", minHeight: "100vh", color: "var(--color-text, #e6edf3)" }}>
      <ArticleSchema
        headline="degen0x Türkçe — Kripto Para Borsaları, Cüzdanlar ve DeFi"
        description="degen0x, Türkiye için kapsamlı kripto para karşılaştırma platformudur. Borsaları, cüzdanları, DeFi protokollerini karşılaştırın; Türkiye"
        url="/tr"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tr" />
        <ReadingTime />
      </div>
<AuthoritySources url="/tr" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="tr"
      />
      {/* ── Hero ── */}
      <section style={{
        background: "linear-gradient(135deg, #6366f108 0%, #06b6d408 50%, #f7931a08 100%)",
        borderBottom: "1px solid #30363d",
        padding: "64px 24px 56px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ fontSize: 13, color: "#8b949e", marginBottom: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            🇹🇷 Türkçe Sürüm · Turkish
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
            <span style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Tüm Kripto Paraları Güvenle Karşılaştırın
            </span>
            <br />
            <span style={{ color: "#e6edf3" }}>Türkçe rehber, borsa karşılaştırması ve araçlar</span>
          </h1>
          <p style={{ fontSize: 17, color: "#8b949e", maxWidth: 640, margin: "0 auto 32px", lineHeight: 1.7 }}>
            degen0x, Türkiye'nin en kapsamlı kripto para karşılaştırma platformudur. Borsaları, cüzdanları, DeFi protokollerini karşılaştırın.
            MASAK düzenlemeleri, vergi bilgileri ve ücretsiz araçlarla bilinçli yatırım kararları verin.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/exchanges/best" style={{
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              color: "white", padding: "12px 28px", borderRadius: 10,
              fontWeight: 700, fontSize: 15, textDecoration: "none",
            }}>
              Borsaları Karşılaştır ←
            </Link>
            <Link href="/tools/converter" style={{
              background: "#161b22", border: "1px solid #30363d",
              color: "#e6edf3", padding: "12px 28px", borderRadius: 10,
              fontWeight: 600, fontSize: 15, textDecoration: "none",
            }}>
              Ücretsiz Araçları Kullan 🛠️
            </Link>
          </div>
        </div>
      </section>

      {/* ── Market Stats ── */}
      <section style={{ padding: "32px 24px", borderBottom: "1px solid #30363d", background: "#161b22" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {TR_STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#f7931a" }}>{s.value}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3", marginTop: 4 }}>{s.label}</div>
              <div style={{ fontSize: 11, color: "#8b949e", marginTop: 2 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Categories ── */}
      <section style={{ padding: "56px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, textAlign: "center" }}>Kategoriye Göre Arayın</h2>
        <p style={{ textAlign: "center", color: "#8b949e", marginBottom: 36, fontSize: 14 }}>
          Borsalardan cüzdanlara kadar DeFi'ye ve vergilere — tüm sorularınıza cevap verdik
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {CATEGORIES.map((cat) => (
            <Link key={cat.name} href={cat.href} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#161b22", border: "1px solid #30363d", borderRadius: 12,
                padding: "18px 20px", cursor: "pointer", transition: "border-color 0.2s",
                borderTop: `3px solid ${cat.color}`,
              }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{cat.emoji}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#e6edf3", marginBottom: 6 }}>{cat.name}</div>
                <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.5 }}>{cat.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Top Exchanges for Turkey ── */}
      <section style={{ padding: "0 24px 56px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>🏆 Türkiye'nin En İyi Borsaları 2026</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>
          Ücretler, güvenlik, kullanım kolaylığı ve Türkçe destek temelinde seçildi
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {TR_EXCHANGES.map((ex, i) => (
            <Link key={ex.name} href={ex.href} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#161b22", border: "1px solid #30363d", borderRadius: 12,
                padding: "20px 24px", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap",
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, flexShrink: 0,
                }}>
                  {ex.flag}
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 16, fontWeight: 800, color: "#e6edf3" }}>#{i + 1} {ex.name}</span>
                    <span style={{
                      background: `${ex.badgeColor}20`, color: ex.badgeColor,
                      border: `1px solid ${ex.badgeColor}40`, borderRadius: 6,
                      padding: "2px 8px", fontSize: 10, fontWeight: 700,
                    }}>{ex.badge}</span>
                  </div>
                  <div style={{ fontSize: 13, color: "#8b949e" }}>{ex.desc}</div>
                  <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                    {ex.pros.map((p) => (
                      <span key={p} style={{ fontSize: 11, color: "#3fb950", background: "#3fb95015", padding: "2px 7px", borderRadius: 4 }}>✓ {p}</span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#f7931a" }}>{ex.rating}</div>
                  <div style={{ fontSize: 10, color: "#8b949e", marginTop: 2 }}>Genel Değerlendirme</div>
                  <div style={{
                    marginTop: 10, background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                    color: "white", padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700,
                  }}>Daha Fazla ←</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Free Tools ── */}
      <section style={{ padding: "0 24px 56px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>🛠️ Ücretsiz Araçlar</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>Kayıt olmadan tamamen ücretsiz araçlar</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
          {TR_TOOLS.map((tool) => (
            <Link key={tool.name} href={tool.href} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#161b22", border: "1px solid #30363d", borderRadius: 10,
                padding: "16px 18px", cursor: "pointer",
              }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{tool.emoji}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3", marginBottom: 4 }}>{tool.name}</div>
                <div style={{ fontSize: 11, color: "#8b949e" }}>{tool.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Regulation Section ── */}
      <section style={{ padding: "0 24px 56px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>⚖️ Türkiye'de Kripto Para Düzenlemesi — Bilmeniz Gerekenler</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>
          Türkiye güçlü düzenleyici çerçeve ve uyum standartlarına sahip. MASAK gözetimi altında güvenli yatırım yapın
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {TR_REG_NOTES.map((note) => (
            <div key={note.title} style={{
              background: "#161b22", border: "1px solid #30363d", borderRadius: 12,
              padding: "20px 22px",
            }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{note.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>{note.title}</div>
              <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.65 }}>{note.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Turkish Lira Inflation Narrative ── */}
      <section style={{ padding: "0 24px 56px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, #f7931a15, #f0883e15)",
          border: "1px solid #f7931a40", borderRadius: 12,
          padding: "28px 24px",
        }}>
          <div style={{ fontSize: 24, marginBottom: 12 }}>💰 Türk Lirası Enflasyonu ve Kripto Paraların Rolü</div>
          <p style={{ color: "#8b949e", lineHeight: 1.7, marginBottom: 16, fontSize: 14 }}>
            Türk Lirası (TRY) son 5 yılda %80'den fazla değer kaybetmiştir. Yüksek enflasyon ve döviz kuru oynaklığı nedeniyle,
            birçok Türk yatırımcı kripto paraları enflasyona karşı bir korunma (hedge) aracı olarak görüyor.
          </p>
          <p style={{ color: "#8b949e", lineHeight: 1.7, marginBottom: 16, fontSize: 14 }}>
            <strong style={{ color: "#e6edf3" }}>Neden Türkler Kripto'ya Yatırım Yapıyor?</strong> Sabit bir değer depolamak için,
            fiat para yerine Bitcoin ve Ethereum gibi global kripto paraları tercih ediyorlar. Bu, ulusal para biriminin
            enflasyonundan korunmanın etkili bir yoludur.
          </p>
          <p style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>
            Chainalysis 2025 raporuna göre, Türkiye dünyadaki en yüksek kripto para benimseme oranına sahiptir.
            10+ milyondan fazla Türk, en az bir kripto para hesabına sahiptir — bu Türkiye nüfusunun yaklaşık %12'si.
          </p>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section style={{ padding: "0 24px 56px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>❓ Sık Sorulan Sorular</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>Türk yatırımcıların en çok sorulan kripto soruları</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
          {TR_FAQ.map((faq) => (
            <div key={faq.question} style={{
              background: "#161b22", border: "1px solid #30363d", borderRadius: 12,
              padding: "20px 22px",
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#e6edf3", marginBottom: 10 }}>{faq.question}</div>
              <div style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.6 }}>{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Popular Guides ── */}
      <section style={{ padding: "0 24px 56px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>📚 Popüler Rehberler</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>Türkçe kripto para kılavuzları ve eğitim kaynakları</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
          {TR_GUIDES.map((g) => (
            <Link key={g.title} href={g.href} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#161b22", border: "1px solid #30363d", borderRadius: 10,
                padding: "14px 18px", display: "flex", alignItems: "center", gap: 14,
              }}>
                <div style={{
                  background: "#6366f120", color: "#818cf8", border: "1px solid #6366f140",
                  borderRadius: 6, padding: "2px 8px", fontSize: 10, fontWeight: 700, flexShrink: 0,
                }}>{g.tag}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#e6edf3" }}>{g.title}</div>
                <div style={{ marginLeft: "auto", color: "#8b949e", flexShrink: 0 }}>←</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section style={{
        padding: "48px 24px", margin: "0 24px 56px",
        background: "linear-gradient(135deg, #6366f115, #06b6d415)",
        border: "1px solid #6366f130", borderRadius: 16, maxWidth: 1052, marginLeft: "auto", marginRight: "auto",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>📬</div>
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Ücretsiz Haber Bülteni'ne Abone Olun</h2>
        <p style={{ color: "#8b949e", fontSize: 14, marginBottom: 24, maxWidth: 480, margin: "0 auto 24px" }}>
          Her hafta en son kripto haberleri, yeni projelerin analizleri ve yatırım tavsiyelerini Türkçe olarak alın.
          Tamamı ücretsiz ve spam yok.
        </p>
        <Link href="/newsletter" style={{
          background: "linear-gradient(135deg, #6366f1, #06b6d4)",
          color: "white", padding: "13px 32px", borderRadius: 10,
          fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block",
        }}>
          Şimdi Abone Ol ←
        </Link>
      </section>

      {/* ── Footer Note ── */}
      <div style={{ textAlign: "center", padding: "24px", color: "#8b949e", fontSize: 11, borderTop: "1px solid #30363d" }}>
        <p>degen0x Türkçe Sürümü — Mart 2026 Güncellemesi · Yalnızca bilgilendirme amaçlı, yatırım tavsiyesi değildir</p>
        <p style={{ marginTop: 6 }}>
          <Link href="/tr" style={{ color: "#6366f1", textDecoration: "none" }}>🇹🇷 Türkçe</Link>
          {" · "}
          <Link href="/ar" style={{ color: "#8b949e", textDecoration: "none" }}>🌍 العربية</Link>
          {" · "}
          <Link href="/ko" style={{ color: "#8b949e", textDecoration: "none" }}>🇰🇷 한국어</Link>
          {" · "}
          <Link href="/ja" style={{ color: "#8b949e", textDecoration: "none" }}>🇯🇵 日本語</Link>
          {" · "}
          <Link href="/de" style={{ color: "#8b949e", textDecoration: "none" }}>🇩🇪 Deutsch</Link>
          {" · "}
          <Link href="/es" style={{ color: "#8b949e", textDecoration: "none" }}>🇪🇸 Español</Link>
          {" · "}
          <Link href="/fr" style={{ color: "#8b949e", textDecoration: "none" }}>🇫🇷 Français</Link>
          {" · "}
          <Link href="/" style={{ color: "#8b949e", textDecoration: "none" }}>🌐 English</Link>
        </p>
      </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "degen0x T\u00fcrk\u00e7e \u2014 Kripto Para Borsalar\u0131, C\u00fczdanlar ve DeFi", "description": "degen0x, T\u00fcrkiye i\u00e7in kapsaml\u0131 kripto para kar\u015f\u0131la\u015ft\u0131rma platformudur. Borsalar\u0131, c\u00fczdanlar\u0131, DeFi protokollerini kar\u015f\u0131la\u015ft\u0131r\u0131n; T\u00fcrkiye", "url": "https://degen0x.com/tr", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
    </div>
  );
}
