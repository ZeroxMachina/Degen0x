/**
 * i18n Foundation — Internationalization utilities for degen0x
 *
 * This provides the base infrastructure for multi-language support.
 * Currently supports: English (en), Spanish (es), French (fr), German (de)
 *
 * Usage:
 *   import { t, getLocale, SUPPORTED_LOCALES } from "@/lib/i18n";
 *   const label = t("nav.exchanges", "es"); // "Exchanges de Cripto"
 */

export const SUPPORTED_LOCALES = ["en", "es", "fr", "de", "pt-br", "ja", "ko", "ar"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  "pt-br": "Português (BR)",
  ja: "日本語",
  ko: "한국어",
  ar: "العربية",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  en: "🇺🇸",
  es: "🇪🇸",
  fr: "🇫🇷",
  de: "🇩🇪",
  "pt-br": "🇧🇷",
  ja: "🇯🇵",
  ko: "🇰🇷",
  ar: "🇸🇦",
};

// Common translations shared across the site
type TranslationMap = Record<string, Record<Locale, string>>;

const translations: TranslationMap = {
  // Navigation
  "nav.exchanges": { en: "Exchanges", es: "Exchanges", fr: "Échanges", de: "Börsen", "pt-br": "Corretoras", ja: "取引所", ko: "거래소", ar: "منصات التداول" },
  "nav.wallets": { en: "Wallets", es: "Billeteras", fr: "Portefeuilles", de: "Wallets", "pt-br": "Carteiras", ja: "ウォレット", ko: "지갑", ar: "المحافظ" },
  "nav.investing": { en: "Investing", es: "Inversión", fr: "Investissement", de: "Investieren", "pt-br": "Investimentos", ja: "投資", ko: "투자", ar: "الاستثمار" },
  "nav.defi": { en: "DeFi", es: "DeFi", fr: "DeFi", de: "DeFi", "pt-br": "DeFi", ja: "DeFi", ko: "DeFi", ar: "التمويل اللامركزي" },
  "nav.tools": { en: "Tools", es: "Herramientas", fr: "Outils", de: "Werkzeuge", "pt-br": "Ferramentas", ja: "ツール", ko: "도구", ar: "الأدوات" },
  "nav.learn": { en: "Learn", es: "Aprender", fr: "Apprendre", de: "Lernen", "pt-br": "Aprender", ja: "学ぶ", ko: "배우기", ar: "تعلم" },

  // Common UI
  "ui.compare": { en: "Compare", es: "Comparar", fr: "Comparer", de: "Vergleichen", "pt-br": "Comparar", ja: "比較", ko: "비교", ar: "قارن" },
  "ui.read_more": { en: "Read More", es: "Leer Más", fr: "Lire Plus", de: "Weiterlesen", "pt-br": "Leia Mais", ja: "続きを読む", ko: "더 읽기", ar: "اقرأ المزيد" },
  "ui.search": { en: "Search", es: "Buscar", fr: "Rechercher", de: "Suchen", "pt-br": "Buscar", ja: "検索", ko: "검색", ar: "بحث" },
  "ui.live": { en: "Live", es: "En Vivo", fr: "En Direct", de: "Live", "pt-br": "Ao Vivo", ja: "ライブ", ko: "라이브", ar: "مباشر" },

  // Hero
  "hero.title_1": { en: "Your Trusted Guide", es: "Tu Guía de Confianza", fr: "Votre Guide de Confiance", de: "Ihr Vertrauenswürdiger Wegweiser", "pt-br": "Seu Guia Confiável", ja: "信頼のガイド", ko: "신뢰할 수 있는 가이드", ar: "دليلك الموثوق" },
  "hero.title_2": { en: "to the Crypto World", es: "para el Mundo Cripto", fr: "du Monde Crypto", de: "in die Krypto-Welt", "pt-br": "para o Mundo Cripto", ja: "暗号通貨の世界へ", ko: "암호화폐 세계로", ar: "إلى عالم العملات الرقمية" },
  "hero.description": {
    en: "Compare crypto exchanges, wallets, DeFi protocols, and more. Expert reviews, interactive tools, and comprehensive guides.",
    es: "Compara exchanges, wallets, protocolos DeFi y más. Reseñas de expertos, herramientas y guías completas.",
    fr: "Comparez les exchanges, portefeuilles, protocoles DeFi et plus. Avis d'experts et outils interactifs.",
    de: "Vergleichen Sie Krypto-Börsen, Wallets, DeFi-Protokolle und mehr. Expertenbewertungen und Tools.",
    "pt-br": "Compare exchanges, carteiras, protocolos DeFi e mais. Avaliações de especialistas e ferramentas.",
    ja: "仮想通貨取引所、ウォレット、DeFiプロトコルなどを比較。専門家のレビューとツール。",
    ko: "암호화폐 거래소, 지갑, DeFi 프로토콜 등을 비교하세요. 전문가 리뷰 및 도구.",
    ar: "قارن بين منصات العملات الرقمية والمحافظ وبروتوكولات DeFi والمزيد.",
  },

  // Footer
  "footer.disclaimer": {
    en: "degen0x is an informational site. Nothing here constitutes financial advice.",
    es: "degen0x es un sitio informativo. Nada aquí constituye asesoramiento financiero.",
    fr: "degen0x est un site informatif. Rien ici ne constitue un conseil financier.",
    de: "degen0x ist eine Informationsseite. Nichts hier stellt eine Finanzberatung dar.",
    "pt-br": "degen0x é um site informativo. Nada aqui constitui aconselhamento financeiro.",
    ja: "degen0xは情報サイトです。ここに記載されている内容は金融アドバイスではありません。",
    ko: "degen0x는 정보 제공 사이트입니다. 여기의 내용은 재정 조언을 구성하지 않습니다.",
    ar: "degen0x موقع معلوماتي. لا شيء هنا يشكل نصيحة مالية.",
  },

  // Categories
  "category.exchanges": { en: "Exchanges", es: "Exchanges", fr: "Exchanges", de: "Börsen", "pt-br": "Exchanges", ja: "取引所", ko: "거래소", ar: "منصات التداول" },
  "category.wallets": { en: "Wallets", es: "Wallets", fr: "Portefeuilles", de: "Wallets", "pt-br": "Carteiras", ja: "ウォレット", ko: "지갑", ar: "المحافظ" },
  "category.defi": { en: "DeFi & Lending", es: "DeFi y Préstamos", fr: "DeFi & Prêts", de: "DeFi & Kredite", "pt-br": "DeFi e Empréstimos", ja: "DeFi＆レンディング", ko: "DeFi 및 대출", ar: "DeFi والإقراض" },
  "category.taxes": { en: "Taxes", es: "Impuestos", fr: "Fiscalité", de: "Steuern", "pt-br": "Impostos", ja: "税金", ko: "세금", ar: "الضرائب" },
  "category.nfts": { en: "NFTs", es: "NFTs", fr: "NFTs", de: "NFTs", "pt-br": "NFTs", ja: "NFT", ko: "NFT", ar: "NFTs" },
  "category.staking": { en: "Staking", es: "Staking", fr: "Staking", de: "Staking", "pt-br": "Staking", ja: "ステーキング", ko: "스테이킹", ar: "التوكنز" },

  // CTAs
  "cta.compare_exchanges": { en: "Compare Exchanges", es: "Comparar Exchanges", fr: "Comparer les Exchanges", de: "Börsen vergleichen", "pt-br": "Comparar Exchanges", ja: "取引所を比較", ko: "거래소 비교", ar: "قارن المنصات" },
  "cta.learn_crypto": { en: "Learn Crypto", es: "Aprender Cripto", fr: "Apprendre la Crypto", de: "Krypto lernen", "pt-br": "Aprender Cripto", ja: "暗号を学ぶ", ko: "암호화 배우기", ar: "تعلم العملات الرقمية" },
  "cta.free_tools": { en: "Free Tools", es: "Herramientas Gratis", fr: "Outils Gratuits", de: "Kostenlose Tools", "pt-br": "Ferramentas Grátis", ja: "無料ツール", ko: "무료 도구", ar: "أدوات مجانية" },

  // Trust markers
  "trust.independent": { en: "100% Independent Reviews", es: "Reseñas 100% Independientes", fr: "Avis 100% Indépendants", de: "100% Unabhängige Bewertungen", "pt-br": "Avaliações 100% Independentes", ja: "100%独立したレビュー", ko: "100% 독립적 평가", ar: "تقييمات مستقلة 100%" },
  "trust.no_ads": { en: "No Paid Ads", es: "Sin Publicidad Pagada", fr: "Aucune Publicité Payante", de: "Keine bezahlte Werbung", "pt-br": "Sem Anúncios Pagos", ja: "有料広告なし", ko: "유료 광고 없음", ar: "لا توجد إعلانات مدفوعة" },
  "trust.local_taxes": { en: "Local Tax Info", es: "Información de Impuestos Locales", fr: "Contexte Fiscal Local", de: "Lokale Steuerinformationen", "pt-br": "Informações de Impostos Locais", ja: "地元の税務情報", ko: "현지 세금 정보", ar: "معلومات ضريبية محلية" },
  "trust.all_free": { en: "All Free Tools", es: "Todas las Herramientas Gratis", fr: "Tous les Outils Gratuits", de: "Alle Tools kostenlos", "pt-br": "Todas as Ferramentas Grátis", ja: "すべてのツールが無料", ko: "모든 도구 무료", ar: "جميع الأدوات مجانية" },

  // Stats
  "stats.pages": { en: "Pages & Reviews", es: "Páginas y Reseñas", fr: "Pages et Avis", de: "Seiten & Bewertungen", "pt-br": "Páginas e Avaliações", ja: "ページ&レビュー", ko: "페이지 및 리뷰", ar: "صفحات وتقييمات" },
  "stats.tools": { en: "Free Tools", es: "Herramientas Gratis", fr: "Outils Gratuits", de: "Kostenlose Tools", "pt-br": "Ferramentas Grátis", ja: "無料ツール", ko: "무료 도구", ar: "أدوات مجانية" },
  "stats.guides": { en: "Educational Guides", es: "Guías Educativas", fr: "Guides Éducatifs", de: "Bildungsleitfäden", "pt-br": "Guias Educacionais", ja: "教育ガイド", ko: "교육 가이드", ar: "أدلة تعليمية" },

  // Tax-related
  "tax.title_de": { en: "German Tax Guide", es: "Guía de Impuestos Alemanes", fr: "Guide Fiscal Allemand", de: "Steuerleitfaden für Deutschland", "pt-br": "Guia de Impostos Alemães", ja: "ドイツ税務ガイド", ko: "독일 세금 가이드", ar: "دليل الضرائب الألماني" },
  "tax.title_fr": { en: "French Tax Guide", es: "Guía de Impuestos Franceses", fr: "Guide Fiscal Français", de: "Französischer Steuerleitfaden", "pt-br": "Guia de Impostos Franceses", ja: "フランス税務ガイド", ko: "프랑스 세금 가이드", ar: "دليل الضرائب الفرنسي" },
  "tax.title_br": { en: "Brazilian Tax Guide", es: "Guía de Impuestos Brasileños", fr: "Guide Fiscal Brésilien", de: "Brasilianischer Steuerleitfaden", "pt-br": "Guia de Impostos Brasileiros", ja: "ブラジル税務ガイド", ko: "브라질 세금 가이드", ar: "دليل الضرائب البرازيلي" },

  // Feature descriptions
  "feature.compare": { en: "Compare crypto products fairly and transparently", es: "Compara productos cripto de forma justa y transparente", fr: "Comparez les produits crypto de manière juste et transparente", de: "Vergleichen Sie Krypto-Produkte fair und transparent", "pt-br": "Compare produtos cripto de forma justa e transparente", ja: "暗号製品を公平かつ透過的に比較", ko: "암호화 제품을 공정하고 투명하게 비교", ar: "قارن منتجات العملات الرقمية بشكل عادل وشفاف" },
  "feature.educate": { en: "Educate investors with comprehensive guides", es: "Educar a inversores con guías completas", fr: "Éduquer les investisseurs avec des guides complets", de: "Bilden Sie Anleger mit umfassenden Leitfäden auf", "pt-br": "Eduque investidores com guias completos", ja: "包括的なガイドで投資家を教育する", ko: "포괄적인 가이드로 투자자를 교육", ar: "تعليم المستثمرين بأدلة شاملة" },
  "feature.tools": { en: "Provide free, professional-grade tools", es: "Proporcionar herramientas gratuitas de nivel profesional", fr: "Fournir des outils gratuits de qualité professionnelle", de: "Kostenlose professionelle Tools bereitstellen", "pt-br": "Forneça ferramentas gratuitas de nível profissional", ja: "プロフェッショナルグレードの無料ツールを提供", ko: "전문가 수준의 무료 도구 제공", ar: "توفير أدوات مجانية بدرجة احترافية" },
};

/**
 * Translate a key to a given locale.
 * Falls back to English if the locale or key is missing.
 */
export function t(key: string, locale: Locale = "en"): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[locale] || entry.en || key;
}

/**
 * Get locale from a pathname like /es/... or /fr/...
 */
export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  if (SUPPORTED_LOCALES.includes(segment as Locale)) return segment as Locale;
  return "en";
}

/**
 * Generate hreflang link tags for SEO
 */
export function getHreflangLinks(basePath: string): Array<{ locale: Locale; href: string }> {
  return SUPPORTED_LOCALES.map((locale) => ({
    locale,
    href: locale === "en" ? `https://degen0x.com${basePath}` : `https://degen0x.com/${locale}${basePath}`,
  }));
}
