import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Portfólio — Análise de Rastreador de Portfólio | Degen0x",
  description: "Guia completo sobre Portfólio em português. A CVM e o Banco Central regulamentam ativos digitais no Brasil sob o Marco Legal das Criptomoedas (Lei 14.478/2022).",
  openGraph: {
    type: "article",
    title: "Portfólio — Análise de Rastreador de Portfólio",
    description: "Guia completo sobre Portfólio em português. A CVM e o Banco Central regulamentam ativos digitais no Brasil sob o Marco L",
    url: "https://degen0x.com/pt-br/portfolio-tracker",
    locale: "pt_BR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Portfólio — Análise de Rastreador de Portfólio", description: "Guia completo sobre Portfólio em português. A CVM e o Banco Central regulamentam ativos digitais no Brasil sob o Marco L" },
  alternates: {
    canonical: "/pt-br/portfolio-tracker",
    languages: { "en": "/portfolio-tracker", "tr": "/tr/portfolio-tracker", "vi": "/vi/portfolio-tracker", "pt-BR": "/pt-br/portfolio-tracker", "x-default": "/portfolio-tracker" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://degen0x.com/pt-br" },
    { "@type": "ListItem", position: 2, name: "Rastreador de Portfólio", item: "https://degen0x.com/pt-br/portfolio-tracker" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Portfólio — Análise de Rastreador de Portfólio",
  description: "Guia completo sobre Portfólio em português. A CVM e o Banco Central regulamentam ativos digitais no Brasil sob o Marco Legal das Criptomoedas (Lei 14.478/2022).",
  url: "https://degen0x.com/pt-br/portfolio-tracker",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Qual o melhor rastreador?", "answer": "Depende das necessidades: exchanges suportadas, tracking DeFi, relatório fiscal, app mobile e preço. Guia comparando as principais ferramentas." },
  { "question": "Rastreador de portfólio é seguro?", "answer": "Maioria usa API keys read-only (só visualização, sem poder de transação). Verifique permissões, não conceda acesso de saque e use 2FA." }
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
              { label: "Rastreador de Portfólio", href: "/pt-br/portfolio-tracker" }
          ]} />
          <article className="mt-8" lang="pt-BR">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇧🇷 Português (Brasil)</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Intermediário</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Portfólio — Análise de Rastreador de Portfólio</h1>
            <p className="text-lg text-[#8b949e] mb-10">Guia completo sobre Portfólio em português. A CVM e o Banco Central regulamentam ativos digitais no Brasil sob o Marco Legal das Criptomoedas (Lei 14.478/2022).</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Análise do Rastreador</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Rastreador de portfólio Portfólio: exchanges suportadas, integrações de carteira, rastreamento de preço em tempo real e relatórios de performance.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Comparação de Recursos</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Recursos essenciais em rastreadores: sincronização multi-exchange, rastreamento de posições DeFi, relatórios fiscais, alertas de preço e análise de lucro/prejuízo.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {[
                  { question: "Qual o melhor rastreador?", answer: "Depende das necessidades: exchanges suportadas, tracking DeFi, relatório fiscal, app mobile e preço. Guia comparando as principais ferramentas." },
                  { question: "Rastreador de portfólio é seguro?", answer: "Maioria usa API keys read-only (só visualização, sem poder de transação). Verifique permissões, não conceda acesso de saque e use 2FA." }
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
