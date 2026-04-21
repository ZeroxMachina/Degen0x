import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "degen0x Community — Ask, Discuss, Learn with Fellow Degens — Guia da Comunidade Cripto | Degen0x",
  description: "Guia completo sobre degen0x Community — Ask, Discuss, Learn with Fellow Degens em português. A CVM e o Banco Central regulamentam ativos digitais no Brasil sob ",
  openGraph: {
    type: "article",
    title: "degen0x Community — Ask, Discuss, Learn with Fellow Degens — Guia da Comunidade Cripto",
    description: "Guia completo sobre degen0x Community — Ask, Discuss, Learn with Fellow Degens em português. A CVM e o Banco Central reg",
    url: "https://degen0x.com/pt-br/community",
    locale: "pt_BR",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "degen0x Community — Ask, Discuss, Learn with Fellow Degens — Guia da Comunidade Cripto", description: "Guia completo sobre degen0x Community — Ask, Discuss, Learn with Fellow Degens em português. A CVM e o Banco Central reg" },
  alternates: {
    canonical: "/pt-br/community",
    languages: { "en": "/community", "tr": "/tr/community", "vi": "/vi/community", "pt-BR": "/pt-br/community", "x-default": "/community" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://degen0x.com/pt-br" },
    { "@type": "ListItem", position: 2, name: "Comunidade", item: "https://degen0x.com/pt-br/community" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "degen0x Community — Ask, Discuss, Learn with Fellow Degens — Guia da Comunidade Cripto",
  description: "Guia completo sobre degen0x Community — Ask, Discuss, Learn with Fellow Degens em português. A CVM e o Banco Central regulamentam ativos digitais no Brasil sob ",
  url: "https://degen0x.com/pt-br/community",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Como participar da comunidade?", "answer": "Comece seguindo Discord, Telegram e Twitter/X oficiais. Fóruns e meetups locais também são valiosos." },
  { "question": "Quais os benefícios de participar?", "answer": "Acesso antecipado a informações, networking, oportunidades de airdrop, participação em governança e desenvolvimento profissional." }
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
              { label: "Comunidade", href: "/pt-br/community" }
          ]} />
          <article className="mt-8" lang="pt-BR">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇧🇷 Português (Brasil)</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Intermediário</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">degen0x Community — Ask, Discuss, Learn with Fellow Degens — Guia da Comunidade Cripto</h1>
            <p className="text-lg text-[#8b949e] mb-10">Guia completo sobre degen0x Community — Ask, Discuss, Learn with Fellow Degens em português. A CVM e o Banco Central regulamentam ativos digitais no Brasil sob o Marco Legal das Criptomoedas (Lei 14.478/2022).</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Guia da Comunidade</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Guia completo sobre a comunidade degen0x Community — Ask, Discuss, Learn with Fellow Degens: servidores Discord, grupos Telegram, contas Twitter/X e recursos de fórum.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Participação e Contribuição</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Como contribuir para a comunidade cripto: votações de governança, programas de bug bounty, produção de conteúdo e contribuições de desenvolvimento.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {[
                  { question: "Como participar da comunidade?", answer: "Comece seguindo Discord, Telegram e Twitter/X oficiais. Fóruns e meetups locais também são valiosos." },
                  { question: "Quais os benefícios de participar?", answer: "Acesso antecipado a informações, networking, oportunidades de airdrop, participação em governança e desenvolvimento profissional." }
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
