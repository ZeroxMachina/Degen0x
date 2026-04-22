import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Cartões for Travel — Guia de Pagamentos com Cripto | Degen0x",
  description: "Cartões for Travel: métodos de pagamento com cripto, plataformas suportadas e guia de uso diário.",
  openGraph: {
    type: "article",
    title: "Cartões for Travel — Guia de Pagamentos com Cripto",
    description: "Cartões for Travel: métodos de pagamento com cripto, plataformas suportadas e guia de uso diário.",
    url: "https://degen0x.com/pt-br/spending/best/travel",
    locale: "pt_BR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Cartões for Travel — Guia de Pagamentos com Cripto", description: "Cartões for Travel: métodos de pagamento com cripto, plataformas suportadas e guia de uso diário." },
  alternates: {
    canonical: "/pt-br/spending/best/travel",
    languages: { "en": "/spending/best/travel", "tr": "/tr/spending/best/travel", "vi": "/vi/spending/best/travel", "pt-BR": "/pt-br/spending/best/travel", "x-default": "/spending/best/travel" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://degen0x.com/pt-br" },
    { "@type": "ListItem", position: 2, name: "Gastos", item: "https://degen0x.com/pt-br/spending" },
    { "@type": "ListItem", position: 3, name: "Cartões for Travel — Guia de Pagamentos com Cripto" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Cartões for Travel — Guia de Pagamentos com Cripto",
  description: "Cartões for Travel: métodos de pagamento com cripto, plataformas suportadas e guia de uso diário.",
  url: "https://degen0x.com/pt-br/spending/best/travel",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "O que posso comprar com cripto?", "answer": "Compras online, reservas de viagem e hotel, gift cards, pagamento de assinaturas e compras em lojas físicas (via cartão cripto)." },
  { "question": "Como funciona Lightning Network?", "answer": "Lightning Network é solução Layer 2 do Bitcoin para pagamentos instantâneos com custo muito baixo. Ideal para gastos pequenos do dia a dia." },
  { "question": "Gastar cripto tem impacto fiscal?", "answer": "Tecnicamente, pagar com cripto é uma venda e pode gerar evento tributável. No Brasil, ganhos com cripto acima de R\$35.000/mês em vendas devem ser declarados à Receita Federal. Registre seus gastos." }
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
              { label: "Gastos", href: "/pt-br/spending" },
              { label: "Cartões for Travel" }
          ]} />
          <article className="mt-8" lang="pt-BR">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇧🇷 Português (Brasil)</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Intermediário</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Cartões for Travel — Guia de Pagamentos com Cripto</h1>
            <p className="text-lg text-[#8b949e] mb-10">Cartões for Travel: métodos de pagamento com cripto, plataformas suportadas e guia de uso diário.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Métodos de Pagamento com Cripto</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Guia de pagamento crypto para Cartões for Travel: pagamentos Lightning Network, cartões de débito cripto, transferências P2P e integrações e-commerce.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Plataformas e Lojas Suportadas</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Plataformas que aceitam pagamento cripto: sites de compras online, plataformas de reserva de viagem, serviços de gift card e soluções para lojas físicas. Cartões cripto como Binance Card e Crypto.com Card permitem gastos em BRL em estabelecimentos que aceitam Mastercard/Visa.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Comparação de Custo e Velocidade</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Comparação de custo e velocidade dos métodos de pagamento cripto: Bitcoin Lightning vs transferência Stablecoin vs pagamento com cartão cripto.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {[
                  { question: "O que posso comprar com cripto?", answer: "Compras online, reservas de viagem e hotel, gift cards, pagamento de assinaturas e compras em lojas físicas (via cartão cripto)." },
                  { question: "Como funciona Lightning Network?", answer: "Lightning Network é solução Layer 2 do Bitcoin para pagamentos instantâneos com custo muito baixo. Ideal para gastos pequenos do dia a dia." },
                  { question: "Gastar cripto tem impacto fiscal?", answer: "Tecnicamente, pagar com cripto é uma venda e pode gerar evento tributável. No Brasil, ganhos com cripto acima de R\$35.000/mês em vendas devem ser declarados à Receita Federal. Registre seus gastos." }
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
