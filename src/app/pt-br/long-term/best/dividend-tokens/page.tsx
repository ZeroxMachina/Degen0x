import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Dividend & Revenue-Sharing Crypto Tokens — Estratégia Cripto de Longo Prazo | Degen0x",
  description: "Dividend & Revenue-Sharing Crypto Tokens: estratégias de investimento cripto de longo prazo, diversificação de portfólio e abordagem hodl.",
  openGraph: {
    type: "article",
    title: "Dividend & Revenue-Sharing Crypto Tokens — Estratégia Cripto de Longo Prazo",
    description: "Dividend & Revenue-Sharing Crypto Tokens: estratégias de investimento cripto de longo prazo, diversificação de portfólio",
    url: "https://degen0x.com/pt-br/long-term/best/dividend-tokens",
    locale: "pt_BR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Dividend & Revenue-Sharing Crypto Tokens — Estratégia Cripto de Longo Prazo", description: "Dividend & Revenue-Sharing Crypto Tokens: estratégias de investimento cripto de longo prazo, diversificação de portfólio" },
  alternates: {
    canonical: "/pt-br/long-term/best/dividend-tokens",
    languages: { "en": "/long-term/best/dividend-tokens", "tr": "/tr/long-term/best/dividend-tokens", "vi": "/vi/long-term/best/dividend-tokens", "pt-BR": "/pt-br/long-term/best/dividend-tokens", "x-default": "/long-term/best/dividend-tokens" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://degen0x.com/pt-br" },
    { "@type": "ListItem", position: 2, name: "Longo Prazo", item: "https://degen0x.com/pt-br/long-term" },
    { "@type": "ListItem", position: 3, name: "Dividend & Revenue-Sharing Crypto Tokens — Estratégia Cripto" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Dividend & Revenue-Sharing Crypto Tokens — Estratégia Cripto de Longo Prazo",
  description: "Dividend & Revenue-Sharing Crypto Tokens: estratégias de investimento cripto de longo prazo, diversificação de portfólio e abordagem hodl.",
  url: "https://degen0x.com/pt-br/long-term/best/dividend-tokens",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Cripto serve para investimento de longo prazo?", "answer": "Bitcoin e Ethereum historicamente geraram retorno positivo em períodos de 4 anos. Mas passado não garante futuro. Investimento de longo prazo requer paciência e disciplina diante da volatilidade." },
  { "question": "Com que frequência rebalancear o portfólio?", "answer": "Recomendação: trimestral ou quando desvio atingir 5-10%. Rebalanceamento frequente demais aumenta custos e impostos." },
  { "question": "Cripto deve fazer parte do planejamento de aposentadoria?", "answer": "Cripto pode representar 5-15% do portfólio de aposentadoria. Perfil de alto risco-alto retorno; ajuste o peso conforme idade e tolerância ao risco." }
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
              { label: "Longo Prazo", href: "/pt-br/long-term" },
              { label: "Dividend & Revenue-Sharing Crypto Tokens" }
          ]} />
          <article className="mt-8" lang="pt-BR">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇧🇷 Português (Brasil)</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Intermediário</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Dividend & Revenue-Sharing Crypto Tokens — Estratégia Cripto de Longo Prazo</h1>
            <p className="text-lg text-[#8b949e] mb-10">Dividend & Revenue-Sharing Crypto Tokens: estratégias de investimento cripto de longo prazo, diversificação de portfólio e abordagem hodl.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Estratégia de Investimento de Longo Prazo</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Estratégia de investimento cripto de longo prazo para Dividend & Revenue-Sharing Crypto Tokens: método hodl, DCA (compras regulares), value investing e análise macro.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Estrutura de Portfólio</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Portfólio cripto de longo prazo: 50-60% BTC/ETH (blue chip), 20-30% altcoins mid-cap, 10-20% projetos menores de alto potencial e 5-10% stablecoin (fundo de oportunidade).</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Planejamento de Poupança</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Integrar crypto ao planejamento de poupança de longo prazo: eficiência fiscal, rebalanceamento periódico e ajuste de portfólio conforme tolerância ao risco. No Brasil, ganhos com cripto acima de R\$35.000/mês em vendas devem ser declarados à Receita Federal.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {[
                  { question: "Cripto serve para investimento de longo prazo?", answer: "Bitcoin e Ethereum historicamente geraram retorno positivo em períodos de 4 anos. Mas passado não garante futuro. Investimento de longo prazo requer paciência e disciplina diante da volatilidade." },
                  { question: "Com que frequência rebalancear o portfólio?", answer: "Recomendação: trimestral ou quando desvio atingir 5-10%. Rebalanceamento frequente demais aumenta custos e impostos." },
                  { question: "Cripto deve fazer parte do planejamento de aposentadoria?", answer: "Cripto pode representar 5-15% do portfólio de aposentadoria. Perfil de alto risco-alto retorno; ajuste o peso conforme idade e tolerância ao risco." }
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
