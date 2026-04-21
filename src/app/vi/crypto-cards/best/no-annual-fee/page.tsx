import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Best Free Crypto Cards (No Annual Fee) of — So Sánh và Đánh Giá Thẻ Crypto | Degen0x",
  description: "So sánh Best Free Crypto Cards (No Annual Fee) of: phí hàng năm, tỷ lệ hoàn tiền, quốc gia hỗ trợ và trải nghiệm sử dụng tại Việt Nam.",
  openGraph: {
    type: "article",
    title: "Best Free Crypto Cards (No Annual Fee) of — So Sánh và Đánh Giá Thẻ Crypto",
    description: "So sánh Best Free Crypto Cards (No Annual Fee) of: phí hàng năm, tỷ lệ hoàn tiền, quốc gia hỗ trợ và trải nghiệm sử dụng",
    url: "https://degen0x.com/vi/crypto-cards/best/no-annual-fee",
    locale: "vi_VN",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Best Free Crypto Cards (No Annual Fee) of — So Sánh và Đánh Giá Thẻ Crypto", description: "So sánh Best Free Crypto Cards (No Annual Fee) of: phí hàng năm, tỷ lệ hoàn tiền, quốc gia hỗ trợ và trải nghiệm sử dụng" },
  alternates: {
    canonical: "/vi/crypto-cards/best/no-annual-fee",
    languages: { "en": "/crypto-cards/best/no-annual-fee", "tr": "/tr/crypto-cards/best/no-annual-fee", "vi": "/vi/crypto-cards/best/no-annual-fee", "pt-BR": "/pt-br/crypto-cards/best/no-annual-fee", "x-default": "/crypto-cards/best/no-annual-fee" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: "https://degen0x.com/vi" },
    { "@type": "ListItem", position: 2, name: "Thẻ Crypto", item: "https://degen0x.com/vi/crypto-cards" },
    { "@type": "ListItem", position: 3, name: "Best Free Crypto Cards (No Annual Fee) of — So Sánh và Đánh " }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Best Free Crypto Cards (No Annual Fee) of — So Sánh và Đánh Giá Thẻ Crypto",
  description: "So sánh Best Free Crypto Cards (No Annual Fee) of: phí hàng năm, tỷ lệ hoàn tiền, quốc gia hỗ trợ và trải nghiệm sử dụng tại Việt Nam.",
  url: "https://degen0x.com/vi/crypto-cards/best/no-annual-fee",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Phí thẻ Best Free Crypto Cards (No Annual Fee) of là bao nhiêu?", "answer": "Cấu trúc phí: phí phát hành, phí hàng tháng/năm, phí rút ATM, chênh lệch tỷ giá và spread chuyển đổi crypto-fiat. Chú ý phí ẩn." },
  { "question": "Có thể chi tiêu bằng những crypto nào?", "answer": "Crypto hỗ trợ, cơ chế chuyển đổi tự động và tỷ lệ spread. Bitcoin, Ethereum và stablecoin thường có spread thấp nhất." },
  { "question": "Sử dụng thẻ này tại Việt Nam được không?", "answer": "Thẻ crypto chưa phổ biến rộng rãi tại Việt Nam; nhiều người dùng chuyển đổi crypto sang VND qua P2P trước khi chi tiêu. Đánh giá khả năng sử dụng, truy cập ATM và trải nghiệm chi tiêu." },
  { "question": "Tỷ lệ cashback và thưởng thế nào?", "answer": "Cấu trúc cashback: tỷ lệ hoàn tiền theo chi tiêu, yêu cầu staking, token thưởng và điều kiện sử dụng." }
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
              { label: "Thẻ Crypto", href: "/vi/crypto-cards" },
              { label: "Best Free Crypto Cards (No Annual Fee) of" }
          ]} />
          <article className="mt-8" lang="vi">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇻🇳 Tiếng Việt</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Trung Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Best Free Crypto Cards (No Annual Fee) of — So Sánh và Đánh Giá Thẻ Crypto</h1>
            <p className="text-lg text-[#8b949e] mb-10">So sánh Best Free Crypto Cards (No Annual Fee) of: phí hàng năm, tỷ lệ hoàn tiền, quốc gia hỗ trợ và trải nghiệm sử dụng tại Việt Nam.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Đánh Giá Tổng Quan Thẻ Crypto</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Đánh giá toàn diện thẻ Best Free Crypto Cards (No Annual Fee) of: loại thẻ (trả trước/ghi nợ/tín dụng), mạng thanh toán (Visa/Mastercard) và khả năng sử dụng toàn cầu. Thẻ crypto chưa phổ biến rộng rãi tại Việt Nam; nhiều người dùng chuyển đổi crypto sang VND qua P2P trước khi chi tiêu.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Phí và So Sánh Hoàn Tiền</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Phí hàng tháng/năm, hạn mức rút ATM, chênh lệch tỷ giá, yêu cầu staking và tỷ lệ cashback/thưởng của thẻ Best Free Crypto Cards (No Annual Fee) of. Chú ý các phí ẩn.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Crypto Hỗ Trợ và Chuyển Đổi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Các crypto có thể chi tiêu qua thẻ Best Free Crypto Cards (No Annual Fee) of, cơ chế chuyển đổi tự động (crypto-to-fiat), tỷ lệ spread và tiền tệ fiat hỗ trợ.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Bảo Mật và Trải Nghiệm Người Dùng</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Bảo mật thẻ (chip, 3D Secure, thông báo tức thì), tính năng ứng dụng di động, hạn mức chi tiêu, đóng băng thẻ và chất lượng hỗ trợ khách hàng.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {[
                  { question: "Phí thẻ Best Free Crypto Cards (No Annual Fee) of là bao nhiêu?", answer: "Cấu trúc phí: phí phát hành, phí hàng tháng/năm, phí rút ATM, chênh lệch tỷ giá và spread chuyển đổi crypto-fiat. Chú ý phí ẩn." },
                  { question: "Có thể chi tiêu bằng những crypto nào?", answer: "Crypto hỗ trợ, cơ chế chuyển đổi tự động và tỷ lệ spread. Bitcoin, Ethereum và stablecoin thường có spread thấp nhất." },
                  { question: "Sử dụng thẻ này tại Việt Nam được không?", answer: "Thẻ crypto chưa phổ biến rộng rãi tại Việt Nam; nhiều người dùng chuyển đổi crypto sang VND qua P2P trước khi chi tiêu. Đánh giá khả năng sử dụng, truy cập ATM và trải nghiệm chi tiêu." },
                  { question: "Tỷ lệ cashback và thưởng thế nào?", answer: "Cấu trúc cashback: tỷ lệ hoàn tiền theo chi tiêu, yêu cầu staking, token thưởng và điều kiện sử dụng." }
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
