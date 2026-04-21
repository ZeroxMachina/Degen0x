import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "X2Y2 — NFT Rehberi ve Piyasa Analizi 2026 | Degen0x",
  description: "X2Y2: koleksiyon analizi, pazar trendleri, minting rehberi ve 2026 NFT ekosistemi — Türkçe kapsamlı kılavuz.",
  openGraph: {
    type: "article",
    title: "X2Y2 — NFT Rehberi ve Piyasa Analizi 2026",
    description: "X2Y2: koleksiyon analizi, pazar trendleri, minting rehberi ve 2026 NFT ekosistemi — Türkçe kapsamlı kılavuz.",
    url: "https://degen0x.com/tr/nfts/reviews/x2y2",
    locale: "tr_TR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "X2Y2 — NFT Rehberi ve Piyasa Analizi 2026", description: "X2Y2: koleksiyon analizi, pazar trendleri, minting rehberi ve 2026 NFT ekosistemi — Türkçe kapsamlı kılavuz." },
  alternates: {
    canonical: "/tr/nfts/reviews/x2y2",
    languages: { "en": "/nfts/reviews/x2y2", "tr": "/tr/nfts/reviews/x2y2", "vi": "/vi/nfts/reviews/x2y2", "pt-BR": "/pt-br/nfts/reviews/x2y2", "x-default": "/nfts/reviews/x2y2" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://degen0x.com/tr" },
    { "@type": "ListItem", position: 2, name: "NFT", item: "https://degen0x.com/tr/nfts" },
    { "@type": "ListItem", position: 3, name: "X2Y2 — NFT Rehberi ve Piyasa Analizi 2026" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "X2Y2 — NFT Rehberi ve Piyasa Analizi 2026",
  description: "X2Y2: koleksiyon analizi, pazar trendleri, minting rehberi ve 2026 NFT ekosistemi — Türkçe kapsamlı kılavuz.",
  url: "https://degen0x.com/tr/nfts/reviews/x2y2",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "NFT yatırımı hâlâ karlı mı?", "answer": "2026 NFT piyasası 2021-2022 döneminden farklıdır. Spekülatif balonlar azaldı ancak utility NFT\'ler (oyun, kimlik, üyelik), dijital sanat ve RWA tokenizasyonu büyümeye devam ediyor. Piyasa daha seçici ama daha sürdürülebilir." },
  { "question": "Sahte NFT koleksiyonlarından nasıl korunurum?", "answer": "Koruma yöntemleri: doğrulanmış koleksiyon rozetleri, resmi web sitesi ve sosyal medya linkleri üzerinden kontrol, kontrat adresini doğrulama, topluluğu araştırma ve çok iyi fiyat tekliflerine şüpheyle yaklaşma." },
  { "question": "Gas ücretlerini nasıl minimize ederim?", "answer": "Gas optimizasyonu: düşük trafik saatlerinde işlem yapma (hafta içi gece), Layer 2 ağlarında mint etme (Arbitrum, Base, Polygon), batch işlem yapma ve gas limit ayarlarını optimize etme." },
  { "question": "NFT telif hakları (royalty) nasıl çalışır?", "answer": "Royalty mekanizması: her ikincil satışta orijinal yaratıcıya otomatik ödeme (genellikle %2.5-10). 2024\'ten itibaren bazı platformlar zorunlu royalty\'den isteğe bağlı modele geçti." }
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
              { label: "NFT", href: "/tr/nfts" },
              { label: "X2Y2" }
          ]} />
          <article className="mt-8" lang="tr">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇹🇷 Türkçe</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Orta Seviye</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">X2Y2 — NFT Rehberi ve Piyasa Analizi 2026</h1>
            <p className="text-lg text-[#8b949e] mb-10">X2Y2: koleksiyon analizi, pazar trendleri, minting rehberi ve 2026 NFT ekosistemi — Türkçe kapsamlı kılavuz.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">NFT Piyasa Analizi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">X2Y2 konusunda 2026 NFT piyasa analizi: toplam işlem hacmi, aktif kullanıcılar, en popüler koleksiyonlar ve fiyat trendleri. NFT ticareti Türkiye\'de hızla büyüyen bir pazar; OpenSea ve Blur en çok kullanılan platformlardır.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Teknik Altyapı ve Standartlar</h2>
              <p className="text-[#c9d1d9] leading-relaxed">NFT teknik altyapısı: ERC-721 ve ERC-1155 standartları, metadata depolama (on-chain vs IPFS), royalty mekanizmaları ve cross-chain NFT transferleri. X2Y2 bağlamında bu standartların uygulanması değerlendirilmektedir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Alım-Satım ve Minting Rehberi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">X2Y2 ile ilgili NFT alım-satım stratejileri: doğru zamanlamada mint etme, floor price analizi, rarity araçları, gas optimizasyonu ve ikincil pazar dinamikleri.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Risk Değerlendirmesi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">NFT yatırım riskleri: likidite sorunu (alıcı bulamama), sahtecilik (fake koleksiyonlar), fikri mülkiyet sorunları, piyasa manipülasyonu ve platform riski. Due diligence yaparak riskleri minimize edin.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {[
                  { question: "NFT yatırımı hâlâ karlı mı?", answer: "2026 NFT piyasası 2021-2022 döneminden farklıdır. Spekülatif balonlar azaldı ancak utility NFT\'ler (oyun, kimlik, üyelik), dijital sanat ve RWA tokenizasyonu büyümeye devam ediyor. Piyasa daha seçici ama daha sürdürülebilir." },
                  { question: "Sahte NFT koleksiyonlarından nasıl korunurum?", answer: "Koruma yöntemleri: doğrulanmış koleksiyon rozetleri, resmi web sitesi ve sosyal medya linkleri üzerinden kontrol, kontrat adresini doğrulama, topluluğu araştırma ve çok iyi fiyat tekliflerine şüpheyle yaklaşma." },
                  { question: "Gas ücretlerini nasıl minimize ederim?", answer: "Gas optimizasyonu: düşük trafik saatlerinde işlem yapma (hafta içi gece), Layer 2 ağlarında mint etme (Arbitrum, Base, Polygon), batch işlem yapma ve gas limit ayarlarını optimize etme." },
                  { question: "NFT telif hakları (royalty) nasıl çalışır?", answer: "Royalty mekanizması: her ikincil satışta orijinal yaratıcıya otomatik ödeme (genellikle %2.5-10). 2024\'ten itibaren bazı platformlar zorunlu royalty\'den isteğe bağlı modele geçti." }
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
