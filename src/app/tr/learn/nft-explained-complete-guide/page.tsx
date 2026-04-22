import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "NFT: 2026 Kapsamlı Türkçe Rehber | Degen0x",
  description: "NFT hakkında bilmeniz gereken her şey. Temel kavramlar, nasıl çalışır, riskler ve 2026 güncellemeleri — Türkçe kapsamlı rehber.",
  openGraph: {
    type: "article",
    title: "NFT: 2026 Kapsamlı Türkçe Rehber",
    description: "NFT hakkında bilmeniz gereken her şey. Temel kavramlar, nasıl çalışır, riskler ve 2026 güncellemeleri — Türkçe kapsamlı ",
    url: "https://degen0x.com/tr/learn/nft-explained-complete-guide",
    locale: "tr_TR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "NFT: 2026 Kapsamlı Türkçe Rehber", description: "NFT hakkında bilmeniz gereken her şey. Temel kavramlar, nasıl çalışır, riskler ve 2026 güncellemeleri — Türkçe kapsamlı " },
  alternates: {
    canonical: "/tr/learn/nft-explained-complete-guide",
    languages: { "en": "/learn/nft-explained-complete-guide", "tr": "/tr/learn/nft-explained-complete-guide", "vi": "/vi/learn/nft-explained-complete-guide", "pt-BR": "/pt-br/learn/nft-explained-complete-guide", "x-default": "/learn/nft-explained-complete-guide" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://degen0x.com/tr" },
    { "@type": "ListItem", position: 2, name: "Öğren", item: "https://degen0x.com/tr/learn" },
    { "@type": "ListItem", position: 3, name: "NFT: 2026 Kapsamlı Türkçe Rehber" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "NFT: 2026 Kapsamlı Türkçe Rehber",
  description: "NFT hakkında bilmeniz gereken her şey. Temel kavramlar, nasıl çalışır, riskler ve 2026 güncellemeleri — Türkçe kapsamlı rehber.",
  url: "https://degen0x.com/tr/learn/nft-explained-complete-guide",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "NFT nedir ve nasıl çalışır?", "answer": "NFT, dijital varlık ekosisteminde güvenli ve şeffaf işlemleri mümkün kılan bir teknolojidir. Kriptografik algoritmalar ve dağıtık mimari sayesinde merkezi otoriteye ihtiyaç duymaz. NFT pazarı 2026\'da royalty standartları, dinamik metadata ve cross-chain transferlerle olgunlaşmıştır. ERC-721C ve ERC-6551 yeni standartlar olarak öne çıkmaktadır." },
  { "question": "NFT yatırımında riskler nelerdir?", "answer": "Dikkat edilmesi gereken riskler: kod exploitleri, flash loan saldırıları, oracle manipülasyonu, rug pull riski ve piyasa manipülasyonu. Yalnızca denetlenmiş (audited) projelere yatırım yapın ve tek varlığa aşırı maruz kalmayın." },
  { "question": "2026\'da NFT alanında neler değişti?", "answer": "Önemli 2026 gelişmeleri: RWA tokenizasyonunun büyümesi, AI-blockchain entegrasyonları, DePIN kategorisinin yükselişi ve modüler blokzincir mimarisinin benimsenmesi. NFT alanında da paralel iyileştirmeler gözlemlenmektedir." },
  { "question": "Türkiye\'den NFT nasıl kullanılır?", "answer": "Türkiye\'de NFT kullanmak için: 1) MASAK onaylı bir borsada KYC sürecini tamamlayarak hesap açın, 2) havale, EFT veya kredi kartı ile TL yatırarak başlayın, 3) BtcTurk, Paribu ve Bitci gibi Türk borsaları arasından size uygun olanı seçin. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Tüm işlemlerinizi kayıt altında tutmanız önerilir." }
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
              { label: "Öğren", href: "/tr/learn" },
              { label: "NFT" }
          ]} />
          <article className="mt-8" lang="tr">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇹🇷 Türkçe</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Orta Seviye</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">NFT: 2026 Kapsamlı Türkçe Rehber</h1>
            <p className="text-lg text-[#8b949e] mb-10">NFT hakkında bilmeniz gereken her şey. Temel kavramlar, nasıl çalışır, riskler ve 2026 güncellemeleri — Türkçe kapsamlı rehber.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">NFT Nedir?</h2>
              <p className="text-[#c9d1d9] leading-relaxed">NFT, dijital varlık ekosisteminde giderek artan bir öneme sahiptir. Blokzincir altyapısı üzerine kurulu olan bu sistem, akıllı sözleşmeler aracılığıyla güvenli ve otomatik işlem gerçekleştirilmesini sağlar. Son dönemde kurumsal yatırımcıların ilgisinin artmasıyla birlikte NFT büyük bir dönüşüm sürecine girmiştir. NFT pazarı 2026\'da royalty standartları, dinamik metadata ve cross-chain transferlerle olgunlaşmıştır. ERC-721C ve ERC-6551 yeni standartlar olarak öne çıkmaktadır.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Teknik Altyapı ve Çalışma Prensibi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Teknik açıdan NFT, dağıtık defter teknolojisi (DLT) kullanır. Her işlem ağdaki düğümler tarafından doğrulanır ve değiştirilemez şekilde kaydedilir. Kullanılan konsensüs mekanizması (Proof of Work, Proof of Stake veya alternatif protokoller), ağın güvenliğini ve merkeziyetsizliğini belirler.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">2026 Güncellemeleri ve Piyasa Dinamikleri</h2>
              <p className="text-[#c9d1d9] leading-relaxed">2026 piyasa dinamikleri NFT için önemli fırsatlar sunmaktadır. Kurumsal DeFi protokollerinin yükselişi, Real World Asset (RWA) tokenizasyonunun büyümesi ve yapay zeka ile blockchain entegrasyonları sektöre yeni bir momentum kazandırmıştır. NFT bu trendlerden doğrudan etkilenmektedir.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Türkiye\'de NFT Kullanımı</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Türkiye\'de NFT kullanmak için MASAK onaylı bir borsada KYC sürecini tamamlayarak TL ile kripto satın alabilirsiniz. BtcTurk, Paribu ve Bitci gibi Türk borsaları arasından ihtiyaçlarınıza uygun olanı seçebilirsiniz. SPK ve MASAK düzenlemeleri kapsamında işlemlerinizin yasal çerçevede olduğundan emin olun. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Riskler ve Güvenlik Değerlendirmesi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Risk yönetimi NFT yatırımcıları için kritik öneme sahiptir. Karşılaşabileceğiniz riskler arasında: rug pull (proje geliştiricilerinin fonları çekmesi), impermanent loss (likidite sağlayıcılar için), flash loan saldırıları ve oracle manipülasyonu yer alır. Güvenilir projeleri tercih edin, audit raporlarını inceleyin ve tek bir varlığa aşırı maruz kalmayın.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {[
                  { question: "NFT nedir ve nasıl çalışır?", answer: "NFT, dijital varlık ekosisteminde güvenli ve şeffaf işlemleri mümkün kılan bir teknolojidir. Kriptografik algoritmalar ve dağıtık mimari sayesinde merkezi otoriteye ihtiyaç duymaz. NFT pazarı 2026\'da royalty standartları, dinamik metadata ve cross-chain transferlerle olgunlaşmıştır. ERC-721C ve ERC-6551 yeni standartlar olarak öne çıkmaktadır." },
                  { question: "NFT yatırımında riskler nelerdir?", answer: "Dikkat edilmesi gereken riskler: kod exploitleri, flash loan saldırıları, oracle manipülasyonu, rug pull riski ve piyasa manipülasyonu. Yalnızca denetlenmiş (audited) projelere yatırım yapın ve tek varlığa aşırı maruz kalmayın." },
                  { question: "2026\'da NFT alanında neler değişti?", answer: "Önemli 2026 gelişmeleri: RWA tokenizasyonunun büyümesi, AI-blockchain entegrasyonları, DePIN kategorisinin yükselişi ve modüler blokzincir mimarisinin benimsenmesi. NFT alanında da paralel iyileştirmeler gözlemlenmektedir." },
                  { question: "Türkiye\'den NFT nasıl kullanılır?", answer: "Türkiye\'de NFT kullanmak için: 1) MASAK onaylı bir borsada KYC sürecini tamamlayarak hesap açın, 2) havale, EFT veya kredi kartı ile TL yatırarak başlayın, 3) BtcTurk, Paribu ve Bitci gibi Türk borsaları arasından size uygun olanı seçin. Türkiye\'de kripto gelirleri gelir vergisine tabidir — detaylar için mali müşavirinize danışın. Tüm işlemlerinizi kayıt altında tutmanız önerilir." }
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
