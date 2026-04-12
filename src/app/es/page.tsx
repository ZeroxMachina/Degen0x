import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from "next/link";

export const metadata: Metadata = {
  title: "degen0x en Español — Comparar Exchanges, Wallets y DeFi",
  description: "degen0x es tu guía de confianza para cripto en español. Compara exchanges, wallets, protocolos DeFi y más. Reseñas de expertos, herramientas interactivas y",
  alternates: { canonical: "https://degen0x.com/es" },
};

const CATEGORIAS = [
  { nombre: "Exchanges de Cripto", desc: "Compara los mejores exchanges por comisiones, seguridad y monedas disponibles", href: "/exchanges/best", emoji: "🔀", color: "#6366f1" },
  { nombre: "Wallets de Cripto", desc: "Las mejores billeteras frías y calientes para guardar tus activos digitales", href: "/wallets/best", emoji: "👛", color: "#06b6d4" },
  { nombre: "DeFi y Préstamos", desc: "Los mejores protocolos DeFi para ganar rendimiento y tomar préstamos", href: "/defi-lending/best", emoji: "⚡", color: "#22c55e" },
  { nombre: "Invertir en Cripto", desc: "Guías completas para invertir en Bitcoin, Ethereum y altcoins con confianza", href: "/investing", emoji: "📈", color: "#f59e0b" },
  { nombre: "Impuestos Cripto", desc: "Todo lo que necesitas saber sobre impuestos a las criptomonedas", href: "/taxes", emoji: "🧾", color: "#f0883e" },
  { nombre: "Herramientas Gratuitas", desc: "Calculadoras, rastreadores de precios y más — todo gratis", href: "/tools", emoji: "🛠️", color: "#bc8cff" },
];

const GUIAS_POPULARES = [
  { titulo: "Mejores Exchanges de Cripto 2026", href: "/exchanges/best" },
  { titulo: "Cómo Comprar Bitcoin en 2026", href: "/investing/learn/how-to-invest-in-bitcoin" },
  { titulo: "Qué es DeFi — Guía Completa", href: "/learn/what-is-defi" },
  { titulo: "Guía de Impuestos Cripto", href: "/taxes/learn/crypto-tax-guide" },
  { titulo: "Mejores Wallets de Hardware", href: "/wallets/best/hardware" },
  { titulo: "Calculadora DCA para Bitcoin", href: "/tools/dca-calculator" },
];

export default function EspanolLandingPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="es"
      />      {/* Hero */}
      <section className="relative overflow-hidden" style={{
        background: "linear-gradient(135deg, color-mix(in srgb, #6366f1 8%, transparent), color-mix(in srgb, #06b6d4 5%, transparent))",
        borderBottom: "1px solid var(--color-border)"
      }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
              style={{ background: "#6366f120", color: "#818cf8", border: "1px solid #6366f130" }}>
              EN ESPAÑOL
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Tu Guía de Confianza</span>
              <br />
              <span style={{ color: "var(--color-text)" }}>para el Mundo Cripto</span>
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
              Compara exchanges, wallets, protocolos DeFi y más. Reseñas de expertos, herramientas interactivas
              y guías completas para tomar mejores decisiones en cripto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/exchanges/best" className="affiliate-cta px-8 py-3 rounded-xl text-white font-semibold text-lg">
                Comparar Exchanges
              </Link>
              <Link href="/tools/degen-score" className="glass px-8 py-3 rounded-xl font-semibold text-lg" style={{ color: "var(--color-text)" }}>
                Herramientas Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "var(--color-text)" }}>
          Explora por Categoría
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
          Desde exchanges hasta impuestos, wallets hasta DeFi — cubrimos todos los aspectos del ecosistema cripto.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIAS.map((cat) => (
            <Link key={cat.href} href={cat.href} className="glass p-6 rounded-xl card-hover">
              <div className="text-3xl mb-3">{cat.emoji}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-text)" }}>{cat.nombre}</h3>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Guías populares */}
      <section className="section-glass">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "var(--color-text)" }}>
            Guías Populares de Marzo 2026
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {GUIAS_POPULARES.map((guia) => (
              <Link key={guia.href} href={guia.href}
                className="glass-subtle p-4 card-hover text-center rounded-xl"
                style={{ color: "var(--color-primary)" }}>
                <h3 className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>{guia.titulo}</h3>
                <span className="text-xs mt-2 block">Leer guía {"→"}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="section-glass">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "var(--color-text)" }}>
            Por Qué Confiar en degen0x?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { num: "2,400+", label: "Páginas y reseñas completas" },
              { num: "60+", label: "Herramientas interactivas gratuitas" },
              { num: "265+", label: "Artículos educativos en profundidad" },
            ].map((s) => (
              <div key={s.num} className="glass p-8 text-center card-hover rounded-xl">
                <div className="text-5xl font-bold mb-2" style={{ color: "var(--color-primary)" }}>{s.num}</div>
                <p style={{ color: "var(--color-text-secondary)" }}>{s.label}</p>
              </div>
            ))}
          </div>
          <div className="glass p-8 text-center max-w-3xl mx-auto rounded-xl">
            <p className="text-lg" style={{ color: "var(--color-text)" }}>
              La plataforma más completa para comparar productos cripto, aprender conceptos blockchain
              y descubrir las herramientas que necesitas para tener éxito en cripto.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-center">
        <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
          degen0x es un sitio informativo. Nada en este sitio constituye asesoramiento financiero.
          Invertir en criptomonedas implica un alto riesgo de pérdida.{" "}
          <Link href="/es" style={{ color: "var(--color-primary)" }}>Aviso legal completo</Link>
        </p>
      </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "degen0x en Espa\u00f1ol \u2014 Comparar Exchanges, Wallets y DeFi", "description": "degen0x es tu gu\u00eda de confianza para cripto en espa\u00f1ol. Compara exchanges, wallets, protocolos DeFi y m\u00e1s. Rese\u00f1as de expertos, herramientas interactivas y", "url": "https://degen0x.com/es"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Learning Guides
          </Link>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Crypto Tools
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
