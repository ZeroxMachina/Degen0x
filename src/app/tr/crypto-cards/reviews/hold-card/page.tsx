import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Hold Kart — Kripto Kart Karşılaştırma ve İnceleme | Degen0x",
  description: "Hold Kart karşılaştırması: yıllık ücretler, cashback oranları, desteklenen ülkeler ve Türkiye\'de kripto kartlar Mastercard veya Visa ağı üzerinden çalışır ve TL",
  openGraph: {
    type: "article",
    title: "Hold Kart — Kripto Kart Karşılaştırma ve İnceleme",
    description: "Hold Kart karşılaştırması: yıllık ücretler, cashback oranları, desteklenen ülkeler ve Türkiye\'de kripto kartlar Masterca",
    url: "https://degen0x.com/tr/crypto-cards/reviews/hold-card",
    locale: "tr_TR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Hold Kart — Kripto Kart Karşılaştırma ve İnceleme", description: "Hold Kart karşılaştırması: yıllık ücretler, cashback oranları, desteklenen ülkeler ve Türkiye\'de kripto kartlar Masterca" },
  alternates: {
    canonical: "/tr/crypto-cards/reviews/hold-card",
    languages: { "en": "/crypto-cards/reviews/hold-card", "tr": "/tr/crypto-cards/reviews/hold-card", "vi": "/vi/crypto-cards/reviews/hold-card", "pt-BR": "/pt-br/crypto-cards/reviews/hold-card", "x-default": "/crypto-cards/reviews/hold-card" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://degen0x.com/tr" },
    { "@type": "ListItem", position: 2, name: "Kripto Kartlar", item: "https://degen0x.com/tr/crypto-cards" },
    { "@type": "ListItem", position: 3, name: "Hold Kart — Kripto Kart Karşılaştırma ve İnceleme" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Hold Kart — Kripto Kart Karşılaştırma ve İnceleme",
  description: "Hold Kart karşılaştırması: yıllık ücretler, cashback oranları, desteklenen ülkeler ve Türkiye\'de kripto kartlar Mastercard veya Visa ağı üzerinden çalışır ve TL",
  url: "https://degen0x.com/tr/crypto-cards/reviews/hold-card",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Hold Kart kartının ücretleri nedir?", "answer": "Kart ücret yapısı: başvuru ücreti, aylık/yıllık aidat, ATM çekim ücreti, döviz kuru farkı ve kripto-fiat dönüşüm spread\'i. Gizli ücretlere dikkat edin." },
  { "question": "Hangi kripto paralarla harcama yapabilirim?", "answer": "Desteklenen kripto paralar, otomatik dönüşüm mekanizması ve spread oranları. Bitcoin, Ethereum ve stablecoin genellikle en düşük spread\'e sahiptir." },
  { "question": "Türkiye\'de bu kartı kullanabilir miyim?", "answer": "Türkiye\'de kripto kartlar Mastercard veya Visa ağı üzerinden çalışır ve TL olarak harcama yapmanıza olanak tanır. Kart kullanılabilirliği, ATM erişimi ve TL harcama deneyimi değerlendirilmektedir." },
  { "question": "Cashback oranları ve ödüller nasıl?", "answer": "Cashback yapısı: harcama bazlı iade oranları, staking gereksinimleri (daha yüksek tier = daha yüksek cashback), ödül token\'ı ve kullanım koşulları." }
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
              { label: "Kripto Kartlar", href: "/tr/crypto-cards" },
              { label: "Hold Kart" }
          ]} />
          <article className="mt-8" lang="tr">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇹🇷 Türkçe</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Orta Seviye</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Hold Kart — Kripto Kart Karşılaştırma ve İnceleme</h1>
            <p className="text-lg text-[#8b949e] mb-10">Hold Kart karşılaştırması: yıllık ücretler, cashback oranları, desteklenen ülkeler ve Türkiye\'de kripto kartlar Mastercard veya Visa ağı üzerinden çalışır ve TL olarak harcama yapmanıza olanak tanır.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Kripto Kart Genel Değerlendirmesi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Hold Kart kartı hakkında kapsamlı inceleme: kart türü (ön ödemeli/banka kartı/kredi kartı), desteklenen ödeme ağları (Visa/Mastercard) ve global kullanılabilirlik. Türkiye\'de kripto kartlar Mastercard veya Visa ağı üzerinden çalışır ve TL olarak harcama yapmanıza olanak tanır.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Ücretler ve Cashback Karşılaştırması</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Hold Kart kartının aylık/yıllık ücretleri, ATM çekim limitleri, döviz kuru farkları, staking gereksinimleri ve cashback/ödül oranları detaylı olarak karşılaştırılmaktadır. Gizli ücretlere dikkat edin.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Desteklenen Kripto Paralar ve Dönüşüm</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Hold Kart kartı ile harcama yapabileceğiniz kripto paralar, otomatik dönüşüm mekanizması (crypto-to-fiat), spread oranları ve desteklenen fiat para birimleri incelenmektedir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Güvenlik ve Kullanıcı Deneyimi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Kart güvenliği (çip, 3D Secure, anlık bildirimler), mobil uygulama özellikleri, harcama limitleri, kart dondurma ve müşteri destek kalitesi değerlendirilmektedir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {[
                  { question: "Hold Kart kartının ücretleri nedir?", answer: "Kart ücret yapısı: başvuru ücreti, aylık/yıllık aidat, ATM çekim ücreti, döviz kuru farkı ve kripto-fiat dönüşüm spread\'i. Gizli ücretlere dikkat edin." },
                  { question: "Hangi kripto paralarla harcama yapabilirim?", answer: "Desteklenen kripto paralar, otomatik dönüşüm mekanizması ve spread oranları. Bitcoin, Ethereum ve stablecoin genellikle en düşük spread\'e sahiptir." },
                  { question: "Türkiye\'de bu kartı kullanabilir miyim?", answer: "Türkiye\'de kripto kartlar Mastercard veya Visa ağı üzerinden çalışır ve TL olarak harcama yapmanıza olanak tanır. Kart kullanılabilirliği, ATM erişimi ve TL harcama deneyimi değerlendirilmektedir." },
                  { question: "Cashback oranları ve ödüller nasıl?", answer: "Cashback yapısı: harcama bazlı iade oranları, staking gereksinimleri (daha yüksek tier = daha yüksek cashback), ödül token\'ı ve kullanım koşulları." }
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
