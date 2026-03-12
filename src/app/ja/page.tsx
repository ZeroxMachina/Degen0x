import { Metadata } from "next";
import Link from "next/link";

// ─────────────────────────────────────────────
//  Japanese (JA) Localization Landing Page
//  degen0x · Sprint 26 · Day 32
//  Targeting Japan (#3 global crypto market), 125M+ Japanese speakers
//  Japan: strict regulatory environment, high hardware wallet adoption
//  Crypto exchanges: bitFlyer, Coincheck, GMO Coin, SBI VC Trade
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  title: "degen0x 日本語版 — 暗号資産取引所・ウォレット・DeFiを比較",
  description:
    "degen0x は日本語で利用できる暗号資産の総合比較プラットフォームです。取引所、ウォレット、DeFiプロトコルを比較し、専門家のレビュー、無料ツール、網羅的なガイドで賢い暗号資産投資をサポートします。",
  alternates: { canonical: "https://degen0x.com/ja" },
  openGraph: {
    title: "degen0x 日本語版 — 暗号資産比較・투資ガイド",
    description:
      "最高の暗号資産取引所、ウォレット、DeFiプロトコルを比較。日本の規制に対応した詳細な解説と無料ツールで、賢い投資判断をサポートします。",
    locale: "ja_JP",
    type: "website",
  },
};

const CATEGORIES = [
  {
    name: "暗号資産取引所",
    desc: "手数料・セキュリティ・取り扱いコインで最高の取引所を比較。bitFlyer、Coincheck、Binanceなど",
    href: "/exchanges/best",
    emoji: "🔀",
    color: "#6366f1",
  },
  {
    name: "暗号資産ウォレット",
    desc: "Ledger、Trezorなどの人気ハードウェアウォレットからソフトウェアウォレットまで徹底比較",
    href: "/wallets/best",
    emoji: "👛",
    color: "#06b6d4",
  },
  {
    name: "DeFiと暗号資産ローン",
    desc: "分散型レンディング、ボロウイング、ステーキングで最高のリターンを実現",
    href: "/defi-lending/best",
    emoji: "⚡",
    color: "#22c55e",
  },
  {
    name: "暗号資産投資",
    desc: "ビットコイン、イーサリアム、アルトコインへの投資を網羅的に解説",
    href: "/investing",
    emoji: "📈",
    color: "#f59e0b",
  },
  {
    name: "暗号資産税務",
    desc: "日本の暗号資産税制を完全解説。申告方法、節税ポイント、対応ツールまで",
    href: "/taxes",
    emoji: "🧾",
    color: "#f0883e",
  },
  {
    name: "無料ツール",
    desc: "価格計算機、DCAシミュレーター、ポートフォリオトラッカーなど完全無料",
    href: "/tools",
    emoji: "🛠️",
    color: "#bc8cff",
  },
  {
    name: "NFT",
    desc: "NFTの売買方法、主要マーケットプレイス、リスクと注意点をわかりやすく解説",
    href: "/nfts",
    emoji: "🖼️",
    color: "#f85149",
  },
  {
    name: "暗号資産を学ぶ",
    desc: "初心者からプロまで。ブロックチェーン、DeFi、Web3を日本語でわかりやすく解説",
    href: "/learn",
    emoji: "🎓",
    color: "#3fb950",
  },
];

const JA_EXCHANGES = [
  {
    name: "Binance（バイナンス）",
    rating: "9.2/10",
    desc: "世界最大の暗号資産取引所。500種以上のコインと最低水準の手数料",
    badge: "グローバル最大",
    badgeColor: "#f7931a",
    href: "/exchanges/binance",
    pros: ["超低手数料 0.1%", "500+ 取り扱い通貨", "高度な先物取引"],
    flag: "🌐",
  },
  {
    name: "bitFlyer",
    rating: "8.4/10",
    desc: "日本最大の国内取引所。金融庁登録済みで安心。Bitcoin取引量No.1",
    badge: "国内人気No.1",
    badgeColor: "#3fb950",
    href: "/exchanges/bitflyer",
    pros: ["金融庁認可", "BTC取引量国内最大", "ビットコイン現物・FX"],
    flag: "🇯🇵",
  },
  {
    name: "Coincheck",
    rating: "8.0/10",
    desc: "使いやすいUI、豊富な取り扱いコイン。NFTマーケットプレイスも展開",
    badge: "初心者向け",
    badgeColor: "#6366f1",
    href: "/exchanges/coincheck",
    pros: ["シンプルなUI", "NFT対応", "豊富な種類のアルトコイン"],
    flag: "🇯🇵",
  },
  {
    name: "Bybit（バイビット）",
    rating: "8.7/10",
    desc: "デリバティブ取引に特化。永続先物・オプション・コピートレードが充実",
    badge: "デリバティブ最強",
    badgeColor: "#06b6d4",
    href: "/exchanges/bybit",
    pros: ["低手数料 0.01%/0.06%", "コピートレード", "充実した先物取引"],
    flag: "🌐",
  },
];

const JA_GUIDES = [
  { title: "日本での暗号資産の始め方", href: "/learn/how-to-buy-crypto", tag: "入門" },
  { title: "日本の暗号資産税務ガイド2026", href: "/taxes/learn/crypto-tax-guide", tag: "税務" },
  { title: "ハードウェアウォレットの選び方", href: "/wallets/best/hardware", tag: "セキュリティ" },
  { title: "DeFiで稼ぐ方法 — ステーキング＆レンディング", href: "/defi-lending/best", tag: "DeFi" },
  { title: "ビットコインとは？初心者向け完全ガイド", href: "/learn/what-is-bitcoin", tag: "ビットコイン" },
  { title: "NFTの買い方・売り方ガイド", href: "/nfts/how-to-buy", tag: "NFT" },
];

const JA_TOOLS = [
  { name: "暗号資産コンバーター", desc: "BTC・ETH・XRPを円に換算", href: "/tools/converter", emoji: "🔄" },
  { name: "DCA計算機", desc: "毎月積立投資のシミュレーション", href: "/tools/dca-calculator", emoji: "📊" },
  { name: "取引所手数料比較", desc: "各取引所の手数料を一覧比較", href: "/tools/exchange-fees", emoji: "💴" },
  { name: "税金計算機", desc: "暗号資産の利益・税額を試算", href: "/tools/tax-calculator", emoji: "🧾" },
  { name: "ポートフォリオトラッカー", desc: "保有資産のリアルタイム管理", href: "/tools/portfolio-tracker", emoji: "📱" },
  { name: "ガスフィートラッカー", desc: "ETHガス代のリアルタイム確認", href: "/tools/gas-tracker", emoji: "⛽" },
];

const JA_STATS = [
  { label: "日本の暗号資産ユーザー", value: "約700万人", sub: "国内登録ユーザー推計" },
  { label: "国内登録取引所数", value: "29社", sub: "金融庁登録・認可業者" },
  { label: "国内BTC取引量", value: "世界3位", sub: "グローバルランキング" },
  { label: "XRP保有率", value: "世界最大", sub: "日本はXRPの主要市場" },
];

const JA_REG_NOTES = [
  {
    icon: "⚖️",
    title: "金融庁（FSA）規制",
    body: "日本の暗号資産取引所はすべて金融庁への登録が義務付けられています。登録済み業者は暗号資産交換業者として認可を受け、厳格な資産分別管理が求められます。",
  },
  {
    icon: "🧾",
    title: "税制：総合課税・最大55%",
    body: "暗号資産の利益は「雑所得」として課税され、最大55%（所得税45% + 住民税10%）の税率が適用されます。20万円超の利益は確定申告が必要です。",
  },
  {
    icon: "🔒",
    title: "コールドウォレット保管義務",
    body: "登録取引所は顧客資産の大部分をコールドウォレットで保管することが法律で義務付けられており、ハッキングリスクが大幅に低減されています。",
  },
  {
    icon: "🏛️",
    title: "JVCEA自主規制",
    body: "一般社団法人日本暗号資産取引業協会（JVCEA）が自主規制を行い、業界全体のセキュリティ水準とコンプライアンスを底上げしています。",
  },
];

export default function JapanesePage() {
  return (
    <div style={{ background: "var(--color-bg, #0d1117)", minHeight: "100vh", color: "var(--color-text, #e6edf3)" }}>

      {/* ── Hero ── */}
      <section style={{
        background: "linear-gradient(135deg, #6366f108 0%, #06b6d408 50%, #f7931a08 100%)",
        borderBottom: "1px solid #30363d",
        padding: "64px 24px 56px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ fontSize: 13, color: "#8b949e", marginBottom: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            🇯🇵 日本語版 · Japan
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
            <span style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              暗号資産の全てを比較・解説
            </span>
            <br />
            <span style={{ color: "#e6edf3" }}>日本語で、信頼できるガイドと共に</span>
          </h1>
          <p style={{ fontSize: 17, color: "#8b949e", maxWidth: 640, margin: "0 auto 32px", lineHeight: 1.7 }}>
            degen0x は暗号資産取引所、ウォレット、DeFiプロトコルを客観的に比較する日本最大級のプラットフォームです。
            専門家レビュー、無料ツール、そして日本の規制に対応した最新情報をお届けします。
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/exchanges/best" style={{
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              color: "white", padding: "12px 28px", borderRadius: 10,
              fontWeight: 700, fontSize: 15, textDecoration: "none",
            }}>
              取引所を比較する →
            </Link>
            <Link href="/tools/converter" style={{
              background: "#161b22", border: "1px solid #30363d",
              color: "#e6edf3", padding: "12px 28px", borderRadius: 10,
              fontWeight: 600, fontSize: 15, textDecoration: "none",
            }}>
              無料ツールを試す 🛠️
            </Link>
          </div>
        </div>
      </section>

      {/* ── Market Stats ── */}
      <section style={{ padding: "32px 24px", borderBottom: "1px solid #30363d", background: "#161b22" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {JA_STATS.map((s) => (
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
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, textAlign: "center" }}>カテゴリーから探す</h2>
        <p style={{ textAlign: "center", color: "#8b949e", marginBottom: 36, fontSize: 14 }}>
          取引所、ウォレット、DeFiから税務まで — 暗号資産のあらゆる疑問に答えます
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

      {/* ── Top Exchanges for Japan ── */}
      <section style={{ padding: "0 24px 56px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>🏆 日本向けおすすめ取引所 2026</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>
          手数料・セキュリティ・使いやすさ・日本語サポートで厳選
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {JA_EXCHANGES.map((ex, i) => (
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
                  <div style={{ fontSize: 10, color: "#8b949e", marginTop: 2 }}>総合スコア</div>
                  <div style={{
                    marginTop: 10, background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                    color: "white", padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700,
                  }}>詳細を見る →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Free Tools ── */}
      <section style={{ padding: "0 24px 56px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>🛠️ 無料ツール</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>登録不要・完全無料で使えるツール一覧</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
          {JA_TOOLS.map((tool) => (
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
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>⚖️ 日本の暗号資産規制 — 知っておくべきこと</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>
          日本は世界で最も規制が整備された暗号資産市場の一つ。安心して投資するための基礎知識
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {JA_REG_NOTES.map((note) => (
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
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>📚 人気ガイド</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>日本語で読める暗号資産の完全ガイド集</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
          {JA_GUIDES.map((g) => (
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
                <div style={{ marginLeft: "auto", color: "#8b949e", flexShrink: 0 }}>→</div>
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
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>無料ニュースレターを購読する</h2>
        <p style={{ color: "#8b949e", fontSize: 14, marginBottom: 24, maxWidth: 480, margin: "0 auto 24px" }}>
          毎週、日本語で暗号資産の最新ニュース、相場分析、おすすめ銘柄情報をお届け。無料で購読できます。
        </p>
        <Link href="/newsletter" style={{
          background: "linear-gradient(135deg, #6366f1, #06b6d4)",
          color: "white", padding: "13px 32px", borderRadius: 10,
          fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block",
        }}>
          無料ニュースレターに登録 →
        </Link>
      </section>

      {/* ── Footer Note ── */}
      <div style={{ textAlign: "center", padding: "24px", color: "#8b949e", fontSize: 11, borderTop: "1px solid #30363d" }}>
        <p>degen0x 日本語版 — 2026年3月更新 · 情報提供のみを目的としており、投資アドバイスではありません</p>
        <p style={{ marginTop: 6 }}>
          <Link href="/ja" style={{ color: "#6366f1", textDecoration: "none" }}>🇯🇵 日本語</Link>
          {" · "}
          <Link href="/de" style={{ color: "#8b949e", textDecoration: "none" }}>🇩🇪 Deutsch</Link>
          {" · "}
          <Link href="/es" style={{ color: "#8b949e", textDecoration: "none" }}>🇪🇸 Español</Link>
          {" · "}
          <Link href="/fr" style={{ color: "#8b949e", textDecoration: "none" }}>🇫🇷 Français</Link>
          {" · "}
          <Link href="/pt-br" style={{ color: "#8b949e", textDecoration: "none" }}>🇧🇷 Português</Link>
          {" · "}
          <Link href="/" style={{ color: "#8b949e", textDecoration: "none" }}>🌐 English</Link>
        </p>
      </div>
    </div>
  );
}
