import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Ethereum Pectra Nâng Cấp What to Expect — Phân Tích Crypto Mới Nhất | Degen0x",
  description: "Hướng dẫn toàn diện về Ethereum Pectra Nâng Cấp What to Expect bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không c",
  openGraph: {
    type: "article",
    title: "Ethereum Pectra Nâng Cấp What to Expect — Phân Tích Crypto Mới Nhất",
    description: "Hướng dẫn toàn diện về Ethereum Pectra Nâng Cấp What to Expect bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính t",
    url: "https://degen0x.com/vi/blog/ethereum-pectra-upgrade-what-to-expect",
    locale: "vi_VN",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Ethereum Pectra Nâng Cấp What to Expect — Phân Tích Crypto Mới Nhất", description: "Hướng dẫn toàn diện về Ethereum Pectra Nâng Cấp What to Expect bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính t" },
  alternates: {
    canonical: "/vi/blog/ethereum-pectra-upgrade-what-to-expect",
    languages: { "en": "/blog/ethereum-pectra-upgrade-what-to-expect", "tr": "/tr/blog/ethereum-pectra-upgrade-what-to-expect", "vi": "/vi/blog/ethereum-pectra-upgrade-what-to-expect", "pt-BR": "/pt-br/blog/ethereum-pectra-upgrade-what-to-expect", "x-default": "/blog/ethereum-pectra-upgrade-what-to-expect" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: "https://degen0x.com/vi" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://degen0x.com/vi/blog" },
    { "@type": "ListItem", position: 3, name: "Ethereum Pectra Nâng Cấp What to Expect — Phân Tích Crypto M" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Ethereum Pectra Nâng Cấp What to Expect — Phân Tích Crypto Mới Nhất",
  description: "Hướng dẫn toàn diện về Ethereum Pectra Nâng Cấp What to Expect bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không c",
  url: "https://degen0x.com/vi/blog/ethereum-pectra-upgrade-what-to-expect",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Chủ đề này ảnh hưởng thị trường thế nào?", "answer": "Thị trường crypto nhạy cảm với tin tức. Quyết định pháp lý, cập nhật công nghệ và động thái tổ chức có thể tăng biến động giá." },
  { "question": "Theo dõi tin tức crypto ở đâu?", "answer": "Nguồn đáng tin cậy: CoinDesk, The Block, CoinTelegraph và blog chính thức dự án. Cẩn thận với tin đồn mạng xã hội." }
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
              { label: "Blog", href: "/vi/blog" },
              { label: "Ethereum Pectra Nâng Cấp What to Expect" }
          ]} />
          <article className="mt-8" lang="vi">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇻🇳 Tiếng Việt</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Trung Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Ethereum Pectra Nâng Cấp What to Expect — Phân Tích Crypto Mới Nhất</h1>
            <p className="text-lg text-[#8b949e] mb-10">Hướng dẫn toàn diện về Ethereum Pectra Nâng Cấp What to Expect bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không cấm giao dịch cá nhân.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Phân Tích Mới Nhất</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Phân tích thị trường mới nhất và ý kiến chuyên gia về Ethereum Pectra Nâng Cấp What to Expect. Các diễn biến gần đây trên thị trường crypto, đánh giá xu hướng và thông tin thực tiễn cho nhà đầu tư.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Tác Động Thị Trường</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Tác động tiềm năng của chủ đề này lên thị trường crypto: biến động giá, thay đổi khối lượng và kỳ vọng chuyển đổi ngành.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {[
                  { question: "Chủ đề này ảnh hưởng thị trường thế nào?", answer: "Thị trường crypto nhạy cảm với tin tức. Quyết định pháp lý, cập nhật công nghệ và động thái tổ chức có thể tăng biến động giá." },
                  { question: "Theo dõi tin tức crypto ở đâu?", answer: "Nguồn đáng tin cậy: CoinDesk, The Block, CoinTelegraph và blog chính thức dự án. Cẩn thận với tin đồn mạng xã hội." }
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
