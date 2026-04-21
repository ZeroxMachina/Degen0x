import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "BitPay Kinh Doanh — Cơ Hội Kinh Doanh Web3 | Degen0x",
  description: "BitPay Kinh Doanh: mô hình kinh doanh Web3, token economics và cấu trúc tổ chức phi tập trung.",
  openGraph: {
    type: "article",
    title: "BitPay Kinh Doanh — Cơ Hội Kinh Doanh Web3",
    description: "BitPay Kinh Doanh: mô hình kinh doanh Web3, token economics và cấu trúc tổ chức phi tập trung.",
    url: "https://degen0x.com/vi/web3-business/reviews/bitpay-business",
    locale: "vi_VN",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "BitPay Kinh Doanh — Cơ Hội Kinh Doanh Web3", description: "BitPay Kinh Doanh: mô hình kinh doanh Web3, token economics và cấu trúc tổ chức phi tập trung." },
  alternates: {
    canonical: "/vi/web3-business/reviews/bitpay-business",
    languages: { "en": "/web3-business/reviews/bitpay-business", "tr": "/tr/web3-business/reviews/bitpay-business", "vi": "/vi/web3-business/reviews/bitpay-business", "pt-BR": "/pt-br/web3-business/reviews/bitpay-business", "x-default": "/web3-business/reviews/bitpay-business" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: "https://degen0x.com/vi" },
    { "@type": "ListItem", position: 2, name: "Web3 Kinh Doanh", item: "https://degen0x.com/vi/web3-business" },
    { "@type": "ListItem", position: 3, name: "BitPay Kinh Doanh — Cơ Hội Kinh Doanh Web3" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "BitPay Kinh Doanh — Cơ Hội Kinh Doanh Web3",
  description: "BitPay Kinh Doanh: mô hình kinh doanh Web3, token economics và cấu trúc tổ chức phi tập trung.",
  url: "https://degen0x.com/vi/web3-business/reviews/bitpay-business",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Web3 khác gì mô hình kinh doanh truyền thống?", "answer": "Web3 chia sẻ giá trị với cộng đồng (token economics), phi tập trung hóa quản trị (DAO) và loại bỏ trung gian (peer-to-peer). Tạo ra khác biệt cơ bản từ mô hình doanh thu đến cấu trúc tổ chức." },
  { "question": "Thiết kế token economics thế nào?", "answer": "Tokenomics thành công: cơ chế cung (cố định vs lạm phát), kế hoạch phân phối, vesting schedule, định nghĩa utility và cơ chế nắm bắt giá trị." },
  { "question": "Thành lập DAO có khó không?", "answer": "Công cụ DAO (Snapshot, Tally, Aragon) đã đơn giản hóa kỹ thuật. Phần khó là xã hội: thiết kế quản trị hiệu quả, khuyến khích tham gia và phối hợp quyết định phi tập trung." }
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
              { label: "Web3 Kinh Doanh", href: "/vi/web3-business" },
              { label: "BitPay Kinh Doanh" }
          ]} />
          <article className="mt-8" lang="vi">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇻🇳 Tiếng Việt</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Trung Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">BitPay Kinh Doanh — Cơ Hội Kinh Doanh Web3</h1>
            <p className="text-lg text-[#8b949e] mb-10">BitPay Kinh Doanh: mô hình kinh doanh Web3, token economics và cấu trúc tổ chức phi tập trung.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Mô Hình Kinh Doanh Web3</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Mô hình kinh doanh Web3 trong phạm vi BitPay Kinh Doanh: cấu trúc DAO, token economics, marketplace phi tập trung và creator economy. Việt Nam là một trong những quốc gia dẫn đầu về áp dụng blockchain ở Đông Nam Á với nhiều dự án nổi bật.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Token Economics và Tạo Giá Trị</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Thiết kế token economics cho mô hình Web3 thành công: utility token vs governance token, chiến lược phân phối, vesting schedule và cơ chế burn.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">DAO và Quản Trị Phi Tập Trung</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Cấu trúc DAO và mô hình quản trị: cơ chế bỏ phiếu, quản lý kho bạc, hệ thống thưởng contributor và quy trình quyết định phi tập trung.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {[
                  { question: "Web3 khác gì mô hình kinh doanh truyền thống?", answer: "Web3 chia sẻ giá trị với cộng đồng (token economics), phi tập trung hóa quản trị (DAO) và loại bỏ trung gian (peer-to-peer). Tạo ra khác biệt cơ bản từ mô hình doanh thu đến cấu trúc tổ chức." },
                  { question: "Thiết kế token economics thế nào?", answer: "Tokenomics thành công: cơ chế cung (cố định vs lạm phát), kế hoạch phân phối, vesting schedule, định nghĩa utility và cơ chế nắm bắt giá trị." },
                  { question: "Thành lập DAO có khó không?", answer: "Công cụ DAO (Snapshot, Tally, Aragon) đã đơn giản hóa kỹ thuật. Phần khó là xã hội: thiết kế quản trị hiệu quả, khuyến khích tham gia và phối hợp quyết định phi tập trung." }
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
