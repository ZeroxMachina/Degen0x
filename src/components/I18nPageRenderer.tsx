import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export interface I18nPageData {
  title: string;
  desc: string;
  descFull: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  path: string;
  locale: string;
  cat: string;
  catLabel: string;
  topic: string;
  htmlLang: string;
  ogLocale: string;
  nativeName: string;
  flag: string;
  breadcrumbs: { label: string; href?: string }[];
}

// Difficulty labels per locale
const DIFFICULTY: Record<string, string> = {
  tr: "Orta Seviye",
  vi: "Trung Bình",
  "pt-br": "Intermediário",
};

// Related-content labels per locale
const RELATED: Record<string, { heading: string; learn: string; tools: string; exchanges: string }> = {
  tr: { heading: "İlgili İçerikler", learn: "Öğren", tools: "Araçlar", exchanges: "Borsalar" },
  vi: { heading: "Nội Dung Liên Quan", learn: "Học", tools: "Công Cụ", exchanges: "Sàn Giao Dịch" },
  "pt-br": { heading: "Conteúdo Relacionado", learn: "Aprender", tools: "Ferramentas", exchanges: "Exchanges" },
};

// Disclaimer per locale
const DISCLAIMER: Record<string, string> = {
  tr: "Bu rehber yalnızca bilgilendirme amaçlıdır ve finansal tavsiye niteliği taşımaz. Kripto para yatırımı önemli riskler içerir — herhangi bir karar vermeden önce kendi araştırmanızı yapın.",
  vi: "Hướng dẫn này chỉ nhằm mục đích cung cấp thông tin và không phải là lời khuyên tài chính. Đầu tư tiền điện tử có rủi ro đáng kể — hãy tự nghiên cứu trước khi đưa ra bất kỳ quyết định nào.",
  "pt-br": "Este guia é apenas para fins informativos e não constitui aconselhamento financeiro. Investimentos em criptomoedas envolvem riscos significativos — faça sua própria pesquisa antes de tomar qualquer decisão.",
};

const DISCLAIMER_LABEL: Record<string, string> = {
  tr: "Yasal uyarı:",
  vi: "Tuyên bố miễn trừ:",
  "pt-br": "Aviso legal:",
};

const FAQ_HEADING: Record<string, string> = {
  tr: "Sık Sorulan Sorular",
  vi: "Câu Hỏi Thường Gặp",
  "pt-br": "Perguntas Frequentes",
};

export default function I18nPageRenderer({ data }: { data: I18nPageData }) {
  const locale = data.locale;
  const localePath = locale === "pt-br" ? "/pt-br" : `/${locale}`;

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: data.breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.label,
      ...(b.href ? { item: `https://degen0x.com${b.href}` } : {}),
    })),
  };

  const articleSchema = generateArticleSchema({
    title: data.title,
    description: data.desc,
    url: `https://degen0x.com${localePath}${data.path}`,
    publishedDate: "2026-04-21",
    modifiedDate: "2026-04-21",
    author: "Degen0x",
  });

  const faqSchema = data.faqs.length > 0
    ? generateFAQSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a })))
    : null;

  const schemas = faqSchema ? combineSchemas([articleSchema, faqSchema]) : articleSchema;

  // Build breadcrumb items for the UI component (skip the first "home" entry)
  const uiBreadcrumbs = data.breadcrumbs.slice(1).map((b) => ({
    label: b.label,
    ...(b.href ? { href: b.href } : {}),
  }));

  const related = RELATED[locale] || RELATED["tr"];
  const difficulty = DIFFICULTY[locale] || "Intermediate";
  const disclaimer = DISCLAIMER[locale] || DISCLAIMER["tr"];
  const disclaimerLabel = DISCLAIMER_LABEL[locale] || DISCLAIMER_LABEL["tr"];
  const faqHeading = FAQ_HEADING[locale] || FAQ_HEADING["tr"];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <StructuredData data={schemas} />
      <main className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Breadcrumb items={uiBreadcrumbs} />
          <article className="mt-8" lang={data.htmlLang}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">
                {data.flag} {data.nativeName}
              </span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">
                {difficulty}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">{data.title}</h1>
            <p className="text-lg text-[#8b949e] mb-10">{data.descFull}</p>

            {data.sections.map((sec, i) => (
              <section key={i} className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">{sec.heading}</h2>
                <p className="text-[#c9d1d9] leading-relaxed">{sec.body}</p>
              </section>
            ))}

            {data.faqs.length > 0 && (
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">{faqHeading}</h2>
                <div className="space-y-4">
                  {data.faqs.map((faq, i) => (
                    <details key={i} className="group bg-[#161b22] border border-[#30363d] rounded-lg">
                      <summary className="cursor-pointer px-5 py-4 text-white font-medium list-none flex justify-between items-center min-h-[44px]">
                        {faq.q}
                        <span className="text-[#8b949e] ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
                      </summary>
                      <p className="px-5 pb-4 text-[#c9d1d9] leading-relaxed">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">{related.heading}</h2>
              <ul className="list-disc list-inside text-purple-300 space-y-2">
                <li><a className="hover:underline" href={`${localePath}/learn`}>{related.learn}</a></li>
                <li><a className="hover:underline" href={`${localePath}/tools`}>{related.tools}</a></li>
                <li><a className="hover:underline" href={`${localePath}/exchanges/best`}>{related.exchanges}</a></li>
              </ul>
            </section>

            <div style={{ background: "#1a1625", border: "1px solid #2d2254", borderRadius: 8, padding: "16px 20px", marginTop: 40, marginBottom: 20 }}>
              <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: "#a78bfa" }}>{disclaimerLabel}</strong> {disclaimer}
              </p>
            </div>
          </article>
          <BackToTop />
        </div>
      </main>
    </>
  );
}
