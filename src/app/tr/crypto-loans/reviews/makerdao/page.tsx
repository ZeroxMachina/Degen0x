import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "MakerDAO — Kripto Kredi Platformları Karşılaştırması | Degen0x",
  description: "MakerDAO karşılaştırması: faiz oranları, teminat gereksinimleri, likidite riskleri ve platform güvenilirliği.",
  openGraph: {
    type: "article",
    title: "MakerDAO — Kripto Kredi Platformları Karşılaştırması",
    description: "MakerDAO karşılaştırması: faiz oranları, teminat gereksinimleri, likidite riskleri ve platform güvenilirliği.",
    url: "https://degen0x.com/tr/crypto-loans/reviews/makerdao",
    locale: "tr_TR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "MakerDAO — Kripto Kredi Platformları Karşılaştırması", description: "MakerDAO karşılaştırması: faiz oranları, teminat gereksinimleri, likidite riskleri ve platform güvenilirliği." },
  alternates: {
    canonical: "/tr/crypto-loans/reviews/makerdao",
    languages: { "en": "/crypto-loans/reviews/makerdao", "tr": "/tr/crypto-loans/reviews/makerdao", "vi": "/vi/crypto-loans/reviews/makerdao", "pt-BR": "/pt-br/crypto-loans/reviews/makerdao", "x-default": "/crypto-loans/reviews/makerdao" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://degen0x.com/tr" },
    { "@type": "ListItem", position: 2, name: "Kripto Krediler", item: "https://degen0x.com/tr/crypto-loans" },
    { "@type": "ListItem", position: 3, name: "MakerDAO — Kripto Kredi Platformları Karşılaştırması" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "MakerDAO — Kripto Kredi Platformları Karşılaştırması",
  description: "MakerDAO karşılaştırması: faiz oranları, teminat gereksinimleri, likidite riskleri ve platform güvenilirliği.",
  url: "https://degen0x.com/tr/crypto-loans/reviews/makerdao",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Kripto teminatlı kredi nasıl çalışır?", "answer": "Kripto varlıklarınızı teminat olarak yatırırsınız ve karşılığında stablecoin veya fiat kredi alırsınız. LTV (Loan-to-Value) oranı genellikle %50-75 arasındadır. Teminat değeri düşerse marj çağrısı veya likidite riski oluşur." },
  { "question": "Likidite riski nedir ve nasıl korunurum?", "answer": "Teminat değeri belirli eşiğin altına düşerse pozisyonunuz otomatik olarak likide edilir. Koruma yöntemleri: düşük LTV oranı tercih etme, çoklu teminat kullanma, fiyat uyarıları ayarlama ve ek teminat için hazır fon bulundurma." },
  { "question": "Flash loan nedir?", "answer": "Flash loan, aynı blok içinde borç alınıp geri ödenen, teminatsız bir DeFi kredi türüdür. Arbitraj ve likidite optimizasyonu için kullanılır ancak karmaşık ve risklidir." },
  { "question": "Faiz oranları nasıl karşılaştırılır?", "answer": "Sabit vs değişken faiz, APR vs APY farkı, ek ücretler (origination fee, erken kapama ücreti) ve platform güvenilirliği birlikte değerlendirilmelidir." }
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
              { label: "Kripto Krediler", href: "/tr/crypto-loans" },
              { label: "MakerDAO" }
          ]} />
          <article className="mt-8" lang="tr">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇹🇷 Türkçe</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Orta Seviye</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">MakerDAO — Kripto Kredi Platformları Karşılaştırması</h1>
            <p className="text-lg text-[#8b949e] mb-10">MakerDAO karşılaştırması: faiz oranları, teminat gereksinimleri, likidite riskleri ve platform güvenilirliği.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Kripto Kredi Platformları</h2>
              <p className="text-[#c9d1d9] leading-relaxed">MakerDAO kredi platformları karşılaştırması: faiz oranları (APR/APY), desteklenen teminat varlıkları, minimum teminat oranları (LTV) ve likidite riskleri.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Teminat Yönetimi ve Likidite Riski</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Kripto teminatlı kredilerde en büyük risk, teminat değerinin düşmesi durumunda likidasyondur. Teminat oranı yönetimi, marj çağrısı (margin call) mekanizmaları ve koruma stratejileri detaylı olarak açıklanmaktadır.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Flash Loan ve DeFi Kredi Protokolleri</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Merkeziyetsiz kredi protokolleri (Aave, Compound, MakerDAO): flash loan\'lar, değişken/sabit faiz seçenekleri ve yönetişim mekanizmaları. Türkiye\'de kripto teminatlı kredi hizmetleri henüz sınırlıdır; uluslararası platformlar tercih edilebilir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Platform Güvenliği ve Seçim Kriterleri</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Kripto kredi platformu seçerken dikkat edilmesi gereken faktörler: audit geçmişi, sigorta kapsamı, kullanıcı fonlarının korunması ve platform track record\'u.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {[
                  { question: "Kripto teminatlı kredi nasıl çalışır?", answer: "Kripto varlıklarınızı teminat olarak yatırırsınız ve karşılığında stablecoin veya fiat kredi alırsınız. LTV (Loan-to-Value) oranı genellikle %50-75 arasındadır. Teminat değeri düşerse marj çağrısı veya likidite riski oluşur." },
                  { question: "Likidite riski nedir ve nasıl korunurum?", answer: "Teminat değeri belirli eşiğin altına düşerse pozisyonunuz otomatik olarak likide edilir. Koruma yöntemleri: düşük LTV oranı tercih etme, çoklu teminat kullanma, fiyat uyarıları ayarlama ve ek teminat için hazır fon bulundurma." },
                  { question: "Flash loan nedir?", answer: "Flash loan, aynı blok içinde borç alınıp geri ödenen, teminatsız bir DeFi kredi türüdür. Arbitraj ve likidite optimizasyonu için kullanılır ancak karmaşık ve risklidir." },
                  { question: "Faiz oranları nasıl karşılaştırılır?", answer: "Sabit vs değişken faiz, APR vs APY farkı, ek ücretler (origination fee, erken kapama ücreti) ve platform güvenilirliği birlikte değerlendirilmelidir." }
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
