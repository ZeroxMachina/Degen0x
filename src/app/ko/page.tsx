import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from "next/link";

// ─────────────────────────────────────────────
//  Korean (KO) Localization Landing Page
//  degen0x · Sprint 26 · Day 32
//  Targeting South Korea (#4 global crypto market), 77M+ Korean speakers worldwide
//  South Korea: high retail trading volume, mobile-first, Upbit dominance (80%+ KRW trading)
//  Crypto exchanges: Upbit, Bithumb, Korbit, Coinone
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  title: "degen0x 한국어판 — 암호화폐 거래소·지갑·DeFi 비교",
  description:
    "degen0x은 한국어로 이용할 수 있는 암호화폐 종합 비교 플랫폼입니다. 거래소, 지갑, DeFi 프로토콜을 비교하고, 전문가 리뷰, 무료 도구, 한국의 규제에 대응한 포괄적 가이드로 현명한 암호화폐 투자를 지원합니다.",
  alternates: { canonical: "/ko" },
  openGraph: {
    title: "degen0x 한국어판 — 암호화폐 비교·투자 가이드",
    description:
      "최고의 암호화폐 거래소, 지갑, DeFi 프로토콜을 비교하세요. 한국의 규제에 대응한 상세 설명과 무료 도구로 현명한 투자 결정을 돕습니다.",
    locale: "ko_KR",
    type: "website",
  },
  twitter: { card: "summary_large_image" }};

const CATEGORIES = [
  {
    name: "암호화폐 거래소",
    desc: "수수료·보안·취급 코인으로 최고의 거래소를 비교. Upbit, Bithumb, Korbit, Binance 등",
    href: "/exchanges/best",
    emoji: "🔀",
    color: "#6366f1",
  },
  {
    name: "암호화폐 지갑",
    desc: "Ledger, Trezor 등 인기 하드웨어 지갑부터 소프트웨어 지갑까지 철저히 비교",
    href: "/wallets/best",
    emoji: "👛",
    color: "#06b6d4",
  },
  {
    name: "DeFi와 암호화폐 대출",
    desc: "분산형 렌딩, 차용, 스테이킹으로 최고의 수익률 달성",
    href: "/defi-lending/best",
    emoji: "⚡",
    color: "#22c55e",
  },
  {
    name: "암호화폐 투자",
    desc: "비트코인, 이더리움, 알트코인 투자를 포괄적으로 설명",
    href: "/investing",
    emoji: "📈",
    color: "#f59e0b",
  },
  {
    name: "암호화폐 세금",
    desc: "한국의 암호화폐 세제를 완벽히 설명. 신고 방법, 절세 팁, 대응 도구까지",
    href: "/taxes",
    emoji: "🧾",
    color: "#f0883e",
  },
  {
    name: "무료 도구",
    desc: "가격 계산기, DCA 시뮬레이터, 포트폴리오 추적기 등 완전 무료",
    href: "/tools",
    emoji: "🛠️",
    color: "#bc8cff",
  },
  {
    name: "NFT",
    desc: "NFT 매매 방법, 주요 마켓플레이스, 리스크와 주의사항을 쉽게 설명",
    href: "/nfts",
    emoji: "🖼️",
    color: "#f85149",
  },
  {
    name: "암호화폐 배우기",
    desc: "초급자부터 전문가까지. 블록체인, DeFi, Web3를 한국어로 쉽게 설명",
    href: "/learn",
    emoji: "🎓",
    color: "#3fb950",
  },
];

const KO_EXCHANGES = [
  {
    name: "Upbit (업비트)",
    rating: "9.4/10",
    desc: "한국 최대 암호화폐 거래소. KRW 거래량의 80% 이상 점유, 업계 표준",
    badge: "국내 최고 점유율",
    badgeColor: "#f7931a",
    href: "/exchanges/upbit",
    pros: ["KRW 거래량 80% 이상", "가장 많은 취급 코인", "최고 수준의 유동성"],
    flag: "🇰🇷",
  },
  {
    name: "Bithumb (빗썸)",
    rating: "8.7/10",
    desc: "한국 역사 가장 오래된 거래소. 240개 이상의 코인 취급, 높은 신뢰도",
    badge: "역사 최장 거래소",
    badgeColor: "#3fb950",
    href: "/exchanges/bithumb",
    pros: ["240+ 취급 코인", "높은 보안 수준", "우수한 고객 지원"],
    flag: "🇰🇷",
  },
  {
    name: "Korbit (코빗)",
    rating: "8.2/10",
    desc: "초급자 친화적 UI, 낮은 진입 장벽. 신규 투자자에게 추천",
    badge: "초급자 최적화",
    badgeColor: "#6366f1",
    href: "/exchanges/korbit",
    pros: ["간단한 인터페이스", "낮은 수수료", "빠른 이체"],
    flag: "🇰🇷",
  },
  {
    name: "Coinone (코인원)",
    rating: "8.0/10",
    desc: "안정적인 거래 환경, 규제 준수. 기관 투자자도 신뢰",
    badge: "기관 친화적",
    badgeColor: "#06b6d4",
    href: "/exchanges/coinone",
    pros: ["규제 완벽 준수", "OTC 거래 지원", "B2B 솔루션"],
    flag: "🇰🇷",
  },
];

const KO_GUIDES = [
  { title: "한국에서 암호화폐 시작하기", href: "/learn/how-to-buy-crypto", tag: "입문" },
  { title: "한국 암호화폐 세금 가이드 2026", href: "/taxes/learn/crypto-tax-guide", tag: "세금" },
  { title: "하드웨어 지갑 선택 방법", href: "/wallets/best/hardware", tag: "보안" },
  { title: "DeFi로 수익 얻기 — 스테이킹&렌딩", href: "/defi-lending/best", tag: "DeFi" },
  { title: "비트코인이란? 초급자용 완벽 가이드", href: "/learn/what-is-bitcoin", tag: "비트코인" },
  { title: "NFT 구매·판매 가이드", href: "/nfts/how-to-buy", tag: "NFT" },
];

const KO_TOOLS = [
  { name: "암호화폐 변환기", desc: "BTC·ETH·XRP를 원화로 환산", href: "/tools/converter", emoji: "🔄" },
  { name: "DCA 계산기", desc: "매달 적립 투자 시뮬레이션", href: "/tools/dca-calculator", emoji: "📊" },
  { name: "거래소 수수료 비교", desc: "각 거래소의 수수료를 한눈에 비교", href: "/tools/exchange-fees", emoji: "💰" },
  { name: "세금 계산기", desc: "암호화폐 이익·세액 시산", href: "/tools/tax-calculator", emoji: "🧾" },
  { name: "포트폴리오 추적기", desc: "보유 자산의 실시간 관리", href: "/tools/portfolio-tracker", emoji: "📱" },
  { name: "가스비 추적기", desc: "ETH 가스비 실시간 확인", href: "/tools/gas-tracker", emoji: "⛽" },
];

const KO_STATS = [
  { label: "한국 암호화폐 사용자", value: "약 800만 명", sub: "국내 등록 사용자 추정" },
  { label: "한국 시장 글로벌 순위", value: "4위", sub: "세계 암호화폐 시장 중" },
  { label: "원화 쌍 거래량", value: "4번째 이상", sub: "암호화폐 대비 법정화폐 중" },
  { label: "Upbit KRW 거래 점유율", value: "80% 이상", sub: "한국 원화 현물 거래" },
  { label: "한국 모바일 거래율", value: "세계 최고", sub: "모바일 우선 거래 문화" },
  { label: "킴치 프리미엄 영향", value: "가변적", sub: "KRW 쌍 거래의 특성" },
];

const KO_REG_NOTES = [
  {
    icon: "⚖️",
    title: "금융감시위원회(FSC) 규제",
    body: "한국의 암호화폐 거래소는 모두 FSC의 감시를 받습니다. 2024년부터 시행된 개정 법률에 따라 모든 거래소는 보안, 자본금, 고객보호 요건을 충족해야 합니다.",
  },
  {
    icon: "🧾",
    title: "세금: 22% 자본이득세 (유보)",
    body: "한국은 암호화폐 이득에 22%의 자본이득세를 부과할 계획이었으나, 산업 발전을 고려해 여러 차례 유보되었습니다. 현재는 기타 소득세로 분류되어 과세됩니다.",
  },
  {
    icon: "🔒",
    title: "콜드 지갑 보관 의무",
    body: "한국 거래소는 고객 자산의 대부분을 콜드 지갑에 보관해야 하며, 정기적인 보안 감시를 받습니다. 이는 해킹 위험을 크게 줄여줍니다.",
  },
  {
    icon: "🏛️",
    title: "여행 규칙 및 AML/KYC",
    body: "송금 시 일정 규모 이상의 거래는 규제를 따르며, 모든 거래소는 고객 인증(KYC)과 자금 세탁 방지(AML) 요건을 준수합니다.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ko', },
  ],
};

export default function KoreanPage() {
  return (
    <div style={{ background: "var(--color-bg, #0d1117)", minHeight: "100vh", color: "var(--color-text, #e6edf3)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="ko"
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
            🇰🇷 한국어판 · Korea
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
            <span style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              암호화폐의 모든 것을 비교·설명
            </span>
            <br />
            <span style={{ color: "#e6edf3" }}>한국어로, 신뢰할 수 있는 가이드와 함께</span>
          </h1>
          <p style={{ fontSize: 17, color: "#8b949e", maxWidth: 640, margin: "0 auto 32px", lineHeight: 1.7 }}>
            degen0x은 암호화폐 거래소, 지갑, DeFi 프로토콜을 객관적으로 비교하는 한국 최고 수준의 플랫폼입니다.
            전문가 리뷰, 무료 도구, 그리고 한국의 규제에 대응한 최신 정보를 제공합니다.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/exchanges/best" style={{
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              color: "white", padding: "12px 28px", borderRadius: 10,
              fontWeight: 700, fontSize: 15, textDecoration: "none",
            }}>
              거래소 비교하기 →
            </Link>
            <Link href="/tools/converter" style={{
              background: "#161b22", border: "1px solid #30363d",
              color: "#e6edf3", padding: "12px 28px", borderRadius: 10,
              fontWeight: 600, fontSize: 15, textDecoration: "none",
            }}>
              무료 도구 사용하기 🛠️
            </Link>
          </div>
        </div>
      </section>

      {/* ── Market Stats ── */}
      <section style={{ padding: "32px 24px", borderBottom: "1px solid #30363d", background: "#161b22" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {KO_STATS.map((s) => (
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
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, textAlign: "center" }}>카테고리에서 찾기</h2>
        <p style={{ textAlign: "center", color: "#8b949e", marginBottom: 36, fontSize: 14 }}>
          거래소, 지갑, DeFi부터 세금까지 — 암호화폐의 모든 질문에 답합니다
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

      {/* ── Top Exchanges for Korea ── */}
      <section style={{ padding: "0 24px 56px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>🏆 한국 추천 거래소 2026</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>
          수수료·보안·사용성·한국어 지원으로 엄선
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {KO_EXCHANGES.map((ex, i) => (
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
                  <div style={{ fontSize: 10, color: "#8b949e", marginTop: 2 }}>종합 점수</div>
                  <div style={{
                    marginTop: 10, background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                    color: "white", padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 700,
                  }}>상세 정보 →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Free Tools ── */}
      <section style={{ padding: "0 24px 56px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>🛠️ 무료 도구</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>가입 불필요·완전 무료로 사용할 수 있는 도구 목록</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
          {KO_TOOLS.map((tool) => (
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
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>⚖️ 한국의 암호화폐 규제 — 알아야 할 사항</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>
          한국은 세계에서 가장 규제가 잘 정비된 암호화폐 시장 중 하나입니다. 안심하고 투자하기 위한 기초 지식
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {KO_REG_NOTES.map((note) => (
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
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>📚 인기 가이드</h2>
        <p style={{ color: "#8b949e", marginBottom: 28, fontSize: 14 }}>한국어로 읽을 수 있는 암호화폐 완벽 가이드 모음</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
          {KO_GUIDES.map((g) => (
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
        <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>무료 뉴스레터 구독하기</h2>
        <p style={{ color: "#8b949e", fontSize: 14, marginBottom: 24, maxWidth: 480, margin: "0 auto 24px" }}>
          매주 한국어로 암호화폐의 최신 뉴스, 상장 분석, 추천 코인 정보를 받아보세요. 무료로 구독할 수 있습니다.
        </p>
        <Link href="/newsletter" style={{
          background: "linear-gradient(135deg, #6366f1, #06b6d4)",
          color: "white", padding: "13px 32px", borderRadius: 10,
          fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-block",
        }}>
          무료 뉴스레터 가입 →
        </Link>
      </section>

      {/* ── Footer Note ── */}
      <div style={{ textAlign: "center", padding: "24px", color: "#8b949e", fontSize: 11, borderTop: "1px solid #30363d" }}>
        <p>degen0x 한국어판 — 2026년 3월 업데이트 · 정보 제공 목적이며 투자 조언이 아닙니다</p>
        <p style={{ marginTop: 6 }}>
          <Link href="/ko" style={{ color: "#6366f1", textDecoration: "none" }}>🇰🇷 한국어</Link>
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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "degen0x \ud55c\uad6d\uc5b4\ud310 \u2014 \uc554\ud638\ud654\ud3d0 \uac70\ub798\uc18c\u00b7\uc9c0\uac11\u00b7DeFi \ube44\uad50", "description": "degen0x\uc740 \ud55c\uad6d\uc5b4\ub85c \uc774\uc6a9\ud560 \uc218 \uc788\ub294 \uc554\ud638\ud654\ud3d0 \uc885\ud569 \ube44\uad50 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4. \uac70\ub798\uc18c, \uc9c0\uac11, DeFi \ud504\ub85c\ud1a0\ucf5c\uc744 \ube44\uad50\ud558\uace0, \uc804\ubb38\uac00 \ub9ac\ubdf0, \ubb34\ub8cc \ub3c4\uad6c, \ud55c\uad6d\uc758 \uaddc\uc81c\uc5d0 \ub300\uc751\ud55c \ud3ec\uad04\uc801 \uac00\uc774\ub4dc\ub85c \ud604\uba85\ud55c \uc554\ud638\ud654\ud3d0 \ud22c\uc790\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4.", "url": "https://degen0x.com/ko", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
