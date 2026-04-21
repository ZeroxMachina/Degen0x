import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "degen0x Community — Kripto Topluluk Rehberi | Degen0x",
  description: "degen0x Community hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kararlar almanız için ihtiyacınız olan bil",
  openGraph: {
    type: "article",
    title: "degen0x Community — Kripto Topluluk Rehberi",
    description: "degen0x Community hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli ka",
    url: "https://degen0x.com/tr/community",
    locale: "tr_TR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "degen0x Community — Kripto Topluluk Rehberi", description: "degen0x Community hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli ka" },
  alternates: {
    canonical: "/tr/community",
    languages: { "en": "/community", "tr": "/tr/community", "vi": "/vi/community", "pt-BR": "/pt-br/community", "x-default": "/community" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://degen0x.com/tr" },
    { "@type": "ListItem", position: 2, name: "Topluluk", item: "https://degen0x.com/tr/community" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "degen0x Community — Kripto Topluluk Rehberi",
  description: "degen0x Community hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kararlar almanız için ihtiyacınız olan bil",
  url: "https://degen0x.com/tr/community",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Topluluğa nasıl katılabilirim?", "answer": "Resmi Discord sunucusu, Telegram grubu ve Twitter/X hesabını takip ederek başlayabilirsiniz. Forumlar ve yerel meetup\'lar da değerli kaynaklardır." },
  { "question": "Toplulukta aktif olmanın faydaları nelerdir?", "answer": "Erken bilgi erişimi, networking, airdrop fırsatları, governance katılımı ve profesyonel gelişim fırsatları. Katkıda bulunan üyeler genellikle özel ödüller alır." }
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
              { label: "Topluluk", href: "/tr/community" }
          ]} />
          <article className="mt-8" lang="tr">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇹🇷 Türkçe</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Orta Seviye</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">degen0x Community — Kripto Topluluk Rehberi</h1>
            <p className="text-lg text-[#8b949e] mb-10">degen0x Community hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kararlar almanız için ihtiyacınız olan bilgiler.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Topluluk Rehberi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">degen0x Community topluluğu hakkında kapsamlı rehber: Discord sunucuları, Telegram grupları, Twitter/X hesapları ve forum kaynakları.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Katılım ve Katkı</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Kripto topluluğuna nasıl katkıda bulunabilirsiniz: governance oylamaları, bug bounty programları, içerik üretimi ve geliştirici katkıları.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {[
                  { question: "Topluluğa nasıl katılabilirim?", answer: "Resmi Discord sunucusu, Telegram grubu ve Twitter/X hesabını takip ederek başlayabilirsiniz. Forumlar ve yerel meetup\'lar da değerli kaynaklardır." },
                  { question: "Toplulukta aktif olmanın faydaları nelerdir?", answer: "Erken bilgi erişimi, networking, airdrop fırsatları, governance katılımı ve profesyonel gelişim fırsatları. Katkıda bulunan üyeler genellikle özel ödüller alır." }
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
