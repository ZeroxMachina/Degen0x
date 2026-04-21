import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Web3 Product Management Khóa Học — Khóa Học Crypto | Degen0x",
  description: "Hướng dẫn toàn diện về Web3 Product Management Khóa Học bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không cấm giao",
  openGraph: {
    type: "article",
    title: "Web3 Product Management Khóa Học — Khóa Học Crypto",
    description: "Hướng dẫn toàn diện về Web3 Product Management Khóa Học bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức côn",
    url: "https://degen0x.com/vi/courses/web3-product-management-course",
    locale: "vi_VN",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Web3 Product Management Khóa Học — Khóa Học Crypto", description: "Hướng dẫn toàn diện về Web3 Product Management Khóa Học bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức côn" },
  alternates: {
    canonical: "/vi/courses/web3-product-management-course",
    languages: { "en": "/courses/web3-product-management-course", "tr": "/tr/courses/web3-product-management-course", "vi": "/vi/courses/web3-product-management-course", "pt-BR": "/pt-br/courses/web3-product-management-course", "x-default": "/courses/web3-product-management-course" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: "https://degen0x.com/vi" },
    { "@type": "ListItem", position: 2, name: "Khóa Học", item: "https://degen0x.com/vi/courses" },
    { "@type": "ListItem", position: 3, name: "Web3 Product Management Khóa Học — Khóa Học Crypto" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Web3 Product Management Khóa Học — Khóa Học Crypto",
  description: "Hướng dẫn toàn diện về Web3 Product Management Khóa Học bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không cấm giao",
  url: "https://degen0x.com/vi/courses/web3-product-management-course",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Khóa học phù hợp cho người mới không?", "answer": "Chương trình từ cơ bản đến nâng cao, không yêu cầu kiến thức crypto trước đó. Bao gồm ví dụ thực hành và kịch bản thực tế." },
  { "question": "Học xong được gì?", "answer": "Năng lực phân tích thị trường, đưa ra quyết định đầu tư sáng suốt và sử dụng giao thức DeFi an toàn." }
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
              { label: "Khóa Học", href: "/vi/courses" },
              { label: "Web3 Product Management Khóa Học" }
          ]} />
          <article className="mt-8" lang="vi">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇻🇳 Tiếng Việt</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Trung Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Web3 Product Management Khóa Học — Khóa Học Crypto</h1>
            <p className="text-lg text-[#8b949e] mb-10">Hướng dẫn toàn diện về Web3 Product Management Khóa Học bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không cấm giao dịch cá nhân.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Nội Dung Khóa Học</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Khóa học crypto Web3 Product Management Khóa Học: chương trình toàn diện từ khái niệm cơ bản đến chiến lược nâng cao. Được hỗ trợ bằng ví dụ thực hành và kịch bản thị trường thực tế.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Đối Tượng Phù Hợp</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Khóa học phù hợp cho cả người mới bắt đầu và nhà đầu tư trung cấp muốn nâng cao kiến thức. Kiến thức thực tiễn và ví dụ thực tế.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {[
                  { question: "Khóa học phù hợp cho người mới không?", answer: "Chương trình từ cơ bản đến nâng cao, không yêu cầu kiến thức crypto trước đó. Bao gồm ví dụ thực hành và kịch bản thực tế." },
                  { question: "Học xong được gì?", answer: "Năng lực phân tích thị trường, đưa ra quyết định đầu tư sáng suốt và sử dụng giao thức DeFi an toàn." }
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
