import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Tax Software — Kripto Vergi Rehberi ve Araçları | Degen0x",
  description: "Tax Software: kripto vergi yükümlülükleri, beyanname hazırlığı ve vergi optimizasyon araçları. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar iç",
  openGraph: {
    type: "article",
    title: "Tax Software — Kripto Vergi Rehberi ve Araçları",
    description: "Tax Software: kripto vergi yükümlülükleri, beyanname hazırlığı ve vergi optimizasyon araçları. Türkiye\'de kripto gelirle",
    url: "https://degen0x.com/tr/taxes",
    locale: "tr_TR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Tax Software — Kripto Vergi Rehberi ve Araçları", description: "Tax Software: kripto vergi yükümlülükleri, beyanname hazırlığı ve vergi optimizasyon araçları. Türkiye\'de kripto gelirle" },
  alternates: {
    canonical: "/tr/taxes",
    languages: { "en": "/taxes", "tr": "/tr/taxes", "vi": "/vi/taxes", "pt-BR": "/pt-br/taxes", "x-default": "/taxes" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://degen0x.com/tr" },
    { "@type": "ListItem", position: 2, name: "Vergiler", item: "https://degen0x.com/tr/taxes" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Tax Software — Kripto Vergi Rehberi ve Araçları",
  description: "Tax Software: kripto vergi yükümlülükleri, beyanname hazırlığı ve vergi optimizasyon araçları. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar iç",
  url: "https://degen0x.com/tr/taxes",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Kripto gelirimi beyan etmek zorunda mıyım?", "answer": "Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Vergilendirme kapsamına giren işlemler: alım-satım karları, staking gelirleri, airdrop\'lar, mining ve DeFi kazançları." },
  { "question": "Hangi vergi hesaplama yöntemi benim için uygun?", "answer": "FIFO, LIFO ve ortalama maliyet yöntemlerinin her birinin farklı vergi sonuçları vardır. Çok sayıda küçük işlem yapıyorsanız FIFO genellikle tercih edilir; büyük tek seferlik alımlar için ortalama maliyet avantajlı olabilir." },
  { "question": "Kripto vergi yazılımı kullanmalı mıyım?", "answer": "Birden fazla borsada ve DeFi protokolünde işlem yapıyorsanız, vergi yazılımı (Koinly, CoinTracker vb.) otomatik raporlama sağlayarak büyük kolaylık sunar. Manuel takip hata riskini artırır." },
  { "question": "Zarar mahsubu (tax-loss harvesting) nedir?", "answer": "Tax-loss harvesting, kayıptaki pozisyonları satarak vergi matrahını düşürme stratejisidir. Gerçekleşen zararlar, kazançlardan düşülerek net vergi yükünü azaltır. Wash sale kurallarına dikkat edin." }
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
              { label: "Vergiler", href: "/tr/taxes" }
          ]} />
          <article className="mt-8" lang="tr">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇹🇷 Türkçe</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Orta Seviye</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Tax Software — Kripto Vergi Rehberi ve Araçları</h1>
            <p className="text-lg text-[#8b949e] mb-10">Tax Software: kripto vergi yükümlülükleri, beyanname hazırlığı ve vergi optimizasyon araçları. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Kripto Vergi Yükümlülükleri</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Tax Software kapsamında kripto vergi yükümlülükleri: Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Vergilendirme kapsamına giren işlemler: alım-satım, staking gelirleri, airdrop\'lar, mining ve DeFi kazançları.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Vergi Hesaplama Yöntemleri</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Kripto vergi hesaplamasında kullanılan yöntemler: FIFO (İlk Giren İlk Çıkar), LIFO (Son Giren İlk Çıkar) ve ortalama maliyet yöntemi. Her birinin avantaj ve dezavantajları farklı yatırım stratejilerine göre değişir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Vergi Optimizasyonu ve Araçlar</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Yasal çerçevede vergi optimizasyonu: zarar mahsubu (tax-loss harvesting), uzun vadeli tutma avantajları ve Gelir İdaresi Başkanlığı beyanname hazırlığı. Kripto vergi yazılımları otomatik raporlama sağlayarak süreci kolaylaştırır.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Türkiye\'de Kripto Vergilendirmesi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Türkiye\'deki güncel kripto vergi düzenlemeleri: SPK ve MASAK düzenlemeleri çerçevesi, beyanname süreçleri ve vergi müşavirliği önerileri. Vergi yükümlülüklerinizi yerine getirmek için profesyonel destek almanız önerilir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {[
                  { question: "Kripto gelirimi beyan etmek zorunda mıyım?", answer: "Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Vergilendirme kapsamına giren işlemler: alım-satım karları, staking gelirleri, airdrop\'lar, mining ve DeFi kazançları." },
                  { question: "Hangi vergi hesaplama yöntemi benim için uygun?", answer: "FIFO, LIFO ve ortalama maliyet yöntemlerinin her birinin farklı vergi sonuçları vardır. Çok sayıda küçük işlem yapıyorsanız FIFO genellikle tercih edilir; büyük tek seferlik alımlar için ortalama maliyet avantajlı olabilir." },
                  { question: "Kripto vergi yazılımı kullanmalı mıyım?", answer: "Birden fazla borsada ve DeFi protokolünde işlem yapıyorsanız, vergi yazılımı (Koinly, CoinTracker vb.) otomatik raporlama sağlayarak büyük kolaylık sunar. Manuel takip hata riskini artırır." },
                  { question: "Zarar mahsubu (tax-loss harvesting) nedir?", answer: "Tax-loss harvesting, kayıptaki pozisyonları satarak vergi matrahını düşürme stratejisidir. Gerçekleşen zararlar, kazançlardan düşülerek net vergi yükünü azaltır. Wash sale kurallarına dikkat edin." }
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
