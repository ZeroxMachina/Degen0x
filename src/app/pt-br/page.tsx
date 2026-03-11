import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CryptoDegen em Português — Comparar Exchanges, Wallets e DeFi no Brasil",
  description:
    "CryptoDegen é seu guia confiável para cripto em português. Compare exchanges, wallets, protocolos DeFi e mais. Avaliações de especialistas, ferramentas interativas e guias completos para o mercado brasileiro.",
  alternates: { canonical: "https://cryptodegen.com/pt-br" },
  openGraph: {
    title: "CryptoDegen em Português — Seu Guia de Cripto no Brasil",
    description: "Compare as melhores exchanges, wallets e protocolos DeFi. Tudo em português, feito para o mercado brasileiro.",
    locale: "pt_BR",
    type: "website",
  },
};

const CATEGORIAS = [
  {
    nome: "Exchanges de Cripto",
    desc: "Compare as melhores exchanges por taxas, segurança e moedas disponíveis no Brasil",
    href: "/exchanges/best",
    emoji: "🔀",
    color: "#6366f1",
  },
  {
    nome: "Wallets de Cripto",
    desc: "As melhores carteiras frias e quentes para guardar seus ativos digitais com segurança",
    href: "/wallets/best",
    emoji: "👛",
    color: "#06b6d4",
  },
  {
    nome: "DeFi e Empréstimos",
    desc: "Os melhores protocolos DeFi para ganhar rendimento e obter empréstimos cripto",
    href: "/defi-lending/best",
    emoji: "⚡",
    color: "#22c55e",
  },
  {
    nome: "Investir em Cripto",
    desc: "Guias completos para investir em Bitcoin, Ethereum e altcoins com confiança",
    href: "/investing",
    emoji: "📈",
    color: "#f59e0b",
  },
  {
    nome: "Impostos sobre Cripto",
    desc: "Tudo que você precisa saber sobre impostos em criptomoedas no Brasil",
    href: "/taxes",
    emoji: "🧾",
    color: "#f0883e",
  },
  {
    nome: "Ferramentas Gratuitas",
    desc: "Calculadoras, rastreadores de preços e muito mais — tudo gratuito",
    href: "/tools",
    emoji: "🛠️",
    color: "#bc8cff",
  },
  {
    nome: "NFTs",
    desc: "Guias completos sobre NFTs, mercados e como comprar com segurança",
    href: "/nfts",
    emoji: "🖼️",
    color: "#f85149",
  },
  {
    nome: "Aprender Cripto",
    desc: "Do básico ao avançado — aprenda blockchain, DeFi, Web3 em português",
    href: "/learn",
    emoji: "🎓",
    color: "#3fb950",
  },
  {
    nome: "Staking e Renda Passiva",
    desc: "As melhores plataformas de staking e como ganhar renda passiva com cripto",
    href: "/investing/best/staking",
    emoji: "💰",
    color: "#f7931a",
  },
];

const GUIAS_POPULARES = [
  { titulo: "Melhores Exchanges de Cripto 2026", href: "/exchanges/best", tag: "Mais Popular" },
  { titulo: "Como Comprar Bitcoin no Brasil", href: "/investing/learn/how-to-invest-in-bitcoin", tag: "Iniciante" },
  { titulo: "O que é DeFi — Guia Completo", href: "/learn/what-is-defi", tag: "DeFi" },
  { titulo: "Guia de Impostos sobre Cripto", href: "/taxes/learn/crypto-tax-guide", tag: "Fiscal" },
  { titulo: "Melhores Carteiras de Hardware", href: "/wallets/best/hardware", tag: "Segurança" },
  { titulo: "Calculadora de DCA para Bitcoin", href: "/tools/dca-calculator", tag: "Ferramenta" },
  { titulo: "Guia Completo de NFTs", href: "/nfts/learn/nft-beginners-guide", tag: "NFTs" },
  { titulo: "O que é Web3?", href: "/learn/what-is-web3", tag: "Web3" },
];

const FERRAMENTAS = [
  { titulo: "Conversor de Cripto", href: "/tools/converter", emoji: "🔄", desc: "Converta BTC, ETH e 10+ moedas para BRL" },
  { titulo: "Calculadora DCA", href: "/tools/dca-calculator", emoji: "📊", desc: "Planeje aportes mensais com precisão" },
  { titulo: "Índice Medo & Ganância", href: "/tools/fear-greed-timeline", emoji: "😱", desc: "Monitore o sentimento do mercado" },
  { titulo: "Calculadora de Staking", href: "/tools/staking-rewards", emoji: "💰", desc: "Calcule recompensas de staking" },
  { titulo: "Rastreador de Gas", href: "/tools/gas-tracker", emoji: "⛽", desc: "Taxas de transação Ethereum em tempo real" },
  { titulo: "Trivia Cripto Diário", href: "/learn/daily-trivia", emoji: "🧠", desc: "Teste seus conhecimentos cripto" },
];

export default function PortuguesLandingPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, #009c3b 6%, transparent), color-mix(in srgb, #ffdf00 4%, transparent))",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
              style={{ background: "#009c3b20", color: "#009c3b", border: "1px solid #009c3b30" }}
            >
              🇧🇷 EM PORTUGUÊS DO BRASIL
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Seu Guia Confiável</span>
              <br />
              <span style={{ color: "var(--color-text)" }}>para o Mundo Cripto</span>
            </h1>
            <p
              className="text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Compare exchanges, wallets, protocolos DeFi e muito mais. Avaliações de especialistas,
              ferramentas interativas e guias completos para tomar melhores decisões no mercado cripto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/exchanges/best"
                className="affiliate-cta px-8 py-3 rounded-xl text-white font-semibold text-lg"
              >
                Comparar Exchanges
              </Link>
              <Link
                href="/tools"
                className="glass px-8 py-3 rounded-xl font-semibold text-lg"
                style={{ color: "var(--color-text)" }}
              >
                Ferramentas Grátis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="section-glass border-y border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "2.400+", label: "Páginas e avaliações" },
              { num: "65+", label: "Ferramentas interativas" },
              { num: "265+", label: "Guias educativos" },
              { num: "223", label: "Termos no glossário" },
            ].map((s) => (
              <div key={s.num}>
                <div className="text-2xl font-black" style={{ color: "var(--color-primary)" }}>{s.num}</div>
                <div className="text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ferramentas rápidas */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "var(--color-text)" }}>
          Ferramentas Mais Usadas
        </h2>
        <p className="text-center mb-10" style={{ color: "var(--color-text-secondary)" }}>
          Acesso rápido às nossas ferramentas mais populares — todas gratuitas, sem cadastro.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FERRAMENTAS.map((f) => (
            <Link key={f.href} href={f.href} className="glass p-5 card-hover flex items-start gap-4">
              <div className="text-3xl">{f.emoji}</div>
              <div>
                <h3 className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>{f.titulo}</h3>
                <p className="text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>{f.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categorias */}
      <section className="section-glass">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "var(--color-text)" }}>
            Explorar por Categoria
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            De exchanges a impostos, carteiras a DeFi — cobrimos todos os aspectos do ecossistema cripto.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIAS.map((cat) => (
              <Link key={cat.href} href={cat.href} className="glass p-6 rounded-xl card-hover">
                <div className="text-3xl mb-3">{cat.emoji}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                  {cat.nome}
                </h3>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guias populares */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "var(--color-text)" }}>
          Guias Mais Populares — Março 2026
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {GUIAS_POPULARES.map((guia) => (
            <Link
              key={guia.href}
              href={guia.href}
              className="glass-subtle p-4 card-hover text-center rounded-xl"
            >
              <span
                className="glass-pill inline-block text-xs font-semibold px-2 py-1 mb-2 rounded-full"
                style={{ color: "var(--color-primary)" }}
              >
                {guia.tag}
              </span>
              <h3 className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                {guia.titulo}
              </h3>
              <span
                className="text-xs mt-2 block"
                style={{ color: "var(--color-primary)" }}
              >
                Ler guia →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brasil-specific content */}
      <section className="section-glass">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "var(--color-text)" }}>
            🇧🇷 Cripto no Brasil — O Que Você Precisa Saber
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <div className="text-2xl mb-3">🏦</div>
              <h3 className="font-bold mb-2" style={{ color: "var(--color-text)" }}>Regulamentação no Brasil</h3>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                O Brasil regulamentou criptomoedas em 2023 com a Lei das Criptomoedas. A Receita Federal exige
                declaração de ativos acima de R$5.000. Saiba mais nos nossos guias de conformidade.
              </p>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="text-2xl mb-3">💸</div>
              <h3 className="font-bold mb-2" style={{ color: "var(--color-text)" }}>PIX e Cripto</h3>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                Muitas exchanges no Brasil aceitam PIX para depósitos instantâneos. Exchanges como Mercado
                Bitcoin, Binance e Coinbase aceitam reais (BRL) via PIX e TED.
              </p>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="font-bold mb-2" style={{ color: "var(--color-text)" }}>Declarar no IR</h3>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                Ganhos de capital em cripto são tributados de 15% a 22,5% no Brasil. Operações acima de R$35.000/mês
                precisam ser declaradas mensalmente pelo GCAP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="section-glass">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--color-text)" }}>
            Por Que Confiar na CryptoDegen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⭐",
                title: "Avaliações Independentes",
                desc: "Nossa equipe editorial avalia cada produto de forma independente com uma metodologia rigorosa e transparente. Nunca deixamos anunciantes influenciar nossas notas.",
              },
              {
                icon: "🔍",
                title: "Análise Baseada em Dados",
                desc: "Analisamos estruturas de taxas reais, auditorias de segurança, dados on-chain e experiências de usuários para fornecer comparações precisas e atualizadas.",
              },
              {
                icon: "🚀",
                title: "Equipe Especializada",
                desc: "Nossos analistas têm ampla experiência em trading de cripto, DeFi, desenvolvimento blockchain e análise financeira aplicada ao mercado brasileiro.",
              },
            ].map((item) => (
              <div key={item.title} className="glass p-8 text-center card-hover rounded-xl">
                <div
                  className="w-16 h-16 rounded-full glass flex items-center justify-center mx-auto mb-4"
                  style={{ boxShadow: "0 4px 20px #6366f120" }}
                >
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-text)" }}>{item.title}</h3>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="glass p-8 rounded-2xl text-center"
          style={{ background: "linear-gradient(135deg, #6366f108, #06b6d408)" }}
        >
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-text)" }}>
            📬 Fique por Dentro do Mercado Cripto
          </h2>
          <p className="mb-6" style={{ color: "var(--color-text-secondary)" }}>
            Receba análises semanais, alertas de mercado e as melhores oportunidades DeFi direto no seu email.
          </p>
          <Link
            href="/community"
            className="affiliate-cta px-8 py-3 rounded-xl text-white font-semibold inline-block"
          >
            Assinar Newsletter Gratuita
          </Link>
        </div>
      </section>

      {/* Footer disclaimer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-center">
        <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
          A CryptoDegen é um site informativo. Nada neste site constitui assessoria financeira ou fiscal.
          Investir em criptomoedas envolve alto risco de perda.{" "}
          <Link href="/privacy" style={{ color: "var(--color-primary)" }}>Política de Privacidade</Link>
          {" · "}
          <Link href="/terms" style={{ color: "var(--color-primary)" }}>Termos de Uso</Link>
        </p>
      </div>
    </div>
  );
}
