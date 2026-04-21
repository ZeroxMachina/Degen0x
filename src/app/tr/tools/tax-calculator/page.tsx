import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Tax — Ücretsiz Kripto Aracı | Degen0x",
  description: "Tax aracını ücretsiz kullanın. Kripto piyasasını analiz edin, hesaplamalar yapın ve bilinçli kararlar alın. Kayıt gerektirmez.",
  openGraph: {
    type: "article",
    title: "Tax — Ücretsiz Kripto Aracı",
    description: "Tax aracını ücretsiz kullanın. Kripto piyasasını analiz edin, hesaplamalar yapın ve bilinçli kararlar alın. Kayıt gerekt",
    url: "https://degen0x.com/tr/tools/tax-calculator",
    locale: "tr_TR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Tax — Ücretsiz Kripto Aracı", description: "Tax aracını ücretsiz kullanın. Kripto piyasasını analiz edin, hesaplamalar yapın ve bilinçli kararlar alın. Kayıt gerekt" },
  alternates: {
    canonical: "/tr/tools/tax-calculator",
    languages: { "en": "/tools/tax-calculator", "tr": "/tr/tools/tax-calculator", "vi": "/vi/tools/tax-calculator", "pt-BR": "/pt-br/tools/tax-calculator", "x-default": "/tools/tax-calculator" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://degen0x.com/tr" },
    { "@type": "ListItem", position: 2, name: "Araçlar", item: "https://degen0x.com/tr/tools" },
    { "@type": "ListItem", position: 3, name: "Tax — Ücretsiz Kripto Aracı" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Tax — Ücretsiz Kripto Aracı",
  description: "Tax aracını ücretsiz kullanın. Kripto piyasasını analiz edin, hesaplamalar yapın ve bilinçli kararlar alın. Kayıt gerektirmez.",
  url: "https://degen0x.com/tr/tools/tax-calculator",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Tax nedir ve nasıl çalışır?", "answer": "Tax, blokzincir teknolojisi üzerine kurulu merkeziyetsiz bir sistemdir. Akıllı sözleşmeler aracılığıyla aracısız işlem yapılmasını sağlar ve kripto ekosisteminde önemli bir role sahiptir. 2026\'da AB MiCA çerçevesi yürürlüğe girmiş, Türkiye\'de SPK ve MASAK kapsamında borsaların lisanslanması ve KYC zorunlulukları detaylandırılmıştır." },
  { "question": "Tax yatırımında riskler nelerdir?", "answer": "Başlıca riskler: akıllı sözleşme güvenlik açıkları, piyasa oynaklığı (%20+ günlük dalgalanmalar olağandır), düzenleyici belirsizlikler ve likidite riskleri. Portföy çeşitlendirmesi ve stop-loss kullanımı önerilir." },
  { "question": "2026\'da Tax alanında neler değişti?", "answer": "2026\'da AB MiCA düzenlemesi yürürlüğe girdi, Bitcoin spot ETF\'ler küresel ölçekte yaygınlaştı, Ethereum Pectra güncellemesi tamamlandı ve kurumsal DeFi protokolleri önemli büyüme kaydetti. Tax bu gelişmelerden doğrudan etkilenmektedir." },
  { "question": "Türkiye\'den Tax nasıl kullanılır?", "answer": "Türkiye\'de Tax kullanmak için: 1) MASAK onaylı bir borsada KYC sürecini tamamlayarak hesap açın, 2) havale, EFT veya kredi kartı ile TL yatırarak başlayın, 3) BtcTurk, Paribu ve Bitci gibi Türk borsaları arasından size uygun olanı seçin. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Tüm işlemlerinizi kayıt altında tutmanız önerilir." }
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
              { label: "Araçlar", href: "/tr/tools" },
              { label: "Tax" }
          ]} />
          <article className="mt-8" lang="tr">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇹🇷 Türkçe</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Orta Seviye</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Tax — Ücretsiz Kripto Aracı</h1>
            <p className="text-lg text-[#8b949e] mb-10">Tax aracını ücretsiz kullanın. Kripto piyasasını analiz edin, hesaplamalar yapın ve bilinçli kararlar alın. Kayıt gerektirmez.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Tax Nedir?</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Tax, kripto ve blokzincir alanının temel yapı taşlarından biridir. Bu teknoloji, merkezi olmayan mimarisi sayesinde kullanıcılara aracısız ve şeffaf işlem yapma imkanı sunar. 2026 yılı itibarıyla Tax alanında TVL, kullanıcı sayısı ve geliştirici aktivitesi gibi metriklerde belirgin artışlar gözlemlenmiştir. 2026\'da AB MiCA çerçevesi yürürlüğe girmiş, Türkiye\'de SPK ve MASAK kapsamında borsaların lisanslanması ve KYC zorunlulukları detaylandırılmıştır.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Teknik Altyapı ve Çalışma Prensibi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Tax sistemi, kriptografik hash fonksiyonları, dijital imzalar ve konsensüs mekanizmaları üzerine inşa edilmiştir. Akıllı sözleşmeler, kodla tanımlanmış kurallar çerçevesinde otomatik işlem yürütür. Bu yapı, geleneksel finansal aracılara olan ihtiyacı ortadan kaldırarak işlem maliyetlerini düşürür ve hızı artırır. 2026\'da AB MiCA çerçevesi yürürlüğe girmiş, Türkiye\'de SPK ve MASAK kapsamında borsaların lisanslanması ve KYC zorunlulukları detaylandırılmıştır.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">2026 Güncellemeleri ve Piyasa Dinamikleri</h2>
              <p className="text-[#c9d1d9] leading-relaxed">2026 yılında Tax alanındaki en önemli gelişmeler: düzenleyici çerçevelerin netleşmesi (özellikle AB MiCA düzenlemesi ve ABD SEC kararları), kurumsal benimsemenin hızlanması ve teknolojik iyileştirmelerdir. Ethereum\'un Pectra güncellemesi ve Bitcoin spot ETF onaylarının ardından piyasa olgunlaşma sürecine girmiştir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {[
                  { question: "Tax nedir ve nasıl çalışır?", answer: "Tax, blokzincir teknolojisi üzerine kurulu merkeziyetsiz bir sistemdir. Akıllı sözleşmeler aracılığıyla aracısız işlem yapılmasını sağlar ve kripto ekosisteminde önemli bir role sahiptir. 2026\'da AB MiCA çerçevesi yürürlüğe girmiş, Türkiye\'de SPK ve MASAK kapsamında borsaların lisanslanması ve KYC zorunlulukları detaylandırılmıştır." },
                  { question: "Tax yatırımında riskler nelerdir?", answer: "Başlıca riskler: akıllı sözleşme güvenlik açıkları, piyasa oynaklığı (%20+ günlük dalgalanmalar olağandır), düzenleyici belirsizlikler ve likidite riskleri. Portföy çeşitlendirmesi ve stop-loss kullanımı önerilir." },
                  { question: "2026\'da Tax alanında neler değişti?", answer: "2026\'da AB MiCA düzenlemesi yürürlüğe girdi, Bitcoin spot ETF\'ler küresel ölçekte yaygınlaştı, Ethereum Pectra güncellemesi tamamlandı ve kurumsal DeFi protokolleri önemli büyüme kaydetti. Tax bu gelişmelerden doğrudan etkilenmektedir." },
                  { question: "Türkiye\'den Tax nasıl kullanılır?", answer: "Türkiye\'de Tax kullanmak için: 1) MASAK onaylı bir borsada KYC sürecini tamamlayarak hesap açın, 2) havale, EFT veya kredi kartı ile TL yatırarak başlayın, 3) BtcTurk, Paribu ve Bitci gibi Türk borsaları arasından size uygun olanı seçin. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Tüm işlemlerinizi kayıt altında tutmanız önerilir." }
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
