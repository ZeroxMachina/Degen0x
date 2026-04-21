import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "DEFI Masterclass — Kripto Eğitim Kursu | Degen0x",
  description: "DEFI Masterclass hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kararlar almanız için ihtiyacınız olan bilg",
  openGraph: {
    type: "article",
    title: "DEFI Masterclass — Kripto Eğitim Kursu",
    description: "DEFI Masterclass hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kar",
    url: "https://degen0x.com/tr/courses/defi-masterclass",
    locale: "tr_TR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "DEFI Masterclass — Kripto Eğitim Kursu", description: "DEFI Masterclass hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kar" },
  alternates: {
    canonical: "/tr/courses/defi-masterclass",
    languages: { "en": "/courses/defi-masterclass", "tr": "/tr/courses/defi-masterclass", "vi": "/vi/courses/defi-masterclass", "pt-BR": "/pt-br/courses/defi-masterclass", "x-default": "/courses/defi-masterclass" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://degen0x.com/tr" },
    { "@type": "ListItem", position: 2, name: "Kurslar", item: "https://degen0x.com/tr/courses" },
    { "@type": "ListItem", position: 3, name: "DEFI Masterclass — Kripto Eğitim Kursu" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "DEFI Masterclass — Kripto Eğitim Kursu",
  description: "DEFI Masterclass hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kararlar almanız için ihtiyacınız olan bilg",
  url: "https://degen0x.com/tr/courses/defi-masterclass",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Bu kurs yeni başlayanlar için uygun mu?", "answer": "Kurs, temel kavramlardan başlayarak ileri düzey stratejilere kadar ilerleyen kapsamlı bir müfredat sunmaktadır. Önceden kripto bilgisi gerekmez." },
  { "question": "Kurs sonunda ne kazanacağım?", "answer": "Kripto piyasasını analiz edebilme, bilinçli yatırım kararları alabilme ve DeFi protokollerini güvenli kullanabilme yetkinliklerini kazanırsınız." }
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
              { label: "Kurslar", href: "/tr/courses" },
              { label: "DEFI Masterclass" }
          ]} />
          <article className="mt-8" lang="tr">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇹🇷 Türkçe</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Orta Seviye</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">DEFI Masterclass — Kripto Eğitim Kursu</h1>
            <p className="text-lg text-[#8b949e] mb-10">DEFI Masterclass hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kararlar almanız için ihtiyacınız olan bilgiler.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Kurs İçeriği</h2>
              <p className="text-[#c9d1d9] leading-relaxed">DEFI Masterclass kripto eğitim kursu: temel kavramlardan ileri düzey stratejilere kadar kapsamlı müfredat. Uygulamalı örnekler ve gerçek piyasa senaryoları ile desteklenmiştir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Kimler İçin Uygun?</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Bu kurs hem yeni başlayanlar hem de bilgisini derinleştirmek isteyen orta seviye yatırımcılar için tasarlanmıştır. Pratik bilgiler ve gerçek dünya örnekleri ile desteklenmiştir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {[
                  { question: "Bu kurs yeni başlayanlar için uygun mu?", answer: "Kurs, temel kavramlardan başlayarak ileri düzey stratejilere kadar ilerleyen kapsamlı bir müfredat sunmaktadır. Önceden kripto bilgisi gerekmez." },
                  { question: "Kurs sonunda ne kazanacağım?", answer: "Kripto piyasasını analiz edebilme, bilinçli yatırım kararları alabilme ve DeFi protokollerini güvenli kullanabilme yetkinliklerini kazanırsınız." }
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
