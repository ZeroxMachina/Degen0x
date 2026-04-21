import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Travala — Kripto ile Ödeme Rehberi | Degen0x",
  description: "Travala: kripto ile ödeme yöntemleri, desteklenen platformlar ve günlük harcamalarda kripto kullanma rehberi.",
  openGraph: {
    type: "article",
    title: "Travala — Kripto ile Ödeme Rehberi",
    description: "Travala: kripto ile ödeme yöntemleri, desteklenen platformlar ve günlük harcamalarda kripto kullanma rehberi.",
    url: "https://degen0x.com/tr/spending/reviews/travala",
    locale: "tr_TR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Travala — Kripto ile Ödeme Rehberi", description: "Travala: kripto ile ödeme yöntemleri, desteklenen platformlar ve günlük harcamalarda kripto kullanma rehberi." },
  alternates: {
    canonical: "/tr/spending/reviews/travala",
    languages: { "en": "/spending/reviews/travala", "tr": "/tr/spending/reviews/travala", "vi": "/vi/spending/reviews/travala", "pt-BR": "/pt-br/spending/reviews/travala", "x-default": "/spending/reviews/travala" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://degen0x.com/tr" },
    { "@type": "ListItem", position: 2, name: "Harcama", item: "https://degen0x.com/tr/spending" },
    { "@type": "ListItem", position: 3, name: "Travala — Kripto ile Ödeme Rehberi" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Travala — Kripto ile Ödeme Rehberi",
  description: "Travala: kripto ile ödeme yöntemleri, desteklenen platformlar ve günlük harcamalarda kripto kullanma rehberi.",
  url: "https://degen0x.com/tr/spending/reviews/travala",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Kripto ile hangi harcamaları yapabilirim?", "answer": "Kripto ile yapılabilecek harcamalar: online alışveriş, seyahat ve otel rezervasyonu, hediye kartı satın alma, abonelik ödemeleri ve fiziksel mağaza ödemeleri (kripto kartlar aracılığıyla)." },
  { "question": "Lightning Network ödemeleri nasıl çalışır?", "answer": "Lightning Network, Bitcoin ağı üzerinde anlık ve çok düşük maliyetli ödemeler yapmanıza olanak tanıyan Layer 2 çözümüdür. Küçük günlük harcamalar için idealdir." },
  { "question": "Kripto harcamalarımın vergi etkisi var mı?", "answer": "Kripto ile ödeme yapmak, teknik olarak bir satış işlemidir ve vergilendirilebilir bir olay oluşturabilir. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Harcamalarınızı kayıt altında tutun." }
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

export default function LocalizedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <StructuredData data={combinedSchema} />
      <main className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Breadcrumb items={[
              { label: "Harcama", href: "/tr/spending" },
              { label: "Travala" }
          ]} />
          <article className="mt-8" lang="tr">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇹🇷 Türkçe</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Orta Seviye</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Travala — Kripto ile Ödeme Rehberi</h1>
            <p className="text-lg text-[#8b949e] mb-10">Travala: kripto ile ödeme yöntemleri, desteklenen platformlar ve günlük harcamalarda kripto kullanma rehberi.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Kripto ile Ödeme Yöntemleri</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Travala kapsamında kripto ile ödeme yapma rehberi: Lightning Network ödemeleri, kripto banka kartları, P2P transferler ve e-ticaret entegrasyonları.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Desteklenen Platformlar ve Mağazalar</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Kripto ile ödeme kabul eden platformlar: online alışveriş siteleri, seyahat rezervasyon platformları, hediye kartı hizmetleri ve fiziksel mağaza çözümleri. Türkiye\'de kripto kartlar Mastercard veya Visa ağı üzerinden çalışır ve TL olarak harcama yapmanıza olanak tanır.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">İşlem Maliyetleri ve Hız Karşılaştırması</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Farklı kripto ödeme yöntemlerinin maliyet ve hız karşılaştırması: Bitcoin Lightning vs Stablecoin transfer vs kripto kart ödemesi. Her birinin avantaj ve dezavantajları.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {[
                  { question: "Kripto ile hangi harcamaları yapabilirim?", answer: "Kripto ile yapılabilecek harcamalar: online alışveriş, seyahat ve otel rezervasyonu, hediye kartı satın alma, abonelik ödemeleri ve fiziksel mağaza ödemeleri (kripto kartlar aracılığıyla)." },
                  { question: "Lightning Network ödemeleri nasıl çalışır?", answer: "Lightning Network, Bitcoin ağı üzerinde anlık ve çok düşük maliyetli ödemeler yapmanıza olanak tanıyan Layer 2 çözümüdür. Küçük günlük harcamalar için idealdir." },
                  { question: "Kripto harcamalarımın vergi etkisi var mı?", answer: "Kripto ile ödeme yapmak, teknik olarak bir satış işlemidir ve vergilendirilebilir bir olay oluşturabilir. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Harcamalarınızı kayıt altında tutun." }
                ].map((faq, i) => (
                  <details key={i} className="group bg-[#161b22] border border-[#30363d] rounded-lg">
                    <summary className="cursor-pointer px-5 py-4 text-white font-medium list-none flex justify-between items-center min-h-[44px]">
                      {faq.question}
                      <span className="text-[#8b949e] ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
                    </summary>
                    <p className="px-5 pb-4 text-[#c9d1d9] leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">İlgili İçerikler</h2>
              <ul className="list-disc list-inside text-purple-300 space-y-2">
                <li><a className="hover:underline" href="/tr/learn">Öğren</a></li>
                <li><a className="hover:underline" href="/tr/tools">Araçlar</a></li>
                <li><a className="hover:underline" href="/tr/exchanges/best">Borsalar</a></li>
              </ul>
            </section>
            <div style={{ background: "#1a1625", border: "1px solid #2d2254", borderRadius: 8, padding: "16px 20px", marginTop: 40, marginBottom: 20 }}>
              <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: "#a78bfa" }}>Yasal uyarı:</strong> Bu rehber yalnızca bilgilendirme amaçlıdır ve finansal tavsiye niteliği taşımaz. Kripto para yatırımı önemli riskler içerir — herhangi bir karar vermeden önce kendi araştırmanızı yapın.
              </p>
            </div>
          </article>
          <BackToTop />
        </div>
      </main>
    </>
  );
}
