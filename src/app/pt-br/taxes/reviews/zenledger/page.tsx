import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "ZenLedger — Guia de Impostos Cripto e Ferramentas | Degen0x",
  description: "ZenLedger: obrigações fiscais cripto, preparação de declaração e ferramentas de otimização. No Brasil, ganhos com cripto acima de R\$35.000/mês em vendas devem s",
  openGraph: {
    type: "article",
    title: "ZenLedger — Guia de Impostos Cripto e Ferramentas",
    description: "ZenLedger: obrigações fiscais cripto, preparação de declaração e ferramentas de otimização. No Brasil, ganhos com cripto",
    url: "https://degen0x.com/pt-br/taxes/reviews/zenledger",
    locale: "pt_BR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "ZenLedger — Guia de Impostos Cripto e Ferramentas", description: "ZenLedger: obrigações fiscais cripto, preparação de declaração e ferramentas de otimização. No Brasil, ganhos com cripto" },
  alternates: {
    canonical: "/pt-br/taxes/reviews/zenledger",
    languages: { "en": "/taxes/reviews/zenledger", "tr": "/tr/taxes/reviews/zenledger", "vi": "/vi/taxes/reviews/zenledger", "pt-BR": "/pt-br/taxes/reviews/zenledger", "x-default": "/taxes/reviews/zenledger" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://degen0x.com/pt-br" },
    { "@type": "ListItem", position: 2, name: "Impostos", item: "https://degen0x.com/pt-br/taxes" },
    { "@type": "ListItem", position: 3, name: "ZenLedger — Guia de Impostos Cripto e Ferramentas" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "ZenLedger — Guia de Impostos Cripto e Ferramentas",
  description: "ZenLedger: obrigações fiscais cripto, preparação de declaração e ferramentas de otimização. No Brasil, ganhos com cripto acima de R\$35.000/mês em vendas devem s",
  url: "https://degen0x.com/pt-br/taxes/reviews/zenledger",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Preciso declarar ganhos com cripto?", "answer": "No Brasil, ganhos com cripto acima de R\$35.000/mês em vendas devem ser declarados à Receita Federal. Operações tributáveis: compra/venda com lucro, rendimentos de staking, airdrops, mineração e ganhos DeFi." },
  { "question": "Qual método de cálculo devo usar?", "answer": "FIFO, LIFO e custo médio têm resultados fiscais diferentes. FIFO é preferido para muitas operações pequenas; custo médio pode beneficiar compras únicas grandes." },
  { "question": "Devo usar software de impostos cripto?", "answer": "Se opera em múltiplas exchanges e protocolos DeFi, software fiscal (Koinly, CoinTracker etc.) automatiza relatórios. Controle manual aumenta risco de erros." }
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
              { label: "Impostos", href: "/pt-br/taxes" },
              { label: "ZenLedger" }
          ]} />
          <article className="mt-8" lang="pt-BR">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇧🇷 Português (Brasil)</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Intermediário</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">ZenLedger — Guia de Impostos Cripto e Ferramentas</h1>
            <p className="text-lg text-[#8b949e] mb-10">ZenLedger: obrigações fiscais cripto, preparação de declaração e ferramentas de otimização. No Brasil, ganhos com cripto acima de R\$35.000/mês em vendas devem ser declarados à Receita Federal.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Obrigações Fiscais Cripto</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Obrigações fiscais no escopo de ZenLedger: No Brasil, ganhos com cripto acima de R\$35.000/mês em vendas devem ser declarados à Receita Federal. Transações tributáveis: compra/venda, rendimentos de staking, airdrops, mineração e ganhos DeFi.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Métodos de Cálculo de Impostos</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Métodos de cálculo de impostos cripto: FIFO (Primeiro a Entrar, Primeiro a Sair), LIFO (Último a Entrar, Primeiro a Sair) e método do custo médio. Vantagens e desvantagens variam conforme estratégia.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Otimização Fiscal e Ferramentas</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Otimização fiscal legal: compensação de perdas (tax-loss harvesting), vantagens de holding de longo prazo e preparação de declaração para a Receita Federal do Brasil. Softwares de impostos cripto automatizam relatórios.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {[
                  { question: "Preciso declarar ganhos com cripto?", answer: "No Brasil, ganhos com cripto acima de R\$35.000/mês em vendas devem ser declarados à Receita Federal. Operações tributáveis: compra/venda com lucro, rendimentos de staking, airdrops, mineração e ganhos DeFi." },
                  { question: "Qual método de cálculo devo usar?", answer: "FIFO, LIFO e custo médio têm resultados fiscais diferentes. FIFO é preferido para muitas operações pequenas; custo médio pode beneficiar compras únicas grandes." },
                  { question: "Devo usar software de impostos cripto?", answer: "Se opera em múltiplas exchanges e protocolos DeFi, software fiscal (Koinly, CoinTracker etc.) automatiza relatórios. Controle manual aumenta risco de erros." }
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
