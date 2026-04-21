import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Invest in Cardano — Yatırım Stratejisi ve Piyasa Analizi 2026 | Degen0x",
  description: "Invest in Cardano yatırım rehberi: portföy stratejileri, risk yönetimi, teknik analiz ve 2026 piyasa görünümü. Türk yatırımcılar, SPK düzenlemeleri çerçevesinde",
  openGraph: {
    type: "article",
    title: "Invest in Cardano — Yatırım Stratejisi ve Piyasa Analizi 2026",
    description: "Invest in Cardano yatırım rehberi: portföy stratejileri, risk yönetimi, teknik analiz ve 2026 piyasa görünümü. Türk yatı",
    url: "https://degen0x.com/tr/investing/crypto/cardano",
    locale: "tr_TR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Invest in Cardano — Yatırım Stratejisi ve Piyasa Analizi 2026", description: "Invest in Cardano yatırım rehberi: portföy stratejileri, risk yönetimi, teknik analiz ve 2026 piyasa görünümü. Türk yatı" },
  alternates: {
    canonical: "/tr/investing/crypto/cardano",
    languages: { "en": "/investing/crypto/cardano", "tr": "/tr/investing/crypto/cardano", "vi": "/vi/investing/crypto/cardano", "pt-BR": "/pt-br/investing/crypto/cardano", "x-default": "/investing/crypto/cardano" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://degen0x.com/tr" },
    { "@type": "ListItem", position: 2, name: "Yatırım", item: "https://degen0x.com/tr/investing" },
    { "@type": "ListItem", position: 3, name: "Invest in Cardano — Yatırım Stratejisi ve Piyasa Analizi 202" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Invest in Cardano — Yatırım Stratejisi ve Piyasa Analizi 2026",
  description: "Invest in Cardano yatırım rehberi: portföy stratejileri, risk yönetimi, teknik analiz ve 2026 piyasa görünümü. Türk yatırımcılar, SPK düzenlemeleri çerçevesinde",
  url: "https://degen0x.com/tr/investing/crypto/cardano",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Invest in Cardano iyi bir yatırım mı?", "answer": "Yatırım kararı, risk toleransınıza, yatırım vadenize ve portföy stratejinize bağlıdır. Invest in Cardano temellerini, piyasa konumunu, rekabet ortamını ve büyüme potansiyelini değerlendirmeniz gerekir. Bu rehber, bilinçli karar vermeniz için gerekli analizi sunmaktadır." },
  { "question": "En iyi yatırım stratejisi hangisi?", "answer": "Popüler stratejiler: DCA (düzenli alım — volatiliteyi azaltır), lump sum (tek seferde — boğa piyasasında avantajlı), swing trading (orta vadeli — aktif yönetim gerektirir) ve hodl (uzun vadeli — sabır gerektirir). Strateji seçimi risk profilinize göre belirlenmelidir." },
  { "question": "Türkiye\'de kripto vergisi nasıl hesaplanır?", "answer": "Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Vergilendirme kapsamına giren işlemler: alım-satım karları, staking gelirleri, airdrop\'lar ve mining kazançları. Gelir İdaresi Başkanlığı beyanname süreçleri için profesyonel destek almanız önerilir." },
  { "question": "Ne kadar yatırım yapmalıyım?", "answer": "Altın kural: yalnızca kaybetmeyi göze alabileceğiniz miktarı yatırın. Genel öneri, toplam portföyünüzün %5-15\'ini kripto varlıklara ayırmanızdır. Acil durum fonunuzu ve sabit giderlerinizi asla riske atmayın." }
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
              { label: "Yatırım", href: "/tr/investing" },
              { label: "Invest in Cardano" }
          ]} />
          <article className="mt-8" lang="tr">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇹🇷 Türkçe</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Orta Seviye</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Invest in Cardano — Yatırım Stratejisi ve Piyasa Analizi 2026</h1>
            <p className="text-lg text-[#8b949e] mb-10">Invest in Cardano yatırım rehberi: portföy stratejileri, risk yönetimi, teknik analiz ve 2026 piyasa görünümü. Türk yatırımcılar, SPK düzenlemeleri çerçevesinde kripto varlıklara yatırım yapabilir.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Yatırım Stratejisi ve Piyasa Analizi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Invest in Cardano yatırım rehberi: piyasa koşullarına göre pozisyon boyutlandırma, giriş/çıkış stratejileri ve risk-getiri profili analizi. Türk yatırımcılar, SPK düzenlemeleri çerçevesinde kripto varlıklara yatırım yapabilir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Teknik Analiz ve Göstergeler</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Invest in Cardano için kullanılabilecek teknik analiz araçları: hareketli ortalamalar (MA/EMA), RSI (Göreceli Güç Endeksi), MACD, Fibonacci düzeltmeleri ve hacim analizi. Bu göstergeler alım-satım kararlarınızı destekler ancak tek başına yeterli değildir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Portföy Çeşitlendirme ve Risk Yönetimi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Başarılı Invest in Cardano yatırımı için portföy çeşitlendirmesi kritiktir. Large-cap (BTC, ETH), mid-cap ve small-cap varlıklar arasında dengeli dağılım, sektörel çeşitlendirme (DeFi, L2, AI, RWA) ve stablecoin pozisyonu ile risk yönetimi stratejileri.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Türk Yatırımcılar İçin Pratik Bilgiler</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Türkiye\'den Invest in Cardano yatırımı yapmak için: MASAK onaylı bir borsada KYC sürecini tamamlayarak havale, EFT veya kredi kartı ile TL yatırarak başlayabilirsiniz. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Dollar-cost averaging (DCA) stratejisi, TL bazlı volatiliteye karşı etkili bir yöntemdir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">2026 Piyasa Görünümü</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Invest in Cardano için 2026 piyasa görünümü: kurumsal benimseme trendleri, makroekonomik faktörler (faiz oranları, enflasyon), teknolojik gelişmeler ve düzenleyici çerçevenin etkisi. Bilgiye dayalı kararlar almak için bu faktörleri birlikte değerlendirin.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {[
                  { question: "Invest in Cardano iyi bir yatırım mı?", answer: "Yatırım kararı, risk toleransınıza, yatırım vadenize ve portföy stratejinize bağlıdır. Invest in Cardano temellerini, piyasa konumunu, rekabet ortamını ve büyüme potansiyelini değerlendirmeniz gerekir. Bu rehber, bilinçli karar vermeniz için gerekli analizi sunmaktadır." },
                  { question: "En iyi yatırım stratejisi hangisi?", answer: "Popüler stratejiler: DCA (düzenli alım — volatiliteyi azaltır), lump sum (tek seferde — boğa piyasasında avantajlı), swing trading (orta vadeli — aktif yönetim gerektirir) ve hodl (uzun vadeli — sabır gerektirir). Strateji seçimi risk profilinize göre belirlenmelidir." },
                  { question: "Türkiye\'de kripto vergisi nasıl hesaplanır?", answer: "Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Vergilendirme kapsamına giren işlemler: alım-satım karları, staking gelirleri, airdrop\'lar ve mining kazançları. Gelir İdaresi Başkanlığı beyanname süreçleri için profesyonel destek almanız önerilir." },
                  { question: "Ne kadar yatırım yapmalıyım?", answer: "Altın kural: yalnızca kaybetmeyi göze alabileceğiniz miktarı yatırın. Genel öneri, toplam portföyünüzün %5-15\'ini kripto varlıklara ayırmanızdır. Acil durum fonunuzu ve sabit giderlerinizi asla riske atmayın." }
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
