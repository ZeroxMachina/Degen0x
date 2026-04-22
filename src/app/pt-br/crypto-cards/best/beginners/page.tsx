import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Cartões for Iniciantes — Comparação e Análise de Cartões Cripto | Degen0x",
  description: "Comparação Cartões for Iniciantes: taxas anuais, cashback, países suportados e experiência de uso no Brasil.",
  openGraph: {
    type: "article",
    title: "Cartões for Iniciantes — Comparação e Análise de Cartões Cripto",
    description: "Comparação Cartões for Iniciantes: taxas anuais, cashback, países suportados e experiência de uso no Brasil.",
    url: "https://degen0x.com/pt-br/crypto-cards/best/beginners",
    locale: "pt_BR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Cartões for Iniciantes — Comparação e Análise de Cartões Cripto", description: "Comparação Cartões for Iniciantes: taxas anuais, cashback, países suportados e experiência de uso no Brasil." },
  alternates: {
    canonical: "/pt-br/crypto-cards/best/beginners",
    languages: { "en": "/crypto-cards/best/beginners", "tr": "/tr/crypto-cards/best/beginners", "vi": "/vi/crypto-cards/best/beginners", "pt-BR": "/pt-br/crypto-cards/best/beginners", "x-default": "/crypto-cards/best/beginners" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://degen0x.com/pt-br" },
    { "@type": "ListItem", position: 2, name: "Cartões Cripto", item: "https://degen0x.com/pt-br/crypto-cards" },
    { "@type": "ListItem", position: 3, name: "Cartões for Iniciantes — Comparação e Análise de Cartões Cri" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Cartões for Iniciantes — Comparação e Análise de Cartões Cripto",
  description: "Comparação Cartões for Iniciantes: taxas anuais, cashback, países suportados e experiência de uso no Brasil.",
  url: "https://degen0x.com/pt-br/crypto-cards/best/beginners",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Quais são as taxas do cartão Cartões for Iniciantes?", "answer": "Estrutura de taxas: emissão, mensalidade/anuidade, saque em ATM, diferença cambial e spread de conversão crypto-fiat. Atenção às taxas ocultas." },
  { "question": "Com quais criptos posso gastar?", "answer": "Criptos suportadas, conversão automática e taxas de spread. Bitcoin, Ethereum e stablecoins geralmente têm menor spread." },
  { "question": "Posso usar este cartão no Brasil?", "answer": "Cartões cripto como Binance Card e Crypto.com Card permitem gastos em BRL em estabelecimentos que aceitam Mastercard/Visa. Disponibilidade, acesso a ATMs e experiência de gastos em BRL avaliados." },
  { "question": "Como funciona o cashback?", "answer": "Estrutura: taxas de retorno por gastos, requisitos de staking, token de recompensa e condições de uso." }
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
              { label: "Cartões Cripto", href: "/pt-br/crypto-cards" },
              { label: "Cartões for Iniciantes" }
          ]} />
          <article className="mt-8" lang="pt-BR">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇧🇷 Português (Brasil)</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Intermediário</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Cartões for Iniciantes — Comparação e Análise de Cartões Cripto</h1>
            <p className="text-lg text-[#8b949e] mb-10">Comparação Cartões for Iniciantes: taxas anuais, cashback, países suportados e experiência de uso no Brasil.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Avaliação Geral do Cartão Cripto</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Análise completa do cartão Cartões for Iniciantes: tipo de cartão (pré-pago/débito/crédito), redes de pagamento (Visa/Mastercard) e disponibilidade global. Cartões cripto como Binance Card e Crypto.com Card permitem gastos em BRL em estabelecimentos que aceitam Mastercard/Visa.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Taxas e Comparação de Cashback</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Taxas mensais/anuais, limites de saque em ATM, diferença cambial, requisitos de staking e taxas de cashback/recompensas do cartão Cartões for Iniciantes. Atenção às taxas ocultas.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Criptos Suportadas e Conversão</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Criptomoedas que podem ser gastas com o cartão Cartões for Iniciantes, mecanismo de conversão automática (crypto-to-fiat), taxas de spread e moedas fiat suportadas.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Segurança e Experiência do Usuário</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Segurança do cartão (chip, 3D Secure, notificações instantâneas), recursos do app mobile, limites de gastos, bloqueio de cartão e qualidade do suporte ao cliente.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {[
                  { question: "Quais são as taxas do cartão Cartões for Iniciantes?", answer: "Estrutura de taxas: emissão, mensalidade/anuidade, saque em ATM, diferença cambial e spread de conversão crypto-fiat. Atenção às taxas ocultas." },
                  { question: "Com quais criptos posso gastar?", answer: "Criptos suportadas, conversão automática e taxas de spread. Bitcoin, Ethereum e stablecoins geralmente têm menor spread." },
                  { question: "Posso usar este cartão no Brasil?", answer: "Cartões cripto como Binance Card e Crypto.com Card permitem gastos em BRL em estabelecimentos que aceitam Mastercard/Visa. Disponibilidade, acesso a ATMs e experiência de gastos em BRL avaliados." },
                  { question: "Como funciona o cashback?", answer: "Estrutura: taxas de retorno por gastos, requisitos de staking, token de recompensa e condições de uso." }
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
