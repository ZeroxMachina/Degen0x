import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Impermanent Loss — Kapsamlı Kripto Rehberi 2026 | Degen0x",
  description: "Impermanent Loss hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kararlar almanız için ihtiyacınız olan bilg",
  openGraph: {
    type: "article",
    title: "Impermanent Loss — Kapsamlı Kripto Rehberi 2026",
    description: "Impermanent Loss hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kar",
    url: "https://degen0x.com/tr/defi-lending/calculators/impermanent-loss-calculator",
    locale: "tr_TR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Impermanent Loss — Kapsamlı Kripto Rehberi 2026", description: "Impermanent Loss hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kar" },
  alternates: {
    canonical: "/tr/defi-lending/calculators/impermanent-loss-calculator",
    languages: { "en": "/defi-lending/calculators/impermanent-loss-calculator", "tr": "/tr/defi-lending/calculators/impermanent-loss-calculator", "vi": "/vi/defi-lending/calculators/impermanent-loss-calculator", "pt-BR": "/pt-br/defi-lending/calculators/impermanent-loss-calculator", "x-default": "/defi-lending/calculators/impermanent-loss-calculator" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://degen0x.com/tr" },
    { "@type": "ListItem", position: 2, name: "DeFi Kredi", item: "https://degen0x.com/tr/defi-lending" },
    { "@type": "ListItem", position: 3, name: "Impermanent Loss — Kapsamlı Kripto Rehberi 2026" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Impermanent Loss — Kapsamlı Kripto Rehberi 2026",
  description: "Impermanent Loss hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kararlar almanız için ihtiyacınız olan bilg",
  url: "https://degen0x.com/tr/defi-lending/calculators/impermanent-loss-calculator",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Impermanent Loss nedir ve nasıl çalışır?", "answer": "Impermanent Loss, Web3 altyapısının kritik bileşenlerinden biridir. Kullanıcıların varlıkları üzerinde tam kontrol sahibi olmasını sağlayan merkeziyetsiz protokoller üzerine inşa edilmiştir." },
  { "question": "Impermanent Loss yatırımında riskler nelerdir?", "answer": "Temel riskler arasında teknolojik hatalar, düzenleyici kısıtlamalar, karşı taraf riski (FTX benzeri platform çöküşleri) ve market maker manipülasyonu yer alır. Soğuk cüzdan kullanımı ve araştırma yapmak en iyi koruma yöntemleridir." },
  { "question": "2026\'da Impermanent Loss alanında neler değişti?", "answer": "2026 dönüm noktaları: CBDC pilotlarının genişlemesi, cross-chain interoperabilite çözümlerinin olgunlaşması, account abstraction\'ın yaygınlaşması ve zero-knowledge proof teknolojisinin pratik uygulamalara geçişi." },
  { "question": "Türkiye\'den Impermanent Loss nasıl kullanılır?", "answer": "Türkiye\'de Impermanent Loss kullanmak için: 1) MASAK onaylı bir borsada KYC sürecini tamamlayarak hesap açın, 2) havale, EFT veya kredi kartı ile TL yatırarak başlayın, 3) BtcTurk, Paribu ve Bitci gibi Türk borsaları arasından size uygun olanı seçin. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Tüm işlemlerinizi kayıt altında tutmanız önerilir." }
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
              { label: "DeFi Kredi", href: "/tr/defi-lending" },
              { label: "Impermanent Loss" }
          ]} />
          <article className="mt-8" lang="tr">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇹🇷 Türkçe</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Orta Seviye</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Impermanent Loss — Kapsamlı Kripto Rehberi 2026</h1>
            <p className="text-lg text-[#8b949e] mb-10">Impermanent Loss hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kararlar almanız için ihtiyacınız olan bilgiler.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Impermanent Loss Nedir?</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Kripto para ekosisteminde Impermanent Loss stratejik bir konuma sahiptir. Açık kaynaklı geliştirme modeli ve topluluk yönetişim mekanizmaları sayesinde şeffaf bir yapı sunar. Ethereum, Solana ve diğer büyük ağlar üzerindeki entegrasyonları, Impermanent Loss kullanım alanını genişletmektedir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Teknik Altyapı ve Çalışma Prensibi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Impermanent Loss altyapısı, katmanlı bir mimari üzerine kuruludur: temel katman (Layer 1) mutabakat ve güvenliği sağlarken, üst katmanlar (Layer 2) ölçeklenebilirlik ve hız optimizasyonu sunar. Bu yaklaşım, hem güvenliği hem de kullanıcı deneyimini optimize eder.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">2026 Güncellemeleri ve Piyasa Dinamikleri</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Impermanent Loss 2026\'da önceki yıllara kıyasla daha olgun bir piyasa yapısına kavuşmuştur. Merkez bankası dijital para (CBDC) çalışmaları, DePIN (Merkeziyetsiz Fiziksel Altyapı Ağları) gibi yeni kategoriler ve modüler blokzincir mimarisinin benimsenmesi, ekosistemi yeniden şekillendirmektedir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {[
                  { question: "Impermanent Loss nedir ve nasıl çalışır?", answer: "Impermanent Loss, Web3 altyapısının kritik bileşenlerinden biridir. Kullanıcıların varlıkları üzerinde tam kontrol sahibi olmasını sağlayan merkeziyetsiz protokoller üzerine inşa edilmiştir." },
                  { question: "Impermanent Loss yatırımında riskler nelerdir?", answer: "Temel riskler arasında teknolojik hatalar, düzenleyici kısıtlamalar, karşı taraf riski (FTX benzeri platform çöküşleri) ve market maker manipülasyonu yer alır. Soğuk cüzdan kullanımı ve araştırma yapmak en iyi koruma yöntemleridir." },
                  { question: "2026\'da Impermanent Loss alanında neler değişti?", answer: "2026 dönüm noktaları: CBDC pilotlarının genişlemesi, cross-chain interoperabilite çözümlerinin olgunlaşması, account abstraction\'ın yaygınlaşması ve zero-knowledge proof teknolojisinin pratik uygulamalara geçişi." },
                  { question: "Türkiye\'den Impermanent Loss nasıl kullanılır?", answer: "Türkiye\'de Impermanent Loss kullanmak için: 1) MASAK onaylı bir borsada KYC sürecini tamamlayarak hesap açın, 2) havale, EFT veya kredi kartı ile TL yatırarak başlayın, 3) BtcTurk, Paribu ve Bitci gibi Türk borsaları arasından size uygun olanı seçin. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Tüm işlemlerinizi kayıt altında tutmanız önerilir." }
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
