import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `India Crypto Regulation Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to cryptocurrency regulation in India. RBI stance, SEBI oversight, VDA taxation, 30% tax and 1% TDS rules, and the evolving legal framework for Indian crypto users.",
  keywords: [
    "India crypto regulation",
    "RBI cryptocurrency",
    "SEBI crypto",
    "crypto laws India",
    "VDA regulation India",
    "crypto ban India",
  ],
};

export default function CryptoRegulationIndiaPage() {
  return (
    <LearnPageLayout
      title="India Crypto Regulation: Complete Guide"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="14 min"
      intro="India's relationship with cryptocurrency has been turbulent, swinging between proposed bans and regulatory acceptance. While the Supreme Court struck down the RBI's crypto banking ban in 2020, the government introduced one of the world's strictest tax regimes for Virtual Digital Assets (VDAs) in 2022. Comprehensive crypto legislation remains pending, but India has been actively participating in global regulatory discussions through the G20. This guide covers the current legal status, tax framework, and regulatory outlook for crypto in India."
      toc={[
        { id: "legal-status", title: "Legal Status of Crypto in India", level: 2 },
        { id: "rbi-stance", title: "RBI's Position on Cryptocurrency", level: 2 },
        { id: "tax-framework", title: "The 30% Tax and 1% TDS Framework", level: 2 },
        { id: "exchanges-compliance", title: "Exchange Compliance and FIU Registration", level: 2 },
        { id: "sebi-role", title: "SEBI and Securities Classification", level: 2 },
        { id: "digital-rupee", title: "Digital Rupee (e-RUPI) CBDC", level: 2 },
        { id: "future-regulation", title: "Future Regulatory Outlook", level: 2 },
      ]}
      faqs={[
        {
          question: "Is cryptocurrency legal in India?",
          answer:
            "Cryptocurrency is not banned in India, but it operates in a regulatory gray area. There is no specific law that prohibits buying, selling, or holding crypto. The Supreme Court struck down the RBI's banking ban in 2020. The government has imposed strict taxes on VDA transactions (30% on gains, 1% TDS) which implicitly recognizes crypto activity. However, comprehensive regulatory legislation is still pending.",
        },
        {
          question: "Has India banned cryptocurrency?",
          answer:
            "No. Despite repeated reports and rumors, India has not banned cryptocurrency. The RBI issued a banking circular in 2018 prohibiting banks from servicing crypto businesses, but the Supreme Court overturned this in March 2020. While a proposed ban was reportedly considered, the government chose taxation over prohibition, introducing the VDA tax framework in 2022.",
        },
        {
          question: "What are the tax rates on crypto in India?",
          answer:
            "Gains from Virtual Digital Assets are taxed at a flat 30% (plus surcharge and cess, approximately 31.2% effective rate) under Section 115BBH. Additionally, a 1% TDS is deducted at source on all VDA transfers above INR 10,000. Losses from one VDA cannot be offset against gains from another VDA or any other income source.",
        },
        {
          question: "Which Indian crypto exchanges are compliant?",
          answer:
            "Major Indian exchanges including WazirX, CoinDCX, ZebPay, and CoinSwitch have registered with the Financial Intelligence Unit (FIU-IND) for AML compliance. In early 2024, the FIU blocked access to several international exchanges (including Binance and KuCoin) that were not registered. These platforms subsequently registered to restore service.",
        },
        {
          question: "What is India's stance on crypto through the G20?",
          answer:
            "During its G20 presidency in 2023, India pushed for a coordinated global approach to crypto regulation. India supported the IMF-FSB Synthesis Paper on crypto-asset regulation, which recommends comprehensive regulatory frameworks rather than outright bans. India has advocated for global standards on cross-border crypto oversight, anti-money-laundering, and information sharing.",
        },
      ]}
      relatedArticles={[
        { title: "Crypto Taxes in India", href: "/taxes/learn/crypto-taxes-india", category: "Taxes" },
        { title: "Crypto Regulation Overview", href: "/learn/crypto-regulation", category: "Learn" },
        { title: "Singapore Crypto Regulation", href: "/learn/crypto-regulation-singapore", category: "Learn" },
      ]}
    >
      <h2 id="legal-status">Legal Status of Crypto in India</h2>
      <p>
        Cryptocurrency exists in a regulatory gray area in India. It is neither explicitly legal
        nor illegal. The government has not passed comprehensive crypto legislation, but it has
        implicitly recognized crypto through its tax framework. The introduction of the 30% tax
        on VDA gains and 1% TDS in the 2022 Union Budget effectively acknowledged crypto as a
        taxable asset class. However, the absence of a dedicated regulatory framework means
        investor protections are limited.
      </p>
      <p>
        The Cryptocurrency and Regulation of Official Digital Currency Bill, which was listed
        in Parliament in 2021, has not been tabled. The government has indicated it prefers to
        wait for international consensus on crypto regulation before finalizing domestic
        legislation, making India&apos;s active participation in G20 and FATF discussions particularly
        relevant.
      </p>

      <h2 id="rbi-stance">RBI&apos;s Position on Cryptocurrency</h2>
      <p>
        The Reserve Bank of India has consistently expressed skepticism about private
        cryptocurrencies. In 2018, the RBI prohibited regulated financial entities from providing
        services to crypto businesses, effectively cutting off banking access. The Supreme Court
        struck down this ban in March 2020 in the landmark Internet and Mobile Association of India
        v. RBI case, ruling that the blanket ban was disproportionate. The RBI has continued to
        voice concerns about crypto&apos;s impact on financial stability and monetary policy.
      </p>

      <h2 id="tax-framework">The 30% Tax and 1% TDS Framework</h2>
      <p>
        The VDA tax framework introduced in the 2022 Union Budget is one of the strictest in the
        world. Section 115BBH imposes a flat 30% tax on all VDA gains with no deductions except
        cost of acquisition. Section 194S requires 1% TDS on transfers above INR 10,000. Losses
        cannot be offset against gains from other VDAs or any other income. This framework was
        designed to discourage speculative trading and increase transparency, and it has
        significantly impacted trading volumes on Indian exchanges.
      </p>

      <h2 id="exchanges-compliance">Exchange Compliance and FIU Registration</h2>
      <p>
        In March 2023, the government brought VDA service providers under the Prevention of
        Money Laundering Act (PMLA) and required them to register with the Financial Intelligence
        Unit (FIU-IND). All crypto exchanges, whether domestic or international, must register
        with FIU-IND to serve Indian customers. In early 2024, the FIU issued compliance
        notices and blocked access to several unregistered international exchanges, demonstrating
        enforcement capability.
      </p>

      <h2 id="sebi-role">SEBI and Securities Classification</h2>
      <p>
        The Securities and Exchange Board of India (SEBI) has expressed interest in regulating
        certain aspects of the crypto market, particularly crypto assets that function as securities
        or investment contracts. In consultation responses, SEBI has suggested a multi-regulator
        approach where different aspects of crypto fall under different authorities (SEBI for
        securities-like tokens, RBI for stablecoins and payment tokens, and the Department of
        Telecommunications for technical aspects). A formal regulatory assignment has not yet
        been made.
      </p>

      <h2 id="digital-rupee">Digital Rupee (e-RUPI) CBDC</h2>
      <p>
        The RBI launched a pilot for its Central Bank Digital Currency (CBDC), the Digital Rupee
        or e-Rupee, in late 2022. The pilot includes both wholesale (e-R-W for interbank
        settlements) and retail (e-R-R for public use) versions. The Digital Rupee is intended
        as a digital form of the Indian Rupee, distinct from private cryptocurrencies. The RBI
        views the CBDC as potentially reducing the need for private crypto while providing
        the efficiency benefits of digital currency.
      </p>

      <h2 id="future-regulation">Future Regulatory Outlook</h2>
      <p>
        India&apos;s crypto regulatory future likely depends on several factors: the outcome of
        global regulatory consensus efforts through the G20, IMF, and FSB; the RBI&apos;s evolving
        stance as the CBDC pilot expands; and political dynamics around the crypto industry&apos;s
        growing user base (estimated at 75-100 million users). Industry lobbying for more
        favorable tax treatment (particularly the no-loss-offset rule) continues. The most
        likely path is gradual formalization through amendments to existing financial laws
        rather than a single comprehensive crypto bill.
      </p>
      <p>
        For Indian crypto users, the practical advice is clear: use FIU-registered exchanges,
        maintain meticulous transaction records, and comply with the 30% VDA tax and TDS
        requirements. Despite the strict tax regime, crypto remains legal and accessible in
        India. Staying informed about regulatory developments through industry bodies like
        the Bharat Web3 Association will help navigate the evolving landscape.
      </p>
    </LearnPageLayout>
  );
}
