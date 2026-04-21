import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Nexus Mutual — Guia de Seguros DeFi 2026 | Degen0x",
  description: "Nexus Mutual: protocolos de seguro DeFi, comparação de cobertura e avaliação de risco de contratos inteligentes.",
  openGraph: {
    type: "article",
    title: "Nexus Mutual — Guia de Seguros DeFi 2026",
    description: "Nexus Mutual: protocolos de seguro DeFi, comparação de cobertura e avaliação de risco de contratos inteligentes.",
    url: "https://degen0x.com/pt-br/insurance/reviews/nexus-mutual",
    locale: "pt_BR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Nexus Mutual — Guia de Seguros DeFi 2026", description: "Nexus Mutual: protocolos de seguro DeFi, comparação de cobertura e avaliação de risco de contratos inteligentes." },
  alternates: {
    canonical: "/pt-br/insurance/reviews/nexus-mutual",
    languages: { "en": "/insurance/reviews/nexus-mutual", "tr": "/tr/insurance/reviews/nexus-mutual", "vi": "/vi/insurance/reviews/nexus-mutual", "pt-BR": "/pt-br/insurance/reviews/nexus-mutual", "x-default": "/insurance/reviews/nexus-mutual" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://degen0x.com/pt-br" },
    { "@type": "ListItem", position: 2, name: "Seguros", item: "https://degen0x.com/pt-br/insurance" },
    { "@type": "ListItem", position: 3, name: "Nexus Mutual — Guia de Seguros DeFi 2026" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Nexus Mutual — Guia de Seguros DeFi 2026",
  description: "Nexus Mutual: protocolos de seguro DeFi, comparação de cobertura e avaliação de risco de contratos inteligentes.",
  url: "https://degen0x.com/pt-br/insurance/reviews/nexus-mutual",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Para que serve seguro DeFi?", "answer": "Protege contra hacks de contratos inteligentes, falhas de protocolo e eventos de de-peg de stablecoin. Você paga prêmio para comprar cobertura contra riscos específicos." },
  { "question": "Quais riscos podem ser segurados?", "answer": "Tipos: exploit de contrato, erro de oracle, hack de bridge, de-peg de stablecoin e encerramento de protocolo. Cada tipo tem prêmios e condições diferentes." },
  { "question": "Quanto custa seguro DeFi?", "answer": "Prêmios geralmente 2-10% ao ano, variando conforme valor segurado, prazo e score de risco do protocolo. Protocolos com TVL alto e múltiplas auditorias tendem a ter prêmios menores." }
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
              { label: "Seguros", href: "/pt-br/insurance" },
              { label: "Nexus Mutual" }
          ]} />
          <article className="mt-8" lang="pt-BR">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇧🇷 Português (Brasil)</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Intermediário</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Nexus Mutual — Guia de Seguros DeFi 2026</h1>
            <p className="text-lg text-[#8b949e] mb-10">Nexus Mutual: protocolos de seguro DeFi, comparação de cobertura e avaliação de risco de contratos inteligentes.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">O Que É Seguro DeFi?</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Guia de seguro DeFi sobre Nexus Mutual: protocolos de seguro descentralizado que protegem contra exploits de contratos inteligentes, hacks e falhas de protocolo.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Tipos de Cobertura e Comparação</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Tipos de cobertura DeFi: risco de contrato inteligente, risco de de-peg de stablecoin, proteção contra hack de bridge e seguro de encerramento de protocolo.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Cálculo de Prêmio</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Fatores que afetam prêmios de seguro DeFi: valor da cobertura, duração, score de risco do protocolo e histórico de claims. Análise custo-benefício para decisão correta.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {[
                  { question: "Para que serve seguro DeFi?", answer: "Protege contra hacks de contratos inteligentes, falhas de protocolo e eventos de de-peg de stablecoin. Você paga prêmio para comprar cobertura contra riscos específicos." },
                  { question: "Quais riscos podem ser segurados?", answer: "Tipos: exploit de contrato, erro de oracle, hack de bridge, de-peg de stablecoin e encerramento de protocolo. Cada tipo tem prêmios e condições diferentes." },
                  { question: "Quanto custa seguro DeFi?", answer: "Prêmios geralmente 2-10% ao ano, variando conforme valor segurado, prazo e score de risco do protocolo. Protocolos com TVL alto e múltiplas auditorias tendem a ter prêmios menores." }
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
