import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "degen0x Community — Hướng Dẫn Cộng Đồng Crypto | Degen0x",
  description: "Hướng dẫn toàn diện về degen0x Community bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không cấm giao dịch cá nhân.",
  openGraph: {
    type: "article",
    title: "degen0x Community — Hướng Dẫn Cộng Đồng Crypto",
    description: "Hướng dẫn toàn diện về degen0x Community bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điệ",
    url: "https://degen0x.com/vi/community",
    locale: "vi_VN",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "degen0x Community — Hướng Dẫn Cộng Đồng Crypto", description: "Hướng dẫn toàn diện về degen0x Community bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điệ" },
  alternates: {
    canonical: "/vi/community",
    languages: { "en": "/community", "tr": "/tr/community", "vi": "/vi/community", "pt-BR": "/pt-br/community", "x-default": "/community" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: "https://degen0x.com/vi" },
    { "@type": "ListItem", position: 2, name: "Cộng Đồng", item: "https://degen0x.com/vi/community" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "degen0x Community — Hướng Dẫn Cộng Đồng Crypto",
  description: "Hướng dẫn toàn diện về degen0x Community bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không cấm giao dịch cá nhân.",
  url: "https://degen0x.com/vi/community",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Tham gia cộng đồng thế nào?", "answer": "Bắt đầu với Discord, Telegram và Twitter/X chính thức. Forum và meetup địa phương cũng là nguồn tài nguyên quý giá." },
  { "question": "Lợi ích khi tham gia cộng đồng?", "answer": "Tiếp cận thông tin sớm, networking, cơ hội airdrop, tham gia governance và phát triển chuyên môn." }
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
              { label: "Cộng Đồng", href: "/vi/community" }
          ]} />
          <article className="mt-8" lang="vi">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇻🇳 Tiếng Việt</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Trung Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">degen0x Community — Hướng Dẫn Cộng Đồng Crypto</h1>
            <p className="text-lg text-[#8b949e] mb-10">Hướng dẫn toàn diện về degen0x Community bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không cấm giao dịch cá nhân.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Hướng Dẫn Cộng Đồng</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Hướng dẫn toàn diện về cộng đồng degen0x Community: Discord, Telegram, tài khoản Twitter/X và nguồn forum.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Tham Gia và Đóng Góp</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Cách đóng góp cho cộng đồng crypto: bỏ phiếu governance, chương trình bug bounty, sản xuất nội dung và đóng góp phát triển.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {[
                  { question: "Tham gia cộng đồng thế nào?", answer: "Bắt đầu với Discord, Telegram và Twitter/X chính thức. Forum và meetup địa phương cũng là nguồn tài nguyên quý giá." },
                  { question: "Lợi ích khi tham gia cộng đồng?", answer: "Tiếp cận thông tin sớm, networking, cơ hội airdrop, tham gia governance và phát triển chuyên môn." }
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
              <h2 className="text-2xl font-semibold text-white mb-4">Nội Dung Liên Quan</h2>
              <ul className="list-disc list-inside text-purple-300 space-y-2">
                <li><a className="hover:underline" href="/vi/learn">Học</a></li>
                <li><a className="hover:underline" href="/vi/tools">Công Cụ</a></li>
                <li><a className="hover:underline" href="/vi/exchanges/best">Sàn Giao Dịch</a></li>
              </ul>
            </section>
            <div style={{ background: "#1a1625", border: "1px solid #2d2254", borderRadius: 8, padding: "16px 20px", marginTop: 40, marginBottom: 20 }}>
              <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: "#a78bfa" }}>Tuyên bố miễn trừ:</strong> Hướng dẫn này chỉ mang tính chất tham khảo và không phải là lời khuyên tài chính. Tiền điện tử tiềm ẩn rủi ro đáng kể — hãy tự nghiên cứu trước khi đưa ra bất kỳ quyết định nào.
              </p>
            </div>
          </article>
          <BackToTop />
        </div>
      </main>
    </>
  );
}
