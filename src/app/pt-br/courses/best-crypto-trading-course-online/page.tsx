import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Trading Cursos Online — Curso de Criptomoedas | Degen0x",
  description: "Guia completo sobre Trading Cursos Online em português. A CVM e o Banco Central regulamentam ativos digitais no Brasil sob o Marco Legal das Criptomoedas (Lei 1",
  openGraph: {
    type: "article",
    title: "Trading Cursos Online — Curso de Criptomoedas",
    description: "Guia completo sobre Trading Cursos Online em português. A CVM e o Banco Central regulamentam ativos digitais no Brasil s",
    url: "https://degen0x.com/pt-br/courses/best-crypto-trading-course-online",
    locale: "pt_BR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Trading Cursos Online — Curso de Criptomoedas", description: "Guia completo sobre Trading Cursos Online em português. A CVM e o Banco Central regulamentam ativos digitais no Brasil s" },
  alternates: {
    canonical: "/pt-br/courses/best-crypto-trading-course-online",
    languages: { "en": "/courses/best-crypto-trading-course-online", "tr": "/tr/courses/best-crypto-trading-course-online", "vi": "/vi/courses/best-crypto-trading-course-online", "pt-BR": "/pt-br/courses/best-crypto-trading-course-online", "x-default": "/courses/best-crypto-trading-course-online" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://degen0x.com/pt-br" },
    { "@type": "ListItem", position: 2, name: "Cursos", item: "https://degen0x.com/pt-br/courses" },
    { "@type": "ListItem", position: 3, name: "Trading Cursos Online — Curso de Criptomoedas" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Trading Cursos Online — Curso de Criptomoedas",
  description: "Guia completo sobre Trading Cursos Online em português. A CVM e o Banco Central regulamentam ativos digitais no Brasil sob o Marco Legal das Criptomoedas (Lei 1",
  url: "https://degen0x.com/pt-br/courses/best-crypto-trading-course-online",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Este curso é para iniciantes?", "answer": "Currículo do básico ao avançado, sem conhecimento prévio necessário. Inclui exemplos práticos e cenários reais." },
  { "question": "O que vou aprender?", "answer": "Competência para analisar mercado, tomar decisões de investimento informadas e usar protocolos DeFi com segurança." }
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
              { label: "Cursos", href: "/pt-br/courses" },
              { label: "Trading Cursos Online" }
          ]} />
          <article className="mt-8" lang="pt-BR">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇧🇷 Português (Brasil)</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Intermediário</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Trading Cursos Online — Curso de Criptomoedas</h1>
            <p className="text-lg text-[#8b949e] mb-10">Guia completo sobre Trading Cursos Online em português. A CVM e o Banco Central regulamentam ativos digitais no Brasil sob o Marco Legal das Criptomoedas (Lei 14.478/2022).</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Conteúdo do Curso</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Curso cripto Trading Cursos Online: currículo abrangente dos conceitos básicos às estratégias avançadas. Exemplos práticos e cenários reais de mercado.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Para Quem É?</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Este curso é projetado tanto para iniciantes quanto para investidores intermediários que desejam aprofundar seus conhecimentos. Informações práticas e exemplos do mundo real.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {[
                  { question: "Este curso é para iniciantes?", answer: "Currículo do básico ao avançado, sem conhecimento prévio necessário. Inclui exemplos práticos e cenários reais." },
                  { question: "O que vou aprender?", answer: "Competência para analisar mercado, tomar decisões de investimento informadas e usar protocolos DeFi com segurança." }
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
              <h2 className="text-2xl font-semibold text-white mb-4">Conteúdo Relacionado</h2>
              <ul className="list-disc list-inside text-purple-300 space-y-2">
                <li><a className="hover:underline" href="/pt-br/learn">Aprender</a></li>
                <li><a className="hover:underline" href="/pt-br/tools">Ferramentas</a></li>
                <li><a className="hover:underline" href="/pt-br/exchanges/best">Exchanges</a></li>
              </ul>
            </section>
            <div style={{ background: "#1a1625", border: "1px solid #2d2254", borderRadius: 8, padding: "16px 20px", marginTop: 40, marginBottom: 20 }}>
              <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: "#a78bfa" }}>Aviso legal:</strong> Este guia é apenas para fins informativos e não constitui aconselhamento financeiro. Criptomoedas envolvem riscos significativos — faça sua própria pesquisa antes de tomar qualquer decisão.
              </p>
            </div>
          </article>
          <BackToTop />
        </div>
      </main>
    </>
  );
}
