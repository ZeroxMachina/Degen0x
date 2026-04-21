import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Tensor vs Magic Eden — Hướng Dẫn NFT và Phân Tích Thị Trường 2026 | Degen0x",
  description: "Tensor vs Magic Eden: phân tích bộ sưu tập, xu hướng thị trường, hướng dẫn mint và hệ sinh thái NFT 2026.",
  openGraph: {
    type: "article",
    title: "Tensor vs Magic Eden — Hướng Dẫn NFT và Phân Tích Thị Trường 2026",
    description: "Tensor vs Magic Eden: phân tích bộ sưu tập, xu hướng thị trường, hướng dẫn mint và hệ sinh thái NFT 2026.",
    url: "https://degen0x.com/vi/nfts/compare/tensor-vs-magic-eden",
    locale: "vi_VN",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Tensor vs Magic Eden — Hướng Dẫn NFT và Phân Tích Thị Trường 2026", description: "Tensor vs Magic Eden: phân tích bộ sưu tập, xu hướng thị trường, hướng dẫn mint và hệ sinh thái NFT 2026." },
  alternates: {
    canonical: "/vi/nfts/compare/tensor-vs-magic-eden",
    languages: { "en": "/nfts/compare/tensor-vs-magic-eden", "tr": "/tr/nfts/compare/tensor-vs-magic-eden", "vi": "/vi/nfts/compare/tensor-vs-magic-eden", "pt-BR": "/pt-br/nfts/compare/tensor-vs-magic-eden", "x-default": "/nfts/compare/tensor-vs-magic-eden" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: "https://degen0x.com/vi" },
    { "@type": "ListItem", position: 2, name: "NFT", item: "https://degen0x.com/vi/nfts" },
    { "@type": "ListItem", position: 3, name: "Tensor vs Magic Eden — Hướng Dẫn NFT và Phân Tích Thị Trường" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Tensor vs Magic Eden — Hướng Dẫn NFT và Phân Tích Thị Trường 2026",
  description: "Tensor vs Magic Eden: phân tích bộ sưu tập, xu hướng thị trường, hướng dẫn mint và hệ sinh thái NFT 2026.",
  url: "https://degen0x.com/vi/nfts/compare/tensor-vs-magic-eden",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Đầu tư NFT còn có lãi không?", "answer": "Thị trường NFT 2026 khác biệt so với 2021-2022. Bong bóng đầu cơ giảm nhưng utility NFT (game, identity, membership), nghệ thuật số và RWA tokenization tiếp tục tăng trưởng." },
  { "question": "Làm sao tránh NFT giả?", "answer": "Phương pháp bảo vệ: kiểm tra badge xác minh, liên kết chính thức, xác nhận địa chỉ contract, nghiên cứu cộng đồng và cảnh giác với giá quá tốt." },
  { "question": "Tối ưu phí gas khi mint NFT?", "answer": "Mint vào giờ thấp điểm, sử dụng mạng L2 (Arbitrum, Base, Polygon), batch transaction và tối ưu gas limit." },
  { "question": "Royalty NFT hoạt động thế nào?", "answer": "Cơ chế royalty: tự động trả cho creator gốc mỗi lần bán lại (thường 2.5-10%). Từ 2024 một số sàn chuyển sang mô hình tùy chọn." }
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
              { label: "NFT", href: "/vi/nfts" },
              { label: "Tensor vs Magic Eden" }
          ]} />
          <article className="mt-8" lang="vi">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇻🇳 Tiếng Việt</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Trung Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Tensor vs Magic Eden — Hướng Dẫn NFT và Phân Tích Thị Trường 2026</h1>
            <p className="text-lg text-[#8b949e] mb-10">Tensor vs Magic Eden: phân tích bộ sưu tập, xu hướng thị trường, hướng dẫn mint và hệ sinh thái NFT 2026.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Phân Tích Thị Trường NFT</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Phân tích thị trường NFT 2026 cho Tensor vs Magic Eden: tổng khối lượng giao dịch, người dùng hoạt động, bộ sưu tập phổ biến và xu hướng giá. Cộng đồng NFT và game blockchain tại Việt Nam rất sôi động, đặc biệt sau sự bùng nổ của Axie Infinity.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Cơ Sở Kỹ Thuật và Tiêu Chuẩn</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Hạ tầng kỹ thuật NFT: tiêu chuẩn ERC-721 và ERC-1155, lưu trữ metadata (on-chain vs IPFS), cơ chế royalty và chuyển NFT cross-chain.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Hướng Dẫn Mua Bán và Mint</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Chiến lược mua bán NFT liên quan đến Tensor vs Magic Eden: mint đúng thời điểm, phân tích floor price, công cụ rarity, tối ưu gas và động lực thị trường thứ cấp.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Đánh Giá Rủi Ro</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Rủi ro đầu tư NFT: vấn đề thanh khoản (không tìm được người mua), lừa đảo (bộ sưu tập giả), vấn đề sở hữu trí tuệ, thao túng thị trường và rủi ro nền tảng.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {[
                  { question: "Đầu tư NFT còn có lãi không?", answer: "Thị trường NFT 2026 khác biệt so với 2021-2022. Bong bóng đầu cơ giảm nhưng utility NFT (game, identity, membership), nghệ thuật số và RWA tokenization tiếp tục tăng trưởng." },
                  { question: "Làm sao tránh NFT giả?", answer: "Phương pháp bảo vệ: kiểm tra badge xác minh, liên kết chính thức, xác nhận địa chỉ contract, nghiên cứu cộng đồng và cảnh giác với giá quá tốt." },
                  { question: "Tối ưu phí gas khi mint NFT?", answer: "Mint vào giờ thấp điểm, sử dụng mạng L2 (Arbitrum, Base, Polygon), batch transaction và tối ưu gas limit." },
                  { question: "Royalty NFT hoạt động thế nào?", answer: "Cơ chế royalty: tự động trả cho creator gốc mỗi lần bán lại (thường 2.5-10%). Từ 2024 một số sàn chuyển sang mô hình tùy chọn." }
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
