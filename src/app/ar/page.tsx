import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from "next/link";

// ─────────────────────────────────────────────
//  Arabic (AR) Localization Landing Page
//  degen0x · Sprint 28 · Day 34
//  Targeting MENA region (UAE, Saudi Arabia, Egypt, etc.), 420M+ Arabic speakers worldwide
//  MENA: high crypto adoption, regulatory clarity in UAE/Saudi, growing institutional interest
//  Crypto exchanges: Binance MENA, Rain, BitOasis, CoinMENA
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  title: "degen0x النسخة العربية — مقارنة منصات العملات الرقمية",
  description: "degen0x هي منصة شاملة لمقارنة العملات الرقمية باللغة العربية. قارن منصات التداول والمحافظ وبروتوكولات DeFi، وتعرف على التنظيم في منطقة MENA والضرائب والأدوات",
  alternates: { canonical: "https://degen0x.com/ar" },
  openGraph: {
    title: "degen0x النسخة العربية — مقارنة العملات الرقمية والاستثمار",
    description:
      "قارن أفضل منصات التداول والمحافظ وبروتوكولات DeFi. معلومات مفصلة عن تنظيم MENA والضرائب وأدوات مجانية لقرارات استثمارية حكيمة.",
    locale: "ar_SA",
    type: "website",
  },
  twitter: { card: "summary_large_image" }};

const CATEGORIES = [
  {
    name: "منصات العملات الرقمية",
    desc: "قارن أفضل المنصات حسب الرسوم والأمان والعملات المدعومة. Binance و Rain و BitOasis وغيرها",
    href: "/exchanges/best",
    emoji: "🔀",
    color: "#6366f1",
  },
  {
    name: "محافظ العملات الرقمية",
    desc: "قارن محافظ Ledger و Trezor والمحافظ البرمجية بشكل شامل وموثوق",
    href: "/wallets/best",
    emoji: "👛",
    color: "#06b6d4",
  },
  {
    name: "DeFi والإقراض الرقمي",
    desc: "الإقراض اللامركزي والاستقراض والحصول على أعلى عوائد من خلال Staking",
    href: "/defi-lending/best",
    emoji: "⚡",
    color: "#22c55e",
  },
  {
    name: "استثمار العملات الرقمية",
    desc: "شرح شامل لاستثمار البيتكوين والإيثيريوم والعملات البديلة",
    href: "/investing",
    emoji: "📈",
    color: "#f59e0b",
  },
  {
    name: "ضرائب العملات الرقمية",
    desc: "شرح شامل لضرائب العملات الرقمية في منطقة MENA. كيفية الإبلاغ وتوفير الضرائب",
    href: "/taxes",
    emoji: "🧾",
    color: "#f0883e",
  },
  {
    name: "أدوات مجانية",
    desc: "حاسبة التحويل وحاسبة DCA ومتتبع المحفظة — مجاني بالكامل",
    href: "/tools",
    emoji: "🛠️",
    color: "#bc8cff",
  },
  {
    name: "NFT والرموز غير القابلة للتبادل",
    desc: "كيفية شراء وبيع NFT والأسواق الرئيسية والمخاطر والنصائح",
    href: "/nfts",
    emoji: "🖼️",
    color: "#f85149",
  },
  {
    name: "تعلم العملات الرقمية",
    desc: "من المبتدئ إلى الخبير. شرح البلوكتشين و DeFi و Web3 باللغة العربية",
    href: "/learn",
    emoji: "🎓",
    color: "#3fb950",
  },
];

const AR_EXCHANGES = [
  {
    name: "Binance MENA",
    rating: "9.5/10",
    desc: "منصة Binance المخصصة لمنطقة MENA مع دعم اللغة العربية والامتثال التام للتنظيم",
    badge: "الأكثر موثوقية",
    badgeColor: "#f7931a",
    href: "/exchanges/binance-mena",
    pros: ["دعم عربي كامل", "أعلى سيولة", "رسوم منخفضة"],
    flag: "🌍",
  },
  {
    name: "Rain (بيرين)",
    rating: "9.0/10",
    desc: "منصة خليجية موثوقة بمقرها في البحرين، معترف بها من قبل السلطات المالية",
    badge: "موثوق محليًا",
    badgeColor: "#3fb950",
    href: "/exchanges/rain",
    pros: ["توافق كامل مع التنظيم", "سيولة عالية", "دعم عربي ممتاز"],
    flag: "🇧🇭",
  },
  {
    name: "BitOasis (بيت أويسيس)",
    rating: "8.5/10",
    desc: "منصة إماراتية موثوقة مع ترخيص كامل من هيئة الرقابة المالية بدبي",
    badge: "معتمد إماراتي",
    badgeColor: "#6366f1",
    href: "/exchanges/bitoasis",
    pros: ["معتمد من DFSA", "محفظة آمنة", "خدمة عملاء عربية"],
    flag: "🇦🇪",
  },
  {
    name: "CoinMENA",
    rating: "8.2/10",
    desc: "منصة متخصصة للمنطقة العربية مع التركيز على الامتثال والشفافية والأمان",
    badge: "متخصصة MENA",
    badgeColor: "#06b6d4",
    href: "/exchanges/coinmena",
    pros: ["منصة عربية محلية", "رسوم تنافسية", "دعم كامل بالعربية"],
    flag: "🇸🇦",
  },
];

const AR_GUIDES = [
  { title: "البدء مع العملات الرقمية في MENA", href: "/learn/how-to-buy-crypto", tag: "ابدأ هنا" },
  { title: "دليل ضرائب العملات الرقمية في الإمارات 2026", href: "/taxes/learn/crypto-tax-guide", tag: "الضرائب" },
  { title: "كيفية اختيار محفظة الأجهزة الآمنة", href: "/wallets/best/hardware", tag: "الأمان" },
  { title: "كسب العائدات من DeFi — Staking والإقراض", href: "/defi-lending/best", tag: "DeFi" },
  { title: "ما هو البيتكوين؟ دليل شامل للمبتدئين", href: "/learn/what-is-bitcoin", tag: "البيتكوين" },
  { title: "دليل شراء وبيع NFT", href: "/nfts/how-to-buy", tag: "NFT" },
];

const AR_TOOLS = [
  { name: "محول العملات الرقمية", desc: "تحويل BTC و ETH و XRP إلى الدرهم والريال", href: "/tools/converter", emoji: "🔄" },
  { name: "حاسبة DCA", desc: "محاكاة الاستثمار الدوري الشهري", href: "/tools/dca-calculator", emoji: "📊" },
  { name: "مقارن رسوم المنصات", desc: "قارن رسوم جميع المنصات في لمحة واحدة", href: "/tools/exchange-fees", emoji: "💰" },
  { name: "حاسبة الضرائب", desc: "احسب أرباح العملات الرقمية والضرائب المستحقة", href: "/tools/tax-calculator", emoji: "🧾" },
  { name: "متتبع المحفظة", desc: "إدارة فعلية لأصولك في الوقت الفعلي", href: "/tools/portfolio-tracker", emoji: "📱" },
  { name: "متتبع رسوم الغاز", desc: "تتبع رسوم ETH الحالية في الوقت الفعلي", href: "/tools/gas-tracker", emoji: "⛽" },
];

const AR_STATS = [
  { label: "مستخدمو العملات الرقمية في MENA", value: "أكثر من 4 ملايين", sub: "المستخدمون المسجلون المقدرون" },
  { label: "ترتيب سوق MENA العالمي", value: "ضمن أعلى 20", sub: "في سوق العملات الرقمية العالمية" },
  { label: "نسبة الاعتماد المؤسسي", value: "نمو سريع", sub: "تبني المشاريع الكبرى" },
  { label: "معدل الأمان التنظيمي", value: "الأعلى عالميًا", sub: "خاصة في الإمارات والسعودية" },
  { label: "تبني العملات الرقمية", value: "سريع جدًا", sub: "النمو الأسرع عالميًا في MENA" },
  { label: "الشركات الناشئة في البلوكتشين", value: "تنمية قوية", sub: "دبي والرياض كمراكز تقنية رائدة" },
];

const AR_REG_NOTES = [
  {
    icon: "⚖️",
    title: "نظام VARA الإماراتي",
    body: "أطلقت الإمارات العربية المتحدة نظام تنظيمي متقدم من خلال هيئة الرقابة المالية (DFSA) في مناطق حرة مثل دبي. VARA (رسمي) توفر وضوح قانوني وحماية استثمارية عالية جدًا للمنصات والعملاء.",
  },
  {
    icon: "🧾",
    title: "المملكة العربية السعودية — لا توجد ضريبة على أرباح العملات الرقمية",
    body: "لم تفرض السعودية ضريبة محددة على أرباح العملات الرقمية للأفراد. هذا يجعلها وجهة جذابة للمستثمرين. ومع ذلك، تخطط هيئة النقد السعودي (SAMA) لمراقبة صارمة.",
  },
  {
    icon: "🔒",
    title: "متطلبات الحفظ الآمن والامتثال",
    body: "يجب على المنصات المرخصة في MENA الحفاظ على معايير عالية جدًا من الأمان والحفظ البارد. جميع الأصول الرقمية يجب أن تُخزن بشكل آمن وخاضعة للتدقيق المنتظم.",
  },
  {
    icon: "🏛️",
    title: "قواعد AML/KYC والمراقبة",
    body: "جميع المنصات يجب أن تتوافق بصرامة مع قوانين مكافحة غسل الأموال (AML) والتحقق من الهوية (KYC). هذا يضمن أن الأموال المشبوهة لا تدخل السوق.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ar', },
  ],
};

export default function ArabicPage() {
  return (
    <div dir="rtl" style={{ background: "var(--color-bg, #0d1117)", minHeight: "100vh", color: "var(--color-text, #e6edf3)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="ar"
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
            🌍 النسخة العربية · Arabic
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
            <span style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              قارن جميع العملات الرقمية بثقة
            </span>
            <br />
            <span style={{ color: "#e6edf3" }}>بدليل موثوق وشامل باللغة العربية</span>
          </h1>
          <p style={{ fontSize: 17, color: "#8b949e", maxWidth: 640, margin: "0 auto 32px", lineHeight: 1.7 }}>
            degen0x هي منصة عربية شاملة لمقارنة منصات التداول والمحافظ وبروتوكولات DeFi.
            نوفر مراجعات احترافية وأدوات مجانية ومعلومات محدثة عن التنظيم والضرائب في منطقة MENA.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/exchanges/best" style={{
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              color: "white", padding: "12px 28px", borderRadius: 10,
              fontWeight: 700, fontSize: 15, textDecoration: "none",
            }}>
              قارن المنصات ←
            </Link>
            <Link href="/tools/converter" style={{
              background: "#161b22", border: "1px solid #30363d",
              color: "#e6edf3", padding: "12px 28px", borderRadius: 10,
              fontWeight: 600, fontSize: 15, textDecoration: "none",
            }}>
              استخدم الأدوات المجانية 🛠️
            </Link>
          </div>
        </div>
      </section>

      {/* ── Market Stats ── */}
      <section style={{ padding: "32px 24px", borderBottom: "1px solid #30363d", background: "#161b22" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {AR_STATS.map((s) => (
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
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, textAlign: "center" }}>ابحث حسب الفئات</h2>
        <p style={{ textAlign: "center", color: "#8b949e", marginBottom: 36, fontSize: 14 }}>
          من منصات التداول والمحافظ إلى DeFi والضرائب — نجيب على جميع أسئلتك
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

      {/* ── Top Exchanges for MENA ── */}
      <section style={{ padding: "0 24px 56px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>🏆 أفضل منصات MENA 2026</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>
          مختارة بناءً على الرسوم والأمان والسهولة والدعم العربي
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {AR_EXCHANGES.map((ex, i) => (
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
                  <div style={{ fontSize: 10, color: "#8b949e", marginTop: 2 }}>التقييم الإجمالي</div>
                  <div style={{
                    marginTop: 10, background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                    color: "white", padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700,
                  }}>معلومات إضافية ←</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Free Tools ── */}
      <section style={{ padding: "0 24px 56px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>🛠️ الأدوات المجانية</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>أدوات مجانية بالكامل بدون الحاجة إلى التسجيل</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
          {AR_TOOLS.map((tool) => (
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
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>⚖️ تنظيم العملات الرقمية في MENA — ما تحتاج إلى معرفته</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>
          منطقة MENA تتمتع بواحد من أوضح الأنظمة التنظيمية للعملات الرقمية عالميًا. معلومات أساسية لاستثمار آمن
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {AR_REG_NOTES.map((note) => (
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

      {/* ── Popular Guides ── */}
      <section style={{ padding: "0 24px 56px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>📚 الأدلة الشهيرة</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>أدلة عملات رقمية شاملة متاحة باللغة العربية</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
          {AR_GUIDES.map((g) => (
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
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>اشترك في النشرة البريدية المجانية</h2>
        <p style={{ color: "#8b949e", fontSize: 14, marginBottom: 24, maxWidth: 480, margin: "0 auto 24px" }}>
          احصل على أحدث أخبار العملات الرقمية وتحليلات الإطلاقات الجديدة وتوصيات العملات كل أسبوع باللغة العربية. الاشتراك مجاني تمامًا.
        </p>
        <Link href="/newsletter" style={{
          background: "linear-gradient(135deg, #6366f1, #06b6d4)",
          color: "white", padding: "13px 32px", borderRadius: 10,
          fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block",
        }}>
          اشترك الآن مجانًا ←
        </Link>
      </section>

      {/* ── Footer Note ── */}
      <div style={{ textAlign: "center", padding: "24px", color: "#8b949e", fontSize: 11, borderTop: "1px solid #30363d" }}>
        <p>degen0x النسخة العربية — تحديث مارس 2026 · لأغراض معلوماتية فقط وليست نصيحة استثمارية</p>
        <p style={{ marginTop: 6 }}>
          <Link href="/ar" style={{ color: "#6366f1", textDecoration: "none" }}>🌍 العربية</Link>
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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "degen0x \u0627\u0644\u0646\u0633\u062e\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u2014 \u0645\u0642\u0627\u0631\u0646\u0629 \u0645\u0646\u0635\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u0627\u062a \u0627\u0644\u0631\u0642\u0645\u064a\u0629", "description": "degen0x \u0647\u064a \u0645\u0646\u0635\u0629 \u0634\u0627\u0645\u0644\u0629 \u0644\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u062a \u0627\u0644\u0631\u0642\u0645\u064a\u0629 \u0628\u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629. \u0642\u0627\u0631\u0646 \u0645\u0646\u0635\u0627\u062a \u0627\u0644\u062a\u062f\u0627\u0648\u0644 \u0648\u0627\u0644\u0645\u062d\u0627\u0641\u0638 \u0648\u0628\u0631\u0648\u062a\u0648\u0643\u0648\u0644\u0627\u062a DeFi\u060c \u0648\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u062a\u0646\u0638\u064a\u0645 \u0641\u064a \u0645\u0646\u0637\u0642\u0629 MENA \u0648\u0627\u0644\u0636\u0631\u0627\u0626\u0628 \u0648\u0627\u0644\u0623\u062f\u0648\u0627\u062a", "url": "https://degen0x.com/ar", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
