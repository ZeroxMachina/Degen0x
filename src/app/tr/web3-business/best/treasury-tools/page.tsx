import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "DAO Treasury Araçlar — Web3 İş Fırsatları ve Stratejiler | Degen0x",
  description: "DAO Treasury Araçlar: Web3 iş modelleri, token ekonomileri ve merkeziyetsiz organizasyon yapıları — girişimciler için rehber.",
  openGraph: {
    type: "article",
    title: "DAO Treasury Araçlar — Web3 İş Fırsatları ve Stratejiler",
    description: "DAO Treasury Araçlar: Web3 iş modelleri, token ekonomileri ve merkeziyetsiz organizasyon yapıları — girişimciler için re",
    url: "https://degen0x.com/tr/web3-business/best/treasury-tools",
    locale: "tr_TR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "DAO Treasury Araçlar — Web3 İş Fırsatları ve Stratejiler", description: "DAO Treasury Araçlar: Web3 iş modelleri, token ekonomileri ve merkeziyetsiz organizasyon yapıları — girişimciler için re" },
  alternates: {
    canonical: "/tr/web3-business/best/treasury-tools",
    languages: { "en": "/web3-business/best/treasury-tools", "tr": "/tr/web3-business/best/treasury-tools", "vi": "/vi/web3-business/best/treasury-tools", "pt-BR": "/pt-br/web3-business/best/treasury-tools", "x-default": "/web3-business/best/treasury-tools" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://degen0x.com/tr" },
    { "@type": "ListItem", position: 2, name: "Web3 İş", item: "https://degen0x.com/tr/web3-business" },
    { "@type": "ListItem", position: 3, name: "DAO Treasury Araçlar — Web3 İş Fırsatları ve Stratejiler" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "DAO Treasury Araçlar — Web3 İş Fırsatları ve Stratejiler",
  description: "DAO Treasury Araçlar: Web3 iş modelleri, token ekonomileri ve merkeziyetsiz organizasyon yapıları — girişimciler için rehber.",
  url: "https://degen0x.com/tr/web3-business/best/treasury-tools",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Web3 iş modeli geleneksel modellerden farkı nedir?", "answer": "Web3 iş modelleri, değer yaratımını toplulukla paylaşır (token ekonomisi), yönetişimi merkeziyetsizleştirir (DAO) ve aracıları ortadan kaldırır (peer-to-peer). Bu, gelir modelinden organizasyon yapısına kadar temel farklılıklar yaratır." },
  { "question": "Token ekonomisi nasıl tasarlanır?", "answer": "Başarılı tokenomics tasarımı: arz mekanizması (sabit vs enflasyonist), dağılım planı (takım, yatırımcı, topluluk), vesting schedule, utility tanımı ve değer yakalama mekanizması." },
  { "question": "DAO kurmak zor mu?", "answer": "DAO araçları (Snapshot, Tally, Aragon) kurulumu kolaylaştırmıştır. Zor kısım teknik değil sosyal: etkili yönetişim tasarımı, katılım teşviki ve merkezi olmayan karar almayı koordine etmek." }
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
              { label: "Web3 İş", href: "/tr/web3-business" },
              { label: "DAO Treasury Araçlar" }
          ]} />
          <article className="mt-8" lang="tr">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇹🇷 Türkçe</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Orta Seviye</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">DAO Treasury Araçlar — Web3 İş Fırsatları ve Stratejiler</h1>
            <p className="text-lg text-[#8b949e] mb-10">DAO Treasury Araçlar: Web3 iş modelleri, token ekonomileri ve merkeziyetsiz organizasyon yapıları — girişimciler için rehber.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Web3 İş Modelleri</h2>
              <p className="text-[#c9d1d9] leading-relaxed">DAO Treasury Araçlar kapsamında Web3 iş modelleri: DAO yapıları, token ekonomileri, merkeziyetsiz pazaryerleri ve creator ekonomisi. Türk geliştirici ekosistemi blockchain alanında hızla büyümekte olup İstanbul önemli bir Web3 merkezi haline gelmiştir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Token Ekonomisi ve Değer Yaratma</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Başarılı bir Web3 iş modeli için token ekonomisi tasarımı: utility token vs governance token, token dağılım stratejileri, vesting schedules ve token burn mekanizmaları.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Merkeziyetsiz Organizasyonlar (DAO)</h2>
              <p className="text-[#c9d1d9] leading-relaxed">DAO yapıları ve yönetişim modelleri: oylama mekanizmaları, hazine yönetimi, contributor ödüllendirme sistemleri ve merkeziyetsiz karar alma süreçleri.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Web3 Kariyer ve Fırsatlar</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Web3 sektöründe kariyer fırsatları: akıllı sözleşme geliştirici, DeFi araştırmacı, topluluk yöneticisi, tokenomics tasarımcısı ve güvenlik denetçisi pozisyonları.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {[
                  { question: "Web3 iş modeli geleneksel modellerden farkı nedir?", answer: "Web3 iş modelleri, değer yaratımını toplulukla paylaşır (token ekonomisi), yönetişimi merkeziyetsizleştirir (DAO) ve aracıları ortadan kaldırır (peer-to-peer). Bu, gelir modelinden organizasyon yapısına kadar temel farklılıklar yaratır." },
                  { question: "Token ekonomisi nasıl tasarlanır?", answer: "Başarılı tokenomics tasarımı: arz mekanizması (sabit vs enflasyonist), dağılım planı (takım, yatırımcı, topluluk), vesting schedule, utility tanımı ve değer yakalama mekanizması." },
                  { question: "DAO kurmak zor mu?", answer: "DAO araçları (Snapshot, Tally, Aragon) kurulumu kolaylaştırmıştır. Zor kısım teknik değil sosyal: etkili yönetişim tasarımı, katılım teşviki ve merkezi olmayan karar almayı koordine etmek." }
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
