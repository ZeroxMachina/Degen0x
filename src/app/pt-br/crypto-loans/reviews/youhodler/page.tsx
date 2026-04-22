import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "YouHodler — Comparação de Plataformas de Empréstimo Cripto | Degen0x",
  description: "Comparação YouHodler: taxas de juros, requisitos de garantia, riscos de liquidação e confiabilidade da plataforma.",
  openGraph: {
    type: "article",
    title: "YouHodler — Comparação de Plataformas de Empréstimo Cripto",
    description: "Comparação YouHodler: taxas de juros, requisitos de garantia, riscos de liquidação e confiabilidade da plataforma.",
    url: "https://degen0x.com/pt-br/crypto-loans/reviews/youhodler",
    locale: "pt_BR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "YouHodler — Comparação de Plataformas de Empréstimo Cripto", description: "Comparação YouHodler: taxas de juros, requisitos de garantia, riscos de liquidação e confiabilidade da plataforma." },
  alternates: {
    canonical: "/pt-br/crypto-loans/reviews/youhodler",
    languages: { "en": "/crypto-loans/reviews/youhodler", "tr": "/tr/crypto-loans/reviews/youhodler", "vi": "/vi/crypto-loans/reviews/youhodler", "pt-BR": "/pt-br/crypto-loans/reviews/youhodler", "x-default": "/crypto-loans/reviews/youhodler" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://degen0x.com/pt-br" },
    { "@type": "ListItem", position: 2, name: "Empréstimos Cripto", item: "https://degen0x.com/pt-br/crypto-loans" },
    { "@type": "ListItem", position: 3, name: "YouHodler — Comparação de Plataformas de Empréstimo Cripto" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "YouHodler — Comparação de Plataformas de Empréstimo Cripto",
  description: "Comparação YouHodler: taxas de juros, requisitos de garantia, riscos de liquidação e confiabilidade da plataforma.",
  url: "https://degen0x.com/pt-br/crypto-loans/reviews/youhodler",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Como funciona empréstimo com garantia cripto?", "answer": "Você deposita crypto como colateral e recebe stablecoin ou fiat. LTV geralmente 50-75%. Se o valor do colateral cair, há risco de margin call ou liquidação." },
  { "question": "O que é risco de liquidação?", "answer": "Quando o colateral cai abaixo do limite, sua posição é automaticamente liquidada. Proteções: escolher LTV baixo, diversificar colateral, configurar alertas e manter reserva." },
  { "question": "O que é flash loan?", "answer": "Flash loan é empréstimo DeFi sem colateral, emprestado e devolvido no mesmo bloco. Usado para arbitragem e otimização de liquidez, mas complexo e arriscado." }
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
              { label: "Empréstimos Cripto", href: "/pt-br/crypto-loans" },
              { label: "YouHodler" }
          ]} />
          <article className="mt-8" lang="pt-BR">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇧🇷 Português (Brasil)</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Intermediário</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">YouHodler — Comparação de Plataformas de Empréstimo Cripto</h1>
            <p className="text-lg text-[#8b949e] mb-10">Comparação YouHodler: taxas de juros, requisitos de garantia, riscos de liquidação e confiabilidade da plataforma.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Plataformas de Empréstimo Cripto</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Comparação de plataformas de empréstimo YouHodler: taxas de juros (APR/APY), ativos de garantia suportados, requisitos mínimos de colateral (LTV) e riscos de liquidez.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Gestão de Colateral e Risco de Liquidação</h2>
              <p className="text-[#c9d1d9] leading-relaxed">O maior risco em empréstimos cripto com garantia é a liquidação quando o valor do colateral cai. Gestão de taxa de colateral, mecanismos de margin call e estratégias de proteção. Empréstimos com garantia em cripto estão disponíveis através de plataformas internacionais; compare taxas e riscos de liquidação.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Flash Loans e Protocolos DeFi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Protocolos de empréstimo descentralizados (Aave, Compound, MakerDAO): flash loans, opções de taxa variável/fixa e mecanismos de governança.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {[
                  { question: "Como funciona empréstimo com garantia cripto?", answer: "Você deposita crypto como colateral e recebe stablecoin ou fiat. LTV geralmente 50-75%. Se o valor do colateral cair, há risco de margin call ou liquidação." },
                  { question: "O que é risco de liquidação?", answer: "Quando o colateral cai abaixo do limite, sua posição é automaticamente liquidada. Proteções: escolher LTV baixo, diversificar colateral, configurar alertas e manter reserva." },
                  { question: "O que é flash loan?", answer: "Flash loan é empréstimo DeFi sem colateral, emprestado e devolvido no mesmo bloco. Usado para arbitragem e otimização de liquidez, mas complexo e arriscado." }
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
