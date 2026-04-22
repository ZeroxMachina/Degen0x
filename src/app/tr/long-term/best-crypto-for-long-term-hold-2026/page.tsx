import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "for Uzun Vadeli Hold — Uzun Vadeli Kripto Stratejisi | Degen0x",
  description: "for Uzun Vadeli Hold: uzun vadeli kripto yatırım stratejileri, portföy çeşitlendirme ve hodl yaklaşımı.",
  openGraph: {
    type: "article",
    title: "for Uzun Vadeli Hold — Uzun Vadeli Kripto Stratejisi",
    description: "for Uzun Vadeli Hold: uzun vadeli kripto yatırım stratejileri, portföy çeşitlendirme ve hodl yaklaşımı.",
    url: "https://degen0x.com/tr/long-term/best-crypto-for-long-term-hold-2026",
    locale: "tr_TR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "for Uzun Vadeli Hold — Uzun Vadeli Kripto Stratejisi", description: "for Uzun Vadeli Hold: uzun vadeli kripto yatırım stratejileri, portföy çeşitlendirme ve hodl yaklaşımı." },
  alternates: {
    canonical: "/tr/long-term/best-crypto-for-long-term-hold-2026",
    languages: { "en": "/long-term/best-crypto-for-long-term-hold-2026", "tr": "/tr/long-term/best-crypto-for-long-term-hold-2026", "vi": "/vi/long-term/best-crypto-for-long-term-hold-2026", "pt-BR": "/pt-br/long-term/best-crypto-for-long-term-hold-2026", "x-default": "/long-term/best-crypto-for-long-term-hold-2026" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://degen0x.com/tr" },
    { "@type": "ListItem", position: 2, name: "Uzun Vadeli", item: "https://degen0x.com/tr/long-term" },
    { "@type": "ListItem", position: 3, name: "for Uzun Vadeli Hold — Uzun Vadeli Kripto Stratejisi" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "for Uzun Vadeli Hold — Uzun Vadeli Kripto Stratejisi",
  description: "for Uzun Vadeli Hold: uzun vadeli kripto yatırım stratejileri, portföy çeşitlendirme ve hodl yaklaşımı.",
  url: "https://degen0x.com/tr/long-term/best-crypto-for-long-term-hold-2026",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Kripto uzun vadeli yatırım için uygun mu?", "answer": "Bitcoin ve Ethereum, 4 yıllık periyotlarda tarihsel olarak pozitif getiri sağlamıştır. Ancak geçmiş performans gelecek getiriyi garanti etmez. Uzun vadeli yatırım, volatiliteye karşı sabır ve disiplin gerektirir." },
  { "question": "Portföyümü ne sıklıkla yeniden dengeleyeyim?", "answer": "Genel öneri üç ayda bir veya belirli eşikler aşıldığında (%5-10 sapma) yeniden dengeleme yapmaktır. Aşırı sık dengeleme işlem maliyetlerini ve vergi yükünü artırır." },
  { "question": "Kripto emeklilik planlamasında yer almalı mı?", "answer": "Kripto, toplam portföyün küçük bir yüzdesi (%5-15) olarak emeklilik planına dahil edilebilir. Yüksek risk-yüksek getiri profiline sahiptir; yaşa ve risk toleransına göre ağırlık ayarlanmalıdır." }
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
              { label: "Uzun Vadeli", href: "/tr/long-term" },
              { label: "for Uzun Vadeli Hold" }
          ]} />
          <article className="mt-8" lang="tr">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇹🇷 Türkçe</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Orta Seviye</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">for Uzun Vadeli Hold — Uzun Vadeli Kripto Stratejisi</h1>
            <p className="text-lg text-[#8b949e] mb-10">for Uzun Vadeli Hold: uzun vadeli kripto yatırım stratejileri, portföy çeşitlendirme ve hodl yaklaşımı.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Uzun Vadeli Yatırım Stratejisi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">for Uzun Vadeli Hold kapsamında uzun vadeli kripto yatırım stratejisi: hodl yaklaşımı, DCA (düzenli alım), value investing ve makroekonomik analiz.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Portföy Yapılandırması</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Uzun vadeli kripto portföyü: %50-60 BTC/ETH (blue chip), %20-30 mid-cap altcoinler, %10-20 yüksek potansiyelli küçük projeler ve %5-10 stablecoin (fırsat fonu) dağılımı önerilmektedir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Emeklilik ve Birikim Planlaması</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Kripto varlıkları uzun vadeli birikim planınıza dahil etme: vergi etkinliği, periyodik yeniden dengeleme ve risk toleransına göre portföy ayarlaması. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {[
                  { question: "Kripto uzun vadeli yatırım için uygun mu?", answer: "Bitcoin ve Ethereum, 4 yıllık periyotlarda tarihsel olarak pozitif getiri sağlamıştır. Ancak geçmiş performans gelecek getiriyi garanti etmez. Uzun vadeli yatırım, volatiliteye karşı sabır ve disiplin gerektirir." },
                  { question: "Portföyümü ne sıklıkla yeniden dengeleyeyim?", answer: "Genel öneri üç ayda bir veya belirli eşikler aşıldığında (%5-10 sapma) yeniden dengeleme yapmaktır. Aşırı sık dengeleme işlem maliyetlerini ve vergi yükünü artırır." },
                  { question: "Kripto emeklilik planlamasında yer almalı mı?", answer: "Kripto, toplam portföyün küçük bir yüzdesi (%5-15) olarak emeklilik planına dahil edilebilir. Yüksek risk-yüksek getiri profiline sahiptir; yaşa ve risk toleransına göre ağırlık ayarlanmalıdır." }
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
