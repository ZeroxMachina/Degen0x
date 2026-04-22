import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Fluid — Kapsamlı Kripto Rehberi 2026 | Degen0x",
  description: "Fluid hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kararlar almanız için ihtiyacınız olan bilgiler.",
  openGraph: {
    type: "article",
    title: "Fluid — Kapsamlı Kripto Rehberi 2026",
    description: "Fluid hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kararlar alman",
    url: "https://degen0x.com/tr/defi-lending/reviews/fluid",
    locale: "tr_TR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Fluid — Kapsamlı Kripto Rehberi 2026", description: "Fluid hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kararlar alman" },
  alternates: {
    canonical: "/tr/defi-lending/reviews/fluid",
    languages: { "en": "/defi-lending/reviews/fluid", "tr": "/tr/defi-lending/reviews/fluid", "vi": "/vi/defi-lending/reviews/fluid", "pt-BR": "/pt-br/defi-lending/reviews/fluid", "x-default": "/defi-lending/reviews/fluid" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://degen0x.com/tr" },
    { "@type": "ListItem", position: 2, name: "DeFi Kredi", item: "https://degen0x.com/tr/defi-lending" },
    { "@type": "ListItem", position: 3, name: "Fluid — Kapsamlı Kripto Rehberi 2026" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Fluid — Kapsamlı Kripto Rehberi 2026",
  description: "Fluid hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kararlar almanız için ihtiyacınız olan bilgiler.",
  url: "https://degen0x.com/tr/defi-lending/reviews/fluid",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Fluid nedir ve nasıl çalışır?", "answer": "Fluid, dijital varlık ekosisteminde güvenli ve şeffaf işlemleri mümkün kılan bir teknolojidir. Kriptografik algoritmalar ve dağıtık mimari sayesinde merkezi otoriteye ihtiyaç duymaz." },
  { "question": "Fluid yatırımında riskler nelerdir?", "answer": "Dikkat edilmesi gereken riskler: kod exploitleri, flash loan saldırıları, oracle manipülasyonu, rug pull riski ve piyasa manipülasyonu. Yalnızca denetlenmiş (audited) projelere yatırım yapın ve tek varlığa aşırı maruz kalmayın." },
  { "question": "2026\'da Fluid alanında neler değişti?", "answer": "Önemli 2026 gelişmeleri: RWA tokenizasyonunun büyümesi, AI-blockchain entegrasyonları, DePIN kategorisinin yükselişi ve modüler blokzincir mimarisinin benimsenmesi. Fluid alanında da paralel iyileştirmeler gözlemlenmektedir." },
  { "question": "Türkiye\'den Fluid nasıl kullanılır?", "answer": "Türkiye\'de Fluid kullanmak için: 1) MASAK onaylı bir borsada KYC sürecini tamamlayarak hesap açın, 2) havale, EFT veya kredi kartı ile TL yatırarak başlayın, 3) BtcTurk, Paribu ve Bitci gibi Türk borsaları arasından size uygun olanı seçin. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Tüm işlemlerinizi kayıt altında tutmanız önerilir." }
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
              { label: "Fluid" }
          ]} />
          <article className="mt-8" lang="tr">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇹🇷 Türkçe</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Orta Seviye</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Fluid — Kapsamlı Kripto Rehberi 2026</h1>
            <p className="text-lg text-[#8b949e] mb-10">Fluid hakkında kapsamlı Türkçe rehber. SPK ve MASAK düzenlemeleri çerçevesinde kripto dünyasında bilinçli kararlar almanız için ihtiyacınız olan bilgiler.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Fluid Nedir?</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Fluid, dijital varlık ekosisteminde giderek artan bir öneme sahiptir. Blokzincir altyapısı üzerine kurulu olan bu sistem, akıllı sözleşmeler aracılığıyla güvenli ve otomatik işlem gerçekleştirilmesini sağlar. Son dönemde kurumsal yatırımcıların ilgisinin artmasıyla birlikte Fluid büyük bir dönüşüm sürecine girmiştir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Teknik Altyapı ve Çalışma Prensibi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Teknik açıdan Fluid, dağıtık defter teknolojisi (DLT) kullanır. Her işlem ağdaki düğümler tarafından doğrulanır ve değiştirilemez şekilde kaydedilir. Kullanılan konsensüs mekanizması (Proof of Work, Proof of Stake veya alternatif protokoller), ağın güvenliğini ve merkeziyetsizliğini belirler.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">2026 Güncellemeleri ve Piyasa Dinamikleri</h2>
              <p className="text-[#c9d1d9] leading-relaxed">2026 piyasa dinamikleri Fluid için önemli fırsatlar sunmaktadır. Kurumsal DeFi protokollerinin yükselişi, Real World Asset (RWA) tokenizasyonunun büyümesi ve yapay zeka ile blockchain entegrasyonları sektöre yeni bir momentum kazandırmıştır. Fluid bu trendlerden doğrudan etkilenmektedir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {[
                  { question: "Fluid nedir ve nasıl çalışır?", answer: "Fluid, dijital varlık ekosisteminde güvenli ve şeffaf işlemleri mümkün kılan bir teknolojidir. Kriptografik algoritmalar ve dağıtık mimari sayesinde merkezi otoriteye ihtiyaç duymaz." },
                  { question: "Fluid yatırımında riskler nelerdir?", answer: "Dikkat edilmesi gereken riskler: kod exploitleri, flash loan saldırıları, oracle manipülasyonu, rug pull riski ve piyasa manipülasyonu. Yalnızca denetlenmiş (audited) projelere yatırım yapın ve tek varlığa aşırı maruz kalmayın." },
                  { question: "2026\'da Fluid alanında neler değişti?", answer: "Önemli 2026 gelişmeleri: RWA tokenizasyonunun büyümesi, AI-blockchain entegrasyonları, DePIN kategorisinin yükselişi ve modüler blokzincir mimarisinin benimsenmesi. Fluid alanında da paralel iyileştirmeler gözlemlenmektedir." },
                  { question: "Türkiye\'den Fluid nasıl kullanılır?", answer: "Türkiye\'de Fluid kullanmak için: 1) MASAK onaylı bir borsada KYC sürecini tamamlayarak hesap açın, 2) havale, EFT veya kredi kartı ile TL yatırarak başlayın, 3) BtcTurk, Paribu ve Bitci gibi Türk borsaları arasından size uygun olanı seçin. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Tüm işlemlerinizi kayıt altında tutmanız önerilir." }
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
